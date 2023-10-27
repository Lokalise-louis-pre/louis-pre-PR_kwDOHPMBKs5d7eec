(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[179],{"./.storybook/stories lazy recursive ^\\.\\/.*$ include: (?:\\/\\.storybook\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./overview/advanced-usage.mdx":["./.storybook/stories/overview/advanced-usage.mdx",8835],"./overview/changelog.mdx":["./.storybook/stories/overview/changelog.mdx",536],"./overview/intro.mdx":["./.storybook/stories/overview/intro.mdx",9590],"./overview/testing.mdx":["./.storybook/stories/overview/testing.mdx",1583]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./.storybook/stories lazy recursive ^\\.\\/.*$ include: (?:\\/\\.storybook\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,decorators:()=>decorators,parameters:()=>parameters});var dist=__webpack_require__("./node_modules/@storybook/addon-styling/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),theme=__webpack_require__("./src/utils/theme/index.ts"),themes=__webpack_require__("./src/foundations/themes/index.ts"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme_autopilot_light=__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/theme-autopilot-light.js"),theme_autopilot_dark=__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/theme-autopilot-dark.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/css/theme-lokalise-light.css"),__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/css/theme-lokalise-dark.css"),__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/css/theme-autopilot-light.css"),__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/css/theme-autopilot-dark.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),preview=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.storybook/static/styles/preview/index.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(preview.Z,options);preview.Z&&preview.Z.locals&&preview.Z.locals;var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GlobalStyles=(0,styled_components_browser_esm.vJ)(["body.sb-show-main{background-color:"," !important;}.docs-story{background-color:",";color:",";}#storybook-root{color:",";}"],(0,theme.S3)("color.background.surface.default"),(0,theme.S3)("color.background.surface.default"),(0,theme.S3)("color.text.default"),(0,theme.S3)("color.text.default")),storybookThemes={"Lokalise (light)":{providerTheme:themes.n.light,cssModulesTheme:"lokalise-light"},"Lokalise (dark)":{providerTheme:themes.n.dark,cssModulesTheme:"lokalise-dark"},"LAP (light)":{providerTheme:theme_autopilot_light.r,cssModulesTheme:"autopilot-light"},"LAP (dark)":{providerTheme:theme_autopilot_dark.r,cssModulesTheme:"autopilot-dark"}},decorators=[(({themes,defaultTheme,attributeName,Provider,GlobalStyles})=>{const themeNames=Object.keys(themes);return dist.BZ.initializeThemeState(themeNames,defaultTheme),(storyFn,context)=>{const{themeOverride}=dist.BZ.useThemeParameters(),selected=dist.BZ.pluckThemeFromContext(context);(0,react.useEffect)((()=>{const parentElement=document.querySelector("html"),themeKey=themeOverride||selected||defaultTheme;parentElement.setAttribute(attributeName,themes[themeKey].cssModulesTheme)}),[themeOverride,selected,attributeName]);const theme=themes[themeOverride||selected||defaultTheme].providerTheme;return(0,jsx_runtime.jsxs)(Provider,{theme,children:[GlobalStyles&&(0,jsx_runtime.jsx)(GlobalStyles,{}),storyFn()]})}})({themes:storybookThemes,defaultTheme:"Lokalise (light)",attributeName:"data-theme",Provider:ThemeProvider.f,GlobalStyles})],parameters={options:{storySort:{method:"alphabetical",order:["Overview",["Intro","Changelog","Theming","Testing","Advanced Usage"],"Foundations",["ThemeProvider","Design Tokens","Icons"],"Components"]}},actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},previewTabs:{canvas:{hidden:!1,title:"Playground"}},viewMode:"docs",backgrounds:{disable:!0},docs:{container:props=>{const{context}=props,themeName=context.store.globals.globals.theme||"Lokalise (light)";return(0,jsx_runtime.jsx)(ThemeProvider.f,{theme:storybookThemes[themeName].providerTheme,children:(0,jsx_runtime.jsx)(blocks_dist.Zu,{...props})})}}},__namedExportsOrder=["decorators","parameters"]},"./src/components/ThemeProvider/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>ThemeProvider});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const ThemeProvider=({theme,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.f6,{theme,children});ThemeProvider.displayName="ThemeProvider";try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{theme:{defaultValue:null,description:"Theme to use for styling components.",name:"theme",required:!0,type:{name:"ProvidedTheme"}},children:{defaultValue:null,description:"Accepts React Nodes and renders them within its context.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ThemeProvider/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/components/ThemeProvider/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/themes/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>themes});var theme_lokalise_light=__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/theme-lokalise-light.js");const deprecatedColors={interactive:{yellow:{idle:{light:"#FEC02F",dark:"#FEC848"},hover:{light:"#F6AD00",dark:"#FFD573"}}},content:{buttonText2:{light:"#000000",dark:"#000000"}}},generateDeprecatedThemeColors=mode=>({content:{buttonText2:deprecatedColors.content.buttonText2[mode]},interactive:{yellow:{idle:deprecatedColors.interactive.yellow.idle[mode],hover:deprecatedColors.interactive.yellow.hover[mode]}}}),base=(tokenDictionary=theme_lokalise_light.r,{...tokenDictionary,color:{...tokenDictionary.color,deprecated:generateDeprecatedThemeColors("light")}});var tokenDictionary,theme_lokalise_dark=__webpack_require__("./node_modules/@lokalise/token-dictionary/dist/theme-lokalise-dark.js");const dark_deprecatedColors=generateDeprecatedThemeColors("dark"),themes={light:base,dark:{...base,color:{...theme_lokalise_dark.r.color,deprecated:dark_deprecatedColors},mode:theme_lokalise_dark.r.mode}}},"./src/utils/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S3:()=>value,W0:()=>spacing,cp:()=>typography});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/generateHelpers.js"),_foundations_themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/foundations/themes/index.ts");const{color,spacing,font,radius,transition,typography,zIndex,value,valueFromProp}=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.i)(_foundations_themes__WEBPACK_IMPORTED_MODULE_1__.n.light,{objectKeys:["typography"]})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.storybook/static/styles/config.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root {\n\t--sb-theme-color-white: #ffffff;\n\t--sb-theme-color-black: #000000;\n\t--sb-theme-color-light-grey: #e2e1e1;\n\t--sb-theme-color-grey: #999999;\n\t--sb-theme-color-dark-grey: #333333;\n\t--sb-theme-color-lokalise-brand: #ffc500;\n\t--sb-theme-small-text-size: 12px;\n\t--sb-theme-default-text-size: 14px;\n\t--sb-theme-motion-default: 150ms ease-out;\n\t--sb-theme-font-family-default: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco',\n\t\tBlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n","",{version:3,sources:["webpack://./.storybook/static/styles/config.css"],names:[],mappings:"AAAA;CACC,+BAA+B;CAC/B,+BAA+B;CAC/B,oCAAoC;CACpC,8BAA8B;CAC9B,mCAAmC;CACnC,wCAAwC;CACxC,gCAAgC;CAChC,kCAAkC;CAClC,yCAAyC;CACzC;gFAC+E;AAChF",sourcesContent:[":root {\n\t--sb-theme-color-white: #ffffff;\n\t--sb-theme-color-black: #000000;\n\t--sb-theme-color-light-grey: #e2e1e1;\n\t--sb-theme-color-grey: #999999;\n\t--sb-theme-color-dark-grey: #333333;\n\t--sb-theme-color-lokalise-brand: #ffc500;\n\t--sb-theme-small-text-size: 12px;\n\t--sb-theme-default-text-size: 14px;\n\t--sb-theme-motion-default: 150ms ease-out;\n\t--sb-theme-font-family-default: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco',\n\t\tBlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.storybook/static/styles/preview/index.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_config_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.storybook/static/styles/config.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_typography_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.storybook/static/styles/preview/typography.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_views_designtokens_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.storybook/static/styles/preview/views/designtokens.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_config_css__WEBPACK_IMPORTED_MODULE_2__.Z),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_typography_css__WEBPACK_IMPORTED_MODULE_3__.Z),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_views_designtokens_css__WEBPACK_IMPORTED_MODULE_4__.Z),___CSS_LOADER_EXPORT___.push([module.id,"pre {\n\ttab-size: 4ch;\n}\n","",{version:3,sources:["webpack://./.storybook/static/styles/preview/index.css"],names:[],mappings:"AAIA;CACC,aAAa;AACd",sourcesContent:["@import '../config.css';\n@import './typography.css';\n@import './views/designtokens.css';\n\npre {\n\ttab-size: 4ch;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.storybook/static/styles/preview/typography.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Regular-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Regular-Web.woff') format('woff');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff') format('woff');\n\tfont-weight: 500;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Semibold-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Semibold-Web.woff') format('woff');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff') format('woff');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Italic-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Italic-Web.woff') format('woff');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n.sbdocs-wrapper .sbdocs-a,\n.sbdocs-wrapper .sbdocs-p a,\n.sbdocs-wrapper .sbdocs-li a {\n\tcolor: var(--sb-theme-color-dark-grey);\n\ttext-decoration: underline;\n\ttransition: color var(--sb-theme-motion-default);\n\tfont-size: var(--sb-theme-default-text-size);\n}\n\n.sbdocs-wrapper .sbdocs-a:hover,\n.sbdocs-wrapper .sbdocs-p a:hover,\n.sbdocs-wrapper .sbdocs-li a:hover {\n\tcolor: var(--sb-theme-color-grey);\n}\n\n.sbdocs-wrapper .sbdocs.sbdocs-h2:not(:first-of-type) {\n\tmargin-top: 55px;\n}\n\n.sbdocs-wrapper .changelog-story h1 .sbdocs-a,\n.sbdocs-wrapper .changelog-story h2 .sbdocs-a {\n\tfont-size: inherit;\n}\n\n.sbdocs-wrapper .changelog-story h1:not(:first-of-type),\n.sbdocs-wrapper .changelog-story h2 {\n\tmargin-top: 40px;\n}\n","",{version:3,sources:["webpack://./.storybook/static/styles/preview/typography.css"],names:[],mappings:"AAAA;CACC,sBAAsB;CACtB;0FACyF;CACzF,mBAAmB;CACnB,kBAAkB;AACnB;AACA;CACC,sBAAsB;CACtB;yFACwF;CACxF,gBAAgB;CAChB,kBAAkB;AACnB;AACA;CACC,sBAAsB;CACtB;2FAC0F;CAC1F,gBAAgB;CAChB,kBAAkB;AACnB;AACA;CACC,sBAAsB;CACtB;yFACwF;CACxF,iBAAiB;CACjB,kBAAkB;AACnB;AACA;CACC,sBAAsB;CACtB;yFACwF;CACxF,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;;;CAGC,sCAAsC;CACtC,0BAA0B;CAC1B,gDAAgD;CAChD,4CAA4C;AAC7C;;AAEA;;;CAGC,iCAAiC;AAClC;;AAEA;CACC,gBAAgB;AACjB;;AAEA;;CAEC,kBAAkB;AACnB;;AAEA;;CAEC,gBAAgB;AACjB",sourcesContent:["@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Regular-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Regular-Web.woff') format('woff');\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff') format('woff');\n\tfont-weight: 500;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Semibold-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Semibold-Web.woff') format('woff');\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Medium-Web.woff') format('woff');\n\tfont-weight: bold;\n\tfont-style: normal;\n}\n@font-face {\n\tfont-family: 'Graphik';\n\tsrc: url('https://static.lokalise.com/fonts/graphik/Graphik-Italic-Web.woff2') format('woff2'),\n\t\turl('https://static.lokalise.com/fonts/graphik/Graphik-Italic-Web.woff') format('woff');\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n.sbdocs-wrapper .sbdocs-a,\n.sbdocs-wrapper .sbdocs-p a,\n.sbdocs-wrapper .sbdocs-li a {\n\tcolor: var(--sb-theme-color-dark-grey);\n\ttext-decoration: underline;\n\ttransition: color var(--sb-theme-motion-default);\n\tfont-size: var(--sb-theme-default-text-size);\n}\n\n.sbdocs-wrapper .sbdocs-a:hover,\n.sbdocs-wrapper .sbdocs-p a:hover,\n.sbdocs-wrapper .sbdocs-li a:hover {\n\tcolor: var(--sb-theme-color-grey);\n}\n\n.sbdocs-wrapper .sbdocs.sbdocs-h2:not(:first-of-type) {\n\tmargin-top: 55px;\n}\n\n.sbdocs-wrapper .changelog-story h1 .sbdocs-a,\n.sbdocs-wrapper .changelog-story h2 .sbdocs-a {\n\tfont-size: inherit;\n}\n\n.sbdocs-wrapper .changelog-story h1:not(:first-of-type),\n.sbdocs-wrapper .changelog-story h2 {\n\tmargin-top: 40px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.storybook/static/styles/preview/views/designtokens.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* ColorPalette width styling */\n.docblock-colorpalette > div > div:first-child {\n\tflex: 0 0 15%;\n}\n","",{version:3,sources:["webpack://./.storybook/static/styles/preview/views/designtokens.css"],names:[],mappings:"AAAA,+BAA+B;AAC/B;CACC,aAAa;AACd",sourcesContent:["/* ColorPalette width styling */\n.docblock-colorpalette > div > div:first-child {\n\tflex: 0 0 15%;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Alert/Alert.stories.mdx":["./src/components/Alert/Alert.stories.mdx",4782,3516,9093],"./components/Avatar/Avatar.stories.mdx":["./src/components/Avatar/Avatar.stories.mdx",8836],"./components/Button/Button.stories.mdx":["./src/components/Button/Button.stories.mdx",1579,2611],"./components/Card/Card.stories.mdx":["./src/components/Card/Card.stories.mdx",4782,8316,1054],"./components/Checkbox/Checkbox.stories.mdx":["./src/components/Checkbox/Checkbox.stories.mdx",6025],"./components/Code/Code.stories.mdx":["./src/components/Code/Code.stories.mdx",4782,3516,4982],"./components/DatePicker/DatePicker.stories.mdx":["./src/components/DatePicker/DatePicker.stories.mdx",4782,5648,3516,5071],"./components/DateRangePicker/DateRangePicker.stories.mdx":["./src/components/DateRangePicker/DateRangePicker.stories.mdx",4782,5648,3516,4811],"./components/Dropzone/Dropzone.stories.mdx":["./src/components/Dropzone/Dropzone.stories.mdx",6657,5512],"./components/Editable/Editable.stories.mdx":["./src/components/Editable/Editable.stories.mdx",4782,3516,2239],"./components/Flex/Flex.stories.mdx":["./src/components/Flex/Flex.stories.mdx",6675],"./components/Hint/Hint.stories.mdx":["./src/components/Hint/Hint.stories.mdx",4782,3516,6666],"./components/IconButton/IconButton.stories.mdx":["./src/components/IconButton/IconButton.stories.mdx",4782,3516,1579,7566],"./components/Input/Input.stories.mdx":["./src/components/Input/Input.stories.mdx",4782,3516,911],"./components/InputErrorMessage/InputErrorMessage.stories.mdx":["./src/components/InputErrorMessage/InputErrorMessage.stories.mdx",2548],"./components/Label/Label.stories.mdx":["./src/components/Label/Label.stories.mdx",4782,3516,3612],"./components/Link/Link.stories.mdx":["./src/components/Link/Link.stories.mdx",9691],"./components/Loading/Loading.stories.mdx":["./src/components/Loading/Loading.stories.mdx",7828],"./components/Menu/Menu.stories.mdx":["./src/components/Menu/Menu.stories.mdx",4782,731],"./components/Modal/Modal.stories.mdx":["./src/components/Modal/Modal.stories.mdx",4782,5648,8140,9315,8485,3516,9561,4233,8180],"./components/Pagination/Pagination.stories.mdx":["./src/components/Pagination/Pagination.stories.mdx",4782,8140,3516,9561,6298],"./components/Popover/Popover.stories.mdx":["./src/components/Popover/Popover.stories.mdx",4782,614],"./components/Portal/Portal.stories.mdx":["./src/components/Portal/Portal.stories.mdx",1237],"./components/ProgressBar/ProgressBar.stories.mdx":["./src/components/ProgressBar/ProgressBar.stories.mdx",9306],"./components/Radio/Radio.stories.mdx":["./src/components/Radio/Radio.stories.mdx",995],"./components/SearchInput/SearchInput.stories.mdx":["./src/components/SearchInput/SearchInput.stories.mdx",4782,940,3516,8143],"./components/Select/Select.stories.mdx":["./src/components/Select/Select.stories.mdx",4782,8140,9561,2667],"./components/Skeleton/Skeleton.stories.mdx":["./src/components/Skeleton/Skeleton.stories.mdx",818],"./components/Spacer/Spacer.stories.mdx":["./src/components/Spacer/Spacer.stories.mdx",3507],"./components/Stats/Stats.stories.mdx":["./src/components/Stats/Stats.stories.mdx",7497],"./components/StepWizard/StepWizard.stories.mdx":["./src/components/StepWizard/StepWizard.stories.mdx",4782,9315,3516,4233,9931],"./components/Table/Table.stories.mdx":["./src/components/Table/Table.stories.mdx",6513],"./components/Tabs/Tabs.stories.mdx":["./src/components/Tabs/Tabs.stories.mdx",9021],"./components/Tag/Tag.stories.mdx":["./src/components/Tag/Tag.stories.mdx",4782,8316,8082],"./components/Textarea/Textarea.stories.mdx":["./src/components/Textarea/Textarea.stories.mdx",693],"./components/ThemeProvider/ThemeProvider.stories.mdx":["./src/components/ThemeProvider/ThemeProvider.stories.mdx",5876],"./components/Toast/Toast.stories.mdx":["./src/components/Toast/Toast.stories.mdx",4782,9315,3516,4233,8576],"./components/Toggle/Toggle.stories.mdx":["./src/components/Toggle/Toggle.stories.mdx",9062],"./components/Tooltip/Tooltip.stories.mdx":["./src/components/Tooltip/Tooltip.stories.mdx",4782,9394],"./components/TopBanner/TopBanner.stories.mdx":["./src/components/TopBanner/TopBanner.stories.mdx",4782,3516,1893],"./components/ViewButtonGroup/ViewButtonGroup.stories.mdx":["./src/components/ViewButtonGroup/ViewButtonGroup.stories.mdx",4782,4517],"./foundations/designTokens/color/colors.mdx":["./src/foundations/designTokens/color/colors.mdx",4782,3516,989],"./foundations/designTokens/radius.mdx":["./src/foundations/designTokens/radius.mdx",7931],"./foundations/designTokens/size.mdx":["./src/foundations/designTokens/size.mdx",8260],"./foundations/designTokens/space.mdx":["./src/foundations/designTokens/space.mdx",5606],"./foundations/designTokens/transitionTime.mdx":["./src/foundations/designTokens/transitionTime.mdx",7131],"./foundations/designTokens/typography/typography.mdx":["./src/foundations/designTokens/typography/typography.mdx",4782,3516,5584],"./foundations/designTokens/zIndex.mdx":["./src/foundations/designTokens/zIndex.mdx",105],"./foundations/icons/icons.mdx":["./src/foundations/icons/icons.mdx",1579,8276],"./foundations/themes/overview.stories.mdx":["./src/foundations/themes/overview.stories.mdx",1889]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/Alert/Alert.stories.mdx":["./src/components/Alert/Alert.stories.mdx",4782,3516,9093],"./components/Avatar/Avatar.stories.mdx":["./src/components/Avatar/Avatar.stories.mdx",8836],"./components/Button/Button.stories.mdx":["./src/components/Button/Button.stories.mdx",1579,2611],"./components/Card/Card.stories.mdx":["./src/components/Card/Card.stories.mdx",4782,8316,1054],"./components/Checkbox/Checkbox.stories.mdx":["./src/components/Checkbox/Checkbox.stories.mdx",6025],"./components/Code/Code.stories.mdx":["./src/components/Code/Code.stories.mdx",4782,3516,4982],"./components/DatePicker/DatePicker.stories.mdx":["./src/components/DatePicker/DatePicker.stories.mdx",4782,5648,3516,5071],"./components/DateRangePicker/DateRangePicker.stories.mdx":["./src/components/DateRangePicker/DateRangePicker.stories.mdx",4782,5648,3516,4811],"./components/Dropzone/Dropzone.stories.mdx":["./src/components/Dropzone/Dropzone.stories.mdx",6657,5512],"./components/Editable/Editable.stories.mdx":["./src/components/Editable/Editable.stories.mdx",4782,3516,2239],"./components/Flex/Flex.stories.mdx":["./src/components/Flex/Flex.stories.mdx",6675],"./components/Hint/Hint.stories.mdx":["./src/components/Hint/Hint.stories.mdx",4782,3516,6666],"./components/IconButton/IconButton.stories.mdx":["./src/components/IconButton/IconButton.stories.mdx",4782,3516,1579,7566],"./components/Input/Input.stories.mdx":["./src/components/Input/Input.stories.mdx",4782,3516,911],"./components/InputErrorMessage/InputErrorMessage.stories.mdx":["./src/components/InputErrorMessage/InputErrorMessage.stories.mdx",2548],"./components/Label/Label.stories.mdx":["./src/components/Label/Label.stories.mdx",4782,3516,3612],"./components/Link/Link.stories.mdx":["./src/components/Link/Link.stories.mdx",9691],"./components/Loading/Loading.stories.mdx":["./src/components/Loading/Loading.stories.mdx",7828],"./components/Menu/Menu.stories.mdx":["./src/components/Menu/Menu.stories.mdx",4782,731],"./components/Modal/Modal.stories.mdx":["./src/components/Modal/Modal.stories.mdx",4782,5648,8140,9315,8485,3516,9561,4233,8180],"./components/Pagination/Pagination.stories.mdx":["./src/components/Pagination/Pagination.stories.mdx",4782,8140,3516,9561,6298],"./components/Popover/Popover.stories.mdx":["./src/components/Popover/Popover.stories.mdx",4782,614],"./components/Portal/Portal.stories.mdx":["./src/components/Portal/Portal.stories.mdx",1237],"./components/ProgressBar/ProgressBar.stories.mdx":["./src/components/ProgressBar/ProgressBar.stories.mdx",9306],"./components/Radio/Radio.stories.mdx":["./src/components/Radio/Radio.stories.mdx",995],"./components/SearchInput/SearchInput.stories.mdx":["./src/components/SearchInput/SearchInput.stories.mdx",4782,940,3516,8143],"./components/Select/Select.stories.mdx":["./src/components/Select/Select.stories.mdx",4782,8140,9561,2667],"./components/Skeleton/Skeleton.stories.mdx":["./src/components/Skeleton/Skeleton.stories.mdx",818],"./components/Spacer/Spacer.stories.mdx":["./src/components/Spacer/Spacer.stories.mdx",3507],"./components/Stats/Stats.stories.mdx":["./src/components/Stats/Stats.stories.mdx",7497],"./components/StepWizard/StepWizard.stories.mdx":["./src/components/StepWizard/StepWizard.stories.mdx",4782,9315,3516,4233,9931],"./components/Table/Table.stories.mdx":["./src/components/Table/Table.stories.mdx",6513],"./components/Tabs/Tabs.stories.mdx":["./src/components/Tabs/Tabs.stories.mdx",9021],"./components/Tag/Tag.stories.mdx":["./src/components/Tag/Tag.stories.mdx",4782,8316,8082],"./components/Textarea/Textarea.stories.mdx":["./src/components/Textarea/Textarea.stories.mdx",693],"./components/ThemeProvider/ThemeProvider.stories.mdx":["./src/components/ThemeProvider/ThemeProvider.stories.mdx",5876],"./components/Toast/Toast.stories.mdx":["./src/components/Toast/Toast.stories.mdx",4782,9315,3516,4233,8576],"./components/Toggle/Toggle.stories.mdx":["./src/components/Toggle/Toggle.stories.mdx",9062],"./components/Tooltip/Tooltip.stories.mdx":["./src/components/Tooltip/Tooltip.stories.mdx",4782,9394],"./components/TopBanner/TopBanner.stories.mdx":["./src/components/TopBanner/TopBanner.stories.mdx",4782,3516,1893],"./components/ViewButtonGroup/ViewButtonGroup.stories.mdx":["./src/components/ViewButtonGroup/ViewButtonGroup.stories.mdx",4782,4517],"./foundations/icons/icons.stories":["./src/foundations/icons/icons.stories.tsx",1579,7807],"./foundations/icons/icons.stories.tsx":["./src/foundations/icons/icons.stories.tsx",1579,7807],"./foundations/themes/overview.stories.mdx":["./src/foundations/themes/overview.stories.mdx",1889]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:\.storybook\/stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(21);return __webpack_require__("./.storybook/stories lazy recursive ^\\.\\/.*$ include: (?:\\/\\.storybook\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.[^/]*?\/?)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.[^/]*?\\/?)$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-styling/dist/preview.mjs"),__webpack_require__("./.storybook/preview.tsx")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_API__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[1962],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);