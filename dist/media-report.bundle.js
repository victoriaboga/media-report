(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var _hierarchy = __webpack_require__(3);
	
	var _hierarchy2 = _interopRequireDefault(_hierarchy);
	
	var _menuTransformer = __webpack_require__(4);
	
	var _menuTransformer2 = _interopRequireDefault(_menuTransformer);
	
	var _sideNav = __webpack_require__(1);
	
	var _sideNav2 = _interopRequireDefault(_sideNav);
	
	var _hierarchyTableUpdates = __webpack_require__(7);
	
	var _hierarchyTableUpdates2 = _interopRequireDefault(_hierarchyTableUpdates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(8);
	
	window.Reportal = window.Reportal || {};
	window.Reportal.TransformMenuAt = _menuTransformer2.default;
	window.Reportal.SideNav = _sideNav2.default;
	window.Reportal.hierarchyUpgrade = _hierarchy2.default.upgrade;
	
	window.SOMC = window.SOMC || {};
	window.SOMC.renderMiddleLevel = _hierarchyTableUpdates2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc. All rights reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _detabinator = __webpack_require__(6);
	
	var _detabinator2 = _interopRequireDefault(_detabinator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SideNav = function () {
	  /**
	   * A class that sets up a sidebar that is dismissed on scrim-click or on swipe and is opend on hamburger-icon click
	   * */
	  function SideNav() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        _ref$showButtonEl = _ref.showButtonEl,
	        showButtonEl = _ref$showButtonEl === undefined ? document.querySelector('.js-menu-show') : _ref$showButtonEl,
	        _ref$hideButtonEl = _ref.hideButtonEl,
	        hideButtonEl = _ref$hideButtonEl === undefined ? document.querySelector('.js-menu-hide') : _ref$hideButtonEl,
	        _ref$sideNavEl = _ref.sideNavEl,
	        sideNavEl = _ref$sideNavEl === undefined ? document.querySelector('.js-side-nav') : _ref$sideNavEl,
	        _ref$sideNavContainer = _ref.sideNavContainerEl,
	        sideNavContainerEl = _ref$sideNavContainer === undefined ? document.querySelector('.js-side-nav-container') : _ref$sideNavContainer;
	
	    _classCallCheck(this, SideNav);
	
	    this.showButtonEl = showButtonEl;
	    this.hideButtonEl = hideButtonEl;
	    this.sideNavEl = sideNavEl;
	    this.sideNavContainerEl = sideNavContainerEl;
	    // Control whether the container's children can be focused
	    // Set initial state to inert since the drawer is offscreen
	    this.detabinator = new _detabinator2.default(this.sideNavContainerEl);
	    this.detabinator.inert = true;
	
	    this.showSideNav = this.showSideNav.bind(this);
	    this.hideSideNav = this.hideSideNav.bind(this);
	    SideNav.blockClicks = SideNav.blockClicks.bind(this);
	    this.onTouchStart = this.onTouchStart.bind(this);
	    this.onTouchMove = this.onTouchMove.bind(this);
	    this.onTouchEnd = this.onTouchEnd.bind(this);
	    this.onTransitionEnd = this.onTransitionEnd.bind(this);
	    this.update = this.update.bind(this);
	
	    this.startX = 0;
	    this.currentX = 0;
	    this.touchingSideNav = false;
	
	    this.supportsPassive = undefined;
	    //this.addEventListeners();
	  }
	
	  // apply passive event listening if it's supported
	
	
	  _createClass(SideNav, [{
	    key: 'applyPassive',
	    value: function applyPassive() {
	      if (this.supportsPassive !== undefined) {
	        return this.supportsPassive ? { passive: true } : false;
	      }
	      // feature detect
	      var isSupported = false;
	      try {
	        document.addEventListener('test', null, { get passive() {
	            isSupported = true;
	          } });
	      } catch (e) {}
	      this.supportsPassive = isSupported;
	      return this.applyPassive();
	    }
	  }, {
	    key: 'addEventListeners',
	    value: function addEventListeners() {
	      this.showButtonEl.addEventListener('click', this.showSideNav);
	      this.hideButtonEl.addEventListener('click', this.hideSideNav);
	      this.sideNavEl.addEventListener('click', this.hideSideNav);
	      this.sideNavContainerEl.addEventListener('click', SideNav.blockClicks);
	
	      this.sideNavEl.addEventListener('touchstart', this.onTouchStart, this.applyPassive());
	      this.sideNavEl.addEventListener('touchmove', this.onTouchMove, this.applyPassive());
	      this.sideNavEl.addEventListener('touchend', this.onTouchEnd);
	    }
	  }, {
	    key: 'removeEventListeners',
	    value: function removeEventListeners() {
	      this.showButtonEl.removeEventListener('click', this.showSideNav);
	      this.hideButtonEl.removeEventListener('click', this.hideSideNav);
	      this.sideNavEl.removeEventListener('click', this.hideSideNav);
	      this.sideNavContainerEl.removeEventListener('click', SideNav.blockClicks);
	
	      this.sideNavEl.removeEventListener('touchstart', this.onTouchStart);
	      this.sideNavEl.removeEventListener('touchmove', this.onTouchMove);
	      this.sideNavEl.removeEventListener('touchend', this.onTouchEnd);
	    }
	  }, {
	    key: 'onTouchStart',
	    value: function onTouchStart(evt) {
	      if (!this.sideNavEl.classList.contains('side-nav--visible')) return;
	      //TODO:support sidebar scrolling as well
	      this.startX = evt.touches[0].pageX;
	      this.currentX = this.startX;
	
	      this.touchingSideNav = true;
	      requestAnimationFrame(this.update);
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(evt) {
	      if (!this.touchingSideNav) return;
	
	      this.currentX = evt.touches[0].pageX;
	    }
	  }, {
	    key: 'onTouchEnd',
	    value: function onTouchEnd(evt) {
	      if (!this.touchingSideNav) return;
	
	      this.touchingSideNav = false;
	
	      var translateX = Math.min(0, this.currentX - this.startX);
	      this.sideNavContainerEl.style.transform = '';
	
	      if (translateX < 0) {
	        this.hideSideNav();
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      if (!this.touchingSideNav) return;
	
	      requestAnimationFrame(this.update);
	
	      var translateX = Math.min(0, this.currentX - this.startX);
	      this.sideNavContainerEl.style.transform = 'translateX(' + translateX + 'px)';
	    }
	  }, {
	    key: 'onTransitionEnd',
	    value: function onTransitionEnd(evt) {
	      this.sideNavEl.classList.remove('side-nav--animatable');
	      this.sideNavEl.removeEventListener('transitionend', this.onTransitionEnd);
	    }
	  }, {
	    key: 'showSideNav',
	    value: function showSideNav() {
	      document.querySelector('body').style.overflow = "hidden";
	      this.sideNavEl.classList.add('side-nav--animatable');
	      this.sideNavEl.classList.add('side-nav--visible');
	      this.detabinator.inert = false;
	      this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
	    }
	  }, {
	    key: 'hideSideNav',
	    value: function hideSideNav() {
	      document.querySelector('body').style.overflow = "auto";
	      this.sideNavEl.classList.add('side-nav--animatable');
	      this.sideNavEl.classList.remove('side-nav--visible');
	      this.detabinator.inert = true;
	      this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
	    }
	  }], [{
	    key: 'blockClicks',
	    value: function blockClicks(evt) {
	      evt.stopPropagation();
	    }
	  }]);
	
	  return SideNav;
	}();
	
	exports.default = SideNav;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by IvanP on 13.12.2016.
	 */
	/**
	 * `MediaQuery` helps perform actions when CSS query is matched instead of polling the window width, when it's not so important to get exact width, only checking matching the query.
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
	var MediaQuery = function () {
	  function MediaQuery(options, callback) {
	    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
	
	    _classCallCheck(this, MediaQuery);
	
	    var query = options.query,
	        _options$full = options.full,
	        full = _options$full === undefined ? false : _options$full;
	
	    this._matches = false;
	    this.full = full;
	    this._mq = null;
	    this._callback = callback;
	    this._context = context;
	    this._bound = this._onMatch.bind(this);
	    this.query = query;
	  }
	
	  _createClass(MediaQuery, [{
	    key: '_onMatch',
	    value: function _onMatch(mq) {
	      this._matches = mq.matches;
	      return this._callback.call(this._context, mq.matches);
	    }
	  }, {
	    key: 'matches',
	    get: function get() {
	      return this._matches;
	    }
	  }, {
	    key: 'query',
	    get: function get() {
	      return this._query;
	    },
	    set: function set(val) {
	      this._query = val;
	      this.constructor.remove(this._mq, this._bound);
	      var query = this.query;
	      if (!query) {
	        return;
	      }
	      if (!this.full && query[0] !== '(') {
	        query = '(' + query + ')';
	      }
	      this._mq = window.matchMedia(query);
	      this._onMatch(this._mq);
	      this.constructor.add(this._mq, this._bound);
	    }
	  }], [{
	    key: 'add',
	    value: function add(mq, bound) {
	      if (mq) {
	        mq.addListener(bound);
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove(mq, bound) {
	      if (mq) {
	        mq.removeListener(bound);
	      }
	      mq = null;
	    }
	  }]);
	
	  return MediaQuery;
	}();
	
	exports.default = MediaQuery;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MDHierarchy = function () {
	  function MDHierarchy() {
	    _classCallCheck(this, MDHierarchy);
	  }
	
	  _createClass(MDHierarchy, null, [{
	    key: 'upgrade',
	
	    /**
	     * attaches a listener to a hierarchy popup when it's initialised to be able to close it on click-outside
	     * */
	    value: function upgrade() {
	      var hierarchyButton = MDHierarchy.hierarchyToggle;
	      hierarchyButton && hierarchyButton.addEventListener('click', MDHierarchy.hierarchyToggleClickHandler);
	    }
	  }, {
	    key: 'asyncHierarchyChrome',
	    value: function asyncHierarchyChrome() {
	      return new Promise(function (resolve) {
	        return setTimeout(function () {
	          var hierarchyChrome = MDHierarchy.hierarchyChrome;
	          hierarchyChrome ? resolve(hierarchyChrome) : resolve(MDHierarchy.asyncHierarchyChrome());
	        }, 300);
	      });
	    }
	  }, {
	    key: 'hierarchyToggleClickHandler',
	    value: function hierarchyToggleClickHandler() {
	      MDHierarchy.detachHierarchyToggleClickListener();
	      MDHierarchy.disablePageScroll();
	      var hierarchyChrome = MDHierarchy.hierarchyChrome;
	      if (!hierarchyChrome) {
	        hierarchyChrome = MDHierarchy.asyncHierarchyChrome();
	        hierarchyChrome.then(MDHierarchy.attachChromeCloseListener);
	      } else {
	        MDHierarchy.attachChromeCloseListener(hierarchyChrome);
	      }
	    }
	  }, {
	    key: 'detachHierarchyToggleClickListener',
	    value: function detachHierarchyToggleClickListener() {
	      MDHierarchy.hierarchyToggle.removeEventListener('click', MDHierarchy.hierarchyToggleClickHandler);
	    }
	  }, {
	    key: 'attachChromeCloseListener',
	    value: function attachChromeCloseListener(hierarchyChrome) {
	      hierarchyChrome.addEventListener('click', MDHierarchy.onChromeClose);
	    }
	  }, {
	    key: 'onChromeClose',
	    value: function onChromeClose(event) {
	      var cancel = MDHierarchy.cancelButton,
	          apply = MDHierarchy.applyButton,
	          chrome = MDHierarchy.hierarchyChrome,
	          clickedEl = event.path[0];
	
	      if ([chrome, cancel, apply].indexOf(clickedEl) > -1) {
	        if (clickedEl == chrome) {
	          cancel.click();
	        } else {
	          MDHierarchy.enablePageScroll();
	        }
	      }
	    }
	  }, {
	    key: 'disablePageScroll',
	    value: function disablePageScroll() {
	      document.querySelector('body').setAttribute('style', 'overflow:hidden !important');
	    }
	  }, {
	    key: 'enablePageScroll',
	    value: function enablePageScroll() {
	      document.querySelector('body').removeAttribute('style');
	    }
	  }, {
	    key: 'hierarchyToggle',
	    get: function get() {
	      return document.querySelector('.dd-target-button');
	    }
	  }, {
	    key: 'hierarchyChrome',
	    get: function get() {
	      return MDHierarchy.hierarchyToggle.parentNode.querySelector('.dd-drilldown');
	    }
	  }, {
	    key: 'cancelButton',
	    get: function get() {
	      return MDHierarchy.hierarchyChrome.querySelector('.dd-cancel');
	    }
	  }, {
	    key: 'applyButton',
	    get: function get() {
	      return MDHierarchy.hierarchyChrome.querySelector('.dd-button-select');
	    }
	  }]);
	
	  return MDHierarchy;
	}();
	
	exports.default = MDHierarchy;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _sideNav = __webpack_require__(1);
	
	var _sideNav2 = _interopRequireDefault(_sideNav);
	
	var _mediaQuery = __webpack_require__(2);
	
	var _mediaQuery2 = _interopRequireDefault(_mediaQuery);
	
	var _headerScroller = __webpack_require__(5);
	
	var _headerScroller2 = _interopRequireDefault(_headerScroller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TransformMenuAt = function () {
	  /**
	   * This class sets up a listener to detect whether the viewport matches the max-width set up in `breakpoint` and based on existence of an integration-iframeEl
	   * sets up heade scrollers or just swaps the header into horizontal or sidebar navigation modes
	   * @param {Number} [breakpoint=768] - max-width of device viewport that is considered to be a mobile device and hosts a mobile sidebar.
	   * @param {Object} [options]
	   * @param {String} [options.iframeClassName] - r2integration iframe CSS class
	   * @param {String} [options.desktopHeaderClassName] - CSS class of header to display above `breakpoint`
	   * @param {String} [options.mobileHeaderClassName] - CSS class of header to display below `breakpoint`
	   * @requires MediaQuery
	   * @requires SideNav
	   * @requires HeaderScroller
	   * */
	  function TransformMenuAt() {
	    var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 768;
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, TransformMenuAt);
	
	    var _options$iframeClassN = options.iframeClassName,
	        iframeClassName = _options$iframeClassN === undefined ? '.r2dashboard' : _options$iframeClassN,
	        _options$desktopHeade = options.desktopHeaderClassName,
	        desktopHeaderClassName = _options$desktopHeade === undefined ? '.reportal-bar' : _options$desktopHeade,
	        _options$mobileHeader = options.mobileHeaderClassName,
	        mobileHeaderClassName = _options$mobileHeader === undefined ? '.reportal-header' : _options$mobileHeader;
	
	
	    this.iframeEl = document.querySelector(iframeClassName);
	    this.desktopHeaderEl = document.querySelector(desktopHeaderClassName);
	    this.mobileHeaderEl = document.querySelector(mobileHeaderClassName);
	    this.currentHeader = null;
	
	    if (this.isIntegrationMode) {
	      // if it's integration page - do scrolling
	      this.swapHeaderAndIframe();
	      this.headerScrollerInst = this.makeHeaderRespondToIframeScroll();
	    }
	    this.handleBreakpointMatch = this.handleBreakpointMatch.bind(this);
	    this.sidenav = new _sideNav2.default();
	    this.mediaQuery = new _mediaQuery2.default({ query: "max-width:" + breakpoint + "px" }, this.handleBreakpointMatch, this);
	  }
	
	  _createClass(TransformMenuAt, [{
	    key: "swapHeaderAndIframe",
	    value: function swapHeaderAndIframe() {
	      document.querySelector('.body-wrapper').classList.add('integration-mode');
	    }
	  }, {
	    key: "handleBreakpointMatch",
	    value: function handleBreakpointMatch(belowBreakpoint) {
	      if (!belowBreakpoint) {
	        this.swapHeader(this.desktopHeaderEl);
	        this.sidenav.removeEventListeners();
	      } else {
	        this.swapHeader(this.mobileHeaderEl);
	        this.sidenav.addEventListeners();
	      }
	    }
	  }, {
	    key: "makeHeaderRespondToIframeScroll",
	    value: function makeHeaderRespondToIframeScroll() {
	      var _this = this;
	
	      return new Promise(function (resolve) {
	        if (!_this.isIframeURLEmpty) {
	          resolve(_this.makeHeaderScrollable(_this.iframeEl.contentWindow));
	        } else {
	          _this.iframeEl.addEventListener('load', function (e) {
	            return resolve(_this.makeHeaderScrollable(e.target.contentWindow));
	          });
	        }
	      });
	    }
	  }, {
	    key: "makeHeaderScrollable",
	    value: function makeHeaderScrollable(iframeContentWindow) {
	      return this.currentHeader && new _headerScroller2.default(iframeContentWindow, this.currentHeader);
	    }
	  }, {
	    key: "swapHeader",
	
	
	    /**
	     * Sets `this.currentHeader` to a new HTMLElement and does the same for `HeaderScroller.header`
	     * */
	    value: function swapHeader(newHeader) {
	      this.currentHeader = newHeader;
	      if (this.iframeEl && this.headerScrollerInst) {
	        this.headerScrollerInst.then(function (headerScroller) {
	          return headerScroller.header = newHeader;
	        });
	      }
	    }
	  }, {
	    key: "isIntegrationMode",
	    get: function get() {
	      return !!this.iframeEl;
	    }
	  }, {
	    key: "isIframeURLEmpty",
	    get: function get() {
	      return this.iframeEl.contentWindow.location.href === 'about:blank';
	    }
	  }]);
	
	  return TransformMenuAt;
	}();
	
	exports.default = TransformMenuAt;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HeaderScroller = function () {
	  /**
	   * `HeaderScroller` is a class that listens to `iframeEl`'s contentWindow scroll event and scrolls the `reportalHeaderHTMLElement` when the iframeEl is scrolled
	   * @param {Window} contentWindow - iframeEl.contentWindow
	   * @param {HTMLElement} reportalHeaderHTMLElement - reportalHeaderHTMLElement element that needs to be scrolled
	   * */
	  function HeaderScroller(contentWindow, reportalHeaderHTMLElement) {
	    _classCallCheck(this, HeaderScroller);
	
	    contentWindow.requestAnimationFrame = contentWindow.requestAnimationFrame || contentWindow.mozRequestAnimationFrame || contentWindow.webkitRequestAnimationFrame || contentWindow.msRequestAnimationFrame;
	
	    this._meta = {
	      topOffset: null,
	      ticking: false,
	      offsetHeight: null,
	      header: null,
	      lastScrollY: 0,
	      contentWindow: contentWindow
	    };
	    this.header = reportalHeaderHTMLElement;
	    this._scrollCallback = this._scrollCallback.bind(this);
	    this.attachListeners();
	  }
	
	  _createClass(HeaderScroller, [{
	    key: '_resetHeader',
	    value: function _resetHeader() {
	      var header = this.header;
	      header.classList.remove('scrollable-header');
	      header.style.top = "";
	      // this.detachListeners();
	    }
	  }, {
	    key: '_configureHeader',
	    value: function _configureHeader() {
	      var header = this.header;
	      header.classList.add('scrollable-header');
	      header.style.top = this._meta.topOffset;
	    }
	  }, {
	    key: '_setHeaderOffsetInIframe',
	    value: function _setHeaderOffsetInIframe() {
	      var iframeBody = this._meta.contentWindow.document.querySelector('body');
	      iframeBody.style.paddingTop = this._meta.offsetHeight + "px";
	    }
	  }, {
	    key: 'requestTick',
	    value: function requestTick(callback) {
	      if (!this._meta.ticking) {
	        requestAnimationFrame(callback);
	        this._meta.ticking = true;
	      }
	    }
	  }, {
	    key: 'attachListeners',
	    value: function attachListeners() {
	      this._meta.contentWindow.addEventListener("scroll", this._scrollFixed.bind(this), false);
	    }
	  }, {
	    key: 'detachListeners',
	    value: function detachListeners() {
	      this._meta.contentWindow.removeEventListener("scroll", this._scrollFixed);
	    }
	  }, {
	    key: '_scrollFixed',
	    value: function _scrollFixed() {
	      this._meta.lastScrollY = this._meta.contentWindow.pageYOffset;
	      this.requestTick(this._scrollCallback);
	    }
	  }, {
	    key: '_scrollCallback',
	    value: function _scrollCallback() {
	      var offset = this._meta.lastScrollY;
	      this.header.style.top = -offset + 'px';
	      this._meta.ticking = false;
	    }
	  }, {
	    key: 'header',
	    get: function get() {
	      return this._meta.header;
	    },
	    set: function set(headerElement) {
	      var offset = void 0;
	      if (this.header != null) {
	        this._meta.topOffset = this.headerTopOffset;
	        this._resetHeader();
	      }
	      this._meta.header = headerElement;
	      this._meta.offsetHeight = headerElement.offsetHeight;
	      this._configureHeader();
	      this._setHeaderOffsetInIframe();
	    }
	  }, {
	    key: 'headerTopOffset',
	    get: function get() {
	      return this.header.style.top;
	    }
	  }]);
	
	  return HeaderScroller;
	}();
	
	exports.default = HeaderScroller;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 *
	 * Copyright 2016 Google Inc. All rights reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *     http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	var Detabinator = function () {
	  /**
	   * Helps to maintain a healthy tabulation within the sidebar when it's open, rather than tabulate the whole page
	   * Usage:
	   *
	   * ``` javascript
	   * const detabinator = new Detabinator(element);
	   * detabinator.inert = true;  // Sets all focusable children of element to tabindex=-1
	   * detabinator.inert = false; // Restores all focusable children of element
	   * ```
	   * @param {HTMLElement} element
	   */
	  function Detabinator(element) {
	    _classCallCheck(this, Detabinator);
	
	    if (!element) {
	      throw new Error('Missing required argument. new Detabinator needs an element reference');
	    }
	    this._inert = false;
	    this._focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
	    this._focusableElements = [].slice.call(element.querySelectorAll(this._focusableElementsString));
	  }
	
	  _createClass(Detabinator, [{
	    key: 'inert',
	    get: function get() {
	      return this._inert;
	    },
	    set: function set(isInert) {
	      if (this._inert === isInert) {
	        return;
	      }
	
	      this._inert = isInert;
	
	      this._focusableElements.forEach(function (child) {
	        if (isInert) {
	          // If the child has an explict tabindex save it
	          if (child.hasAttribute('tabindex')) {
	            child.__savedTabindex = child.tabIndex;
	          }
	          // Set ALL focusable children to tabindex -1
	          child.setAttribute('tabindex', -1);
	        } else {
	          // If the child has a saved tabindex, restore it
	          // Because the value could be 0, explicitly check that it's not false
	          if (child.__savedTabindex === 0 || child.__savedTabindex) {
	            return child.setAttribute('tabindex', child.__savedTabindex);
	          } else {
	            // Remove tabindex from ANY REMAINING children
	            child.removeAttribute('tabindex');
	          }
	        }
	      });
	    }
	  }]);
	
	  return Detabinator;
	}();
	
	exports.default = Detabinator;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = renderMiddleLevel;
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
	function upgradeHierarchyTable(table, headers) {
	  try {
	    var upgradedTable = new Reportal.TAhierarchy({
	      source: table,
	      hierarchy: categorySymptomHierarchy, // object catSympTableHeaders is populated by server-side reportal scripting addJSHierarchyObjectToThePage
	      rowheaders: headers, // current table's headers (object generated with reportal scripting)
	      search: { enabled: true },
	      clearLinks: false,
	      sorting: { enabled: true },
	      floatingHeader: { enabled: false // behaves aggressive when many rows
	      } });
	  } catch (e) {}
	
	  return upgradedTable;
	}
	
	// apply r2 hierarchy style to tables inside cards if there are not empty cards
	function applyHierarchyStyleToTable() {
	
	  if (catSympTableHeaders) // variable catSympTableHeaders is populated by server-side reportal scripting (addJSHierarchyObjectToThePage)
	    {
	      var tableWithHierarchy = document.querySelectorAll('table.reportal-hierarchy-table');
	      for (var i = 0; i < catSympTableHeaders.length; i++) {
	        upgradeHierarchyTable(tableWithHierarchy[i], catSympTableHeaders[i]);
	      }
	    }
	
	  // ---------------------- default sorting by counts ---------------------------
	  var countCol = document.querySelectorAll('.material-card--content .reportal-hierarchy-table:first-child tr td.sortable:last-child');
	  for (var i = 0; i < countCol.length; i++) {
	    countCol[i].click();
	  }
	}
	
	// save project and symptom labels into drilldown parameter input and perform drill down
	function saveMiddleLevelDrillDownParam(inputWrapperID, btnWrapperID) {
	
	  // inputWrapperID - wrapper for input for text parameter
	  // btnWrapperID - wrapper for butoon to click on and jump to another the page
	
	  var card = document.querySelectorAll('.material-card');
	
	  for (var i = 0; i < card.length; i++) {
	    //loop through cards
	    card[i].onclick = function (event) {
	      var all_text = event.target; // check what part of the card is clicked
	      if (all_text.className.indexOf('reportal-row-label') > -1) // if category/symptom clicked then drill down
	        {
	          var mn_text = all_text.querySelector('span') != null ? all_text.querySelector('span').textContent : ''; // fill hidden parameter with name of category or symptom
	          var symptomName = all_text.textContent.replace(mn_text, '');
	          var projectName = this.querySelector('.material-card--title .projectName').textContent;
	
	          if (symptomName.length > 0 && projectName.length > 0) {
	            document.querySelector(inputWrapperID + ' input').value = projectName + '^' + symptomName;
	            document.querySelector(btnWrapperID + ' input').click();
	          }
	        }
	    };
	  }
	}
	
	// add Management Notes
	function addMNasTips() {
	
	  // managemnt notes are taken from a hit list on the page
	
	  var mn_table = document.querySelector('#mn_hitlist .yui3-datatable-table .yui3-datatable-data'); // hit list rows with data
	  var mn_note = mn_table.querySelectorAll('.yui3-datatable-col-Notes'); // column with notes
	  var mn_project = mn_table.querySelectorAll('.yui3-datatable-col-Project'); // column with projects
	  var mn_symp = mn_table.querySelectorAll('.yui3-datatable-col-issue'); // column with symptoms
	  var mn_cat = mn_table.querySelectorAll('.yui3-datatable-col-Category'); // column with symptoms
	
	  var mn_object = {}; // create object for easy search of a note {"symptom;project":note}
	  var catsWithMN_object = {}; // categories having symptoms with management notes
	
	  //loop through mn notes and add to the object
	  for (var i = 0; i < mn_symp.length; i++) {
	    mn_object[mn_symp[i].innerHTML + ";" + mn_project[i].innerHTML] = mn_note[i].innerHTML;
	    catsWithMN_object[mn_cat[i].innerHTML + ';' + mn_project[i].innerHTML] = null;
	  }
	
	  var cards = document.querySelectorAll('.material-card'); // get all cards
	
	  for (var j = 0; j < cards.length; j++) // loop by cards
	  {
	
	    if (cards[j].querySelector('.reportal-hierarchy-table')) {
	
	      var projectName = cards[j].querySelector('.material-card--title .projectName').innerHTML;
	      var rowHeaders = cards[j].querySelectorAll('tbody tr td:first-child span'); // symptoms in rows
	
	      for (var i = 0; i < rowHeaders.length; i++) {
	        var headerText = rowHeaders[i].innerText + ';' + projectName; // assemble key to look for in the object; drilldown off
	        if (mn_object.hasOwnProperty(headerText)) {
	          // create and add the tool tip
	          var hoverOver = document.createElement('span');
	          hoverOver.className = 'mnContent';
	          hoverOver.innerHTML = mn_object[headerText];
	          rowHeaders[i].parentNode.appendChild(hoverOver);
	          rowHeaders[i].className += ' thumbnail';
	          //rowHeaders[i].parentNode.className += ' thumbnail2';
	          delete mn_object[headerText]; // remove used note
	        }
	        if (catsWithMN_object.hasOwnProperty(headerText) && rowHeaders[i].className.indexOf('hasSymptomsWithNotes') < 0) rowHeaders[i].className += ' hasSymptomsWithNotes';
	      }
	    }
	  }
	}
	
	function renderMiddleLevel() {
	
	  // ---------------------- hide empty project cards ----------------------
	  var tables = document.querySelectorAll('.material-card--content');
	  for (var i = 0; i < tables.length; i++) {
	    if (tables[i].innerHTML == '') tables[i].parentElement.style.display = 'none';
	  }applyHierarchyStyleToTable();
	  saveMiddleLevelDrillDownParam('#MiddleLevel_drilldownProjectInput', '#MiddleLevel_drilldownSubmitBtn');
	
	  // apply Management Notes when hit list is loaded
	  Y.Global.on('hitlistloaded', addMNasTips);
	}
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MWQwYjJiNDhmMmI1OGI4MmU4ZCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tZWRpYS1xdWVyeS9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGllcmFyY2h5L2hpZXJhcmNoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2aWdhdGlvbi9tZW51LXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yMi9oZWFkZXItc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZGUtbmF2L2RldGFiaW5hdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zb21jLXN5bXB0b20tb3ZlcnZpZXctcGFnZS1zY3JpcHRzL2hpZXJhcmNoeS10YWJsZS11cGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiUmVwb3J0YWwiLCJUcmFuc2Zvcm1NZW51QXQiLCJTaWRlTmF2IiwiaGllcmFyY2h5VXBncmFkZSIsInVwZ3JhZGUiLCJTT01DIiwicmVuZGVyTWlkZGxlTGV2ZWwiLCJzaG93QnV0dG9uRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRlQnV0dG9uRWwiLCJzaWRlTmF2RWwiLCJzaWRlTmF2Q29udGFpbmVyRWwiLCJkZXRhYmluYXRvciIsImluZXJ0Iiwic2hvd1NpZGVOYXYiLCJiaW5kIiwiaGlkZVNpZGVOYXYiLCJibG9ja0NsaWNrcyIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIm9uVHJhbnNpdGlvbkVuZCIsInVwZGF0ZSIsInN0YXJ0WCIsImN1cnJlbnRYIiwidG91Y2hpbmdTaWRlTmF2Iiwic3VwcG9ydHNQYXNzaXZlIiwidW5kZWZpbmVkIiwicGFzc2l2ZSIsImlzU3VwcG9ydGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJhcHBseVBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b3VjaGVzIiwicGFnZVgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0cmFuc2xhdGVYIiwiTWF0aCIsIm1pbiIsInN0eWxlIiwidHJhbnNmb3JtIiwicmVtb3ZlIiwib3ZlcmZsb3ciLCJhZGQiLCJzdG9wUHJvcGFnYXRpb24iLCJNZWRpYVF1ZXJ5Iiwib3B0aW9ucyIsImNhbGxiYWNrIiwiY29udGV4dCIsInF1ZXJ5IiwiZnVsbCIsIl9tYXRjaGVzIiwiX21xIiwiX2NhbGxiYWNrIiwiX2NvbnRleHQiLCJfYm91bmQiLCJfb25NYXRjaCIsIm1xIiwibWF0Y2hlcyIsImNhbGwiLCJfcXVlcnkiLCJ2YWwiLCJjb25zdHJ1Y3RvciIsIm1hdGNoTWVkaWEiLCJib3VuZCIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJNREhpZXJhcmNoeSIsImhpZXJhcmNoeUJ1dHRvbiIsImhpZXJhcmNoeVRvZ2dsZSIsImhpZXJhcmNoeVRvZ2dsZUNsaWNrSGFuZGxlciIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwiaGllcmFyY2h5Q2hyb21lIiwicmVzb2x2ZSIsImFzeW5jSGllcmFyY2h5Q2hyb21lIiwiZGV0YWNoSGllcmFyY2h5VG9nZ2xlQ2xpY2tMaXN0ZW5lciIsImRpc2FibGVQYWdlU2Nyb2xsIiwidGhlbiIsImF0dGFjaENocm9tZUNsb3NlTGlzdGVuZXIiLCJvbkNocm9tZUNsb3NlIiwiZXZlbnQiLCJjYW5jZWwiLCJjYW5jZWxCdXR0b24iLCJhcHBseSIsImFwcGx5QnV0dG9uIiwiY2hyb21lIiwiY2xpY2tlZEVsIiwicGF0aCIsImluZGV4T2YiLCJjbGljayIsImVuYWJsZVBhZ2VTY3JvbGwiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJlbnROb2RlIiwiYnJlYWtwb2ludCIsImlmcmFtZUNsYXNzTmFtZSIsImRlc2t0b3BIZWFkZXJDbGFzc05hbWUiLCJtb2JpbGVIZWFkZXJDbGFzc05hbWUiLCJpZnJhbWVFbCIsImRlc2t0b3BIZWFkZXJFbCIsIm1vYmlsZUhlYWRlckVsIiwiY3VycmVudEhlYWRlciIsImlzSW50ZWdyYXRpb25Nb2RlIiwic3dhcEhlYWRlckFuZElmcmFtZSIsImhlYWRlclNjcm9sbGVySW5zdCIsIm1ha2VIZWFkZXJSZXNwb25kVG9JZnJhbWVTY3JvbGwiLCJoYW5kbGVCcmVha3BvaW50TWF0Y2giLCJzaWRlbmF2IiwibWVkaWFRdWVyeSIsImJlbG93QnJlYWtwb2ludCIsInN3YXBIZWFkZXIiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaXNJZnJhbWVVUkxFbXB0eSIsIm1ha2VIZWFkZXJTY3JvbGxhYmxlIiwiY29udGVudFdpbmRvdyIsInRhcmdldCIsImlmcmFtZUNvbnRlbnRXaW5kb3ciLCJuZXdIZWFkZXIiLCJoZWFkZXJTY3JvbGxlciIsImhlYWRlciIsImxvY2F0aW9uIiwiaHJlZiIsIkhlYWRlclNjcm9sbGVyIiwicmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudCIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX21ldGEiLCJ0b3BPZmZzZXQiLCJ0aWNraW5nIiwib2Zmc2V0SGVpZ2h0IiwibGFzdFNjcm9sbFkiLCJfc2Nyb2xsQ2FsbGJhY2siLCJhdHRhY2hMaXN0ZW5lcnMiLCJ0b3AiLCJpZnJhbWVCb2R5IiwicGFkZGluZ1RvcCIsIl9zY3JvbGxGaXhlZCIsInBhZ2VZT2Zmc2V0IiwicmVxdWVzdFRpY2siLCJvZmZzZXQiLCJoZWFkZXJFbGVtZW50IiwiaGVhZGVyVG9wT2Zmc2V0IiwiX3Jlc2V0SGVhZGVyIiwiX2NvbmZpZ3VyZUhlYWRlciIsIl9zZXRIZWFkZXJPZmZzZXRJbklmcmFtZSIsIkRldGFiaW5hdG9yIiwiZWxlbWVudCIsIkVycm9yIiwiX2luZXJ0IiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiX2ZvY3VzYWJsZUVsZW1lbnRzIiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXNJbmVydCIsImZvckVhY2giLCJjaGlsZCIsImhhc0F0dHJpYnV0ZSIsIl9fc2F2ZWRUYWJpbmRleCIsInRhYkluZGV4IiwidXBncmFkZUhpZXJhcmNoeVRhYmxlIiwidGFibGUiLCJoZWFkZXJzIiwidXBncmFkZWRUYWJsZSIsIlRBaGllcmFyY2h5Iiwic291cmNlIiwiaGllcmFyY2h5IiwiY2F0ZWdvcnlTeW1wdG9tSGllcmFyY2h5Iiwicm93aGVhZGVycyIsInNlYXJjaCIsImVuYWJsZWQiLCJjbGVhckxpbmtzIiwic29ydGluZyIsImZsb2F0aW5nSGVhZGVyIiwiYXBwbHlIaWVyYXJjaHlTdHlsZVRvVGFibGUiLCJjYXRTeW1wVGFibGVIZWFkZXJzIiwidGFibGVXaXRoSGllcmFyY2h5IiwiaSIsImxlbmd0aCIsImNvdW50Q29sIiwic2F2ZU1pZGRsZUxldmVsRHJpbGxEb3duUGFyYW0iLCJpbnB1dFdyYXBwZXJJRCIsImJ0bldyYXBwZXJJRCIsImNhcmQiLCJvbmNsaWNrIiwiYWxsX3RleHQiLCJjbGFzc05hbWUiLCJtbl90ZXh0IiwidGV4dENvbnRlbnQiLCJzeW1wdG9tTmFtZSIsInJlcGxhY2UiLCJwcm9qZWN0TmFtZSIsInZhbHVlIiwiYWRkTU5hc1RpcHMiLCJtbl90YWJsZSIsIm1uX25vdGUiLCJtbl9wcm9qZWN0IiwibW5fc3ltcCIsIm1uX2NhdCIsIm1uX29iamVjdCIsImNhdHNXaXRoTU5fb2JqZWN0IiwiaW5uZXJIVE1MIiwiY2FyZHMiLCJqIiwicm93SGVhZGVycyIsImhlYWRlclRleHQiLCJpbm5lclRleHQiLCJoYXNPd25Qcm9wZXJ0eSIsImhvdmVyT3ZlciIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRhYmxlcyIsInBhcmVudEVsZW1lbnQiLCJkaXNwbGF5IiwiWSIsIkdsb2JhbCIsIm9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNwQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQU5BLG9CQUFBQSxDQUFRLENBQVI7O0FBUUFDLFFBQU9DLFFBQVAsR0FBa0JELE9BQU9DLFFBQVAsSUFBbUIsRUFBckM7QUFDQUQsUUFBT0MsUUFBUCxDQUFnQkMsZUFBaEI7QUFDQUYsUUFBT0MsUUFBUCxDQUFnQkUsT0FBaEI7QUFDQUgsUUFBT0MsUUFBUCxDQUFnQkcsZ0JBQWhCLEdBQW1DLG9CQUFZQyxPQUEvQzs7QUFFQUwsUUFBT00sSUFBUCxHQUFjTixPQUFPTSxJQUFQLElBQWUsRUFBN0I7QUFDQU4sUUFBT00sSUFBUCxDQUFZQyxpQkFBWixtQzs7Ozs7Ozs7OztzakJDZEE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7OztLQUVNSixPO0FBQ0o7OztBQUdBLHNCQUttQjtBQUFBLG9GQUFKLEVBQUk7QUFBQSxrQ0FKSkssWUFJSTtBQUFBLFNBSkpBLFlBSUkscUNBSlNDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FJVDtBQUFBLGtDQUhKQyxZQUdJO0FBQUEsU0FISkEsWUFHSSxxQ0FIV0YsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUdYO0FBQUEsK0JBRkpFLFNBRUk7QUFBQSxTQUZKQSxTQUVJLGtDQUZRSCxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBRVI7QUFBQSxzQ0FESkcsa0JB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QUNBRCxxQkFBVXRCLFNBQVYsR0FBc0IsV0FBdEI7QUFDQXNCLHFCQUFVUCxTQUFWLEdBQXNCRixVQUFVTSxVQUFWLENBQXRCO0FBQ0FELHNCQUFXM0IsQ0FBWCxFQUFjckYsVUFBZCxDQUF5QnNILFdBQXpCLENBQXFDRixTQUFyQztBQUNBSixzQkFBVzNCLENBQVgsRUFBY1MsU0FBZCxJQUEyQixZQUEzQjtBQUNBO0FBQ0Esa0JBQU9hLFVBQVVNLFVBQVYsQ0FBUCxDQVBzQyxDQU9SO0FBQy9CO0FBQ0QsYUFBR0wsa0JBQWtCTyxjQUFsQixDQUFpQ0YsVUFBakMsS0FBZ0RELFdBQVczQixDQUFYLEVBQWNTLFNBQWQsQ0FBd0JuRyxPQUF4QixDQUFnQyxzQkFBaEMsSUFBd0QsQ0FBM0csRUFDRXFILFdBQVczQixDQUFYLEVBQWNTLFNBQWQsSUFBMkIsdUJBQTNCO0FBRUg7QUFDRjtBQUVGO0FBQ0Y7O0FBRWMsVUFBUzNMLGlCQUFULEdBQTRCOztBQUV6QztBQUNBLE9BQUlvTixTQUFTbE4sU0FBU3dKLGdCQUFULENBQTBCLHlCQUExQixDQUFiO0FBQ0EsUUFBSSxJQUFJd0IsSUFBRSxDQUFWLEVBQVlBLElBQUVrQyxPQUFPakMsTUFBckIsRUFBNEJELEdBQTVCO0FBQ0UsU0FBR2tDLE9BQU9sQyxDQUFQLEVBQVV3QixTQUFWLElBQXVCLEVBQTFCLEVBQ0VVLE9BQU9sQyxDQUFQLEVBQVVtQyxhQUFWLENBQXdCL0ssS0FBeEIsQ0FBOEJnTCxPQUE5QixHQUF3QyxNQUF4QztBQUZKLElBSUF2QztBQUNBTSxpQ0FBOEIsb0NBQTlCLEVBQW1FLGlDQUFuRTs7QUFFQTtBQUNBa0MsS0FBRUMsTUFBRixDQUFTQyxFQUFULENBQVksZUFBWixFQUE2QnZCLFdBQTdCO0FBQ0Q7Ozs7Ozs7QUMxSUQsMEMiLCJmaWxlIjoibWVkaWEtcmVwb3J0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTFkMGIyYjQ4ZjJiNThiODJlOGQiLCJyZXF1aXJlKCcuL21haW4uY3NzJyk7XG5cbmltcG9ydCBNREhpZXJhcmNoeSBmcm9tIFwiLi9oaWVyYXJjaHkvaGllcmFyY2h5XCI7XG5pbXBvcnQgVHJhbnNmb3JtTWVudUF0IGZyb20gXCIuL25hdmlnYXRpb24vbWVudS10cmFuc2Zvcm1lclwiO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi9zaWRlLW5hdi9zaWRlLW5hdic7XG5cbmltcG9ydCByZW5kZXJNaWRkbGVMZXZlbCBmcm9tICcuL3NvbWMtc3ltcHRvbS1vdmVydmlldy1wYWdlLXNjcmlwdHMvaGllcmFyY2h5LXRhYmxlLXVwZGF0ZXMnO1xuXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XG53aW5kb3cuUmVwb3J0YWwuVHJhbnNmb3JtTWVudUF0ID0gVHJhbnNmb3JtTWVudUF0O1xud2luZG93LlJlcG9ydGFsLlNpZGVOYXYgPSBTaWRlTmF2O1xud2luZG93LlJlcG9ydGFsLmhpZXJhcmNoeVVwZ3JhZGUgPSBNREhpZXJhcmNoeS51cGdyYWRlO1xuXG53aW5kb3cuU09NQyA9IHdpbmRvdy5TT01DIHx8IHt9O1xud2luZG93LlNPTUMucmVuZGVyTWlkZGxlTGV2ZWwgPSByZW5kZXJNaWRkbGVMZXZlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiLyoqXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCBEZXRhYmluYXRvciBmcm9tIFwiLi9kZXRhYmluYXRvclwiO1xyXG5cclxuY2xhc3MgU2lkZU5hdiB7XHJcbiAgLyoqXHJcbiAgICogQSBjbGFzcyB0aGF0IHNldHMgdXAgYSBzaWRlYmFyIHRoYXQgaXMgZGlzbWlzc2VkIG9uIHNjcmltLWNsaWNrIG9yIG9uIHN3aXBlIGFuZCBpcyBvcGVuZCBvbiBoYW1idXJnZXItaWNvbiBjbGlja1xyXG4gICAqICovXHJcbiAgY29uc3RydWN0b3IgKHtcclxuICAgICAgICAgICAgICAgICBzaG93QnV0dG9uRWw9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1lbnUtc2hvdycpLFxyXG4gICAgICAgICAgICAgICAgIGhpZGVCdXR0b25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LWhpZGUnKSxcclxuICAgICAgICAgICAgICAgICBzaWRlTmF2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2lkZS1uYXYnKSxcclxuICAgICAgICAgICAgICAgICBzaWRlTmF2Q29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2lkZS1uYXYtY29udGFpbmVyJylcclxuICAgICAgICAgICAgICAgfT17fSkge1xyXG4gICAgdGhpcy5zaG93QnV0dG9uRWwgPSBzaG93QnV0dG9uRWw7XHJcbiAgICB0aGlzLmhpZGVCdXR0b25FbCA9IGhpZGVCdXR0b25FbDtcclxuICAgIHRoaXMuc2lkZU5hdkVsID0gc2lkZU5hdkVsO1xyXG4gICAgdGhpcy5zaWRlTmF2Q29udGFpbmVyRWwgPSBzaWRlTmF2Q29udGFpbmVyRWw7XHJcbiAgICAvLyBDb250cm9sIHdoZXRoZXIgdGhlIGNvbnRhaW5lcidzIGNoaWxkcmVuIGNhbiBiZSBmb2N1c2VkXHJcbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZSB0byBpbmVydCBzaW5jZSB0aGUgZHJhd2VyIGlzIG9mZnNjcmVlblxyXG4gICAgdGhpcy5kZXRhYmluYXRvciA9IG5ldyBEZXRhYmluYXRvcih0aGlzLnNpZGVOYXZDb250YWluZXJFbCk7XHJcbiAgICB0aGlzLmRldGFiaW5hdG9yLmluZXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNob3dTaWRlTmF2ID0gdGhpcy5zaG93U2lkZU5hdi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oaWRlU2lkZU5hdiA9IHRoaXMuaGlkZVNpZGVOYXYuYmluZCh0aGlzKTtcclxuICAgIFNpZGVOYXYuYmxvY2tDbGlja3MgPSBTaWRlTmF2LmJsb2NrQ2xpY2tzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uVG91Y2hTdGFydCA9IHRoaXMub25Ub3VjaFN0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uVG91Y2hNb3ZlID0gdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblRvdWNoRW5kID0gdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uVHJhbnNpdGlvbkVuZCA9IHRoaXMub25UcmFuc2l0aW9uRW5kLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5zdGFydFggPSAwO1xyXG4gICAgdGhpcy5jdXJyZW50WCA9IDA7XHJcbiAgICB0aGlzLnRvdWNoaW5nU2lkZU5hdiA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuc3VwcG9ydHNQYXNzaXZlID0gdW5kZWZpbmVkO1xyXG4gICAgLy90aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBhcHBseSBwYXNzaXZlIGV2ZW50IGxpc3RlbmluZyBpZiBpdCdzIHN1cHBvcnRlZFxyXG4gIGFwcGx5UGFzc2l2ZSAoKSB7XHJcbiAgICBpZiAodGhpcy5zdXBwb3J0c1Bhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdXBwb3J0c1Bhc3NpdmUgPyB7cGFzc2l2ZTogdHJ1ZX0gOiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIGZlYXR1cmUgZGV0ZWN0XHJcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCB7Z2V0IHBhc3NpdmUgKCkge1xyXG4gICAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgfX0pO1xyXG4gICAgfSBjYXRjaCAoZSkgeyB9XHJcbiAgICB0aGlzLnN1cHBvcnRzUGFzc2l2ZSA9IGlzU3VwcG9ydGVkO1xyXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlQYXNzaXZlKCk7XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudExpc3RlbmVycyAoKSB7XHJcbiAgICB0aGlzLnNob3dCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1NpZGVOYXYpO1xyXG4gICAgdGhpcy5oaWRlQnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTaWRlTmF2KTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlU2lkZU5hdik7XHJcbiAgICB0aGlzLnNpZGVOYXZDb250YWluZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFNpZGVOYXYuYmxvY2tDbGlja3MpO1xyXG5cclxuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5hcHBseVBhc3NpdmUoKSk7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzLmFwcGx5UGFzc2l2ZSgpKTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgIHRoaXMuc2hvd0J1dHRvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93U2lkZU5hdik7XHJcbiAgICB0aGlzLmhpZGVCdXR0b25FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNpZGVOYXYpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTaWRlTmF2KTtcclxuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU2lkZU5hdi5ibG9ja0NsaWNrcyk7XHJcblxyXG4gICAgdGhpcy5zaWRlTmF2RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0KTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaFN0YXJ0IChldnQpIHtcclxuICAgIGlmICghdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlLW5hdi0tdmlzaWJsZScpKVxyXG4gICAgICByZXR1cm47XHJcbiAgICAvL1RPRE86c3VwcG9ydCBzaWRlYmFyIHNjcm9sbGluZyBhcyB3ZWxsXHJcbiAgICB0aGlzLnN0YXJ0WCA9IGV2dC50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gICAgdGhpcy5jdXJyZW50WCA9IHRoaXMuc3RhcnRYO1xyXG5cclxuICAgIHRoaXMudG91Y2hpbmdTaWRlTmF2ID0gdHJ1ZTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoTW92ZSAoZXZ0KSB7XHJcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5jdXJyZW50WCA9IGV2dC50b3VjaGVzWzBdLnBhZ2VYO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaEVuZCAoZXZ0KSB7XHJcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy50b3VjaGluZ1NpZGVOYXYgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGVYID0gTWF0aC5taW4oMCwgdGhpcy5jdXJyZW50WCAtIHRoaXMuc3RhcnRYKTtcclxuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG5cclxuICAgIGlmICh0cmFuc2xhdGVYIDwgMCkge1xyXG4gICAgICB0aGlzLmhpZGVTaWRlTmF2KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGUgKCkge1xyXG4gICAgaWYgKCF0aGlzLnRvdWNoaW5nU2lkZU5hdilcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IE1hdGgubWluKDAsIHRoaXMuY3VycmVudFggLSB0aGlzLnN0YXJ0WCk7XHJcbiAgICB0aGlzLnNpZGVOYXZDb250YWluZXJFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVh9cHgpYDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBibG9ja0NsaWNrcyAoZXZ0KSB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBvblRyYW5zaXRpb25FbmQgKGV2dCkge1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1uYXYtLWFuaW1hdGFibGUnKTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZCk7XHJcbiAgfVxyXG5cclxuICBzaG93U2lkZU5hdiAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2LS1hbmltYXRhYmxlJyk7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdi0tdmlzaWJsZScpO1xyXG4gICAgdGhpcy5kZXRhYmluYXRvci5pbmVydCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kKTtcclxuICB9XHJcblxyXG4gIGhpZGVTaWRlTmF2ICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdz1cImF1dG9cIjtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2LS1hbmltYXRhYmxlJyk7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLW5hdi0tdmlzaWJsZScpO1xyXG4gICAgdGhpcy5kZXRhYmluYXRvci5pbmVydCA9IHRydWU7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMy4xMi4yMDE2LlxyXG4gKi9cclxuLyoqXHJcbiAqIGBNZWRpYVF1ZXJ5YCBoZWxwcyBwZXJmb3JtIGFjdGlvbnMgd2hlbiBDU1MgcXVlcnkgaXMgbWF0Y2hlZCBpbnN0ZWFkIG9mIHBvbGxpbmcgdGhlIHdpbmRvdyB3aWR0aCwgd2hlbiBpdCdzIG5vdCBzbyBpbXBvcnRhbnQgdG8gZ2V0IGV4YWN0IHdpZHRoLCBvbmx5IGNoZWNraW5nIG1hdGNoaW5nIHRoZSBxdWVyeS5cclxuICpcclxuICogYGBgIGphdmFzY3JpcHRcclxuICogZnVuY3Rpb24gb25NYXRjaChtYXRjaGVzKXtcclxuICogIGlmKG1hdGNoZXMpe1xyXG4gKiAgICAvLyBkbyB3aGF0IHlvdSBuZWVkIHdoZW4gdGhlIG1lZGlhcXVlcnkgaXMgbWF0Y2hlZFxyXG4gKiAgfSBlbHNlIHtcclxuICogICAgIC8vIGRvIHdoYXQgeW91IG5lZWQgd2hlbiB0aGUgbWVkaWEgcXVlcnkgaXMgbm90IG1hdGNoZWRcclxuICogIH1cclxuICogfVxyXG4gKlxyXG4gKiAgdmFyIG1xID0gbmV3IE1lZGlhUXVlcnkoe3F1ZXJ5OlwibWF4LXdpZHRoOjc2MHB4XCJ9LG9uTWF0Y2gsdGhpcyk7XHJcbiAqXHJcbiAqICAvL2F0IGFueSB0aW1lIHlvdSBtYXkgY2hlY2sgd2hldGhlciBpdCBtYXRjaGVzIHRoZSBxdWVyeTpcclxuICpcclxuICogIG1xLm1hdGNoZXMgLy90cnVlIG9yIGZhbHNlXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5xdWVyeSAtIFRoZSBDU1MgbWVkaWEgcXVlcnkgdG8gZXZhbHVhdGUuXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuZnVsbD1mYWxzZV0gLSBJZiB0cnVlLCB0aGUgcXVlcnkgYXR0cmlidXRlIGlzIGFzc3VtZWQgdG8gYmUgYSBjb21wbGV0ZSBtZWRpYSBxdWVyeSBzdHJpbmcgcmF0aGVyIHRoYW4gYSBzaW5nbGUgbWVkaWEgZmVhdHVyZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gbWF0Y2hpbmcgaXMgZXZhbHVhdGVkXHJcbiAqIEBwYXJhbSB7T2JqZWN0fEZ1bmN0aW9ufSBbY29udGV4dD10aGlzXSAtIGNvbnRleHQgaW4gd2hpY2ggdGhlIGBjYWxsYmFja2AgZnVuY3Rpb24gbmVlZHMgdG8gYmUgZXhlY3V0ZWRcclxuICpcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBtYXRjaGVzIC0gd2hldGhlciB0aGUgcXVlcnkgbWF0Y2hlcyB0aGUgd2luZG93IHdpZHRoLiBSZWFkb25seS5cclxuICogQHByb3BlcnR5IHtCb29sZWFufSBmdWxsIC0gSWYgdHJ1ZSwgdGhlIHF1ZXJ5IGF0dHJpYnV0ZSBpcyBhc3N1bWVkIHRvIGJlIGEgY29tcGxldGUgbWVkaWEgcXVlcnkgc3RyaW5nIHJhdGhlciB0aGFuIGEgc2luZ2xlIG1lZGlhIGZlYXR1cmUuXHJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBxdWVyeSAtIFRoZSBDU1MgbWVkaWEgcXVlcnkgdG8gZXZhbHVhdGUuXHJcbiAqICovXHJcbmNsYXNzIE1lZGlhUXVlcnl7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucyxjYWxsYmFjayxjb250ZXh0PXRoaXMpe1xyXG4gICAgbGV0IHtxdWVyeSxmdWxsPWZhbHNlfSA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLl9tYXRjaGVzID0gZmFsc2U7XHJcbiAgICB0aGlzLmZ1bGwgPSBmdWxsO1xyXG4gICAgdGhpcy5fbXEgPSBudWxsO1xyXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xyXG4gICAgdGhpcy5fYm91bmQgPSB0aGlzLl9vbk1hdGNoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnF1ZXJ5PXF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgX29uTWF0Y2gobXEpe1xyXG4gICAgdGhpcy5fbWF0Y2hlcyA9IG1xLm1hdGNoZXM7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2suY2FsbCh0aGlzLl9jb250ZXh0LG1xLm1hdGNoZXMpXHJcbiAgfVxyXG5cclxuICBnZXQgbWF0Y2hlcygpe1xyXG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgcXVlcnkoKXtcclxuICAgIHJldHVybiB0aGlzLl9xdWVyeTtcclxuICB9XHJcblxyXG4gIHNldCBxdWVyeSh2YWwpe1xyXG4gICAgdGhpcy5fcXVlcnkgPSB2YWw7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLnJlbW92ZSh0aGlzLl9tcSx0aGlzLl9ib3VuZCk7XHJcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xyXG4gICAgaWYgKCFxdWVyeSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuZnVsbCAmJiBxdWVyeVswXSAhPT0gJygnKSB7XHJcbiAgICAgIHF1ZXJ5ID0gJygnICsgcXVlcnkgKyAnKSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tcSA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcclxuICAgIHRoaXMuX29uTWF0Y2godGhpcy5fbXEpO1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5hZGQodGhpcy5fbXEsdGhpcy5fYm91bmQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFkZChtcSxib3VuZCl7XHJcbiAgICBpZiAobXEpIHtcclxuICAgICAgbXEuYWRkTGlzdGVuZXIoYm91bmQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZShtcSxib3VuZCkge1xyXG4gICAgaWYgKG1xKSB7XHJcbiAgICAgIG1xLnJlbW92ZUxpc3RlbmVyKGJvdW5kKTtcclxuICAgIH1cclxuICAgIG1xID0gbnVsbDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVkaWFRdWVyeVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L21lZGlhLXF1ZXJ5L3NyYy9tYWluLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTURIaWVyYXJjaHkge1xyXG4gIC8qKlxyXG4gICAqIGF0dGFjaGVzIGEgbGlzdGVuZXIgdG8gYSBoaWVyYXJjaHkgcG9wdXAgd2hlbiBpdCdzIGluaXRpYWxpc2VkIHRvIGJlIGFibGUgdG8gY2xvc2UgaXQgb24gY2xpY2stb3V0c2lkZVxyXG4gICAqICovXHJcbiAgc3RhdGljIHVwZ3JhZGUoKSB7XHJcbiAgICBjb25zdCBoaWVyYXJjaHlCdXR0b24gPSBNREhpZXJhcmNoeS5oaWVyYXJjaHlUb2dnbGU7XHJcbiAgICBoaWVyYXJjaHlCdXR0b24gJiYgaGllcmFyY2h5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTURIaWVyYXJjaHkuaGllcmFyY2h5VG9nZ2xlQ2xpY2tIYW5kbGVyKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBoaWVyYXJjaHlUb2dnbGUoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRkLXRhcmdldC1idXR0b24nKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaGllcmFyY2h5Q2hyb21lKCkge1xyXG4gICAgcmV0dXJuIE1ESGllcmFyY2h5LmhpZXJhcmNoeVRvZ2dsZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5kZC1kcmlsbGRvd24nKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jSGllcmFyY2h5Q2hyb21lKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBoaWVyYXJjaHlDaHJvbWUgPSBNREhpZXJhcmNoeS5oaWVyYXJjaHlDaHJvbWU7XHJcbiAgICAgICAgICBoaWVyYXJjaHlDaHJvbWUgPyByZXNvbHZlKGhpZXJhcmNoeUNocm9tZSkgOiByZXNvbHZlKE1ESGllcmFyY2h5LmFzeW5jSGllcmFyY2h5Q2hyb21lKCkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzMDApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGllcmFyY2h5VG9nZ2xlQ2xpY2tIYW5kbGVyKCkge1xyXG4gICAgTURIaWVyYXJjaHkuZGV0YWNoSGllcmFyY2h5VG9nZ2xlQ2xpY2tMaXN0ZW5lcigpO1xyXG4gICAgTURIaWVyYXJjaHkuZGlzYWJsZVBhZ2VTY3JvbGwoKTtcclxuICAgIGxldCBoaWVyYXJjaHlDaHJvbWUgPSBNREhpZXJhcmNoeS5oaWVyYXJjaHlDaHJvbWU7XHJcbiAgICBpZiAoIWhpZXJhcmNoeUNocm9tZSkge1xyXG4gICAgICBoaWVyYXJjaHlDaHJvbWUgPSBNREhpZXJhcmNoeS5hc3luY0hpZXJhcmNoeUNocm9tZSgpO1xyXG4gICAgICBoaWVyYXJjaHlDaHJvbWUudGhlbihNREhpZXJhcmNoeS5hdHRhY2hDaHJvbWVDbG9zZUxpc3RlbmVyKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgTURIaWVyYXJjaHkuYXR0YWNoQ2hyb21lQ2xvc2VMaXN0ZW5lcihoaWVyYXJjaHlDaHJvbWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGV0YWNoSGllcmFyY2h5VG9nZ2xlQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIE1ESGllcmFyY2h5LmhpZXJhcmNoeVRvZ2dsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIE1ESGllcmFyY2h5LmhpZXJhcmNoeVRvZ2dsZUNsaWNrSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIGF0dGFjaENocm9tZUNsb3NlTGlzdGVuZXIoaGllcmFyY2h5Q2hyb21lKSB7XHJcbiAgICBoaWVyYXJjaHlDaHJvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNREhpZXJhcmNoeS5vbkNocm9tZUNsb3NlKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIG9uQ2hyb21lQ2xvc2UoZXZlbnQpIHtcclxuICAgIGNvbnN0IGNhbmNlbCAgICA9IE1ESGllcmFyY2h5LmNhbmNlbEJ1dHRvbixcclxuICAgICAgYXBwbHkgICAgID0gTURIaWVyYXJjaHkuYXBwbHlCdXR0b24sXHJcbiAgICAgIGNocm9tZSAgICA9IE1ESGllcmFyY2h5LmhpZXJhcmNoeUNocm9tZSxcclxuICAgICAgY2xpY2tlZEVsID0gZXZlbnQucGF0aFswXTtcclxuXHJcbiAgICBpZiAoW2Nocm9tZSwgY2FuY2VsLCBhcHBseV0uaW5kZXhPZihjbGlja2VkRWwpID4gLTEpIHtcclxuICAgICAgaWYgKGNsaWNrZWRFbCA9PSBjaHJvbWUpIHtcclxuICAgICAgICBjYW5jZWwuY2xpY2soKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBNREhpZXJhcmNoeS5lbmFibGVQYWdlU2Nyb2xsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgY2FuY2VsQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIE1ESGllcmFyY2h5LmhpZXJhcmNoeUNocm9tZS5xdWVyeVNlbGVjdG9yKCcuZGQtY2FuY2VsJylcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgYXBwbHlCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gTURIaWVyYXJjaHkuaGllcmFyY2h5Q2hyb21lLnF1ZXJ5U2VsZWN0b3IoJy5kZC1idXR0b24tc2VsZWN0JylcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkaXNhYmxlUGFnZVNjcm9sbCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ292ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50Jyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZW5hYmxlUGFnZVNjcm9sbCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGllcmFyY2h5L2hpZXJhcmNoeS5qcyIsImltcG9ydCBTaWRlTmF2IGZyb20gXCIuLi9zaWRlLW5hdi9zaWRlLW5hdlwiO1xyXG5pbXBvcnQgTWVkaWFRdWVyeSBmcm9tIFwibWVkaWEtcXVlcnlcIjtcclxuaW1wb3J0IEhlYWRlclNjcm9sbGVyIGZyb20gXCIuLi9yMi9oZWFkZXItc2Nyb2xsZXJcIjtcclxuXHJcblxyXG5jbGFzcyBUcmFuc2Zvcm1NZW51QXQge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgY2xhc3Mgc2V0cyB1cCBhIGxpc3RlbmVyIHRvIGRldGVjdCB3aGV0aGVyIHRoZSB2aWV3cG9ydCBtYXRjaGVzIHRoZSBtYXgtd2lkdGggc2V0IHVwIGluIGBicmVha3BvaW50YCBhbmQgYmFzZWQgb24gZXhpc3RlbmNlIG9mIGFuIGludGVncmF0aW9uLWlmcmFtZUVsXHJcbiAgICogc2V0cyB1cCBoZWFkZSBzY3JvbGxlcnMgb3IganVzdCBzd2FwcyB0aGUgaGVhZGVyIGludG8gaG9yaXpvbnRhbCBvciBzaWRlYmFyIG5hdmlnYXRpb24gbW9kZXNcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW2JyZWFrcG9pbnQ9NzY4XSAtIG1heC13aWR0aCBvZiBkZXZpY2Ugdmlld3BvcnQgdGhhdCBpcyBjb25zaWRlcmVkIHRvIGJlIGEgbW9iaWxlIGRldmljZSBhbmQgaG9zdHMgYSBtb2JpbGUgc2lkZWJhci5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmlmcmFtZUNsYXNzTmFtZV0gLSByMmludGVncmF0aW9uIGlmcmFtZSBDU1MgY2xhc3NcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZGVza3RvcEhlYWRlckNsYXNzTmFtZV0gLSBDU1MgY2xhc3Mgb2YgaGVhZGVyIHRvIGRpc3BsYXkgYWJvdmUgYGJyZWFrcG9pbnRgXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm1vYmlsZUhlYWRlckNsYXNzTmFtZV0gLSBDU1MgY2xhc3Mgb2YgaGVhZGVyIHRvIGRpc3BsYXkgYmVsb3cgYGJyZWFrcG9pbnRgXHJcbiAgICogQHJlcXVpcmVzIE1lZGlhUXVlcnlcclxuICAgKiBAcmVxdWlyZXMgU2lkZU5hdlxyXG4gICAqIEByZXF1aXJlcyBIZWFkZXJTY3JvbGxlclxyXG4gICAqICovXHJcbiAgY29uc3RydWN0b3IoYnJlYWtwb2ludCA9IDc2OCwgb3B0aW9ucz17fSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpZnJhbWVDbGFzc05hbWUgICAgICAgID0gJy5yMmRhc2hib2FyZCcsXHJcbiAgICAgIGRlc2t0b3BIZWFkZXJDbGFzc05hbWUgPSAnLnJlcG9ydGFsLWJhcicsXHJcbiAgICAgIG1vYmlsZUhlYWRlckNsYXNzTmFtZSAgPSAnLnJlcG9ydGFsLWhlYWRlcicsXHJcbiAgICB9ID0gb3B0aW9ucztcclxuXHJcbiAgICB0aGlzLmlmcmFtZUVsICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWZyYW1lQ2xhc3NOYW1lKTtcclxuICAgIHRoaXMuZGVza3RvcEhlYWRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkZXNrdG9wSGVhZGVyQ2xhc3NOYW1lKTtcclxuICAgIHRoaXMubW9iaWxlSGVhZGVyRWwgID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2JpbGVIZWFkZXJDbGFzc05hbWUpO1xyXG4gICAgdGhpcy5jdXJyZW50SGVhZGVyID0gbnVsbDtcclxuXHJcbiAgICBpZiAodGhpcy5pc0ludGVncmF0aW9uTW9kZSl7Ly8gaWYgaXQncyBpbnRlZ3JhdGlvbiBwYWdlIC0gZG8gc2Nyb2xsaW5nXHJcbiAgICAgIHRoaXMuc3dhcEhlYWRlckFuZElmcmFtZSgpO1xyXG4gICAgICB0aGlzLmhlYWRlclNjcm9sbGVySW5zdCA9IHRoaXMubWFrZUhlYWRlclJlc3BvbmRUb0lmcmFtZVNjcm9sbCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oYW5kbGVCcmVha3BvaW50TWF0Y2ggPSB0aGlzLmhhbmRsZUJyZWFrcG9pbnRNYXRjaC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zaWRlbmF2ID0gbmV3IFNpZGVOYXYoKTtcclxuICAgIHRoaXMubWVkaWFRdWVyeSA9IG5ldyBNZWRpYVF1ZXJ5KHtxdWVyeTogYG1heC13aWR0aDoke2JyZWFrcG9pbnR9cHhgfSwgdGhpcy5oYW5kbGVCcmVha3BvaW50TWF0Y2gsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzSW50ZWdyYXRpb25Nb2RlKCl7XHJcbiAgICByZXR1cm4gISF0aGlzLmlmcmFtZUVsXHJcbiAgfVxyXG5cclxuICBzd2FwSGVhZGVyQW5kSWZyYW1lKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS13cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnaW50ZWdyYXRpb24tbW9kZScpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnJlYWtwb2ludE1hdGNoKGJlbG93QnJlYWtwb2ludCkge1xyXG4gICAgaWYgKCFiZWxvd0JyZWFrcG9pbnQpIHtcclxuICAgICAgdGhpcy5zd2FwSGVhZGVyKHRoaXMuZGVza3RvcEhlYWRlckVsKTtcclxuICAgICAgdGhpcy5zaWRlbmF2LnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN3YXBIZWFkZXIodGhpcy5tb2JpbGVIZWFkZXJFbCk7XHJcbiAgICAgIHRoaXMuc2lkZW5hdi5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFrZUhlYWRlclJlc3BvbmRUb0lmcmFtZVNjcm9sbCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzSWZyYW1lVVJMRW1wdHkpIHtcclxuICAgICAgICByZXNvbHZlKHRoaXMubWFrZUhlYWRlclNjcm9sbGFibGUodGhpcy5pZnJhbWVFbC5jb250ZW50V2luZG93KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PntcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy5tYWtlSGVhZGVyU2Nyb2xsYWJsZShlLnRhcmdldC5jb250ZW50V2luZG93KSlcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBtYWtlSGVhZGVyU2Nyb2xsYWJsZShpZnJhbWVDb250ZW50V2luZG93KSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50SGVhZGVyICYmIG5ldyBIZWFkZXJTY3JvbGxlcihpZnJhbWVDb250ZW50V2luZG93LCB0aGlzLmN1cnJlbnRIZWFkZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzSWZyYW1lVVJMRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pZnJhbWVFbC5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWYgPT09ICdhYm91dDpibGFuaydcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYHRoaXMuY3VycmVudEhlYWRlcmAgdG8gYSBuZXcgSFRNTEVsZW1lbnQgYW5kIGRvZXMgdGhlIHNhbWUgZm9yIGBIZWFkZXJTY3JvbGxlci5oZWFkZXJgXHJcbiAgICogKi9cclxuICBzd2FwSGVhZGVyKG5ld0hlYWRlcikge1xyXG4gICAgdGhpcy5jdXJyZW50SGVhZGVyID0gbmV3SGVhZGVyO1xyXG4gICAgaWYgKHRoaXMuaWZyYW1lRWwgJiYgdGhpcy5oZWFkZXJTY3JvbGxlckluc3QpIHtcclxuICAgICAgdGhpcy5oZWFkZXJTY3JvbGxlckluc3QudGhlbihoZWFkZXJTY3JvbGxlciA9PiBoZWFkZXJTY3JvbGxlci5oZWFkZXIgPSBuZXdIZWFkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtTWVudUF0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmF2aWdhdGlvbi9tZW51LXRyYW5zZm9ybWVyLmpzIiwiY2xhc3MgSGVhZGVyU2Nyb2xsZXIge1xyXG4gIC8qKlxyXG4gICAqIGBIZWFkZXJTY3JvbGxlcmAgaXMgYSBjbGFzcyB0aGF0IGxpc3RlbnMgdG8gYGlmcmFtZUVsYCdzIGNvbnRlbnRXaW5kb3cgc2Nyb2xsIGV2ZW50IGFuZCBzY3JvbGxzIHRoZSBgcmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudGAgd2hlbiB0aGUgaWZyYW1lRWwgaXMgc2Nyb2xsZWRcclxuICAgKiBAcGFyYW0ge1dpbmRvd30gY29udGVudFdpbmRvdyAtIGlmcmFtZUVsLmNvbnRlbnRXaW5kb3dcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZXBvcnRhbEhlYWRlckhUTUxFbGVtZW50IC0gcmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudCBlbGVtZW50IHRoYXQgbmVlZHMgdG8gYmUgc2Nyb2xsZWRcclxuICAgKiAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRXaW5kb3csIHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnRlbnRXaW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID1cclxuICAgICAgY29udGVudFdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgfHwgY29udGVudFdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgfHwgY29udGVudFdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICAgICAgfHwgY29udGVudFdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHJcbiAgICB0aGlzLl9tZXRhICA9IHtcclxuICAgICAgdG9wT2Zmc2V0ICAgIDogbnVsbCxcclxuICAgICAgdGlja2luZyAgICAgIDogZmFsc2UsXHJcbiAgICAgIG9mZnNldEhlaWdodCA6IG51bGwsXHJcbiAgICAgIGhlYWRlciAgICAgICA6IG51bGwsXHJcbiAgICAgIGxhc3RTY3JvbGxZICA6IDAsXHJcbiAgICAgIGNvbnRlbnRXaW5kb3c6IGNvbnRlbnRXaW5kb3dcclxuICAgIH07XHJcbiAgICB0aGlzLmhlYWRlciA9IHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLl9zY3JvbGxDYWxsYmFjayA9IHRoaXMuX3Njcm9sbENhbGxiYWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmF0dGFjaExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhlYWRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9tZXRhLmhlYWRlcjtcclxuICB9XHJcblxyXG4gIHNldCBoZWFkZXIoaGVhZGVyRWxlbWVudCkge1xyXG4gICAgbGV0IG9mZnNldDtcclxuICAgIGlmICh0aGlzLmhlYWRlciAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX21ldGEudG9wT2Zmc2V0ID0gdGhpcy5oZWFkZXJUb3BPZmZzZXQ7XHJcbiAgICAgIHRoaXMuX3Jlc2V0SGVhZGVyKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tZXRhLmhlYWRlciAgICAgICA9IGhlYWRlckVsZW1lbnQ7XHJcbiAgICB0aGlzLl9tZXRhLm9mZnNldEhlaWdodCA9IGhlYWRlckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGhpcy5fY29uZmlndXJlSGVhZGVyKCk7XHJcbiAgICB0aGlzLl9zZXRIZWFkZXJPZmZzZXRJbklmcmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhlYWRlclRvcE9mZnNldCgpIHtcclxuICAgIHJldHVybiB0aGlzLmhlYWRlci5zdHlsZS50b3A7XHJcbiAgfVxyXG5cclxuICBfcmVzZXRIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxhYmxlLWhlYWRlcicpO1xyXG4gICAgaGVhZGVyLnN0eWxlLnRvcCA9IFwiXCI7XHJcbiAgICAvLyB0aGlzLmRldGFjaExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgX2NvbmZpZ3VyZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUtaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuc3R5bGUudG9wID0gdGhpcy5fbWV0YS50b3BPZmZzZXQ7XHJcbiAgfVxyXG5cclxuICBfc2V0SGVhZGVyT2Zmc2V0SW5JZnJhbWUoKSB7XHJcbiAgICBjb25zdCBpZnJhbWVCb2R5ICAgICAgICAgICA9IHRoaXMuX21ldGEuY29udGVudFdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBpZnJhbWVCb2R5LnN0eWxlLnBhZGRpbmdUb3AgPSB0aGlzLl9tZXRhLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RUaWNrKGNhbGxiYWNrKSB7XHJcbiAgICBpZiAoIXRoaXMuX21ldGEudGlja2luZykge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xyXG4gICAgICB0aGlzLl9tZXRhLnRpY2tpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXR0YWNoTGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fbWV0YS5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5fc2Nyb2xsRml4ZWQuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZGV0YWNoTGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fbWV0YS5jb250ZW50V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5fc2Nyb2xsRml4ZWQpO1xyXG4gIH1cclxuXHJcbiAgX3Njcm9sbEZpeGVkKCkge1xyXG4gICAgdGhpcy5fbWV0YS5sYXN0U2Nyb2xsWSA9IHRoaXMuX21ldGEuY29udGVudFdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIHRoaXMucmVxdWVzdFRpY2sodGhpcy5fc2Nyb2xsQ2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgX3Njcm9sbENhbGxiYWNrKCkge1xyXG4gICAgbGV0IG9mZnNldCAgICAgICAgICAgID0gdGhpcy5fbWV0YS5sYXN0U2Nyb2xsWTtcclxuICAgIHRoaXMuaGVhZGVyLnN0eWxlLnRvcCA9IC1vZmZzZXQgKyAncHgnO1xyXG4gICAgdGhpcy5fbWV0YS50aWNraW5nICAgID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJTY3JvbGxlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcjIvaGVhZGVyLXNjcm9sbGVyLmpzIiwiLyoqXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcblxyXG5jbGFzcyBEZXRhYmluYXRvciB7XHJcbiAgLyoqXHJcbiAgICogSGVscHMgdG8gbWFpbnRhaW4gYSBoZWFsdGh5IHRhYnVsYXRpb24gd2l0aGluIHRoZSBzaWRlYmFyIHdoZW4gaXQncyBvcGVuLCByYXRoZXIgdGhhbiB0YWJ1bGF0ZSB0aGUgd2hvbGUgcGFnZVxyXG4gICAqIFVzYWdlOlxyXG4gICAqXHJcbiAgICogYGBgIGphdmFzY3JpcHRcclxuICAgKiBjb25zdCBkZXRhYmluYXRvciA9IG5ldyBEZXRhYmluYXRvcihlbGVtZW50KTtcclxuICAgKiBkZXRhYmluYXRvci5pbmVydCA9IHRydWU7ICAvLyBTZXRzIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gb2YgZWxlbWVudCB0byB0YWJpbmRleD0tMVxyXG4gICAqIGRldGFiaW5hdG9yLmluZXJ0ID0gZmFsc2U7IC8vIFJlc3RvcmVzIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gb2YgZWxlbWVudFxyXG4gICAqIGBgYFxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50LiBuZXcgRGV0YWJpbmF0b3IgbmVlZHMgYW4gZWxlbWVudCByZWZlcmVuY2UnKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2luZXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9ICdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgaWZyYW1lLCBvYmplY3QsIGVtYmVkLCBbdGFiaW5kZXhdLCBbY29udGVudGVkaXRhYmxlXSc7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5lcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5lcnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaW5lcnQoaXNJbmVydCkge1xyXG4gICAgaWYgKHRoaXMuX2luZXJ0ID09PSBpc0luZXJ0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9pbmVydCA9IGlzSW5lcnQ7XHJcblxyXG4gICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudHMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKGlzSW5lcnQpIHtcclxuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaGFzIGFuIGV4cGxpY3QgdGFiaW5kZXggc2F2ZSBpdFxyXG4gICAgICAgIGlmIChjaGlsZC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcclxuICAgICAgICAgIGNoaWxkLl9fc2F2ZWRUYWJpbmRleCA9IGNoaWxkLnRhYkluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXQgQUxMIGZvY3VzYWJsZSBjaGlsZHJlbiB0byB0YWJpbmRleCAtMVxyXG4gICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGhhcyBhIHNhdmVkIHRhYmluZGV4LCByZXN0b3JlIGl0XHJcbiAgICAgICAgLy8gQmVjYXVzZSB0aGUgdmFsdWUgY291bGQgYmUgMCwgZXhwbGljaXRseSBjaGVjayB0aGF0IGl0J3Mgbm90IGZhbHNlXHJcbiAgICAgICAgaWYgKGNoaWxkLl9fc2F2ZWRUYWJpbmRleCA9PT0gMCB8fCBjaGlsZC5fX3NhdmVkVGFiaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgY2hpbGQuX19zYXZlZFRhYmluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gUmVtb3ZlIHRhYmluZGV4IGZyb20gQU5ZIFJFTUFJTklORyBjaGlsZHJlblxyXG4gICAgICAgICAgY2hpbGQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERldGFiaW5hdG9yO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2lkZS1uYXYvZGV0YWJpbmF0b3IuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgRWthdGVyaW5hVCBvbiAyMC4xMi4yMDE3LlxuICovXG4vKiBzY3JpcHRzIGZvciByZXBvcnQgU29NQzogSXNzdWUgVHJhY2tpbmcgUmVwb3J0XHQoMTYyNzQzKSBvbiBFdXJvIHNpdGUsIFN5bXB0b20gT3ZlcnZpZXcgcGFnZSAqL1xuXG4vLyBUaGUgYmVsb3cgc2V0IG9mIGZ1bmN0aW9ucyBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgdG8gcHJvamVjdCBjYXJkczpcbi8vIC0gaGlkZXMgZW1wdHkgcHJvamVjdCBjYXJkc1xuLy8gLSBhcHBsaWVzIEhpZXJhcmNoeSBzdHlsZSB0byB0YWJsZXMgaW5zaWRlIGNvcmRzXG4vLyAtIGFkZHMgZHJpbGwgZG93biBmdW5jdGlvbmFsaXR5XG4vLyAtIGFkZCBNYW5hZ2VtbnQgTm90ZXMgZnVuY3Rpb25hbGl0eVxuXG4vL3VwZ3JhZGVIaWVyYXJjaHlUYWJsZSAtIGNyZWF0ZXMgZmFuY3kgaGllcmFyY2h5IHN0eWxlXG4vL2Jhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9Db25maXJtaXRBU0Evci10YWJsZS1oaWVyYXJjaHkuZ2l0XG5mdW5jdGlvbiB1cGdyYWRlSGllcmFyY2h5VGFibGUodGFibGUsIGhlYWRlcnMpe1xuICB0cnl7XG4gICAgdmFyIHVwZ3JhZGVkVGFibGUgPSBuZXcgUmVwb3J0YWwuVEFoaWVyYXJjaHkoXG4gICAgICB7XG4gICAgICAgIHNvdXJjZTogdGFibGUsXG4gICAgICAgIGhpZXJhcmNoeTogY2F0ZWdvcnlTeW1wdG9tSGllcmFyY2h5LCAvLyBvYmplY3QgY2F0U3ltcFRhYmxlSGVhZGVycyBpcyBwb3B1bGF0ZWQgYnkgc2VydmVyLXNpZGUgcmVwb3J0YWwgc2NyaXB0aW5nIGFkZEpTSGllcmFyY2h5T2JqZWN0VG9UaGVQYWdlXG4gICAgICAgIHJvd2hlYWRlcnM6IGhlYWRlcnMsIC8vIGN1cnJlbnQgdGFibGUncyBoZWFkZXJzIChvYmplY3QgZ2VuZXJhdGVkIHdpdGggcmVwb3J0YWwgc2NyaXB0aW5nKVxuICAgICAgICBzZWFyY2g6e2VuYWJsZWQ6IHRydWV9LFxuICAgICAgICBjbGVhckxpbmtzOmZhbHNlLFxuICAgICAgICBzb3J0aW5nOntlbmFibGVkOnRydWV9LFxuICAgICAgICBmbG9hdGluZ0hlYWRlcjp7ZW5hYmxlZDpmYWxzZX0gLy8gYmVoYXZlcyBhZ2dyZXNzaXZlIHdoZW4gbWFueSByb3dzXG4gICAgICB9XG4gICAgKVxuICB9XG4gIGNhdGNoKGUpe31cblxuICByZXR1cm4gdXBncmFkZWRUYWJsZTtcbn1cblxuLy8gYXBwbHkgcjIgaGllcmFyY2h5IHN0eWxlIHRvIHRhYmxlcyBpbnNpZGUgY2FyZHMgaWYgdGhlcmUgYXJlIG5vdCBlbXB0eSBjYXJkc1xuZnVuY3Rpb24gYXBwbHlIaWVyYXJjaHlTdHlsZVRvVGFibGUoKXtcblxuICBpZihjYXRTeW1wVGFibGVIZWFkZXJzKSAvLyB2YXJpYWJsZSBjYXRTeW1wVGFibGVIZWFkZXJzIGlzIHBvcHVsYXRlZCBieSBzZXJ2ZXItc2lkZSByZXBvcnRhbCBzY3JpcHRpbmcgKGFkZEpTSGllcmFyY2h5T2JqZWN0VG9UaGVQYWdlKVxuICB7XG4gICAgdmFyIHRhYmxlV2l0aEhpZXJhcmNoeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlLnJlcG9ydGFsLWhpZXJhcmNoeS10YWJsZScpO1xuICAgIGZvcih2YXIgaT0wO2k8Y2F0U3ltcFRhYmxlSGVhZGVycy5sZW5ndGg7aSsrKVxuICAgICAgdXBncmFkZUhpZXJhcmNoeVRhYmxlKHRhYmxlV2l0aEhpZXJhcmNoeVtpXSxjYXRTeW1wVGFibGVIZWFkZXJzW2ldKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVmYXVsdCBzb3J0aW5nIGJ5IGNvdW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFyIGNvdW50Q29sID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtY2FyZC0tY29udGVudCAucmVwb3J0YWwtaGllcmFyY2h5LXRhYmxlOmZpcnN0LWNoaWxkIHRyIHRkLnNvcnRhYmxlOmxhc3QtY2hpbGQnKTtcbiAgZm9yKHZhciBpPTA7aTxjb3VudENvbC5sZW5ndGg7aSsrKVxuICAgIGNvdW50Q29sW2ldLmNsaWNrKCk7XG59XG5cbi8vIHNhdmUgcHJvamVjdCBhbmQgc3ltcHRvbSBsYWJlbHMgaW50byBkcmlsbGRvd24gcGFyYW1ldGVyIGlucHV0IGFuZCBwZXJmb3JtIGRyaWxsIGRvd25cbmZ1bmN0aW9uIHNhdmVNaWRkbGVMZXZlbERyaWxsRG93blBhcmFtKGlucHV0V3JhcHBlcklELGJ0bldyYXBwZXJJRCl7XG5cbi8vIGlucHV0V3JhcHBlcklEIC0gd3JhcHBlciBmb3IgaW5wdXQgZm9yIHRleHQgcGFyYW1ldGVyXG4vLyBidG5XcmFwcGVySUQgLSB3cmFwcGVyIGZvciBidXRvb24gdG8gY2xpY2sgb24gYW5kIGp1bXAgdG8gYW5vdGhlciB0aGUgcGFnZVxuXG4gIHZhciBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hdGVyaWFsLWNhcmQnKTtcblxuICBmb3IodmFyIGk9MDtpPGNhcmQubGVuZ3RoO2krKyl7IC8vbG9vcCB0aHJvdWdoIGNhcmRzXG4gICAgY2FyZFtpXS5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgdmFyIGFsbF90ZXh0PSBldmVudC50YXJnZXQ7IC8vIGNoZWNrIHdoYXQgcGFydCBvZiB0aGUgY2FyZCBpcyBjbGlja2VkXG4gICAgICBpZihhbGxfdGV4dC5jbGFzc05hbWUuaW5kZXhPZigncmVwb3J0YWwtcm93LWxhYmVsJyk+LTEpIC8vIGlmIGNhdGVnb3J5L3N5bXB0b20gY2xpY2tlZCB0aGVuIGRyaWxsIGRvd25cbiAgICAgIHtcbiAgICAgICAgdmFyIG1uX3RleHQgPSBhbGxfdGV4dC5xdWVyeVNlbGVjdG9yKCdzcGFuJykhPW51bGwgPyBhbGxfdGV4dC5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgOiAnJzsgLy8gZmlsbCBoaWRkZW4gcGFyYW1ldGVyIHdpdGggbmFtZSBvZiBjYXRlZ29yeSBvciBzeW1wdG9tXG4gICAgICAgIHZhciBzeW1wdG9tTmFtZSA9IGFsbF90ZXh0LnRleHRDb250ZW50LnJlcGxhY2UobW5fdGV4dCwnJyk7XG4gICAgICAgIHZhciBwcm9qZWN0TmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcignLm1hdGVyaWFsLWNhcmQtLXRpdGxlIC5wcm9qZWN0TmFtZScpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGlmKHN5bXB0b21OYW1lLmxlbmd0aD4wICYmIHByb2plY3ROYW1lLmxlbmd0aD4wKXtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlucHV0V3JhcHBlcklEKycgaW5wdXQnKS52YWx1ZSA9IHByb2plY3ROYW1lKydeJytzeW1wdG9tTmFtZTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ0bldyYXBwZXJJRCsnIGlucHV0JykuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cbi8vIGFkZCBNYW5hZ2VtZW50IE5vdGVzXG5mdW5jdGlvbiBhZGRNTmFzVGlwcygpe1xuXG4gIC8vIG1hbmFnZW1udCBub3RlcyBhcmUgdGFrZW4gZnJvbSBhIGhpdCBsaXN0IG9uIHRoZSBwYWdlXG5cbiAgdmFyIG1uX3RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21uX2hpdGxpc3QgLnl1aTMtZGF0YXRhYmxlLXRhYmxlIC55dWkzLWRhdGF0YWJsZS1kYXRhJyk7IC8vIGhpdCBsaXN0IHJvd3Mgd2l0aCBkYXRhXG4gIHZhciBtbl9ub3RlID0gbW5fdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnl1aTMtZGF0YXRhYmxlLWNvbC1Ob3RlcycpOyAvLyBjb2x1bW4gd2l0aCBub3Rlc1xuICB2YXIgbW5fcHJvamVjdCA9IG1uX3RhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy55dWkzLWRhdGF0YWJsZS1jb2wtUHJvamVjdCcpOy8vIGNvbHVtbiB3aXRoIHByb2plY3RzXG4gIHZhciBtbl9zeW1wID0gbW5fdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnl1aTMtZGF0YXRhYmxlLWNvbC1pc3N1ZScpOyAvLyBjb2x1bW4gd2l0aCBzeW1wdG9tc1xuICB2YXIgbW5fY2F0ID0gbW5fdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnl1aTMtZGF0YXRhYmxlLWNvbC1DYXRlZ29yeScpOyAvLyBjb2x1bW4gd2l0aCBzeW1wdG9tc1xuXG4gIHZhciBtbl9vYmplY3QgPSB7fTsgLy8gY3JlYXRlIG9iamVjdCBmb3IgZWFzeSBzZWFyY2ggb2YgYSBub3RlIHtcInN5bXB0b207cHJvamVjdFwiOm5vdGV9XG4gIHZhciBjYXRzV2l0aE1OX29iamVjdCA9IHt9OyAvLyBjYXRlZ29yaWVzIGhhdmluZyBzeW1wdG9tcyB3aXRoIG1hbmFnZW1lbnQgbm90ZXNcblxuICAvL2xvb3AgdGhyb3VnaCBtbiBub3RlcyBhbmQgYWRkIHRvIHRoZSBvYmplY3RcbiAgZm9yKHZhciBpPTA7aTxtbl9zeW1wLmxlbmd0aDtpKyspe1xuICAgIG1uX29iamVjdFttbl9zeW1wW2ldLmlubmVySFRNTCtcIjtcIittbl9wcm9qZWN0W2ldLmlubmVySFRNTF0gPSBtbl9ub3RlW2ldLmlubmVySFRNTDtcbiAgICBjYXRzV2l0aE1OX29iamVjdFttbl9jYXRbaV0uaW5uZXJIVE1MKyc7Jyttbl9wcm9qZWN0W2ldLmlubmVySFRNTF09bnVsbDtcbiAgfVxuXG4gIHZhciBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXRlcmlhbC1jYXJkJyk7Ly8gZ2V0IGFsbCBjYXJkc1xuXG4gIGZvcih2YXIgaj0wO2o8Y2FyZHMubGVuZ3RoO2orKykgLy8gbG9vcCBieSBjYXJkc1xuICB7XG5cbiAgICBpZihjYXJkc1tqXS5xdWVyeVNlbGVjdG9yKCcucmVwb3J0YWwtaGllcmFyY2h5LXRhYmxlJykpe1xuXG4gICAgICB2YXIgcHJvamVjdE5hbWUgPSBjYXJkc1tqXS5xdWVyeVNlbGVjdG9yKCcubWF0ZXJpYWwtY2FyZC0tdGl0bGUgLnByb2plY3ROYW1lJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIHJvd0hlYWRlcnMgPSBjYXJkc1tqXS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCBzcGFuJyk7IC8vIHN5bXB0b21zIGluIHJvd3NcblxuICAgICAgZm9yKHZhciBpPTA7aTxyb3dIZWFkZXJzLmxlbmd0aDtpKyspe1xuICAgICAgICB2YXIgaGVhZGVyVGV4dCA9IHJvd0hlYWRlcnNbaV0uaW5uZXJUZXh0Kyc7Jytwcm9qZWN0TmFtZTsgLy8gYXNzZW1ibGUga2V5IHRvIGxvb2sgZm9yIGluIHRoZSBvYmplY3Q7IGRyaWxsZG93biBvZmZcbiAgICAgICAgaWYobW5fb2JqZWN0Lmhhc093blByb3BlcnR5KGhlYWRlclRleHQpKXsgLy8gY3JlYXRlIGFuZCBhZGQgdGhlIHRvb2wgdGlwXG4gICAgICAgICAgdmFyIGhvdmVyT3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBob3Zlck92ZXIuY2xhc3NOYW1lID0gJ21uQ29udGVudCc7XG4gICAgICAgICAgaG92ZXJPdmVyLmlubmVySFRNTCA9IG1uX29iamVjdFtoZWFkZXJUZXh0XTtcbiAgICAgICAgICByb3dIZWFkZXJzW2ldLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaG92ZXJPdmVyKTtcbiAgICAgICAgICByb3dIZWFkZXJzW2ldLmNsYXNzTmFtZSArPSAnIHRodW1ibmFpbCc7XG4gICAgICAgICAgLy9yb3dIZWFkZXJzW2ldLnBhcmVudE5vZGUuY2xhc3NOYW1lICs9ICcgdGh1bWJuYWlsMic7XG4gICAgICAgICAgZGVsZXRlIG1uX29iamVjdFtoZWFkZXJUZXh0XTsgLy8gcmVtb3ZlIHVzZWQgbm90ZVxuICAgICAgICB9XG4gICAgICAgIGlmKGNhdHNXaXRoTU5fb2JqZWN0Lmhhc093blByb3BlcnR5KGhlYWRlclRleHQpICYmIHJvd0hlYWRlcnNbaV0uY2xhc3NOYW1lLmluZGV4T2YoJ2hhc1N5bXB0b21zV2l0aE5vdGVzJyk8MClcbiAgICAgICAgICByb3dIZWFkZXJzW2ldLmNsYXNzTmFtZSArPSAnIGhhc1N5bXB0b21zV2l0aE5vdGVzJztcblxuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1pZGRsZUxldmVsKCl7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoaWRlIGVtcHR5IHByb2plY3QgY2FyZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YXIgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hdGVyaWFsLWNhcmQtLWNvbnRlbnQnKTtcbiAgZm9yKHZhciBpPTA7aTx0YWJsZXMubGVuZ3RoO2krKylcbiAgICBpZih0YWJsZXNbaV0uaW5uZXJIVE1MID09ICcnKVxuICAgICAgdGFibGVzW2ldLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBhcHBseUhpZXJhcmNoeVN0eWxlVG9UYWJsZSgpO1xuICBzYXZlTWlkZGxlTGV2ZWxEcmlsbERvd25QYXJhbSgnI01pZGRsZUxldmVsX2RyaWxsZG93blByb2plY3RJbnB1dCcsJyNNaWRkbGVMZXZlbF9kcmlsbGRvd25TdWJtaXRCdG4nKTtcblxuICAvLyBhcHBseSBNYW5hZ2VtZW50IE5vdGVzIHdoZW4gaGl0IGxpc3QgaXMgbG9hZGVkXG4gIFkuR2xvYmFsLm9uKCdoaXRsaXN0bG9hZGVkJywgYWRkTU5hc1RpcHMpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NvbWMtc3ltcHRvbS1vdmVydmlldy1wYWdlLXNjcmlwdHMvaGllcmFyY2h5LXRhYmxlLXVwZGF0ZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=