(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"NABI.IO - \\b开源训狗","description":"The only stop to train a beautifully healthy and obedient dog","author":"@Daniel_Jiang"}}}}')},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=I([].concat(t.fluid))),t.fixed&&(t.fixed=I([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=u(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,w=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function I(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function A(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function E(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(V,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),d):d})),V=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,w=e.itemProp,I=e.loading,E=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:R?1:0,transition:L?"opacity "+y+"ms":"none"},d),N="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},L&&P,d,f),W={title:t,alt:this.state.isVisible?"":a,style:T,className:g,itemProp:w};if(h){var j=h,q=p(h);return l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),N&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&P)}),q.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:W,imageVariants:j,generateSources:A}),q.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:W,imageVariants:j,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,v(j),l.default.createElement(V,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:I},q,{imageVariants:j}))}}))}if(m){var H=m,k=p(m),G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete G.display,l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},N&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},L&&P)}),k.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:W,imageVariants:H,generateSources:A}),k.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:W,imageVariants:H,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,v(H),l.default.createElement(V,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)({alt:a,title:t,loading:I},k,{imageVariants:H}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});L.propTypes={resolutions:C,sizes:N,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([N,c.default.arrayOf(N)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=L;t.default=P},RXBc:function(e,t,a){"use strict";a.r(t);a("q1tI");var i=a("vOnD").a.button.withConfig({displayName:"button__ExampleButton",componentId:"sc-8bri7a-0"})(["background:teal;color:gold;font-size:0.95rem;width:115%;border-radius:10px;border:1px solid ghostwhite;margin-top:10px;"]),r=a("8k0H"),n=a("hWhg"),s=a("9eSz"),d=a.n(s),o=a("qKvR"),l=function(){var e=n.data;return Object(o.a)(d.a,{fluid:e.file.childImageSharp.fluid})},c=a("vrFN"),u=function(e){return Object(o.a)("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)};t.default=function(){return Object(o.a)(r.a,null,Object(o.a)(c.a,{title:"Home"}),Object(o.a)("img",{style:{margin:"-40px 0px -10px -20px"},src:"/logo.png",alt:"Logo"}),Object(o.a)("h1",{style:{fontWeight:"bold"}},Object(o.a)(u,{symbol:"🐶",label:"dog"}),"欢迎来到狗狗的世界"),Object(o.a)("h2",null,"训练一条听话的对世界充满爱的狗狗"),Object(o.a)("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},Object(o.a)(l,null),Object(o.a)(i,null,"哥林多前书1 13:4-5: “爱是恒久忍耐和恩慈；它不嫉妒，不自夸，不张狂。 不做害羞的事情，不追求自己的利益，不轻易的发怒，不计较前恶。 不喜欢不义，只喜欢真理。 凡事包容，凡事相信，凡事盼望，凡事忍耐。爱是永不止息。”",Object(o.a)(u,{symbol:"❤️",label:"heart"}))),Object(o.a)("h6",{style:{color:"grey"}},"* 目前没有科研证明狗会感染或者传播新冠肺炎"))}},hWhg:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAAC+UlEQVQ4y42S609ScRzG/VNsra0XvWhra71s64VbW77Ixtqs3FqvanPdll30lRbUdHQxL/OSOlwSiKJgE5UDBOKVi0gYlKAowsCjgIKcw+HpcACRTOu7nfO7nPP77Pk936eoiC0AfGSKwhGVSqW4J117uxTcCwGEQzEEV8N09pc3Rbn6E8gdzky4OcOwY/bJfVc0zkFcp4dNu0JT4WOAeSV5RXmV3Bt2vReqDguUH+fRWqmiV0xb/wAyeVgyEceakwTpy8gI+WIQ8GSoPNvOAufSW0dfmYVkPczA4vZ+zHSKMdLmgFw4gw15HeI+B7u249OTccwMu9JnjvcwSsawQLiRtiuifIzRBimsGh+UzQswCIX4pTVA2bqIrqqJtH/Y9EXprJi/AxMxClMKD/wWG7YUNdCLWECzGcoWK2z9w5gWT0ItckDdswBdnx2b65GjgWw3uSu7bUF03B+BtKoD0uoujHbaMST8hrGGXswPTEEncSJJJ3O9Ot7DXDQWp6NYHmyB5tkNqKVBqN4PYeIRD90v9PC7tw5m8z9yyDCZVcQFl+IzWh4a8fUDgbChCXQi07cDmTwMZDcLupz5OYXEXor1z4JJ2RIkfAOsxFrWaJq1h+GywI7HKzwYZo8tAP61fm5u1/vRV6svDHoyue9hQVNYBJ8h15GkMveJhze5A85ZH/TSpXS8EXDZMNo6g+DGLnQ6AuZ5LtTQmUz04pKjUKGZkPEXu+9h22PmgA6NBIGfFphUXpjHPIiQa1A1lUP+rhGhQABlpZdQdrkEoZVVDMqkdP3rV4dj4zWK4ey9TQUIAZaJNjBIQNNrx8urXzglY5Je9AlK4CceQNtzB+dPFaPiRDFKL5yjzVbzYQ/Dy3OQ1/EoUQ0Pqrd3OQi5EUX3UzW2gxRIrxMSwXUo2qsx3ngTvCsXUV5xC2dOn6Rnp42FwERshx/xfsesVkUZiVHoB7oQ3yERJVmVIhsL3AMdD8I0IYbXs4wfJh3qa5+DIAgMsFeeNhr2gb8BRsEzTyg4riQAAAAASUVORK5CYII=","aspectRatio":1.171875,"src":"/static/35a423b01a786d14f6d423b2082bb99f/630fb/gatsby-astronaut.png","srcSet":"/static/35a423b01a786d14f6d423b2082bb99f/5db04/gatsby-astronaut.png 75w,\\n/static/35a423b01a786d14f6d423b2082bb99f/6d161/gatsby-astronaut.png 150w,\\n/static/35a423b01a786d14f6d423b2082bb99f/630fb/gatsby-astronaut.png 300w,\\n/static/35a423b01a786d14f6d423b2082bb99f/62b1f/gatsby-astronaut.png 450w,\\n/static/35a423b01a786d14f6d423b2082bb99f/2a4de/gatsby-astronaut.png 600w,\\n/static/35a423b01a786d14f6d423b2082bb99f/8b3b8/gatsby-astronaut.png 727w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},"t+fG":function(e,t,a){var i=a("P8UN"),r=a("96qb"),n=a("ap2Z"),s=/"/g,d=function(e,t,a,i){var r=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),d+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},vrFN:function(e,t,a){"use strict";var i=a("51K9"),r=(a("q1tI"),a("qhky")),n=a("qKvR");function s(e){var t=e.description,a=e.lang,s=e.meta,d=e.title,o=i.data.site,l=t||o.siteMetadata.description;return Object(n.a)(r.a,{htmlAttributes:{lang:a},title:d,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:d},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:l}].concat(s)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},zTTH:function(e,t,a){"use strict";var i=a("P8UN"),r=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-pages-index-js-2f9a3bd0bc1110771d40.js.map