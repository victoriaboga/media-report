/**
 * Created by IvanP on 07.12.2016.
 */

class MDHierarchy {
  constructor(){
    let btn = document.querySelector('.dd-target-button');
    if(btn){

      btn.addEventListener('click',e=>{
        this.constructor.noScroll();
        let dd = btn.parentNode.querySelector('.dd-drilldown');
        if(!dd){
          setTimeout(()=>{
            dd = btn.parentNode.querySelector('.dd-drilldown');
            if(dd){
              dd.addEventListener('click', closE=>{
                let cancel = dd.querySelector('.dd-cancel'),
                    apply = dd.querySelector('.dd-button-select');
                if(closE.path[0]==dd || closE.path[0]==cancel || closE.path[0]==apply){
                  if(closE.path[0]==dd){cancel.click();}
                  this.constructor.scroll();
                }
              })
            }
          },300);
        }
      })
    }
  }
  static noScroll(){
    document.querySelector('body').setAttribute('style','overflow:hidden !important');
  }
  static scroll(){
    document.querySelector('body').setAttribute('style','');
  }
}

export default MDHierarchy;
