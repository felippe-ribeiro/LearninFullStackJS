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

eval("// estados promises\n\n/*\r\nPendente: Quando é criada e não foi executada // status inicial\r\nRealizada: Quando teve sucesso na operação\r\nRecusada: Quando teve falha na operação\r\nEstabelecida: Quando foi realizada ou recusada\r\n\r\nnos decidimos se será realizada ou recusada\r\n*/\nvar komodoShip = {\n  name: \"Komodo\",\n  velocity: 80,\n  acceleration: 0\n};\n\nvar velocityAfter2Seconds = function velocityAfter2Seconds(velocity, acceleration) {\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      if (acceleration > 0) {\n        velocity += acceleration * 2;\n        console.log(\"Nova velocidade: \".concat(velocity));\n        resolve(velocity);\n      } else {\n        console.log(\"Aceleração Inválida\");\n        reject(\"Não possui aceleração\");\n      }\n    }, 1000);\n  });\n};\n\nvelocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(function (velocity) {\n  // essa função anonima do then recebe justamente o retorno do resolve\n  komodoShip.velocity = velocity;\n  console.log(\"Depois de acelerar:\\n\", komodoShip);\n})[\"catch\"](function (message) {\n  console.log(\"Komodo: \".concat(message));\n});\nconsole.log(\"Execução de Promises\");\nconsole.log(komodoShip);\n\n//# sourceURL=webpack://set_interval_set_timeout/./src/index.js?");

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