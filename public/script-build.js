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

/***/ "./src/js-libs/footer.js":
/*!*******************************!*\
  !*** ./src/js-libs/footer.js ***!
  \*******************************/
/***/ (() => {

eval("// FOOTER\nvar generalFooter = document.querySelector(\"footer\");\n\n//create link legal mentions\nvar pMentions = document.createElement(\"p\");\nvar aMentions = document.createElement(\"a\");\naMentions.href = \"./mentions_legales.html\";\naMentions.classList.add(\"link_page\");\nvar aMentionsContent = document.createTextNode(\"Mentions Légales\");\n//insert legal mentions\ngeneralFooter.appendChild(pMentions);\npMentions.appendChild(aMentions);\naMentions.appendChild(aMentionsContent);\n\n//create copyright\nvar pCopyright = document.createElement(\"p\");\nvar aCopyright = document.createElement(\"a\");\naCopyright.href = \"./index.html\";\naCopyright.classList.add(\"link_page\");\nvar spanCopyright = document.createElement(\"span\");\nvar aCopyrightContent1 = document.createTextNode(\"Tatoueur À mes Heures\");\nvar aCopyrightContent2 = document.createTextNode(\" \\xA9 2023\");\n//insert copyright\ngeneralFooter.appendChild(pCopyright);\npCopyright.appendChild(aCopyright);\naCopyright.appendChild(spanCopyright);\nspanCopyright.appendChild(aCopyrightContent1);\npCopyright.appendChild(aCopyrightContent2);\n\n//create div social media\nvar divSocial = document.createElement(\"div\");\ndivSocial.classList.add(\"social_media\");\n//insert social media\ngeneralFooter.appendChild(divSocial);\n\n//create facebook\nvar pFacebook = document.createElement(\"p\");\npFacebook.classList.add(\"facebook\");\nvar aFacebook = document.createElement(\"a\");\naFacebook.href = \"https://www.facebook.com\";\naFacebook.classList.add(\"link_page\");\nvar iFacebook = document.createElement(\"img\");\niFacebook.src = \"./ressources/images/logos/logos_25x25.webp\";\niFacebook.alt = \"Logo Facebook, liens vers les réseaux sociaux https://www.facebook.com\";\n//insert facebook\ndivSocial.appendChild(pFacebook);\npFacebook.appendChild(aFacebook);\naFacebook.appendChild(iFacebook);\n//create instagram\nvar pInstagram = document.createElement(\"p\");\npInstagram.classList.add(\"instagram\");\nvar aInstagram = document.createElement(\"a\");\naInstagram.href = \"https://www.instagram.com\";\naInstagram.classList.add(\"link_page\");\nvar iInstagram = document.createElement(\"img\");\niInstagram.src = \"./ressources/images/logos/logos_25x25.webp\";\niInstagram.alt = \"Logo Instagram, liens vers les réseaux sociaux https://www.instagram.com\";\n//insert instagram\ndivSocial.appendChild(pInstagram);\npInstagram.appendChild(aInstagram);\naInstagram.appendChild(iInstagram);\n\n//# sourceURL=webpack://my-webpack-project/./src/js-libs/footer.js?");

/***/ }),

/***/ "./src/js-libs/header.js":
/*!*******************************!*\
  !*** ./src/js-libs/header.js ***!
  \*******************************/
/***/ (() => {

eval("var currentPage = document.querySelector(\"body\");\n\n//HEADER CREATE\n//create header and nav\nvar navHeader = document.createElement(\"nav\");\nvar generalHeader = document.querySelector(\"header\");\n\n// create logo and link\nvar pLogo = document.createElement(\"p\");\nvar aLogo = document.createElement(\"a\");\naLogo.href = \"./index.html\";\naLogo.classList.add(\"link_page\");\nvar iLogo = document.createElement(\"img\");\niLogo.src = \"./ressources/images/logos/logo_entreprise_100x80.webp\";\niLogo.alt = \"Logo Tatoueur À mes Heures\";\niLogo.style.width = \"100px\";\niLogo.style.height = \"80px\";\n//insert logo\nnavHeader.appendChild(pLogo);\npLogo.appendChild(aLogo);\naLogo.appendChild(iLogo);\n\n//create menu\n//accueil\nvar divMenu = document.createElement(\"div\");\nvar pIndex = document.createElement(\"p\");\nvar aIndex = document.createElement(\"a\");\naIndex.href = \"./index.html\";\naIndex.classList.add(\"link_page\");\naIndex.classList.add(\"current_page\");\nvar aIndexContent = document.createTextNode(\"Accueil\");\n//contact\nvar pContact = document.createElement(\"p\");\nvar aContact = document.createElement(\"a\");\naContact.href = \"./index.html#contact\";\naContact.classList.add(\"link_page\");\nvar aContactContent = document.createTextNode(\"Contact\");\n//galerie\nvar pGalerie = document.createElement(\"p\");\nvar aGalerie = document.createElement(\"a\");\naGalerie.href = \"./galerie.html\";\naGalerie.classList.add(\"link_page\");\nvar aGalerieContent = document.createTextNode(\"Galerie\");\n//insert menu\nnavHeader.appendChild(divMenu);\n//accueil\ndivMenu.appendChild(pIndex);\npIndex.appendChild(aIndex);\naIndex.appendChild(aIndexContent);\n//contact\ndivMenu.appendChild(pContact);\npContact.appendChild(aContact);\naContact.appendChild(aContactContent);\n//galerie\ndivMenu.appendChild(pGalerie);\npGalerie.appendChild(aGalerie);\naGalerie.appendChild(aGalerieContent);\n\n//insert nav in header\ngeneralHeader.appendChild(navHeader);\n\n//HEADER ACTION\n\n// underline current page\nif (currentPage.id == \"accueil\") {\n  aIndex.classList.add(\"current_page\");\n  aGalerie.classList.remove(\"current_page\");\n} else if (currentPage.id == \"galerie\") {\n  aIndex.classList.remove(\"current_page\");\n  aGalerie.classList.add(\"current_page\");\n} else {\n  aIndex.classList.remove(\"current_page\");\n  aGalerie.classList.remove(\"current_page\");\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/js-libs/header.js?");

/***/ }),

/***/ "./src/js-libs/transition.js":
/*!***********************************!*\
  !*** ./src/js-libs/transition.js ***!
  \***********************************/
/***/ (() => {

eval("//TRANSITION BETWEEN PAGES MAIN AND MENTIONS\nvar body = document.querySelector('body');\nvar linkPage = document.querySelector(\".link_page\");\nvar hrefLink;\nif (linkPage != null) {\n  linkPage.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    hrefLink = evt.target.tagName == \"IMG\" ? evt.target.parentElement.href : evt.target.href;\n    body.classList.add(\"transition_out\");\n    body.classList.remove(\"transition_in\");\n  });\n}\ndocument.addEventListener(\"DOMContentLoaded\", function (evt) {\n  body.classList.remove(\"transition_out\");\n  body.classList.add(\"transition_in\");\n});\nbody.addEventListener(\"transitionend\", function () {\n  if (body.classList.contains(\"transition_out\")) {\n    window.location.href = hrefLink;\n  }\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/js-libs/transition.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_libs_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-libs/header.js */ \"./src/js-libs/header.js\");\n/* harmony import */ var _js_libs_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_libs_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_libs_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-libs/footer.js */ \"./src/js-libs/footer.js\");\n/* harmony import */ var _js_libs_footer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_libs_footer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_libs_transition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-libs/transition.js */ \"./src/js-libs/transition.js\");\n/* harmony import */ var _js_libs_transition_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_libs_transition_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/script.js?");

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