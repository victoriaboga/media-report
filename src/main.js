require('./main.css');
import MDHierarchy from "./hierarchy/hierarchy";
import SideNav from "./side-nav/side-nav";
import MediaQuery from "./media-query";

export default class HeaderScroller{
  constructor(win,header){
    this.header = header;
    //TODO: add functionality to dynamically add classes to body and header to make them float off the page.
    this._meta = {
      lastScrollY:0,
      ticking:false,
      offsetHeight:header.offsetHeight,
      window:win
    };
    win.document.querySelector('body').style.marginTop =  header.offsetHeight + "px";

    win.requestAnimationFrame = win.requestAnimationFrame || win.mozRequestAnimationFrame || win.webkitRequestAnimationFrame || win.msRequestAnimationFrame;

    win.addEventListener("scroll", ()=>{this.scrollFixed()}, false); // attach a resize listener to resize the header
    win.addEventListener("scroll", ()=>{this.resizeFixed()}, false); // attach a resize listener to resize the header
    this.mq = new MediaQuery({query:"max-width:760px"},(matches)=>{console.log(matches,this)},this);

  }

  requestTick(callback){
    if(!this._meta.ticking) {
      requestAnimationFrame(callback);
      this._meta.ticking = true;
    }
  }



  /**
   * Calculates widths for all columns in the fixed header based on the `source`
   * */
  resizeFixed(){
    this.requestTick(()=>{
      this._meta.offsetHeight = this.header.offsetHeight;
      this._meta.ticking=false;
      this.scrollFixed(); // to compensate top offset in case after resize the table is less in height and top has changed
    })
  }

  /**
   * Displays a fixed header when the table header is scrolled off the screen
   * */
  scrollFixed() {
    //console.log(this._meta.window);
    this._meta.lastScrollY = this._meta.window.pageYOffset;
    this.requestTick(this.constructor._scrollCallback.bind(this));
  }

  static _scrollCallback(){
    let offset = this._meta.lastScrollY,
        offsetTop = this._meta.offsetHeight;
      this.header.style.top=-offset+'px';
    this._meta.ticking=false;
  }
}

window.addEventListener('DOMContentLoaded',()=>{
    let h = new MDHierarchy(); //setup listeners for hierarchy component on open and scrim click
  let r2 = document.querySelector('.r2dashboard');
  if(r2){
    r2.addEventListener('load',(e)=>{
      console.log('r2 iframe loaded');
      let r2window = e.target.contentWindow;
      let rHeader = document.querySelector('.reportal-bar');
      rHeader.classList.add('reportal-bar--fixed');
      if(rHeader){
        let r2d2 = new HeaderScroller(r2window,rHeader);
        console.log(r2d2)
      }
    })
  }
  new SideNav();
});
