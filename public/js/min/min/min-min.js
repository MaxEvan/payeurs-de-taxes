function FastClick(e) {
    "use strict";
    var t, n = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
    this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, 
    this.layer = e, !e || !e.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(n, arguments);
    }, this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(n, arguments);
    }, this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(n, arguments);
    }, this.onTouchMove = function() {
        return FastClick.prototype.onTouchMove.apply(n, arguments);
    }, this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(n, arguments);
    }, this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(n, arguments);
    }, FastClick.notNeeded(e) || (this.deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), 
    e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), 
    e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), 
    e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), 
    e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
        var i = Node.prototype.removeEventListener;
        "click" === t ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r);
    }, e.addEventListener = function(t, n, r) {
        var i = Node.prototype.addEventListener;
        "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(e) {
            e.propagationStopped || n(e);
        }), r) : i.call(e, t, n, r);
    }), "function" == typeof e.onclick && (t = e.onclick, e.addEventListener("click", function(e) {
        t(e);
    }, !1), e.onclick = null));
}

!function(e, t) {
    function n(e) {
        var t = e.length, n = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e) {
        var t = St[e] = {};
        return ut.each(e.match(pt) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function i(e, n, r, i) {
        if (ut.acceptData(e)) {
            var o, a, s = ut.expando, l = e.nodeType, c = l ? ut.cache : e, u = l ? e[s] : e[s] && s;
            if (u && c[u] && (i || c[u].data) || r !== t || "string" != typeof n) return u || (u = l ? e[s] = tt.pop() || ut.guid++ : s), 
            c[u] || (c[u] = l ? {} : {
                toJSON: ut.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? c[u] = ut.extend(c[u], n) : c[u].data = ut.extend(c[u].data, n)), 
            a = c[u], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ut.camelCase(n)] = r), 
            "string" == typeof n ? (o = a[n], null == o && (o = a[ut.camelCase(n)])) : o = a, 
            o;
        }
    }
    function o(e, t, n) {
        if (ut.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? ut.cache : e, l = o ? e[ut.expando] : ut.expando;
            if (a[l]) {
                if (t && (r = n ? a[l] : a[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in r ? t = [ t ] : (t = ut.camelCase(t), 
                    t = t in r ? [ t ] : t.split(" ")), i = t.length;
                    for (;i--; ) delete r[t[i]];
                    if (n ? !s(r) : !ut.isEmptyObject(r)) return;
                }
                (n || (delete a[l].data, s(a[l]))) && (o ? ut.cleanData([ e ], !0) : ut.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null);
            }
        }
    }
    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Et.test(r) ? ut.parseJSON(r) : r;
                } catch (o) {}
                ut.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function l() {
        return !0;
    }
    function c() {
        return !1;
    }
    function u() {
        try {
            return J.activeElement;
        } catch (e) {}
    }
    function f(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e;
    }
    function p(e, t, n) {
        if (ut.isFunction(t)) return ut.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return ut.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (Rt.test(t)) return ut.filter(t, e, n);
            t = ut.filter(t, e);
        }
        return ut.grep(e, function(e) {
            return ut.inArray(e, t) >= 0 !== n;
        });
    }
    function d(e) {
        var t = Yt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function h(e, t) {
        return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function g(e) {
        return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type, e;
    }
    function m(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function y(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"));
    }
    function v(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, r, i, o = ut._data(e), a = ut._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ut.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = ut.extend({}, a.data));
        }
    }
    function x(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                i = ut._data(t);
                for (r in i.events) ut.removeEvent(t, r, i.handle);
                t.removeAttribute(ut.expando);
            }
            "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
        }
    }
    function b(e, n) {
        var r, i, o = 0, a = typeof e.getElementsByTagName !== U ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== U ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ut.nodeName(i, n) ? a.push(i) : ut.merge(a, b(i, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([ e ], a) : a;
    }
    function C(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked);
    }
    function T(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Sn.length; i--; ) if (t = Sn[i] + n, 
        t in e) return t;
        return r;
    }
    function k(e, t) {
        return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e);
    }
    function w(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ut._data(r, "olddisplay"), 
        n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && k(r) && (o[a] = ut._data(r, "olddisplay", L(r.nodeName)))) : o[a] || (i = k(r), 
        (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n : ut.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function S(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function E(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ut.css(e, n + wn[o], !0, i)), 
        r ? ("content" === n && (a -= ut.css(e, "padding" + wn[o], !0, i)), "margin" !== n && (a -= ut.css(e, "border" + wn[o] + "Width", !0, i))) : (a += ut.css(e, "padding" + wn[o], !0, i), 
        "padding" !== n && (a += ut.css(e, "border" + wn[o] + "Width", !0, i)));
        return a;
    }
    function N(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = fn(e), a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), xn.test(i)) return i;
            r = a && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function L(e) {
        var t = J, n = Cn[e];
        return n || (n = D(e, t), "none" !== n && n || (un = (un || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
        t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
        t.close(), n = D(e, t), un.detach()), Cn[e] = n), n;
    }
    function D(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body), r = ut.css(n[0], "display");
        return n.remove(), r;
    }
    function A(e, t, n, r) {
        var i;
        if (ut.isArray(t)) ut.each(t, function(t, i) {
            n || Nn.test(e) ? r(e, i) : A(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== ut.type(t)) r(e, t); else for (i in t) A(e + "[" + i + "]", t[i], n, r);
    }
    function O(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(pt) || [];
            if (ut.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function j(e, n, r, i) {
        function o(l) {
            var c;
            return a[l] = !0, ut.each(e[l] || [], function(e, l) {
                var u = l(n, r, i);
                return "string" != typeof u || s || a[u] ? s ? !(c = u) : t : (n.dataTypes.unshift(u), 
                o(u), !1);
            }), c;
        }
        var a = {}, s = e === Xn;
        return o(n.dataTypes[0]) || !a["*"] && o("*");
    }
    function M(e, n) {
        var r, i, o = ut.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ut.extend(!0, e, r), e;
    }
    function F(e, n, r) {
        for (var i, o, a, s, l = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), 
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (s in l) if (l[s] && l[s].test(o)) {
            c.unshift(s);
            break;
        }
        if (c[0] in r) a = c[0]; else {
            for (s in r) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    a = s;
                    break;
                }
                i || (i = s);
            }
            a = a || i;
        }
        return a ? (a !== c[0] && c.unshift(a), r[a]) : t;
    }
    function H(e, t, n, r) {
        var i, o, a, s, l, c = {}, u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a) for (i in c) if (s = i.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], u.unshift(s[1]));
                break;
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t);
            } catch (f) {
                return {
                    state: "parsererror",
                    error: a ? f : "No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function P() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) {}
    }
    function _() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function I() {
        return setTimeout(function() {
            Kn = t;
        }), Kn = ut.now();
    }
    function q(e, t, n) {
        for (var r, i = (or[t] || []).concat(or["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function B(e, t, n) {
        var r, i, o = 0, a = ir.length, s = ut.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (i) return !1;
            for (var t = Kn || I(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
            return s.notifyWith(e, [ c, o, n ]), 1 > o && l ? n : (s.resolveWith(e, [ c ]), 
            !1);
        }, c = s.promise({
            elem: e,
            props: ut.extend({}, t),
            opts: ut.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Kn || I(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ut.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? c.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) c.tweens[n].run(1);
                return t ? s.resolveWith(e, [ c, t ]) : s.rejectWith(e, [ c, t ]), this;
            }
        }), u = c.props;
        for ($(u, c.opts.specialEasing); a > o; o++) if (r = ir[o].call(c, e, u, c.opts)) return r;
        return ut.map(u, q, c), ut.isFunction(c.opts.start) && c.opts.start.call(e, c), 
        ut.fx.timer(ut.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    function $(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = ut.camelCase(n), i = t[r], o = e[n], ut.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ut.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function R(e, t, n) {
        var r, i, o, a, s, l, c = this, u = {}, f = e.style, p = e.nodeType && k(e), d = ut._data(e, "fxshow");
        n.queue || (s = ut._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, 
        l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l();
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, ut.queue(e, "fx").length || s.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
        "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), 
        n.overflow && (f.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        }));
        for (r in t) if (i = t[r], tr.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) continue;
            u[r] = d && d[r] || ut.style(e, r);
        }
        if (!ut.isEmptyObject(u)) {
            d ? "hidden" in d && (p = d.hidden) : d = ut._data(e, "fxshow", {}), o && (d.hidden = !p), 
            p ? ut(e).show() : c.done(function() {
                ut(e).hide();
            }), c.done(function() {
                var t;
                ut._removeData(e, "fxshow");
                for (t in u) ut.style(e, t, u[t]);
            });
            for (r in u) a = q(p ? d[r] : 0, r, c), r in d || (d[r] = a.start, p && (a.end = a.start, 
            a.start = "width" === r || "height" === r ? 1 : 0));
        }
    }
    function W(e, t, n, r, i) {
        return new W.prototype.init(e, t, n, r, i);
    }
    function X(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = wn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function z(e) {
        return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    var Y, G, U = typeof t, V = e.location, J = e.document, Q = J.documentElement, Z = e.jQuery, K = e.$, et = {}, tt = [], nt = "1.10.2", rt = tt.concat, it = tt.push, ot = tt.slice, at = tt.indexOf, st = et.toString, lt = et.hasOwnProperty, ct = nt.trim, ut = function(e, t) {
        return new ut.fn.init(e, t, G);
    }, ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pt = /\S+/g, dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, mt = /^[\],:{}\s]*$/, yt = /(?:^|:|,)(?:\s*\[)+/g, vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, xt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, bt = /^-ms-/, Ct = /-([\da-z])/gi, Tt = function(e, t) {
        return t.toUpperCase();
    }, kt = function(e) {
        (J.addEventListener || "load" === e.type || "complete" === J.readyState) && (wt(), 
        ut.ready());
    }, wt = function() {
        J.addEventListener ? (J.removeEventListener("DOMContentLoaded", kt, !1), e.removeEventListener("load", kt, !1)) : (J.detachEvent("onreadystatechange", kt), 
        e.detachEvent("onload", kt));
    };
    ut.fn = ut.prototype = {
        jquery: nt,
        constructor: ut,
        init: function(e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : ht.exec(e), 
                !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : J, !0)), 
                    gt.test(i[1]) && ut.isPlainObject(n)) for (i in n) ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this;
                }
                if (o = J.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o;
                }
                return this.context = J, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, 
            this.context = e.context), ut.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ot.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = ut.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return ut.each(this, e, t);
        },
        ready: function(e) {
            return ut.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(ut.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: it,
        sort: [].sort,
        splice: [].splice
    }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), 
        c === l && (s = this, --l); c > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], 
        r = o[i], s !== r && (u && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, 
        a = e && ut.isArray(e) ? e : []) : a = e && ut.isPlainObject(e) ? e : {}, s[i] = ut.extend(u, a, r)) : r !== t && (s[i] = r));
        return s;
    }, ut.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === ut && (e.$ = K), t && e.jQuery === ut && (e.jQuery = Z), ut;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ut.readyWait++ : ut.ready(!0);
        },
        ready: function(e) {
            if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                if (!J.body) return setTimeout(ut.ready);
                ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (Y.resolveWith(J, [ ut ]), ut.fn.trigger && ut(J).trigger("ready").off("ready"));
            }
        },
        isFunction: function(e) {
            return "function" === ut.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === ut.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
            try {
                if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (r) {
                return !1;
            }
            if (ut.support.ownLast) for (n in e) return lt.call(e, n);
            for (n in e) ;
            return n === t || lt.call(e, n);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || J;
            var r = gt.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = ut.buildFragment([ e ], t, i), i && ut(i).remove(), 
            ut.merge([], r.childNodes));
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ut.trim(n), 
            n && mt.test(n.replace(vt, "@").replace(xt, "]").replace(yt, ""))) ? Function("return " + n)() : (ut.error("Invalid JSON: " + n), 
            t);
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), 
                r.async = "false", r.loadXML(n));
            } catch (o) {
                r = t;
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), 
            r;
        },
        noop: function() {},
        globalEval: function(t) {
            t && ut.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(bt, "ms-").replace(Ct, Tt);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s) for (;a > o && (i = t.apply(e[o], r), i !== !1); o++) ; else for (o in e) if (i = t.apply(e[o], r), 
                i === !1) break;
            } else if (s) for (;a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) ; else for (o in e) if (i = t.call(e[o], o, e[o]), 
            i === !1) break;
            return e;
        },
        trim: ct && !ct.call(" ") ? function(e) {
            return null == e ? "" : ct.call(e);
        } : function(e) {
            return null == e ? "" : (e + "").replace(dt, "");
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [ e ] : e) : it.call(r, e)), 
            r;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (at) return at.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (;r > o; o++) e[i++] = n[o]; else for (;n[o] !== t; ) e[i++] = n[o++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        map: function(e, t, r) {
            var i, o = 0, a = e.length, s = n(e), l = [];
            if (s) for (;a > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i); else for (o in e) i = t(e[o], o, r), 
            null != i && (l[l.length] = i);
            return rt.apply([], l);
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ut.isFunction(e) ? (r = ot.call(arguments, 2), 
            i = function() {
                return e.apply(n || this, r.concat(ot.call(arguments)));
            }, i.guid = e.guid = e.guid || ut.guid++, i) : t;
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0, c = e.length, u = null == r;
            if ("object" === ut.type(r)) {
                o = !0;
                for (l in r) ut.access(e, n, l, r[l], !0, a, s);
            } else if (i !== t && (o = !0, ut.isFunction(i) || (s = !0), u && (s ? (n.call(e, i), 
            n = null) : (u = n, n = function(e, t, n) {
                return u.call(ut(e), n);
            })), n)) for (;c > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : u ? n.call(e) : c ? n(e[0], r) : a;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        }
    }), ut.ready.promise = function(t) {
        if (!Y) if (Y = ut.Deferred(), "complete" === J.readyState) setTimeout(ut.ready); else if (J.addEventListener) J.addEventListener("DOMContentLoaded", kt, !1), 
        e.addEventListener("load", kt, !1); else {
            J.attachEvent("onreadystatechange", kt), e.attachEvent("onload", kt);
            var n = !1;
            try {
                n = null == e.frameElement && J.documentElement;
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (e) {
                        return setTimeout(i, 50);
                    }
                    wt(), ut.ready();
                }
            }();
        }
        return Y.promise(t);
    }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase();
    }), G = ut(J), function(e, t) {
        function n(e, t, n, r) {
            var i, o, a, s, l, c, u, f, h, g;
            if ((t ? t.ownerDocument || t : B) !== j && O(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (F && !r) {
                if (i = xt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) return n.push(o), 
                    n;
                } else {
                    if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && k.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), 
                    n;
                }
                if (k.qsa && (!H || !H.test(e))) {
                    if (f = u = q, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = p(e), (u = t.getAttribute("id")) ? f = u.replace(Tt, "\\$&") : t.setAttribute("id", f), 
                        f = "[id='" + f + "'] ", l = c.length; l--; ) c[l] = f + d(c[l]);
                        h = dt.test(e) && t.parentNode || t, g = c.join(",");
                    }
                    if (g) try {
                        return et.apply(n, h.querySelectorAll(g)), n;
                    } catch (m) {} finally {
                        u || t.removeAttribute("id");
                    }
                }
            }
            return C(e.replace(ct, "$1"), t, n, r);
        }
        function r() {
            function e(n, r) {
                return t.push(n += " ") > S.cacheLength && delete e[t.shift()], e[n] = r;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[q] = !0, e;
        }
        function o(e) {
            var t = j.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), r = e.length; r--; ) S.attrHandle[n[r]] = t;
        }
        function s(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function f() {}
        function p(e, t) {
            var r, i, o, a, s, l, c, u = X[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = S.preFilter; s; ) {
                (!r || (i = ft.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), 
                r = !1, (i = pt.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ct, " ")
                }), s = s.slice(r.length));
                for (a in S.filter) !(i = yt[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), 
                o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break;
            }
            return t ? s.length : s ? n.error(e) : X(e, l).slice(0);
        }
        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function h(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = R++;
            return t.first ? function(t, n, o) {
                for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
            } : function(t, n, a) {
                var s, l, c, u = $ + " " + o;
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || i) if (c = t[q] || (t[q] = {}), 
                (l = c[r]) && l[0] === u) {
                    if ((s = l[1]) === !0 || s === w) return s === !0;
                } else if (l = c[r] = [ u ], l[1] = e(t, n, a) || w, l[1] === !0) return !0;
            };
        }
        function g(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), 
            c && t.push(s));
            return a;
        }
        function y(e, t, n, r, o, a) {
            return r && !r[q] && (r = y(r)), o && !o[q] && (o = y(o, a)), i(function(i, a, s, l) {
                var c, u, f, p = [], d = [], h = a.length, g = i || b(t || "*", s.nodeType ? [ s ] : s, []), y = !e || !i && t ? g : m(g, p, e, s, l), v = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, l), r) for (c = m(v, d), r(c, [], s, l), u = c.length; u--; ) (f = c[u]) && (v[d[u]] = !(y[d[u]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = v.length; u--; ) (f = v[u]) && c.push(y[u] = f);
                            o(null, v = [], c, l);
                        }
                        for (u = v.length; u--; ) (f = v[u]) && (c = o ? nt.call(i, f) : p[u]) > -1 && (i[c] = !(a[c] = f));
                    }
                } else v = m(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, l) : et.apply(a, v);
            });
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                return e === t;
            }, a, !0), c = h(function(e) {
                return nt.call(t, e) > -1;
            }, a, !0), u = [ function(e, n, r) {
                return !o && (r || n !== D) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
            } ]; i > s; s++) if (n = S.relative[e[s].type]) u = [ h(g(u), n) ]; else {
                if (n = S.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                    for (r = ++s; i > r && !S.relative[e[r].type]; r++) ;
                    return y(s > 1 && g(u), s > 1 && d(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(ct, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e));
                }
                u.push(n);
            }
            return g(u);
        }
        function x(e, t) {
            var r = 0, o = t.length > 0, a = e.length > 0, s = function(i, s, l, c, u) {
                var f, p, d, h = [], g = 0, y = "0", v = i && [], x = null != u, b = D, C = i || a && S.find.TAG("*", u && s.parentNode || s), T = $ += null == b ? 1 : Math.random() || .1;
                for (x && (D = s !== j && s, w = r); null != (f = C[y]); y++) {
                    if (a && f) {
                        for (p = 0; d = e[p++]; ) if (d(f, s, l)) {
                            c.push(f);
                            break;
                        }
                        x && ($ = T, w = ++r);
                    }
                    o && ((f = !d && f) && g--, i && v.push(f));
                }
                if (g += y, o && y !== g) {
                    for (p = 0; d = t[p++]; ) d(v, h, s, l);
                    if (i) {
                        if (g > 0) for (;y--; ) v[y] || h[y] || (h[y] = Z.call(c));
                        h = m(h);
                    }
                    et.apply(c, h), x && !i && h.length > 0 && g + t.length > 1 && n.uniqueSort(c);
                }
                return x && ($ = T, D = b), v;
            };
            return o ? i(s) : s;
        }
        function b(e, t, r) {
            for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
            return r;
        }
        function C(e, t, n, r) {
            var i, o, a, s, l, c = p(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && k.getById && 9 === t.nodeType && F && S.relative[o[1].type]) {
                    if (t = (S.find.ID(a.matches[0].replace(kt, wt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length);
                }
                for (i = yt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]); ) if ((l = S.find[s]) && (r = l(a.matches[0].replace(kt, wt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e) return et.apply(n, r), n;
                    break;
                }
            }
            return L(e, c)(r, t, !F, n, dt.test(e)), n;
        }
        var T, k, w, S, E, N, L, D, A, O, j, M, F, H, P, _, I, q = "sizzle" + -new Date(), B = e.document, $ = 0, R = 0, W = r(), X = r(), z = r(), Y = !1, G = function(e, t) {
            return e === t ? (Y = !0, 0) : 0;
        }, U = typeof t, V = 1 << 31, J = {}.hasOwnProperty, Q = [], Z = Q.pop, K = Q.push, et = Q.push, tt = Q.slice, nt = Q.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", at = ot.replace("w", "w#"), st = "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]", lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)", ct = RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), ft = RegExp("^" + it + "*," + it + "*"), pt = RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), dt = RegExp(it + "*[+~]"), ht = RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"), gt = RegExp(lt), mt = RegExp("^" + at + "$"), yt = {
            ID: RegExp("^#(" + ot + ")"),
            CLASS: RegExp("^\\.(" + ot + ")"),
            TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + st),
            PSEUDO: RegExp("^" + lt),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
            bool: RegExp("^(?:" + rt + ")$", "i"),
            needsContext: RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        }, vt = /^[^{]+\{\s*\[native \w/, xt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /^(?:input|select|textarea|button)$/i, Ct = /^h\d$/i, Tt = /'|\\/g, kt = RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), wt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
        };
        try {
            et.apply(Q = tt.call(B.childNodes), B.childNodes), Q[B.childNodes.length].nodeType;
        } catch (St) {
            et = {
                apply: Q.length ? function(e, t) {
                    K.apply(e, tt.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        N = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, k = n.support = {}, O = n.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : B, r = n.defaultView;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, M = n.documentElement, 
            F = !N(n), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
                O();
            }), k.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), k.getElementsByTagName = o(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
            }), k.getElementsByClassName = o(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 
                2 === e.getElementsByClassName("i").length;
            }), k.getById = o(function(e) {
                return M.appendChild(e).id = q, !n.getElementsByName || !n.getElementsByName(q).length;
            }), k.getById ? (S.find.ID = function(e, t) {
                if (typeof t.getElementById !== U && F) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, S.filter.ID = function(e) {
                var t = e.replace(kt, wt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete S.find.ID, S.filter.ID = function(e) {
                var t = e.replace(kt, wt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), S.find.TAG = k.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== U ? n.getElementsByTagName(e) : t;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, S.find.CLASS = k.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== U && F ? n.getElementsByClassName(e) : t;
            }, P = [], H = [], (k.qsa = vt.test(n.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || H.push("\\[" + it + "*(?:value|" + rt + ")"), 
                e.querySelectorAll(":checked").length || H.push(":checked");
            }), o(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && H.push("[*^$]=" + it + "*(?:''|\"\")"), 
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                H.push(",.*:");
            })), (k.matchesSelector = vt.test(_ = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) {
                k.disconnectedMatch = _.call(e, "div"), _.call(e, "[s!='']:x"), P.push("!=", lt);
            }), H = H.length && RegExp(H.join("|")), P = P.length && RegExp(P.join("|")), I = vt.test(M.contains) || M.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, G = M.compareDocumentPosition ? function(e, t) {
                if (e === t) return Y = !0, 0;
                var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return r ? 1 & r || !k.sortDetached && t.compareDocumentPosition(e) === r ? e === n || I(B, e) ? -1 : t === n || I(B, t) ? 1 : A ? nt.call(A, e) - nt.call(A, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, l = [ e ], c = [ t ];
                if (e === t) return Y = !0, 0;
                if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : A ? nt.call(A, e) - nt.call(A, t) : 0;
                if (o === a) return s(e, t);
                for (r = e; r = r.parentNode; ) l.unshift(r);
                for (r = t; r = r.parentNode; ) c.unshift(r);
                for (;l[i] === c[i]; ) i++;
                return i ? s(l[i], c[i]) : l[i] === B ? -1 : c[i] === B ? 1 : 0;
            }, n) : j;
        }, n.matches = function(e, t) {
            return n(e, null, null, t);
        }, n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== j && O(e), t = t.replace(ht, "='$1']"), !(!k.matchesSelector || !F || P && P.test(t) || H && H.test(t))) try {
                var r = _.call(e, t);
                if (r || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (i) {}
            return n(t, j, null, [ e ]).length > 0;
        }, n.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && O(e), I(e, t);
        }, n.attr = function(e, n) {
            (e.ownerDocument || e) !== j && O(e);
            var r = S.attrHandle[n.toLowerCase()], i = r && J.call(S.attrHandle, n.toLowerCase()) ? r(e, n, !F) : t;
            return i === t ? k.attributes || !F ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i;
        }, n.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, n.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (Y = !k.detectDuplicates, A = !k.sortStable && e.slice(0), e.sort(G), Y) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return e;
        }, E = n.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += E(t);
            return n;
        }, S = n.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: yt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(kt, wt), e[3] = (e[4] || e[5] || "").replace(kt, wt), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && gt.test(r) && (n = p(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), 
                    e[2] = r.slice(0, n)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(kt, wt).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, r) {
                    return function(i) {
                        var o = n.attr(i, e);
                        return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var c, u, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (f = t; f = f[g]; ) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
                                for (u = m[q] || (m[q] = {}), c = u[e] || [], d = c[0] === $ && c[1], p = c[0] === $ && c[2], 
                                f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop(); ) if (1 === f.nodeType && ++p && f === t) {
                                    u[e] = [ $, d, p ];
                                    break;
                                }
                            } else if (v && (c = (t[q] || (t[q] = {}))[e]) && c[0] === $) p = c[1]; else for (;(f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[q] || (f[q] = {}))[e] = [ $, p ]), 
                            f !== t)); ) ;
                            return p -= i, p === r || 0 === p % r && p / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var r, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[q] ? o(t) : o.length > 1 ? (r = [ e, e, "", t ], S.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var r, i = o(e, t), a = i.length; a--; ) r = nt.call(e, i[a]), e[r] = !(n[r] = i[a]);
                    }) : function(e) {
                        return o(e, 0, r);
                    }) : o;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], r = L(e.replace(ct, "$1"));
                    return r[q] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(t) {
                        return n(e, t).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return mt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(kt, wt).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === M;
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !S.pseudos.empty(e);
                },
                header: function(e) {
                    return Ct.test(e.nodeName);
                },
                input: function(e) {
                    return bt.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: u(function() {
                    return [ 0 ];
                }),
                last: u(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: u(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r; ) e.push(r);
                    return e;
                })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (T in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) S.pseudos[T] = l(T);
        for (T in {
            submit: !0,
            reset: !0
        }) S.pseudos[T] = c(T);
        f.prototype = S.filters = S.pseudos, S.setFilters = new f(), L = n.compile = function(e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = p(e)), n = t.length; n--; ) o = v(t[n]), o[q] ? r.push(o) : i.push(o);
                o = z(e, x(i, r));
            }
            return o;
        }, k.sortStable = q.split("").sort(G).join("") === q, k.detectDuplicates = Y, O(), 
        k.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"));
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || a("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
        }), k.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || a("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue;
        }), o(function(e) {
            return null == e.getAttribute("disabled");
        }) || a(rt, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
        }), ut.find = n, ut.expr = n.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = n.uniqueSort, 
        ut.text = n.getText, ut.isXMLDoc = n.isXML, ut.contains = n.contains;
    }(e);
    var St = {};
    ut.Callbacks = function(e) {
        e = "string" == typeof e ? St[e] || r(e) : ut.extend({}, e);
        var n, i, o, a, s, l, c = [], u = !e.once && [], f = function(t) {
            for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break;
            }
            n = !1, c && (u ? u.length && f(u.shift()) : i ? c = [] : p.disable());
        }, p = {
            add: function() {
                if (c) {
                    var t = c.length;
                    !function r(t) {
                        ut.each(t, function(t, n) {
                            var i = ut.type(n);
                            "function" === i ? e.unique && p.has(n) || c.push(n) : n && n.length && "string" !== i && r(n);
                        });
                    }(arguments), n ? a = c.length : i && (l = t, f(i));
                }
                return this;
            },
            remove: function() {
                return c && ut.each(arguments, function(e, t) {
                    for (var r; (r = ut.inArray(t, c, r)) > -1; ) c.splice(r, 1), n && (a >= r && a--, 
                    s >= r && s--);
                }), this;
            },
            has: function(e) {
                return e ? ut.inArray(e, c) > -1 : !(!c || !c.length);
            },
            empty: function() {
                return c = [], a = 0, this;
            },
            disable: function() {
                return c = u = i = t, this;
            },
            disabled: function() {
                return !c;
            },
            lock: function() {
                return u = t, i || p.disable(), this;
            },
            locked: function() {
                return !u;
            },
            fireWith: function(e, t) {
                return !c || o && !u || (t = t || [], t = [ e, t.slice ? t.slice() : t ], n ? u.push(t) : f(t)), 
                this;
            },
            fire: function() {
                return p.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return p;
    }, ut.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", ut.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ut.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ut.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return ut.Deferred(function(n) {
                        ut.each(t, function(t, o) {
                            var a = o[0], s = ut.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? ut.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, ut.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t, n, r, i = 0, o = ot.call(arguments), a = o.length, s = 1 !== a || e && ut.isFunction(e.promise) ? a : 0, l = 1 === s ? e : ut.Deferred(), c = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? ot.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ut.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise();
        }
    }), ut.support = function(t) {
        var n, r, i, o, a, s, l, c, u, f = J.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = J.createElement("select"), s = o.appendChild(J.createElement("option")), i = f.getElementsByTagName("input")[0], 
        r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, 
        t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, 
        t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), 
        t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), 
        t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, 
        t.enctype = !!J.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, 
        t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, 
        t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, 
        t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test;
        } catch (p) {
            t.deleteExpando = !1;
        }
        i = J.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), 
        i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, 
        i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = J.createDocumentFragment(), 
        a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        f.attachEvent && (f.attachEvent("onclick", function() {
            t.noCloneEvent = !1;
        }), f.cloneNode(!0).click());
        for (u in {
            submit: !0,
            change: !0,
            focusin: !0
        }) f.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || f.attributes[l].expando === !1;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
        t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (u in ut(t)) break;
        return t.ownLast = "0" !== u, ut(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = J.getElementsByTagName("body")[0];
            a && (n = J.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", 
            t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            ut.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === f.offsetWidth;
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, 
            t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(J.createElement("div")), r.style.cssText = f.style.cssText = o, 
            r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            typeof f.style.zoom !== U && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", 
            t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", 
            f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), 
            a.removeChild(n), n = f = i = r = null);
        }), n = o = a = s = r = i = null, t;
    }({});
    var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Nt = /([A-Z])/g;
    ut.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !s(e);
        },
        data: function(e, t, n) {
            return i(e, t, n);
        },
        removeData: function(e, t) {
            return o(e, t);
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return o(e, t, !0);
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), ut.fn.extend({
        data: function(e, n) {
            var r, i, o = null, s = 0, l = this[0];
            if (e === t) {
                if (this.length && (o = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; r.length > s; s++) i = r[s].name, 0 === i.indexOf("data-") && (i = ut.camelCase(i.slice(5)), 
                    a(l, i, o[i]));
                    ut._data(l, "parsedAttrs", !0);
                }
                return o;
            }
            return "object" == typeof e ? this.each(function() {
                ut.data(this, e);
            }) : arguments.length > 1 ? this.each(function() {
                ut.data(this, e, n);
            }) : l ? a(l, e, ut.data(l, e)) : null;
        },
        removeData: function(e) {
            return this.each(function() {
                ut.removeData(this, e);
            });
        }
    }), ut.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = ut._data(e, n), r && (!i || ut.isArray(r) ? i = ut._data(e, n, ut.makeArray(r)) : i.push(r)), 
            i || []) : t;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ut.queue(e, t), r = n.length, i = n.shift(), o = ut._queueHooks(e, t), a = function() {
                ut.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ut._data(e, n) || ut._data(e, n, {
                empty: ut.Callbacks("once memory").add(function() {
                    ut._removeData(e, t + "queue"), ut._removeData(e, n);
                })
            });
        }
    }), ut.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ut.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                ut.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, n) {
            var r, i = 1, o = ut.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) r = ut._data(a[s], e + "queueHooks"), 
            r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n);
        }
    });
    var Lt, Dt, At = /[\t\r\n\f]/g, Ot = /\r/g, jt = /^(?:input|select|textarea|button|object)$/i, Mt = /^(?:a|area)$/i, Ft = /^(?:checked|selected)$/i, Ht = ut.support.getSetAttribute, Pt = ut.support.input;
    ut.fn.extend({
        attr: function(e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                ut.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = ut.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).addClass(e.call(this, t, this.className));
            });
            if (l) for (t = (e || "").match(pt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                for (o = 0; i = t[o++]; ) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = ut.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).removeClass(e.call(this, t, this.className));
            });
            if (l) for (t = (e || "").match(pt) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                for (o = 0; i = t[o++]; ) for (;r.indexOf(" " + i + " ") >= 0; ) r = r.replace(" " + i + " ", " ");
                n.className = e ? ut.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ut.isFunction(e) ? function(n) {
                ut(this).toggleClass(e.call(this, n, this.className, t), t);
            } : function() {
                if ("string" === n) for (var t, r = 0, i = ut(this), o = e.match(pt) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else (n === U || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var n, r, i, o = this[0];
            return arguments.length ? (i = ut.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, ut(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ut.isArray(o) && (o = ut.map(o, function(e) {
                    return null == e ? "" : e + "";
                })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
            })) : o ? (r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, 
            "string" == typeof n ? n.replace(Ot, "") : null == n ? "" : n)) : void 0;
        }
    }), ut.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ut.find.attr(e, "value");
                    return null != t ? t : e.text;
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++) if (n = r[l], 
                    !(!n.selected && l !== i || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ut(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ut.makeArray(t), a = i.length; a--; ) r = i[a], 
                    (r.selected = ut.inArray(ut(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === U ? ut.prop(e, n, r) : (1 === a && ut.isXMLDoc(e) || (n = n.toLowerCase(), 
            i = ut.attrHooks[n] || (ut.expr.match.bool.test(n) ? Dt : Lt)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ut.find.attr(e, n), 
            null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), 
            r) : (ut.removeAttr(e, n), t)) : void 0;
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(pt);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = ut.propFix[n] || n, ut.expr.match.bool.test(n) ? Pt && Ht || !Ft.test(n) ? e[r] = !1 : e[ut.camelCase("default-" + n)] = e[r] = !1 : ut.attr(e, n, ""), 
            e.removeAttribute(Ht ? n : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, 
            o = ut.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ut.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : jt.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        }
    }), Dt = {
        set: function(e, t, n) {
            return t === !1 ? ut.removeAttr(e, n) : Pt && Ht || !Ft.test(n) ? e.setAttribute(!Ht && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, ut.each(ut.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = ut.expr.attrHandle[n] || ut.find.attr;
        ut.expr.attrHandle[n] = Pt && Ht || !Ft.test(n) ? function(e, n, i) {
            var o = ut.expr.attrHandle[n], a = i ? t : (ut.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ut.expr.attrHandle[n] = o, a;
        } : function(e, n, r) {
            return r ? t : e[ut.camelCase("default-" + n)] ? n.toLowerCase() : null;
        };
    }), Pt && Ht || (ut.attrHooks.value = {
        set: function(e, n, r) {
            return ut.nodeName(e, "input") ? (e.defaultValue = n, t) : Lt && Lt.set(e, n, r);
        }
    }), Ht || (Lt = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", 
            "value" === r || n === e.getAttribute(r) ? n : t;
        }
    }, ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
    }, ut.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t;
        },
        set: Lt.set
    }, ut.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Lt.set(e, "" === t ? !1 : t, n);
        }
    }, ut.each([ "width", "height" ], function(e, n) {
        ut.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t;
            }
        };
    })), ut.support.hrefNormalized || ut.each([ "href", "src" ], function(e, t) {
        ut.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), ut.support.style || (ut.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    }), ut.support.optSelected || (ut.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    }), ut.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ut.propFix[this.toLowerCase()] = this;
    }), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.each([ "radio", "checkbox" ], function() {
        ut.valHooks[this] = {
            set: function(e, n) {
                return ut.isArray(n) ? e.checked = ut.inArray(ut(e).val(), n) >= 0 : t;
            }
        }, ut.support.checkOn || (ut.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var _t = /^(?:input|select|textarea)$/i, It = /^key/, qt = /^(?:mouse|contextmenu)|click/, Bt = /^(?:focusinfocus|focusoutblur)$/, $t = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var a, s, l, c, u, f, p, d, h, g, m, y = ut._data(e);
            if (y) {
                for (r.handler && (c = r, r = c.handler, o = c.selector), r.guid || (r.guid = ut.guid++), 
                (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function(e) {
                    return typeof ut === U || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(f.elem, arguments);
                }, f.elem = e), n = (n || "").match(pt) || [ "" ], l = n.length; l--; ) a = $t.exec(n[l]) || [], 
                h = m = a[1], g = (a[2] || "").split(".").sort(), h && (u = ut.event.special[h] || {}, 
                h = (o ? u.delegateType : u.bindType) || h, u = ut.event.special[h] || {}, p = ut.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ut.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, c), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, u.setup && u.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), 
                u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), 
                ut.event.global[h] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, c, u, f, p, d, h, g, m = ut.hasData(e) && ut._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(pt) || [ "" ], c = t.length; c--; ) if (s = $t.exec(t[c]) || [], 
                d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ut.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, 
                    p = u[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    l = o = p.length; o--; ) a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), 
                    a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    l && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ut.removeEvent(e, d, m.handle), 
                    delete u[d]);
                } else for (d in u) ut.event.remove(e, d + t[c], n, r, !0);
                ut.isEmptyObject(u) && (delete m.handle, ut._removeData(e, "events"));
            }
        },
        trigger: function(n, r, i, o) {
            var a, s, l, c, u, f, p, d = [ i || J ], h = lt.call(n, "type") ? n.type : n, g = lt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Bt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), 
            h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), 
            n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            n.result = t, n.target || (n.target = i), r = null == r ? [ n ] : ut.makeArray(r, [ n ]), 
            u = ut.event.special[h] || {}, o || !u.trigger || u.trigger.apply(i, r) !== !1)) {
                if (!o && !u.noBubble && !ut.isWindow(i)) {
                    for (c = u.delegateType || h, Bt.test(c + h) || (l = l.parentNode); l; l = l.parentNode) d.push(l), 
                    f = l;
                    f === (i.ownerDocument || J) && d.push(f.defaultView || f.parentWindow || e);
                }
                for (p = 0; (l = d[p++]) && !n.isPropagationStopped(); ) n.type = p > 1 ? c : u.bindType || h, 
                a = (ut._data(l, "events") || {})[n.type] && ut._data(l, "handle"), a && a.apply(l, r), 
                a = s && l[s], a && ut.acceptData(l) && a.apply && a.apply(l, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), r) === !1) && ut.acceptData(i) && s && i[h] && !ut.isWindow(i)) {
                    f = i[s], f && (i[s] = null), ut.event.triggered = h;
                    try {
                        i[h]();
                    } catch (m) {}
                    ut.event.triggered = t, f && (i[s] = f);
                }
                return n.result;
            }
        },
        dispatch: function(e) {
            e = ut.event.fix(e);
            var n, r, i, o, a, s = [], l = ot.call(arguments), c = (ut._data(this, "events") || {})[e.type] || [], u = ut.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = ut.event.handlers.call(this, e, c), n = 0; (o = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = o.elem, 
                a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
                e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), 
                r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type)) for (;c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(c) >= 0 : ut.find(r, this, null, [ c ]).length), 
                o[r] && o.push(i);
                o.length && s.push({
                    elem: c,
                    handlers: o
                });
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s;
        },
        fix: function(e) {
            if (e[ut.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = qt.test(i) ? this.mouseHooks : It.test(i) ? this.keyHooks : {}), 
            r = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(o), t = r.length; t--; ) n = r[t], 
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || J), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || J, 
                o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), 
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), 
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : t;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : t;
                },
                _default: function(e) {
                    return ut.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = ut.extend(new ut.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, ut.removeEvent = J.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === U && (e[r] = null), e.detachEvent(r, n));
    }, ut.Event = function(e, n) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, 
        n && ut.extend(this, n), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, 
        t) : new ut.Event(e, n);
    }, ut.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation();
        }
    }, ut.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        ut.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), ut.support.submitBubbles || (ut.event.special.submit = {
        setup: function() {
            return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), ut._data(r, "submitBubbles", !0));
            }), t);
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function() {
            return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), t);
        }
    }), ut.support.changeBubbles || (ut.event.special.change = {
        setup: function() {
            return _t.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), ut.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0);
            })), !1) : (ut.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                _t.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0);
                }), ut._data(t, "changeBubbles", !0));
            }), t);
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
        },
        teardown: function() {
            return ut.event.remove(this, "._change"), !_t.test(this.nodeName);
        }
    }), ut.support.focusinBubbles || ut.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            ut.event.simulate(t, e.target, ut.event.fix(e), !0);
        };
        ut.event.special[t] = {
            setup: function() {
                0 === n++ && J.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 === --n && J.removeEventListener(e, r, !0);
            }
        };
    }), ut.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) this.on(a, n, r, e[a], o);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, 
            r = t) : (i = r, r = n, n = t)), i === !1) i = c; else if (!i) return this;
            return 1 === o && (s = i, i = function(e) {
                return ut().off(e), s.apply(this, arguments);
            }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function() {
                ut.event.add(this, e, i, r, n);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = c), 
            this.each(function() {
                ut.event.remove(this, e, r, n);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                ut.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? ut.event.trigger(e, n, r, !0) : t;
        }
    });
    var Rt = /^.[^:#\[\.,]*$/, Wt = /^(?:parents|prev(?:Until|All))/, Xt = ut.expr.match.needsContext, zt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ut.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(ut(e).filter(function() {
                for (t = 0; i > t; t++) if (ut.contains(r[t], this)) return !0;
            }));
            for (t = 0; i > t; t++) ut.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ut.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        has: function(e) {
            var t, n = ut(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (ut.contains(this, n[t])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(p(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(p(this, e || [], !1));
        },
        is: function(e) {
            return !!p(this, "string" == typeof e && Xt.test(e) ? ut(e) : e || [], !1).length;
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = Xt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, e))) {
                n = o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? ut.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [ e ] : e), r = ut.merge(this.get(), n);
            return this.pushStack(ut.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), ut.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return ut.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return ut.dir(e, "parentNode", n);
        },
        next: function(e) {
            return f(e, "nextSibling");
        },
        prev: function(e) {
            return f(e, "previousSibling");
        },
        nextAll: function(e) {
            return ut.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return ut.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return ut.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return ut.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return ut.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return ut.sibling(e.firstChild);
        },
        contents: function(e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes);
        }
    }, function(e, t) {
        ut.fn[e] = function(n, r) {
            var i = ut.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), 
            this.length > 1 && (zt[e] || (i = ut.unique(i)), Wt.test(e) && (i = i.reverse())), 
            this.pushStack(i);
        };
    }), ut.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ut.find.matchesSelector(r, e) ? [ r ] : [] : ut.find.matches(e, ut.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ut(o).is(r)); ) 1 === o.nodeType && i.push(o), 
            o = o[n];
            return i;
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var Yt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Gt = / jQuery\d+="(?:null|\d+)"/g, Ut = RegExp("<(?:" + Yt + ")[\\s/>]", "i"), Vt = /^\s+/, Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qt = /<([\w:]+)/, Zt = /<tbody/i, Kt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/, an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: ut.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, ln = d(J), cn = ln.appendChild(J.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, 
    sn.th = sn.td, ut.fn.extend({
        text: function(e) {
            return ut.access(this, function(e) {
                return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            for (var n, r = e ? ut.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ut.cleanData(b(n)), 
            n.parentNode && (t && ut.contains(n.ownerDocument, n) && y(b(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ut.clone(this, e, t);
            });
        },
        html: function(e) {
            return ut.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Gt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Ut.test(e) || !ut.support.leadingWhitespace && Vt.test(e) || sn[(Qt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(Jt, "<$1></$2>");
                    try {
                        for (;i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(b(n, !1)), 
                        n.innerHTML = e);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = ut.map(this, function(e) {
                return [ e.nextSibling, e.parentNode ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ut(this).remove(), i.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = rt.apply([], e);
            var r, i, o, a, s, l, c = 0, u = this.length, f = this, p = u - 1, d = e[0], h = ut.isFunction(d);
            if (h || !(1 >= u || "string" != typeof d || ut.support.checkClone) && nn.test(d)) return this.each(function(r) {
                var i = f.eq(r);
                h && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
            });
            if (u && (l = ut.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 
            1 === l.childNodes.length && (l = r), r)) {
                for (a = ut.map(b(l, "script"), g), o = a.length; u > c; c++) i = l, c !== p && (i = ut.clone(i, !0, !0), 
                o && ut.merge(a, b(i, "script"))), t.call(this[c], i, c);
                if (o) for (s = a[a.length - 1].ownerDocument, ut.map(a, m), c = 0; o > c; c++) i = a[c], 
                rn.test(i.type || "") && !ut._data(i, "globalEval") && ut.contains(s, i) && (i.src ? ut._evalUrl(i.src) : ut.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
                l = r = null;
            }
            return this;
        }
    }), ut.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ut.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ut(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), 
            ut(o[r])[t](n), it.apply(i, n.get());
            return this.pushStack(i);
        };
    }), ut.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Ut.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, 
            cn.removeChild(o = cn.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (r = b(o), 
            s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && x(i, r[a]);
            if (t) if (n) for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) v(i, r[a]); else v(e, o);
            return r = b(o, "script"), r.length > 0 && y(r, !l && b(e, "script")), r = s = i = null, 
            o;
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, l, c, u, f = e.length, p = d(t), h = [], g = 0; f > g; g++) if (o = e[g], 
            o || 0 === o) if ("object" === ut.type(o)) ut.merge(h, o.nodeType ? [ o ] : o); else if (Kt.test(o)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Qt.exec(o) || [ "", "" ])[1].toLowerCase(), 
                u = sn[l] || sn._default, s.innerHTML = u[1] + o.replace(Jt, "<$1></$2>") + u[2], 
                i = u[0]; i--; ) s = s.lastChild;
                if (!ut.support.leadingWhitespace && Vt.test(o) && h.push(t.createTextNode(Vt.exec(o)[0])), 
                !ut.support.tbody) for (o = "table" !== l || Zt.test(o) ? "<table>" !== u[1] || Zt.test(o) ? 0 : s : s.firstChild, 
                i = o && o.childNodes.length; i--; ) ut.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
                s = p.lastChild;
            } else h.push(t.createTextNode(o));
            for (s && p.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), C), 
            g = 0; o = h[g++]; ) if ((!r || -1 === ut.inArray(o, r)) && (a = ut.contains(o.ownerDocument, o), 
            s = b(p.appendChild(o), "script"), a && y(s), n)) for (i = 0; o = s[i++]; ) rn.test(o.type || "") && n.push(o);
            return s = null, p;
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ut.expando, l = ut.cache, c = ut.support.deleteExpando, u = ut.event.special; null != (n = e[a]); a++) if ((t || ut.acceptData(n)) && (i = n[s], 
            o = i && l[i])) {
                if (o.events) for (r in o.events) u[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, o.handle);
                l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== U ? n.removeAttribute(s) : n[s] = null, 
                tt.push(i));
            }
        },
        _evalUrl: function(e) {
            return ut.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), ut.fn.extend({
        wrapAll: function(e) {
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return this.each(ut.isFunction(e) ? function(t) {
                ut(this).wrapInner(e.call(this, t));
            } : function() {
                var t = ut(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = ut.isFunction(e);
            return this.each(function(n) {
                ut(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var un, fn, pn, dn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, mn = /^(none|table(?!-c[ea]).+)/, yn = /^margin/, vn = RegExp("^(" + ft + ")(.*)$", "i"), xn = RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"), bn = RegExp("^([+-])=(" + ft + ")", "i"), Cn = {
        BODY: "block"
    }, Tn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, kn = {
        letterSpacing: 0,
        fontWeight: 400
    }, wn = [ "Top", "Right", "Bottom", "Left" ], Sn = [ "Webkit", "O", "Moz", "ms" ];
    ut.fn.extend({
        css: function(e, n) {
            return ut.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (ut.isArray(n)) {
                    for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = ut.css(e, n[s], !1, o);
                    return a;
                }
                return r !== t ? ut.style(e, n, r) : ut.css(e, n);
            }, e, n, arguments.length > 1);
        },
        show: function() {
            return w(this, !0);
        },
        hide: function() {
            return w(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                k(this) ? ut(this).show() : ut(this).hide();
            });
        }
    }), ut.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = ut.camelCase(n), c = e.style;
                if (n = ut.cssProps[l] || (ut.cssProps[l] = T(c, l)), s = ut.cssHooks[n] || ut.cssHooks[l], 
                r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : c[n];
                if (a = typeof r, "string" === a && (o = bn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), 
                a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[l] || (r += "px"), 
                ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (c[n] = "inherit"), 
                s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    c[n] = r;
                } catch (u) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = ut.camelCase(n);
            return n = ut.cssProps[l] || (ut.cssProps[l] = T(e.style, l)), s = ut.cssHooks[n] || ut.cssHooks[l], 
            s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = pn(e, n, i)), "normal" === a && n in kn && (a = kn[n]), 
            "" === r || r ? (o = parseFloat(a), r === !0 || ut.isNumeric(o) ? o || 0 : a) : a;
        }
    }), e.getComputedStyle ? (fn = function(t) {
        return e.getComputedStyle(t, null);
    }, pn = function(e, n, r) {
        var i, o, a, s = r || fn(e), l = s ? s.getPropertyValue(n) || s[n] : t, c = e.style;
        return s && ("" !== l || ut.contains(e.ownerDocument, e) || (l = ut.style(e, n)), 
        xn.test(l) && yn.test(n) && (i = c.width, o = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, 
        l = s.width, c.width = i, c.minWidth = o, c.maxWidth = a)), l;
    }) : J.documentElement.currentStyle && (fn = function(e) {
        return e.currentStyle;
    }, pn = function(e, n, r) {
        var i, o, a, s = r || fn(e), l = s ? s[n] : t, c = e.style;
        return null == l && c && c[n] && (l = c[n]), xn.test(l) && !gn.test(n) && (i = c.left, 
        o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, 
        l = c.pixelLeft + "px", c.left = i, a && (o.left = a)), "" === l ? "auto" : l;
    }), ut.each([ "height", "width" ], function(e, n) {
        ut.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && mn.test(ut.css(e, "display")) ? ut.swap(e, Tn, function() {
                    return N(e, n, i);
                }) : N(e, n, i) : t;
            },
            set: function(e, t, r) {
                var i = r && fn(e);
                return S(e, t, r ? E(e, n, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), ut.support.opacity || (ut.cssHooks.opacity = {
        get: function(e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i);
        }
    }), ut(function() {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? ut.swap(e, {
                    display: "inline-block"
                }, pn, [ e, "marginRight" ]) : t;
            }
        }), !ut.support.pixelPosition && ut.fn.position && ut.each([ "top", "left" ], function(e, n) {
            ut.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = pn(e, n), xn.test(r) ? ut(e).position()[n] + "px" : r) : t;
                }
            };
        });
    }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"));
    }, ut.expr.filters.visible = function(e) {
        return !ut.expr.filters.hidden(e);
    }), ut.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ut.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) i[e + wn[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, yn.test(e) || (ut.cssHooks[e + t].set = S);
    });
    var En = /%20/g, Nn = /\[\]$/, Ln = /\r?\n/g, Dn = /^(?:submit|button|image|reset|file)$/i, An = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize: function() {
            return ut.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && An.test(this.nodeName) && !Dn.test(e) && (this.checked || !tn.test(e));
            }).map(function(e, t) {
                var n = ut(this).val();
                return null == n ? null : ut.isArray(n) ? ut.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ln, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Ln, "\r\n")
                };
            }).get();
        }
    }), ut.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = ut.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
            o(this.name, this.value);
        }); else for (r in e) A(r, e[r], n, o);
        return i.join("&").replace(En, "+");
    }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ut.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), ut.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var On, jn, Mn = ut.now(), Fn = /\?/, Hn = /#.*$/, Pn = /([?&])_=[^&]*/, _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, In = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qn = /^(?:GET|HEAD)$/, Bn = /^\/\//, $n = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Rn = ut.fn.load, Wn = {}, Xn = {}, zn = "*/".concat("*");
    try {
        jn = V.href;
    } catch (Yn) {
        jn = J.createElement("a"), jn.href = "", jn = jn.href;
    }
    On = $n.exec(jn.toLowerCase()) || [], ut.fn.load = function(e, n, r) {
        if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ut.isFunction(n) ? (r = n, 
        n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e);
        }).complete(r && function(e, t) {
            s.each(r, o || [ e.responseText, t, e ]);
        }), this;
    }, ut.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        ut.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), ut.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jn,
            type: "GET",
            isLocal: In.test(On[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ut.parseJSON,
                "text xml": ut.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? M(M(e, ut.ajaxSettings), t) : M(ut.ajaxSettings, e);
        },
        ajaxPrefilter: O(Wn),
        ajaxTransport: O(Xn),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, f, v, x, C, k = n;
                2 !== b && (b = 2, l && clearTimeout(l), u = t, s = i || "", T.readyState = e > 0 ? 4 : 0, 
                o = e >= 200 && 300 > e || 304 === e, r && (x = F(p, T, r)), x = H(p, x, T, o), 
                o ? (p.ifModified && (C = T.getResponseHeader("Last-Modified"), C && (ut.lastModified[a] = C), 
                C = T.getResponseHeader("etag"), C && (ut.etag[a] = C)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, 
                f = x.data, v = x.error, o = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), 
                T.status = e, T.statusText = (n || k) + "", o ? g.resolveWith(d, [ f, k, T ]) : g.rejectWith(d, [ T, k, v ]), 
                T.statusCode(y), y = t, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [ T, p, o ? f : v ]), 
                m.fireWith(d, [ T, k ]), c && (h.trigger("ajaxComplete", [ T, p ]), --ut.active || ut.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, c, u, f, p = ut.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? ut(d) : ut.event, g = ut.Deferred(), m = ut.Callbacks("once memory"), y = p.statusCode || {}, v = {}, x = {}, b = 0, C = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!f) for (f = {}; t = _n.exec(s); ) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = x[n] = x[n] || e, v[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > b) for (t in e) y[t] = [ y[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || C;
                    return u && u.abort(t), r(0, t), this;
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || jn) + "").replace(Hn, "").replace(Bn, On[1] + "//"), 
            p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(pt) || [ "" ], 
            null == p.crossDomain && (i = $n.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === On[1] && i[2] === On[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (On[3] || ("http:" === On[1] ? "80" : "443")))), 
            p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), 
            j(Wn, p, n, T), 2 === b) return T;
            c = p.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
            p.hasContent = !qn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Fn.test(a) ? "&" : "?") + p.data, 
            delete p.data), p.cache === !1 && (p.url = Pn.test(a) ? a.replace(Pn, "$1_=" + Mn++) : a + (Fn.test(a) ? "&" : "?") + "_=" + Mn++)), 
            p.ifModified && (ut.lastModified[a] && T.setRequestHeader("If-Modified-Since", ut.lastModified[a]), 
            ut.etag[a] && T.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), 
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + zn + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers) T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b)) return T.abort();
            C = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](p[o]);
            if (u = j(Xn, p, n, T)) {
                T.readyState = 1, c && h.trigger("ajaxSend", [ T, p ]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout");
                }, p.timeout));
                try {
                    b = 1, u.send(v, r);
                } catch (k) {
                    if (!(2 > b)) throw k;
                    r(-1, k);
                }
            } else r(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return ut.get(e, t, n, "json");
        },
        getScript: function(e, n) {
            return ut.get(e, t, n, "script");
        }
    }), ut.each([ "get", "post" ], function(e, n) {
        ut[n] = function(e, r, i, o) {
            return ut.isFunction(r) && (o = o || i, i = r, r = t), ut.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            });
        };
    }), ut.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ut.globalEval(e), e;
            }
        }
    }), ut.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), ut.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = J.head || ut("head")[0] || J.documentElement;
            return {
                send: function(t, i) {
                    n = J.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), 
                    n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, 
                        n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                abort: function() {
                    n && n.onload(t, !0);
                }
            };
        }
    });
    var Gn = [], Un = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gn.pop() || ut.expando + "_" + Mn++;
            return this[e] = !0, e;
        }
    }), ut.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Un.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Un.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, 
        l ? n[l] = n[l].replace(Un, "$1" + o) : n.jsonp !== !1 && (n.url += (Fn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), 
        n.converters["script json"] = function() {
            return s || ut.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Gn.push(o)), s && ut.isFunction(a) && a(s[0]), 
            s = a = t;
        }), "script") : t;
    });
    var Vn, Jn, Qn = 0, Zn = e.ActiveXObject && function() {
        var e;
        for (e in Vn) Vn[e](t, !0);
    };
    ut.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && P() || _();
    } : P, Jn = ut.ajaxSettings.xhr(), ut.support.cors = !!Jn && "withCredentials" in Jn, 
    Jn = ut.support.ajax = !!Jn, Jn && ut.ajaxTransport(function(n) {
        if (!n.crossDomain || ut.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), 
                    n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) l.setRequestHeader(s, i[s]);
                    } catch (c) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, c, u, f;
                        try {
                            if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = ut.noop, 
                            Zn && delete Vn[a]), i) 4 !== l.readyState && l.abort(); else {
                                f = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                                try {
                                    u = l.statusText;
                                } catch (p) {
                                    u = "";
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404;
                            }
                        } catch (d) {
                            i || o(-1, d);
                        }
                        f && o(s, u, f, c);
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Qn, Zn && (Vn || (Vn = {}, 
                    ut(e).unload(Zn)), Vn[a] = r), l.onreadystatechange = r) : r();
                },
                abort: function() {
                    r && r(t, !0);
                }
            };
        }
    });
    var Kn, er, tr = /^(?:toggle|show|hide)$/, nr = RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"), rr = /queueHooks$/, ir = [ R ], or = {
        "*": [ function(e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = nr.exec(t), o = i && i[3] || (ut.cssNumber[e] ? "" : "px"), a = (ut.cssNumber[e] || "px" !== o && +r) && nr.exec(ut.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], i = i || [], a = +r || 1;
                do s = s || ".5", a /= s, ut.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l);
            }
            return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), 
            n;
        } ]
    };
    ut.Animation = ut.extend(B, {
        tweener: function(e, t) {
            ut.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? ir.unshift(e) : ir.push(e);
        }
    }), ut.Tween = W, W.prototype = {
        constructor: W,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (ut.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = W.propHooks[this.prop];
            return e && e.get ? e.get(this) : W.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = W.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : W.propHooks._default.set(this), this;
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, ut.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(X(t, !0), e, r, i);
        };
    }), ut.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(k).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = ut.isEmptyObject(e), o = ut.speed(t, n, r), a = function() {
                var t = B(this, ut.extend({}, e), o);
                (i || ut._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = ut.timers, a = ut._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), 
                t = !1, o.splice(n, 1));
                (t || !r) && ut.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = ut._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ut.timers, a = r ? r.length : 0;
                for (n.finish = !0, ut.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), ut.each({
        slideDown: X("show"),
        slideUp: X("hide"),
        slideToggle: X("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ut.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), ut.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ut.extend({}, e) : {
            complete: n || !n && t || ut.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ut.isFunction(t) && t
        };
        return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue);
        }, r;
    }, ut.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, ut.timers = [], ut.fx = W.prototype.init, ut.fx.tick = function() {
        var e, n = ut.timers, r = 0;
        for (Kn = ut.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ut.fx.stop(), Kn = t;
    }, ut.fx.timer = function(e) {
        e() && ut.timers.push(e) && ut.fx.start();
    }, ut.fx.interval = 13, ut.fx.start = function() {
        er || (er = setInterval(ut.fx.tick, ut.fx.interval));
    }, ut.fx.stop = function() {
        clearInterval(er), er = null;
    }, ut.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
        return ut.grep(ut.timers, function(t) {
            return e === t.elem;
        }).length;
    }), ut.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            ut.offset.setOffset(this, e, t);
        });
        var n, r, i = {
            top: 0,
            left: 0
        }, o = this[0], a = o && o.ownerDocument;
        return a ? (n = a.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== U && (i = o.getBoundingClientRect()), 
        r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i) : void 0;
    }, ut.offset = {
        setOffset: function(e, t, n) {
            var r = ut.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ut(e), s = a.offset(), l = ut.css(e, "top"), c = ut.css(e, "left"), u = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [ l, c ]) > -1, f = {}, p = {};
            u ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(l) || 0, o = parseFloat(c) || 0), 
            ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), 
            null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f);
        }
    }, ut.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), 
                n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ut.css(r, "marginTop", !0),
                    left: t.left - n.left - ut.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Q; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position"); ) e = e.offsetParent;
                return e || Q;
            });
        }
    }), ut.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function(i) {
            return ut.access(this, function(e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ut(a).scrollLeft() : o, r ? o : ut(a).scrollTop()) : e[i] = o, 
                t);
            }, e, i, arguments.length, null);
        };
    }), ut.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        ut.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            ut.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ut.access(this, function(n, r, i) {
                    var o;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, 
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ut.css(n, r, s) : ut.style(n, r, i, s);
                }, n, a ? i : t, a, null);
            };
        });
    }), ut.fn.size = function() {
        return this.length;
    }, ut.fn.andSelf = ut.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ut : (e.jQuery = e.$ = ut, 
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ut;
    }));
}(window), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, 
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), 
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), 
FastClick.prototype.needsClick = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (e.disabled) return !0;
        break;

      case "input":
        if (this.deviceIsIOS && "file" === e.type || e.disabled) return !0;
        break;

      case "label":
      case "video":
        return !0;
    }
    return /\bneedsclick\b/.test(e.className);
}, FastClick.prototype.needsFocus = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
      case "textarea":
      case "select":
        return !0;

      case "input":
        switch (e.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return !1;
        }
        return !e.disabled && !e.readOnly;

      default:
        return /\bneedsfocus\b/.test(e.className);
    }
}, FastClick.prototype.sendClick = function(e, t) {
    "use strict";
    var n, r;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), 
    r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent("click", !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), 
    n.forwardedTouchEvent = !0, e.dispatchEvent(n);
}, FastClick.prototype.focus = function(e) {
    "use strict";
    var t;
    this.deviceIsIOS && e.setSelectionRange ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus();
}, FastClick.prototype.updateScrollParent = function(e) {
    "use strict";
    var t, n;
    if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
        n = e;
        do {
            if (n.scrollHeight > n.offsetHeight) {
                t = n, e.fastClickScrollParent = n;
                break;
            }
            n = n.parentElement;
        } while (n);
    }
    t && (t.fastClickLastScrollTop = t.scrollTop);
}, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
    "use strict";
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
}, FastClick.prototype.onTouchStart = function(e) {
    "use strict";
    var t, n, r;
    if (e.targetTouches.length > 1) return !0;
    if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], 
    this.deviceIsIOS) {
        if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
        if (!this.deviceIsIOS4) {
            if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
            this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t);
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, 
    this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), 
    !0;
}, FastClick.prototype.touchHasMoved = function(e) {
    "use strict";
    var t = e.changedTouches[0], n = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1;
}, FastClick.prototype.onTouchMove = function(e) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, 
    this.targetElement = null), !0) : !0;
}, FastClick.prototype.findControl = function(e) {
    "use strict";
    return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
}, FastClick.prototype.onTouchEnd = function(e) {
    "use strict";
    var t, n, r, i, o, a = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
    if (this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, 
    this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (o = e.changedTouches[0], 
    a = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || a, 
    a.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = a.tagName.toLowerCase(), 
    "label" === r) {
        if (t = this.findControl(a)) {
            if (this.focus(a), this.deviceIsAndroid) return !1;
            a = t;
        }
    } else if (this.needsFocus(a)) return e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && "input" === r ? (this.targetElement = null, 
    !1) : (this.focus(a), this.deviceIsIOS4 && "select" === r || (this.targetElement = null, 
    e.preventDefault()), !1);
    return this.deviceIsIOS && !this.deviceIsIOS4 && (i = a.fastClickScrollParent, i && i.fastClickLastScrollTop !== i.scrollTop) ? !0 : (this.needsClick(a) || (e.preventDefault(), 
    this.sendClick(a, e)), !1);
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null;
}, FastClick.prototype.onMouse = function(e) {
    "use strict";
    return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, 
    e.stopPropagation(), e.preventDefault(), !1) : !0 : !0;
}, FastClick.prototype.onClick = function(e) {
    "use strict";
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, 
    !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), 
    t || (this.targetElement = null), t);
}, FastClick.prototype.destroy = function() {
    "use strict";
    var e = this.layer;
    this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), 
    e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), 
    e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), 
    e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1);
}, FastClick.notNeeded = function(e) {
    "use strict";
    var t;
    if ("undefined" == typeof window.ontouchstart) return !0;
    if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
        if (!FastClick.prototype.deviceIsAndroid) return !0;
        if (t = document.querySelector("meta[name=viewport]"), t && -1 !== t.content.indexOf("user-scalable=no")) return !0;
    }
    return "none" === e.style.msTouchAction ? !0 : !1;
}, FastClick.attach = function(e) {
    "use strict";
    return new FastClick(e);
}, "undefined" != typeof define && define.amd ? define(function() {
    "use strict";
    return FastClick;
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, 
module.exports.FastClick = FastClick) : window.FastClick = FastClick, function(e) {
    function t(e) {
        return e.replace(/(:|\.)/g, "\\$1");
    }
    var n = "1.4.11", r = {
        exclude: [],
        excludeWithin: [],
        offset: 0,
        direction: "top",
        scrollElement: null,
        scrollTarget: null,
        beforeScroll: function() {},
        afterScroll: function() {},
        easing: "swing",
        speed: 400,
        autoCoefficent: 2,
        preventDefault: !0
    }, i = function(t) {
        var n = [], r = !1, i = t.dir && "left" == t.dir ? "scrollLeft" : "scrollTop";
        return this.each(function() {
            if (this != document && this != window) {
                var t = e(this);
                t[i]() > 0 ? n.push(this) : (t[i](1), r = t[i]() > 0, r && n.push(this), t[i](0));
            }
        }), n.length || this.each(function() {
            "BODY" === this.nodeName && (n = [ this ]);
        }), "first" === t.el && n.length > 1 && (n = [ n[0] ]), n;
    };
    e.fn.extend({
        scrollable: function(e) {
            var t = i.call(this, {
                dir: e
            });
            return this.pushStack(t);
        },
        firstScrollable: function(e) {
            var t = i.call(this, {
                el: "first",
                dir: e
            });
            return this.pushStack(t);
        },
        smoothScroll: function(n) {
            n = n || {};
            var r = e.extend({}, e.fn.smoothScroll.defaults, n), i = e.smoothScroll.filterPath(location.pathname);
            return this.unbind("click.smoothscroll").bind("click.smoothscroll", function(n) {
                var o = this, a = e(this), s = r.exclude, l = r.excludeWithin, c = 0, u = 0, f = !0, p = {}, d = location.hostname === o.hostname || !o.hostname, h = r.scrollTarget || (e.smoothScroll.filterPath(o.pathname) || i) === i, g = t(o.hash);
                if (r.scrollTarget || d && h && g) {
                    for (;f && s.length > c; ) a.is(t(s[c++])) && (f = !1);
                    for (;f && l.length > u; ) a.closest(l[u++]).length && (f = !1);
                } else f = !1;
                f && (r.preventDefault && n.preventDefault(), e.extend(p, r, {
                    scrollTarget: r.scrollTarget || g,
                    link: o
                }), e.smoothScroll(p));
            }), this;
        }
    }), e.smoothScroll = function(t, n) {
        var r, i, o, a, s = 0, l = "offset", c = "scrollTop", u = {}, f = {};
        "number" == typeof t ? (r = e.fn.smoothScroll.defaults, o = t) : (r = e.extend({}, e.fn.smoothScroll.defaults, t || {}), 
        r.scrollElement && (l = "position", "static" == r.scrollElement.css("position") && r.scrollElement.css("position", "relative"))), 
        r = e.extend({
            link: null
        }, r), c = "left" == r.direction ? "scrollLeft" : c, r.scrollElement ? (i = r.scrollElement, 
        s = i[c]()) : i = e("html, body").firstScrollable(), r.beforeScroll.call(i, r), 
        o = "number" == typeof t ? t : n || e(r.scrollTarget)[l]() && e(r.scrollTarget)[l]()[r.direction] || 0, 
        u[c] = o + s + r.offset, a = r.speed, "auto" === a && (a = u[c] || i.scrollTop(), 
        a /= r.autoCoefficent), f = {
            duration: a,
            easing: r.easing,
            complete: function() {
                r.afterScroll.call(r.link, r);
            }
        }, r.step && (f.step = r.step), i.length ? i.stop().animate(u, f) : r.afterScroll.call(r.link, r);
    }, e.smoothScroll.version = n, e.smoothScroll.filterPath = function(e) {
        return e.replace(/^\//, "").replace(/(index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
    }, e.fn.smoothScroll.defaults = r;
}(jQuery), function(e) {
    function t(t, i, o, a, s) {
        function l() {
            h.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"), i && n(i, o, a, s), 
            s.startOrder = [], s.newOrder = [], s.origSort = [], s.checkSort = [], d.removeStyle(s.prefix + "filter, filter, " + s.prefix + "transform, transform, opacity, display").css(s.clean).removeAttr("data-checksum"), 
            window.atob || d.css({
                display: "none",
                opacity: "0"
            }), h.removeStyle(s.prefix + "transition, transition, " + s.prefix + "perspective, perspective, " + s.prefix + "perspective-origin, perspective-origin, " + (s.resizeContainer ? "height" : "")), 
            "list" == s.layoutMode ? (g.css({
                display: s.targetDisplayList,
                opacity: "1"
            }), s.origDisplay = s.targetDisplayList) : (g.css({
                display: s.targetDisplayGrid,
                opacity: "1"
            }), s.origDisplay = s.targetDisplayGrid), s.origLayout = s.layoutMode, setTimeout(function() {
                if (d.removeStyle(s.prefix + "transition, transition"), s.mixing = !1, "function" == typeof s.onMixEnd) {
                    var e = s.onMixEnd.call(this, s);
                    s = e ? e : s;
                }
            });
        }
        if (clearInterval(s.failsafe), s.mixing = !0, s.filter = t, "function" == typeof s.onMixStart) {
            var c = s.onMixStart.call(this, s);
            s = c ? c : s;
        }
        for (var u = s.transitionSpeed, c = 0; 2 > c; c++) {
            var f = 0 == c ? f = s.prefix : "";
            s.transition[f + "transition"] = "all " + u + "ms linear", s.transition[f + "transform"] = f + "translate3d(0,0,0)", 
            s.perspective[f + "perspective"] = s.perspectiveDistance + "px", s.perspective[f + "perspective-origin"] = s.perspectiveOrigin;
        }
        var p = s.targetSelector, d = a.find(p);
        d.each(function() {
            this.data = {};
        });
        var h = d.parent();
        h.css(s.perspective), s.easingFallback = "ease-in-out", "smooth" == s.easing && (s.easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"), 
        "snap" == s.easing && (s.easing = "cubic-bezier(0.77, 0, 0.175, 1)"), "windback" == s.easing && (s.easing = "cubic-bezier(0.175, 0.885, 0.320, 1.275)", 
        s.easingFallback = "cubic-bezier(0.175, 0.885, 0.320, 1)"), "windup" == s.easing && (s.easing = "cubic-bezier(0.6, -0.28, 0.735, 0.045)", 
        s.easingFallback = "cubic-bezier(0.6, 0.28, 0.735, 0.045)"), c = "list" == s.layoutMode && null != s.listEffects ? s.listEffects : s.effects, 
        Array.prototype.indexOf && (s.fade = -1 < c.indexOf("fade") ? "0" : "", s.scale = -1 < c.indexOf("scale") ? "scale(.01)" : "", 
        s.rotateZ = -1 < c.indexOf("rotateZ") ? "rotate(180deg)" : "", s.rotateY = -1 < c.indexOf("rotateY") ? "rotateY(90deg)" : "", 
        s.rotateX = -1 < c.indexOf("rotateX") ? "rotateX(90deg)" : "", s.blur = -1 < c.indexOf("blur") ? "blur(8px)" : "", 
        s.grayscale = -1 < c.indexOf("grayscale") ? "grayscale(100%)" : "");
        var g = e(), m = e(), y = [], v = !1;
        "string" == typeof t ? y = r(t) : (v = !0, e.each(t, function(e) {
            y[e] = r(this);
        })), "or" == s.filterLogic ? ("" == y[0] && y.shift(), 1 > y.length ? m = m.add(a.find(p + ":visible")) : d.each(function() {
            var t = e(this);
            if (v) {
                var n = 0;
                e.each(y, function() {
                    this.length ? t.is("." + this.join(", .")) && n++ : n > 0 && n++;
                }), n == y.length ? g = g.add(t) : m = m.add(t);
            } else t.is("." + y.join(", .")) ? g = g.add(t) : m = m.add(t);
        })) : (g = g.add(h.find(p + "." + y.join("."))), m = m.add(h.find(p + ":not(." + y.join(".") + "):visible"))), 
        t = g.length;
        var x = e(), b = e(), C = e();
        if (m.each(function() {
            var t = e(this);
            "none" != t.css("display") && (x = x.add(t), C = C.add(t));
        }), g.filter(":visible").length == t && !x.length && !i) {
            if (s.origLayout == s.layoutMode) return l(), !1;
            if (1 == g.length) return "list" == s.layoutMode ? (a.addClass(s.listClass), a.removeClass(s.gridClass), 
            C.css("display", s.targetDisplayList)) : (a.addClass(s.gridClass), a.removeClass(s.listClass), 
            C.css("display", s.targetDisplayGrid)), l(), !1;
        }
        if (s.origHeight = h.height(), g.length) {
            if (a.removeClass(s.failClass), g.each(function() {
                var t = e(this);
                "none" == t.css("display") ? b = b.add(t) : C = C.add(t);
            }), s.origLayout != s.layoutMode && 0 == s.animateGridList) return "list" == s.layoutMode ? (a.addClass(s.listClass), 
            a.removeClass(s.gridClass), C.css("display", s.targetDisplayList)) : (a.addClass(s.gridClass), 
            a.removeClass(s.listClass), C.css("display", s.targetDisplayGrid)), l(), !1;
            if (!window.atob) return l(), !1;
            if (d.css(s.clean), C.each(function() {
                this.data.origPos = e(this).offset();
            }), "list" == s.layoutMode ? (a.addClass(s.listClass), a.removeClass(s.gridClass), 
            b.css("display", s.targetDisplayList)) : (a.addClass(s.gridClass), a.removeClass(s.listClass), 
            b.css("display", s.targetDisplayGrid)), b.each(function() {
                this.data.showInterPos = e(this).offset();
            }), x.each(function() {
                this.data.hideInterPos = e(this).offset();
            }), C.each(function() {
                this.data.preInterPos = e(this).offset();
            }), "list" == s.layoutMode ? C.css("display", s.targetDisplayList) : C.css("display", s.targetDisplayGrid), 
            i && n(i, o, a, s), t = i) e: if (t = s.origSort, c = s.checkSort, t.length != c.length) t = !1; else {
                for (f = 0; f < c.length; f++) if (t[f].compare && !t[f].compare(c[f]) || t[f] !== c[f]) {
                    t = !1;
                    break e;
                }
                t = !0;
            }
            if (t) return l(), !1;
            for (x.hide(), b.each(function() {
                this.data.finalPos = e(this).offset();
            }), C.each(function() {
                this.data.finalPrePos = e(this).offset();
            }), s.newHeight = h.height(), i && n("reset", null, a, s), b.hide(), C.css("display", s.origDisplay), 
            "block" == s.origDisplay ? (a.addClass(s.listClass), b.css("display", s.targetDisplayList)) : (a.removeClass(s.listClass), 
            b.css("display", s.targetDisplayGrid)), s.resizeContainer && h.css("height", s.origHeight + "px"), 
            t = {}, c = 0; 2 > c; c++) f = 0 == c ? f = s.prefix : "", t[f + "transform"] = s.scale + " " + s.rotateX + " " + s.rotateY + " " + s.rotateZ, 
            t[f + "filter"] = s.blur + " " + s.grayscale;
            b.css(t), C.each(function() {
                var t = this.data, n = e(this);
                n.hasClass("mix_tohide") ? (t.preTX = t.origPos.left - t.hideInterPos.left, t.preTY = t.origPos.top - t.hideInterPos.top) : (t.preTX = t.origPos.left - t.preInterPos.left, 
                t.preTY = t.origPos.top - t.preInterPos.top);
                for (var r = {}, i = 0; 2 > i; i++) {
                    var o = 0 == i ? o = s.prefix : "";
                    r[o + "transform"] = "translate(" + t.preTX + "px," + t.preTY + "px)";
                }
                n.css(r);
            }), "list" == s.layoutMode ? (a.addClass(s.listClass), a.removeClass(s.gridClass)) : (a.addClass(s.gridClass), 
            a.removeClass(s.listClass)), setTimeout(function() {
                if (s.resizeContainer) {
                    for (var t = {}, n = 0; 2 > n; n++) {
                        var r = 0 == n ? r = s.prefix : "";
                        t[r + "transition"] = "all " + u + "ms ease-in-out", t.height = s.newHeight + "px";
                    }
                    h.css(t);
                }
                for (x.css("opacity", s.fade), b.css("opacity", 1), b.each(function() {
                    var t = this.data;
                    t.tX = t.finalPos.left - t.showInterPos.left, t.tY = t.finalPos.top - t.showInterPos.top;
                    for (var n = {}, r = 0; 2 > r; r++) {
                        var i = 0 == r ? i = s.prefix : "";
                        n[i + "transition-property"] = i + "transform, " + i + "filter, opacity", n[i + "transition-timing-function"] = s.easing + ", linear, linear", 
                        n[i + "transition-duration"] = u + "ms", n[i + "transition-delay"] = "0", n[i + "transform"] = "translate(" + t.tX + "px," + t.tY + "px)", 
                        n[i + "filter"] = "none";
                    }
                    e(this).css("-webkit-transition", "all " + u + "ms " + s.easingFallback).css(n);
                }), C.each(function() {
                    var t = this.data;
                    t.tX = 0 != t.finalPrePos.left ? t.finalPrePos.left - t.preInterPos.left : 0, t.tY = 0 != t.finalPrePos.left ? t.finalPrePos.top - t.preInterPos.top : 0;
                    for (var n = {}, r = 0; 2 > r; r++) {
                        var i = 0 == r ? i = s.prefix : "";
                        n[i + "transition"] = "all " + u + "ms " + s.easing, n[i + "transform"] = "translate(" + t.tX + "px," + t.tY + "px)";
                    }
                    e(this).css("-webkit-transition", "all " + u + "ms " + s.easingFallback).css(n);
                }), t = {}, n = 0; 2 > n; n++) r = 0 == n ? r = s.prefix : "", t[r + "transition"] = "all " + u + "ms " + s.easing + ", " + r + "filter " + u + "ms linear, opacity " + u + "ms linear", 
                t[r + "transform"] = s.scale + " " + s.rotateX + " " + s.rotateY + " " + s.rotateZ, 
                t[r + "filter"] = s.blur + " " + s.grayscale, t.opacity = s.fade;
                x.css(t), h.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(t) {
                    (-1 < t.originalEvent.propertyName.indexOf("transform") || -1 < t.originalEvent.propertyName.indexOf("opacity")) && (-1 < p.indexOf(".") ? e(t.target).hasClass(p.replace(".", "")) && l() : e(t.target).is(p) && l());
                });
            }, 10), s.failsafe = setTimeout(function() {
                s.mixing && l();
            }, u + 400);
        } else {
            if (s.resizeContainer && h.css("height", s.origHeight + "px"), !window.atob) return l(), 
            !1;
            x = m, setTimeout(function() {
                if (h.css(s.perspective), s.resizeContainer) {
                    for (var e = {}, t = 0; 2 > t; t++) {
                        var n = 0 == t ? n = s.prefix : "";
                        e[n + "transition"] = "height " + u + "ms ease-in-out", e.height = s.minHeight + "px";
                    }
                    h.css(e);
                }
                if (d.css(s.transition), m.length) {
                    for (e = {}, t = 0; 2 > t; t++) n = 0 == t ? n = s.prefix : "", e[n + "transform"] = s.scale + " " + s.rotateX + " " + s.rotateY + " " + s.rotateZ, 
                    e[n + "filter"] = s.blur + " " + s.grayscale, e.opacity = s.fade;
                    x.css(e), h.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd", function(e) {
                        (-1 < e.originalEvent.propertyName.indexOf("transform") || -1 < e.originalEvent.propertyName.indexOf("opacity")) && (a.addClass(s.failClass), 
                        l());
                    });
                } else s.mixing = !1;
            }, 10);
        }
    }
    function n(t, n, r, i) {
        function o(e, n) {
            var r = isNaN(1 * e.attr(t)) ? e.attr(t).toLowerCase() : 1 * e.attr(t), i = isNaN(1 * n.attr(t)) ? n.attr(t).toLowerCase() : 1 * n.attr(t);
            return i > r ? -1 : r > i ? 1 : 0;
        }
        function a(e) {
            "asc" == n ? s.prepend(e).prepend(" ") : s.append(e).append(" ");
        }
        r.find(i.targetSelector).wrapAll('<div class="mix_sorter"/>');
        var s = r.find(".mix_sorter");
        if (i.origSort.length || s.find(i.targetSelector + ":visible").each(function() {
            e(this).wrap("<s/>"), i.origSort.push(e(this).parent().html().replace(/\s+/g, "")), 
            e(this).unwrap();
        }), s.empty(), "reset" == t) e.each(i.startOrder, function() {
            s.append(this).append(" ");
        }); else if ("default" == t) e.each(i.origOrder, function() {
            a(this);
        }); else if ("random" == t) {
            if (!i.newOrder.length) {
                for (var l = i.startOrder.slice(), c = l.length, u = c; u--; ) {
                    var f = parseInt(Math.random() * c), p = l[u];
                    l[u] = l[f], l[f] = p;
                }
                i.newOrder = l;
            }
            e.each(i.newOrder, function() {
                s.append(this).append(" ");
            });
        } else if ("custom" == t) e.each(n, function() {
            a(this);
        }); else {
            if ("undefined" == typeof i.origOrder[0].attr(t)) return console.log("No such attribute found. Terminating"), 
            !1;
            i.newOrder.length || (e.each(i.origOrder, function() {
                i.newOrder.push(e(this));
            }), i.newOrder.sort(o)), e.each(i.newOrder, function() {
                a(this);
            });
        }
        i.checkSort = [], s.find(i.targetSelector + ":visible").each(function(t) {
            var n = e(this);
            0 == t && n.attr("data-checksum", "1"), n.wrap("<s/>"), i.checkSort.push(n.parent().html().replace(/\s+/g, "")), 
            n.unwrap();
        }), r.find(i.targetSelector).unwrap();
    }
    function r(t) {
        t = t.replace(/\s{2,}/g, " ");
        var n = t.split(" ");
        return e.each(n, function(e) {
            "all" == this && (n[e] = "mix_all");
        }), "" == n[0] && n.shift(), n;
    }
    var i = {
        init: function(r) {
            return this.each(function() {
                var i = {
                    targetSelector: ".mix",
                    filterSelector: ".filter",
                    sortSelector: ".sort",
                    buttonEvent: "click",
                    effects: [ "fade", "scale" ],
                    listEffects: null,
                    easing: "smooth",
                    layoutMode: "grid",
                    targetDisplayGrid: "inline-block",
                    targetDisplayList: "block",
                    listClass: "",
                    gridClass: "",
                    transitionSpeed: 600,
                    showOnLoad: "all",
                    sortOnLoad: !1,
                    multiFilter: !1,
                    filterLogic: "or",
                    resizeContainer: !0,
                    minHeight: 0,
                    failClass: "fail",
                    perspectiveDistance: "3000",
                    perspectiveOrigin: "50% 50%",
                    animateGridList: !0,
                    onMixLoad: null,
                    onMixStart: null,
                    onMixEnd: null,
                    container: null,
                    origOrder: [],
                    startOrder: [],
                    newOrder: [],
                    origSort: [],
                    checkSort: [],
                    filter: "",
                    mixing: !1,
                    origDisplay: "",
                    origLayout: "",
                    origHeight: 0,
                    newHeight: 0,
                    isTouch: !1,
                    resetDelay: 0,
                    failsafe: null,
                    prefix: "",
                    easingFallback: "ease-in-out",
                    transition: {},
                    perspective: {},
                    clean: {},
                    fade: "1",
                    scale: "",
                    rotateX: "",
                    rotateY: "",
                    rotateZ: "",
                    blur: "",
                    grayscale: ""
                };
                r && e.extend(i, r), this.config = i, e.support.touch = "ontouchend" in document, 
                e.support.touch && (i.isTouch = !0, i.resetDelay = 350), i.container = e(this);
                var o, a = i.container;
                e: {
                    o = a[0];
                    for (var s = [ "Webkit", "Moz", "O", "ms" ], l = 0; l < s.length; l++) if (s[l] + "Transition" in o.style) {
                        o = s[l];
                        break e;
                    }
                    o = "transition" in o.style ? "" : !1;
                }
                if (i.prefix = o, i.prefix = i.prefix ? "-" + i.prefix.toLowerCase() + "-" : "", 
                a.find(i.targetSelector).each(function() {
                    i.origOrder.push(e(this));
                }), i.sortOnLoad) {
                    var c;
                    e.isArray(i.sortOnLoad) ? (o = i.sortOnLoad[0], c = i.sortOnLoad[1], e(i.sortSelector + "[data-sort=" + i.sortOnLoad[0] + "][data-order=" + i.sortOnLoad[1] + "]").addClass("active")) : (e(i.sortSelector + "[data-sort=" + i.sortOnLoad + "]").addClass("active"), 
                    o = i.sortOnLoad, i.sortOnLoad = "desc"), n(o, c, a, i);
                }
                for (c = 0; 2 > c; c++) o = 0 == c ? o = i.prefix : "", i.transition[o + "transition"] = "all " + i.transitionSpeed + "ms ease-in-out", 
                i.perspective[o + "perspective"] = i.perspectiveDistance + "px", i.perspective[o + "perspective-origin"] = i.perspectiveOrigin;
                for (c = 0; 2 > c; c++) o = 0 == c ? o = i.prefix : "", i.clean[o + "transition"] = "none";
                "list" == i.layoutMode ? (a.addClass(i.listClass), i.origDisplay = i.targetDisplayList) : (a.addClass(i.gridClass), 
                i.origDisplay = i.targetDisplayGrid), i.origLayout = i.layoutMode, c = i.showOnLoad.split(" "), 
                e.each(c, function() {
                    e(i.filterSelector + '[data-filter="' + this + '"]').addClass("active");
                }), a.find(i.targetSelector).addClass("mix_all"), "all" == c[0] && (c[0] = "mix_all", 
                i.showOnLoad = "mix_all");
                var u = e();
                e.each(c, function() {
                    u = u.add(e("." + this));
                }), u.each(function() {
                    var t = e(this);
                    "list" == i.layoutMode ? t.css("display", i.targetDisplayList) : t.css("display", i.targetDisplayGrid), 
                    t.css(i.transition);
                }), setTimeout(function() {
                    i.mixing = !0, u.css("opacity", "1"), setTimeout(function() {
                        if (u.removeStyle(i.prefix + "transition, transition").css("list" == i.layoutMode ? {
                            display: i.targetDisplayList,
                            opacity: 1
                        } : {
                            display: i.targetDisplayGrid,
                            opacity: 1
                        }), i.mixing = !1, "function" == typeof i.onMixLoad) {
                            var e = i.onMixLoad.call(this, i);
                            i = e ? e : i;
                        }
                    }, i.transitionSpeed);
                }, 10), i.filter = i.showOnLoad, e(i.sortSelector).bind(i.buttonEvent, function() {
                    if (!i.mixing) {
                        var n = e(this), r = n.attr("data-sort"), o = n.attr("data-order");
                        if (n.hasClass("active")) {
                            if ("random" != r) return !1;
                        } else e(i.sortSelector).removeClass("active"), n.addClass("active");
                        a.find(i.targetSelector).each(function() {
                            i.startOrder.push(e(this));
                        }), t(i.filter, r, o, a, i);
                    }
                }), e(i.filterSelector).bind(i.buttonEvent, function() {
                    if (!i.mixing) {
                        var n = e(this);
                        if (0 == i.multiFilter) e(i.filterSelector).removeClass("active"), n.addClass("active"), 
                        i.filter = n.attr("data-filter"), e(i.filterSelector + '[data-filter="' + i.filter + '"]').addClass("active"); else {
                            var r = n.attr("data-filter");
                            n.hasClass("active") ? (n.removeClass("active"), i.filter = i.filter.replace(RegExp("(\\s|^)" + r), "")) : (n.addClass("active"), 
                            i.filter = i.filter + " " + r);
                        }
                        t(i.filter, null, null, a, i);
                    }
                });
            });
        },
        toGrid: function() {
            return this.each(function() {
                var n = this.config;
                "grid" != n.layoutMode && (n.layoutMode = "grid", t(n.filter, null, null, e(this), n));
            });
        },
        toList: function() {
            return this.each(function() {
                var n = this.config;
                "list" != n.layoutMode && (n.layoutMode = "list", t(n.filter, null, null, e(this), n));
            });
        },
        filter: function(n) {
            return this.each(function() {
                var r = this.config;
                r.mixing || (e(r.filterSelector).removeClass("active"), e(r.filterSelector + '[data-filter="' + n + '"]').addClass("active"), 
                t(n, null, null, e(this), r));
            });
        },
        sort: function(n) {
            return this.each(function() {
                var r = this.config, i = e(this);
                if (!r.mixing) {
                    if (e(r.sortSelector).removeClass("active"), e.isArray(n)) {
                        var o = n[0], a = n[1];
                        e(r.sortSelector + '[data-sort="' + n[0] + '"][data-order="' + n[1] + '"]').addClass("active");
                    } else e(r.sortSelector + '[data-sort="' + n + '"]').addClass("active"), o = n, 
                    a = "desc";
                    i.find(r.targetSelector).each(function() {
                        r.startOrder.push(e(this));
                    }), t(r.filter, o, a, i, r);
                }
            });
        },
        multimix: function(n) {
            return this.each(function() {
                var r = this.config, i = e(this);
                multiOut = {
                    filter: r.filter,
                    sort: null,
                    order: "desc",
                    layoutMode: r.layoutMode
                }, e.extend(multiOut, n), r.mixing || (e(r.filterSelector).add(r.sortSelector).removeClass("active"), 
                e(r.filterSelector + '[data-filter="' + multiOut.filter + '"]').addClass("active"), 
                "undefined" != typeof multiOut.sort && (e(r.sortSelector + '[data-sort="' + multiOut.sort + '"][data-order="' + multiOut.order + '"]').addClass("active"), 
                i.find(r.targetSelector).each(function() {
                    r.startOrder.push(e(this));
                })), r.layoutMode = multiOut.layoutMode, t(multiOut.filter, multiOut.sort, multiOut.order, i, r));
            });
        },
        remix: function(n) {
            return this.each(function() {
                var r = this.config, i = e(this);
                r.origOrder = [], i.find(r.targetSelector).each(function() {
                    var t = e(this);
                    t.addClass("mix_all"), r.origOrder.push(t);
                }), !r.mixing && "undefined" != typeof n && (e(r.filterSelector).removeClass("active"), 
                e(r.filterSelector + '[data-filter="' + n + '"]').addClass("active"), t(n, null, null, i, r));
            });
        }
    };
    e.fn.mixitup = function(e) {
        return i[e] ? i[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void 0 : i.init.apply(this, arguments);
    }, e.fn.removeStyle = function(t) {
        return this.each(function() {
            var n = e(this);
            t = t.replace(/\s+/g, "");
            var r = t.split(",");
            e.each(r, function() {
                var e = RegExp(this.toString() + "[^;]+;?", "g");
                n.attr("style", function(t, n) {
                    return n ? n.replace(e, "") : void 0;
                });
            });
        });
    };
}(jQuery), $(function() {
    FastClick.attach(document.body);
});

var loadMoreContent = "";

$("a.load-more").click(function(e) {
    e.preventDefault(), "" == loadMoreContent && (loadMoreContent = $(this).prev().html()), 
    $(this).prev().append(loadMoreContent);
}), $(".item-choice a").click(function(e) {
    e.preventDefault();
}), $("#Grid").mixitup(), $(".col-right").on("click", ".sidebarArticle", function(e) {
    e.preventDefault();
    var t = $(this).attr("data-articleId");
    $.ajax({
        url: "/ajaxArticles",
        dataType: "json",
        type: "GET",
        data: {
            ajax: "ajax",
            id: t
        },
        success: function(t) {
            $("#articleContent").empty().html(t), e.preventDefault(), $.smoothScroll({
                offset: 0
            });
        },
        error: function(e) {
            console.log(e);
        }
    });
}), $("#moreArticles").click(function(e) {
    e.preventDefault(), $.ajax({
        type: "GET",
        url: "/getMoreArticles",
        dataType: "json",
        data: {
            offset: offset
        },
        success: function(e) {
            offset += 2, $("#sideContent").append(e);
        },
        error: function() {
            console.log("error!");
        }
    });
});