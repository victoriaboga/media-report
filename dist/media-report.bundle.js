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
	
	var _settingsSwitchers = __webpack_require__(6);
	
	var _hierarchyTableUpdates = __webpack_require__(8);
	
	var _hierarchyTableUpdates2 = _interopRequireDefault(_hierarchyTableUpdates);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(9);
	
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
	
	var _detabinator = __webpack_require__(7);
	
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

/***/ }),
/* 7 */
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
/* 8 */
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
	      floatingHeader: { enabled: true }, // behaves aggressive when many rows,
	      sorting: { enabled: true }
	    });
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
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ODQ5YjRjNDVkMTc2Y2U4NDI5MSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2lkZS1uYXYvc2lkZS1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tZWRpYS1xdWVyeS9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGllcmFyY2h5L2hpZXJhcmNoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2aWdhdGlvbi9tZW51LXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yMi9oZWFkZXItc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzIHN3aXRjaGVycy9zZXR0aW5ncy1zd2l0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZGUtbmF2L2RldGFiaW5hdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zb21jLXN5bXB0b20tb3ZlcnZpZXctcGFnZS1zY3JpcHRzL2hpZXJhcmNoeS10YWJsZS11cGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiUmVwb3J0YWwiLCJUcmFuc2Zvcm1NZW51QXQiLCJTaWRlTmF2IiwiaGllcmFyY2h5VXBncmFkZSIsInVwZ3JhZGUiLCJTT01DIiwicmVuZGVyTWlkZGxlTGV2ZWwiLCJTd2l0Y2hlcnMiLCJjcmVhdGVCdXR0b25MaXN0IiwiY3JlYXRlSGVhZGVyRm9yQnV0dG9uTGlzdCIsImNyZWF0ZUJ1dHRvblZhbHVlSW5kZXgiLCJjcmVhdGVCdXR0b25JZEluZGV4IiwiY3JlYXRlRGl2Rm9yQnV0dG9uQW5kTGFiZWwiLCJjcmVhdGVCdXR0b25Gb3JMaXN0IiwiY3JlYXRlTGFiZWxGb3JCdXR0b25Jbkxpc3QiLCJjaGVja0J1dHRvbnNPbkluaXRpYWxQb3NpdGlvbnMiLCJhcHBseVN0eWxlRm9yT25lQnV0dG9uIiwiYXBwbHlTdHlsZXNGb3JBbGxCdXR0b25zSW5MaXN0cyIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZmluZFdoaWNoQnV0dG9uV2FzQ2hlY2tlZEJlZm9yZUNsaWNrIiwiY2hhbmdlQnV0dG9uU3R5bGVPbkNsaWNrIiwiY2hhbmdlRGl2U3R5bGVPbkNsaWNrIiwiY2hhbmdlTGFiZWxTdHlsZU9uQ2xpY2siLCJjaGFuZ2VJbnB1dFRleHRPbkNsaWNrIiwiU2V0Q2hhcnRTZXR0aW5nc0NoZWNrZXJzIiwic2hvd0J1dHRvbkVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZUJ1dHRvbkVsIiwic2lkZU5hdkVsIiwic2lkZU5hdkNvbnRhaW5lckVsIiwiZGV0YWJpbmF0b3IiLCJpbmVydCIsInNob3dTaWRlTmF2IiwiYmluZCIsImhpZGVTaWRlTmF2IiwiYmxvY2tDbGlja3MiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hFbmQiLCJvblRyYW5zaXRpb25FbmQiLCJ1cGRhdGUiLCJzdGFydFgiLCJjdXJyZW50WCIsInRvdWNoaW5nU2lkZU5hdiIsInN1cHBvcnRzUGFzc2l2ZSIsInVuZGVmaW5lZCIsInBhc3NpdmUiLCJpc1N1cHBvcnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiYXBwbHlQYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG91Y2hlcyIsInBhZ2VYIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidHJhbnNsYXRlWCIsIk1hdGgiLCJtaW4iLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlbW92ZSIsIm92ZXJmbG93IiwiYWRkIiwic3RvcFByb3BhZ2F0aW9uIiwiTWVkaWFRdWVyeSIsIm9wdGlvbnMiLCJjYWxsYmFjayIsImNvbnRleHQiLCJxdWVyeSIsImZ1bGwiLCJfbWF0Y2hlcyIsIl9tcSIsIl9jYWxsYmFjayIsIl9jb250ZXh0IiwiX2JvdW5kIiwiX29uTWF0Y2giLCJtcSIsIm1hdGNoZXMiLCJjYWxsIiwiX3F1ZXJ5IiwidmFsIiwiY29uc3RydWN0b3IiLCJtYXRjaE1lZGlhIiwiYm91bmQiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiTURIaWVyYXJjaHkiLCJoaWVyYXJjaHlCdXR0b24iLCJoaWVyYXJjaHlUb2dnbGUiLCJoaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIiLCJQcm9taXNlIiwic2V0VGltZW91dCIsImhpZXJhcmNoeUNocm9tZSIsInJlc29sdmUiLCJhc3luY0hpZXJhcmNoeUNocm9tZSIsImRldGFjaEhpZXJhcmNoeVRvZ2dsZUNsaWNrTGlzdGVuZXIiLCJkaXNhYmxlUGFnZVNjcm9sbCIsInRoZW4iLCJhdHRhY2hDaHJvbWVDbG9zZUxpc3RlbmVyIiwib25DaHJvbWVDbG9zZSIsImV2ZW50IiwiY2FuY2VsIiwiY2FuY2VsQnV0dG9uIiwiYXBwbHkiLCJhcHBseUJ1dHRvbiIsImNocm9tZSIsImNsaWNrZWRFbCIsInBhdGgiLCJpbmRleE9mIiwiY2xpY2siLCJlbmFibGVQYWdlU2Nyb2xsIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwicGFyZW50Tm9kZSIsImJyZWFrcG9pbnQiLCJpZnJhbWVDbGFzc05hbWUiLCJkZXNrdG9wSGVhZGVyQ2xhc3NOYW1lIiwibW9iaWxlSGVhZGVyQ2xhc3NOYW1lIiwiaWZyYW1lRWwiLCJkZXNrdG9wSGVhZGVyRWwiLCJtb2JpbGVIZWFkZXJFbCIsImN1cnJlbnRIZWFkZXIiLCJpc0ludGVncmF0aW9uTW9kZSIsInN3YXBIZWFkZXJBbmRJZnJhbWUiLCJoZWFkZXJTY3JvbGxlckluc3QiLCJtYWtlSGVhZGVyUmVzcG9uZFRvSWZyYW1lU2Nyb2xsIiwiaGFuZGxlQnJlYWtwb2ludE1hdGNoIiwic2lkZW5hdiIsIm1lZGlhUXVlcnkiLCJiZWxvd0JyZWFrcG9pbnQiLCJzd2FwSGVhZGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVycyIsImlzSWZyYW1lVVJMRW1wdHkiLCJtYWtlSGVhZGVyU2Nyb2xsYWJsZSIsImNvbnRlbnRXaW5kb3ciLCJ0YXJnZXQiLCJpZnJhbWVDb250ZW50V2luZG93IiwibmV3SGVhZGVyIiwiaGVhZGVyU2Nyb2xsZXIiLCJoZWFkZXIiLCJsb2NhdGlvbiIsImhyZWYiLCJIZWFkZXJTY3JvbGxlciIsInJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9tZXRhIiwidG9wT2Zmc2V0IiwidGlja2luZyIsIm9mZnNldEhlaWdodCIsImxhc3RTY3JvbGxZIiwiX3Njcm9sbENhbGxiYWNrIiwiYXR0YWNoTGlzdGVuZXJzIiwidG9wIiwiaWZyYW1lQm9keSIsInBhZGRpbmdUb3AiLCJfc2Nyb2xsRml4ZWQiLCJwYWdlWU9mZnNldCIsInJlcXVlc3RUaWNrIiwib2Zmc2V0IiwiaGVhZGVyRWxlbWVudCIsImhlYWRlclRvcE9mZnNldCIsIl9yZXNldEhlYWRlciIsIl9jb25maWd1cmVIZWFkZXIiLCJfc2V0SGVhZGVyT2Zmc2V0SW5JZnJhbWUiLCJudW1iZXJPZkxpc3RJblBhaXIiLCJkaXZCdXR0b25MaXN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlucHV0SGVhZGVycyIsImRpdkJ1dHRvbkxpc3RIZWFkZXIiLCJpbm5lckhUTUwiLCJudW1iZXJPZkJ1dHRvbkluTGlzdCIsInBhaXJzT2ZMaXN0c0NvdW50IiwiZGl2QnV0dG9uQ2xhc3MiLCJidXR0b25JZCIsImRpdlJhZGlvIiwibnVtYmVyT2ZDYXJkIiwiYnV0dG9uVmFsdWUiLCJpbnB1dFJhZGlvIiwiYnV0dG9uSWRJbmRleCIsImN1c3RvbUJ1dHRvbkFwcGVhcmFuY2UiLCJpbnB1dExpc3RzIiwibGFiZWxGb3JSYWRpb0JsdWUiLCJpbm5lckh0bWxGb3JMYWJlbCIsImN1cnJlbnRCdXR0b24iLCJkaXZGb3JDdXJyZW50QnV0dG9uIiwic2VwYXJhdGVkSW5wdXRUZXh0SSIsImRlbGltaXRlckZvclN0YXRlc0luT25lUGFpciIsImNoZWNrZWREaXYiLCJzcGxpdCIsImJhY2tncm91bmRDb2xvciIsImN1cnJlbnREaXYiLCJjdXJyZW50TGFiZWwiLCJvdXRlckNpcmNsZVN0cm9rZUNvbG9yIiwib3V0ZXJDaXJjbGVGaWxsQ29sb3IiLCJpbm5lckNpcmNsZUZpbGxDb2xvciIsInRleHRDb2xvciIsIm91dGVyQ2lyY2xlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyQ2lyY2xlIiwic3Ryb2tlIiwiZmlsbCIsImNvbG9yIiwidW5jaGVja2VkRGl2IiwiaiIsIm91dGVyQ2lyY2xlQ29sb3IiLCJvdXRlckNpcmNsZUZpbGwiLCJpbm5lckNpcmNsZUNvbG9yIiwiYnV0dG9uVG9DbGlja0NsYXNzIiwiZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycyIsImJ1dHRvbiIsImxpc3RJbnB1dCIsImN1cnJlbnRCdXR0b25JZCIsImdldEF0dHJpYnV0ZSIsImRpdlRvQ2hhbmdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50TGlzdCIsImRpdnNJbkN1cnJlbnRMaXN0IiwiY2hpbGROb2RlcyIsImRpdkNob3NlblByZXZpb3VzbHlJZCIsInByZXZpb3VzRGl2VG9DaGFuZ2UiLCJzdWJzdHJpbmciLCJwcmV2aW91c091dGVyQ2lyY2xlIiwicHJldmlvdXNJbm5lckNpcmNsZSIsInByZXZpb3VzQnV0dG9uSWQiLCJjdXJyZW50TGFiZWxUb0NoYW5nZSIsInByZXZpb3VzTGFiZWxUb0NoYW5nZSIsInNlcGFyYXRlQnV0dG9uSW5kZXhGb3JQb3NpdGlvbiIsImN1cnJlbnRCdXR0b25Qb3NpdGlvbiIsImlucHV0VGV4dCIsInNlcGFyYXRlZElucHV0VGV4dCIsIm5ld0lucHV0VGV4dCIsImJ1dHRvblRvQ2xpY2siLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwiY3VycmVudERpdklkIiwiY2hlY2tlZCIsInVuY2hlY2tlZERpdkJhY2tncm91bmRDb2xvciIsImNoZWNrZWREaXZCYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0T25VbmNoZWNrZWRCdXR0b25zQ29sb3IiLCJzZXBhcmF0ZWRJbnB1dEZvckVhY2hQYWlyIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwibGlzdElucHV0Q2xhc3MiLCJjaGlsZHJlbiIsIm1haW5Db250YWluZXIiLCJpbnB1dFRleHRJIiwibCIsImNoaWxkRWxlbWVudENvdW50Iiwib3V0ZXJDb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImJ1dHRvblZhbHVlSW5kZXgiLCJsYWJlbEZvclJhZGlvIiwiRGV0YWJpbmF0b3IiLCJlbGVtZW50IiwiRXJyb3IiLCJfaW5lcnQiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJfZm9jdXNhYmxlRWxlbWVudHMiLCJzbGljZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpc0luZXJ0IiwiZm9yRWFjaCIsImNoaWxkIiwiaGFzQXR0cmlidXRlIiwiX19zYXZlZFRhYmluZGV4IiwidGFiSW5kZXgiLCJ1cGdyYWRlSGllcmFyY2h5VGFibGUiLCJ0YWJsZSIsImhlYWRlcnMiLCJ1cGdyYWRlZFRhYmxlIiwiVEFoaWVyYXJjaHkiLCJzb3VyY2UiLCJoaWVyYXJjaHkiLCJjYXRlZ29yeVN5bXB0b21IaWVyYXJjaHkiLCJyb3doZWFkZXJzIiwic2VhcmNoIiwiZW5hYmxlZCIsImNsZWFyTGlua3MiLCJmbG9hdGluZ0hlYWRlciIsInNvcnRpbmciLCJhcHBseUhpZXJhcmNoeVN0eWxlVG9UYWJsZSIsImNhdFN5bXBUYWJsZUhlYWRlcnMiLCJ0YWJsZVdpdGhIaWVyYXJjaHkiLCJjb3VudENvbCIsInNhdmVNaWRkbGVMZXZlbERyaWxsRG93blBhcmFtIiwiaW5wdXRXcmFwcGVySUQiLCJidG5XcmFwcGVySUQiLCJjYXJkIiwib25jbGljayIsImFsbF90ZXh0IiwibW5fdGV4dCIsInRleHRDb250ZW50Iiwic3ltcHRvbU5hbWUiLCJyZXBsYWNlIiwicHJvamVjdE5hbWUiLCJ2YWx1ZSIsImFkZE1OYXNUaXBzIiwibW5fdGFibGUiLCJtbl9ub3RlIiwibW5fcHJvamVjdCIsIm1uX3N5bXAiLCJtbl9jYXQiLCJtbl9vYmplY3QiLCJjYXRzV2l0aE1OX29iamVjdCIsImNhcmRzIiwicm93SGVhZGVycyIsImhlYWRlclRleHQiLCJpbm5lclRleHQiLCJoYXNPd25Qcm9wZXJ0eSIsImhvdmVyT3ZlciIsInRhYmxlcyIsInBhcmVudEVsZW1lbnQiLCJkaXNwbGF5IiwiWSIsIkdsb2JhbCIsIm9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNwQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBR0E7Ozs7OztBQVZBLG9CQUFBQSxDQUFRLENBQVI7O0FBWUFDLFFBQU9DLFFBQVAsR0FBa0JELE9BQU9DLFFBQVAsSUFBbUIsRUFBckM7QUFDQUQsUUFBT0MsUUFBUCxDQUFnQkMsZUFBaEI7QUFDQUYsUUFBT0MsUUFBUCxDQUFnQkUsT0FBaEI7QUFDQUgsUUFBT0MsUUFBUCxDQUFnQkcsZ0JBQWhCLEdBQW1DLG9CQUFZQyxPQUEvQzs7QUFFQUwsUUFBT00sSUFBUCxHQUFjTixPQUFPTSxJQUFQLElBQWUsRUFBN0I7QUFDQU4sUUFBT00sSUFBUCxDQUFZQyxpQkFBWjtBQUNBUCxRQUFPTSxJQUFQLENBQVlFLFNBQVosR0FBd0IsRUFBRUMscURBQUYsRUFBb0JDLHVFQUFwQixFQUErQ0MsaUVBQS9DLEVBQXVFQywyREFBdkUsRUFBNEZDLHlFQUE1RixFQUF3SEMsMkRBQXhI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RCwwQyIsImZpbGUiOiJtZWRpYS1yZXBvcnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ODQ5YjRjNDVkMTc2Y2U4NDI5MSIsInJlcXVpcmUoJy4vbWFpbi5jc3MnKTtcclxuXHJcbmltcG9ydCBNREhpZXJhcmNoeSBmcm9tIFwiLi9oaWVyYXJjaHkvaGllcmFyY2h5XCI7XHJcbmltcG9ydCBUcmFuc2Zvcm1NZW51QXQgZnJvbSBcIi4vbmF2aWdhdGlvbi9tZW51LXRyYW5zZm9ybWVyXCI7XHJcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4vc2lkZS1uYXYvc2lkZS1uYXYnO1xyXG5cclxuXHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbkxpc3QsIGNyZWF0ZUhlYWRlckZvckJ1dHRvbkxpc3QsIGNyZWF0ZUJ1dHRvblZhbHVlSW5kZXgsIGNyZWF0ZUJ1dHRvbklkSW5kZXgsIGNyZWF0ZURpdkZvckJ1dHRvbkFuZExhYmVsLCBjcmVhdGVCdXR0b25Gb3JMaXN0LCBjcmVhdGVMYWJlbEZvckJ1dHRvbkluTGlzdCxcclxuICBjaGVja0J1dHRvbnNPbkluaXRpYWxQb3NpdGlvbnMsIGFwcGx5U3R5bGVGb3JPbmVCdXR0b24sIGFwcGx5U3R5bGVzRm9yQWxsQnV0dG9uc0luTGlzdHMsIGhhbmRsZUJ1dHRvbkNsaWNrLCBmaW5kV2hpY2hCdXR0b25XYXNDaGVja2VkQmVmb3JlQ2xpY2ssIGNoYW5nZUJ1dHRvblN0eWxlT25DbGljayxcclxuICBjaGFuZ2VEaXZTdHlsZU9uQ2xpY2ssIGNoYW5nZUxhYmVsU3R5bGVPbkNsaWNrLCBjaGFuZ2VJbnB1dFRleHRPbkNsaWNrLCBTZXRDaGFydFNldHRpbmdzQ2hlY2tlcnN9IGZyb20gJy4vc2V0dGluZ3Mgc3dpdGNoZXJzL3NldHRpbmdzLXN3aXRjaGVycyc7XHJcbmltcG9ydCByZW5kZXJNaWRkbGVMZXZlbCBmcm9tICcuL3NvbWMtc3ltcHRvbS1vdmVydmlldy1wYWdlLXNjcmlwdHMvaGllcmFyY2h5LXRhYmxlLXVwZGF0ZXMnO1xyXG5cclxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xyXG53aW5kb3cuUmVwb3J0YWwuVHJhbnNmb3JtTWVudUF0ID0gVHJhbnNmb3JtTWVudUF0O1xyXG53aW5kb3cuUmVwb3J0YWwuU2lkZU5hdiA9IFNpZGVOYXY7XHJcbndpbmRvdy5SZXBvcnRhbC5oaWVyYXJjaHlVcGdyYWRlID0gTURIaWVyYXJjaHkudXBncmFkZTtcclxuXHJcbndpbmRvdy5TT01DID0gd2luZG93LlNPTUMgfHwge307XHJcbndpbmRvdy5TT01DLnJlbmRlck1pZGRsZUxldmVsID0gcmVuZGVyTWlkZGxlTGV2ZWw7XHJcbndpbmRvdy5TT01DLlN3aXRjaGVycyA9IHsgY3JlYXRlQnV0dG9uTGlzdCwgY3JlYXRlSGVhZGVyRm9yQnV0dG9uTGlzdCwgY3JlYXRlQnV0dG9uVmFsdWVJbmRleCwgY3JlYXRlQnV0dG9uSWRJbmRleCwgY3JlYXRlRGl2Rm9yQnV0dG9uQW5kTGFiZWwsIGNyZWF0ZUJ1dHRvbkZvckxpc3QsIGNyZWF0ZUxhYmVsRm9yQnV0dG9uSW5MaXN0LFxyXG4gIGNoZWNrQnV0dG9uc09uSW5pdGlhbFBvc2l0aW9ucywgYXBwbHlTdHlsZUZvck9uZUJ1dHRvbiwgYXBwbHlTdHlsZXNGb3JBbGxCdXR0b25zSW5MaXN0cywgaGFuZGxlQnV0dG9uQ2xpY2ssIGZpbmRXaGljaEJ1dHRvbldhc0NoZWNrZWRCZWZvcmVDbGljaywgY2hhbmdlQnV0dG9uU3R5bGVPbkNsaWNrLFxyXG4gIGNoYW5nZURpdlN0eWxlT25DbGljaywgY2hhbmdlTGFiZWxTdHlsZU9uQ2xpY2ssIGNoYW5nZUlucHV0VGV4dE9uQ2xpY2ssIFNldENoYXJ0U2V0dGluZ3NDaGVja2VycyB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIi8qKlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQgRGV0YWJpbmF0b3IgZnJvbSBcIi4vZGV0YWJpbmF0b3JcIjtcclxuXHJcbmNsYXNzIFNpZGVOYXYge1xyXG4gIC8qKlxyXG4gICAqIEEgY2xhc3MgdGhhdCBzZXRzIHVwIGEgc2lkZWJhciB0aGF0IGlzIGRpc21pc3NlZCBvbiBzY3JpbS1jbGljayBvciBvbiBzd2lwZSBhbmQgaXMgb3BlbmQgb24gaGFtYnVyZ2VyLWljb24gY2xpY2tcclxuICAgKiAqL1xyXG4gIGNvbnN0cnVjdG9yICh7XHJcbiAgICAgICAgICAgICAgICAgc2hvd0J1dHRvbkVsPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LXNob3cnKSxcclxuICAgICAgICAgICAgICAgICBoaWRlQnV0dG9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbWVudS1oaWRlJyksXHJcbiAgICAgICAgICAgICAgICAgc2lkZU5hdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNpZGUtbmF2JyksXHJcbiAgICAgICAgICAgICAgICAgc2lkZU5hdkNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpXHJcbiAgICAgICAgICAgICAgIH09e30pIHtcclxuICAgIHRoaXMuc2hvd0J1dHRvbkVsID0gc2hvd0J1dHRvbkVsO1xyXG4gICAgdGhpcy5oaWRlQnV0dG9uRWwgPSBoaWRlQnV0dG9uRWw7XHJcbiAgICB0aGlzLnNpZGVOYXZFbCA9IHNpZGVOYXZFbDtcclxuICAgIHRoaXMuc2lkZU5hdkNvbnRhaW5lckVsID0gc2lkZU5hdkNvbnRhaW5lckVsO1xyXG4gICAgLy8gQ29udHJvbCB3aGV0aGVyIHRoZSBjb250YWluZXIncyBjaGlsZHJlbiBjYW4gYmUgZm9jdXNlZFxyXG4gICAgLy8gU2V0IGluaXRpYWwgc3RhdGUgdG8gaW5lcnQgc2luY2UgdGhlIGRyYXdlciBpcyBvZmZzY3JlZW5cclxuICAgIHRoaXMuZGV0YWJpbmF0b3IgPSBuZXcgRGV0YWJpbmF0b3IodGhpcy5zaWRlTmF2Q29udGFpbmVyRWwpO1xyXG4gICAgdGhpcy5kZXRhYmluYXRvci5pbmVydCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zaG93U2lkZU5hdiA9IHRoaXMuc2hvd1NpZGVOYXYuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGlkZVNpZGVOYXYgPSB0aGlzLmhpZGVTaWRlTmF2LmJpbmQodGhpcyk7XHJcbiAgICBTaWRlTmF2LmJsb2NrQ2xpY2tzID0gU2lkZU5hdi5ibG9ja0NsaWNrcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblRvdWNoTW92ZSA9IHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25Ub3VjaEVuZCA9IHRoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vblRyYW5zaXRpb25FbmQgPSB0aGlzLm9uVHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRYID0gMDtcclxuICAgIHRoaXMuY3VycmVudFggPSAwO1xyXG4gICAgdGhpcy50b3VjaGluZ1NpZGVOYXYgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnN1cHBvcnRzUGFzc2l2ZSA9IHVuZGVmaW5lZDtcclxuICAgIC8vdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgLy8gYXBwbHkgcGFzc2l2ZSBldmVudCBsaXN0ZW5pbmcgaWYgaXQncyBzdXBwb3J0ZWRcclxuICBhcHBseVBhc3NpdmUgKCkge1xyXG4gICAgaWYgKHRoaXMuc3VwcG9ydHNQYXNzaXZlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3VwcG9ydHNQYXNzaXZlID8ge3Bhc3NpdmU6IHRydWV9IDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyBmZWF0dXJlIGRldGVjdFxyXG4gICAgbGV0IGlzU3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICB0cnkge1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwge2dldCBwYXNzaXZlICgpIHtcclxuICAgICAgICBpc1N1cHBvcnRlZCA9IHRydWU7XHJcbiAgICAgIH19KTtcclxuICAgIH0gY2F0Y2ggKGUpIHsgfVxyXG4gICAgdGhpcy5zdXBwb3J0c1Bhc3NpdmUgPSBpc1N1cHBvcnRlZDtcclxuICAgIHJldHVybiB0aGlzLmFwcGx5UGFzc2l2ZSgpO1xyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMgKCkge1xyXG4gICAgdGhpcy5zaG93QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dTaWRlTmF2KTtcclxuICAgIHRoaXMuaGlkZUJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlU2lkZU5hdik7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGlkZVNpZGVOYXYpO1xyXG4gICAgdGhpcy5zaWRlTmF2Q29udGFpbmVyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBTaWRlTmF2LmJsb2NrQ2xpY2tzKTtcclxuXHJcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMuYXBwbHlQYXNzaXZlKCkpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZSwgdGhpcy5hcHBseVBhc3NpdmUoKSk7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaEVuZCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFdmVudExpc3RlbmVycyAoKSB7XHJcbiAgICB0aGlzLnNob3dCdXR0b25FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd1NpZGVOYXYpO1xyXG4gICAgdGhpcy5oaWRlQnV0dG9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhpZGVTaWRlTmF2KTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oaWRlU2lkZU5hdik7XHJcbiAgICB0aGlzLnNpZGVOYXZDb250YWluZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFNpZGVOYXYuYmxvY2tDbGlja3MpO1xyXG5cclxuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCk7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRW5kKTtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hTdGFydCAoZXZ0KSB7XHJcbiAgICBpZiAoIXRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5jb250YWlucygnc2lkZS1uYXYtLXZpc2libGUnKSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgLy9UT0RPOnN1cHBvcnQgc2lkZWJhciBzY3JvbGxpbmcgYXMgd2VsbFxyXG4gICAgdGhpcy5zdGFydFggPSBldnQudG91Y2hlc1swXS5wYWdlWDtcclxuICAgIHRoaXMuY3VycmVudFggPSB0aGlzLnN0YXJ0WDtcclxuXHJcbiAgICB0aGlzLnRvdWNoaW5nU2lkZU5hdiA9IHRydWU7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25Ub3VjaE1vdmUgKGV2dCkge1xyXG4gICAgaWYgKCF0aGlzLnRvdWNoaW5nU2lkZU5hdilcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFggPSBldnQudG91Y2hlc1swXS5wYWdlWDtcclxuICB9XHJcblxyXG4gIG9uVG91Y2hFbmQgKGV2dCkge1xyXG4gICAgaWYgKCF0aGlzLnRvdWNoaW5nU2lkZU5hdilcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMudG91Y2hpbmdTaWRlTmF2ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgdHJhbnNsYXRlWCA9IE1hdGgubWluKDAsIHRoaXMuY3VycmVudFggLSB0aGlzLnN0YXJ0WCk7XHJcbiAgICB0aGlzLnNpZGVOYXZDb250YWluZXJFbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuXHJcbiAgICBpZiAodHJhbnNsYXRlWCA8IDApIHtcclxuICAgICAgdGhpcy5oaWRlU2lkZU5hdigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlICgpIHtcclxuICAgIGlmICghdGhpcy50b3VjaGluZ1NpZGVOYXYpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBNYXRoLm1pbigwLCB0aGlzLmN1cnJlbnRYIC0gdGhpcy5zdGFydFgpO1xyXG4gICAgdGhpcy5zaWRlTmF2Q29udGFpbmVyRWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfXB4KWA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYmxvY2tDbGlja3MgKGV2dCkge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25UcmFuc2l0aW9uRW5kIChldnQpIHtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGUtbmF2LS1hbmltYXRhYmxlJyk7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmQpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1NpZGVOYXYgKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdi0tYW5pbWF0YWJsZScpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LmFkZCgnc2lkZS1uYXYtLXZpc2libGUnKTtcclxuICAgIHRoaXMuZGV0YWJpbmF0b3IuaW5lcnQgPSBmYWxzZTtcclxuICAgIHRoaXMuc2lkZU5hdkVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZCk7XHJcbiAgfVxyXG5cclxuICBoaWRlU2lkZU5hdiAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUub3ZlcmZsb3c9XCJhdXRvXCI7XHJcbiAgICB0aGlzLnNpZGVOYXZFbC5jbGFzc0xpc3QuYWRkKCdzaWRlLW5hdi0tYW5pbWF0YWJsZScpO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZS1uYXYtLXZpc2libGUnKTtcclxuICAgIHRoaXMuZGV0YWJpbmF0b3IuaW5lcnQgPSB0cnVlO1xyXG4gICAgdGhpcy5zaWRlTmF2RWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMub25UcmFuc2l0aW9uRW5kKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU5hdlxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NpZGUtbmF2L3NpZGUtbmF2LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTMuMTIuMjAxNi5cclxuICovXHJcbi8qKlxyXG4gKiBgTWVkaWFRdWVyeWAgaGVscHMgcGVyZm9ybSBhY3Rpb25zIHdoZW4gQ1NTIHF1ZXJ5IGlzIG1hdGNoZWQgaW5zdGVhZCBvZiBwb2xsaW5nIHRoZSB3aW5kb3cgd2lkdGgsIHdoZW4gaXQncyBub3Qgc28gaW1wb3J0YW50IHRvIGdldCBleGFjdCB3aWR0aCwgb25seSBjaGVja2luZyBtYXRjaGluZyB0aGUgcXVlcnkuXHJcbiAqXHJcbiAqIGBgYCBqYXZhc2NyaXB0XHJcbiAqIGZ1bmN0aW9uIG9uTWF0Y2gobWF0Y2hlcyl7XHJcbiAqICBpZihtYXRjaGVzKXtcclxuICogICAgLy8gZG8gd2hhdCB5b3UgbmVlZCB3aGVuIHRoZSBtZWRpYXF1ZXJ5IGlzIG1hdGNoZWRcclxuICogIH0gZWxzZSB7XHJcbiAqICAgICAvLyBkbyB3aGF0IHlvdSBuZWVkIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIG5vdCBtYXRjaGVkXHJcbiAqICB9XHJcbiAqIH1cclxuICpcclxuICogIHZhciBtcSA9IG5ldyBNZWRpYVF1ZXJ5KHtxdWVyeTpcIm1heC13aWR0aDo3NjBweFwifSxvbk1hdGNoLHRoaXMpO1xyXG4gKlxyXG4gKiAgLy9hdCBhbnkgdGltZSB5b3UgbWF5IGNoZWNrIHdoZXRoZXIgaXQgbWF0Y2hlcyB0aGUgcXVlcnk6XHJcbiAqXHJcbiAqICBtcS5tYXRjaGVzIC8vdHJ1ZSBvciBmYWxzZVxyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMucXVlcnkgLSBUaGUgQ1NTIG1lZGlhIHF1ZXJ5IHRvIGV2YWx1YXRlLlxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZ1bGw9ZmFsc2VdIC0gSWYgdHJ1ZSwgdGhlIHF1ZXJ5IGF0dHJpYnV0ZSBpcyBhc3N1bWVkIHRvIGJlIGEgY29tcGxldGUgbWVkaWEgcXVlcnkgc3RyaW5nIHJhdGhlciB0aGFuIGEgc2luZ2xlIG1lZGlhIGZlYXR1cmUuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIG1hdGNoaW5nIGlzIGV2YWx1YXRlZFxyXG4gKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gW2NvbnRleHQ9dGhpc10gLSBjb250ZXh0IGluIHdoaWNoIHRoZSBgY2FsbGJhY2tgIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIGV4ZWN1dGVkXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbWF0Y2hlcyAtIHdoZXRoZXIgdGhlIHF1ZXJ5IG1hdGNoZXMgdGhlIHdpbmRvdyB3aWR0aC4gUmVhZG9ubHkuXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZnVsbCAtIElmIHRydWUsIHRoZSBxdWVyeSBhdHRyaWJ1dGUgaXMgYXNzdW1lZCB0byBiZSBhIGNvbXBsZXRlIG1lZGlhIHF1ZXJ5IHN0cmluZyByYXRoZXIgdGhhbiBhIHNpbmdsZSBtZWRpYSBmZWF0dXJlLlxyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcXVlcnkgLSBUaGUgQ1NTIG1lZGlhIHF1ZXJ5IHRvIGV2YWx1YXRlLlxyXG4gKiAqL1xyXG5jbGFzcyBNZWRpYVF1ZXJ5e1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsY2FsbGJhY2ssY29udGV4dD10aGlzKXtcclxuICAgIGxldCB7cXVlcnksZnVsbD1mYWxzZX0gPSBvcHRpb25zO1xyXG4gICAgdGhpcy5fbWF0Y2hlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5mdWxsID0gZnVsbDtcclxuICAgIHRoaXMuX21xID0gbnVsbDtcclxuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcclxuICAgIHRoaXMuX2JvdW5kID0gdGhpcy5fb25NYXRjaC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5xdWVyeT1xdWVyeTtcclxuICB9XHJcblxyXG4gIF9vbk1hdGNoKG1xKXtcclxuICAgIHRoaXMuX21hdGNoZXMgPSBtcS5tYXRjaGVzO1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrLmNhbGwodGhpcy5fY29udGV4dCxtcS5tYXRjaGVzKVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1hdGNoZXMoKXtcclxuICAgIHJldHVybiB0aGlzLl9tYXRjaGVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHF1ZXJ5KCl7XHJcbiAgICByZXR1cm4gdGhpcy5fcXVlcnk7XHJcbiAgfVxyXG5cclxuICBzZXQgcXVlcnkodmFsKXtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gdmFsO1xyXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5yZW1vdmUodGhpcy5fbXEsdGhpcy5fYm91bmQpO1xyXG4gICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyeTtcclxuICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmZ1bGwgJiYgcXVlcnlbMF0gIT09ICcoJykge1xyXG4gICAgICBxdWVyeSA9ICcoJyArIHF1ZXJ5ICsgJyknO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XHJcbiAgICB0aGlzLl9vbk1hdGNoKHRoaXMuX21xKTtcclxuICAgIHRoaXMuY29uc3RydWN0b3IuYWRkKHRoaXMuX21xLHRoaXMuX2JvdW5kKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGQobXEsYm91bmQpe1xyXG4gICAgaWYgKG1xKSB7XHJcbiAgICAgIG1xLmFkZExpc3RlbmVyKGJvdW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmUobXEsYm91bmQpIHtcclxuICAgIGlmIChtcSkge1xyXG4gICAgICBtcS5yZW1vdmVMaXN0ZW5lcihib3VuZCk7XHJcbiAgICB9XHJcbiAgICBtcSA9IG51bGw7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1lZGlhUXVlcnlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9tZWRpYS1xdWVyeS9zcmMvbWFpbi5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ESGllcmFyY2h5IHtcclxuICAvKipcclxuICAgKiBhdHRhY2hlcyBhIGxpc3RlbmVyIHRvIGEgaGllcmFyY2h5IHBvcHVwIHdoZW4gaXQncyBpbml0aWFsaXNlZCB0byBiZSBhYmxlIHRvIGNsb3NlIGl0IG9uIGNsaWNrLW91dHNpZGVcclxuICAgKiAqL1xyXG4gIHN0YXRpYyB1cGdyYWRlKCkge1xyXG4gICAgY29uc3QgaGllcmFyY2h5QnV0dG9uID0gTURIaWVyYXJjaHkuaGllcmFyY2h5VG9nZ2xlO1xyXG4gICAgaGllcmFyY2h5QnV0dG9uICYmIGhpZXJhcmNoeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1ESGllcmFyY2h5LmhpZXJhcmNoeVRvZ2dsZUNsaWNrSGFuZGxlcilcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaGllcmFyY2h5VG9nZ2xlKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZC10YXJnZXQtYnV0dG9uJyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGhpZXJhcmNoeUNocm9tZSgpIHtcclxuICAgIHJldHVybiBNREhpZXJhcmNoeS5oaWVyYXJjaHlUb2dnbGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZGQtZHJpbGxkb3duJylcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luY0hpZXJhcmNoeUNocm9tZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaGllcmFyY2h5Q2hyb21lID0gTURIaWVyYXJjaHkuaGllcmFyY2h5Q2hyb21lO1xyXG4gICAgICAgICAgaGllcmFyY2h5Q2hyb21lID8gcmVzb2x2ZShoaWVyYXJjaHlDaHJvbWUpIDogcmVzb2x2ZShNREhpZXJhcmNoeS5hc3luY0hpZXJhcmNoeUNocm9tZSgpKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzAwKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGhpZXJhcmNoeVRvZ2dsZUNsaWNrSGFuZGxlcigpIHtcclxuICAgIE1ESGllcmFyY2h5LmRldGFjaEhpZXJhcmNoeVRvZ2dsZUNsaWNrTGlzdGVuZXIoKTtcclxuICAgIE1ESGllcmFyY2h5LmRpc2FibGVQYWdlU2Nyb2xsKCk7XHJcbiAgICBsZXQgaGllcmFyY2h5Q2hyb21lID0gTURIaWVyYXJjaHkuaGllcmFyY2h5Q2hyb21lO1xyXG4gICAgaWYgKCFoaWVyYXJjaHlDaHJvbWUpIHtcclxuICAgICAgaGllcmFyY2h5Q2hyb21lID0gTURIaWVyYXJjaHkuYXN5bmNIaWVyYXJjaHlDaHJvbWUoKTtcclxuICAgICAgaGllcmFyY2h5Q2hyb21lLnRoZW4oTURIaWVyYXJjaHkuYXR0YWNoQ2hyb21lQ2xvc2VMaXN0ZW5lcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE1ESGllcmFyY2h5LmF0dGFjaENocm9tZUNsb3NlTGlzdGVuZXIoaGllcmFyY2h5Q2hyb21lKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRldGFjaEhpZXJhcmNoeVRvZ2dsZUNsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICBNREhpZXJhcmNoeS5oaWVyYXJjaHlUb2dnbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBNREhpZXJhcmNoeS5oaWVyYXJjaHlUb2dnbGVDbGlja0hhbmRsZXIpO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBhdHRhY2hDaHJvbWVDbG9zZUxpc3RlbmVyKGhpZXJhcmNoeUNocm9tZSkge1xyXG4gICAgaGllcmFyY2h5Q2hyb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTURIaWVyYXJjaHkub25DaHJvbWVDbG9zZSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyBvbkNocm9tZUNsb3NlKGV2ZW50KSB7XHJcbiAgICBjb25zdCBjYW5jZWwgICAgPSBNREhpZXJhcmNoeS5jYW5jZWxCdXR0b24sXHJcbiAgICAgIGFwcGx5ICAgICA9IE1ESGllcmFyY2h5LmFwcGx5QnV0dG9uLFxyXG4gICAgICBjaHJvbWUgICAgPSBNREhpZXJhcmNoeS5oaWVyYXJjaHlDaHJvbWUsXHJcbiAgICAgIGNsaWNrZWRFbCA9IGV2ZW50LnBhdGhbMF07XHJcblxyXG4gICAgaWYgKFtjaHJvbWUsIGNhbmNlbCwgYXBwbHldLmluZGV4T2YoY2xpY2tlZEVsKSA+IC0xKSB7XHJcbiAgICAgIGlmIChjbGlja2VkRWwgPT0gY2hyb21lKSB7XHJcbiAgICAgICAgY2FuY2VsLmNsaWNrKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgTURIaWVyYXJjaHkuZW5hYmxlUGFnZVNjcm9sbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGNhbmNlbEJ1dHRvbigpIHtcclxuICAgIHJldHVybiBNREhpZXJhcmNoeS5oaWVyYXJjaHlDaHJvbWUucXVlcnlTZWxlY3RvcignLmRkLWNhbmNlbCcpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGFwcGx5QnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIE1ESGllcmFyY2h5LmhpZXJhcmNoeUNocm9tZS5xdWVyeVNlbGVjdG9yKCcuZGQtYnV0dG9uLXNlbGVjdCcpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGlzYWJsZVBhZ2VTY3JvbGwoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2V0QXR0cmlidXRlKCdzdHlsZScsICdvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudCcpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGVuYWJsZVBhZ2VTY3JvbGwoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hpZXJhcmNoeS9oaWVyYXJjaHkuanMiLCJpbXBvcnQgU2lkZU5hdiBmcm9tIFwiLi4vc2lkZS1uYXYvc2lkZS1uYXZcIjtcclxuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSBcIm1lZGlhLXF1ZXJ5XCI7XHJcbmltcG9ydCBIZWFkZXJTY3JvbGxlciBmcm9tIFwiLi4vcjIvaGVhZGVyLXNjcm9sbGVyXCI7XHJcblxyXG5cclxuY2xhc3MgVHJhbnNmb3JtTWVudUF0IHtcclxuICAvKipcclxuICAgKiBUaGlzIGNsYXNzIHNldHMgdXAgYSBsaXN0ZW5lciB0byBkZXRlY3Qgd2hldGhlciB0aGUgdmlld3BvcnQgbWF0Y2hlcyB0aGUgbWF4LXdpZHRoIHNldCB1cCBpbiBgYnJlYWtwb2ludGAgYW5kIGJhc2VkIG9uIGV4aXN0ZW5jZSBvZiBhbiBpbnRlZ3JhdGlvbi1pZnJhbWVFbFxyXG4gICAqIHNldHMgdXAgaGVhZGUgc2Nyb2xsZXJzIG9yIGp1c3Qgc3dhcHMgdGhlIGhlYWRlciBpbnRvIGhvcml6b250YWwgb3Igc2lkZWJhciBuYXZpZ2F0aW9uIG1vZGVzXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFticmVha3BvaW50PTc2OF0gLSBtYXgtd2lkdGggb2YgZGV2aWNlIHZpZXdwb3J0IHRoYXQgaXMgY29uc2lkZXJlZCB0byBiZSBhIG1vYmlsZSBkZXZpY2UgYW5kIGhvc3RzIGEgbW9iaWxlIHNpZGViYXIuXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5pZnJhbWVDbGFzc05hbWVdIC0gcjJpbnRlZ3JhdGlvbiBpZnJhbWUgQ1NTIGNsYXNzXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmRlc2t0b3BIZWFkZXJDbGFzc05hbWVdIC0gQ1NTIGNsYXNzIG9mIGhlYWRlciB0byBkaXNwbGF5IGFib3ZlIGBicmVha3BvaW50YFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5tb2JpbGVIZWFkZXJDbGFzc05hbWVdIC0gQ1NTIGNsYXNzIG9mIGhlYWRlciB0byBkaXNwbGF5IGJlbG93IGBicmVha3BvaW50YFxyXG4gICAqIEByZXF1aXJlcyBNZWRpYVF1ZXJ5XHJcbiAgICogQHJlcXVpcmVzIFNpZGVOYXZcclxuICAgKiBAcmVxdWlyZXMgSGVhZGVyU2Nyb2xsZXJcclxuICAgKiAqL1xyXG4gIGNvbnN0cnVjdG9yKGJyZWFrcG9pbnQgPSA3NjgsIG9wdGlvbnM9e30pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaWZyYW1lQ2xhc3NOYW1lICAgICAgICA9ICcucjJkYXNoYm9hcmQnLFxyXG4gICAgICBkZXNrdG9wSGVhZGVyQ2xhc3NOYW1lID0gJy5yZXBvcnRhbC1iYXInLFxyXG4gICAgICBtb2JpbGVIZWFkZXJDbGFzc05hbWUgID0gJy5yZXBvcnRhbC1oZWFkZXInLFxyXG4gICAgfSA9IG9wdGlvbnM7XHJcblxyXG4gICAgdGhpcy5pZnJhbWVFbCAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlmcmFtZUNsYXNzTmFtZSk7XHJcbiAgICB0aGlzLmRlc2t0b3BIZWFkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGVza3RvcEhlYWRlckNsYXNzTmFtZSk7XHJcbiAgICB0aGlzLm1vYmlsZUhlYWRlckVsICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9iaWxlSGVhZGVyQ2xhc3NOYW1lKTtcclxuICAgIHRoaXMuY3VycmVudEhlYWRlciA9IG51bGw7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNJbnRlZ3JhdGlvbk1vZGUpey8vIGlmIGl0J3MgaW50ZWdyYXRpb24gcGFnZSAtIGRvIHNjcm9sbGluZ1xyXG4gICAgICB0aGlzLnN3YXBIZWFkZXJBbmRJZnJhbWUoKTtcclxuICAgICAgdGhpcy5oZWFkZXJTY3JvbGxlckluc3QgPSB0aGlzLm1ha2VIZWFkZXJSZXNwb25kVG9JZnJhbWVTY3JvbGwoKTtcclxuICAgIH1cclxuICAgIHRoaXMuaGFuZGxlQnJlYWtwb2ludE1hdGNoID0gdGhpcy5oYW5kbGVCcmVha3BvaW50TWF0Y2guYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2lkZW5hdiA9IG5ldyBTaWRlTmF2KCk7XHJcbiAgICB0aGlzLm1lZGlhUXVlcnkgPSBuZXcgTWVkaWFRdWVyeSh7cXVlcnk6IGBtYXgtd2lkdGg6JHticmVha3BvaW50fXB4YH0sIHRoaXMuaGFuZGxlQnJlYWtwb2ludE1hdGNoLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0ludGVncmF0aW9uTW9kZSgpe1xyXG4gICAgcmV0dXJuICEhdGhpcy5pZnJhbWVFbFxyXG4gIH1cclxuXHJcbiAgc3dhcEhlYWRlckFuZElmcmFtZSgpe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHktd3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ2ludGVncmF0aW9uLW1vZGUnKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJyZWFrcG9pbnRNYXRjaChiZWxvd0JyZWFrcG9pbnQpIHtcclxuICAgIGlmICghYmVsb3dCcmVha3BvaW50KSB7XHJcbiAgICAgIHRoaXMuc3dhcEhlYWRlcih0aGlzLmRlc2t0b3BIZWFkZXJFbCk7XHJcbiAgICAgIHRoaXMuc2lkZW5hdi5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zd2FwSGVhZGVyKHRoaXMubW9iaWxlSGVhZGVyRWwpO1xyXG4gICAgICB0aGlzLnNpZGVuYXYuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1ha2VIZWFkZXJSZXNwb25kVG9JZnJhbWVTY3JvbGwoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0lmcmFtZVVSTEVtcHR5KSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aGlzLm1ha2VIZWFkZXJTY3JvbGxhYmxlKHRoaXMuaWZyYW1lRWwuY29udGVudFdpbmRvdykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT57XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMubWFrZUhlYWRlclNjcm9sbGFibGUoZS50YXJnZXQuY29udGVudFdpbmRvdykpXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbWFrZUhlYWRlclNjcm9sbGFibGUoaWZyYW1lQ29udGVudFdpbmRvdykge1xyXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEhlYWRlciAmJiBuZXcgSGVhZGVyU2Nyb2xsZXIoaWZyYW1lQ29udGVudFdpbmRvdywgdGhpcy5jdXJyZW50SGVhZGVyKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0lmcmFtZVVSTEVtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaWZyYW1lRWwuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSAnYWJvdXQ6YmxhbmsnXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGB0aGlzLmN1cnJlbnRIZWFkZXJgIHRvIGEgbmV3IEhUTUxFbGVtZW50IGFuZCBkb2VzIHRoZSBzYW1lIGZvciBgSGVhZGVyU2Nyb2xsZXIuaGVhZGVyYFxyXG4gICAqICovXHJcbiAgc3dhcEhlYWRlcihuZXdIZWFkZXIpIHtcclxuICAgIHRoaXMuY3VycmVudEhlYWRlciA9IG5ld0hlYWRlcjtcclxuICAgIGlmICh0aGlzLmlmcmFtZUVsICYmIHRoaXMuaGVhZGVyU2Nyb2xsZXJJbnN0KSB7XHJcbiAgICAgIHRoaXMuaGVhZGVyU2Nyb2xsZXJJbnN0LnRoZW4oaGVhZGVyU2Nyb2xsZXIgPT4gaGVhZGVyU2Nyb2xsZXIuaGVhZGVyID0gbmV3SGVhZGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybU1lbnVBdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25hdmlnYXRpb24vbWVudS10cmFuc2Zvcm1lci5qcyIsImNsYXNzIEhlYWRlclNjcm9sbGVyIHtcclxuICAvKipcclxuICAgKiBgSGVhZGVyU2Nyb2xsZXJgIGlzIGEgY2xhc3MgdGhhdCBsaXN0ZW5zIHRvIGBpZnJhbWVFbGAncyBjb250ZW50V2luZG93IHNjcm9sbCBldmVudCBhbmQgc2Nyb2xscyB0aGUgYHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnRgIHdoZW4gdGhlIGlmcmFtZUVsIGlzIHNjcm9sbGVkXHJcbiAgICogQHBhcmFtIHtXaW5kb3d9IGNvbnRlbnRXaW5kb3cgLSBpZnJhbWVFbC5jb250ZW50V2luZG93XHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVwb3J0YWxIZWFkZXJIVE1MRWxlbWVudCAtIHJlcG9ydGFsSGVhZGVySFRNTEVsZW1lbnQgZWxlbWVudCB0aGF0IG5lZWRzIHRvIGJlIHNjcm9sbGVkXHJcbiAgICogKi9cclxuICBjb25zdHJ1Y3Rvcihjb250ZW50V2luZG93LCByZXBvcnRhbEhlYWRlckhUTUxFbGVtZW50KSB7XHJcbiAgICBjb250ZW50V2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9XHJcbiAgICAgIGNvbnRlbnRXaW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgIHx8IGNvbnRlbnRXaW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgIHx8IGNvbnRlbnRXaW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcbiAgICAgIHx8IGNvbnRlbnRXaW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblxyXG4gICAgdGhpcy5fbWV0YSAgPSB7XHJcbiAgICAgIHRvcE9mZnNldCAgICA6IG51bGwsXHJcbiAgICAgIHRpY2tpbmcgICAgICA6IGZhbHNlLFxyXG4gICAgICBvZmZzZXRIZWlnaHQgOiBudWxsLFxyXG4gICAgICBoZWFkZXIgICAgICAgOiBudWxsLFxyXG4gICAgICBsYXN0U2Nyb2xsWSAgOiAwLFxyXG4gICAgICBjb250ZW50V2luZG93OiBjb250ZW50V2luZG93XHJcbiAgICB9O1xyXG4gICAgdGhpcy5oZWFkZXIgPSByZXBvcnRhbEhlYWRlckhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5fc2Nyb2xsQ2FsbGJhY2sgPSB0aGlzLl9zY3JvbGxDYWxsYmFjay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5hdHRhY2hMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGdldCBoZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWV0YS5oZWFkZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgaGVhZGVyKGhlYWRlckVsZW1lbnQpIHtcclxuICAgIGxldCBvZmZzZXQ7XHJcbiAgICBpZiAodGhpcy5oZWFkZXIgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9tZXRhLnRvcE9mZnNldCA9IHRoaXMuaGVhZGVyVG9wT2Zmc2V0O1xyXG4gICAgICB0aGlzLl9yZXNldEhlYWRlcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWV0YS5oZWFkZXIgICAgICAgPSBoZWFkZXJFbGVtZW50O1xyXG4gICAgdGhpcy5fbWV0YS5vZmZzZXRIZWlnaHQgPSBoZWFkZXJFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgIHRoaXMuX2NvbmZpZ3VyZUhlYWRlcigpO1xyXG4gICAgdGhpcy5fc2V0SGVhZGVyT2Zmc2V0SW5JZnJhbWUoKTtcclxuICB9XHJcblxyXG4gIGdldCBoZWFkZXJUb3BPZmZzZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5oZWFkZXIuc3R5bGUudG9wO1xyXG4gIH1cclxuXHJcbiAgX3Jlc2V0SGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5oZWFkZXI7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsYWJsZS1oZWFkZXInKTtcclxuICAgIGhlYWRlci5zdHlsZS50b3AgPSBcIlwiO1xyXG4gICAgLy8gdGhpcy5kZXRhY2hMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIF9jb25maWd1cmVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlLWhlYWRlcicpO1xyXG4gICAgaGVhZGVyLnN0eWxlLnRvcCA9IHRoaXMuX21ldGEudG9wT2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgX3NldEhlYWRlck9mZnNldEluSWZyYW1lKCkge1xyXG4gICAgY29uc3QgaWZyYW1lQm9keSAgICAgICAgICAgPSB0aGlzLl9tZXRhLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgaWZyYW1lQm9keS5zdHlsZS5wYWRkaW5nVG9wID0gdGhpcy5fbWV0YS5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0VGljayhjYWxsYmFjaykge1xyXG4gICAgaWYgKCF0aGlzLl9tZXRhLnRpY2tpbmcpIHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcclxuICAgICAgdGhpcy5fbWV0YS50aWNraW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX21ldGEuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX3Njcm9sbEZpeGVkLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGRldGFjaExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX21ldGEuY29udGVudFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX3Njcm9sbEZpeGVkKTtcclxuICB9XHJcblxyXG4gIF9zY3JvbGxGaXhlZCgpIHtcclxuICAgIHRoaXMuX21ldGEubGFzdFNjcm9sbFkgPSB0aGlzLl9tZXRhLmNvbnRlbnRXaW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB0aGlzLnJlcXVlc3RUaWNrKHRoaXMuX3Njcm9sbENhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIF9zY3JvbGxDYWxsYmFjaygpIHtcclxuICAgIGxldCBvZmZzZXQgICAgICAgICAgICA9IHRoaXMuX21ldGEubGFzdFNjcm9sbFk7XHJcbiAgICB0aGlzLmhlYWRlci5zdHlsZS50b3AgPSAtb2Zmc2V0ICsgJ3B4JztcclxuICAgIHRoaXMuX21ldGEudGlja2luZyAgICA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyU2Nyb2xsZXJcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3IyL2hlYWRlci1zY3JvbGxlci5qcyIsIi8qXHJcblxyXG5cclxudmFyIGlucHV0SGVhZGVycyA9IFtbXCJcIiwgXCJcIl1dO1xyXG52YXIgaW5wdXRMaXN0cyA9IFtbW1wiUm9sbGluZyBhdmVyYWdlXCIsIFwiTnVtYmVyIG9mIGhpdHNcIl0sIFtcIkNhdGVnb3J5XCIsIFwiU3ltcHRvbVwiXV1dO1xyXG5cclxuKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkxpc3QobnVtYmVyT2ZMaXN0SW5QYWlyKSB7XHJcbiAgdmFyIGRpdkJ1dHRvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpZiAobnVtYmVyT2ZMaXN0SW5QYWlyICUgMiAhPT0gMCkge1xyXG4gICAgZGl2QnV0dG9uTGlzdC5jbGFzc05hbWUgPSAnYnV0dG9uTGlzdCByaWdodExpc3QnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkaXZCdXR0b25MaXN0LmNsYXNzTmFtZSA9ICdidXR0b25MaXN0IGxlZnRMaXN0JztcclxuICB9XHJcbiAgcmV0dXJuIGRpdkJ1dHRvbkxpc3Q7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyRm9yQnV0dG9uTGlzdChudW1iZXJPZkxpc3RJblBhaXIsIGlucHV0SGVhZGVycykge1xyXG4gIHZhciBkaXZCdXR0b25MaXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2QnV0dG9uTGlzdEhlYWRlci5jbGFzc05hbWUgPSAnYnRuTGlzdEhlYWRlcic7XHJcbiAgZGl2QnV0dG9uTGlzdEhlYWRlci5pbm5lckhUTUwgPSBpbnB1dEhlYWRlcnNbMF1bbnVtYmVyT2ZMaXN0SW5QYWlyXTtcclxuICByZXR1cm4gZGl2QnV0dG9uTGlzdEhlYWRlcjtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25WYWx1ZUluZGV4KG51bWJlck9mQnV0dG9uSW5MaXN0LCBwYWlyc09mTGlzdHNDb3VudCkge1xyXG4gIHJldHVybiAncicgKyAnXycgKyAobnVtYmVyT2ZCdXR0b25Jbkxpc3QgKyAxKSArICdfJyArIChwYWlyc09mTGlzdHNDb3VudCArIDEpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbklkSW5kZXgobnVtYmVyT2ZMaXN0SW5QYWlyLCBudW1iZXJPZkJ1dHRvbkluTGlzdCwgcGFpcnNPZkxpc3RzQ291bnQpIHtcclxuICByZXR1cm4gJ3InICsgJ18nICsgKG51bWJlck9mTGlzdEluUGFpciArIDEpICsgJ18nICsgKG51bWJlck9mQnV0dG9uSW5MaXN0ICsgMSkgKyAnXycgKyAocGFpcnNPZkxpc3RzQ291bnQgKyAxKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVEaXZGb3JCdXR0b25BbmRMYWJlbChkaXZCdXR0b25DbGFzcywgYnV0dG9uSWQpIHtcclxuICB2YXIgZGl2UmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXZSYWRpby5jbGFzc05hbWUgPSBkaXZCdXR0b25DbGFzcztcclxuICBkaXZSYWRpby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RpdicgKyBidXR0b25JZCk7XHJcbiAgcmV0dXJuIGRpdlJhZGlvO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkZvckxpc3QobnVtYmVyT2ZMaXN0SW5QYWlyLCBudW1iZXJPZkNhcmQsIGJ1dHRvblZhbHVlLCBidXR0b25JZCkge1xyXG4gIHZhciBpbnB1dFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBpbnB1dFJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG4gIGlmIChudW1iZXJPZkxpc3RJblBhaXIgJSAyICE9PSAwKSB7XHJcbiAgICBpbnB1dFJhZGlvLnNldEF0dHJpYnV0ZSgnbmFtZScsICdyaWdodCcgKyAobnVtYmVyT2ZDYXJkICsgMSkpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGlucHV0UmFkaW8uc2V0QXR0cmlidXRlKCduYW1lJywgJ2xlZnQnICsgKG51bWJlck9mQ2FyZCArIDEpKTtcclxuICB9XHJcbiAgaW5wdXRSYWRpby5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYnV0dG9uVmFsdWUpO1xyXG4gIGlucHV0UmFkaW8uc2V0QXR0cmlidXRlKCdpZCcsIGJ1dHRvbklkKTtcclxuICBpbnB1dFJhZGlvLmNsYXNzTmFtZSA9ICdyYWRpb2J1dHRvbkJsdWVJbnB1dCc7XHJcbiAgcmV0dXJuIGlucHV0UmFkaW87XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTGFiZWxGb3JCdXR0b25Jbkxpc3QobnVtYmVyT2ZMaXN0SW5QYWlyLCBudW1iZXJPZkJ1dHRvbkluTGlzdCwgYnV0dG9uSWRJbmRleCwgY3VzdG9tQnV0dG9uQXBwZWFyYW5jZSwgaW5wdXRMaXN0cykge1xyXG4gIHZhciBsYWJlbEZvclJhZGlvQmx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWxGb3JSYWRpb0JsdWUuY2xhc3NOYW1lID0gYnV0dG9uSWRJbmRleCArICdsYWJlbCc7XHJcbiAgbGFiZWxGb3JSYWRpb0JsdWUuc2V0QXR0cmlidXRlKCdmb3InLCBidXR0b25JZEluZGV4KTtcclxuXHJcbiAgdmFyIGlubmVySHRtbEZvckxhYmVsID0gY3VzdG9tQnV0dG9uQXBwZWFyYW5jZTtcclxuICBsYWJlbEZvclJhZGlvQmx1ZS5pbm5lckhUTUwgPSBpbm5lckh0bWxGb3JMYWJlbCArIGlucHV0TGlzdHNbMF1bbnVtYmVyT2ZMaXN0SW5QYWlyXVtudW1iZXJPZkJ1dHRvbkluTGlzdF07XHJcbiAgcmV0dXJuIGxhYmVsRm9yUmFkaW9CbHVlO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrQnV0dG9uc09uSW5pdGlhbFBvc2l0aW9ucyhudW1iZXJPZkxpc3RJblBhaXIsIG51bWJlck9mQnV0dG9uSW5MaXN0LCBjdXJyZW50QnV0dG9uLCBkaXZGb3JDdXJyZW50QnV0dG9uLCBzZXBhcmF0ZWRJbnB1dFRleHRJLCBwYWlyc09mTGlzdHNDb3VudCwgZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyLCBjaGVja2VkRGl2KSB7XHJcbiAgaWYgKG51bWJlck9mQnV0dG9uSW5MaXN0ID09IHNlcGFyYXRlZElucHV0VGV4dElbcGFpcnNPZkxpc3RzQ291bnRdLnNwbGl0KGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpcilbbnVtYmVyT2ZMaXN0SW5QYWlyXSkge1xyXG4gICAgY3VycmVudEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpO1xyXG4gICAgZGl2Rm9yQ3VycmVudEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjaGVja2VkRGl2LmJhY2tncm91bmRDb2xvcjtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gYXBwbHlTdHlsZUZvck9uZUJ1dHRvbihjdXJyZW50RGl2LCBjdXJyZW50TGFiZWwsIG91dGVyQ2lyY2xlU3Ryb2tlQ29sb3IsIG91dGVyQ2lyY2xlRmlsbENvbG9yLCBpbm5lckNpcmNsZUZpbGxDb2xvciwgdGV4dENvbG9yKSB7XHJcbiAgdmFyIG91dGVyQ2lyY2xlID0gY3VycmVudERpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXRlckJsdWVDaXJjbGUnKTtcclxuICB2YXIgaW5uZXJDaXJjbGUgPSBjdXJyZW50RGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lubmVyQmx1ZUNpcmNsZScpO1xyXG4gIG91dGVyQ2lyY2xlWzBdLnN0eWxlLnN0cm9rZSA9IG91dGVyQ2lyY2xlU3Ryb2tlQ29sb3I7XHJcbiAgb3V0ZXJDaXJjbGVbMF0uc3R5bGUuZmlsbCA9IG91dGVyQ2lyY2xlRmlsbENvbG9yO1xyXG4gIGlubmVyQ2lyY2xlWzBdLnN0eWxlLmZpbGwgPSBpbm5lckNpcmNsZUZpbGxDb2xvcjtcclxuXHJcbiAgY3VycmVudExhYmVsLnN0eWxlLmNvbG9yID0gdGV4dENvbG9yO1xyXG59XHJcbmZ1bmN0aW9uIGFwcGx5U3R5bGVzRm9yQWxsQnV0dG9uc0luTGlzdHMoc2VwYXJhdGVkSW5wdXRUZXh0SSwgbnVtYmVyT2ZMaXN0SW5QYWlyLCBjdXJyZW50RGl2LCBjdXJyZW50TGFiZWwsIHBhaXJzT2ZMaXN0c0NvdW50LCBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIsIHVuY2hlY2tlZERpdiwgY2hlY2tlZERpdiwgaikge1xyXG4gIGlmIChqID09IHNlcGFyYXRlZElucHV0VGV4dElbcGFpcnNPZkxpc3RzQ291bnRdLnNwbGl0KGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpcilbbnVtYmVyT2ZMaXN0SW5QYWlyXSkge1xyXG4gICAgYXBwbHlTdHlsZUZvck9uZUJ1dHRvbihjdXJyZW50RGl2LCBjdXJyZW50TGFiZWwsIGNoZWNrZWREaXYub3V0ZXJDaXJjbGVDb2xvciwgY2hlY2tlZERpdi5vdXRlckNpcmNsZUZpbGwsIGNoZWNrZWREaXYuaW5uZXJDaXJjbGVDb2xvciwgY2hlY2tlZERpdi50ZXh0Q29sb3IpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGFwcGx5U3R5bGVGb3JPbmVCdXR0b24oY3VycmVudERpdiwgY3VycmVudExhYmVsLCB1bmNoZWNrZWREaXYub3V0ZXJDaXJjbGVDb2xvciwgdW5jaGVja2VkRGl2Lm91dGVyQ2lyY2xlRmlsbCwgdW5jaGVja2VkRGl2LmlubmVyQ2lyY2xlQ29sb3IsIHVuY2hlY2tlZERpdi50ZXh0Q29sb3IpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIsIGJ1dHRvblRvQ2xpY2tDbGFzcywgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycywgYnV0dG9uLCB1bmNoZWNrZWREaXYsIGNoZWNrZWREaXYsIGxpc3RJbnB1dCkge1xyXG4gIHZhciBjdXJyZW50QnV0dG9uSWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gIHZhciBkaXZUb0NoYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYnICsgY3VycmVudEJ1dHRvbklkKTtcclxuICB2YXIgY3VycmVudExpc3QgPSBkaXZUb0NoYW5nZS5wYXJlbnROb2RlO1xyXG4gIHZhciBkaXZzSW5DdXJyZW50TGlzdCA9IGN1cnJlbnRMaXN0LmNoaWxkTm9kZXM7XHJcblxyXG4gIHZhciBkaXZDaG9zZW5QcmV2aW91c2x5SWQgPSBmaW5kV2hpY2hCdXR0b25XYXNDaGVja2VkQmVmb3JlQ2xpY2soZGl2c0luQ3VycmVudExpc3QpO1xyXG4gIHZhciBwcmV2aW91c0RpdlRvQ2hhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2Q2hvc2VuUHJldmlvdXNseUlkKTtcclxuXHJcbiAgaWYgKGRpdkNob3NlblByZXZpb3VzbHlJZC5zdWJzdHJpbmcoMykgIT09IGN1cnJlbnRCdXR0b25JZCkge1xyXG4gICAgY2hhbmdlRGl2U3R5bGVPbkNsaWNrKHByZXZpb3VzRGl2VG9DaGFuZ2UsIGRpdlRvQ2hhbmdlLCB1bmNoZWNrZWREaXYuYmFja2dyb3VuZENvbG9yLCBjaGVja2VkRGl2LmJhY2tncm91bmRDb2xvcik7XHJcblxyXG4gICAgdmFyIG91dGVyQ2lyY2xlID0gZGl2VG9DaGFuZ2UuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb3V0ZXJCbHVlQ2lyY2xlJyk7XHJcbiAgICB2YXIgaW5uZXJDaXJjbGUgPSBkaXZUb0NoYW5nZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbm5lckJsdWVDaXJjbGUnKTtcclxuICAgIHZhciBwcmV2aW91c091dGVyQ2lyY2xlID0gcHJldmlvdXNEaXZUb0NoYW5nZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvdXRlckJsdWVDaXJjbGUnKTtcclxuICAgIHZhciBwcmV2aW91c0lubmVyQ2lyY2xlID0gcHJldmlvdXNEaXZUb0NoYW5nZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbm5lckJsdWVDaXJjbGUnKTtcclxuXHJcbiAgICBjaGFuZ2VCdXR0b25TdHlsZU9uQ2xpY2sob3V0ZXJDaXJjbGUsIGlubmVyQ2lyY2xlLCBwcmV2aW91c091dGVyQ2lyY2xlLCBwcmV2aW91c0lubmVyQ2lyY2xlLCBjaGVja2VkRGl2LCB1bmNoZWNrZWREaXYpO1xyXG5cclxuICAgIHZhciBwcmV2aW91c0J1dHRvbklkID0gZGl2Q2hvc2VuUHJldmlvdXNseUlkLnN1YnN0cmluZygzKTtcclxuICAgIHZhciBjdXJyZW50TGFiZWxUb0NoYW5nZSA9IGRpdlRvQ2hhbmdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY3VycmVudEJ1dHRvbklkICsgJ2xhYmVsJyk7XHJcbiAgICB2YXIgcHJldmlvdXNMYWJlbFRvQ2hhbmdlID0gcHJldmlvdXNEaXZUb0NoYW5nZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHByZXZpb3VzQnV0dG9uSWQgKyAnbGFiZWwnKTtcclxuICAgIGNoYW5nZUxhYmVsU3R5bGVPbkNsaWNrKGN1cnJlbnRMYWJlbFRvQ2hhbmdlWzBdLCBwcmV2aW91c0xhYmVsVG9DaGFuZ2VbMF0sIHVuY2hlY2tlZERpdi5iYWNrZ3JvdW5kQ29sb3IsIHVuY2hlY2tlZERpdi50ZXh0Q29sb3IpO1xyXG5cclxuICAgIHZhciBzZXBhcmF0ZUJ1dHRvbkluZGV4Rm9yUG9zaXRpb24gPSBjdXJyZW50QnV0dG9uSWQuc3BsaXQoJ18nKTtcclxuICAgIHZhciBjdXJyZW50QnV0dG9uUG9zaXRpb24gPSBbc2VwYXJhdGVCdXR0b25JbmRleEZvclBvc2l0aW9uWzFdLCBzZXBhcmF0ZUJ1dHRvbkluZGV4Rm9yUG9zaXRpb25bMl0sIHNlcGFyYXRlQnV0dG9uSW5kZXhGb3JQb3NpdGlvblszXV07XHJcblxyXG4gICAgdmFyIGlucHV0VGV4dCA9IGxpc3RJbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICB2YXIgc2VwYXJhdGVkSW5wdXRUZXh0ID0gaW5wdXRUZXh0LnNwbGl0KGRlbGltaXRlckZvclN0YXRlc09mRGlmZmVyZW50UGFpcnMpO1xyXG5cclxuICAgIHZhciBuZXdJbnB1dFRleHQgPSBjaGFuZ2VJbnB1dFRleHRPbkNsaWNrKHNlcGFyYXRlZElucHV0VGV4dCwgY3VycmVudEJ1dHRvblBvc2l0aW9uLCBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIsIGRlbGltaXRlckZvclN0YXRlc09mRGlmZmVyZW50UGFpcnMpO1xyXG5cclxuICAgIGxpc3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3SW5wdXRUZXh0KTtcclxuICAgIHZhciBidXR0b25Ub0NsaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShidXR0b25Ub0NsaWNrQ2xhc3MpWzBdO1xyXG4gICAgYnV0dG9uVG9DbGljay5jbGljaygpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBmaW5kV2hpY2hCdXR0b25XYXNDaGVja2VkQmVmb3JlQ2xpY2soZGl2c0luQ3VycmVudExpc3QpIHtcclxuICB2YXIgcmVzdWx0O1xyXG4gIGZvciAodmFyIGkgPSBkaXZzSW5DdXJyZW50TGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgdmFyIGN1cnJlbnREaXZJZCA9IGRpdnNJbkN1cnJlbnRMaXN0W2ldLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycmVudERpdklkLnN1YnN0cmluZygzKSkuY2hlY2tlZCkge1xyXG4gICAgICByZXN1bHQgPSBjdXJyZW50RGl2SWQ7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZURpdlN0eWxlT25DbGljayhwcmV2aW91c0RpdlRvQ2hhbmdlLCBkaXZUb0NoYW5nZSwgdW5jaGVja2VkRGl2QmFja2dyb3VuZENvbG9yLCBjaGVja2VkRGl2QmFja2dyb3VuZENvbG9yKSB7XHJcbiAgcHJldmlvdXNEaXZUb0NoYW5nZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB1bmNoZWNrZWREaXZCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgZGl2VG9DaGFuZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2hlY2tlZERpdkJhY2tncm91bmRDb2xvcjtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VCdXR0b25TdHlsZU9uQ2xpY2sob3V0ZXJDaXJjbGUsIGlubmVyQ2lyY2xlLCBwcmV2aW91c091dGVyQ2lyY2xlLCBwcmV2aW91c0lubmVyQ2lyY2xlLCBjaGVja2VkRGl2LCB1bmNoZWNrZWREaXYpIHtcclxuICBvdXRlckNpcmNsZVswXS5zdHlsZS5zdHJva2UgPSBjaGVja2VkRGl2Lm91dGVyQ2lyY2xlQ29sb3I7XHJcbiAgb3V0ZXJDaXJjbGVbMF0uc3R5bGUuZmlsbCA9IGNoZWNrZWREaXYub3V0ZXJDaXJjbGVGaWxsO1xyXG4gIGlubmVyQ2lyY2xlWzBdLnN0eWxlLmZpbGwgPSBjaGVja2VkRGl2LmlubmVyQ2lyY2xlQ29sb3I7XHJcbiAgcHJldmlvdXNPdXRlckNpcmNsZVswXS5zdHlsZS5zdHJva2UgPSB1bmNoZWNrZWREaXYub3V0ZXJDaXJjbGVDb2xvcjtcclxuICBwcmV2aW91c091dGVyQ2lyY2xlWzBdLnN0eWxlLmZpbGwgPSB1bmNoZWNrZWREaXYub3V0ZXJDaXJjbGVGaWxsO1xyXG4gIHByZXZpb3VzSW5uZXJDaXJjbGVbMF0uc3R5bGUuZmlsbCA9IHVuY2hlY2tlZERpdi5pbm5lckNpcmNsZUNvbG9yO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZUxhYmVsU3R5bGVPbkNsaWNrKGN1cnJlbnRMYWJlbFRvQ2hhbmdlLCBwcmV2aW91c0xhYmVsVG9DaGFuZ2UsIHVuY2hlY2tlZERpdkJhY2tncm91bmRDb2xvciwgdGV4dE9uVW5jaGVja2VkQnV0dG9uc0NvbG9yKSB7XHJcbiAgY3VycmVudExhYmVsVG9DaGFuZ2Uuc3R5bGUuY29sb3IgPSB1bmNoZWNrZWREaXZCYWNrZ3JvdW5kQ29sb3I7XHJcbiAgcHJldmlvdXNMYWJlbFRvQ2hhbmdlLnN0eWxlLmNvbG9yID0gdGV4dE9uVW5jaGVja2VkQnV0dG9uc0NvbG9yO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZUlucHV0VGV4dE9uQ2xpY2soc2VwYXJhdGVkSW5wdXRUZXh0LCBjdXJyZW50QnV0dG9uUG9zaXRpb24sIGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpciwgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycykge1xyXG4gIHZhciByZXN1bHQgPSAnJztcclxuICBmb3IgKHZhciBqID0gMDsgaiA8IHNlcGFyYXRlZElucHV0VGV4dC5sZW5ndGg7IGorKykge1xyXG4gICAgdmFyIHNlcGFyYXRlZElucHV0Rm9yRWFjaFBhaXIgPSBzZXBhcmF0ZWRJbnB1dFRleHRbal0uc3BsaXQoZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyKTtcclxuICAgIGlmIChqKzEgPT0gY3VycmVudEJ1dHRvblBvc2l0aW9uWzJdKSB7XHJcbiAgICAgIGlmIChjdXJyZW50QnV0dG9uUG9zaXRpb25bMF0gPT0gJzEnKSB7XHJcbiAgICAgICAgaWYgKHNlcGFyYXRlZElucHV0Rm9yRWFjaFBhaXJbMF0gPT0gJzAnKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gJzEnICsgZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyICsgc2VwYXJhdGVkSW5wdXRGb3JFYWNoUGFpclsxXSArIGRlbGltaXRlckZvclN0YXRlc09mRGlmZmVyZW50UGFpcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNlcGFyYXRlZElucHV0Rm9yRWFjaFBhaXJbMF0gPT0gJzEnKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gJzAnICsgZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyICsgc2VwYXJhdGVkSW5wdXRGb3JFYWNoUGFpclsxXSArIGRlbGltaXRlckZvclN0YXRlc09mRGlmZmVyZW50UGFpcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGN1cnJlbnRCdXR0b25Qb3NpdGlvblswXSA9PSAnMicpIHtcclxuICAgICAgICBpZiAoc2VwYXJhdGVkSW5wdXRGb3JFYWNoUGFpclsxXSA9PSAnMCcpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0ZWRJbnB1dEZvckVhY2hQYWlyWzBdICsgZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyICsgJzEnICsgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VwYXJhdGVkSW5wdXRGb3JFYWNoUGFpclsxXSA9PSAnMScpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0ZWRJbnB1dEZvckVhY2hQYWlyWzBdICsgZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyICsgJzAnICsgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXN1bHQgKz0gc2VwYXJhdGVkSW5wdXRUZXh0W2pdICsgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gU2V0Q2hhcnRTZXR0aW5nc0NoZWNrZXJzKGlucHV0SGVhZGVycywgaW5wdXRMaXN0cykge1xyXG4gIC8qIENvbmZpZyAqL1xyXG4gIHZhciBjaGVja2VkRGl2ID0geyBiYWNrZ3JvdW5kQ29sb3I6ICcjNTc4N2Y0JywgdGV4dENvbG9yOiAnI2ZmZmZmZicsIG91dGVyQ2lyY2xlQ29sb3I6ICcjZmZmZmZmJywgb3V0ZXJDaXJjbGVGaWxsOiAndHJhbnNwYXJlbnQnLCBpbm5lckNpcmNsZUNvbG9yOiAnI2ZmZmZmZicgfTtcclxuICB2YXIgdW5jaGVja2VkRGl2ID0geyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJywgdGV4dENvbG9yOiAnIzAwMDAwMCcsIG91dGVyQ2lyY2xlQ29sb3I6ICcjNTc4N2Y0Jywgb3V0ZXJDaXJjbGVGaWxsOiAnI2ZmZmZmZicsIGlubmVyQ2lyY2xlQ29sb3I6ICcjZmZmZmZmJ307XHJcblxyXG4gIHZhciBjdXN0b21CdXR0b25BcHBlYXJhbmNlID0gJzxzdmcgY2xhc3M9XCJyYWRpb0J0blJlcGxhY2VtZW50XCIgY3g9XCI1MCVcIiBjeT1cIjcwJVwiPjxjaXJjbGUgcj1cIjVcIiBjbGFzcz1cIm91dGVyQmx1ZUNpcmNsZVwiLz4gPGNpcmNsZSByPVwiMlwiIGNsYXNzPVwiaW5uZXJCbHVlQ2lyY2xlXCIvPjwvc3ZnPic7XHJcblxyXG4gIHZhciBjb250YWluZXJDbGFzc05hbWUgPSAnY2FyZC1wYXJhbWV0ZXJzJztcclxuICB2YXIgYnV0dG9uVG9DbGlja0NsYXNzID0gJ3JlcG9ydGFsLWJ1dHRvbic7XHJcbiAgdmFyIGRpdkJ1dHRvbkNsYXNzID0gJ3JhZGlvYnV0dG9uLWJsdWUnO1xyXG4gIHZhciBkZWxpbWl0ZXJGb3JTdGF0ZXNPZkRpZmZlcmVudFBhaXJzID0gJyAnO1xyXG4gIHZhciBkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIgPSAnXyc7XHJcbiAgdmFyIGxpc3RJbnB1dENsYXNzID0gJ2lucHV0Rm9yU3RhdGVPZlN3aXRjaGVycyc7XHJcbiAgLyogRW5kQ29uZmlnKi9cclxuXHJcbiAgdmFyIGxpc3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGlzdElucHV0Q2xhc3MpWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xyXG4gIHZhciBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjb250YWluZXJDbGFzc05hbWUpO1xyXG4gIHZhciBpbnB1dFRleHRJID0gbGlzdElucHV0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICB2YXIgc2VwYXJhdGVkSW5wdXRUZXh0SSA9IGlucHV0VGV4dEkuc3BsaXQoZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycyk7XHJcbiAgdmFyIHBhaXJzT2ZMaXN0c0NvdW50ID0gLTE7XHJcblxyXG5cclxuICBmb3IgKHZhciBsID0gMDsgbCA8IHNlcGFyYXRlZElucHV0VGV4dEkubGVuZ3RoOyBsKyspIHtcclxuICAgIGlmIChtYWluQ29udGFpbmVyW2xdLmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcclxuICAgICAgcGFpcnNPZkxpc3RzQ291bnQrKztcclxuICAgICAgdmFyIG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIG91dGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdvdXRlckNvbnRhaW5lcic7XHJcbiAgICAgIG1haW5Db250YWluZXJbbF0uYXBwZW5kQ2hpbGQob3V0ZXJDb250YWluZXIpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dEhlYWRlcnNbMF0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvKiBjcmVhdGUgY29udGFpbmVycyBmb3IgZWFjaCBzd2l0Y2hlciAqL1xyXG4gICAgICAgIHZhciBkaXZCdXR0b25MaXN0ID0gY3JlYXRlQnV0dG9uTGlzdChpKTtcclxuICAgICAgICB2YXIgZGl2QnV0dG9uTGlzdEhlYWRlciA9IGNyZWF0ZUhlYWRlckZvckJ1dHRvbkxpc3QoaSwgaW5wdXRIZWFkZXJzKTtcclxuXHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2QnV0dG9uTGlzdCk7XHJcbiAgICAgICAgZGl2QnV0dG9uTGlzdC5hcHBlbmRDaGlsZChkaXZCdXR0b25MaXN0SGVhZGVyKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpbnB1dExpc3RzWzBdW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAvKiBjcmVhdGUgZWxlbWVudHMgaW5zaWRlIGVhY2ggY29udGFpbmVyIGZvciBlYWNoIG9wdGlvbiAqL1xyXG4gICAgICAgICAgdmFyIGJ1dHRvblZhbHVlSW5kZXggPSBjcmVhdGVCdXR0b25WYWx1ZUluZGV4KGosIHBhaXJzT2ZMaXN0c0NvdW50KTtcclxuICAgICAgICAgIHZhciBidXR0b25JZEluZGV4ID0gY3JlYXRlQnV0dG9uSWRJbmRleChpLCBqLCBwYWlyc09mTGlzdHNDb3VudCk7XHJcblxyXG4gICAgICAgICAgdmFyIGRpdlJhZGlvID0gY3JlYXRlRGl2Rm9yQnV0dG9uQW5kTGFiZWwoZGl2QnV0dG9uQ2xhc3MsIGJ1dHRvbklkSW5kZXgpO1xyXG4gICAgICAgICAgdmFyIGlucHV0UmFkaW8gPSBjcmVhdGVCdXR0b25Gb3JMaXN0KGksIGwsIGJ1dHRvblZhbHVlSW5kZXgsIGJ1dHRvbklkSW5kZXgpO1xyXG4gICAgICAgICAgdmFyIGxhYmVsRm9yUmFkaW89IGNyZWF0ZUxhYmVsRm9yQnV0dG9uSW5MaXN0KGksIGosIGJ1dHRvbklkSW5kZXgsIGN1c3RvbUJ1dHRvbkFwcGVhcmFuY2UsIGlucHV0TGlzdHMpO1xyXG5cclxuICAgICAgICAgIGlucHV0VGV4dEkgPSBsaXN0SW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICAgICAgc2VwYXJhdGVkSW5wdXRUZXh0SSA9IGlucHV0VGV4dEkuc3BsaXQoZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycyk7XHJcblxyXG4gICAgICAgICAgY2hlY2tCdXR0b25zT25Jbml0aWFsUG9zaXRpb25zKGksIGosIGlucHV0UmFkaW8sIGRpdlJhZGlvLCBzZXBhcmF0ZWRJbnB1dFRleHRJLCBwYWlyc09mTGlzdHNDb3VudCwgZGVsaW1pdGVyRm9yU3RhdGVzSW5PbmVQYWlyLCBjaGVja2VkRGl2KTtcclxuXHJcbiAgICAgICAgICBkaXZCdXR0b25MaXN0LmFwcGVuZENoaWxkKGRpdlJhZGlvKTtcclxuICAgICAgICAgIGRpdlJhZGlvLmFwcGVuZENoaWxkKGlucHV0UmFkaW8pO1xyXG4gICAgICAgICAgZGl2UmFkaW8uYXBwZW5kQ2hpbGQobGFiZWxGb3JSYWRpbyk7XHJcblxyXG4gICAgICAgICAgYXBwbHlTdHlsZXNGb3JBbGxCdXR0b25zSW5MaXN0cyhzZXBhcmF0ZWRJbnB1dFRleHRJLCBpLCBkaXZSYWRpbywgbGFiZWxGb3JSYWRpbywgcGFpcnNPZkxpc3RzQ291bnQsIGRlbGltaXRlckZvclN0YXRlc0luT25lUGFpciwgdW5jaGVja2VkRGl2LCBjaGVja2VkRGl2LCBqKTtcclxuXHJcbiAgICAgICAgICBpbnB1dFJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtoYW5kbGVCdXR0b25DbGljayhkZWxpbWl0ZXJGb3JTdGF0ZXNJbk9uZVBhaXIsIGJ1dHRvblRvQ2xpY2tDbGFzcywgZGVsaW1pdGVyRm9yU3RhdGVzT2ZEaWZmZXJlbnRQYWlycywgdGhpcywgdW5jaGVja2VkRGl2LCBjaGVja2VkRGl2LCBsaXN0SW5wdXQpO30sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGNyZWF0ZUJ1dHRvbkxpc3QsIGNyZWF0ZUhlYWRlckZvckJ1dHRvbkxpc3QsIGNyZWF0ZUJ1dHRvblZhbHVlSW5kZXgsIGNyZWF0ZUJ1dHRvbklkSW5kZXgsIGNyZWF0ZURpdkZvckJ1dHRvbkFuZExhYmVsLCBjcmVhdGVCdXR0b25Gb3JMaXN0LCBjcmVhdGVMYWJlbEZvckJ1dHRvbkluTGlzdCxcclxuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9uc09uSW5pdGlhbFBvc2l0aW9ucywgYXBwbHlTdHlsZUZvck9uZUJ1dHRvbiwgYXBwbHlTdHlsZXNGb3JBbGxCdXR0b25zSW5MaXN0cywgaGFuZGxlQnV0dG9uQ2xpY2ssIGZpbmRXaGljaEJ1dHRvbldhc0NoZWNrZWRCZWZvcmVDbGljaywgY2hhbmdlQnV0dG9uU3R5bGVPbkNsaWNrLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlRGl2U3R5bGVPbkNsaWNrLCBjaGFuZ2VMYWJlbFN0eWxlT25DbGljaywgY2hhbmdlSW5wdXRUZXh0T25DbGljaywgU2V0Q2hhcnRTZXR0aW5nc0NoZWNrZXJzIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXR0aW5ncyBzd2l0Y2hlcnMvc2V0dGluZ3Mtc3dpdGNoZXJzLmpzIiwiLyoqXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcblxyXG5jbGFzcyBEZXRhYmluYXRvciB7XHJcbiAgLyoqXHJcbiAgICogSGVscHMgdG8gbWFpbnRhaW4gYSBoZWFsdGh5IHRhYnVsYXRpb24gd2l0aGluIHRoZSBzaWRlYmFyIHdoZW4gaXQncyBvcGVuLCByYXRoZXIgdGhhbiB0YWJ1bGF0ZSB0aGUgd2hvbGUgcGFnZVxyXG4gICAqIFVzYWdlOlxyXG4gICAqXHJcbiAgICogYGBgIGphdmFzY3JpcHRcclxuICAgKiBjb25zdCBkZXRhYmluYXRvciA9IG5ldyBEZXRhYmluYXRvcihlbGVtZW50KTtcclxuICAgKiBkZXRhYmluYXRvci5pbmVydCA9IHRydWU7ICAvLyBTZXRzIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gb2YgZWxlbWVudCB0byB0YWJpbmRleD0tMVxyXG4gICAqIGRldGFiaW5hdG9yLmluZXJ0ID0gZmFsc2U7IC8vIFJlc3RvcmVzIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gb2YgZWxlbWVudFxyXG4gICAqIGBgYFxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50LiBuZXcgRGV0YWJpbmF0b3IgbmVlZHMgYW4gZWxlbWVudCByZWZlcmVuY2UnKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2luZXJ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9ICdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgaWZyYW1lLCBvYmplY3QsIGVtYmVkLCBbdGFiaW5kZXhdLCBbY29udGVudGVkaXRhYmxlXSc7XHJcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5lcnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5lcnQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaW5lcnQoaXNJbmVydCkge1xyXG4gICAgaWYgKHRoaXMuX2luZXJ0ID09PSBpc0luZXJ0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9pbmVydCA9IGlzSW5lcnQ7XHJcblxyXG4gICAgdGhpcy5fZm9jdXNhYmxlRWxlbWVudHMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKGlzSW5lcnQpIHtcclxuICAgICAgICAvLyBJZiB0aGUgY2hpbGQgaGFzIGFuIGV4cGxpY3QgdGFiaW5kZXggc2F2ZSBpdFxyXG4gICAgICAgIGlmIChjaGlsZC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcclxuICAgICAgICAgIGNoaWxkLl9fc2F2ZWRUYWJpbmRleCA9IGNoaWxkLnRhYkluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXQgQUxMIGZvY3VzYWJsZSBjaGlsZHJlbiB0byB0YWJpbmRleCAtMVxyXG4gICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIGNoaWxkIGhhcyBhIHNhdmVkIHRhYmluZGV4LCByZXN0b3JlIGl0XHJcbiAgICAgICAgLy8gQmVjYXVzZSB0aGUgdmFsdWUgY291bGQgYmUgMCwgZXhwbGljaXRseSBjaGVjayB0aGF0IGl0J3Mgbm90IGZhbHNlXHJcbiAgICAgICAgaWYgKGNoaWxkLl9fc2F2ZWRUYWJpbmRleCA9PT0gMCB8fCBjaGlsZC5fX3NhdmVkVGFiaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgY2hpbGQuX19zYXZlZFRhYmluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gUmVtb3ZlIHRhYmluZGV4IGZyb20gQU5ZIFJFTUFJTklORyBjaGlsZHJlblxyXG4gICAgICAgICAgY2hpbGQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IERldGFiaW5hdG9yO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2lkZS1uYXYvZGV0YWJpbmF0b3IuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgRWthdGVyaW5hVCBvbiAyMC4xMi4yMDE3LlxuICovXG4vKiBzY3JpcHRzIGZvciByZXBvcnQgU29NQzogSXNzdWUgVHJhY2tpbmcgUmVwb3J0XHQoMTYyNzQzKSBvbiBFdXJvIHNpdGUsIFN5bXB0b20gT3ZlcnZpZXcgcGFnZSAqL1xuXG4vLyBUaGUgYmVsb3cgc2V0IG9mIGZ1bmN0aW9ucyBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgdG8gcHJvamVjdCBjYXJkczpcbi8vIC0gaGlkZXMgZW1wdHkgcHJvamVjdCBjYXJkc1xuLy8gLSBhcHBsaWVzIEhpZXJhcmNoeSBzdHlsZSB0byB0YWJsZXMgaW5zaWRlIGNvcmRzXG4vLyAtIGFkZHMgZHJpbGwgZG93biBmdW5jdGlvbmFsaXR5XG4vLyAtIGFkZCBNYW5hZ2VtbnQgTm90ZXMgZnVuY3Rpb25hbGl0eVxuXG4vL3VwZ3JhZGVIaWVyYXJjaHlUYWJsZSAtIGNyZWF0ZXMgZmFuY3kgaGllcmFyY2h5IHN0eWxlXG4vL2Jhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9Db25maXJtaXRBU0Evci10YWJsZS1oaWVyYXJjaHkuZ2l0XG5mdW5jdGlvbiB1cGdyYWRlSGllcmFyY2h5VGFibGUodGFibGUsIGhlYWRlcnMpe1xuICB0cnl7XG4gICAgdmFyIHVwZ3JhZGVkVGFibGUgPSBuZXcgUmVwb3J0YWwuVEFoaWVyYXJjaHkoXG4gICAgICB7XG4gICAgICAgIHNvdXJjZTogdGFibGUsXG4gICAgICAgIGhpZXJhcmNoeTogY2F0ZWdvcnlTeW1wdG9tSGllcmFyY2h5LCAvLyBvYmplY3QgY2F0U3ltcFRhYmxlSGVhZGVycyBpcyBwb3B1bGF0ZWQgYnkgc2VydmVyLXNpZGUgcmVwb3J0YWwgc2NyaXB0aW5nIGFkZEpTSGllcmFyY2h5T2JqZWN0VG9UaGVQYWdlXG4gICAgICAgIHJvd2hlYWRlcnM6IGhlYWRlcnMsIC8vIGN1cnJlbnQgdGFibGUncyBoZWFkZXJzIChvYmplY3QgZ2VuZXJhdGVkIHdpdGggcmVwb3J0YWwgc2NyaXB0aW5nKVxuICAgICAgICBzZWFyY2g6e2VuYWJsZWQ6IHRydWV9LFxuICAgICAgICBjbGVhckxpbmtzOmZhbHNlLFxuICAgICAgICBmbG9hdGluZ0hlYWRlcjp7ZW5hYmxlZDp0cnVlfSwgLy8gYmVoYXZlcyBhZ2dyZXNzaXZlIHdoZW4gbWFueSByb3dzLFxuICAgICAgICBzb3J0aW5nOntlbmFibGVkOnRydWV9XG4gICAgICB9XG4gICAgKVxuICB9XG4gIGNhdGNoKGUpe31cblxuICByZXR1cm4gdXBncmFkZWRUYWJsZTtcbn1cblxuLy8gYXBwbHkgcjIgaGllcmFyY2h5IHN0eWxlIHRvIHRhYmxlcyBpbnNpZGUgY2FyZHMgaWYgdGhlcmUgYXJlIG5vdCBlbXB0eSBjYXJkc1xuZnVuY3Rpb24gYXBwbHlIaWVyYXJjaHlTdHlsZVRvVGFibGUoKXtcblxuICBpZihjYXRTeW1wVGFibGVIZWFkZXJzKSAvLyB2YXJpYWJsZSBjYXRTeW1wVGFibGVIZWFkZXJzIGlzIHBvcHVsYXRlZCBieSBzZXJ2ZXItc2lkZSByZXBvcnRhbCBzY3JpcHRpbmcgKGFkZEpTSGllcmFyY2h5T2JqZWN0VG9UaGVQYWdlKVxuICB7XG4gICAgdmFyIHRhYmxlV2l0aEhpZXJhcmNoeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlLnJlcG9ydGFsLWhpZXJhcmNoeS10YWJsZScpO1xuICAgIGZvcih2YXIgaT0wO2k8Y2F0U3ltcFRhYmxlSGVhZGVycy5sZW5ndGg7aSsrKVxuICAgICAgdXBncmFkZUhpZXJhcmNoeVRhYmxlKHRhYmxlV2l0aEhpZXJhcmNoeVtpXSxjYXRTeW1wVGFibGVIZWFkZXJzW2ldKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVmYXVsdCBzb3J0aW5nIGJ5IGNvdW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdmFyIGNvdW50Q29sID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWwtY2FyZC0tY29udGVudCAucmVwb3J0YWwtaGllcmFyY2h5LXRhYmxlOmZpcnN0LWNoaWxkIHRyIHRkLnNvcnRhYmxlOmxhc3QtY2hpbGQnKTtcbiAgZm9yKHZhciBpPTA7aTxjb3VudENvbC5sZW5ndGg7aSsrKVxuICAgIGNvdW50Q29sW2ldLmNsaWNrKCk7XG59XG5cbi8vIHNhdmUgcHJvamVjdCBhbmQgc3ltcHRvbSBsYWJlbHMgaW50byBkcmlsbGRvd24gcGFyYW1ldGVyIGlucHV0IGFuZCBwZXJmb3JtIGRyaWxsIGRvd25cbmZ1bmN0aW9uIHNhdmVNaWRkbGVMZXZlbERyaWxsRG93blBhcmFtKGlucHV0V3JhcHBlcklELGJ0bldyYXBwZXJJRCl7XG5cbi8vIGlucHV0V3JhcHBlcklEIC0gd3JhcHBlciBmb3IgaW5wdXQgZm9yIHRleHQgcGFyYW1ldGVyXG4vLyBidG5XcmFwcGVySUQgLSB3cmFwcGVyIGZvciBidXRvb24gdG8gY2xpY2sgb24gYW5kIGp1bXAgdG8gYW5vdGhlciB0aGUgcGFnZVxuXG4gIHZhciBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hdGVyaWFsLWNhcmQnKTtcblxuICBmb3IodmFyIGk9MDtpPGNhcmQubGVuZ3RoO2krKyl7IC8vbG9vcCB0aHJvdWdoIGNhcmRzXG4gICAgY2FyZFtpXS5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgdmFyIGFsbF90ZXh0PSBldmVudC50YXJnZXQ7IC8vIGNoZWNrIHdoYXQgcGFydCBvZiB0aGUgY2FyZCBpcyBjbGlja2VkXG4gICAgICBpZihhbGxfdGV4dC5jbGFzc05hbWUuaW5kZXhPZigncmVwb3J0YWwtcm93LWxhYmVsJyk+LTEpIC8vIGlmIGNhdGVnb3J5L3N5bXB0b20gY2xpY2tlZCB0aGVuIGRyaWxsIGRvd25cbiAgICAgIHtcbiAgICAgICAgdmFyIG1uX3RleHQgPSBhbGxfdGV4dC5xdWVyeVNlbGVjdG9yKCdzcGFuJykhPW51bGwgPyBhbGxfdGV4dC5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgOiAnJzsgLy8gZmlsbCBoaWRkZW4gcGFyYW1ldGVyIHdpdGggbmFtZSBvZiBjYXRlZ29yeSBvciBzeW1wdG9tXG4gICAgICAgIHZhciBzeW1wdG9tTmFtZSA9IGFsbF90ZXh0LnRleHRDb250ZW50LnJlcGxhY2UobW5fdGV4dCwnJyk7XG4gICAgICAgIHZhciBwcm9qZWN0TmFtZSA9IHRoaXMucXVlcnlTZWxlY3RvcignLm1hdGVyaWFsLWNhcmQtLXRpdGxlIC5wcm9qZWN0TmFtZScpLnRleHRDb250ZW50O1xuXG4gICAgICAgIGlmKHN5bXB0b21OYW1lLmxlbmd0aD4wICYmIHByb2plY3ROYW1lLmxlbmd0aD4wKXtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlucHV0V3JhcHBlcklEKycgaW5wdXQnKS52YWx1ZSA9IHByb2plY3ROYW1lKydeJytzeW1wdG9tTmFtZTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ0bldyYXBwZXJJRCsnIGlucHV0JykuY2xpY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cbi8vIGFkZCBNYW5hZ2VtZW50IE5vdGVzXG5mdW5jdGlvbiBhZGRNTmFzVGlwcygpe1xuXG4gIC8vIG1hbmFnZW1udCBub3RlcyBhcmUgdGFrZW4gZnJvbSBhIGhpdCBsaXN0IG9uIHRoZSBwYWdlXG5cbiAgdmFyIG1uX3RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21uX2hpdGxpc3QgLnl1aTMtZGF0YXRhYmxlLXRhYmxlIC55dWkzLWRhdGF0YWJsZS1kYXRhJyk7IC8vIGhpdCBsaXN0IHJvd3Mgd2l0aCBkYXRhXG4gIHZhciBtbl9ub3RlID0gbW5fdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnl1aTMtZGF0YXRhYmxlLWNvbC1Ob3RlcycpOyAvLyBjb2x1bW4gd2l0aCBub3Rlc1xuICB2YXIgbW5fcHJvamVjdCA9IG1uX3RhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy55dWkzLWRhdGF0YWJsZS1jb2wtUHJvamVjdCcpOy8vIGNvbHVtbiB3aXRoIHByb2plY3RzXG4gIHZhciBtbl9zeW1wID0gbW5fdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnl1aTMtZGF0YXRhYmxlLWNvbC1pc3N1ZScpOyAvLyBjb2x1bW4gd2l0aCBzeW1wdG9tc1xuICB2YXIgbW5fY2F0ID0gbW5fdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLnl1aTMtZGF0YXRhYmxlLWNvbC1DYXRlZ29yeScpOyAvLyBjb2x1bW4gd2l0aCBzeW1wdG9tc1xuXG4gIHZhciBtbl9vYmplY3QgPSB7fTsgLy8gY3JlYXRlIG9iamVjdCBmb3IgZWFzeSBzZWFyY2ggb2YgYSBub3RlIHtcInN5bXB0b207cHJvamVjdFwiOm5vdGV9XG4gIHZhciBjYXRzV2l0aE1OX29iamVjdCA9IHt9OyAvLyBjYXRlZ29yaWVzIGhhdmluZyBzeW1wdG9tcyB3aXRoIG1hbmFnZW1lbnQgbm90ZXNcblxuICAvL2xvb3AgdGhyb3VnaCBtbiBub3RlcyBhbmQgYWRkIHRvIHRoZSBvYmplY3RcbiAgZm9yKHZhciBpPTA7aTxtbl9zeW1wLmxlbmd0aDtpKyspe1xuICAgIG1uX29iamVjdFttbl9zeW1wW2ldLmlubmVySFRNTCtcIjtcIittbl9wcm9qZWN0W2ldLmlubmVySFRNTF0gPSBtbl9ub3RlW2ldLmlubmVySFRNTDtcbiAgICBjYXRzV2l0aE1OX29iamVjdFttbl9jYXRbaV0uaW5uZXJIVE1MKyc7Jyttbl9wcm9qZWN0W2ldLmlubmVySFRNTF09bnVsbDtcbiAgfVxuXG4gIHZhciBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXRlcmlhbC1jYXJkJyk7Ly8gZ2V0IGFsbCBjYXJkc1xuXG4gIGZvcih2YXIgaj0wO2o8Y2FyZHMubGVuZ3RoO2orKykgLy8gbG9vcCBieSBjYXJkc1xuICB7XG5cbiAgICBpZihjYXJkc1tqXS5xdWVyeVNlbGVjdG9yKCcucmVwb3J0YWwtaGllcmFyY2h5LXRhYmxlJykpe1xuXG4gICAgICB2YXIgcHJvamVjdE5hbWUgPSBjYXJkc1tqXS5xdWVyeVNlbGVjdG9yKCcubWF0ZXJpYWwtY2FyZC0tdGl0bGUgLnByb2plY3ROYW1lJykuaW5uZXJIVE1MO1xuICAgICAgdmFyIHJvd0hlYWRlcnMgPSBjYXJkc1tqXS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCBzcGFuJyk7IC8vIHN5bXB0b21zIGluIHJvd3NcblxuICAgICAgZm9yKHZhciBpPTA7aTxyb3dIZWFkZXJzLmxlbmd0aDtpKyspe1xuICAgICAgICB2YXIgaGVhZGVyVGV4dCA9IHJvd0hlYWRlcnNbaV0uaW5uZXJUZXh0Kyc7Jytwcm9qZWN0TmFtZTsgLy8gYXNzZW1ibGUga2V5IHRvIGxvb2sgZm9yIGluIHRoZSBvYmplY3Q7IGRyaWxsZG93biBvZmZcbiAgICAgICAgaWYobW5fb2JqZWN0Lmhhc093blByb3BlcnR5KGhlYWRlclRleHQpKXsgLy8gY3JlYXRlIGFuZCBhZGQgdGhlIHRvb2wgdGlwXG4gICAgICAgICAgdmFyIGhvdmVyT3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICBob3Zlck92ZXIuY2xhc3NOYW1lID0gJ21uQ29udGVudCc7XG4gICAgICAgICAgaG92ZXJPdmVyLmlubmVySFRNTCA9IG1uX29iamVjdFtoZWFkZXJUZXh0XTtcbiAgICAgICAgICByb3dIZWFkZXJzW2ldLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaG92ZXJPdmVyKTtcbiAgICAgICAgICByb3dIZWFkZXJzW2ldLmNsYXNzTmFtZSArPSAnIHRodW1ibmFpbCc7XG4gICAgICAgICAgLy9yb3dIZWFkZXJzW2ldLnBhcmVudE5vZGUuY2xhc3NOYW1lICs9ICcgdGh1bWJuYWlsMic7XG4gICAgICAgICAgZGVsZXRlIG1uX29iamVjdFtoZWFkZXJUZXh0XTsgLy8gcmVtb3ZlIHVzZWQgbm90ZVxuICAgICAgICB9XG4gICAgICAgIGlmKGNhdHNXaXRoTU5fb2JqZWN0Lmhhc093blByb3BlcnR5KGhlYWRlclRleHQpICYmIHJvd0hlYWRlcnNbaV0uY2xhc3NOYW1lLmluZGV4T2YoJ2hhc1N5bXB0b21zV2l0aE5vdGVzJyk8MClcbiAgICAgICAgICByb3dIZWFkZXJzW2ldLmNsYXNzTmFtZSArPSAnIGhhc1N5bXB0b21zV2l0aE5vdGVzJztcblxuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1pZGRsZUxldmVsKCl7XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoaWRlIGVtcHR5IHByb2plY3QgY2FyZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB2YXIgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hdGVyaWFsLWNhcmQtLWNvbnRlbnQnKTtcbiAgZm9yKHZhciBpPTA7aTx0YWJsZXMubGVuZ3RoO2krKylcbiAgICBpZih0YWJsZXNbaV0uaW5uZXJIVE1MID09ICcnKVxuICAgICAgdGFibGVzW2ldLnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBhcHBseUhpZXJhcmNoeVN0eWxlVG9UYWJsZSgpO1xuICBzYXZlTWlkZGxlTGV2ZWxEcmlsbERvd25QYXJhbSgnI01pZGRsZUxldmVsX2RyaWxsZG93blByb2plY3RJbnB1dCcsJyNNaWRkbGVMZXZlbF9kcmlsbGRvd25TdWJtaXRCdG4nKTtcblxuICAvLyBhcHBseSBNYW5hZ2VtZW50IE5vdGVzIHdoZW4gaGl0IGxpc3QgaXMgbG9hZGVkXG4gIFkuR2xvYmFsLm9uKCdoaXRsaXN0bG9hZGVkJywgYWRkTU5hc1RpcHMpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NvbWMtc3ltcHRvbS1vdmVydmlldy1wYWdlLXNjcmlwdHMvaGllcmFyY2h5LXRhYmxlLXVwZGF0ZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=