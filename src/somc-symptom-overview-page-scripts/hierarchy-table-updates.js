/**
 * Created by EkaterinaT on 20.12.2017.
 */
/* scripts for report SoMC: Issue Tracking Report	(162743) on Euro site, Symptom Overview page */

// The below set of functions implements the following to project cards:
// - hides empty project cards
// - applies Hierarchy style to tables inside cords
// - adds drill down functionality
// - add Managemnt Notes functionality

//upgradeHierarchyTable - creates fancy hierarchy style
//based on https://github.com/ConfirmitASA/r-table-hierarchy.git
function upgradeHierarchyTable(table, headers){
  try{
    var upgradedTable = new Reportal.TAhierarchy(
      {
        source: table,
        hierarchy: categorySymptomHierarchy, // object catSympTableHeaders is populated by server-side reportal scripting addJSHierarchyObjectToThePage
        rowheaders: headers, // current table's headers (object generated with reportal scripting)
        search:{enabled: true},
        clearLinks:false,
        sorting:{enabled:true},
        floatingHeader:{enabled:false} // behaves aggressive when many rows
      }
    )
  }
  catch(e){}

  return upgradedTable;
}

// apply r2 hierarchy style to tables inside cards if there are not empty cards
function applyHierarchyStyleToTable(){

  if(catSympTableHeaders) // variable catSympTableHeaders is populated by server-side reportal scripting (addJSHierarchyObjectToThePage)
  {
    var tableWithHierarchy = document.querySelectorAll('table.reportal-hierarchy-table');
    for(var i=0;i<catSympTableHeaders.length;i++)
      upgradeHierarchyTable(tableWithHierarchy[i],catSympTableHeaders[i]);
  }

  // ---------------------- default sorting by counts ---------------------------
  var countCol =document.querySelectorAll('.material-card--content .reportal-hierarchy-table:first-child tr td.sortable:last-child');
  for(var i=0;i<countCol.length;i++)
    countCol[i].click();
}

// save project and symptom labels into drilldown parameter input and perform drill down
function saveMiddleLevelDrillDownParam(inputWrapperID,btnWrapperID){

// inputWrapperID - wrapper for input for text parameter
// btnWrapperID - wrapper for butoon to click on and jump to another the page

  var card = document.querySelectorAll('.material-card');

  for(var i=0;i<card.length;i++){ //loop through cards
    card[i].onclick = function(event){
      var all_text= event.target; // check what part of the card is clicked
      if(all_text.className.indexOf('reportal-row-label')>-1) // if category/symptom clicked then drill down
      {
        var mn_text = all_text.querySelector('span')!=null ? all_text.querySelector('span').textContent : ''; // fill hidden parameter with name of category or symptom
        var symptomName = all_text.textContent.replace(mn_text,'');
        var projectName = this.querySelector('.material-card--title .projectName').textContent;

        if(symptomName.length>0 && projectName.length>0){
          document.querySelector(inputWrapperID+' input').value = projectName+'^'+symptomName;
          document.querySelector(btnWrapperID+' input').click();
        }
      }

    }
  }
}

// add Management Notes
function addMNasTips(){

  // managemnt notes are taken from a hit list on the page

  var mn_table = document.querySelector('#mn_hitlist .yui3-datatable-table .yui3-datatable-data'); // hit list rows with data
  var mn_note = mn_table.querySelectorAll('.yui3-datatable-col-Notes'); // column with notes
  var mn_project = mn_table.querySelectorAll('.yui3-datatable-col-Project');// column with projects
  var mn_symp = mn_table.querySelectorAll('.yui3-datatable-col-issue'); // column with symptoms
  var mn_cat = mn_table.querySelectorAll('.yui3-datatable-col-Category'); // column with symptoms

  var mn_object = {}; // create object for easy search of a note {"symptom;project":note}
  var catsWithMN_object = {}; // categories having symptoms with management notes

  //loop through mn notes and add to the object
  for(var i=0;i<mn_symp.length;i++){
    mn_object[mn_symp[i].innerHTML+";"+mn_project[i].innerHTML] = mn_note[i].innerHTML;
    catsWithMN_object[mn_cat[i].innerHTML+';'+mn_project[i].innerHTML]=null;
  }

  var cards = document.querySelectorAll('.material-card');// get all cards

  for(var j=0;j<cards.length;j++) // loop by cards
  {

    if(cards[j].querySelector('.reportal-hierarchy-table')){

      var projectName = cards[j].querySelector('.material-card--title .projectName').innerHTML;
      var rowHeaders = cards[j].querySelectorAll('tbody tr td:first-child span'); // symptoms in rows

      for(var i=0;i<rowHeaders.length;i++){
        var headerText = rowHeaders[i].innerText+';'+projectName; // assemble key to look for in the object; drilldown off
        if(mn_object.hasOwnProperty(headerText)){ // create and add the tool tip
          var hoverOver = document.createElement('span');
          hoverOver.className = 'mnContent';
          hoverOver.innerHTML = mn_object[headerText];
          rowHeaders[i].parentNode.appendChild(hoverOver);
          rowHeaders[i].className += ' thumbnail';
          //rowHeaders[i].parentNode.className += ' thumbnail2';
          delete mn_object[headerText]; // remove used note
        }
        if(catsWithMN_object.hasOwnProperty(headerText) && rowHeaders[i].className.indexOf('hasSymptomsWithNotes')<0)
          rowHeaders[i].className += ' hasSymptomsWithNotes';

      }
    }

  }
}

export default function renderMiddleLevel(){

  // ---------------------- hide empty project cards ----------------------
  var tables = document.querySelectorAll('.material-card--content');
  for(var i=0;i<tables.length;i++)
    if(tables[i].innerHTML == '')
      tables[i].parentElement.style.display = 'none';

  applyHierarchyStyleToTable();
  saveMiddleLevelDrillDownParam('#MiddleLevel_drilldownProjectInput','#MiddleLevel_drilldownSubmitBtn');

  // apply Management Notes when hit list is loaded
  Y.Global.on('hitlistloaded', addMNasTips);
}
