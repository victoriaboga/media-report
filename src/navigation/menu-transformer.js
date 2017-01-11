import SideNav from "../side-nav/side-nav";
import MediaQuery from "media-query";
import HeaderScroller from "../r2/header-scroller";


class MenuTransformer{
  /**
   * This class sets up a listener to detect whether the viewport matches the max-width set up in `breakpoint` and based on existence of an integration-iframe
   * sets up heade scrollers or just swaps the header into horizontal or sidebar navigation modes
   * @param {Number} [breakpoint=768] - max-width of device viewport that is considered to be a mobile device and hosts a mobile sidebar.
   * */
  constructor(breakpoint=768){
    this.iframe = document.querySelector('.r2dashboard');

    this.header = document.querySelector('.reportal-bar');

    // if it's integration page - do scrolling
    if(this.iframe){
      document.querySelector('.body-wrapper').classList.add('integration-mode'); //reverse layout to make header appear above iframe

      this.pScroller = new Promise((resolve,reject)=>{
        let scroller;
        if(this.iframe.contentWindow.location.href!='about:blank'){
          scroller = this.scroller(this.iframe.contentWindow);


          resolve(scroller); //resolve to the instance of `HeaderScroller`
        } else {
          this.iframe.addEventListener('load',e=>{
            scroller = this.scroller(e.target.contentWindow); //initialise scroller
            resolve(scroller); //resolve to the instance of `HeaderScroller`
          });
        }
      });
    }
    this.sidenav = new SideNav();

    this.mq = new MediaQuery({query:`max-width:${breakpoint}px`},(matches)=>{
      console.log(matches);
      if(!matches){ // if desktop
        this.swapHeader(document.querySelector('.reportal-bar'));
        this.sidenav.removeEventListeners();
      } else { // if mobile
        this.swapHeader(document.querySelector('.reportal-header'));
        this.sidenav.addEventListeners();
      }
    },this);
  }

  /**
   * Function that sets this.header to a new HTMLElement and does the same for HeaderScroller
   * */
  swapHeader(header){
    this.header = header;
    if(this.iframe && this.pScroller){
      this.pScroller.then(hs=>hs.header = header);
    }
  }


  /**
   * Function that initialises scroller on the header element
   * @param {Window} w - window object of the iframe
   * @returns {HeaderScroller} Returns `HeaderScroller` instance
   * */
  scroller(w){
    console.log('r2 iframe loaded');

    // quick hack to hide a black editor bar

    let rHeader = this.header,
      scroller;
    if(rHeader){
      scroller = new HeaderScroller(w,rHeader);
      console.log(scroller);
    }
    return scroller;
  }
}

export default MenuTransformer;
