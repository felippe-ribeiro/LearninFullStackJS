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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spaceship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship */ \"./src/spaceship.js\");\n/* harmony import */ var _spaceship_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spaceship_engine */ \"./src/spaceship_engine.js\");\n\n\nvar sophia = new _spaceship__WEBPACK_IMPORTED_MODULE_0__.default(\"Sophia\", 10, 5);\nvar amsterda = new _spaceship__WEBPACK_IMPORTED_MODULE_0__.default(\"Amsterdã\", 14, 10);\nvar dwarfStart = new _spaceship__WEBPACK_IMPORTED_MODULE_0__.default(\"Estrela-Anã\", 20, 4);\nvar sophiaEngine = new _spaceship_engine__WEBPACK_IMPORTED_MODULE_1__.default(sophia);\nvar amsterdaEngine = new _spaceship_engine__WEBPACK_IMPORTED_MODULE_1__.default(amsterda);\nvar dwarfStartEngine = new _spaceship_engine__WEBPACK_IMPORTED_MODULE_1__.default(dwarfStart);\nsophiaEngine.turnOn();\namsterdaEngine.turnOn();\ndwarfStartEngine.turnOn();\nconsole.log(\"Promises\");\n\n//# sourceURL=webpack://set_interval_set_timeout/./src/index.js?");

/***/ }),

/***/ "./src/spaceship.js":
/*!**************************!*\
  !*** ./src/spaceship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Spaceship = /*#__PURE__*/function () {\n  function Spaceship(name, maxCapacity, currentCharge) {\n    _classCallCheck(this, Spaceship);\n\n    this.name = name;\n    this.maxCapacity = maxCapacity;\n    this.currentChage = currentCharge;\n  }\n\n  _createClass(Spaceship, [{\n    key: \"currentPercentCharge\",\n    value: function currentPercentCharge() {\n      return this.currentChage * 100 / this.maxCapacity;\n    }\n  }]);\n\n  return Spaceship;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spaceship);\n\n//# sourceURL=webpack://set_interval_set_timeout/./src/spaceship.js?");

/***/ }),

/***/ "./src/spaceship_engine.js":
/*!*********************************!*\
  !*** ./src/spaceship_engine.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _default = /*#__PURE__*/function () {\n  function _default(spaceship) {\n    _classCallCheck(this, _default);\n\n    this.spaceship = spaceship;\n  }\n\n  _createClass(_default, [{\n    key: \"turnOn\",\n    value: function turnOn() {\n      var _this = this;\n\n      this.checkCurrentCharge().then(function (currentCharge) {\n        console.log(\"(\".concat(_this.spaceship.name, \") Partida autorizada: carga atual em \").concat(currentCharge, \"%.\"));\n      })[\"catch\"](function (currentCharge) {\n        console.log(\"(\".concat(_this.spaceship.name, \") Partida n\\xE3o autorizada: carga em apenas \").concat(currentCharge, \"%.\"));\n      });\n    }\n  }, {\n    key: \"checkCurrentCharge\",\n    value: function checkCurrentCharge() {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        var currentCharge = _this2.spaceship.currentPercentCharge();\n\n        if (currentCharge >= 30) {\n          resolve(currentCharge);\n        } else {\n          reject(currentCharge);\n        }\n      });\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://set_interval_set_timeout/./src/spaceship_engine.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;