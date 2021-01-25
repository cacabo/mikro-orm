(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=l(r),O=n,m=s["".concat(o,".").concat(O)]||s[O]||d[O]||i;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=O;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},309:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(1253)),o={id:"findoneorfailoptions",title:"Interface: FindOneOrFailOptions<T, P>",sidebar_label:"FindOneOrFailOptions"},c={unversionedId:"api/interfaces/findoneorfailoptions",id:"version-4.3/api/interfaces/findoneorfailoptions",isDocsHomePage:!1,title:"Interface: FindOneOrFailOptions<T, P>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/interfaces/findoneorfailoptions.md",slug:"/api/interfaces/findoneorfailoptions",permalink:"/docs/4.3/api/interfaces/findoneorfailoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/findoneorfailoptions.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567478,sidebar_label:"FindOneOrFailOptions",sidebar:"version-4.3/API",previous:{title:"Interface: FindOneOptions<T, P>",permalink:"/docs/4.3/api/interfaces/findoneoptions"},next:{title:"Interface: FindOptions<T, P>",permalink:"/docs/4.3/api/interfaces/findoptions"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"failHandler",id:"failhandler",children:[]},{value:"lockMode",id:"lockmode",children:[]},{value:"lockVersion",id:"lockversion",children:[]}]}],p={toc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"T")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"P")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#populate"}),"Populate"),"<","T>"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Populate\\","<","T>")))),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/findoneoptions"}),"FindOneOptions"),"<","T, P>"),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("strong",{parentName:"p"},"FindOneOrFailOptions")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"failhandler"},"failHandler"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"failHandler"),": (entityName: string, where: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#dictionary"}),"Dictionary")," ","|"," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#iprimarykey"}),"IPrimaryKey")," ","|"," any) => ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/driverexception#error"}),"Error")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/drivers/IDatabaseDriver.ts#L103"}),"packages/core/src/drivers/IDatabaseDriver.ts:103"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"lockmode"},"lockMode"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"lockMode"),": ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/enums/lockmode"}),"LockMode")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/findoneoptions"}),"FindOneOptions"),".",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/findoneoptions#lockmode"}),"lockMode"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/drivers/IDatabaseDriver.ts#L98"}),"packages/core/src/drivers/IDatabaseDriver.ts:98"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"lockversion"},"lockVersion"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"lockVersion"),": number ","|"," Date"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Inherited from ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/findoneoptions"}),"FindOneOptions"),".",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/findoneoptions#lockversion"}),"lockVersion"))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/drivers/IDatabaseDriver.ts#L99"}),"packages/core/src/drivers/IDatabaseDriver.ts:99"))))}l.isMDXComponent=!0}}]);