KISSY.ready(function(){KISSY.use("dom, node, cookie, ua",function(e,o,t,i,n){var r=e.all,a="ieupdate",s=1,c={template:["\u4eb2\uff0c\u672c\u7f51\u7ad9\u4e0d\u652f\u6301IE9\u4ee5\u4e0b\u6d4f\u89c8\u5668\uff0c\u4e3a\u4e86\u786e\u4fdd\u60a8\u7684\u6d4f\u89c8\u4f53\u9a8c\uff0c\u63d0\u5347\u6253\u5f00\u901f\u5ea6\uff0c\u5efa\u8bae\u60a8\uff1a",'<a class="browser-icon browser-ie" href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie" target="_blank">\u5347\u7ea7IE\u6d4f\u89c8\u5668</a>',"<span>\u6216\u70b9\u51fb\u4e0b\u8f7d</span>",'<a class="browser-icon browser-chrome" href="http://www.google.cn/intl/zh-CN/chrome/browser/" target="_blank">Chrome\u6d4f\u89c8\u5668</a>','<a class="browser-icon browser-uc" href="http://wap.uc.cn/index.php?action=PackageDown&do=ByPfid&product=UCBrowser&pfid=101&lang=zh-cn&bid=999&direct=true&from=web_banner" target="_blank">UC\u6d4f\u89c8\u5668</a>','<i class="close"></i>'].join(""),style:[".ie-update{zoom:1;text-align:center;padding:15px 0;background:#666666;color:white;font-size:14px;border-bottom:2px solid #ffa733;width:100%;position:fixed;left:0;bottom:0;top:0;right:0;_bottom:auto;_position:absolute;z-index:20000;}",".ie-update a{color:#ffa733;text-decoration:none;}",".ie-update a:hover{text-decoration:underline;}",".ie-update .browser-icon,.ie-update .close{background:url(//img.alicdn.com/tps/i3/TB1fiWjFVXXXXagXFXXeKIbFpXX-19-76.png) no-repeat;}",".ie-update .browser-icon{padding-left:22px;margin:0 20px;}",".ie-update .browser-ie{background-position:0 0;}",".ie-update .browser-chrome{background-position:0 -19px;}",".ie-update .browser-uc{background-position:0 -38px;}",".ie-update .close{position:absolute;top:16px;right:12px;width:21px;height:21px;background-position:0 -57px;cursor:pointer;}"].join(""),init:function(){var e=this.template,o=this.style,t=document.body,n=document.getElementsByTagName("head")[0];if("1"!=i.get(a)){var s=document.createElement("style");s.type="text/css",s.media="screen",s.styleSheet?s.styleSheet.cssText=o:s.appendChild(document.createTextNode(o)),n.appendChild(s);var c=document.createElement("div");c.className="ie-update",c.innerHTML=e,t.insertBefore(c,t.firstChild),this.wrapper=r(c),this.bindEvents(),this.scroll()}},bindEvents:function(){var e=this,o=e.wrapper,t=o.one(".close");t.on("click",function(){o.remove(),i.set(a,1,s)}),r(window).on("scroll",function(){e.scroll()}),r(window).on("resize",function(){e.scroll()})},scroll:function(){var e=this,t=e.wrapper,i=o.viewportHeight(),r=o.scrollTop(),a=t.outerHeight();n.ie<=6&&t.css("top",i+r-a)}};c.init()})});