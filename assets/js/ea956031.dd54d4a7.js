(window.webpackJsonp=window.webpackJsonp||[]).push([[1064],{1134:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return O}));var n=a(3),b=a(7),r=(a(0),a(1253)),c={id:"entityassigner",title:"Class: EntityAssigner",sidebar_label:"EntityAssigner"},i={unversionedId:"api/classes/entityassigner",id:"version-4.3/api/classes/entityassigner",isDocsHomePage:!1,title:"Class: EntityAssigner",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/entityassigner.md",slug:"/api/classes/entityassigner",permalink:"/docs/4.3/api/classes/entityassigner",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/entityassigner.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611567478,sidebar_label:"EntityAssigner",sidebar:"version-4.3/API",previous:{title:"Class: DriverException",permalink:"/docs/4.3/api/classes/driverexception"},next:{title:"Class: EntityCaseNamingStrategy",permalink:"/docs/4.3/api/classes/entitycasenamingstrategy"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"assignCollection",id:"assigncollection",children:[]},{value:"assignReference",id:"assignreference",children:[]},{value:"autoWireOneToOne",id:"autowireonetoone",children:[]},{value:"createCollectionItem",id:"createcollectionitem",children:[]},{value:"validateEM",id:"validateem",children:[]}]}],l={toc:p};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"EntityAssigner"))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"assign"},"assign"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"assign"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#entitydata"}),"EntityData"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions"),"): T"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityAssigner.ts#L14"}),"packages/core/src/entity/EntityAssigner.ts:14"))),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#entitydata"}),"EntityData"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"assign"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"data"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#entitydata"}),"EntityData"),"<","T>, ",Object(r.b)("inlineCode",{parentName:"p"},"onlyProperties?"),": boolean): T"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityAssigner.ts#L15"}),"packages/core/src/entity/EntityAssigner.ts:15"))),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"data")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#entitydata"}),"EntityData"),"<","T>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"onlyProperties?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"assigncollection"},"assignCollection"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static")," ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"assignCollection"),"<","T, U>(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"collection"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/collection"}),"Collection"),"<","U>, ",Object(r.b)("inlineCode",{parentName:"p"},"value"),": any[], ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),", ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions"),"): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityAssigner.ts#L114"}),"packages/core/src/entity/EntityAssigner.ts:114"))),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"U")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","U>"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AnyEntity")))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"collection")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/collection"}),"Collection"),"<","U>")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"assignreference"},"assignReference"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static")," ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"assignReference"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T, ",Object(r.b)("inlineCode",{parentName:"p"},"value"),": any, ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),", ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions"),"): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityAssigner.ts#L97"}),"packages/core/src/entity/EntityAssigner.ts:97"))),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"autowireonetoone"},"autoWireOneToOne"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static"),Object(r.b)("strong",{parentName:"p"},"autoWireOneToOne"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": T): void"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityAssigner.ts#L71"}),"packages/core/src/entity/EntityAssigner.ts:71"))),Object(r.b)("p",null,"auto-wire 1:1 inverse side with owner as in no-sql drivers it can't be joined\nalso makes sure the link is bidirectional when creating new entities from nested structures"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"internal"))," "),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"T")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," void"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"createcollectionitem"},"createCollectionItem"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static")," ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"createCollectionItem"),"<","T>(",Object(r.b)("inlineCode",{parentName:"p"},"item"),": any, ",Object(r.b)("inlineCode",{parentName:"p"},"em"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),", ",Object(r.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(r.b)("inlineCode",{parentName:"p"},"invalid"),": any[], ",Object(r.b)("inlineCode",{parentName:"p"},"options"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions"),"): T"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityAssigner.ts#L126"}),"packages/core/src/entity/EntityAssigner.ts:126"))),Object(r.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"item")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"prop")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"invalid")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/assignoptions"}),"AssignOptions"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," T"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"validateem"},"validateEM"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Static")," ",Object(r.b)("inlineCode",{parentName:"p"},"Private"),Object(r.b)("strong",{parentName:"p"},"validateEM"),"(",Object(r.b)("inlineCode",{parentName:"p"},"em?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"),"): boolean"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Defined in ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/entity/EntityAssigner.ts#L89"}),"packages/core/src/entity/EntityAssigner.ts:89"))),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"em?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/entitymanager"}),"EntityManager"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," boolean"))}O.isMDXComponent=!0},1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),O=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},j=function(e){var t=O(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),j=O(a),m=n,s=j["".concat(c,".").concat(m)]||j[m]||o[m]||r;return a?b.a.createElement(s,i(i({ref:t},l),{},{components:a})):b.a.createElement(s,i({ref:t},l))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);