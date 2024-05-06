"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/room/[id]/page",{

/***/ "(app-pages-browser)/./components/Reservation.tsx":
/*!************************************!*\
  !*** ./components/Reservation.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _barrel_optimize_names_format_isPast_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=format,isPast!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/format.mjs\");\n/* harmony import */ var _barrel_optimize_names_format_isPast_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=format,isPast!=!date-fns */ \"(app-pages-browser)/./node_modules/date-fns/isPast.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Calendar_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Calendar!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/calendar.js\");\n/* harmony import */ var _components_ui_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/calendar */ \"(app-pages-browser)/./components/ui/calendar.tsx\");\n/* harmony import */ var _components_ui_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/popover */ \"(app-pages-browser)/./components/ui/popover.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_AlertMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/AlertMessage */ \"(app-pages-browser)/./components/AlertMessage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst postData = async (url, data)=>{\n    const options = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n    };\n    try {\n        const res = await fetch(url, options);\n        return await res.json();\n    } catch (error) {\n        console.log(error);\n    }\n};\nconst Reservation = (param)=>{\n    let { reservations, room, isUserAuthenticated, userData } = param;\n    _s();\n    const [checkInDate, setCheckInDate] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [checkOutDate, setCheckOutDate] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const [alertMessage, setAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    const formatDateForStrapi = (date)=>{\n        return (0,_barrel_optimize_names_format_isPast_date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(date, \"yyyy-MM-dd\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            setAlertMessage(null);\n        }, 3000);\n        return ()=>clearTimeout(timer);\n    }, [\n        alertMessage\n    ]);\n    const saveReservation = ()=>{\n        if (!checkInDate || !checkOutDate) {\n            setAlertMessage({\n                message: \"Please select dates\",\n                type: \"error\"\n            });\n        }\n        if ((checkInDate === null || checkInDate === void 0 ? void 0 : checkInDate.getTime()) === (checkOutDate === null || checkOutDate === void 0 ? void 0 : checkOutDate.getTime())) {\n            return setAlertMessage({\n                message: \"Check-in and and Check-out cannot be the same\",\n                type: \"error\"\n            });\n        }\n        const data = {\n            data: {\n                firstname: userData.family_name,\n                lastname: \"Green\",\n                email: \"alexgreen@gmail.com\",\n                checkIn: checkInDate ? formatDateForStrapi(checkInDate) : null,\n                checkOut: checkOutDate ? formatDateForStrapi(checkOutDate) : null,\n                room: room.data.id\n            }\n        };\n        postData(\"http://127.0.0.1:1337/api/reservations/\", data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-tertiary h-[320px] mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-accent py-4 text-center relative mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-4xl text-white\",\n                                children: \"Book your room\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute -bottom-[8px] left-[calc(50%_-_10px)] w-0 h-0 border-l-[10px] border-l-transparent border-t-[8px] border-t-accent border-r-[10px] border-r-transparent\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-4 w-full py-6 px-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            variant: \"default\",\n                                            size: \"md\",\n                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"w-full flex justify-start text-left font-semibold\", !checkInDate && \"text-secondary\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                    className: \"mr-2 h-4 w-4\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                checkInDate ? (0,_barrel_optimize_names_format_isPast_date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(checkInDate, \"PPP\") : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Check in\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {\n                                        className: \"w-auto p-0\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_calendar__WEBPACK_IMPORTED_MODULE_3__.Calendar, {\n                                            mode: \"single\",\n                                            selected: checkInDate,\n                                            onSelect: setCheckInDate,\n                                            initialFocus: true,\n                                            disabled: _barrel_optimize_names_format_isPast_date_fns__WEBPACK_IMPORTED_MODULE_9__.isPast\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.Popover, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                            variant: \"default\",\n                                            size: \"md\",\n                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"w-full flex justify-start text-left font-semibold\", !checkOutDate && \"text-secondary\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                    className: \"mr-2 h-4 w-4\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                                    lineNumber: 128,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                checkOutDate ? (0,_barrel_optimize_names_format_isPast_date_fns__WEBPACK_IMPORTED_MODULE_7__.format)(checkOutDate, \"PPP\") : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Check Out\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                                    lineNumber: 132,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {\n                                        className: \"w-auto p-0\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_calendar__WEBPACK_IMPORTED_MODULE_3__.Calendar, {\n                                            mode: \"single\",\n                                            selected: checkOutDate,\n                                            onSelect: setCheckOutDate,\n                                            initialFocus: true,\n                                            disabled: _barrel_optimize_names_format_isPast_date_fns__WEBPACK_IMPORTED_MODULE_9__.isPast\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                            lineNumber: 137,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, undefined),\n                            isUserAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: \"w-full\",\n                                size: \"md\",\n                                onClick: ()=>saveReservation(),\n                                children: \"Book now\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                className: \"w-full\",\n                                size: \"md\",\n                                children: \"Book now\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            alertMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AlertMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                message: alertMessage.message,\n                type: alertMessage.type\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n                lineNumber: 162,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\booky\\\\frontend\\\\components\\\\Reservation.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Reservation, \"YWuaxAMyEy7DTihZ6r7xAcTHoy4=\");\n_c = Reservation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reservation);\nvar _c;\n$RefreshReg$(_c, \"Reservation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVzZXJ2YXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ1M7QUFDTTtBQUNRO0FBQ0o7QUFLbkI7QUFDVztBQUVTO0FBRXJELE1BQU1ZLFdBQVcsT0FBT0MsS0FBYUM7SUFDbkMsTUFBTUMsVUFBVTtRQUNkQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtJQUN2QjtJQUNBLElBQUk7UUFDRixNQUFNTyxNQUFNLE1BQU1DLE1BQU1ULEtBQUtFO1FBQzdCLE9BQU8sTUFBTU0sSUFBSUUsSUFBSTtJQUN2QixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0FBQ0Y7QUFDQSxNQUFNRyxjQUFjO1FBQUMsRUFDbkJDLFlBQVksRUFDWkMsSUFBSSxFQUNKQyxtQkFBbUIsRUFDbkJDLFFBQVEsRUFNVDs7SUFDQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR3ZCLCtDQUFRQTtJQUM5QyxNQUFNLENBQUN3QixjQUFjQyxnQkFBZ0IsR0FBR3pCLCtDQUFRQTtJQUNoRCxNQUFNLENBQUMwQixjQUFjQyxnQkFBZ0IsR0FBRzNCLCtDQUFRQTtJQUloRCxNQUFNNEIsc0JBQXNCLENBQUNDO1FBQzNCLE9BQU90QyxxRkFBTUEsQ0FBQ3NDLE1BQU07SUFDdEI7SUFDQTlCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTStCLFFBQVFDLFdBQVc7WUFDdkJKLGdCQUFnQjtRQUNsQixHQUFHO1FBQ0gsT0FBTyxJQUFNSyxhQUFhRjtJQUM1QixHQUFHO1FBQUNKO0tBQWE7SUFDakIsTUFBTU8sa0JBQWtCO1FBQ3RCLElBQUksQ0FBQ1gsZUFBZSxDQUFDRSxjQUFjO1lBQ2pDRyxnQkFBZ0I7Z0JBQ2RPLFNBQVM7Z0JBQ1RDLE1BQU07WUFDUjtRQUNGO1FBQ0EsSUFBSWIsQ0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFhYyxPQUFPLFNBQU9aLHlCQUFBQSxtQ0FBQUEsYUFBY1ksT0FBTyxLQUFJO1lBQ3RELE9BQU9ULGdCQUFnQjtnQkFDckJPLFNBQVM7Z0JBQ1RDLE1BQU07WUFDUjtRQUNGO1FBQ0EsTUFBTS9CLE9BQU87WUFDWEEsTUFBTTtnQkFDSmlDLFdBQVdoQixTQUFTaUIsV0FBVztnQkFDL0JDLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFNBQVNuQixjQUFjTSxvQkFBb0JOLGVBQWU7Z0JBQzFEb0IsVUFBVWxCLGVBQWVJLG9CQUFvQkosZ0JBQWdCO2dCQUM3REwsTUFBTUEsS0FBS2YsSUFBSSxDQUFDdUMsRUFBRTtZQUNwQjtRQUNGO1FBQ0F6QyxTQUFVLDJDQUEwQ0U7SUFDdEQ7SUFDQSxxQkFDRSw4REFBQ3dDOzswQkFDQyw4REFBQ0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFzQjs7Ozs7OzBDQUNwQyw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFakIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2pELDJEQUFPQTs7a0RBQ04sOERBQUNFLGtFQUFjQTt3Q0FBQ2lELE9BQU87a0RBQ3JCLDRFQUFDdEQseURBQU1BOzRDQUNMdUQsU0FBUTs0Q0FDUkMsTUFBSzs0Q0FDTEosV0FBV3ZELDhDQUFFQSxDQUNYLHFEQUNBLENBQUNnQyxlQUFlOzs4REFHbEIsOERBQUMzQixvRkFBWUE7b0RBQUNrRCxXQUFVOzs7Ozs7Z0RBQ3ZCdkIsY0FDQy9CLHFGQUFNQSxDQUFDK0IsYUFBYSx1QkFFcEIsOERBQUM0Qjs4REFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBSVosOERBQUNyRCxrRUFBY0E7d0NBQUNnRCxXQUFVO2tEQUN4Qiw0RUFBQ25ELDZEQUFRQTs0Q0FDUHlELE1BQUs7NENBQ0xDLFVBQVU5Qjs0Q0FDVitCLFVBQVU5Qjs0Q0FDVitCLFlBQVk7NENBQ1pDLFVBQVUvRCxpRkFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUl0Qiw4REFBQ0ksMkRBQU9BOztrREFDTiw4REFBQ0Usa0VBQWNBO3dDQUFDaUQsT0FBTztrREFDckIsNEVBQUN0RCx5REFBTUE7NENBQ0x1RCxTQUFROzRDQUNSQyxNQUFLOzRDQUNMSixXQUFXdkQsOENBQUVBLENBQ1gscURBQ0EsQ0FBQ2tDLGdCQUFnQjs7OERBR25CLDhEQUFDN0Isb0ZBQVlBO29EQUFDa0QsV0FBVTs7Ozs7O2dEQUN2QnJCLGVBQ0NqQyxxRkFBTUEsQ0FBQ2lDLGNBQWMsdUJBRXJCLDhEQUFDMEI7OERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUlaLDhEQUFDckQsa0VBQWNBO3dDQUFDZ0QsV0FBVTtrREFDeEIsNEVBQUNuRCw2REFBUUE7NENBQ1B5RCxNQUFLOzRDQUNMQyxVQUFVNUI7NENBQ1Y2QixVQUFVNUI7NENBQ1Y2QixZQUFZOzRDQUNaQyxVQUFVL0QsaUZBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFJckI0QixvQ0FDQyw4REFBQzNCLHlEQUFNQTtnQ0FDTG9ELFdBQVU7Z0NBQ1ZJLE1BQUs7Z0NBQ0xPLFNBQVMsSUFBTXZCOzBDQUNoQjs7Ozs7MERBSUQsOERBQUN4Qyx5REFBTUE7Z0NBQUNvRCxXQUFVO2dDQUFTSSxNQUFLOzBDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNMUN2Qiw4QkFDQyw4REFBQ3pCLGdFQUFZQTtnQkFBQ2lDLFNBQVNSLGFBQWFRLE9BQU87Z0JBQUVDLE1BQU1ULGFBQWFTLElBQUk7Ozs7Ozs7Ozs7OztBQUk1RTtHQXZJTWxCO0tBQUFBO0FBeUlOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVzZXJ2YXRpb24udHN4Pzk3ODkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgZm9ybWF0LCBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYWxlbmRhciBhcyBDYWxlbmRhckljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FsZW5kYXJcIjtcbmltcG9ydCB7XG4gIFBvcG92ZXIsXG4gIFBvcG92ZXJDb250ZW50LFxuICBQb3BvdmVyVHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9wb3BvdmVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMb2dpbkxpbmsgfSBmcm9tIFwiQGtpbmRlLW9zcy9raW5kZS1hdXRoLW5leHRqcy9zZXJ2ZXJcIjtcbmltcG9ydCBBbGVydE1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9BbGVydE1lc3NhZ2VcIjtcblxuY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCkgPT4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgfTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcbmNvbnN0IFJlc2VydmF0aW9uID0gKHtcbiAgcmVzZXJ2YXRpb25zLFxuICByb29tLFxuICBpc1VzZXJBdXRoZW50aWNhdGVkLFxuICB1c2VyRGF0YSxcbn06IHtcbiAgcmVzZXJ2YXRpb25zOiBhbnk7XG4gIHJvb206IGFueTtcbiAgaXNVc2VyQXV0aGVudGljYXRlZDogYm9vbGVhbjtcbiAgdXNlckRhdGE6IGFueTtcbn0pID0+IHtcbiAgY29uc3QgW2NoZWNrSW5EYXRlLCBzZXRDaGVja0luRGF0ZV0gPSB1c2VTdGF0ZTxEYXRlPigpO1xuICBjb25zdCBbY2hlY2tPdXREYXRlLCBzZXRDaGVja091dERhdGVdID0gdXNlU3RhdGU8RGF0ZT4oKTtcbiAgY29uc3QgW2FsZXJ0TWVzc2FnZSwgc2V0QWxlcnRNZXNzYWdlXSA9IHVzZVN0YXRlPHtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdHlwZTogXCJlcnJvclwiIHwgXCJzdWNjZXNzXCIgfCBudWxsO1xuICB9IHwgbnVsbD4oKTtcbiAgY29uc3QgZm9ybWF0RGF0ZUZvclN0cmFwaSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgcmV0dXJuIGZvcm1hdChkYXRlLCBcInl5eXktTU0tZGRcIik7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEFsZXJ0TWVzc2FnZShudWxsKTtcbiAgICB9LCAzMDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW2FsZXJ0TWVzc2FnZV0pO1xuICBjb25zdCBzYXZlUmVzZXJ2YXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKCFjaGVja0luRGF0ZSB8fCAhY2hlY2tPdXREYXRlKSB7XG4gICAgICBzZXRBbGVydE1lc3NhZ2Uoe1xuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgZGF0ZXNcIixcbiAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjaGVja0luRGF0ZT8uZ2V0VGltZSgpID09PSBjaGVja091dERhdGU/LmdldFRpbWUoKSkge1xuICAgICAgcmV0dXJuIHNldEFsZXJ0TWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2U6IFwiQ2hlY2staW4gYW5kIGFuZCBDaGVjay1vdXQgY2Fubm90IGJlIHRoZSBzYW1lXCIsXG4gICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBmaXJzdG5hbWU6IHVzZXJEYXRhLmZhbWlseV9uYW1lLFxuICAgICAgICBsYXN0bmFtZTogXCJHcmVlblwiLFxuICAgICAgICBlbWFpbDogXCJhbGV4Z3JlZW5AZ21haWwuY29tXCIsXG4gICAgICAgIGNoZWNrSW46IGNoZWNrSW5EYXRlID8gZm9ybWF0RGF0ZUZvclN0cmFwaShjaGVja0luRGF0ZSkgOiBudWxsLFxuICAgICAgICBjaGVja091dDogY2hlY2tPdXREYXRlID8gZm9ybWF0RGF0ZUZvclN0cmFwaShjaGVja091dERhdGUpIDogbnVsbCxcbiAgICAgICAgcm9vbTogcm9vbS5kYXRhLmlkLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHBvc3REYXRhKGBodHRwOi8vMTI3LjAuMC4xOjEzMzcvYXBpL3Jlc2VydmF0aW9ucy9gLCBkYXRhKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy10ZXJ0aWFyeSBoLVszMjBweF0gbWItNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWFjY2VudCBweS00IHRleHQtY2VudGVyIHJlbGF0aXZlIG1iLTJcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC13aGl0ZVwiPkJvb2sgeW91ciByb29tPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tWzhweF0gbGVmdC1bY2FsYyg1MCVfLV8xMHB4KV0gdy0wIGgtMCBib3JkZXItbC1bMTBweF0gYm9yZGVyLWwtdHJhbnNwYXJlbnQgYm9yZGVyLXQtWzhweF0gYm9yZGVyLXQtYWNjZW50IGJvcmRlci1yLVsxMHB4XSBib3JkZXItci10cmFuc3BhcmVudFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IHctZnVsbCBweS02IHB4LThcIj5cbiAgICAgICAgICA8UG9wb3Zlcj5cbiAgICAgICAgICAgIDxQb3BvdmVyVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgIFwidy1mdWxsIGZsZXgganVzdGlmeS1zdGFydCB0ZXh0LWxlZnQgZm9udC1zZW1pYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgIWNoZWNrSW5EYXRlICYmIFwidGV4dC1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhbGVuZGFySWNvbiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgIHtjaGVja0luRGF0ZSA/IChcbiAgICAgICAgICAgICAgICAgIGZvcm1hdChjaGVja0luRGF0ZSwgXCJQUFBcIilcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q2hlY2sgaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxuICAgICAgICAgICAgPFBvcG92ZXJDb250ZW50IGNsYXNzTmFtZT1cInctYXV0byBwLTBcIj5cbiAgICAgICAgICAgICAgPENhbGVuZGFyXG4gICAgICAgICAgICAgICAgbW9kZT1cInNpbmdsZVwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2NoZWNrSW5EYXRlfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZXRDaGVja0luRGF0ZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsRm9jdXNcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNQYXN0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Qb3BvdmVyQ29udGVudD5cbiAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgPFBvcG92ZXI+XG4gICAgICAgICAgICA8UG9wb3ZlclRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgICBcInctZnVsbCBmbGV4IGp1c3RpZnktc3RhcnQgdGV4dC1sZWZ0IGZvbnQtc2VtaWJvbGRcIixcbiAgICAgICAgICAgICAgICAgICFjaGVja091dERhdGUgJiYgXCJ0ZXh0LXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJY29uIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAge2NoZWNrT3V0RGF0ZSA/IChcbiAgICAgICAgICAgICAgICAgIGZvcm1hdChjaGVja091dERhdGUsIFwiUFBQXCIpXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNoZWNrIE91dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvUG9wb3ZlclRyaWdnZXI+XG4gICAgICAgICAgICA8UG9wb3ZlckNvbnRlbnQgY2xhc3NOYW1lPVwidy1hdXRvIHAtMFwiPlxuICAgICAgICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICAgICAgICBtb2RlPVwic2luZ2xlXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17Y2hlY2tPdXREYXRlfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtzZXRDaGVja091dERhdGV9XG4gICAgICAgICAgICAgICAgaW5pdGlhbEZvY3VzXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzUGFzdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUG9wb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgIHtpc1VzZXJBdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzYXZlUmVzZXJ2YXRpb24oKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQm9vayBub3dcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIHNpemU9XCJtZFwiPlxuICAgICAgICAgICAgICBCb29rIG5vd1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthbGVydE1lc3NhZ2UgJiYgKFxuICAgICAgICA8QWxlcnRNZXNzYWdlIG1lc3NhZ2U9e2FsZXJ0TWVzc2FnZS5tZXNzYWdlfSB0eXBlPXthbGVydE1lc3NhZ2UudHlwZX0gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbjtcbiJdLCJuYW1lcyI6WyJjbiIsImZvcm1hdCIsImlzUGFzdCIsIkJ1dHRvbiIsIkNhbGVuZGFyIiwiQ2FsZW5kYXJJY29uIiwiUG9wb3ZlciIsIlBvcG92ZXJDb250ZW50IiwiUG9wb3ZlclRyaWdnZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFsZXJ0TWVzc2FnZSIsInBvc3REYXRhIiwidXJsIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJSZXNlcnZhdGlvbiIsInJlc2VydmF0aW9ucyIsInJvb20iLCJpc1VzZXJBdXRoZW50aWNhdGVkIiwidXNlckRhdGEiLCJjaGVja0luRGF0ZSIsInNldENoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwic2V0Q2hlY2tPdXREYXRlIiwiYWxlcnRNZXNzYWdlIiwic2V0QWxlcnRNZXNzYWdlIiwiZm9ybWF0RGF0ZUZvclN0cmFwaSIsImRhdGUiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzYXZlUmVzZXJ2YXRpb24iLCJtZXNzYWdlIiwidHlwZSIsImdldFRpbWUiLCJmaXJzdG5hbWUiLCJmYW1pbHlfbmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJjaGVja0luIiwiY2hlY2tPdXQiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiYXNDaGlsZCIsInZhcmlhbnQiLCJzaXplIiwic3BhbiIsIm1vZGUiLCJzZWxlY3RlZCIsIm9uU2VsZWN0IiwiaW5pdGlhbEZvY3VzIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Reservation.tsx\n"));

/***/ })

});