/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js-libs/back_to_top.js":
/*!************************************!*\
  !*** ./src/js-libs/back_to_top.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toTop: () => (/* binding */ toTop)\n/* harmony export */ });\nfunction toTop() {\n  var backToTop = document.querySelector(\".back_to_top\");\n  window.addEventListener('scroll', function (e) {\n    if (window.pageYOffset >= window.innerHeight * 0.1) {\n      backToTop.classList.remove(\"item_hide\");\n      backToTop.classList.add(\"item_show\");\n    } else {\n      backToTop.classList.add(\"item_hide\");\n      backToTop.classList.remove(\"item_show\");\n    }\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js-libs/back_to_top.js?");

/***/ }),

/***/ "./src/js-libs/galerie.js":
/*!********************************!*\
  !*** ./src/js-libs/galerie.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   observeAndDisplay: () => (/* binding */ observeAndDisplay)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction observeAndDisplay() {\n  var observer = new IntersectionObserver(function (entries) {\n    var _iterator = _createForOfIteratorHelper(entries),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var entry = _step.value;\n        loadDataImage(entry.target, entry.isIntersecting);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  });\n  var photoContainers = document.querySelectorAll(\".photo_container\");\n  photoContainers.forEach(function (photoContainer) {\n    observer.observe(photoContainer);\n  });\n}\nfunction loadDataImage(target, intersect) {\n  fetch(\"../ressources/loading_img.json\").then(function (reponse) {\n    if (reponse.ok) {\n      return reponse.json();\n    }\n  }).then(function (data) {\n    var _loop = function _loop() {\n      var p = document.createElement(\"p\");\n      var img = document.createElement(\"img\");\n      p.appendChild(img);\n      switch (data[i].class) {\n        case \"bras\":\n          img.src = data[i].url;\n          img.alt = data[i].alt;\n          img.width = \"330\";\n          img.height = \"250\";\n          p.classList.add(\"bras\");\n          break;\n        case \"jambe\":\n          img.src = data[i].url;\n          img.alt = data[i].alt;\n          img.width = \"330\";\n          img.height = \"250\";\n          p.classList.add(\"jambe\");\n          break;\n        case \"visage\":\n          img.src = data[i].url;\n          img.alt = data[i].alt;\n          img.width = \"330\";\n          img.height = \"250\";\n          p.classList.add(\"visage\");\n          break;\n        case \"dessin\":\n          img.src = data[i].url;\n          img.alt = data[i].alt;\n          img.width = \"330\";\n          img.height = \"250\";\n          p.classList.add(\"dessin\");\n          break;\n        case \"dos\":\n          img.src = data[i].url;\n          img.alt = data[i].alt;\n          img.width = \"330\";\n          img.height = \"250\";\n          p.classList.add(\"dos\");\n          break;\n        case \"torse\":\n          img.src = data[i].url;\n          img.alt = data[i].alt;\n          img.width = \"330\";\n          img.height = \"250\";\n          p.classList.add(\"torse\");\n          break;\n      }\n      if (target && intersect) {\n        var tmpContainer = document.querySelector(\"#\".concat(target.id));\n        if (p.classList.contains(target.id)) {\n          tmpContainer.appendChild(p);\n        }\n      } else {\n        var _tmpContainer = document.querySelector(\"#\".concat(target.id));\n        if (_tmpContainer.childNodes.length > 0) {\n          var photosToRemove = document.querySelectorAll(\".\".concat(target.id));\n          photosToRemove.forEach(function (photoToRemove) {\n            _tmpContainer.removeChild(photoToRemove);\n          });\n        }\n      }\n    };\n    for (var i = 0; i < data.length; i++) {\n      _loop();\n    }\n  }).catch(function (error) {\n    return console.log('Erreur de chargement JSON :', error);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js-libs/galerie.js?");

/***/ }),

/***/ "./src/js-libs/mentions_legales.js":
/*!*****************************************!*\
  !*** ./src/js-libs/mentions_legales.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openLegalMentionPanel: () => (/* binding */ openLegalMentionPanel)\n/* harmony export */ });\nfunction openLegalMentionPanel() {\n  var legalMentions = document.querySelectorAll(\"dt\");\n  legalMentions.forEach(function (legalMention) {\n    legalMention.addEventListener(\"click\", function () {\n      var elementHasActive = document.querySelector(\".active\");\n\n      //Verifier qu'on a trouver un élément et que l'élément trouvé n'est pas celui cliqué\n      if (elementHasActive && this !== elementHasActive) {\n        elementHasActive.classList.remove(\"active\");\n      }\n      //clic à nouveau referme\n      this.classList.toggle(\"active\");\n    });\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js-libs/mentions_legales.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_libs_mentions_legales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-libs/mentions_legales.js */ \"./src/js-libs/mentions_legales.js\");\n/* harmony import */ var _js_libs_galerie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-libs/galerie.js */ \"./src/js-libs/galerie.js\");\n/* harmony import */ var _js_libs_back_to_top_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-libs/back_to_top.js */ \"./src/js-libs/back_to_top.js\");\n\n\n\n\nvar accueilPage = document.querySelector(\"#accueil\");\nvar galeriePage = document.querySelector(\"#galerie\");\nvar mentionsPage = document.querySelector(\"#legal_mentions\");\nif (accueilPage) {\n  (0,_js_libs_back_to_top_js__WEBPACK_IMPORTED_MODULE_3__.toTop)();\n}\nif (galeriePage) {\n  (0,_js_libs_galerie_js__WEBPACK_IMPORTED_MODULE_2__.observeAndDisplay)();\n  (0,_js_libs_back_to_top_js__WEBPACK_IMPORTED_MODULE_3__.toTop)();\n}\nif (mentionsPage) {\n  (0,_js_libs_mentions_legales_js__WEBPACK_IMPORTED_MODULE_1__.openLegalMentionPanel)();\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/script.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;