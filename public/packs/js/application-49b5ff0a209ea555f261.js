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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/shalashtein/code/Shalashtein/labbesne/app/javascript/packs/application.js: Unexpected token, expected \",\" (159:8)\n\n  157 | //----------------------- Products Swipe UI ----------------------\n  158 | var productSwipe = function(\n> 159 |   config.minThrowOutDistance = 100;\n      |         ^\n  160 |   ){\n  161 |   // Prepare the cards in the stack for iteration.\n  162 | const pcards = [].slice.call(document.querySelectorAll('#products-swipe-card-stack li'));\n    at Parser._raise (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.raise (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.unexpected (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:9101:16)\n    at Parser.expect (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:9087:28)\n    at Parser.parseBindingList (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:9506:14)\n    at Parser.parseFunctionParams (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:12411:24)\n    at Parser.parseFunction (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:12389:10)\n    at Parser.parseFunctionOrFunctionSent (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:10659:17)\n    at Parser.parseExprAtom (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:10495:21)\n    at Parser.parseExprSubscripts (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:9926:21)\n    at /home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:9893:39\n    at Parser.allowInAnd (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:11541:16)\n    at Parser.parseMaybeAssignAllowIn (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:9893:17)\n    at Parser.parseVar (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:12339:70)\n    at Parser.parseVarStatement (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:12151:10)\n    at Parser.parseStatementContent (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:11743:21)\n    at Parser.parseStatement (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Parser.parseTopLevel (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:11607:10)\n    at Parser.parse (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:13415:10)\n    at parse (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/parser/lib/index.js:13468:38)\n    at parser (/home/shalashtein/code/Shalashtein/labbesne/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)");

/***/ })

/******/ });
//# sourceMappingURL=application-49b5ff0a209ea555f261.js.map