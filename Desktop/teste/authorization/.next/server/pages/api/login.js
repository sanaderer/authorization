"use strict";
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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/login.js":
/*!********************************!*\
  !*** ./src/pages/api/login.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ \"(api)/./src/pages/utils/helpers.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst clientId = \"e8250f7a89eb4c7a9e9d9573c612d355\";\nconst redirectUri = \"http://localhost:8888/api/callback/\";\nconst stateKey = \"spotify_auth_state\";\nasync function handler(req, res) {\n    const state = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.generateRandomString)(16);\n    res.setHeader(\"Set-Cookie\", (0,cookie__WEBPACK_IMPORTED_MODULE_2__.serialize)(stateKey, state, {\n        path: \"/\",\n        httpOnly: true,\n        maxAge: 60 * 60 * 24\n    }));\n    const scope = \"user-read-private user-read-email user-top-read user-follow-read\";\n    console.log(\"Client ID:\", clientId);\n    console.log(\"Redirect URI:\", redirectUri);\n    res.redirect(\"https://accounts.spotify.com/authorize?\" + querystring__WEBPACK_IMPORTED_MODULE_1___default().stringify({\n        response_type: \"code\",\n        client_id: clientId,\n        scope: scope,\n        redirect_uri: redirectUri,\n        state: state\n    }));\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDWTtBQUNIO0FBQ3FCO0FBRXhELE1BQU1JLFdBQVdDLGtDQUFpQztBQUNsRCxNQUFNRyxjQUFjSCxxQ0FBb0M7QUFDeEQsTUFBTUssV0FBVztBQUVGLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLFFBQVFYLG9FQUFvQkEsQ0FBQztJQUNuQ1UsSUFBSUUsU0FBUyxDQUNYLGNBQ0FiLGlEQUFTQSxDQUFDUSxVQUFVSSxPQUFPO1FBQ3pCRSxNQUFNO1FBQ05DLFVBQVUsSUFBSTtRQUNkQyxRQUFRLEtBQUssS0FBSztJQUNwQjtJQUdGLE1BQU1DLFFBQVE7SUFFZEMsUUFBUUMsR0FBRyxDQUFDLGNBQWNqQjtJQUMxQmdCLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJiO0lBRTdCSyxJQUFJUyxRQUFRLENBQ1YsNENBQ0VyQiw0REFBcUIsQ0FBQztRQUNwQnVCLGVBQWU7UUFDZkMsV0FBV3JCO1FBQ1hlLE9BQU9BO1FBQ1BPLGNBQWNsQjtRQUNkTSxPQUFPQTtJQUNUO0FBRU4sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhvcml6YXRpb24vLi9zcmMvcGFnZXMvYXBpL2xvZ2luLmpzP2VlZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gXCJxdWVyeXN0cmluZ1wiO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSBcImNvb2tpZVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21TdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyc1wiO1xuXG5jb25zdCBjbGllbnRJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9JRDtcbmNvbnN0IHJlZGlyZWN0VXJpID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJO1xuY29uc3Qgc3RhdGVLZXkgPSBcInNwb3RpZnlfYXV0aF9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHN0YXRlID0gZ2VuZXJhdGVSYW5kb21TdHJpbmcoMTYpO1xuICByZXMuc2V0SGVhZGVyKFxuICAgIFwiU2V0LUNvb2tpZVwiLFxuICAgIHNlcmlhbGl6ZShzdGF0ZUtleSwgc3RhdGUsIHtcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCwgLy8gMSBkYXlcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0IHNjb3BlID0gXCJ1c2VyLXJlYWQtcHJpdmF0ZSB1c2VyLXJlYWQtZW1haWwgdXNlci10b3AtcmVhZCB1c2VyLWZvbGxvdy1yZWFkXCI7XG5cbiAgY29uc29sZS5sb2coXCJDbGllbnQgSUQ6XCIsIGNsaWVudElkKTtcbiAgY29uc29sZS5sb2coXCJSZWRpcmVjdCBVUkk6XCIsIHJlZGlyZWN0VXJpKTtcblxuICByZXMucmVkaXJlY3QoXG4gICAgXCJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZT9cIiArXG4gICAgICBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xuICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIixcbiAgICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgICAgc2NvcGU6IHNjb3BlLFxuICAgICAgICByZWRpcmVjdF91cmk6IHJlZGlyZWN0VXJpLFxuICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICB9KVxuICApOyBcbn0gICJdLCJuYW1lcyI6WyJheGlvcyIsInF1ZXJ5c3RyaW5nIiwic2VyaWFsaXplIiwiZ2VuZXJhdGVSYW5kb21TdHJpbmciLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJyZWRpcmVjdFVyaSIsIk5FWFRfUFVCTElDX1JFRElSRUNUX1VSSSIsInN0YXRlS2V5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXRlIiwic2V0SGVhZGVyIiwicGF0aCIsImh0dHBPbmx5IiwibWF4QWdlIiwic2NvcGUiLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3QiLCJzdHJpbmdpZnkiLCJyZXNwb25zZV90eXBlIiwiY2xpZW50X2lkIiwicmVkaXJlY3RfdXJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/login.js\n");

/***/ }),

/***/ "(api)/./src/pages/utils/helpers.js":
/*!************************************!*\
  !*** ./src/pages/utils/helpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateRandomString\": () => (/* binding */ generateRandomString)\n/* harmony export */ });\nfunction generateRandomString(length) {\n    let text = \"\";\n    const possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n    for(let i = 0; i < length; i++){\n        text += possible.charAt(Math.floor(Math.random() * possible.length));\n    }\n    return text;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvdXRpbHMvaGVscGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EscUJBQXFCQyxNQUFNLEVBQUU7SUFDekMsSUFBSUMsT0FBTztJQUNYLE1BQU1DLFdBQ0o7SUFFRixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsUUFBUUcsSUFBSztRQUMvQkYsUUFBUUMsU0FBU0UsTUFBTSxDQUFDQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0wsU0FBU0YsTUFBTTtJQUNwRTtJQUNBLE9BQU9DO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGhvcml6YXRpb24vLi9zcmMvcGFnZXMvdXRpbHMvaGVscGVycy5qcz85YTk4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVN0cmluZyhsZW5ndGgpIHtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgY29uc3QgcG9zc2libGUgPVxuICAgICAgXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiO1xuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG59XG4gIFxuICAiXSwibmFtZXMiOlsiZ2VuZXJhdGVSYW5kb21TdHJpbmciLCJsZW5ndGgiLCJ0ZXh0IiwicG9zc2libGUiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/utils/helpers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/login.js"));
module.exports = __webpack_exports__;

})();