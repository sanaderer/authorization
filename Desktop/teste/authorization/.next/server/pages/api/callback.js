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
exports.id = "pages/api/callback";
exports.ids = ["pages/api/callback"];
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

/***/ "(api)/./src/pages/api/callback.js":
/*!***********************************!*\
  !*** ./src/pages/api/callback.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst clientId = \"e8250f7a89eb4c7a9e9d9573c612d355\";\nconst clientSecret = \"d1fd8540b3c64f8a863c07d9afa01c44\";\nconst redirectUri = \"http://localhost:8888/api/callback/\";\nconst stateKey = \"spotify_auth_state\";\nasync function handler(req, res) {\n    const code = req.query.code || null;\n    const state = req.query.state || null;\n    const storedState = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(req.headers.cookie || \"\")[stateKey] || null;\n    if (state === null || state !== storedState) {\n        res.redirect(\"/#\" + querystring__WEBPACK_IMPORTED_MODULE_1___default().stringify({\n            error: \"state_mismatch\"\n        }));\n    } else {\n        try {\n            const tokenResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                method: \"post\",\n                url: \"https://accounts.spotify.com/api/token\",\n                params: {\n                    code: code,\n                    redirect_uri: redirectUri,\n                    grant_type: \"authorization_code\"\n                },\n                headers: {\n                    Authorization: \"Basic \" + Buffer.from(clientId + \":\" + clientSecret).toString(\"base64\"),\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                }\n            });\n            const access_token = tokenResponse.data.access_token;\n            const refresh_token = tokenResponse.data.refresh_token;\n            try {\n                const topArtistsResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n                    method: \"get\",\n                    url: \"https://api.spotify.com/v1/me/top/artists?limit=5\",\n                    headers: {\n                        Authorization: \"Bearer \" + access_token\n                    }\n                });\n                const artistas = topArtistsResponse.data.items.map((item)=>item.name);\n                const tamanho = topArtistsResponse.data.items.length;\n                res.json({\n                    artistas: artistas,\n                    tamanho: tamanho\n                });\n            } catch (error) {\n                console.error(\"Error accessing Spotify Web API:\", error);\n                res.status(500).send({\n                    error: \"Error accessing Spotify Web API\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Error accessing Spotify Web API:\", error.response.data);\n            res.status(500).send({\n                error: \"Error accessing Spotify Web API\",\n                details: error.response.data\n            });\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NhbGxiYWNrLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ1A7QUFFL0IsTUFBTUcsV0FBV0Msa0NBQWlDO0FBQ2xELE1BQU1HLGVBQWVILGtDQUFxQztBQUMxRCxNQUFNSyxjQUFjTCxxQ0FBb0M7QUFDeEQsTUFBTU8sV0FBVztBQUVGLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLE9BQU9GLElBQUlHLEtBQUssQ0FBQ0QsSUFBSSxJQUFJLElBQUk7SUFDbkMsTUFBTUUsUUFBUUosSUFBSUcsS0FBSyxDQUFDQyxLQUFLLElBQUksSUFBSTtJQUNyQyxNQUFNQyxjQUFjaEIsNkNBQUtBLENBQUNXLElBQUlNLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJLEdBQUcsQ0FBQ1QsU0FBUyxJQUFJLElBQUk7SUFFckUsSUFBSU0sVUFBVSxJQUFJLElBQUlBLFVBQVVDLGFBQWE7UUFDM0NKLElBQUlPLFFBQVEsQ0FDVixPQUNFcEIsNERBQXFCLENBQUM7WUFDcEJzQixPQUFPO1FBQ1Q7SUFFTixPQUFPO1FBQ0wsSUFBSTtZQUNGLE1BQU1DLGdCQUFnQixNQUFNeEIsaURBQUtBLENBQUM7Z0JBQ2hDeUIsUUFBUTtnQkFDUkMsS0FBSztnQkFDTEMsUUFBUTtvQkFDTlosTUFBTUE7b0JBQ05hLGNBQWNuQjtvQkFDZG9CLFlBQVk7Z0JBQ2Q7Z0JBQ0FWLFNBQVM7b0JBQ1BXLGVBQ0UsV0FDQUMsT0FBT0MsSUFBSSxDQUFDN0IsV0FBVyxNQUFNSSxjQUFjMEIsUUFBUSxDQUFDO29CQUN0RCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxNQUFNQyxlQUFlVixjQUFjVyxJQUFJLENBQUNELFlBQVk7WUFDcEQsTUFBTUUsZ0JBQWdCWixjQUFjVyxJQUFJLENBQUNDLGFBQWE7WUFFdEQsSUFBSTtnQkFDRixNQUFNQyxxQkFBcUIsTUFBTXJDLGlEQUFLQSxDQUFDO29CQUNyQ3lCLFFBQVE7b0JBQ1JDLEtBQUs7b0JBQ0xQLFNBQVM7d0JBQ1BXLGVBQWUsWUFBWUk7b0JBQzdCO2dCQUNGO2dCQUVBLE1BQU1JLFdBQVdELG1CQUFtQkYsSUFBSSxDQUFDSSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxJQUFJO2dCQUN0RSxNQUFNQyxVQUFVTixtQkFBbUJGLElBQUksQ0FBQ0ksS0FBSyxDQUFDSyxNQUFNO2dCQUVwRDlCLElBQUkrQixJQUFJLENBQUM7b0JBQUVQLFVBQVVBO29CQUFVSyxTQUFTQTtnQkFBUTtZQUNsRCxFQUFFLE9BQU9wQixPQUFPO2dCQUNkdUIsUUFBUXZCLEtBQUssQ0FBQyxvQ0FBb0NBO2dCQUNsRFQsSUFBSWlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUV6QixPQUFPO2dCQUFrQztZQUNsRTtRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkdUIsUUFBUXZCLEtBQUssQ0FBQyxvQ0FBb0NBLE1BQU0wQixRQUFRLENBQUNkLElBQUk7WUFDckVyQixJQUFJaUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJ6QixPQUFPO2dCQUNQMkIsU0FBUzNCLE1BQU0wQixRQUFRLENBQUNkLElBQUk7WUFDOUI7UUFDRjtJQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aG9yaXphdGlvbi8uL3NyYy9wYWdlcy9hcGkvY2FsbGJhY2suanM/ZWQ4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJjb29raWVcIjtcblxuY29uc3QgY2xpZW50SWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQ7XG5jb25zdCBjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfU0VDUkVUO1xuY29uc3QgcmVkaXJlY3RVcmkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRURJUkVDVF9VUkk7XG5jb25zdCBzdGF0ZUtleSA9IFwic3BvdGlmeV9hdXRoX3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgY29kZSA9IHJlcS5xdWVyeS5jb2RlIHx8IG51bGw7XG4gIGNvbnN0IHN0YXRlID0gcmVxLnF1ZXJ5LnN0YXRlIHx8IG51bGw7XG4gIGNvbnN0IHN0b3JlZFN0YXRlID0gcGFyc2UocmVxLmhlYWRlcnMuY29va2llIHx8IFwiXCIpW3N0YXRlS2V5XSB8fCBudWxsO1xuXG4gIGlmIChzdGF0ZSA9PT0gbnVsbCB8fCBzdGF0ZSAhPT0gc3RvcmVkU3RhdGUpIHtcbiAgICByZXMucmVkaXJlY3QoXG4gICAgICBcIi8jXCIgK1xuICAgICAgICBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xuICAgICAgICAgIGVycm9yOiBcInN0YXRlX21pc21hdGNoXCIsXG4gICAgICAgIH0pXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuXCIsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVyaSxcbiAgICAgICAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgICAgIFwiQmFzaWMgXCIgK1xuICAgICAgICAgICAgQnVmZmVyLmZyb20oY2xpZW50SWQgKyBcIjpcIiArIGNsaWVudFNlY3JldCkudG9TdHJpbmcoXCJiYXNlNjRcIiksXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBhY2Nlc3NfdG9rZW4gPSB0b2tlblJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuO1xuICAgICAgY29uc3QgcmVmcmVzaF90b2tlbiA9IHRva2VuUmVzcG9uc2UuZGF0YS5yZWZyZXNoX3Rva2VuO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0b3BBcnRpc3RzUmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS90b3AvYXJ0aXN0cz9saW1pdD01XCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyBhY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYXJ0aXN0YXMgPSB0b3BBcnRpc3RzUmVzcG9uc2UuZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSk7XG4gICAgICAgIGNvbnN0IHRhbWFuaG8gPSB0b3BBcnRpc3RzUmVzcG9uc2UuZGF0YS5pdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgcmVzLmpzb24oeyBhcnRpc3RhczogYXJ0aXN0YXMsIHRhbWFuaG86IHRhbWFuaG8gfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWNjZXNzaW5nIFNwb3RpZnkgV2ViIEFQSTpcIiwgZXJyb3IpO1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IGVycm9yOiBcIkVycm9yIGFjY2Vzc2luZyBTcG90aWZ5IFdlYiBBUElcIiB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFjY2Vzc2luZyBTcG90aWZ5IFdlYiBBUEk6XCIsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoe1xuICAgICAgICBlcnJvcjogXCJFcnJvciBhY2Nlc3NpbmcgU3BvdGlmeSBXZWIgQVBJXCIsXG4gICAgICAgIGRldGFpbHM6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJxdWVyeXN0cmluZyIsInBhcnNlIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCIsInJlZGlyZWN0VXJpIiwiTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIiwic3RhdGVLZXkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29kZSIsInF1ZXJ5Iiwic3RhdGUiLCJzdG9yZWRTdGF0ZSIsImhlYWRlcnMiLCJjb29raWUiLCJyZWRpcmVjdCIsInN0cmluZ2lmeSIsImVycm9yIiwidG9rZW5SZXNwb25zZSIsIm1ldGhvZCIsInVybCIsInBhcmFtcyIsInJlZGlyZWN0X3VyaSIsImdyYW50X3R5cGUiLCJBdXRob3JpemF0aW9uIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiYWNjZXNzX3Rva2VuIiwiZGF0YSIsInJlZnJlc2hfdG9rZW4iLCJ0b3BBcnRpc3RzUmVzcG9uc2UiLCJhcnRpc3RhcyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJ0YW1hbmhvIiwibGVuZ3RoIiwianNvbiIsImNvbnNvbGUiLCJzdGF0dXMiLCJzZW5kIiwicmVzcG9uc2UiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/callback.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/callback.js"));
module.exports = __webpack_exports__;

})();