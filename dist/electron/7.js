webpackJsonp([7],{107:function(a,b,c){var d=c(108);'string'==typeof d&&(d=[[a.i,d,'']]),d.locals&&(a.exports=d.locals);c(72)('5d421335',d,!0,{})},108:function(a,b,c){b=a.exports=c(57)(!1),b.push([a.i,'#privateKey>h3[data-v-766fc59d]{font-size:20px;font-weight:400;text-align:center;color:#fff}#privateKey .w_key_title[data-v-766fc59d]{font-size:20px;line-height:20px;width:426px;margin:60px auto 0;color:#333;text-align:center}#privateKey .w_select_key[data-v-766fc59d]{width:426px;margin:15px auto 0;text-align:right}#privateKey .w_select_key a[data-v-766fc59d]{font-size:16px;line-height:16px;color:#788cf5;position:relative}#privateKey .w_select_key a input[data-v-766fc59d]{position:absolute;width:100%;display:block;left:0;top:0;bottom:0;opacity:0;cursor:pointer;font-size:0}#privateKey .w_inp_con[data-v-766fc59d]{margin-top:74px}#privateKey .w_inp_con p[data-v-766fc59d]{font-size:18px;color:#333;text-align:center}#privateKey .w_inp_con p span[data-v-766fc59d]{color:#788cf5}#privateKey .w_inp_con input[data-v-766fc59d]{font-size:18px;line-height:48px;display:block;width:426px;height:48px;margin:0 auto;text-indent:15px;color:#333;border:none;border-radius:5px;outline:none;background:#f0f2ff}#privateKey .w_inp_con input[data-v-766fc59d]::-webkit-input-placeholder,#privateKey .w_inp_con textarea[data-v-766fc59d]::-webkit-input-placeholder{font-size:18px;color:#ccc}#privateKey .w_inp_con input[data-v-766fc59d]:-moz-placeholder,#privateKey .w_inp_con input[data-v-766fc59d]::-moz-placeholder,#privateKey .w_inp_con textarea[data-v-766fc59d]:-moz-placeholder,#privateKey .w_inp_con textarea[data-v-766fc59d]::-moz-placeholder{font-size:18px;color:#ccc}#privateKey .w_inp_con input[data-v-766fc59d]:-ms-input-placeholder,#privateKey .w_inp_con textarea[data-v-766fc59d]:-ms-input-placeholder{font-size:18px;color:#ccc}#privateKey .w_btn_con[data-v-766fc59d]{margin-top:106px;text-align:center}#privateKey .w_btn_con a[data-v-766fc59d]{display:inline-block}#privateKey .w_btn_con .w_last_step[data-v-766fc59d]{margin-right:99px;background:#999}',''])},109:function(a,b){'use strict';b.a={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c('div',{attrs:{id:'privateKey'}},[c('h3',[a._v('\u8BF7\u8BBE\u7F6E\u4F60\u7684\u79C1\u94A5\u6587\u4EF6\u53CA\u533A\u5757\u4FDD\u5B58\u8DEF\u5F84')]),a._v(' '),c('div',{staticClass:'w_inp_con'},[c('p',[a._v('\u8D26\u6237\u5730\u5740\uFF1A'),c('span',[a._v('LET'+a._s(a.account_address))])])]),a._v(' '),c('div',{staticClass:'w_select_key'}),a._v(' '),c('p',{staticClass:'w_key_title'},[a._v('\u79C1\u94A5\u662F\u4F60\u552F\u4E00\u51ED\u8BC1\uFF0C\u8BF7\u5907\u4EFD\u4F60\u7684\u79C1\u94A5\uFF0C')]),a._v(' '),c('div',{staticClass:'w_btn_con'},[c('a',{staticClass:'common_btn',attrs:{href:'javascript:;'},on:{click:a.generateAccountFun}},[a._v('\u5907\u4EFD\u79C1\u94A5')])])])},staticRenderFns:[]}},63:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(79),e=c(109),f=c(15),g=f(d.a,e.a,!1,function(){c(107)},'data-v-766fc59d',null);b['default']=g.exports},72:function(a,b,c){function d(a){for(var b=0;b<a.length;b++){var c=a[b],d=l[c.id];if(d){d.refs++;for(var e=0;e<d.parts.length;e++)d.parts[e](c.parts[e]);for(;e<c.parts.length;e++)d.parts.push(f(c.parts[e]));d.parts.length>c.parts.length&&(d.parts.length=c.parts.length)}else{for(var g=[],e=0;e<c.parts.length;e++)g.push(f(c.parts[e]));l[c.id]={id:c.id,refs:1,parts:g}}}}function e(){var a=document.createElement('style');return a.type='text/css',j.appendChild(a),a}function f(a){var b,c,d=document.querySelector('style['+r+'~="'+a.id+'"]');if(d){if(o)return p;d.parentNode.removeChild(d)}if(s){var f=n++;d=m||(m=e()),b=g.bind(null,d,f,!1),c=g.bind(null,d,f,!0)}else d=e(),b=h.bind(null,d),c=function(){d.parentNode.removeChild(d)};return b(a),function(d){if(d){if(d.css===a.css&&d.media===a.media&&d.sourceMap===a.sourceMap)return;b(a=d)}else c()}}function g(a,b,c,d){var e=c?'':d.css;if(a.styleSheet)a.styleSheet.cssText=t(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function h(a,b){var c=b.css,d=b.media,e=b.sourceMap;if(d&&a.setAttribute('media',d),q.ssrId&&a.setAttribute(ssridKey,b.id),e&&(c+='\n/*# sourceURL='+e.sources[0]+' */',c+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+' */'),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}var i='undefined'!=typeof document;if('undefined'!=typeof DEBUG&&DEBUG&&!i)throw new Error('vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');var k=c(73),l={},j=i&&(document.head||document.getElementsByTagName('head')[0]),m=null,n=0,o=!1,p=function(){},q=null,r='data-vue-ssr-id',s='undefined'!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());a.exports=function(a,b,c,e){o=c,q=e||{};var f=k(a,b);return d(f),function(b){for(var c=[],e=0;e<f.length;e++){var g=f[e],h=l[g.id];h.refs--,c.push(h)}b?(f=k(a,b),d(f)):f=[];for(var h,e=0;e<c.length;e++)if(h=c[e],0===h.refs){for(var i=0;i<h.parts.length;i++)h.parts[i]();delete l[h.id]}}};var t=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}()},73:function(a){a.exports=function(a,b){for(var c=[],d={},e=0;e<b.length;e++){var f=b[e],g=f[0],h=f[1],i=f[2],j=f[3],k={id:a+':'+e,css:h,media:i,sourceMap:j};d[g]?d[g].parts.push(k):c.push(d[g]={id:g,parts:[k]})}return c}},79:function(a,b,c){'use strict';var d=c(16),e=c.n(d),f=c(5),g=c.n(f);b.a={data:function(){return{account_id:'',account_name:'',account_passwd:'',account_address:'',account_private_key:'',account_ciphertext_private_key:'',generateMsg:'',keystore:''}},filters:{_formatTime:function(a){return e()(a).fromNow()}},mounted:function(){this.account_address=localStorage.getItem('address'),this.getPrivateKeyFromLastPage()},methods:{getPrivateKeyFromLastPage:function(){this.account_private_key=localStorage.getItem('privateKey')},toNextpage:function(){this.$router.push({path:'/setResult'})},generateAccountFun:function(){this.account_id=localStorage.getItem('uuid'),this.account_name=localStorage.getItem('accounts-name'),this.account_passwd=localStorage.getItem('password'),this.account_address=localStorage.getItem('address'),this.keystore=localStorage.getItem('keystore'),this.account_ciphertext_private_key=localStorage.getItem('ciphertextPrivateKey'),this.requestStoreKey(this.account_private_key)},requestStoreKey:function(a){this.$ipcRenderer.send('store-privateKey',{privateKey:a}),this.responseStoreKey()},responseStoreKey:function(){var a=this;this.$ipcRenderer.on('store-privateKey-back',function(b){a.$ipcRenderer.detach('store-privateKey-back'),b&&(b.success?(Object(f.Toast)('\u79C1\u94A5\u5BFC\u51FA\u6210\u529F\uFF0C\u8BF7\u5230\u60A8\u5BFC\u51FA\u7684\u76EE\u5F55\u67E5\u770B'),a.startRequest()):701==b.errorCode&&Object(f.Toast)('\u79C1\u94A5\u5BFC\u51FA\u5199\u5165\u6587\u4EF6\u5931\u8D25\uFF0C\u8BF7\u518D\u8BD5\u4E00\u6B21\u5427'))})},onRequestBack:function(){var a=this;this.$ipcRenderer.on('generate-account-back',function(b){a.$ipcRenderer.detach('generate-account-back'),b&&b.success?(a.generateMsg=b.generateMsg,null==a.generateMsg?Object(f.Toast)('\u540E\u53F0\u62A5\u9519\uFF0C\u8BF7\u91CD\u8BD5\u8054\u7CFB\u6216\u8005Linkeye\u56E2\u961F...'):a.toNextpage()):(300==b.errorCode&&Object(f.Toast)('\u60A8\u8F93\u5165\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165'),301==b.errorCode&&Object(f.Toast)('\u6570\u636E\u5E93\u521D\u59CB\u5316\u5931\u8D25'),302==b.errorCode&&Object(f.Toast)('\u521B\u5EFAaccount\u8868\u5931\u8D25'))})},startRequest:function(){var a={account_id:this.account_id,account_name:this.account_name,account_passwd:this.account_passwd,account_address:this.account_address,keystore:this.keystore,account_ciphertext_private_key:this.account_ciphertext_private_key};this.$ipcRenderer.send('generate-account',a),this.onRequestBack()}}}}});