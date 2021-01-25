(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),d=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=d(a),j=b,s=i["".concat(c,".").concat(j)]||i[j]||O[j]||r;return a?n.a.createElement(s,l(l({ref:t},m),{},{components:a})):n.a.createElement(s,l({ref:t},m))}));function s(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=j;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var m=2;m<r;m++)c[m]=a[m];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},969:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var b=a(3),n=a(7),r=(a(0),a(1253)),c={id:"knex.knex.aliasquerybuilder",title:"Interface: AliasQueryBuilder<TRecord, TResult>",sidebar_label:"AliasQueryBuilder",hide_title:!0},l={unversionedId:"api/interfaces/knex.knex.aliasquerybuilder",id:"version-4.4/api/interfaces/knex.knex.aliasquerybuilder",isDocsHomePage:!1,title:"Interface: AliasQueryBuilder<TRecord, TResult>",description:"Interface: AliasQueryBuilder",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.aliasquerybuilder.md",slug:"/api/interfaces/knex.knex.aliasquerybuilder",permalink:"/docs/api/interfaces/knex.knex.aliasquerybuilder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.aliasquerybuilder.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567478,sidebar_label:"AliasQueryBuilder",sidebar:"version-4.4/API",previous:{title:"Interface: AliasDict",permalink:"/docs/api/interfaces/knex.knex.aliasdict"},next:{title:"Interface: AlterColumnBuilder",permalink:"/docs/api/interfaces/knex.knex.altercolumnbuilder"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],m={toc:p};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-aliasquerybuildertrecord-tresult"},"Interface: AliasQueryBuilder<TRecord, TResult",">"),Object(r.b)("p",null,Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".AliasQueryBuilder"),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"{}"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"),"[]")))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"AliasQueryBuilder")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.select"}),Object(r.b)("em",{parentName:"a"},"Select"))))),Object(r.b)("h2",{id:"callable"},"Callable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"AliasQueryBuilder"),"<AliasUT, TResult2",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#inferrablecolumndescriptor"}),Object(r.b)("em",{parentName:"a"},"InferrableColumnDescriptor")),"<",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),">",">","[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<",Object(r.b)("em",{parentName:"td"},"ArrayMember"),"<AliasUT","\\",">, ",Object(r.b)("em",{parentName:"td"},"string"),", ",Object(r.b)("em",{parentName:"td"},"never"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"UnionToIntersection"),"<",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<AliasUT ",Object(r.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(r.b)("em",{parentName:"td"},"extends")," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.ref"}),Object(r.b)("em",{parentName:"a"},"Ref")),"<",Object(r.b)("em",{parentName:"td"},"any"),", TMapping","\\","> ? TMapping : I : ",Object(r.b)("em",{parentName:"td"},"never"),", ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),"\\",">, {}","\\",">","\\",">","\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"...aliases")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AliasUT")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:917"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"AliasQueryBuilder"),"<AliasUT, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#inferrablecolumndescriptor"}),Object(r.b)("em",{parentName:"a"},"InferrableColumnDescriptor")),"<",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),">",">","[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<",Object(r.b)("em",{parentName:"td"},"ArrayMember"),"<AliasUT","\\",">, ",Object(r.b)("em",{parentName:"td"},"string"),", ",Object(r.b)("em",{parentName:"td"},"never"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"UnionToIntersection"),"<",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<AliasUT ",Object(r.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(r.b)("em",{parentName:"td"},"extends")," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.ref"}),Object(r.b)("em",{parentName:"a"},"Ref")),"<",Object(r.b)("em",{parentName:"td"},"any"),", TMapping","\\","> ? TMapping : I : ",Object(r.b)("em",{parentName:"td"},"never"),", ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),"\\",">, {}","\\",">","\\",">","\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"aliases")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AliasUT")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:928"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"AliasQueryBuilder"),"<AliasUT, TResult2",">","(...",Object(r.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"(",Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),">",")[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<",Object(r.b)("em",{parentName:"td"},"ArrayMember"),"<AliasUT","\\",">, ",Object(r.b)("em",{parentName:"td"},"string"),", ",Object(r.b)("em",{parentName:"td"},"never"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"UnionToIntersection"),"<",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<AliasUT ",Object(r.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(r.b)("em",{parentName:"td"},"extends")," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.ref"}),Object(r.b)("em",{parentName:"a"},"Ref")),"<",Object(r.b)("em",{parentName:"td"},"any"),", TMapping","\\","> ? TMapping : I : ",Object(r.b)("em",{parentName:"td"},"never"),", ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),"\\",">, {}","\\",">","\\",">","\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"...aliases")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AliasUT")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:940"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"AliasQueryBuilder"),"<AliasUT, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"aliases"),": AliasUT): ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"AliasUT")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"(",Object(r.b)("em",{parentName:"td"},"string")," ","|"," ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),">",")[]"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"ArrayIfAlready"),"<TResult, ",Object(r.b)("em",{parentName:"td"},"AddAliases"),"<",Object(r.b)("em",{parentName:"td"},"AddKey"),"<",Object(r.b)("em",{parentName:"td"},"SetBase"),"<",Object(r.b)("em",{parentName:"td"},"UnwrapArrayMember"),"<TResult","\\",">, TRecord","\\",">, ",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<",Object(r.b)("em",{parentName:"td"},"ArrayMember"),"<AliasUT","\\",">, ",Object(r.b)("em",{parentName:"td"},"string"),", ",Object(r.b)("em",{parentName:"td"},"never"),"\\",">","\\",">, ",Object(r.b)("em",{parentName:"td"},"UnionToIntersection"),"<",Object(r.b)("em",{parentName:"td"},"IncompatibleToAlt"),"<AliasUT ",Object(r.b)("em",{parentName:"td"},"extends")," I[] ? I ",Object(r.b)("em",{parentName:"td"},"extends")," ",Object(r.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/api/interfaces/knex.knex.ref"}),Object(r.b)("em",{parentName:"a"},"Ref")),"<",Object(r.b)("em",{parentName:"td"},"any"),", TMapping","\\","> ? TMapping : I : ",Object(r.b)("em",{parentName:"td"},"never"),", ",Object(r.b)("em",{parentName:"td"},"Dict"),"<",Object(r.b)("em",{parentName:"td"},"any"),"\\",">, {}","\\",">","\\",">","\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"aliases")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AliasUT")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/classes/knex.knex.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:952"))}d.isMDXComponent=!0}}]);