(function(a,e,r){var t=r.userAgent;var n=a.getElementsByTagName("head")[0];function i(e){var r=a.createElement("script");r.src=e;return n.appendChild(r)}var v="//g.alicdn.com";var s=self.goldlog;if(s&&s.getCdnPath){v=s.getCdnPath()}v+="/secdev/";var f=t.match(/Chrome\/(\d*)/);if(f){f=+f[1]}if(!a._sufei_data2){var d="3.6.8";var c=i(v+"sufei_data/"+d+"/index.js");c.id="aplus-sufei"}var l=.001;if(e()<l){a._linkstat_sample=l;i(v+"linkstat/index.js?v=1201")}window.nsrprtrt=1e-4;var o=!/Mobile/.test(t);if(o){var u=["1.0.47","a",51,54];var m=["1.0.49","b",59,61];var h=3e3;var _=u;function g(a){var e=0;for(var r=0;r<a.length;r++){e=(e<<5)-e+a.charCodeAt(r);e=e>>>0}return e}var p=a.cookie.match(/cna=([^;]+)/);p=p&&p[1]||"";if(g(p)%1e4<=h){_=m}if(!_){return}var E=v+"nsv/"+_[0]+"/";var j=E+"ns_"+_[1]+"_"+_[2]+"_2_fa.js";var b=E+"ns_"+_[1]+"_"+_[3]+"_2_nf.js";function C(){var e="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";if("WebkitAppearance"in a.documentElement.style){if(escape(r.javaEnabled.toString())===e){return true}}return false}var k=t.match(/Edge\/([\d]*)/);var x=t.match(/Safari\/([\d]*)/);var A=t.match(/Firefox\/([\d]*)/);var B=t.match(/MSIE|Trident/);if(k){i(j)}else if(f){if(f>59){i(j)}else if(f<45){i(j)}else{i(j)}}else if(x||A||B){i(b)}else{if(C()){i(j)}else{i(b)}}}})(document,Math.random,navigator);