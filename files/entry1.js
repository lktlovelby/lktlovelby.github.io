"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
function(e) {
	return typeof e
} : function(e) {
	return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
!
function() {
	function e(e, t, i, n) {
		var o = '<a class="aw-item' + (n ? " " + n : "") + '" href="#" data-type="' + e.type + '" data-idx="' + t + '" data-src="' + i + '">' + e.name;
		return e.iconUri && (o += '<img class="aw-itemicon" src="' + e.iconUri + '" alt="icon">'), o += "</a>"
	}
	function t(e, t) {
		var i = "";
		if (t.need) {
			i += e === C.feedback.name ? '<li class="aw-lineitem tool-plugin tool-' + e + '">' : '<li class="aw-lineitem tool-plugin tool-' + e + '" data-url="' + t.url + '">';
			var n = t.icon ? "&#" + t.icon : e === C.feedback.name ? "&#xe62b;" : "&#xe629;";
			i += '<a class="aw-tool-item" href="#" ><i class="anywhere-iconfont toolicon">' + n + '</i><span class="toolwording">' + t.name + '</span></a><div class="aw-hover-tip" data-name="tool-' + e + '">' + t.name + " </div></li>"
		}
		return i
	}
	function i(e) {
		var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
			i = 550,
			n = 740,
			o = 60,
			a = 130,
			s = T.getDifferentResolutionClass(),
			r = s ? i : n,
			l = s ? o : a,
			c = Math.floor(t / 2) - Math.floor(r / 2) + l,
			d = 5;
		return c = 0 > c ? 63 : c, {
			top: c,
			right: d
		}
	}
	function n(e, t, i) {
		var n;
		return i[e] && i[e][t] ? (n = i[e][t], n.awId = e + "_" + t) : D.error("could not found data via " + e + ", " + t), n
	}
	function o(e, t) {
		var i, n = {},
			o = {};
		e = e || {};
		for (i in e) if (e.hasOwnProperty(i)) switch (i) {
		case "container":
		case "sourceId":
		case "bizCode":
		case "from":
		case "theme":
		case "position":
		case "autoRefresh":
			n[i] = e[i];
			break;
		default:
			o[i] = e[i]
		}
		return void 0 !== t && (n.autoRefresh = !! t), n.params = o, n
	}
	function a(e) {
		return {
			from: e.from,
			sourceId: e.sourceId,
			sourceUrl: e.sourceUrl,
			requestId: e.requestId,
			bizCode: e.bizCode
		}
	}
	function s(e) {
		var t = {
			anyconditions: {}
		};
		return "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && (t.anyconditions = e), t
	}
	function r(e, t, i) {
		var n = JSON.stringify({
			action: t,
			value: i || null
		});
		if (e.dialog) try {
			e.dialogInner.contentWindow.postMessage(n, "*")
		} catch (o) {
			D.error("failed to post message, caused by " + o)
		} else D.error("dialog is null, could not post message with " + n)
	}
	function l(e) {
		e && e.container || D.error("must provide container to init service window"), this.isHidden = e.isHidden ? !0 : !1, this.onRendered = "function" == typeof e.onRendered ? e.onRendered : void 0, this.from = e.from || "anywhere", this.bizCode = (e.bizCode || "") + "", this.bizCode = this.bizCode ? this.bizCode : "anywhere" === this.from ? "PCAnyWhereWindow" : "", this.sourceId = (e.sourceId || "") + "", this.sourceUrl = location.href, this.container = e.container, this.triggerNode = [], this.requestId = "", this.data = void 0, this.params = void 0, this.dialogUrl = e.dialogUrl || f.dialogUrl, this.dialogId = "", this.dialog = void 0, this.mode = "normal", this.isOpenDialog = !1, this.unreadedOcsCount = 0, this.activeNotifyCount = 0, this.currentActiveService = void 0, this.isStrongActvieNotifyShow = !1, this.imInteractMode = M.ROBOT, this.setTheme(e.theme || k);
		var t = 50,
			i = 30;
		if (this.logoWidth = "number" == typeof e.logoWidth ? e.logoWidth : t, this.logoWidth = this.logoWidth > t ? t : this.logoWidth, this.logoWidth = this.logoWidth < i ? i : this.logoWidth, this.isLogoAnim = this.logoWidth === t ? !0 : !1, e.autoRefresh !== !1) {
			var n = D.mixin(e.params, {
				isInit: !0
			});
			this.refresh(n)
		}
		e.draggable !== !1 && N.init(this.container, this), e.position && e.position.length ? this.moveTo.apply(this, e.position) : this.moveTo("auto"), S.push(this)
	}
	function c(e) {
		return m.supports ? !0 : (D.error("do not supports this browser. skip action: " + e), !1)
	}
	function d() {
		L.attached || L.init()
	}
	function u(e) {
		return function() {
			if (c(e)) {
				if (!l.hasDefault()) return void("refresh" === e ? m.init(l.formatInitArgs(arguments[0], !0)) : D.error('must call init before call "' + e + '"'));
				var t = l.getDefault();
				return t[e].apply(t, arguments)
			}
		}
	} {
		var m = {};
		!
		function() {
			var e = window.location.hostname.indexOf(".daily.") > -1,
				t = window.location.href.indexOf("__mock__") > -1;
			return t ? {
				content: "//dip.alibaba-inc.com/api/v2/services/schema/mock/5725"
			} : e ? {
				content: "//service.daily.taobao.net/support/anywhere/GetAnywhereContent.do"
			} : {
				content: "//service.taobao.com/support/anywhere/GetAnywhereContent.do"
			}
		}()
	}
	m.supports = function() {
		var e, t = window.navigator.userAgent,
			i = t.indexOf("MSIE ");
		return i > 0 && (e = parseInt(t.substring(i + 5, t.indexOf(".", i)), 10), e && 7 >= e) ? !1 : !0
	}(), m.config = {
		pageWidth: 1190,
		entryWidth: 120,
		entryHeight: 300,
		entrySmallWidth: 50,
		entrySmallHeight: 150
	};
	var h, f;
	h = {
		dev: {
			getAnywhereContent: "//any.daily.taobao.net/window/getAnywhereContent.do",
			getAnywhereContentCenter: "//anyunit.daily.taobao.net/window/getAnywhereContent.do",
			getKnowledgeById: "//anyunit.daily.taobao.net/window/getKnowledgeById.do",
			dialogUrl: "//anyunit.daily.taobao.net/window/dialog.htm",
			closeImBubble: "//anyunit.daily.taobao.net/window/closeImBubble.do",
			getUserStateInfo: "//any.daily.taobao.net/window/getUserStateInfo.do",
			closeRemind: "//any.daily.taobao.net/remind/closeRemind.do",
			FeedbackReceiver: "//pre.air.taobao.com/lab/feedback/receive",
			getProblemKnowledge: "//any.daily.taobao.net/window/getProblemKnowledge.do"
		},
		pre: {
			getAnywhereContent: "//anyservice.taobao.com/window/getAnywhereContent.do",
			getAnywhereContentCenter: "//anyservice.taobao.com/window/getAnywhereContent.do",
			getKnowledgeById: "//anyservice.taobao.com/window/getKnowledgeById.do",
			dialogUrl: "//anyservice.taobao.com/window/dialog.htm",
			closeImBubble: "//anyservice.taobao.com/window/closeImBubble.do",
			getUserStateInfo: "//anyservice.taobao.com/window/getUserStateInfo.do",
			closeRemind: "//anyservice.taobao.com/remind/closeRemind.do",
			FeedbackReceiver: "//airunit.taobao.com/lab/feedback/receive",
			getProblemKnowledge: "//anyservice.taobao.com/window/getProblemKnowledge.do",
			getAISurveyCardCount: "//anyhelp.taobao.com/survey/getAISurveyCardCount.do"
		},
		prod: {
			getAnywhereContent: "//anyservice.taobao.com/window/getAnywhereContent.do",
			getAnywhereContentCenter: "//anyhelp.taobao.com/window/getAnywhereContent.do",
			getKnowledgeById: "//anyhelp.taobao.com/window/getKnowledgeById.do",
			dialogUrl: "//anyhelp.taobao.com/window/dialog.htm",
			closeImBubble: "//anyhelp.taobao.com/window/closeImBubble.do",
			getUserStateInfo: "//anyhelp.taobao.com/window/getUserStateInfo.do",
			closeRemind: "//anyservice.taobao.com/remind/closeRemind.do",
			FeedbackReceiver: "//airunit.taobao.com/lab/feedback/receive",
			getProblemKnowledge: "//anyhelp.taobao.com/window/getProblemKnowledge.do",
			getAISurveyCardCount: "//anyhelp.taobao.com/survey/getAISurveyCardCount.do"
		}
	};
	var g = window.location.hostname.indexOf(".daily.") > -1,
		p = window.location.search.indexOf("dev=pre") > -1;
	f = g ? h.dev : p ? h.pre : h.prod;
	var y = {
		largeLogoD11: "//img.alicdn.com/tfs/TB1eDXOm6ihSKJjy0FfXXbGzFXa-125-80.png",
		largeLogo: "//img.alicdn.com/tps/TB1HxcCMpXXXXbfaXXXXXXXXXXX-102-83.png",
		largeMoveLogo: "//img.alicdn.com/tps/TB1g43RMpXXXXbkXFXXXXXXXXXX-102-83.png",
		smallLogoD11: "//img.alicdn.com/tps/TB1lLshNVXXXXXqXXXXXXXXXXXX-124-139.png",
		smallLogo: "//img.alicdn.com/tps/TB1zXnCKVXXXXc5XVXXXXXXXXXX-50-50.png",
		dialogLogo: "//img.alicdn.com/tps/TB1bC80LVXXXXcNXVXXXXXXXXXX-47-30.png",
		largeAutoAnim: "//img.alicdn.com/tps/TB1DJg7MpXXXXazXXXXXXXXXXXX-102-1992.png",
		smallAutoAnim: "//img.alicdn.com/tps/TB1Xe45MXXXXXbUaXXXXXXXXXXX-50-500.png",
		bubbleWrapper: "//img.alicdn.com/tps/TB1molpLVXXXXaGXFXXXXXXXXXX-97-63.png",
		bubbleWrapperD11: "//img.alicdn.com/tps/TB1K9ghNVXXXXa.XpXXXXXXXXXX-97-63.png"
	};
	for (var v in y) if (y.hasOwnProperty(v)) {
		var w = new Image;
		w.src = y[v]
	}
	var b = document.head || document.documentElement,
		I = function() {},
		A = 1,
		D = {
			isDebug: window.location.search.indexOf("&debug") > -1,
			loggerInstance: null,
			find: function(e, t, i) {
				var n, o, a, s, r = "function" == typeof t;
				if (e.childNodes) for (o = 0, a = e.childNodes.length; a > o && (n = e.childNodes[o], D.find(n, t, i), r && !t(n) || (s = i(n), s !== !1)); o += 1);
			},
			findChildByClass: function(e, t) {
				for (var i = e.childNodes, n = void 0, o = 0; o < i.length; o++) if (-1 !== i[o].getAttribute("class").indexOf(t)) {
					n = i[o];
					break
				}
				return n
			},
			bind: function(e, t, i) {
				e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i)
			},
			unbind: function(e, t, i) {
				e.removeEventListener ? e.removeEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i)
			},
			halt: function(e) {
				e = e || window.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation ? e.stopPropagation() : e.cancelBubble && (e.cancelBubble = !0)
			},
			hasClass: function(e, t) {
				return !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
			},
			addClass: function(e, t) {
				D.hasClass(e, t) || (e.className += " " + t)
			},
			removeClass: function(e, t) {
				if (D.hasClass(e, t)) {
					var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
					e.className = e.className.replace(i, " ")
				}
			},
			openWindow: function(e, t) {
				window.open(e, t || "", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes")
			},
			error: function(e, t, i) {
				if ("undefined" != typeof window.console && window.console.error("[anywhere entry] " + e), window.JSTracker2 && e) {
					var n = "anywhere",
						o = window.location.hostname.indexOf(".daily.") > -1,
						a = o ? "http://fgt.daily.taobao.net/" : "http://fgt.taobao.net/";
					a += a + n + "/error", this.loggerInstance || (this.loggerInstance = new JSTracker2.constructor({
						url: a
					}));
					var s = {
						msg: "[" + n + "]" + e,
						subType: t ? t : "entry",
						extraData: "object" === ("undefined" == typeof i ? "undefined" : _typeof(i)) ? i : {}
					};
					this.loggerInstance.push({
						msg: JSON.stringify(s)
					})
				}
			},
			stringifyParams: function(e) {
				var t, i, n = [];
				if (e) for (t in e) if (e.hasOwnProperty(t)) {
					if (i = e[t], void 0 === ("undefined" == typeof i ? "undefined" : _typeof(i))) return;
					"object" === ("undefined" == typeof i ? "undefined" : _typeof(i)) && (i = JSON.stringify(i)), n.push(t + "=" + encodeURIComponent(i))
				}
				return n.join("&")
			},
			makeUrl: function(e, t, i) {
				var n = e.lastIndexOf("?");
				return -1 === n ? e += "?" : n !== e.length - 1 && (e += "&"), i === !0 || t._input_charset || (t._input_charset = "UTF-8"), e + D.stringifyParams(t)
			},
			jsonp: function(e, t, i, n) {
				var o, a, s, r, l = document.createElement("script");
				n = n || I, o = t.callback || "anywhere_jsonp_" + A, A += 1, window[o] = function(e) {
					s = e
				}, t || (t = {}), t.callback || (t.callback = o), a = D.makeUrl(e, t), r = setTimeout(function() {
					n("request time out")
				}, 5e3), l.async = !0, l.src = a, l.onload = l.onreadystatechange = function() {
					if (!l.readyState || /loaded|complete/.test(l.readyState)) {
						clearTimeout(r), r = null, l.onload = l.onreadystatechange = null, l.parentNode && l.parentNode.removeChild(l), s ? i && i(s) : n("jsonp callback was not called"), l = null, window[o] = null;
						try {
							delete window[o]
						} catch (e) {}
					}
				}, b.insertBefore(l, b.firstChild)
			},
			mixin: function() {
				var e, t, i, n, o = {};
				for (e = 0, t = arguments.length; t > e; e += 1) if (n = arguments[e], "object" === ("undefined" == typeof n ? "undefined" : _typeof(n))) for (i in n) n.hasOwnProperty(i) && (o[i] = n[i]);
				return o
			},
			getWindowSize: function() {
				var e = window,
					t = document.documentElement,
					i = document.getElementsByTagName("body")[0];
				return {
					width: e.innerWidth || t.clientWidth || i.clientWidth || t.documentElement.clientWidth,
					height: e.innerHeight || t.clientHeight || i.clientHeigh || t.documentElement.clientHeight
				}
			},
			getElementSize: function(e) {
				return {
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			},
			initActionTracker: function(e) {
				var t = this,
					i = window.XLogTracker;
				if (i) i.initConfig({
					appname: "anywhere"
				}), t.trackerToken = i.startSession(), "function" == typeof e && e();
				else {
					{
						var n, o = document.getElementsByTagName("script")[0],
							a = document.createElement("script"),
							s = window.location.hostname.indexOf(".daily.") > -1,
							r = !1;
						document.getElementsByTagName("head")[0] || document.documentElement
					}
					a.src = s ? "//g-assets.daily.taobao.net/xtracker/logger/3.0.3/index.js" : "//g.alicdn.com/xtracker/logger/3.0.3/index.js", a.id = "femTrackerSdk", n = setTimeout(function() {
						"function" == typeof e && e()
					}, 3e3), a.onload = a.onreadystatechange = function() {
						r || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (r = !0, clearTimeout(n), n = null, t.initActionTracker(e), a.onload = a.onreadystatechange = null)
					}, o.parentNode.insertBefore(a, o)
				}
			},
			initApush: function(e, t) {
				var i = this,
					n = window.Apush,
					o = window.location.hostname.indexOf(".daily.") > -1;
				if (n) {
					var a = o ? "http://10.125.8.90:6080" : "https://hzapush.aliexpress.com",
						s = a + e,
						r = n.createClient(s, function(e) {
							t && t(e)
						});
					i.apushClient = r
				} else {
					{
						var l, c = document.getElementsByTagName("script")[0],
							d = document.createElement("script"),
							u = !1;
						document.getElementsByTagName("head")[0] || document.documentElement
					}
					d.src = o ? "//g-assets.daily.taobao.net/tb/apush/0.0.8/??socketio.js,apush.js" : "//g.alicdn.com/tb/apush/0.0.8/??socketio.js,apush.js", d.id = "femTrackerSdk", l = setTimeout(function() {
						D.error("fetch apush lib res error .... ")
					}, 3e3), d.onload = d.onreadystatechange = function() {
						u || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (u = !0, clearTimeout(l), l = null, i.initApush(e, t), d.onload = d.onreadystatechange = null)
					}, c.parentNode.insertBefore(d, c)
				}
			},
			_formatRecordActionExtraData: function(e) {
				if ("object" !== ("undefined" == typeof e ? "undefined" : _typeof(e))) return {};
				for (var t = {
					fromflag: e.fromflag || "",
					wanxiangFlag: e.wanxiangFlag,
					subUserId: e.subUserId,
					bizCode: e.bizCode,
					sourceId: e.sourceId,
					from: e.from,
					requestUrl: e.requestUrl,
					requestId: e.requestId,
					sourceUrl: location.href
				}, i = 2; 6 >= i; i++) {
					var n = "actionAttrValue" + i,
						o = "actionAttrDescription" + i;
					void 0 !== e[n] && null !== e[n] && (t[n] = e[n], t[o] = e[o] || "")
				}
				return e.screen && (t.avlscreen = e.screen), e.pos && (t.pos = e.pos), t
			},
			recordAction: function(e) {
				var t = this._formatRecordActionExtraData(e.extraData);
				if (e.extraData = t, window.XLogTracker && this.trackerToken && window.XLogTracker.record && "function" == typeof window.XLogTracker.record && window.XLogTracker.record(this.trackerToken, e), e.realtime) {
					var i = {
						actionType: e.actionType,
						actionDescription: e.actionDescription,
						actionAttrValue: e.actionAttrValue,
						actionAttrDescription: e.actionAttrDescription,
						from: e.realtimeData.from,
						requestId: e.realtimeData.requestId,
						bizCode: e.realtimeData.bizCode,
						sourceId: e.realtimeData.sourceId,
						sourceUrl: e.realtimeData.sourceUrl,
						user_id: e.realtimeData.userId,
						msg_id: e.realtimeData.msgId,
						template_id: e.realtimeData.templateId
					};
					this.jsonp(f.FeedbackReceiver, {
						channel: "dataHub",
						bizType: "wanxiang",
						feedback: JSON.stringify({
							userid: e.realtimeData.userId,
							ext: JSON.stringify(i)
						})
					}, function(e) {
						console.log("success:", e)
					}, function(e) {
						console.log("error:", e)
					})
				}
			},
			supportIframePreload: function() {
				var e = window.navigator.userAgent.toLocaleLowerCase(),
					t = (e.indexOf("msie "), !1);
				return (-1 !== e.indexOf("chrome") || -1 !== e.indexOf("firefox") || -1 !== e.indexOf("safari") && -1 === e.indexOf("360")) && (t = !0), t
			},
			isLowerAndEqualIE8: function() {
				var e = window.navigator.userAgent.toLocaleLowerCase(),
					t = e.indexOf("msie "),
					i = !1;
				if (t > 0) {
					var n = parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
					8 >= n && (i = !0)
				}
				return i
			},
			setMiniDialog: function(e) {
				var t = new Date,
					i = 15;
				t.setTime(t.getTime() + 24 * i * 60 * 60 * 1e3), document.cookie = "miniDialog=" + e + ";expires=" + t.toGMTString()
			},
			getMiniDialog: function() {
				var e, t = new RegExp("(^| )miniDialog=([^;]*)(;|$)");
				return (e = document.cookie.match(t)) ? unescape(e[2]) : null
			},
			applyMiniDialog: function(e) {
				var t = this,
					i = t.getMiniDialog(),
					n = 1366;
				try {
					i = JSON.parse(i)
				} catch (o) {
					i = null
				}
				if (null == i) {
					var a = T.getScreenWidthHeight().h;
					i = n >= a ? !0 : !1, i || (i = e ? !0 : !1)
				}
				return i
			}
		},
		x = {
			frameDuration: 20,
			opacityUnit: .1,
			positionUnit: 20,
			defaultTimes: 7,
			showActiveNotifyTooltip: function(e) {
				var t = this,
					i = "activeTootipShowItemId",
					n = "activeTootipShowItemId2",
					o = 0,
					a = -180,
					s = -310,
					r = a,
					l = o,
					c = Math.ceil(Math.abs(s - a) / 30),
					d = 1 / 26;
				clearInterval(t[i]), clearInterval(t[n]), e.style.display = "block", t[i] = setInterval(function() {
					if (r -= c, l += d, s > r) {
						clearInterval(t[i]), e.style.opacity = 1;
						var o = -310,
							a = -300,
							u = o,
							m = Math.ceil(Math.abs(a - o) / 14);
						return void(t[n] = setInterval(function() {
							return u += m, u > -300 ? void clearInterval(t[n]) : void(e.style.left = u + "px")
						}, t.frameDuration))
					}
					e.style.left = r + "px", e.style.opacity = l
				}, t.frameDuration)
			},
			hideActiveNotifyTooltip: function(e) {
				var t = this,
					i = "activeTootipHideItemId",
					n = "activeTootipHideItemId2",
					o = 1,
					a = -300,
					s = -150,
					r = a,
					l = o,
					c = Math.ceil(Math.abs(s - a) / 20),
					d = .05;
				clearInterval(t[i]), clearInterval(t[n]), e.style.display = "block", t[i] = setInterval(function() {
					return r += c, l -= d, r > s ? (clearInterval(t[i]), void(e.style.display = "none")) : (e.style.left = r + "px", void(e.style.opacity = l))
				}, t.frameDuration)
			},
			setupAutoAnim: function(e, t) {
				var i = this;
				D.find(e, function(e) {
					return !!(e && e.className && e.className.match(/aw-logo/))
				}, function(n) {
					D.find(e, function(e) {
						return !!(e && e.className && e.className.match(/aw-anim-lge-logo/))
					}, function(o) {
						D.find(e, function(e) {
							return !!(e && e.className && e.className.match(/aw-anim-small-logo/))
						}, function(e) {
							"normal" === t.mode ? (o.style.display = "none", n.style.display = "block") : (e.style.display = "none", n.style.display = "block"), clearInterval(i.largeAutoAnimId), clearInterval(i.smallAutoAnimId), clearInterval(i.logoAutoAnimId), i.logoAutoAnimId = setInterval(function() {
								t.isOpenDialog || N.isDragging || ("normal" === t.mode ? i.largeAutoAnim(o, n) : t.isLogoAnim && i.smallAutoAnim(e, n))
							}, 2e4)
						})
					})
				})
			},
			largeAutoAnim: function(e, t) {
				var i = this,
					n = 0,
					o = "0px ",
					a = 0,
					s = 83;
				e.style.display = "block", t.style.display = "none", e.style.backgroundPosition = "0px 0px", clearInterval(i.largeAutoAnimId), i.largeAutoAnimId = setInterval(function() {
					a -= s, e.style.backgroundPosition = o + a + "px", -1407 >= a && (n++, n >= 2 && (clearInterval(i.largeAutoAnimId), e.style.display = "none", t.style.display = "block"), e.style.backgroundPosition = "0px 0px", a = 0)
				}, 59)
			},
			smallAutoAnim: function(e, t) {
				var i = this,
					n = 0,
					o = "0px ",
					a = 0,
					s = 50;
				e.style.display = "block", t.style.display = "none", e.style.backgroundPosition = "0px 0px", clearInterval(i.smallAutoAnimId), i.smallAutoAnimId = setInterval(function() {
					a -= s, e.style.backgroundPosition = o + a + "px", -500 >= a && (n++, n >= 2 && (clearInterval(i.smallAutoAnimId), e.style.display = "none", t.style.display = "block"), e.style.backgroundPosition = "0px 0px", a = 0)
				}, 59)
			},
			showTooltip: function(e, t, i) {
				var n = this,
					o = n.defaultTimes - 2,
					a = t.logoWidth + 20,
					s = 80,
					r = a,
					l = Math.ceil(Math.abs(s - a) / o),
					c = e.getAttribute("data-name"),
					d = "showTooltipId" + c;
				n[d] = setInterval(function() {
					r = r + l > s ? s : r + l, e.style.width = r + "px", r >= 15 && (e.style.display = "block"), r >= s && (clearInterval(n[d]), "function" == typeof i && i())
				}, n.frameDuration)
			},
			hideTooltip: function(e, t) {
				var i = this,
					n = i.defaultTimes - 2,
					o = 80,
					a = 0,
					s = o,
					r = Math.ceil(Math.abs(a - o) / n),
					l = e.getAttribute("data-name"),
					c = "hideTooltipId" + l;
				i[c] = setInterval(function() {
					s = a >= s - r ? a : s - r, e.style.width = s + "px", a >= s && (clearInterval(i[c]), "function" == typeof t && t())
				}, i.frameDuration)
			},
			showDialog: function(e, t, i) {
				var n = this,
					o = n.defaultTimes,
					a = .1,
					s = -80,
					r = 1,
					l = 7;
				e.parentNode.style.opacity = 1, e.style.display = "block", clearInterval(n.showDialogId);
				var c = a,
					d = s,
					u = Math.ceil(Math.abs(r - a) / o),
					m = Math.ceil(Math.abs(l - s) / o);
				n.showDialogId = setInterval(function() {
					c = c + u > r ? r : c + u, d = d + m > l ? l : d + m, e.style.opacity = c, e.style.right = d + "px", d >= l && (clearInterval(n.showDialogId), "function" == typeof t && t())
				}, n.frameDuration), i.dialog && (i.dialog.style.right = "small" === i.mode ? i.logoWidth - 7 + "px" : "110px")
			},
			closeDialog: function(e, t) {
				var i = this,
					n = i.defaultTimes,
					o = 1,
					a = 7,
					s = .1,
					r = -80;
				e.style.display = "block", clearInterval(i.closeDialogId);
				var l = o,
					c = a,
					d = Math.ceil(Math.abs(s - o) / n),
					u = Math.ceil(Math.abs(r - a) / n);
				i.closeDialogId = setInterval(function() {
					l = s >= l - d ? s : l - d, c = r >= c - u ? r : c - u, e.style.opacity = l, e.style.right = c + "px", r >= c && (clearInterval(i.closeDialogId), "function" == typeof t && t())
				}, i.frameDuration)
			},
			showResumeBtn: function(e, t, i) {
				var n = this,
					o = n.defaultTimes,
					a = 0,
					s = 37;
				e.style.width = a, clearInterval(n.showResumeBtnId);
				var r = a,
					l = Math.ceil(Math.abs(s - a) / o);
				clearTimeout(n.showResumeBtnDelayId), n.showResumeBtnDelayId = setTimeout(function() {
					n.showResumeBtnId = setInterval(function() {
						r = r + l >= s ? s : r + l, e.style.width = r + "px", r >= s && (clearInterval(n.showResumeBtnId), "function" == typeof i && i())
					}, n.frameDuration)
				}, n.frameDuration * t)
			},
			hideResumeBtn: function(e, t) {
				var i = this,
					n = i.defaultTimes,
					o = 37,
					a = 0;
				e.style.width = o, clearInterval(i.showResumeBtnId);
				var s = o,
					r = Math.ceil(Math.abs(a - o) / n);
				clearTimeout(i.showResumeBtnDelayId), i.showResumeBtnId = setInterval(function() {
					s = a >= s - r ? a : s - r, e.style.width = s + "px", a >= s && (clearInterval(i.showResumeBtnId), "function" == typeof t && t())
				}, i.frameDuration)
			},
			switchMode: function(e, t, i, n, o) {
				var a, s = this,
					r = n ? 5 : s.frameDuration,
					l = e.childNodes[0],
					c = void 0,
					d = void 0,
					u = void 0,
					m = void 0,
					h = void 0,
					f = void 0;
				for (a = 0; a < l.childNodes.length; a++) {
					var g = l.childNodes[a],
						p = g.getAttribute("class"); - 1 !== p.indexOf("aw-title") ? d = g : -1 !== p.indexOf("aw-content") ? u = g : -1 !== p.indexOf("aw-footer") ? m = g : -1 !== p.indexOf("aw-default-tool") ? h = g : -1 !== p.indexOf("aw-logo") ? c = g : -1 !== p.indexOf("aw-bubble-wrapper") && (f = g)
				}
				var v = 120,
					w = o.logoWidth,
					b = "aw-double11" === o.theme ? 125 : 102,
					I = o.logoWidth,
					A = o.logoWidth,
					x = 7;
				if (o.resumeBtn && (o.resumeBtn.style.right = "small" === t ? o.logoWidth - 2 + "px" : "118px"), o.dialog && (o.dialog.style.right = "small" === t ? o.logoWidth - 7 + "px" : "110px"), "small" === t) {
					if (f) {
						var C = 0,
							T = -125,
							N = 110 - (50 - I),
							X = 15,
							S = Math.ceil(X / 7),
							k = Math.ceil(Math.abs(T + N) / 7);
						clearInterval(s.awDefaultBubblelId), s.awDefaultBubblelId = setInterval(function() {
							C = -X >= C - S ? -X : C - S, T = T + k >= -N ? -N : T + k, f.style.right = C + "px", f.style.top = T + "px", T >= -N && clearInterval(s.awDefaultBubblelId)
						}, r)
					}
					var B = v,
						M = Math.ceil((B - w) / 7);
					clearInterval(s.awDefaultToolId), s.awDefaultToolId = setInterval(function() {
						B = w >= B - M ? w : B - M, h.style.width = B + "px", w >= B && clearInterval(s.awDefaultToolId)
					}, r), D.find(h, function(e) {
						return !!(e && e.className && e.className.match("toolwording"))
					}, function(e) {
						e.style.display = "none"
					}), D.find(h, function(e) {
						return !!(e && e.className && e.className.match("toolicon"))
					}, function(e) {
						e.style.marginRight = "0px"
					});
					var O = .7;
					clearInterval(s.awContentId), clearInterval(s.awContentMoveId), clearInterval(s.awLogoMoveId), s.awContentId = setInterval(function() {
						if (O = 0 >= O - .1 ? 0 : O - .1, u.style.opacity = O, d.style.opacity = O, 0 >= O) {
							clearInterval(s.awContentId);
							var e = s.originalContentHeight = u.offsetHeight ? u.offsetHeight : o.dodgeAWContentHeight,
								t = s.originalTitleHeight = d.offsetHeight ? d.offsetHeight : 30,
								n = Math.ceil(e / x),
								a = Math.ceil(t / x),
								l = setInterval(function() {
									e = 0 >= e - n ? 0 : e - n, t = 0 >= t - a ? 0 : t - a, u.style.height = e + "px", d.style.height = t + "px", 0 >= e && (clearInterval(l), u.style.display = "none", "function" == typeof i && i())
								}, r);
							d.style.paddingTop = "0px", d.style.display = "none"
						}
					}, r);
					var L = (c.getAttribute("class"), b),
						R = -60,
						H = "aw-double11" === o.theme ? A + 2 : A - 4,
						E = Math.ceil((L - I) / 14),
						W = Math.ceil(Math.abs(R + H) / 14);
					c.style.right = "0px", clearInterval(s.awLogoWidthId), s.awLogoWidthId = setInterval(function() {
						if (L = I >= L - E ? I : L - E, R = R + W >= -H ? -H : R + W, c.style.width = L + "px", c.style.top = R + "px", I >= L) {
							clearInterval(s.awLogoWidthId);
							var e = "aw-double11" === o.theme ? y.smallLogoD11 : y.smallLogo;
							c.setAttribute("src", e)
						}
					}, r)
				} else {
					var O = .3;
					clearInterval(s.awContentId), clearInterval(s.awContentMoveId), clearInterval(s.awLogoMoveId);
					var _ = 0,
						U = 0,
						P = Math.ceil(s.originalContentHeight / x),
						z = Math.ceil(s.originalTitleHeight / x),
						F = 8;
					d.style.display = "block", d.style.paddingTop = F + "px", u.style.display = "block";
					var j = setInterval(function() {
						_ = _ + P >= s.originalContentHeight ? s.originalContentHeight : _ + P, U = U + z >= 20 ? 30 : U + z, u.style.height = _ + "px", d.style.height = U + "px", _ >= s.originalContentHeight && (clearInterval(j), s.awContentId = setInterval(function() {
							O = O + .1 >= 1 ? 1 : O + .1, u.style.opacity = O, d.style.opacity = O, O >= 1 && clearInterval(s.awContentId)
						}, r))
					}, r);
					"aw-double11" === o.theme ? c.setAttribute("src", y.largeLogoD11) : o.isOpenDialog ? c.setAttribute("src", y.largeMoveLogo) : c.setAttribute("src", y.largeLogo), c.style.right = "aw-double11" === o.theme ? "0px" : "9px";
					var L = (c.getAttribute("class"), I),
						R = -42,
						H = "aw-double11" === o.theme ? -70 : -71,
						E = Math.ceil((b - L) / x),
						W = Math.ceil(Math.abs(R + 71) / 14),
						V = setInterval(function() {
							L = L + E >= b ? b : L + E, R = H >= R - W ? H : R - W, c.style.width = L + "px", c.style.top = R + "px", H >= R && clearInterval(V)
						}, r),
						q = w,
						M = Math.ceil((v - q) / x);
					if (clearInterval(s.awDefaultToolId), s.awDefaultToolId = setInterval(function() {
						q = q + M >= v ? v : q + M, h.style.width = q + "px", q >= v && (clearInterval(s.awDefaultToolId), D.find(h, function(e) {
							return !!(e && e.className && e.className.match("toolwording"))
						}, function(e) {
							e.style.display = ""
						}), D.find(h, function(e) {
							return !!(e && e.className && e.className.match("toolicon"))
						}, function(e) {
							e.style.marginRight = "13px"
						}), "function" == typeof i && i())
					}, r), f) {
						var C = -15,
							T = -110,
							S = Math.ceil(15 / x),
							k = Math.ceil(Math.abs(T + 125) / x),
							G = "aw-double11" === o.theme ? -134 : -125;
						clearInterval(s.awDefaultBubbleHideId), s.awDefaultBubbleHideId = setInterval(function() {
							C = C + S >= 0 ? 0 : C + S, T = -G >= T - k ? G : T - k, f.style.right = C + "px", f.style.top = T + "px", -G >= T && clearInterval(s.awDefaultBubbleHideId)
						}, r)
					}
				}
			}
		},
		C = {
			recordAction: function(e, t) {
				var i = {
					actionType: "clickTool",
					actionDescription: "\u70B9\u51FB\u5DE5\u5177",
					actionAttrValue: e,
					actionAttrDescription: "\u5DE5\u5177\u540D\u79F0"
				};
				i.extraData = D.mixin({}, t), D.recordAction(i)
			},
			backtop: {
				name: "backtop",
				handler: function(e, t, i) {
					window.scrolllTop = "75px", C.recordAction(C.backtop.name, i)
				}
			},
			feedback: {
				name: "feedback",
				handler: function(e, t, i) {
					var n = e.getAttribute("data-url");
					window.open(n, "_blank"), C.recordAction(C.feedback.name, i)
				}
			}
		},
		T = {
			WRAPPER_CLASS: "aw-wrapper",
			ITEM_CLASS: "aw-item",
			DIALOG_WRAPPER_CLASS: "aw-dialog-wrapper",
			DIALOG_WRAPPER_LOWRESO_CLASS: "lowreso-dialog",
			DIALOG_WRAPPER_SMALL_CLASS: "aw-dialog-wrapper small",
			DIALOG_CLASS: "aw-dialog",
			DRAGGER_CLASS: "aw-dragger",
			RESUME_BTN_CLASS: "aw-dialog-resume",
			INNER_LOGO_CLASS: "aw-inner-logo",
			getScreenWidthHeight: function() {
				return {
					w: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
					h: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
				}
			},
			getDifferentResolutionClass: function() {
				var e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
					t = 850;
				return t > e ? this.DIALOG_WRAPPER_LOWRESO_CLASS : ""
			},
			content: function(i, n) {
				var o, a, s, r = "";
				if (r += '<div class="aw-window">', r += '<h3 class="aw-title aw-dragger">' + (i.im && i.im.title || "\u39B1\u731C\u4F60\u60F3\u95EE\uFF1A") + "</h3>", r += '<ul class="aw-content">', i.contents) for (o = 0, a = i.contents.length; a > o; o += 1) s = i.contents[o], r += '<li class="aw-lineitem">' + e(s, o, "contents", o === a - 1 ? "last" : "") + "</li>";
				r += "</ul>", r += '<ul class="aw-default-tool">';
				var l = "\u4E07\u8C61\u63D0\u9192";
				r += '<li class="aw-lineitem stress tool-active-notify"><a class="aw-tool-item" href="#"><i class="anywhere-iconfont toolicon ring-icon">&#xe62e;</i><span class="toolwording">' + l + '</span><span class="activeNotifyCount">10</span><span class="actived-corner" data-service="activeNotify"></span></a><div class="aw-hover-tip stress" data-name="tool-active-notify">' + l + "</div>", r += '<div class="active-notify-tooltip"><div class="active-notify-logo-wrapper"><i class="anywhere-iconfont active-notify-logo">&#xe62f;</i></div><i class="anywhere-iconfont active-notify-close">&#xe61e;</i><div class="active-notify-anchor"></div><div class="active-notify-content"><div class="active-notify-content-header"></div><div class="active-notify-content-detail"></div><a href="#" class="active-notify-content-check">\u67E5\u770B\u8BE6\u60C5</a></div></div></li>';
				var c = "\u81EA\u52A9\u670D\u52A1",
					d = i.im.open ? "block" : "none";
				r += '<li class="aw-lineitem stress tool-connect" style="display: ' + d + ';"><a class="aw-tool-item" href="#"><i class="anywhere-iconfont toolicon">&#xe628;</i><span class="toolwording">' + c + '</span><span class="msgCount"></span>' + (i.evaluation ? '<span class="evaluation-reminder">1</span>' : "") + '<span class="actived-corner" data-service="imDialogService"></span></a><div class="aw-hover-tip stress" data-name="tool-connect">' + c + "</div></li>";
				var u = "\u670D\u52A1\u8FFD\u8E2A",
					m = i.showServiceHistory ? "block" : "none";
				if (r += '<li class="aw-lineitem stress tool-ser-history" style="display:' + m + ';"><a class="aw-tool-item" href="#"><i class="anywhere-iconfont toolicon">&#xe61a;</i><span class="toolwording">' + u + '</span><span class="red-point"></span><span class="actived-corner" data-service="serviceHistory"></span></a><div class="aw-hover-tip stress" data-name="tool-ser-history">' + u + "</div></li>", i.toolbar) for (var h in i.toolbar) r += t(h, i.toolbar[h]);
				r += "</ul>", r += "aw-double11" === n ? '<img class="aw-logo aw-double11 aw-dragger" src="' + y.largeLogoD11 + '" alt="\u4E07\u8C61LOGO"/>' : '<img class="aw-logo aw-dragger" src="' + y.largeLogo + '" alt="\u4E07\u8C61LOGO"/>', r += '<div class="aw-anim-lge-logo"></div>', r += '<div class="aw-anim-small-logo"></div>';
				var f = i.im && i.im.bubbleClose ? "none" : "block",
					g = "aw-double11" === n ? y.bubbleWrapperD11 : y.bubbleWrapper;
				return r += '<div class="aw-bubble-wrapper" style="display:' + f + ';"><div class="aw-bubble-text">' + (i.im && i.im.bubble || "\u731C\u4F60\u60F3\u95EE\uFF1A") + '</div><img class="aw-bubble-close"  src="//img.alicdn.com/tps/TB1OE0BLVXXXXaVXXXXXXXXXXXX-18-18.png" alt="\u4E07\u8C61\u53C9\u53C9" style="display:' + f + ';"/><img class="aw-bubble" src="' + g + '" alt="\u4E07\u8C61\u6C14\u6CE1" /></div>'
			}
		},
		N = {
			isDragReady: !1,
			hasDragged: !1,
			dragoffset: {
				x: 0,
				y: 0
			},
			checkPosMousedown: {
				x: 0,
				y: 0
			},
			computePosition: function(e) {
				e = e || window.event;
				var t = (e.screenX || e.pageX || e.clientX) + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft),
					i = (e.screenY || e.pageY || e.clientY) + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
				return {
					pageX: t,
					pageY: i
				}
			},
			getScreenWidthAndHeight: function() {
				return {
					width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
					height: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
				}
			},
			mouseDownHandler: function(e, t, i, n) {
				var o = this;
				e = e || window.event;
				var a = e.srcElement || e.target;
				if (n);
				else if (!a || !D.hasClass(a, T.DRAGGER_CLASS) && a && !D.hasClass(a.parentNode, T.DRAGGER_CLASS)) return;
				D.halt(e), o.isDragReady = !0;
				var s = o.computePosition(e);
				o.dragoffset.x = s.pageX - (n ? i.container.offsetLeft : t.offsetLeft), o.dragoffset.y = s.pageY - (n ? i.container.offsetTop : t.offsetTop), o.checkPosMousedown.x = e.clientX, o.checkPosMousedown.y = e.clientY
			},
			mouseMoveHandler: function(e, t, i, n) {
				var o = this;
				e = e || window.event;
				var a = {
					x: e.clientX,
					y: e.clientY
				},
					s = o.checkPosMousedown.x && a.x && Math.abs(o.checkPosMousedown.x - a.x) <= 1 ? !1 : !0,
					r = o.checkPosMousedown.y && a.y && Math.abs(o.checkPosMousedown.y - a.y) <= 1 ? !1 : !0;
				if ((s || r) && o.isDragReady) {
					var l = o.getScreenWidthAndHeight(),
						c = o.computePosition(e),
						d = n ? -30 : "small" === i.mode ? 50 : 120,
						u = c.pageY - o.dragoffset.y + (n ? -25 : 0),
						h = l.width - c.pageX + o.dragoffset.x - d,
						f = D.getWindowSize(),
						g = m.config,
						p = "small" === i.mode,
						y = {
							width: p ? g.entrySmallWidth : g.entryWidth,
							height: p ? g.entrySmallHeight : g.entryHeight
						},
						v = f.width - y.width - 5,
						w = f.height - y.height + 100;
					30 > u ? u = 30 : u > w && (u = w), 5 > h ? h = 5 : h > v && (h = v);
					var b = n ? i.container : t;
					b.style.top = u + "px", b.style.bottom && (b.style.bottom = ""), b.style.right = h + "px", o.hasDragged = !0, D.find(t, function(e) {
						return !!(e && e.className && e.className.match(/aw-logo/))
					}, function(e) {
						e.style.cursor = "move"
					}), N.isDragging = !0
				}
			},
			mouseUpHandler: function(e, t, i, n) {
				var o = this;
				if (o.isDragReady = !1, o.hasDragged) {
					N.hasDraged = !0, setTimeout(function() {
						N.hasDraged = !1
					}, 60);
					var s = {
						pos: {}
					};
					s.pos.x = e && e.clientX ? e.clientX : "", s.pos.y = e && e.clientY ? e.clientY : "", D.recordAction({
						actionType: "dragAnywhere",
						actionDescription: "\u62D6\u52A8\u670D\u52A1\u7A97",
						extraData: D.mixin(a(i), s)
					}), o.hasDragged = !1;
					var r = n ? i.container : t;
					D.find(r, function(e) {
						return !!(e && e.className && e.className.match(/aw-logo/))
					}, function(e) {
						e.style.cursor = "pointer"
					}), N.isDragging = !1
				}
			}
		};
	N.init = function(e, t, i) {
		var n = this;
		D.bind(e, "mousedown", function(o) {
			n.mouseDownHandler(o, e, t, i)
		});
		var o = i ? e : document;
		D.bind(o, "mouseup", function(o) {
			n.mouseUpHandler(o, e, t, i)
		}), D.bind(o, "mousemove", function(o) {
			n.mouseMoveHandler(o, e, t, i)
		})
	};
	var X, S = [],
		k = "bluegirl",
		B = 0,
		M = {
			ROBOT: "robot",
			OCS: "ocs"
		},
		O = new RegExp("(\\s|^)" + T.ITEM_CLASS + "(\\s|$)");
	l.prototype = {
		_isSpecialUrl: function(e) {
			if (!e) return !1;
			var t = /help-.*\.htm/i,
				i = e.match(t),
				n = !1,
				o = this;
			if (i && i.length > 0) {
				var a = i[0];
				try {
					var s, r = a.substring(a.indexOf("help-") + 5, a.indexOf(".htm")),
						l = o.data.helpIds,
						c = !1;
					for (s in l) {
						var d = l[s];
						if (r.toString() === d.toString()) {
							c = !0;
							break
						}
					}
					c && (n = !0)
				} catch (u) {
					D.error("invalid url of open idalog " + u.message)
				}
			}
			return n
		},
		_renderDialog: function(e, t) {
			var i = this;
			i.dialog = document.createElement("div"), i.dialogInner = document.createElement("iframe"), i.dialogInner.setAttribute("src", D.makeUrl(i.dialogUrl, e)), t && (i.dialogInner.setAttribute("onload", "anywhereDialogload();"), window.anywhereDialogload = function() {
				i.isDialogInnerLoading && (i.dialog.style.display = "none", i.isDialogInnerLoading = !1)
			});
			var n = T.getDifferentResolutionClass();
			"small" === i.mode ? D.addClass(i.dialog, T.DIALOG_WRAPPER_SMALL_CLASS + " " + n) : D.addClass(i.dialog, T.DIALOG_WRAPPER_CLASS + " " + n), D.addClass(i.dialogInner, T.DIALOG_CLASS + " " + n), i.dialog.appendChild(i.dialogInner), i.container.appendChild(i.dialog), t && (i.isDialogInnerLoading = !0)
		},
		updateMsgCount: function(e) {
			var t = this;
			D.find(this.container, function(e) {
				return !!(e && e.className && e.className.match("msgCount"))
			}, function(i) {
				e ? (i.innerText = t.unreadedOcsCount = 0, i.style.display = "none") : (t.unreadedOcsCount++, i.style.display = "block", i.innerText = t.unreadedOcsCount)
			})
		},
		trigger: function(e, t) {
			var i = this,
				n = function(e, t) {
					"more" === e.type && (e = D.mixin(e, {
						name: ""
					})), i.showDialog(e, t)
				},
				o = function(e) {
					if (!e.options || !e.options.linkUri) return void D.error("could not found link uri on " + e.name);
					var t = e.options,
						n = D.makeUrl(t.linkUri, a(i), !0);
					D.openWindow(n, t.windowTitle || "")
				},
				s = {
					global: n,
					more: n,
					link: o,
					knowledge: n,
					selfService: n
				};
			e ? s[e.type] ? s[e.type](e, t) : D.error("could not found action type: " + e.type) : D.error("item is empty")
		},
		switchMode: function(e, t, i) {
			var n = this;
			n.mode != e && (n.mode = e, x.switchMode(n.container, e, t, i, n))
		},
		switchLogo: function() {
			var e = this;
			D.find(e.container, function(e) {
				return !!(e && e.className && e.className.match("aw-logo"))
			}, function(t) {
				"small" !== e.mode && ("aw-double11" === e.theme ? t.setAttribute("src", y.largeLogoD11) : e.isOpenDialog ? t.setAttribute("src", y.largeMoveLogo) : t.setAttribute("src", y.largeLogo))
			})
		},
		openDialog: function(e, t) {
			var i, n = this.data.abtest && "link" === this.data.abtest.openOutKnowledge ? !0 : !1,
				o = "",
				s = "",
				l = {},
				c = this,
				d = "firstAnswer",
				u = "serviceHistory",
				m = "activeNotify",
				h = "knowledge",
				f = e.isFromToolBtn;
			if ("object" !== ("undefined" == typeof e ? "undefined" : _typeof(e))) return void D.error("open dialog params is not json format");
			if (!(e.kid || e.url || e.isFirstAnswer || e.isServiceHistory || e.isActiveNotify)) return void D.error("question params kid or url is empty");
			if (n || c._isSpecialUrl(e.url)) {
				var g = e.url,
					p = /(http|https)/i;
				return g = p.test(g) ? g : location.protocol + g, window.open(g, "_blank"), void D.recordAction({
					actionType: "openExternalLink",
					actionDescription: "\u6253\u5F00\u5916\u94FE",
					actionAttrValue: "link",
					actionAttrDescription: "\u5916\u94FE\u7C7B\u578B",
					extraData: D.mixin(a(c), this.data)
				})
			}
			if (c.isOpenDialog = !0, c.switchLogo(), o = e.isFirstAnswer ? d : e.isServiceHistory ? u : e.isActiveNotify ? m : h, s = o === d ? e.isBubbleTrigger ? this.data.im.bubbleContent : this.data.im.imFirstAnswer : o === u ? "serviceHistory" : o === m ? "activeNotify" : "delayShow", l = o === d ? {
				name: s
			} : {
				name: s,
				kid: e.kid,
				mappingUrl: e.url,
				isExternal: 1
			}, l.resoClass = "lowreso-dialog" === T.getDifferentResolutionClass() ? "" : "highreso-dialog", !f) {
				var y = o === d && e.isBubbleTrigger ? "bubble" : o;
				D.recordAction({
					actionType: "openExternalLink",
					actionDescription: "\u6253\u5F00\u5916\u94FE",
					actionAttrValue: y,
					actionAttrDescription: "\u5916\u94FE\u7C7B\u578B",
					extraData: D.mixin(a(c), this.data)
				})
			}
			var v = this.currentActiveService === d || this.currentActiveService === h ? "imDialogService" : this.currentActiveService,
				w = o === d || o === h ? "imDialogService" : o;
			if (o === m && "all" !== e.msgId && (w = "imDialogService"), "imDialogService" === w && c.updateMsgCount(!0), D.find(c.container, function(e) {
				return !!(e && e.className && e.className.match(/actived-corner/))
			}, function(e) {
				setTimeout(function() {
					e.style.display = e.getAttribute("data-service") !== w ? "none" : "block"
				}, 300)
			}), w !== v && v) return this.closeDialog({}, function() {
				c.openDialog(e)
			}), void(this.currentActiveService = w);
			this.currentActiveService = w;
			var b = D.mixin(a(this), {
				type: o,
				name: s,
				theme: this.getTheme(),
				options: D.mixin(l, this.params),
				trackerToken: D.trackerToken,
				isMappingId: o === h ? 1 : 0,
				userId: this.data.userId || "",
				notice: this.data.notice || {},
				bu: this.data.im && this.data.im.robotKnowledgeBu || "",
				wanxiangFlag: this.data.wanxiangFlag || "",
				showServiceHistory: this.data.showServiceHistory || !1,
				sayno: this.data.sayno || !1,
				subUserId: this.data.subUserId || "",
				mode: this.mode || "",
				msgId: e && e.msgId || "all",
				templateId: e && e.templateId || "",
				evaluation: this.data.evaluation
			});
			if (o === d && D.find(c.container, function(e) {
				return !!(e && e.className && e.className.match(/evaluation-reminder/))
			}, function(e) {
				e.style.display = "none", c.data.evaluation = !1
			}), c.isDialogInnerLoading && (c.isDialogInnerLoading = !1, c.destroyPreloadDialog()), this.dialog) {
				if (b.im = this.data.im || "", b.anywhereContents = this.data.contents || "[]", "firstAnswer" === o) {
					if (i = c.dialog.style.display, this.resumeBtn && "none" === i && x.hideResumeBtn(c.resumeBtn, function() {
						c.resumeBtn.style.display = "none"
					}), this.dialogId) {
						var i = c.dialog.style.display;
						return void(this.resumeBtn && "none" === i && (this.dialog.style.display = "block", x.showDialog(c.dialogInner, null, c)))
					}
					return this.dialog.style.display = "block", x.showDialog(c.dialogInner, null, c), this.dialogId = d, void r(this, "refreshAWDialog", b)
				}
				var I = "open_" + (e.kid || "");
				this.dialogId !== "open_" + I && r(this, "refreshAWDialog", b), this.dialogId || (this.dialog.style.display = "block", x.showDialog(c.dialogInner, null, c)), this.resetTriggerNode()
			} else D.isDebug && (b.debug = 1), c._renderDialog(b, !1), setTimeout(function() {
				x.showDialog(c.dialogInner, null, c)
			}, 250);
			this.dialogId = "firstAnswer" === o ? "firstAnswer" : "open_" + e.kid, i = c.dialog.style.display, this.dialog && (this.dialog.style.display = "block"), this.resumeBtn && "none" === i && x.hideResumeBtn(c.resumeBtn, function() {
				c.resumeBtn.style.display = "none", x.showDialog(c.dialogInner, null, c)
			})
		},
		showDialog: function(e, t) {
			var i = this;
			i.isOpenDialog = !0, i.updateMsgCount(!0), i.switchLogo(), i.isDialogInnerLoading && (i.isDialogInnerLoading = !1, i.destroyPreloadDialog());
			var n = "imDialogService";
			if (D.find(i.container, function(e) {
				return !!(e && e.className && e.className.match(/actived-corner/))
			}, function(e) {
				setTimeout(function() {
					e.style.display = e.getAttribute("data-service") !== n ? "none" : "block"
				}, 300)
			}), "serviceHistory" === this.currentActiveService) return this.closeDialog({}, function() {
				i.showDialog(e, t)
			}), void(this.currentActiveService = n);
			if (this.currentActiveService = n, e) {
				var o = D.mixin(a(this), {
					type: "knowledge" === e.type ? "knowledge-to-robot" : e.type,
					name: e.name,
					theme: this.getTheme(),
					options: D.mixin(e.options, this.params),
					trackerToken: D.trackerToken,
					isMappingId: 0,
					userId: this.data.userId || "",
					notice: this.data.notice || {},
					bu: this.data.im && this.data.im.robotKnowledgeBu || "",
					wanxiangFlag: this.data.wanxiangFlag || "",
					showServiceHistory: this.data.showServiceHistory || !1,
					sayno: this.data.sayno || !1,
					subUserId: this.data.subUserId || "",
					mode: this.mode || ""
				});
				o.options.resoClass = "lowreso-dialog" === T.getDifferentResolutionClass() ? "" : "highreso-dialog", o.options.isExternal = 0, this.dialog ? (o.im = this.data.im || "", o.anywhereContents = this.data.contents || "[]", this.dialogId !== e.awId && r(this, "refreshAWDialog", o), this.dialogId || (this.dialog.style.display = "block", x.showDialog(i.dialogInner, null, i))) : (D.isDebug && (o.debug = 1), i._renderDialog(o, !1), setTimeout(function() {
					x.showDialog(i.dialogInner, null, i)
				}, 250)), this.dialogId = e.awId
			}
			var s = this.dialog.style.display;
			if (this.dialog && (this.dialog.style.display = "block"), this.resumeBtn && "none" === s) {
				if ("small" === i.mode) {
					var l = i.resumeBtn.getAttribute("class"); - 1 === l.indexOf("small") && (i.resumeBtn.setAttribute("class", l + " small"), i.resumeBtn.style.right = i.logoWidth - 10 + "px")
				}
				x.hideResumeBtn(i.resumeBtn, function() {
					i.resumeBtn.style.display = "none", x.showDialog(i.dialogInner, null, i)
				})
			}
			t && this.activeTriggerNode(t.parentNode)
		},
		createDialog: function() {
			var e = this,
				t = D.mixin(a(this), {
					type: "preload",
					name: "",
					theme: this.getTheme(),
					options: D.mixin({
						resoClass: "lowreso-dialog" === T.getDifferentResolutionClass() ? "" : "highreso-dialog"
					}, this.params),
					trackerToken: D.trackerToken,
					isMappingId: 0,
					userId: this.data.userId || "",
					notice: this.data.notice || {},
					bu: this.data.im && this.data.im.robotKnowledgeBu || "",
					wanxiangFlag: this.data.wanxiangFlag || "",
					showServiceHistory: this.data.showServiceHistory || !1,
					sayno: this.data.sayno || !1,
					subUserId: this.data.subUserId || "",
					mode: this.mode || ""
				});
			e._renderDialog(t, !0)
		},
		activeTriggerNode: function(e) {
			e && D.addClass(e, "active")
		},
		resetTriggerNode: function() {
			var e, t, i = this.triggerNode;
			for (e = 0, t = i.length; t > e; e += 1) D.removeClass(i[e].parentNode, "active")
		},
		closeDialog: function(e, t) {
			var i = this;
			if (this.isOpenDialog = !1, this.currentActiveService = void 0, i.switchLogo(), D.find(i.container, function(e) {
				return !!(e && e.className && e.className.match(/actived-corner/))
			}, function(e) {
				e.style.display = "none"
			}), this.dialog && x.closeDialog(i.dialogInner, function() {
				i.dialog && (i.dialog.style.display = "none", t && t())
			}), e && e.options && e.options.resumeBtn) {
				if (this.resumeBtn) this.resumeBtn.style.display = "block";
				else {
					this.resumeBtn = document.createElement("div");
					var n = "small" === i.mode ? "small" : "";
					D.addClass(this.resumeBtn, T.RESUME_BTN_CLASS + " " + n), D.addClass(this.resumeBtn, T.getDifferentResolutionClass()), this.resumeBtn.innerHTML = '<i class="anywhere-iconfont">&#xe626;</i>', this.container.appendChild(this.resumeBtn), D.bind(this.resumeBtn, "click", function() {
						i.showDialog(), D.recordAction({
							actionType: "expandDialog",
							actionDescription: "\u5C55\u5F00\u7A97\u53E3(\u70B9\u51FB\u5C55\u5F00\u6309\u94AE)",
							extraData: D.mixin(a(i), i.data)
						})
					})
				}
				this.resumeBtn.style.right = "small" === i.mode ? i.logoWidth - 2 + "px" : "118px", x.showResumeBtn(i.resumeBtn, x.defaultTimes)
			} else this.resumeBtn && (this.resumeBtn.style.display = "none"), this.resetTriggerNode(), this.dialogId = ""
		},
		destroyPreloadDialog: function() {
			this.dialog && this.dialog.parentNode.removeChild(this.dialog), this.dialog = null, this.dialogInner = null
		},
		destroyDialog: function() {
			this.closeDialog(), this.dialog && this.dialog.parentNode.removeChild(this.dialog), this.resumeBtn && this.resumeBtn.parentNode.removeChild(this.resumeBtn), this.dialog = null, this.dialogInner = null, this.resumeBtn = null
		},
		setTheme: function(e) {
			return this.theme && D.removeClass(this.container, this.theme), D.hasClass(this.container, T.WRAPPER_CLASS) || D.addClass(this.container, T.WRAPPER_CLASS), this.theme = e, D.addClass(this.container, this.theme), this
		},
		getTheme: function() {
			return this.theme
		},
		moveTo: function(e, t) {
			var n;
			return "auto" === e && (n = i(this), e = n.top, t = n.right), e && (this.container.style.top = e + "px"), t && (this.container.style.right = t + "px"), this
		},
		refresh: function(e, t) {
			function i(e, t) {
				var i = D.mixin({
					target: 1
				}, a(v));
				D.jsonp(f.getUserStateInfo, i, function(i) {
					if (i && i.success && i.data) {
						var n = t;
						n.data.requestId = i.data.requestId || "", n.data.userId = i.data.userId || "", n.data.sayno = i.data.sayno || !1, n.data.showServiceHistory = i.data.showServiceHistory, n.data.apushConfig = i.data.apushConfig, n.data.unreadMessageDTO = i.data.unreadMessageDTO, o(e, n)
					} else o(e, t)
				}, function() {
					D.error("fail to fetch user state info ....."), o(e, t)
				})
			}
			function o(e, t) {
				D.jsonp(f.getProblemKnowledge, w, function(i) {
					var n = i.data.contents || [];
					t.data.contents = n;
					var o = t.data.webSwitch;
					o && o.surveyCardOpen ? r(e, t) : c(e, t)
				}, function() {
					r(e, t)
				})
			}
			function r(e, t) {
				var i = w,
					n = i.bizCode,
					o = i.sourceId,
					a = i.from;
				D.jsonp(f.getAISurveyCardCount, {
					bizCode: n,
					sourceId: o,
					from: a
				}, function(i) {
					i.success && i.data > 0 && (t.data.evaluation = !0), c(e, t)
				}, function() {
					c(e, t)
				})
			}
			function l(e) {
				D.jsonp(f.getAnywhereContentCenter, e, function(t) {
					t.success && t.data ? i(e, t) : (h("response backup anywhere content data has error or wrnog format"), g())
				}, function(e) {
					h("failed to fetch backup anywhere content data, caused by " + e), g()
				})
			}
			function c(e, t) {
				d(t.data), u(t.data), t.data.theme && v.setTheme(t.data.theme);
				var i = {
					actionType: "getAnywhereContent",
					actionDescription: "\u670D\u52A1\u7A97\u66DD\u5149"
				};
				i.extraData = D.mixin(e, t.data), i.extraData.requestUrl = f.getAnywhereContent, i.extraData.screen = T.getScreenWidthHeight(), D.recordAction(i), g();
				for (var n = t.data && t.data.contents || [], o = !1, s = "", r = 0; r < n.length; r++) {
					var l = n[r].type;
					if ("global" === l) {
						o = !0, s = n[r].options.kid;
						break
					}
				}
				if (t.data && t.data.apushConfig && t.data.apushConfig.connect) {
					var c = t.data.apushConfig.url;
					c && (D.isLowerAndEqualIE8() || p(c), D.recordAction({
						actionType: "initApushConnect",
						actionDescription: "\u5EFA\u7ACBApush\u8FDE\u63A5",
						extraData: a(v)
					}))
				}
				var m = t.data.unreadMessageDTO;
				if (m && m.unreadMsgCount > 0) {
					var h = {},
						y = m.strongRemindInfo;
					y && y.strongTitle ? (h.msgId = y.msgId, h.templateId = y.templateId, h.strongTitle = y.strongTitle, h.strongContent = y.strongContent, h.remindType = 2) : h.remindType = 1, h.unreadCount = m.unreadMsgCount, h.unreadMsgIds = m.msgIds, v.showActiveNotifyTip(h, !0)
				}
				o && D.recordAction({
					actionType: "globalContentShow",
					actionDescription: "\u5168\u5C40\u5185\u5BB9\u66DD\u5149",
					actionAttrValue: s,
					actionAttrDescription: "\u5BF9\u5E94ID",
					extraData: i.extraData
				})
			}
			function d(e) {
				v.data = e, v.isHidden && (v.container.style.display = "none"), v.container.innerHTML = T.content(e, v.theme), v.triggerNode = [], v.requestId = e.requestId || "N/A"
			}
			function u(e) {
				var t = e.im.bubble,
					i = e.im.bubbleClose,
					n = "\u70B9\u6211\u5C55\u5F00\u5594\uFF5E",
					o = "\u70B9\u6211\u6536\u8D77\u5594\uFF5E",
					s = v.data.im.miniDialog,
					r = !1,
					l = i,
					c = T.getDifferentResolutionClass();
				v.mode = "normal", v.dodgeAWContentHeight = 0;
				for (var d in e.contents) {
					v.dodgeAWContentHeight || (v.dodgeAWContentHeight = e.contents.length);
					var u = e.contents[d].name,
						h = u ? u.length : 0,
						g = 20,
						p = h > 0 ? Math.ceil(h / 8) : 1;
					g += 18 * p, v.dodgeAWContentHeight += g
				}
				var y = D.findChildByClass(v.container, "aw-window");
				D.applyMiniDialog(s) && (v.container.style.opacity = 0, v.switchMode("small", function() {
					r = !1, v.mode = "small", D.addClass(y, "small"), D.addClass(v.container, "small"), v.resumeBtn && D.addClass(v.resumeBtn, c), v.container.style.opacity = 1
				}, !0)), D.addClass(y, c), D.find(v.container, function(e) {
					return !!(e && e.className && e.className.match(O))
				}, m), D.find(v.container, function(e) {
					return !!(e && e.className && e.className.match(/active-notify-tooltip/))
				}, function(e) {
					D.bind(e, "click", function(e) {
						D.halt(e)
					})
				}), D.find(v.container, function(e) {
					return !!(e && e.className && e.className.match(/active-notify-close/))
				}, function(e) {
					D.bind(e, "click", function(t) {
						D.halt(t), v.clearActiveNotifyTip(!0);
						var i = e.parentNode,
							n = i.getAttribute("data-msgId"),
							o = i.getAttribute("data-templateId");
						D.jsonp(f.closeRemind, D.mixin({
							msgId: n
						}, a(v)), function() {}), D.recordAction({
							actionType: "clickStrongNotifyClose",
							actionDescription: "\u70B9\u51FB\u5F3A\u63D0\u9192\u5173\u95ED",
							actionAttrValue: o,
							actionAttrDescription: "templateId",
							extraData: a(v),
							realtime: !0,
							realtimeData: D.mixin({
								userId: v.data.userId || "",
								msgId: n,
								templateId: o
							}, a(v))
						})
					})
				}), D.find(v.container, function(e) {
					return !!(e && e.className && e.className.match(/active-notify-content-check/))
				}, function(e) {
					D.bind(e, "click", function(t) {
						if (D.halt(t), "activeNotify" !== v.currentActiveService) {
							v.clearActiveNotifyTip();
							var i = e.parentNode.parentNode,
								n = i.getAttribute("data-msgId"),
								o = i.getAttribute("data-templateId");
							v.openDialog({
								isFirstAnswer: !1,
								isActiveNotify: !0,
								isFromToolBtn: !0,
								msgId: n,
								templateId: o
							}), D.recordAction({
								actionType: "clickStrongNotifyDetail",
								actionDescription: "\u70B9\u51FB\u5F3A\u63D0\u9192\u67E5\u770B\u8BE6\u60C5",
								actionAttrValue: o,
								actionAttrDescription: "templateId",
								extraData: a(v),
								realtime: !0,
								realtimeData: D.mixin({
									userId: v.data.userId || "",
									msgId: n,
									templateId: o
								}, a(v))
							})
						}
					})
				}), D.find(v.container, function(e) {
					return !!(e && e.className && e.className.match(/aw-bubble-wrapper/))
				}, function(t) {
					if (l) return void(t.style.display = "none");
					D.bind(t, "click", function(i) {
						i = i || window.event;
						var n = i.srcElement || i.target;
						if ((!n || !D.hasClass(n, "aw-bubble-close")) && e.im && e.im.bubbleContent) {
							v.openDialog({
								isFirstAnswer: !0,
								isBubbleTrigger: !0
							}), t.style.display = "none";
							var o = D.mixin({
								bubble: e.im.bubble,
								bubbleContent: e.im.bubbleContent || ""
							}, a(v));
							D.jsonp(f.closeImBubble, o, function() {});
							var s = {
								actionType: "clickBubbleOpen",
								actionDescription: "\u70B9\u51FB\u6C14\u6CE1\u6253\u5F00\u7A97\uFF0C\u5173\u95ED\u6CE1",
								actionAttrValue: e.abtest && e.abtest.bubbleType ? e.abtest.bubbleType : -1,
								actionAttrDescription: "abtest.bubbleType"
							};
							s.extraData = D.mixin(a(v), e), s.extraData.requestUrl = f.closeImBubble, D.recordAction(s)
						}
					});
					var i = D.findChildByClass(t, "aw-bubble-close");
					D.bind(i, "click", function(n) {
						t.style.display = "none", i.style.display = "none", l = !0;
						var o = D.mixin({
							bubble: e.im.bubble,
							bubbleContent: e.im.bubbleContent || ""
						}, a(v));
						D.jsonp(f.closeImBubble, o, function() {});
						var s = {
							actionType: "closeImBubble",
							actionDescription: "\u5173\u95ED\u6C14\u6CE1"
						};
						s.extraData = D.mixin(a(v), e), s.extraData.requestUrl = f.closeImBubble, D.recordAction(s)
					})
				}), D.find(v.container, function(e) {
					return !!(e && e.className && e.className.match(/aw-logo/))
				}, function(i) {
					function s() {
						if (!r && !N.hasDraged) {
							if (r = !0, "normal" === v.mode) {
								v.switchMode("small", function() {
									r = !1
								}), v.mode = "small", D.addClass(y, "small"), D.addClass(v.container, "small");
								var t = i.parentNode,
									s = t.nextSibling;
								if (s) {
									var l = s.getAttribute("class"); - 1 === l.indexOf("small") && s.setAttribute("class", l + " small")
								}
								if (v.resumeBtn) {
									var u = v.resumeBtn.getAttribute("class"); - 1 === u.indexOf("small") && v.resumeBtn.setAttribute("class", u + " small")
								}
								c && (d.innerHTML = n), D.setMiniDialog(!0)
							} else {
								v.switchMode("normal", function() {
									r = !1
								}), v.mode = "normal", D.removeClass(y, "small"), D.removeClass(v.container, "small");
								var t = i.parentNode,
									s = t.nextSibling;
								if (s) {
									var l = s.getAttribute("class"); - 1 !== l.indexOf("small") && s.setAttribute("class", l.replace("small", ""))
								}
								if (v.resumeBtn) {
									var u = v.resumeBtn.getAttribute("class"); - 1 !== u.indexOf("small") && v.resumeBtn.setAttribute("class", u.replace("small", ""))
								}
								c && (d.innerHTML = o), D.setMiniDialog(!1)
							}
							var m = {
								actionType: "clickLogo",
								actionDescription: "\u70B9\u51FBlogo",
								actionAttrValue: v.mode,
								actionAttrDescription: "\u5207\u6362\u7ED3\u679C\u72B6\u6001"
							};
							m.extraData = D.mixin(a(v), e), D.recordAction(m)
						}
					}
					D.find(v.container, function(e) {
						return !!(e && e.className && e.className.match("aw-anim-lge-logo"))
					}, function(e) {
						D.find(v.container, function(e) {
							return !!(e && e.className && e.className.match("aw-anim-small-logo"))
						}, function(t) {
							D.bind(e, "click", function(e) {
								"aw-double11" !== v.theme && x.setupAutoAnim(v.container, v), s()
							}), D.bind(t, "click", function(e) {
								"aw-double11" !== v.theme && x.setupAutoAnim(v.container, v), s()
							}), "aw-double11" !== v.theme && x.setupAutoAnim(v.container, v)
						})
					}), D.bind(i, "click", function(e) {
						s()
					});
					var c = D.findChildByClass(i.parentNode, "aw-bubble-wrapper"),
						d = c ? D.findChildByClass(c, "aw-bubble-text") : null;
					D.bind(i, "mouseenter", function(e) {
						"none" === c.style.display && (c.style.display = "block"), d.innerHTML = "small" === v.mode ? n : o
					}), D.bind(i, "mouseleave", function(e) {
						c && ("block" === c.style.display && l && (c.style.display = "none"), d.innerText = t)
					})
				}), D.find(v.container, function(e) {
					return !!(e && e.className && e.className.match(/tool-connect|tool-ser-history|tool-active-notify/))
				}, function(t) {
					var i = t.getAttribute("class"),
						n = !1,
						o = !1;
					D.bind(t, "click", function(n) {
						if (D.halt(n), !("imDialogService" === v.currentActiveService && -1 !== i.indexOf("tool-connect") || "activeNotify" === v.currentActiveService && -1 !== i.indexOf("tool-active-notify") || "serviceHistory" === v.currentActiveService && -1 !== i.indexOf("tool-ser-history"))) {
							var s = {
								actionType: "",
								actionDescription: ""
							};
							if (-1 !== i.indexOf("tool-connect") ? (v.openDialog({
								isFirstAnswer: !0,
								isFromToolBtn: !0
							}), s = {
								actionType: "clickConnect",
								actionDescription: "\u70B9\u51FB\u53EC\u5524\u5BA2\u670D"
							}) : -1 !== i.indexOf("tool-active-notify") ? (v.clearActiveNotifyTip(), v.openDialog({
								isFirstAnswer: !1,
								isActiveNotify: !0,
								isFromToolBtn: !0,
								msgId: "all"
							}), s = {
								actionType: "clickToolActiveNotify",
								actionDescription: "\u70B9\u51FB\u4E3B\u52A8\u63D0\u9192\u5DE5\u5177"
							}) : -1 !== i.indexOf("tool-ser-history") && (v.openDialog({
								isFirstAnswer: !1,
								isServiceHistory: !0,
								isFromToolBtn: !0
							}), s = {
								actionType: "clickToolServiceHistory",
								actionDescription: "\u70B9\u51FB\u670D\u52A1\u8BB0\u5F55\u5DE5\u5177"
							}), s.extraData = D.mixin(a(v), e), D.recordAction(s), "small" === v.mode && !o) {
								var r = D.findChildByClass(t, "aw-hover-tip");
								o = !0, x.hideTooltip(r, function() {
									r.style.display = "none", o = !1
								})
							}
						}
					}), D.bind(t, "mouseenter", function() {
						if ("small" === v.mode && !n) {
							if (-1 !== i.indexOf("tool-active-notify") && v.isStrongActvieNotifyShow) return;
							var e = D.findChildByClass(t, "aw-hover-tip"),
								o = t.getAttribute("class");
							if (-1 === o.indexOf("small") && (t.setAttribute("class", o + " small"), e.style.right = v.logoWidth - 8 + "px"), e.style.display = "block", n = !0, v.resumeBtn && "none" !== v.resumeBtn.style.display || v.isOpenDialog) return void(n = !1);
							var a = "connectToolHideTipId" + i,
								s = "connectToolHideTipId" + i;
							clearTimeout(v[a]), clearTimeout(v[s]), v[a] = setTimeout(function() {
								x.showTooltip(e, v, function() {
									n = !1
								})
							}, B)
						}
					}), D.bind(t, "mouseleave", function() {
						if ("small" === v.mode && !o) {
							var e = D.findChildByClass(t, "aw-hover-tip"),
								n = t.getAttribute("class");
							if (-1 !== n.indexOf("small") && t.setAttribute("class", n.replace("small", "")), o = !0, v.resumeBtn && "none" !== v.resumeBtn.style.display || v.isOpenDialog) return e.style.display = "none", void(o = !1);
							var a = "connectToolHideTipId" + i,
								s = "connectToolHideTipId" + i;
							clearTimeout(v[a]), clearTimeout(v[s]), v[s] = setTimeout(function() {
								x.hideTooltip(e, function() {
									e.style.display = "none", o = !1
								})
							}, B)
						}
					})
				}), D.find(v.container, function(e) {
					return !!(e && e.className && e.className.match(/tool-plugin/))
				}, function(t) {
					var i = function() {};
					for (var n in C) if (-1 !== t.getAttribute("class").indexOf("tool-" + n)) {
						i = C[n].handler;
						break
					}
					D.bind(t, "click", function(n) {
						i(t, n, e)
					});
					var o = !1,
						a = !1;
					D.bind(t, "mouseenter", function() {
						if ("small" === v.mode && !o) {
							var e = t.getAttribute("class");
							if (v.isOpenDialog && "small" === v.mode && -1 !== e.indexOf("tool-ser-history")) return;
							var i = D.findChildByClass(t, "aw-hover-tip"); - 1 === e.indexOf("small") && (t.setAttribute("class", e + " small"), i.style.right = v.logoWidth - 8 + "px"), o = !0;
							var n = "show-" + i.getAttribute("data-name") + "-id",
								a = "hide-" + i.getAttribute("data-name") + "-id";
							clearTimeout(v[n]), clearTimeout(v[a]), v[n] = setTimeout(function() {
								x.showTooltip(i, v, function() {
									o = !1
								})
							}, B)
						}
					}), D.bind(t, "mouseleave", function() {
						if ("small" === v.mode && !a) {
							var e = D.findChildByClass(t, "aw-hover-tip"),
								i = t.getAttribute("class"); - 1 !== i.indexOf("small") && t.setAttribute("class", i.replace("small", "")), a = !0;
							var n = "hide-" + e.getAttribute("data-name") + "-id",
								o = "show-" + e.getAttribute("data-name") + "-id";
							clearTimeout(v[n]), clearTimeout(v[o]), v[n] = setTimeout(function() {
								x.hideTooltip(e, function() {
									e.style.display = "none", a = !1
								})
							}, B)
						}
					})
				})
			}
			function m(e) {
				v.triggerNode.push(e), D.bind(e, "click", function(t) {
					D.halt(t);
					var i, o, a;
					for (a = n(e.getAttribute("data-src"), e.getAttribute("data-idx"), v.data), i = 0, o = v.triggerNode.length; o > i; i += 1) D.removeClass(v.triggerNode[i].parentNode, "active");
					v.trigger(a, e)
				})
			}
			function h(e) {
				D.error(e), v.data = null, v.triggerNode = [], v.requestId = ""
			}
			function g() {
				v.isRunning = !1;
				var t = v.nextRefresh;
				"function" == typeof t && (v.nextRefresh = null, t()), e && "function" == typeof e.onRendered ? e.onRendered() : v.onRendered && v.onRendered()
			}
			function p(e) {
				D.initApush(e, function(e) {
					if ("tokenExpired" === e.msgType) {
						if (!b) {
							var t = D.mixin({
								target: 1,
								tokenExpired: !0
							}, a(v));
							D.jsonp(f.getUserStateInfo, t, function(e) {
								if (e && e.success && e.data && e.data.apushConfig && e.data.apushConfig.app && e.data.apushConfig.token && D.apushClient) {
									var t = e.data.apushConfig;
									D.apushClient.subscribeUserMsg(t.app, t.token, y)
								}
							}), b = !0
						}
						D.recordAction({
							actionType: "initApushConnectFail",
							actionDescription: "\u5EFA\u7ACBApush\u8FDE\u63A5\u5931\u8D25",
							extraData: a(v)
						})
					} else y(e)
				})
			}
			function y(e) {
				if (e && e.arg) {
					var t = {};
					try {
						t = JSON.parse(e.arg)
					} catch (i) {
						t = {}
					}
					t.remindType && ("ocs" === v.imInteractMode && (t.remindType = 1), v.showActiveNotifyTip(t))
				}
			}
			var v = this,
				w = {};
			if (this.isRunning) return void(this.nextRefresh = function() {
				v.refresh(e, !0)
			});
			e && e.sourceId && (this.sourceId = e.sourceId, delete e.sourceId), e && e.bizCode && (this.bizCode = e.bizCode, delete e.bizCode), this.params = e, this.isRunning = !0, this.destroyPreloadDialog(), this.destroyDialog();
			var b = !1,
				I = s(e);
			return w = D.mixin(I, a(this)), delete w.requestId, w.sourceUrl = w.sourceUrl && -1 !== w.sourceUrl.indexOf("?") ? w.sourceUrl.substring(0, w.sourceUrl.indexOf("?")) : w.sourceUrl, t || (w.callback = "anywhere_jsonp_getAnywhereContent"), D.initActionTracker(function() {
				D.jsonp(f.getAnywhereContent, w, function(e) {
					e.success && e.data ? i(w, e) : (h("response anywhere content data has error or wrnog format"), l(w))
				}, function(e) {
					h("failed to fetch anywhere content data, caused by " + e), l(w)
				})
			}), this
		},
		fallback: function(e) {
			return D.error("refresh window error, " + e), this
		},
		show: function() {
			this.container.style.display = "block"
		},
		showActiveNotifyTip: function(e, t) {
			var i = this;
			i.isOpenDialog && "activeNotify" === i.currentActiveService && r(this, "receiveActiveNotify", e), D.find(this.container, function(e) {
				return !!(e && e.className && e.className.match("tool-active-notify"))
			}, function(n) {
				var o = n.getAttribute("class"); - 1 === o.indexOf("emphasize") && n.setAttribute("class", o + " emphasize"), D.find(n, function(e) {
					return !!(e && e.className && e.className.match("aw-hover-tip"))
				}, function(e) {
					var t = e.getAttribute("class"); - 1 === t.indexOf("emphasize") && e.setAttribute("class", t + " emphasize")
				}), D.find(n, function(e) {
					return !!(e && e.className && e.className.match("activeNotifyCount"))
				}, function(n) {
					t ? i.activeNotifyCount = e.unreadCount : i.activeNotifyCount++, n.style.display = "block", n.innerText = i.activeNotifyCount
				}), 2 != e.remindType || i.isOpenDialog && "activeNotify" === i.currentActiveService || D.find(n, function(e) {
					return !!(e && e.className && e.className.match("active-notify-tooltip"))
				}, function(t) {
					i.isStrongActvieNotifyShow = !0, t.setAttribute("data-msgId", e.msgId), t.setAttribute("data-templateId", e.templateId), D.find(t, function(e) {
						return !!(e && e.className && e.className.match("active-notify-content-header"))
					}, function(t) {
						t.innerText = e.strongTitle
					}), D.find(t, function(e) {
						return !!(e && e.className && e.className.match("active-notify-content-detail"))
					}, function(t) {
						t.innerText = e.strongContent
					}), x.showActiveNotifyTooltip(t, function() {
						t.style.display = "block"
					})
				}), D.find(n, function(e) {
					return !!(e && e.className && e.className.match("ring-icon"))
				}, function(t) {
					var n = t.getAttribute("class");
					1 == e.remindType ? -1 !== n.indexOf("ring-come") || i.isStrongActvieNotifyShow ? t.setAttribute("class", n.replace("ring-come")) : t.setAttribute("class", n + " ring-come") : 2 == e.remindType && t.setAttribute("class", n.replace("ring-come", ""))
				})
			});
			var n = e.unreadMsgIds && e.unreadMsgIds.length > 0 ? e.unreadMsgIds.toString() : "";
			D.recordAction({
				actionType: "activeNotifyShow",
				actionDescription: "\u4E3B\u52A8\u63D0\u9192\u66DD\u5149",
				actionAttrValue: e.remindType,
				actionAttrDescription: "\u7C7B\u578B",
				extraData: D.mixin(a(i), {
					actionAttrValue2: t ? !0 : !1,
					actionAttrDescription2: "\u521D\u59CB\u7C7B\u578B",
					actionAttrValue3: e.templateId || "all",
					actionAttrDescription3: "templateId",
					actionAttrValue4: n,
					actionAttrDescription4: "unreadTemplateIds"
				}),
				realtime: 2 === e.remindType,
				realtimeData: D.mixin({
					userId: i.data.userId || "",
					msgId: e.msgId,
					templateId: e.templateId || "999999"
				}, a(i))
			})
		},
		clearActiveNotifyTip: function(e) {
			var t = this;
			D.find(t.container, function(e) {
				return !!(e && e.className && e.className.match("tool-active-notify"))
			}, function(i) {
				if (t.isStrongActvieNotifyShow = !1, !e) {
					var n = i.getAttribute("class");
					i.setAttribute("class", n.replace("emphasize", "")), D.find(i, function(e) {
						return !!(e && e.className && e.className.match("aw-hover-tip"))
					}, function(e) {
						e.setAttribute("class", e.getAttribute("class").replace("emphasize", ""))
					}), D.find(i, function(e) {
						return !!(e && e.className && e.className.match("ring-icon"))
					}, function(e) {
						e.setAttribute("class", e.getAttribute("class").replace("ring-come", ""))
					}), D.find(i, function(e) {
						return !!(e && e.className && e.className.match("activeNotifyCount"))
					}, function(e) {
						t.activeNotifyCount = 0, e.style.display = "none"
					})
				}
				D.find(i, function(e) {
					return !!(e && e.className && e.className.match("active-notify-tooltip"))
				}, function(e) {
					"" !== e.style.display && "block" === e.style.display && x.hideActiveNotifyTooltip(e)
				})
			})
		},
		getContents: function() {
			return this.data && this.data.contents || []
		},
		initImgViewer: function(e) {
			imgViewer.init(e)
		}
	}, l.formatInitArgs = o, l.hasDefault = function() {
		return !!X
	}, l.initDefault = function(e) {
		return e = e || {}, e.container || (e.container = document.createElement("div"), document.body.appendChild(e.container)), X = new l(e)
	}, l.getDefault = function() {
		return X
	}, l.eachInstances = function(e) {
		if (S.length && e) for (var t = 0, i = S.length; i > t; t += 1) e(S[t])
	};
	var L = {
		attached: !1,
		init: function() {
			function e(e) {
				l.eachInstances(function(t) {
					t.refresh(e)
				})
			}
			function t(t) {
				try {
					var i, n, o = JSON.parse(t.data);
					"refreshAW" === o.action ? e(o.value) : "closeAWDialog" === o.action ? (i = o.value.sourceId, n = o.value.bizCode || "", l.eachInstances(function(e) {
						e.sourceId.toString() === i.toString() && e.bizCode === n && e.closeDialog(o.value)
					})) : "updateOcsMsgCount" === o.action ? (i = o.value.sourceId, n = o.value.bizCode || "", l.eachInstances(function(e) {
						e.sourceId.toString() === i.toString() && e.bizCode === n && "imDialogService" !== e.currentActiveService && e.updateMsgCount()
					})) : "openServiceHistory" === o.action ? l.eachInstances(function(e) {
						e.openDialog({
							isFirstAnswer: !1,
							isServiceHistory: !0,
							isFromToolBtn: !1
						})
					}) : "showServiceHistory" === o.action ? l.eachInstances(function(e) {
						D.find(e.container, function(e) {
							return !!(e && e.className && e.className.match(/tool-ser-history/))
						}, function(e) {
							e && (e.style.display = "block")
						})
					}) : "clearActiveNotifyMsg" === o.action ? l.eachInstances(function(e) {
						e.clearActiveNotifyTip()
					}) : "switchMode" === o.action ? l.eachInstances(function(e) {
						e.imInteractMode = o.value
					}) : "awMouseDown" === o.action ? l.eachInstances(function(e) {
						N.mouseDownHandler(o.value, void 0, e, !0)
					}) : "awMouseMove" === o.action ? l.eachInstances(function(e) {
						N.mouseMoveHandler(o.value, void 0, e, !0)
					}) : "awMouseUp" === o.action && l.eachInstances(function(e) {
						N.mouseUpHandler(o.value, void 0, e, !0)
					})
				} catch (a) {}
			}
			if (!L.attached) {
				window.addEventListener ? window.addEventListener("message", t) : window.attachEvent("onmessage", t), window.onbeforeunload = function(e) {
					e = e || window.event;
					var t = !1,
						i = "\u60A8\u7684\u64CD\u4F5C\u5C06\u4E2D\u65AD\u4E0E\u5BA2\u670D\u7684\u4F1A\u8BDD\uFF0C\u5EFA\u8BAE\u60A8\u9009\u62E9\u201C\u7559\u5728\u6B64\u9875\u201D\u4FDD\u6301\u4F1A\u8BDD\u5E76\u91CD\u65B0\u5F00\u542F\u65B0\u7684\u9875\u9762\u8FDB\u884C\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u9632\u6B62\u65AD\u7EBF\u54E6~";
					return l.eachInstances(function(e) {
						e.imInteractMode === M.OCS && (t = !0)
					}), t ? (e && (e.returnValue = i), i) : void 0
				}, L.attached = !0
			}
		}
	};
	m.init = function(e) {
		return c("init") ? (d(), l.hasDefault() ? (D.error("init default window more than once"), l.getDefault().refresh(e)) : l.initDefault(e)) : void 0
	};
	for (var v in l.prototype) l.prototype.hasOwnProperty(v) && (m[v] ? D.error("overwrite entry method: " + v) : m[v] = u(v));
	window.AW = m, window.awAsyncInit && window.awAsyncInit()
}();