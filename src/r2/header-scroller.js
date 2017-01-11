
export default class HeaderScroller{
  /**
   * `HeaderScroller` is a class that listens to `iframe`'s window.scroll event and scrolls the `header` when the iframe is scrolled
   * @param {Window} win - iframe.contentWindow
   * @param {HTMLElement} header - header element that needs to be scrolled
   * */
  constructor(win,header){
    win.requestAnimationFrame = win.requestAnimationFrame || win.mozRequestAnimationFrame || win.webkitRequestAnimationFrame || win.msRequestAnimationFrame;

    this._meta = {
      ticking:false,
      offsetHeight:null,
      header:null,
      lastScrollY:0,
      window:win
    };
    this.header = header;
  }

  get header(){
    return this._meta.header;
  }
  set header(val){
    let offset;
    if(this.header!=null){
      offset = `${this._meta.header.style.top}px`;
      this._meta.header.style.top = "0px";
      this._meta.header.classList.remove('scrollable-header');
      this.detachListeners();
    }
    this._meta.header = val;
    this._meta.header.style.top = offset;
    this._meta.header.classList.add('scrollable-header');
    this._meta.offsetHeight = this._meta.header.offsetHeight; //calculate header height
    this._meta.window.document.querySelector('body').style.marginTop = this._meta.header.offsetHeight + "px";
    this.attachListeners();
  }

  requestTick(callback){
    if(!this._meta.ticking) {
      requestAnimationFrame(callback);
      this._meta.ticking = true;
    }
  }

  attachListeners(){
    let win = this._meta.window;
    win.addEventListener("scroll", this.scrollFixed.bind(this), false); // attach a resize listener to resize the header
    //win.addEventListener("scroll", this.resizeFixed.bind(this), false); // attach a resize listener to resize the header
  }
  detachListeners(){
    let win = this._meta.window;
    win.removeEventListener("scroll", this.scrollFixed); // attach a resize listener to resize the header
    //win.removeEventListener("scroll", this.resizeFixed); // attach a resize listener to resize the header
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
