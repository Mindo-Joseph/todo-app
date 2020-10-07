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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\nli {\\n  list-style-type: none;\\n}\\n\\n.content {\\n  display: grid;\\n  grid-template-columns: repeat(12, 1fr);\\n}\\n\\n.side-bar {\\n  background-color: #0b1083;\\n  height: 100vh;\\n  display: grid;\\n  grid-column: 1/2;\\n}\\n\\n.project-view {\\n  display: grid;\\n  grid-column: 2/5;\\n  height: 50vh;\\n  grid-row: 1/2;\\n}\\n\\n.project-header {\\n  display: flex;\\n  justify-content: space-between;\\n  height: 10vh;\\n  width: max-content;\\n}\\n\\n.header-text-project {\\n  padding-left: 0.5em;\\n}\\n\\n.fa-plus-circle {\\n  font-size: 30px;\\n  margin-top: 1em;\\n  margin-left: 1em;\\n  color: #0b1083;\\n}\\n\\n.project-form {\\n  margin-left: 1em;\\n}\\n\\n.form,\\n.todo-item {\\n  max-width: 30rem;\\n  margin: 0.5em;\\n  padding: 1rem;\\n  border-radius: 8px;\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\\n}\\n\\ninput {\\n  background-repeat: no-repeat;\\n  background-position: right 1rem center;\\n  background-size: 0.75rem;\\n  margin-bottom: 0.75em;\\n}\\n\\n[type=\\\"text\\\"],\\n[type=\\\"date\\\"],\\nselect,\\ntextarea {\\n  display: block;\\n  padding: 0.5rem;\\n  background: transparent;\\n  width: 100%;\\n  max-width: 100%;\\n  border: 1px solid #cdcdcd;\\n  border-radius: 4px;\\n  font-size: 0.95rem;\\n}\\n\\n.submit-btn {\\n  display: inline-block;\\n  vertical-align: middle;\\n  white-space: nowrap;\\n  cursor: pointer;\\n  margin: 0.25rem 0;\\n  padding: 0.5rem 1rem;\\n  border: 1px solid #1e6bd6;\\n  border-radius: 5px;\\n  background: #1e6bd6;\\n  color: white;\\n  font-weight: 600;\\n  text-decoration: none;\\n  font-family: sans-serif;\\n  font-size: 0.95rem;\\n}\\n\\n.main {\\n  display: grid;\\n  grid-column: 5/-1;\\n}\\n\\n.taskWrapper {\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n\\n.main-header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.done {\\n  display: flex;\\n  text-align: center;\\n  flex-direction: column;\\n  flex: 50%;\\n}\\n\\n.toDo {\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  flex: 50%;\\n}\\n\\n.new-task,.project-name {\\n  box-sizing: border-box;\\n  appearance: none;\\n  background-color: transparent;\\n  border: 2px solid #0b1083;\\n  border-radius: 0.6em;\\n  color: #0b1083;\\n  cursor: pointer;\\n  height: 2.5em;\\n  font-size: 0.8em;\\n  font-weight: 400;\\n  line-height: 1;\\n  margin: 20px;\\n  text-decoration: none;\\n  text-align: center;\\n  text-transform: uppercase;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\n.todo-list {\\n  margin: 0 auto;\\n  padding: 0;\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.buttonsDiv {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.cancel {\\n  background-color: #e80c0c;\\n}\\n\\nul {\\n  list-style-type: none;\\n}\\n\\n.todo-item {\\n  max-width: 15rem;\\n}\\n\\n.action input[type=\\\"checkbox\\\"] {\\n  margin-right: 1em;\\n}\\n\\n.action > * {\\n  padding-right: 0.5em;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

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
/*! exports provided: todoCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoCard\", function() { return todoCard; });\n/* harmony import */ var _taskcreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskcreation */ \"./src/taskcreation.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n\n\n\nconst clearSection = () => {\n  const content = document.querySelector('#target');\n  while (content.firstChild) {\n    content.removeChild(content.lastChild);\n  }\n};\nconst newProjectForm = () => {\n  const formdiv = document.createElement('div');\n  formdiv.className = 'project-form';\n\n  const headTag = document.createElement('h1');\n  headTag.textContent = 'New Project';\n\n  const content = document.getElementById('content');\n\n  const projectSection = document.querySelector('.project-view');\n  projectSection.appendChild(formdiv);\n  content.appendChild(projectSection);\n\n  const messageForm = document.createElement('form');\n  messageForm.className = 'form';\n\n  const name = document.createElement('input');\n  name.setAttribute('type', 'text');\n  name.setAttribute('placeholder', 'project name');\n  const projectbtns = document.createElement('div');\n  projectbtns.className = 'projectbtns';\n  const submit = document.createElement('button');\n  submit.className = 'submit-btn';\n  submit.textContent = 'Create';\n  submit.addEventListener('click', () => {\n    Object(_test__WEBPACK_IMPORTED_MODULE_1__[\"newProject\"])(name.value);\n    \n  });\n  const cancel = document.createElement('button');\n  cancel.className = 'submit-btn cancel';\n  cancel.textContent = 'Cancel';\n  const buttonsdiv = document.createElement('div');\n  buttonsdiv.className = 'buttonsDiv';\n  buttonsdiv.appendChild(submit);\n  buttonsdiv.appendChild(cancel);\n  messageForm.appendChild(headTag);\n  messageForm.appendChild(name);\n  messageForm.appendChild(buttonsdiv);\n  formdiv.appendChild(messageForm);\n\n  const addIcon = document.getElementById('add');\n  addIcon.removeEventListener('click', newProjectForm);\n};\nconst newTask = () => {\n  clearSection();\n  const taskdiv = document.createElement('div');\n  taskdiv.className = 'project-form';\n\n  const headTag = document.createElement('h1');\n  headTag.textContent = 'New Task';\n\n  const taskForm = document.createElement('form');\n  taskForm.className = 'form';\n\n  const taskName = document.createElement('input');\n  taskName.setAttribute('type', 'text');\n  taskName.setAttribute('placeholder', 'task name');\n  taskName.required = true;\n\n  const taskdescription = document.createElement('input');\n  taskdescription.setAttribute('type', 'text');\n  taskdescription.setAttribute('placeholder', 'Description');\n  taskdescription.required = true;\n\n  const dueDate = document.createElement('input');\n  dueDate.id = 'dateSelect';\n  dueDate.setAttribute('type', 'date');\n  dueDate.required = true;\n\n  const priorityArray = ['High', 'Medium', 'Low'];\n\n  const priorityList = document.createElement('select');\n  priorityList.id = 'mySelect';\n  for (let i = 0; i < priorityArray.length; i += 1) {\n    const option = document.createElement('option');\n    option.value = priorityArray[i];\n    option.text = priorityArray[i];\n    priorityList.appendChild(option);\n  }\n\n  const submit = document.createElement('button');\n  submit.className = 'submit-btn';\n  submit.textContent = 'Create';\n  submit.addEventListener('click', () => {\n    const task = Object(_taskcreation__WEBPACK_IMPORTED_MODULE_0__[\"createtask\"])(\n      taskName.value, taskdescription.value, dueDate.value, priorityList.value,\n    );\n    const arr = JSON.parse(localStorage.getItem('projects'))\n    for (let index = 0; index < arr.length; index+=1) {\n      // const title = document.querySelector('.project-name');\n      // console.log(title.textContent);\n      if (Object.keys(arr[index])[0] === 'Project') {\n       \n        arr[index]['Project'][0][\"todos\"].push(task);\n\n      }\n      \n    };\n    localStorage.setItem('projects', JSON.stringify(arr));\n  });\n\n  taskForm.appendChild(headTag);\n  taskForm.appendChild(taskName);\n  taskForm.appendChild(taskdescription);\n  taskForm.appendChild(dueDate);\n  taskForm.appendChild(priorityList);\n  taskForm.appendChild(submit);\n  taskdiv.appendChild(taskForm);\n\n  const todoSection = document.getElementById('toDo');\n  todoSection.appendChild(taskdiv);\n\n  const disableButton = document.getElementById('new-task');\n  disableButton.removeEventListener('click', newTask);\n};\nconst getTasks = (projectname) => {\n  const availableProjects = JSON.parse(localStorage.getItem('projects') )|| [];\n  const project = availableProjects.find(item => item[`${projectname}`])\n  const todos = project[projectname][0]['todos'] || [];\n  const done = project[projectname][1]['done'] || [];\n  todos.forEach(elem => todoCard(elem,'#target'))\n  done.forEach(elem =>  todoCard(elem,'.done'))\n\n}\nconst main = () => {\n  const todoItemsSection = document.createElement('div');\n  todoItemsSection.className = 'main';\n  todoItemsSection.id = 'main';\n\n  const tasksWrapper = document.createElement('div');\n  tasksWrapper.className = 'taskWrapper';\n\n  const toDo = document.createElement('div');\n  toDo.className = 'toDo';\n  toDo.id = 'toDo';\n\n  const toDoHeader = document.createElement('div');\n  toDoHeader.className = 'main-header';\n\n  const todoTitle = document.createElement('h4');\n  todoTitle.textContent = 'ToDo';\n\n  const newtoDo = document.createElement('button');\n  newtoDo.className = 'new-task';\n  newtoDo.id = 'new-task';\n  newtoDo.textContent = 'New Task';\n  newtoDo.addEventListener('click', newTask);\n  const todoCardsList = document.createElement('ul');\n  todoCardsList.className = 'todo-list';\n  todoCardsList.id = 'target';\n  todoCardsList.ondragstart = '';\n\n  toDoHeader.appendChild(todoTitle);\n  toDo.appendChild(toDoHeader);\n  toDo.appendChild(newtoDo);\n  toDo.appendChild(todoCardsList);\n\n  const done = document.createElement('div');\n  done.className = 'done';\n\n  const doneHeader = document.createElement('div');\n  doneHeader.className = 'main-header';\n\n  const doneTitle = document.createElement('h4');\n  doneTitle.textContent = 'Done';\n\n  const newdone = document.createElement('button');\n  newdone.className = 'new-task';\n  newdone.textContent = 'New Task';\n  doneHeader.appendChild(doneTitle);\n  done.appendChild(doneHeader);\n\n  tasksWrapper.appendChild(toDo);\n\n  tasksWrapper.appendChild(done);\n  todoItemsSection.appendChild(tasksWrapper);\n\n  const content = document.querySelector('#content');\n  content.appendChild(todoItemsSection);\n};\nconst todoCard = (todo, target) => {\n  const todoItem = document.createElement('li');\n  todoItem.className = 'todo-item';\n  todoItem.draggable = 'true';\n\n  const card = document.createElement('div');\n  card.className = 'card';\n\n  const cardTitle = document.createElement('h3');\n  cardTitle.className = 'todo-title';\n\n  const action = document.createElement('span');\n  action.className = 'action';\n  const title = document.createElement('span');\n  title.textContent = `${todo.taskname}`;\n  title.className = 'title';\n  title.id = 'taskTitle';\n  const taskDelete = document.createElement('button');\n  const icon = document.createElement('i');\n  icon.className = 'fas fa-trash';\n  taskDelete.appendChild(icon);\n  taskDelete.id = 'deletebtn';\n  taskDelete.addEventListener('click', () => {\n    Object(_taskcreation__WEBPACK_IMPORTED_MODULE_0__[\"deleteTask\"])(title);\n  });\n  const checkbox = document.createElement('input');\n  checkbox.setAttribute('type', 'checkbox');\n  checkbox.addEventListener('change', (event) => {\n    if (event.target.checked) {\n      const todos = JSON.parse(localStorage.getItem('todos')) || [];\n      for (let i = 0; i < todos.length; i += 1) {\n        if (todos[i].taskname === title.textContent) {\n          const done = JSON.parse(localStorage.getItem('done')) || [];\n          done.push(todos[i]);\n          localStorage.setItem('done', JSON.stringify(done));\n          todos.splice(i, 1);\n          localStorage.setItem('todos', JSON.stringify(todos));\n        }\n      }\n      const done = document.querySelector('.done');\n      done.appendChild(todoItem);\n      // const list = document.querySelector('.todo-list');\n      // list.removeChild(todoItem);\n    }\n  });\n\n  action.appendChild(checkbox);\n  action.appendChild(title);\n  action.appendChild(taskDelete);\n  cardTitle.appendChild(action);\n\n  const description = document.createElement('p');\n  description.className = 'todo-description';\n  description.textContent = `Desc: ${todo.description}`;\n  const due = document.createElement('p');\n  due.textContent = `${todo.date}`;\n  const priority = document.createElement('span');\n  priority.className = 'todo-priority';\n  priority.textContent = `Priority: ${todo.priority}`;\n\n  card.appendChild(cardTitle);\n  card.appendChild(description);\n  card.appendChild(due);\n  card.appendChild(priority);\n\n  todoItem.appendChild(card);\n  const todoCardsList = document.querySelector(`${target}`);\n  todoCardsList.appendChild(todoItem);\n};\n\nconst createpage = () => {\n  const sidebar = document.createElement('div');\n  sidebar.className = 'side-bar';\n\n  const projectView = document.createElement('div');\n  projectView.className = 'project-view';\n\n  const projectIntro = document.createElement('div');\n  projectIntro.className = 'project-header';\n  const headerText = document.createElement('h1');\n  headerText.className = 'header-text-project';\n  const addIcon = document.createElement('i');\n  addIcon.className = 'fas fa-plus-circle';\n  addIcon.id = 'add';\n  addIcon.addEventListener('click', newProjectForm);\n\n  headerText.textContent = 'Projects';\n  \n  const display = document.createElement('div');\n  const names = Object(_test__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"])();\n  names.forEach(name => {\n    const title = document.createElement('button');\n    title.className = 'project-name';\n    title.textContent = name;\n    display.appendChild(title);\n\n  })\n  const projectList = document.createElement('div');\n  projectList.className = 'projectList';\n\n  projectIntro.appendChild(headerText);\n  projectIntro.appendChild(addIcon);\n  projectView.appendChild(projectIntro);\n  projectView.appendChild(display);\n  const navigation = document.createElement('div');\n  navigation.className = 'navigation';\n\n  const content = document.querySelector('#content');\n  content.appendChild(sidebar);\n  content.appendChild(projectView);\n  main();\n  getTasks('Project');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createpage);\n\n\n//# sourceURL=webpack:///./src/mainpage.js?");

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
/*! exports provided: createtask, deleteTask, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createtask\", function() { return createtask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\n/* eslint-disable no-restricted-globals */\nconst createtask = (taskname, description, date, priority) => {\n  const todo = {\n    taskname,\n    description,\n    date,\n    priority,\n    id: Date.now(),\n  };\n  return todo;\n};\nconst deleteTask = (title) => {\n  const todos = JSON.parse(Object.values(localStorage)[0]);\n  const done = JSON.parse(Object.values(localStorage)[1]);\n  if (todos.some((task) => task.taskname === title.textContent)) {\n    const idx = todos.findIndex((task) => task.taskname === title.textContent);\n    todos.splice(idx, 1);\n    localStorage.setItem('todos', JSON.stringify(todos));\n    location.reload();\n    return false;\n  }\n  const idx = done.findIndex((task) => task.taskname === title.textContent);\n  done.splice(idx, 1);\n  localStorage.setItem('done', JSON.stringify(done));\n  location.reload();\n  return false;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (createtask);\n\n\n//# sourceURL=webpack:///./src/taskcreation.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! exports provided: newProject, getProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newProject\", function() { return newProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\n\n// const projects = [\n//   {\n//     projo1: [\n//       { todos: [{ taskname: \"Task1\", date: \"123\" }] },\n//       { done: [{ taskname: \"Task2\", date: \"12345\" }] },\n//     ],\n//   },\n// ];\n// // console.log(projects[0][\"projo1\"][1]['done'].length);\n// console.log(JSON.stringify(projects));\nconst newProject = (name) => {\n    let project = {};\n    project[name] = [{'todos':[]},{'done':[]}];\n    const projectss = JSON.parse(localStorage.getItem('projects')) || [];\n    projectss.push(project)\n    localStorage.setItem('projects',JSON.stringify(projectss));\n}\n\n// newProject(\"projo\")\n// console.log(projects);\n// console.log(projects.find(item => item['projo']));\nconst populatetoDosList = (items, target) => {\n  for (let i = 0; i < items.length; i += 1) {\n    todoCard(items[i], `${target}`);\n  }\n};\n\nconst getProjects = () => {\n  const availableProjects = JSON.parse(localStorage.getItem('projects')) || [];\n  const projectNames = availableProjects.flatMap(item => Object.keys(item));\n  return projectNames\n}\n\n\n//# sourceURL=webpack:///./src/test.js?");

/***/ })

/******/ });