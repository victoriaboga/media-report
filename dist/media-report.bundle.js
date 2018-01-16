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
	
	var _settingsSwitchers = __webpack_require__(13);
	
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
	window.SOMC.Switchers = { createButtonList: _settingsSwitchers.createButtonList, createHeaderForButtonList: _settingsSwitchers.createHeaderForButtonList, createButtonValueIndex: _settingsSwitchers.createButtonValueIndex, createButtonIdIndex: _settingsSwitchers.createButtonIdIndex, createDivForButtonAndLabel: _settingsSwitchers.createDivForButtonAndLabel, createButtonForList: _settingsSwitchers.createButtonForList, createLabelForButtonInList: _settingsSwitchers.createLabelForButtonInList,
	  checkButtonsOnInitialPositions: _settingsSwitchers.checkButtonsOnInitialPositions, applyStyleForOneButton: _settingsSwitchers.applyStyleForOneButton, applyStylesForAllButtonsInLists: _settingsSwitchers.applyStylesForAllButtonsInLists, handleButtonClick: _settingsSwitchers.handleButtonClick, findWhichButtonWasCheckedBeforeClick: _settingsSwitchers.findWhichButtonWasCheckedBeforeClick, changeButtonStyleOnClick: _settingsSwitchers.changeButtonStyleOnClick,
	  changeDivStyleOnClick: _settingsSwitchers.changeDivStyleOnClick, changeLabelStyleOnClick: _settingsSwitchers.changeLabelStyleOnClick, changeInputTextOnClick: _settingsSwitchers.changeInputTextOnClick, SetChartSettingsCheckers: _settingsSwitchers.SetChartSettingsCheckers };

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

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	
	
	var inputHeaders = [["", ""]];
	var inputLists = [[["Rolling average", "Number of hits"], ["Category", "Symptom"]]];
	
	*/
	
	function createButtonList(numberOfListInPair) {
	  var divButtonList = document.createElement('div');
	  if (numberOfListInPair % 2 !== 0) {
	    divButtonList.className = 'buttonList rightList';
	  } else {
	    divButtonList.className = 'buttonList leftList';
	  }
	  return divButtonList;
	}
	function createHeaderForButtonList(numberOfListInPair, inputHeaders) {
	  var divButtonListHeader = document.createElement('div');
	  divButtonListHeader.className = 'btnListHeader';
	  divButtonListHeader.innerHTML = inputHeaders[0][numberOfListInPair];
	  return divButtonListHeader;
	}
	function createButtonValueIndex(numberOfButtonInList, pairsOfListsCount) {
	  return 'r' + '_' + (numberOfButtonInList + 1) + '_' + (pairsOfListsCount + 1);
	}
	function createButtonIdIndex(numberOfListInPair, numberOfButtonInList, pairsOfListsCount) {
	  return 'r' + '_' + (numberOfListInPair + 1) + '_' + (numberOfButtonInList + 1) + '_' + (pairsOfListsCount + 1);
	}
	function createDivForButtonAndLabel(divButtonClass, buttonId) {
	  var divRadio = document.createElement('div');
	  divRadio.className = divButtonClass;
	  divRadio.setAttribute('id', 'div' + buttonId);
	  return divRadio;
	}
	function createButtonForList(numberOfListInPair, numberOfCard, buttonValue, buttonId) {
	  var inputRadio = document.createElement('input');
	  inputRadio.setAttribute('type', 'radio');
	  if (numberOfListInPair % 2 !== 0) {
	    inputRadio.setAttribute('name', 'right' + (numberOfCard + 1));
	  } else {
	    inputRadio.setAttribute('name', 'left' + (numberOfCard + 1));
	  }
	  inputRadio.setAttribute('value', buttonValue);
	  inputRadio.setAttribute('id', buttonId);
	  inputRadio.className = 'radiobuttonBlueInput';
	  return inputRadio;
	}
	function createLabelForButtonInList(numberOfListInPair, numberOfButtonInList, buttonIdIndex, customButtonAppearance, inputLists) {
	  var labelForRadioBlue = document.createElement('label');
	  labelForRadioBlue.className = buttonIdIndex + 'label';
	  labelForRadioBlue.setAttribute('for', buttonIdIndex);
	
	  var innerHtmlForLabel = customButtonAppearance;
	  labelForRadioBlue.innerHTML = innerHtmlForLabel + inputLists[0][numberOfListInPair][numberOfButtonInList];
	  return labelForRadioBlue;
	}
	function checkButtonsOnInitialPositions(numberOfListInPair, numberOfButtonInList, currentButton, divForCurrentButton, separatedInputTextI, pairsOfListsCount, delimiterForStatesInOnePair, checkedDiv) {
	  if (numberOfButtonInList == separatedInputTextI[pairsOfListsCount].split(delimiterForStatesInOnePair)[numberOfListInPair]) {
	    currentButton.setAttribute('checked', 'true');
	    divForCurrentButton.style.backgroundColor = checkedDiv.backgroundColor;
	  }
	}
	function applyStyleForOneButton(currentDiv, currentLabel, outerCircleStrokeColor, outerCircleFillColor, innerCircleFillColor, textColor) {
	  var outerCircle = currentDiv.getElementsByClassName('outerBlueCircle');
	  var innerCircle = currentDiv.getElementsByClassName('innerBlueCircle');
	  outerCircle[0].style.stroke = outerCircleStrokeColor;
	  outerCircle[0].style.fill = outerCircleFillColor;
	  innerCircle[0].style.fill = innerCircleFillColor;
	
	  currentLabel.style.color = textColor;
	}
	function applyStylesForAllButtonsInLists(separatedInputTextI, numberOfListInPair, currentDiv, currentLabel, pairsOfListsCount, delimiterForStatesInOnePair, uncheckedDiv, checkedDiv, j) {
	  if (j == separatedInputTextI[pairsOfListsCount].split(delimiterForStatesInOnePair)[numberOfListInPair]) {
	    applyStyleForOneButton(currentDiv, currentLabel, checkedDiv.outerCircleColor, checkedDiv.outerCircleFill, checkedDiv.innerCircleColor, checkedDiv.textColor);
	  } else {
	    applyStyleForOneButton(currentDiv, currentLabel, uncheckedDiv.outerCircleColor, uncheckedDiv.outerCircleFill, uncheckedDiv.innerCircleColor, uncheckedDiv.textColor);
	  }
	}
	function handleButtonClick(delimiterForStatesInOnePair, buttonToClickClass, delimiterForStatesOfDifferentPairs, button, uncheckedDiv, checkedDiv, listInput) {
	  var currentButtonId = button.getAttribute('id');
	  var divToChange = document.getElementById('div' + currentButtonId);
	  var currentList = divToChange.parentNode;
	  var divsInCurrentList = currentList.childNodes;
	
	  var divChosenPreviouslyId = findWhichButtonWasCheckedBeforeClick(divsInCurrentList);
	  var previousDivToChange = document.getElementById(divChosenPreviouslyId);
	
	  if (divChosenPreviouslyId.substring(3) !== currentButtonId) {
	    changeDivStyleOnClick(previousDivToChange, divToChange, uncheckedDiv.backgroundColor, checkedDiv.backgroundColor);
	
	    var outerCircle = divToChange.getElementsByClassName('outerBlueCircle');
	    var innerCircle = divToChange.getElementsByClassName('innerBlueCircle');
	    var previousOuterCircle = previousDivToChange.getElementsByClassName('outerBlueCircle');
	    var previousInnerCircle = previousDivToChange.getElementsByClassName('innerBlueCircle');
	
	    changeButtonStyleOnClick(outerCircle, innerCircle, previousOuterCircle, previousInnerCircle, checkedDiv, uncheckedDiv);
	
	    var previousButtonId = divChosenPreviouslyId.substring(3);
	    var currentLabelToChange = divToChange.getElementsByClassName(currentButtonId + 'label');
	    var previousLabelToChange = previousDivToChange.getElementsByClassName(previousButtonId + 'label');
	    changeLabelStyleOnClick(currentLabelToChange[0], previousLabelToChange[0], uncheckedDiv.backgroundColor, uncheckedDiv.textColor);
	
	    var separateButtonIndexForPosition = currentButtonId.split('_');
	    var currentButtonPosition = [separateButtonIndexForPosition[1], separateButtonIndexForPosition[2], separateButtonIndexForPosition[3]];
	
	    var inputText = listInput.getAttribute('value');
	    var separatedInputText = inputText.split(delimiterForStatesOfDifferentPairs);
	
	    var newInputText = changeInputTextOnClick(separatedInputText, currentButtonPosition, delimiterForStatesInOnePair, delimiterForStatesOfDifferentPairs);
	
	    listInput.setAttribute('value', newInputText);
	    var buttonToClick = document.getElementsByClassName(buttonToClickClass)[0];
	    buttonToClick.click();
	  }
	}
	function findWhichButtonWasCheckedBeforeClick(divsInCurrentList) {
	  var result;
	  for (var i = divsInCurrentList.length - 1; i >= 0; i--) {
	    var currentDivId = divsInCurrentList[i].getAttribute('id');
	    if (!document.getElementById(currentDivId.substring(3)).checked) {
	      result = currentDivId;
	      break;
	    }
	  }
	  return result;
	}
	function changeDivStyleOnClick(previousDivToChange, divToChange, uncheckedDivBackgroundColor, checkedDivBackgroundColor) {
	  previousDivToChange.style.backgroundColor = uncheckedDivBackgroundColor;
	  divToChange.style.backgroundColor = checkedDivBackgroundColor;
	}
	function changeButtonStyleOnClick(outerCircle, innerCircle, previousOuterCircle, previousInnerCircle, checkedDiv, uncheckedDiv) {
	  outerCircle[0].style.stroke = checkedDiv.outerCircleColor;
	  outerCircle[0].style.fill = checkedDiv.outerCircleFill;
	  innerCircle[0].style.fill = checkedDiv.innerCircleColor;
	  previousOuterCircle[0].style.stroke = uncheckedDiv.outerCircleColor;
	  previousOuterCircle[0].style.fill = uncheckedDiv.outerCircleFill;
	  previousInnerCircle[0].style.fill = uncheckedDiv.innerCircleColor;
	}
	function changeLabelStyleOnClick(currentLabelToChange, previousLabelToChange, uncheckedDivBackgroundColor, textOnUncheckedButtonsColor) {
	  currentLabelToChange.style.color = uncheckedDivBackgroundColor;
	  previousLabelToChange.style.color = textOnUncheckedButtonsColor;
	}
	function changeInputTextOnClick(separatedInputText, currentButtonPosition, delimiterForStatesInOnePair, delimiterForStatesOfDifferentPairs) {
	  var result = '';
	  for (var j = 0; j < separatedInputText.length; j++) {
	    var separatedInputForEachPair = separatedInputText[j].split(delimiterForStatesInOnePair);
	    if (j + 1 == currentButtonPosition[2]) {
	      if (currentButtonPosition[0] == '1') {
	        if (separatedInputForEachPair[0] == '0') {
	          result += '1' + delimiterForStatesInOnePair + separatedInputForEachPair[1] + delimiterForStatesOfDifferentPairs;
	        } else if (separatedInputForEachPair[0] == '1') {
	          result += '0' + delimiterForStatesInOnePair + separatedInputForEachPair[1] + delimiterForStatesOfDifferentPairs;
	        }
	      } else if (currentButtonPosition[0] == '2') {
	        if (separatedInputForEachPair[1] == '0') {
	          result += separatedInputForEachPair[0] + delimiterForStatesInOnePair + '1' + delimiterForStatesOfDifferentPairs;
	        } else if (separatedInputForEachPair[1] == '1') {
	          result += separatedInputForEachPair[0] + delimiterForStatesInOnePair + '0' + delimiterForStatesOfDifferentPairs;
	        }
	      }
	    } else {
	      result += separatedInputText[j] + delimiterForStatesOfDifferentPairs;
	    }
	  }
	  return result;
	}
	
	function SetChartSettingsCheckers(inputHeaders, inputLists) {
	  /* Config */
	  var checkedDiv = { backgroundColor: '#5787f4', textColor: '#ffffff', outerCircleColor: '#ffffff', outerCircleFill: 'transparent', innerCircleColor: '#ffffff' };
	  var uncheckedDiv = { backgroundColor: '#ffffff', textColor: '#000000', outerCircleColor: '#5787f4', outerCircleFill: '#ffffff', innerCircleColor: '#ffffff' };
	
	  var customButtonAppearance = '<svg class="radioBtnReplacement" cx="50%" cy="70%"><circle r="5" class="outerBlueCircle"/> <circle r="2" class="innerBlueCircle"/></svg>';
	
	  var containerClassName = 'card-parameters';
	  var buttonToClickClass = 'reportal-button';
	  var divButtonClass = 'radiobutton-blue';
	  var delimiterForStatesOfDifferentPairs = ' ';
	  var delimiterForStatesInOnePair = '_';
	  var listInputClass = 'inputForStateOfSwitchers';
	  /* EndConfig*/
	
	  var listInput = document.getElementsByClassName(listInputClass)[0].children[0].children[0];
	  var mainContainer = document.getElementsByClassName(containerClassName);
	  var inputTextI = listInput.getAttribute('value');
	  var separatedInputTextI = inputTextI.split(delimiterForStatesOfDifferentPairs);
	  var pairsOfListsCount = -1;
	
	  for (var l = 0; l < separatedInputTextI.length; l++) {
	    if (mainContainer[l].childElementCount == 0) {
	      pairsOfListsCount++;
	      var outerContainer = document.createElement('div');
	      outerContainer.className = 'outerContainer';
	      mainContainer[l].appendChild(outerContainer);
	
	      for (var i = 0; i < inputHeaders[0].length; i++) {
	        /* create containers for each switcher */
	        var divButtonList = createButtonList(i);
	        var divButtonListHeader = createHeaderForButtonList(i, inputHeaders);
	
	        outerContainer.appendChild(divButtonList);
	        divButtonList.appendChild(divButtonListHeader);
	
	        for (var j = 0; j < inputLists[0][i].length; j++) {
	          /* create elements inside each container for each option */
	          var buttonValueIndex = createButtonValueIndex(j, pairsOfListsCount);
	          var buttonIdIndex = createButtonIdIndex(i, j, pairsOfListsCount);
	
	          var divRadio = createDivForButtonAndLabel(divButtonClass, buttonIdIndex);
	          var inputRadio = createButtonForList(i, l, buttonValueIndex, buttonIdIndex);
	          var labelForRadio = createLabelForButtonInList(i, j, buttonIdIndex, customButtonAppearance, inputLists);
	
	          inputTextI = listInput.getAttribute('value');
	          separatedInputTextI = inputTextI.split(delimiterForStatesOfDifferentPairs);
	
	          checkButtonsOnInitialPositions(i, j, inputRadio, divRadio, separatedInputTextI, pairsOfListsCount, delimiterForStatesInOnePair, checkedDiv);
	
	          divButtonList.appendChild(divRadio);
	          divRadio.appendChild(inputRadio);
	          divRadio.appendChild(labelForRadio);
	
	          applyStylesForAllButtonsInLists(separatedInputTextI, i, divRadio, labelForRadio, pairsOfListsCount, delimiterForStatesInOnePair, uncheckedDiv, checkedDiv, j);
	
	          inputRadio.addEventListener('click', function () {
	            handleButtonClick(delimiterForStatesInOnePair, buttonToClickClass, delimiterForStatesOfDifferentPairs, this, uncheckedDiv, checkedDiv, listInput);
	          }, false);
	        }
	      }
	    }
	  }
	}
	
	exports.default = { createButtonList: createButtonList, createHeaderForButtonList: createHeaderForButtonList, createButtonValueIndex: createButtonValueIndex, createButtonIdIndex: createButtonIdIndex, createDivForButtonAndLabel: createDivForButtonAndLabel, createButtonForList: createButtonForList, createLabelForButtonInList: createLabelForButtonInList,
	  checkButtonsOnInitialPositions: checkButtonsOnInitialPositions, applyStyleForOneButton: applyStyleForOneButton, applyStylesForAllButtonsInLists: applyStylesForAllButtonsInLists, handleButtonClick: handleButtonClick, findWhichButtonWasCheckedBeforeClick: findWhichButtonWasCheckedBeforeClick, changeButtonStyleOnClick: changeButtonStyleOnClick,
	  changeDivStyleOnClick: changeDivStyleOnClick, changeLabelStyleOnClick: changeLabelStyleOnClick, changeInputTextOnClick: changeInputTextOnClick, SetChartSettingsCheckers: SetChartSettingsCheckers };
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlYWY2MWEzMjM1MTJmN2UwMWYyMiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tZWRpYS1xdWVyeS9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGllcmFyY2h5L2hpZXJhcmNoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2aWdhdGlvbi9tZW51LXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yMi9oZWFkZXItc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZGUtbmF2L2RldGFiaW5hdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zb21jLXN5bXB0b20tb3ZlcnZpZXctcGFnZS1zY3JpcHRzL2hpZXJhcmNoeS10YWJsZS11cGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3Mgc3dpdGNoZXJzL3NldHRpbmdzLXN3aXRjaGVycy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiUmVwb3J0YWwiLCJUcmFuc2Zvcm1NZW51QXQiLCJTaWRlTmF2IiwiaGllcmFyY2h5VXBncmFkZSIsInVwZ3JhZGUiLCJTT01DIiwicmVuZGVyTWlkZGxlTGV2ZWwiLCJTd2l0Y2hlcnMiLCJjcmVhdGVCdXR0b25MaXN0IiwiY3JlYXRlSGVhZGVyRm9yQnV0dG9uTGlzdCIsImNyZWF0ZUJ1dHRvblZhbHVlSW5kZXgiLCJjcmVhdGVCdXR0b25JZEluZGV4IiwiY3JlYXRlRGl2Rm9yQnV0dG9uQW5kTGFiZWwiLCJjcmVhdGVCdXR0b25Gb3JMaXN0IiwiY3JlYXRlTGFiZWxGb3JCdXR0b25Jbkxpc3QiLCJjaGVja0J1dHRvbnNPbkluaXRpYWxQb3NpdGlvbnMiLCJhcHBseVN0eWxlRm9yT25lQnV0dG9uIiwiYXBwbHlTdHlsZXNGb3JBbGxCdXR0b25zSW5MaXN0cyIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZmluZFdoaWNoQnV0dG9uV2FzQ2hlY2tlZEJlZm9yZUNsaWNrIiwiY2hhbmdlQnV0dG9uU3R5bGVPbkNsaWNrIiwiY2hhbmdlRGl2U3R5bGVPbkNsaWNrIiwiY2hhbmdlTGFiZWxTdHlsZU9uQ2xpY2siLCJjaGFuZ2VJbnB1dFRleHRPbkNsaWNrIiwiU2V0Q2hhcnRTZXR0aW5nc0NoZWNrZXJzIiwic2hvd0J1dHRvbkVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZUJ1dHRvbkVsIiwic2lkZU5hdkVsIiwic2lkZU5hdkNvbnRhaW5lckVsIiwiZGV0YWJpbmF0b3IiLCJpbmVydCIsInNob3dTaWRlTmF2IiwiYmluZCIsImhpZGVTaWRlTmF2IiwiYmxvY2tDbGlja3MiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJvblRyYW5zaXRpb25FbmQiLCJ1cGRhdGUiLCJzdGFydFgiLCJjdXJyZW50WCIsInRvdWNoaW5nU2lkZU5hdiIsInN1cHBvcnRzUGFzc2l2ZSIsInVuZGVmaW5lZCIsInBhc3NpdmUiLCJpc1N1cHBvcnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYXBwbHlQYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG91Y2hlcyIsInBhZ2VYIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidHJhbnNsYXRlWCIsIk1hdGgiLCJtaW4iLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlbW92ZSIsIm92ZXJmbG93IiwiYWRkIiwic3RvcFByb3BhZ2F0aW9uIiwiTWVkaWFRdWVyeSIsIm9wdGlvbnMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJxdWVyeSIsImZ1bGwiLCJfbWF0Y2hlcyIsIl9tcSIsIl9jYWxsYmFjayIsIl9jb250ZXh0IiwiX2JvdW5kIiwiX29uTWF0Y2giLCJtcSIsIm1hdGNoZXMiLCJjYWxsIiwiX3F1ZXJ5IiwidmFsIiwiY29uc3RydWN0b3IiLCJtYXRjaE1lZGlhIiwiYm91bmQiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiTURIaWVyYXJjaHkiLCJoaWVyYXJjaHlCdXR0b24iLCJoaWVyYXJjaHlUb2dnbGUiLCJoaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIiLCJQcm9taXNlIiwic2V0VGltZW91dCIsImhpZXJhcmNoeUNocm9tZSIsInJlc29sdmUiLCJhc3luY0hpZXJhcmNoeUNocm9tZSIsImRldGFjaEhpZXJhcmNoeVRvZ2dsZUNsaWNrTGlzdGVuZXIiLCJkaXNhYmxlUGFnZVNjcm9sbCIsInRoZW4iLCJhdHRhY2hDaHJvbWVDbG9zZUxpc3RlbmVyIiwib25DaHJvbWVDbG9zZSIsImV2ZW50IiwiY2FuY2VsIiwiY2FuY2VsQnV0dG9uIiwiYXBwbHkiLCJhcHBseUJ1dHRvbiIsImNocm9tZSIsImNsaWNrZWRFbCIsInBhdGgiLCJpbmRleE9mIiwiY2xpY2siLCJlbmFibGVQYWdlU2Nyb2xsIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyZW50Tm9kZSIsImJyZWFrcG9pbnQiLCJpZnJhbWVDbGFzc05hbWUiLCJkZXNrdG9wSGVhZGVyQ2xhc3NOYW1lIiwibW9iaWxlSGVhZGVyQ2xhc3NOYW1lIiwiaWZyYW1lRWwiLCJkZXNrdG9wSGVhZGVyRWwiLCJtb2JpbGVIZWFkZXJFbCIsImN1cnJlbnRIZWFkZXIiLCJpc0ludGVncmF0aW9uTW9kZSIsInN3YXBIZWFkZXJBbmRJZnJhbWUiLCJoZWFkZXJTY3JvbGxlckluc3QiLCJtYWtlSGVhZGVyUmVzcG9uZFRvSWZyYW1lU2Nyb2xsIiwiaGFuZGxlQnJlYWtwb2ludE1hdGNoIiwic2lkZW5hdiIsIm1lZGlhUXVlcnkiLCJiZWxvd0JyZWFrcG9pbnQiLCJzd2FwSGVhZGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVycyIsImlzSWZyYW1lVVJMRW1wdHkiLCJtYWtlSGVhZGVyU2Nyb2xsYWJsZSIsImNvbnRlbnRXaW5kb3ciLCJ0YXJnZXQiLCJpZnJhbWVDb250ZW50V2luZG93IiwibmV3SGVhZGVyIiwiaGVhZGVyU2Nyb2xsZXIiLCJoZWFkZXIiLCJsb2NhdGlvbiIsImhyZWYiLCJIZWFkZXJTY3JvbGxlciIsInJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9tZXRhIiwidG9wT2Zmc2V0IiwidGlja2luZyIsIm9mZnNldEhlaWdodCIsImxhc3RTY3JvbGxZIiwiX3Njcm9sbENhbGxiYWNrIiwiYXR0YWNoTGlzdGVuZXJzIiwidG9wIiwiaWZyYW1lQm9keSIsInBhZGRpbmdUb3AiLCJfc2Nyb2xsRml4ZWQiLCJwYWdlWU9mZnNldCIsInJlcXVlc3RUaWNrIiwib2Zmc2V0IiwiaGVhZGVyRWxlbWVudCIsImhlYWRlclRvcE9mZnNldCIsIl9yZXNldEhlYWRlciIsIl9jb25maWd1cmVIZWFkZXIiLCJfc2V0SGVhZGVyT2Zmc2V0SW5JZnJhbWUiLCJEZXRhYmluYXRvciIsImVsZW1lbnQiLCJFcnJvciIsIl9pbmVydCIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsIl9mb2N1c2FibGVFbGVtZW50cyIsInNsaWNlIiwicXVlcnlTZWxlY3RvckFsbCIsImlzSW5lcnQiLCJmb3JFYWNoIiwiY2hpbGQiLCJoYXNBdHRyaWJ1dGUiLCJfX3NhdmVkVGFiaW5kZXgiLCJ0YWJJbmRleCIsInVwZ3JhZGVIaWVyYXJjaHlUYWJsZSIsInRhYmxlIiwiaGVhZGVycyIsInVwZ3JhZGVkVGFibGUiLCJUQWhpZXJhcmNoeSIsInNvdXJjZSIsImhpZXJhcmNoeSIsImNhdGVnb3J5U3ltcHRvbUhpZXJhcmNoeSIsInJvd2hlYWRlcnMiLCJzZWFyY2giLCJlbmFibGVkIiwiY2xlYXJMaW5rcyIsInNvcnRpbmciLCJmbG9hdGluZ0hlYWRlciIsImFwcGx5SGllcmFyY2h5U3R5bGVUb1RhYmxlIiwiY2F0U3ltcFRhYmxlSGVhZGVycyIsInRhYmxlV2l0aEhpZXJhcmNoeSIsImkiLCJsZW5ndGgiLCJjb3VudENvbCIsInNhdmVNaWRkbGVMZXZlbERyaWxsRG93blBhcmFtIiwiaW5wdXRXcmFwcGVySUQiLCJidG5XcmFwcGVySUQiLCJjYXJkIiwib25jbGljayIsImFsbF90ZXh0IiwiY2xhc3NOYW1lIiwibW5fdGV4dCIsInRleHRDb250ZW50Iiwic3ltcHRvbU5hbWUiLCJyZXBsYWNlIiwicHJvamVjdE5hbWUiLCJ2YWx1ZSIsImFkZE1OYXNUaXBzIiwibW5fdGFibGUiLCJtbl9ub3RlIiwibW5fcHJvamVjdCIsIm1uX3N5bXAiLCJtbl9jYXQiLCJtbl9vYmplY3QiLCJjYXRzV2l0aE1OX29iamVjdCIsImlubmVySFRNTCIsImNhcmRzIiwiaiIsInJvd0hlYWRlcnMiLCJoZWFkZXJUZXh0IiwiaW5uZXJUZXh0IiwiaGFzT3duUHJvcGVydHkiLCJob3Zlck92ZXIiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0YWJsZXMiLCJwYXJlbnRFbGVtZW50IiwiZGlzcGxheSIsIlkiLCJHbG9iYWwiLCJvbiIsIm51bWJlck9mTGlzdEluUGFpciIsImRpdkJ1dHRvbkxpc3QiLCJpbnB1dEhlYWRlcnMiLCJkaXZCdXR0b25MaXN0SGVhZGVyIiwibnVtYmVyT2ZCdXR0b25Jbkxpc3QiLCJwYWlyc09mTGlzdHNDb3VudCIsImRpdkJ1dHRvbkNsYXNzIiwiYnV0dG9uSWQiLCJkaXZSYWRpbyIsIm51bWJlck9mQ2FyZCIsImJ1dHRvblZhbHVlIiwiaW5wdXRSYWRpbyIsImJ1dHRvbklkSW5kZXgiLCJjdXN0b21CdXR0b25BcHBlYXJhbmNlIiwiaW5wdXRMaXN0cyIsImxhYmVsRm9yUmFkaW9CbHVlIiwiaW5uZXJIdG1sRm9yTGFiZWwiLCJjdXJyZW50QnV0dG9uIiwiZGl2Rm9yQ3VycmVudEJ1dHRvbiIsInNlcGFyYXRlZElucHV0VGV4dEkiLCJkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIiLCJjaGVja2VkRGl2Iiwic3BsaXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJyZW50RGl2IiwiY3VycmVudExhYmVsIiwib3V0ZXJDaXJjbGVTdHJva2VDb2xvciIsIm91dGVyQ2lyY2xlRmlsbENvbG9yIiwiaW5uZXJDaXJjbGVGaWxsQ29sb3IiLCJ0ZXh0Q29sb3IiLCJvdXRlckNpcmNsZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckNpcmNsZSIsInN0cm9rZSIsImZpbGwiLCJjb2xvciIsInVuY2hlY2tlZERpdiIsIm91dGVyQ2lyY2xlQ29sb3IiLCJvdXRlckNpcmNsZUZpbGwiLCJpbm5lckNpcmNsZUNvbG9yIiwiYnV0dG9uVG9DbGlja0NsYXNzIiwiZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycyIsImJ1dHRvbiIsImxpc3RJbnB1dCIsImN1cnJlbnRCdXR0b25JZCIsImdldEF0dHJpYnV0ZSIsImRpdlRvQ2hhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50TGlzdCIsImRpdnNJbkN1cnJlbnRMaXN0IiwiY2hpbGROb2RlcyIsImRpdkNob3NlblByZXZpb3VzbHlJZCIsInByZXZpb3VzRGl2VG9DaGFuZ2UiLCJzdWJzdHJpbmciLCJwcmV2aW91c091dGVyQ2lyY2xlIiwicHJldmlvdXNJbm5lckNpcmNsZSIsInByZXZpb3VzQnV0dG9uSWQiLCJjdXJyZW50TGFiZWxUb0NoYW5nZSIsInByZXZpb3VzTGFiZWxUb0NoYW5nZSIsInNlcGFyYXRlQnV0dG9uSW5kZXhGb3JQb3NpdGlvbiIsImN1cnJlbnRCdXR0b25Qb3NpdGlvbiIsImlucHV0VGV4dCIsInNlcGFyYXRlZElucHV0VGV4dCIsIm5ld0lucHV0VGV4dCIsImJ1dHRvblRvQ2xpY2siLCJyZXN1bHQiLCJjdXJyZW50RGl2SWQiLCJjaGVja2VkIiwidW5jaGVja2VkRGl2QmFja2dyb3VuZENvbG9yIiwiY2hlY2tlZERpdkJhY2tncm91bmRDb2xvciIsInRleHRPblVuY2hlY2tlZEJ1dHRvbnNDb2xvciIsInNlcGFyYXRlZElucHV0Rm9yRWFjaFBhaXIiLCJjb250YWluZXJDbGFzc05hbWUiLCJsaXN0SW5wdXRDbGFzcyIsImNoaWxkcmVuIiwibWFpbkNvbnRhaW5lciIsImlucHV0VGV4dEkiLCJsIiwiY2hpbGRFbGVtZW50Q291bnQiLCJvdXRlckNvbnRhaW5lciIsImJ1dHRvblZhbHVlSW5kZXgiLCJsYWJlbEZvclJhZGlvIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNwQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBR0E7Ozs7OztBQVZBLG9CQUFBQSxDQUFRLENBQVI7O0FBWUFDLFFBQU9DLFFBQVAsR0FBa0JELE9BQU9DLFFBQVAsSUFBbUIsRUFBckM7QUFDQUQsUUFBT0MsUUFBUCxDQUFnQkMsZUFBaEI7QUFDQUYsUUFBT0MsUUFBUCxDQUFnQkUsT0FBaEI7QUFDQUgsUUFBT0MsUUFBUCxDQUFnQkcsZ0JBQWhCLEdBQW1DLG9CQUFZQyxPQUEvQzs7QUFFQUwsUUFBT00sSUFBUCxHQUFjTixPQUFPTSxJQUFQLElBQWUsRUFBN0I7QUFDQU4sUUFBT00sSUFBUCxDQUFZQyxpQkFBWjtBQUNBUCxRQUFPTSxJQUFQLENBQVlFLFNBQVosR0FBd0IsRUFBRUMscURBQUYsRUFBb0JDLHVFQUFwQixFQUErQ0MsaUVBQS9DLEVBQXVFQywyREFBdkUsRUFBNEZDLHlFQUE1RixFQUF3SEMsMkRBQXhI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bWVkaWEtcmVwb3J0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWFmNjFhMzIzNTEyZjdlMDFmMjIiLCJyZXF1aXJlKCcuL21haW4uY3NzJyk7XHJcblxyXG5pbXBvcnQgTURIaWVyYXJjaHkgZnJvbSBcIi4vaGllcmFyY2h5L2hpZXJhcmNoeVwiO1xyXG5pbXBvcnQgVHJhbnNmb3JtTWVudUF0IGZyb20gXCIuL25hdmlnYXRpb24vbWVudS10cmFuc2Zvcm1lclwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuL3NpZGUtbmF2L3NpZGUtbmF2JztcclxuXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVCdXR0b25MaXN0LCBjcmVhdGVIZWFkZXJGb3JCdXR0b25MaXN0LCBjcmVhdGVCdXR0b25WYWx1ZUluZGV4LCBjcmVhdGVCdXR0b25JZEluZGV4LCBjcmVhdGVEaXZGb3JCdXR0b25BbmRMYWJlbCwgY3JlYXRlQnV0dG9uRm9yTGlzdCwgY3JlYXRlTGFiZWxGb3JCdXR0b25Jbkxpc3QsXHJcbiAgY2hlY2tCdXR0b25zT25Jbml0aWFsUG9zaXRpb25zLCBhcHBseVN0eWxlRm9yT25lQnV0dG9uLCBhcHBseVN0eWxlc0ZvckFsbEJ1dHRvbnNJbkxpc3RzLCBoYW5kbGVCdXR0b25DbGljaywgZmluZFdoaWNoQnV0dG9uV2FzQ2hlY2tlZEJlZm9yZUNsaWNrLCBjaGFuZ2VCdXR0b25TdHlsZU9uQ2xpY2ssXHJcbiAgY2hhbmdlRGl2U3R5bGVPbkNsaWNrLCBjaGFuZ2VMYWJlbFN0eWxlT25DbGljaywgY2hhbmdlSW5wdXRUZXh0T25DbGljaywgU2V0Q2hhcnRTZXR0aW5nc0NoZWNrZXJzfSBmcm9tICcuL3NldHRpbmdzIHN3aXRjaGVycy9zZXR0aW5ncy1zd2l0Y2hlcnMnO1xyXG5pbXBvcnQgcmVuZGVyTWlkZGxlTGV2ZWwgZnJvbSAnLi9zb21jLXN5bXB0b20tb3ZlcnZpZXctcGFnZS1zY3JpcHRzL2hpZXJhcmNoeS10YWJsZS11cGRhdGVzJztcclxuXHJcbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcclxud2luZG93LlJlcG9ydGFsLlRyYW5zZm9ybU1lbnVBdCA9IFRyYW5zZm9ybU1lbnVBdDtcclxud2luZG93LlJlcG9ydGFsLlNpZGVOYXYgPSBTaWRlTmF2O1xyXG53aW5kb3cuUmVwb3J0YWwuaGllcmFyY2h5VXBncmFkZSA9IE1ESGllcmFyY2h5LnVwZ3JhZGU7XHJcblxyXG53aW5kb3cuU09NQyA9IHdpbmRvdy5TT01DIHx8IHt9O1xyXG53aW5kb3cuU09NQy5yZW5kZXJNaWRkbGVMZXZlbCA9IHJlbmRlck1pZGRsZUxldmVsO1xyXG53aW5kb3cuU09NQy5Td2l0Y2hlcnMgPSB7IGNyZWF0ZUJ1dHRvbkxpc3QsIGNyZWF0ZUhlYWRlckZvckJ1dHRvbkxpc3QsIGNyZWF0ZUJ1dHRvblZhbHVlSW5kZXgsIGNyZWF0ZUJ1dHRvbklkSW5kZXgsIGNyZWF0ZURpdkZvckJ1dHRvbkFuZExhYmVsLCBjcmVhdGVCdXR0b25Gb3JMaXN0LCBjcmVhdGVMYWJlbEZvckJ1dHRvbkluTGlzdCxcclxuICBjaGVja0J1dHRvbnNPbkluaXRpYWxQb3NpdGlvbnMsIGFwcGx5U3R5bGVGb3JPbmVCdXR0b24sIGFwcGx5U3R5bGVzRm9yQWxsQnV0dG9uc0luTGlzdHMsIGhhbmRsZUJ1dHRvbkNsaWNrLCBmaW5kV2hpY2hCdXR0b25XYXNDaGVja2VkQmVmb3JlQ2xpY2ssIGNoYW5nZUJ1dHRvblN0eWxlT25DbGljayxcclxuICBjaGFuZ2VEaXZTdHlsZU9uQ2xpY2ssIGNoYW5nZUxhYmVsU3R5bGVPbkNsaWNrLCBjaGFuZ2VJbnB1dFRleHRPbkNsaWNrLCBTZXRDaGFydFNldHRpbmdzQ2hlY2tlcnMgfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCIvKipcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IERldGFiaW5hdG9yIGZyb20gXCIuL2RldGFiaW5hdG9yXCI7XHJcblxyXG5jbGFzcyBTaWRlTmF2IHtcclxuICAvKipcclxuICAgKiBBIGNsYXNzIHRoYXQgc2V0cyB1cCBhIHNpZGViYXIgdGhhdCBpcyBkaXNtaXNzZWQgb24gc2NyaW0tY2xpY2sgb3Igb24gc3dpcGUgYW5kIGlzIG9wZW5kIG9uIGhhbWJ1cmdlci1pY29uIGNsaWNrXHJcbiAgICogKi9cclxuICBjb25zdHJ1Y3RvciAoe1xyXG4gICAgICAgICAgICAgICAgIHNob3dCdXR0b25FbD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbWVudS1zaG93JyksXHJcbiAgICAgICAgICAgICAgICAgaGlkZUJ1dHRvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW1lbnUtaGlkZScpLFxyXG4gICAgICAgICAgICAgICAgIHNpZGVOYXZFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zaWRlLW5hdicpLFxyXG4gICAgICAgICAgICAgICAgIHNpZGVOYXZDb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zaWRlLW5hdi1jb250YWluZXInKVxyXG4gICAgICAgICAgICAgICB9PXt9KSB7XHJcbiAgICB0aGlzLnNob3dCdXR0b25FbCA9IHNob3dCdXR0b25FbDtcclxuICAgIHRoaXMuaGlkZUJ1dHRvbkVsID0gaGlkZUJ1dHRvbkVsO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwgPSBzaWRlTmF2RWw7XHJcbiAgICB0aGlzLnNpZGVOYXZDb250YWluZXJFbCA9IHNpZGVOYXZDb250YWluZXJFbDtcclxuICAgIC8vIENvbnRyb2wgd2hldGhlciB0aGUgY29udGFpbmVyJ3MgY2hpbGRyZW4gY2FuIGJlIGZvY3VzZWRcclxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlIHRvIGluZXJ0IHNpbmNlIHRoZSBkcmF3ZXIgaXMgb2Zmc2NyZWVuXHJcbiAgICB0aGlzLmRldGFiaW5hdG9yID0gbmV3IERldGFiaW5hdG9yKHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsKTtcclxuICAgIHRoaXMuZGV0YWJpbmF0b3IuaW5lcnQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuc2hvd1NpZGVOYXYgPSB0aGlzLnNob3dTaWRlTmF2LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhpZGVTaWRlTmF2ID0gdGhpcy5oaWRlU2lkZU5hdi5iaW5kKHRoaXMpO1xyXG4gICAgU2lkZU5hdi5ibG9ja0NsaWNrcyA9IFNpZGVOYXYuYmxvY2tDbGlja3MuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ub3VjaFN0YXJ0ID0gdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ub3VjaE1vdmUgPSB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uVG91Y2hFbmQgPSB0aGlzLm9uVG91Y2hFbmQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25UcmFuc2l0aW9uRW5kID0gdGhpcy5vblRyYW5zaXRpb25FbmQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0WCA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRYID0gMDtcclxuICAgIHRoaXMudG91Y2hpbmdTaWRlTmF2ID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5zdXBwb3J0c1Bhc3NpdmUgPSB1bmRlZmluZWQ7XHJcbiAgICAvL3RoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIC8vIGFwcGx5IHBhc3NpdmUgZXZlbnQgbGlzdGVuaW5nIGlmIGl0J3Mgc3VwcG9ydGVkXHJcbiAgYXBwbHlQYXNzaXZlICgpIHtcclxuICAgIGlmICh0aGlzLnN1cHBvcnRzUGFzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN1cHBvcnRzUGFzc2l2ZSA/IHtwYXNzaXZlOiB0cnVlfSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gZmVhdHVyZSBkZXRlY3RcclxuICAgIGxldCBpc1N1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIHtnZXQgcGFzc2l2ZSAoKSB7XHJcbiAgICAgICAgaXNTdXBwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICB9fSk7XHJcbiAgICB9IGNhdGNoIChlKSB7IH1cclxuICAgIHRoaXMuc3VwcG9ydHNQYXNzaXZlID0gaXNTdXBwb3J0ZWQ7XHJcbiAgICByZXR1cm4gdGhpcy5hcHBseVBhc3NpdmUoKTtcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgIHRoaXMuc2hvd0J1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93U2lkZU5hdik7XHJcbiAgICB0aGlzLmhpZGVCdXR0b25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNpZGVOYXYpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTaWRlTmF2KTtcclxuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgU2lkZU5hdi5ibG9ja0NsaWNrcyk7XHJcblxyXG4gICAgdGhpcy5zaWRlTmF2RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzLmFwcGx5UGFzc2l2ZSgpKTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMuYXBwbHlQYXNzaXZlKCkpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgdGhpcy5zaG93QnV0dG9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dTaWRlTmF2KTtcclxuICAgIHRoaXMuaGlkZUJ1dHRvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlU2lkZU5hdik7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNpZGVOYXYpO1xyXG4gICAgdGhpcy5zaWRlTmF2Q29udGFpbmVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTaWRlTmF2LmJsb2NrQ2xpY2tzKTtcclxuXHJcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSk7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCk7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoU3RhcnQgKGV2dCkge1xyXG4gICAgaWYgKCF0aGlzLnNpZGVOYXZFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGUtbmF2LS12aXNpYmxlJykpXHJcbiAgICAgIHJldHVybjtcclxuICAgIC8vVE9ETzpzdXBwb3J0IHNpZGViYXIgc2Nyb2xsaW5nIGFzIHdlbGxcclxuICAgIHRoaXMuc3RhcnRYID0gZXZ0LnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICB0aGlzLmN1cnJlbnRYID0gdGhpcy5zdGFydFg7XHJcblxyXG4gICAgdGhpcy50b3VjaGluZ1NpZGVOYXYgPSB0cnVlO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hNb3ZlIChldnQpIHtcclxuICAgIGlmICghdGhpcy50b3VjaGluZ1NpZGVOYXYpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRYID0gZXZ0LnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgfVxyXG5cclxuICBvblRvdWNoRW5kIChldnQpIHtcclxuICAgIGlmICghdGhpcy50b3VjaGluZ1NpZGVOYXYpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnRvdWNoaW5nU2lkZU5hdiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBNYXRoLm1pbigwLCB0aGlzLmN1cnJlbnRYIC0gdGhpcy5zdGFydFgpO1xyXG4gICAgdGhpcy5zaWRlTmF2Q29udGFpbmVyRWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcblxyXG4gICAgaWYgKHRyYW5zbGF0ZVggPCAwKSB7XHJcbiAgICAgIHRoaXMuaGlkZVNpZGVOYXYoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSAoKSB7XHJcbiAgICBpZiAoIXRoaXMudG91Y2hpbmdTaWRlTmF2KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2xhdGVYID0gTWF0aC5taW4oMCwgdGhpcy5jdXJyZW50WCAtIHRoaXMuc3RhcnRYKTtcclxuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlWH1weClgO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGJsb2NrQ2xpY2tzIChldnQpIHtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uVHJhbnNpdGlvbkVuZCAoZXZ0KSB7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlLW5hdi0tYW5pbWF0YWJsZScpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kKTtcclxuICB9XHJcblxyXG4gIHNob3dTaWRlTmF2ICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LmFkZCgnc2lkZS1uYXYtLWFuaW1hdGFibGUnKTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5hZGQoJ3NpZGUtbmF2LS12aXNpYmxlJyk7XHJcbiAgICB0aGlzLmRldGFiaW5hdG9yLmluZXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVNpZGVOYXYgKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93PVwiYXV0b1wiO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LmFkZCgnc2lkZS1uYXYtLWFuaW1hdGFibGUnKTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtbmF2LS12aXNpYmxlJyk7XHJcbiAgICB0aGlzLmRldGFiaW5hdG9yLmluZXJ0ID0gdHJ1ZTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZCk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXZcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaWRlLW5hdi9zaWRlLW5hdi5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEzLjEyLjIwMTYuXHJcbiAqL1xyXG4vKipcclxuICogYE1lZGlhUXVlcnlgIGhlbHBzIHBlcmZvcm0gYWN0aW9ucyB3aGVuIENTUyBxdWVyeSBpcyBtYXRjaGVkIGluc3RlYWQgb2YgcG9sbGluZyB0aGUgd2luZG93IHdpZHRoLCB3aGVuIGl0J3Mgbm90IHNvIGltcG9ydGFudCB0byBnZXQgZXhhY3Qgd2lkdGgsIG9ubHkgY2hlY2tpbmcgbWF0Y2hpbmcgdGhlIHF1ZXJ5LlxyXG4gKlxyXG4gKiBgYGAgamF2YXNjcmlwdFxyXG4gKiBmdW5jdGlvbiBvbk1hdGNoKG1hdGNoZXMpe1xyXG4gKiAgaWYobWF0Y2hlcyl7XHJcbiAqICAgIC8vIGRvIHdoYXQgeW91IG5lZWQgd2hlbiB0aGUgbWVkaWFxdWVyeSBpcyBtYXRjaGVkXHJcbiAqICB9IGVsc2Uge1xyXG4gKiAgICAgLy8gZG8gd2hhdCB5b3UgbmVlZCB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyBub3QgbWF0Y2hlZFxyXG4gKiAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqICB2YXIgbXEgPSBuZXcgTWVkaWFRdWVyeSh7cXVlcnk6XCJtYXgtd2lkdGg6NzYwcHhcIn0sb25NYXRjaCx0aGlzKTtcclxuICpcclxuICogIC8vYXQgYW55IHRpbWUgeW91IG1heSBjaGVjayB3aGV0aGVyIGl0IG1hdGNoZXMgdGhlIHF1ZXJ5OlxyXG4gKlxyXG4gKiAgbXEubWF0Y2hlcyAvL3RydWUgb3IgZmFsc2VcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnF1ZXJ5IC0gVGhlIENTUyBtZWRpYSBxdWVyeSB0byBldmFsdWF0ZS5cclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5mdWxsPWZhbHNlXSAtIElmIHRydWUsIHRoZSBxdWVyeSBhdHRyaWJ1dGUgaXMgYXNzdW1lZCB0byBiZSBhIGNvbXBsZXRlIG1lZGlhIHF1ZXJ5IHN0cmluZyByYXRoZXIgdGhhbiBhIHNpbmdsZSBtZWRpYSBmZWF0dXJlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBtYXRjaGluZyBpcyBldmFsdWF0ZWRcclxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IFtjb250ZXh0PXRoaXNdIC0gY29udGV4dCBpbiB3aGljaCB0aGUgYGNhbGxiYWNrYCBmdW5jdGlvbiBuZWVkcyB0byBiZSBleGVjdXRlZFxyXG4gKlxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG1hdGNoZXMgLSB3aGV0aGVyIHRoZSBxdWVyeSBtYXRjaGVzIHRoZSB3aW5kb3cgd2lkdGguIFJlYWRvbmx5LlxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGZ1bGwgLSBJZiB0cnVlLCB0aGUgcXVlcnkgYXR0cmlidXRlIGlzIGFzc3VtZWQgdG8gYmUgYSBjb21wbGV0ZSBtZWRpYSBxdWVyeSBzdHJpbmcgcmF0aGVyIHRoYW4gYSBzaW5nbGUgbWVkaWEgZmVhdHVyZS5cclxuICogQHByb3BlcnR5IHtTdHJpbmd9IHF1ZXJ5IC0gVGhlIENTUyBtZWRpYSBxdWVyeSB0byBldmFsdWF0ZS5cclxuICogKi9cclxuY2xhc3MgTWVkaWFRdWVyeXtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zLGNhbGxiYWNrLGNvbnRleHQ9dGhpcyl7XHJcbiAgICBsZXQge3F1ZXJ5LGZ1bGw9ZmFsc2V9ID0gb3B0aW9ucztcclxuICAgIHRoaXMuX21hdGNoZXMgPSBmYWxzZTtcclxuICAgIHRoaXMuZnVsbCA9IGZ1bGw7XHJcbiAgICB0aGlzLl9tcSA9IG51bGw7XHJcbiAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgdGhpcy5fY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLl9ib3VuZCA9IHRoaXMuX29uTWF0Y2guYmluZCh0aGlzKTtcclxuICAgIHRoaXMucXVlcnk9cXVlcnk7XHJcbiAgfVxyXG5cclxuICBfb25NYXRjaChtcSl7XHJcbiAgICB0aGlzLl9tYXRjaGVzID0gbXEubWF0Y2hlcztcclxuICAgIHJldHVybiB0aGlzLl9jYWxsYmFjay5jYWxsKHRoaXMuX2NvbnRleHQsbXEubWF0Y2hlcylcclxuICB9XHJcblxyXG4gIGdldCBtYXRjaGVzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcztcclxuICB9XHJcblxyXG4gIGdldCBxdWVyeSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgc2V0IHF1ZXJ5KHZhbCl7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHZhbDtcclxuICAgIHRoaXMuY29uc3RydWN0b3IucmVtb3ZlKHRoaXMuX21xLHRoaXMuX2JvdW5kKTtcclxuICAgIGxldCBxdWVyeSA9IHRoaXMucXVlcnk7XHJcbiAgICBpZiAoIXF1ZXJ5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5mdWxsICYmIHF1ZXJ5WzBdICE9PSAnKCcpIHtcclxuICAgICAgcXVlcnkgPSAnKCcgKyBxdWVyeSArICcpJztcclxuICAgIH1cclxuICAgIHRoaXMuX21xID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xyXG4gICAgdGhpcy5fb25NYXRjaCh0aGlzLl9tcSk7XHJcbiAgICB0aGlzLmNvbnN0cnVjdG9yLmFkZCh0aGlzLl9tcSx0aGlzLl9ib3VuZCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkKG1xLGJvdW5kKXtcclxuICAgIGlmIChtcSkge1xyXG4gICAgICBtcS5hZGRMaXN0ZW5lcihib3VuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlKG1xLGJvdW5kKSB7XHJcbiAgICBpZiAobXEpIHtcclxuICAgICAgbXEucmVtb3ZlTGlzdGVuZXIoYm91bmQpO1xyXG4gICAgfVxyXG4gICAgbXEgPSBudWxsO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWRpYVF1ZXJ5XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbWVkaWEtcXVlcnkvc3JjL21haW4uanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNREhpZXJhcmNoeSB7XHJcbiAgLyoqXHJcbiAgICogYXR0YWNoZXMgYSBsaXN0ZW5lciB0byBhIGhpZXJhcmNoeSBwb3B1cCB3aGVuIGl0J3MgaW5pdGlhbGlzZWQgdG8gYmUgYWJsZSB0byBjbG9zZSBpdCBvbiBjbGljay1vdXRzaWRlXHJcbiAgICogKi9cclxuICBzdGF0aWMgdXBncmFkZSgpIHtcclxuICAgIGNvbnN0IGhpZXJhcmNoeUJ1dHRvbiA9IE1ESGllcmFyY2h5LmhpZXJhcmNoeVRvZ2dsZTtcclxuICAgIGhpZXJhcmNoeUJ1dHRvbiAmJiBoaWVyYXJjaHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNREhpZXJhcmNoeS5oaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGhpZXJhcmNoeVRvZ2dsZSgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGQtdGFyZ2V0LWJ1dHRvbicpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBoaWVyYXJjaHlDaHJvbWUoKSB7XHJcbiAgICByZXR1cm4gTURIaWVyYXJjaHkuaGllcmFyY2h5VG9nZ2xlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmRkLWRyaWxsZG93bicpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmNIaWVyYXJjaHlDaHJvbWUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGhpZXJhcmNoeUNocm9tZSA9IE1ESGllcmFyY2h5LmhpZXJhcmNoeUNocm9tZTtcclxuICAgICAgICAgIGhpZXJhcmNoeUNocm9tZSA/IHJlc29sdmUoaGllcmFyY2h5Q2hyb21lKSA6IHJlc29sdmUoTURIaWVyYXJjaHkuYXN5bmNIaWVyYXJjaHlDaHJvbWUoKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIDMwMClcclxuICAgIClcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIoKSB7XHJcbiAgICBNREhpZXJhcmNoeS5kZXRhY2hIaWVyYXJjaHlUb2dnbGVDbGlja0xpc3RlbmVyKCk7XHJcbiAgICBNREhpZXJhcmNoeS5kaXNhYmxlUGFnZVNjcm9sbCgpO1xyXG4gICAgbGV0IGhpZXJhcmNoeUNocm9tZSA9IE1ESGllcmFyY2h5LmhpZXJhcmNoeUNocm9tZTtcclxuICAgIGlmICghaGllcmFyY2h5Q2hyb21lKSB7XHJcbiAgICAgIGhpZXJhcmNoeUNocm9tZSA9IE1ESGllcmFyY2h5LmFzeW5jSGllcmFyY2h5Q2hyb21lKCk7XHJcbiAgICAgIGhpZXJhcmNoeUNocm9tZS50aGVuKE1ESGllcmFyY2h5LmF0dGFjaENocm9tZUNsb3NlTGlzdGVuZXIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBNREhpZXJhcmNoeS5hdHRhY2hDaHJvbWVDbG9zZUxpc3RlbmVyKGhpZXJhcmNoeUNocm9tZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZXRhY2hIaWVyYXJjaHlUb2dnbGVDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgTURIaWVyYXJjaHkuaGllcmFyY2h5VG9nZ2xlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTURIaWVyYXJjaHkuaGllcmFyY2h5VG9nZ2xlQ2xpY2tIYW5kbGVyKTtcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgYXR0YWNoQ2hyb21lQ2xvc2VMaXN0ZW5lcihoaWVyYXJjaHlDaHJvbWUpIHtcclxuICAgIGhpZXJhcmNoeUNocm9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1ESGllcmFyY2h5Lm9uQ2hyb21lQ2xvc2UpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgb25DaHJvbWVDbG9zZShldmVudCkge1xyXG4gICAgY29uc3QgY2FuY2VsICAgID0gTURIaWVyYXJjaHkuY2FuY2VsQnV0dG9uLFxyXG4gICAgICBhcHBseSAgICAgPSBNREhpZXJhcmNoeS5hcHBseUJ1dHRvbixcclxuICAgICAgY2hyb21lICAgID0gTURIaWVyYXJjaHkuaGllcmFyY2h5Q2hyb21lLFxyXG4gICAgICBjbGlja2VkRWwgPSBldmVudC5wYXRoWzBdO1xyXG5cclxuICAgIGlmIChbY2hyb21lLCBjYW5jZWwsIGFwcGx5XS5pbmRleE9mKGNsaWNrZWRFbCkgPiAtMSkge1xyXG4gICAgICBpZiAoY2xpY2tlZEVsID09IGNocm9tZSkge1xyXG4gICAgICAgIGNhbmNlbC5jbGljaygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE1ESGllcmFyY2h5LmVuYWJsZVBhZ2VTY3JvbGwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBjYW5jZWxCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gTURIaWVyYXJjaHkuaGllcmFyY2h5Q2hyb21lLnF1ZXJ5U2VsZWN0b3IoJy5kZC1jYW5jZWwnKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBhcHBseUJ1dHRvbigpIHtcclxuICAgIHJldHVybiBNREhpZXJhcmNoeS5oaWVyYXJjaHlDaHJvbWUucXVlcnlTZWxlY3RvcignLmRkLWJ1dHRvbi1zZWxlY3QnKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc2FibGVQYWdlU2Nyb2xsKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnb3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnQnKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBlbmFibGVQYWdlU2Nyb2xsKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oaWVyYXJjaHkvaGllcmFyY2h5LmpzIiwiaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4uL3NpZGUtbmF2L3NpZGUtbmF2XCI7XHJcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gXCJtZWRpYS1xdWVyeVwiO1xyXG5pbXBvcnQgSGVhZGVyU2Nyb2xsZXIgZnJvbSBcIi4uL3IyL2hlYWRlci1zY3JvbGxlclwiO1xyXG5cclxuXHJcbmNsYXNzIFRyYW5zZm9ybU1lbnVBdCB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBjbGFzcyBzZXRzIHVwIGEgbGlzdGVuZXIgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIHZpZXdwb3J0IG1hdGNoZXMgdGhlIG1heC13aWR0aCBzZXQgdXAgaW4gYGJyZWFrcG9pbnRgIGFuZCBiYXNlZCBvbiBleGlzdGVuY2Ugb2YgYW4gaW50ZWdyYXRpb24taWZyYW1lRWxcclxuICAgKiBzZXRzIHVwIGhlYWRlIHNjcm9sbGVycyBvciBqdXN0IHN3YXBzIHRoZSBoZWFkZXIgaW50byBob3Jpem9udGFsIG9yIHNpZGViYXIgbmF2aWdhdGlvbiBtb2Rlc1xyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbYnJlYWtwb2ludD03NjhdIC0gbWF4LXdpZHRoIG9mIGRldmljZSB2aWV3cG9ydCB0aGF0IGlzIGNvbnNpZGVyZWQgdG8gYmUgYSBtb2JpbGUgZGV2aWNlIGFuZCBob3N0cyBhIG1vYmlsZSBzaWRlYmFyLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuaWZyYW1lQ2xhc3NOYW1lXSAtIHIyaW50ZWdyYXRpb24gaWZyYW1lIENTUyBjbGFzc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5kZXNrdG9wSGVhZGVyQ2xhc3NOYW1lXSAtIENTUyBjbGFzcyBvZiBoZWFkZXIgdG8gZGlzcGxheSBhYm92ZSBgYnJlYWtwb2ludGBcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMubW9iaWxlSGVhZGVyQ2xhc3NOYW1lXSAtIENTUyBjbGFzcyBvZiBoZWFkZXIgdG8gZGlzcGxheSBiZWxvdyBgYnJlYWtwb2ludGBcclxuICAgKiBAcmVxdWlyZXMgTWVkaWFRdWVyeVxyXG4gICAqIEByZXF1aXJlcyBTaWRlTmF2XHJcbiAgICogQHJlcXVpcmVzIEhlYWRlclNjcm9sbGVyXHJcbiAgICogKi9cclxuICBjb25zdHJ1Y3RvcihicmVha3BvaW50ID0gNzY4LCBvcHRpb25zPXt9KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGlmcmFtZUNsYXNzTmFtZSAgICAgICAgPSAnLnIyZGFzaGJvYXJkJyxcclxuICAgICAgZGVza3RvcEhlYWRlckNsYXNzTmFtZSA9ICcucmVwb3J0YWwtYmFyJyxcclxuICAgICAgbW9iaWxlSGVhZGVyQ2xhc3NOYW1lICA9ICcucmVwb3J0YWwtaGVhZGVyJyxcclxuICAgIH0gPSBvcHRpb25zO1xyXG5cclxuICAgIHRoaXMuaWZyYW1lRWwgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZnJhbWVDbGFzc05hbWUpO1xyXG4gICAgdGhpcy5kZXNrdG9wSGVhZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRlc2t0b3BIZWFkZXJDbGFzc05hbWUpO1xyXG4gICAgdGhpcy5tb2JpbGVIZWFkZXJFbCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vYmlsZUhlYWRlckNsYXNzTmFtZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRIZWFkZXIgPSBudWxsO1xyXG5cclxuICAgIGlmICh0aGlzLmlzSW50ZWdyYXRpb25Nb2RlKXsvLyBpZiBpdCdzIGludGVncmF0aW9uIHBhZ2UgLSBkbyBzY3JvbGxpbmdcclxuICAgICAgdGhpcy5zd2FwSGVhZGVyQW5kSWZyYW1lKCk7XHJcbiAgICAgIHRoaXMuaGVhZGVyU2Nyb2xsZXJJbnN0ID0gdGhpcy5tYWtlSGVhZGVyUmVzcG9uZFRvSWZyYW1lU2Nyb2xsKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhhbmRsZUJyZWFrcG9pbnRNYXRjaCA9IHRoaXMuaGFuZGxlQnJlYWtwb2ludE1hdGNoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNpZGVuYXYgPSBuZXcgU2lkZU5hdigpO1xyXG4gICAgdGhpcy5tZWRpYVF1ZXJ5ID0gbmV3IE1lZGlhUXVlcnkoe3F1ZXJ5OiBgbWF4LXdpZHRoOiR7YnJlYWtwb2ludH1weGB9LCB0aGlzLmhhbmRsZUJyZWFrcG9pbnRNYXRjaCwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNJbnRlZ3JhdGlvbk1vZGUoKXtcclxuICAgIHJldHVybiAhIXRoaXMuaWZyYW1lRWxcclxuICB9XHJcblxyXG4gIHN3YXBIZWFkZXJBbmRJZnJhbWUoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LXdyYXBwZXInKS5jbGFzc0xpc3QuYWRkKCdpbnRlZ3JhdGlvbi1tb2RlJyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCcmVha3BvaW50TWF0Y2goYmVsb3dCcmVha3BvaW50KSB7XHJcbiAgICBpZiAoIWJlbG93QnJlYWtwb2ludCkge1xyXG4gICAgICB0aGlzLnN3YXBIZWFkZXIodGhpcy5kZXNrdG9wSGVhZGVyRWwpO1xyXG4gICAgICB0aGlzLnNpZGVuYXYucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3dhcEhlYWRlcih0aGlzLm1vYmlsZUhlYWRlckVsKTtcclxuICAgICAgdGhpcy5zaWRlbmF2LmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYWtlSGVhZGVyUmVzcG9uZFRvSWZyYW1lU2Nyb2xsKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNJZnJhbWVVUkxFbXB0eSkge1xyXG4gICAgICAgIHJlc29sdmUodGhpcy5tYWtlSGVhZGVyU2Nyb2xsYWJsZSh0aGlzLmlmcmFtZUVsLmNvbnRlbnRXaW5kb3cpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlmcmFtZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+e1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0aGlzLm1ha2VIZWFkZXJTY3JvbGxhYmxlKGUudGFyZ2V0LmNvbnRlbnRXaW5kb3cpKVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1ha2VIZWFkZXJTY3JvbGxhYmxlKGlmcmFtZUNvbnRlbnRXaW5kb3cpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRIZWFkZXIgJiYgbmV3IEhlYWRlclNjcm9sbGVyKGlmcmFtZUNvbnRlbnRXaW5kb3csIHRoaXMuY3VycmVudEhlYWRlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNJZnJhbWVVUkxFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLmlmcmFtZUVsLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZiA9PT0gJ2Fib3V0OmJsYW5rJ1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBgdGhpcy5jdXJyZW50SGVhZGVyYCB0byBhIG5ldyBIVE1MRWxlbWVudCBhbmQgZG9lcyB0aGUgc2FtZSBmb3IgYEhlYWRlclNjcm9sbGVyLmhlYWRlcmBcclxuICAgKiAqL1xyXG4gIHN3YXBIZWFkZXIobmV3SGVhZGVyKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRIZWFkZXIgPSBuZXdIZWFkZXI7XHJcbiAgICBpZiAodGhpcy5pZnJhbWVFbCAmJiB0aGlzLmhlYWRlclNjcm9sbGVySW5zdCkge1xyXG4gICAgICB0aGlzLmhlYWRlclNjcm9sbGVySW5zdC50aGVuKGhlYWRlclNjcm9sbGVyID0+IGhlYWRlclNjcm9sbGVyLmhlYWRlciA9IG5ld0hlYWRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm1NZW51QXQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uYXZpZ2F0aW9uL21lbnUtdHJhbnNmb3JtZXIuanMiLCJjbGFzcyBIZWFkZXJTY3JvbGxlciB7XHJcbiAgLyoqXHJcbiAgICogYEhlYWRlclNjcm9sbGVyYCBpcyBhIGNsYXNzIHRoYXQgbGlzdGVucyB0byBgaWZyYW1lRWxgJ3MgY29udGVudFdpbmRvdyBzY3JvbGwgZXZlbnQgYW5kIHNjcm9sbHMgdGhlIGByZXBvcnRhbEhlYWRlckhUTUxFbGVtZW50YCB3aGVuIHRoZSBpZnJhbWVFbCBpcyBzY3JvbGxlZFxyXG4gICAqIEBwYXJhbSB7V2luZG93fSBjb250ZW50V2luZG93IC0gaWZyYW1lRWwuY29udGVudFdpbmRvd1xyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQgLSByZXBvcnRhbEhlYWRlckhUTUxFbGVtZW50IGVsZW1lbnQgdGhhdCBuZWVkcyB0byBiZSBzY3JvbGxlZFxyXG4gICAqICovXHJcbiAgY29uc3RydWN0b3IoY29udGVudFdpbmRvdywgcmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudCkge1xyXG4gICAgY29udGVudFdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxyXG4gICAgICBjb250ZW50V2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICB8fCBjb250ZW50V2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICB8fCBjb250ZW50V2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxyXG4gICAgICB8fCBjb250ZW50V2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuICAgIHRoaXMuX21ldGEgID0ge1xyXG4gICAgICB0b3BPZmZzZXQgICAgOiBudWxsLFxyXG4gICAgICB0aWNraW5nICAgICAgOiBmYWxzZSxcclxuICAgICAgb2Zmc2V0SGVpZ2h0IDogbnVsbCxcclxuICAgICAgaGVhZGVyICAgICAgIDogbnVsbCxcclxuICAgICAgbGFzdFNjcm9sbFkgIDogMCxcclxuICAgICAgY29udGVudFdpbmRvdzogY29udGVudFdpbmRvd1xyXG4gICAgfTtcclxuICAgIHRoaXMuaGVhZGVyID0gcmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuX3Njcm9sbENhbGxiYWNrID0gdGhpcy5fc2Nyb2xsQ2FsbGJhY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYXR0YWNoTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21ldGEuaGVhZGVyO1xyXG4gIH1cclxuXHJcbiAgc2V0IGhlYWRlcihoZWFkZXJFbGVtZW50KSB7XHJcbiAgICBsZXQgb2Zmc2V0O1xyXG4gICAgaWYgKHRoaXMuaGVhZGVyICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5fbWV0YS50b3BPZmZzZXQgPSB0aGlzLmhlYWRlclRvcE9mZnNldDtcclxuICAgICAgdGhpcy5fcmVzZXRIZWFkZXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX21ldGEuaGVhZGVyICAgICAgID0gaGVhZGVyRWxlbWVudDtcclxuICAgIHRoaXMuX21ldGEub2Zmc2V0SGVpZ2h0ID0gaGVhZGVyRWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB0aGlzLl9jb25maWd1cmVIZWFkZXIoKTtcclxuICAgIHRoaXMuX3NldEhlYWRlck9mZnNldEluSWZyYW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaGVhZGVyVG9wT2Zmc2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyLnN0eWxlLnRvcDtcclxuICB9XHJcblxyXG4gIF9yZXNldEhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuaGVhZGVyO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGFibGUtaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuc3R5bGUudG9wID0gXCJcIjtcclxuICAgIC8vIHRoaXMuZGV0YWNoTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBfY29uZmlndXJlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZS1oZWFkZXInKTtcclxuICAgIGhlYWRlci5zdHlsZS50b3AgPSB0aGlzLl9tZXRhLnRvcE9mZnNldDtcclxuICB9XHJcblxyXG4gIF9zZXRIZWFkZXJPZmZzZXRJbklmcmFtZSgpIHtcclxuICAgIGNvbnN0IGlmcmFtZUJvZHkgICAgICAgICAgID0gdGhpcy5fbWV0YS5jb250ZW50V2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGlmcmFtZUJvZHkuc3R5bGUucGFkZGluZ1RvcCA9IHRoaXMuX21ldGEub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdFRpY2soY2FsbGJhY2spIHtcclxuICAgIGlmICghdGhpcy5fbWV0YS50aWNraW5nKSB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XHJcbiAgICAgIHRoaXMuX21ldGEudGlja2luZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhdHRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9tZXRhLmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9zY3JvbGxGaXhlZC5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBkZXRhY2hMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9tZXRhLmNvbnRlbnRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9zY3JvbGxGaXhlZCk7XHJcbiAgfVxyXG5cclxuICBfc2Nyb2xsRml4ZWQoKSB7XHJcbiAgICB0aGlzLl9tZXRhLmxhc3RTY3JvbGxZID0gdGhpcy5fbWV0YS5jb250ZW50V2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgdGhpcy5yZXF1ZXN0VGljayh0aGlzLl9zY3JvbGxDYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBfc2Nyb2xsQ2FsbGJhY2soKSB7XHJcbiAgICBsZXQgb2Zmc2V0ICAgICAgICAgICAgPSB0aGlzLl9tZXRhLmxhc3RTY3JvbGxZO1xyXG4gICAgdGhpcy5oZWFkZXIuc3R5bGUudG9wID0gLW9mZnNldCArICdweCc7XHJcbiAgICB0aGlzLl9tZXRhLnRpY2tpbmcgICAgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclNjcm9sbGVyXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yMi9oZWFkZXItc2Nyb2xsZXIuanMiLCIvKipcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuXHJcbmNsYXNzIERldGFiaW5hdG9yIHtcclxuICAvKipcclxuICAgKiBIZWxwcyB0byBtYWludGFpbiBhIGhlYWx0aHkgdGFidWxhdGlvbiB3aXRoaW4gdGhlIHNpZGViYXIgd2hlbiBpdCdzIG9wZW4sIHJhdGhlciB0aGFuIHRhYnVsYXRlIHRoZSB3aG9sZSBwYWdlXHJcbiAgICogVXNhZ2U6XHJcbiAgICpcclxuICAgKiBgYGAgamF2YXNjcmlwdFxyXG4gICAqIGNvbnN0IGRldGFiaW5hdG9yID0gbmV3IERldGFiaW5hdG9yKGVsZW1lbnQpO1xyXG4gICAqIGRldGFiaW5hdG9yLmluZXJ0ID0gdHJ1ZTsgIC8vIFNldHMgYWxsIGZvY3VzYWJsZSBjaGlsZHJlbiBvZiBlbGVtZW50IHRvIHRhYmluZGV4PS0xXHJcbiAgICogZGV0YWJpbmF0b3IuaW5lcnQgPSBmYWxzZTsgLy8gUmVzdG9yZXMgYWxsIGZvY3VzYWJsZSBjaGlsZHJlbiBvZiBlbGVtZW50XHJcbiAgICogYGBgXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQuIG5ldyBEZXRhYmluYXRvciBuZWVkcyBhbiBlbGVtZW50IHJlZmVyZW5jZScpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faW5lcnQgPSBmYWxzZTtcclxuICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsIFt0YWJpbmRleF0sIFtjb250ZW50ZWRpdGFibGVdJztcclxuICAgIHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKTtcclxuICB9XHJcblxyXG4gIGdldCBpbmVydCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbmVydDtcclxuICB9XHJcblxyXG4gIHNldCBpbmVydChpc0luZXJ0KSB7XHJcbiAgICBpZiAodGhpcy5faW5lcnQgPT09IGlzSW5lcnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2luZXJ0ID0gaXNJbmVydDtcclxuXHJcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50cy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICBpZiAoaXNJbmVydCkge1xyXG4gICAgICAgIC8vIElmIHRoZSBjaGlsZCBoYXMgYW4gZXhwbGljdCB0YWJpbmRleCBzYXZlIGl0XHJcbiAgICAgICAgaWYgKGNoaWxkLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xyXG4gICAgICAgICAgY2hpbGQuX19zYXZlZFRhYmluZGV4ID0gY2hpbGQudGFiSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNldCBBTEwgZm9jdXNhYmxlIGNoaWxkcmVuIHRvIHRhYmluZGV4IC0xXHJcbiAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaGFzIGEgc2F2ZWQgdGFiaW5kZXgsIHJlc3RvcmUgaXRcclxuICAgICAgICAvLyBCZWNhdXNlIHRoZSB2YWx1ZSBjb3VsZCBiZSAwLCBleHBsaWNpdGx5IGNoZWNrIHRoYXQgaXQncyBub3QgZmFsc2VcclxuICAgICAgICBpZiAoY2hpbGQuX19zYXZlZFRhYmluZGV4ID09PSAwIHx8IGNoaWxkLl9fc2F2ZWRUYWJpbmRleCkge1xyXG4gICAgICAgICAgcmV0dXJuIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBjaGlsZC5fX3NhdmVkVGFiaW5kZXgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBSZW1vdmUgdGFiaW5kZXggZnJvbSBBTlkgUkVNQUlOSU5HIGNoaWxkcmVuXHJcbiAgICAgICAgICBjaGlsZC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWJpbmF0b3I7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaWRlLW5hdi9kZXRhYmluYXRvci5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBFa2F0ZXJpbmFUIG9uIDIwLjEyLjIwMTcuXG4gKi9cbi8qIHNjcmlwdHMgZm9yIHJlcG9ydCBTb01DOiBJc3N1ZSBUcmFja2luZyBSZXBvcnRcdCgxNjI3NDMpIG9uIEV1cm8gc2l0ZSwgU3ltcHRvbSBPdmVydmlldyBwYWdlICovXG5cbi8vIFRoZSBiZWxvdyBzZXQgb2YgZnVuY3Rpb25zIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyB0byBwcm9qZWN0IGNhcmRzOlxuLy8gLSBoaWRlcyBlbXB0eSBwcm9qZWN0IGNhcmRzXG4vLyAtIGFwcGxpZXMgSGllcmFyY2h5IHN0eWxlIHRvIHRhYmxlcyBpbnNpZGUgY29yZHNcbi8vIC0gYWRkcyBkcmlsbCBkb3duIGZ1bmN0aW9uYWxpdHlcbi8vIC0gYWRkIE1hbmFnZW1udCBOb3RlcyBmdW5jdGlvbmFsaXR5XG5cbi8vdXBncmFkZUhpZXJhcmNoeVRhYmxlIC0gY3JlYXRlcyBmYW5jeSBoaWVyYXJjaHkgc3R5bGVcbi8vYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL0NvbmZpcm1pdEFTQS9yLXRhYmxlLWhpZXJhcmNoeS5naXRcbmZ1bmN0aW9uIHVwZ3JhZGVIaWVyYXJjaHlUYWJsZSh0YWJsZSwgaGVhZGVycyl7XG4gIHRyeXtcbiAgICB2YXIgdXBncmFkZWRUYWJsZSA9IG5ldyBSZXBvcnRhbC5UQWhpZXJhcmNoeShcbiAgICAgIHtcbiAgICAgICAgc291cmNlOiB0YWJsZSxcbiAgICAgICAgaGllcmFyY2h5OiBjYXRlZ29yeVN5bXB0b21IaWVyYXJjaHksIC8vIG9iamVjdCBjYXRTeW1wVGFibGVIZWFkZXJzIGlzIHBvcHVsYXRlZCBieSBzZXJ2ZXItc2lkZSByZXBvcnRhbCBzY3JpcHRpbmcgYWRkSlNIaWVyYXJjaHlPYmplY3RUb1RoZVBhZ2VcbiAgICAgICAgcm93aGVhZGVyczogaGVhZGVycywgLy8gY3VycmVudCB0YWJsZSdzIGhlYWRlcnMgKG9iamVjdCBnZW5lcmF0ZWQgd2l0aCByZXBvcnRhbCBzY3JpcHRpbmcpXG4gICAgICAgIHNlYXJjaDp7ZW5hYmxlZDogdHJ1ZX0sXG4gICAgICAgIGNsZWFyTGlua3M6ZmFsc2UsXG4gICAgICAgIHNvcnRpbmc6e2VuYWJsZWQ6dHJ1ZX0sXG4gICAgICAgIGZsb2F0aW5nSGVhZGVyOntlbmFibGVkOmZhbHNlfSAvLyBiZWhhdmVzIGFnZ3Jlc3NpdmUgd2hlbiBtYW55IHJvd3NcbiAgICAgIH1cbiAgICApXG4gIH1cbiAgY2F0Y2goZSl7fVxuXG4gIHJldHVybiB1cGdyYWRlZFRhYmxlO1xufVxuXG4vLyBhcHBseSByMiBoaWVyYXJjaHkgc3R5bGUgdG8gdGFibGVzIGluc2lkZSBjYXJkcyBpZiB0aGVyZSBhcmUgbm90IGVtcHR5IGNhcmRzXG5mdW5jdGlvbiBhcHBseUhpZXJhcmNoeVN0eWxlVG9UYWJsZSgpe1xuXG4gIGlmKGNhdFN5bXBUYWJsZUhlYWRlcnMpIC8vIHZhcmlhYmxlIGNhdFN5bXBUYWJsZUhlYWRlcnMgaXMgcG9wdWxhdGVkIGJ5IHNlcnZlci1zaWRlIHJlcG9ydGFsIHNjcmlwdGluZyAoYWRkSlNIaWVyYXJjaHlPYmplY3RUb1RoZVBhZ2UpXG4gIHtcbiAgICB2YXIgdGFibGVXaXRoSGllcmFyY2h5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUucmVwb3J0YWwtaGllcmFyY2h5LXRhYmxlJyk7XG4gICAgZm9yKHZhciBpPTA7aTxjYXRTeW1wVGFibGVIZWFkZXJzLmxlbmd0aDtpKyspXG4gICAgICB1cGdyYWRlSGllcmFyY2h5VGFibGUodGFibGVXaXRoSGllcmFyY2h5W2ldLGNhdFN5bXBUYWJsZUhlYWRlcnNbaV0pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWZhdWx0IHNvcnRpbmcgYnkgY291bnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YXIgY291bnRDb2wgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXRlcmlhbC1jYXJkLS1jb250ZW50IC5yZXBvcnRhbC1oaWVyYXJjaHktdGFibGU6Zmlyc3QtY2hpbGQgdHIgdGQuc29ydGFibGU6bGFzdC1jaGlsZCcpO1xuICBmb3IodmFyIGk9MDtpPGNvdW50Q29sLmxlbmd0aDtpKyspXG4gICAgY291bnRDb2xbaV0uY2xpY2soKTtcbn1cblxuLy8gc2F2ZSBwcm9qZWN0IGFuZCBzeW1wdG9tIGxhYmVscyBpbnRvIGRyaWxsZG93biBwYXJhbWV0ZXIgaW5wdXQgYW5kIHBlcmZvcm0gZHJpbGwgZG93blxuZnVuY3Rpb24gc2F2ZU1pZGRsZUxldmVsRHJpbGxEb3duUGFyYW0oaW5wdXRXcmFwcGVySUQsYnRuV3JhcHBlcklEKXtcblxuLy8gaW5wdXRXcmFwcGVySUQgLSB3cmFwcGVyIGZvciBpbnB1dCBmb3IgdGV4dCBwYXJhbWV0ZXJcbi8vIGJ0bldyYXBwZXJJRCAtIHdyYXBwZXIgZm9yIGJ1dG9vbiB0byBjbGljayBvbiBhbmQganVtcCB0byBhbm90aGVyIHRoZSBwYWdlXG5cbiAgdmFyIGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtY2FyZCcpO1xuXG4gIGZvcih2YXIgaT0wO2k8Y2FyZC5sZW5ndGg7aSsrKXsgLy9sb29wIHRocm91Z2ggY2FyZHNcbiAgICBjYXJkW2ldLm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICB2YXIgYWxsX3RleHQ9IGV2ZW50LnRhcmdldDsgLy8gY2hlY2sgd2hhdCBwYXJ0IG9mIHRoZSBjYXJkIGlzIGNsaWNrZWRcbiAgICAgIGlmKGFsbF90ZXh0LmNsYXNzTmFtZS5pbmRleE9mKCdyZXBvcnRhbC1yb3ctbGFiZWwnKT4tMSkgLy8gaWYgY2F0ZWdvcnkvc3ltcHRvbSBjbGlja2VkIHRoZW4gZHJpbGwgZG93blxuICAgICAge1xuICAgICAgICB2YXIgbW5fdGV4dCA9IGFsbF90ZXh0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKSE9bnVsbCA/IGFsbF90ZXh0LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA6ICcnOyAvLyBmaWxsIGhpZGRlbiBwYXJhbWV0ZXIgd2l0aCBuYW1lIG9mIGNhdGVnb3J5IG9yIHN5bXB0b21cbiAgICAgICAgdmFyIHN5bXB0b21OYW1lID0gYWxsX3RleHQudGV4dENvbnRlbnQucmVwbGFjZShtbl90ZXh0LCcnKTtcbiAgICAgICAgdmFyIHByb2plY3ROYW1lID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcubWF0ZXJpYWwtY2FyZC0tdGl0bGUgLnByb2plY3ROYW1lJykudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgaWYoc3ltcHRvbU5hbWUubGVuZ3RoPjAgJiYgcHJvamVjdE5hbWUubGVuZ3RoPjApe1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5wdXRXcmFwcGVySUQrJyBpbnB1dCcpLnZhbHVlID0gcHJvamVjdE5hbWUrJ14nK3N5bXB0b21OYW1lO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuV3JhcHBlcklEKycgaW5wdXQnKS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn1cblxuLy8gYWRkIE1hbmFnZW1lbnQgTm90ZXNcbmZ1bmN0aW9uIGFkZE1OYXNUaXBzKCl7XG5cbiAgLy8gbWFuYWdlbW50IG5vdGVzIGFyZSB0YWtlbiBmcm9tIGEgaGl0IGxpc3Qgb24gdGhlIHBhZ2VcblxuICB2YXIgbW5fdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW5faGl0bGlzdCAueXVpMy1kYXRhdGFibGUtdGFibGUgLnl1aTMtZGF0YXRhYmxlLWRhdGEnKTsgLy8gaGl0IGxpc3Qgcm93cyB3aXRoIGRhdGFcbiAgdmFyIG1uX25vdGUgPSBtbl90YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCcueXVpMy1kYXRhdGFibGUtY29sLU5vdGVzJyk7IC8vIGNvbHVtbiB3aXRoIG5vdGVzXG4gIHZhciBtbl9wcm9qZWN0ID0gbW5fdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnl1aTMtZGF0YXRhYmxlLWNvbC1Qcm9qZWN0Jyk7Ly8gY29sdW1uIHdpdGggcHJvamVjdHNcbiAgdmFyIG1uX3N5bXAgPSBtbl90YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCcueXVpMy1kYXRhdGFibGUtY29sLWlzc3VlJyk7IC8vIGNvbHVtbiB3aXRoIHN5bXB0b21zXG4gIHZhciBtbl9jYXQgPSBtbl90YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCcueXVpMy1kYXRhdGFibGUtY29sLUNhdGVnb3J5Jyk7IC8vIGNvbHVtbiB3aXRoIHN5bXB0b21zXG5cbiAgdmFyIG1uX29iamVjdCA9IHt9OyAvLyBjcmVhdGUgb2JqZWN0IGZvciBlYXN5IHNlYXJjaCBvZiBhIG5vdGUge1wic3ltcHRvbTtwcm9qZWN0XCI6bm90ZX1cbiAgdmFyIGNhdHNXaXRoTU5fb2JqZWN0ID0ge307IC8vIGNhdGVnb3JpZXMgaGF2aW5nIHN5bXB0b21zIHdpdGggbWFuYWdlbWVudCBub3Rlc1xuXG4gIC8vbG9vcCB0aHJvdWdoIG1uIG5vdGVzIGFuZCBhZGQgdG8gdGhlIG9iamVjdFxuICBmb3IodmFyIGk9MDtpPG1uX3N5bXAubGVuZ3RoO2krKyl7XG4gICAgbW5fb2JqZWN0W21uX3N5bXBbaV0uaW5uZXJIVE1MK1wiO1wiK21uX3Byb2plY3RbaV0uaW5uZXJIVE1MXSA9IG1uX25vdGVbaV0uaW5uZXJIVE1MO1xuICAgIGNhdHNXaXRoTU5fb2JqZWN0W21uX2NhdFtpXS5pbm5lckhUTUwrJzsnK21uX3Byb2plY3RbaV0uaW5uZXJIVE1MXT1udWxsO1xuICB9XG5cbiAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hdGVyaWFsLWNhcmQnKTsvLyBnZXQgYWxsIGNhcmRzXG5cbiAgZm9yKHZhciBqPTA7ajxjYXJkcy5sZW5ndGg7aisrKSAvLyBsb29wIGJ5IGNhcmRzXG4gIHtcblxuICAgIGlmKGNhcmRzW2pdLnF1ZXJ5U2VsZWN0b3IoJy5yZXBvcnRhbC1oaWVyYXJjaHktdGFibGUnKSl7XG5cbiAgICAgIHZhciBwcm9qZWN0TmFtZSA9IGNhcmRzW2pdLnF1ZXJ5U2VsZWN0b3IoJy5tYXRlcmlhbC1jYXJkLS10aXRsZSAucHJvamVjdE5hbWUnKS5pbm5lckhUTUw7XG4gICAgICB2YXIgcm93SGVhZGVycyA9IGNhcmRzW2pdLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHNwYW4nKTsgLy8gc3ltcHRvbXMgaW4gcm93c1xuXG4gICAgICBmb3IodmFyIGk9MDtpPHJvd0hlYWRlcnMubGVuZ3RoO2krKyl7XG4gICAgICAgIHZhciBoZWFkZXJUZXh0ID0gcm93SGVhZGVyc1tpXS5pbm5lclRleHQrJzsnK3Byb2plY3ROYW1lOyAvLyBhc3NlbWJsZSBrZXkgdG8gbG9vayBmb3IgaW4gdGhlIG9iamVjdDsgZHJpbGxkb3duIG9mZlxuICAgICAgICBpZihtbl9vYmplY3QuaGFzT3duUHJvcGVydHkoaGVhZGVyVGV4dCkpeyAvLyBjcmVhdGUgYW5kIGFkZCB0aGUgdG9vbCB0aXBcbiAgICAgICAgICB2YXIgaG92ZXJPdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgIGhvdmVyT3Zlci5jbGFzc05hbWUgPSAnbW5Db250ZW50JztcbiAgICAgICAgICBob3Zlck92ZXIuaW5uZXJIVE1MID0gbW5fb2JqZWN0W2hlYWRlclRleHRdO1xuICAgICAgICAgIHJvd0hlYWRlcnNbaV0ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChob3Zlck92ZXIpO1xuICAgICAgICAgIHJvd0hlYWRlcnNbaV0uY2xhc3NOYW1lICs9ICcgdGh1bWJuYWlsJztcbiAgICAgICAgICAvL3Jvd0hlYWRlcnNbaV0ucGFyZW50Tm9kZS5jbGFzc05hbWUgKz0gJyB0aHVtYm5haWwyJztcbiAgICAgICAgICBkZWxldGUgbW5fb2JqZWN0W2hlYWRlclRleHRdOyAvLyByZW1vdmUgdXNlZCBub3RlXG4gICAgICAgIH1cbiAgICAgICAgaWYoY2F0c1dpdGhNTl9vYmplY3QuaGFzT3duUHJvcGVydHkoaGVhZGVyVGV4dCkgJiYgcm93SGVhZGVyc1tpXS5jbGFzc05hbWUuaW5kZXhPZignaGFzU3ltcHRvbXNXaXRoTm90ZXMnKTwwKVxuICAgICAgICAgIHJvd0hlYWRlcnNbaV0uY2xhc3NOYW1lICs9ICcgaGFzU3ltcHRvbXNXaXRoTm90ZXMnO1xuXG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWlkZGxlTGV2ZWwoKXtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhpZGUgZW1wdHkgcHJvamVjdCBjYXJkcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhciB0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtY2FyZC0tY29udGVudCcpO1xuICBmb3IodmFyIGk9MDtpPHRhYmxlcy5sZW5ndGg7aSsrKVxuICAgIGlmKHRhYmxlc1tpXS5pbm5lckhUTUwgPT0gJycpXG4gICAgICB0YWJsZXNbaV0ucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGFwcGx5SGllcmFyY2h5U3R5bGVUb1RhYmxlKCk7XG4gIHNhdmVNaWRkbGVMZXZlbERyaWxsRG93blBhcmFtKCcjTWlkZGxlTGV2ZWxfZHJpbGxkb3duUHJvamVjdElucHV0JywnI01pZGRsZUxldmVsX2RyaWxsZG93blN1Ym1pdEJ0bicpO1xuXG4gIC8vIGFwcGx5IE1hbmFnZW1lbnQgTm90ZXMgd2hlbiBoaXQgbGlzdCBpcyBsb2FkZWRcbiAgWS5HbG9iYWwub24oJ2hpdGxpc3Rsb2FkZWQnLCBhZGRNTmFzVGlwcyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc29tYy1zeW1wdG9tLW92ZXJ2aWV3LXBhZ2Utc2NyaXB0cy9oaWVyYXJjaHktdGFibGUtdXBkYXRlcy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHJcblxyXG52YXIgaW5wdXRIZWFkZXJzID0gW1tcIlwiLCBcIlwiXV07XHJcbnZhciBpbnB1dExpc3RzID0gW1tbXCJSb2xsaW5nIGF2ZXJhZ2VcIiwgXCJOdW1iZXIgb2YgaGl0c1wiXSwgW1wiQ2F0ZWdvcnlcIiwgXCJTeW1wdG9tXCJdXV07XHJcblxyXG4qL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uTGlzdChudW1iZXJPZkxpc3RJblBhaXIpIHtcclxuICB2YXIgZGl2QnV0dG9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlmIChudW1iZXJPZkxpc3RJblBhaXIgJSAyICE9PSAwKSB7XHJcbiAgICBkaXZCdXR0b25MaXN0LmNsYXNzTmFtZSA9ICdidXR0b25MaXN0IHJpZ2h0TGlzdCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpdkJ1dHRvbkxpc3QuY2xhc3NOYW1lID0gJ2J1dHRvbkxpc3QgbGVmdExpc3QnO1xyXG4gIH1cclxuICByZXR1cm4gZGl2QnV0dG9uTGlzdDtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJGb3JCdXR0b25MaXN0KG51bWJlck9mTGlzdEluUGFpciwgaW5wdXRIZWFkZXJzKSB7XHJcbiAgdmFyIGRpdkJ1dHRvbkxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXZCdXR0b25MaXN0SGVhZGVyLmNsYXNzTmFtZSA9ICdidG5MaXN0SGVhZGVyJztcclxuICBkaXZCdXR0b25MaXN0SGVhZGVyLmlubmVySFRNTCA9IGlucHV0SGVhZGVyc1swXVtudW1iZXJPZkxpc3RJblBhaXJdO1xyXG4gIHJldHVybiBkaXZCdXR0b25MaXN0SGVhZGVyO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblZhbHVlSW5kZXgobnVtYmVyT2ZCdXR0b25Jbkxpc3QsIHBhaXJzT2ZMaXN0c0NvdW50KSB7XHJcbiAgcmV0dXJuICdyJyArICdfJyArIChudW1iZXJPZkJ1dHRvbkluTGlzdCArIDEpICsgJ18nICsgKHBhaXJzT2ZMaXN0c0NvdW50ICsgMSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uSWRJbmRleChudW1iZXJPZkxpc3RJblBhaXIsIG51bWJlck9mQnV0dG9uSW5MaXN0LCBwYWlyc09mTGlzdHNDb3VudCkge1xyXG4gIHJldHVybiAncicgKyAnXycgKyAobnVtYmVyT2ZMaXN0SW5QYWlyICsgMSkgKyAnXycgKyAobnVtYmVyT2ZCdXR0b25Jbkxpc3QgKyAxKSArICdfJyArIChwYWlyc09mTGlzdHNDb3VudCArIDEpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURpdkZvckJ1dHRvbkFuZExhYmVsKGRpdkJ1dHRvbkNsYXNzLCBidXR0b25JZCkge1xyXG4gIHZhciBkaXZSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdlJhZGlvLmNsYXNzTmFtZSA9IGRpdkJ1dHRvbkNsYXNzO1xyXG4gIGRpdlJhZGlvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGl2JyArIGJ1dHRvbklkKTtcclxuICByZXR1cm4gZGl2UmFkaW87XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uRm9yTGlzdChudW1iZXJPZkxpc3RJblBhaXIsIG51bWJlck9mQ2FyZCwgYnV0dG9uVmFsdWUsIGJ1dHRvbklkKSB7XHJcbiAgdmFyIGlucHV0UmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0UmFkaW8uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcbiAgaWYgKG51bWJlck9mTGlzdEluUGFpciAlIDIgIT09IDApIHtcclxuICAgIGlucHV0UmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywgJ3JpZ2h0JyArIChudW1iZXJPZkNhcmQgKyAxKSk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgaW5wdXRSYWRpby5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbGVmdCcgKyAobnVtYmVyT2ZDYXJkICsgMSkpO1xyXG4gIH1cclxuICBpbnB1dFJhZGlvLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBidXR0b25WYWx1ZSk7XHJcbiAgaW5wdXRSYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgYnV0dG9uSWQpO1xyXG4gIGlucHV0UmFkaW8uY2xhc3NOYW1lID0gJ3JhZGlvYnV0dG9uQmx1ZUlucHV0JztcclxuICByZXR1cm4gaW5wdXRSYWRpbztcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVMYWJlbEZvckJ1dHRvbkluTGlzdChudW1iZXJPZkxpc3RJblBhaXIsIG51bWJlck9mQnV0dG9uSW5MaXN0LCBidXR0b25JZEluZGV4LCBjdXN0b21CdXR0b25BcHBlYXJhbmNlLCBpbnB1dExpc3RzKSB7XHJcbiAgdmFyIGxhYmVsRm9yUmFkaW9CbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBsYWJlbEZvclJhZGlvQmx1ZS5jbGFzc05hbWUgPSBidXR0b25JZEluZGV4ICsgJ2xhYmVsJztcclxuICBsYWJlbEZvclJhZGlvQmx1ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGJ1dHRvbklkSW5kZXgpO1xyXG5cclxuICB2YXIgaW5uZXJIdG1sRm9yTGFiZWwgPSBjdXN0b21CdXR0b25BcHBlYXJhbmNlO1xyXG4gIGxhYmVsRm9yUmFkaW9CbHVlLmlubmVySFRNTCA9IGlubmVySHRtbEZvckxhYmVsICsgaW5wdXRMaXN0c1swXVtudW1iZXJPZkxpc3RJblBhaXJdW251bWJlck9mQnV0dG9uSW5MaXN0XTtcclxuICByZXR1cm4gbGFiZWxGb3JSYWRpb0JsdWU7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tCdXR0b25zT25Jbml0aWFsUG9zaXRpb25zKG51bWJlck9mTGlzdEluUGFpciwgbnVtYmVyT2ZCdXR0b25Jbkxpc3QsIGN1cnJlbnRCdXR0b24sIGRpdkZvckN1cnJlbnRCdXR0b24sIHNlcGFyYXRlZElucHV0VGV4dEksIHBhaXJzT2ZMaXN0c0NvdW50LCBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIsIGNoZWNrZWREaXYpIHtcclxuICBpZiAobnVtYmVyT2ZCdXR0b25Jbkxpc3QgPT0gc2VwYXJhdGVkSW5wdXRUZXh0SVtwYWlyc09mTGlzdHNDb3VudF0uc3BsaXQoZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyKVtudW1iZXJPZkxpc3RJblBhaXJdKSB7XHJcbiAgICBjdXJyZW50QnV0dG9uLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICd0cnVlJyk7XHJcbiAgICBkaXZGb3JDdXJyZW50QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNoZWNrZWREaXYuYmFja2dyb3VuZENvbG9yO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBhcHBseVN0eWxlRm9yT25lQnV0dG9uKGN1cnJlbnREaXYsIGN1cnJlbnRMYWJlbCwgb3V0ZXJDaXJjbGVTdHJva2VDb2xvciwgb3V0ZXJDaXJjbGVGaWxsQ29sb3IsIGlubmVyQ2lyY2xlRmlsbENvbG9yLCB0ZXh0Q29sb3IpIHtcclxuICB2YXIgb3V0ZXJDaXJjbGUgPSBjdXJyZW50RGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291dGVyQmx1ZUNpcmNsZScpO1xyXG4gIHZhciBpbm5lckNpcmNsZSA9IGN1cnJlbnREaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5uZXJCbHVlQ2lyY2xlJyk7XHJcbiAgb3V0ZXJDaXJjbGVbMF0uc3R5bGUuc3Ryb2tlID0gb3V0ZXJDaXJjbGVTdHJva2VDb2xvcjtcclxuICBvdXRlckNpcmNsZVswXS5zdHlsZS5maWxsID0gb3V0ZXJDaXJjbGVGaWxsQ29sb3I7XHJcbiAgaW5uZXJDaXJjbGVbMF0uc3R5bGUuZmlsbCA9IGlubmVyQ2lyY2xlRmlsbENvbG9yO1xyXG5cclxuICBjdXJyZW50TGFiZWwuc3R5bGUuY29sb3IgPSB0ZXh0Q29sb3I7XHJcbn1cclxuZnVuY3Rpb24gYXBwbHlTdHlsZXNGb3JBbGxCdXR0b25zSW5MaXN0cyhzZXBhcmF0ZWRJbnB1dFRleHRJLCBudW1iZXJPZkxpc3RJblBhaXIsIGN1cnJlbnREaXYsIGN1cnJlbnRMYWJlbCwgcGFpcnNPZkxpc3RzQ291bnQsIGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpciwgdW5jaGVja2VkRGl2LCBjaGVja2VkRGl2LCBqKSB7XHJcbiAgaWYgKGogPT0gc2VwYXJhdGVkSW5wdXRUZXh0SVtwYWlyc09mTGlzdHNDb3VudF0uc3BsaXQoZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyKVtudW1iZXJPZkxpc3RJblBhaXJdKSB7XHJcbiAgICBhcHBseVN0eWxlRm9yT25lQnV0dG9uKGN1cnJlbnREaXYsIGN1cnJlbnRMYWJlbCwgY2hlY2tlZERpdi5vdXRlckNpcmNsZUNvbG9yLCBjaGVja2VkRGl2Lm91dGVyQ2lyY2xlRmlsbCwgY2hlY2tlZERpdi5pbm5lckNpcmNsZUNvbG9yLCBjaGVja2VkRGl2LnRleHRDb2xvcik7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgYXBwbHlTdHlsZUZvck9uZUJ1dHRvbihjdXJyZW50RGl2LCBjdXJyZW50TGFiZWwsIHVuY2hlY2tlZERpdi5vdXRlckNpcmNsZUNvbG9yLCB1bmNoZWNrZWREaXYub3V0ZXJDaXJjbGVGaWxsLCB1bmNoZWNrZWREaXYuaW5uZXJDaXJjbGVDb2xvciwgdW5jaGVja2VkRGl2LnRleHRDb2xvcik7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpciwgYnV0dG9uVG9DbGlja0NsYXNzLCBkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzLCBidXR0b24sIHVuY2hlY2tlZERpdiwgY2hlY2tlZERpdiwgbGlzdElucHV0KSB7XHJcbiAgdmFyIGN1cnJlbnRCdXR0b25JZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgdmFyIGRpdlRvQ2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdicgKyBjdXJyZW50QnV0dG9uSWQpO1xyXG4gIHZhciBjdXJyZW50TGlzdCA9IGRpdlRvQ2hhbmdlLnBhcmVudE5vZGU7XHJcbiAgdmFyIGRpdnNJbkN1cnJlbnRMaXN0ID0gY3VycmVudExpc3QuY2hpbGROb2RlcztcclxuXHJcbiAgdmFyIGRpdkNob3NlblByZXZpb3VzbHlJZCA9IGZpbmRXaGljaEJ1dHRvbldhc0NoZWNrZWRCZWZvcmVDbGljayhkaXZzSW5DdXJyZW50TGlzdCk7XHJcbiAgdmFyIHByZXZpb3VzRGl2VG9DaGFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZDaG9zZW5QcmV2aW91c2x5SWQpO1xyXG5cclxuICBpZiAoZGl2Q2hvc2VuUHJldmlvdXNseUlkLnN1YnN0cmluZygzKSAhPT0gY3VycmVudEJ1dHRvbklkKSB7XHJcbiAgICBjaGFuZ2VEaXZTdHlsZU9uQ2xpY2socHJldmlvdXNEaXZUb0NoYW5nZSwgZGl2VG9DaGFuZ2UsIHVuY2hlY2tlZERpdi5iYWNrZ3JvdW5kQ29sb3IsIGNoZWNrZWREaXYuYmFja2dyb3VuZENvbG9yKTtcclxuXHJcbiAgICB2YXIgb3V0ZXJDaXJjbGUgPSBkaXZUb0NoYW5nZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXRlckJsdWVDaXJjbGUnKTtcclxuICAgIHZhciBpbm5lckNpcmNsZSA9IGRpdlRvQ2hhbmdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lubmVyQmx1ZUNpcmNsZScpO1xyXG4gICAgdmFyIHByZXZpb3VzT3V0ZXJDaXJjbGUgPSBwcmV2aW91c0RpdlRvQ2hhbmdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ291dGVyQmx1ZUNpcmNsZScpO1xyXG4gICAgdmFyIHByZXZpb3VzSW5uZXJDaXJjbGUgPSBwcmV2aW91c0RpdlRvQ2hhbmdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lubmVyQmx1ZUNpcmNsZScpO1xyXG5cclxuICAgIGNoYW5nZUJ1dHRvblN0eWxlT25DbGljayhvdXRlckNpcmNsZSwgaW5uZXJDaXJjbGUsIHByZXZpb3VzT3V0ZXJDaXJjbGUsIHByZXZpb3VzSW5uZXJDaXJjbGUsIGNoZWNrZWREaXYsIHVuY2hlY2tlZERpdik7XHJcblxyXG4gICAgdmFyIHByZXZpb3VzQnV0dG9uSWQgPSBkaXZDaG9zZW5QcmV2aW91c2x5SWQuc3Vic3RyaW5nKDMpO1xyXG4gICAgdmFyIGN1cnJlbnRMYWJlbFRvQ2hhbmdlID0gZGl2VG9DaGFuZ2UuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjdXJyZW50QnV0dG9uSWQgKyAnbGFiZWwnKTtcclxuICAgIHZhciBwcmV2aW91c0xhYmVsVG9DaGFuZ2UgPSBwcmV2aW91c0RpdlRvQ2hhbmdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUocHJldmlvdXNCdXR0b25JZCArICdsYWJlbCcpO1xyXG4gICAgY2hhbmdlTGFiZWxTdHlsZU9uQ2xpY2soY3VycmVudExhYmVsVG9DaGFuZ2VbMF0sIHByZXZpb3VzTGFiZWxUb0NoYW5nZVswXSwgdW5jaGVja2VkRGl2LmJhY2tncm91bmRDb2xvciwgdW5jaGVja2VkRGl2LnRleHRDb2xvcik7XHJcblxyXG4gICAgdmFyIHNlcGFyYXRlQnV0dG9uSW5kZXhGb3JQb3NpdGlvbiA9IGN1cnJlbnRCdXR0b25JZC5zcGxpdCgnXycpO1xyXG4gICAgdmFyIGN1cnJlbnRCdXR0b25Qb3NpdGlvbiA9IFtzZXBhcmF0ZUJ1dHRvbkluZGV4Rm9yUG9zaXRpb25bMV0sIHNlcGFyYXRlQnV0dG9uSW5kZXhGb3JQb3NpdGlvblsyXSwgc2VwYXJhdGVCdXR0b25JbmRleEZvclBvc2l0aW9uWzNdXTtcclxuXHJcbiAgICB2YXIgaW5wdXRUZXh0ID0gbGlzdElucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgIHZhciBzZXBhcmF0ZWRJbnB1dFRleHQgPSBpbnB1dFRleHQuc3BsaXQoZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycyk7XHJcblxyXG4gICAgdmFyIG5ld0lucHV0VGV4dCA9IGNoYW5nZUlucHV0VGV4dE9uQ2xpY2soc2VwYXJhdGVkSW5wdXRUZXh0LCBjdXJyZW50QnV0dG9uUG9zaXRpb24sIGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpciwgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycyk7XHJcblxyXG4gICAgbGlzdElucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdJbnB1dFRleHQpO1xyXG4gICAgdmFyIGJ1dHRvblRvQ2xpY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGJ1dHRvblRvQ2xpY2tDbGFzcylbMF07XHJcbiAgICBidXR0b25Ub0NsaWNrLmNsaWNrKCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGZpbmRXaGljaEJ1dHRvbldhc0NoZWNrZWRCZWZvcmVDbGljayhkaXZzSW5DdXJyZW50TGlzdCkge1xyXG4gIHZhciByZXN1bHQ7XHJcbiAgZm9yICh2YXIgaSA9IGRpdnNJbkN1cnJlbnRMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICB2YXIgY3VycmVudERpdklkID0gZGl2c0luQ3VycmVudExpc3RbaV0uZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJyZW50RGl2SWQuc3Vic3RyaW5nKDMpKS5jaGVja2VkKSB7XHJcbiAgICAgIHJlc3VsdCA9IGN1cnJlbnREaXZJZDtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlRGl2U3R5bGVPbkNsaWNrKHByZXZpb3VzRGl2VG9DaGFuZ2UsIGRpdlRvQ2hhbmdlLCB1bmNoZWNrZWREaXZCYWNrZ3JvdW5kQ29sb3IsIGNoZWNrZWREaXZCYWNrZ3JvdW5kQ29sb3IpIHtcclxuICBwcmV2aW91c0RpdlRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHVuY2hlY2tlZERpdkJhY2tncm91bmRDb2xvcjtcclxuICBkaXZUb0NoYW5nZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjaGVja2VkRGl2QmFja2dyb3VuZENvbG9yO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZUJ1dHRvblN0eWxlT25DbGljayhvdXRlckNpcmNsZSwgaW5uZXJDaXJjbGUsIHByZXZpb3VzT3V0ZXJDaXJjbGUsIHByZXZpb3VzSW5uZXJDaXJjbGUsIGNoZWNrZWREaXYsIHVuY2hlY2tlZERpdikge1xyXG4gIG91dGVyQ2lyY2xlWzBdLnN0eWxlLnN0cm9rZSA9IGNoZWNrZWREaXYub3V0ZXJDaXJjbGVDb2xvcjtcclxuICBvdXRlckNpcmNsZVswXS5zdHlsZS5maWxsID0gY2hlY2tlZERpdi5vdXRlckNpcmNsZUZpbGw7XHJcbiAgaW5uZXJDaXJjbGVbMF0uc3R5bGUuZmlsbCA9IGNoZWNrZWREaXYuaW5uZXJDaXJjbGVDb2xvcjtcclxuICBwcmV2aW91c091dGVyQ2lyY2xlWzBdLnN0eWxlLnN0cm9rZSA9IHVuY2hlY2tlZERpdi5vdXRlckNpcmNsZUNvbG9yO1xyXG4gIHByZXZpb3VzT3V0ZXJDaXJjbGVbMF0uc3R5bGUuZmlsbCA9IHVuY2hlY2tlZERpdi5vdXRlckNpcmNsZUZpbGw7XHJcbiAgcHJldmlvdXNJbm5lckNpcmNsZVswXS5zdHlsZS5maWxsID0gdW5jaGVja2VkRGl2LmlubmVyQ2lyY2xlQ29sb3I7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlTGFiZWxTdHlsZU9uQ2xpY2soY3VycmVudExhYmVsVG9DaGFuZ2UsIHByZXZpb3VzTGFiZWxUb0NoYW5nZSwgdW5jaGVja2VkRGl2QmFja2dyb3VuZENvbG9yLCB0ZXh0T25VbmNoZWNrZWRCdXR0b25zQ29sb3IpIHtcclxuICBjdXJyZW50TGFiZWxUb0NoYW5nZS5zdHlsZS5jb2xvciA9IHVuY2hlY2tlZERpdkJhY2tncm91bmRDb2xvcjtcclxuICBwcmV2aW91c0xhYmVsVG9DaGFuZ2Uuc3R5bGUuY29sb3IgPSB0ZXh0T25VbmNoZWNrZWRCdXR0b25zQ29sb3I7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlSW5wdXRUZXh0T25DbGljayhzZXBhcmF0ZWRJbnB1dFRleHQsIGN1cnJlbnRCdXR0b25Qb3NpdGlvbiwgZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyLCBkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzKSB7XHJcbiAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gIGZvciAodmFyIGogPSAwOyBqIDwgc2VwYXJhdGVkSW5wdXRUZXh0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICB2YXIgc2VwYXJhdGVkSW5wdXRGb3JFYWNoUGFpciA9IHNlcGFyYXRlZElucHV0VGV4dFtqXS5zcGxpdChkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIpO1xyXG4gICAgaWYgKGorMSA9PSBjdXJyZW50QnV0dG9uUG9zaXRpb25bMl0pIHtcclxuICAgICAgaWYgKGN1cnJlbnRCdXR0b25Qb3NpdGlvblswXSA9PSAnMScpIHtcclxuICAgICAgICBpZiAoc2VwYXJhdGVkSW5wdXRGb3JFYWNoUGFpclswXSA9PSAnMCcpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSAnMScgKyBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIgKyBzZXBhcmF0ZWRJbnB1dEZvckVhY2hQYWlyWzFdICsgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VwYXJhdGVkSW5wdXRGb3JFYWNoUGFpclswXSA9PSAnMScpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSAnMCcgKyBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIgKyBzZXBhcmF0ZWRJbnB1dEZvckVhY2hQYWlyWzFdICsgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoY3VycmVudEJ1dHRvblBvc2l0aW9uWzBdID09ICcyJykge1xyXG4gICAgICAgIGlmIChzZXBhcmF0ZWRJbnB1dEZvckVhY2hQYWlyWzFdID09ICcwJykge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IHNlcGFyYXRlZElucHV0Rm9yRWFjaFBhaXJbMF0gKyBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIgKyAnMScgKyBkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZXBhcmF0ZWRJbnB1dEZvckVhY2hQYWlyWzFdID09ICcxJykge1xyXG4gICAgICAgICAgcmVzdWx0ICs9IHNlcGFyYXRlZElucHV0Rm9yRWFjaFBhaXJbMF0gKyBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIgKyAnMCcgKyBkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJlc3VsdCArPSBzZXBhcmF0ZWRJbnB1dFRleHRbal0gKyBkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXRDaGFydFNldHRpbmdzQ2hlY2tlcnMoaW5wdXRIZWFkZXJzLCBpbnB1dExpc3RzKSB7XHJcbiAgLyogQ29uZmlnICovXHJcbiAgdmFyIGNoZWNrZWREaXYgPSB7IGJhY2tncm91bmRDb2xvcjogJyM1Nzg3ZjQnLCB0ZXh0Q29sb3I6ICcjZmZmZmZmJywgb3V0ZXJDaXJjbGVDb2xvcjogJyNmZmZmZmYnLCBvdXRlckNpcmNsZUZpbGw6ICd0cmFuc3BhcmVudCcsIGlubmVyQ2lyY2xlQ29sb3I6ICcjZmZmZmZmJyB9O1xyXG4gIHZhciB1bmNoZWNrZWREaXYgPSB7IGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLCB0ZXh0Q29sb3I6ICcjMDAwMDAwJywgb3V0ZXJDaXJjbGVDb2xvcjogJyM1Nzg3ZjQnLCBvdXRlckNpcmNsZUZpbGw6ICcjZmZmZmZmJywgaW5uZXJDaXJjbGVDb2xvcjogJyNmZmZmZmYnfTtcclxuXHJcbiAgdmFyIGN1c3RvbUJ1dHRvbkFwcGVhcmFuY2UgPSAnPHN2ZyBjbGFzcz1cInJhZGlvQnRuUmVwbGFjZW1lbnRcIiBjeD1cIjUwJVwiIGN5PVwiNzAlXCI+PGNpcmNsZSByPVwiNVwiIGNsYXNzPVwib3V0ZXJCbHVlQ2lyY2xlXCIvPiA8Y2lyY2xlIHI9XCIyXCIgY2xhc3M9XCJpbm5lckJsdWVDaXJjbGVcIi8+PC9zdmc+JztcclxuXHJcbiAgdmFyIGNvbnRhaW5lckNsYXNzTmFtZSA9ICdjYXJkLXBhcmFtZXRlcnMnO1xyXG4gIHZhciBidXR0b25Ub0NsaWNrQ2xhc3MgPSAncmVwb3J0YWwtYnV0dG9uJztcclxuICB2YXIgZGl2QnV0dG9uQ2xhc3MgPSAncmFkaW9idXR0b24tYmx1ZSc7XHJcbiAgdmFyIGRlbGltaXRlckZvclN0YXRlc09mRGlmZmVyZW50UGFpcnMgPSAnICc7XHJcbiAgdmFyIGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpciA9ICdfJztcclxuICB2YXIgbGlzdElucHV0Q2xhc3MgPSAnaW5wdXRGb3JTdGF0ZU9mU3dpdGNoZXJzJztcclxuICAvKiBFbmRDb25maWcqL1xyXG5cclxuICB2YXIgbGlzdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsaXN0SW5wdXRDbGFzcylbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF07XHJcbiAgdmFyIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNvbnRhaW5lckNsYXNzTmFtZSk7XHJcbiAgdmFyIGlucHV0VGV4dEkgPSBsaXN0SW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gIHZhciBzZXBhcmF0ZWRJbnB1dFRleHRJID0gaW5wdXRUZXh0SS5zcGxpdChkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzKTtcclxuICB2YXIgcGFpcnNPZkxpc3RzQ291bnQgPSAtMTtcclxuXHJcblxyXG4gIGZvciAodmFyIGwgPSAwOyBsIDwgc2VwYXJhdGVkSW5wdXRUZXh0SS5sZW5ndGg7IGwrKykge1xyXG4gICAgaWYgKG1haW5Db250YWluZXJbbF0uY2hpbGRFbGVtZW50Q291bnQgPT0gMCkge1xyXG4gICAgICBwYWlyc09mTGlzdHNDb3VudCsrO1xyXG4gICAgICB2YXIgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgb3V0ZXJDb250YWluZXIuY2xhc3NOYW1lID0gJ291dGVyQ29udGFpbmVyJztcclxuICAgICAgbWFpbkNvbnRhaW5lcltsXS5hcHBlbmRDaGlsZChvdXRlckNvbnRhaW5lcik7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0SGVhZGVyc1swXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8qIGNyZWF0ZSBjb250YWluZXJzIGZvciBlYWNoIHN3aXRjaGVyICovXHJcbiAgICAgICAgdmFyIGRpdkJ1dHRvbkxpc3QgPSBjcmVhdGVCdXR0b25MaXN0KGkpO1xyXG4gICAgICAgIHZhciBkaXZCdXR0b25MaXN0SGVhZGVyID0gY3JlYXRlSGVhZGVyRm9yQnV0dG9uTGlzdChpLCBpbnB1dEhlYWRlcnMpO1xyXG5cclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZCdXR0b25MaXN0KTtcclxuICAgICAgICBkaXZCdXR0b25MaXN0LmFwcGVuZENoaWxkKGRpdkJ1dHRvbkxpc3RIZWFkZXIpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGlucHV0TGlzdHNbMF1baV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIC8qIGNyZWF0ZSBlbGVtZW50cyBpbnNpZGUgZWFjaCBjb250YWluZXIgZm9yIGVhY2ggb3B0aW9uICovXHJcbiAgICAgICAgICB2YXIgYnV0dG9uVmFsdWVJbmRleCA9IGNyZWF0ZUJ1dHRvblZhbHVlSW5kZXgoaiwgcGFpcnNPZkxpc3RzQ291bnQpO1xyXG4gICAgICAgICAgdmFyIGJ1dHRvbklkSW5kZXggPSBjcmVhdGVCdXR0b25JZEluZGV4KGksIGosIHBhaXJzT2ZMaXN0c0NvdW50KTtcclxuXHJcbiAgICAgICAgICB2YXIgZGl2UmFkaW8gPSBjcmVhdGVEaXZGb3JCdXR0b25BbmRMYWJlbChkaXZCdXR0b25DbGFzcywgYnV0dG9uSWRJbmRleCk7XHJcbiAgICAgICAgICB2YXIgaW5wdXRSYWRpbyA9IGNyZWF0ZUJ1dHRvbkZvckxpc3QoaSwgbCwgYnV0dG9uVmFsdWVJbmRleCwgYnV0dG9uSWRJbmRleCk7XHJcbiAgICAgICAgICB2YXIgbGFiZWxGb3JSYWRpbz0gY3JlYXRlTGFiZWxGb3JCdXR0b25Jbkxpc3QoaSwgaiwgYnV0dG9uSWRJbmRleCwgY3VzdG9tQnV0dG9uQXBwZWFyYW5jZSwgaW5wdXRMaXN0cyk7XHJcblxyXG4gICAgICAgICAgaW5wdXRUZXh0SSA9IGxpc3RJbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgICBzZXBhcmF0ZWRJbnB1dFRleHRJID0gaW5wdXRUZXh0SS5zcGxpdChkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzKTtcclxuXHJcbiAgICAgICAgICBjaGVja0J1dHRvbnNPbkluaXRpYWxQb3NpdGlvbnMoaSwgaiwgaW5wdXRSYWRpbywgZGl2UmFkaW8sIHNlcGFyYXRlZElucHV0VGV4dEksIHBhaXJzT2ZMaXN0c0NvdW50LCBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIsIGNoZWNrZWREaXYpO1xyXG5cclxuICAgICAgICAgIGRpdkJ1dHRvbkxpc3QuYXBwZW5kQ2hpbGQoZGl2UmFkaW8pO1xyXG4gICAgICAgICAgZGl2UmFkaW8uYXBwZW5kQ2hpbGQoaW5wdXRSYWRpbyk7XHJcbiAgICAgICAgICBkaXZSYWRpby5hcHBlbmRDaGlsZChsYWJlbEZvclJhZGlvKTtcclxuXHJcbiAgICAgICAgICBhcHBseVN0eWxlc0ZvckFsbEJ1dHRvbnNJbkxpc3RzKHNlcGFyYXRlZElucHV0VGV4dEksIGksIGRpdlJhZGlvLCBsYWJlbEZvclJhZGlvLCBwYWlyc09mTGlzdHNDb3VudCwgZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyLCB1bmNoZWNrZWREaXYsIGNoZWNrZWREaXYsIGopO1xyXG5cclxuICAgICAgICAgIGlucHV0UmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe2hhbmRsZUJ1dHRvbkNsaWNrKGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpciwgYnV0dG9uVG9DbGlja0NsYXNzLCBkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzLCB0aGlzLCB1bmNoZWNrZWREaXYsIGNoZWNrZWREaXYsIGxpc3RJbnB1dCk7fSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlQnV0dG9uTGlzdCwgY3JlYXRlSGVhZGVyRm9yQnV0dG9uTGlzdCwgY3JlYXRlQnV0dG9uVmFsdWVJbmRleCwgY3JlYXRlQnV0dG9uSWRJbmRleCwgY3JlYXRlRGl2Rm9yQnV0dG9uQW5kTGFiZWwsIGNyZWF0ZUJ1dHRvbkZvckxpc3QsIGNyZWF0ZUxhYmVsRm9yQnV0dG9uSW5MaXN0LFxyXG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b25zT25Jbml0aWFsUG9zaXRpb25zLCBhcHBseVN0eWxlRm9yT25lQnV0dG9uLCBhcHBseVN0eWxlc0ZvckFsbEJ1dHRvbnNJbkxpc3RzLCBoYW5kbGVCdXR0b25DbGljaywgZmluZFdoaWNoQnV0dG9uV2FzQ2hlY2tlZEJlZm9yZUNsaWNrLCBjaGFuZ2VCdXR0b25TdHlsZU9uQ2xpY2ssXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VEaXZTdHlsZU9uQ2xpY2ssIGNoYW5nZUxhYmVsU3R5bGVPbkNsaWNrLCBjaGFuZ2VJbnB1dFRleHRPbkNsaWNrLCBTZXRDaGFydFNldHRpbmdzQ2hlY2tlcnMgfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NldHRpbmdzIHN3aXRjaGVycy9zZXR0aW5ncy1zd2l0Y2hlcnMuanMiXSwic291cmNlUm9vdCI6IiJ9