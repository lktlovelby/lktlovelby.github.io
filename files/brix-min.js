(function(e, t) {
	function r(e) {
		return e ? Function("return " + e)() : {}
	}
	function n() {
		var t, n, i = /^(.*)(brix)(?:-min)?\.js[^\/]*/i,
			a = /(brix)(?:-min)?\.js/i,
			c = s.document.getElementsByTagName("script"),
			u = c[c.length - 1],
			l = u.src,
			d = r(u.getAttribute("bx-config"));
		o && -1 !== (o.search || "").indexOf("bx-debug") && (d.debug = !0), t = d.comboPrefix = d.comboPrefix || "??", n = d.comboSep = d.comboSep || ",";
		var b, v, p = l.indexOf(t);
		return -1 == p ? v = l.replace(i, "$1") : (v = l.substring(0, p), "/" != v.charAt(v.length - 1) && (v += "/"), b = l.substring(p + t.length).split(n), e.each(b, function(e) {
			return e.match(a) ? (v += e.replace(i, "$1"), !1) : void 0
		})), v = "" + f.resolve(v), v = v.substring(0, v.lastIndexOf("brix")), e.mix({
			autoConfig: !0,
			base: v
		}, d)
	}
	var i = !1,
		a = [],
		s = e.Env.host,
		o = s.location,
		c = "",
		u = "20140409",
		l = "2.1.0",
		d = !1;
	t = s[t] = s[t] || {};
	var f = new e.Uri(o.href),
		b = n();
	return e.mix(t, {
		config: function(r) {
			d || (d = !0, r = e.merge({
				componentsPath: "./",
				importsPath: "./",
				templateEngine: "brix/gallery/mu/",
				debug: "" === c ? !1 : !0,
				combine: !1,
				tag: "@TAG@" == u ? "" : u,
				fixed: "@VERSION@" == l ? "src/" : l + "/",
				gallery: {}
			}, b, r), t.basePath = r.base, t.fixed = r.fixed, t.templateEngine = r.templateEngine, e.config({
				packages: [{
					name: "brix",
					base: r.base + "/brix/" + r.fixed,
					ignorePackageNameInUri: !0,
					combine: r.combine,
					debug: r.debug,
					tag: r.tag,
					charset: "utf-8"
				}, {
					name: "components",
					base: r.componentsPath,
					combine: r.combine,
					debug: r.debug,
					tag: r.componentsTag || r.tag,
					charset: "utf-8"
				}, {
					name: "imports",
					base: r.importsPath,
					combine: r.combine,
					debug: r.debug,
					tag: r.importsTag || r.tag,
					charset: "utf-8"
				}]
			}))
		},
		ready: function(e) {
			i ? e.call(t) : a.push(e)
		},
		_bx_fireReady: function() {
			if (!i && (i = !0, a)) {
				for (var e, r = 0; e = a[r++];) e.call(t);
				a = null
			}
		},
		returnJSON: function(e) {
			return r(e)
		},
		absoluteFilePath: function(t, r) {
			return "" + new e.Uri(t.getFullPath()).resolve(r)
		}
	}), b.autoConfig && (t.config({}), b.autoPagelet) ? (e.later(function() {
		e.use("brix/core/pagelet", function(e, r) {
			e.ready(function() {
				t.pagelet = new r({
					tmpl: "body"
				}), t._bx_fireReady()
			})
		})
	}, 1), void 0) : (e.ready(function() {
		t._bx_fireReady()
	}), void 0)
})(KISSY, "Brix"), KISSY.add("brix/core/tmpler", function(e, t, r, n) {
	function i(e, t) {
		e && (t !== !1 ? (this.subTmpls = [], this.storeTmpls = {}, this._bx_praseTmpl(e, t)) : this.tmpl = e)
	}
	var a = r.all,
		s = {},
		o = "<([\\w]+)\\s+[^>]*?bx-tmpl=[\"']([^\"']+)[\"']\\s+[^>]*?bx-datakey=[\"']([^\"']+)[\"']\\s*[^>]*?>(@brix@)</\\1>",
		c = /\{\{#bx\-tmpl\-([^\}]*)?\}\}([\s\S]*?)\{\{\/bx\-tmpl\}\}/gi,
		u = /@TEMPLATE\|(.*?)\|TEMPLATE@/g;
	return e.augment(i, {
		_bx_praseTmpl: function(e, t) {
			var r, i = this,
				o = !1;
			"string" == typeof e ? "." === e.charAt(0) || "#" === e.charAt(0) || "body" === e ? r = a(e) : e = e.replace(u, function(e, t) {
				return s[t] || n({
					url: t,
					dataType: "html",
					async: !1,
					success: function(e) {
						s[t] = e
					}
				}), s[t] || ""
			}) : r = e, r && ("SCRIPT" == r.item(0)[0].nodeName.toUpperCase() ? e = r.item(0).html() : (a('script[type="text/tmpl"]').each(function(e) {
				var r = e.html();
				r = i._bx_buildStoreTmpls(r), i._bx_buildSubTmpls(r, !1, t)
			}), o = !0)), o || (e = i._bx_buildStoreTmpls(e), i._bx_buildSubTmpls(e, !1, t), i.tmpl = e), i.inDom = o
		},
		_bx_buildStoreTmpls: function(e) {
			var t = this;
			return e = e.replace(c, function(e, r, n) {
				return t.storeTmpls[r] = n, ""
			})
		},
		_bx_buildSubTmpls: function(e, t, r) {
			var n = this;
			if (!t) {
				for (t = o; r--;) t = t.replace("@brix@", "(?:<\\1[^>]*>@brix@</\\1>|[\\s\\S])*?");
				t = t.replace("@brix@", "(?:[\\s\\S]*?)")
			}
			for (var a, s = RegExp(t, "ig"); null !== (a = s.exec(e));) n.subTmpls.push({
				name: a[2],
				datakey: a[3],
				tmpler: new i(a[4], !1)
			}), n._bx_buildSubTmpls(a[4], t)
		},
		addSubTmpl: function(e, t, r) {
			var n = this;
			n.subTmpls = n.subTmpls || [], n.subTmpls.push({
				name: e,
				datakey: t,
				tmpler: new i(r, !1)
			})
		},
		getStoreTmpl: function(e) {
			var t = this.storeTmpls;
			return t ? t[e] || "" : ""
		},
		render: function(e) {
			var r = this.tmpl;
			return "function" == typeof t ? new t(r).render(e) : t.render(r, e)
		}
	}), i
}, {
	requires: [Brix.templateEngine, "node", "ajax"]
}), KISSY.add("brix/core/dataset", function(e, t) {
	function r() {
		r.superclass.constructor.apply(this, arguments)
	}
	return r.ATTRS = {
		data: {}
	}, e.extend(r, t, {
		setRenderer: function(e, t, r) {
			var n, i, a = this,
				s = a.get("data");
			if (r = r ? r + "_" : "", e) {
				var o = function(n, i) {
						var a = r + n + "_" + i,
							o = e[n][i];
						s[a] = function() {
							return o.call(this, t, n)
						}
					};
				for (n in e) for (i in e[n]) o(n, i)
			}
		}
	}), r
}, {
	requires: ["base"]
}), KISSY.add("brix/core/chunk", function(e, t, r, n, i, a) {
	function s(e, t) {
		for (var r = 0; e.length > r; r++) for (var n = 0; t.length > n; n++) if (e[r] == t[n]) return !0;
		return !1
	}
	var o = t.all,
		c = e.noop,
		u = n.prototype.__getHook,
		l = n.extend({
			constructor: function l() {
				l.superclass.constructor.apply(this, arguments), (this.get("autoRender") || this.get("tmpler").inDom) && this.render()
			},
			initializer: function() {
				this._bx_buildTmpler(), this._bx_buildDataset()
			},
			_bx_buildTmpler: function() {
				var e = this,
					t = e.get("tmpl");
				if (!e.get("isBuidTmpler")) {
					e.set("isBuidTmpler", !0);
					var r = new a(t, e.get("level"));
					e.set("tmpler", r), r.inDom && e.set("el", t)
				}
			},
			_bx_buildDataset: function() {
				var t = this;
				if (!t.get("isBuidDataset")) {
					t.set("isBuidDataset", !0);
					var r = e.clone(t.get("data") || {}),
						n = new i({
							data: r
						}),
						a = t.get("renderer");
					a && n.setRenderer(a, t), t.set("dataset", n), n.on("*Change", function(r) {
						var i = !1,
							a = e.map(r.subAttrName, function(e) {
								return /^data\./g.test(e) ? (i = !0, e.replace(/^data\./, "")) : "zuomo.xb@taobao.com"
							});
						i && t._bx_renderTmpl(a, n.get("data"))
					})
				}
			},
			destructor: function() {
				var e = this,
					t = e.get("tmpler"),
					r = e.get("dataset");
				t && e.set("tmpler", null), r && (e.set("dataset", null), r.detach())
			},
			bindUI: c,
			initialize: c,
			syncUI: c,
			addSubTmpl: function(e, t, r) {
				return this.get("tmpler").addSubTmpl(e, t, r)
			},
			getStoreTmpl: function(e) {
				return this.get("tmpler").getStoreTmpl(e)
			},
			setChunkData: function(t, r, n) {
				var i = this,
					a = i.get("dataset");
				if (a) {
					if (e.isObject(t)) {
						t = e.clone(t);
						var s = {};
						for (var o in t) s["data." + o] = t[o];
						t = s, n = r
					} else t = "data." + t, r = e.clone(r);
					var c = "html";
					n && n.renderType && (c = n.renderType, delete n.renderType), i.set("renderType", c), a.set.apply(a, arguments)
				}
			},
			render: function() {
				var e = this;
				return e.get("rendered") || (e.fire("beforeRenderUI"), e._bx_render(), e.fire("afterRenderUI"), e.setInternal("rendered", !0), e.fire("beforeBindUI"), l.superclass.bindInternal.call(e), e.bindUI(), e.initialize(), e.fire("afterBindUI"), e.fire("beforeSyncUI"), l.superclass.syncInternal.call(e), e.syncUI(), e.fire("afterSyncUI")), e
			},
			_bx_render: function() {
				var n = this,
					i = n.get("tmpler");
				if (i.tmpl && !i.inDom) {
					var a, s = n.get("container"),
						c = n.get("el"),
						u = e.trim(i.render(n.get("dataset").get("data")));
					if (c && 0 !== c.length) if (8 >= r.ie) {
						for (a = new t("<div />"), s.append(a), a.html(u); a[0].childNodes.length > 0;) s[0].appendChild(a[0].childNodes[0]);
						a.remove(), a = null
					} else s.append(u);
					else {
						var l = "brix_" + e.guid();
						if (8 >= r.ie) {
							a = new t("<div />"), s.append(a), a.html(u);
							var d = a[0].childNodes;
							if (d.length > 1) a.attr("id", l);
							else {
								for (l = d[0].id || l, d[0].id = l; d.length > 0;) s[0].appendChild(d[0]);
								a.remove(), a = null
							}
						} else a = new t(u), a.length > 1 ? a = o('<div id="' + l + '"></div>').append(a) : (l = a.attr("id") || l, a.attr("id", l)), s.append(a);
						n.set("el", "#" + l)
					}
				}
			},
			_bx_renderTmpl: function(t, r) {
				var n = this,
					i = n.get("tmpler");
				if (i && n.get("rendered")) {
					var a = n.get("el"),
						o = i.subTmpls;
					e.each(o, function(i) {
						var o = e.map(i.datakey.split(","), function(t) {
							return e.trim(t)
						});
						if (s(o, t)) {
							var c = a.all("[bx-tmpl=" + i.name + "]");
							a.attr("bx-tmpl") == i.name && (c = a.add(c)), c.each(function(t) {
								if (t.attr("bx-datakey") == i.datakey) {
									var a = {};
									e.each(o, function(e) {
										for (var t = r, n = e.split("."), i = n.length, s = 0; s !== i;) t = t[n[s]], s++;
										a[n[i - 1]] = t, t = null
									}), e.each(r, function(t, r) {
										e.isFunction(t) && (a[r] = t)
									});
									var s = n.get("renderType") || "html";
									n.fire("beforeRefreshTmpl", {
										node: t,
										renderType: s
									}), t[s](e.trim(i.tmpler.render(a))), n.fire("afterRefreshTmpl", {
										node: t
									}), a = null
								}
							}), c = null
						}
					})
				}
			}
		}, {
			__hooks__: {
				initialize: u("__initialize"),
				bindUI: u("__bindUI"),
				syncUI: u("__syncUI")
			},
			ATTRS: {
				el: {
					getter: function(t) {
						return e.isString(t) && (t = o(t)), t
					}
				},
				destroyAction: {
					value: "remove"
				},
				container: {
					value: "body",
					getter: function(t) {
						return e.isString(t) && (t = o(t)), t
					}
				},
				tmpl: {
					value: !1
				},
				tmpler: {
					value: !1
				},
				rendered: {
					value: !1
				},
				autoRender: {
					value: !0
				},
				data: {
					value: !1
				},
				dataset: {
					value: !1
				},
				renderer: {
					value: !1
				},
				level: {
					value: 3
				}
			}
		});
	return l
}, {
	requires: ["node", "ua", "base", "./dataset", "./tmpler"]
}), KISSY.add("brix/core/brick", function(e, t, r) {
	var n = t.extend({
		initializer: function() {
			for (var e = this, t = e.constructor, r = e.get("dataset"); t;) {
				var n = t.RENDERERS;
				n && r.setRenderer(n, e), t = t.superclass && t.superclass.constructor
			}
			e.pagelet = e.get("pagelet")
		},
		bindUI: function() {
			this._bx_bindEvent()
		},
		_bx_detachEvent: function() {
			for (var e = this, t = e.constructor; t;) {
				var r = t.EVENTS;
				r && e._bx_removeEvents(r);
				var n = t.DOCEVENTS;
				n && e._bx_removeEvents(n, document);
				var i = t.WINEVENTS;
				i && this._bx_removeWinEvents(i), t = t.superclass && t.superclass.constructor
			}
			var a = e.get("events");
			a && this._bx_removeEvents(a);
			var s = e.get("docEvents");
			s && this._bx_removeEvents(s, document);
			var o = e.get("winEvents");
			o && this._bx_removeWinEvents(o)
		},
		_bx_bindEvent: function() {
			for (var e = this, t = e.constructor; t;) {
				var r = t.EVENTS;
				r && this._bx_addEvents(r);
				var n = t.DOCEVENTS;
				n && this._bx_addEvents(n, document);
				var i = t.WINEVENTS;
				i && this._bx_addWinEvents(i), t = t.superclass && t.superclass.constructor
			}
			var a = e.get("events");
			a && this._bx_addEvents(a);
			var s = e.get("docEvents");
			s && this._bx_addEvents(s, document);
			var o = e.get("winEvents");
			o && this._bx_addWinEvents(o)
		},
		_bx_removeEvents: function(e, t) {
			t = t || this.get("el");
			for (var n in e) {
				var i = e[n];
				for (var a in i) {
					var s = i[a];
					"" === n ? r.detach(t, a, s, this) : r.undelegate(t, a, n, s, this)
				}
			}
		},
		_bx_addEvents: function(e, t) {
			t = t || this.get("el");
			for (var n in e) {
				var i = e[n];
				for (var a in i) {
					var s = i[a];
					"" === n ? r.on(t, a, s, this) : r.delegate(t, a, n, s, this)
				}
			}
		},
		_bx_removeWinEvents: function(e) {
			for (var t in e) {
				var n = e[t];
				r.detach(window, t, n, this)
			}
		},
		_bx_addWinEvents: function(e) {
			for (var t in e) {
				var n = e[t];
				r.on(window, t, n, this)
			}
		},
		destructor: function() {
			var e = this;
			if (e.get("rendered")) {
				e._bx_detachEvent();
				var t = e.get("destroyAction"),
					r = e.get("el");
				switch (t) {
				case "remove":
					r.remove();
					break;
				case "empty":
					r.empty()
				}
			}
			e.get("pagelet") && (delete e.pagelet, e.set("pagelet", null))
		}
	}, {
		ATTRS: {
			pagelet: {
				value: null
			}
		}
	}, "Brick");
	return n
}, {
	requires: ["./chunk", "event"]
}), KISSY.add("brix/core/pagelet", function(e, t) {
	function r(t) {
		if (!t.attr("id")) {
			for (var r;
			(r = e.guid("brix_brick_")) && e.one("#" + r););
			t.attr("id", r)
		}
		return t.attr("id")
	}
	var n = t.extend({
		initializer: function() {
			var e = this;
			e.isReady = !1, e.readyList = [], e.bricks = [], e.isAddBehavior = !1, e.destroyed = !1, e.bxCounter = 0
		},
		bindUI: function() {
			var e = this,
				t = e.get("callback");
			t && "function" == typeof t && e.ready(t), e.get("autoBehavior") && e.addBehavior()
		},
		getBrick: function(t) {
			var r = this,
				n = null;
			return e.each(r.bricks, function(e) {
				return e.id === t ? (n = e.brick, !1) : void 0
			}), n
		},
		getBricks: function(t) {
			var r = this,
				n = [];
			return e.each(r.bricks, function(e) {
				e.name === t && n.push(e.brick)
			}), n
		},
		destroyBrick: function(e) {
			for (var t = this, r = 0; t.bricks.length > r; r++) {
				var n = t.bricks[r];
				if (e === n.id) return t._bx_destroyBrick(n), t.bricks.splice(r, 1), !1
			}
		},
		_bx_destroyBrick: function(e) {
			e.destroyed = !0, e.brick && (e.brick.destroy && e.brick.destroy(), e.brick = null)
		},
		addBehavior: function() {
			var e = this;
			if (e.get("rendered") && !e.isAddBehavior) {
				e.isAddBehavior = !0;
				var t = e.get("el"),
					r = t.all("[bx-name]");
				t.hasAttr("bx-name") && (r = t.add(r)), e._bx_addBehavior(r, function(t) {
					e.bricks = t
				}, function() {
					e.on("beforeRefreshTmpl", function(t) {
						e.bxCounter++, "html" === t.renderType && t.node.all("[bx-name]").each(function(t) {
							e.destroyBrick(t.attr("id"))
						})
					}), e.on("afterRefreshTmpl", function(t) {
						e._bx_addBehavior(t.node.all("[bx-name]"), function(t) {
							t.length > 0 && (e.bricks = e.bricks.concat(t))
						}, function() {
							e.bxCounter--, 0 === e.bxCounter && e._bx_fireReady()
						})
					}), e._bx_fireReady()
				})
			}
		},
		_bx_addBehavior: function(t, n, i) {
			var a = this,
				s = a.get("config"),
				o = [];
			if (a.isReady = !1, t.each(function(t) {
				if ("true" != t.attr("bx-behavior")) {
					var n = r(t),
						i = t.attr("bx-name"),
						a = t.attr("bx-path"),
						c = Brix.returnJSON(t.attr("bx-config"));
					s && s[n] && e.mix(c, s[n]), t.attr("bx-behavior", "true"), o.push({
						id: n,
						name: i,
						path: a,
						config: c
					})
				}
			}), o.length > 0) {
				var c = [];
				e.each(o, function(t) {
					t.path || (t.path = "brix/gallery/" + t.name + "/"), e.inArray(c, t.path) || t.config.autoBrick || c.push(t.path)
				}), a.fire("beforeAddBehavior", {
					useList: c
				}), n && n(o), e.use(c.join(","), function(e) {
					if (!a.destroyed) {
						var t = arguments;
						e.each(o, function(r) {
							if (!r.destroyed && !r.config.autoBrick) {
								var n = r.id,
									i = e.merge({
										container: "#" + n,
										el: "#" + n,
										pagelet: a
									}, r.config),
									s = t[e.indexOf(r.path, c) + 1],
									o = new s(i);
								r.brick = o
							}
						}), a.fire("afterAddBehavior", {
							useList: c,
							bricks: o
						}), c = null, t = null, i && i()
					}
				})
			} else n && n(o), i && i()
		},
		ready: function(e) {
			this.isReady ? e.call(window, this) : this.readyList.push(e)
		},
		_bx_fireReady: function() {
			var e = this;
			if (!e.isReady) {
				e.isReady = !0;
				var t = e.readyList;
				if (e.readyList = [], t.length > 0) for (var r, n = 0; r = t[n++];) r.call(e);
				t = null
			}
		},
		destructor: function() {
			var t = this;
			if (e.each(t.bricks, function(e) {
				t._bx_destroyBrick(e)
			}), t.bricks = null, t.get("rendered")) {
				var r = t.get("destroyAction"),
					n = t.get("el");
				switch (r) {
				case "remove":
					n.remove();
					break;
				case "empty":
					n.empty()
				}
				n = null
			}
			t.destroyed = !0
		}
	}, {
		ATTRS: {
			autoBehavior: {
				value: !0
			},
			callback: {
				value: null
			},
			config: {
				value: {}
			}
		}
	}, "Pagelet");
	return n
}, {
	requires: ["./chunk"]
}), KISSY.add("brix/core/demolet", function(e, t, r, n) {
	function i(e) {
		return o[e] ? !1 : (o[e] = !0, r({
			url: e,
			dataType: "text",
			async: !1,
			complete: function(e, t) {
				"success" == t && s("<style>" + e + "</style>").appendTo("head")
			}
		}), void 0)
	}
	function a(t, n, i) {
		i = i || "@", n = n || {};
		var a = RegExp("\\{\\{" + i + "(.+)?\\}\\}", "ig");
		return t = t.replace(a, function(t, i) {
			e.log(i);
			var a = "",
				s = i.replace(/\//gi, "_").replace(/\./gi, "_");
			return n[s] = n[s] || {}, r({
				url: i + "template.html",
				dataType: "html",
				async: !1,
				success: function(e) {
					a = "{{#" + s + "}}" + e + "{{/" + s + "}}"
				}
			}), r({
				url: i + "data.json",
				async: !1,
				dataType: "json",
				success: function(e) {
					for (var t in e) n[s][t] = e[t]
				}
			}), a
		}), {
			tmpl: t,
			data: n
		}
	}
	var s = n.all,
		o = {},
		c = t.extend({
			initializer: function() {
				var t = this;
				t.on("beforeAddBehavior", function(r) {
					e.each(t.get("projectCSS"), function(e) {
						i(e)
					});
					var n = r.useList;
					e.each(n, function(t) {
						if (e.startsWith(t, "brix/")) e.use(t + "index.css");
						else {
							var r = 3;
							e.startsWith(t, "imports/") && (r = 5);
							var n = t.split("/");
							n.length > r && (n.splice(n.length - 2), i(n.join("/") + "/index.css")), i(t.substring(0, t.lastIndexOf("/")) + "/index.css")
						}
					})
				})
			}
		}, {
			ATTRS: {
				projectCSS: {
					value: [],
					setter: function(t) {
						return e.isArray(t) ? t : [t]
					}
				},
				s: {
					value: "@"
				},
				tmpl: {
					setter: function(e) {
						var t = this,
							r = t.get("data") || {},
							n = a(e, r, t.get("s"));
						return t.set("data", n.data), n.tmpl
					}
				}
			}
		}, "Demolet");
	return c
}, {
	requires: ["./pagelet", "ajax", "node"]
});