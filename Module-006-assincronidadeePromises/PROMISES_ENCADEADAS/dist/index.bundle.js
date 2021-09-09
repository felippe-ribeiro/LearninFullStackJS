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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var spaceship = {\n  name: \"Rontaro\",\n  currentBateryCharge: 50,\n  consumptionPerKms: 0.00008\n};\n\nvar updateBateryCharge = function updateBateryCharge(chargeConsumed) {\n  return new Promise(function (resolve, reject) {\n    spaceship.currentBateryCharge -= chargeConsumed;\n\n    if (spaceship.currentBateryCharge > 0) {\n      resolve(spaceship.currentBateryCharge);\n    } else {\n      reject(\"Bateria esgotada! Nave será desativada em alguns segundos.\");\n    }\n  });\n};\n\nvar calculateBateryConsumption = function calculateBateryConsumption(velocity, seconds) {\n  return new Promise(function (resolve, reject) {\n    if (spaceship.consumptionPerKms <= 0 || velocity <= 0) {\n      reject(\"Nave está parada!\");\n    } else {\n      var chargeConsumed = spaceship.consumptionPerKms * velocity * seconds;\n      resolve(chargeConsumed);\n    }\n  });\n};\n\ncalculateBateryConsumption(0, 300).then(function (chargeConsumed) {\n  return updateBateryCharge(chargeConsumed);\n}).then(function (newCharge) {\n  console.log(\"Carga Atual: \".concat(newCharge));\n})[\"catch\"](function (error) {\n  // esse catch captura qualquer erro que seja dado em qualquer promise\n  console.log(error);\n});\n\n//# sourceURL=webpack://set_interval_set_timeout/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;