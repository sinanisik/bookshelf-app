(this["webpackJsonpbookshelf-app"]=this["webpackJsonpbookshelf-app"]||[]).push([[0],{130:function(e,t,a){e.exports={view:"FilterSortBarStyles_view__PV0jD"}},137:function(e,t,a){e.exports=a(188)},142:function(e,t,a){},154:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"books",(function(){return U}));var r=a(0),o=a.n(r),c=a(39),l=a.n(c),i=(a(142),a(25)),u=a(192),s=a(193),m=a(194),p=a(195),d=a(196),E=a(197),f=a(33),b=a(31),h=a(32),O=a(190),v=a(191);function g(){var e=Object(b.a)(["\n  transition: all 0.3s ease 0s;\n\n  &:hover {\n    font-size: 18px;\n  }\n"]);return g=function(){return e},e}function k(){var e=Object(b.a)(["\n  transition: all 0.3s ease 0s;\n\n  &:hover {\n    font-size: 18px;\n  }\n"]);return k=function(){return e},e}var j=Object(h.a)(O.a)(k()),y=Object(h.a)(v.a)(g()),x={left:[{title:"HomePage",to:"/"},{title:"Read Books",to:"/read-books"}],right:[{title:"+ Add Book",to:"/add-book"}]},w=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return o.a.createElement("div",null,o.a.createElement(u.a,{color:"dark",dark:!0,expand:"md"},o.a.createElement(s.a,{tag:f.b,to:"/"},"BookShelf App"),o.a.createElement(m.a,{onClick:function(){return n(!a)}}),o.a.createElement(p.a,{isOpen:a,navbar:!0},o.a.createElement(d.a,{className:"mr-auto",navbar:!0},x.left.map((function(e){return o.a.createElement(j,null,o.a.createElement(E.a,{tag:f.b,to:e.to},e.title))}))),x.right.map((function(e){return o.a.createElement(y,null,o.a.createElement(E.a,{tag:f.b,to:e.to},e.title))})))))},S=(a(154),function(){return o.a.createElement("div",null,o.a.createElement(w,null))}),T=a(30),B=a(43),_=a(8),C=a(53),A=a.n(C),R=["JavaScript","HTML","CSS","Python","JAVA"],P=[1,2,3,4,5],D=["Not read","Read"],N="https://5eb915b2bb17460016b32e61.mockapi.io",K=a(198),L=a(83),I={data:[],loading:!1,filter:"",searchTerm:"",searchType:"",sortTerm:"",view:""},F=function(e){var t=[];t=e.filter?e.data.filter((function(t){return t.category===e.filter})):e.data,e.searchTerm&&(t="title"===e.searchType?t.filter((function(t){return t.title.toLowerCase().indexOf(e.searchTerm.toLowerCase())>-1})):t.filter((function(t){return t.author.toLowerCase().indexOf(e.searchTerm.toLowerCase())>-1})));return e.sortTerm?Object(L.a)(t).sort((function(t,a){return"ratingD"===e.sortTerm?parseInt(a.rating)-parseInt(t.rating):"ratingA"===e.sortTerm?parseInt(t.rating)-parseInt(a.rating):"alphabetical"===e.sortTerm?t.title.split(" ")[0]>a.title.split(" ")[0]?1:-1:void 0})):t},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK":return Object(_.a)(Object(_.a)({},e),{},{data:[].concat(Object(L.a)(e.data),[t.payload])});case"SET_BOOKS":return Object(_.a)(Object(_.a)({},e),{},{data:t.payload,loading:!1});case"LOAD_BOOKS":return Object(_.a)(Object(_.a)({},e),{},{loading:!0});case"SET_FILTER":return Object(_.a)(Object(_.a)({},e),{},{filter:t.payload});case"UPDATE_BOOK":return Object(_.a)(Object(_.a)({},e),{},{data:e.data.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"SEARCH_BOOKS":return Object(_.a)(Object(_.a)({},e),{},{searchTerm:t.payload.searchTerm,searchType:t.payload.searchType});case"SORT_BOOKS":return Object(_.a)(Object(_.a)({},e),{},{sortTerm:t.payload});case"SET_VIEW":return Object(_.a)(Object(_.a)({},e),{},{view:t.payload});case"REMOVE_BOOK":return Object(_.a)(Object(_.a)({},e),{},{data:e.data.filter((function(e){return e.id!==t.payload}))});default:return e}},V={getBooks:function(){return function(e){e({type:"LOAD_BOOKS"}),A.a.get("".concat(N,"/books")).then((function(t){e({type:"SET_BOOKS",payload:t.data})})).catch((function(e){console.log(e)}))}}},M=Object(B.b)((function(e){return{books:e.books.data,loading:e.books.loading,view:e.books.view,filteredBooks:F(e.books)}}),V)((function(e){if(Object(r.useEffect)((function(){e.getBooks()}),[]),e.loading)return o.a.createElement("h1",null,"BOOKS ARE LOADING...");var t=e.filteredBooks,a="";if(a=t.length<1?o.a.createElement("h2",null,"NO BOOKS HERE"):o.a.createElement(Ue,{items:t,view:e.view}),e.componentProps.isReadBooks){var n=t.filter((function(e){return"Read"===e.status}));a=o.a.createElement(Ue,{items:n,view:e.view})}return o.a.createElement("div",null,o.a.createElement(Te,null),o.a.createElement(K.a,null,o.a.createElement("div",{className:"books-holder"},a)))})),z=a(199),H=a(200),q=function(e){var t=Object(r.useState)(""),a=Object(i.a)(t,2),n=a[0],c=a[1];Object(r.useEffect)((function(){var t=e.routerProps.match.params.id;t&&A.a.get("".concat(N,"/books/").concat(t)).then((function(e){c(e.data)}))}),[]);var l=e.componentProps.isEdit;e.routerProps.match.params.id;return o.a.createElement(K.a,null,o.a.createElement(z.a,null,o.a.createElement(H.a,{xs:12},l?o.a.createElement("h3",null,"Edit book"):o.a.createElement("h3",null,"Add a new book")),o.a.createElement(H.a,{xs:12},o.a.createElement(le,{isEdit:l,book:n}))))},G=[{title:"Home Page",path:"/",exact:!0,componentProps:{},component:M},{title:"Add Book",path:"/add-book",exact:!1,componentProps:{},component:q},{title:"Edit Book",path:"/edit-book/:id",exact:!1,componentProps:{isEdit:!0},component:q},{title:"Read Books",path:"/read-books",exact:!1,componentProps:{isReadBooks:!0},component:M}],J=function(){return o.a.createElement("div",null,o.a.createElement(T.c,null,G.map((function(e){return o.a.createElement(T.a,{path:e.path,exact:e.exact,component:function(t){var a=e.component;return o.a.createElement(pe,{title:e.title,routerProps:t,componentProps:e.componentProps},a)}})}))))},W=a(134),X=a(201),$=a(202),Q=a(203),Y=a(204),Z=a(205),ee=a(206),te=a(127),ae=a(67),ne=a(88),re=a.n(ne),oe=ae.a().shape({title:ae.b().required("Title is a required field"),author:ae.b().required("Author is a required field"),review:ae.b().min(30,"Please enter minimum 30 characters."),imageUrl:ae.b().url()}),ce={addBook:function(e,t){return function(a){A.a.post("".concat(N,"/books"),e).then((function(e){a({type:"ADD_BOOK",payload:e.data}),t.push("/")})).catch((function(e){console.log(e)}))}},updateBook:function(e,t,a){return function(n){A.a.put("".concat(N,"/books/").concat(e),Object(_.a)({},t)).then((function(e){n({type:"UPDATE_BOOK",payload:e.data}),a.push("/")})).catch((function(e){console.log(e)}))}},removeBook:function(e,t){return function(a){A.a.delete("".concat(N,"/books/").concat(e)).then((function(){a({type:"REMOVE_BOOK",payload:e}),t.push("/")}))}}},le=Object(T.f)(Object(B.b)(null,ce)((function(e){var t={title:"",author:"",category:"",description:"",rating:"",review:"",imageUrl:"",link:"",status:""};return e.isEdit&&e.book&&(t=Object(_.a)({},e.book)),o.a.createElement("div",null,o.a.createElement(W.a,{initialValues:t,validationSchema:oe,onSubmit:function(t){console.log(t),e.isEdit?e.updateBook(e.book.id,t,e.history):e.addBook(t,e.history)},enableReinitialize:!0},(function(t){var a=t.values,n=t.errors,r=(t.touched,t.handleChange),c=(t.handleBlur,t.handleSubmit);t.isSubmitting;return o.a.createElement(X.a,{onSubmit:c},o.a.createElement(z.a,null,o.a.createElement(H.a,{xs:6},o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"title"},"Title"),o.a.createElement(Y.a,{type:"text",name:"title",id:"title",placeholder:"Name of the book",value:a.title,onChange:r,invalid:n.title}),n.title&&o.a.createElement(Z.a,null,n.title))),o.a.createElement(H.a,{xs:6},o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"author"},"Author"),o.a.createElement(Y.a,{type:"text",name:"author",id:"author",placeholder:"Author of the book",value:a.author,onChange:r,invalid:n.author}),n.author&&o.a.createElement(Z.a,null,n.author)))),o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"link"},"Goodreads URL"),o.a.createElement(Y.a,{type:"text",name:"link",id:"link",placeholder:"Goodreads link of the book",value:a.link,onChange:r})),o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"imageUrl"},"Image URL"),o.a.createElement(Y.a,{type:"text",name:"imageUrl",id:"imageUrl",placeholder:"Image of the book",value:a.imageUrl,onChange:r})),o.a.createElement(z.a,null,o.a.createElement(H.a,{xs:4},o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"exampleSelect"},"Category"),o.a.createElement(Y.a,{type:"select",name:"category",id:"category",value:a.category,onChange:r},R.map((function(e){return o.a.createElement("option",null,e)}))))),o.a.createElement(H.a,{xs:4},o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"rating"},"Rating"),o.a.createElement(Y.a,{type:"select",name:"rating",id:"rating",value:a.rating,onChange:r},P.map((function(e){return o.a.createElement("option",null,e)}))))),o.a.createElement(H.a,{xs:4},o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"exampleSelect"},"Status"),o.a.createElement(Y.a,{type:"select",name:"status",id:"status",value:a.status,onChange:r},D.map((function(e){return o.a.createElement("option",null,e)})))))),o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"exampleText"},"Description"),o.a.createElement(Y.a,{type:"textarea",name:"description",id:"description",value:a.description,onChange:r})),o.a.createElement($.a,null,o.a.createElement(Q.a,{for:"review"},"Review"),o.a.createElement(Y.a,{type:"textarea",name:"review",id:"review",value:a.review,onChange:r,invalid:n.review}),o.a.createElement(Z.a,null,n.review),o.a.createElement(ee.a,null,"Review should be minimum 30 characters.")),e.isEdit?o.a.createElement(z.a,null,o.a.createElement(H.a,{xs:{size:2,offset:4}},o.a.createElement(te.a,{className:re.a.button,color:"primary"},"Save")),o.a.createElement(H.a,{xs:{size:2}},o.a.createElement(te.a,{type:"button",className:re.a.button,color:"danger",onClick:function(){e.removeBook(e.book.id,e.history)}},"Delete"))):o.a.createElement(te.a,{className:re.a.button,color:"primary"},"Add"))})))}))),ie=a(128),ue=a(129),se=a(136),me=a(135),pe=function(e){Object(se.a)(a,e);var t=Object(me.a)(a);function a(e){return Object(ie.a)(this,a),t.call(this,e)}return Object(ue.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.title;document.title=e}},{key:"render",value:function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(e,{routerProps:this.props.routerProps,componentProps:this.props.componentProps}))}}]),a}(r.Component),de=a(209),Ee=a(219),fe=a(210),be=a(211),he=a(207),Oe=a(208);function ve(){var e=Object(b.a)(["\n  width: 10%;\n"]);return ve=function(){return e},e}function ge(){var e=Object(b.a)(["\n  display: inline-flex;\n  width: 60%;\n\n  &.sort {\n    width: 30%;\n    align-self: flex-end;\n  }\n"]);return ge=function(){return e},e}function ke(){var e=Object(b.a)(["\n  margin-left: 15px;\n  color: ",";\n  cursor: pointer;\n"]);return ke=function(){return e},e}var je=Object(h.a)(v.a)(ke(),(function(e){return e.active?"#FF8247":"#035491"})),ye=Object(h.a)(he.a)(ge()),xe=(Object(h.a)(Oe.a)(ve()),a(130)),we=a.n(xe),Se={changeFilter:function(e){return function(t){t({type:"SET_FILTER",payload:e})}},search:function(e){return function(t){t({type:"SEARCH_BOOKS",payload:e})}},sort:function(e){return function(t){t({type:"SORT_BOOKS",payload:e})}},setViewOption:function(e){return{type:"SET_VIEW",payload:e}}},Te=Object(B.b)((function(e){return{activeFilter:e.books.filter}}),Se)((function(e){var t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],l=Object(r.useState)(!1),u=Object(i.a)(l,2),s=(u[0],u[1],"fas fa-list fa-2x"),m="fas fa-th-large fa-2x",p=Object(r.useState)(s),E=Object(i.a)(p,2),f=E[0],b=E[1],h=Object(r.useState)({searchType:"title",searchTerm:""}),O=Object(i.a)(h,2),v=O[0],g=O[1],k=Object(r.useState)("list"),j=Object(i.a)(k,2),y=j[0],x=j[1];return Object(r.useEffect)((function(){e.search(v)}),[v]),Object(r.useEffect)((function(){e.setViewOption(y)}),[y]),Object(r.useEffect)((function(){x("fas fa-list fa-2x"===f?"Grid":"List")}),[f]),o.a.createElement("div",null,o.a.createElement(K.a,{fluid:!0,className:"bg-white",style:{padding:"15px"}},o.a.createElement(z.a,null,o.a.createElement(H.a,{xs:6},o.a.createElement(d.a,{className:"bg-white"},o.a.createElement(je,null,o.a.createElement("strong",null,"Categories:")),o.a.createElement(je,{active:!e.activeFilter,onClick:function(){e.changeFilter("")}},"All"),R.map((function(t){return o.a.createElement(je,{active:e.activeFilter===t,onClick:function(){e.changeFilter(t)}},t)})))),o.a.createElement(H.a,{xs:6},o.a.createElement(ye,null,o.a.createElement(de.a,{addonType:"append",isOpen:n,toggle:function(){return c(!n)}},o.a.createElement(Ee.a,{caret:!0},"Search by ",v.searchType),o.a.createElement(fe.a,null,o.a.createElement(be.a,{value:"title",onClick:function(e){g(Object(_.a)(Object(_.a)({},v),{},{searchType:e.target.value}))}},"Title"),o.a.createElement(be.a,{divider:!0}),o.a.createElement(be.a,{value:"author",onClick:function(e){g(Object(_.a)(Object(_.a)({},v),{},{searchType:e.target.value}))}},"Author"))),o.a.createElement(Y.a,{onChange:function(e){g(Object(_.a)(Object(_.a)({},v),{},{searchTerm:e.target.value}))}})),o.a.createElement(ye,{className:"sort"},o.a.createElement(Y.a,{type:"select",name:"select",id:"exampleSelect",onChange:function(t){e.sort(t.target.value)}},o.a.createElement("option",{value:""},"No Sort"),o.a.createElement("option",{value:"alphabetical"},"Alphabetical"),o.a.createElement("option",{value:"ratingA"},"Rating (Ascending)"),o.a.createElement("option",{value:"ratingD"},"Rating (Descending)"))),o.a.createElement("a",{className:we.a.view,onClick:function(){b(f===m?s:m)}},o.a.createElement("i",{className:f}))))))})),Be=a(214),_e=a(215),Ce=a(213),Ae=a(218),Re=a(216),Pe=a(217),De=a(212);function Ne(){var e=Object(b.a)(["\n  strong {\n    color: rgb(255, 7, 110);\n  }\n"]);return Ne=function(){return e},e}function Ke(){var e=Object(b.a)(["\n  height: 500px;\n  border-radius: 8px;\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);\n  margin-bottom: 40px;\n  .card-img-top {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    height: 250px;\n  }\n"]);return Ke=function(){return e},e}var Le=Object(h.a)(De.a)(Ke()),Ie=Object(h.a)(Ce.a)(Ne()),Fe=function(e){var t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],l=e.imageUrl,u=e.rating,s=e.title,m=e.id,p=e.review;return o.a.createElement(Le,null,o.a.createElement(Be.a,{top:!0,width:"100%",src:l,alt:s}),o.a.createElement(_e.a,null,o.a.createElement(Ie,null,o.a.createElement("strong",null,"".concat(u," / 5"))),o.a.createElement(Ce.a,null,s),o.a.createElement(te.a,{id:"popover".concat(m),type:"button"},"Review"),o.a.createElement(Ae.a,{placement:"bottom",isOpen:n,target:"popover".concat(m),toggle:function(){return c(!n)}},o.a.createElement(Re.a,null,p||"No review for this book")),o.a.createElement("br",null),o.a.createElement(Pe.a,null,"Details"),o.a.createElement(Pe.a,null,o.a.createElement(f.b,{to:"/edit-book/".concat(m)},"Edit Book")),o.a.createElement("br",null),e.link&&o.a.createElement(Pe.a,null,o.a.createElement("a",{href:e.link,target:"_blank"},"Learn More!"))))},Ue=function(e){return o.a.createElement(z.a,null,e.items.map((function(t){return o.a.createElement(H.a,{xs:"List"===e.view?{size:4,offset:4}:3},o.a.createElement(Fe,t))})))};var Ve=function(){return o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(186),a(187);var Me=a(52),ze=a(133),He=Object(Me.c)(n),qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Me.d,Ge=Object(Me.e)(He,qe(Object(Me.a)(ze.a))),Je=a(17),We=Object(Je.a)();l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B.a,{store:Ge},o.a.createElement(f.a,{history:We},o.a.createElement(Ve,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports={button:"AddBookForm_button__TdcP-"}}},[[137,1,2]]]);
//# sourceMappingURL=main.d093bbc9.chunk.js.map