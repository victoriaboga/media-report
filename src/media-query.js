/**
 * Created by IvanP on 13.12.2016.
 */

export default class MediaQuery{
  /**
   * `MediaQuery` helps perform actions when CSS query is matched instead of polling the window width, when it's not so important, just matching the query is important
   * @param {Object} options
   * @param {Object} options.query - The CSS media query to evaluate.
   * @param {Boolean} options.full - If true, the query attribute is assumed to be a complete media query string rather than a single media feature.
   * @param {Function} callback - function to execute when matching is evaluated
   * @param {Object|Function} context - context in which the `callback` function needs to be executed
   * */
  constructor(options,callback,context=this){
    let {query,full=false} = options;
    this.queryMatches = false;
    this.full = full;
    this._mq = null;
    this._callback = callback;
    this._context = context;
    this.query=query;
  }

  _onMatch(mq){
    this.queryMatches = mq.matches;
    return this._callback.call(this._context,mq.matches)
  }

  get query(){
    return this._query;
  }

  set query(val){
    this._query = val;
    this._remove();
    let query = this.query;
    if (!query) {
      return;
    }
    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }
    this._mq = window.matchMedia(query);
    this.queryMatches = this._mq.matches;
    this._add();
  }

  _add(){
    if (this._mq) {
      this._mq.addListener(this._onMatch.bind(this));
    }
  }

  _remove() {
    if (this._mq) {
      this._mq.removeListener(this._onMatch);
    }
    this._mq = null;
  }
}
