(this.webpackJsonpcurbside=this.webpackJsonpcurbside||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),i=a.n(r),c=a(20),s=a(8);a(84);var o=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"CURBSIDE"),l.a.createElement("div",{className:"user-credentials"},l.a.createElement(c.b,{className:"links",to:"/signin"},"SIGN IN"),l.a.createElement(c.b,{className:"links",to:"/signup"},"SIGN UP"))))};a(90);var m=function(){return l.a.createElement("div",{className:"homepage"},l.a.createElement(o,null),l.a.createElement("h1",{className:"homepage-name"},"CURBSIDE"),l.a.createElement("h2",{className:"tag-line"},"THE EASIEST WAY TO LET GO"))};function u(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function d(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function E(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}a(24),a(43),a(91);var g=a(41),p=a(40);var h=function(e){return l.a.createElement("header",{className:"navigation"},l.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"custom-nav"},l.a.createElement(p.a.Brand,{href:"/"},"Curbside"),l.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Link,{href:"/upload"},"Upload"),l.a.createElement(g.a.Link,{href:"#"}),l.a.createElement(g.a.Link,{href:"/search"},"Search")))))},f=a(26),v=a(27),b=a(30),N=a(28),S=a(39),_=a.n(S),y=function(){return _.a.get("/api/listings")},C=function(e){return _.a.delete("/api/listings/"+e)},O=function(e){return _.a.post("/api/listings",e)};var I=function(e){return l.a.createElement("form",{className:"search sticky-top"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"listings"},"search:"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,id:"listings",type:"text",name:"search",list:"listing",className:"inputBox",placeholder:"search listings"}),l.a.createElement("button",{type:"submit",onClick:e.handleSearch,className:"btn btn-custom"},"Search")))},j=a(54),w=a(32),k=a(38),x=(a(110),a(37)),T=a(36),L=a(33);var A=function(e){var t=l.a.useState(!1),a=Object(k.a)(t,2),n=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(L.a,{show:n,"aria-labelledby":"contained-modal-title-vcenter"},l.a.createElement(L.a.Header,{closeButton:!0},l.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},e.content)),l.a.createElement(L.a.Body,{className:"show-grid"},l.a.createElement(j.a,null,l.a.createElement(T.a,{size:"md-6"},l.a.createElement("p",null,e.description)),l.a.createElement(w.a,null,l.a.createElement(T.a,{size:"md-12"},l.a.createElement("p",null,e.location))))),l.a.createElement(L.a.Footer,null,l.a.createElement(x.a,{className:"btn-custom",variant:"custom",onClick:function(){return r(!1)}},"Close"))),l.a.createElement(x.a,{className:"btn-custom",variant:"custom",onClick:function(){return r(!0)}},"View"))},B=a(25),D=a(64);var P=function(e){return l.a.createElement(B.a,{style:{width:"18rem"}},l.a.createElement(B.a.Img,{variant:"top",src:"holder.js/100px180?text=Image cap"}),l.a.createElement(B.a.Body,null,l.a.createElement(B.a.Title,null,e.listingTitle),l.a.createElement(B.a.Text,null,e.listingDescription)),l.a.createElement(D.a,{className:"list-group-flush"},l.a.createElement(D.a.Item,null,e.location)),l.a.createElement(B.a.Body,null,e.modalButton))},U=function(e){Object(b.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",listings:[],listingSort:[],order:""},e.sortByName=function(){var t=e.state.listingSort;if("ascending"===e.state.order){var a=t.sort((function(e,t){return e.date>t.date?1:-1}));console.log(a),e.setState({listingSort:a,order:"descending"})}else{var n=t.sort((function(e,t){return e.date>t.date?-1:1}));e.setState({listingSort:n,order:"ascending"})}},e.handleInputChange=function(t){var a=e.state.listings,n=t.target.value,l=a.filter((function(e){return e.listing_title.toLowerCase().indexOf(n.toLowerCase())>-1}));e.setState({listingSort:l})},e.listingSearch=function(){y().then((function(t){return e.setState({listingSort:t.data,listings:t.data})})).catch((function(e){return console.log(e)}))},e.handleSearch=function(t){t.preventDefault(),t.persist();var a=e.state,n=a.listings,l=a.search;t.target.value;console.log(t);var r=n.filter((function(e){return e.listing_title.toLowerCase().includes(l.toLowerCase())}));e.setState({listingSort:r})},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){return e.setState({listings:t.data,listingSort:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,{fluid:!0},l.a.createElement(w.a,null,l.a.createElement(E,{size:"md-3 sm-12"},l.a.createElement(I,{listing:this.state.listings,handleSearch:this.handleSearch,handleInputChange:this.handleInputChange})),l.a.createElement(E,{size:"md-9 sm-12"},l.a.createElement("thead",{className:""},l.a.createElement(w.a,{className:" sticky-top"},l.a.createElement("h2",{className:"hover-pointer heading",onClick:this.sortByName},"Date Added"))),this.state.listings.length?l.a.createElement("tbody",{className:""},this.state.listingSort.map((function(e){return console.log(e),l.a.createElement(w.a,{key:e._id,className:""},l.a.createElement(P,{listingTitle:e.listing_title,listingDescription:e.listing_description,location:e.listing_location,modalButton:l.a.createElement(A,{content:e.listing_title,description:e.listing_description,location:e.listing_location})}))}))):l.a.createElement("h3",null,"No Results to Display")))))}}]),a}(n.Component);var R=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("head",null),l.a.createElement(h,null),l.a.createElement(u,{fluid:!0},l.a.createElement(U,null)))},z=a(55),G=a.n(z);var H=function(){return l.a.createElement("div",{className:"log"},l.a.createElement("header",{className:"log-header"},l.a.createElement("a",{className:"log-brand",href:"/"},"CURBSIDE  ")),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("img",{src:G.a,alt:"boxes toppled over"})),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{className:"log-title"},"SIGN IN")),l.a.createElement("div",{className:"row"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("button",{type:"submit",className:"btn"},"LOG IN"),l.a.createElement("br",null),l.a.createElement(c.b,{id:"signin-link",to:"/signup"},"SIGN UP")))))))};a(111);var K=function(){return l.a.createElement("div",{className:"log"},l.a.createElement("header",{className:"log-header"},l.a.createElement("a",{className:"log-brand",href:"/"},"CURBSIDE")),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("img",{src:G.a,alt:"boxes toppled over"})),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",{className:"log-title"},"CREATE AN ACCOUNT")),l.a.createElement("div",{className:"row"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("button",{type:"submit",className:"btn"},"SIGN UP"),l.a.createElement("br",null),l.a.createElement(c.b,{id:"signin-link",to:"/signin"},"SIGN IN")))))))},F=a(56),W=a(61);a(112);var J=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};a(113);function M(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function V(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var Y=a(63);a(78),a(114);function q(e){return l.a.createElement(Y.a.Control,Object.assign({type:"text"},e))}function Q(e){return l.a.createElement(x.a,Object.assign({},e,{style:{float:"right",marginBottom:10},variant:"custom"}),e.children)}a(115);var X=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({listing_title:"",listing_description:"",listing_condition:"",listing_location:""}),c=Object(k.a)(i,2),s=c[0],o=c[1];function m(){y().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}function g(e){var t=e.target,a=t.name,n=t.value;o(Object(W.a)(Object(W.a)({},s),{},Object(F.a)({},a,n)))}return Object(n.useEffect)((function(){m()}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("head",null),l.a.createElement(h,null),l.a.createElement(u,{fluid:!0},l.a.createElement(d,null,l.a.createElement(E,{size:"md-6 sm-12"},a.length?l.a.createElement(M,null,a.map((function(e){return l.a.createElement(V,{key:e._id},l.a.createElement("a",{href:"/listings/"+e._id},l.a.createElement("strong",null,e.listing_title," in ",e.listing_location)),l.a.createElement(J,{onClick:function(){return t=e._id,void C(t).then((function(e){return m()})).catch((function(e){return console.log(e)}));var t}}))}))):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(E,{size:"md-6 input"},l.a.createElement("form",null,l.a.createElement(q,{onChange:g,name:"listing_title",placeholder:"listing title",value:s.listing_title}),l.a.createElement(q,{onChange:g,name:"listing_description",placeholder:"listing description",value:s.listing_description}),l.a.createElement(q,{onChange:g,name:"listing_condition",placeholder:"condition (used, new, etc.)",value:s.listing_condition}),l.a.createElement(q,{onChange:g,name:"listing_location",placeholder:"city, state",value:s.listing_location}),l.a.createElement(Q,{onClick:function(e){e.preventDefault(),s.listing_title&&s.listing_location&&O({listing_title:s.listing_title,listing_description:s.listing_description,listing_condition:s.listing_condition,listing_location:s.listing_location}).then((function(){return o({listing_title:"",listing_description:"",listing_condition:"",listing_location:""})})).then((function(){return m()})).catch((function(e){return console.log(e)}))}}," Submit Listing"))))))},Z=a(53),$=a(42),ee=a(62),te=a.n(ee),ae=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY;te.a.setApiKey(ae);var ne={width:"400px",height:"400px"},le=function(e){Object(b.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={center:{lat:0,lng:0},address:""},n.setLocation=n.setLocation.bind(Object(Z.a)(n)),n}return Object(v.a)(a,[{key:"setLocation",value:function(){var e=this;te.a.fromAddress(this.state.address).then((function(t){var a=t.results[0].geometry.location;e.setState({center:a})}),(function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement($.c,{googleMapsApiKey:ae},l.a.createElement($.b,{mapContainerStyle:ne,center:this.state.center,zoom:13},l.a.createElement($.d,{position:this.state.center}),l.a.createElement($.a,{center:this.state.center,radius:500}),l.a.createElement(l.a.Fragment,null))),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.setLocation()}},l.a.createElement(q,{onChange:function(t){e.setState({address:t.target.value})}}),l.a.createElement(Q,{onClick:this.setLocation}," Submit Listing")))}}]),a}(n.Component),re=function(e){Object(b.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(v.a)(a,[{key:"render",value:function(){return l.a.createElement(le,null)}}]),a}(n.Component);var ie=function(){return l.a.createElement(c.a,null,l.a.createElement("main",null,l.a.createElement(s.a,{exact:!0,path:["/","/homepage"],component:m}),l.a.createElement(s.a,{exact:!0,path:"/map",component:re}),l.a.createElement(s.a,{exact:!0,path:"/search",component:R}),l.a.createElement(s.a,{exact:!0,path:"/signin",component:H}),l.a.createElement(s.a,{exact:!0,path:"/signup",component:K}),l.a.createElement(s.a,{exact:!0,path:"/upload",component:X})))};i.a.render(l.a.createElement(ie,null),document.getElementById("root"))},24:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/img1.10ea94ba.png"},79:function(e,t,a){e.exports=a(117)},84:function(e,t,a){},90:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.37131537.chunk.js.map