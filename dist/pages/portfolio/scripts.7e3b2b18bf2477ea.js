"use strict";
!function (P, Ue) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = P.document ? Ue(P, !0) : function (xe) { if (!xe.document)
        throw new Error("jQuery requires a window with a document"); return Ue(xe); } : Ue(P);
}(typeof window < "u" ? window : this, function (P, Ue) {
    "use strict";
    var xe = [], vn = Object.getPrototypeOf, s = xe.slice, Lt = xe.flat ? function (e) { return xe.flat.call(e); } : function (e) { return xe.concat.apply([], e); }, en = xe.push, _e = xe.indexOf, te = {}, tn = te.toString, dt = te.hasOwnProperty, O = dt.toString, yn = O.call(Object), K = {}, B = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item; }, Ge = function (e) { return null != e && e === e.window; }, X = P.document, Qe = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function _n(e, t, n) { var i, a, u = (n = n || X).createElement("script"); if (u.text = e, t)
        for (i in Qe)
            (a = t[i] || t.getAttribute && t.getAttribute(i)) && u.setAttribute(i, a); n.head.appendChild(u).parentNode.removeChild(u); }
    function Je(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? te[tn.call(e)] || "object" : typeof e; }
    var o = function (e, t) { return new o.fn.init(e, t); };
    function Ze(e) { var t = !!e && "length" in e && e.length, n = Je(e); return !B(e) && !Ge(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e); }
    o.fn = o.prototype = { jquery: "3.6.3", constructor: o, length: 0, toArray: function () { return s.call(this); }, get: function (e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]; }, pushStack: function (e) { var t = o.merge(this.constructor(), e); return t.prevObject = this, t; }, each: function (e) { return o.each(this, e); }, map: function (e) { return this.pushStack(o.map(this, function (t, n) { return e.call(t, n, t); })); }, slice: function () { return this.pushStack(s.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, even: function () { return this.pushStack(o.grep(this, function (e, t) { return (t + 1) % 2; })); }, odd: function () { return this.pushStack(o.grep(this, function (e, t) { return t % 2; })); }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: en, sort: xe.sort, splice: xe.splice }, o.extend = o.fn.extend = function () { var e, t, n, i, a, u, c = arguments[0] || {}, g = 1, p = arguments.length, y = !1; for ("boolean" == typeof c && (y = c, c = arguments[g] || {}, g++), "object" == typeof c || B(c) || (c = {}), g === p && (c = this, g--); g < p; g++)
        if (null != (e = arguments[g]))
            for (t in e)
                i = e[t], "__proto__" !== t && c !== i && (y && i && (o.isPlainObject(i) || (a = Array.isArray(i))) ? (n = c[t], u = a && !Array.isArray(n) ? [] : a || o.isPlainObject(n) ? n : {}, a = !1, c[t] = o.extend(y, u, i)) : void 0 !== i && (c[t] = i)); return c; }, o.extend({ expando: "jQuery" + ("3.6.3" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e); }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== tn.call(e) || (t = vn(e)) && ("function" != typeof (n = dt.call(t, "constructor") && t.constructor) || O.call(n) !== yn)); }, isEmptyObject: function (e) { var t; for (t in e)
            return !1; return !0; }, globalEval: function (e, t, n) { _n(e, { nonce: t && t.nonce }, n); }, each: function (e, t) { var n, i = 0; if (Ze(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                ;
        else
            for (i in e)
                if (!1 === t.call(e[i], i, e[i]))
                    break; return e; }, makeArray: function (e, t) { var n = t || []; return null != e && (Ze(Object(e)) ? o.merge(n, "string" == typeof e ? [e] : e) : en.call(n, e)), n; }, inArray: function (e, t, n) { return null == t ? -1 : _e.call(t, e, n); }, merge: function (e, t) { for (var n = +t.length, i = 0, a = e.length; i < n; i++)
            e[a++] = t[i]; return e.length = a, e; }, grep: function (e, t, n) { for (var i = [], a = 0, u = e.length, c = !n; a < u; a++)
            !t(e[a], a) !== c && i.push(e[a]); return i; }, map: function (e, t, n) { var i, a, u = 0, c = []; if (Ze(e))
            for (i = e.length; u < i; u++)
                null != (a = t(e[u], u, n)) && c.push(a);
        else
            for (u in e)
                null != (a = t(e[u], u, n)) && c.push(a); return Lt(c); }, guid: 1, support: K }), "function" == typeof Symbol && (o.fn[Symbol.iterator] = xe[Symbol.iterator]), o.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { te["[object " + t + "]"] = t.toLowerCase(); });
    var Re = function (e) { var t, n, i, a, u, c, g, p, y, x, k, T, C, L, R, q, re, de, je, ee = "sizzle" + 1 * new Date, Q = e.document, ke = 0, Y = 0, oe = oi(), Mn = oi(), ni = oi(), Ie = oi(), Jt = function (f, h) { return f === h && (k = !0), 0; }, pn = {}.hasOwnProperty, Ae = [], gn = Ae.pop, Be = Ae.push, ae = Ae.push, Oe = Ae.slice, Le = function (f, h) { for (var v = 0, S = f.length; v < S; v++)
        if (f[v] === h)
            return v; return -1; }, ct = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", G = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", he = "\\[" + $ + "*(" + G + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + G + "))|)" + $ + "*\\]", qe = ":(" + G + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + he + ")*)|.*)\\)|)", le = new RegExp($ + "+", "g"), Pe = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"), mn = new RegExp("^" + $ + "*," + $ + "*"), ii = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), Fi = new RegExp($ + "|>"), Mi = new RegExp(qe), Bi = new RegExp("^" + G + "$"), ri = { ID: new RegExp("^#(" + G + ")"), CLASS: new RegExp("^\\.(" + G + ")"), TAG: new RegExp("^(" + G + "|[*])"), ATTR: new RegExp("^" + he), PSEUDO: new RegExp("^" + qe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"), bool: new RegExp("^(?:" + ct + ")$", "i"), needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i") }, Wi = /HTML$/i, Ui = /^(?:input|select|textarea|button)$/i, Qi = /^h\d$/i, Bn = /^[^{]+\{\s*\[native \w/, $i = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ti = /[+~]/, Et = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])", "g"), xt = function (f, h) { var v = "0x" + f.slice(1) - 65536; return h || (v < 0 ? String.fromCharCode(v + 65536) : String.fromCharCode(v >> 10 | 55296, 1023 & v | 56320)); }, Ai = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Ni = function (f, h) { return h ? "\0" === f ? "\ufffd" : f.slice(0, -1) + "\\" + f.charCodeAt(f.length - 1).toString(16) + " " : "\\" + f; }, Di = function () { T(); }, zi = si(function (f) { return !0 === f.disabled && "fieldset" === f.nodeName.toLowerCase(); }, { dir: "parentNode", next: "legend" }); try {
        ae.apply(Ae = Oe.call(Q.childNodes), Q.childNodes);
    }
    catch (_a) {
        ae = { apply: Ae.length ? function (h, v) { Be.apply(h, Oe.call(v)); } : function (h, v) { for (var S = h.length, w = 0; h[S++] = v[w++];)
                ; h.length = S - 1; } };
    } function ne(f, h, v, S) { var w, A, N, D, I, U, M, W = h && h.ownerDocument, V = h ? h.nodeType : 9; if (v = v || [], "string" != typeof f || !f || 1 !== V && 9 !== V && 11 !== V)
        return v; if (!S && (T(h), h = h || C, R)) {
        if (11 !== V && (I = $i.exec(f)))
            if (w = I[1]) {
                if (9 === V) {
                    if (!(N = h.getElementById(w)))
                        return v;
                    if (N.id === w)
                        return v.push(N), v;
                }
                else if (W && (N = W.getElementById(w)) && je(h, N) && N.id === w)
                    return v.push(N), v;
            }
            else {
                if (I[2])
                    return ae.apply(v, h.getElementsByTagName(f)), v;
                if ((w = I[3]) && n.getElementsByClassName && h.getElementsByClassName)
                    return ae.apply(v, h.getElementsByClassName(w)), v;
            }
        if (n.qsa && !Ie[f + " "] && (!q || !q.test(f)) && (1 !== V || "object" !== h.nodeName.toLowerCase())) {
            if (M = f, W = h, 1 === V && (Fi.test(f) || ii.test(f))) {
                for ((W = Ti.test(f) && xi(h.parentNode) || h) === h && n.scope || ((D = h.getAttribute("id")) ? D = D.replace(Ai, Ni) : h.setAttribute("id", D = ee)), A = (U = c(f)).length; A--;)
                    U[A] = (D ? "#" + D : ":scope") + " " + ai(U[A]);
                M = U.join(",");
            }
            try {
                if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + M + "))"))
                    throw new Error;
                return ae.apply(v, W.querySelectorAll(M)), v;
            }
            catch (_a) {
                Ie(f, !0);
            }
            finally {
                D === ee && h.removeAttribute("id");
            }
        }
    } return p(f.replace(Pe, "$1"), h, v, S); } function oi() { var f = []; return function h(v, S) { return f.push(v + " ") > i.cacheLength && delete h[f.shift()], h[v + " "] = S; }; } function Ye(f) { return f[ee] = !0, f; } function We(f) { var h = C.createElement("fieldset"); try {
        return !!f(h);
    }
    catch (_a) {
        return !1;
    }
    finally {
        h.parentNode && h.parentNode.removeChild(h), h = null;
    } } function Ei(f, h) { for (var v = f.split("|"), S = v.length; S--;)
        i.attrHandle[v[S]] = h; } function ji(f, h) { var v = h && f, S = v && 1 === f.nodeType && 1 === h.nodeType && f.sourceIndex - h.sourceIndex; if (S)
        return S; if (v)
        for (; v = v.nextSibling;)
            if (v === h)
                return -1; return f ? 1 : -1; } function Xi(f) { return function (h) { return "input" === h.nodeName.toLowerCase() && h.type === f; }; } function Vi(f) { return function (h) { var v = h.nodeName.toLowerCase(); return ("input" === v || "button" === v) && h.type === f; }; } function Ii(f) { return function (h) { return "form" in h ? h.parentNode && !1 === h.disabled ? "label" in h ? "label" in h.parentNode ? h.parentNode.disabled === f : h.disabled === f : h.isDisabled === f || h.isDisabled !== !f && zi(h) === f : h.disabled === f : "label" in h && h.disabled === f; }; } function Zt(f) { return Ye(function (h) { return h = +h, Ye(function (v, S) { for (var w, A = f([], v.length, h), N = A.length; N--;)
        v[w = A[N]] && (v[w] = !(S[w] = v[w])); }); }); } function xi(f) { return f && typeof f.getElementsByTagName < "u" && f; } for (t in n = ne.support = {}, u = ne.isXML = function (f) { var v = f && (f.ownerDocument || f).documentElement; return !Wi.test(f && f.namespaceURI || v && v.nodeName || "HTML"); }, T = ne.setDocument = function (f) { var h, v, S = f ? f.ownerDocument || f : Q; return S != C && 9 === S.nodeType && S.documentElement && (L = (C = S).documentElement, R = !u(C), Q != C && (v = C.defaultView) && v.top !== v && (v.addEventListener ? v.addEventListener("unload", Di, !1) : v.attachEvent && v.attachEvent("onunload", Di)), n.scope = We(function (w) { return L.appendChild(w).appendChild(C.createElement("div")), typeof w.querySelectorAll < "u" && !w.querySelectorAll(":scope fieldset div").length; }), n.cssSupportsSelector = We(function () { return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))"); }), n.attributes = We(function (w) { return w.className = "i", !w.getAttribute("className"); }), n.getElementsByTagName = We(function (w) { return w.appendChild(C.createComment("")), !w.getElementsByTagName("*").length; }), n.getElementsByClassName = Bn.test(C.getElementsByClassName), n.getById = We(function (w) { return L.appendChild(w).id = ee, !C.getElementsByName || !C.getElementsByName(ee).length; }), n.getById ? (i.filter.ID = function (w) { var A = w.replace(Et, xt); return function (N) { return N.getAttribute("id") === A; }; }, i.find.ID = function (w, A) { if (typeof A.getElementById < "u" && R) {
        var N = A.getElementById(w);
        return N ? [N] : [];
    } }) : (i.filter.ID = function (w) { var A = w.replace(Et, xt); return function (N) { var D = typeof N.getAttributeNode < "u" && N.getAttributeNode("id"); return D && D.value === A; }; }, i.find.ID = function (w, A) { if (typeof A.getElementById < "u" && R) {
        var N, D, I, U = A.getElementById(w);
        if (U) {
            if ((N = U.getAttributeNode("id")) && N.value === w)
                return [U];
            for (I = A.getElementsByName(w), D = 0; U = I[D++];)
                if ((N = U.getAttributeNode("id")) && N.value === w)
                    return [U];
        }
        return [];
    } }), i.find.TAG = n.getElementsByTagName ? function (w, A) { return typeof A.getElementsByTagName < "u" ? A.getElementsByTagName(w) : n.qsa ? A.querySelectorAll(w) : void 0; } : function (w, A) { var N, D = [], I = 0, U = A.getElementsByTagName(w); if ("*" === w) {
        for (; N = U[I++];)
            1 === N.nodeType && D.push(N);
        return D;
    } return U; }, i.find.CLASS = n.getElementsByClassName && function (w, A) { if (typeof A.getElementsByClassName < "u" && R)
        return A.getElementsByClassName(w); }, re = [], q = [], (n.qsa = Bn.test(C.querySelectorAll)) && (We(function (w) { var A; L.appendChild(w).innerHTML = "<a id='" + ee + "'></a><select id='" + ee + "-\r\\' msallowcapture=''><option selected=''></option></select>", w.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + $ + "*(?:''|\"\")"), w.querySelectorAll("[selected]").length || q.push("\\[" + $ + "*(?:value|" + ct + ")"), w.querySelectorAll("[id~=" + ee + "-]").length || q.push("~="), (A = C.createElement("input")).setAttribute("name", ""), w.appendChild(A), w.querySelectorAll("[name='']").length || q.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"), w.querySelectorAll(":checked").length || q.push(":checked"), w.querySelectorAll("a#" + ee + "+*").length || q.push(".#.+[+~]"), w.querySelectorAll("\\\f"), q.push("[\\r\\n\\f]"); }), We(function (w) { w.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var A = C.createElement("input"); A.setAttribute("type", "hidden"), w.appendChild(A).setAttribute("name", "D"), w.querySelectorAll("[name=d]").length && q.push("name" + $ + "*[*^$|!~]?="), 2 !== w.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), L.appendChild(w).disabled = !0, 2 !== w.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), w.querySelectorAll("*,:x"), q.push(",.*:"); })), (n.matchesSelector = Bn.test(de = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && We(function (w) { n.disconnectedMatch = de.call(w, "*"), de.call(w, "[s!='']:x"), re.push("!=", qe); }), n.cssSupportsSelector || q.push(":has"), q = q.length && new RegExp(q.join("|")), re = re.length && new RegExp(re.join("|")), h = Bn.test(L.compareDocumentPosition), je = h || Bn.test(L.contains) ? function (w, A) { var N = 9 === w.nodeType && w.documentElement || w, D = A && A.parentNode; return w === D || !(!D || 1 !== D.nodeType || !(N.contains ? N.contains(D) : w.compareDocumentPosition && 16 & w.compareDocumentPosition(D))); } : function (w, A) { if (A)
        for (; A = A.parentNode;)
            if (A === w)
                return !0; return !1; }, Jt = h ? function (w, A) { if (w === A)
        return k = !0, 0; var N = !w.compareDocumentPosition - !A.compareDocumentPosition; return N || (1 & (N = (w.ownerDocument || w) == (A.ownerDocument || A) ? w.compareDocumentPosition(A) : 1) || !n.sortDetached && A.compareDocumentPosition(w) === N ? w == C || w.ownerDocument == Q && je(Q, w) ? -1 : A == C || A.ownerDocument == Q && je(Q, A) ? 1 : x ? Le(x, w) - Le(x, A) : 0 : 4 & N ? -1 : 1); } : function (w, A) { if (w === A)
        return k = !0, 0; var N, D = 0, I = w.parentNode, U = A.parentNode, M = [w], W = [A]; if (!I || !U)
        return w == C ? -1 : A == C ? 1 : I ? -1 : U ? 1 : x ? Le(x, w) - Le(x, A) : 0; if (I === U)
        return ji(w, A); for (N = w; N = N.parentNode;)
        M.unshift(N); for (N = A; N = N.parentNode;)
        W.unshift(N); for (; M[D] === W[D];)
        D++; return D ? ji(M[D], W[D]) : M[D] == Q ? -1 : W[D] == Q ? 1 : 0; }), C; }, ne.matches = function (f, h) { return ne(f, null, null, h); }, ne.matchesSelector = function (f, h) { if (T(f), n.matchesSelector && R && !Ie[h + " "] && (!re || !re.test(h)) && (!q || !q.test(h)))
        try {
            var v = de.call(f, h);
            if (v || n.disconnectedMatch || f.document && 11 !== f.document.nodeType)
                return v;
        }
        catch (_a) {
            Ie(h, !0);
        } return 0 < ne(h, C, null, [f]).length; }, ne.contains = function (f, h) { return (f.ownerDocument || f) != C && T(f), je(f, h); }, ne.attr = function (f, h) { (f.ownerDocument || f) != C && T(f); var v = i.attrHandle[h.toLowerCase()], S = v && pn.call(i.attrHandle, h.toLowerCase()) ? v(f, h, !R) : void 0; return void 0 !== S ? S : n.attributes || !R ? f.getAttribute(h) : (S = f.getAttributeNode(h)) && S.specified ? S.value : null; }, ne.escape = function (f) { return (f + "").replace(Ai, Ni); }, ne.error = function (f) { throw new Error("Syntax error, unrecognized expression: " + f); }, ne.uniqueSort = function (f) { var h, v = [], S = 0, w = 0; if (k = !n.detectDuplicates, x = !n.sortStable && f.slice(0), f.sort(Jt), k) {
        for (; h = f[w++];)
            h === f[w] && (S = v.push(w));
        for (; S--;)
            f.splice(v[S], 1);
    } return x = null, f; }, a = ne.getText = function (f) { var h, v = "", S = 0, w = f.nodeType; if (w) {
        if (1 === w || 9 === w || 11 === w) {
            if ("string" == typeof f.textContent)
                return f.textContent;
            for (f = f.firstChild; f; f = f.nextSibling)
                v += a(f);
        }
        else if (3 === w || 4 === w)
            return f.nodeValue;
    }
    else
        for (; h = f[S++];)
            v += a(h); return v; }, (i = ne.selectors = { cacheLength: 50, createPseudo: Ye, match: ri, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (f) { return f[1] = f[1].replace(Et, xt), f[3] = (f[3] || f[4] || f[5] || "").replace(Et, xt), "~=" === f[2] && (f[3] = " " + f[3] + " "), f.slice(0, 4); }, CHILD: function (f) { return f[1] = f[1].toLowerCase(), "nth" === f[1].slice(0, 3) ? (f[3] || ne.error(f[0]), f[4] = +(f[4] ? f[5] + (f[6] || 1) : 2 * ("even" === f[3] || "odd" === f[3])), f[5] = +(f[7] + f[8] || "odd" === f[3])) : f[3] && ne.error(f[0]), f; }, PSEUDO: function (f) { var h, v = !f[6] && f[2]; return ri.CHILD.test(f[0]) ? null : (f[3] ? f[2] = f[4] || f[5] || "" : v && Mi.test(v) && (h = c(v, !0)) && (h = v.indexOf(")", v.length - h) - v.length) && (f[0] = f[0].slice(0, h), f[2] = v.slice(0, h)), f.slice(0, 3)); } }, filter: { TAG: function (f) { var h = f.replace(Et, xt).toLowerCase(); return "*" === f ? function () { return !0; } : function (v) { return v.nodeName && v.nodeName.toLowerCase() === h; }; }, CLASS: function (f) { var h = oe[f + " "]; return h || (h = new RegExp("(^|" + $ + ")" + f + "(" + $ + "|$)")) && oe(f, function (v) { return h.test("string" == typeof v.className && v.className || typeof v.getAttribute < "u" && v.getAttribute("class") || ""); }); }, ATTR: function (f, h, v) { return function (S) { var w = ne.attr(S, f); return null == w ? "!=" === h : !h || (w += "", "=" === h ? w === v : "!=" === h ? w !== v : "^=" === h ? v && 0 === w.indexOf(v) : "*=" === h ? v && -1 < w.indexOf(v) : "$=" === h ? v && w.slice(-v.length) === v : "~=" === h ? -1 < (" " + w.replace(le, " ") + " ").indexOf(v) : "|=" === h && (w === v || w.slice(0, v.length + 1) === v + "-")); }; }, CHILD: function (f, h, v, S, w) { var A = "nth" !== f.slice(0, 3), N = "last" !== f.slice(-4), D = "of-type" === h; return 1 === S && 0 === w ? function (I) { return !!I.parentNode; } : function (I, U, M) { var W, V, se, z, pe, ge, Ee = A !== N ? "nextSibling" : "previousSibling", ie = I.parentNode, ft = D && I.nodeName.toLowerCase(), be = !M && !D, ue = !1; if (ie) {
                if (A) {
                    for (; Ee;) {
                        for (z = I; z = z[Ee];)
                            if (D ? z.nodeName.toLowerCase() === ft : 1 === z.nodeType)
                                return !1;
                        ge = Ee = "only" === f && !ge && "nextSibling";
                    }
                    return !0;
                }
                if (ge = [N ? ie.firstChild : ie.lastChild], N && be) {
                    for (ue = (pe = (W = (V = (se = (z = ie)[ee] || (z[ee] = {}))[z.uniqueID] || (se[z.uniqueID] = {}))[f] || [])[0] === ke && W[1]) && W[2], z = pe && ie.childNodes[pe]; z = ++pe && z && z[Ee] || (ue = pe = 0) || ge.pop();)
                        if (1 === z.nodeType && ++ue && z === I) {
                            V[f] = [ke, pe, ue];
                            break;
                        }
                }
                else if (be && (ue = pe = (W = (V = (se = (z = I)[ee] || (z[ee] = {}))[z.uniqueID] || (se[z.uniqueID] = {}))[f] || [])[0] === ke && W[1]), !1 === ue)
                    for (; (z = ++pe && z && z[Ee] || (ue = pe = 0) || ge.pop()) && ((D ? z.nodeName.toLowerCase() !== ft : 1 !== z.nodeType) || !++ue || (be && ((V = (se = z[ee] || (z[ee] = {}))[z.uniqueID] || (se[z.uniqueID] = {}))[f] = [ke, ue]), z !== I));)
                        ;
                return (ue -= w) === S || ue % S == 0 && 0 <= ue / S;
            } }; }, PSEUDO: function (f, h) { var v, S = i.pseudos[f] || i.setFilters[f.toLowerCase()] || ne.error("unsupported pseudo: " + f); return S[ee] ? S(h) : 1 < S.length ? (v = [f, f, "", h], i.setFilters.hasOwnProperty(f.toLowerCase()) ? Ye(function (w, A) { for (var N, D = S(w, h), I = D.length; I--;)
                w[N = Le(w, D[I])] = !(A[N] = D[I]); }) : function (w) { return S(w, 0, v); }) : S; } }, pseudos: { not: Ye(function (f) { var h = [], v = [], S = g(f.replace(Pe, "$1")); return S[ee] ? Ye(function (w, A, N, D) { for (var I, U = S(w, null, D, []), M = w.length; M--;)
                (I = U[M]) && (w[M] = !(A[M] = I)); }) : function (w, A, N) { return h[0] = w, S(h, null, N, v), h[0] = null, !v.pop(); }; }), has: Ye(function (f) { return function (h) { return 0 < ne(f, h).length; }; }), contains: Ye(function (f) { return f = f.replace(Et, xt), function (h) { return -1 < (h.textContent || a(h)).indexOf(f); }; }), lang: Ye(function (f) { return Bi.test(f || "") || ne.error("unsupported lang: " + f), f = f.replace(Et, xt).toLowerCase(), function (h) { var v; do {
                if (v = R ? h.lang : h.getAttribute("xml:lang") || h.getAttribute("lang"))
                    return (v = v.toLowerCase()) === f || 0 === v.indexOf(f + "-");
            } while ((h = h.parentNode) && 1 === h.nodeType); return !1; }; }), target: function (f) { var h = e.location && e.location.hash; return h && h.slice(1) === f.id; }, root: function (f) { return f === L; }, focus: function (f) { return f === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(f.type || f.href || ~f.tabIndex); }, enabled: Ii(!1), disabled: Ii(!0), checked: function (f) { var h = f.nodeName.toLowerCase(); return "input" === h && !!f.checked || "option" === h && !!f.selected; }, selected: function (f) { return !0 === f.selected; }, empty: function (f) { for (f = f.firstChild; f; f = f.nextSibling)
                if (f.nodeType < 6)
                    return !1; return !0; }, parent: function (f) { return !i.pseudos.empty(f); }, header: function (f) { return Qi.test(f.nodeName); }, input: function (f) { return Ui.test(f.nodeName); }, button: function (f) { var h = f.nodeName.toLowerCase(); return "input" === h && "button" === f.type || "button" === h; }, text: function (f) { var h; return "input" === f.nodeName.toLowerCase() && "text" === f.type && (null == (h = f.getAttribute("type")) || "text" === h.toLowerCase()); }, first: Zt(function () { return [0]; }), last: Zt(function (f, h) { return [h - 1]; }), eq: Zt(function (f, h, v) { return [v < 0 ? v + h : v]; }), even: Zt(function (f, h) { for (var v = 0; v < h; v += 2)
                f.push(v); return f; }), odd: Zt(function (f, h) { for (var v = 1; v < h; v += 2)
                f.push(v); return f; }), lt: Zt(function (f, h, v) { for (var S = v < 0 ? v + h : h < v ? h : v; 0 <= --S;)
                f.push(S); return f; }), gt: Zt(function (f, h, v) { for (var S = v < 0 ? v + h : v; ++S < h;)
                f.push(S); return f; }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        i.pseudos[t] = Xi(t); for (t in { submit: !0, reset: !0 })
        i.pseudos[t] = Vi(t); function Oi() { } function ai(f) { for (var h = 0, v = f.length, S = ""; h < v; h++)
        S += f[h].value; return S; } function si(f, h, v) { var S = h.dir, w = h.next, A = w || S, N = v && "parentNode" === A, D = Y++; return h.first ? function (I, U, M) { for (; I = I[S];)
        if (1 === I.nodeType || N)
            return f(I, U, M); return !1; } : function (I, U, M) { var W, V, se, z = [ke, D]; if (M) {
        for (; I = I[S];)
            if ((1 === I.nodeType || N) && f(I, U, M))
                return !0;
    }
    else
        for (; I = I[S];)
            if (1 === I.nodeType || N)
                if (V = (se = I[ee] || (I[ee] = {}))[I.uniqueID] || (se[I.uniqueID] = {}), w && w === I.nodeName.toLowerCase())
                    I = I[S] || I;
                else {
                    if ((W = V[A]) && W[0] === ke && W[1] === D)
                        return z[2] = W[2];
                    if ((V[A] = z)[2] = f(I, U, M))
                        return !0;
                } return !1; }; } function Ci(f) { return 1 < f.length ? function (h, v, S) { for (var w = f.length; w--;)
        if (!f[w](h, v, S))
            return !1; return !0; } : f[0]; } function li(f, h, v, S, w) { for (var A, N = [], D = 0, I = f.length, U = null != h; D < I; D++)
        (A = f[D]) && (v && !v(A, S, w) || (N.push(A), U && h.push(D))); return N; } function Si(f, h, v, S, w, A) { return S && !S[ee] && (S = Si(S)), w && !w[ee] && (w = Si(w, A)), Ye(function (N, D, I, U) { var M, W, V, se = [], z = [], pe = D.length, ge = N || function (ft, be, ue) { for (var Ke = 0, ui = be.length; Ke < ui; Ke++)
        ne(ft, be[Ke], ue); return ue; }(h || "*", I.nodeType ? [I] : I, []), Ee = !f || !N && h ? ge : li(ge, se, f, I, U), ie = v ? w || (N ? f : pe || S) ? [] : D : Ee; if (v && v(Ee, ie, I, U), S)
        for (M = li(ie, z), S(M, [], I, U), W = M.length; W--;)
            (V = M[W]) && (ie[z[W]] = !(Ee[z[W]] = V)); if (N) {
        if (w || f) {
            if (w) {
                for (M = [], W = ie.length; W--;)
                    (V = ie[W]) && M.push(Ee[W] = V);
                w(null, ie = [], M, U);
            }
            for (W = ie.length; W--;)
                (V = ie[W]) && -1 < (M = w ? Le(N, V) : se[W]) && (N[M] = !(D[M] = V));
        }
    }
    else
        ie = li(ie === D ? ie.splice(pe, ie.length) : ie), w ? w(null, D, ie, U) : ae.apply(D, ie); }); } function ki(f) { for (var h, v, S, w = f.length, A = i.relative[f[0].type], N = A || i.relative[" "], D = A ? 1 : 0, I = si(function (W) { return W === h; }, N, !0), U = si(function (W) { return -1 < Le(h, W); }, N, !0), M = [function (W, V, se) { var z = !A && (se || V !== y) || ((h = V).nodeType ? I(W, V, se) : U(W, V, se)); return h = null, z; }]; D < w; D++)
        if (v = i.relative[f[D].type])
            M = [si(Ci(M), v)];
        else {
            if ((v = i.filter[f[D].type].apply(null, f[D].matches))[ee]) {
                for (S = ++D; S < w && !i.relative[f[S].type]; S++)
                    ;
                return Si(1 < D && Ci(M), 1 < D && ai(f.slice(0, D - 1).concat({ value: " " === f[D - 2].type ? "*" : "" })).replace(Pe, "$1"), v, D < S && ki(f.slice(D, S)), S < w && ki(f = f.slice(S)), S < w && ai(f));
            }
            M.push(v);
        } return Ci(M); } return Oi.prototype = i.filters = i.pseudos, i.setFilters = new Oi, c = ne.tokenize = function (f, h) { var v, S, w, A, N, D, I, U = Mn[f + " "]; if (U)
        return h ? 0 : U.slice(0); for (N = f, D = [], I = i.preFilter; N;) {
        for (A in v && !(S = mn.exec(N)) || (S && (N = N.slice(S[0].length) || N), D.push(w = [])), v = !1, (S = ii.exec(N)) && (v = S.shift(), w.push({ value: v, type: S[0].replace(Pe, " ") }), N = N.slice(v.length)), i.filter)
            !(S = ri[A].exec(N)) || I[A] && !(S = I[A](S)) || (v = S.shift(), w.push({ value: v, type: A, matches: S }), N = N.slice(v.length));
        if (!v)
            break;
    } return h ? N.length : N ? ne.error(f) : Mn(f, D).slice(0); }, g = ne.compile = function (f, h) { var v, S, w, A, N, D, I = [], U = [], M = ni[f + " "]; if (!M) {
        for (h || (h = c(f)), v = h.length; v--;)
            (M = ki(h[v]))[ee] ? I.push(M) : U.push(M);
        (M = ni(f, (S = U, A = 0 < (w = I).length, N = 0 < S.length, D = function (W, V, se, z, pe) { var ge, Ee, ie, ft = 0, be = "0", ue = W && [], Ke = [], ui = y, Li = W || N && i.find.TAG("*", pe), qi = ke += null == ui ? 1 : Math.random() || .1, Yi = Li.length; for (pe && (y = V == C || V || pe); be !== Yi && null != (ge = Li[be]); be++) {
            if (N && ge) {
                for (Ee = 0, V || ge.ownerDocument == C || (T(ge), se = !R); ie = S[Ee++];)
                    if (ie(ge, V || C, se)) {
                        z.push(ge);
                        break;
                    }
                pe && (ke = qi);
            }
            A && ((ge = !ie && ge) && ft--, W && ue.push(ge));
        } if (ft += be, A && be !== ft) {
            for (Ee = 0; ie = w[Ee++];)
                ie(ue, Ke, V, se);
            if (W) {
                if (0 < ft)
                    for (; be--;)
                        ue[be] || Ke[be] || (Ke[be] = gn.call(z));
                Ke = li(Ke);
            }
            ae.apply(z, Ke), pe && !W && 0 < Ke.length && 1 < ft + w.length && ne.uniqueSort(z);
        } return pe && (ke = qi, y = ui), ue; }, A ? Ye(D) : D))).selector = f;
    } return M; }, p = ne.select = function (f, h, v, S) { var w, A, N, D, I, U = "function" == typeof f && f, M = !S && c(f = U.selector || f); if (v = v || [], 1 === M.length) {
        if (2 < (A = M[0] = M[0].slice(0)).length && "ID" === (N = A[0]).type && 9 === h.nodeType && R && i.relative[A[1].type]) {
            if (!(h = (i.find.ID(N.matches[0].replace(Et, xt), h) || [])[0]))
                return v;
            U && (h = h.parentNode), f = f.slice(A.shift().value.length);
        }
        for (w = ri.needsContext.test(f) ? 0 : A.length; w-- && !i.relative[D = (N = A[w]).type];)
            if ((I = i.find[D]) && (S = I(N.matches[0].replace(Et, xt), Ti.test(A[0].type) && xi(h.parentNode) || h))) {
                if (A.splice(w, 1), !(f = S.length && ai(A)))
                    return ae.apply(v, S), v;
                break;
            }
    } return (U || g(f, M))(S, h, !R, v, !h || Ti.test(f) && xi(h.parentNode) || h), v; }, n.sortStable = ee.split("").sort(Jt).join("") === ee, n.detectDuplicates = !!k, T(), n.sortDetached = We(function (f) { return 1 & f.compareDocumentPosition(C.createElement("fieldset")); }), We(function (f) { return f.innerHTML = "<a href='#'></a>", "#" === f.firstChild.getAttribute("href"); }) || Ei("type|href|height|width", function (f, h, v) { if (!v)
        return f.getAttribute(h, "type" === h.toLowerCase() ? 1 : 2); }), n.attributes && We(function (f) { return f.innerHTML = "<input/>", f.firstChild.setAttribute("value", ""), "" === f.firstChild.getAttribute("value"); }) || Ei("value", function (f, h, v) { if (!v && "input" === f.nodeName.toLowerCase())
        return f.defaultValue; }), We(function (f) { return null == f.getAttribute("disabled"); }) || Ei(ct, function (f, h, v) { var S; if (!v)
        return !0 === f[h] ? h.toLowerCase() : (S = f.getAttributeNode(h)) && S.specified ? S.value : null; }), ne; }(P);
    o.find = Re, o.expr = Re.selectors, o.expr[":"] = o.expr.pseudos, o.uniqueSort = o.unique = Re.uniqueSort, o.text = Re.getText, o.isXMLDoc = Re.isXML, o.contains = Re.contains, o.escapeSelector = Re.escape;
    var Ct = function (e, t, n) { for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
            if (a && o(e).is(n))
                break;
            i.push(e);
        } return i; }, ht = function (e, t) { for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e); return n; }, qt = o.expr.match.needsContext;
    function me(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase(); }
    var wn = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function St(e, t, n) { return B(t) ? o.grep(e, function (i, a) { return !!t.call(i, a, i) !== n; }) : t.nodeType ? o.grep(e, function (i) { return i === t !== n; }) : "string" != typeof t ? o.grep(e, function (i) { return -1 < _e.call(t, i) !== n; }) : o.filter(t, e, n); }
    o.filter = function (e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? o.find.matchesSelector(i, e) ? [i] : [] : o.find.matches(e, o.grep(t, function (a) { return 1 === a.nodeType; })); }, o.fn.extend({ find: function (e) { var t, n, i = this.length, a = this; if ("string" != typeof e)
            return this.pushStack(o(e).filter(function () { for (t = 0; t < i; t++)
                if (o.contains(a[t], this))
                    return !0; })); for (n = this.pushStack([]), t = 0; t < i; t++)
            o.find(e, a[t], n); return 1 < i ? o.uniqueSort(n) : n; }, filter: function (e) { return this.pushStack(St(this, e || [], !1)); }, not: function (e) { return this.pushStack(St(this, e || [], !0)); }, is: function (e) { return !!St(this, "string" == typeof e && qt.test(e) ? o(e) : e || [], !1).length; } });
    var nn, ci = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (o.fn.init = function (e, t, n) { var i, a; if (!e)
        return this; if (n = n || nn, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ci.exec(e)) || !i[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (o.merge(this, o.parseHTML(i[1], (t = t instanceof o ? t[0] : t) && t.nodeType ? t.ownerDocument || t : X, !0)), wn.test(i[1]) && o.isPlainObject(t))
                for (i in t)
                    B(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
        }
        return (a = X.getElementById(i[2])) && (this[0] = a, this.length = 1), this;
    } return e.nodeType ? (this[0] = e, this.length = 1, this) : B(e) ? void 0 !== n.ready ? n.ready(e) : e(o) : o.makeArray(e, this); }).prototype = o.fn, nn = o(X);
    var Wn = /^(?:parents|prev(?:Until|All))/, kt = { children: !0, contents: !0, next: !0, prev: !0 };
    function pt(e, t) { for (; (e = e[t]) && 1 !== e.nodeType;)
        ; return e; }
    o.fn.extend({ has: function (e) { var t = o(e, this), n = t.length; return this.filter(function () { for (var i = 0; i < n; i++)
            if (o.contains(this, t[i]))
                return !0; }); }, closest: function (e, t) { var n, i = 0, a = this.length, u = [], c = "string" != typeof e && o(e); if (!qt.test(e))
            for (; i < a; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (c ? -1 < c.index(n) : 1 === n.nodeType && o.find.matchesSelector(n, e))) {
                        u.push(n);
                        break;
                    } return this.pushStack(1 < u.length ? o.uniqueSort(u) : u); }, index: function (e) { return e ? "string" == typeof e ? _e.call(o(e), this[0]) : _e.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (e, t) { return this.pushStack(o.uniqueSort(o.merge(this.get(), o(e, t)))); }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)); } }), o.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null; }, parents: function (e) { return Ct(e, "parentNode"); }, parentsUntil: function (e, t, n) { return Ct(e, "parentNode", n); }, next: function (e) { return pt(e, "nextSibling"); }, prev: function (e) { return pt(e, "previousSibling"); }, nextAll: function (e) { return Ct(e, "nextSibling"); }, prevAll: function (e) { return Ct(e, "previousSibling"); }, nextUntil: function (e, t, n) { return Ct(e, "nextSibling", n); }, prevUntil: function (e, t, n) { return Ct(e, "previousSibling", n); }, siblings: function (e) { return ht((e.parentNode || {}).firstChild, e); }, children: function (e) { return ht(e.firstChild); }, contents: function (e) { return null != e.contentDocument && vn(e.contentDocument) ? e.contentDocument : (me(e, "template") && (e = e.content || e), o.merge([], e.childNodes)); } }, function (e, t) { o.fn[e] = function (n, i) { var a = o.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = o.filter(i, a)), 1 < this.length && (kt[e] || o.uniqueSort(a), Wn.test(e) && a.reverse()), this.pushStack(a); }; });
    var ve = /[^\x20\t\r\n\f]+/g;
    function At(e) { return e; }
    function et(e) { throw e; }
    function rn(e, t, n, i) { var a; try {
        e && B(a = e.promise) ? a.call(e).done(t).fail(n) : e && B(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(i));
    }
    catch (u) {
        n.apply(void 0, [u]);
    } }
    o.Callbacks = function (e) { var n; e = "string" == typeof e ? (n = {}, o.each(e.match(ve) || [], function (T, C) { n[C] = !0; }), n) : o.extend({}, e); var i, a, u, c, g = [], p = [], y = -1, x = function () { for (c = c || e.once, u = i = !0; p.length; y = -1)
        for (a = p.shift(); ++y < g.length;)
            !1 === g[y].apply(a[0], a[1]) && e.stopOnFalse && (y = g.length, a = !1); e.memory || (a = !1), i = !1, c && (g = a ? [] : ""); }, k = { add: function () { return g && (a && !i && (y = g.length - 1, p.push(a)), function T(C) { o.each(C, function (L, R) { B(R) ? e.unique && k.has(R) || g.push(R) : R && R.length && "string" !== Je(R) && T(R); }); }(arguments), a && !i && x()), this; }, remove: function () { return o.each(arguments, function (T, C) { for (var L; -1 < (L = o.inArray(C, g, L));)
            g.splice(L, 1), L <= y && y--; }), this; }, has: function (T) { return T ? -1 < o.inArray(T, g) : 0 < g.length; }, empty: function () { return g && (g = []), this; }, disable: function () { return c = p = [], g = a = "", this; }, disabled: function () { return !g; }, lock: function () { return c = p = [], a || i || (g = a = ""), this; }, locked: function () { return !!c; }, fireWith: function (T, C) { return c || (C = [T, (C = C || []).slice ? C.slice() : C], p.push(C), i || x()), this; }, fire: function () { return k.fireWith(this, arguments), this; }, fired: function () { return !!u; } }; return k; }, o.extend({ Deferred: function (e) { var t = [["notify", "progress", o.Callbacks("memory"), o.Callbacks("memory"), 2], ["resolve", "done", o.Callbacks("once memory"), o.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", o.Callbacks("once memory"), o.Callbacks("once memory"), 1, "rejected"]], n = "pending", i = { state: function () { return n; }, always: function () { return a.done(arguments).fail(arguments), this; }, catch: function (u) { return i.then(null, u); }, pipe: function () { var u = arguments; return o.Deferred(function (c) { o.each(t, function (g, p) { var y = B(u[p[4]]) && u[p[4]]; a[p[1]](function () { var x = y && y.apply(this, arguments); x && B(x.promise) ? x.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[p[0] + "With"](this, y ? [x] : arguments); }); }), u = null; }).promise(); }, then: function (u, c, g) { var p = 0; function y(x, k, T, C) { return function () { var L = this, R = arguments, q = function () { var de, je; if (!(x < p)) {
                if ((de = T.apply(L, R)) === k.promise())
                    throw new TypeError("Thenable self-resolution");
                B(je = de && ("object" == typeof de || "function" == typeof de) && de.then) ? C ? je.call(de, y(p, k, At, C), y(p, k, et, C)) : (p++, je.call(de, y(p, k, At, C), y(p, k, et, C), y(p, k, At, k.notifyWith))) : (T !== At && (L = void 0, R = [de]), (C || k.resolveWith)(L, R));
            } }, re = C ? q : function () { try {
                q();
            }
            catch (de) {
                o.Deferred.exceptionHook && o.Deferred.exceptionHook(de, re.stackTrace), p <= x + 1 && (T !== et && (L = void 0, R = [de]), k.rejectWith(L, R));
            } }; x ? re() : (o.Deferred.getStackHook && (re.stackTrace = o.Deferred.getStackHook()), P.setTimeout(re)); }; } return o.Deferred(function (x) { t[0][3].add(y(0, x, B(g) ? g : At, x.notifyWith)), t[1][3].add(y(0, x, B(u) ? u : At)), t[2][3].add(y(0, x, B(c) ? c : et)); }).promise(); }, promise: function (u) { return null != u ? o.extend(u, i) : i; } }, a = {}; return o.each(t, function (u, c) { var g = c[2], p = c[5]; i[c[1]] = g.add, p && g.add(function () { n = p; }, t[3 - u][2].disable, t[3 - u][3].disable, t[0][2].lock, t[0][3].lock), g.add(c[3].fire), a[c[0]] = function () { return a[c[0] + "With"](this === a ? void 0 : this, arguments), this; }, a[c[0] + "With"] = g.fireWith; }), i.promise(a), e && e.call(a, a), a; }, when: function (e) { var t = arguments.length, n = t, i = Array(n), a = s.call(arguments), u = o.Deferred(), c = function (g) { return function (p) { i[g] = this, a[g] = 1 < arguments.length ? s.call(arguments) : p, --t || u.resolveWith(i, a); }; }; if (t <= 1 && (rn(e, u.done(c(n)).resolve, u.reject, !t), "pending" === u.state() || B(a[n] && a[n].then)))
            return u.then(); for (; n--;)
            rn(a[n], c(n), u.reject); return u.promise(); } });
    var on = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    o.Deferred.exceptionHook = function (e, t) { P.console && P.console.warn && e && on.test(e.name) && P.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t); }, o.readyException = function (e) { P.setTimeout(function () { throw e; }); };
    var Pt = o.Deferred();
    function Rt() { X.removeEventListener("DOMContentLoaded", Rt), P.removeEventListener("load", Rt), o.ready(); }
    o.fn.ready = function (e) { return Pt.then(e).catch(function (t) { o.readyException(t); }), this; }, o.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --o.readyWait : o.isReady) || (o.isReady = !0) !== e && 0 < --o.readyWait || Pt.resolveWith(X, [o]); } }), o.ready.then = Pt.then, "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? P.setTimeout(o.ready) : (X.addEventListener("DOMContentLoaded", Rt), P.addEventListener("load", Rt));
    var He = function (e, t, n, i, a, u, c) { var g = 0, p = e.length, y = null == n; if ("object" === Je(n))
        for (g in a = !0, n)
            He(e, t, g, n[g], !0, u, c);
    else if (void 0 !== i && (a = !0, B(i) || (c = !0), y && (c ? (t.call(e, i), t = null) : (y = t, t = function (x, k, T) { return y.call(o(x), T); })), t))
        for (; g < p; g++)
            t(e[g], n, c ? i : i.call(e[g], g, t(e[g], n))); return a ? e : y ? t.call(e) : p ? t(e[0], n) : u; }, Tn = /^-ms-/, fi = /-([a-z])/g;
    function Ht(e, t) { return t.toUpperCase(); }
    function ye(e) { return e.replace(Tn, "ms-").replace(fi, Ht); }
    var tt = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType; };
    function Ft() { this.expando = o.expando + Ft.uid++; }
    Ft.uid = 1, Ft.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, tt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t; }, set: function (e, t, n) { var i, a = this.cache(e); if ("string" == typeof t)
            a[ye(t)] = n;
        else
            for (i in t)
                a[ye(i)] = t[i]; return a; }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ye(t)]; }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t); }, remove: function (e, t) { var n, i = e[this.expando]; if (void 0 !== i) {
            if (void 0 !== t)
                for ((n = (t = Array.isArray(t) ? t.map(ye) : (t = ye(t)) in i ? [t] : t.match(ve) || []).length); n--;)
                    delete i[t[n]];
            (void 0 === t || o.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !o.isEmptyObject(t); } };
    var F = new Ft, ce = new Ft, Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Un = /[A-Z]/g;
    function En(e, t, n) { var i, a; if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(Un, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = "true" === (a = n) || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Ne.test(a) ? JSON.parse(a) : a);
            }
            catch (_a) { }
            ce.set(e, t, n);
        }
        else
            n = void 0; return n; }
    o.extend({ hasData: function (e) { return ce.hasData(e) || F.hasData(e); }, data: function (e, t, n) { return ce.access(e, t, n); }, removeData: function (e, t) { ce.remove(e, t); }, _data: function (e, t, n) { return F.access(e, t, n); }, _removeData: function (e, t) { F.remove(e, t); } }), o.fn.extend({ data: function (e, t) { var n, i, a, u = this[0], c = u && u.attributes; if (void 0 === e) {
            if (this.length && (a = ce.get(u), 1 === u.nodeType && !F.get(u, "hasDataAttrs"))) {
                for (n = c.length; n--;)
                    c[n] && 0 === (i = c[n].name).indexOf("data-") && (i = ye(i.slice(5)), En(u, i, a[i]));
                F.set(u, "hasDataAttrs", !0);
            }
            return a;
        } return "object" == typeof e ? this.each(function () { ce.set(this, e); }) : He(this, function (g) { var p; if (u && void 0 === g)
            return void 0 !== (p = ce.get(u, e)) || void 0 !== (p = En(u, e)) ? p : void 0; this.each(function () { ce.set(this, e, g); }); }, null, t, 1 < arguments.length, null, !0); }, removeData: function (e) { return this.each(function () { ce.remove(this, e); }); } }), o.extend({ queue: function (e, t, n) { var i; if (e)
            return i = F.get(e, t = (t || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = F.access(e, t, o.makeArray(n)) : i.push(n)), i || []; }, dequeue: function (e, t) { var n = o.queue(e, t = t || "fx"), i = n.length, a = n.shift(), u = o._queueHooks(e, t); "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete u.stop, a.call(e, function () { o.dequeue(e, t); }, u)), !i && u && u.empty.fire(); }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return F.get(e, n) || F.access(e, n, { empty: o.Callbacks("once memory").add(function () { F.remove(e, [t + "queue", n]); }) }); } }), o.fn.extend({ queue: function (e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? o.queue(this[0], e) : void 0 === t ? this : this.each(function () { var i = o.queue(this, e, t); o._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && o.dequeue(this, e); }); }, dequeue: function (e) { return this.each(function () { o.dequeue(this, e); }); }, clearQueue: function (e) { return this.queue(e || "fx", []); }, promise: function (e, t) { var n, i = 1, a = o.Deferred(), u = this, c = this.length, g = function () { --i || a.resolveWith(u, [u]); }; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; c--;)
            (n = F.get(u[c], e + "queueHooks")) && n.empty && (i++, n.empty.add(g)); return g(), a.promise(t); } });
    var xn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, gt = new RegExp("^(?:([+-])=|)(" + xn + ")([a-z%]*)$", "i"), Fe = ["Top", "Right", "Bottom", "Left"], Me = X.documentElement, nt = function (e) { return o.contains(e.ownerDocument, e); }, di = { composed: !0 };
    Me.getRootNode && (nt = function (e) { return o.contains(e.ownerDocument, e) || e.getRootNode(di) === e.ownerDocument; });
    var an = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && nt(e) && "none" === o.css(e, "display"); };
    function $e(e, t, n, i) { var a, u, c = 20, g = i ? function () { return i.cur(); } : function () { return o.css(e, t, ""); }, p = g(), y = n && n[3] || (o.cssNumber[t] ? "" : "px"), x = e.nodeType && (o.cssNumber[t] || "px" !== y && +p) && gt.exec(o.css(e, t)); if (x && x[3] !== y) {
        for (y = y || x[3], x = +(p /= 2) || 1; c--;)
            o.style(e, t, x + y), (1 - u) * (1 - (u = g() / p || .5)) <= 0 && (c = 0), x /= u;
        o.style(e, t, (x *= 2) + y), n = n || [];
    } return n && (x = +x || +p || 0, a = n[1] ? x + (n[1] + 1) * n[2] : +n[2], i && (i.unit = y, i.start = x, i.end = a)), a; }
    var Mt = {};
    function Nt(e, t) { for (var n, i, a, u, c, g, p, y = [], x = 0, k = e.length; x < k; x++)
        (i = e[x]).style && (n = i.style.display, t ? ("none" === n && (y[x] = F.get(i, "display") || null, y[x] || (i.style.display = "")), "" === i.style.display && an(i) && (y[x] = (p = c = u = void 0, c = (a = i).ownerDocument, (p = Mt[g = a.nodeName]) || (u = c.body.appendChild(c.createElement(g)), p = o.css(u, "display"), u.parentNode.removeChild(u), "none" === p && (p = "block"), Mt[g] = p)))) : "none" !== n && (y[x] = "none", F.set(i, "display", n))); for (x = 0; x < k; x++)
        null != y[x] && (e[x].style.display = y[x]); return e; }
    o.fn.extend({ show: function () { return Nt(this, !0); }, hide: function () { return Nt(this); }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { an(this) ? o(this).show() : o(this).hide(); }); } });
    var it, ze, rt = /^(?:checkbox|radio)$/i, Cn = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Sn = /^$|^module$|\/(?:java|ecma)script/i;
    it = X.createDocumentFragment().appendChild(X.createElement("div")), (ze = X.createElement("input")).setAttribute("type", "radio"), ze.setAttribute("checked", "checked"), ze.setAttribute("name", "t"), it.appendChild(ze), K.checkClone = it.cloneNode(!0).cloneNode(!0).lastChild.checked, it.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!it.cloneNode(!0).lastChild.defaultValue, it.innerHTML = "<option></option>", K.option = !!it.lastChild;
    var we = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function fe(e, t) { var n; return n = typeof e.getElementsByTagName < "u" ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? e.querySelectorAll(t || "*") : [], void 0 === t || t && me(e, t) ? o.merge([e], n) : n; }
    function sn(e, t) { for (var n = 0, i = e.length; n < i; n++)
        F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval")); }
    we.tbody = we.tfoot = we.colgroup = we.caption = we.thead, we.th = we.td, K.option || (we.optgroup = we.option = [1, "<select multiple='multiple'>", "</select>"]);
    var kn = /<|&#?\w+;/;
    function An(e, t, n, i, a) { for (var u, c, g, p, y, x, k = t.createDocumentFragment(), T = [], C = 0, L = e.length; C < L; C++)
        if ((u = e[C]) || 0 === u)
            if ("object" === Je(u))
                o.merge(T, u.nodeType ? [u] : u);
            else if (kn.test(u)) {
                for (c = c || k.appendChild(t.createElement("div")), g = (Cn.exec(u) || ["", ""])[1].toLowerCase(), c.innerHTML = (p = we[g] || we._default)[1] + o.htmlPrefilter(u) + p[2], x = p[0]; x--;)
                    c = c.lastChild;
                o.merge(T, c.childNodes), (c = k.firstChild).textContent = "";
            }
            else
                T.push(t.createTextNode(u)); for (k.textContent = "", C = 0; u = T[C++];)
        if (i && -1 < o.inArray(u, i))
            a && a.push(u);
        else if (y = nt(u), c = fe(k.appendChild(u), "script"), y && sn(c), n)
            for (x = 0; u = c[x++];)
                Sn.test(u.type || "") && n.push(u); return k; }
    var Nn = /^([^.]*)(?:\.(.+)|)/;
    function mt() { return !0; }
    function ot() { return !1; }
    function hi(e, t) { return e === function () { try {
        return X.activeElement;
    }
    catch (_a) { } }() == ("focus" === t); }
    function vt(e, t, n, i, a, u) { var c, g; if ("object" == typeof t) {
        for (g in "string" != typeof n && (i = i || n, n = void 0), t)
            vt(e, g, n, i, t[g], u);
        return e;
    } if (null == i && null == a ? (a = n, i = n = void 0) : null == a && ("string" == typeof n ? (a = i, i = void 0) : (a = i, i = n, n = void 0)), !1 === a)
        a = ot;
    else if (!a)
        return e; return 1 === u && (c = a, (a = function (p) { return o().off(p), c.apply(this, arguments); }).guid = c.guid || (c.guid = o.guid++)), e.each(function () { o.event.add(this, t, a, i, n); }); }
    function ln(e, t, n) { n ? (F.set(e, t, !1), o.event.add(e, t, { namespace: !1, handler: function (i) { var a, u, c = F.get(this, t); if (1 & i.isTrigger && this[t]) {
            if (c.length)
                (o.event.special[t] || {}).delegateType && i.stopPropagation();
            else if (c = s.call(arguments), F.set(this, t, c), a = n(this, t), this[t](), c !== (u = F.get(this, t)) || a ? F.set(this, t, !1) : u = {}, c !== u)
                return i.stopImmediatePropagation(), i.preventDefault(), u && u.value;
        }
        else
            c.length && (F.set(this, t, { value: o.event.trigger(o.extend(c[0], o.Event.prototype), c.slice(1), this) }), i.stopImmediatePropagation()); } })) : void 0 === F.get(e, t) && o.event.add(e, t, mt); }
    o.event = { global: {}, add: function (e, t, n, i, a) { var u, c, g, p, y, x, k, T, C, L, R, q = F.get(e); if (tt(e))
            for (n.handler && (n = (u = n).handler, a = u.selector), a && o.find.matchesSelector(Me, a), n.guid || (n.guid = o.guid++), (p = q.events) || (p = q.events = Object.create(null)), (c = q.handle) || (c = q.handle = function (re) { return typeof o < "u" && o.event.triggered !== re.type ? o.event.dispatch.apply(e, arguments) : void 0; }), y = (t = (t || "").match(ve) || [""]).length; y--;)
                C = R = (g = Nn.exec(t[y]) || [])[1], L = (g[2] || "").split(".").sort(), C && (k = o.event.special[C] || {}, k = o.event.special[C = (a ? k.delegateType : k.bindType) || C] || {}, x = o.extend({ type: C, origType: R, data: i, handler: n, guid: n.guid, selector: a, needsContext: a && o.expr.match.needsContext.test(a), namespace: L.join(".") }, u), (T = p[C]) || ((T = p[C] = []).delegateCount = 0, k.setup && !1 !== k.setup.call(e, i, L, c) || e.addEventListener && e.addEventListener(C, c)), k.add && (k.add.call(e, x), x.handler.guid || (x.handler.guid = n.guid)), a ? T.splice(T.delegateCount++, 0, x) : T.push(x), o.event.global[C] = !0); }, remove: function (e, t, n, i, a) { var u, c, g, p, y, x, k, T, C, L, R, q = F.hasData(e) && F.get(e); if (q && (p = q.events)) {
            for (y = (t = (t || "").match(ve) || [""]).length; y--;)
                if (C = R = (g = Nn.exec(t[y]) || [])[1], L = (g[2] || "").split(".").sort(), C) {
                    for (k = o.event.special[C] || {}, T = p[C = (i ? k.delegateType : k.bindType) || C] || [], g = g[2] && new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = u = T.length; u--;)
                        x = T[u], !a && R !== x.origType || n && n.guid !== x.guid || g && !g.test(x.namespace) || i && i !== x.selector && ("**" !== i || !x.selector) || (T.splice(u, 1), x.selector && T.delegateCount--, k.remove && k.remove.call(e, x));
                    c && !T.length && (k.teardown && !1 !== k.teardown.call(e, L, q.handle) || o.removeEvent(e, C, q.handle), delete p[C]);
                }
                else
                    for (C in p)
                        o.event.remove(e, C + t[y], n, i, !0);
            o.isEmptyObject(p) && F.remove(e, "handle events");
        } }, dispatch: function (e) { var t, n, i, a, u, c, g = new Array(arguments.length), p = o.event.fix(e), y = (F.get(this, "events") || Object.create(null))[p.type] || [], x = o.event.special[p.type] || {}; for (g[0] = p, t = 1; t < arguments.length; t++)
            g[t] = arguments[t]; if (p.delegateTarget = this, !x.preDispatch || !1 !== x.preDispatch.call(this, p)) {
            for (c = o.event.handlers.call(this, p, y), t = 0; (a = c[t++]) && !p.isPropagationStopped();)
                for (p.currentTarget = a.elem, n = 0; (u = a.handlers[n++]) && !p.isImmediatePropagationStopped();)
                    p.rnamespace && !1 !== u.namespace && !p.rnamespace.test(u.namespace) || (p.handleObj = u, p.data = u.data, void 0 !== (i = ((o.event.special[u.origType] || {}).handle || u.handler).apply(a.elem, g)) && !1 === (p.result = i) && (p.preventDefault(), p.stopPropagation()));
            return x.postDispatch && x.postDispatch.call(this, p), p.result;
        } }, handlers: function (e, t) { var n, i, a, u, c, g = [], p = t.delegateCount, y = e.target; if (p && y.nodeType && !("click" === e.type && 1 <= e.button))
            for (; y !== this; y = y.parentNode || this)
                if (1 === y.nodeType && ("click" !== e.type || !0 !== y.disabled)) {
                    for (u = [], c = {}, n = 0; n < p; n++)
                        void 0 === c[a = (i = t[n]).selector + " "] && (c[a] = i.needsContext ? -1 < o(a, this).index(y) : o.find(a, this, null, [y]).length), c[a] && u.push(i);
                    u.length && g.push({ elem: y, handlers: u });
                } return y = this, p < t.length && g.push({ elem: y, handlers: t.slice(p) }), g; }, addProp: function (e, t) { Object.defineProperty(o.Event.prototype, e, { enumerable: !0, configurable: !0, get: B(t) ? function () { if (this.originalEvent)
                return t(this.originalEvent); } : function () { if (this.originalEvent)
                return this.originalEvent[e]; }, set: function (n) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: n }); } }); }, fix: function (e) { return e[o.expando] ? e : new o.Event(e); }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return rt.test(t.type) && t.click && me(t, "input") && ln(t, "click", mt), !1; }, trigger: function (e) { var t = this || e; return rt.test(t.type) && t.click && me(t, "input") && ln(t, "click"), !0; }, _default: function (e) { var t = e.target; return rt.test(t.type) && t.click && me(t, "input") && F.get(t, "click") || me(t, "a"); } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result); } } } }, o.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n); }, o.Event = function (e, t) { if (!(this instanceof o.Event))
        return new o.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? mt : ot, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && o.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[o.expando] = !0; }, o.Event.prototype = { constructor: o.Event, isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = mt, e && !this.isSimulated && e.preventDefault(); }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = mt, e && !this.isSimulated && e.stopPropagation(); }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = mt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation(); } }, o.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, o.event.addProp), o.each({ focus: "focusin", blur: "focusout" }, function (e, t) { o.event.special[e] = { setup: function () { return ln(this, e, hi), !1; }, trigger: function () { return ln(this, e), !0; }, _default: function (n) { return F.get(n.target, e); }, delegateType: t }; }), o.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) { o.event.special[e] = { delegateType: t, bindType: t, handle: function (n) { var i, a = n.relatedTarget, u = n.handleObj; return a && (a === this || o.contains(this, a)) || (n.type = u.origType, i = u.handler.apply(this, arguments), n.type = t), i; } }; }), o.fn.extend({ on: function (e, t, n, i) { return vt(this, e, t, n, i); }, one: function (e, t, n, i) { return vt(this, e, t, n, i, 1); }, off: function (e, t, n) { var i, a; if (e && e.preventDefault && e.handleObj)
            return i = e.handleObj, o(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) {
            for (a in e)
                this.off(a, t, e[a]);
            return this;
        } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ot), this.each(function () { o.event.remove(this, e, n, t); }); } });
    var pi = /<script|<style|<link/i, gi = /checked\s*(?:[^=]|=\s*.checked.)/i, Qn = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function Dn(e, t) { return me(e, "table") && me(11 !== t.nodeType ? t : t.firstChild, "tr") && o(e).children("tbody")[0] || e; }
    function jn(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e; }
    function mi(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e; }
    function $n(e, t) { var n, i, a, u, c, g; if (1 === t.nodeType) {
        if (F.hasData(e) && (g = F.get(e).events))
            for (a in F.remove(t, "handle events"), g)
                for (n = 0, i = g[a].length; n < i; n++)
                    o.event.add(t, a, g[a][n]);
        ce.hasData(e) && (u = ce.access(e), c = o.extend({}, u), ce.set(t, c));
    } }
    function Dt(e, t, n, i) { t = Lt(t); var a, u, c, g, p, y, x = 0, k = e.length, T = k - 1, C = t[0], L = B(C); if (L || 1 < k && "string" == typeof C && !K.checkClone && gi.test(C))
        return e.each(function (R) { var q = e.eq(R); L && (t[0] = C.call(this, R, q.html())), Dt(q, t, n, i); }); if (k && (u = (a = An(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === a.childNodes.length && (a = u), u || i)) {
        for (g = (c = o.map(fe(a, "script"), jn)).length; x < k; x++)
            p = a, x !== T && (p = o.clone(p, !0, !0), g && o.merge(c, fe(p, "script"))), n.call(e[x], p, x);
        if (g)
            for (y = c[c.length - 1].ownerDocument, o.map(c, mi), x = 0; x < g; x++)
                Sn.test((p = c[x]).type || "") && !F.access(p, "globalEval") && o.contains(y, p) && (p.src && "module" !== (p.type || "").toLowerCase() ? o._evalUrl && !p.noModule && o._evalUrl(p.src, { nonce: p.nonce || p.getAttribute("nonce") }, y) : _n(p.textContent.replace(Qn, ""), p, y));
    } return e; }
    function Bt(e, t, n) { for (var i, a = t ? o.filter(t, e) : e, u = 0; null != (i = a[u]); u++)
        n || 1 !== i.nodeType || o.cleanData(fe(i)), i.parentNode && (n && nt(i) && sn(fe(i, "script")), i.parentNode.removeChild(i)); return e; }
    o.extend({ htmlPrefilter: function (e) { return e; }, clone: function (e, t, n) { var i, a, u, c, g, p, y, x = e.cloneNode(!0), k = nt(e); if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || o.isXMLDoc(e)))
            for (c = fe(x), i = 0, a = (u = fe(e)).length; i < a; i++)
                g = u[i], "input" === (y = (p = c[i]).nodeName.toLowerCase()) && rt.test(g.type) ? p.checked = g.checked : "input" !== y && "textarea" !== y || (p.defaultValue = g.defaultValue); if (t)
            if (n)
                for (u = u || fe(e), c = c || fe(x), i = 0, a = u.length; i < a; i++)
                    $n(u[i], c[i]);
            else
                $n(e, x); return 0 < (c = fe(x, "script")).length && sn(c, !k && fe(e, "script")), x; }, cleanData: function (e) { for (var t, n, i, a = o.event.special, u = 0; void 0 !== (n = e[u]); u++)
            if (tt(n)) {
                if (t = n[F.expando]) {
                    if (t.events)
                        for (i in t.events)
                            a[i] ? o.event.remove(n, i) : o.removeEvent(n, i, t.handle);
                    n[F.expando] = void 0;
                }
                n[ce.expando] && (n[ce.expando] = void 0);
            } } }), o.fn.extend({ detach: function (e) { return Bt(this, e, !0); }, remove: function (e) { return Bt(this, e); }, text: function (e) { return He(this, function (t) { return void 0 === t ? o.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t); }); }, null, e, arguments.length); }, append: function () { return Dt(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Dn(this, e).appendChild(e); }); }, prepend: function () { return Dt(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Dn(this, e);
            t.insertBefore(e, t.firstChild);
        } }); }, before: function () { return Dt(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this); }); }, after: function () { return Dt(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling); }); }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (o.cleanData(fe(e, !1)), e.textContent = ""); return this; }, clone: function (e, t) { return e = null != e && e, t = t !== null && t !== void 0 ? t : e, this.map(function () { return o.clone(this, e, t); }); }, html: function (e) { return He(this, function (t) { var n = this[0] || {}, i = 0, a = this.length; if (void 0 === t && 1 === n.nodeType)
            return n.innerHTML; if ("string" == typeof t && !pi.test(t) && !we[(Cn.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = o.htmlPrefilter(t);
            try {
                for (; i < a; i++)
                    1 === (n = this[i] || {}).nodeType && (o.cleanData(fe(n, !1)), n.innerHTML = t);
                n = 0;
            }
            catch (_a) { }
        } n && this.empty().append(t); }, null, e, arguments.length); }, replaceWith: function () { var e = []; return Dt(this, arguments, function (t) { var n = this.parentNode; o.inArray(this, e) < 0 && (o.cleanData(fe(this)), n && n.replaceChild(t, this)); }, e); } }), o.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { o.fn[e] = function (n) { for (var i, a = [], u = o(n), c = u.length - 1, g = 0; g <= c; g++)
        i = g === c ? this : this.clone(!0), o(u[g])[t](i), en.apply(a, i.get()); return this.pushStack(a); }; });
    var jt = new RegExp("^(" + xn + ")(?!px)[a-z%]+$", "i"), yt = /^--/, It = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = P), t.getComputedStyle(e); }, Wt = function (e, t, n) { var i, a, u = {}; for (a in t)
        u[a] = e.style[a], e.style[a] = t[a]; for (a in i = n.call(e), t)
        e.style[a] = u[a]; return i; }, zn = new RegExp(Fe.join("|"), "i"), Xn = "[\\x20\\t\\r\\n\\f]", vi = new RegExp("^" + Xn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Xn + "+$", "g");
    function Ut(e, t, n) { var i, a, u, c, g = yt.test(t), p = e.style; return (n = n || It(e)) && (c = n.getPropertyValue(t) || n[t], g && c && (c = c.replace(vi, "$1") || void 0), "" !== c || nt(e) || (c = o.style(e, t)), !K.pixelBoxStyles() && jt.test(c) && zn.test(t) && (i = p.width, a = p.minWidth, u = p.maxWidth, p.minWidth = p.maxWidth = p.width = c, c = n.width, p.width = i, p.minWidth = a, p.maxWidth = u)), void 0 !== c ? c + "" : c; }
    function Vn(e, t) { return { get: function () { if (!e())
            return (this.get = t).apply(this, arguments); delete this.get; } }; }
    !function () { function e() { if (y) {
        p.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", y.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Me.appendChild(p).appendChild(y);
        var x = P.getComputedStyle(y);
        n = "1%" !== x.top, g = 12 === t(x.marginLeft), y.style.right = "60%", u = 36 === t(x.right), i = 36 === t(x.width), y.style.position = "absolute", a = 12 === t(y.offsetWidth / 3), Me.removeChild(p), y = null;
    } } function t(x) { return Math.round(parseFloat(x)); } var n, i, a, u, c, g, p = X.createElement("div"), y = X.createElement("div"); y.style && (y.style.backgroundClip = "content-box", y.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === y.style.backgroundClip, o.extend(K, { boxSizingReliable: function () { return e(), i; }, pixelBoxStyles: function () { return e(), u; }, pixelPosition: function () { return e(), n; }, reliableMarginLeft: function () { return e(), g; }, scrollboxSize: function () { return e(), a; }, reliableTrDimensions: function () { var x, k, T, C; return null == c && (x = X.createElement("table"), k = X.createElement("tr"), T = X.createElement("div"), x.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", k.style.cssText = "border:1px solid", k.style.height = "1px", T.style.height = "9px", T.style.display = "block", Me.appendChild(x).appendChild(k).appendChild(T), C = P.getComputedStyle(k), c = parseInt(C.height, 10) + parseInt(C.borderTopWidth, 10) + parseInt(C.borderBottomWidth, 10) === k.offsetHeight, Me.removeChild(x)), c; } })); }();
    var at = ["Webkit", "Moz", "ms"], un = X.createElement("div").style, Yn = {};
    function In(e) { return o.cssProps[e] || Yn[e] || (e in un ? e : Yn[e] = function (n) { for (var i = n[0].toUpperCase() + n.slice(1), a = at.length; a--;)
        if ((n = at[a] + i) in un)
            return n; }(e) || e); }
    var yi = /^(none|table(?!-c[ea]).+)/, _i = { position: "absolute", visibility: "hidden", display: "block" }, Kn = { letterSpacing: "0", fontWeight: "400" };
    function Qt(e, t, n) { var i = gt.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t; }
    function Xe(e, t, n, i, a, u) { var c = "width" === t ? 1 : 0, g = 0, p = 0; if (n === (i ? "border" : "content"))
        return 0; for (; c < 4; c += 2)
        "margin" === n && (p += o.css(e, n + Fe[c], !0, a)), i ? ("content" === n && (p -= o.css(e, "padding" + Fe[c], !0, a)), "margin" !== n && (p -= o.css(e, "border" + Fe[c] + "Width", !0, a))) : (p += o.css(e, "padding" + Fe[c], !0, a), "padding" !== n ? p += o.css(e, "border" + Fe[c] + "Width", !0, a) : g += o.css(e, "border" + Fe[c] + "Width", !0, a)); return !i && 0 <= u && (p += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - u - p - g - .5)) || 0), p; }
    function cn(e, t, n) { var i = It(e), a = (!K.boxSizingReliable() || n) && "border-box" === o.css(e, "boxSizing", !1, i), u = a, c = Ut(e, t, i), g = "offset" + t[0].toUpperCase() + t.slice(1); if (jt.test(c)) {
        if (!n)
            return c;
        c = "auto";
    } return (!K.boxSizingReliable() && a || !K.reliableTrDimensions() && me(e, "tr") || "auto" === c || !parseFloat(c) && "inline" === o.css(e, "display", !1, i)) && e.getClientRects().length && (a = "border-box" === o.css(e, "boxSizing", !1, i), (u = g in e) && (c = e[g])), (c = parseFloat(c) || 0) + Xe(e, t, n || (a ? "border" : "content"), u, i, c) + "px"; }
    function De(e, t, n, i, a) { return new De.prototype.init(e, t, n, i, a); }
    o.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) {
                    var n = Ut(e, "opacity");
                    return "" === n ? "1" : n;
                } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var a, u, c, g = ye(t), p = yt.test(t), y = e.style;
            if (p || (t = In(g)), c = o.cssHooks[t] || o.cssHooks[g], void 0 === n)
                return c && "get" in c && void 0 !== (a = c.get(e, !1, i)) ? a : y[t];
            "string" == (u = typeof n) && (a = gt.exec(n)) && a[1] && (n = $e(e, t, a), u = "number"), null != n && n == n && ("number" !== u || p || (n += a && a[3] || (o.cssNumber[g] ? "" : "px")), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (y[t] = "inherit"), c && "set" in c && void 0 === (n = c.set(e, n, i)) || (p ? y.setProperty(t, n) : y[t] = n));
        } }, css: function (e, t, n, i) { var a, u, c, g = ye(t); return yt.test(t) || (t = In(g)), (c = o.cssHooks[t] || o.cssHooks[g]) && "get" in c && (a = c.get(e, !0, n)), void 0 === a && (a = Ut(e, t, i)), "normal" === a && t in Kn && (a = Kn[t]), "" === n || n ? (u = parseFloat(a), !0 === n || isFinite(u) ? u || 0 : a) : a; } }), o.each(["height", "width"], function (e, t) { o.cssHooks[t] = { get: function (n, i, a) { if (i)
            return !yi.test(o.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? cn(n, t, a) : Wt(n, _i, function () { return cn(n, t, a); }); }, set: function (n, i, a) { var u, c = It(n), g = !K.scrollboxSize() && "absolute" === c.position, p = (g || a) && "border-box" === o.css(n, "boxSizing", !1, c), y = a ? Xe(n, t, a, p, c) : 0; return p && g && (y -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(c[t]) - Xe(n, t, "border", !1, c) - .5)), y && (u = gt.exec(i)) && "px" !== (u[3] || "px") && (n.style[t] = i, i = o.css(n, t)), Qt(0, i, y); } }; }), o.cssHooks.marginLeft = Vn(K.reliableMarginLeft, function (e, t) { if (t)
        return (parseFloat(Ut(e, "marginLeft")) || e.getBoundingClientRect().left - Wt(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left; })) + "px"; }), o.each({ margin: "", padding: "", border: "Width" }, function (e, t) { o.cssHooks[e + t] = { expand: function (n) { for (var i = 0, a = {}, u = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
            a[e + Fe[i] + t] = u[i] || u[i - 2] || u[0]; return a; } }, "margin" !== e && (o.cssHooks[e + t].set = Qt); }), o.fn.extend({ css: function (e, t) { return He(this, function (n, i, a) { var u, c, g = {}, p = 0; if (Array.isArray(i)) {
            for (u = It(n), c = i.length; p < c; p++)
                g[i[p]] = o.css(n, i[p], !1, u);
            return g;
        } return void 0 !== a ? o.style(n, i, a) : o.css(n, i); }, e, t, 1 < arguments.length); } }), ((o.Tween = De).prototype = { constructor: De, init: function (e, t, n, i, a, u) { this.elem = e, this.prop = n, this.easing = a || o.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = u || (o.cssNumber[n] ? "" : "px"); }, cur: function () { var e = De.propHooks[this.prop]; return e && e.get ? e.get(this) : De.propHooks._default.get(this); }, run: function (e) { var t, n = De.propHooks[this.prop]; return this.pos = t = this.options.duration ? o.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : De.propHooks._default.set(this), this; } }).init.prototype = De.prototype, (De.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = o.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0; }, set: function (e) { o.fx.step[e.prop] ? o.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !o.cssHooks[e.prop] && null == e.elem.style[In(e.prop)] ? e.elem[e.prop] = e.now : o.style(e.elem, e.prop, e.now + e.unit); } } }).scrollTop = De.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now); } }, o.easing = { linear: function (e) { return e; }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2; }, _default: "swing" }, o.fx = De.prototype.init, o.fx.step = {};
    var Ce, $t, _t, On, bi = /^(?:toggle|show|hide)$/, zt = /queueHooks$/;
    function Xt() { $t && (!1 === X.hidden && P.requestAnimationFrame ? P.requestAnimationFrame(Xt) : P.setTimeout(Xt, o.fx.interval), o.fx.tick()); }
    function Gn() { return P.setTimeout(function () { Ce = void 0; }), Ce = Date.now(); }
    function st(e, t) { var n, i = 0, a = { height: e }; for (t = t ? 1 : 0; i < 4; i += 2 - t)
        a["margin" + (n = Fe[i])] = a["padding" + n] = e; return t && (a.opacity = a.width = e), a; }
    function Ln(e, t, n) { for (var i, a = (Se.tweeners[t] || []).concat(Se.tweeners["*"]), u = 0, c = a.length; u < c; u++)
        if (i = a[u].call(n, t, e))
            return i; }
    function Se(e, t, n) { var i, a, u = 0, c = Se.prefilters.length, g = o.Deferred().always(function () { delete p.elem; }), p = function () { if (a)
        return !1; for (var k = Ce || Gn(), T = Math.max(0, y.startTime + y.duration - k), C = 1 - (T / y.duration || 0), L = 0, R = y.tweens.length; L < R; L++)
        y.tweens[L].run(C); return g.notifyWith(e, [y, C, T]), C < 1 && R ? T : (R || g.notifyWith(e, [y, 1, 0]), g.resolveWith(e, [y]), !1); }, y = g.promise({ elem: e, props: o.extend({}, t), opts: o.extend(!0, { specialEasing: {}, easing: o.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Ce || Gn(), duration: n.duration, tweens: [], createTween: function (k, T) { var C = o.Tween(e, y.opts, k, T, y.opts.specialEasing[k] || y.opts.easing); return y.tweens.push(C), C; }, stop: function (k) { var T = 0, C = k ? y.tweens.length : 0; if (a)
            return this; for (a = !0; T < C; T++)
            y.tweens[T].run(1); return k ? (g.notifyWith(e, [y, 1, 0]), g.resolveWith(e, [y, k])) : g.rejectWith(e, [y, k]), this; } }), x = y.props; for (function (k, T) { var C, L, R, q, re; for (C in k)
        if (R = T[L = ye(C)], q = k[C], Array.isArray(q) && (R = q[1], q = k[C] = q[0]), C !== L && (k[L] = q, delete k[C]), (re = o.cssHooks[L]) && "expand" in re)
            for (C in q = re.expand(q), delete k[L], q)
                C in k || (k[C] = q[C], T[C] = R);
        else
            T[L] = R; }(x, y.opts.specialEasing); u < c; u++)
        if (i = Se.prefilters[u].call(y, e, x, y.opts))
            return B(i.stop) && (o._queueHooks(y.elem, y.opts.queue).stop = i.stop.bind(i)), i; return o.map(x, Ln, y), B(y.opts.start) && y.opts.start.call(e, y), y.progress(y.opts.progress).done(y.opts.done, y.opts.complete).fail(y.opts.fail).always(y.opts.always), o.fx.timer(o.extend(p, { elem: e, anim: y, queue: y.opts.queue })), y; }
    o.Animation = o.extend(Se, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return $e(n.elem, e, gt.exec(t), n), n; }] }, tweener: function (e, t) { B(e) ? (t = e, e = ["*"]) : e = e.match(ve); for (var n, i = 0, a = e.length; i < a; i++)
            (Se.tweeners[n = e[i]] = Se.tweeners[n] || []).unshift(t); }, prefilters: [function (e, t, n) { var i, a, u, c, g, p, y, x, k = "width" in t || "height" in t, T = this, C = {}, L = e.style, R = e.nodeType && an(e), q = F.get(e, "fxshow"); for (i in n.queue || (null == (c = o._queueHooks(e, "fx")).unqueued && (c.unqueued = 0, g = c.empty.fire, c.empty.fire = function () { c.unqueued || g(); }), c.unqueued++, T.always(function () { T.always(function () { c.unqueued--, o.queue(e, "fx").length || c.empty.fire(); }); })), t)
                if (bi.test(a = t[i])) {
                    if (delete t[i], u = u || "toggle" === a, a === (R ? "hide" : "show")) {
                        if ("show" !== a || !q || void 0 === q[i])
                            continue;
                        R = !0;
                    }
                    C[i] = q && q[i] || o.style(e, i);
                } if ((p = !o.isEmptyObject(t)) || !o.isEmptyObject(C))
                for (i in k && 1 === e.nodeType && (n.overflow = [L.overflow, L.overflowX, L.overflowY], null == (y = q && q.display) && (y = F.get(e, "display")), "none" === (x = o.css(e, "display")) && (y ? x = y : (Nt([e], !0), y = e.style.display || y, x = o.css(e, "display"), Nt([e]))), ("inline" === x || "inline-block" === x && null != y) && "none" === o.css(e, "float") && (p || (T.done(function () { L.display = y; }), null == y && (y = "none" === (x = L.display) ? "" : x)), L.display = "inline-block")), n.overflow && (L.overflow = "hidden", T.always(function () { L.overflow = n.overflow[0], L.overflowX = n.overflow[1], L.overflowY = n.overflow[2]; })), p = !1, C)
                    p || (q ? "hidden" in q && (R = q.hidden) : q = F.access(e, "fxshow", { display: y }), u && (q.hidden = !R), R && Nt([e], !0), T.done(function () { for (i in R || Nt([e]), F.remove(e, "fxshow"), C)
                        o.style(e, i, C[i]); })), p = Ln(R ? q[i] : 0, i, T), i in q || (q[i] = p.start, R && (p.end = p.start, p.start = 0)); }], prefilter: function (e, t) { t ? Se.prefilters.unshift(e) : Se.prefilters.push(e); } }), o.speed = function (e, t, n) { var i = e && "object" == typeof e ? o.extend({}, e) : { complete: n || !n && t || B(e) && e, duration: e, easing: n && t || t && !B(t) && t }; return o.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in o.fx.speeds ? o.fx.speeds[i.duration] : o.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () { B(i.old) && i.old.call(this), i.queue && o.dequeue(this, i.queue); }, i; }, o.fn.extend({ fadeTo: function (e, t, n, i) { return this.filter(an).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i); }, animate: function (e, t, n, i) { var a = o.isEmptyObject(e), u = o.speed(t, n, i), c = function () { var g = Se(this, o.extend({}, e), u); (a || F.get(this, "finish")) && g.stop(!0); }; return c.finish = c, a || !1 === u.queue ? this.each(c) : this.queue(u.queue, c); }, stop: function (e, t, n) { var i = function (a) { var u = a.stop; delete a.stop, u(n); }; return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () { var a = !0, u = null != e && e + "queueHooks", c = o.timers, g = F.get(this); if (u)
            g[u] && g[u].stop && i(g[u]);
        else
            for (u in g)
                g[u] && g[u].stop && zt.test(u) && i(g[u]); for (u = c.length; u--;)
            c[u].elem !== this || null != e && c[u].queue !== e || (c[u].anim.stop(n), a = !1, c.splice(u, 1)); !a && n || o.dequeue(this, e); }); }, finish: function (e) { return !1 !== e && (e = e || "fx"), this.each(function () { var t, n = F.get(this), i = n[e + "queue"], a = n[e + "queueHooks"], u = o.timers, c = i ? i.length : 0; for (n.finish = !0, o.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = u.length; t--;)
            u[t].elem === this && u[t].queue === e && (u[t].anim.stop(!0), u.splice(t, 1)); for (t = 0; t < c; t++)
            i[t] && i[t].finish && i[t].finish.call(this); delete n.finish; }); } }), o.each(["toggle", "show", "hide"], function (e, t) { var n = o.fn[t]; o.fn[t] = function (i, a, u) { return null == i || "boolean" == typeof i ? n.apply(this, arguments) : this.animate(st(t, !0), i, a, u); }; }), o.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { o.fn[e] = function (n, i, a) { return this.animate(t, n, i, a); }; }), o.timers = [], o.fx.tick = function () { var e, t = 0, n = o.timers; for (Ce = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || o.fx.stop(), Ce = void 0; }, o.fx.timer = function (e) { o.timers.push(e), o.fx.start(); }, o.fx.interval = 13, o.fx.start = function () { $t || ($t = !0, Xt()); }, o.fx.stop = function () { $t = null; }, o.fx.speeds = { slow: 600, fast: 200, _default: 400 }, o.fn.delay = function (e, t) { return e = o.fx && o.fx.speeds[e] || e, this.queue(t = t || "fx", function (n, i) { var a = P.setTimeout(n, e); i.stop = function () { P.clearTimeout(a); }; }); }, _t = X.createElement("input"), On = X.createElement("select").appendChild(X.createElement("option")), _t.type = "checkbox", K.checkOn = "" !== _t.value, K.optSelected = On.selected, (_t = X.createElement("input")).value = "t", _t.type = "radio", K.radioValue = "t" === _t.value;
    var qn, Ot = o.expr.attrHandle;
    o.fn.extend({ attr: function (e, t) { return He(this, o.attr, e, t, 1 < arguments.length); }, removeAttr: function (e) { return this.each(function () { o.removeAttr(this, e); }); } }), o.extend({ attr: function (e, t, n) { var i, a, u = e.nodeType; if (3 !== u && 8 !== u && 2 !== u)
            return typeof e.getAttribute > "u" ? o.prop(e, t, n) : (1 === u && o.isXMLDoc(e) || (a = o.attrHooks[t.toLowerCase()] || (o.expr.match.bool.test(t) ? qn : void 0)), void 0 !== n ? null === n ? void o.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : null == (i = o.find.attr(e, t)) ? void 0 : i); }, attrHooks: { type: { set: function (e, t) { if (!K.radioValue && "radio" === t && me(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                } } } }, removeAttr: function (e, t) { var n, i = 0, a = t && t.match(ve); if (a && 1 === e.nodeType)
            for (; n = a[i++];)
                e.removeAttribute(n); } }), qn = { set: function (e, t, n) { return !1 === t ? o.removeAttr(e, n) : e.setAttribute(n, n), n; } }, o.each(o.expr.match.bool.source.match(/\w+/g), function (e, t) { var n = Ot[t] || o.find.attr; Ot[t] = function (i, a, u) { var c, g, p = a.toLowerCase(); return u || (g = Ot[p], Ot[p] = c, c = null != n(i, a, u) ? p : null, Ot[p] = g), c; }; });
    var Vt = /^(?:input|select|textarea|button)$/i, Pn = /^(?:a|area)$/i;
    function bt(e) { return (e.match(ve) || []).join(" "); }
    function lt(e) { return e.getAttribute && e.getAttribute("class") || ""; }
    function wt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(ve) || []; }
    o.fn.extend({ prop: function (e, t) { return He(this, o.prop, e, t, 1 < arguments.length); }, removeProp: function (e) { return this.each(function () { delete this[o.propFix[e] || e]; }); } }), o.extend({ prop: function (e, t, n) { var i, a, u = e.nodeType; if (3 !== u && 8 !== u && 2 !== u)
            return 1 === u && o.isXMLDoc(e) || (a = o.propHooks[t = o.propFix[t] || t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]; }, propHooks: { tabIndex: { get: function (e) { var t = o.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Vt.test(e.nodeName) || Pn.test(e.nodeName) && e.href ? 0 : -1; } } }, propFix: { for: "htmlFor", class: "className" } }), K.optSelected || (o.propHooks.selected = { get: function (e) { return null; }, set: function (e) { } }), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { o.propFix[this.toLowerCase()] = this; }), o.fn.extend({ addClass: function (e) { var t, n, i, a, u, c; return B(e) ? this.each(function (g) { o(this).addClass(e.call(this, g, lt(this))); }) : (t = wt(e)).length ? this.each(function () { if (i = lt(this), n = 1 === this.nodeType && " " + bt(i) + " ") {
            for (u = 0; u < t.length; u++)
                n.indexOf(" " + (a = t[u]) + " ") < 0 && (n += a + " ");
            c = bt(n), i !== c && this.setAttribute("class", c);
        } }) : this; }, removeClass: function (e) { var t, n, i, a, u, c; return B(e) ? this.each(function (g) { o(this).removeClass(e.call(this, g, lt(this))); }) : arguments.length ? (t = wt(e)).length ? this.each(function () { if (i = lt(this), n = 1 === this.nodeType && " " + bt(i) + " ") {
            for (u = 0; u < t.length; u++)
                for (a = t[u]; -1 < n.indexOf(" " + a + " ");)
                    n = n.replace(" " + a + " ", " ");
            c = bt(n), i !== c && this.setAttribute("class", c);
        } }) : this : this.attr("class", ""); }, toggleClass: function (e, t) { var n, i, a, u, c = typeof e, g = "string" === c || Array.isArray(e); return B(e) ? this.each(function (p) { o(this).toggleClass(e.call(this, p, lt(this), t), t); }) : "boolean" == typeof t && g ? t ? this.addClass(e) : this.removeClass(e) : (n = wt(e), this.each(function () { if (g)
            for (u = o(this), a = 0; a < n.length; a++)
                u.hasClass(i = n[a]) ? u.removeClass(i) : u.addClass(i);
        else
            void 0 !== e && "boolean" !== c || ((i = lt(this)) && F.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : F.get(this, "__className__") || "")); })); }, hasClass: function (e) { var t, n, i = 0; for (t = " " + e + " "; n = this[i++];)
            if (1 === n.nodeType && -1 < (" " + bt(lt(n)) + " ").indexOf(t))
                return !0; return !1; } });
    var Jn = /\r/g;
    o.fn.extend({ val: function (e) { var t, n, i, a = this[0]; return arguments.length ? (i = B(e), this.each(function (u) { var c; 1 === this.nodeType && (null == (c = i ? e.call(this, u, o(this).val()) : e) ? c = "" : "number" == typeof c ? c += "" : Array.isArray(c) && (c = o.map(c, function (g) { return null == g ? "" : g + ""; })), (t = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, c, "value") || (this.value = c)); })) : a ? (t = o.valHooks[a.type] || o.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : "string" == typeof (n = a.value) ? n.replace(Jn, "") : n !== null && n !== void 0 ? n : "" : void 0; } }), o.extend({ valHooks: { option: { get: function (e) { var _a; return (_a = o.find.attr(e, "value")) !== null && _a !== void 0 ? _a : bt(o.text(e)); } }, select: { get: function (e) { var t, n, i, a = e.options, u = e.selectedIndex, c = "select-one" === e.type, g = c ? null : [], p = c ? u + 1 : a.length; for (i = u < 0 ? p : c ? u : 0; i < p; i++)
                    if (((n = a[i]).selected || i === u) && !n.disabled && (!n.parentNode.disabled || !me(n.parentNode, "optgroup"))) {
                        if (t = o(n).val(), c)
                            return t;
                        g.push(t);
                    } return g; }, set: function (e, t) { for (var n, i, a = e.options, u = o.makeArray(t), c = a.length; c--;)
                    ((i = a[c]).selected = -1 < o.inArray(o.valHooks.option.get(i), u)) && (n = !0); return n || (e.selectedIndex = -1), u; } } } }), o.each(["radio", "checkbox"], function () { o.valHooks[this] = { set: function (e, t) { if (Array.isArray(t))
            return e.checked = -1 < o.inArray(o(e).val(), t); } }, K.checkOn || (o.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value; }); }), K.focusin = "onfocusin" in P;
    var Rn = /^(?:focusinfocus|focusoutblur)$/, Hn = function (e) { e.stopPropagation(); };
    o.extend(o.event, { trigger: function (e, t, n, i) { var a, u, c, g, p, y, x, k, T = [n || X], C = dt.call(e, "type") ? e.type : e, L = dt.call(e, "namespace") ? e.namespace.split(".") : []; if (u = k = c = n = n || X, 3 !== n.nodeType && 8 !== n.nodeType && !Rn.test(C + o.event.triggered) && (-1 < C.indexOf(".") && (C = (L = C.split(".")).shift(), L.sort()), p = C.indexOf(":") < 0 && "on" + C, (e = e[o.expando] ? e : new o.Event(C, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = L.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + L.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : o.makeArray(t, [e]), x = o.event.special[C] || {}, i || !x.trigger || !1 !== x.trigger.apply(n, t))) {
            if (!i && !x.noBubble && !Ge(n)) {
                for (Rn.test((g = x.delegateType || C) + C) || (u = u.parentNode); u; u = u.parentNode)
                    T.push(u), c = u;
                c === (n.ownerDocument || X) && T.push(c.defaultView || c.parentWindow || P);
            }
            for (a = 0; (u = T[a++]) && !e.isPropagationStopped();)
                k = u, e.type = 1 < a ? g : x.bindType || C, (y = (F.get(u, "events") || Object.create(null))[e.type] && F.get(u, "handle")) && y.apply(u, t), (y = p && u[p]) && y.apply && tt(u) && (e.result = y.apply(u, t), !1 === e.result && e.preventDefault());
            return e.type = C, i || e.isDefaultPrevented() || x._default && !1 !== x._default.apply(T.pop(), t) || !tt(n) || p && B(n[C]) && !Ge(n) && ((c = n[p]) && (n[p] = null), o.event.triggered = C, e.isPropagationStopped() && k.addEventListener(C, Hn), n[C](), e.isPropagationStopped() && k.removeEventListener(C, Hn), o.event.triggered = void 0, c && (n[p] = c)), e.result;
        } }, simulate: function (e, t, n) { var i = o.extend(new o.Event, n, { type: e, isSimulated: !0 }); o.event.trigger(i, null, t); } }), o.fn.extend({ trigger: function (e, t) { return this.each(function () { o.event.trigger(e, t, this); }); }, triggerHandler: function (e, t) { var n = this[0]; if (n)
            return o.event.trigger(e, t, n, !0); } }), K.focusin || o.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = function (i) { o.event.simulate(t, i.target, o.event.fix(i)); }; o.event.special[t] = { setup: function () { var i = this.ownerDocument || this.document || this, a = F.access(i, t); a || i.addEventListener(e, n, !0), F.access(i, t, (a || 0) + 1); }, teardown: function () { var i = this.ownerDocument || this.document || this, a = F.access(i, t) - 1; a ? F.access(i, t, a) : (i.removeEventListener(e, n, !0), F.remove(i, t)); } }; });
    var Yt = P.location, Kt = { guid: Date.now() }, b = /\?/;
    o.parseXML = function (e) { var t, n; if (!e || "string" != typeof e)
        return null; try {
        t = (new P.DOMParser).parseFromString(e, "text/xml");
    }
    catch (_a) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || o.error("Invalid XML: " + (n ? o.map(n.childNodes, function (i) { return i.textContent; }).join("\n") : e)), t; };
    var m = /\[\]$/, r = /\r?\n/g, l = /^(?:submit|button|image|reset|file)$/i, d = /^(?:input|select|textarea|keygen)/i;
    function _(e, t, n, i) { var a; if (Array.isArray(t))
        o.each(t, function (u, c) { n || m.test(e) ? i(e, c) : _(e + "[" + ("object" == typeof c && null != c ? u : "") + "]", c, n, i); });
    else if (n || "object" !== Je(t))
        i(e, t);
    else
        for (a in t)
            _(e + "[" + a + "]", t[a], n, i); }
    o.param = function (e, t) { var n, i = [], a = function (u, c) { var g = B(c) ? c() : c; i[i.length] = encodeURIComponent(u) + "=" + encodeURIComponent(g !== null && g !== void 0 ? g : ""); }; if (null == e)
        return ""; if (Array.isArray(e) || e.jquery && !o.isPlainObject(e))
        o.each(e, function () { a(this.name, this.value); });
    else
        for (n in e)
            _(n, e[n], t, a); return i.join("&"); }, o.fn.extend({ serialize: function () { return o.param(this.serializeArray()); }, serializeArray: function () { return this.map(function () { var e = o.prop(this, "elements"); return e ? o.makeArray(e) : this; }).filter(function () { var e = this.type; return this.name && !o(this).is(":disabled") && d.test(this.nodeName) && !l.test(e) && (this.checked || !rt.test(e)); }).map(function (e, t) { var n = o(this).val(); return null == n ? null : Array.isArray(n) ? o.map(n, function (i) { return { name: t.name, value: i.replace(r, "\r\n") }; }) : { name: t.name, value: n.replace(r, "\r\n") }; }).get(); } });
    var E = /%20/g, j = /#.*$/, H = /([?&])_=[^&]*/, Z = /^(.*?):[ \t]*([^\r\n]*)$/gm, J = /^(?:GET|HEAD)$/, Te = /^\/\//, Ve = {}, ut = {}, fn = "*/".concat("*"), dn = X.createElement("a");
    function hn(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var i, a = 0, u = t.toLowerCase().match(ve) || []; if (B(n))
        for (; i = u[a++];)
            "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n); }; }
    function Fn(e, t, n, i) { var a = {}, u = e === ut; function c(g) { var p; return a[g] = !0, o.each(e[g] || [], function (y, x) { var k = x(t, n, i); return "string" != typeof k || u || a[k] ? u ? !(p = k) : void 0 : (t.dataTypes.unshift(k), c(k), !1); }), p; } return c(t.dataTypes[0]) || !a["*"] && c("*"); }
    function Gt(e, t) { var n, i, a = o.ajaxSettings.flatOptions || {}; for (n in t)
        void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]); return i && o.extend(!0, e, i), e; }
    dn.href = Yt.href, o.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": fn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": o.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Gt(Gt(e, o.ajaxSettings), t) : Gt(o.ajaxSettings, e); }, ajaxPrefilter: hn(Ve), ajaxTransport: hn(ut), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0); var n, i, a, u, c, g, p, y, x, k, T = o.ajaxSetup({}, t = t || {}), C = T.context || T, L = T.context && (C.nodeType || C.jquery) ? o(C) : o.event, R = o.Deferred(), q = o.Callbacks("once memory"), re = T.statusCode || {}, de = {}, je = {}, ee = "canceled", Q = { readyState: 0, getResponseHeader: function (Y) { var oe; if (p) {
                if (!u)
                    for (u = {}; oe = Z.exec(a);)
                        u[oe[1].toLowerCase() + " "] = (u[oe[1].toLowerCase() + " "] || []).concat(oe[2]);
                oe = u[Y.toLowerCase() + " "];
            } return null == oe ? null : oe.join(", "); }, getAllResponseHeaders: function () { return p ? a : null; }, setRequestHeader: function (Y, oe) { return null == p && (Y = je[Y.toLowerCase()] = je[Y.toLowerCase()] || Y, de[Y] = oe), this; }, overrideMimeType: function (Y) { return null == p && (T.mimeType = Y), this; }, statusCode: function (Y) { var oe; if (Y)
                if (p)
                    Q.always(Y[Q.status]);
                else
                    for (oe in Y)
                        re[oe] = [re[oe], Y[oe]]; return this; }, abort: function (Y) { var oe = Y || ee; return n && n.abort(oe), ke(0, oe), this; } }; if (R.promise(Q), T.url = ((e || T.url || Yt.href) + "").replace(Te, Yt.protocol + "//"), T.type = t.method || t.type || T.method || T.type, T.dataTypes = (T.dataType || "*").toLowerCase().match(ve) || [""], null == T.crossDomain) {
            g = X.createElement("a");
            try {
                g.href = T.url, g.href = g.href, T.crossDomain = dn.protocol + "//" + dn.host != g.protocol + "//" + g.host;
            }
            catch (_a) {
                T.crossDomain = !0;
            }
        } if (T.data && T.processData && "string" != typeof T.data && (T.data = o.param(T.data, T.traditional)), Fn(Ve, T, t, Q), p)
            return Q; for (x in (y = o.event && T.global) && 0 == o.active++ && o.event.trigger("ajaxStart"), T.type = T.type.toUpperCase(), T.hasContent = !J.test(T.type), i = T.url.replace(j, ""), T.hasContent ? T.data && T.processData && 0 === (T.contentType || "").indexOf("application/x-www-form-urlencoded") && (T.data = T.data.replace(E, "+")) : (k = T.url.slice(i.length), T.data && (T.processData || "string" == typeof T.data) && (i += (b.test(i) ? "&" : "?") + T.data, delete T.data), !1 === T.cache && (i = i.replace(H, "$1"), k = (b.test(i) ? "&" : "?") + "_=" + Kt.guid++ + k), T.url = i + k), T.ifModified && (o.lastModified[i] && Q.setRequestHeader("If-Modified-Since", o.lastModified[i]), o.etag[i] && Q.setRequestHeader("If-None-Match", o.etag[i])), (T.data && T.hasContent && !1 !== T.contentType || t.contentType) && Q.setRequestHeader("Content-Type", T.contentType), Q.setRequestHeader("Accept", T.dataTypes[0] && T.accepts[T.dataTypes[0]] ? T.accepts[T.dataTypes[0]] + ("*" !== T.dataTypes[0] ? ", " + fn + "; q=0.01" : "") : T.accepts["*"]), T.headers)
            Q.setRequestHeader(x, T.headers[x]); if (T.beforeSend && (!1 === T.beforeSend.call(C, Q, T) || p))
            return Q.abort(); if (ee = "abort", q.add(T.complete), Q.done(T.success), Q.fail(T.error), n = Fn(ut, T, t, Q)) {
            if (Q.readyState = 1, y && L.trigger("ajaxSend", [Q, T]), p)
                return Q;
            T.async && 0 < T.timeout && (c = P.setTimeout(function () { Q.abort("timeout"); }, T.timeout));
            try {
                p = !1, n.send(de, ke);
            }
            catch (Y) {
                if (p)
                    throw Y;
                ke(-1, Y);
            }
        }
        else
            ke(-1, "No Transport"); function ke(Y, oe, Mn, ni) { var Ie, Jt, pn, Ae, gn, Be = oe; p || (p = !0, c && P.clearTimeout(c), n = void 0, a = ni || "", Q.readyState = 0 < Y ? 4 : 0, Ie = 200 <= Y && Y < 300 || 304 === Y, Mn && (Ae = function (ae, Oe, Le) { for (var ct, $, G, he, qe = ae.contents, le = ae.dataTypes; "*" === le[0];)
            le.shift(), void 0 === ct && (ct = ae.mimeType || Oe.getResponseHeader("Content-Type")); if (ct)
            for ($ in qe)
                if (qe[$] && qe[$].test(ct)) {
                    le.unshift($);
                    break;
                } if (le[0] in Le)
            G = le[0];
        else {
            for ($ in Le) {
                if (!le[0] || ae.converters[$ + " " + le[0]]) {
                    G = $;
                    break;
                }
                he || (he = $);
            }
            G = G || he;
        } if (G)
            return G !== le[0] && le.unshift(G), Le[G]; }(T, Q, Mn)), !Ie && -1 < o.inArray("script", T.dataTypes) && o.inArray("json", T.dataTypes) < 0 && (T.converters["text script"] = function () { }), Ae = function (ae, Oe, Le, ct) { var $, G, he, qe, le, Pe = {}, mn = ae.dataTypes.slice(); if (mn[1])
            for (he in ae.converters)
                Pe[he.toLowerCase()] = ae.converters[he]; for (G = mn.shift(); G;)
            if (ae.responseFields[G] && (Le[ae.responseFields[G]] = Oe), !le && ct && ae.dataFilter && (Oe = ae.dataFilter(Oe, ae.dataType)), le = G, G = mn.shift())
                if ("*" === G)
                    G = le;
                else if ("*" !== le && le !== G) {
                    if (!(he = Pe[le + " " + G] || Pe["* " + G]))
                        for ($ in Pe)
                            if ((qe = $.split(" "))[1] === G && (he = Pe[le + " " + qe[0]] || Pe["* " + qe[0]])) {
                                !0 === he ? he = Pe[$] : !0 !== Pe[$] && (G = qe[0], mn.unshift(qe[1]));
                                break;
                            }
                    if (!0 !== he)
                        if (he && ae.throws)
                            Oe = he(Oe);
                        else
                            try {
                                Oe = he(Oe);
                            }
                            catch (ii) {
                                return { state: "parsererror", error: he ? ii : "No conversion from " + le + " to " + G };
                            }
                } return { state: "success", data: Oe }; }(T, Ae, Q, Ie), Ie ? (T.ifModified && ((gn = Q.getResponseHeader("Last-Modified")) && (o.lastModified[i] = gn), (gn = Q.getResponseHeader("etag")) && (o.etag[i] = gn)), 204 === Y || "HEAD" === T.type ? Be = "nocontent" : 304 === Y ? Be = "notmodified" : (Be = Ae.state, Jt = Ae.data, Ie = !(pn = Ae.error))) : (pn = Be, !Y && Be || (Be = "error", Y < 0 && (Y = 0))), Q.status = Y, Q.statusText = (oe || Be) + "", Ie ? R.resolveWith(C, [Jt, Be, Q]) : R.rejectWith(C, [Q, Be, pn]), Q.statusCode(re), re = void 0, y && L.trigger(Ie ? "ajaxSuccess" : "ajaxError", [Q, T, Ie ? Jt : pn]), q.fireWith(C, [Q, Be]), y && (L.trigger("ajaxComplete", [Q, T]), --o.active || o.event.trigger("ajaxStop"))); } return Q; }, getJSON: function (e, t, n) { return o.get(e, t, n, "json"); }, getScript: function (e, t) { return o.get(e, void 0, t, "script"); } }), o.each(["get", "post"], function (e, t) { o[t] = function (n, i, a, u) { return B(i) && (u = u || a, a = i, i = void 0), o.ajax(o.extend({ url: n, type: t, dataType: u, data: i, success: a }, o.isPlainObject(n) && n)); }; }), o.ajaxPrefilter(function (e) { var t; for (t in e.headers)
        "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || ""); }), o._evalUrl = function (e, t, n) { return o.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (i) { o.globalEval(i, t, n); } }); }, o.fn.extend({ wrapAll: function (e) { var t; return this[0] && (B(e) && (e = e.call(this[0])), t = o(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { for (var n = this; n.firstElementChild;)
            n = n.firstElementChild; return n; }).append(this)), this; }, wrapInner: function (e) { return B(e) ? this.each(function (t) { o(this).wrapInner(e.call(this, t)); }) : this.each(function () { var t = o(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e); }); }, wrap: function (e) { var t = B(e); return this.each(function (n) { o(this).wrapAll(t ? e.call(this, n) : e); }); }, unwrap: function (e) { return this.parent(e).not("body").each(function () { o(this).replaceWith(this.childNodes); }), this; } }), o.expr.pseudos.hidden = function (e) { return !o.expr.pseudos.visible(e); }, o.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length); }, o.ajaxSettings.xhr = function () { try {
        return new P.XMLHttpRequest;
    }
    catch (_a) { } };
    var Zn = { 0: 200, 1223: 204 }, Tt = o.ajaxSettings.xhr();
    K.cors = !!Tt && "withCredentials" in Tt, K.ajax = Tt = !!Tt, o.ajaxTransport(function (e) { var t, n; if (K.cors || Tt && !e.crossDomain)
        return { send: function (i, a) { var u, c = e.xhr(); if (c.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                for (u in e.xhrFields)
                    c[u] = e.xhrFields[u]; for (u in e.mimeType && c.overrideMimeType && c.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)
                c.setRequestHeader(u, i[u]); t = function (g) { return function () { t && (t = n = c.onload = c.onerror = c.onabort = c.ontimeout = c.onreadystatechange = null, "abort" === g ? c.abort() : "error" === g ? "number" != typeof c.status ? a(0, "error") : a(c.status, c.statusText) : a(Zn[c.status] || c.status, c.statusText, "text" !== (c.responseType || "text") || "string" != typeof c.responseText ? { binary: c.response } : { text: c.responseText }, c.getAllResponseHeaders())); }; }, c.onload = t(), n = c.onerror = c.ontimeout = t("error"), void 0 !== c.onabort ? c.onabort = n : c.onreadystatechange = function () { 4 === c.readyState && P.setTimeout(function () { t && n(); }); }, t = t("abort"); try {
                c.send(e.hasContent && e.data || null);
            }
            catch (g) {
                if (t)
                    throw g;
            } }, abort: function () { t && t(); } }; }), o.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1); }), o.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return o.globalEval(e), e; } } }), o.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET"); }), o.ajaxTransport("script", function (e) { var t, n; if (e.crossDomain || e.scriptAttrs)
        return { send: function (i, a) { t = o("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (u) { t.remove(), n = null, u && a("error" === u.type ? 404 : 200, u.type); }), X.head.appendChild(t[0]); }, abort: function () { n && n(); } }; });
    var ei, ti = [], wi = /(=)\?(?=&|$)|\?\?/;
    o.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = ti.pop() || o.expando + "_" + Kt.guid++; return this[e] = !0, e; } }), o.ajaxPrefilter("json jsonp", function (e, t, n) { var i, a, u, c = !1 !== e.jsonp && (wi.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && wi.test(e.data) && "data"); if (c || "jsonp" === e.dataTypes[0])
        return i = e.jsonpCallback = B(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, c ? e[c] = e[c].replace(wi, "$1" + i) : !1 !== e.jsonp && (e.url += (b.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () { return u || o.error(i + " was not called"), u[0]; }, e.dataTypes[0] = "json", a = P[i], P[i] = function () { u = arguments; }, n.always(function () { void 0 === a ? o(P).removeProp(i) : P[i] = a, e[i] && (e.jsonpCallback = t.jsonpCallback, ti.push(i)), u && B(a) && a(u[0]), u = a = void 0; }), "script"; }), K.createHTMLDocument = ((ei = X.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ei.childNodes.length), o.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (K.createHTMLDocument ? ((i = (t = X.implementation.createHTMLDocument("")).createElement("base")).href = X.location.href, t.head.appendChild(i)) : t = X), u = !n && [], (a = wn.exec(e)) ? [t.createElement(a[1])] : (a = An([e], t, u), u && u.length && o(u).remove(), o.merge([], a.childNodes))); var i, a, u; }, o.fn.load = function (e, t, n) { var i, a, u, c = this, g = e.indexOf(" "); return -1 < g && (i = bt(e.slice(g)), e = e.slice(0, g)), B(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), 0 < c.length && o.ajax({ url: e, type: a || "GET", dataType: "html", data: t }).done(function (p) { u = arguments, c.html(i ? o("<div>").append(o.parseHTML(p)).find(i) : p); }).always(n && function (p, y) { c.each(function () { n.apply(this, u || [p.responseText, y, p]); }); }), this; }, o.expr.pseudos.animated = function (e) { return o.grep(o.timers, function (t) { return e === t.elem; }).length; }, o.offset = { setOffset: function (e, t, n) { var i, a, u, c, g, p, y = o.css(e, "position"), x = o(e), k = {}; "static" === y && (e.style.position = "relative"), g = x.offset(), u = o.css(e, "top"), p = o.css(e, "left"), ("absolute" === y || "fixed" === y) && -1 < (u + p).indexOf("auto") ? (c = (i = x.position()).top, a = i.left) : (c = parseFloat(u) || 0, a = parseFloat(p) || 0), B(t) && (t = t.call(e, n, o.extend({}, g))), null != t.top && (k.top = t.top - g.top + c), null != t.left && (k.left = t.left - g.left + a), "using" in t ? t.using.call(e, k) : x.css(k); } }, o.fn.extend({ offset: function (e) { if (arguments.length)
            return void 0 === e ? this : this.each(function (a) { o.offset.setOffset(this, e, a); }); var t, n, i = this[0]; return i ? i.getClientRects().length ? { top: (t = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset, left: t.left + n.pageXOffset } : { top: 0, left: 0 } : void 0; }, position: function () { if (this[0]) {
            var e, t, n, i = this[0], a = { top: 0, left: 0 };
            if ("fixed" === o.css(i, "position"))
                t = i.getBoundingClientRect();
            else {
                for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === o.css(e, "position");)
                    e = e.parentNode;
                e && e !== i && 1 === e.nodeType && ((a = o(e).offset()).top += o.css(e, "borderTopWidth", !0), a.left += o.css(e, "borderLeftWidth", !0));
            }
            return { top: t.top - a.top - o.css(i, "marginTop", !0), left: t.left - a.left - o.css(i, "marginLeft", !0) };
        } }, offsetParent: function () { return this.map(function () { for (var e = this.offsetParent; e && "static" === o.css(e, "position");)
            e = e.offsetParent; return e || Me; }); } }), o.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) { var n = "pageYOffset" === t; o.fn[e] = function (i) { return He(this, function (a, u, c) { var g; if (Ge(a) ? g = a : 9 === a.nodeType && (g = a.defaultView), void 0 === c)
        return g ? g[t] : a[u]; g ? g.scrollTo(n ? g.pageXOffset : c, n ? c : g.pageYOffset) : a[u] = c; }, e, i, arguments.length); }; }), o.each(["top", "left"], function (e, t) { o.cssHooks[t] = Vn(K.pixelPosition, function (n, i) { if (i)
        return i = Ut(n, t), jt.test(i) ? o(n).position()[t] + "px" : i; }); }), o.each({ Height: "height", Width: "width" }, function (e, t) { o.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) { o.fn[i] = function (a, u) { var c = arguments.length && (n || "boolean" != typeof a), g = n || (!0 === a || !0 === u ? "margin" : "border"); return He(this, function (p, y, x) { var k; return Ge(p) ? 0 === i.indexOf("outer") ? p["inner" + e] : p.document.documentElement["client" + e] : 9 === p.nodeType ? (k = p.documentElement, Math.max(p.body["scroll" + e], k["scroll" + e], p.body["offset" + e], k["offset" + e], k["client" + e])) : void 0 === x ? o.css(p, y, g) : o.style(p, y, x, g); }, t, c ? a : void 0, c); }; }); }), o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { o.fn[t] = function (n) { return this.on(t, n); }; }), o.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n); }, unbind: function (e, t) { return this.off(e, null, t); }, delegate: function (e, t, n, i) { return this.on(t, e, n, i); }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n); }, hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e); } }), o.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) { o.fn[t] = function (n, i) { return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t); }; });
    var Pi = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    o.proxy = function (e, t) { var n, i, a; if ("string" == typeof t && (n = e[t], t = e, e = n), B(e))
        return i = s.call(arguments, 2), (a = function () { return e.apply(t || this, i.concat(s.call(arguments))); }).guid = e.guid = e.guid || o.guid++, a; }, o.holdReady = function (e) { e ? o.readyWait++ : o.ready(!0); }, o.isArray = Array.isArray, o.parseJSON = JSON.parse, o.nodeName = me, o.isFunction = B, o.isWindow = Ge, o.camelCase = ye, o.type = Je, o.now = Date.now, o.isNumeric = function (e) { var t = o.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)); }, o.trim = function (e) { return null == e ? "" : (e + "").replace(Pi, "$1"); }, "function" == typeof define && define.amd && define("jquery", [], function () { return o; });
    var Ri = P.jQuery, Hi = P.$;
    return o.noConflict = function (e) { return P.$ === o && (P.$ = Hi), e && P.jQuery === o && (P.jQuery = Ri), o; }, typeof Ue > "u" && (P.jQuery = P.$ = o), o;
}), function (P, Ue) { "object" == typeof exports && typeof module < "u" ? Ue(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], Ue) : Ue((P = typeof globalThis < "u" ? globalThis : P || self).bootstrap = {}, P.jQuery, P.Popper); }(this, function (P, Ue, xe) {
    "use strict";
    function vn(b) { return b && "object" == typeof b && "default" in b ? b : { default: b }; }
    var s = vn(Ue), Lt = vn(xe);
    function en(b, m) { for (var r = 0; r < m.length; r++) {
        var l = m[r];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(b, l.key, l);
    } }
    function _e(b, m, r) { return m && en(b.prototype, m), r && en(b, r), Object.defineProperty(b, "prototype", { writable: !1 }), b; }
    function te() { return te = Object.assign ? Object.assign.bind() : function (b) { for (var m = 1; m < arguments.length; m++) {
        var r = arguments[m];
        for (var l in r)
            Object.prototype.hasOwnProperty.call(r, l) && (b[l] = r[l]);
    } return b; }, te.apply(this, arguments); }
    function tn(b, m) { return (tn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, l) { return r.__proto__ = l, r; })(b, m); }
    var dt = "transitionend", O = { TRANSITION_END: "bsTransitionEnd", getUID: function (b) { do {
            b += ~~(1e6 * Math.random());
        } while (document.getElementById(b)); return b; }, getSelectorFromElement: function (b) { var m = b.getAttribute("data-target"); if (!m || "#" === m) {
            var r = b.getAttribute("href");
            m = r && "#" !== r ? r.trim() : "";
        } try {
            return document.querySelector(m) ? m : null;
        }
        catch (_a) {
            return null;
        } }, getTransitionDurationFromElement: function (b) { if (!b)
            return 0; var m = s.default(b).css("transition-duration"), r = s.default(b).css("transition-delay"), l = parseFloat(m), d = parseFloat(r); return l || d ? (m = m.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(m) + parseFloat(r))) : 0; }, reflow: function (b) { return b.offsetHeight; }, triggerTransitionEnd: function (b) { s.default(b).trigger(dt); }, supportsTransitionEnd: function () { return Boolean(dt); }, isElement: function (b) { return (b[0] || b).nodeType; }, typeCheckConfig: function (b, m, r) { for (var l in r)
            if (Object.prototype.hasOwnProperty.call(r, l)) {
                var d = r[l], _ = m[l], E = _ && O.isElement(_) ? "element" : null === (j = _) || typeof j > "u" ? "" + j : {}.toString.call(j).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(d).test(E))
                    throw new Error(b.toUpperCase() + ': Option "' + l + '" provided type "' + E + '" but expected type "' + d + '".');
            } var j; }, findShadowRoot: function (b) { if (!document.documentElement.attachShadow)
            return null; if ("function" == typeof b.getRootNode) {
            var m = b.getRootNode();
            return m instanceof ShadowRoot ? m : null;
        } return b instanceof ShadowRoot ? b : b.parentNode ? O.findShadowRoot(b.parentNode) : null; }, jQueryDetection: function () { if (typeof s.default > "u")
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var b = s.default.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 === b[0] && 9 === b[1] && b[2] < 1 || b[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"); } };
    O.jQueryDetection(), s.default.fn.emulateTransitionEnd = function (b) { var m = this, r = !1; return s.default(this).one(O.TRANSITION_END, function () { r = !0; }), setTimeout(function () { r || O.triggerTransitionEnd(m); }, b), this; }, s.default.event.special[O.TRANSITION_END] = { bindType: dt, delegateType: dt, handle: function (b) { if (s.default(b.target).is(this))
            return b.handleObj.handler.apply(this, arguments); } };
    var yn = "bs.alert", K = s.default.fn.alert, B = function () { function b(r) { this._element = r; } var m = b.prototype; return m.close = function (r) { var l = this._element; r && (l = this._getRootElement(r)), this._triggerCloseEvent(l).isDefaultPrevented() || this._removeElement(l); }, m.dispose = function () { s.default.removeData(this._element, yn), this._element = null; }, m._getRootElement = function (r) { var l = O.getSelectorFromElement(r), d = !1; return l && (d = document.querySelector(l)), d || (d = s.default(r).closest(".alert")[0]), d; }, m._triggerCloseEvent = function (r) { var l = s.default.Event("close.bs.alert"); return s.default(r).trigger(l), l; }, m._removeElement = function (r) { var l = this; if (s.default(r).removeClass("show"), s.default(r).hasClass("fade")) {
        var d = O.getTransitionDurationFromElement(r);
        s.default(r).one(O.TRANSITION_END, function (_) { return l._destroyElement(r, _); }).emulateTransitionEnd(d);
    }
    else
        this._destroyElement(r); }, m._destroyElement = function (r) { s.default(r).detach().trigger("closed.bs.alert").remove(); }, b._jQueryInterface = function (r) { return this.each(function () { var l = s.default(this), d = l.data(yn); d || (d = new b(this), l.data(yn, d)), "close" === r && d[r](this); }); }, b._handleDismiss = function (r) { return function (l) { l && l.preventDefault(), r.close(this); }; }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }]), b; }();
    s.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', B._handleDismiss(new B)), s.default.fn.alert = B._jQueryInterface, s.default.fn.alert.Constructor = B, s.default.fn.alert.noConflict = function () { return s.default.fn.alert = K, B._jQueryInterface; };
    var Ge = "bs.button", X = s.default.fn.button, Qe = "active", _n = '[data-toggle^="button"]', Je = 'input:not([type="hidden"])', o = function () { function b(r) { this._element = r, this.shouldAvoidTriggerChange = !1; } var m = b.prototype; return m.toggle = function () { var r = !0, l = !0, d = s.default(this._element).closest('[data-toggle="buttons"]')[0]; if (d) {
        var _ = this._element.querySelector(Je);
        if (_) {
            if ("radio" === _.type)
                if (_.checked && this._element.classList.contains(Qe))
                    r = !1;
                else {
                    var E = d.querySelector(".active");
                    E && s.default(E).removeClass(Qe);
                }
            r && ("checkbox" !== _.type && "radio" !== _.type || (_.checked = !this._element.classList.contains(Qe)), this.shouldAvoidTriggerChange || s.default(_).trigger("change")), _.focus(), l = !1;
        }
    } this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (l && this._element.setAttribute("aria-pressed", !this._element.classList.contains(Qe)), r && s.default(this._element).toggleClass(Qe)); }, m.dispose = function () { s.default.removeData(this._element, Ge), this._element = null; }, b._jQueryInterface = function (r, l) { return this.each(function () { var d = s.default(this), _ = d.data(Ge); _ || (_ = new b(this), d.data(Ge, _)), _.shouldAvoidTriggerChange = l, "toggle" === r && _[r](); }); }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }]), b; }();
    s.default(document).on("click.bs.button.data-api", _n, function (b) { var m = b.target, r = m; if (s.default(m).hasClass("btn") || (m = s.default(m).closest(".btn")[0]), !m || m.hasAttribute("disabled") || m.classList.contains("disabled"))
        b.preventDefault();
    else {
        var l = m.querySelector(Je);
        if (l && (l.hasAttribute("disabled") || l.classList.contains("disabled")))
            return void b.preventDefault();
        "INPUT" !== r.tagName && "LABEL" === m.tagName || o._jQueryInterface.call(s.default(m), "toggle", "INPUT" === r.tagName);
    } }).on("focus.bs.button.data-api blur.bs.button.data-api", _n, function (b) { var m = s.default(b.target).closest(".btn")[0]; s.default(m).toggleClass("focus", /^focus(in)?$/.test(b.type)); }), s.default(window).on("load.bs.button.data-api", function () { for (var b = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), m = 0, r = b.length; m < r; m++) {
        var l = b[m], d = l.querySelector(Je);
        d.checked || d.hasAttribute("checked") ? l.classList.add(Qe) : l.classList.remove(Qe);
    } for (var _ = 0, E = (b = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; _ < E; _++) {
        var j = b[_];
        "true" === j.getAttribute("aria-pressed") ? j.classList.add(Qe) : j.classList.remove(Qe);
    } }), s.default.fn.button = o._jQueryInterface, s.default.fn.button.Constructor = o, s.default.fn.button.noConflict = function () { return s.default.fn.button = X, o._jQueryInterface; };
    var Ze = "carousel", Re = "bs.carousel", Ct = s.default.fn[Ze], ht = "active", qt = "next", me = "prev", wn = "slid.bs.carousel", St = ".active.carousel-item", nn = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 }, ci = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, Wn = { TOUCH: "touch", PEN: "pen" }, kt = function () { function b(r, l) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(l), this._element = r, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners(); } var m = b.prototype; return m.next = function () { this._isSliding || this._slide(qt); }, m.nextWhenVisible = function () { var r = s.default(this._element); !document.hidden && r.is(":visible") && "hidden" !== r.css("visibility") && this.next(); }, m.prev = function () { this._isSliding || this._slide(me); }, m.pause = function (r) { r || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (O.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null; }, m.cycle = function (r) { r || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)); }, m.to = function (r) { var l = this; this._activeElement = this._element.querySelector(St); var d = this._getItemIndex(this._activeElement); if (!(r > this._items.length - 1 || r < 0))
        if (this._isSliding)
            s.default(this._element).one(wn, function () { return l.to(r); });
        else {
            if (d === r)
                return this.pause(), void this.cycle();
            this._slide(r > d ? qt : me, this._items[r]);
        } }, m.dispose = function () { s.default(this._element).off(".bs.carousel"), s.default.removeData(this._element, Re), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null; }, m._getConfig = function (r) { return r = te({}, nn, r), O.typeCheckConfig(Ze, r, ci), r; }, m._handleSwipe = function () { var r = Math.abs(this.touchDeltaX); if (!(r <= 40)) {
        var l = r / this.touchDeltaX;
        this.touchDeltaX = 0, l > 0 && this.prev(), l < 0 && this.next();
    } }, m._addEventListeners = function () { var r = this; this._config.keyboard && s.default(this._element).on("keydown.bs.carousel", function (l) { return r._keydown(l); }), "hover" === this._config.pause && s.default(this._element).on("mouseenter.bs.carousel", function (l) { return r.pause(l); }).on("mouseleave.bs.carousel", function (l) { return r.cycle(l); }), this._config.touch && this._addTouchEventListeners(); }, m._addTouchEventListeners = function () { var r = this; if (this._touchSupported) {
        var l = function (_) { r._pointerEvent && Wn[_.originalEvent.pointerType.toUpperCase()] ? r.touchStartX = _.originalEvent.clientX : r._pointerEvent || (r.touchStartX = _.originalEvent.touches[0].clientX); }, d = function (_) { r._pointerEvent && Wn[_.originalEvent.pointerType.toUpperCase()] && (r.touchDeltaX = _.originalEvent.clientX - r.touchStartX), r._handleSwipe(), "hover" === r._config.pause && (r.pause(), r.touchTimeout && clearTimeout(r.touchTimeout), r.touchTimeout = setTimeout(function (E) { return r.cycle(E); }, 500 + r._config.interval)); };
        s.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (_) { return _.preventDefault(); }), this._pointerEvent ? (s.default(this._element).on("pointerdown.bs.carousel", function (_) { return l(_); }), s.default(this._element).on("pointerup.bs.carousel", function (_) { return d(_); }), this._element.classList.add("pointer-event")) : (s.default(this._element).on("touchstart.bs.carousel", function (_) { return l(_); }), s.default(this._element).on("touchmove.bs.carousel", function (_) { var E; r.touchDeltaX = (E = _).originalEvent.touches && E.originalEvent.touches.length > 1 ? 0 : E.originalEvent.touches[0].clientX - r.touchStartX; }), s.default(this._element).on("touchend.bs.carousel", function (_) { return d(_); }));
    } }, m._keydown = function (r) { if (!/input|textarea/i.test(r.target.tagName))
        switch (r.which) {
            case 37:
                r.preventDefault(), this.prev();
                break;
            case 39: r.preventDefault(), this.next();
        } }, m._getItemIndex = function (r) { return this._items = r && r.parentNode ? [].slice.call(r.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(r); }, m._getItemByDirection = function (r, l) { var d = r === qt, _ = r === me, E = this._getItemIndex(l); if ((_ && 0 === E || d && E === this._items.length - 1) && !this._config.wrap)
        return l; var H = (E + (r === me ? -1 : 1)) % this._items.length; return -1 === H ? this._items[this._items.length - 1] : this._items[H]; }, m._triggerSlideEvent = function (r, l) { var d = this._getItemIndex(r), _ = this._getItemIndex(this._element.querySelector(St)), E = s.default.Event("slide.bs.carousel", { relatedTarget: r, direction: l, from: _, to: d }); return s.default(this._element).trigger(E), E; }, m._setActiveIndicatorElement = function (r) { if (this._indicatorsElement) {
        var l = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
        s.default(l).removeClass(ht);
        var d = this._indicatorsElement.children[this._getItemIndex(r)];
        d && s.default(d).addClass(ht);
    } }, m._updateInterval = function () { var r = this._activeElement || this._element.querySelector(St); if (r) {
        var l = parseInt(r.getAttribute("data-interval"), 10);
        l ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = l) : this._config.interval = this._config.defaultInterval || this._config.interval;
    } }, m._slide = function (r, l) { var d, _, E, j = this, H = this._element.querySelector(St), Z = this._getItemIndex(H), J = l || H && this._getItemByDirection(r, H), Te = this._getItemIndex(J), Ve = Boolean(this._interval); if (r === qt ? (d = "carousel-item-left", _ = "carousel-item-next", E = "left") : (d = "carousel-item-right", _ = "carousel-item-prev", E = "right"), J && s.default(J).hasClass(ht))
        this._isSliding = !1;
    else if (!this._triggerSlideEvent(J, E).isDefaultPrevented() && H && J) {
        this._isSliding = !0, Ve && this.pause(), this._setActiveIndicatorElement(J), this._activeElement = J;
        var ut = s.default.Event(wn, { relatedTarget: J, direction: E, from: Z, to: Te });
        if (s.default(this._element).hasClass("slide")) {
            s.default(J).addClass(_), O.reflow(J), s.default(H).addClass(d), s.default(J).addClass(d);
            var fn = O.getTransitionDurationFromElement(H);
            s.default(H).one(O.TRANSITION_END, function () { s.default(J).removeClass(d + " " + _).addClass(ht), s.default(H).removeClass("active " + _ + " " + d), j._isSliding = !1, setTimeout(function () { return s.default(j._element).trigger(ut); }, 0); }).emulateTransitionEnd(fn);
        }
        else
            s.default(H).removeClass(ht), s.default(J).addClass(ht), this._isSliding = !1, s.default(this._element).trigger(ut);
        Ve && this.cycle();
    } }, b._jQueryInterface = function (r) { return this.each(function () { var l = s.default(this).data(Re), d = te({}, nn, s.default(this).data()); "object" == typeof r && (d = te({}, d, r)); var _ = "string" == typeof r ? r : d.slide; if (l || (l = new b(this, d), s.default(this).data(Re, l)), "number" == typeof r)
        l.to(r);
    else if ("string" == typeof _) {
        if (typeof l[_] > "u")
            throw new TypeError('No method named "' + _ + '"');
        l[_]();
    }
    else
        d.interval && d.ride && (l.pause(), l.cycle()); }); }, b._dataApiClickHandler = function (r) { var l = O.getSelectorFromElement(this); if (l) {
        var d = s.default(l)[0];
        if (d && s.default(d).hasClass("carousel")) {
            var _ = te({}, s.default(d).data(), s.default(this).data()), E = this.getAttribute("data-slide-to");
            E && (_.interval = !1), b._jQueryInterface.call(s.default(d), _), E && s.default(d).data(Re).to(E), r.preventDefault();
        }
    } }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }, { key: "Default", get: function () { return nn; } }]), b; }();
    s.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", kt._dataApiClickHandler), s.default(window).on("load.bs.carousel.data-api", function () { for (var b = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), m = 0, r = b.length; m < r; m++) {
        var l = s.default(b[m]);
        kt._jQueryInterface.call(l, l.data());
    } }), s.default.fn[Ze] = kt._jQueryInterface, s.default.fn[Ze].Constructor = kt, s.default.fn[Ze].noConflict = function () { return s.default.fn[Ze] = Ct, kt._jQueryInterface; };
    var pt = "collapse", ve = "bs.collapse", At = s.default.fn[pt], et = "show", rn = "collapse", on = "collapsing", Pt = "collapsed", He = '[data-toggle="collapse"]', Tn = { toggle: !0, parent: "" }, fi = { toggle: "boolean", parent: "(string|element)" }, Ht = function () { function b(r, l) { this._isTransitioning = !1, this._element = r, this._config = this._getConfig(l), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + r.id + '"],[data-toggle="collapse"][data-target="#' + r.id + '"]')); for (var d = [].slice.call(document.querySelectorAll(He)), _ = 0, E = d.length; _ < E; _++) {
        var j = d[_], H = O.getSelectorFromElement(j), Z = [].slice.call(document.querySelectorAll(H)).filter(function (J) { return J === r; });
        null !== H && Z.length > 0 && (this._selector = H, this._triggerArray.push(j));
    } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(); } var m = b.prototype; return m.toggle = function () { s.default(this._element).hasClass(et) ? this.hide() : this.show(); }, m.show = function () { var r, l, d = this; if (!(this._isTransitioning || s.default(this._element).hasClass(et) || (this._parent && 0 === (r = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (Z) { return "string" == typeof d._config.parent ? Z.getAttribute("data-parent") === d._config.parent : Z.classList.contains(rn); })).length && (r = null), r && (l = s.default(r).not(this._selector).data(ve)) && l._isTransitioning))) {
        var _ = s.default.Event("show.bs.collapse");
        if (s.default(this._element).trigger(_), !_.isDefaultPrevented()) {
            r && (b._jQueryInterface.call(s.default(r).not(this._selector), "hide"), l || s.default(r).data(ve, null));
            var E = this._getDimension();
            s.default(this._element).removeClass(rn).addClass(on), this._element.style[E] = 0, this._triggerArray.length && s.default(this._triggerArray).removeClass(Pt).attr("aria-expanded", !0), this.setTransitioning(!0);
            var j = "scroll" + (E[0].toUpperCase() + E.slice(1)), H = O.getTransitionDurationFromElement(this._element);
            s.default(this._element).one(O.TRANSITION_END, function () { s.default(d._element).removeClass(on).addClass("collapse show"), d._element.style[E] = "", d.setTransitioning(!1), s.default(d._element).trigger("shown.bs.collapse"); }).emulateTransitionEnd(H), this._element.style[E] = this._element[j] + "px";
        }
    } }, m.hide = function () { var r = this; if (!this._isTransitioning && s.default(this._element).hasClass(et)) {
        var l = s.default.Event("hide.bs.collapse");
        if (s.default(this._element).trigger(l), !l.isDefaultPrevented()) {
            var d = this._getDimension();
            this._element.style[d] = this._element.getBoundingClientRect()[d] + "px", O.reflow(this._element), s.default(this._element).addClass(on).removeClass("collapse show");
            var _ = this._triggerArray.length;
            if (_ > 0)
                for (var E = 0; E < _; E++) {
                    var j = this._triggerArray[E], H = O.getSelectorFromElement(j);
                    null !== H && (s.default([].slice.call(document.querySelectorAll(H))).hasClass(et) || s.default(j).addClass(Pt).attr("aria-expanded", !1));
                }
            this.setTransitioning(!0), this._element.style[d] = "";
            var Z = O.getTransitionDurationFromElement(this._element);
            s.default(this._element).one(O.TRANSITION_END, function () { r.setTransitioning(!1), s.default(r._element).removeClass(on).addClass(rn).trigger("hidden.bs.collapse"); }).emulateTransitionEnd(Z);
        }
    } }, m.setTransitioning = function (r) { this._isTransitioning = r; }, m.dispose = function () { s.default.removeData(this._element, ve), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null; }, m._getConfig = function (r) { return (r = te({}, Tn, r)).toggle = Boolean(r.toggle), O.typeCheckConfig(pt, r, fi), r; }, m._getDimension = function () { return s.default(this._element).hasClass("width") ? "width" : "height"; }, m._getParent = function () { var r, l = this; O.isElement(this._config.parent) ? (r = this._config.parent, typeof this._config.parent.jquery < "u" && (r = this._config.parent[0])) : r = document.querySelector(this._config.parent); var _ = [].slice.call(r.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]')); return s.default(_).each(function (E, j) { l._addAriaAndCollapsedClass(b._getTargetFromElement(j), [j]); }), r; }, m._addAriaAndCollapsedClass = function (r, l) { var d = s.default(r).hasClass(et); l.length && s.default(l).toggleClass(Pt, !d).attr("aria-expanded", d); }, b._getTargetFromElement = function (r) { var l = O.getSelectorFromElement(r); return l ? document.querySelector(l) : null; }, b._jQueryInterface = function (r) { return this.each(function () { var l = s.default(this), d = l.data(ve), _ = te({}, Tn, l.data(), "object" == typeof r && r ? r : {}); if (!d && _.toggle && "string" == typeof r && /show|hide/.test(r) && (_.toggle = !1), d || (d = new b(this, _), l.data(ve, d)), "string" == typeof r) {
        if (typeof d[r] > "u")
            throw new TypeError('No method named "' + r + '"');
        d[r]();
    } }); }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }, { key: "Default", get: function () { return Tn; } }]), b; }();
    s.default(document).on("click.bs.collapse.data-api", He, function (b) { "A" === b.currentTarget.tagName && b.preventDefault(); var m = s.default(this), r = O.getSelectorFromElement(this), l = [].slice.call(document.querySelectorAll(r)); s.default(l).each(function () { var d = s.default(this), _ = d.data(ve) ? "toggle" : m.data(); Ht._jQueryInterface.call(d, _); }); }), s.default.fn[pt] = Ht._jQueryInterface, s.default.fn[pt].Constructor = Ht, s.default.fn[pt].noConflict = function () { return s.default.fn[pt] = At, Ht._jQueryInterface; };
    var ye = "dropdown", tt = "bs.dropdown", Ft = s.default.fn[ye], F = new RegExp("38|40|27"), ce = "disabled", Ne = "show", Un = "dropdown-menu-right", En = "hide.bs.dropdown", xn = "hidden.bs.dropdown", gt = "click.bs.dropdown.data-api", Fe = "keydown.bs.dropdown.data-api", Me = '[data-toggle="dropdown"]', nt = ".dropdown-menu", di = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null }, an = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" }, $e = function () { function b(r, l) { this._element = r, this._popper = null, this._config = this._getConfig(l), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners(); } var m = b.prototype; return m.toggle = function () { if (!this._element.disabled && !s.default(this._element).hasClass(ce)) {
        var r = s.default(this._menu).hasClass(Ne);
        b._clearMenus(), r || this.show(!0);
    } }, m.show = function (r) { if (void 0 === r && (r = !1), !(this._element.disabled || s.default(this._element).hasClass(ce) || s.default(this._menu).hasClass(Ne))) {
        var l = { relatedTarget: this._element }, d = s.default.Event("show.bs.dropdown", l), _ = b._getParentFromElement(this._element);
        if (s.default(_).trigger(d), !d.isDefaultPrevented()) {
            if (!this._inNavbar && r) {
                if (typeof Lt.default > "u")
                    throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                var E = this._element;
                "parent" === this._config.reference ? E = _ : O.isElement(this._config.reference) && (E = this._config.reference, typeof this._config.reference.jquery < "u" && (E = this._config.reference[0])), "scrollParent" !== this._config.boundary && s.default(_).addClass("position-static"), this._popper = new Lt.default(E, this._menu, this._getPopperConfig());
            }
            "ontouchstart" in document.documentElement && 0 === s.default(_).closest(".navbar-nav").length && s.default(document.body).children().on("mouseover", null, s.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), s.default(this._menu).toggleClass(Ne), s.default(_).toggleClass(Ne).trigger(s.default.Event("shown.bs.dropdown", l));
        }
    } }, m.hide = function () { if (!this._element.disabled && !s.default(this._element).hasClass(ce) && s.default(this._menu).hasClass(Ne)) {
        var r = { relatedTarget: this._element }, l = s.default.Event(En, r), d = b._getParentFromElement(this._element);
        s.default(d).trigger(l), l.isDefaultPrevented() || (this._popper && this._popper.destroy(), s.default(this._menu).toggleClass(Ne), s.default(d).toggleClass(Ne).trigger(s.default.Event(xn, r)));
    } }, m.dispose = function () { s.default.removeData(this._element, tt), s.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null); }, m.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate(); }, m._addEventListeners = function () { var r = this; s.default(this._element).on("click.bs.dropdown", function (l) { l.preventDefault(), l.stopPropagation(), r.toggle(); }); }, m._getConfig = function (r) { return r = te({}, this.constructor.Default, s.default(this._element).data(), r), O.typeCheckConfig(ye, r, this.constructor.DefaultType), r; }, m._getMenuElement = function () { if (!this._menu) {
        var r = b._getParentFromElement(this._element);
        r && (this._menu = r.querySelector(nt));
    } return this._menu; }, m._getPlacement = function () { var r = s.default(this._element.parentNode), l = "bottom-start"; return r.hasClass("dropup") ? l = s.default(this._menu).hasClass(Un) ? "top-end" : "top-start" : r.hasClass("dropright") ? l = "right-start" : r.hasClass("dropleft") ? l = "left-start" : s.default(this._menu).hasClass(Un) && (l = "bottom-end"), l; }, m._detectNavbar = function () { return s.default(this._element).closest(".navbar").length > 0; }, m._getOffset = function () { var r = this, l = {}; return "function" == typeof this._config.offset ? l.fn = function (d) { return d.offsets = te({}, d.offsets, r._config.offset(d.offsets, r._element)), d; } : l.offset = this._config.offset, l; }, m._getPopperConfig = function () { var r = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (r.modifiers.applyStyle = { enabled: !1 }), te({}, r, this._config.popperConfig); }, b._jQueryInterface = function (r) { return this.each(function () { var l = s.default(this).data(tt); if (l || (l = new b(this, "object" == typeof r ? r : null), s.default(this).data(tt, l)), "string" == typeof r) {
        if (typeof l[r] > "u")
            throw new TypeError('No method named "' + r + '"');
        l[r]();
    } }); }, b._clearMenus = function (r) { if (!r || 3 !== r.which && ("keyup" !== r.type || 9 === r.which))
        for (var l = [].slice.call(document.querySelectorAll(Me)), d = 0, _ = l.length; d < _; d++) {
            var E = b._getParentFromElement(l[d]), j = s.default(l[d]).data(tt), H = { relatedTarget: l[d] };
            if (r && "click" === r.type && (H.clickEvent = r), j) {
                var Z = j._menu;
                if (s.default(E).hasClass(Ne) && !(r && ("click" === r.type && /input|textarea/i.test(r.target.tagName) || "keyup" === r.type && 9 === r.which) && s.default.contains(E, r.target))) {
                    var J = s.default.Event(En, H);
                    s.default(E).trigger(J), J.isDefaultPrevented() || ("ontouchstart" in document.documentElement && s.default(document.body).children().off("mouseover", null, s.default.noop), l[d].setAttribute("aria-expanded", "false"), j._popper && j._popper.destroy(), s.default(Z).removeClass(Ne), s.default(E).removeClass(Ne).trigger(s.default.Event(xn, H)));
                }
            }
        } }, b._getParentFromElement = function (r) { var l, d = O.getSelectorFromElement(r); return d && (l = document.querySelector(d)), l || r.parentNode; }, b._dataApiKeydownHandler = function (r) { if (!(/input|textarea/i.test(r.target.tagName) ? 32 === r.which || 27 !== r.which && (40 !== r.which && 38 !== r.which || s.default(r.target).closest(nt).length) : !F.test(r.which)) && !this.disabled && !s.default(this).hasClass(ce)) {
        var l = b._getParentFromElement(this), d = s.default(l).hasClass(Ne);
        if (d || 27 !== r.which) {
            if (r.preventDefault(), r.stopPropagation(), !d || 27 === r.which || 32 === r.which)
                return 27 === r.which && s.default(l.querySelector(Me)).trigger("focus"), void s.default(this).trigger("click");
            var _ = [].slice.call(l.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (j) { return s.default(j).is(":visible"); });
            if (0 !== _.length) {
                var E = _.indexOf(r.target);
                38 === r.which && E > 0 && E--, 40 === r.which && E < _.length - 1 && E++, E < 0 && (E = 0), _[E].focus();
            }
        }
    } }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }, { key: "Default", get: function () { return di; } }, { key: "DefaultType", get: function () { return an; } }]), b; }();
    s.default(document).on(Fe, Me, $e._dataApiKeydownHandler).on(Fe, nt, $e._dataApiKeydownHandler).on(gt + " keyup.bs.dropdown.data-api", $e._clearMenus).on(gt, Me, function (b) { b.preventDefault(), b.stopPropagation(), $e._jQueryInterface.call(s.default(this), "toggle"); }).on(gt, ".dropdown form", function (b) { b.stopPropagation(); }), s.default.fn[ye] = $e._jQueryInterface, s.default.fn[ye].Constructor = $e, s.default.fn[ye].noConflict = function () { return s.default.fn[ye] = Ft, $e._jQueryInterface; };
    var Mt = "bs.modal", Nt = s.default.fn.modal, it = "modal-open", ze = "fade", rt = "show", Cn = "modal-static", Sn = "hidden.bs.modal", we = "show.bs.modal", fe = "focusin.bs.modal", sn = "resize.bs.modal", kn = "click.dismiss.bs.modal", An = "keydown.dismiss.bs.modal", Nn = "mousedown.dismiss.bs.modal", mt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ot = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, hi = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, vt = function () { function b(r, l) { this._config = this._getConfig(l), this._element = r, this._dialog = r.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0; } var m = b.prototype; return m.toggle = function (r) { return this._isShown ? this.hide() : this.show(r); }, m.show = function (r) { var l = this; if (!this._isShown && !this._isTransitioning) {
        var d = s.default.Event(we, { relatedTarget: r });
        s.default(this._element).trigger(d), d.isDefaultPrevented() || (this._isShown = !0, s.default(this._element).hasClass(ze) && (this._isTransitioning = !0), this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), s.default(this._element).on(kn, '[data-dismiss="modal"]', function (_) { return l.hide(_); }), s.default(this._dialog).on(Nn, function () { s.default(l._element).one("mouseup.dismiss.bs.modal", function (_) { s.default(_.target).is(l._element) && (l._ignoreBackdropClick = !0); }); }), this._showBackdrop(function () { return l._showElement(r); }));
    } }, m.hide = function (r) { var l = this; if (r && r.preventDefault(), this._isShown && !this._isTransitioning) {
        var d = s.default.Event("hide.bs.modal");
        if (s.default(this._element).trigger(d), this._isShown && !d.isDefaultPrevented()) {
            this._isShown = !1;
            var _ = s.default(this._element).hasClass(ze);
            if (_ && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), s.default(document).off(fe), s.default(this._element).removeClass(rt), s.default(this._element).off(kn), s.default(this._dialog).off(Nn), _) {
                var E = O.getTransitionDurationFromElement(this._element);
                s.default(this._element).one(O.TRANSITION_END, function (j) { return l._hideModal(j); }).emulateTransitionEnd(E);
            }
            else
                this._hideModal();
        }
    } }, m.dispose = function () { [window, this._element, this._dialog].forEach(function (r) { return s.default(r).off(".bs.modal"); }), s.default(document).off(fe), s.default.removeData(this._element, Mt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null; }, m.handleUpdate = function () { this._adjustDialog(); }, m._getConfig = function (r) { return r = te({}, ot, r), O.typeCheckConfig("modal", r, hi), r; }, m._triggerBackdropTransition = function () { var r = this, l = s.default.Event("hidePrevented.bs.modal"); if (s.default(this._element).trigger(l), !l.isDefaultPrevented()) {
        var d = this._element.scrollHeight > document.documentElement.clientHeight;
        d || (this._element.style.overflowY = "hidden"), this._element.classList.add(Cn);
        var _ = O.getTransitionDurationFromElement(this._dialog);
        s.default(this._element).off(O.TRANSITION_END), s.default(this._element).one(O.TRANSITION_END, function () { r._element.classList.remove(Cn), d || s.default(r._element).one(O.TRANSITION_END, function () { r._element.style.overflowY = ""; }).emulateTransitionEnd(r._element, _); }).emulateTransitionEnd(_), this._element.focus();
    } }, m._showElement = function (r) { var l = this, d = s.default(this._element).hasClass(ze), _ = this._dialog ? this._dialog.querySelector(".modal-body") : null; this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), s.default(this._dialog).hasClass("modal-dialog-scrollable") && _ ? _.scrollTop = 0 : this._element.scrollTop = 0, d && O.reflow(this._element), s.default(this._element).addClass(rt), this._config.focus && this._enforceFocus(); var E = s.default.Event("shown.bs.modal", { relatedTarget: r }), j = function () { l._config.focus && l._element.focus(), l._isTransitioning = !1, s.default(l._element).trigger(E); }; if (d) {
        var H = O.getTransitionDurationFromElement(this._dialog);
        s.default(this._dialog).one(O.TRANSITION_END, j).emulateTransitionEnd(H);
    }
    else
        j(); }, m._enforceFocus = function () { var r = this; s.default(document).off(fe).on(fe, function (l) { document !== l.target && r._element !== l.target && 0 === s.default(r._element).has(l.target).length && r._element.focus(); }); }, m._setEscapeEvent = function () { var r = this; this._isShown ? s.default(this._element).on(An, function (l) { r._config.keyboard && 27 === l.which ? (l.preventDefault(), r.hide()) : r._config.keyboard || 27 !== l.which || r._triggerBackdropTransition(); }) : this._isShown || s.default(this._element).off(An); }, m._setResizeEvent = function () { var r = this; this._isShown ? s.default(window).on(sn, function (l) { return r.handleUpdate(l); }) : s.default(window).off(sn); }, m._hideModal = function () { var r = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () { s.default(document.body).removeClass(it), r._resetAdjustments(), r._resetScrollbar(), s.default(r._element).trigger(Sn); }); }, m._removeBackdrop = function () { this._backdrop && (s.default(this._backdrop).remove(), this._backdrop = null); }, m._showBackdrop = function (r) { var l = this, d = s.default(this._element).hasClass(ze) ? ze : ""; if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", d && this._backdrop.classList.add(d), s.default(this._backdrop).appendTo(document.body), s.default(this._element).on(kn, function (H) { l._ignoreBackdropClick ? l._ignoreBackdropClick = !1 : H.target === H.currentTarget && ("static" === l._config.backdrop ? l._triggerBackdropTransition() : l.hide()); }), d && O.reflow(this._backdrop), s.default(this._backdrop).addClass(rt), !r)
            return;
        if (!d)
            return void r();
        var _ = O.getTransitionDurationFromElement(this._backdrop);
        s.default(this._backdrop).one(O.TRANSITION_END, r).emulateTransitionEnd(_);
    }
    else if (!this._isShown && this._backdrop) {
        s.default(this._backdrop).removeClass(rt);
        var E = function () { l._removeBackdrop(), r && r(); };
        if (s.default(this._element).hasClass(ze)) {
            var j = O.getTransitionDurationFromElement(this._backdrop);
            s.default(this._backdrop).one(O.TRANSITION_END, E).emulateTransitionEnd(j);
        }
        else
            E();
    }
    else
        r && r(); }, m._adjustDialog = function () { var r = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && r && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !r && (this._element.style.paddingRight = this._scrollbarWidth + "px"); }, m._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = ""; }, m._checkScrollbar = function () { var r = document.body.getBoundingClientRect(); this._isBodyOverflowing = Math.round(r.left + r.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth(); }, m._setScrollbar = function () { var r = this; if (this._isBodyOverflowing) {
        var l = [].slice.call(document.querySelectorAll(mt)), d = [].slice.call(document.querySelectorAll(".sticky-top"));
        s.default(l).each(function (j, H) { var Z = H.style.paddingRight, J = s.default(H).css("padding-right"); s.default(H).data("padding-right", Z).css("padding-right", parseFloat(J) + r._scrollbarWidth + "px"); }), s.default(d).each(function (j, H) { var Z = H.style.marginRight, J = s.default(H).css("margin-right"); s.default(H).data("margin-right", Z).css("margin-right", parseFloat(J) - r._scrollbarWidth + "px"); });
        var _ = document.body.style.paddingRight, E = s.default(document.body).css("padding-right");
        s.default(document.body).data("padding-right", _).css("padding-right", parseFloat(E) + this._scrollbarWidth + "px");
    } s.default(document.body).addClass(it); }, m._resetScrollbar = function () { var r = [].slice.call(document.querySelectorAll(mt)); s.default(r).each(function (_, E) { var j = s.default(E).data("padding-right"); s.default(E).removeData("padding-right"), E.style.paddingRight = j || ""; }); var l = [].slice.call(document.querySelectorAll(".sticky-top")); s.default(l).each(function (_, E) { var j = s.default(E).data("margin-right"); typeof j < "u" && s.default(E).css("margin-right", j).removeData("margin-right"); }); var d = s.default(document.body).data("padding-right"); s.default(document.body).removeData("padding-right"), document.body.style.paddingRight = d || ""; }, m._getScrollbarWidth = function () { var r = document.createElement("div"); r.className = "modal-scrollbar-measure", document.body.appendChild(r); var l = r.getBoundingClientRect().width - r.clientWidth; return document.body.removeChild(r), l; }, b._jQueryInterface = function (r, l) { return this.each(function () { var d = s.default(this).data(Mt), _ = te({}, ot, s.default(this).data(), "object" == typeof r && r ? r : {}); if (d || (d = new b(this, _), s.default(this).data(Mt, d)), "string" == typeof r) {
        if (typeof d[r] > "u")
            throw new TypeError('No method named "' + r + '"');
        d[r](l);
    }
    else
        _.show && d.show(l); }); }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }, { key: "Default", get: function () { return ot; } }]), b; }();
    s.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) { var m, r = this, l = O.getSelectorFromElement(this); l && (m = document.querySelector(l)); var d = s.default(m).data(Mt) ? "toggle" : te({}, s.default(m).data(), s.default(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || b.preventDefault(); var _ = s.default(m).one(we, function (E) { E.isDefaultPrevented() || _.one(Sn, function () { s.default(r).is(":visible") && r.focus(); }); }); vt._jQueryInterface.call(s.default(m), d, this); }), s.default.fn.modal = vt._jQueryInterface, s.default.fn.modal.Constructor = vt, s.default.fn.modal.noConflict = function () { return s.default.fn.modal = Nt, vt._jQueryInterface; };
    var ln = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], pi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, gi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
    function Qn(b, m, r) { if (0 === b.length)
        return b; if (r && "function" == typeof r)
        return r(b); for (var l = (new window.DOMParser).parseFromString(b, "text/html"), d = Object.keys(m), _ = [].slice.call(l.body.querySelectorAll("*")), E = function (Z, J) { var Te = _[Z], Ve = Te.nodeName.toLowerCase(); if (-1 === d.indexOf(Te.nodeName.toLowerCase()))
        return Te.parentNode.removeChild(Te), "continue"; var ut = [].slice.call(Te.attributes), fn = [].concat(m["*"] || [], m[Ve] || []); ut.forEach(function (dn) { (function (hn, Fn) { var Gt = hn.nodeName.toLowerCase(); if (-1 !== Fn.indexOf(Gt))
        return -1 === ln.indexOf(Gt) || Boolean(pi.test(hn.nodeValue) || gi.test(hn.nodeValue)); for (var Zn = Fn.filter(function (ti) { return ti instanceof RegExp; }), Tt = 0, ei = Zn.length; Tt < ei; Tt++)
        if (Zn[Tt].test(Gt))
            return !0; return !1; })(dn, fn) || Te.removeAttribute(dn.nodeName); }); }, j = 0, H = _.length; j < H; j++)
        E(j); return l.body.innerHTML; }
    var Dn = "tooltip", jn = "bs.tooltip", mi = s.default.fn.tooltip, $n = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Dt = ["sanitize", "whiteList", "sanitizeFn"], Bt = "fade", jt = "show", yt = "show", Wt = "hover", Xn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, vi = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", customClass: "", sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Ut = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" }, Vn = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }, at = function () { function b(r, l) { if (typeof Lt.default > "u")
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = r, this.config = this._getConfig(l), this.tip = null, this._setListeners(); } var m = b.prototype; return m.enable = function () { this._isEnabled = !0; }, m.disable = function () { this._isEnabled = !1; }, m.toggleEnabled = function () { this._isEnabled = !this._isEnabled; }, m.toggle = function (r) { if (this._isEnabled)
        if (r) {
            var l = this.constructor.DATA_KEY, d = s.default(r.currentTarget).data(l);
            d || (d = new this.constructor(r.currentTarget, this._getDelegateConfig()), s.default(r.currentTarget).data(l, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d);
        }
        else {
            if (s.default(this.getTipElement()).hasClass(jt))
                return void this._leave(null, this);
            this._enter(null, this);
        } }, m.dispose = function () { clearTimeout(this._timeout), s.default.removeData(this.element, this.constructor.DATA_KEY), s.default(this.element).off(this.constructor.EVENT_KEY), s.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && s.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null; }, m.show = function () { var r = this; if ("none" === s.default(this.element).css("display"))
        throw new Error("Please use show on visible elements"); var l = s.default.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) {
        s.default(this.element).trigger(l);
        var d = O.findShadowRoot(this.element), _ = s.default.contains(null !== d ? d : this.element.ownerDocument.documentElement, this.element);
        if (l.isDefaultPrevented() || !_)
            return;
        var E = this.getTipElement(), j = O.getUID(this.constructor.NAME);
        E.setAttribute("id", j), this.element.setAttribute("aria-describedby", j), this.setContent(), this.config.animation && s.default(E).addClass(Bt);
        var H = "function" == typeof this.config.placement ? this.config.placement.call(this, E, this.element) : this.config.placement, Z = this._getAttachment(H);
        this.addAttachmentClass(Z);
        var J = this._getContainer();
        s.default(E).data(this.constructor.DATA_KEY, this), s.default.contains(this.element.ownerDocument.documentElement, this.tip) || s.default(E).appendTo(J), s.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Lt.default(this.element, E, this._getPopperConfig(Z)), s.default(E).addClass(jt), s.default(E).addClass(this.config.customClass), "ontouchstart" in document.documentElement && s.default(document.body).children().on("mouseover", null, s.default.noop);
        var Te = function () { r.config.animation && r._fixTransition(); var ut = r._hoverState; r._hoverState = null, s.default(r.element).trigger(r.constructor.Event.SHOWN), "out" === ut && r._leave(null, r); };
        if (s.default(this.tip).hasClass(Bt)) {
            var Ve = O.getTransitionDurationFromElement(this.tip);
            s.default(this.tip).one(O.TRANSITION_END, Te).emulateTransitionEnd(Ve);
        }
        else
            Te();
    } }, m.hide = function (r) { var l = this, d = this.getTipElement(), _ = s.default.Event(this.constructor.Event.HIDE), E = function () { l._hoverState !== yt && d.parentNode && d.parentNode.removeChild(d), l._cleanTipClass(), l.element.removeAttribute("aria-describedby"), s.default(l.element).trigger(l.constructor.Event.HIDDEN), null !== l._popper && l._popper.destroy(), r && r(); }; if (s.default(this.element).trigger(_), !_.isDefaultPrevented()) {
        if (s.default(d).removeClass(jt), "ontouchstart" in document.documentElement && s.default(document.body).children().off("mouseover", null, s.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, s.default(this.tip).hasClass(Bt)) {
            var j = O.getTransitionDurationFromElement(d);
            s.default(d).one(O.TRANSITION_END, E).emulateTransitionEnd(j);
        }
        else
            E();
        this._hoverState = "";
    } }, m.update = function () { null !== this._popper && this._popper.scheduleUpdate(); }, m.isWithContent = function () { return Boolean(this.getTitle()); }, m.addAttachmentClass = function (r) { s.default(this.getTipElement()).addClass("bs-tooltip-" + r); }, m.getTipElement = function () { return this.tip = this.tip || s.default(this.config.template)[0], this.tip; }, m.setContent = function () { var r = this.getTipElement(); this.setElementContent(s.default(r.querySelectorAll(".tooltip-inner")), this.getTitle()), s.default(r).removeClass("fade show"); }, m.setElementContent = function (r, l) { "object" != typeof l || !l.nodeType && !l.jquery ? this.config.html ? (this.config.sanitize && (l = Qn(l, this.config.whiteList, this.config.sanitizeFn)), r.html(l)) : r.text(l) : this.config.html ? s.default(l).parent().is(r) || r.empty().append(l) : r.text(s.default(l).text()); }, m.getTitle = function () { var r = this.element.getAttribute("data-original-title"); return r || (r = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), r; }, m._getPopperConfig = function (r) { var l = this; return te({}, { placement: r, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (d) { d.originalPlacement !== d.placement && l._handlePopperPlacementChange(d); }, onUpdate: function (d) { return l._handlePopperPlacementChange(d); } }, this.config.popperConfig); }, m._getOffset = function () { var r = this, l = {}; return "function" == typeof this.config.offset ? l.fn = function (d) { return d.offsets = te({}, d.offsets, r.config.offset(d.offsets, r.element)), d; } : l.offset = this.config.offset, l; }, m._getContainer = function () { return !1 === this.config.container ? document.body : O.isElement(this.config.container) ? s.default(this.config.container) : s.default(document).find(this.config.container); }, m._getAttachment = function (r) { return Xn[r.toUpperCase()]; }, m._setListeners = function () { var r = this; this.config.trigger.split(" ").forEach(function (l) { if ("click" === l)
        s.default(r.element).on(r.constructor.Event.CLICK, r.config.selector, function (E) { return r.toggle(E); });
    else if ("manual" !== l) {
        var d = l === Wt ? r.constructor.Event.MOUSEENTER : r.constructor.Event.FOCUSIN, _ = l === Wt ? r.constructor.Event.MOUSELEAVE : r.constructor.Event.FOCUSOUT;
        s.default(r.element).on(d, r.config.selector, function (E) { return r._enter(E); }).on(_, r.config.selector, function (E) { return r._leave(E); });
    } }), this._hideModalHandler = function () { r.element && r.hide(); }, s.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = te({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle(); }, m._fixTitle = function () { var r = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== r) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")); }, m._enter = function (r, l) { var d = this.constructor.DATA_KEY; (l = l || s.default(r.currentTarget).data(d)) || (l = new this.constructor(r.currentTarget, this._getDelegateConfig()), s.default(r.currentTarget).data(d, l)), r && (l._activeTrigger["focusin" === r.type ? "focus" : Wt] = !0), s.default(l.getTipElement()).hasClass(jt) || l._hoverState === yt ? l._hoverState = yt : (clearTimeout(l._timeout), l._hoverState = yt, l.config.delay && l.config.delay.show ? l._timeout = setTimeout(function () { l._hoverState === yt && l.show(); }, l.config.delay.show) : l.show()); }, m._leave = function (r, l) { var d = this.constructor.DATA_KEY; (l = l || s.default(r.currentTarget).data(d)) || (l = new this.constructor(r.currentTarget, this._getDelegateConfig()), s.default(r.currentTarget).data(d, l)), r && (l._activeTrigger["focusout" === r.type ? "focus" : Wt] = !1), l._isWithActiveTrigger() || (clearTimeout(l._timeout), l._hoverState = "out", l.config.delay && l.config.delay.hide ? l._timeout = setTimeout(function () { "out" === l._hoverState && l.hide(); }, l.config.delay.hide) : l.hide()); }, m._isWithActiveTrigger = function () { for (var r in this._activeTrigger)
        if (this._activeTrigger[r])
            return !0; return !1; }, m._getConfig = function (r) { var l = s.default(this.element).data(); return Object.keys(l).forEach(function (d) { -1 !== Dt.indexOf(d) && delete l[d]; }), "number" == typeof (r = te({}, this.constructor.Default, l, "object" == typeof r && r ? r : {})).delay && (r.delay = { show: r.delay, hide: r.delay }), "number" == typeof r.title && (r.title = r.title.toString()), "number" == typeof r.content && (r.content = r.content.toString()), O.typeCheckConfig(Dn, r, this.constructor.DefaultType), r.sanitize && (r.template = Qn(r.template, r.whiteList, r.sanitizeFn)), r; }, m._getDelegateConfig = function () { var r = {}; if (this.config)
        for (var l in this.config)
            this.constructor.Default[l] !== this.config[l] && (r[l] = this.config[l]); return r; }, m._cleanTipClass = function () { var r = s.default(this.getTipElement()), l = r.attr("class").match($n); null !== l && l.length && r.removeClass(l.join("")); }, m._handlePopperPlacementChange = function (r) { this.tip = r.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(r.placement)); }, m._fixTransition = function () { var r = this.getTipElement(), l = this.config.animation; null === r.getAttribute("x-placement") && (s.default(r).removeClass(Bt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = l); }, b._jQueryInterface = function (r) { return this.each(function () { var l = s.default(this), d = l.data(jn), _ = "object" == typeof r && r; if ((d || !/dispose|hide/.test(r)) && (d || (d = new b(this, _), l.data(jn, d)), "string" == typeof r)) {
        if (typeof d[r] > "u")
            throw new TypeError('No method named "' + r + '"');
        d[r]();
    } }); }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }, { key: "Default", get: function () { return vi; } }, { key: "NAME", get: function () { return Dn; } }, { key: "DATA_KEY", get: function () { return jn; } }, { key: "Event", get: function () { return Vn; } }, { key: "EVENT_KEY", get: function () { return ".bs.tooltip"; } }, { key: "DefaultType", get: function () { return Ut; } }]), b; }();
    s.default.fn.tooltip = at._jQueryInterface, s.default.fn.tooltip.Constructor = at, s.default.fn.tooltip.noConflict = function () { return s.default.fn.tooltip = mi, at._jQueryInterface; };
    var un = "bs.popover", Yn = s.default.fn.popover, In = new RegExp("(^|\\s)bs-popover\\S+", "g"), yi = te({}, at.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), _i = te({}, at.DefaultType, { content: "(string|element|function)" }), Kn = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" }, Qt = function (b) { var m, r; function l() { return b.apply(this, arguments) || this; } r = b, (m = l).prototype = Object.create(r.prototype), m.prototype.constructor = m, tn(m, r); var d = l.prototype; return d.isWithContent = function () { return this.getTitle() || this._getContent(); }, d.addAttachmentClass = function (_) { s.default(this.getTipElement()).addClass("bs-popover-" + _); }, d.getTipElement = function () { return this.tip = this.tip || s.default(this.config.template)[0], this.tip; }, d.setContent = function () { var _ = s.default(this.getTipElement()); this.setElementContent(_.find(".popover-header"), this.getTitle()); var E = this._getContent(); "function" == typeof E && (E = E.call(this.element)), this.setElementContent(_.find(".popover-body"), E), _.removeClass("fade show"); }, d._getContent = function () { return this.element.getAttribute("data-content") || this.config.content; }, d._cleanTipClass = function () { var _ = s.default(this.getTipElement()), E = _.attr("class").match(In); null !== E && E.length > 0 && _.removeClass(E.join("")); }, l._jQueryInterface = function (_) { return this.each(function () { var E = s.default(this).data(un), j = "object" == typeof _ ? _ : null; if ((E || !/dispose|hide/.test(_)) && (E || (E = new l(this, j), s.default(this).data(un, E)), "string" == typeof _)) {
        if (typeof E[_] > "u")
            throw new TypeError('No method named "' + _ + '"');
        E[_]();
    } }); }, _e(l, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }, { key: "Default", get: function () { return yi; } }, { key: "NAME", get: function () { return "popover"; } }, { key: "DATA_KEY", get: function () { return un; } }, { key: "Event", get: function () { return Kn; } }, { key: "EVENT_KEY", get: function () { return ".bs.popover"; } }, { key: "DefaultType", get: function () { return _i; } }]), l; }(at);
    s.default.fn.popover = Qt._jQueryInterface, s.default.fn.popover.Constructor = Qt, s.default.fn.popover.noConflict = function () { return s.default.fn.popover = Yn, Qt._jQueryInterface; };
    var Xe = "scrollspy", cn = "bs.scrollspy", De = s.default.fn[Xe], Ce = "active", $t = "position", _t = ".nav, .list-group", On = { offset: 10, method: "auto", target: "" }, bi = { offset: "number", method: "string", target: "(string|element)" }, zt = function () { function b(r, l) { var d = this; this._element = r, this._scrollElement = "BODY" === r.tagName ? window : r, this._config = this._getConfig(l), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, s.default(this._scrollElement).on("scroll.bs.scrollspy", function (_) { return d._process(_); }), this.refresh(), this._process(); } var m = b.prototype; return m.refresh = function () { var r = this, d = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : $t : this._config.method, _ = d === $t ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (E) { var j, H = O.getSelectorFromElement(E); if (H && (j = document.querySelector(H)), j) {
        var Z = j.getBoundingClientRect();
        if (Z.width || Z.height)
            return [s.default(j)[d]().top + _, H];
    } return null; }).filter(Boolean).sort(function (E, j) { return E[0] - j[0]; }).forEach(function (E) { r._offsets.push(E[0]), r._targets.push(E[1]); }); }, m.dispose = function () { s.default.removeData(this._element, cn), s.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null; }, m._getConfig = function (r) { if ("string" != typeof (r = te({}, On, "object" == typeof r && r ? r : {})).target && O.isElement(r.target)) {
        var l = s.default(r.target).attr("id");
        l || (l = O.getUID(Xe), s.default(r.target).attr("id", l)), r.target = "#" + l;
    } return O.typeCheckConfig(Xe, r, bi), r; }, m._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop; }, m._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight); }, m._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height; }, m._process = function () { var r = this._getScrollTop() + this._config.offset, l = this._getScrollHeight(), d = this._config.offset + l - this._getOffsetHeight(); if (this._scrollHeight !== l && this.refresh(), r >= d) {
        var _ = this._targets[this._targets.length - 1];
        this._activeTarget !== _ && this._activate(_);
    }
    else {
        if (this._activeTarget && r < this._offsets[0] && this._offsets[0] > 0)
            return this._activeTarget = null, void this._clear();
        for (var E = this._offsets.length; E--;)
            this._activeTarget !== this._targets[E] && r >= this._offsets[E] && (typeof this._offsets[E + 1] > "u" || r < this._offsets[E + 1]) && this._activate(this._targets[E]);
    } }, m._activate = function (r) { this._activeTarget = r, this._clear(); var l = this._selector.split(",").map(function (_) { return _ + '[data-target="' + r + '"],' + _ + '[href="' + r + '"]'; }), d = s.default([].slice.call(document.querySelectorAll(l.join(",")))); d.hasClass("dropdown-item") ? (d.closest(".dropdown").find(".dropdown-toggle").addClass(Ce), d.addClass(Ce)) : (d.addClass(Ce), d.parents(_t).prev(".nav-link, .list-group-item").addClass(Ce), d.parents(_t).prev(".nav-item").children(".nav-link").addClass(Ce)), s.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: r }); }, m._clear = function () { [].slice.call(document.querySelectorAll(this._selector)).filter(function (r) { return r.classList.contains(Ce); }).forEach(function (r) { return r.classList.remove(Ce); }); }, b._jQueryInterface = function (r) { return this.each(function () { var l = s.default(this).data(cn); if (l || (l = new b(this, "object" == typeof r && r), s.default(this).data(cn, l)), "string" == typeof r) {
        if (typeof l[r] > "u")
            throw new TypeError('No method named "' + r + '"');
        l[r]();
    } }); }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }, { key: "Default", get: function () { return On; } }]), b; }();
    s.default(window).on("load.bs.scrollspy.data-api", function () { for (var b = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), m = b.length; m--;) {
        var r = s.default(b[m]);
        zt._jQueryInterface.call(r, r.data());
    } }), s.default.fn[Xe] = zt._jQueryInterface, s.default.fn[Xe].Constructor = zt, s.default.fn[Xe].noConflict = function () { return s.default.fn[Xe] = De, zt._jQueryInterface; };
    var Xt = "bs.tab", Gn = s.default.fn.tab, st = "active", qn = ".active", Ot = "> li > .active", Vt = function () { function b(r) { this._element = r; } var m = b.prototype; return m.show = function () { var r = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && s.default(this._element).hasClass(st) || s.default(this._element).hasClass("disabled") || this._element.hasAttribute("disabled"))) {
        var l, d, _ = s.default(this._element).closest(".nav, .list-group")[0], E = O.getSelectorFromElement(this._element);
        if (_) {
            var j = "UL" === _.nodeName || "OL" === _.nodeName ? Ot : qn;
            d = (d = s.default.makeArray(s.default(_).find(j)))[d.length - 1];
        }
        var H = s.default.Event("hide.bs.tab", { relatedTarget: this._element }), Z = s.default.Event("show.bs.tab", { relatedTarget: d });
        if (d && s.default(d).trigger(H), s.default(this._element).trigger(Z), !Z.isDefaultPrevented() && !H.isDefaultPrevented()) {
            E && (l = document.querySelector(E)), this._activate(this._element, _);
            var J = function () { var Te = s.default.Event("hidden.bs.tab", { relatedTarget: r._element }), Ve = s.default.Event("shown.bs.tab", { relatedTarget: d }); s.default(d).trigger(Te), s.default(r._element).trigger(Ve); };
            l ? this._activate(l, l.parentNode, J) : J();
        }
    } }, m.dispose = function () { s.default.removeData(this._element, Xt), this._element = null; }, m._activate = function (r, l, d) { var _ = this, E = (!l || "UL" !== l.nodeName && "OL" !== l.nodeName ? s.default(l).children(qn) : s.default(l).find(Ot))[0], j = d && E && s.default(E).hasClass("fade"), H = function () { return _._transitionComplete(r, E, d); }; if (E && j) {
        var Z = O.getTransitionDurationFromElement(E);
        s.default(E).removeClass("show").one(O.TRANSITION_END, H).emulateTransitionEnd(Z);
    }
    else
        H(); }, m._transitionComplete = function (r, l, d) { if (l) {
        s.default(l).removeClass(st);
        var _ = s.default(l.parentNode).find("> .dropdown-menu .active")[0];
        _ && s.default(_).removeClass(st), "tab" === l.getAttribute("role") && l.setAttribute("aria-selected", !1);
    } s.default(r).addClass(st), "tab" === r.getAttribute("role") && r.setAttribute("aria-selected", !0), O.reflow(r), r.classList.contains("fade") && r.classList.add("show"); var E = r.parentNode; if (E && "LI" === E.nodeName && (E = E.parentNode), E && s.default(E).hasClass("dropdown-menu")) {
        var j = s.default(r).closest(".dropdown")[0];
        if (j) {
            var H = [].slice.call(j.querySelectorAll(".dropdown-toggle"));
            s.default(H).addClass(st);
        }
        r.setAttribute("aria-expanded", !0);
    } d && d(); }, b._jQueryInterface = function (r) { return this.each(function () { var l = s.default(this), d = l.data(Xt); if (d || (d = new b(this), l.data(Xt, d)), "string" == typeof r) {
        if (typeof d[r] > "u")
            throw new TypeError('No method named "' + r + '"');
        d[r]();
    } }); }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }]), b; }();
    s.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (b) { b.preventDefault(), Vt._jQueryInterface.call(s.default(this), "show"); }), s.default.fn.tab = Vt._jQueryInterface, s.default.fn.tab.Constructor = Vt, s.default.fn.tab.noConflict = function () { return s.default.fn.tab = Gn, Vt._jQueryInterface; };
    var Pn = "bs.toast", bt = s.default.fn.toast, wt = "show", Jn = "showing", Rn = "click.dismiss.bs.toast", Hn = { animation: !0, autohide: !0, delay: 500 }, Yt = { animation: "boolean", autohide: "boolean", delay: "number" }, Kt = function () { function b(r, l) { this._element = r, this._config = this._getConfig(l), this._timeout = null, this._setListeners(); } var m = b.prototype; return m.show = function () { var r = this, l = s.default.Event("show.bs.toast"); if (s.default(this._element).trigger(l), !l.isDefaultPrevented()) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
        var d = function () { r._element.classList.remove(Jn), r._element.classList.add(wt), s.default(r._element).trigger("shown.bs.toast"), r._config.autohide && (r._timeout = setTimeout(function () { r.hide(); }, r._config.delay)); };
        if (this._element.classList.remove("hide"), O.reflow(this._element), this._element.classList.add(Jn), this._config.animation) {
            var _ = O.getTransitionDurationFromElement(this._element);
            s.default(this._element).one(O.TRANSITION_END, d).emulateTransitionEnd(_);
        }
        else
            d();
    } }, m.hide = function () { if (this._element.classList.contains(wt)) {
        var r = s.default.Event("hide.bs.toast");
        s.default(this._element).trigger(r), r.isDefaultPrevented() || this._close();
    } }, m.dispose = function () { this._clearTimeout(), this._element.classList.contains(wt) && this._element.classList.remove(wt), s.default(this._element).off(Rn), s.default.removeData(this._element, Pn), this._element = null, this._config = null; }, m._getConfig = function (r) { return r = te({}, Hn, s.default(this._element).data(), "object" == typeof r && r ? r : {}), O.typeCheckConfig("toast", r, this.constructor.DefaultType), r; }, m._setListeners = function () { var r = this; s.default(this._element).on(Rn, '[data-dismiss="toast"]', function () { return r.hide(); }); }, m._close = function () { var r = this, l = function () { r._element.classList.add("hide"), s.default(r._element).trigger("hidden.bs.toast"); }; if (this._element.classList.remove(wt), this._config.animation) {
        var d = O.getTransitionDurationFromElement(this._element);
        s.default(this._element).one(O.TRANSITION_END, l).emulateTransitionEnd(d);
    }
    else
        l(); }, m._clearTimeout = function () { clearTimeout(this._timeout), this._timeout = null; }, b._jQueryInterface = function (r) { return this.each(function () { var l = s.default(this), d = l.data(Pn); if (d || (d = new b(this, "object" == typeof r && r), l.data(Pn, d)), "string" == typeof r) {
        if (typeof d[r] > "u")
            throw new TypeError('No method named "' + r + '"');
        d[r](this);
    } }); }, _e(b, null, [{ key: "VERSION", get: function () { return "4.6.2"; } }, { key: "DefaultType", get: function () { return Yt; } }, { key: "Default", get: function () { return Hn; } }]), b; }();
    s.default.fn.toast = Kt._jQueryInterface, s.default.fn.toast.Constructor = Kt, s.default.fn.toast.noConflict = function () { return s.default.fn.toast = bt, Kt._jQueryInterface; }, P.Alert = B, P.Button = o, P.Carousel = kt, P.Collapse = Ht, P.Dropdown = $e, P.Modal = vt, P.Popover = Qt, P.Scrollspy = zt, P.Tab = Vt, P.Toast = Kt, P.Tooltip = at, P.Util = O, Object.defineProperty(P, "__esModule", { value: !0 });
});
