"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./theming/useTheme.ts
var useTheme = __webpack_require__(554);
// EXTERNAL MODULE: ./theming/createEmotionCache.ts
var createEmotionCache = __webpack_require__(633);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./components/header.tsx



const LINKS = [
    "Home",
    "About",
    "Contact"
];

const theme = (0,useTheme/* default */.Z)("light");
function Header() {
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(true);
    const { 0: oldScroll , 1: setOldScroll  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", function() {
            if (window.scrollY > oldScroll) {}
            if (window.scrollY <= oldScroll) {
                setVisible(true);
            }
            setOldScroll(window.scrollY);
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        sx: {
            display: "flex",
            transition: "2ms",
            height: "10vh",
            width: "100%",
            background: theme.palette.background.paper,
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            left: 0,
            right: 0,
            top: 0,
            zIndex: 2000
        },
        children: LINKS.map((e, i)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    marginX: "1em"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                    href: e.toLowerCase(),
                    style: {
                        textDecoration: "none"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        sx: {
                            textDecoration: "none",
                            "&:hover": {
                                color: theme.palette.secondary.main,
                                textDecoration: "underline",
                                textDecorationColor: theme.palette.primary.main
                            }
                        },
                        children: e
                    })
                })
            }, `${e}-${i}`);
        })
    });
}

;// CONCATENATED MODULE: ./components/index.ts


;// CONCATENATED MODULE: ./pages/_app.tsx












// Client-side cache shared for the whole session
// of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
const _app_theme = (0,useTheme/* default */.Z)("light");
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps ,  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                theme: _app_theme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            position: "relative",
                            margin: 0,
                            padding: 0,
                            backgroundColor: _app_theme.palette.background.default
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    emotionCache: (external_prop_types_default()).object,
    pageProps: (external_prop_types_default()).object.isRequired
};


/***/ }),

/***/ 913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [317], () => (__webpack_exec__(745)));
module.exports = __webpack_exports__;

})();