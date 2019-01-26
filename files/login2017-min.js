!
function(e, n, t, r) {
	var i, o;
	!
	function(e, n) {
		function t(e) {
			return function(n) {
				return {}.toString.call(n) == "[object " + e + "]"
			}
		}
		function r() {}
		var a = t("Function"),
			u = {};
		r.prototype.exec = function() {
			function e(e) {
				return r.get(e).exec()
			}
			var t = this;
			if (this.execed) return t.exports;
			this.execed = !0;
			var i = t.factory,
				o = a(i) ? i(e, t.exports = {}, t) : i;
			return o === n && (o = t.exports), delete t.factory, t.exports = o, o
		}, r.save = function(e) {
			var n = r.get(e.id);
			n.id = e.id, n.dependencies = e.deps, n.factory = e.factory
		}, r.get = function(e) {
			return u[e] || (u[e] = new r)
		}, i = function(e, n, t) {
			a(n) && (t = n, n = []);
			var i = {
				id: e,
				deps: n,
				factory: t
			};
			r.save(i)
		}, o = function(e) {
			var n = r.get(e);
			return n.execed || n.exec(), n.exports
		}
	}(e), i("underscore", function() {
		var e = function() {
				var e = {},
					n = Object.prototype.hasOwnProperty,
					t = Array.prototype.slice,
					i = Object.prototype.toString,
					o = Function.prototype.bind,
					a = Object.keys,
					u = Array.prototype.reduce,
					c = function(e, n, t) {
						if (void 0 === n) return e;
						switch (null === t ? 3 : t) {
						case 1:
							return function(t) {
								return e.call(n, t)
							};
						case 2:
							return function(t, r) {
								return e.call(n, t, r)
							};
						case 3:
							return function(t, r, i) {
								return e.call(n, t, r, i)
							};
						case 4:
							return function(t, r, i, o) {
								return e.call(n, t, r, i, o)
							}
						}
						return function() {
							return e.apply(n, arguments)
						}
					},
					s = function() {};
				e.each = e.forEach = function(n, t, r) {
					if (null === n) return n;
					t = c(t, r);
					var i, o = n.length;
					if (o === +o) for (i = 0; o > i; i++) t(n[i], i, n);
					else {
						var a = e.keys(n);
						for (i = 0, o = a.length; o > i; i++) t(n[a[i]], a[i], n)
					}
					return n
				}, e.bind = function(n, r) {
					var i, a;
					if (o && n.bind === o) return o.apply(n, t.call(arguments, 1));
					if (!e.isFunction(n)) throw new TypeError("Bind must be called on a function");
					return i = t.call(arguments, 2), a = function() {
						if (!(this instanceof a)) return n.apply(r, i.concat(t.call(arguments)));
						s.prototype = n.prototype;
						var o = new s;
						s.prototype = null;
						var u = n.apply(o, i.concat(t.call(arguments)));
						return e.isObject(u) ? u : o
					}
				}, e.keys = function(n) {
					if (!e.isObject(n)) return [];
					if (a) return a(n);
					var t = [];
					for (var r in n) e.has(n, r) && t.push(r);
					return t
				}, e.has = function(e, t) {
					return null !== e && n.call(e, t)
				}, e.isArray = Array.isArray ||
				function(e) {
					return "[object Array]" === i.call(e)
				}, e.isFunction = function(e) {
					return "function" == typeof e || !1
				}, e.isObject = function(e) {
					var n = typeof e;
					return "function" === n || "object" === n && !! e
				}, e.indexOf = function(n, t, r) {
					if (null === n) return -1;
					var i = 0,
						o = n.length;
					if (r) {
						if ("number" != typeof r) return i = e.sortedIndex(n, t), n[i] === t ? i : -1;
						i = 0 > r ? Math.max(0, o + r) : r
					}
					for (; o > i; i++) if (n[i] === t) return i;
					return -1
				}, e.extend = function(t) {
					if (!e.isObject(t)) return t;
					for (var r, i, o = 1, a = arguments.length; a > o; o++) {
						r = arguments[o];
						for (i in r) n.call(r, i) && (t[i] = r[i])
					}
					return t
				}, e.heredoc = function(e) {
					return e.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "").replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "")
				};
				var f = {
					"&": "&amp;",
					"<": "&lt;",
					">": "&gt;",
					'"': "&quot;",
					"'": "&#x27;",
					"`": "&#x60;"
				},
					l = function(n) {
						var t = function(e) {
								return n[e]
							},
							r = "(?:" + e.keys(n).join("|") + ")",
							i = RegExp(r),
							o = RegExp(r, "g");
						return function(e) {
							return e = null === e ? "" : "" + e, i.test(e) ? e.replace(o, t) : e
						}
					};
				e.escape = l(f), e.templateSettings = {
					evaluate: /<%([\s\S]+?)%>/g,
					interpolate: /<%=([\s\S]+?)%>/g,
					escape: /<%-([\s\S]+?)%>/g
				};
				var d = /\\|'|\r|\n|\u2028|\u2029/g,
					h = {
						"'": "'",
						"\\": "\\",
						"\r": "r",
						"\n": "n",
						"\u2028": "u2028",
						"\u2029": "u2029"
					},
					p = function(e) {
						return "\\" + h[e]
					},
					m = /(.)^/;
				return e.template = function(n, t) {
					var r = e.templateSettings,
						i = RegExp([(r.escape || m).source, (r.interpolate || m).source, (r.evaluate || m).source].join("|") + "|$", "g"),
						o = 0,
						a = "__p+='";
					n.replace(i, function(e, t, r, i, u) {
						return a += n.slice(o, u).replace(d, p), o = u + e.length, t ? a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), e
					}), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
					try {
						var u = new Function(r.variable || "obj", "_", a)
					} catch (c) {
						throw c.source = a, c
					}
					var s = function(n) {
							return u.call(this, n, e)
						},
						f = r.variable || "obj";
					return s.source = "function(" + f + "){\n" + a + "}", t ? s(t) : s
				}, e.dasherize = function(e) {
					return e.replace(/([A-Z])/g, function(e, n) {
						return "-" + n.toLowerCase()
					})
				}, e.capitalize = function(e) {
					return e.replace(/^([a-z])/, function(e, n) {
						return n.toUpperCase()
					})
				}, e.camelize = function(e) {
					return e.replace(/-([a-z])/g, function(e, n) {
						return n.toUpperCase()
					})
				}, e.map = function(n, t, i) {
					var o = [];
					return null === n || n === r ? o : n.map === Array.prototype.map ? n.map(t, i) : (e.each(n, function(e, n, r) {
						o.push(t.call(i, e, n, r))
					}), o)
				}, e.reduce = function(n, t, r, i) {
					return u && n.reduce === u ? n.reduce(e.bind(t, i), r) : (e.each(n, function(e, n, o) {
						r = t.call(i, r, e, n, o)
					}), r)
				}, e.param = function(n) {
					return n ? e.map(n, function(e, n) {
						return encodeURIComponent(n) + "=" + encodeURIComponent(e)
					}).join("&") : void 0
				}, e.last = function(e) {
					return e[e.length - 1]
				}, e
			}();
		return e
	});
	var a = Object.prototype.toString;
	Array.isArray || (Array.isArray = function(e) {
		return "[object Array]" == a.call(e)
	}), Object.keys || (Object.keys = function(e) {
		var n = [];
		for (var t in e) e.hasOwnProperty(t) && n.push(t);
		return n
	});
	var u = Array.prototype;
	u.indexOf || (u.indexOf = function(e) {
		for (var n = 0; n < this.length; n++) if (this[n] === e) return n;
		return -1
	}), u.forEach || (u.forEach = function(e) {
		for (var n = 0, t = this.length; t > n; n++) e(this[n], n)
	}), u.some || (u.some = function(e) {
		for (var n = 0, t = this.length; t > n; n++) if (e(this[n], n)) return !0;
		return !1
	}), u.every || (u.every = function(e) {
		for (var n = 0, t = this.length; t > n; n++) if (!e(this[n], n)) return !1;
		return !0
	}), u.map || (u.map = function(e) {
		for (var n = [], t = 0, r = this.length; r > t; t++) n[t] = e(this[t], t);
		return n
	}), u.reduce || (u.reduce = function(e, n) {
		if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined");
		if ("function" != typeof e) throw new TypeError(e + " is not a function");
		var t, r, i = this.length >>> 0,
			o = !1;
		for (1 < arguments.length && (r = n, o = !0), t = 0; i > t; ++t) this.hasOwnProperty(t) && (o ? r = e(r, this[t], t, this) : (r = this[t], o = !0));
		if (!o) throw new TypeError("Reduce of empty array with no initial value");
		return r
	});
	var c = String.prototype;
	c.trim || (c.trim = function() {
		return this.replace(/^\s+/, "").replace(/\s+$/, "")
	});
	var s = Function.prototype;
	s.bind || (Function.prototype.bind = function(e) {
		if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		var n = Array.prototype.slice.call(arguments, 1),
			t = this,
			r = function() {},
			i = function() {
				return t.apply(this instanceof r && e ? this : e, n.concat(Array.prototype.slice.call(arguments)))
			};
		return r.prototype = this.prototype, i.prototype = new r, i
	}), i("jqLite", ["underscore"], function(t) {
		var i = t("underscore"),
			o = function() {
				function t(e, n) {
					return e.classList ? e.classList.contains(n) : e.className && e.className.trim ? e.className.trim().split(/\s+/).indexOf(n) >= 0 : void 0
				}
				function o(e, n) {
					if (e.classList) e.classList.remove(n);
					else {
						for (var t = e.className.trim().split(/\s+/), r = t.length - 1; r >= 0; r--) t[r] == n && t.splice(r, 1);
						e.className = t.join(" ")
					}
				}
				function a(e, n) {
					e.classList ? e.classList.add(n) : t(e, n) || (e.className += " " + n)
				}
				function u(e, n) {
					return c(e, n)
				}
				function c(e, n, t) {
					var r;
					if (/^#[a-z]+$/i.test(e)) return r = M.getElementById(e.slice(1)), t ? r : [r];
					for (var i = n.getElementsByTagName("*"), o = [], a = 0, u = i.length; u > a; a++) if (r = i[a], s(r, e, n)) {
						if (t) return r;
						o.push(r)
					}
					return o
				}
				function s(e, n, t) {
					var r = n.split(",");
					return r.some(function(n) {
						return f(e, n, t) ? !0 : void 0
					})
				}
				function f(e, n, t) {
					var r, i = n.replace(/>/g, " $& ").trim().split(/\s+/).reverse();
					return i.every(function(n, i) {
						if (0 === i) return l(e, n) && m(t, e);
						if (">" === n) return r = e, !0;
						if (r) {
							var o = r.parentNode;
							return r = !1, e = e.parentNode, l(o, n)
						}
						for (e = e.parentNode; e && !l(e, n);) e = e.parentNode;
						return !!e
					})
				}
				function l(e, n) {
					for (var t, r = /[.#:][\w-]+|\[(.+?)(?:=(["']?)(.*?)\1)?]|^[a-z-]+/g; t = r.exec(n);) {
						var i = t[0];
						if (!d(e, i)) return !1
					}
					return !0
				}
				function d(e, n) {
					if (!e) return !1;
					if (e.matches) return e.matches(n);
					var i = n.charAt(0);
					if ("#" == i) return e.id === n.slice(1);
					if ("." == i) return t(e, n.slice(1));
					if ("[" == i) {
						var o = n.match(/^\[(.+?)(=(["']?)(.*?)\3)?]$/i),
							a = o[1],
							u = !! o[2],
							c = u ? o[4] : r;
						if (!a) throw new Error("Invalid attribute selector: " + n);
						var s = "class" === a ? e.className : e.getAttribute(a);
						return c === r ? null !== s : s === c
					}
					if (":" != i) return e.tagName === n.toUpperCase();
					var f = n.slice(1);
					switch (f) {
					case "first-child":
						return e.parentNode.firstElementChild || g(e.parentNode) === e
					}
				}
				function h(e, n) {
					return !!e && e.nodeType == n
				}
				function p(e, n) {
					return e.tagName.toLowerCase() === n
				}
				function m(e, n) {
					for (; n = n.parentNode;) if (n === e) return !0;
					return !1
				}
				function g(e) {
					for (var n = e.childNodes, t = 0, r = n.length; r > t; t++) {
						var i = n[t];
						if (i.nodeType === R.ELEMENT_NODE) return i
					}
					return null
				}
				function v(e, n) {
					return _.getComputedStyle ? (n = i.dasherize(n), _.getComputedStyle(e).getPropertyValue(n)) : e.currentStyle ? (n = i.camelize(n), e.currentStyle[n]) : void 0
				}
				function y(e, n, t) {
					e.style[n] = b(t, n)
				}
				function b(e, n) {
					return e ? ("width height top right bottom left".split(" ").indexOf(n) >= 0 && !/[^-\.\d]/.test(e) && (e += "px"), e) : e
				}
				function w(e, n) {
					n = n || M;
					var t = [];
					e && (e.nodeType ? t = [e] : "string" == typeof e ? t = M.querySelectorAll ? n.querySelectorAll(e) : u(e, n) : e && (t = "length" in e ? e : [e]));
					for (var r = t.length, i = 0; r > i; i++) this[i] = t[i];
					this.length = r
				}
				function L(e, n) {
					return new w(e, n)
				}
				function C() {}
				function x(e) {
					var n = e[D];
					return n || (n = e[D] = I++, j[n] = {}), j[n]
				}
				function E(e) {
					var n = e[D];
					if (n) {
						delete j[n];
						try {
							delete e[D]
						} catch (t) {
							e.removeAttribute && e.removeAttribute(D)
						}
					}
				}
				function T(e) {
					var t, r = n.createElement("div");
					return e = "on" + e, t = e in r, t || (r.setAttribute(e, "return;"), t = "function" == typeof r[e]), r = null, t
				}
				function k(t) {
					function r() {
						return !0
					}
					function i() {
						return !1
					}
					if (!t || !t.stopPropagation) {
						var o = t || e.event;
						t = {};
						for (var a in o) t[a] = o[a];
						if (t.target || (t.target = t.srcElement || n), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function() {
							t.returnValue = !1, t.isDefaultPrevented = r
						}, t.isDefaultPrevented = i, t.stopPropagation = function() {
							t.cancelBubble = !0, t.isPropagationStopped = r
						}, t.isPropagationStopped = i, t.stopImmediatePropagation = function() {
							this.isImmediatePropagationStopped = r, this.stopPropagation()
						}, t.isImmediatePropagationStopped = i, null !== t.clientX) {
							var u = n.documentElement,
								c = n.body;
							t.pageX = t.clientX + (u && u.scrollLeft || c && c.scrollLeft || 0) - (u && u.clientLeft || c && c.clientLeft || 0), t.pageY = t.clientY + (u && u.scrollTop || c && c.scrollTop || 0) - (u && u.clientTop || c && c.clientTop || 0)
						}
						t.which = t.charCode || t.keyCode, null !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
					}
					return t
				}
				function N(e) {
					function n() {
						return !1
					}
					return e.isDefaultPrevented = n, e.isPropagationStopped = n, e
				}
				function P(e, t) {
					function r(e) {
						for (var n in e) return !1;
						return !0
					}
					var i = x(e);
					0 === i.handlers[t].length && (delete i.handlers[t], (e.addEventListener || e.attachEvent) && (n.removeEventListener ? e.removeEventListener("focusin" === t ? "focus" : "focusout" === t ? "blur" : t, i.dispatcher, "focusin" === t || "focusout" === t) : n.detachEvent && e.detachEvent("on" + t, i.dispatcher))), r(i.handlers) && (delete i.handlers, delete i.dispatcher), r(i) && E(e)
				}
				function S(e, n, t, r) {
					for (var i = n.relatedTarget; i && i != e;) try {
						i = i.parentNode
					} catch (o) {
						break
					}
					i != e && r.call(e, t)
				}
				function A(e, n) {
					var t = x(e),
						r = e.parentNode || e.ownerDocument;
					for (t.disabled = n; r;) t = x(r), "undefined" != typeof t.disabled && (t.disabled = n), r = r.parentNode || r.ownerDocument
				}
				var _ = this,
					M = _.document,
					R = _.Node || {
						ELEMENT_NODE: 1,
						DOCUMENT_NODE: 9
					};
				L.fn = w.prototype, L.fn.find = function(e) {
					return this.length > 0 ? new w(e, this[0]) : new w
				}, L.fn.next = function(e) {
					for (var n = this[0];
					(n = n.nextSibling) && (!h(n, 1) || e && !p(n, e)););
					return new w(n)
				}, L.fn.prev = function(e) {
					for (var n = this[0];
					(n = n.previousSibling) && (!h(n, 1) || e && !p(n, e)););
					return new w(n)
				}, L.fn.each = function(e) {
					for (var n = 0, t = this.length; t > n; n++) e(this[n], n);
					return this
				}, L.fn.map = function(e) {
					for (var n = [], t = 0, r = this.length; r > t; t++) n[t] = e(this[t], t);
					return n
				}, L.fn.hasClass = function(e) {
					return t(this[0], e)
				}, L.fn.addClass = function(e) {
					return this.each(function(n) {
						a(n, e)
					})
				}, L.fn.removeClass = function(e) {
					return this.each(function(n) {
						o(n, e)
					})
				}, L.fn.toggleClass = function(e) {
					return this.each(function(n) {
						t(n, e) ? o(n, e) : a(n, e)
					})
				}, L.fn.html = function(e) {
					return "undefined" == typeof e ? this[0].innerHTML : this.each(function(n) {
						n.innerHTML = e
					})
				}, L.fn.attr = function(e, n) {
					return "undefined" == typeof n && this.length > 0 ? this[0].getAttribute(e) : this.each(function(t) {
						t.setAttribute(e, n)
					})
				}, L.fn.hasAttr = function(e) {
					if (this.length > 0) {
						var n = this[0];
						return n.hasAttribute ? n.hasAttribute(e) : null !== n.getAttribute(e)
					}
				}, L.fn.removeAttr = function(e) {
					return this.each(function(n) {
						n.removeAttribute(e)
					})
				}, L.fn.val = function(e) {
					return "undefined" == typeof e ? this.length > 0 ? this[0].value : null : this.each(function(n) {
						n.value = e
					})
				}, L.fn.data = function(e, n) {
					return "undefined" == typeof n && this.length > 0 ? i.cast(this[0].getAttribute("data-" + e)) : this.each(function(t) {
						t.setAttribute("data-" + e, n)
					})
				}, L.fn.first = function() {
					return new w(this[0])
				}, L.fn.last = function() {
					return new w(this[this.length - 1])
				}, L.fn.next = function() {
					var e = this[0];
					do e = e.nextSibling;
					while (e && 1 !== e.nodeType);
					return new w(e)
				}, L.fn.get = function(e) {
					return new w(this[e])
				}, L.fn.children = function() {
					if (this.length > 0) {
						for (var e = this[0], n = e.firstChild, t = []; n;) 1 == n.nodeType && t.push(n), n = n.nextSibling;
						return new w(t)
					}
					return new w
				}, L.fn.parent = function(e) {
					var n = this[0],
						t = n.parentNode;
					if ("undefined" == typeof e) return t && new w(t);
					for (; t;) {
						if (d(t, e)) return new w(t);
						t = t.parentNode
					}
				}, L.fn.contains = function(e) {
					var t = this[0],
						r = e[0];
					if (n.documentElement.contains) return t.contains(r);
					for (; r && (r = r.parentNode);) return r === t ? !0 : !1
				}, L.fn.show = function() {
					return this.each(function(e) {
						e.style.display = "block"
					})
				}, L.fn.hide = function() {
					return this.each(function(e) {
						e.style.display = "none"
					})
				}, ["height", "width"].forEach(function(e) {
					function n(e) {
						var n = parseInt(e, 10);
						return isNaN(n) ? 0 : n
					}
					var t = "height" === e ? ["Top", "Bottom"] : ["Left", "Right"],
						r = i.capitalize(e);
					L.fn[e] = function() {
						return Math.max(this[0]["offset" + r], n(this.css(e)))
					}, L.fn["inner" + r] = function() {
						var r = this;
						return this[e]() + t.reduce(function(e, t) {
							return e + n(r.css("padding" + t))
						}, 0)
					}, L.fn["outer" + r] = function(e) {
						var i = this,
							o = this["inner" + r]();
						return o += t.reduce(function(e, t) {
							return e + n(i.css("border" + t + "Width"))
						}, 0), e && (o += t.reduce(function(e, t) {
							return e + n(i.css("margin" + t))
						}, 0)), o
					}
				}), L.fn.css = function(e, n) {
					return "undefined" == typeof n && "string" == typeof e && this.length > 0 ? v(this[0], e) : this.each(function(t) {
						if ("undefined" == typeof n && "object" == typeof e) for (var r in e) y(t, i.camelize(r), e[r]);
						else y(t, i.camelize(e), n)
					})
				}, L.fn.prepend = function(e) {
					return "string" == typeof e && (e = n.createTextNode(e)), this.each(function(n) {
						e instanceof w ? e.each(function(e) {
							n.insertBefore(e, n.firstChild)
						}) : 1 === e.nodeType ? n.insertBefore(e, n.firstChild) : n.insertBefore(e, n.firstChild)
					})
				}, L.fn.append = function(e) {
					return "string" == typeof e && (e = n.createTextNode(e)), this.each(function(n) {
						e instanceof w ? e.each(function(e) {
							n.appendChild(e)
						}) : n.appendChild(e)
					})
				}, L.fn.appendTo = function(e) {
					return e = new w(e), this.each(function(n) {
						e.append(n)
					})
				}, L.fn.clone = function() {
					return new w(this.map(function(e) {
						return e.cloneNode(!0)
					}))
				}, L.fn.remove = function() {
					return this.each(function(e) {
						e.parentNode.removeChild(e)
					})
				}, L.fn.position = function() {
					if (this.length > 0) {
						var e = this[0];
						return {
							left: e.offsetLeft,
							top: e.offsetTop
						}
					}
				}, L.fn.offset = function() {
					if (this.length > 0) {
						var n, t = this[0],
							i = {
								top: 0,
								left: 0
							},
							o = t && t.ownerDocument;
						if (!o) return;
						return n = o.documentElement, typeof t.getBoundingClientRect !== r && (i = t.getBoundingClientRect()), {
							top: i.top + e.pageYOffset - n.clientTop,
							left: i.left + e.pageXOffset - n.clientLeft
						}
					}
				};
				var j = {},
					I = 1,
					O = 1,
					D = "data" + (new Date).getTime();
				return C.on = function(e, t, r) {
					if (/mouseenter|mouseleave/.test(t) && !T("mouseenter")) {
						var i = {
							mouseenter: "mouseover",
							mouseleave: "mouseout"
						};
						return void C.on(e, i[t], function(e) {
							S(this, e, i[t], r)
						})
					}
					var o = x(e);
					if (o.handlers || (o.handlers = {}), o.handlers[t] || (o.handlers[t] = []), r.guid || (r.guid = O++), o.handlers[t].push(r), o.dispatcher || (o.disabled = !1, o.dispatcher = function(n) {
						if (!o.disabled) {
							n = e.addEventListener || e.attachEvent ? k(n) : n, n.currentTarget = e;
							var t = o.handlers[n.type];
							if (t) for (var r = 0; r < t.length; r++) t[r].call(e, n)
						}
					}), 1 == o.handlers[t].length) {
						if (!e.addEventListener && !e.attachEvent) return;
						n.addEventListener ? e.addEventListener("focusin" === t ? "focus" : "focusout" === t ? "blur" : t, o.dispatcher, "focusin" === t || "focusout" === t) : n.attachEvent && e.attachEvent("on" + t, o.dispatcher)
					}
				}, C.off = function(e, n, t) {
					var r = x(e);
					if (r.handlers) {
						var i = function(n) {
								r.handlers[n] = [], P(e, n)
							};
						if (n) {
							var o = r.handlers[n];
							if (o) {
								if (!t) return void i(n);
								if (t.guid) for (var a = 0; a < o.length; a++) o[a].guid === t.guid && o.splice(a--, 1);
								P(e, n)
							}
						} else for (var u in r.handlers) i(u)
					}
				}, C.trigger = function(e, n) {
					var t = x(e),
						r = e.parentNode || e.ownerDocument;
					"string" == typeof n && (n = {
						type: n,
						target: e
					}), n = e.addEventListener || e.attachEvent ? k(n) : N(n), t.dispatcher && t.dispatcher.call(e, n), r && !n.isPropagationStopped() ? C.trigger(r, n) : r || n.isDefaultPrevented() || n.target[n.type] && (A(n.target, !0), n.target[n.type](), A(n.target, !1))
				}, L.fn.on = function(e, n) {
					return this.each(function(t) {
						C.on(t, e, n)
					})
				}, L.fn.off = function(e, n) {
					return this.each(function(t) {
						C.off(t, e, n)
					})
				}, L.fn.trigger = function(e) {
					return this.each(function(n) {
						C.trigger(n, e)
					})
				}, L
			}();
		return o
	}), i("jsonp", function() {
		function t() {}
		function r(r, o, a) {
			function u() {
				s.parentNode && s.parentNode.removeChild(s), e[g] = t, f && clearTimeout(f)
			}
			function c() {
				e[g] && u()
			}
			"function" == typeof o && (a = o, o = {}), o || (o = {});
			var s, f, l = o.prefix || "__jp",
				d = o.param || "callback",
				h = null !== o.timeout ? o.timeout : 6e4,
				p = encodeURIComponent,
				m = n.getElementsByTagName("script")[0] || n.head,
				g = l + i++;
			return h && (f = setTimeout(function() {
				u(), a && a(new Error("Timeout"))
			}, h)), e[g] = function(e) {
				u(), a && a(null, e)
			}, r += (~r.indexOf("?") ? "&" : "?") + d + "=" + p(g), r = r.replace("?&", "?"), s = n.createElement("script"), s.src = r, m.parentNode.insertBefore(s, m), c
		}
		var i = 0;
		return r
	}), i("util", function() {
		var t = {
			getFullUrl: function(e) {
				return t.isDaily() ? "//www.alimama.net" + e : "//www.alimama.com" + e
			},
			getCurrentScript: function() {
				if (n.currentScript) return n.currentScript;
				for (var e = n.getElementsByTagName("script"), t = e.length - 1; t >= 0; t--) {
					var r = e[t];
					if ("interactive" === r.readyState) return interactiveScript = r
				}
			},
			time: function(n) {
				t.isDaily() && e.console && e.console.time && e.console.time(n)
			},
			timeEnd: function(n) {
				t.isDaily() && e.console && e.console.timeEnd && e.console.timeEnd(n)
			},
			isDaily: function() {
				return /(net|daily)/.test(location.href)
			},
			isiOS: function() {
				var e = navigator.userAgent;
				return !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
			},
			getCookie: function(e) {
				if (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)) {
					var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
						r = t.exec(n.cookie);
					if (r) return r[2] || null
				}
				return null
			},
			fromUnicode: function(e) {
				return e.replace(/\\u([a-f\d]{4})/gi, function(e, n) {
					return String.fromCharCode(parseInt(n, 16))
				})
			},
			checkIsLogined: function() {
				return !/^https?:\/\/([\da-z\.-]+)\.alimama\.(net|com)/.test(location.href) || t.getCookie("cookie32") || t.getCookie("login") ? /^https?:\/\/([\da-z\.-]+)\.taobao\.(net|com)/.test(location.href) && !t.getCookie("_nk_") ? !1 : !0 : !1
			},
			getTabaoLoginTpl: function() {
				var e = '<iframe name="taobaoLoginIfr" width="100%" height="352" frameborder="0" scrolling="yes" src="https://login.daily.taobao.net/member/login.jhtml?style=mini&newMini2=true&css_style=alimama_index&from=alimama&redirectURL=http%3A%2F%2Fwww.alimama.com&full_redirect=true&disableQuickLogin=true" marginheight="0" marginwidth="0" border="0"></iframe>',
					n = '<iframe name="taobaoLoginIfr" width="100%" height="352" frameborder="0" scrolling="yes" src="https://login.taobao.com/member/login.jhtml?style=mini&newMini2=true&css_style=alimama_index&from=alimama&redirectURL=http%3A%2F%2Fwww.alimama.com&full_redirect=true&disableQuickLogin=true" marginheight="0" marginwidth="0" border="0"></iframe>';
				return t.isDaily() ? e : n
			},
			getAlimamaLoginTpl: function() {
				var e = '<iframe name="mmLoginIfr" id="J_mmLoginIfr" width="100%" height="352" frameborder="0" scrolling="no" src="//www.alimama.net/member/minilogin.htm?custom_style=alimama2017" marginheight="0" marginwidth="0" border="0"></iframe>',
					n = '<iframe name="mmLoginIfr" id="J_mmLoginIfr" width="100%" height="352" frameborder="0" scrolling="no" src="//www.alimama.com/member/minilogin.htm?custom_style=alimama2017" marginheight="0" marginwidth="0" border="0"></iframe>';
				return t.isDaily() ? e : n
			},
			getProductInfoMap: function(e) {
				var n = {
					9: {
						id: "1",
						unicode: "xe601",
						link: "//ad.alimama.com/myunion.htm",
						name: "\u6dd8\u5b9d\u5ba2"
					},
					27: {
						id: "2",
						unicode: "xe610",
						link: "http://openssp.tanx.com/ssp.html",
						name: "Tanx SSP"
					},
					1: {
						id: "4",
						unicode: "xe605",
						link: "//subway.simba.taobao.com/",
						name: "\u6dd8\u5b9d\u76f4\u901a\u8f66"
					},
					2: {
						id: "5",
						unicode: "xe607",
						link: "//zuanshi.taobao.com/indexbp.html",
						name: "\u667a\u94bb"
					},
					26: {
						id: "6",
						unicode: "xe60e",
						link: "//pub.alimama.com/",
						name: "\u6dd8\u5b9d\u8054\u76df"
					},
					7: {
						id: "8",
						unicode: "xe611",
						link: "//dmp.taobao.com/index.html",
						name: "\u8fbe\u6469\u76d8"
					}
				};
				return n[e]
			},
			fire: function(n, t) {
				e.MMSiteNav && e.MMSiteNav[n] && "function" == typeof e.MMSiteNav[n] && e.MMSiteNav[n](t)
			}
		};
		return t
	});
	var f = function() {
			var t = o("jqLite"),
				r = o("underscore"),
				i = o("jsonp"),
				a = o("util");
			return r.extend(e.MMSiteNav || {}, {
				init: function() {
					var e = this,
						n = e.$el = t(".alimama-site-nav");
					e.hasShowLoginPanel = !1, e.hasInitProducts = !1, e.hasRenderTaobaoLogin = !1, e.hasRenderMmLogin = !1, /www\.alimama\.(net|com)/.test(location.href) && n.find(".alimama-menu").hide(), a.checkIsLogined() && i(a.getFullUrl("/getLogInfo.htm"), function(t, r) {
						r.success && (n.addClass("alimama-site-nav-logined"), n.find(".menu-username").html("\u4f60\u597d\uff0c" + a.fromUnicode(r.result.nickName)), e.isLogined = !0)
					}), a.fire("afterMainNavRender"), e.hook(), e.bindLoginRedirect(), e.bindPC(), e.bindH5()
				},
				hook: function() {
					this.changeDailyUrl()
				},
				changeDailyUrl: function() {
					a.isDaily() && this.$el.find(".quick-menu .menu-hd a").each(function(e, n) {
						if (!(n > 2)) {
							var r = t(e).attr("href");
							t(e).attr("href", r.replace(/\.com/, ".net"))
						}
					})
				},
				bindLoginRedirect: function() {
					var n = function(e) {
							var n = e.data;
							n.redirectURL && /^(http|https):\/\//.test(n.redirectURL) && (location.href = n.redirectURL)
						};
					"undefined" != typeof e.addEventListener ? e.addEventListener("message", n, !1) : "undefined" != typeof e.attachEvent && e.attachEvent("onmessage", n)
				},
				bindPC: function() {
					var e = this,
						r = e.$el,
						i = r.find(".menu"),
						o = r.find(".menu-username"),
						u = r.find(".menu-loginout"),
						c = r.find(".login-panel"),
						s = r.find(".menu-login"),
						f = r.find(".login-panel-tab-left"),
						l = r.find(".login-panel-tab-right");
					i.on("mouseenter", function() {
						t(this).addClass("menu-hover")
					}), i.on("mouseleave", function() {
						t(this).removeClass("menu-hover")
					}), o.on("mouseenter", function() {
						e.initProducts()
					}), u.on("click", function() {
						location.href = a.getFullUrl("/member/logout.htm") + "?forward=" + encodeURIComponent(location.href)
					}), s.on("click", function(n) {
						n.preventDefault(), e.showLoginPanel()
					}), e.docClickHandle = function(n) {
						s.contains(t(n.target)) || c.contains(t(n.target)) || e.hideLoginPanel()
					}, t(n).on("click", e.docClickHandle), f.on("click", function() {
						t(this).addClass("current").next().removeClass("current"), c.find(".login-panel-content-taobao").show(), c.find(".login-panel-content-alimama").hide(), e.renderTaobaoLogin()
					}), l.on("click", function() {
						t(this).addClass("current").prev().removeClass("current"), c.find(".login-panel-content-taobao").hide(), c.find(".login-panel-content-alimama").show(), e.renderMMLogin()
					})
				},
				bindH5: function() {
					var e = this,
						n = this.$el,
						r = t("html"),
						i = t("body"),
						o = n.find(".login-menu-trigger .open"),
						a = n.find(".login-menu-trigger .close");
					o.on("click", function() {
						e.showH5LoginPanel()
					}), a.on("click", function() {
						e.hideH5LoginPanel()
					});
					var u = n.find(".quick-menu-trigger .open"),
						c = n.find(".quick-menu-trigger .close");
					u.on("click", function() {
						n.addClass("alimama-quick-menu-open"), r.addClass("fullpage"), i.addClass("fullpage")
					}), c.on("click", function() {
						n.removeClass("alimama-quick-menu-open"), r.removeClass("fullpage"), i.removeClass("fullpage")
					})
				},
				showLoginPanel: function(n, t) {
					var r = this,
						i = r.$el.find(".login-panel"),
						o = r.$el.find(".login-mask"),
						a = e.innerHeight;
					r.hasShowLoginPanel || (r.hasShowLoginPanel = !0, o.css({
						height: a
					}).show(), i.show(), r.requestAnimationFrame(function() {
						i.css({
							top: "50%",
							"margin-top": "-193px"
						})
					}), setTimeout(function() {
						n && e.scrollTo && e.scrollTo(0, 0), r.setForward(t)
					}, 360))
				},
				hideLoginPanel: function() {
					var e = this,
						n = e.$el.find(".login-panel"),
						t = e.$el.find(".login-mask");
					e.hasShowLoginPanel && (e.hasShowLoginPanel = !1, n.css({
						top: "-380"
					}), setTimeout(function() {
						t.hide(), n.hide()
					}, 360))
				},
				showH5LoginPanel: function(e) {
					var n = this,
						r = n.$el,
						i = t("html"),
						o = t("body");
					r.addClass("alimama-login-menu-open"), i.addClass("fullpage"), o.addClass("fullpage"), r.hasClass("alimama-site-nav-logined") ? n.initProducts() : setTimeout(function() {
						n.setForward(e)
					}, 200)
				},
				hideH5LoginPanel: function() {
					var e = this,
						n = e.$el,
						r = t("html"),
						i = t("body");
					n.removeClass("alimama-login-menu-open"), r.removeClass("fullpage"), i.removeClass("fullpage")
				},
				initProducts: function() {
					var e = this;
					if (!e.hasInitProducts) {
						a.fire("beforeProductListRender");
						var n = function(n) {
								e.selectedList = [], r.each(n, function(n) {
									a.getProductInfoMap(n) && e.selectedList.push({
										id: a.getProductInfoMap(n).id,
										link: a.getProductInfoMap(n).link,
										unicode: a.getProductInfoMap(n).unicode,
										name: a.getProductInfoMap(n).name
									})
								}), e.renderSelectedProducts()
							};
						i(a.getFullUrl("/getTagInfo.htm"), function(e, t) {
							if (t.success) {
								var r = t.result.tagIDList;
								n(r)
							} else n([])
						})
					}
				},
				setForward: function(e) {
					var n = this;
					e = encodeURIComponent(e || location.href), i(a.getFullUrl("/member/ajax_login.htm?forward=" + e), function() {
						n.renderTaobaoLogin()
					})
				},
				renderMMLogin: function() {
					if (!this.hasRenderMmLogin) {
						var e = a.getAlimamaLoginTpl();
						a.fire("beforeRenderMMLogin", function(n) {
							e = n
						}), this.$el.find(".login-panel-content-alimama").html(e), this.hasRenderMmLogin = !0, a.fire("afterRenderMMLogin")
					}
				},
				renderTaobaoLogin: function() {
					if (!this.hasRenderTaobaoLogin) {
						var e = a.getTabaoLoginTpl();
						a.fire("beforeRenderTaobaoLogin", function(n) {
							e = n
						}), this.$el.find(".login-panel-content-taobao").html(e), this.hasRenderTaobaoLogin = !0, a.fire("afterRenderTaobaoLogin")
					}
				},
				templete: function(e) {
					var n = "";
					return 1 == e.id && (n = '<span class="nav-logo-extend">\uff08\u5356\u5bb6\uff09</span>'), 6 == e.id && (n = '<span class="nav-logo-extend">\uff08\u7ad9\u957f\uff09</span>'), "<li data-product-id=" + e.id + ' class="product-block product-block-' + e.id + '"><a data-spm="d00' + e.id + '" target="_blank" href="' + e.link + '"><span class="nav-product-logo"></span><span class="nav-product-name">' + e.name + "</span>" + n + "</a></li>"
				},
				getGuideHtml: function() {
					return '<p class="empty-info"><em>&#58893</em>\u5feb\u6765\u4f53\u9a8c\u6211\u4eec\u7684\u4ea7\u54c1\u5427\uff01<br>\u4f7f\u7528\u8fc7\u7684\u4ea7\u54c1\u4f1a\u5728\u8fd9\u91cc\u5c55\u793a\u3002</p>'
				},
				renderSelectedProducts: function() {
					var e = this,
						n = 0,
						t = e.selectedList,
						r = t.length,
						i = "",
						o = e.$el.find(".panel-product-container");
					if (0 == r) i = e.getGuideHtml();
					else {
						for (i = '<ul class="panel-product-list clearfix">', n; r > n; n++) i += e.templete(t[n]);
						i += "</ul>"
					}
					o.addClass("panel-product-container-loaded"), o.html(i), e.hasInitProducts = !0, a.fire("afterProductListRender")
				},
				requestAnimationFrame: function(n) {
					e.requestAnimationFrame ? e.requestAnimationFrame(n) : n()
				},
				destroy: function() {
					t(n).off("click", this.docClickHandle)
				}
			})
		}();
	f.init(), e[t] = f
}(window, document, "MMSiteNav");