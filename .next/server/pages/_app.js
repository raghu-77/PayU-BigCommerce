/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/session.tsx":
/*!*****************************!*\
  !*** ./context/session.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SessionProvider: () => (/* binding */ SessionProvider),\n/* harmony export */   useQuery: () => (/* binding */ useQuery),\n/* harmony export */   useSession: () => (/* binding */ useSession)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst SessionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction useSession() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SessionContext);\n}\nfunction SessionProvider({ children }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [lastInteractionTime, setLastInteractionTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Date.now());\n    const sessionTimeout = 24 * 60 * 60 * 1000; // 24 hours\n    const inactivityTimeout = 30 * 60 * 1000; // 30 minutes \n    // Update last interaction time on any user interaction\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const updateLastInteractionTime = ()=>{\n            setLastInteractionTime(Date.now());\n        };\n        const events = [\n            \"mousemove\",\n            \"keydown\",\n            \"click\"\n        ];\n        for (const event of events){\n            window.addEventListener(event, updateLastInteractionTime);\n        }\n        return ()=>{\n            for (const event of events){\n                window.removeEventListener(event, updateLastInteractionTime);\n            }\n        };\n    }, []);\n    // Redirect to error page if inactive for more than inactivityTimeout\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkInactivity = ()=>{\n            if (Date.now() - lastInteractionTime > inactivityTimeout) {\n                router.push(\"/sessionerror\");\n            }\n        };\n        const interval = setInterval(checkInactivity, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        lastInteractionTime,\n        inactivityTimeout,\n        router\n    ]);\n    // Redirect to error page after sessionTimeout\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const sessionTimeoutId = setTimeout(()=>{\n            router.push(\"/sessionerror\");\n        }, sessionTimeout);\n        return ()=>clearTimeout(sessionTimeoutId);\n    }, [\n        sessionTimeout,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SessionContext.Provider, {\n        value: {},\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/context/session.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\nfunction useQuery() {\n    const [searchParams] = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    return searchParams;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3Nlc3Npb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUMvQjtBQUNVO0FBR2xELE1BQU1NLCtCQUFpQk4sb0RBQWFBLENBQUMsQ0FBQztBQUUvQixTQUFTTztJQUNkLE9BQU9OLGlEQUFVQSxDQUFDSztBQUNwQjtBQUVPLFNBQVNFLGdCQUFnQixFQUFFQyxRQUFRLEVBQUU7SUFDMUMsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ08scUJBQXFCQyx1QkFBdUIsR0FBR1QsK0NBQVFBLENBQUNVLEtBQUtDLEdBQUc7SUFDdkUsTUFBTUMsaUJBQWlCLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVztJQUN2RCxNQUFNQyxvQkFBb0IsS0FBSyxLQUFLLE1BQU0sY0FBYztJQUV4RCx1REFBdUQ7SUFDdkRkLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsNEJBQTRCO1lBQ2hDTCx1QkFBdUJDLEtBQUtDLEdBQUc7UUFDakM7UUFFQSxNQUFNSSxTQUFTO1lBQUM7WUFBYTtZQUFXO1NBQVE7UUFFaEQsS0FBSyxNQUFNQyxTQUFTRCxPQUFRO1lBQzFCRSxPQUFPQyxnQkFBZ0IsQ0FBQ0YsT0FBT0Y7UUFDakM7UUFFQSxPQUFPO1lBQ0wsS0FBSyxNQUFNRSxTQUFTRCxPQUFRO2dCQUMxQkUsT0FBT0UsbUJBQW1CLENBQUNILE9BQU9GO1lBQ3BDO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxxRUFBcUU7SUFDckVmLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXFCLGtCQUFrQjtZQUN0QixJQUFJVixLQUFLQyxHQUFHLEtBQUtILHNCQUFzQkssbUJBQW1CO2dCQUN4RE4sT0FBT2MsSUFBSSxDQUFDO1lBQ2Q7UUFDRjtRQUVBLE1BQU1DLFdBQVdDLFlBQVlILGlCQUFpQjtRQUU5QyxPQUFPLElBQU1JLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ2Q7UUFBcUJLO1FBQW1CTjtLQUFPO0lBRW5ELDhDQUE4QztJQUM5Q1IsZ0RBQVNBLENBQUM7UUFDUixNQUFNMEIsbUJBQW1CQyxXQUFXO1lBQ2xDbkIsT0FBT2MsSUFBSSxDQUFDO1FBQ2QsR0FBR1Q7UUFFSCxPQUFPLElBQU1lLGFBQWFGO0lBQzVCLEdBQUc7UUFBQ2I7UUFBZ0JMO0tBQU87SUFFM0IscUJBQ0UsOERBQUNKLGVBQWV5QixRQUFRO1FBQUNDLE9BQU8sQ0FBQztrQkFDOUJ2Qjs7Ozs7O0FBR1A7QUFFTyxTQUFTd0I7SUFDZCxNQUFNLENBQUNDLGFBQWEsR0FBRzdCLGdFQUFlQTtJQUV0QyxPQUFPNkI7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cHJlc3MtYXBwLy4vY29udGV4dC9zZXNzaW9uLnRzeD9hYjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5cbmNvbnN0IFNlc3Npb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXNzaW9uKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXNzaW9uUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbGFzdEludGVyYWN0aW9uVGltZSwgc2V0TGFzdEludGVyYWN0aW9uVGltZV0gPSB1c2VTdGF0ZShEYXRlLm5vdygpKTtcbiAgY29uc3Qgc2Vzc2lvblRpbWVvdXQgPSAyNCAqIDYwICogNjAgKiAxMDAwOyAvLyAyNCBob3Vyc1xuICBjb25zdCBpbmFjdGl2aXR5VGltZW91dCA9IDMwICogNjAgKiAxMDAwOyAvLyAzMCBtaW51dGVzIFxuXG4gIC8vIFVwZGF0ZSBsYXN0IGludGVyYWN0aW9uIHRpbWUgb24gYW55IHVzZXIgaW50ZXJhY3Rpb25cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVMYXN0SW50ZXJhY3Rpb25UaW1lID0gKCkgPT4ge1xuICAgICAgc2V0TGFzdEludGVyYWN0aW9uVGltZShEYXRlLm5vdygpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXZlbnRzID0gWydtb3VzZW1vdmUnLCAna2V5ZG93bicsICdjbGljayddO1xuXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB1cGRhdGVMYXN0SW50ZXJhY3Rpb25UaW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHVwZGF0ZUxhc3RJbnRlcmFjdGlvblRpbWUpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBSZWRpcmVjdCB0byBlcnJvciBwYWdlIGlmIGluYWN0aXZlIGZvciBtb3JlIHRoYW4gaW5hY3Rpdml0eVRpbWVvdXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjaGVja0luYWN0aXZpdHkgPSAoKSA9PiB7XG4gICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RJbnRlcmFjdGlvblRpbWUgPiBpbmFjdGl2aXR5VGltZW91dCkge1xuICAgICAgICByb3V0ZXIucHVzaCgnL3Nlc3Npb25lcnJvcicpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGNoZWNrSW5hY3Rpdml0eSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtsYXN0SW50ZXJhY3Rpb25UaW1lLCBpbmFjdGl2aXR5VGltZW91dCwgcm91dGVyXSk7XG5cbiAgLy8gUmVkaXJlY3QgdG8gZXJyb3IgcGFnZSBhZnRlciBzZXNzaW9uVGltZW91dFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlc3Npb25UaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKCcvc2Vzc2lvbmVycm9yJyk7XG4gICAgfSwgc2Vzc2lvblRpbWVvdXQpO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChzZXNzaW9uVGltZW91dElkKTtcbiAgfSwgW3Nlc3Npb25UaW1lb3V0LCByb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e319PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2Vzc2lvbkNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWVyeSgpIHtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuICByZXR1cm4gc2VhcmNoUGFyYW1zO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiU2Vzc2lvbkNvbnRleHQiLCJ1c2VTZXNzaW9uIiwiU2Vzc2lvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJsYXN0SW50ZXJhY3Rpb25UaW1lIiwic2V0TGFzdEludGVyYWN0aW9uVGltZSIsIkRhdGUiLCJub3ciLCJzZXNzaW9uVGltZW91dCIsImluYWN0aXZpdHlUaW1lb3V0IiwidXBkYXRlTGFzdEludGVyYWN0aW9uVGltZSIsImV2ZW50cyIsImV2ZW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGVja0luYWN0aXZpdHkiLCJwdXNoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXNzaW9uVGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VRdWVyeSIsInNlYXJjaFBhcmFtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/session.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alertsManager: () => (/* binding */ alertsManager),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/big-design */ \"@bigcommerce/big-design\");\n/* harmony import */ var _bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/session */ \"./context/session.tsx\");\n\n\n\n\n\nconst alertsManager = (0,_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__.createAlertsManager)();\nconst MyApp = ({ Component, pageProps })=>{\n    // disable right click inside app\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleContextMenu = (event)=>{\n            event.preventDefault();\n        };\n        document.addEventListener(\"contextmenu\", handleContextMenu);\n        return ()=>{\n            document.removeEventListener(\"contextmenu\", handleContextMenu);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__.GlobalStyles, {}, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bigcommerce_big_design__WEBPACK_IMPORTED_MODULE_1__.AlertsManager, {\n                manager: alertsManager\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_session__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/_app.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/raghu/Marmeto/Bigcommerce/payu-bigcommerce/pages/_app.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkY7QUFFbEQ7QUFDWDtBQUN1QjtBQUU5QyxNQUFNTSxnQkFBZ0JKLDRFQUFtQkEsR0FBRztBQUVuRCxNQUFNSyxRQUFRLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFFN0MsaUNBQWlDO0lBQ2pDTCxnREFBU0EsQ0FBQztRQUNOLE1BQU1NLG9CQUFvQixDQUFDQztZQUN6QkEsTUFBTUMsY0FBYztRQUN0QjtRQUVBQyxTQUFTQyxnQkFBZ0IsQ0FBQyxlQUFlSjtRQUV6QyxPQUFPO1lBQ0xHLFNBQVNFLG1CQUFtQixDQUFDLGVBQWVMO1FBQzlDO0lBQ0YsR0FBRyxFQUFFO0lBRVAscUJBQ0k7OzBCQUNJLDhEQUFDVixpRUFBWUE7Ozs7OzBCQUNiLDhEQUFDQyxrRUFBYUE7Z0JBQUNlLFNBQVNWOzs7Ozs7MEJBQ3hCLDhEQUFDRCw2REFBZUE7MEJBQ1osNEVBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJeEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cHJlc3MtYXBwLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxTdHlsZXMsIEFsZXJ0c01hbmFnZXIsIGNyZWF0ZUFsZXJ0c01hbmFnZXIgfSBmcm9tICdAYmlnY29tbWVyY2UvYmlnLWRlc2lnbic7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9zZXNzaW9uJztcblxuZXhwb3J0IGNvbnN0IGFsZXJ0c01hbmFnZXIgPSBjcmVhdGVBbGVydHNNYW5hZ2VyKCk7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcbiAgICBcbiAgICAvLyBkaXNhYmxlIHJpZ2h0IGNsaWNrIGluc2lkZSBhcHBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVDb250ZXh0TWVudSA9IChldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgaGFuZGxlQ29udGV4dE1lbnUpO1xuICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgaGFuZGxlQ29udGV4dE1lbnUpO1xuICAgICAgICB9O1xuICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgICAgICAgIDxBbGVydHNNYW5hZ2VyIG1hbmFnZXI9e2FsZXJ0c01hbmFnZXJ9IC8+XG4gICAgICAgICAgICA8U2Vzc2lvblByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiR2xvYmFsU3R5bGVzIiwiQWxlcnRzTWFuYWdlciIsImNyZWF0ZUFsZXJ0c01hbmFnZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsIlNlc3Npb25Qcm92aWRlciIsImFsZXJ0c01hbmFnZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImhhbmRsZUNvbnRleHRNZW51IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYW5hZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@bigcommerce/big-design":
/*!******************************************!*\
  !*** external "@bigcommerce/big-design" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@bigcommerce/big-design");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();