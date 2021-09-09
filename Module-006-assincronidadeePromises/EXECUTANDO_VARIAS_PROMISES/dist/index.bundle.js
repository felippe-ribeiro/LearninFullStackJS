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

eval("var increaseVelocity = function increaseVelocity(velocityToIncrease) {\n  return new Promise(function (resolve, reject) {\n    if (velocityToIncrease <= 0) {\n      reject(\"Frenagem acionada\");\n    } else {\n      resolve(velocityToIncrease * 0.9);\n    }\n  });\n};\n\nvar newBatteryConsumption = function newBatteryConsumption(currentVelocity, velocityToIncrease) {\n  return new Promise(function (resolve, reject) {\n    var newBatteryConsumption = (currentVelocity + velocityToIncrease) / 10000;\n\n    if (newBatteryConsumption > 0) {\n      resolve(newBatteryConsumption);\n    } else {\n      reject(\"Consumo zerado!\");\n    }\n  });\n};\n\nvar velocity = 70;\nvar velocityIncreased = increaseVelocity(velocity);\nvar batteryConsumption = newBatteryConsumption(80, velocity); //executar as duas promises da variavel de forma atomica, ou passa as duas ou nenhuma, através do método estático de array de objeto de promise\n\nPromise.all([velocityIncreased, batteryConsumption]).then(function (results) {\n  console.log(results);\n})[\"catch\"](function (errors) {\n  console.log(errors);\n});\n\n//# sourceURL=webpack://set_interval_set_timeout/./src/index.js?");

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