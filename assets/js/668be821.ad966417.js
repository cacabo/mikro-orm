(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,O=s["".concat(i,".").concat(u)]||s[u]||m[u]||a;return n?o.a.createElement(O,c(c({ref:t},p),{},{components:n})):o.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},525:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(1253)),i={id:"core.connectionoptions",title:"Interface: ConnectionOptions",sidebar_label:"ConnectionOptions",hide_title:!0},c={unversionedId:"api/interfaces/core.connectionoptions",id:"version-4.4/api/interfaces/core.connectionoptions",isDocsHomePage:!1,title:"Interface: ConnectionOptions",description:"Interface: ConnectionOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/core.connectionoptions.md",slug:"/api/interfaces/core.connectionoptions",permalink:"/docs/api/interfaces/core.connectionoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.connectionoptions.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567478,sidebar_label:"ConnectionOptions",sidebar:"version-4.4/API",previous:{title:"Interface: ConnectionConfig",permalink:"/docs/api/interfaces/core.connectionconfig"},next:{title:"Interface: CountOptions<T>",permalink:"/docs/api/interfaces/core.countoptions"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"charset",id:"charset",children:[]},{value:"clientUrl",id:"clienturl",children:[]},{value:"collate",id:"collate",children:[]},{value:"dbName",id:"dbname",children:[]},{value:"host",id:"host",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"name",id:"name",children:[]},{value:"password",id:"password",children:[]},{value:"pool",id:"pool",children:[]},{value:"port",id:"port",children:[]},{value:"user",id:"user",children:[]}]}],p={toc:b};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-connectionoptions"},"Interface: ConnectionOptions"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".ConnectionOptions"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"ConnectionOptions")),Object(a.b)("p",{parentName:"li"},"\u21b3 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.mikroormoptions"}),Object(a.b)("em",{parentName:"a"},"MikroORMOptions"))))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"charset"},"charset"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"charset"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L288"}),"packages/core/src/utils/Configuration.ts:288")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"clienturl"},"clientUrl"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"clientUrl"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L283"}),"packages/core/src/utils/Configuration.ts:283")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"collate"},"collate"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"collate"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L289"}),"packages/core/src/utils/Configuration.ts:289")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"dbname"},"dbName"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"dbName"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L281"}),"packages/core/src/utils/Configuration.ts:281")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"host"},"host"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"host"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L284"}),"packages/core/src/utils/Configuration.ts:284")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"multipleStatements"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L290"}),"packages/core/src/utils/Configuration.ts:290")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"name"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L282"}),"packages/core/src/utils/Configuration.ts:282")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"password"},"password"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"password"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L287"}),"packages/core/src/utils/Configuration.ts:287")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"pool"},"pool"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"pool"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.poolconfig"}),Object(a.b)("em",{parentName:"a"},"PoolConfig"))),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L291"}),"packages/core/src/utils/Configuration.ts:291")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"port"},"port"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"port"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L285"}),"packages/core/src/utils/Configuration.ts:285")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"user"},"user"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"user"),": ",Object(a.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/Configuration.ts#L286"}),"packages/core/src/utils/Configuration.ts:286")))}l.isMDXComponent=!0}}]);