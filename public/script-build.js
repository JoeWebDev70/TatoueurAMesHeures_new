/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js-libs/galerie.js":
/*!********************************!*\
  !*** ./src/js-libs/galerie.js ***!
  \********************************/
/***/ (() => {

eval("// var options = {\n//     root: document.querySelector(\"#scrollArea\"),\n//     rootMargin: \"0px\",\n//     threshold: 1.0,\n//   };\n\n//   var observer = new IntersectionObserver(callback, options);\n\nvar observer = new IntersectionObserver(function (entries) {\n  console.log(\"entries\", entries);\n});\nvar mainGallery = document.querySelector(\"#main_galerie\");\n// const photoContainer = document.querySelectorAll(\"photo_container\");\n\nif (mainGallery != null) {\n  fetch(\"../ressources/loading_img.json\").then(function (reponse) {\n    return reponse.json();\n  }).then(function (data) {\n    for (var i = 0; i < data.length; i++) {\n      var p = document.createElement(\"p\");\n      var img = document.createElement(\"img\");\n      switch (data[i].class) {\n        case \"bras\":\n          var brasContainer = document.querySelector(\"#bras\");\n          p.appendChild(img);\n          img.src = data[i].url;\n          brasContainer.appendChild(p);\n          break;\n        case \"jambe\":\n          var jambeContainer = document.querySelector(\"#jambe\");\n          p.appendChild(img);\n          img.src = data[i].url;\n          jambeContainer.appendChild(p);\n          break;\n        case \"visage\":\n          var visageContainer = document.querySelector(\"#visage\");\n          p.appendChild(img);\n          img.src = data[i].url;\n          visageContainer.appendChild(p);\n          break;\n        case \"dessin\":\n          var dessinContainer = document.querySelector(\"#dessin\");\n          p.appendChild(img);\n          img.src = data[i].url;\n          dessinContainer.appendChild(p);\n          break;\n        case \"dos\":\n          var dosContainer = document.querySelector(\"#dos\");\n          p.appendChild(img);\n          img.src = data[i].url;\n          dosContainer.appendChild(p);\n          break;\n        case \"torse\":\n          var torseContainer = document.querySelector(\"#torse\");\n          p.appendChild(img);\n          img.src = data[i].url;\n          torseContainer.appendChild(p);\n          break;\n      }\n    }\n  }).catch(function (error) {\n    return console.error('Erreur de chargement JSON :', error);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js-libs/galerie.js?");

/***/ }),

/***/ "./src/js-libs/mentions_legales.js":
/*!*****************************************!*\
  !*** ./src/js-libs/mentions_legales.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openLegalMentionPanel: () => (/* binding */ openLegalMentionPanel)\n/* harmony export */ });\nfunction openLegalMentionPanel() {\n  var legalMentions = document.querySelectorAll(\"dt\");\n  legalMentions.forEach(function (legalMention) {\n    legalMention.addEventListener(\"click\", function () {\n      var elementHasActive = document.querySelector(\".active\");\n\n      //Verifier qu'on a trouver un élément et que l'élément trouvé n'est pas celui cliqué\n      if (elementHasActive && this !== elementHasActive) {\n        elementHasActive.classList.remove(\"active\");\n      }\n      //clic à nouveau referme\n      this.classList.toggle(\"active\");\n    });\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js-libs/mentions_legales.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_libs_mentions_legales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-libs/mentions_legales.js */ \"./src/js-libs/mentions_legales.js\");\n/* harmony import */ var _js_libs_galerie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-libs/galerie.js */ \"./src/js-libs/galerie.js\");\n/* harmony import */ var _js_libs_galerie_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_libs_galerie_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(0,_js_libs_mentions_legales_js__WEBPACK_IMPORTED_MODULE_1__.openLegalMentionPanel)();\n\n//# sourceURL=webpack://my-webpack-project/./src/script.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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