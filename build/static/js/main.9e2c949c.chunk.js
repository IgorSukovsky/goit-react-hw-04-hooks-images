(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2FpUk",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3ffVh"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3sb4t",Modal:"Modal_Modal__3muZy"}},24:function(e,t,a){e.exports={spinner:"Loader_spinner__1BQ--"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2HNOo"}},26:function(e,t,a){e.exports={Button:"Button_Button__23AdF"}},27:function(e,t,a){e.exports={App:"App_App__1Krh1"}},32:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1dnsq",SearchForm:"Searchbar_SearchForm__2swWJ",SearchFormButton:"Searchbar_SearchFormButton__15_Mq",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2_o4M",SearchFormInput:"Searchbar_SearchFormInput__2SbRe"}},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=(a(32),a(12)),s=a(4),i=a(22),u=a.n(i),m=function(e,t){return u.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("21692958-f8cd542283124fe4ad278ec7e","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},h=a(5),b=a.n(h),j=a(1);function d(e){var t=e.searchText,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),o("")},children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(j.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.target.value)}})]})})}var f=a(23),p=a.n(f),g=a(24),O=a.n(g),_=function(){return Object(j.jsx)(p.a,{className:O.a.spinner,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:500},"key")},x=a(10),S=a.n(x),I=function(e){var t=e.urlWeb,a=e.urlLarge,n=e.showModalWindow;return Object(j.jsx)("li",{className:S.a.ImageGalleryItem,onClick:function(){return n(a)},children:Object(j.jsx)("img",{src:t,alt:"",className:S.a.ImageGalleryItemImage})})},y=a(25),w=a.n(y),v=function(e){var t=e.imageData,a=e.showModalWindow;return Object(j.jsx)("ul",{className:w.a.ImageGallery,children:t.map((function(e,t){return Object(j.jsx)(I,{urlWeb:e.webformatURL,urlLarge:e.largeImageURL,showModalWindow:a},e.id+t)}))})},F=a(11),M=a.n(F);function L(e){var t=e.closeModalWindow,a=e.urlLarge;return Object(n.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}})),Object(j.jsx)("div",{onClick:t,className:M.a.Overlay,children:Object(j.jsx)("div",{className:M.a.Modal,children:Object(j.jsx)("img",{src:a,alt:"urlLarge"})})})}var N=a(26),B=a.n(N),k=function(e){var t=e.loadMore;return Object(j.jsx)("button",{id:"scrollHeight",className:B.a.Button,onClick:t,children:"Load More"})},G=a(27),W=a.n(G);var E=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),i=o[0],u=o[1],h=Object(n.useState)(!1),b=Object(s.a)(h,2),f=b[0],p=b[1],g=Object(n.useState)(!1),O=Object(s.a)(g,2),x=O[0],S=O[1],I=Object(n.useState)(""),y=Object(s.a)(I,2),w=y[0],F=y[1],M=Object(n.useState)(1),N=Object(s.a)(M,2),B=N[0],G=N[1],E=function(e){S(!x)};return Object(n.useEffect)((function(){""!==a&&function(e,t){p(!0),m(e,t).then((function(e){e.length&&u((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))}))})).then((function(){t>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return console.log(e)})).finally((function(){return p({isLoading:!1})}))}(a,B)}),[a,B]),Object(j.jsxs)("div",{className:W.a.App,children:[Object(j.jsx)(d,{searchText:function(e){r(e),G(1),u([])}}),f?Object(j.jsx)(_,{}):null,Object(j.jsx)(v,{imageData:i,showModalWindow:function(e){F(e),S(!0),E()}}),x&&Object(j.jsx)(L,{urlLarge:w,closeModalWindow:E}),i.length?Object(j.jsx)(k,{loadMore:function(){p(!0),G((function(e){return e+1}))}}):""]})};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.9e2c949c.chunk.js.map