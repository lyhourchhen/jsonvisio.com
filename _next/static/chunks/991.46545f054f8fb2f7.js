(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{7942:function(e,t,n){"use strict";var r=n(5696);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(4957),c=n(9898),l=n(639);var s={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,b=l.useIntersection({rootMargin:"200px"}),j=r(b,2),w=j[0],S=j[1],_=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=S&&n&&a.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,S,y,n,o]);var C={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}))}(e,o,d,p,m,v,x,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&u(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof y?y:o&&o.locale,L=o&&o.isLocaleDomain&&a.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);C.href=L||a.addBasePath(a.addLocale(p,E,o&&o.defaultLocale))}return i.default.cloneElement(t,C)};t.default=f},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=o.useRef(),f=o.useState(!1),d=r(f,2),p=d[0],h=d[1],m=o.useState(t?t.current:null),v=r(m,2),x=v[0],y=v[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),s||p||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:x,rootMargin:n}))}),[s,x,n,p]);return o.useEffect((function(){if(!a&&!p){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&y(t.current)}),[t]),[g,p]};var o=n(7294),i=n(6286),a="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},8991:function(e,t,n){"use strict";n.r(t);var r=n(9499),o=n(6835),i=n(7294),a=n(1664),c=n(186),l=n(4059),s=n(9583),u=n(5434),f=n(8193),d=n(471),p=n(6547),h=n(753),m=n(4931),v=n(5893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=c.ZP.div.withConfig({displayName:"Sidebar__StyledSidebar",componentId:"sc-5wi8ce-0"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:42px;background:#2f3136;padding:8px;border-right:1px solid ",";"],(function(e){return e.theme.SILVER_DARK})),b=c.ZP.div.withConfig({displayName:"Sidebar__StyledElement",componentId:"sc-5wi8ce-1"})(["text-align:center;font-size:28px;font-weight:700;width:100%;color:",";cursor:pointer;pointer-events:",";a{text-align:center;width:100%;}svg{vertical-align:middle;}"],(function(e){var t=e.theme;return e.disabled?t.SILVER_DARK:t.SILVER}),(function(e){return e.disabled&&"none"})),j=c.ZP.span.withConfig({displayName:"Sidebar__StyledText",componentId:"sc-5wi8ce-2"})(["color:",";"],(function(e){var t=e.theme;return e.secondary?t.FULL_WHITE:t.ORANGE})),w=c.ZP.nav.withConfig({displayName:"Sidebar__StyledTopWrapper",componentId:"sc-5wi8ce-3"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:100%;& > div,a{border-bottom:1px solid ",";}"],(function(e){return e.theme.SILVER_DARK})),S=c.ZP.nav.withConfig({displayName:"Sidebar__StyledBottomWrapper",componentId:"sc-5wi8ce-4"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:100%;& > div,a{border-top:1px solid ",";}"],(function(e){return e.theme.SILVER_DARK})),_=c.ZP.div.withConfig({displayName:"Sidebar__StyledLogo",componentId:"sc-5wi8ce-5"})(["color:",";"],(function(e){return e.theme.FULL_WHITE})),C=c.ZP.label.withConfig({displayName:"Sidebar__StyledImportFile",componentId:"sc-5wi8ce-6"})(['cursor:pointer;input[type="file"]{display:none;}']);t.default=function(e){var t,n=e.setJson,c=i.useState(null),x=(0,o.Z)(c,2),E=x[0],L=x[1],I=(0,l._)("config",h.u),O=(0,o.Z)(I,2),P=O[0],k=O[1],R=function(e){k((function(t){return y(y({},t),{},(0,r.Z)({},e,!t[e]))}))};return i.useEffect((function(){if(E){var e=new FileReader;e.readAsText(E,"UTF-8"),e.onload=function(e){var t;n(null===(t=e.target)||void 0===t?void 0:t.result)}}}),[E,n]),(0,v.jsxs)(g,{children:[(0,v.jsxs)(w,{children:[(0,v.jsx)(a.default,{passHref:!0,href:"/",children:(0,v.jsx)(b,{as:"a",children:(0,v.jsxs)(_,{children:[(0,v.jsx)(j,{children:"J"}),(0,v.jsx)(j,{secondary:!0,children:"V"})]})})}),(0,v.jsx)(a.default,{passHref:!0,href:"/",children:(0,v.jsx)(b,{as:"a",title:"Home",children:(0,v.jsx)(f.V9Z,{})})}),(0,v.jsx)(b,{as:"a",title:"Auto Format",onClick:function(){R("autoformat"),(0,m.ZP)("Auto format has been ".concat(P.autoformat?"disabled.":"enabled."))},children:P.autoformat?(0,v.jsx)(u.kk0,{}):(0,v.jsx)(u.sGS,{})}),(0,v.jsx)(b,{as:"a",onClick:function(){n("[]"),localStorage.removeItem("json"),m.ZP.success("Cleared JSON and removed from memory.")},title:"Clear JSON",children:(0,v.jsx)(f.XzY,{})}),(0,v.jsx)(b,{as:"a",onClick:function(){return k((function(e){return y(y({},e),{},{layout:(0,p.a)(e.layout)})}))},title:"Change Layout",children:(t=P.layout,"LEFT"===t?(0,v.jsx)(d.mtx,{}):"UP"===t?(0,v.jsx)(d.LkX,{}):"RIGHT"===t?(0,v.jsx)(d.glP,{}):(0,v.jsx)(d.uFB,{}))}),(0,v.jsx)(b,{title:"Toggle Controls",as:"a",onClick:function(){R("controls"),(0,m.ZP)("Controls ".concat(P.controls?"disabled.":"enabled."))},children:P.controls?(0,v.jsx)(f.yLO,{}):(0,v.jsx)(f.QzB,{})}),(0,v.jsx)(b,{as:"a",title:"Toggle Expand/Collapse",onClick:function(){R("expand"),(0,m.ZP)("".concat(P.expand?"Collapsed":"Expanded"," nodes."))},children:P.expand?(0,v.jsx)(u.bPX,{}):(0,v.jsx)(u.SPo,{})}),(0,v.jsx)(b,{as:"a",title:"Import JSON File",children:(0,v.jsxs)(C,{children:[(0,v.jsx)("input",{onChange:function(e){var t;e.target.files&&L(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},type:"file",accept:"application/JSON"},null===E||void 0===E?void 0:E.name),(0,v.jsx)(s.Xur,{})]})})]}),(0,v.jsxs)(S,{children:[(0,v.jsx)(b,{children:(0,v.jsx)(a.default,{href:"https://twitter.com/aykutsarach",children:(0,v.jsx)("a",{rel:"me",target:"_blank",children:(0,v.jsx)(f.h3E,{})})})}),(0,v.jsx)(b,{children:(0,v.jsx)(a.default,{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,v.jsx)("a",{rel:"me",target:"_blank",children:(0,v.jsx)(f.RrF,{})})})})]})]})}},1664:function(e,t,n){e.exports=n(7942)}}]);