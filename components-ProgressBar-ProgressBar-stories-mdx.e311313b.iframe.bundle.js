"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9306],{"./node_modules/@lokalise/styled/dist/tokens/variants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>e});const e=(t,a,c)=>n=>a["function"==typeof t?t(n):n[t]??c]},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/ProgressBar/ProgressBar.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>ProgressBar_stories,progressBar:()=>progressBar});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressBar__Container",componentId:"sc-yke62q-0"})(["width:100%;height:",";border-radius:",";background-color:",";overflow:hidden;"],(({$height})=>`${$height}px`),(({$height})=>`${$height}px`),(0,theme.S3)("color.border.disabled")),ActiveProgressBar=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressBar__ActiveProgressBar",componentId:"sc-yke62q-1"})(["height:","px;width:","%;",""],(({$height})=>$height),(({$progress})=>$progress),(0,variants.o)((({$progress})=>{switch(!0){case $progress<33:return"low";case $progress<66:return"medium";default:return"high"}}),{low:styled_components_browser_esm.iv`
				background: ${(0,theme.S3)("color.background.action.danger.default")};
			`,medium:styled_components_browser_esm.iv`
				background: ${(0,theme.S3)("color.border.warning")};
			`,high:styled_components_browser_esm.iv`
				background: ${(0,theme.S3)("color.background.action.primary.default")};
			`}));ActiveProgressBar.displayName="ActiveProgressBar";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProgressBar=({progress,height=2,className})=>{const progressValue=Math.min(Math.max(progress,0),100);return(0,jsx_runtime.jsx)(Container,{$height:height,role:"progressbar","aria-valuenow":progressValue,className,children:(0,jsx_runtime.jsx)(ActiveProgressBar,{$height:height,$progress:progressValue})})};ProgressBar.displayName="ProgressBar",ProgressBar.displayName="ProgressBar";try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{progress:{defaultValue:null,description:"Sets the current progress indicator, between 0 and 100.",name:"progress",required:!0,type:{name:"number"}},height:{defaultValue:{value:"2"},description:"Controls the height of the bar.",name:"height",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressBar/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/components/ProgressBar/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>(0,jsx_runtime.jsx)(ProgressBar,{...args});const progressBar=Template.bind({});progressBar.storyName="ProgressBar",progressBar.args={progress:50,height:3},progressBar.parameters={storySource:{source:"args => <ProgressBar {...args} />"}};const componentMeta={title:"Components/ProgressBar",parameters:{controls:{sort:"requiredFirst"}},component:ProgressBar,argTypes:{progress:{control:{type:"range",min:0,max:100,step:1}}},tags:["stories-mdx"],includeStories:["progressBar"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/ProgressBar",component:ProgressBar,parameters:{controls:{sort:"requiredFirst"}},argTypes:{progress:{control:{type:"range",min:0,max:100,step:1}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"progressbar",children:"ProgressBar"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#accessibility",children:"Accessibility"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"ProgressBar is used to visualize the progression of an operation."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { ProgressBar } from '@lokalise/louis';\n\nexport default () => <ProgressBar progress={50} height={3} />;\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29261",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | ProgressBar"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:ProgressBar,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"ProgressBar",args:{progress:50,height:3},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"accessibility",children:"Accessibility"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["ProgressBar is rendered with the ",(0,jsx_runtime.jsx)(_components.code,{children:"progressbar"})," role and an ",(0,jsx_runtime.jsx)(_components.code,{children:"aria-valuenow"})," attribute for the current progress indicator value."]})]})}}};const ProgressBar_stories=componentMeta}}]);
//# sourceMappingURL=components-ProgressBar-ProgressBar-stories-mdx.e311313b.iframe.bundle.js.map