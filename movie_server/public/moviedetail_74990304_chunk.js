webpackJsonp([3],{460:function(e,t,n){"use strict";n(247),n(461)},461:function(e,t,n){var a=n(462);"string"==typeof a&&(a=[[e.id,a,""]]);n(185)(a,{});a.locals&&(e.exports=a.locals)},462:function(e,t,n){t=e.exports=n(184)(),t.push([e.id,".ant-card{background:#fff;border-radius:4px;font-size:12px;position:relative;overflow:hidden;transition:all .3s}.ant-card:hover{box-shadow:0 1px 6px rgba(0,0,0,.2);border-color:transparent}.ant-card-bordered{border:1px solid #e9e9e9}.ant-card-head{height:48px;line-height:48px;background:#fff;border-bottom:1px solid #e9e9e9;padding:0 24px}.ant-card-head-title{font-size:14px;display:inline-block;text-overflow:ellipsis;width:100%;overflow:hidden;white-space:nowrap;color:rgba(0,0,0,.85);font-weight:500}.ant-card-extra{position:absolute;right:24px;top:14px}.ant-card-body{padding:24px}.ant-card-loading .ant-card-body{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ant-card-loading-block{display:inline-block;margin:5px 1% 0;height:14px;border-radius:2px;background:linear-gradient(90deg,rgba(207,216,220,.2),rgba(207,216,220,.4),rgba(207,216,220,.2));-webkit-animation:card-loading 1.4s ease infinite;animation:card-loading 1.4s ease infinite;background-size:600% 600%}@-webkit-keyframes card-loading{0%,to{background-position:0 50%}50%{background-position:100% 50%}}@keyframes card-loading{0%,to{background-position:0 50%}50%{background-position:100% 50%}}",""])},463:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(254),o=a(i),r=n(292),l=a(r),s=n(1),d=a(s),c=n(342),u=a(c),p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&(n[a[i]]=e[a[i]]);return n};t.default=function(e){var t,n=e.prefixCls,a=void 0===n?"ant-card":n,i=e.className,r=e.extra,s=e.bodyStyle,c=e.title,f=e.loading,m=e.bordered,g=void 0===m||m,b=p(e,["prefixCls","className","extra","bodyStyle","title","loading","bordered"]),h=e.children,y=(0,u.default)(a,i,(t={},(0,l.default)(t,a+"-loading",f),(0,l.default)(t,a+"-bordered",g),t));f&&(h=d.default.createElement("div",null,d.default.createElement("p",{className:a+"-loading-block",style:{width:"94%"}}),d.default.createElement("p",null,d.default.createElement("span",{className:a+"-loading-block",style:{width:"28%"}}),d.default.createElement("span",{className:a+"-loading-block",style:{width:"62%"}})),d.default.createElement("p",null,d.default.createElement("span",{className:a+"-loading-block",style:{width:"22%"}}),d.default.createElement("span",{className:a+"-loading-block",style:{width:"66%"}})),d.default.createElement("p",null,d.default.createElement("span",{className:a+"-loading-block",style:{width:"56%"}}),d.default.createElement("span",{className:a+"-loading-block",style:{width:"39%"}})),d.default.createElement("p",null,d.default.createElement("span",{className:a+"-loading-block",style:{width:"21%"}}),d.default.createElement("span",{className:a+"-loading-block",style:{width:"15%"}}),d.default.createElement("span",{className:a+"-loading-block",style:{width:"40%"}}))));var v=void 0;return v=c?"string"==typeof c?d.default.createElement("div",{className:a+"-head"},d.default.createElement("h3",{className:a+"-head-title"},c)):d.default.createElement("div",{className:a+"-head"},d.default.createElement("div",{className:a+"-head-title"},c)):null,d.default.createElement("div",(0,o.default)({},b,{className:y}),v,r?d.default.createElement("div",{className:a+"-extra"},r):null,d.default.createElement("div",{className:a+"-body",style:s},h))},e.exports=t.default},464:function(e,t,n){"use strict";n(247),n(465)},465:function(e,t,n){var a=n(466);"string"==typeof a&&(a=[[e.id,a,""]]);n(185)(a,{});a.locals&&(e.exports=a.locals)},466:function(e,t,n){t=e.exports=n(184)(),t.push([e.id,'.ant-spin{color:#108ee9;vertical-align:middle;text-align:center;opacity:0;position:absolute;transition:-webkit-transform .3s cubic-bezier(.78,.14,.15,.86);transition:transform .3s cubic-bezier(.78,.14,.15,.86);transition:transform .3s cubic-bezier(.78,.14,.15,.86),-webkit-transform .3s cubic-bezier(.78,.14,.15,.86);font-size:12px;display:none}.ant-spin-spinning{opacity:1;position:static;display:inline-block}.ant-spin-nested-loading{position:relative}.ant-spin-nested-loading>div>.ant-spin{position:absolute;height:100%;max-height:320px;width:100%;z-index:4}.ant-spin-nested-loading>div>.ant-spin .ant-spin-dot{position:absolute;top:50%;left:50%;margin:-10px}.ant-spin-nested-loading>div>.ant-spin .ant-spin-text{position:absolute;top:50%;width:100%;padding-top:6px}.ant-spin-nested-loading>div>.ant-spin.ant-spin-show-text .ant-spin-dot{margin-top:-20px}.ant-spin-nested-loading>div>.ant-spin-sm .ant-spin-dot{margin:-7px}.ant-spin-nested-loading>div>.ant-spin-sm .ant-spin-text{padding-top:3px}.ant-spin-nested-loading>div>.ant-spin-sm.ant-spin-show-text .ant-spin-dot{margin-top:-17px}.ant-spin-nested-loading>div>.ant-spin-lg .ant-spin-dot{margin:-16px}.ant-spin-nested-loading>div>.ant-spin-lg .ant-spin-text{padding-top:12px}.ant-spin-nested-loading>div>.ant-spin-lg.ant-spin-show-text .ant-spin-dot{margin-top:-26px}.ant-spin-container{transition:all .3s cubic-bezier(.645,.045,.355,1);position:relative}.ant-spin-blur{overflow:hidden;opacity:.7;-webkit-filter:blur(.5px);filter:blur(.5px);filter:progid\\:DXImageTransform\\.Microsoft\\.Blur(PixelRadius\\=1,MakeShadow\\=false);-webkit-transform:translateZ(0)}.ant-spin-blur:after{content:"";position:absolute;left:0;right:0;top:0;bottom:0;background:#fff;opacity:.3;transition:all .3s}.ant-spin-tip{color:rgba(0,0,0,.43)}.ant-spin-dot{position:relative;display:inline-block;width:20px;height:20px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:antRotate 1.2s infinite linear;animation:antRotate 1.2s infinite linear}.ant-spin-dot i{width:9px;height:9px;border-radius:100%;background-color:#108ee9;-webkit-transform:scale(.75);-ms-transform:scale(.75);transform:scale(.75);display:block;position:absolute;opacity:.3;-webkit-animation:antSpinMove 1s infinite linear alternate;animation:antSpinMove 1s infinite linear alternate;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%}.ant-spin-dot i:first-child{left:0;top:0}.ant-spin-dot i:nth-child(2){right:0;top:0;-webkit-animation-delay:.4s;animation-delay:.4s}.ant-spin-dot i:nth-child(3){right:0;bottom:0;-webkit-animation-delay:.8s;animation-delay:.8s}.ant-spin-dot i:nth-child(4){left:0;bottom:0;-webkit-animation-delay:1.2s;animation-delay:1.2s}.ant-spin-sm .ant-spin-dot{width:14px;height:14px}.ant-spin-sm .ant-spin-dot i{width:6px;height:6px}.ant-spin-lg .ant-spin-dot{width:32px;height:32px}.ant-spin-lg .ant-spin-dot i{width:14px;height:14px}.ant-spin.ant-spin-show-text .ant-spin-text{display:block}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.ant-spin-blur{background:#fff;opacity:.5}}@-webkit-keyframes antSpinMove{to{opacity:1}}@keyframes antSpinMove{to{opacity:1}}@-webkit-keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}@keyframes antRotate{to{-webkit-transform:rotate(405deg);transform:rotate(405deg)}}',""])},467:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(254),o=a(i),r=n(292),l=a(r),s=n(296),d=a(s),c=n(297),u=a(c),p=n(298),f=a(p),m=n(334),g=a(m),b=n(1),h=a(b),y=n(190),v=a(y),x=n(36),w=n(342),k=a(w),E=n(363),N=a(E),O=n(468),_=a(O),S=n(390),P=a(S),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&(n[a[i]]=e[a[i]]);return n},C=function(e){function t(e){(0,d.default)(this,t);var n=(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=e.spinning;return n.state={spinning:a},n}return(0,g.default)(t,e),(0,u.default)(t,[{key:"isNestedPattern",value:function(){return!(!this.props||!this.props.children)}},{key:"componentDidMount",value:function(){(0,_.default)()||((0,x.findDOMNode)(this).className+=" "+this.props.prefixCls+"-show-text")}},{key:"componentWillUnmount",value:function(){this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props.spinning,a=e.spinning,i=this.props.delay;this.debounceTimeout&&clearTimeout(this.debounceTimeout),n&&!a?(this.debounceTimeout=setTimeout(function(){return t.setState({spinning:a})},300),this.delayTimeout&&clearTimeout(this.delayTimeout)):a&&i&&!isNaN(Number(i))?this.delayTimeout=setTimeout(function(){return t.setState({spinning:a})},i):this.setState({spinning:a})}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.size,i=t.prefixCls,r=t.tip,s=t.wrapperClassName,d=j(t,["className","size","prefixCls","tip","wrapperClassName"]),c=this.state.spinning,u=(0,k.default)(i,(e={},(0,l.default)(e,i+"-sm","small"===a),(0,l.default)(e,i+"-lg","large"===a),(0,l.default)(e,i+"-spinning",c),(0,l.default)(e,i+"-show-text",!!r),e),n),p=(0,P.default)(d,["spinning","delay"]),f=h.default.createElement("div",(0,o.default)({},p,{className:u}),h.default.createElement("span",{className:i+"-dot"},h.default.createElement("i",null),h.default.createElement("i",null),h.default.createElement("i",null),h.default.createElement("i",null)),r?h.default.createElement("div",{className:i+"-text"},r):null);if(this.isNestedPattern()){var m,g=i+"-nested-loading";s&&(g+=" "+s);var b=(0,k.default)((m={},(0,l.default)(m,i+"-container",!0),(0,l.default)(m,i+"-blur",c),m));return h.default.createElement(N.default,(0,o.default)({},p,{component:"div",className:g,style:null,transitionName:"fade"}),c&&h.default.createElement("div",{key:"loading"},f),h.default.createElement("div",{className:b,key:"container"},this.props.children))}return f}}]),t}(h.default.Component);t.default=C,C.defaultProps={prefixCls:"ant-spin",spinning:!0,size:"default",wrapperClassName:""},C.propTypes={prefixCls:v.default.string,className:v.default.string,spinning:v.default.bool,size:v.default.oneOf(["small","default","large"]),wrapperClassName:v.default.string},e.exports=t.default},468:function(e,t){"use strict";function n(){if(void 0!==a)return a;var e="Webkit Moz O ms Khtml".split(" "),t=document.createElement("div");if(void 0!==t.style.animationName&&(a=!0),void 0!==a)for(var n=0;n<e.length;n++)if(void 0!==t.style[e[n]+"AnimationName"]){a=!0;break}return a=a||!1}Object.defineProperty(t,"__esModule",{value:!0});var a=void 0;t.default=n,e.exports=t.default},469:function(e,t,n){"use strict";n(247),n(470)},470:function(e,t,n){var a=n(471);"string"==typeof a&&(a=[[e.id,a,""]]);n(185)(a,{});a.locals&&(e.exports=a.locals)},471:function(e,t,n){t=e.exports=n(184)(),t.push([e.id,".ant-alert{position:relative;padding:8px 48px 8px 38px;border-radius:4px;color:rgba(0,0,0,.65);font-size:12px;line-height:16px}.ant-alert.ant-alert-no-icon{padding:8px 48px 8px 16px}.ant-alert-icon{font-size:14px;top:9.5px;left:16px;position:absolute}.ant-alert-description{font-size:12px;line-height:21px;display:none}.ant-alert-success{border:1px solid #cfefdf;background-color:#ebf8f2}.ant-alert-success .ant-alert-icon{color:#00a854}.ant-alert-info{border:1px solid #d2eafb;background-color:#ecf6fd}.ant-alert-info .ant-alert-icon{color:#108ee9}.ant-alert-warning{border:1px solid #fff3cf;background-color:#fffaeb}.ant-alert-warning .ant-alert-icon{color:#ffbf00}.ant-alert-error{border:1px solid #fcdbd9;background-color:#fef0ef}.ant-alert-error .ant-alert-icon{color:#f04134}.ant-alert-close-icon{font-size:12px;position:absolute;right:16px;top:10px;height:12px;line-height:12px;overflow:hidden;cursor:pointer}.ant-alert-close-icon .anticon-cross{color:rgba(0,0,0,.43);transition:color .3s ease}.ant-alert-close-icon .anticon-cross:hover{color:#404040}.ant-alert-close-text{position:absolute;right:16px}.ant-alert-with-description{padding:16px 16px 16px 60px;position:relative;border-radius:4px;color:rgba(0,0,0,.65);line-height:1.5}.ant-alert-with-description.ant-alert-no-icon{padding:16px}.ant-alert-with-description .ant-alert-icon{position:absolute;top:16px;left:20px;font-size:24px}.ant-alert-with-description .ant-alert-close-icon{position:absolute;top:16px;right:16px;cursor:pointer;font-size:12px}.ant-alert-with-description .ant-alert-message{font-size:14px;color:rgba(0,0,0,.85);display:block;margin-bottom:4px}.ant-alert-with-description .ant-alert-description{display:block}.ant-alert.ant-alert-close{height:0!important;margin:0;padding-top:0;padding-bottom:0;transition:all .3s cubic-bezier(.78,.14,.15,.86);-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0}.ant-alert-slide-up-leave{-webkit-animation:antAlertSlideUpOut .3s cubic-bezier(.78,.14,.15,.86);animation:antAlertSlideUpOut .3s cubic-bezier(.78,.14,.15,.86);-webkit-animation-fill-mode:both;animation-fill-mode:both}.ant-alert-banner{border-radius:0;border:0;margin-bottom:0}@-webkit-keyframes antAlertSlideUpIn{0%{opacity:0;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0);transform:scaleY(0)}to{opacity:1;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes antAlertSlideUpIn{0%{opacity:0;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0);transform:scaleY(0)}to{opacity:1;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes antAlertSlideUpOut{0%{opacity:1;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(1);transform:scaleY(1)}to{opacity:0;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes antAlertSlideUpOut{0%{opacity:1;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(1);transform:scaleY(1)}to{opacity:0;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0);transform:scaleY(0)}}",""])},472:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){}Object.defineProperty(t,"__esModule",{value:!0});var o=n(292),r=a(o),l=n(296),s=a(l),d=n(297),c=a(d),u=n(298),p=a(u),f=n(334),m=a(f),g=n(1),b=a(g),h=n(36),y=a(h),v=n(363),x=a(v),w=n(393),k=a(w),E=n(342),N=a(E),O=function(e){function t(e){(0,s.default)(this,t);var n=(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClose=function(e){e.preventDefault();var t=y.default.findDOMNode(n);t.style.height=t.offsetHeight+"px",t.style.height=t.offsetHeight+"px",n.setState({closing:!1}),(n.props.onClose||i)(e)},n.animationEnd=function(){n.setState({closed:!0,closing:!0})},n.state={closing:!0,closed:!1},n}return(0,m.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.closable,a=t.description,i=t.type,o=t.prefixCls,l=void 0===o?"ant-alert":o,s=t.message,d=t.closeText,c=t.showIcon,u=t.banner,p=t.className,f=void 0===p?"":p,m=t.style;c=!(!u||void 0!==c)||c,i=u&&void 0===i?"warning":i||"info";var g="";switch(i){case"success":g="check-circle";break;case"info":g="info-circle";break;case"error":g="cross-circle";break;case"warning":g="exclamation-circle";break;default:g="default"}a&&(g+="-o");var h=(0,N.default)(l,(e={},(0,r.default)(e,l+"-"+i,!0),(0,r.default)(e,l+"-close",!this.state.closing),(0,r.default)(e,l+"-with-description",!!a),(0,r.default)(e,l+"-no-icon",!c),(0,r.default)(e,l+"-banner",!!u),e),f);d&&(n=!0);var y=n?b.default.createElement("a",{onClick:this.handleClose,className:l+"-close-icon"},d||b.default.createElement(k.default,{type:"cross"})):null;return this.state.closed?null:b.default.createElement(x.default,{component:"",showProp:"data-show",transitionName:l+"-slide-up",onEnd:this.animationEnd},b.default.createElement("div",{"data-show":this.state.closing,className:h,style:m},c?b.default.createElement(k.default,{className:l+"-icon",type:g}):null,b.default.createElement("span",{className:l+"-message"},s),b.default.createElement("span",{className:l+"-description"},a),y))}}]),t}(b.default.Component);t.default=O,e.exports=t.default},473:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),l=(a(r),n(474)),s=(a(l),n(475)),d=a(s),c=function(){function e(){i(this,e)}return o(e,null,[{key:"getMovieListData",value:function(e){var t=JSON.stringify(e);return new Promise(function(e,n){var a=d.default.ServerHostURL+"/movie/getlist";fetch(a,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"msg="+t}).then(function(e){if(e.ok)return e.json()}).then(function(t){e(t)}).catch(function(e){n(e)})})}},{key:"getMovieDetail",value:function(e){var t=JSON.stringify(e);return new Promise(function(e,n){var a=d.default.ServerHostURL+"/movie/detail";fetch(a,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"msg="+t}).then(function(e){if(e.ok)return e.json()}).then(function(t){e(t)}).catch(function(e){n(e)})})}}]),e}();t.default=c},474:function(e,t,n){var a,i,o;!function(n,r){i=[t,e],a=r,o="function"==typeof a?a.apply(t,i):a,!(void 0!==o&&(e.exports=o))}(void 0,function(e,t){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function a(e){try{delete window[e]}catch(t){window[e]=void 0}}function i(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}function o(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=e,l=t.timeout||r.timeout,s=t.jsonpCallback||r.jsonpCallback,d=void 0;return new Promise(function(r,c){var u=t.jsonpCallbackFunction||n(),p=s+"_"+u;window[u]=function(e){r({ok:!0,json:function(){return Promise.resolve(e)}}),d&&clearTimeout(d),i(p),a(u)},o+=o.indexOf("?")===-1?"?":"&";var f=document.createElement("script");f.setAttribute("src",""+o+s+"="+u),t.charset&&f.setAttribute("charset",t.charset),f.id=p,document.getElementsByTagName("head")[0].appendChild(f),d=setTimeout(function(){c(new Error("JSONP request to "+e+" timed out")),a(u),i(p)},l)})}var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};t.exports=o})},475:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ServerHostURL:"http://127.0.0.1:10086",PageSize:12,City:"杭州",version:"0.0.1"}},477:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=(n(246),n(251)),s=a(l),d=(n(345),n(346)),c=a(d),u=(n(460),n(463)),p=a(u),f=(n(464),n(467)),m=a(f),g=(n(469),n(472)),b=a(g),h=(n(394),n(397)),y=a(h),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=n(1),w=a(x),k=n(473),E=a(k),N=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loading:!0,moviedetail:null},n}return r(t,e),v(t,[{key:"componentWillMount",value:function(){var e=this,t=E.default.getMovieDetail({id:this.props.params.id});t.then(function(t){t.result?e.setState({loading:!1,moviedetail:t.data}):(y.default.warning("数据获取失败"),e.setState({loading:!1}))},function(t){y.default.warning("数据获取失败"),e.setState({loading:!1})}).catch(function(t){y.default.warning("数据获取失败"),e.setState({loading:!1})})}},{key:"renderMovieDetail",value:function(){return this.state.loading?w.default.createElement(m.default,{tip:"Loading...",size:"large"},w.default.createElement(b.default,{message:"加载中...",description:"数据正在加载中，精彩内容马上呈现，请耐心等待...",type:"info",width:"50%"})):w.default.createElement(s.default,{type:"flex",align:"middle"},w.default.createElement(c.default,{style:{width:"100%"}},w.default.createElement(p.default,{bordered:!0,title:this.state.moviedetail.title,extra:w.default.createElement("span",{href:"javascript:;"},"上映时间：",this.state.moviedetail.year,"   类型：",this.state.moviedetail.genres.join("、"),"   ",w.default.createElement("strong",{style:{color:"red"}},this.state.moviedetail.rating.average)),style:{width:"100%"}},w.default.createElement("p",{style:{textAlign:"center"}},w.default.createElement("img",{alt:this.state.moviedetail.title,src:this.state.moviedetail.images.large})),w.default.createElement("p",null,"导演：",this.state.moviedetail.directors.map(function(e,t){return w.default.createElement("span",{key:t},e.name,"   ")})),w.default.createElement("p",null,"演员：",this.state.moviedetail.casts.map(function(e,t){return w.default.createElement("span",{key:t},e.name,"   ")})),w.default.createElement("p",null,this.state.moviedetail.summary))))}},{key:"render",value:function(){return w.default.createElement("div",{className:"apphight"},this.renderMovieDetail())}}]),t}(x.Component);t.default=N}});