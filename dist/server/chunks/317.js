"use strict";
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createEmotionCache)
/* harmony export */ });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

function createEmotionCache() {
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
        key: "css",
        prepend: true
    });
};


/***/ }),

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Theme */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);


// Create a theme instance.
const Theme = (mode)=>{
    console.log(mode);
    return (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
        palette: {
            primary: {
                main: "#404886",
                dark: "#065a82"
            },
            secondary: {
                main: "#EA5641",
                dark: "#6B6570"
            },
            background: {
                paper: "#FEFFEC",
                default: "#FFFFFF"
            },
            grey: {
                50: "#404886",
                100: "#404886",
                200: "#404886",
                300: "#404886",
                400: "#404886",
                500: "#404886",
                600: "#404886",
                700: "#404886",
                800: "#404886",
                900: "#404886",
                A100: "#404886",
                A200: "#404886",
                A400: "#404886",
                A700: "#404886"
            },
            error: {
                main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
            },
            divider: "#065a82",
            success: {
                main: "#1f0322"
            }
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Theme);


/***/ })

};
;