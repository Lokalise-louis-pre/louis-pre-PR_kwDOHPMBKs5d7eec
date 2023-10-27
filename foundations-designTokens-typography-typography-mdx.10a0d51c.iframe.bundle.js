"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[5584],{"./node_modules/@lokalise/styled/dist/hooks/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>s});const s=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Fg},"./node_modules/@lokalise/styled/dist/tokens/excludeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>o});const o=e=>c=>!e.includes(c)},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./src/foundations/designTokens/typography/typography.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>typography});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),dist_react=__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),useTheme=__webpack_require__("./node_modules/@lokalise/styled/dist/hooks/useTheme.js"),Code=__webpack_require__("./src/components/Code/Code.tsx"),theme=__webpack_require__("./src/utils/theme/index.ts");const TypographyTable=styled_components_browser_esm.ZP.table.withConfig({displayName:"storiesUtils__TypographyTable",componentId:"sc-zq60x3-0"})(["background:",";color:",";"],(0,theme.S3)("color.background.surface.default"),(0,theme.S3)("color.text.default")),TypographyBodyCell=styled_components_browser_esm.ZP.td.withConfig({displayName:"storiesUtils__TypographyBodyCell",componentId:"sc-zq60x3-1"})(["padding:10px 10px 10px 0;"]),TypographyHeadCell=styled_components_browser_esm.ZP.th.withConfig({displayName:"storiesUtils__TypographyHeadCell",componentId:"sc-zq60x3-2"})(["text-align:left;font-family:var(--sb-theme-font-family-default);"]),Typography=()=>{const typographyEntries=[],traverseTypography=(obj,parentKeys)=>{Object.entries(obj).forEach((([key,typographyValue])=>{if(null!==typographyValue&&"object"==typeof typographyValue)traverseTypography(typographyValue,[...parentKeys,key]);else{const typographyObject={key:parentKeys.join("."),typographyValue:obj},typographyKey=JSON.stringify(typographyObject);typographyEntries.some((h=>JSON.stringify(h)===typographyKey))||typographyEntries.push(typographyObject)}}))};return traverseTypography((0,useTheme.F)().typography,[]),(0,jsx_runtime.jsxs)(TypographyTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(TypographyHeadCell,{children:"Token"}),(0,jsx_runtime.jsx)(TypographyHeadCell,{children:"Value"}),(0,jsx_runtime.jsx)(TypographyHeadCell,{children:"Sample"})]})}),(0,jsx_runtime.jsx)("tbody",{children:typographyEntries.map((({key,typographyValue})=>(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(TypographyBodyCell,{children:(0,jsx_runtime.jsxs)(Code.E,{children:["typography('",key,"')"]})}),(0,jsx_runtime.jsx)(TypographyBodyCell,{children:(0,jsx_runtime.jsx)(Code.E,{children:Object.entries(typographyValue).map((([k,v])=>null===v||"object"==typeof v?null:(0,jsx_runtime.jsxs)("span",{children:[k,": ",v.toString(),(0,jsx_runtime.jsx)("br",{})]},k)))})}),(0,jsx_runtime.jsx)(TypographyBodyCell,{children:(0,jsx_runtime.jsx)("span",{style:typographyValue,children:"Lorem Ipsum"})})]},key)))})]})};Typography.displayName="Typography";try{TypographyBodyCell.displayName="TypographyBodyCell",TypographyBodyCell.__docgenInfo={description:"",displayName:"TypographyBodyCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/designTokens/typography/storiesUtils.tsx#TypographyBodyCell"]={docgenInfo:TypographyBodyCell.__docgenInfo,name:"TypographyBodyCell",path:"src/foundations/designTokens/typography/storiesUtils.tsx#TypographyBodyCell"})}catch(__react_docgen_typescript_loader_error){}try{TypographyHeadCell.displayName="TypographyHeadCell",TypographyHeadCell.__docgenInfo={description:"",displayName:"TypographyHeadCell",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/designTokens/typography/storiesUtils.tsx#TypographyHeadCell"]={docgenInfo:TypographyHeadCell.__docgenInfo,name:"TypographyHeadCell",path:"src/foundations/designTokens/typography/storiesUtils.tsx#TypographyHeadCell"})}catch(__react_docgen_typescript_loader_error){}const typography=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",strong:"strong",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Foundations/Design Tokens/Typography"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"typography",children:"Typography"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#typography-options",children:"Typography Options"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["At Lokalise we use Graphik typeface internally, and it is ",(0,jsx_runtime.jsx)(_components.strong,{children:"NOT bundled"})," in Louis by default due to legal requirements. Please purchase it from their ",(0,jsx_runtime.jsx)(_components.a,{href:"https://type.today/en/Graphik",target:"_blank",rel:"nofollow noopener noreferrer",children:"website"})," in case you need it."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you'd like to install a custom font family, please see the ",(0,jsx_runtime.jsx)(dist_react.Z,{kind:"Overview/Theming",children:"Custom Fonts"})," section for more information in Theming."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { typography } from '@lokalise/louis';\nimport { styled } from '@lokalise/styled';\n\nconst Heading1 = styled.h1`\n\t${typography('heading.1')}\n`;\n\nexport const MyComponent = () => <Heading1>My Heading</Heading1>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=5398%3A21831",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Typography"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"typography-options",children:"Typography Options"}),"\n",(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsx)(Typography,{})})]})}}},"./src/components/Code/Code.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Code});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const code=styled_components_browser_esm.iv`
	${(0,theme.cp)("body.caption.default")};
	font-family: revert; // reverting to the browser's default font for code + pre
	border: none;
	display: inline-block;
	padding: ${(0,theme.W0)(1)};
	border-radius: ${(0,theme.S3)("radius.m")};
	color: ${(0,theme.S3)("color.text.light.default")};
	background-color: ${(0,theme.S3)("color.background.surface.fore")};
	margin: 0;
	max-width: 100%;
	box-sizing: border-box;
	overflow: auto;
`,StyledCodeMulti=styled_components_browser_esm.ZP.pre.withConfig({displayName:"Code__StyledCodeMulti",componentId:"sc-1cw7q44-0"})(["",""],code),StyledCode=styled_components_browser_esm.ZP.code.withConfig({displayName:"Code__StyledCode",componentId:"sc-1cw7q44-1"})([""," white-space:nowrap;"],code),Wrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"Code__Wrapper",componentId:"sc-1cw7q44-2"})(["width:100%;"]);var Clipboard=__webpack_require__("./src/foundations/icons/Clipboard.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Label=__webpack_require__("./src/components/Label/Label.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Code=({labelText,multiline=!1,clipboard=!1,children,...rest})=>{const[status,setStatus]=(0,react.useState)("Copy"),clipboardText=children?children.toString():"",onCopyClickHandler=()=>{"string"==typeof children&&navigator.clipboard.writeText(clipboardText).then((()=>{setStatus("Copied"),setTimeout((()=>{setStatus("Copy")}),3e3)}))},withClipboard=!!navigator?.clipboard&&clipboard,formatCode=multiline?(0,jsx_runtime.jsx)(StyledCodeMulti,{...rest,children:(0,jsx_runtime.jsx)("code",{children})}):(0,jsx_runtime.jsx)(StyledCode,{...rest,children});return labelText||withClipboard?(0,jsx_runtime.jsxs)(Wrapper,{children:[labelText&&(0,jsx_runtime.jsx)(Label._,{text:labelText}),(0,jsx_runtime.jsxs)(Flex.k,{direction:"row",align:"center",wrap:"nowrap",gap:1,children:[formatCode,withClipboard&&(0,jsx_runtime.jsx)(IconButton.h,{onClick:onCopyClickHandler,ariaLabel:`${status} to clipboard`,children:(0,jsx_runtime.jsx)(Clipboard.T,{})})]})]}):formatCode};try{Code.displayName="Code",Code.__docgenInfo={description:"",displayName:"Code",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node as a code element.",name:"children",required:!0,type:{name:"ReactNode"}},multiline:{defaultValue:{value:"false"},description:"Toggles displaying newlines.",name:"multiline",required:!1,type:{name:"boolean"}},labelText:{defaultValue:null,description:"Renders a label above the code element.",name:"labelText",required:!1,type:{name:"ReactNode"}},clipboard:{defaultValue:{value:"false"},description:"Toggles the copy-to-clipboard button.",name:"clipboard",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Code/Code.tsx#Code"]={docgenInfo:Code.__docgenInfo,name:"Code",path:"src/components/Code/Code.tsx#Code"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Flex/Flex.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Flex__Container",componentId:"sc-1rxy4x6-0"})(["display:flex;gap:"," ",";max-width:100%;align-items:",";justify-content:",";flex-wrap:",";flex-direction:",";flex-basis:",";flex-grow:",";flex-shrink:",";align-self:",";",""],(({$rowGap})=>(0,theme.W0)($rowGap)),(({$columnGap})=>(0,theme.W0)($columnGap)),(({$alignItems})=>$alignItems),(({$justifyContent})=>$justifyContent),(({$flexWrap})=>$flexWrap),(({$flexDirection})=>$flexDirection),(({$basis})=>$basis),(({$grow})=>$grow),(({$shrink})=>$shrink),(({$alignSelf})=>$alignSelf),(0,modifier.c)("$inline",styled_components_browser_esm.iv`
			display: inline-flex;
		`));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=(0,react.forwardRef)((({inline=!1,align="flex-start",justify="flex-start",wrap="wrap",direction="row",gap=0,basis,grow,shrink,alignSelf,children,as="div",...rest},ref)=>{const rowGap="number"==typeof gap?gap:gap[0],columnGap="number"==typeof gap?gap:gap[1];return(0,jsx_runtime.jsx)(Container,{...rest,ref,$inline:inline,$flexDirection:direction,$alignItems:align,$justifyContent:justify,$flexWrap:wrap,$rowGap:rowGap,$columnGap:columnGap,$basis:basis,$grow:grow,$shrink:shrink,$alignSelf:alignSelf,as,children})}));Flex.displayName="Flex";try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{inline:{defaultValue:{value:"false"},description:"Toggles inline-flex.",name:"inline",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"flex-start"},description:"Sets align-items.",name:"align",required:!1,type:{name:"AlignItems"}},justify:{defaultValue:{value:"flex-start"},description:"Sets justify-content.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"wrap"},description:"Sets flex-wrap.",name:"wrap",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"wrap"'},{value:'"nowrap"'},{value:'"wrap-reverse"'}]}},direction:{defaultValue:{value:"row"},description:"Sets flex-direction.",name:"direction",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"row"'},{value:'"column"'},{value:'"column-reverse"'},{value:'"row-reverse"'}]}},gap:{defaultValue:{value:"0"},description:"Sets gap, or row-gap and column-gap, using theme spacing.",name:"gap",required:!1,type:{name:"SpacingLevels | [rowGap: SpacingLevels, columnGap: SpacingLevels]"}},basis:{defaultValue:null,description:"Sets flex-basis when used as a child of another flex container.",name:"basis",required:!1,type:{name:"FlexBasis<0 | (string & {})>"}},grow:{defaultValue:null,description:"Sets flex-grow when used as a child of another flex container.",name:"grow",required:!1,type:{name:"FlexGrow"}},shrink:{defaultValue:null,description:"Sets flex-shrink when used as a child of another flex container.",name:"shrink",required:!1,type:{name:"FlexShrink"}},alignSelf:{defaultValue:null,description:"Sets align-self when used as a child of another flex container.",name:"alignSelf",required:!1,type:{name:"AlignSelf"}},children:{defaultValue:null,description:"Renders any flex items in the flex container.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"div"},description:"Sets the HTML element to render for the flex container.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"aside"'},{value:'"div"'},{value:'"li"'},{value:'"main"'},{value:'"section"'},{value:'"span"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.ZP.label.withConfig({displayName:"Label__Container",componentId:"sc-16wdyfs-0"})(["width:100%;margin-bottom:0;display:grid;gap:",";",""],(0,theme.W0)(1),(0,modifier.c)("$underline",styled_components_browser_esm.iv`
			gap: ${(0,theme.W0)(3)};
		`)),LabelText=styled_components_browser_esm.ZP.div.withConfig({displayName:"Label__LabelText",componentId:"sc-16wdyfs-1"})([""," "," color:",";cursor:default;"],(0,theme.cp)("body.base.strong"),(0,modifier.c)("$underline",styled_components_browser_esm.iv`
			padding-bottom: ${(0,theme.W0)(1)};
			border-bottom: 1px solid ${(0,theme.S3)("color.border.light")};
		`),(0,theme.S3)("color.text.default")),LabelDescription=styled_components_browser_esm.ZP.p.withConfig({displayName:"Label__LabelDescription",componentId:"sc-16wdyfs-2"})(["margin:0;padding:0;"," color:",";"],(0,theme.cp)("body.small.default"),(0,theme.S3)("color.text.light.default")),AsteriskIcon=styled_components_browser_esm.ZP.span.withConfig({displayName:"Label__AsteriskIcon",componentId:"sc-16wdyfs-3"})(["color:",";&:after{content:'*';}"],(0,theme.S3)("color.background.action.danger.default"));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/styles.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Label/styles.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{LabelText.displayName="LabelText",LabelText.__docgenInfo={description:"",displayName:"LabelText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/styles.tsx#LabelText"]={docgenInfo:LabelText.__docgenInfo,name:"LabelText",path:"src/components/Label/styles.tsx#LabelText"})}catch(__react_docgen_typescript_loader_error){}try{LabelDescription.displayName="LabelDescription",LabelDescription.__docgenInfo={description:"",displayName:"LabelDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/styles.tsx#LabelDescription"]={docgenInfo:LabelDescription.__docgenInfo,name:"LabelDescription",path:"src/components/Label/styles.tsx#LabelDescription"})}catch(__react_docgen_typescript_loader_error){}try{AsteriskIcon.displayName="AsteriskIcon",AsteriskIcon.__docgenInfo={description:"",displayName:"AsteriskIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/styles.tsx#AsteriskIcon"]={docgenInfo:AsteriskIcon.__docgenInfo,name:"AsteriskIcon",path:"src/components/Label/styles.tsx#AsteriskIcon"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Label=({text,description,required,underline=!1,for:htmlFor,id,className,children})=>(0,jsx_runtime.jsxs)(Container,{htmlFor,className,$underline:underline,children:[(0,jsx_runtime.jsxs)(LabelText,{id,$underline:underline,children:[text,required?(0,jsx_runtime.jsx)(AsteriskIcon,{role:"img","aria-label":"Required"}):null,!!description&&(0,jsx_runtime.jsx)(LabelDescription,{children:description})]}),children&&(0,jsx_runtime.jsx)("div",{children})]});Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{text:{defaultValue:null,description:"Sets text content and / or any HTML node as the label text.",name:"text",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Sets the description text under the label heading.",name:"description",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Toggles a red asterisk to indicate that the field is required.",name:"required",required:!1,type:{name:"boolean"}},for:{defaultValue:null,description:"Sets the `for` attribute on the label element.",name:"for",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Sets the `id` attribute on the label text span.",name:"id",required:!1,type:{name:"string"}},underline:{defaultValue:{value:"false"},description:"Toggles a bottom border on the label.",name:"underline",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the label.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Clipboard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Clipboard});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Clipboard=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M8.54166 1.25C7.58475 1.25 6.79404 1.98609 6.68782 2.91667H5.20833C4.1802 2.91667 3.33333 3.76354 3.33333 4.79167V16.0417C3.33333 17.0698 4.1802 17.9167 5.20833 17.9167H14.7917C15.8198 17.9167 16.6667 17.0698 16.6667 16.0417V4.79167C16.6667 3.76354 15.8198 2.91667 14.7917 2.91667H13.3122C13.206 1.98609 12.4152 1.25 11.4583 1.25H8.54166ZM8.54166 2.5H11.4583C11.811 2.5 12.0833 2.77229 12.0833 3.125C12.0833 3.47771 11.811 3.75 11.4583 3.75H8.54166C8.18895 3.75 7.91666 3.47771 7.91666 3.125C7.91666 2.77229 8.18895 2.5 8.54166 2.5ZM5.20833 4.16667H6.9873C7.32551 4.66746 7.89779 5 8.54166 5H11.4583C12.1022 5 12.6745 4.66746 13.0127 4.16667H14.7917C15.1444 4.16667 15.4167 4.43896 15.4167 4.79167V16.0417C15.4167 16.3944 15.1444 16.6667 14.7917 16.6667H5.20833C4.85562 16.6667 4.58333 16.3944 4.58333 16.0417V4.79167C4.58333 4.43896 4.85562 4.16667 5.20833 4.16667ZM6.87499 7.08333C6.79217 7.08216 6.70995 7.09746 6.63309 7.12835C6.55624 7.15923 6.48629 7.20508 6.42731 7.26323C6.36832 7.32139 6.32149 7.39068 6.28952 7.46709C6.25756 7.5435 6.24109 7.6255 6.24109 7.70833C6.24109 7.79116 6.25756 7.87316 6.28952 7.94957C6.32149 8.02599 6.36832 8.09528 6.42731 8.15343C6.48629 8.21159 6.55624 8.25744 6.63309 8.28832C6.70995 8.3192 6.79217 8.3345 6.87499 8.33333H13.125C13.2078 8.3345 13.29 8.3192 13.3669 8.28832C13.4438 8.25744 13.5137 8.21159 13.5727 8.15343C13.6317 8.09528 13.6785 8.02599 13.7105 7.94957C13.7424 7.87316 13.7589 7.79116 13.7589 7.70833C13.7589 7.6255 13.7424 7.5435 13.7105 7.46709C13.6785 7.39068 13.6317 7.32139 13.5727 7.26323C13.5137 7.20508 13.4438 7.15923 13.3669 7.12835C13.29 7.09746 13.2078 7.08216 13.125 7.08333H6.87499ZM6.87499 10.4167C6.79217 10.4155 6.70995 10.4308 6.63309 10.4617C6.55624 10.4926 6.48629 10.5384 6.42731 10.5966C6.36832 10.6547 6.32149 10.724 6.28952 10.8004C6.25756 10.8768 6.24109 10.9588 6.24109 11.0417C6.24109 11.1245 6.25756 11.2065 6.28952 11.2829C6.32149 11.3593 6.36832 11.4286 6.42731 11.4868C6.48629 11.5449 6.55624 11.5908 6.63309 11.6217C6.70995 11.6525 6.79217 11.6678 6.87499 11.6667H9.79166C9.87448 11.6678 9.95671 11.6525 10.0336 11.6217C10.1104 11.5908 10.1804 11.5449 10.2394 11.4868C10.2983 11.4286 10.3452 11.3593 10.3771 11.2829C10.4091 11.2065 10.4256 11.1245 10.4256 11.0417C10.4256 10.9588 10.4091 10.8768 10.3771 10.8004C10.3452 10.724 10.2983 10.6547 10.2394 10.5966C10.1804 10.5384 10.1104 10.4926 10.0336 10.4617C9.95671 10.4308 9.87448 10.4155 9.79166 10.4167H6.87499ZM6.87499 13.75C6.79217 13.7488 6.70995 13.7641 6.63309 13.795C6.55624 13.8259 6.48629 13.8717 6.42731 13.9299C6.36832 13.9881 6.32149 14.0573 6.28952 14.1338C6.25756 14.2102 6.24109 14.2922 6.24109 14.375C6.24109 14.4578 6.25756 14.5398 6.28952 14.6162C6.32149 14.6927 6.36832 14.7619 6.42731 14.8201C6.48629 14.8783 6.55624 14.9241 6.63309 14.955C6.70995 14.9859 6.79217 15.0012 6.87499 15H11.4583C11.5411 15.0012 11.6234 14.9859 11.7002 14.955C11.7771 14.9241 11.847 14.8783 11.906 14.8201C11.965 14.7619 12.0118 14.6927 12.0438 14.6162C12.0758 14.5398 12.0922 14.4578 12.0922 14.375C12.0922 14.2922 12.0758 14.2102 12.0438 14.1338C12.0118 14.0573 11.965 13.9881 11.906 13.9299C11.847 13.8717 11.7771 13.8259 11.7002 13.795C11.6234 13.7641 11.5411 13.7488 11.4583 13.75H6.87499Z"})});Clipboard.displayName="Clipboard";try{Clipboard.displayName="Clipboard",Clipboard.__docgenInfo={description:"",displayName:"Clipboard",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Clipboard.tsx#Clipboard"]={docgenInfo:Clipboard.__docgenInfo,name:"Clipboard",path:"src/foundations/icons/Clipboard.tsx#Clipboard"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=foundations-designTokens-typography-typography-mdx.10a0d51c.iframe.bundle.js.map