'use strict';

/* IE polyfill */

/*
 TODO:
 X Maybe account for defaults: color: var(--header-color, blue);
 - Verify cross domain working or not (it is working from dropbox)
 - Option to wait to apply anything until all <link>s are parsed or inject what we have and update as each <link> returns
 - Need to test on a more complex CSS file
 - Option to save parsed file in local/session storage so there isn't a delay on additional page loads. Could only do it for links (with URLs to use as keys) and style blocks with IDs of some sort
 - Need to test more complex values like rgba(255,0,0,0.5); and something with !important
 - Try multiple links
 - Local links
 - Ajax driven site, or CSS added later the top of the stack
 */
export class CSSvarPolyfill {
  constructor() {
    // first lets see if the browser supports CSS variables
    // No version of IE supports window.CSS.supports, so if that isn't supported in the first place we know CSS variables is not supported
    // Edge supports supports, so check for actual variable support
    if (window.CSS && window.CSS.supports && window.CSS.supports('(--foo: red)')) {
      // this browser does support variables, abort
      console.log('your browser supports CSS variables, aborting and letting the native support handle things.');
      return;
    } else {
      // edge barfs on console statements if the console is not open... lame!
      console.log('no support for you! polyfill all (some of) the things!!');
      document.querySelector('body').classList.add('cssvars-polyfilled');
    }


    // start things off
    CSSvarPolyfill.findCSS();
    CSSvarPolyfill.updateCSS();
  }

  static ratifiedVars = {}

  static varsByBlock  = {}

  static oldCSS       = {}

  // find all the css blocks, save off the content, and look for variables
  static findCSS() {
    let styleBlocks = document.querySelectorAll('style:not(.inserted),link[type="text/css"]');

    // we need to track the order of the style/link elements when we save off the CSS, set a counter
    let counter = 1;

    // loop through all CSS blocks looking for CSS variables being set
    [].forEach.call(styleBlocks, function (block) {
      console.log(block.nodeName);
      let theCSS = undefined;
      if (block.nodeName === 'STYLE') {
        //console.log("style");
        theCSS = block.innerHTML;
        CSSvarPolyfill.findSetters(theCSS, counter);
      } else if (block.nodeName === 'LINK') {
        //console.log("link");
        CSSvarPolyfill.getLink(block.getAttribute('href'), counter, function (counter, request) {
          CSSvarPolyfill.findSetters(request.responseText, counter);
          CSSvarPolyfill.oldCSS[counter] = request.responseText;
          CSSvarPolyfill.updateCSS();
        });
        theCSS = '';
      }
      // save off the CSS to parse through again later. the value may be empty for links that are waiting for their ajax return, but this will maintain the order
      CSSvarPolyfill.oldCSS[counter] = theCSS;
      counter++;
    });
  }

  // find all the "--variable: value" matches in a provided block of CSS and add them to the master list
  static findSetters(theCSS, counter) {
    //console.log(theCSS);
    CSSvarPolyfill.varsByBlock[counter] = theCSS.match(/(--.+:.+;)/g);
  }

  // run through all the CSS blocks to update the variables and then inject on the page
  static  updateCSS() {
    // first lets loop through all the variables to make sure later vars trump earlier vars
    CSSvarPolyfill.ratifySetters(CSSvarPolyfill.varsByBlock);

    // loop through the css blocks (styles and links)
    for (let curCSSID in CSSvarPolyfill.oldCSS) {
      if (window.CP.shouldStopExecution(1)) {
        break;
      }
      console.log("curCSS:", CSSvarPolyfill.oldCSS[curCSSID]);
      let newCSS = CSSvarPolyfill.replaceGetters(CSSvarPolyfill.oldCSS[curCSSID], CSSvarPolyfill.ratifiedVars);
      // put it back into the page
      // first check to see if this block exists already
      if (document.querySelector('#inserted' + curCSSID)) {
        console.log("updating")
        document.querySelector('#inserted' + curCSSID).innerHTML = newCSS;
      } else {
        console.log("adding");
        let style       = document.createElement('style');
        style.type      = 'text/css';
        style.innerHTML = newCSS;
        style.classList.add('inserted');
        style.id = 'inserted' + curCSSID;
        document.getElementsByTagName('head')[0].appendChild(style);
      }
    }
    window.CP.exitedLoop(1);

  }

  // parse a provided block of CSS looking for a provided list of variables and replace the --let-name with the correct value
  static replaceGetters(curCSS, varList) {
    console.log(varList);
    for (let theVar in varList) {
      if (window.CP.shouldStopExecution(2)) {
        break;
      }
      console.log(theVar);
      // match the variable with the actual variable name
      let getterRegex = new RegExp('let\\(\\s*' + theVar + '\\s*\\)', 'g');
      console.log(getterRegex);
      console.log(curCSS);
      curCSS = curCSS.replace(getterRegex, varList[theVar]);

      // now check for any getters that are left that have fallbacks
      let getterRegex2 = new RegExp('let\\(\\s*.+\\s*,\\s*(.+)\\)', 'g');
      console.log(getterRegex);
      console.log(curCSS);
      let matches = curCSS.match(getterRegex2);
      if (matches) {
        console.log("matches", matches);
        matches.forEach(function (match) {
          console.log(match.match(/let\(.+,\s*(.+)\)/))
          // find the fallback within the getter
          curCSS = curCSS.replace(match, match.match(/let\(.+,\s*(.+)\)/)[1]);
        });
      }

      // curCSS = curCSS.replace(getterRegex2,varList[theVar]);
    }
    window.CP.exitedLoop(2);

    console.log(curCSS);
    return curCSS;
  }

  // determine the css variable name value pair and track the latest
  static ratifySetters(varList) {
    console.log("varList:", varList);
    // loop through each block in order, to maintain order specificity
    for (let curBlock in varList) {//if (window.CP.shouldStopExecution(3)){break;}
      let curVars = varList[curBlock];
      console.log("curVars:", curVars);
      // loop through each let in the block
      curVars.forEach(function (theVar) {
        console.log(theVar);
        // split on the name value pair separator
        let matches = theVar.split(/:\s*/);
        console.log(matches);
        // put it in an object based on the varName. Each time we do this it will override a previous use and so will always have the last set be the winner
        // 0 = the name, 1 = the value, strip off the ; if it is there
        CSSvarPolyfill.ratifiedVars[matches[0]] = matches[1].replace(/;/, '');
      });
    }
    window.CP.exitedLoop(3);

    console.log(ratifiedVars);
  }

  // get the CSS file (same domain for now)
  static getLink(url, counter, success) {
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.overrideMimeType('text/css;');
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        console.log(request.responseText);
        if (typeof success === 'function') {
          success(counter, request);
        }
      } else {
        // We reached our target server, but it returned an error
        console.warn('an error was returned from:', url);
      }
    };

    request.onerror = function () {
      // There was a connection error of some sort
      console.warn('we could not get anything from:', url);
    };

    request.send();
  }
}

// hash = function(s){
//   return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
// }
new CSSvarPolyfill();

//JS - set CSS variables
document.documentElement.style.setProperty('--primary-color', pConfig.primaryColor);
document.documentElement.style.setProperty('--secondary-color', pConfig.secondaryColor);

var styles = getComputedStyle(document.documentElement);
var value  = String(styles.getPropertyValue('--primary-color')).trim();
console.log(value)
if (value != "#FFF") document.documentElement.style.setProperty('--menu-text-color', '#FFF');

// stuff for hiding documentation for Opera Mini testing
/*document.querySelector('.hide-docs').addEventListener('click', function (event) {
 event.preventDefault();
 document.querySelector('body').classList.toggle('hide-the-docs');
 });*/
