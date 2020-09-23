/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\n.content {\\n  display: grid;\\n  grid-template-columns: 0.1fr 1fr 2fr;\\n}\\n\\n.side-bar {\\n  background-color: #0b1083;\\n  height: 100vh;\\n  grid-column: 1/2;\\n}\\n\\n.project-view {\\n  display: grid;\\n  grid-column: 2/3;\\n  grid-row: 1/-1;\\n  height: 50vh;\\n}\\n\\n.project-header {\\n  display: flex;\\n  justify-content: space-between;\\n  height: 10vh;\\n  width: max-content;\\n}\\n\\n.header-text-project {\\n  padding-left: 0.5em;\\n}\\n\\n.fa-plus-circle {\\n  font-size: 30px;\\n  margin-top: 1em;\\n  margin-left: 1em;\\n  color: #0b1083;\\n}\\n\\n.accordionWrapper {\\n  padding-left: 1em;\\n  \\n}\\n.accordionItem{\\n  float:left;\\n  display:block;\\n  width:100%;\\n  box-sizing: border-box;\\n  font-family:'Open-sans',Arial,sans-serif;\\n}\\n.accordionItemHeading{\\n  cursor:pointer;\\n  margin:0px 0px 10px 0px;\\n  padding:10px;\\n  background:#2980b9;\\n  color:#fff;\\n  width:100%;\\n  -webkit-border-radius: 3px;\\n-moz-border-radius: 3px;\\nborder-radius: 3px;\\n      box-sizing: border-box;\\n}\\n.close .accordionItemContent{\\n  height:0px;\\n  transition:height 1s ease-out;\\n  -webkit-transform: scaleY(0);\\n-o-transform: scaleY(0);\\n-ms-transform: scaleY(0);\\ntransform: scaleY(0);\\n  float:left;\\n  display:block;\\n  \\n  \\n}\\n.open .accordionItemContent{\\n  padding: 20px;\\n  background-color: #fff;\\n  border: 1px solid #ddd;\\n  width: 100%;\\n  margin: 0px 0px 10px 0px;\\n  display:block;\\n  -webkit-transform: scaleY(1);\\n-o-transform: scaleY(1);\\n-ms-transform: scaleY(1);\\ntransform: scaleY(1);\\n  -webkit-transform-origin: top;\\n-o-transform-origin: top;\\n-ms-transform-origin: top;\\ntransform-origin: top;\\n\\n-webkit-transition: -webkit-transform 0.4s ease-out;\\n-o-transition: -o-transform 0.4s ease;\\n-ms-transition: -ms-transform 0.4s ease;\\ntransition: transform 0.4s ease;\\n      box-sizing: border-box;\\n}\\n\\n.open .accordionItemHeading{\\n  margin:0px;\\n      -webkit-border-top-left-radius: 3px;\\n  -webkit-border-top-right-radius: 3px;\\n  -moz-border-radius-topleft: 3px;\\n  -moz-border-radius-topright: 3px;\\n  border-top-left-radius: 3px;\\n  border-top-right-radius: 3px;\\n  -webkit-border-bottom-right-radius: 0px;\\n  -webkit-border-bottom-left-radius: 0px;\\n  -moz-border-radius-bottomright: 0px;\\n  -moz-border-radius-bottomleft: 0px;\\n  border-bottom-right-radius: 0px;\\n  border-bottom-left-radius: 0px;\\n  background-color: #bdc3c7;\\n  color: #7f8c8d;\\n}\\n.project-form {\\n  margin-left: 1em;\\n}\\n.form {\\n  max-width: 30rem;\\n  margin: 0 auto;\\n  padding: 1.5rem 2rem;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\\n}\\ninput {\\n  background-repeat: no-repeat;\\n  background-position: right 1rem center;\\n  background-size: 0.75rem;\\n  margin-bottom: 0.75em;\\n}\\n[type=text],\\n[type=date],\\nselect,\\ntextarea {\\n  display: block;\\n  padding: 0.5rem;\\n  background: transparent;\\n  width: 100%;\\n  max-width: 100%;\\n  border: 1px solid #cdcdcd;\\n  border-radius: 4px;\\n  font-size: 0.95rem;\\n}\\n\\n/* button */\\n.submit-btn {\\n  display: inline-block;\\n  vertical-align: middle;\\n  white-space: nowrap;\\n  cursor: pointer;\\n  margin: 0.25rem 0;\\n  padding: 0.5rem 1rem;\\n  border: 1px solid #1e6bd6;\\n  border-radius: 5px;\\n  background: #1e6bd6;\\n  color: white;\\n  font-weight: 600;\\n  text-decoration: none;\\n  font-family: sans-serif;\\n  font-size: 0.95rem;\\n}\\n.main {\\n  display: grid;\\n  grid-column: 3/-1;\\n}\\n.taskWrapper {\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n.main-header {\\n  display: flex;\\n}\\n.done, .in-progress {\\n  display: flex;\\n  text-align: center;\\n}\\n.toDo {\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.new-task {\\n  box-sizing: border-box;\\n  appearance: none;\\n  background-color: transparent;\\n  border: 2px solid #0b1083;\\n  border-radius: 0.6em;\\n  color: #0b1083;\\n  cursor: pointer;\\n  height: 2.5em;\\n  font-size: 0.8em;\\n  font-weight: 400;\\n  line-height: 1;\\n  margin: 20px;\\n  text-decoration: none;\\n  text-align: center;\\n  text-transform: uppercase;\\n  font-family: 'Montserrat', sans-serif;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainpage */ \"./src/mainpage.js\");\n\n\n\nObject(_mainpage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mainpage.js":
/*!*************************!*\
  !*** ./src/mainpage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectsetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsetup */ \"./src/projectsetup.js\");\n/* harmony import */ var _taskcreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskcreation */ \"./src/taskcreation.js\");\n\n\n\nconst newProjectForm = () => {\n  const formdiv = document.createElement('div');\n  formdiv.className = 'project-form';\n  const headTag = document.createElement('h1');\n  headTag.textContent = 'New Project';\n  const content = document.getElementById('content');\n  const projectSection = document.querySelector('.project-view');\n  projectSection.appendChild(formdiv);\n  content.appendChild(projectSection);\n\n  const messageForm = document.createElement('form');\n  messageForm.className = 'form';\n  const name = document.createElement('input');\n  name.setAttribute('type', 'text');\n  name.setAttribute('placeholder', 'project name');\n  const submit = document.createElement('button');\n  submit.className = 'submit-btn';\n  submit.onclick = Object(_projectsetup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name.value);\n  submit.textContent = 'Create';\n  messageForm.appendChild(headTag);\n  messageForm.appendChild(name);\n  messageForm.appendChild(submit);\n  formdiv.appendChild(messageForm);\n  const addIcon = document.getElementById('add');\n  addIcon.removeEventListener('click', newProjectForm);\n};\nconst newTask = () => {\n  const taskdiv = document.createElement('div');\n  taskdiv.className = 'project-form';\n  const headTag = document.createElement('h1');\n  headTag.textContent = 'New Task';\n  const taskForm = document.createElement('form');\n  taskForm.className = 'form';\n  const taskName = document.createElement('input');\n  taskName.setAttribute('type', 'text');\n  taskName.setAttribute('placeholder', 'task name');\n  const taskdescription = document.createElement('input');\n  taskdescription.setAttribute('type', 'text');\n  taskdescription.setAttribute('placeholder', 'Description');\n  const dueDate = document.createElement('input');\n  dueDate.id = 'dateSelect';\n  dueDate.setAttribute('type', 'date');\n  const priorityArray = ['High', 'Medium', 'Low'];\n  const priorityList = document.createElement('select');\n  priorityList.id = 'mySelect';\n  for (let i = 0; i < priorityArray.length; i += 1) {\n    const option = document.createElement('option');\n    option.value = priorityArray[i];\n    option.text = priorityArray[i];\n    priorityList.appendChild(option);\n  }\n  const submit = document.createElement('button');\n  submit.className = 'submit-btn';\n  submit.textContent = 'Create';\n  submit.onclick = Object(_taskcreation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskName.value,\n    taskdescription.value, dueDate.value,\n    priorityList.value);\n  taskForm.appendChild(headTag);\n  taskForm.appendChild(taskName);\n  taskForm.appendChild(taskdescription);\n  taskForm.appendChild(dueDate);\n  taskForm.appendChild(priorityList);\n  taskForm.appendChild(submit);\n  taskdiv.appendChild(taskForm);\n  const todoSection = document.getElementById('toDo');\n  todoSection.appendChild(taskdiv);\n  const disableButton = document.getElementById('new-task');\n  disableButton.removeEventListener('click', newTask);\n};\nconst main = () => {\n  const todoItemsSection = document.createElement('div');\n  todoItemsSection.className = 'main';\n  todoItemsSection.id = 'main';\n  const tasksWrapper = document.createElement('div');\n  tasksWrapper.className = 'taskWrapper';\n  const toDo = document.createElement('div');\n  toDo.className = 'toDo';\n  toDo.id = 'toDo';\n  // Section Headers\n  // ToDo section\n  const toDoHeader = document.createElement('div');\n  toDoHeader.className = 'main-header';\n  const todoTitle = document.createElement('h4');\n  todoTitle.textContent = 'ToDo';\n  const newtoDo = document.createElement('button');\n  newtoDo.className = 'new-task';\n  newtoDo.id = 'new-task';\n  newtoDo.textContent = 'New Task';\n  newtoDo.addEventListener('click', newTask);\n  toDoHeader.appendChild(todoTitle);\n  toDo.appendChild(toDoHeader);\n  toDo.appendChild(newtoDo);\n  // InProgress Section\n  const inProgress = document.createElement('div');\n  inProgress.className = 'in-progress';\n  const progressHeader = document.createElement('div');\n  progressHeader.className = 'main-header';\n  const progressTitle = document.createElement('h4');\n  progressTitle.textContent = 'In Progress';\n  progressHeader.appendChild(progressTitle);\n  inProgress.appendChild(progressHeader);\n  // Done\n  const done = document.createElement('div');\n  done.className = 'done';\n  const doneHeader = document.createElement('div');\n  doneHeader.className = 'main-header';\n  const doneTitle = document.createElement('h4');\n  doneTitle.textContent = 'Done';\n  const newdone = document.createElement('button');\n  newdone.className = 'new-task';\n  newdone.textContent = 'New Task';\n  doneHeader.appendChild(doneTitle);\n  done.appendChild(doneHeader);\n\n  tasksWrapper.appendChild(toDo);\n  tasksWrapper.appendChild(inProgress);\n  tasksWrapper.appendChild(done);\n  todoItemsSection.appendChild(tasksWrapper);\n  const content = document.querySelector('#content');\n  content.appendChild(todoItemsSection);\n};\n\nconst createpage = () => {\n  const sidebar = document.createElement('div');\n  sidebar.className = 'side-bar';\n\n  const projectView = document.createElement('div');\n  projectView.className = 'project-view';\n\n  const projectIntro = document.createElement('div');\n  projectIntro.className = 'project-header';\n  const headerText = document.createElement('h1');\n  headerText.className = 'header-text-project';\n  const addIcon = document.createElement('i');\n  addIcon.className = 'fas fa-plus-circle';\n  addIcon.id = 'add';\n  addIcon.addEventListener('click', newProjectForm);\n\n  headerText.textContent = 'Projects';\n  projectIntro.appendChild(headerText);\n  projectIntro.appendChild(addIcon);\n  projectView.appendChild(projectIntro);\n  // Accordion item\n  // Main section\n  const navigation = document.createElement('div');\n  navigation.className = 'navigation';\n\n  const content = document.querySelector('#content');\n  content.appendChild(sidebar);\n  content.appendChild(projectView);\n  main();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createpage);\n\n\n//# sourceURL=webpack:///./src/mainpage.js?");

/***/ }),

/***/ "./src/projectsetup.js":
/*!*****************************!*\
  !*** ./src/projectsetup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createproject = (projectname) => ({\n  projectname,\n  setProjectName() {\n    this.projectname = projectname;\n    return this;\n  },\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createproject);\n\n\n//# sourceURL=webpack:///./src/projectsetup.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/taskcreation.js":
/*!*****************************!*\
  !*** ./src/taskcreation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createtask = (taskname, description, date, priority) => ({\n  taskname,\n  description,\n  date,\n  priority,\n\n  // setTask() {\n  //   this.taskname = taskname;\n  //   this.description = description;\n  //   this.date = date;\n  //   this.priority = priority;\n  //   return this;\n  // },\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createtask);\n\n\n//# sourceURL=webpack:///./src/taskcreation.js?");

/***/ })

/******/ });