/**
 * Created by IvanP on 13.12.2016.
 */
/**
 * `MediaQuery` helps perform actions when CSS query is matched instead of polling the window width, when it's not so important, just matching the query is important
 *
 * ``` javascript
 * function onMatch(matches){
 *  if(matches){
 *    // do what you need when the mediaquery is matched
 *  } else {
 *     // do what you need when the media query is not matched
 *  }
 * }
 *
 *  var mq = new MediaQuery({query:"max-width:760px"},onMatch,this);
 *
 *  //at any time you may check whether it matches the query:
 *
 *  mq.matches //true or false
 * ```
 *
 * @param {Object} options
 * @param {Object} options.query - The CSS media query to evaluate.
 * @param {Boolean} [options.full=false] - If true, the query attribute is assumed to be a complete media query string rather than a single media feature.
 * @param {Function} callback - function to execute when matching is evaluated
 * @param {Object|Function} [context=this] - context in which the `callback` function needs to be executed
 *
 * @property {Boolean} matches - whether the query matches the window width. Readonly.
 * @property {Boolean} full - If true, the query attribute is assumed to be a complete media query string rather than a single media feature.
 * @property {String} query - The CSS media query to evaluate.
 * */
class MediaQuery{
  constructor(options,callback,context=this){
    let {query,full=false} = options;
    this._matches = false;
    this.full = full;
    this._mq = null;
    this._callback = callback;
    this._context = context;
    this._bound = this._onMatch.bind(this);
    this.query=query;
  }

  _onMatch(mq){
    this._matches = mq.matches;
    return this._callback.call(this._context,mq.matches)
  }

  get matches(){
    return this._matches;
  }

  get query(){
    return this._query;
  }

  set query(val){
    this._query = val;
    this.constructor.remove(this._mq,this._bound);
    let query = this.query;
    if (!query) {
      return;
    }
    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }
    this._mq = window.matchMedia(query);
    this._onMatch(this._mq);
    this.constructor.add(this._mq,this._bound);
  }

  static add(mq,bound){
    if (mq) {
      mq.addListener(bound);
    }
  }

  static remove(mq,bound) {
    if (mq) {
      mq.removeListener(bound);
    }
    mq = null;
  }
}
export default MediaQuery
