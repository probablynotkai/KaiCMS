"use strict";
(self.webpackChunkKH_Portfolio_3_0 = self.webpackChunkKH_Portfolio_3_0 || []).push([[179], { 161: () => { function ce(t) { return "function" == typeof t; } function Fi(t) { const n = t(r => { Error.call(r), r.stack = (new Error).stack; }); return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n; } const xi = Fi(t => function (n) { t(this), this.message = n ? `${n.length} errors occurred during unsubscription:\n${n.map((r, i) => `${i + 1}) ${r.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = n; }); function Pr(t, e) { if (t) {
            const n = t.indexOf(e);
            0 <= n && t.splice(n, 1);
        } } class At {
            constructor(e) { this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null; }
            unsubscribe() { let e; if (!this.closed) {
                this.closed = !0;
                const { _parentage: n } = this;
                if (n)
                    if (this._parentage = null, Array.isArray(n))
                        for (const o of n)
                            o.remove(this);
                    else
                        n.remove(this);
                const { initialTeardown: r } = this;
                if (ce(r))
                    try {
                        r();
                    }
                    catch (o) {
                        e = o instanceof xi ? o.errors : [o];
                    }
                const { _finalizers: i } = this;
                if (i) {
                    this._finalizers = null;
                    for (const o of i)
                        try {
                            yc(o);
                        }
                        catch (s) {
                            e = e !== null && e !== void 0 ? e : [], s instanceof xi ? e = [...e, ...s.errors] : e.push(s);
                        }
                }
                if (e)
                    throw new xi(e);
            } }
            add(e) { var n; if (e && e !== this)
                if (this.closed)
                    yc(e);
                else {
                    if (e instanceof At) {
                        if (e.closed || e._hasParent(this))
                            return;
                        e._addParent(this);
                    }
                    (this._finalizers = null !== (n = this._finalizers) && void 0 !== n ? n : []).push(e);
                } }
            _hasParent(e) { const { _parentage: n } = this; return n === e || Array.isArray(n) && n.includes(e); }
            _addParent(e) { const { _parentage: n } = this; this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e; }
            _removeParent(e) { const { _parentage: n } = this; n === e ? this._parentage = null : Array.isArray(n) && Pr(n, e); }
            remove(e) { const { _finalizers: n } = this; n && Pr(n, e), e instanceof At && e._removeParent(this); }
        } At.EMPTY = (() => { const t = new At; return t.closed = !0, t; })(); const gc = At.EMPTY; function mc(t) { return t instanceof At || t && "closed" in t && ce(t.remove) && ce(t.add) && ce(t.unsubscribe); } function yc(t) { ce(t) ? t() : t.unsubscribe(); } const yn = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 }, Ri = { setTimeout(t, e, ...n) { const { delegate: r } = Ri; return (r === null || r === void 0 ? void 0 : r.setTimeout) ? r.setTimeout(t, e, ...n) : setTimeout(t, e, ...n); }, clearTimeout(t) { const { delegate: e } = Ri; return ((e === null || e === void 0 ? void 0 : e.clearTimeout) || clearTimeout)(t); }, delegate: void 0 }; function Dc(t) { Ri.setTimeout(() => { const { onUnhandledError: e } = yn; if (!e)
            throw t; e(t); }); } function vc() { } const fD = Ps("C", void 0, void 0); function Ps(t, e, n) { return { kind: t, value: e, error: n }; } let Dn = null; function Oi(t) { if (yn.useDeprecatedSynchronousErrorHandling) {
            const e = !Dn;
            if (e && (Dn = { errorThrown: !1, error: null }), t(), e) {
                const { errorThrown: n, error: r } = Dn;
                if (Dn = null, n)
                    throw r;
            }
        }
        else
            t(); } class Fs extends At {
            constructor(e) { super(), this.isStopped = !1, e ? (this.destination = e, mc(e) && e.add(this)) : this.destination = vD; }
            static create(e, n, r) { return new Fr(e, n, r); }
            next(e) { this.isStopped ? Rs(function pD(t) { return Ps("N", t, void 0); }(e), this) : this._next(e); }
            error(e) { this.isStopped ? Rs(function hD(t) { return Ps("E", void 0, t); }(e), this) : (this.isStopped = !0, this._error(e)); }
            complete() { this.isStopped ? Rs(fD, this) : (this.isStopped = !0, this._complete()); }
            unsubscribe() { this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null); }
            _next(e) { this.destination.next(e); }
            _error(e) { try {
                this.destination.error(e);
            }
            finally {
                this.unsubscribe();
            } }
            _complete() { try {
                this.destination.complete();
            }
            finally {
                this.unsubscribe();
            } }
        } const mD = Function.prototype.bind; function xs(t, e) { return mD.call(t, e); } class yD {
            constructor(e) { this.partialObserver = e; }
            next(e) { const { partialObserver: n } = this; if (n.next)
                try {
                    n.next(e);
                }
                catch (r) {
                    ki(r);
                } }
            error(e) { const { partialObserver: n } = this; if (n.error)
                try {
                    n.error(e);
                }
                catch (r) {
                    ki(r);
                }
            else
                ki(e); }
            complete() { const { partialObserver: e } = this; if (e.complete)
                try {
                    e.complete();
                }
                catch (n) {
                    ki(n);
                } }
        } class Fr extends Fs {
            constructor(e, n, r) { let i; if (super(), ce(e) || !e)
                i = { next: e !== null && e !== void 0 ? e : void 0, error: n !== null && n !== void 0 ? n : void 0, complete: r !== null && r !== void 0 ? r : void 0 };
            else {
                let o;
                this && yn.useDeprecatedNextContext ? (o = Object.create(e), o.unsubscribe = () => this.unsubscribe(), i = { next: e.next && xs(e.next, o), error: e.error && xs(e.error, o), complete: e.complete && xs(e.complete, o) }) : i = e;
            } this.destination = new yD(i); }
        } function ki(t) { yn.useDeprecatedSynchronousErrorHandling ? function gD(t) { yn.useDeprecatedSynchronousErrorHandling && Dn && (Dn.errorThrown = !0, Dn.error = t); }(t) : Dc(t); } function Rs(t, e) { const { onStoppedNotification: n } = yn; n && Ri.setTimeout(() => n(t, e)); } const vD = { closed: !0, next: vc, error: function DD(t) { throw t; }, complete: vc }, Os = "function" == typeof Symbol && Symbol.observable || "@@observable"; function _c(t) { return t; } let Ve = (() => { class t {
            constructor(n) { n && (this._subscribe = n); }
            lift(n) { const r = new t; return r.source = this, r.operator = n, r; }
            subscribe(n, r, i) { const o = function wD(t) { return t && t instanceof Fs || function _D(t) { return t && ce(t.next) && ce(t.error) && ce(t.complete); }(t) && mc(t); }(n) ? n : new Fr(n, r, i); return Oi(() => { const { operator: s, source: a } = this; o.add(s ? s.call(o, a) : a ? this._subscribe(o) : this._trySubscribe(o)); }), o; }
            _trySubscribe(n) { try {
                return this._subscribe(n);
            }
            catch (r) {
                n.error(r);
            } }
            forEach(n, r) { return new (r = Ec(r))((i, o) => { const s = new Fr({ next: a => { try {
                    n(a);
                }
                catch (l) {
                    o(l), s.unsubscribe();
                } }, error: o, complete: i }); this.subscribe(s); }); }
            _subscribe(n) { var r; return null === (r = this.source) || void 0 === r ? void 0 : r.subscribe(n); }
            [Os]() { return this; }
            pipe(...n) { return function wc(t) { return 0 === t.length ? _c : 1 === t.length ? t[0] : function (n) { return t.reduce((r, i) => i(r), n); }; }(n)(this); }
            toPromise(n) { return new (n = Ec(n))((r, i) => { let o; this.subscribe(s => o = s, s => i(s), () => r(o)); }); }
        } return t.create = e => new t(e), t; })(); function Ec(t) { var e; return null !== (e = t !== null && t !== void 0 ? t : yn.Promise) && void 0 !== e ? e : Promise; } const ED = Fi(t => function () { t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; }); let ks = (() => { class t extends Ve {
            constructor() { super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null; }
            lift(n) { const r = new Cc(this, this); return r.operator = n, r; }
            _throwIfClosed() { if (this.closed)
                throw new ED; }
            next(n) { Oi(() => { if (this._throwIfClosed(), !this.isStopped) {
                this.currentObservers || (this.currentObservers = Array.from(this.observers));
                for (const r of this.currentObservers)
                    r.next(n);
            } }); }
            error(n) { Oi(() => { if (this._throwIfClosed(), !this.isStopped) {
                this.hasError = this.isStopped = !0, this.thrownError = n;
                const { observers: r } = this;
                for (; r.length;)
                    r.shift().error(n);
            } }); }
            complete() { Oi(() => { if (this._throwIfClosed(), !this.isStopped) {
                this.isStopped = !0;
                const { observers: n } = this;
                for (; n.length;)
                    n.shift().complete();
            } }); }
            unsubscribe() { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }
            get observed() { var n; return (null === (n = this.observers) || void 0 === n ? void 0 : n.length) > 0; }
            _trySubscribe(n) { return this._throwIfClosed(), super._trySubscribe(n); }
            _subscribe(n) { return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n); }
            _innerSubscribe(n) { const { hasError: r, isStopped: i, observers: o } = this; return r || i ? gc : (this.currentObservers = null, o.push(n), new At(() => { this.currentObservers = null, Pr(o, n); })); }
            _checkFinalizedStatuses(n) { const { hasError: r, thrownError: i, isStopped: o } = this; r ? n.error(i) : o && n.complete(); }
            asObservable() { const n = new Ve; return n.source = this, n; }
        } return t.create = (e, n) => new Cc(e, n), t; })(); class Cc extends ks {
            constructor(e, n) { super(), this.destination = e, this.source = n; }
            next(e) { var n, r; null === (r = null === (n = this.destination) || void 0 === n ? void 0 : n.next) || void 0 === r || r.call(n, e); }
            error(e) { var n, r; null === (r = null === (n = this.destination) || void 0 === n ? void 0 : n.error) || void 0 === r || r.call(n, e); }
            complete() { var e, n; null === (n = null === (e = this.destination) || void 0 === e ? void 0 : e.complete) || void 0 === n || n.call(e); }
            _subscribe(e) { var n, r; return null !== (r = null === (n = this.source) || void 0 === n ? void 0 : n.subscribe(e)) && void 0 !== r ? r : gc; }
        } function xr(t) { return e => { if (function CD(t) { return ce(t === null || t === void 0 ? void 0 : t.lift); }(e))
            return e.lift(function (n) { try {
                return t(n, this);
            }
            catch (r) {
                this.error(r);
            } }); throw new TypeError("Unable to lift unknown Observable type"); }; } function Li(t, e, n, r, i) { return new bD(t, e, n, r, i); } class bD extends Fs {
            constructor(e, n, r, i, o, s) { super(e), this.onFinalize = o, this.shouldUnsubscribe = s, this._next = n ? function (a) { try {
                n(a);
            }
            catch (l) {
                e.error(l);
            } } : super._next, this._error = i ? function (a) { try {
                i(a);
            }
            catch (l) {
                e.error(l);
            }
            finally {
                this.unsubscribe();
            } } : super._error, this._complete = r ? function () { try {
                r();
            }
            catch (a) {
                e.error(a);
            }
            finally {
                this.unsubscribe();
            } } : super._complete; }
            unsubscribe() { var e; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                const { closed: n } = this;
                super.unsubscribe(), !n && (null === (e = this.onFinalize) || void 0 === e || e.call(this));
            } }
        } function vn(t) { return this instanceof vn ? (this.v = t, this) : new vn(t); } function MD(t, e, n) { if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined."); var i, r = n.apply(t, e || []), o = []; return i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function () { return this; }, i; function s(f) { r[f] && (i[f] = function (h) { return new Promise(function (p, g) { o.push([f, h, p, g]) > 1 || a(f, h); }); }); } function a(f, h) { try {
            !function l(f) { f.value instanceof vn ? Promise.resolve(f.value.v).then(u, c) : d(o[0][2], f); }(r[f](h));
        }
        catch (p) {
            d(o[0][3], p);
        } } function u(f) { a("next", f); } function c(f) { a("throw", f); } function d(f, h) { f(h), o.shift(), o.length && a(o[0][0], o[0][1]); } } function AD(t) { if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined."); var n, e = t[Symbol.asyncIterator]; return e ? e.call(t) : (t = function Ic(t) { var e = "function" == typeof Symbol && Symbol.iterator, n = e && t[e], r = 0; if (n)
            return n.call(t); if (t && "number" == typeof t.length)
            return { next: function () { return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }; } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined."); }(t), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function () { return this; }, n); function r(o) { n[o] = t[o] && function (s) { return new Promise(function (a, l) { !function i(o, s, a, l) { Promise.resolve(l).then(function (u) { o({ value: u, done: a }); }, s); }(a, l, (s = t[o](s)).done, s.value); }); }; } } const Tc = t => t && "number" == typeof t.length && "function" != typeof t; function Mc(t) { return ce(t === null || t === void 0 ? void 0 : t.then); } function Ac(t) { return ce(t[Os]); } function Nc(t) { return Symbol.asyncIterator && ce(t === null || t === void 0 ? void 0 : t[Symbol.asyncIterator]); } function Pc(t) { return new TypeError(`You provided ${null !== t && "object" == typeof t ? "an invalid object" : `'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`); } const Fc = function PD() { return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"; }(); function xc(t) { return ce(t === null || t === void 0 ? void 0 : t[Fc]); } function Rc(t) { return MD(this, arguments, function* () { const n = t.getReader(); try {
            for (;;) {
                const { value: r, done: i } = yield vn(n.read());
                if (i)
                    return yield vn(void 0);
                yield yield vn(r);
            }
        }
        finally {
            n.releaseLock();
        } }); } function Oc(t) { return ce(t === null || t === void 0 ? void 0 : t.getReader); } function _n(t) { if (t instanceof Ve)
            return t; if (null != t) {
            if (Ac(t))
                return function FD(t) { return new Ve(e => { const n = t[Os](); if (ce(n.subscribe))
                    return n.subscribe(e); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }(t);
            if (Tc(t))
                return function xD(t) { return new Ve(e => { for (let n = 0; n < t.length && !e.closed; n++)
                    e.next(t[n]); e.complete(); }); }(t);
            if (Mc(t))
                return function RD(t) { return new Ve(e => { t.then(n => { e.closed || (e.next(n), e.complete()); }, n => e.error(n)).then(null, Dc); }); }(t);
            if (Nc(t))
                return kc(t);
            if (xc(t))
                return function OD(t) { return new Ve(e => { for (const n of t)
                    if (e.next(n), e.closed)
                        return; e.complete(); }); }(t);
            if (Oc(t))
                return function kD(t) { return kc(Rc(t)); }(t);
        } throw Pc(t); } function kc(t) { return new Ve(e => { (function LD(t, e) { var n, r, i, o; return function ID(t, e, n, r) { return new (n || (n = Promise))(function (o, s) { function a(c) { try {
            u(r.next(c));
        }
        catch (d) {
            s(d);
        } } function l(c) { try {
            u(r.throw(c));
        }
        catch (d) {
            s(d);
        } } function u(c) { c.done ? o(c.value) : function i(o) { return o instanceof n ? o : new n(function (s) { s(o); }); }(c.value).then(a, l); } u((r = r.apply(t, e || [])).next()); }); }(this, void 0, void 0, function* () { try {
            for (n = AD(t); !(r = yield n.next()).done;)
                if (e.next(r.value), e.closed)
                    return;
        }
        catch (s) {
            i = { error: s };
        }
        finally {
            try {
                r && !r.done && (o = n.return) && (yield o.call(n));
            }
            finally {
                if (i)
                    throw i.error;
            }
        } e.complete(); }); })(t, e).catch(n => e.error(n)); }); } function rn(t, e, n, r = 0, i = !1) { const o = e.schedule(function () { n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe(); }, r); if (t.add(o), !i)
            return o; } function Lc(t, e, n = 1 / 0) { return ce(e) ? Lc((r, i) => function SD(t, e) { return xr((n, r) => { let i = 0; n.subscribe(Li(r, o => { r.next(t.call(e, o, i++)); })); }); }((o, s) => e(r, o, i, s))(_n(t(r, i))), n) : ("number" == typeof e && (n = e), xr((r, i) => function VD(t, e, n, r, i, o, s, a) { const l = []; let u = 0, c = 0, d = !1; const f = () => { d && !l.length && !u && e.complete(); }, h = g => u < r ? p(g) : l.push(g), p = g => { o && e.next(g), u++; let y = !1; _n(n(g, c++)).subscribe(Li(e, D => { i === null || i === void 0 ? void 0 : i(D), o ? h(D) : e.next(D); }, () => { y = !0; }, void 0, () => { if (y)
            try {
                for (u--; l.length && u < r;) {
                    const D = l.shift();
                    s ? rn(e, s, () => p(D)) : p(D);
                }
                f();
            }
            catch (D) {
                e.error(D);
            } })); }; return t.subscribe(Li(e, h, () => { d = !0, f(); })), () => { a === null || a === void 0 ? void 0 : a(); }; }(r, i, t, n))); } const Vc = new Ve(t => t.complete()); function Vs(t) { return t[t.length - 1]; } function Bc(t, e = 0) { return xr((n, r) => { n.subscribe(Li(r, i => rn(r, t, () => r.next(i), e), () => rn(r, t, () => r.complete(), e), i => rn(r, t, () => r.error(i), e))); }); } function jc(t, e = 0) { return xr((n, r) => { r.add(t.schedule(() => n.subscribe(r), e)); }); } function Hc(t, e) { if (!t)
            throw new Error("Iterable cannot be null"); return new Ve(n => { rn(n, e, () => { const r = t[Symbol.asyncIterator](); rn(n, e, () => { r.next().then(i => { i.done ? n.complete() : n.next(i.value); }); }, 0, !0); }); }); } function YD(...t) { const e = function $D(t) { return function HD(t) { return t && ce(t.schedule); }(Vs(t)) ? t.pop() : void 0; }(t), n = function UD(t, e) { return "number" == typeof Vs(t) ? t.pop() : e; }(t, 1 / 0), r = t; return r.length ? 1 === r.length ? _n(r[0]) : function BD(t = 1 / 0) { return Lc(_c, t); }(n)(function ZD(t, e) { return e ? function QD(t, e) { if (null != t) {
            if (Ac(t))
                return function zD(t, e) { return _n(t).pipe(jc(e), Bc(e)); }(t, e);
            if (Tc(t))
                return function qD(t, e) { return new Ve(n => { let r = 0; return e.schedule(function () { r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule()); }); }); }(t, e);
            if (Mc(t))
                return function GD(t, e) { return _n(t).pipe(jc(e), Bc(e)); }(t, e);
            if (Nc(t))
                return Hc(t, e);
            if (xc(t))
                return function WD(t, e) { return new Ve(n => { let r; return rn(n, e, () => { r = t[Fc](), rn(n, e, () => { let i, o; try {
                    ({ value: i, done: o } = r.next());
                }
                catch (s) {
                    return void n.error(s);
                } o ? n.complete() : n.next(i); }, 0, !0); }), () => ce(r === null || r === void 0 ? void 0 : r.return) && r.return(); }); }(t, e);
            if (Oc(t))
                return function KD(t, e) { return Hc(Rc(t), e); }(t, e);
        } throw Pc(t); }(t, e) : _n(t); }(r, e)) : Vc; } function Bs(t, e, ...n) { if (!0 === e)
            return void t(); if (!1 === e)
            return; const r = new Fr({ next: () => { r.unsubscribe(), t(); } }); return e(...n).subscribe(r); } function X(t) { for (let e in t)
            if (t[e] === X)
                return e; throw Error("Could not find renamed property on target object."); } function ee(t) { if ("string" == typeof t)
            return t; if (Array.isArray(t))
            return "[" + t.map(ee).join(", ") + "]"; if (null == t)
            return "" + t; if (t.overriddenName)
            return `${t.overriddenName}`; if (t.name)
            return `${t.name}`; const e = t.toString(); if (null == e)
            return "" + e; const n = e.indexOf("\n"); return -1 === n ? e : e.substring(0, n); } function Hs(t, e) { return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e; } const XD = X({ __forward_ref__: X }); function $s(t) { return t.__forward_ref__ = $s, t.toString = function () { return ee(this()); }, t; } function N(t) { return function Us(t) { return "function" == typeof t && t.hasOwnProperty(XD) && t.__forward_ref__ === $s; }(t) ? t() : t; } class w extends Error {
            constructor(e, n) { super(function Vi(t, e) { return `NG0${Math.abs(t)}${e ? ": " + e.trim() : ""}`; }(e, n)), this.code = e; }
        } function K(t) { return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : function x(t) { return "string" == typeof t ? t : null == t ? "" : String(t); }(t); } function Bi(t, e) { throw new w(-201, !1); } function Ge(t, e) { null == t && function Z(t, e, n, r) { throw new Error(`ASSERTION ERROR: ${t}` + (null == r ? "" : ` [Expected=> ${n} ${r} ${e} <=Actual]`)); }(e, t, null, "!="); } function J(t) { return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 }; } function wn(t) { return { providers: t.providers || [], imports: t.imports || [] }; } function ji(t) { return $c(t, Hi) || $c(t, zc); } function $c(t, e) { return t.hasOwnProperty(e) ? t[e] : null; } function Uc(t) { return t && (t.hasOwnProperty(zs) || t.hasOwnProperty(av)) ? t[zs] : null; } const Hi = X({ \u0275prov: X }), zs = X({ \u0275inj: X }), zc = X({ ngInjectableDef: X }), av = X({ ngInjectorDef: X }); var P = (() => ((P = P || {})[P.Default = 0] = "Default", P[P.Host = 1] = "Host", P[P.Self = 2] = "Self", P[P.SkipSelf = 4] = "SkipSelf", P[P.Optional = 8] = "Optional", P))(); let Gs; function ot(t) { const e = Gs; return Gs = t, e; } function Gc(t, e, n) { const r = ji(t); return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & P.Optional ? null : void 0 !== e ? e : void Bi(ee(t)); } function on(t) { return { toString: t }.toString(); } var gt = (() => ((gt = gt || {})[gt.OnPush = 0] = "OnPush", gt[gt.Default = 1] = "Default", gt))(), mt = (() => { return (t = mt || (mt = {}))[t.Emulated = 0] = "Emulated", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", mt; var t; })(); const ne = (() => typeof globalThis < "u" && globalThis || typeof global < "u" && global || typeof window < "u" && window || typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self)(), Bn = {}, Q = [], $i = X({ \u0275cmp: X }), qs = X({ \u0275dir: X }), Ws = X({ \u0275pipe: X }), qc = X({ \u0275mod: X }), jt = X({ \u0275fac: X }), Rr = X({ __NG_ELEMENT_ID__: X }); let uv = 0; function Ht(t) { return on(() => { const n = !0 === t.standalone, r = {}, i = { type: t.type, providersResolver: null, decls: t.decls, vars: t.vars, factory: null, template: t.template || null, consts: t.consts || null, ngContentSelectors: t.ngContentSelectors, hostBindings: t.hostBindings || null, hostVars: t.hostVars || 0, hostAttrs: t.hostAttrs || null, contentQueries: t.contentQueries || null, declaredInputs: r, inputs: null, outputs: null, exportAs: t.exportAs || null, onPush: t.changeDetection === gt.OnPush, directiveDefs: null, pipeDefs: null, standalone: n, dependencies: n && t.dependencies || null, getStandaloneInjector: null, selectors: t.selectors || Q, viewQuery: t.viewQuery || null, features: t.features || null, data: t.data || {}, encapsulation: t.encapsulation || mt.Emulated, id: "c" + uv++, styles: t.styles || Q, _: null, setInput: null, schemas: t.schemas || null, tView: null }, o = t.dependencies, s = t.features; return i.inputs = Qc(t.inputs, r), i.outputs = Qc(t.outputs), s && s.forEach(a => a(i)), i.directiveDefs = o ? () => ("function" == typeof o ? o() : o).map(Wc).filter(Kc) : null, i.pipeDefs = o ? () => ("function" == typeof o ? o() : o).map(Fe).filter(Kc) : null, i; }); } function Wc(t) { return Y(t) || Pe(t); } function Kc(t) { return null !== t; } function jn(t) { return on(() => ({ type: t.type, bootstrap: t.bootstrap || Q, declarations: t.declarations || Q, imports: t.imports || Q, exports: t.exports || Q, transitiveCompileScopes: null, schemas: t.schemas || null, id: t.id || null })); } function Qc(t, e) { if (null == t)
            return Bn; const n = {}; for (const r in t)
            if (t.hasOwnProperty(r)) {
                let i = t[r], o = i;
                Array.isArray(i) && (o = i[1], i = i[0]), n[i] = r, e && (e[i] = o);
            } return n; } const st = Ht; function Y(t) { return t[$i] || null; } function Pe(t) { return t[qs] || null; } function Fe(t) { return t[Ws] || null; } const k = 11; function je(t) { return Array.isArray(t) && "object" == typeof t[1]; } function Dt(t) { return Array.isArray(t) && !0 === t[1]; } function Zs(t) { return 0 != (8 & t.flags); } function qi(t) { return 2 == (2 & t.flags); } function vt(t) { return null !== t.template; } function gv(t) { return 0 != (256 & t[2]); } function In(t, e) { return t.hasOwnProperty(jt) ? t[jt] : null; } class Dv {
            constructor(e, n, r) { this.previousValue = e, this.currentValue = n, this.firstChange = r; }
            isFirstChange() { return this.firstChange; }
        } function Jc(t) { return t.type.prototype.ngOnChanges && (t.setInput = _v), vv; } function vv() { const t = ed(this), e = t === null || t === void 0 ? void 0 : t.current; if (e) {
            const n = t.previous;
            if (n === Bn)
                t.previous = e;
            else
                for (let r in e)
                    n[r] = e[r];
            t.current = null, this.ngOnChanges(e);
        } } function _v(t, e, n, r) { const i = ed(t) || function wv(t, e) { return t[Xc] = e; }(t, { previous: Bn, current: null }), o = i.current || (i.current = {}), s = i.previous, a = this.declaredInputs[n], l = s[a]; o[a] = new Dv(l && l.currentValue, e, s === Bn), t[r] = e; } const Xc = "__ngSimpleChanges__"; function ed(t) { return t[Xc] || null; } function pe(t) { for (; Array.isArray(t);)
            t = t[0]; return t; } function Ke(t, e) { return pe(e[t.index]); } function ta(t, e) { return t.data[e]; } function Qe(t, e) { const n = e[t]; return je(n) ? n : n[0]; } function Zi(t) { return 64 == (64 & t[2]); } function sn(t, e) { return null == e ? null : t[e]; } function td(t) { t[18] = 0; } function na(t, e) { t[5] += e; let n = t, r = t[3]; for (; null !== r && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]);)
            r[5] += e, n = r, r = r[3]; } const F = { lFrame: dd(null), bindingsEnabled: !0 }; function rd() { return F.bindingsEnabled; } function v() { return F.lFrame.lView; } function G() { return F.lFrame.tView; } function De() { let t = id(); for (; null !== t && 64 === t.type;)
            t = t.parent; return t; } function id() { return F.lFrame.currentTNode; } function Nt(t, e) { const n = F.lFrame; n.currentTNode = t, n.isParent = e; } function ra() { return F.lFrame.isParent; } function Vv(t, e) { const n = F.lFrame; n.bindingIndex = n.bindingRootIndex = t, oa(e); } function oa(t) { F.lFrame.currentDirectiveIndex = t; } function aa(t) { F.lFrame.currentQueryIndex = t; } function jv(t) { const e = t[1]; return 2 === e.type ? e.declTNode : 1 === e.type ? t[6] : null; } function ud(t, e, n) { if (n & P.SkipSelf) {
            let i = e, o = t;
            for (; !(i = i.parent, null !== i || n & P.Host || (i = jv(o), null === i || (o = o[15], 10 & i.type)));)
                ;
            if (null === i)
                return !1;
            e = i, t = o;
        } const r = F.lFrame = cd(); return r.currentTNode = e, r.lView = t, !0; } function la(t) { const e = cd(), n = t[1]; F.lFrame = e, e.currentTNode = n.firstChild, e.lView = t, e.tView = n, e.contextLView = t, e.bindingIndex = n.bindingStartIndex, e.inI18n = !1; } function cd() { const t = F.lFrame, e = null === t ? null : t.child; return null === e ? dd(t) : e; } function dd(t) { const e = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: t, child: null, inI18n: !1 }; return null !== t && (t.child = e), e; } function fd() { const t = F.lFrame; return F.lFrame = t.parent, t.currentTNode = null, t.lView = null, t; } const hd = fd; function ua() { const t = fd(); t.isParent = !0, t.tView = null, t.selectedIndex = -1, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0; } function Re() { return F.lFrame.selectedIndex; } function an(t) { F.lFrame.selectedIndex = t; } function Yi() { F.lFrame.currentNamespace = "svg"; } function ca() { !function zv() { F.lFrame.currentNamespace = null; }(); } function Ji(t, e) { for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
            const o = t.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: l, ngAfterViewChecked: u, ngOnDestroy: c } = o;
            s && (t.contentHooks || (t.contentHooks = [])).push(-n, s), a && ((t.contentHooks || (t.contentHooks = [])).push(n, a), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, a)), l && (t.viewHooks || (t.viewHooks = [])).push(-n, l), u && ((t.viewHooks || (t.viewHooks = [])).push(n, u), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, u)), null != c && (t.destroyHooks || (t.destroyHooks = [])).push(n, c);
        } } function Xi(t, e, n) { pd(t, e, 3, n); } function eo(t, e, n, r) { (3 & t[2]) === n && pd(t, e, n, r); } function da(t, e) { let n = t[2]; (3 & n) === e && (n &= 2047, n += 1, t[2] = n); } function pd(t, e, n, r) { const o = r !== null && r !== void 0 ? r : -1, s = e.length - 1; let a = 0; for (let l = void 0 !== r ? 65535 & t[18] : 0; l < s; l++)
            if ("number" == typeof e[l + 1]) {
                if (a = e[l], null != r && a >= r)
                    break;
            }
            else
                e[l] < 0 && (t[18] += 65536), (a < o || -1 == o) && (Wv(t, n, e, l), t[18] = (4294901760 & t[18]) + l + 2), l++; } function Wv(t, e, n, r) { const i = n[r] < 0, o = n[r + 1], a = t[i ? -n[r] : n[r]]; if (i) {
            if (t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e) {
                t[2] += 2048;
                try {
                    o.call(a);
                }
                finally { }
            }
        }
        else
            try {
                o.call(a);
            }
            finally { } } class Hr {
            constructor(e, n, r) { this.factory = e, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = r; }
        } function to(t, e, n) { let r = 0; for (; r < n.length;) {
            const i = n[r];
            if ("number" == typeof i) {
                if (0 !== i)
                    break;
                r++;
                const o = n[r++], s = n[r++], a = n[r++];
                t.setAttribute(e, s, a, o);
            }
            else {
                const o = i, s = n[++r];
                md(o) ? t.setProperty(e, o, s) : t.setAttribute(e, o, s), r++;
            }
        } return r; } function gd(t) { return 3 === t || 4 === t || 6 === t; } function md(t) { return 64 === t.charCodeAt(0); } function no(t, e) { if (null !== e && 0 !== e.length)
            if (null === t || 0 === t.length)
                t = e.slice();
            else {
                let n = -1;
                for (let r = 0; r < e.length; r++) {
                    const i = e[r];
                    "number" == typeof i ? n = i : 0 === n || yd(t, n, i, null, -1 === n || 2 === n ? e[++r] : null);
                }
            } return t; } function yd(t, e, n, r, i) { let o = 0, s = t.length; if (-1 === e)
            s = -1;
        else
            for (; o < t.length;) {
                const a = t[o++];
                if ("number" == typeof a) {
                    if (a === e) {
                        s = -1;
                        break;
                    }
                    if (a > e) {
                        s = o - 1;
                        break;
                    }
                }
            } for (; o < t.length;) {
            const a = t[o];
            if ("number" == typeof a)
                break;
            if (a === n) {
                if (null === r)
                    return void (null !== i && (t[o + 1] = i));
                if (r === t[o + 1])
                    return void (t[o + 2] = i);
            }
            o++, null !== r && o++, null !== i && o++;
        } -1 !== s && (t.splice(s, 0, e), o = s + 1), t.splice(o++, 0, n), null !== r && t.splice(o++, 0, r), null !== i && t.splice(o++, 0, i); } function qn(t) { return 32767 & t; } function Wn(t, e) { let n = function Jv(t) { return t >> 16; }(t), r = e; for (; n > 0;)
            r = r[15], n--; return r; } let ha = !0; function ro(t) { const e = ha; return ha = t, e; } let Xv = 0; const Pt = {}; function Ur(t, e) { const n = ga(t, e); if (-1 !== n)
            return n; const r = e[1]; r.firstCreatePass && (t.injectorIndex = e.length, pa(r.data, t), pa(e, null), pa(r.blueprint, null)); const i = io(t, e), o = t.injectorIndex; if (function Dd(t) { return -1 !== t; }(i)) {
            const s = qn(i), a = Wn(i, e), l = a[1].data;
            for (let u = 0; u < 8; u++)
                e[o + u] = a[s + u] | l[s + u];
        } return e[o + 8] = i, o; } function pa(t, e) { t.push(0, 0, 0, 0, 0, 0, 0, 0, e); } function ga(t, e) { return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null === e[t.injectorIndex + 8] ? -1 : t.injectorIndex; } function io(t, e) { if (t.parent && -1 !== t.parent.injectorIndex)
            return t.parent.injectorIndex; let n = 0, r = null, i = e; for (; null !== i;) {
            if (r = Td(i), null === r)
                return -1;
            if (n++, i = i[15], -1 !== r.injectorIndex)
                return r.injectorIndex | n << 16;
        } return -1; } function oo(t, e, n) { !function e_(t, e, n) { let r; "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(Rr) && (r = n[Rr]), null == r && (r = n[Rr] = Xv++); const i = 255 & r; e.data[t + (i >> 5)] |= 1 << i; }(t, e, n); } function wd(t, e, n) { if (n & P.Optional || void 0 !== t)
            return t; Bi(); } function Ed(t, e, n, r) { if (n & P.Optional && void 0 === r && (r = null), 0 == (n & (P.Self | P.Host))) {
            const i = t[9], o = ot(void 0);
            try {
                return i ? i.get(e, r, n & P.Optional) : Gc(e, r, n & P.Optional);
            }
            finally {
                ot(o);
            }
        } return wd(r, 0, n); } function Cd(t, e, n, r = P.Default, i) { if (null !== t) {
            if (1024 & e[2]) {
                const s = function s_(t, e, n, r, i) { let o = t, s = e; for (; null !== o && null !== s && 1024 & s[2] && !(256 & s[2]);) {
                    const a = bd(o, s, n, r | P.Self, Pt);
                    if (a !== Pt)
                        return a;
                    let l = o.parent;
                    if (!l) {
                        const u = s[21];
                        if (u) {
                            const c = u.get(n, Pt, r);
                            if (c !== Pt)
                                return c;
                        }
                        l = Td(s), s = s[15];
                    }
                    o = l;
                } return i; }(t, e, n, r, Pt);
                if (s !== Pt)
                    return s;
            }
            const o = bd(t, e, n, r, Pt);
            if (o !== Pt)
                return o;
        } return Ed(e, n, r, i); } function bd(t, e, n, r, i) { const o = function r_(t) { if ("string" == typeof t)
            return t.charCodeAt(0) || 0; const e = t.hasOwnProperty(Rr) ? t[Rr] : void 0; return "number" == typeof e ? e >= 0 ? 255 & e : i_ : e; }(n); if ("function" == typeof o) {
            if (!ud(e, t, r))
                return r & P.Host ? wd(i, 0, r) : Ed(e, n, r, i);
            try {
                const s = o(r);
                if (null != s || r & P.Optional)
                    return s;
                Bi();
            }
            finally {
                hd();
            }
        }
        else if ("number" == typeof o) {
            let s = null, a = ga(t, e), l = -1, u = r & P.Host ? e[16][6] : null;
            for ((-1 === a || r & P.SkipSelf) && (l = -1 === a ? io(t, e) : e[a + 8], -1 !== l && Id(r, !1) ? (s = e[1], a = qn(l), e = Wn(l, e)) : a = -1); -1 !== a;) {
                const c = e[1];
                if (Sd(o, a, c.data)) {
                    const d = n_(a, e, n, s, r, u);
                    if (d !== Pt)
                        return d;
                }
                l = e[a + 8], -1 !== l && Id(r, e[1].data[a + 8] === u) && Sd(o, a, e) ? (s = c, a = qn(l), e = Wn(l, e)) : a = -1;
            }
        } return i; } function n_(t, e, n, r, i, o) { const s = e[1], a = s.data[t + 8], c = function so(t, e, n, r, i) { const o = t.providerIndexes, s = e.data, a = 1048575 & o, l = t.directiveStart, c = o >> 20, f = i ? a + c : t.directiveEnd; for (let h = r ? a : a + c; h < f; h++) {
            const p = s[h];
            if (h < l && n === p || h >= l && p.type === n)
                return h;
        } if (i) {
            const h = s[l];
            if (h && vt(h) && h.type === n)
                return l;
        } return null; }(a, s, n, null == r ? qi(a) && ha : r != s && 0 != (3 & a.type), i & P.Host && o === a); return null !== c ? zr(e, s, c, a) : Pt; } function zr(t, e, n, r) { let i = t[n]; const o = e.data; if (function Kv(t) { return t instanceof Hr; }(i)) {
            const s = i;
            s.resolving && function ev(t, e) { const n = e ? `. Dependency path: ${e.join(" > ")} > ${t}` : ""; throw new w(-200, `Circular dependency in DI detected for ${t}${n}`); }(K(o[n]));
            const a = ro(s.canSeeViewProviders);
            s.resolving = !0;
            const l = s.injectImpl ? ot(s.injectImpl) : null;
            ud(t, r, P.Default);
            try {
                i = t[n] = s.factory(void 0, o, t, r), e.firstCreatePass && n >= r.directiveStart && function qv(t, e, n) { const { ngOnChanges: r, ngOnInit: i, ngDoCheck: o } = e.type.prototype; if (r) {
                    const s = Jc(e);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(t, s), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, s);
                } i && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, i), o && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, o), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, o)); }(n, o[n], e);
            }
            finally {
                null !== l && ot(l), ro(a), s.resolving = !1, hd();
            }
        } return i; } function Sd(t, e, n) { return !!(n[e + (t >> 5)] & 1 << t); } function Id(t, e) { return !(t & P.Self || t & P.Host && e); } class Kn {
            constructor(e, n) { this._tNode = e, this._lView = n; }
            get(e, n, r) { return Cd(this._tNode, this._lView, e, r, n); }
        } function i_() { return new Kn(De(), v()); } function Td(t) { const e = t[1], n = e.type; return 2 === n ? e.declTNode : 1 === n ? t[6] : null; } const Zn = "__parameters__"; function Jn(t, e, n) { return on(() => { const r = function Da(t) { return function (...n) { if (t) {
            const r = t(...n);
            for (const i in r)
                this[i] = r[i];
        } }; }(e); function i(...o) { if (this instanceof i)
            return r.apply(this, o), this; const s = new i(...o); return a.annotation = s, a; function a(l, u, c) { const d = l.hasOwnProperty(Zn) ? l[Zn] : Object.defineProperty(l, Zn, { value: [] })[Zn]; for (; d.length <= c;)
            d.push(null); return (d[c] = d[c] || []).push(s), l; } } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = t, i.annotationCls = i, i; }); } class H {
            constructor(e, n) { this._desc = e, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = J({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
            get multi() { return this; }
            toString() { return `InjectionToken ${this._desc}`; }
        } function zt(t, e) { t.forEach(n => Array.isArray(n) ? zt(n, e) : e(n)); } function ao(t, e) { return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]; } const Kr = {}, Ea = "__NG_DI_FLAG__", uo = "ngTempTokenPath", D_ = /\n/gm, xd = "__source"; let Qr; function er(t) { const e = Qr; return Qr = t, e; } function __(t, e = P.Default) { if (void 0 === Qr)
            throw new w(-203, !1); return null === Qr ? Gc(t, void 0, e) : Qr.get(t, e & P.Optional ? null : void 0, e); } function B(t, e = P.Default) { return (function lv() { return Gs; }() || __)(N(t), e); } function Ca(t) { const e = []; for (let n = 0; n < t.length; n++) {
            const r = N(t[n]);
            if (Array.isArray(r)) {
                if (0 === r.length)
                    throw new w(900, !1);
                let i, o = P.Default;
                for (let s = 0; s < r.length; s++) {
                    const a = r[s], l = E_(a);
                    "number" == typeof l ? -1 === l ? i = a.token : o |= l : i = a;
                }
                e.push(B(i, o));
            }
            else
                e.push(B(r));
        } return e; } function Zr(t, e) { return t[Ea] = e, t.prototype[Ea] = e, t; } function E_(t) { return t[Ea]; } const co = Zr(Jn("Optional"), 8), fo = Zr(Jn("SkipSelf"), 4); var He = (() => ((He = He || {})[He.Important = 1] = "Important", He[He.DashCase = 2] = "DashCase", He))(); const Ma = new Map; let j_ = 0; const Na = "__ngContext__"; function Te(t, e) { je(e) ? (t[Na] = e[20], function $_(t) { Ma.set(t[20], t); }(e)) : t[Na] = e; } function Fa(t, e) { return undefined(t, e); } function ei(t) { const e = t[3]; return Dt(e) ? e[3] : e; } function xa(t) { return ef(t[13]); } function Ra(t) { return ef(t[4]); } function ef(t) { for (; null !== t && !Dt(t);)
            t = t[4]; return t; } function nr(t, e, n, r, i) { if (null != r) {
            let o, s = !1;
            Dt(r) ? o = r : je(r) && (s = !0, r = r[0]);
            const a = pe(r);
            0 === t && null !== n ? null == i ? af(e, n, a) : Tn(e, n, a, i || null, !0) : 1 === t && null !== n ? Tn(e, n, a, i || null, !0) : 2 === t ? function Ha(t, e, n) { const r = function go(t, e) { return t.parentNode(e); }(t, e); r && function cw(t, e, n, r) { t.removeChild(e, n, r); }(t, r, e, n); }(e, a, s) : 3 === t && e.destroyNode(a), null != o && function hw(t, e, n, r, i) { const o = n[7]; o !== pe(n) && nr(e, t, r, o, i); for (let a = 10; a < n.length; a++) {
                const l = n[a];
                ti(l[1], l, t, e, r, o);
            } }(e, t, o, n, i);
        } } function ka(t, e, n) { return t.createElement(e, n); } function nf(t, e) { const n = t[9], r = n.indexOf(e), i = e[3]; 512 & e[2] && (e[2] &= -513, na(i, -1)), n.splice(r, 1); } function Va(t, e) { if (!(128 & e[2])) {
            e[2] &= -65, e[2] |= 128, function uw(t, e) { let n; if (null != t && null != (n = t.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                    const i = e[n[r]];
                    if (!(i instanceof Hr)) {
                        const o = n[r + 1];
                        if (Array.isArray(o))
                            for (let s = 0; s < o.length; s += 2) {
                                const a = i[o[s]], l = o[s + 1];
                                try {
                                    l.call(a);
                                }
                                finally { }
                            }
                        else
                            try {
                                o.call(i);
                            }
                            finally { }
                    }
                } }(t, e), function lw(t, e) { const n = t.cleanup, r = e[7]; let i = -1; if (null !== n)
                for (let o = 0; o < n.length - 1; o += 2)
                    if ("string" == typeof n[o]) {
                        const s = n[o + 1], a = "function" == typeof s ? s(e) : pe(e[s]), l = r[i = n[o + 2]], u = n[o + 3];
                        "boolean" == typeof u ? a.removeEventListener(n[o], l, u) : u >= 0 ? r[i = u]() : r[i = -u].unsubscribe(), o += 2;
                    }
                    else {
                        const s = r[i = n[o + 1]];
                        n[o].call(s);
                    } if (null !== r) {
                for (let o = i + 1; o < r.length; o++)
                    (0, r[o])();
                e[7] = null;
            } }(t, e), 1 === e[1].type && e[k].destroy();
            const n = e[17];
            if (null !== n && Dt(e[3])) {
                n !== e[3] && nf(n, e);
                const r = e[19];
                null !== r && r.detachView(t);
            }
            !function U_(t) { Ma.delete(t[20]); }(e);
        } } function of(t, e, n) { return function sf(t, e, n) { let r = e; for (; null !== r && 40 & r.type;)
            r = (e = r).parent; if (null === r)
            return n[0]; if (2 & r.flags) {
            const i = t.data[r.directiveStart].encapsulation;
            if (i === mt.None || i === mt.Emulated)
                return null;
        } return Ke(r, n); }(t, e.parent, n); } function Tn(t, e, n, r, i) { t.insertBefore(e, n, r, i); } function af(t, e, n) { t.appendChild(e, n); } function lf(t, e, n, r, i) { null !== r ? Tn(t, e, n, r, i) : af(t, e, n); } let Ga, df = function cf(t, e, n) { return 40 & t.type ? Ke(t, n) : null; }; function mo(t, e, n, r) { const i = of(t, r, e), o = e[k], a = function uf(t, e, n) { return df(t, e, n); }(r.parent || e[6], r, e); if (null != i)
            if (Array.isArray(n))
                for (let l = 0; l < n.length; l++)
                    lf(o, i, n[l], a, !1);
            else
                lf(o, i, n, a, !1); } function hf(t, e) { return null !== e ? t[16][6].projection[e.projection] : null; } function $a(t, e, n, r, i, o, s) { for (; null != n;) {
            const a = r[n.index], l = n.type;
            if (s && 0 === e && (a && Te(pe(a), r), n.flags |= 4), 64 != (64 & n.flags))
                if (8 & l)
                    $a(t, e, n.child, r, i, o, !1), nr(e, t, i, a, o);
                else if (32 & l) {
                    const u = Fa(n, r);
                    let c;
                    for (; c = u();)
                        nr(e, t, i, c, o);
                    nr(e, t, i, a, o);
                }
                else
                    16 & l ? pf(t, e, r, n, i, o) : nr(e, t, i, a, o);
            n = s ? n.projectionNext : n.next;
        } } function ti(t, e, n, r, i, o) { $a(n, r, t.firstChild, e, i, o, !1); } function pf(t, e, n, r, i, o) { const s = n[16], l = s[6].projection[r.projection]; if (Array.isArray(l))
            for (let u = 0; u < l.length; u++)
                nr(e, t, i, l[u], o);
        else
            $a(t, e, l, s[3], i, o, !0); } function gf(t, e, n) { t.setAttribute(e, "style", n); } function Ua(t, e, n) { "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n); } const Af = new H("ENVIRONMENT_INITIALIZER"), Nf = new H("INJECTOR", -1), Pf = new H("INJECTOR_DEF_TYPES"); class Ff {
            get(e, n = Kr) { if (n === Kr) {
                const r = new Error(`NullInjectorError: No provider for ${ee(e)}!`);
                throw r.name = "NullInjectorError", r;
            } return n; }
        } function $w(...t) { return { \u0275providers: xf(0, t) }; } function xf(t, ...e) { const n = [], r = new Set; let i; return zt(e, o => { const s = o; Ya(s, n, [], r) && (i || (i = []), i.push(s)); }), void 0 !== i && Rf(i, n), n; } function Rf(t, e) { for (let n = 0; n < t.length; n++) {
            const { providers: i } = t[n];
            zt(i, o => { e.push(o); });
        } } function Ya(t, e, n, r) { if (!(t = N(t)))
            return !1; let i = null, o = Uc(t); const s = !o && Y(t); if (o || s) {
            if (s && !s.standalone)
                return !1;
            i = t;
        }
        else {
            const l = t.ngModule;
            if (o = Uc(l), !o)
                return !1;
            i = l;
        } const a = r.has(i); if (s) {
            if (a)
                return !1;
            if (r.add(i), s.dependencies) {
                const l = "function" == typeof s.dependencies ? s.dependencies() : s.dependencies;
                for (const u of l)
                    Ya(u, e, n, r);
            }
        }
        else {
            if (!o)
                return !1;
            {
                if (null != o.imports && !a) {
                    let u;
                    r.add(i);
                    try {
                        zt(o.imports, c => { Ya(c, e, n, r) && (u || (u = []), u.push(c)); });
                    }
                    finally { }
                    void 0 !== u && Rf(u, e);
                }
                if (!a) {
                    const u = In(i) || (() => new i);
                    e.push({ provide: i, useFactory: u, deps: Q }, { provide: Pf, useValue: i, multi: !0 }, { provide: Af, useValue: () => B(i), multi: !0 });
                }
                const l = o.providers;
                null == l || a || zt(l, c => { e.push(c); });
            }
        } return i !== t && void 0 !== t.providers; } const Uw = X({ provide: String, useValue: X }); function Ja(t) { return null !== t && "object" == typeof t && Uw in t; } function An(t) { return "function" == typeof t; } const Xa = new H("Set Injector scope."), wo = {}, Gw = {}; let el; function Eo() { return void 0 === el && (el = new Ff), el; } class rr {
        } class Lf extends rr {
            constructor(e, n, r, i) { super(), this.parent = n, this.source = r, this.scopes = i, this.records = new Map, this._ngOnDestroyHooks = new Set, this._onDestroyHooks = [], this._destroyed = !1, nl(e, s => this.processProvider(s)), this.records.set(Nf, ir(void 0, this)), i.has("environment") && this.records.set(rr, ir(void 0, this)); const o = this.records.get(Xa); null != o && "string" == typeof o.value && this.scopes.add(o.value), this.injectorDefTypes = new Set(this.get(Pf.multi, Q, P.Self)); }
            get destroyed() { return this._destroyed; }
            destroy() { this.assertNotDestroyed(), this._destroyed = !0; try {
                for (const e of this._ngOnDestroyHooks)
                    e.ngOnDestroy();
                for (const e of this._onDestroyHooks)
                    e();
            }
            finally {
                this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), this._onDestroyHooks.length = 0;
            } }
            onDestroy(e) { this._onDestroyHooks.push(e); }
            runInContext(e) { this.assertNotDestroyed(); const n = er(this), r = ot(void 0); try {
                return e();
            }
            finally {
                er(n), ot(r);
            } }
            get(e, n = Kr, r = P.Default) { this.assertNotDestroyed(); const i = er(this), o = ot(void 0); try {
                if (!(r & P.SkipSelf)) {
                    let a = this.records.get(e);
                    if (void 0 === a) {
                        const l = function Zw(t) { return "function" == typeof t || "object" == typeof t && t instanceof H; }(e) && ji(e);
                        a = l && this.injectableDefInScope(l) ? ir(tl(e), wo) : null, this.records.set(e, a);
                    }
                    if (null != a)
                        return this.hydrate(e, a);
                }
                return (r & P.Self ? Eo() : this.parent).get(e, n = r & P.Optional && n === Kr ? null : n);
            }
            catch (s) {
                if ("NullInjectorError" === s.name) {
                    if ((s[uo] = s[uo] || []).unshift(ee(e)), i)
                        throw s;
                    return function C_(t, e, n, r) { const i = t[uo]; throw e[xd] && i.unshift(e[xd]), t.message = function b_(t, e, n, r = null) { t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.slice(2) : t; let i = ee(e); if (Array.isArray(e))
                        i = e.map(ee).join(" -> ");
                    else if ("object" == typeof e) {
                        let o = [];
                        for (let s in e)
                            if (e.hasOwnProperty(s)) {
                                let a = e[s];
                                o.push(s + ":" + ("string" == typeof a ? JSON.stringify(a) : ee(a)));
                            }
                        i = `{${o.join(", ")}}`;
                    } return `${n}${r ? "(" + r + ")" : ""}[${i}]: ${t.replace(D_, "\n  ")}`; }("\n" + t.message, i, n, r), t.ngTokenPath = i, t[uo] = null, t; }(s, e, "R3InjectorError", this.source);
                }
                throw s;
            }
            finally {
                ot(o), er(i);
            } }
            resolveInjectorInitializers() { const e = er(this), n = ot(void 0); try {
                const r = this.get(Af.multi, Q, P.Self);
                for (const i of r)
                    i();
            }
            finally {
                er(e), ot(n);
            } }
            toString() { const e = [], n = this.records; for (const r of n.keys())
                e.push(ee(r)); return `R3Injector[${e.join(", ")}]`; }
            assertNotDestroyed() { if (this._destroyed)
                throw new w(205, !1); }
            processProvider(e) { let n = An(e = N(e)) ? e : N(e && e.provide); const r = function Ww(t) { return Ja(t) ? ir(void 0, t.useValue) : ir(function Vf(t, e, n) { let r; if (An(t)) {
                const i = N(t);
                return In(i) || tl(i);
            } if (Ja(t))
                r = () => N(t.useValue);
            else if (function kf(t) { return !(!t || !t.useFactory); }(t))
                r = () => t.useFactory(...Ca(t.deps || []));
            else if (function Of(t) { return !(!t || !t.useExisting); }(t))
                r = () => B(N(t.useExisting));
            else {
                const i = N(t && (t.useClass || t.provide));
                if (!function Kw(t) { return !!t.deps; }(t))
                    return In(i) || tl(i);
                r = () => new i(...Ca(t.deps));
            } return r; }(t), wo); }(e); if (An(e) || !0 !== e.multi)
                this.records.get(n);
            else {
                let i = this.records.get(n);
                i || (i = ir(void 0, wo, !0), i.factory = () => Ca(i.multi), this.records.set(n, i)), n = e, i.multi.push(e);
            } this.records.set(n, r); }
            hydrate(e, n) { return n.value === wo && (n.value = Gw, n.value = n.factory()), "object" == typeof n.value && n.value && function Qw(t) { return null !== t && "object" == typeof t && "function" == typeof t.ngOnDestroy; }(n.value) && this._ngOnDestroyHooks.add(n.value), n.value; }
            injectableDefInScope(e) { if (!e.providedIn)
                return !1; const n = N(e.providedIn); return "string" == typeof n ? "any" === n || this.scopes.has(n) : this.injectorDefTypes.has(n); }
        } function tl(t) { const e = ji(t), n = null !== e ? e.factory : In(t); if (null !== n)
            return n; if (t instanceof H)
            throw new w(204, !1); if (t instanceof Function)
            return function qw(t) { const e = t.length; if (e > 0)
                throw function Wr(t, e) { const n = []; for (let r = 0; r < t; r++)
                    n.push(e); return n; }(e, "?"), new w(204, !1); const n = function ov(t) { const e = t && (t[Hi] || t[zc]); if (e) {
                const n = function sv(t) { if (t.hasOwnProperty("name"))
                    return t.name; const e = ("" + t).match(/^function\s*([^\s(]+)/); return null === e ? "" : e[1]; }(t);
                return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), e;
            } return null; }(t); return null !== n ? () => n.factory(t) : () => new t; }(t); throw new w(204, !1); } function ir(t, e, n = !1) { return { factory: t, value: e, multi: n ? [] : void 0 }; } function Yw(t) { return !!t.\u0275providers; } function nl(t, e) { for (const n of t)
            Array.isArray(n) ? nl(n, e) : Yw(n) ? nl(n.\u0275providers, e) : e(n); } class Bf {
        } class eE {
            resolveComponentFactory(e) { throw function Xw(t) { const e = Error(`No component factory found for ${ee(t)}. Did you add it to @NgModule.entryComponents?`); return e.ngComponent = t, e; }(e); }
        } let Co = (() => { class t {
        } return t.NULL = new eE, t; })(); function tE() { return or(De(), v()); } function or(t, e) { return new sr(Ke(t, e)); } let sr = (() => { class t {
            constructor(n) { this.nativeElement = n; }
        } return t.__NG_ELEMENT_ID__ = tE, t; })(); class oi {
        } let Hf = (() => { class t {
        } return t.__NG_ELEMENT_ID__ = () => function rE() { const t = v(), n = Qe(De().index, t); return (je(n) ? n : t)[k]; }(), t; })(), iE = (() => { class t {
        } return t.\u0275prov = J({ token: t, providedIn: "root", factory: () => null }), t; })(); class rl {
            constructor(e) { this.full = e, this.major = e.split(".")[0], this.minor = e.split(".")[1], this.patch = e.split(".").slice(2).join("."); }
        } const oE = new rl("14.2.12"), il = {}; function sl(t) { return t.ngOriginalError; } class ar {
            constructor() { this._console = console; }
            handleError(e) { const n = this._findOriginalError(e); this._console.error("ERROR", e), n && this._console.error("ORIGINAL ERROR", n); }
            _findOriginalError(e) { let n = e && sl(e); for (; n && sl(n);)
                n = sl(n); return n || null; }
        } function Uf(t, e, n) { let r = t.length; for (;;) {
            const i = t.indexOf(e, n);
            if (-1 === i)
                return i;
            if (0 === i || t.charCodeAt(i - 1) <= 32) {
                const o = e.length;
                if (i + o === r || t.charCodeAt(i + o) <= 32)
                    return i;
            }
            n = i + 1;
        } } const zf = "ng-template"; function mE(t, e, n) { let r = 0; for (; r < t.length;) {
            let i = t[r++];
            if (n && "class" === i) {
                if (i = t[r], -1 !== Uf(i.toLowerCase(), e, 0))
                    return !0;
            }
            else if (1 === i) {
                for (; r < t.length && "string" == typeof (i = t[r++]);)
                    if (i.toLowerCase() === e)
                        return !0;
                return !1;
            }
        } return !1; } function Gf(t) { return 4 === t.type && t.value !== zf; } function yE(t, e, n) { return e === (4 !== t.type || n ? t.value : zf); } function DE(t, e, n) { let r = 4; const i = t.attrs || [], o = function wE(t) { for (let e = 0; e < t.length; e++)
            if (gd(t[e]))
                return e; return t.length; }(i); let s = !1; for (let a = 0; a < e.length; a++) {
            const l = e[a];
            if ("number" != typeof l) {
                if (!s)
                    if (4 & r) {
                        if (r = 2 | 1 & r, "" !== l && !yE(t, l, n) || "" === l && 1 === e.length) {
                            if (_t(r))
                                return !1;
                            s = !0;
                        }
                    }
                    else {
                        const u = 8 & r ? l : e[++a];
                        if (8 & r && null !== t.attrs) {
                            if (!mE(t.attrs, u, n)) {
                                if (_t(r))
                                    return !1;
                                s = !0;
                            }
                            continue;
                        }
                        const d = vE(8 & r ? "class" : l, i, Gf(t), n);
                        if (-1 === d) {
                            if (_t(r))
                                return !1;
                            s = !0;
                            continue;
                        }
                        if ("" !== u) {
                            let f;
                            f = d > o ? "" : i[d + 1].toLowerCase();
                            const h = 8 & r ? f : null;
                            if (h && -1 !== Uf(h, u, 0) || 2 & r && u !== f) {
                                if (_t(r))
                                    return !1;
                                s = !0;
                            }
                        }
                    }
            }
            else {
                if (!s && !_t(r) && !_t(l))
                    return !1;
                if (s && _t(l))
                    continue;
                s = !1, r = l | 1 & r;
            }
        } return _t(r) || s; } function _t(t) { return 0 == (1 & t); } function vE(t, e, n, r) { if (null === e)
            return -1; let i = 0; if (r || !n) {
            let o = !1;
            for (; i < e.length;) {
                const s = e[i];
                if (s === t)
                    return i;
                if (3 === s || 6 === s)
                    o = !0;
                else {
                    if (1 === s || 2 === s) {
                        let a = e[++i];
                        for (; "string" == typeof a;)
                            a = e[++i];
                        continue;
                    }
                    if (4 === s)
                        break;
                    if (0 === s) {
                        i += 4;
                        continue;
                    }
                }
                i += o ? 1 : 2;
            }
            return -1;
        } return function EE(t, e) { let n = t.indexOf(4); if (n > -1)
            for (n++; n < t.length;) {
                const r = t[n];
                if ("number" == typeof r)
                    return -1;
                if (r === e)
                    return n;
                n++;
            } return -1; }(e, t); } function qf(t, e, n = !1) { for (let r = 0; r < e.length; r++)
            if (DE(t, e[r], n))
                return !0; return !1; } function Wf(t, e) { return t ? ":not(" + e.trim() + ")" : e; } function bE(t) { let e = t[0], n = 1, r = 2, i = "", o = !1; for (; n < t.length;) {
            let s = t[n];
            if ("string" == typeof s)
                if (2 & r) {
                    const a = t[++n];
                    i += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
                }
                else
                    8 & r ? i += "." + s : 4 & r && (i += " " + s);
            else
                "" !== i && !_t(s) && (e += Wf(o, i), i = ""), r = s, o = o || !_t(r);
            n++;
        } return "" !== i && (e += Wf(o, i)), e; } const R = {}; function Qf(t, e, n, r) { if (!r)
            if (3 == (3 & e[2])) {
                const o = t.preOrderCheckHooks;
                null !== o && Xi(e, o, n);
            }
            else {
                const o = t.preOrderHooks;
                null !== o && eo(e, o, 0, n);
            } an(n); } function Xf(t, e = null, n = null, r) { const i = eh(t, e, n, r); return i.resolveInjectorInitializers(), i; } function eh(t, e = null, n = null, r, i = new Set) { const o = [n || Q, $w(t)]; return r = r || ("object" == typeof t ? void 0 : ee(t)), new Lf(o, e || Eo(), r || null, i); } let Nn = (() => { class t {
            static create(n, r) { var _a; if (Array.isArray(n))
                return Xf({ name: "" }, r, n, ""); {
                const i = (_a = n.name) !== null && _a !== void 0 ? _a : "";
                return Xf({ name: i }, n.parent, n.providers, i);
            } }
        } return t.THROW_IF_NOT_FOUND = Kr, t.NULL = new Ff, t.\u0275prov = J({ token: t, providedIn: "any", factory: () => B(Nf) }), t.__NG_ELEMENT_ID__ = -1, t; })(); function j(t, e = P.Default) { const n = v(); return null === n ? B(t, e) : Cd(De(), n, N(t), e); } function yh(t, e) { const n = t.contentQueries; if (null !== n)
            for (let r = 0; r < n.length; r += 2) {
                const i = n[r], o = n[r + 1];
                if (-1 !== o) {
                    const s = t.data[o];
                    aa(i), s.contentQueries(2, e[o], o);
                }
            } } function Mo(t, e, n, r, i, o, s, a, l, u, c) { const d = e.blueprint.slice(); return d[0] = i, d[2] = 76 | r, (null !== c || t && 1024 & t[2]) && (d[2] |= 1024), td(d), d[3] = d[15] = t, d[8] = n, d[10] = s || t && t[10], d[k] = a || t && t[k], d[12] = l || t && t[12] || null, d[9] = u || t && t[9] || null, d[6] = o, d[20] = function H_() { return j_++; }(), d[21] = c, d[16] = 2 == e.type ? t[16] : d, d; } function cr(t, e, n, r, i) { let o = t.data[e]; if (null === o)
            o = function wl(t, e, n, r, i) { const o = id(), s = ra(), l = t.data[e] = function aC(t, e, n, r, i, o) { return { type: n, index: r, insertBeforeIndex: null, injectorIndex: e ? e.injectorIndex : -1, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, propertyBindings: null, flags: 0, providerIndexes: 0, value: i, attrs: o, mergedAttrs: null, localNames: null, initialInputs: void 0, inputs: null, outputs: null, tViews: null, next: null, projectionNext: null, child: null, parent: e, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }(0, s ? o : o && o.parent, n, e, r, i); return null === t.firstChild && (t.firstChild = l), null !== o && (s ? null == o.child && null !== l.parent && (o.child = l) : null === o.next && (o.next = l)), l; }(t, e, n, r, i), function Lv() { return F.lFrame.inI18n; }() && (o.flags |= 64);
        else if (64 & o.type) {
            o.type = n, o.value = r, o.attrs = i;
            const s = function jr() { const t = F.lFrame, e = t.currentTNode; return t.isParent ? e : e.parent; }();
            o.injectorIndex = null === s ? -1 : s.injectorIndex;
        } return Nt(o, !0), o; } function dr(t, e, n, r) { if (0 === n)
            return -1; const i = e.length; for (let o = 0; o < n; o++)
            e.push(r), t.blueprint.push(r), t.data.push(null); return i; } function El(t, e, n) { la(e); try {
            const r = t.viewQuery;
            null !== r && Nl(1, r, n);
            const i = t.template;
            null !== i && Dh(t, e, i, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && yh(t, e), t.staticViewQueries && Nl(2, t.viewQuery, n);
            const o = t.components;
            null !== o && function iC(t, e) { for (let n = 0; n < e.length; n++)
                CC(t, e[n]); }(e, o);
        }
        catch (r) {
            throw t.firstCreatePass && (t.incompleteFirstPass = !0, t.firstCreatePass = !1), r;
        }
        finally {
            e[2] &= -5, ua();
        } } function Ao(t, e, n, r) { const i = e[2]; if (128 != (128 & i)) {
            la(e);
            try {
                td(e), function sd(t) { return F.lFrame.bindingIndex = t; }(t.bindingStartIndex), null !== n && Dh(t, e, n, 2, r);
                const s = 3 == (3 & i);
                if (s) {
                    const u = t.preOrderCheckHooks;
                    null !== u && Xi(e, u, null);
                }
                else {
                    const u = t.preOrderHooks;
                    null !== u && eo(e, u, 0, null), da(e, 0);
                }
                if (function wC(t) { for (let e = xa(t); null !== e; e = Ra(e)) {
                    if (!e[2])
                        continue;
                    const n = e[9];
                    for (let r = 0; r < n.length; r++) {
                        const i = n[r], o = i[3];
                        0 == (512 & i[2]) && na(o, 1), i[2] |= 512;
                    }
                } }(e), function _C(t) { for (let e = xa(t); null !== e; e = Ra(e))
                    for (let n = 10; n < e.length; n++) {
                        const r = e[n], i = r[1];
                        Zi(r) && Ao(i, r, i.template, r[8]);
                    } }(e), null !== t.contentQueries && yh(t, e), s) {
                    const u = t.contentCheckHooks;
                    null !== u && Xi(e, u);
                }
                else {
                    const u = t.contentHooks;
                    null !== u && eo(e, u, 1), da(e, 1);
                }
                !function nC(t, e) { const n = t.hostBindingOpCodes; if (null !== n)
                    try {
                        for (let r = 0; r < n.length; r++) {
                            const i = n[r];
                            if (i < 0)
                                an(~i);
                            else {
                                const o = i, s = n[++r], a = n[++r];
                                Vv(s, o), a(2, e[o]);
                            }
                        }
                    }
                    finally {
                        an(-1);
                    } }(t, e);
                const a = t.components;
                null !== a && function rC(t, e) { for (let n = 0; n < e.length; n++)
                    EC(t, e[n]); }(e, a);
                const l = t.viewQuery;
                if (null !== l && Nl(2, l, r), s) {
                    const u = t.viewCheckHooks;
                    null !== u && Xi(e, u);
                }
                else {
                    const u = t.viewHooks;
                    null !== u && eo(e, u, 2), da(e, 2);
                }
                !0 === t.firstUpdatePass && (t.firstUpdatePass = !1), e[2] &= -41, 512 & e[2] && (e[2] &= -513, na(e[3], -1));
            }
            finally {
                ua();
            }
        } } function Dh(t, e, n, r, i) { const o = Re(), s = 2 & r; try {
            an(-1), s && e.length > 22 && Qf(t, e, 22, !1), n(r, i);
        }
        finally {
            an(o);
        } } function _h(t) { const e = t.tView; return null === e || e.incompleteFirstPass ? t.tView = Sl(1, null, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e; } function Sl(t, e, n, r, i, o, s, a, l, u) { const c = 22 + r, d = c + i, f = function oC(t, e) { const n = []; for (let r = 0; r < e; r++)
            n.push(r < t ? null : R); return n; }(c, d), h = "function" == typeof u ? u() : u; return f[1] = { type: t, blueprint: f, template: n, queries: null, viewQuery: a, declTNode: e, data: f.slice().fill(null, c), bindingStartIndex: c, expandoStartIndex: d, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: "function" == typeof o ? o() : o, pipeRegistry: "function" == typeof s ? s() : s, firstChild: null, schemas: l, consts: h, incompleteFirstPass: !1 }; } function Eh(t, e, n) { for (let r in t)
            if (t.hasOwnProperty(r)) {
                const i = t[r];
                (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, i) : n[r] = [e, i];
            } return n; } function Ch(t, e) { const r = e.directiveEnd, i = t.data, o = e.attrs, s = []; let a = null, l = null; for (let u = e.directiveStart; u < r; u++) {
            const c = i[u], d = c.inputs, f = null === o || Gf(e) ? null : vC(d, o);
            s.push(f), a = Eh(d, u, a), l = Eh(c.outputs, u, l);
        } null !== a && (a.hasOwnProperty("class") && (e.flags |= 16), a.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = s, e.inputs = a, e.outputs = l; } function bh(t, e) { const n = Qe(e, t); 16 & n[2] || (n[2] |= 32); } function Sh(t, e, n, r, i, o) { const s = o.hostBindings; if (s) {
            let a = t.hostBindingOpCodes;
            null === a && (a = t.hostBindingOpCodes = []);
            const l = ~e.index;
            (function dC(t) { let e = t.length; for (; e > 0;) {
                const n = t[--e];
                if ("number" == typeof n && n < 0)
                    return n;
            } return 0; })(a) != l && a.push(l), a.push(r, i, s);
        } } function Ih(t, e) { null !== t.hostBindings && t.hostBindings(1, e); } function Th(t, e) { e.flags |= 2, (t.components || (t.components = [])).push(e.index); } function mC(t, e, n) { if (n) {
            if (e.exportAs)
                for (let r = 0; r < e.exportAs.length; r++)
                    n[e.exportAs[r]] = t;
            vt(e) && (n[""] = t);
        } } function Mh(t, e, n) { t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e; } function Ah(t, e, n, r, i) { t.data[r] = i; const o = i.factory || (i.factory = In(i.type)), s = new Hr(o, vt(i), j); t.blueprint[r] = s, n[r] = s, Sh(t, e, 0, r, dr(t, n, i.hostVars, R), i); } function yC(t, e, n) { const r = Ke(e, t), i = _h(n), o = t[10], s = No(t, Mo(t, i, null, n.onPush ? 32 : 16, r, e, o, o.createRenderer(r, n), null, null, null)); t[e.index] = s; } function DC(t, e, n, r, i, o) { const s = o[e]; if (null !== s) {
            const a = r.setInput;
            for (let l = 0; l < s.length;) {
                const u = s[l++], c = s[l++], d = s[l++];
                null !== a ? r.setInput(n, d, u, c) : n[c] = d;
            }
        } } function vC(t, e) { let n = null, r = 0; for (; r < e.length;) {
            const i = e[r];
            if (0 !== i)
                if (5 !== i) {
                    if ("number" == typeof i)
                        break;
                    t.hasOwnProperty(i) && (null === n && (n = []), n.push(i, t[i], e[r + 1])), r += 2;
                }
                else
                    r += 2;
            else
                r += 4;
        } return n; } function EC(t, e) { const n = Qe(e, t); if (Zi(n)) {
            const r = n[1];
            48 & n[2] ? Ao(r, n, r.template, n[8]) : n[5] > 0 && Ml(n);
        } } function Ml(t) { for (let r = xa(t); null !== r; r = Ra(r))
            for (let i = 10; i < r.length; i++) {
                const o = r[i];
                if (Zi(o))
                    if (512 & o[2]) {
                        const s = o[1];
                        Ao(s, o, s.template, o[8]);
                    }
                    else
                        o[5] > 0 && Ml(o);
            } const n = t[1].components; if (null !== n)
            for (let r = 0; r < n.length; r++) {
                const i = Qe(n[r], t);
                Zi(i) && i[5] > 0 && Ml(i);
            } } function CC(t, e) { const n = Qe(e, t), r = n[1]; (function bC(t, e) { for (let n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]); })(r, n), El(r, n, n[8]); } function No(t, e) { return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e; } function Po(t, e, n, r = !0) { const i = e[10]; i.begin && i.begin(); try {
            Ao(t, e, t.template, n);
        }
        catch (s) {
            throw r && function Rh(t, e) { const n = t[9], r = n ? n.get(ar, null) : null; r && r.handleError(e); }(e, s), s;
        }
        finally {
            i.end && i.end();
        } } function Nl(t, e, n) { aa(0), e(t, n); } function Pl(t, e, n, r, i) { for (let o = 0; o < n.length;) {
            const s = n[o++], a = n[o++], l = e[s], u = t.data[s];
            null !== u.setInput ? u.setInput(l, i, r, a) : l[a] = i;
        } } function Fo(t, e, n) { let r = n ? t.styles : null, i = n ? t.classes : null, o = 0; if (null !== e)
            for (let s = 0; s < e.length; s++) {
                const a = e[s];
                "number" == typeof a ? o = a : 1 == o ? i = Hs(i, a) : 2 == o && (r = Hs(r, a + ": " + e[++s] + ";"));
            } n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = i : t.classesWithoutHost = i; } function xo(t, e, n, r, i = !1) { for (; null !== n;) {
            const o = e[n.index];
            if (null !== o && r.push(pe(o)), Dt(o))
                for (let a = 10; a < o.length; a++) {
                    const l = o[a], u = l[1].firstChild;
                    null !== u && xo(l[1], l, u, r);
                }
            const s = n.type;
            if (8 & s)
                xo(t, e, n.child, r);
            else if (32 & s) {
                const a = Fa(n, e);
                let l;
                for (; l = a();)
                    r.push(l);
            }
            else if (16 & s) {
                const a = hf(e, n);
                if (Array.isArray(a))
                    r.push(...a);
                else {
                    const l = ei(e[16]);
                    xo(l[1], l, a, r, !0);
                }
            }
            n = i ? n.projectionNext : n.next;
        } return r; } class SC extends class si {
            constructor(e, n) { this._lView = e, this._cdRefInjectingView = n, this._appRef = null, this._attachedToViewContainer = !1; }
            get rootNodes() { const e = this._lView, n = e[1]; return xo(n, e, n.firstChild, []); }
            get context() { return this._lView[8]; }
            set context(e) { this._lView[8] = e; }
            get destroyed() { return 128 == (128 & this._lView[2]); }
            destroy() { if (this._appRef)
                this._appRef.detachView(this);
            else if (this._attachedToViewContainer) {
                const e = this._lView[3];
                if (Dt(e)) {
                    const n = e[8], r = n ? n.indexOf(this) : -1;
                    r > -1 && (function La(t, e) { if (t.length <= 10)
                        return; const n = 10 + e, r = t[n]; if (r) {
                        const i = r[17];
                        null !== i && i !== t && nf(i, r), e > 0 && (t[n - 1][4] = r[4]);
                        const o = ao(t, 10 + e);
                        !function nw(t, e) { ti(t, e, e[k], 2, null, null), e[0] = null, e[6] = null; }(r[1], r);
                        const s = o[19];
                        null !== s && s.detachView(o[1]), r[3] = null, r[4] = null, r[2] &= -65;
                    } return r; }(e, r), ao(n, r));
                }
                this._attachedToViewContainer = !1;
            } !function rf(t, e) { if (!(128 & e[2])) {
                const n = e[k];
                n.destroyNode && ti(t, e, n, 3, null, null), function ow(t) { let e = t[13]; if (!e)
                    return Va(t[1], t); for (; e;) {
                    let n = null;
                    if (je(e))
                        n = e[13];
                    else {
                        const r = e[10];
                        r && (n = r);
                    }
                    if (!n) {
                        for (; e && !e[4] && e !== t;)
                            je(e) && Va(e[1], e), e = e[3];
                        null === e && (e = t), je(e) && Va(e[1], e), n = e && e[4];
                    }
                    e = n;
                } }(e);
            } }(this._lView[1], this._lView); }
            onDestroy(e) { !function wh(t, e, n, r) { const i = function Ph(t) { return t[7] || (t[7] = []); }(e); null === n ? i.push(r) : (i.push(n), t.firstCreatePass && function Fh(t) { return t.cleanup || (t.cleanup = []); }(t).push(r, i.length - 1)); }(this._lView[1], this._lView, null, e); }
            markForCheck() { !function Al(t) { for (; t;) {
                t[2] |= 32;
                const e = ei(t);
                if (gv(t) && !e)
                    return t;
                t = e;
            } return null; }(this._cdRefInjectingView || this._lView); }
            detach() { this._lView[2] &= -65; }
            reattach() { this._lView[2] |= 64; }
            detectChanges() { Po(this._lView[1], this._lView, this.context); }
            checkNoChanges() { }
            attachToViewContainerRef() { if (this._appRef)
                throw new w(902, !1); this._attachedToViewContainer = !0; }
            detachFromAppRef() { this._appRef = null, function iw(t, e) { ti(t, e, e[k], 2, null, null); }(this._lView[1], this._lView); }
            attachToAppRef(e) { if (this._attachedToViewContainer)
                throw new w(902, !1); this._appRef = e; }
        } {
            constructor(e) { super(e), this._view = e; }
            detectChanges() { const e = this._view; Po(e[1], e, e[8], !1); }
            checkNoChanges() { }
            get context() { return null; }
        } class Fl extends Co {
            constructor(e) { super(), this.ngModule = e; }
            resolveComponentFactory(e) { const n = Y(e); return new ai(n, this.ngModule); }
        } function Oh(t) { const e = []; for (let n in t)
            t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n }); return e; } class TC {
            constructor(e, n) { this.injector = e, this.parentInjector = n; }
            get(e, n, r) { const i = this.injector.get(e, il, r); return i !== il || n === il ? i : this.parentInjector.get(e, n, r); }
        } class ai extends Bf {
            constructor(e, n) { super(), this.componentDef = e, this.ngModule = n, this.componentType = e.type, this.selector = function SE(t) { return t.map(bE).join(","); }(e.selectors), this.ngContentSelectors = e.ngContentSelectors ? e.ngContentSelectors : [], this.isBoundToModule = !!n; }
            get inputs() { return Oh(this.componentDef.inputs); }
            get outputs() { return Oh(this.componentDef.outputs); }
            create(e, n, r, i) { let o = (i = i || this.ngModule) instanceof rr ? i : i === null || i === void 0 ? void 0 : i.injector; o && null !== this.componentDef.getStandaloneInjector && (o = this.componentDef.getStandaloneInjector(o) || o); const s = o ? new TC(e, o) : e, a = s.get(oi, null); if (null === a)
                throw new w(407, !1); const l = s.get(iE, null), u = a.createRenderer(null, this.componentDef), c = this.componentDef.selectors[0][0] || "div", d = r ? function sC(t, e, n) { return t.selectRootElement(e, n === mt.ShadowDom); }(u, r, this.componentDef.encapsulation) : ka(u, c, function IC(t) { const e = t.toLowerCase(); return "svg" === e ? "svg" : "math" === e ? "math" : null; }(c)), f = this.componentDef.onPush ? 288 : 272, h = Sl(0, null, null, 1, 0, null, null, null, null, null), p = Mo(null, h, null, f, null, null, a, u, l, s, null); let g, y; la(p); try {
                const D = function NC(t, e, n, r, i, o) { const s = n[1]; n[22] = t; const l = cr(s, 22, 2, "#host", null), u = l.mergedAttrs = e.hostAttrs; null !== u && (Fo(l, u, !0), null !== t && (to(i, t, u), null !== l.classes && Ua(i, t, l.classes), null !== l.styles && gf(i, t, l.styles))); const c = r.createRenderer(t, e), d = Mo(n, _h(e), null, e.onPush ? 32 : 16, n[22], l, r, c, o || null, null, null); return s.firstCreatePass && (oo(Ur(l, n), s, e.type), Th(s, l), Mh(l, n.length, 1)), No(n, d), n[22] = d; }(d, this.componentDef, p, a, u);
                if (d)
                    if (r)
                        to(u, d, ["ng-version", oE.full]);
                    else {
                        const { attrs: _, classes: m } = function IE(t) { const e = [], n = []; let r = 1, i = 2; for (; r < t.length;) {
                            let o = t[r];
                            if ("string" == typeof o)
                                2 === i ? "" !== o && e.push(o, t[++r]) : 8 === i && n.push(o);
                            else {
                                if (!_t(i))
                                    break;
                                i = o;
                            }
                            r++;
                        } return { attrs: e, classes: n }; }(this.componentDef.selectors[0]);
                        _ && to(u, d, _), m && m.length > 0 && Ua(u, d, m.join(" "));
                    }
                if (y = ta(h, 22), void 0 !== n) {
                    const _ = y.projection = [];
                    for (let m = 0; m < this.ngContentSelectors.length; m++) {
                        const b = n[m];
                        _.push(null != b ? Array.from(b) : null);
                    }
                }
                g = function PC(t, e, n, r) { const i = n[1], o = function cC(t, e, n) { const r = De(); t.firstCreatePass && (n.providersResolver && n.providersResolver(n), Ah(t, r, e, dr(t, e, 1, null), n), Ch(t, r)); const i = zr(e, t, r.directiveStart, r); Te(i, e); const o = Ke(r, e); return o && Te(o, e), i; }(i, n, e); if (t[8] = n[8] = o, null !== r)
                    for (const a of r)
                        a(o, e); if (e.contentQueries) {
                    const a = De();
                    e.contentQueries(1, o, a.directiveStart);
                } const s = De(); return !i.firstCreatePass || null === e.hostBindings && null === e.hostAttrs || (an(s.index), Sh(n[1], s, 0, s.directiveStart, s.directiveEnd, e), Ih(e, o)), o; }(D, this.componentDef, p, [FC]), El(h, p, null);
            }
            finally {
                ua();
            } return new AC(this.componentType, g, or(y, p), p, y); }
        } class AC extends class Jw {
        } {
            constructor(e, n, r, i, o) { super(), this.location = r, this._rootLView = i, this._tNode = o, this.instance = n, this.hostView = this.changeDetectorRef = new SC(i), this.componentType = e; }
            setInput(e, n) { const r = this._tNode.inputs; let i; if (null !== r && (i = r[e])) {
                const o = this._rootLView;
                Pl(o[1], o, i, e, n), bh(o, this._tNode.index);
            } }
            get injector() { return new Kn(this._tNode, this._rootLView); }
            destroy() { this.hostView.destroy(); }
            onDestroy(e) { this.hostView.onDestroy(e); }
        } function FC() { const t = De(); Ji(v()[1], t); } let Ro = null; function Pn() { if (!Ro) {
            const t = ne.Symbol;
            if (t && t.iterator)
                Ro = t.iterator;
            else {
                const e = Object.getOwnPropertyNames(Map.prototype);
                for (let n = 0; n < e.length; ++n) {
                    const r = e[n];
                    "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Ro = r);
                }
            }
        } return Ro; } function li(t) { return !!Rl(t) && (Array.isArray(t) || !(t instanceof Map) && Pn() in t); } function Rl(t) { return null !== t && ("function" == typeof t || "object" == typeof t); } function Me(t, e, n) { return !Object.is(t[e], n) && (t[e] = n, !0); } function ko(t, e, n) { const r = v(); return Me(r, function Gn() { return F.lFrame.bindingIndex++; }(), e) && function Je(t, e, n, r, i, o, s, a) { const l = Ke(e, n); let c, u = e.inputs; !a && null != u && (c = u[r]) ? (Pl(t, n, c, r, i), qi(e) && bh(n, e.index)) : 3 & e.type && (r = function lC(t) { return "class" === t ? "className" : "for" === t ? "htmlFor" : "formaction" === t ? "formAction" : "innerHtml" === t ? "innerHTML" : "readonly" === t ? "readOnly" : "tabindex" === t ? "tabIndex" : t; }(r), i = null != s ? s(i, e.value || "", r) : i, o.setProperty(l, r, i)); }(G(), function se() { const t = F.lFrame; return ta(t.tView, t.selectedIndex); }(), r, t, e, r[k], n, !1), ko; } function Ol(t, e, n, r, i) { const s = i ? "class" : "style"; Pl(t, n, e.inputs[s], s, r); } function U(t, e, n, r) { const i = v(), o = G(), s = 22 + t, a = i[k], l = i[s] = ka(a, e, function Gv() { return F.lFrame.currentNamespace; }()), u = o.firstCreatePass ? function KC(t, e, n, r, i, o, s) { const a = e.consts, u = cr(e, t, 2, i, sn(a, o)); return function Il(t, e, n, r) { let i = !1; if (rd()) {
            const o = function pC(t, e, n) { const r = t.directiveRegistry; let i = null; if (r)
                for (let o = 0; o < r.length; o++) {
                    const s = r[o];
                    qf(n, s.selectors, !1) && (i || (i = []), oo(Ur(n, e), t, s.type), vt(s) ? (Th(t, n), i.unshift(s)) : i.push(s));
                } return i; }(t, e, n), s = null === r ? null : { "": -1 };
            if (null !== o) {
                i = !0, Mh(n, t.data.length, o.length);
                for (let c = 0; c < o.length; c++) {
                    const d = o[c];
                    d.providersResolver && d.providersResolver(d);
                }
                let a = !1, l = !1, u = dr(t, e, o.length, null);
                for (let c = 0; c < o.length; c++) {
                    const d = o[c];
                    n.mergedAttrs = no(n.mergedAttrs, d.hostAttrs), Ah(t, n, e, u, d), mC(u, d, s), null !== d.contentQueries && (n.flags |= 8), (null !== d.hostBindings || null !== d.hostAttrs || 0 !== d.hostVars) && (n.flags |= 128);
                    const f = d.type.prototype;
                    !a && (f.ngOnChanges || f.ngOnInit || f.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index), a = !0), !l && (f.ngOnChanges || f.ngDoCheck) && ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index), l = !0), u++;
                }
                Ch(t, n);
            }
            s && function gC(t, e, n) { if (e) {
                const r = t.localNames = [];
                for (let i = 0; i < e.length; i += 2) {
                    const o = n[e[i + 1]];
                    if (null == o)
                        throw new w(-301, !1);
                    r.push(e[i], o);
                }
            } }(n, r, s);
        } return n.mergedAttrs = no(n.mergedAttrs, n.attrs), i; }(e, n, u, sn(a, s)), null !== u.attrs && Fo(u, u.attrs, !1), null !== u.mergedAttrs && Fo(u, u.mergedAttrs, !0), null !== e.queries && e.queries.elementStart(e, u), u; }(s, o, i, 0, e, n, r) : o.data[s]; Nt(u, !0); const c = u.mergedAttrs; null !== c && to(a, l, c); const d = u.classes; null !== d && Ua(a, l, d); const f = u.styles; return null !== f && gf(a, l, f), 64 != (64 & u.flags) && mo(o, i, l, u), 0 === function Av() { return F.lFrame.elementDepthCount; }() && Te(l, i), function Nv() { F.lFrame.elementDepthCount++; }(), function Wi(t) { return 1 == (1 & t.flags); }(u) && (function Cl(t, e, n) { !rd() || (function fC(t, e, n, r) { const i = n.directiveStart, o = n.directiveEnd; t.firstCreatePass || Ur(n, e), Te(r, e); const s = n.initialInputs; for (let a = i; a < o; a++) {
            const l = t.data[a], u = vt(l);
            u && yC(e, n, l);
            const c = zr(e, t, a, n);
            Te(c, e), null !== s && DC(0, a - i, c, l, 0, s), u && (Qe(n.index, e)[8] = c);
        } }(t, e, n, Ke(n, e)), 128 == (128 & n.flags) && function hC(t, e, n) { const r = n.directiveStart, i = n.directiveEnd, o = n.index, s = function Bv() { return F.lFrame.currentDirectiveIndex; }(); try {
            an(o);
            for (let a = r; a < i; a++) {
                const l = t.data[a], u = e[a];
                oa(a), (null !== l.hostBindings || 0 !== l.hostVars || null !== l.hostAttrs) && Ih(l, u);
            }
        }
        finally {
            an(-1), oa(s);
        } }(t, e, n)); }(o, i, u), function vh(t, e, n) { if (Zs(e)) {
            const i = e.directiveEnd;
            for (let o = e.directiveStart; o < i; o++) {
                const s = t.data[o];
                s.contentQueries && s.contentQueries(1, n[o], o);
            }
        } }(o, u, i)), null !== r && function bl(t, e, n = Ke) { const r = e.localNames; if (null !== r) {
            let i = e.index + 1;
            for (let o = 0; o < r.length; o += 2) {
                const s = r[o + 1], a = -1 === s ? n(e, t) : t[s];
                t[i++] = a;
            }
        } }(i, u), U; } function W() { let t = De(); ra() ? function ia() { F.lFrame.isParent = !1; }() : (t = t.parent, Nt(t, !1)); const e = t; !function Pv() { F.lFrame.elementDepthCount--; }(); const n = G(); return n.firstCreatePass && (Ji(n, t), Zs(t) && n.queries.elementEnd(t)), null != e.classesWithoutHost && function Zv(t) { return 0 != (16 & t.flags); }(e) && Ol(n, e, v(), e.classesWithoutHost, !0), null != e.stylesWithoutHost && function Yv(t) { return 0 != (32 & t.flags); }(e) && Ol(n, e, v(), e.stylesWithoutHost, !1), W; } function $e(t, e, n, r) { return U(t, e, n, r), W(), $e; } function Vl(t) { return !!t && "function" == typeof t.then; } const YC = function Qh(t) { return !!t && "function" == typeof t.subscribe; }; function te(t, e = "") { const n = v(), r = G(), i = t + 22, o = r.firstCreatePass ? cr(r, i, 1, e, null) : r.data[i], s = n[i] = function Oa(t, e) { return t.createText(e); }(n[k], e); mo(r, n, s, o), Nt(o, !1); } const Cr = "en-US"; let Wp = Cr; class br {
        } class vg extends br {
            constructor(e, n) { super(), this._parent = n, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new Fl(this); const r = function qe(t, e) { const n = t[qc] || null; if (!n && !0 === e)
                throw new Error(`Type ${ee(t)} does not have '\u0275mod' property.`); return n; }(e); this._bootstrapComponents = function qt(t) { return t instanceof Function ? t() : t; }(r.bootstrap), this._r3Injector = eh(e, n, [{ provide: br, useValue: this }, { provide: Co, useValue: this.componentFactoryResolver }], ee(e), new Set(["environment"])), this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(e); }
            get injector() { return this._r3Injector; }
            destroy() { const e = this._r3Injector; !e.destroyed && e.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
            onDestroy(e) { this.destroyCbs.push(e); }
        } class Kl extends class Hb {
        } {
            constructor(e) { super(), this.moduleType = e; }
            create(e) { return new vg(this.moduleType, e); }
        } function Tg(t, e, n, r) { return function Mg(t, e, n, r, i, o) { const s = e + n; return Me(t, s, i) ? function xt(t, e, n) { return t[e] = n; }(t, s + 1, o ? r.call(o, i) : r(i)) : function mi(t, e) { const n = t[e]; return n === R ? void 0 : n; }(t, s + 1); }(v(), function xe() { const t = F.lFrame; let e = t.bindingRootIndex; return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e; }(), t, e, n, r); } function Zl(t) { return e => { setTimeout(t, void 0, e); }; } const Qt = class mS extends ks {
            constructor(e = !1) { super(), this.__isAsync = e; }
            emit(e) { super.next(e); }
            subscribe(e, n, r) { var _a, _b, _d; let i = e, o = n || (() => null), s = r; if (e && "object" == typeof e) {
                const l = e;
                i = (_a = l.next) === null || _a === void 0 ? void 0 : _a.bind(l), o = (_b = l.error) === null || _b === void 0 ? void 0 : _b.bind(l), s = (_d = l.complete) === null || _d === void 0 ? void 0 : _d.bind(l);
            } this.__isAsync && (o = Zl(o), i && (i = Zl(i)), s && (s = Zl(s))); const a = super.subscribe({ next: i, error: o, complete: s }); return e instanceof At && e.add(a), a; }
        }; function zo(...t) { } const om = new H("Application Initializer"); let Go = (() => { class t {
            constructor(n) { this.appInits = n, this.resolve = zo, this.reject = zo, this.initialized = !1, this.done = !1, this.donePromise = new Promise((r, i) => { this.resolve = r, this.reject = i; }); }
            runInitializers() { if (this.initialized)
                return; const n = [], r = () => { this.done = !0, this.resolve(); }; if (this.appInits)
                for (let i = 0; i < this.appInits.length; i++) {
                    const o = this.appInits[i]();
                    if (Vl(o))
                        n.push(o);
                    else if (YC(o)) {
                        const s = new Promise((a, l) => { o.subscribe({ complete: a, error: l }); });
                        n.push(s);
                    }
                } Promise.all(n).then(() => { r(); }).catch(i => { this.reject(i); }), 0 === n.length && r(), this.initialized = !0; }
        } return t.\u0275fac = function (n) { return new (n || t)(B(om, 8)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })(); const vi = new H("AppId", { providedIn: "root", factory: function sm() { return `${lu()}${lu()}${lu()}`; } }); function lu() { return String.fromCharCode(97 + Math.floor(25 * Math.random())); } const am = new H("Platform Initializer"), lm = new H("Platform ID", { providedIn: "platform", factory: () => "unknown" }), tI = new H("appBootstrapListener"), um = new H("AnimationModuleType"), Yt = new H("LocaleId", { providedIn: "root", factory: () => function w_(t, e = P.Default) { return "number" != typeof e && (e = 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4)), B(t, e); }(Yt, P.Optional | P.SkipSelf) || function nI() { return typeof $localize < "u" && $localize.locale || Cr; }() }), aI = (() => Promise.resolve(0))(); function uu(t) { typeof Zone > "u" ? aI.then(() => { t && t.apply(null, null); }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t); } class Ce {
            constructor({ enableLongStackTrace: e = !1, shouldCoalesceEventChangeDetection: n = !1, shouldCoalesceRunChangeDetection: r = !1 }) { if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Qt(!1), this.onMicrotaskEmpty = new Qt(!1), this.onStable = new Qt(!1), this.onError = new Qt(!1), typeof Zone > "u")
                throw new w(908, !1); Zone.assertZonePatched(); const i = this; if (i._nesting = 0, i._outer = i._inner = Zone.current, Zone.AsyncStackTaggingZoneSpec) {
                const o = Zone.AsyncStackTaggingZoneSpec;
                i._inner = i._inner.fork(new o("Angular"));
            } Zone.TaskTrackingZoneSpec && (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec)), e && Zone.longStackTraceZoneSpec && (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)), i.shouldCoalesceEventChangeDetection = !r && n, i.shouldCoalesceRunChangeDetection = r, i.lastRequestAnimationFrameId = -1, i.nativeRequestAnimationFrame = function lI() { let t = ne.requestAnimationFrame, e = ne.cancelAnimationFrame; if (typeof Zone < "u" && t && e) {
                const n = t[Zone.__symbol__("OriginalDelegate")];
                n && (t = n);
                const r = e[Zone.__symbol__("OriginalDelegate")];
                r && (e = r);
            } return { nativeRequestAnimationFrame: t, nativeCancelAnimationFrame: e }; }().nativeRequestAnimationFrame, function dI(t) { const e = () => { !function cI(t) { t.isCheckStableRunning || -1 !== t.lastRequestAnimationFrameId || (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(ne, () => { t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => { t.lastRequestAnimationFrameId = -1, du(t), t.isCheckStableRunning = !0, cu(t), t.isCheckStableRunning = !1; }, void 0, () => { }, () => { })), t.fakeTopEventTask.invoke(); }), du(t)); }(t); }; t._inner = t._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: (n, r, i, o, s, a) => { try {
                    return fm(t), n.invokeTask(i, o, s, a);
                }
                finally {
                    (t.shouldCoalesceEventChangeDetection && "eventTask" === o.type || t.shouldCoalesceRunChangeDetection) && e(), hm(t);
                } }, onInvoke: (n, r, i, o, s, a, l) => { try {
                    return fm(t), n.invoke(i, o, s, a, l);
                }
                finally {
                    t.shouldCoalesceRunChangeDetection && e(), hm(t);
                } }, onHasTask: (n, r, i, o) => { n.hasTask(i, o), r === i && ("microTask" == o.change ? (t._hasPendingMicrotasks = o.microTask, du(t), cu(t)) : "macroTask" == o.change && (t.hasPendingMacrotasks = o.macroTask)); }, onHandleError: (n, r, i, o) => (n.handleError(i, o), t.runOutsideAngular(() => t.onError.emit(o)), !1) }); }(i); }
            static isInAngularZone() { return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone"); }
            static assertInAngularZone() { if (!Ce.isInAngularZone())
                throw new w(909, !1); }
            static assertNotInAngularZone() { if (Ce.isInAngularZone())
                throw new w(909, !1); }
            run(e, n, r) { return this._inner.run(e, n, r); }
            runTask(e, n, r, i) { const o = this._inner, s = o.scheduleEventTask("NgZoneEvent: " + i, e, uI, zo, zo); try {
                return o.runTask(s, n, r);
            }
            finally {
                o.cancelTask(s);
            } }
            runGuarded(e, n, r) { return this._inner.runGuarded(e, n, r); }
            runOutsideAngular(e) { return this._outer.run(e); }
        } const uI = {}; function cu(t) { if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
            try {
                t._nesting++, t.onMicrotaskEmpty.emit(null);
            }
            finally {
                if (t._nesting--, !t.hasPendingMicrotasks)
                    try {
                        t.runOutsideAngular(() => t.onStable.emit(null));
                    }
                    finally {
                        t.isStable = !0;
                    }
            } } function du(t) { t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || (t.shouldCoalesceEventChangeDetection || t.shouldCoalesceRunChangeDetection) && -1 !== t.lastRequestAnimationFrameId); } function fm(t) { t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null)); } function hm(t) { t._nesting--, cu(t); } class fI {
            constructor() { this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Qt, this.onMicrotaskEmpty = new Qt, this.onStable = new Qt, this.onError = new Qt; }
            run(e, n, r) { return e.apply(n, r); }
            runGuarded(e, n, r) { return e.apply(n, r); }
            runOutsideAngular(e) { return e(); }
            runTask(e, n, r, i) { return e.apply(n, r); }
        } const pm = new H(""), qo = new H(""); let pu, fu = (() => { class t {
            constructor(n, r, i) { this._ngZone = n, this.registry = r, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, pu || (function hI(t) { pu = t; }(i), i.addToWindow(r)), this._watchAngularEvents(), n.run(() => { this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
            _watchAngularEvents() { this._ngZone.onUnstable.subscribe({ next: () => { this._didWork = !0, this._isZoneStable = !1; } }), this._ngZone.runOutsideAngular(() => { this._ngZone.onStable.subscribe({ next: () => { Ce.assertNotInAngularZone(), uu(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } }); }); }
            increasePendingRequestCount() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount; }
            decreasePendingRequestCount() { if (this._pendingCount -= 1, this._pendingCount < 0)
                throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount; }
            isStable() { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks; }
            _runCallbacksIfReady() { if (this.isStable())
                uu(() => { for (; 0 !== this._callbacks.length;) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                } this._didWork = !1; });
            else {
                let n = this.getPendingTasks();
                this._callbacks = this._callbacks.filter(r => !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId), !1)), this._didWork = !0;
            } }
            getPendingTasks() { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
            addCallback(n, r, i) { let o = -1; r && r > 0 && (o = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== o), n(this._didWork, this.getPendingTasks()); }, r)), this._callbacks.push({ doneCb: n, timeoutId: o, updateCb: i }); }
            whenStable(n, r, i) { if (i && !this.taskTrackingZone)
                throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, r, i), this._runCallbacksIfReady(); }
            getPendingRequestCount() { return this._pendingCount; }
            registerApplication(n) { this.registry.registerApplication(n, this); }
            unregisterApplication(n) { this.registry.unregisterApplication(n); }
            findProviders(n, r, i) { return []; }
        } return t.\u0275fac = function (n) { return new (n || t)(B(Ce), B(hu), B(qo)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(), hu = (() => { class t {
            constructor() { this._applications = new Map; }
            registerApplication(n, r) { this._applications.set(n, r); }
            unregisterApplication(n) { this._applications.delete(n); }
            unregisterAllApplications() { this._applications.clear(); }
            getTestability(n) { return this._applications.get(n) || null; }
            getAllTestabilities() { return Array.from(this._applications.values()); }
            getAllRootElements() { return Array.from(this._applications.keys()); }
            findTestabilityInTree(n, r = !0) { var _a; return (_a = pu === null || pu === void 0 ? void 0 : pu.findTestabilityInTree(this, n, r)) !== null && _a !== void 0 ? _a : null; }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac, providedIn: "platform" }), t; })(), fn = null; const gm = new H("AllowMultipleToken"), gu = new H("PlatformDestroyListeners"); function ym(t, e, n = []) { const r = `Platform: ${e}`, i = new H(r); return (o = []) => { let s = mu(); if (!s || s.injector.get(gm, !1)) {
            const a = [...n, ...o, { provide: i, useValue: !0 }];
            t ? t(a) : function mI(t) { if (fn && !fn.get(gm, !1))
                throw new w(400, !1); fn = t; const e = t.get(vm); (function mm(t) { const e = t.get(am, null); e && e.forEach(n => n()); })(t); }(function Dm(t = [], e) { return Nn.create({ name: e, providers: [{ provide: Xa, useValue: "platform" }, { provide: gu, useValue: new Set([() => fn = null]) }, ...t] }); }(a, r));
        } return function DI(t) { const e = mu(); if (!e)
            throw new w(401, !1); return e; }(); }; } function mu() { var _a; return (_a = fn === null || fn === void 0 ? void 0 : fn.get(vm)) !== null && _a !== void 0 ? _a : null; } let vm = (() => { class t {
            constructor(n) { this._injector = n, this._modules = [], this._destroyListeners = [], this._destroyed = !1; }
            bootstrapModuleFactory(n, r) { const i = function wm(t, e) { let n; return n = "noop" === t ? new fI : ("zone.js" === t ? void 0 : t) || new Ce(e), n; }(r === null || r === void 0 ? void 0 : r.ngZone, function _m(t) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: !(!t || !t.ngZoneEventCoalescing) || !1, shouldCoalesceRunChangeDetection: !(!t || !t.ngZoneRunCoalescing) || !1 }; }(r)), o = [{ provide: Ce, useValue: i }]; return i.run(() => { const s = Nn.create({ providers: o, parent: this.injector, name: n.moduleType.name }), a = n.create(s), l = a.injector.get(ar, null); if (!l)
                throw new w(402, !1); return i.runOutsideAngular(() => { const u = i.onError.subscribe({ next: c => { l.handleError(c); } }); a.onDestroy(() => { Ko(this._modules, a), u.unsubscribe(); }); }), function Em(t, e, n) { try {
                const r = n();
                return Vl(r) ? r.catch(i => { throw e.runOutsideAngular(() => t.handleError(i)), i; }) : r;
            }
            catch (r) {
                throw e.runOutsideAngular(() => t.handleError(r)), r;
            } }(l, i, () => { const u = a.injector.get(Go); return u.runInitializers(), u.donePromise.then(() => (function Kp(t) { Ge(t, "Expected localeId to be defined"), "string" == typeof t && (Wp = t.toLowerCase().replace(/_/g, "-")); }(a.injector.get(Yt, Cr) || Cr), this._moduleDoBootstrap(a), a)); }); }); }
            bootstrapModule(n, r = []) { const i = Cm({}, r); return function pI(t, e, n) { const r = new Kl(n); return Promise.resolve(r); }(0, 0, n).then(o => this.bootstrapModuleFactory(o, i)); }
            _moduleDoBootstrap(n) { const r = n.injector.get(Wo); if (n._bootstrapComponents.length > 0)
                n._bootstrapComponents.forEach(i => r.bootstrap(i));
            else {
                if (!n.instance.ngDoBootstrap)
                    throw new w(403, !1);
                n.instance.ngDoBootstrap(r);
            } this._modules.push(n); }
            onDestroy(n) { this._destroyListeners.push(n); }
            get injector() { return this._injector; }
            destroy() { if (this._destroyed)
                throw new w(404, !1); this._modules.slice().forEach(r => r.destroy()), this._destroyListeners.forEach(r => r()); const n = this._injector.get(gu, null); n && (n.forEach(r => r()), n.clear()), this._destroyed = !0; }
            get destroyed() { return this._destroyed; }
        } return t.\u0275fac = function (n) { return new (n || t)(B(Nn)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac, providedIn: "platform" }), t; })(); function Cm(t, e) { return Array.isArray(e) ? e.reduce(Cm, t) : Object.assign(Object.assign({}, t), e); } let Wo = (() => { class t {
            constructor(n, r, i) { this._zone = n, this._injector = r, this._exceptionHandler = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this._destroyed = !1, this._destroyListeners = [], this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({ next: () => { this._zone.run(() => { this.tick(); }); } }); const o = new Ve(a => { this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => { a.next(this._stable), a.complete(); }); }), s = new Ve(a => { let l; this._zone.runOutsideAngular(() => { l = this._zone.onStable.subscribe(() => { Ce.assertNotInAngularZone(), uu(() => { !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0, a.next(!0)); }); }); }); const u = this._zone.onUnstable.subscribe(() => { Ce.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => { a.next(!1); })); }); return () => { l.unsubscribe(), u.unsubscribe(); }; }); this.isStable = YD(o, s.pipe(function JD(t = {}) { const { connector: e = (() => new ks), resetOnError: n = !0, resetOnComplete: r = !0, resetOnRefCountZero: i = !0 } = t; return o => { let s, a, l, u = 0, c = !1, d = !1; const f = () => { a === null || a === void 0 ? void 0 : a.unsubscribe(), a = void 0; }, h = () => { f(), s = l = void 0, c = d = !1; }, p = () => { const g = s; h(), g === null || g === void 0 ? void 0 : g.unsubscribe(); }; return xr((g, y) => { u++, !d && !c && f(); const D = l = l !== null && l !== void 0 ? l : e(); y.add(() => { u--, 0 === u && !d && !c && (a = Bs(p, i)); }), D.subscribe(y), !s && u > 0 && (s = new Fr({ next: _ => D.next(_), error: _ => { d = !0, f(), a = Bs(h, n, _), D.error(_); }, complete: () => { c = !0, f(), a = Bs(h, r), D.complete(); } }), _n(g).subscribe(s)); })(o); }; }())); }
            get destroyed() { return this._destroyed; }
            get injector() { return this._injector; }
            bootstrap(n, r) { const i = n instanceof Bf; if (!this._injector.get(Go).done)
                throw !i && function Or(t) { const e = Y(t) || Pe(t) || Fe(t); return null !== e && e.standalone; }(n), new w(405, false); let s; s = i ? n : this._injector.get(Co).resolveComponentFactory(n), this.componentTypes.push(s.componentType); const a = function gI(t) { return t.isBoundToModule; }(s) ? void 0 : this._injector.get(br), u = s.create(Nn.NULL, [], r || s.selector, a), c = u.location.nativeElement, d = u.injector.get(pm, null); return d === null || d === void 0 ? void 0 : d.registerApplication(c), u.onDestroy(() => { this.detachView(u.hostView), Ko(this.components, u), d === null || d === void 0 ? void 0 : d.unregisterApplication(c); }), this._loadComponent(u), u; }
            tick() { if (this._runningTick)
                throw new w(101, !1); try {
                this._runningTick = !0;
                for (let n of this._views)
                    n.detectChanges();
            }
            catch (n) {
                this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n));
            }
            finally {
                this._runningTick = !1;
            } }
            attachView(n) { const r = n; this._views.push(r), r.attachToAppRef(this); }
            detachView(n) { const r = n; Ko(this._views, r), r.detachFromAppRef(); }
            _loadComponent(n) { this.attachView(n.hostView), this.tick(), this.components.push(n), this._injector.get(tI, []).concat(this._bootstrapListeners).forEach(i => i(n)); }
            ngOnDestroy() { if (!this._destroyed)
                try {
                    this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy()), this._onMicrotaskEmptySubscription.unsubscribe();
                }
                finally {
                    this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = [];
                } }
            onDestroy(n) { return this._destroyListeners.push(n), () => Ko(this._destroyListeners, n); }
            destroy() { if (this._destroyed)
                throw new w(406, !1); const n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
            get viewCount() { return this._views.length; }
            warnIfDestroyed() { }
        } return t.\u0275fac = function (n) { return new (n || t)(B(Ce), B(rr), B(ar)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac, providedIn: "root" }), t; })(); function Ko(t, e) { const n = t.indexOf(e); n > -1 && t.splice(n, 1); } let Sm = !0; class Nm {
            constructor() { }
            supports(e) { return li(e); }
            create(e) { return new AI(e); }
        } const MI = (t, e) => e; class AI {
            constructor(e) { this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || MI; }
            forEachItem(e) { let n; for (n = this._itHead; null !== n; n = n._next)
                e(n); }
            forEachOperation(e) { let n = this._itHead, r = this._removalsHead, i = 0, o = null; for (; n || r;) {
                const s = !r || n && n.currentIndex < Fm(r, i, o) ? n : r, a = Fm(s, i, o), l = s.currentIndex;
                if (s === r)
                    i--, r = r._nextRemoved;
                else if (n = n._next, null == s.previousIndex)
                    i++;
                else {
                    o || (o = []);
                    const u = a - i, c = l - i;
                    if (u != c) {
                        for (let f = 0; f < u; f++) {
                            const h = f < o.length ? o[f] : o[f] = 0, p = h + f;
                            c <= p && p < u && (o[f] = h + 1);
                        }
                        o[s.previousIndex] = c - u;
                    }
                }
                a !== l && e(s, a, l);
            } }
            forEachPreviousItem(e) { let n; for (n = this._previousItHead; null !== n; n = n._nextPrevious)
                e(n); }
            forEachAddedItem(e) { let n; for (n = this._additionsHead; null !== n; n = n._nextAdded)
                e(n); }
            forEachMovedItem(e) { let n; for (n = this._movesHead; null !== n; n = n._nextMoved)
                e(n); }
            forEachRemovedItem(e) { let n; for (n = this._removalsHead; null !== n; n = n._nextRemoved)
                e(n); }
            forEachIdentityChange(e) { let n; for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange)
                e(n); }
            diff(e) { if (null == e && (e = []), !li(e))
                throw new w(900, !1); return this.check(e) ? this : null; }
            onDestroy() { }
            check(e) { this._reset(); let i, o, s, n = this._itHead, r = !1; if (Array.isArray(e)) {
                this.length = e.length;
                for (let a = 0; a < this.length; a++)
                    o = e[a], s = this._trackByFn(a, o), null !== n && Object.is(n.trackById, s) ? (r && (n = this._verifyReinsertion(n, o, s, a)), Object.is(n.item, o) || this._addIdentityChange(n, o)) : (n = this._mismatch(n, o, s, a), r = !0), n = n._next;
            }
            else
                i = 0, function HC(t, e) { if (Array.isArray(t))
                    for (let n = 0; n < t.length; n++)
                        e(t[n]);
                else {
                    const n = t[Pn()]();
                    let r;
                    for (; !(r = n.next()).done;)
                        e(r.value);
                } }(e, a => { s = this._trackByFn(i, a), null !== n && Object.is(n.trackById, s) ? (r && (n = this._verifyReinsertion(n, a, s, i)), Object.is(n.item, a) || this._addIdentityChange(n, a)) : (n = this._mismatch(n, a, s, i), r = !0), n = n._next, i++; }), this.length = i; return this._truncate(n), this.collection = e, this.isDirty; }
            get isDirty() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead; }
            _reset() { if (this.isDirty) {
                let e;
                for (e = this._previousItHead = this._itHead; null !== e; e = e._next)
                    e._nextPrevious = e._next;
                for (e = this._additionsHead; null !== e; e = e._nextAdded)
                    e.previousIndex = e.currentIndex;
                for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = e._nextMoved)
                    e.previousIndex = e.currentIndex;
                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
            } }
            _mismatch(e, n, r, i) { let o; return null === e ? o = this._itTail : (o = e._prev, this._remove(e)), null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null)) ? (Object.is(e.item, n) || this._addIdentityChange(e, n), this._reinsertAfter(e, o, i)) : null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(r, i)) ? (Object.is(e.item, n) || this._addIdentityChange(e, n), this._moveAfter(e, o, i)) : e = this._addAfter(new NI(n, r), o, i), e; }
            _verifyReinsertion(e, n, r, i) { let o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null); return null !== o ? e = this._reinsertAfter(o, e._prev, i) : e.currentIndex != i && (e.currentIndex = i, this._addToMoves(e, i)), e; }
            _truncate(e) { for (; null !== e;) {
                const n = e._next;
                this._addToRemovals(this._unlink(e)), e = n;
            } null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null); }
            _reinsertAfter(e, n, r) { null !== this._unlinkedRecords && this._unlinkedRecords.remove(e); const i = e._prevRemoved, o = e._nextRemoved; return null === i ? this._removalsHead = o : i._nextRemoved = o, null === o ? this._removalsTail = i : o._prevRemoved = i, this._insertAfter(e, n, r), this._addToMoves(e, r), e; }
            _moveAfter(e, n, r) { return this._unlink(e), this._insertAfter(e, n, r), this._addToMoves(e, r), e; }
            _addAfter(e, n, r) { return this._insertAfter(e, n, r), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e; }
            _insertAfter(e, n, r) { const i = null === n ? this._itHead : n._next; return e._next = i, e._prev = n, null === i ? this._itTail = e : i._prev = e, null === n ? this._itHead = e : n._next = e, null === this._linkedRecords && (this._linkedRecords = new Pm), this._linkedRecords.put(e), e.currentIndex = r, e; }
            _remove(e) { return this._addToRemovals(this._unlink(e)); }
            _unlink(e) { null !== this._linkedRecords && this._linkedRecords.remove(e); const n = e._prev, r = e._next; return null === n ? this._itHead = r : n._next = r, null === r ? this._itTail = n : r._prev = n, e; }
            _addToMoves(e, n) { return e.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e), e; }
            _addToRemovals(e) { return null === this._unlinkedRecords && (this._unlinkedRecords = new Pm), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e; }
            _addIdentityChange(e, n) { return e.item = n, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e; }
        } class NI {
            constructor(e, n) { this.item = e, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null; }
        } class PI {
            constructor() { this._head = null, this._tail = null; }
            add(e) { null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e); }
            get(e, n) { let r; for (r = this._head; null !== r; r = r._nextDup)
                if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, e))
                    return r; return null; }
            remove(e) { const n = e._prevDup, r = e._nextDup; return null === n ? this._head = r : n._nextDup = r, null === r ? this._tail = n : r._prevDup = n, null === this._head; }
        } class Pm {
            constructor() { this.map = new Map; }
            put(e) { const n = e.trackById; let r = this.map.get(n); r || (r = new PI, this.map.set(n, r)), r.add(e); }
            get(e, n) { const i = this.map.get(e); return i ? i.get(e, n) : null; }
            remove(e) { const n = e.trackById; return this.map.get(n).remove(e) && this.map.delete(n), e; }
            get isEmpty() { return 0 === this.map.size; }
            clear() { this.map.clear(); }
        } function Fm(t, e, n) { const r = t.previousIndex; if (null === r)
            return r; let i = 0; return n && r < n.length && (i = n[r]), r + e + i; } class xm {
            constructor() { }
            supports(e) { return e instanceof Map || Rl(e); }
            create() { return new FI; }
        } class FI {
            constructor() { this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null; }
            get isDirty() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead; }
            forEachItem(e) { let n; for (n = this._mapHead; null !== n; n = n._next)
                e(n); }
            forEachPreviousItem(e) { let n; for (n = this._previousMapHead; null !== n; n = n._nextPrevious)
                e(n); }
            forEachChangedItem(e) { let n; for (n = this._changesHead; null !== n; n = n._nextChanged)
                e(n); }
            forEachAddedItem(e) { let n; for (n = this._additionsHead; null !== n; n = n._nextAdded)
                e(n); }
            forEachRemovedItem(e) { let n; for (n = this._removalsHead; null !== n; n = n._nextRemoved)
                e(n); }
            diff(e) { if (e) {
                if (!(e instanceof Map || Rl(e)))
                    throw new w(900, !1);
            }
            else
                e = new Map; return this.check(e) ? this : null; }
            onDestroy() { }
            check(e) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(e, (r, i) => { if (n && n.key === i)
                this._maybeAddToChanges(n, r), this._appendAfter = n, n = n._next;
            else {
                const o = this._getOrCreateRecordForKey(i, r);
                n = this._insertBeforeOrAppend(n, o);
            } }), n) {
                n._prev && (n._prev._next = null), this._removalsHead = n;
                for (let r = n; null !== r; r = r._nextRemoved)
                    r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null;
            } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
            _insertBeforeOrAppend(e, n) { if (e) {
                const r = e._prev;
                return n._next = e, n._prev = r, e._prev = n, r && (r._next = n), e === this._mapHead && (this._mapHead = n), this._appendAfter = e, e;
            } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
            _getOrCreateRecordForKey(e, n) { if (this._records.has(e)) {
                const i = this._records.get(e);
                this._maybeAddToChanges(i, n);
                const o = i._prev, s = i._next;
                return o && (o._next = s), s && (s._prev = o), i._next = null, i._prev = null, i;
            } const r = new xI(e); return this._records.set(e, r), r.currentValue = n, this._addToAdditions(r), r; }
            _reset() { if (this.isDirty) {
                let e;
                for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next)
                    e._nextPrevious = e._next;
                for (e = this._changesHead; null !== e; e = e._nextChanged)
                    e.previousValue = e.currentValue;
                for (e = this._additionsHead; null != e; e = e._nextAdded)
                    e.previousValue = e.currentValue;
                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
            } }
            _maybeAddToChanges(e, n) { Object.is(n, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = n, this._addToChanges(e)); }
            _addToAdditions(e) { null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e); }
            _addToChanges(e) { null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e); }
            _forEach(e, n) { e instanceof Map ? e.forEach(n) : Object.keys(e).forEach(r => n(e[r], r)); }
        } class xI {
            constructor(e) { this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null; }
        } function Rm() { return new Yo([new Nm]); } let Yo = (() => { class t {
            constructor(n) { this.factories = n; }
            static create(n, r) { if (null != r) {
                const i = r.factories.slice();
                n = n.concat(i);
            } return new t(n); }
            static extend(n) { return { provide: t, useFactory: r => t.create(n, r || Rm()), deps: [[t, new fo, new co]] }; }
            find(n) { const r = this.factories.find(i => i.supports(n)); if (null != r)
                return r; throw new w(901, !1); }
        } return t.\u0275prov = J({ token: t, providedIn: "root", factory: Rm }), t; })(); function Om() { return new _i([new xm]); } let _i = (() => { class t {
            constructor(n) { this.factories = n; }
            static create(n, r) { if (r) {
                const i = r.factories.slice();
                n = n.concat(i);
            } return new t(n); }
            static extend(n) { return { provide: t, useFactory: r => t.create(n, r || Om()), deps: [[t, new fo, new co]] }; }
            find(n) { const r = this.factories.find(i => i.supports(n)); if (r)
                return r; throw new w(901, !1); }
        } return t.\u0275prov = J({ token: t, providedIn: "root", factory: Om }), t; })(); const kI = ym(null, "core", []); let LI = (() => { class t {
            constructor(n) { }
        } return t.\u0275fac = function (n) { return new (n || t)(B(Wo)); }, t.\u0275mod = jn({ type: t }), t.\u0275inj = wn({}), t; })(), Jo = null; function wi() { return Jo; } const St = new H("DocumentToken"); let Gm = (() => { class t {
            constructor(n, r, i, o) { this._iterableDiffers = n, this._keyValueDiffers = r, this._ngEl = i, this._renderer = o, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null; }
            set klass(n) { this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof n ? n.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass); }
            set ngClass(n) { this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof n ? n.split(/\s+/) : n, this._rawClass && (li(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()); }
            ngDoCheck() { if (this._iterableDiffer) {
                const n = this._iterableDiffer.diff(this._rawClass);
                n && this._applyIterableChanges(n);
            }
            else if (this._keyValueDiffer) {
                const n = this._keyValueDiffer.diff(this._rawClass);
                n && this._applyKeyValueChanges(n);
            } }
            _applyKeyValueChanges(n) { n.forEachAddedItem(r => this._toggleClass(r.key, r.currentValue)), n.forEachChangedItem(r => this._toggleClass(r.key, r.currentValue)), n.forEachRemovedItem(r => { r.previousValue && this._toggleClass(r.key, !1); }); }
            _applyIterableChanges(n) { n.forEachAddedItem(r => { if ("string" != typeof r.item)
                throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${ee(r.item)}`); this._toggleClass(r.item, !0); }), n.forEachRemovedItem(r => this._toggleClass(r.item, !1)); }
            _applyClasses(n) { n && (Array.isArray(n) || n instanceof Set ? n.forEach(r => this._toggleClass(r, !0)) : Object.keys(n).forEach(r => this._toggleClass(r, !!n[r]))); }
            _removeClasses(n) { n && (Array.isArray(n) || n instanceof Set ? n.forEach(r => this._toggleClass(r, !1)) : Object.keys(n).forEach(r => this._toggleClass(r, !1))); }
            _toggleClass(n, r) { (n = n.trim()) && n.split(/\s+/g).forEach(i => { r ? this._renderer.addClass(this._ngEl.nativeElement, i) : this._renderer.removeClass(this._ngEl.nativeElement, i); }); }
        } return t.\u0275fac = function (n) { return new (n || t)(j(Yo), j(_i), j(sr), j(Hf)); }, t.\u0275dir = st({ type: t, selectors: [["", "ngClass", ""]], inputs: { klass: ["class", "klass"], ngClass: "ngClass" }, standalone: !0 }), t; })(), Ym = (() => { class t {
            constructor(n, r, i) { this._ngEl = n, this._differs = r, this._renderer = i, this._ngStyle = null, this._differ = null; }
            set ngStyle(n) { this._ngStyle = n, !this._differ && n && (this._differ = this._differs.find(n).create()); }
            ngDoCheck() { if (this._differ) {
                const n = this._differ.diff(this._ngStyle);
                n && this._applyChanges(n);
            } }
            _setStyle(n, r) { const [i, o] = n.split("."), s = -1 === i.indexOf("-") ? void 0 : He.DashCase; null != r ? this._renderer.setStyle(this._ngEl.nativeElement, i, o ? `${r}${o}` : r, s) : this._renderer.removeStyle(this._ngEl.nativeElement, i, s); }
            _applyChanges(n) { n.forEachRemovedItem(r => this._setStyle(r.key, null)), n.forEachAddedItem(r => this._setStyle(r.key, r.currentValue)), n.forEachChangedItem(r => this._setStyle(r.key, r.currentValue)); }
        } return t.\u0275fac = function (n) { return new (n || t)(j(sr), j(_i), j(Hf)); }, t.\u0275dir = st({ type: t, selectors: [["", "ngStyle", ""]], inputs: { ngStyle: "ngStyle" }, standalone: !0 }), t; })(), rM = (() => { class t {
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275mod = jn({ type: t }), t.\u0275inj = wn({}), t; })(); class ku extends class IM extends class jI {
        } {
            constructor() { super(...arguments), this.supportsDOMEvents = !0; }
        } {
            static makeCurrent() { !function BI(t) { Jo || (Jo = t); }(new ku); }
            onAndCancel(e, n, r) { return e.addEventListener(n, r, !1), () => { e.removeEventListener(n, r, !1); }; }
            dispatchEvent(e, n) { e.dispatchEvent(n); }
            remove(e) { e.parentNode && e.parentNode.removeChild(e); }
            createElement(e, n) { return (n = n || this.getDefaultDocument()).createElement(e); }
            createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
            getDefaultDocument() { return document; }
            isElementNode(e) { return e.nodeType === Node.ELEMENT_NODE; }
            isShadowRoot(e) { return e instanceof DocumentFragment; }
            getGlobalEventTarget(e, n) { return "window" === n ? window : "document" === n ? e : "body" === n ? e.body : null; }
            getBaseHref(e) { const n = function TM() { return Si = Si || document.querySelector("base"), Si ? Si.getAttribute("href") : null; }(); return null == n ? null : function MM(t) { us = us || document.createElement("a"), us.setAttribute("href", t); const e = us.pathname; return "/" === e.charAt(0) ? e : `/${e}`; }(n); }
            resetBaseElement() { Si = null; }
            getUserAgent() { return window.navigator.userAgent; }
            getCookie(e) { return function ST(t, e) { e = encodeURIComponent(e); for (const n of t.split(";")) {
                const r = n.indexOf("="), [i, o] = -1 == r ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
                if (i.trim() === e)
                    return decodeURIComponent(o);
            } return null; }(document.cookie, e); }
        } let us, Si = null; const iy = new H("TRANSITION_ID"), NM = [{ provide: om, useFactory: function AM(t, e, n) { return () => { n.get(Go).donePromise.then(() => { const r = wi(), i = e.querySelectorAll(`style[ng-transition="${t}"]`); for (let o = 0; o < i.length; o++)
                    r.remove(i[o]); }); }; }, deps: [iy, St, Nn], multi: !0 }]; let FM = (() => { class t {
            build() { return new XMLHttpRequest; }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(); const cs = new H("EventManagerPlugins"); let ds = (() => { class t {
            constructor(n, r) { this._zone = r, this._eventNameToPlugin = new Map, n.forEach(i => i.manager = this), this._plugins = n.slice().reverse(); }
            addEventListener(n, r, i) { return this._findPluginFor(r).addEventListener(n, r, i); }
            addGlobalEventListener(n, r, i) { return this._findPluginFor(r).addGlobalEventListener(n, r, i); }
            getZone() { return this._zone; }
            _findPluginFor(n) { const r = this._eventNameToPlugin.get(n); if (r)
                return r; const i = this._plugins; for (let o = 0; o < i.length; o++) {
                const s = i[o];
                if (s.supports(n))
                    return this._eventNameToPlugin.set(n, s), s;
            } throw new Error(`No event manager plugin found for event ${n}`); }
        } return t.\u0275fac = function (n) { return new (n || t)(B(cs), B(Ce)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(); class oy {
            constructor(e) { this._doc = e; }
            addGlobalEventListener(e, n, r) { const i = wi().getGlobalEventTarget(this._doc, e); if (!i)
                throw new Error(`Unsupported event target ${i} for event ${n}`); return this.addEventListener(i, n, r); }
        } let sy = (() => { class t {
            constructor() { this._stylesSet = new Set; }
            addStyles(n) { const r = new Set; n.forEach(i => { this._stylesSet.has(i) || (this._stylesSet.add(i), r.add(i)); }), this.onStylesAdded(r); }
            onStylesAdded(n) { }
            getAllStyles() { return Array.from(this._stylesSet); }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(), Ii = (() => { class t extends sy {
            constructor(n) { super(), this._doc = n, this._hostNodes = new Map, this._hostNodes.set(n.head, []); }
            _addStylesToHost(n, r, i) { n.forEach(o => { const s = this._doc.createElement("style"); s.textContent = o, i.push(r.appendChild(s)); }); }
            addHost(n) { const r = []; this._addStylesToHost(this._stylesSet, n, r), this._hostNodes.set(n, r); }
            removeHost(n) { const r = this._hostNodes.get(n); r && r.forEach(ay), this._hostNodes.delete(n); }
            onStylesAdded(n) { this._hostNodes.forEach((r, i) => { this._addStylesToHost(n, i, r); }); }
            ngOnDestroy() { this._hostNodes.forEach(n => n.forEach(ay)); }
        } return t.\u0275fac = function (n) { return new (n || t)(B(St)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(); function ay(t) { wi().remove(t); } const Lu = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/MathML/" }, Vu = /%COMP%/g; function fs(t, e, n) { for (let r = 0; r < e.length; r++) {
            let i = e[r];
            Array.isArray(i) ? fs(t, i, n) : (i = i.replace(Vu, t), n.push(i));
        } return n; } function cy(t) { return e => { if ("__ngUnwrap__" === e)
            return t; !1 === t(e) && (e.preventDefault(), e.returnValue = !1); }; } let hs = (() => { class t {
            constructor(n, r, i) { this.eventManager = n, this.sharedStylesHost = r, this.appId = i, this.rendererByCompId = new Map, this.defaultRenderer = new Bu(n); }
            createRenderer(n, r) { if (!n || !r)
                return this.defaultRenderer; switch (r.encapsulation) {
                case mt.Emulated: {
                    let i = this.rendererByCompId.get(r.id);
                    return i || (i = new VM(this.eventManager, this.sharedStylesHost, r, this.appId), this.rendererByCompId.set(r.id, i)), i.applyToHost(n), i;
                }
                case 1:
                case mt.ShadowDom: return new BM(this.eventManager, this.sharedStylesHost, n, r);
                default:
                    if (!this.rendererByCompId.has(r.id)) {
                        const i = fs(r.id, r.styles, []);
                        this.sharedStylesHost.addStyles(i), this.rendererByCompId.set(r.id, this.defaultRenderer);
                    }
                    return this.defaultRenderer;
            } }
            begin() { }
            end() { }
        } return t.\u0275fac = function (n) { return new (n || t)(B(ds), B(Ii), B(vi)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(); class Bu {
            constructor(e) { this.eventManager = e, this.data = Object.create(null), this.destroyNode = null; }
            destroy() { }
            createElement(e, n) { return n ? document.createElementNS(Lu[n] || n, e) : document.createElement(e); }
            createComment(e) { return document.createComment(e); }
            createText(e) { return document.createTextNode(e); }
            appendChild(e, n) { (fy(e) ? e.content : e).appendChild(n); }
            insertBefore(e, n, r) { e && (fy(e) ? e.content : e).insertBefore(n, r); }
            removeChild(e, n) { e && e.removeChild(n); }
            selectRootElement(e, n) { let r = "string" == typeof e ? document.querySelector(e) : e; if (!r)
                throw new Error(`The selector "${e}" did not match any elements`); return n || (r.textContent = ""), r; }
            parentNode(e) { return e.parentNode; }
            nextSibling(e) { return e.nextSibling; }
            setAttribute(e, n, r, i) { if (i) {
                n = i + ":" + n;
                const o = Lu[i];
                o ? e.setAttributeNS(o, n, r) : e.setAttribute(n, r);
            }
            else
                e.setAttribute(n, r); }
            removeAttribute(e, n, r) { if (r) {
                const i = Lu[r];
                i ? e.removeAttributeNS(i, n) : e.removeAttribute(`${r}:${n}`);
            }
            else
                e.removeAttribute(n); }
            addClass(e, n) { e.classList.add(n); }
            removeClass(e, n) { e.classList.remove(n); }
            setStyle(e, n, r, i) { i & (He.DashCase | He.Important) ? e.style.setProperty(n, r, i & He.Important ? "important" : "") : e.style[n] = r; }
            removeStyle(e, n, r) { r & He.DashCase ? e.style.removeProperty(n) : e.style[n] = ""; }
            setProperty(e, n, r) { e[n] = r; }
            setValue(e, n) { e.nodeValue = n; }
            listen(e, n, r) { return "string" == typeof e ? this.eventManager.addGlobalEventListener(e, n, cy(r)) : this.eventManager.addEventListener(e, n, cy(r)); }
        } function fy(t) { return "TEMPLATE" === t.tagName && void 0 !== t.content; } class VM extends Bu {
            constructor(e, n, r, i) { super(e), this.component = r; const o = fs(i + "-" + r.id, r.styles, []); n.addStyles(o), this.contentAttr = function OM(t) { return "_ngcontent-%COMP%".replace(Vu, t); }(i + "-" + r.id), this.hostAttr = function kM(t) { return "_nghost-%COMP%".replace(Vu, t); }(i + "-" + r.id); }
            applyToHost(e) { super.setAttribute(e, this.hostAttr, ""); }
            createElement(e, n) { const r = super.createElement(e, n); return super.setAttribute(r, this.contentAttr, ""), r; }
        } class BM extends Bu {
            constructor(e, n, r, i) { super(e), this.sharedStylesHost = n, this.hostEl = r, this.shadowRoot = r.attachShadow({ mode: "open" }), this.sharedStylesHost.addHost(this.shadowRoot); const o = fs(i.id, i.styles, []); for (let s = 0; s < o.length; s++) {
                const a = document.createElement("style");
                a.textContent = o[s], this.shadowRoot.appendChild(a);
            } }
            nodeOrShadowRoot(e) { return e === this.hostEl ? this.shadowRoot : e; }
            destroy() { this.sharedStylesHost.removeHost(this.shadowRoot); }
            appendChild(e, n) { return super.appendChild(this.nodeOrShadowRoot(e), n); }
            insertBefore(e, n, r) { return super.insertBefore(this.nodeOrShadowRoot(e), n, r); }
            removeChild(e, n) { return super.removeChild(this.nodeOrShadowRoot(e), n); }
            parentNode(e) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e))); }
        } let jM = (() => { class t extends oy {
            constructor(n) { super(n); }
            supports(n) { return !0; }
            addEventListener(n, r, i) { return n.addEventListener(r, i, !1), () => this.removeEventListener(n, r, i); }
            removeEventListener(n, r, i) { return n.removeEventListener(r, i); }
        } return t.\u0275fac = function (n) { return new (n || t)(B(St)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(); const hy = ["alt", "control", "meta", "shift"], HM = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, $M = { alt: t => t.altKey, control: t => t.ctrlKey, meta: t => t.metaKey, shift: t => t.shiftKey }; let UM = (() => { class t extends oy {
            constructor(n) { super(n); }
            supports(n) { return null != t.parseEventName(n); }
            addEventListener(n, r, i) { const o = t.parseEventName(r), s = t.eventCallback(o.fullKey, i, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => wi().onAndCancel(n, o.domEventName, s)); }
            static parseEventName(n) { const r = n.toLowerCase().split("."), i = r.shift(); if (0 === r.length || "keydown" !== i && "keyup" !== i)
                return null; const o = t._normalizeKey(r.pop()); let s = "", a = r.indexOf("code"); if (a > -1 && (r.splice(a, 1), s = "code."), hy.forEach(u => { const c = r.indexOf(u); c > -1 && (r.splice(c, 1), s += u + "."); }), s += o, 0 != r.length || 0 === o.length)
                return null; const l = {}; return l.domEventName = i, l.fullKey = s, l; }
            static matchEventFullKeyCode(n, r) { let i = HM[n.key] || n.key, o = ""; return r.indexOf("code.") > -1 && (i = n.code, o = "code."), !(null == i || !i) && (i = i.toLowerCase(), " " === i ? i = "space" : "." === i && (i = "dot"), hy.forEach(s => { s !== i && (0, $M[s])(n) && (o += s + "."); }), o += i, o === r); }
            static eventCallback(n, r, i) { return o => { t.matchEventFullKeyCode(o, n) && i.runGuarded(() => r(o)); }; }
            static _normalizeKey(n) { return "esc" === n ? "escape" : n; }
        } return t.\u0275fac = function (n) { return new (n || t)(B(St)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(); const WM = ym(kI, "browser", [{ provide: lm, useValue: "browser" }, { provide: am, useValue: function zM() { ku.makeCurrent(); }, multi: !0 }, { provide: St, useFactory: function qM() { return function Dw(t) { Ga = t; }(document), document; }, deps: [] }]), my = new H(""), yy = [{ provide: qo, useClass: class PM {
                    addToWindow(e) { ne.getAngularTestability = (r, i = !0) => { const o = e.findTestabilityInTree(r, i); if (null == o)
                        throw new Error("Could not find testability for element."); return o; }, ne.getAllAngularTestabilities = () => e.getAllTestabilities(), ne.getAllAngularRootElements = () => e.getAllRootElements(), ne.frameworkStabilizers || (ne.frameworkStabilizers = []), ne.frameworkStabilizers.push(r => { const i = ne.getAllAngularTestabilities(); let o = i.length, s = !1; const a = function (l) { s = s || l, o--, 0 == o && r(s); }; i.forEach(function (l) { l.whenStable(a); }); }); }
                    findTestabilityInTree(e, n, r) { var _a; return null == n ? null : (_a = e.getTestability(n)) !== null && _a !== void 0 ? _a : (r ? wi().isShadowRoot(n) ? this.findTestabilityInTree(e, n.host, !0) : this.findTestabilityInTree(e, n.parentElement, !0) : null); }
                }, deps: [] }, { provide: pm, useClass: fu, deps: [Ce, hu, qo] }, { provide: fu, useClass: fu, deps: [Ce, hu, qo] }], Dy = [{ provide: Xa, useValue: "root" }, { provide: ar, useFactory: function GM() { return new ar; }, deps: [] }, { provide: cs, useClass: jM, multi: !0, deps: [St, Ce, lm] }, { provide: cs, useClass: UM, multi: !0, deps: [St] }, { provide: hs, useClass: hs, deps: [ds, Ii, vi] }, { provide: oi, useExisting: hs }, { provide: sy, useExisting: Ii }, { provide: Ii, useClass: Ii, deps: [St] }, { provide: ds, useClass: ds, deps: [cs, Ce] }, { provide: class lM {
                }, useClass: FM, deps: [] }, []]; let vy = (() => { class t {
            constructor(n) { }
            static withServerTransition(n) { return { ngModule: t, providers: [{ provide: vi, useValue: n.appId }, { provide: iy, useExisting: vi }, NM] }; }
        } return t.\u0275fac = function (n) { return new (n || t)(B(my, 12)); }, t.\u0275mod = jn({ type: t }), t.\u0275inj = wn({ providers: [...Dy, ...yy], imports: [rM, LI] }), t; })(); typeof window < "u" && window; const rA = function (t) { return { gap: t }; }; let Ey = (() => { class t {
            constructor() { this.invert = !0, this.gap = "0"; }
            ngOnInit() { }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275cmp = Ht({ type: t, selectors: [["app-social-media"]], inputs: { invert: "invert", gap: "gap" }, decls: 10, vars: 4, consts: [[1, "d-flex", "justify-content-between", "social-container", 3, "ngClass", "ngStyle"], ["href", "https://twitter.com/couldbekai", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-twitter"], ["d", "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"], ["href", "https://github.com/probablynotkai", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-github"], ["d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"], ["href", "https://www.linkedin.com/in/kai-harrison-74150923a/", "target", "_blank"], ["xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-linkedin"], ["d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"]], template: function (n, r) { 1 & n && (U(0, "div", 0)(1, "a", 1), Yi(), U(2, "svg", 2), $e(3, "path", 3), W()(), ca(), U(4, "a", 4), Yi(), U(5, "svg", 5), $e(6, "path", 6), W()(), ca(), U(7, "a", 7), Yi(), U(8, "svg", 8), $e(9, "path", 9), W()()()), 2 & n && ko("ngClass", r.invert ? "icons" : "blue_icons")("ngStyle", Tg(2, rA, "0" != r.gap ? r.gap : 0)); }, dependencies: [Gm, Ym] }), t; })(), iA = (() => { class t {
            constructor() { }
            ngOnInit() { }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275cmp = Ht({ type: t, selectors: [["app-header"]], decls: 7, vars: 1, consts: [[1, "container-fluid", "bg-white", "border-bottom", "shadow-sm", "py-4"], [1, "w-50", "mx-auto", "d-flex", "text-center", "justify-content-between", "header-row"], [1, "title-container", "w-50"], [1, "title"], [1, "w-50"], ["gap", "5rem", 3, "invert"]], template: function (n, r) { 1 & n && (U(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3), te(4, "Kai Harrison"), W()(), U(5, "div", 4), $e(6, "app-social-media", 5), W()()()), 2 & n && (function Kf(t) { Qf(G(), v(), Re() + t, !1); }(6), ko("invert", !1)); }, dependencies: [Ey] }), t; })(), oA = (() => { class t {
            constructor() { }
            ngOnInit() { }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275cmp = Ht({ type: t, selectors: [["app-main"]], decls: 8, vars: 0, consts: [[1, "row", "pt-5", "pl-5", "mt-3", "hero", "main-container", 2, "opacity", "0"], [1, "col-sm-6", "text-center", "pr-5", "hero-container"], ["src", "../../../assets/ID.jpeg", 1, "shadow", "hero-image", 2, "width", "20rem", "border-radius", "100%"], [1, "col-sm-6", "text-center", "mt-5"]], template: function (n, r) { 1 & n && (U(0, "div", 0)(1, "div", 1), $e(2, "img", 2), W(), U(3, "div", 3)(4, "h1"), te(5, "Kai Harrison"), W(), U(6, "p"), te(7, "Junior Full-Stack Developer specialising in the MEAN stack and .NET API. Sharing my journey and learnings in software development through twitter threads and blog posts."), W()()()); } }), t; })(), sA = (() => { class t {
            constructor() { }
            ngOnInit() { }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275cmp = Ht({ type: t, selectors: [["app-about"]], decls: 10, vars: 0, consts: [[1, "row", "pt-5", "hero", 2, "opacity", "0", "margin-top", "10rem"], [1, "col-sm-7", "text-left", "pr-5", "border-right", "about-text"], [1, "col-sm-5", "text-center", "pl-5", "my-auto", "pl-5"], ["src", "../../../assets/tylo-mockup.png", 1, "shadow", "about-image", 2, "height", "19rem", "border-radius", "8px", "transform", "rotateZ(-10deg)"]], template: function (n, r) { 1 & n && (U(0, "div", 0)(1, "div", 1)(2, "h1"), te(3, "About Me"), W(), U(4, "p"), te(5, "As a passionate and dedicated Junior Software Developer, I have been studying and building my skills in the field of technology and software development since I was 12 years old. My eagerness to learn and experience new technologies has led me to constantly improve my skills. "), W(), U(6, "p"), te(7, " With a solid foundation in full-stack development, I am eager to build upon my existing skills and to work with a team of experienced developers to further hone my abilities, while gaining valuable industry experience. "), W()(), U(8, "div", 2), $e(9, "img", 3), W()()); } }), t; })(), aA = (() => { class t {
            constructor() { }
            ngOnInit() { }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275cmp = Ht({ type: t, selectors: [["app-work"]], decls: 29, vars: 0, consts: [[1, "row", "py-5", "hero", 2, "opacity", "0", "margin-top", "10rem"], [1, "col-sm-9", "text-left", "pr-5", "border-right", "work-text"], [1, "important"], [1, "col-sm-3", "pl-5", "text-center", "mt-5", "work-image-container"], ["src", "../../../assets/WCG_Logo.svg", 2, "width", "8rem"], ["src", "../../../assets/BLUE TRANSPARENT-01.png", 1, "pt-5", 2, "width", "13rem"]], template: function (n, r) { 1 & n && (U(0, "div", 0)(1, "div", 1)(2, "h1"), te(3, "My Work"), W(), U(4, "p"), te(5, "As a Junior Software Developer for "), U(6, "span", 2), te(7, "WCG"), W(), te(8, ", I am currently resposile for over 60 business applications which are developed both in-house and are third-party applications. The stack which I use consists of: "), U(9, "span", 2), te(10, "SQL"), W(), te(11, ", "), U(12, "span", 2), te(13, "ASP.NET Web API"), W(), te(14, ", and "), U(15, "span", 2), te(16, "Angular"), W(), te(17, ". "), W(), U(18, "p"), te(19, "In my spare time, I am working on various intuitive products, however, my main project at this moment in time is "), U(20, "span", 2), te(21, "Tylo"), W(), te(22, ", a development studio for website development. For the website, I use the "), U(23, "span", 2), te(24, "MEAN"), W(), te(25, " stack for the most efficient development process. "), W()(), U(26, "div", 3), $e(27, "img", 4)(28, "img", 5), W()()); } }), t; })(), lA = (() => { class t {
            constructor() { }
            ngOnInit() { }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275cmp = Ht({ type: t, selectors: [["app-footer"]], decls: 20, vars: 0, consts: [[1, "container-fluid", "background", 2, "padding", "3rem 2rem 3rem 2rem"], [1, "row", "text-center", "mx-auto", "footer-section", "text-white", "w-50"], [1, "col-sm-12"], [1, "footer-important"], [1, "col-sm-12", "pt-2"], [1, "w-25", "mx-auto", "mt-5", "footer-media"], [1, "row", "text-center", "mx-auto", "footer-section", "text-white", "mt-5", "pt-4", "w-50"]], template: function (n, r) { 1 & n && (U(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1"), te(4, "Website development solutions."), W(), U(5, "h1", 3), te(6, "One reliable developer."), W()(), U(7, "div", 4)(8, "p"), te(9, "Email me directly at "), U(10, "span", 3), te(11, "kaih.23@icloud.com"), W()()()(), U(12, "div", 1)(13, "div", 2)(14, "div", 5), $e(15, "app-social-media"), W()()(), U(16, "div", 6)(17, "div", 2)(18, "p"), te(19, "Copyright 2023 Kai Harrison. All Rights Reserved."), W()()()()); }, dependencies: [Ey] }), t; })(), uA = (() => { class t {
            constructor() { this.title = "KH-Portfolio-3.0"; }
            ngOnInit() { let n = document.getElementsByClassName("hero"); for (let r = 0; r < n.length; r++) {
                let i = setInterval(() => { let o = n[r]; o.style.opacity = (parseFloat(o.style.opacity) + .04).toString(), parseFloat(o.style.opacity) >= 1 && clearInterval(i); }, 25);
            } }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275cmp = Ht({ type: t, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "background-rectangle"], [1, "container", "w-75", "pt-3", "pb-5"]], template: function (n, r) { 1 & n && ($e(0, "app-header"), U(1, "div"), $e(2, "div", 0), W(), U(3, "div", 1), $e(4, "app-main")(5, "app-about")(6, "app-work"), W(), $e(7, "app-footer")); }, dependencies: [iA, oA, sA, aA, lA] }), t; })(); class Cy {
        } const en = "*"; function by(t, e = null) { return { type: 2, steps: t, options: e }; } function Sy(t) { return { type: 6, styles: t, offset: null }; } function Iy(t) { Promise.resolve().then(t); } class Ti {
            constructor(e = 0, n = 0) { this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._originalOnDoneFns = [], this._originalOnStartFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = e + n; }
            _onFinish() { this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = []); }
            onStart(e) { this._originalOnStartFns.push(e), this._onStartFns.push(e); }
            onDone(e) { this._originalOnDoneFns.push(e), this._onDoneFns.push(e); }
            onDestroy(e) { this._onDestroyFns.push(e); }
            hasStarted() { return this._started; }
            init() { }
            play() { this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0; }
            triggerMicrotask() { Iy(() => this._onFinish()); }
            _onStart() { this._onStartFns.forEach(e => e()), this._onStartFns = []; }
            pause() { }
            restart() { }
            finish() { this._onFinish(); }
            destroy() { this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = []); }
            reset() { this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns; }
            setPosition(e) { this._position = this.totalTime ? e * this.totalTime : 1; }
            getPosition() { return this.totalTime ? this._position / this.totalTime : 1; }
            triggerCallback(e) { const n = "start" == e ? this._onStartFns : this._onDoneFns; n.forEach(r => r()), n.length = 0; }
        } class Ty {
            constructor(e) { this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = e; let n = 0, r = 0, i = 0; const o = this.players.length; 0 == o ? Iy(() => this._onFinish()) : this.players.forEach(s => { s.onDone(() => { ++n == o && this._onFinish(); }), s.onDestroy(() => { ++r == o && this._onDestroy(); }), s.onStart(() => { ++i == o && this._onStart(); }); }), this.totalTime = this.players.reduce((s, a) => Math.max(s, a.totalTime), 0); }
            _onFinish() { this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = []); }
            init() { this.players.forEach(e => e.init()); }
            onStart(e) { this._onStartFns.push(e); }
            _onStart() { this.hasStarted() || (this._started = !0, this._onStartFns.forEach(e => e()), this._onStartFns = []); }
            onDone(e) { this._onDoneFns.push(e); }
            onDestroy(e) { this._onDestroyFns.push(e); }
            hasStarted() { return this._started; }
            play() { this.parentPlayer || this.init(), this._onStart(), this.players.forEach(e => e.play()); }
            pause() { this.players.forEach(e => e.pause()); }
            restart() { this.players.forEach(e => e.restart()); }
            finish() { this._onFinish(), this.players.forEach(e => e.finish()); }
            destroy() { this._onDestroy(); }
            _onDestroy() { this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(e => e.destroy()), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = []); }
            reset() { this.players.forEach(e => e.reset()), this._destroyed = !1, this._finished = !1, this._started = !1; }
            setPosition(e) { const n = e * this.totalTime; this.players.forEach(r => { const i = r.totalTime ? Math.min(1, n / r.totalTime) : 1; r.setPosition(i); }); }
            getPosition() { const e = this.players.reduce((n, r) => null === n || r.totalTime > n.totalTime ? r : n, null); return null != e ? e.getPosition() : 0; }
            beforeDestroy() { this.players.forEach(e => { e.beforeDestroy && e.beforeDestroy(); }); }
            triggerCallback(e) { const n = "start" == e ? this._onStartFns : this._onDoneFns; n.forEach(r => r()), n.length = 0; }
        } function My(t) { return new w(3e3, !1); } function GA() { return typeof window < "u" && typeof window.document < "u"; } function Uu() { return typeof process < "u" && "[object process]" === {}.toString.call(process); } function pn(t) { switch (t.length) {
            case 0: return new Ti;
            case 1: return t[0];
            default: return new Ty(t);
        } } function Ay(t, e, n, r, i = new Map, o = new Map) { const s = [], a = []; let l = -1, u = null; if (r.forEach(c => { const d = c.get("offset"), f = d == l, h = f && u || new Map; c.forEach((p, g) => { let y = g, D = p; if ("offset" !== g)
            switch (y = e.normalizePropertyName(y, s), D) {
                case "!":
                    D = i.get(g);
                    break;
                case en:
                    D = o.get(g);
                    break;
                default: D = e.normalizeStyleValue(g, y, D, s);
            } h.set(y, D); }), f || a.push(h), u = h, l = d; }), s.length)
            throw function xA(t) { return new w(3502, !1); }(); return a; } function zu(t, e, n, r) { switch (e) {
            case "start":
                t.onStart(() => r(n && Gu(n, "start", t)));
                break;
            case "done":
                t.onDone(() => r(n && Gu(n, "done", t)));
                break;
            case "destroy": t.onDestroy(() => r(n && Gu(n, "destroy", t)));
        } } function Gu(t, e, n) { var _a; const o = qu(t.element, t.triggerName, t.fromState, t.toState, e || t.phaseName, (_a = n.totalTime) !== null && _a !== void 0 ? _a : t.totalTime, !!n.disabled), s = t._data; return null != s && (o._data = s), o; } function qu(t, e, n, r, i = "", o = 0, s) { return { element: t, triggerName: e, fromState: n, toState: r, phaseName: i, totalTime: o, disabled: !!s }; } function Xe(t, e, n) { let r = t.get(e); return r || t.set(e, r = n), r; } function Ny(t) { const e = t.indexOf(":"); return [t.substring(1, e), t.slice(e + 1)]; } let Wu = (t, e) => !1, Py = (t, e, n) => [], Fy = null; function Ku(t) { const e = t.parentNode || t.host; return e === Fy ? null : e; } (Uu() || typeof Element < "u") && (GA() ? (Fy = (() => document.documentElement)(), Wu = (t, e) => { for (; e;) {
            if (e === t)
                return !0;
            e = Ku(e);
        } return !1; }) : Wu = (t, e) => t.contains(e), Py = (t, e, n) => { if (n)
            return Array.from(t.querySelectorAll(e)); const r = t.querySelector(e); return r ? [r] : []; }); let On = null, xy = !1; const Ry = Wu, Oy = Py; let ky = (() => { class t {
            validateStyleProperty(n) { return function WA(t) { On || (On = function KA() { return typeof document < "u" ? document.body : null; }() || {}, xy = !!On.style && "WebkitAppearance" in On.style); let e = !0; return On.style && !function qA(t) { return "ebkit" == t.substring(1, 6); }(t) && (e = t in On.style, !e && xy && (e = "Webkit" + t.charAt(0).toUpperCase() + t.slice(1) in On.style)), e; }(n); }
            matchesElement(n, r) { return !1; }
            containsElement(n, r) { return Ry(n, r); }
            getParentElement(n) { return Ku(n); }
            query(n, r, i) { return Oy(n, r, i); }
            computeStyle(n, r, i) { return i || ""; }
            animate(n, r, i, o, s, a = [], l) { return new Ti(i, o); }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(), Qu = (() => { class t {
        } return t.NOOP = new ky, t; })(); const Zu = "ng-enter", ps = "ng-leave", gs = "ng-trigger", ms = ".ng-trigger", Vy = "ng-animating", Yu = ".ng-animating"; function tn(t) { if ("number" == typeof t)
            return t; const e = t.match(/^(-?[\.\d]+)(m?s)/); return !e || e.length < 2 ? 0 : Ju(parseFloat(e[1]), e[2]); } function Ju(t, e) { return "s" === e ? 1e3 * t : t; } function ys(t, e, n) { return t.hasOwnProperty("duration") ? t : function YA(t, e, n) { let i, o = 0, s = ""; if ("string" == typeof t) {
            const a = t.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
            if (null === a)
                return e.push(My()), { duration: 0, delay: 0, easing: "" };
            i = Ju(parseFloat(a[1]), a[2]);
            const l = a[3];
            null != l && (o = Ju(parseFloat(l), a[4]));
            const u = a[5];
            u && (s = u);
        }
        else
            i = t; if (!n) {
            let a = !1, l = e.length;
            i < 0 && (e.push(function dA() { return new w(3100, !1); }()), a = !0), o < 0 && (e.push(function fA() { return new w(3101, !1); }()), a = !0), a && e.splice(l, 0, My());
        } return { duration: i, delay: o, easing: s }; }(t, e, n); } function Mi(t, e = {}) { return Object.keys(t).forEach(n => { e[n] = t[n]; }), e; } function By(t) { const e = new Map; return Object.keys(t).forEach(n => { e.set(n, t[n]); }), e; } function gn(t, e = new Map, n) { if (n)
            for (let [r, i] of n)
                e.set(r, i); for (let [r, i] of t)
            e.set(r, i); return e; } function Hy(t, e, n) { return n ? e + ":" + n + ";" : ""; } function $y(t) { let e = ""; for (let n = 0; n < t.style.length; n++) {
            const r = t.style.item(n);
            e += Hy(0, r, t.style.getPropertyValue(r));
        } for (const n in t.style)
            t.style.hasOwnProperty(n) && !n.startsWith("_") && (e += Hy(0, tN(n), t.style[n])); t.setAttribute("style", e); } function Lt(t, e, n) { t.style && (e.forEach((r, i) => { const o = ec(i); n && !n.has(i) && n.set(i, t.style[o]), t.style[o] = r; }), Uu() && $y(t)); } function kn(t, e) { t.style && (e.forEach((n, r) => { const i = ec(r); t.style[i] = ""; }), Uu() && $y(t)); } function Ai(t) { return Array.isArray(t) ? 1 == t.length ? t[0] : by(t) : t; } const Xu = new RegExp("{{\\s*(.+?)\\s*}}", "g"); function Uy(t) { let e = []; if ("string" == typeof t) {
            let n;
            for (; n = Xu.exec(t);)
                e.push(n[1]);
            Xu.lastIndex = 0;
        } return e; } function Ni(t, e, n) { const r = t.toString(), i = r.replace(Xu, (o, s) => { let a = e[s]; return null == a && (n.push(function pA(t) { return new w(3003, !1); }()), a = ""), a.toString(); }); return i == r ? t : i; } function Ds(t) { const e = []; let n = t.next(); for (; !n.done;)
            e.push(n.value), n = t.next(); return e; } const eN = /-+([a-z0-9])/g; function ec(t) { return t.replace(eN, (...e) => e[1].toUpperCase()); } function tN(t) { return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); } function et(t, e, n) { switch (e.type) {
            case 7: return t.visitTrigger(e, n);
            case 0: return t.visitState(e, n);
            case 1: return t.visitTransition(e, n);
            case 2: return t.visitSequence(e, n);
            case 3: return t.visitGroup(e, n);
            case 4: return t.visitAnimate(e, n);
            case 5: return t.visitKeyframes(e, n);
            case 6: return t.visitStyle(e, n);
            case 8: return t.visitReference(e, n);
            case 9: return t.visitAnimateChild(e, n);
            case 10: return t.visitAnimateRef(e, n);
            case 11: return t.visitQuery(e, n);
            case 12: return t.visitStagger(e, n);
            default: throw function gA(t) { return new w(3004, !1); }();
        } } function zy(t, e) { return window.getComputedStyle(t)[e]; } function aN(t, e) { const n = []; return "string" == typeof t ? t.split(/\s*,\s*/).forEach(r => function lN(t, e, n) { if (":" == t[0]) {
            const l = function uN(t, e) { switch (t) {
                case ":enter": return "void => *";
                case ":leave": return "* => void";
                case ":increment": return (n, r) => parseFloat(r) > parseFloat(n);
                case ":decrement": return (n, r) => parseFloat(r) < parseFloat(n);
                default: return e.push(function AA(t) { return new w(3016, !1); }()), "* => *";
            } }(t, n);
            if ("function" == typeof l)
                return void e.push(l);
            t = l;
        } const r = t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/); if (null == r || r.length < 4)
            return n.push(function MA(t) { return new w(3015, !1); }()), e; const i = r[1], o = r[2], s = r[3]; e.push(Gy(i, s)); "<" == o[0] && !("*" == i && "*" == s) && e.push(Gy(s, i)); }(r, n, e)) : n.push(t), n; } const Es = new Set(["true", "1"]), Cs = new Set(["false", "0"]); function Gy(t, e) { const n = Es.has(t) || Cs.has(t), r = Es.has(e) || Cs.has(e); return (i, o) => { let s = "*" == t || t == i, a = "*" == e || e == o; return !s && n && "boolean" == typeof i && (s = i ? Es.has(t) : Cs.has(t)), !a && r && "boolean" == typeof o && (a = o ? Es.has(e) : Cs.has(e)), s && a; }; } const cN = new RegExp("s*:selfs*,?", "g"); function tc(t, e, n, r) { return new dN(t).build(e, n, r); } class dN {
            constructor(e) { this._driver = e; }
            build(e, n, r) { const i = new pN(n); return this._resetContextStyleTimingState(i), et(this, Ai(e), i); }
            _resetContextStyleTimingState(e) { e.currentQuerySelector = "", e.collectedStyles = new Map, e.collectedStyles.set("", new Map), e.currentTime = 0; }
            visitTrigger(e, n) { let r = n.queryCount = 0, i = n.depCount = 0; const o = [], s = []; return "@" == e.name.charAt(0) && n.errors.push(function yA() { return new w(3006, !1); }()), e.definitions.forEach(a => { if (this._resetContextStyleTimingState(n), 0 == a.type) {
                const l = a, u = l.name;
                u.toString().split(/\s*,\s*/).forEach(c => { l.name = c, o.push(this.visitState(l, n)); }), l.name = u;
            }
            else if (1 == a.type) {
                const l = this.visitTransition(a, n);
                r += l.queryCount, i += l.depCount, s.push(l);
            }
            else
                n.errors.push(function DA() { return new w(3007, !1); }()); }), { type: 7, name: e.name, states: o, transitions: s, queryCount: r, depCount: i, options: null }; }
            visitState(e, n) { const r = this.visitStyle(e.styles, n), i = e.options && e.options.params || null; if (r.containsDynamicStyles) {
                const o = new Set, s = i || {};
                r.styles.forEach(a => { a instanceof Map && a.forEach(l => { Uy(l).forEach(u => { s.hasOwnProperty(u) || o.add(u); }); }); }), o.size && (Ds(o.values()), n.errors.push(function vA(t, e) { return new w(3008, !1); }()));
            } return { type: 0, name: e.name, style: r, options: i ? { params: i } : null }; }
            visitTransition(e, n) { n.queryCount = 0, n.depCount = 0; const r = et(this, Ai(e.animation), n); return { type: 1, matchers: aN(e.expr, n.errors), animation: r, queryCount: n.queryCount, depCount: n.depCount, options: Ln(e.options) }; }
            visitSequence(e, n) { return { type: 2, steps: e.steps.map(r => et(this, r, n)), options: Ln(e.options) }; }
            visitGroup(e, n) { const r = n.currentTime; let i = 0; const o = e.steps.map(s => { n.currentTime = r; const a = et(this, s, n); return i = Math.max(i, n.currentTime), a; }); return n.currentTime = i, { type: 3, steps: o, options: Ln(e.options) }; }
            visitAnimate(e, n) { const r = function mN(t, e) { if (t.hasOwnProperty("duration"))
                return t; if ("number" == typeof t)
                return nc(ys(t, e).duration, 0, ""); const n = t; if (n.split(/\s+/).some(o => "{" == o.charAt(0) && "{" == o.charAt(1))) {
                const o = nc(0, 0, "");
                return o.dynamic = !0, o.strValue = n, o;
            } const i = ys(n, e); return nc(i.duration, i.delay, i.easing); }(e.timings, n.errors); n.currentAnimateTimings = r; let i, o = e.styles ? e.styles : Sy({}); if (5 == o.type)
                i = this.visitKeyframes(o, n);
            else {
                let s = e.styles, a = !1;
                if (!s) {
                    a = !0;
                    const u = {};
                    r.easing && (u.easing = r.easing), s = Sy(u);
                }
                n.currentTime += r.duration + r.delay;
                const l = this.visitStyle(s, n);
                l.isEmptyStep = a, i = l;
            } return n.currentAnimateTimings = null, { type: 4, timings: r, style: i, options: null }; }
            visitStyle(e, n) { const r = this._makeStyleAst(e, n); return this._validateStyleAst(r, n), r; }
            _makeStyleAst(e, n) { const r = [], i = Array.isArray(e.styles) ? e.styles : [e.styles]; for (let a of i)
                "string" == typeof a ? a === en ? r.push(a) : n.errors.push(new w(3002, !1)) : r.push(By(a)); let o = !1, s = null; return r.forEach(a => { if (a instanceof Map && (a.has("easing") && (s = a.get("easing"), a.delete("easing")), !o))
                for (let l of a.values())
                    if (l.toString().indexOf("{{") >= 0) {
                        o = !0;
                        break;
                    } }), { type: 6, styles: r, easing: s, offset: e.offset, containsDynamicStyles: o, options: null }; }
            _validateStyleAst(e, n) { const r = n.currentAnimateTimings; let i = n.currentTime, o = n.currentTime; r && o > 0 && (o -= r.duration + r.delay), e.styles.forEach(s => { "string" != typeof s && s.forEach((a, l) => { const u = n.collectedStyles.get(n.currentQuerySelector), c = u.get(l); let d = !0; c && (o != i && o >= c.startTime && i <= c.endTime && (n.errors.push(function wA(t, e, n, r, i) { return new w(3010, !1); }()), d = !1), o = c.startTime), d && u.set(l, { startTime: o, endTime: i }), n.options && function XA(t, e, n) { const r = e.params || {}, i = Uy(t); i.length && i.forEach(o => { r.hasOwnProperty(o) || n.push(function hA(t) { return new w(3001, !1); }()); }); }(a, n.options, n.errors); }); }); }
            visitKeyframes(e, n) { const r = { type: 5, styles: [], options: null }; if (!n.currentAnimateTimings)
                return n.errors.push(function EA() { return new w(3011, !1); }()), r; let o = 0; const s = []; let a = !1, l = !1, u = 0; const c = e.steps.map(D => { const _ = this._makeStyleAst(D, n); let m = null != _.offset ? _.offset : function gN(t) { if ("string" == typeof t)
                return null; let e = null; if (Array.isArray(t))
                t.forEach(n => { if (n instanceof Map && n.has("offset")) {
                    const r = n;
                    e = parseFloat(r.get("offset")), r.delete("offset");
                } });
            else if (t instanceof Map && t.has("offset")) {
                const n = t;
                e = parseFloat(n.get("offset")), n.delete("offset");
            } return e; }(_.styles), b = 0; return null != m && (o++, b = _.offset = m), l = l || b < 0 || b > 1, a = a || b < u, u = b, s.push(b), _; }); l && n.errors.push(function CA() { return new w(3012, !1); }()), a && n.errors.push(function bA() { return new w(3200, !1); }()); const d = e.steps.length; let f = 0; o > 0 && o < d ? n.errors.push(function SA() { return new w(3202, !1); }()) : 0 == o && (f = 1 / (d - 1)); const h = d - 1, p = n.currentTime, g = n.currentAnimateTimings, y = g.duration; return c.forEach((D, _) => { const m = f > 0 ? _ == h ? 1 : f * _ : s[_], b = m * y; n.currentTime = p + g.delay + b, g.duration = b, this._validateStyleAst(D, n), D.offset = m, r.styles.push(D); }), r; }
            visitReference(e, n) { return { type: 8, animation: et(this, Ai(e.animation), n), options: Ln(e.options) }; }
            visitAnimateChild(e, n) { return n.depCount++, { type: 9, options: Ln(e.options) }; }
            visitAnimateRef(e, n) { return { type: 10, animation: this.visitReference(e.animation, n), options: Ln(e.options) }; }
            visitQuery(e, n) { const r = n.currentQuerySelector, i = e.options || {}; n.queryCount++, n.currentQuery = e; const [o, s] = function fN(t) { const e = !!t.split(/\s*,\s*/).find(n => ":self" == n); return e && (t = t.replace(cN, "")), t = t.replace(/@\*/g, ms).replace(/@\w+/g, n => ms + "-" + n.slice(1)).replace(/:animating/g, Yu), [t, e]; }(e.selector); n.currentQuerySelector = r.length ? r + " " + o : o, Xe(n.collectedStyles, n.currentQuerySelector, new Map); const a = et(this, Ai(e.animation), n); return n.currentQuery = null, n.currentQuerySelector = r, { type: 11, selector: o, limit: i.limit || 0, optional: !!i.optional, includeSelf: s, animation: a, originalSelector: e.selector, options: Ln(e.options) }; }
            visitStagger(e, n) { n.currentQuery || n.errors.push(function IA() { return new w(3013, !1); }()); const r = "full" === e.timings ? { duration: 0, delay: 0, easing: "full" } : ys(e.timings, n.errors, !0); return { type: 12, animation: et(this, Ai(e.animation), n), timings: r, options: null }; }
        } class pN {
            constructor(e) { this.errors = e, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = new Map, this.options = null, this.unsupportedCSSPropertiesFound = new Set; }
        } function Ln(t) { return t ? (t = Mi(t)).params && (t.params = function hN(t) { return t ? Mi(t) : null; }(t.params)) : t = {}, t; } function nc(t, e, n) { return { duration: t, delay: e, easing: n }; } function rc(t, e, n, r, i, o, s = null, a = !1) { return { type: 1, element: t, keyframes: e, preStyleProps: n, postStyleProps: r, duration: i, delay: o, totalTime: i + o, easing: s, subTimeline: a }; } class bs {
            constructor() { this._map = new Map; }
            get(e) { return this._map.get(e) || []; }
            append(e, n) { let r = this._map.get(e); r || this._map.set(e, r = []), r.push(...n); }
            has(e) { return this._map.has(e); }
            clear() { this._map.clear(); }
        } const vN = new RegExp(":enter", "g"), wN = new RegExp(":leave", "g"); function ic(t, e, n, r, i, o = new Map, s = new Map, a, l, u = []) { return (new EN).buildKeyframes(t, e, n, r, i, o, s, a, l, u); } class EN {
            buildKeyframes(e, n, r, i, o, s, a, l, u, c = []) { u = u || new bs; const d = new oc(e, n, u, i, o, c, []); d.options = l; const f = l.delay ? tn(l.delay) : 0; d.currentTimeline.delayNextStep(f), d.currentTimeline.setStyles([s], null, d.errors, l), et(this, r, d); const h = d.timelines.filter(p => p.containsAnimation()); if (h.length && a.size) {
                let p;
                for (let g = h.length - 1; g >= 0; g--) {
                    const y = h[g];
                    if (y.element === n) {
                        p = y;
                        break;
                    }
                }
                p && !p.allowOnlyTimelineStyles() && p.setStyles([a], null, d.errors, l);
            } return h.length ? h.map(p => p.buildKeyframes()) : [rc(n, [], [], [], 0, f, "", !1)]; }
            visitTrigger(e, n) { }
            visitState(e, n) { }
            visitTransition(e, n) { }
            visitAnimateChild(e, n) { const r = n.subInstructions.get(n.element); if (r) {
                const i = n.createSubContext(e.options), o = n.currentTimeline.currentTime, s = this._visitSubInstructions(r, i, i.options);
                o != s && n.transformIntoNewTimeline(s);
            } n.previousNode = e; }
            visitAnimateRef(e, n) { const r = n.createSubContext(e.options); r.transformIntoNewTimeline(), this._applyAnimationRefDelays([e.options, e.animation.options], n, r), this.visitReference(e.animation, r), n.transformIntoNewTimeline(r.currentTimeline.currentTime), n.previousNode = e; }
            _applyAnimationRefDelays(e, n, r) { var _a; for (const i of e) {
                const o = i === null || i === void 0 ? void 0 : i.delay;
                if (o) {
                    const s = "number" == typeof o ? o : tn(Ni(o, (_a = i === null || i === void 0 ? void 0 : i.params) !== null && _a !== void 0 ? _a : {}, n.errors));
                    r.delayNextStep(s);
                }
            } }
            _visitSubInstructions(e, n, r) { let o = n.currentTimeline.currentTime; const s = null != r.duration ? tn(r.duration) : null, a = null != r.delay ? tn(r.delay) : null; return 0 !== s && e.forEach(l => { const u = n.appendInstructionToTimeline(l, s, a); o = Math.max(o, u.duration + u.delay); }), o; }
            visitReference(e, n) { n.updateOptions(e.options, !0), et(this, e.animation, n), n.previousNode = e; }
            visitSequence(e, n) { const r = n.subContextCount; let i = n; const o = e.options; if (o && (o.params || o.delay) && (i = n.createSubContext(o), i.transformIntoNewTimeline(), null != o.delay)) {
                6 == i.previousNode.type && (i.currentTimeline.snapshotCurrentStyles(), i.previousNode = Ss);
                const s = tn(o.delay);
                i.delayNextStep(s);
            } e.steps.length && (e.steps.forEach(s => et(this, s, i)), i.currentTimeline.applyStylesToKeyframe(), i.subContextCount > r && i.transformIntoNewTimeline()), n.previousNode = e; }
            visitGroup(e, n) { const r = []; let i = n.currentTimeline.currentTime; const o = e.options && e.options.delay ? tn(e.options.delay) : 0; e.steps.forEach(s => { const a = n.createSubContext(e.options); o && a.delayNextStep(o), et(this, s, a), i = Math.max(i, a.currentTimeline.currentTime), r.push(a.currentTimeline); }), r.forEach(s => n.currentTimeline.mergeTimelineCollectedStyles(s)), n.transformIntoNewTimeline(i), n.previousNode = e; }
            _visitTiming(e, n) { if (e.dynamic) {
                const r = e.strValue;
                return ys(n.params ? Ni(r, n.params, n.errors) : r, n.errors);
            } return { duration: e.duration, delay: e.delay, easing: e.easing }; }
            visitAnimate(e, n) { const r = n.currentAnimateTimings = this._visitTiming(e.timings, n), i = n.currentTimeline; r.delay && (n.incrementTime(r.delay), i.snapshotCurrentStyles()); const o = e.style; 5 == o.type ? this.visitKeyframes(o, n) : (n.incrementTime(r.duration), this.visitStyle(o, n), i.applyStylesToKeyframe()), n.currentAnimateTimings = null, n.previousNode = e; }
            visitStyle(e, n) { const r = n.currentTimeline, i = n.currentAnimateTimings; !i && r.hasCurrentStyleProperties() && r.forwardFrame(); const o = i && i.easing || e.easing; e.isEmptyStep ? r.applyEmptyStep(o) : r.setStyles(e.styles, o, n.errors, n.options), n.previousNode = e; }
            visitKeyframes(e, n) { const r = n.currentAnimateTimings, i = n.currentTimeline.duration, o = r.duration, a = n.createSubContext().currentTimeline; a.easing = r.easing, e.styles.forEach(l => { a.forwardTime((l.offset || 0) * o), a.setStyles(l.styles, l.easing, n.errors, n.options), a.applyStylesToKeyframe(); }), n.currentTimeline.mergeTimelineCollectedStyles(a), n.transformIntoNewTimeline(i + o), n.previousNode = e; }
            visitQuery(e, n) { const r = n.currentTimeline.currentTime, i = e.options || {}, o = i.delay ? tn(i.delay) : 0; o && (6 === n.previousNode.type || 0 == r && n.currentTimeline.hasCurrentStyleProperties()) && (n.currentTimeline.snapshotCurrentStyles(), n.previousNode = Ss); let s = r; const a = n.invokeQuery(e.selector, e.originalSelector, e.limit, e.includeSelf, !!i.optional, n.errors); n.currentQueryTotal = a.length; let l = null; a.forEach((u, c) => { n.currentQueryIndex = c; const d = n.createSubContext(e.options, u); o && d.delayNextStep(o), u === n.element && (l = d.currentTimeline), et(this, e.animation, d), d.currentTimeline.applyStylesToKeyframe(), s = Math.max(s, d.currentTimeline.currentTime); }), n.currentQueryIndex = 0, n.currentQueryTotal = 0, n.transformIntoNewTimeline(s), l && (n.currentTimeline.mergeTimelineCollectedStyles(l), n.currentTimeline.snapshotCurrentStyles()), n.previousNode = e; }
            visitStagger(e, n) { const r = n.parentContext, i = n.currentTimeline, o = e.timings, s = Math.abs(o.duration), a = s * (n.currentQueryTotal - 1); let l = s * n.currentQueryIndex; switch (o.duration < 0 ? "reverse" : o.easing) {
                case "reverse":
                    l = a - l;
                    break;
                case "full": l = r.currentStaggerTime;
            } const c = n.currentTimeline; l && c.delayNextStep(l); const d = c.currentTime; et(this, e.animation, n), n.previousNode = e, r.currentStaggerTime = i.currentTime - d + (i.startTime - r.currentTimeline.startTime); }
        } const Ss = {}; class oc {
            constructor(e, n, r, i, o, s, a, l) { this._driver = e, this.element = n, this.subInstructions = r, this._enterClassName = i, this._leaveClassName = o, this.errors = s, this.timelines = a, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Ss, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = l || new Is(this._driver, n, 0), a.push(this.currentTimeline); }
            get params() { return this.options.params; }
            updateOptions(e, n) { if (!e)
                return; const r = e; let i = this.options; null != r.duration && (i.duration = tn(r.duration)), null != r.delay && (i.delay = tn(r.delay)); const o = r.params; if (o) {
                let s = i.params;
                s || (s = this.options.params = {}), Object.keys(o).forEach(a => { (!n || !s.hasOwnProperty(a)) && (s[a] = Ni(o[a], s, this.errors)); });
            } }
            _copyOptions() { const e = {}; if (this.options) {
                const n = this.options.params;
                if (n) {
                    const r = e.params = {};
                    Object.keys(n).forEach(i => { r[i] = n[i]; });
                }
            } return e; }
            createSubContext(e = null, n, r) { const i = n || this.element, o = new oc(this._driver, i, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(i, r || 0)); return o.previousNode = this.previousNode, o.currentAnimateTimings = this.currentAnimateTimings, o.options = this._copyOptions(), o.updateOptions(e), o.currentQueryIndex = this.currentQueryIndex, o.currentQueryTotal = this.currentQueryTotal, o.parentContext = this, this.subContextCount++, o; }
            transformIntoNewTimeline(e) { return this.previousNode = Ss, this.currentTimeline = this.currentTimeline.fork(this.element, e), this.timelines.push(this.currentTimeline), this.currentTimeline; }
            appendInstructionToTimeline(e, n, r) { const i = { duration: n !== null && n !== void 0 ? n : e.duration, delay: this.currentTimeline.currentTime + (r !== null && r !== void 0 ? r : 0) + e.delay, easing: "" }, o = new CN(this._driver, e.element, e.keyframes, e.preStyleProps, e.postStyleProps, i, e.stretchStartingKeyframe); return this.timelines.push(o), i; }
            incrementTime(e) { this.currentTimeline.forwardTime(this.currentTimeline.duration + e); }
            delayNextStep(e) { e > 0 && this.currentTimeline.delayNextStep(e); }
            invokeQuery(e, n, r, i, o, s) { let a = []; if (i && a.push(this.element), e.length > 0) {
                e = (e = e.replace(vN, "." + this._enterClassName)).replace(wN, "." + this._leaveClassName);
                let u = this._driver.query(this.element, e, 1 != r);
                0 !== r && (u = r < 0 ? u.slice(u.length + r, u.length) : u.slice(0, r)), a.push(...u);
            } return !o && 0 == a.length && s.push(function TA(t) { return new w(3014, !1); }()), a; }
        } class Is {
            constructor(e, n, r, i) { this._driver = e, this.element = n, this.startTime = r, this._elementTimelineStylesLookup = i, this.duration = 0, this._previousKeyframe = new Map, this._currentKeyframe = new Map, this._keyframes = new Map, this._styleSummary = new Map, this._localTimelineStyles = new Map, this._pendingStyles = new Map, this._backFill = new Map, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(n), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(n, this._localTimelineStyles)), this._loadKeyframe(); }
            containsAnimation() { switch (this._keyframes.size) {
                case 0: return !1;
                case 1: return this.hasCurrentStyleProperties();
                default: return !0;
            } }
            hasCurrentStyleProperties() { return this._currentKeyframe.size > 0; }
            get currentTime() { return this.startTime + this.duration; }
            delayNextStep(e) { const n = 1 === this._keyframes.size && this._pendingStyles.size; this.duration || n ? (this.forwardTime(this.currentTime + e), n && this.snapshotCurrentStyles()) : this.startTime += e; }
            fork(e, n) { return this.applyStylesToKeyframe(), new Is(this._driver, e, n || this.currentTime, this._elementTimelineStylesLookup); }
            _loadKeyframe() { this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = new Map, this._keyframes.set(this.duration, this._currentKeyframe)); }
            forwardFrame() { this.duration += 1, this._loadKeyframe(); }
            forwardTime(e) { this.applyStylesToKeyframe(), this.duration = e, this._loadKeyframe(); }
            _updateStyle(e, n) { this._localTimelineStyles.set(e, n), this._globalTimelineStyles.set(e, n), this._styleSummary.set(e, { time: this.currentTime, value: n }); }
            allowOnlyTimelineStyles() { return this._currentEmptyStepKeyframe !== this._currentKeyframe; }
            applyEmptyStep(e) { e && this._previousKeyframe.set("easing", e); for (let [n, r] of this._globalTimelineStyles)
                this._backFill.set(n, r || en), this._currentKeyframe.set(n, en); this._currentEmptyStepKeyframe = this._currentKeyframe; }
            setStyles(e, n, r, i) { var _a; n && this._previousKeyframe.set("easing", n); const o = i && i.params || {}, s = function bN(t, e) { const n = new Map; let r; return t.forEach(i => { if ("*" === i) {
                r = r || e.keys();
                for (let o of r)
                    n.set(o, en);
            }
            else
                gn(i, n); }), n; }(e, this._globalTimelineStyles); for (let [a, l] of s) {
                const u = Ni(l, o, r);
                this._pendingStyles.set(a, u), this._localTimelineStyles.has(a) || this._backFill.set(a, (_a = this._globalTimelineStyles.get(a)) !== null && _a !== void 0 ? _a : en), this._updateStyle(a, u);
            } }
            applyStylesToKeyframe() { 0 != this._pendingStyles.size && (this._pendingStyles.forEach((e, n) => { this._currentKeyframe.set(n, e); }), this._pendingStyles.clear(), this._localTimelineStyles.forEach((e, n) => { this._currentKeyframe.has(n) || this._currentKeyframe.set(n, e); })); }
            snapshotCurrentStyles() { for (let [e, n] of this._localTimelineStyles)
                this._pendingStyles.set(e, n), this._updateStyle(e, n); }
            getFinalKeyframe() { return this._keyframes.get(this.duration); }
            get properties() { const e = []; for (let n in this._currentKeyframe)
                e.push(n); return e; }
            mergeTimelineCollectedStyles(e) { e._styleSummary.forEach((n, r) => { const i = this._styleSummary.get(r); (!i || n.time > i.time) && this._updateStyle(r, n.value); }); }
            buildKeyframes() { this.applyStylesToKeyframe(); const e = new Set, n = new Set, r = 1 === this._keyframes.size && 0 === this.duration; let i = []; this._keyframes.forEach((a, l) => { const u = gn(a, new Map, this._backFill); u.forEach((c, d) => { "!" === c ? e.add(d) : c === en && n.add(d); }), r || u.set("offset", l / this.duration), i.push(u); }); const o = e.size ? Ds(e.values()) : [], s = n.size ? Ds(n.values()) : []; if (r) {
                const a = i[0], l = new Map(a);
                a.set("offset", 0), l.set("offset", 1), i = [a, l];
            } return rc(this.element, i, o, s, this.duration, this.startTime, this.easing, !1); }
        } class CN extends Is {
            constructor(e, n, r, i, o, s, a = !1) { super(e, n, s.delay), this.keyframes = r, this.preStyleProps = i, this.postStyleProps = o, this._stretchStartingKeyframe = a, this.timings = { duration: s.duration, delay: s.delay, easing: s.easing }; }
            containsAnimation() { return this.keyframes.length > 1; }
            buildKeyframes() { let e = this.keyframes, { delay: n, duration: r, easing: i } = this.timings; if (this._stretchStartingKeyframe && n) {
                const o = [], s = r + n, a = n / s, l = gn(e[0]);
                l.set("offset", 0), o.push(l);
                const u = gn(e[0]);
                u.set("offset", Ky(a)), o.push(u);
                const c = e.length - 1;
                for (let d = 1; d <= c; d++) {
                    let f = gn(e[d]);
                    const h = f.get("offset");
                    f.set("offset", Ky((n + h * r) / s)), o.push(f);
                }
                r = s, n = 0, i = "", e = o;
            } return rc(this.element, e, this.preStyleProps, this.postStyleProps, r, n, i, !0); }
        } function Ky(t, e = 3) { const n = Math.pow(10, e - 1); return Math.round(t * n) / n; } class sc {
        } const SN = new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]); class IN extends sc {
            normalizePropertyName(e, n) { return ec(e); }
            normalizeStyleValue(e, n, r, i) { let o = ""; const s = r.toString().trim(); if (SN.has(n) && 0 !== r && "0" !== r)
                if ("number" == typeof r)
                    o = "px";
                else {
                    const a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
                    a && 0 == a[1].length && i.push(function mA(t, e) { return new w(3005, !1); }());
                } return s + o; }
        } function Qy(t, e, n, r, i, o, s, a, l, u, c, d, f) { return { type: 0, element: t, triggerName: e, isRemovalTransition: i, fromState: n, fromStyles: o, toState: r, toStyles: s, timelines: a, queriedElements: l, preStyleProps: u, postStyleProps: c, totalTime: d, errors: f }; } const ac = {}; class Zy {
            constructor(e, n, r) { this._triggerName = e, this.ast = n, this._stateStyles = r; }
            match(e, n, r, i) { return function TN(t, e, n, r, i) { return t.some(o => o(e, n, r, i)); }(this.ast.matchers, e, n, r, i); }
            buildStyles(e, n, r) { let i = this._stateStyles.get("*"); return void 0 !== e && (i = this._stateStyles.get(e === null || e === void 0 ? void 0 : e.toString()) || i), i ? i.buildStyles(n, r) : new Map; }
            build(e, n, r, i, o, s, a, l, u, c) { var _a; const d = [], f = this.ast.options && this.ast.options.params || ac, p = this.buildStyles(r, a && a.params || ac, d), g = l && l.params || ac, y = this.buildStyles(i, g, d), D = new Set, _ = new Map, m = new Map, b = "void" === i, V = { params: MN(g, f), delay: (_a = this.ast.options) === null || _a === void 0 ? void 0 : _a.delay }, z = c ? [] : ic(e, n, this.ast.animation, o, s, p, y, V, u, d); let le = 0; if (z.forEach(nt => { le = Math.max(nt.duration + nt.delay, le); }), d.length)
                return Qy(n, this._triggerName, r, i, b, p, y, [], [], _, m, le, d); z.forEach(nt => { const rt = nt.element, Mr = Xe(_, rt, new Set); nt.preStyleProps.forEach(Mt => Mr.add(Mt)); const nn = Xe(m, rt, new Set); nt.postStyleProps.forEach(Mt => nn.add(Mt)), rt !== n && D.add(rt); }); const tt = Ds(D.values()); return Qy(n, this._triggerName, r, i, b, p, y, z, tt, _, m, le); }
        } function MN(t, e) { const n = Mi(e); for (const r in t)
            t.hasOwnProperty(r) && null != t[r] && (n[r] = t[r]); return n; } class AN {
            constructor(e, n, r) { this.styles = e, this.defaultParams = n, this.normalizer = r; }
            buildStyles(e, n) { const r = new Map, i = Mi(this.defaultParams); return Object.keys(e).forEach(o => { const s = e[o]; null !== s && (i[o] = s); }), this.styles.styles.forEach(o => { "string" != typeof o && o.forEach((s, a) => { s && (s = Ni(s, i, n)); const l = this.normalizer.normalizePropertyName(a, n); s = this.normalizer.normalizeStyleValue(a, l, s, n), r.set(l, s); }); }), r; }
        } class PN {
            constructor(e, n, r) { this.name = e, this.ast = n, this._normalizer = r, this.transitionFactories = [], this.states = new Map, n.states.forEach(i => { this.states.set(i.name, new AN(i.style, i.options && i.options.params || {}, r)); }), Yy(this.states, "true", "1"), Yy(this.states, "false", "0"), n.transitions.forEach(i => { this.transitionFactories.push(new Zy(e, i, this.states)); }), this.fallbackTransition = function FN(t, e, n) { return new Zy(t, { type: 1, animation: { type: 2, steps: [], options: null }, matchers: [(s, a) => !0], options: null, queryCount: 0, depCount: 0 }, e); }(e, this.states); }
            get containsQueries() { return this.ast.queryCount > 0; }
            matchTransition(e, n, r, i) { return this.transitionFactories.find(s => s.match(e, n, r, i)) || null; }
            matchStyles(e, n, r) { return this.fallbackTransition.buildStyles(e, n, r); }
        } function Yy(t, e, n) { t.has(e) ? t.has(n) || t.set(n, t.get(e)) : t.has(n) && t.set(e, t.get(n)); } const xN = new bs; class RN {
            constructor(e, n, r) { this.bodyNode = e, this._driver = n, this._normalizer = r, this._animations = new Map, this._playersById = new Map, this.players = []; }
            register(e, n) { const r = [], o = tc(this._driver, n, r, []); if (r.length)
                throw function RA(t) { return new w(3503, !1); }(); this._animations.set(e, o); }
            _buildPlayer(e, n, r) { const i = e.element, o = Ay(0, this._normalizer, 0, e.keyframes, n, r); return this._driver.animate(i, o, e.duration, e.delay, e.easing, [], !0); }
            create(e, n, r = {}) { const i = [], o = this._animations.get(e); let s; const a = new Map; if (o ? (s = ic(this._driver, n, o, Zu, ps, new Map, new Map, r, xN, i), s.forEach(c => { const d = Xe(a, c.element, new Map); c.postStyleProps.forEach(f => d.set(f, null)); })) : (i.push(function OA() { return new w(3300, !1); }()), s = []), i.length)
                throw function kA(t) { return new w(3504, !1); }(); a.forEach((c, d) => { c.forEach((f, h) => { c.set(h, this._driver.computeStyle(d, h, en)); }); }); const u = pn(s.map(c => { const d = a.get(c.element); return this._buildPlayer(c, new Map, d); })); return this._playersById.set(e, u), u.onDestroy(() => this.destroy(e)), this.players.push(u), u; }
            destroy(e) { const n = this._getPlayer(e); n.destroy(), this._playersById.delete(e); const r = this.players.indexOf(n); r >= 0 && this.players.splice(r, 1); }
            _getPlayer(e) { const n = this._playersById.get(e); if (!n)
                throw function LA(t) { return new w(3301, !1); }(); return n; }
            listen(e, n, r, i) { const o = qu(n, "", "", ""); return zu(this._getPlayer(e), r, o, i), () => { }; }
            command(e, n, r, i) { if ("register" == r)
                return void this.register(e, i[0]); if ("create" == r)
                return void this.create(e, n, i[0] || {}); const o = this._getPlayer(e); switch (r) {
                case "play":
                    o.play();
                    break;
                case "pause":
                    o.pause();
                    break;
                case "reset":
                    o.reset();
                    break;
                case "restart":
                    o.restart();
                    break;
                case "finish":
                    o.finish();
                    break;
                case "init":
                    o.init();
                    break;
                case "setPosition":
                    o.setPosition(parseFloat(i[0]));
                    break;
                case "destroy": this.destroy(e);
            } }
        } const Jy = "ng-animate-queued", lc = "ng-animate-disabled", BN = [], Xy = { namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1 }, jN = { namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0 }, ft = "__ng_removed"; class uc {
            constructor(e, n = "") { this.namespaceId = n; const r = e && e.hasOwnProperty("value"); if (this.value = function zN(t) { return t !== null && t !== void 0 ? t : null; }(r ? e.value : e), r) {
                const o = Mi(e);
                delete o.value, this.options = o;
            }
            else
                this.options = {}; this.options.params || (this.options.params = {}); }
            get params() { return this.options.params; }
            absorbOptions(e) { const n = e.params; if (n) {
                const r = this.options.params;
                Object.keys(n).forEach(i => { null == r[i] && (r[i] = n[i]); });
            } }
        } const Pi = "void", cc = new uc(Pi); class HN {
            constructor(e, n, r) { this.id = e, this.hostElement = n, this._engine = r, this.players = [], this._triggers = new Map, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + e, ht(n, this._hostClassName); }
            listen(e, n, r, i) { if (!this._triggers.has(n))
                throw function VA(t, e) { return new w(3302, !1); }(); if (null == r || 0 == r.length)
                throw function BA(t) { return new w(3303, !1); }(); if (!function GN(t) { return "start" == t || "done" == t; }(r))
                throw function jA(t, e) { return new w(3400, !1); }(); const o = Xe(this._elementListeners, e, []), s = { name: n, phase: r, callback: i }; o.push(s); const a = Xe(this._engine.statesByElement, e, new Map); return a.has(n) || (ht(e, gs), ht(e, gs + "-" + n), a.set(n, cc)), () => { this._engine.afterFlush(() => { const l = o.indexOf(s); l >= 0 && o.splice(l, 1), this._triggers.has(n) || a.delete(n); }); }; }
            register(e, n) { return !this._triggers.has(e) && (this._triggers.set(e, n), !0); }
            _getTrigger(e) { const n = this._triggers.get(e); if (!n)
                throw function HA(t) { return new w(3401, !1); }(); return n; }
            trigger(e, n, r, i = !0) { const o = this._getTrigger(n), s = new dc(this.id, n, e); let a = this._engine.statesByElement.get(e); a || (ht(e, gs), ht(e, gs + "-" + n), this._engine.statesByElement.set(e, a = new Map)); let l = a.get(n); const u = new uc(r, this.id); if (!(r && r.hasOwnProperty("value")) && l && u.absorbOptions(l.options), a.set(n, u), l || (l = cc), u.value !== Pi && l.value === u.value) {
                if (!function KN(t, e) { const n = Object.keys(t), r = Object.keys(e); if (n.length != r.length)
                    return !1; for (let i = 0; i < n.length; i++) {
                    const o = n[i];
                    if (!e.hasOwnProperty(o) || t[o] !== e[o])
                        return !1;
                } return !0; }(l.params, u.params)) {
                    const g = [], y = o.matchStyles(l.value, l.params, g), D = o.matchStyles(u.value, u.params, g);
                    g.length ? this._engine.reportError(g) : this._engine.afterFlush(() => { kn(e, y), Lt(e, D); });
                }
                return;
            } const f = Xe(this._engine.playersByElement, e, []); f.forEach(g => { g.namespaceId == this.id && g.triggerName == n && g.queued && g.destroy(); }); let h = o.matchTransition(l.value, u.value, e, u.params), p = !1; if (!h) {
                if (!i)
                    return;
                h = o.fallbackTransition, p = !0;
            } return this._engine.totalQueuedPlayers++, this._queue.push({ element: e, triggerName: n, transition: h, fromState: l, toState: u, player: s, isFallbackTransition: p }), p || (ht(e, Jy), s.onStart(() => { Tr(e, Jy); })), s.onDone(() => { let g = this.players.indexOf(s); g >= 0 && this.players.splice(g, 1); const y = this._engine.playersByElement.get(e); if (y) {
                let D = y.indexOf(s);
                D >= 0 && y.splice(D, 1);
            } }), this.players.push(s), f.push(s), s; }
            deregister(e) { this._triggers.delete(e), this._engine.statesByElement.forEach(n => n.delete(e)), this._elementListeners.forEach((n, r) => { this._elementListeners.set(r, n.filter(i => i.name != e)); }); }
            clearElementCache(e) { this._engine.statesByElement.delete(e), this._elementListeners.delete(e); const n = this._engine.playersByElement.get(e); n && (n.forEach(r => r.destroy()), this._engine.playersByElement.delete(e)); }
            _signalRemovalForInnerTriggers(e, n) { const r = this._engine.driver.query(e, ms, !0); r.forEach(i => { if (i[ft])
                return; const o = this._engine.fetchNamespacesByElement(i); o.size ? o.forEach(s => s.triggerLeaveAnimation(i, n, !1, !0)) : this.clearElementCache(i); }), this._engine.afterFlushAnimationsDone(() => r.forEach(i => this.clearElementCache(i))); }
            triggerLeaveAnimation(e, n, r, i) { const o = this._engine.statesByElement.get(e), s = new Map; if (o) {
                const a = [];
                if (o.forEach((l, u) => { if (s.set(u, l.value), this._triggers.has(u)) {
                    const c = this.trigger(e, u, Pi, i);
                    c && a.push(c);
                } }), a.length)
                    return this._engine.markElementAsRemoved(this.id, e, !0, n, s), r && pn(a).onDone(() => this._engine.processLeaveNode(e)), !0;
            } return !1; }
            prepareLeaveAnimationListeners(e) { const n = this._elementListeners.get(e), r = this._engine.statesByElement.get(e); if (n && r) {
                const i = new Set;
                n.forEach(o => { const s = o.name; if (i.has(s))
                    return; i.add(s); const l = this._triggers.get(s).fallbackTransition, u = r.get(s) || cc, c = new uc(Pi), d = new dc(this.id, s, e); this._engine.totalQueuedPlayers++, this._queue.push({ element: e, triggerName: s, transition: l, fromState: u, toState: c, player: d, isFallbackTransition: !0 }); });
            } }
            removeNode(e, n) { const r = this._engine; if (e.childElementCount && this._signalRemovalForInnerTriggers(e, n), this.triggerLeaveAnimation(e, n, !0))
                return; let i = !1; if (r.totalAnimations) {
                const o = r.players.length ? r.playersByQueriedElement.get(e) : [];
                if (o && o.length)
                    i = !0;
                else {
                    let s = e;
                    for (; s = s.parentNode;)
                        if (r.statesByElement.get(s)) {
                            i = !0;
                            break;
                        }
                }
            } if (this.prepareLeaveAnimationListeners(e), i)
                r.markElementAsRemoved(this.id, e, !1, n);
            else {
                const o = e[ft];
                (!o || o === Xy) && (r.afterFlush(() => this.clearElementCache(e)), r.destroyInnerAnimations(e), r._onRemovalComplete(e, n));
            } }
            insertNode(e, n) { ht(e, this._hostClassName); }
            drainQueuedTransitions(e) { const n = []; return this._queue.forEach(r => { const i = r.player; if (i.destroyed)
                return; const o = r.element, s = this._elementListeners.get(o); s && s.forEach(a => { if (a.name == r.triggerName) {
                const l = qu(o, r.triggerName, r.fromState.value, r.toState.value);
                l._data = e, zu(r.player, a.phase, l, a.callback);
            } }), i.markedForDestroy ? this._engine.afterFlush(() => { i.destroy(); }) : n.push(r); }), this._queue = [], n.sort((r, i) => { const o = r.transition.ast.depCount, s = i.transition.ast.depCount; return 0 == o || 0 == s ? o - s : this._engine.driver.containsElement(r.element, i.element) ? 1 : -1; }); }
            destroy(e) { this.players.forEach(n => n.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, e); }
            elementContainsData(e) { let n = !1; return this._elementListeners.has(e) && (n = !0), n = !!this._queue.find(r => r.element === e) || n, n; }
        } class $N {
            constructor(e, n, r) { this.bodyNode = e, this.driver = n, this._normalizer = r, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (i, o) => { }; }
            _onRemovalComplete(e, n) { this.onRemovalComplete(e, n); }
            get queuedPlayers() { const e = []; return this._namespaceList.forEach(n => { n.players.forEach(r => { r.queued && e.push(r); }); }), e; }
            createNamespace(e, n) { const r = new HN(e, n, this); return this.bodyNode && this.driver.containsElement(this.bodyNode, n) ? this._balanceNamespaceList(r, n) : (this.newHostElements.set(n, r), this.collectEnterElement(n)), this._namespaceLookup[e] = r; }
            _balanceNamespaceList(e, n) { const r = this._namespaceList, i = this.namespacesByHostElement; if (r.length - 1 >= 0) {
                let s = !1, a = this.driver.getParentElement(n);
                for (; a;) {
                    const l = i.get(a);
                    if (l) {
                        const u = r.indexOf(l);
                        r.splice(u + 1, 0, e), s = !0;
                        break;
                    }
                    a = this.driver.getParentElement(a);
                }
                s || r.unshift(e);
            }
            else
                r.push(e); return i.set(n, e), e; }
            register(e, n) { let r = this._namespaceLookup[e]; return r || (r = this.createNamespace(e, n)), r; }
            registerTrigger(e, n, r) { let i = this._namespaceLookup[e]; i && i.register(n, r) && this.totalAnimations++; }
            destroy(e, n) { if (!e)
                return; const r = this._fetchNamespace(e); this.afterFlush(() => { this.namespacesByHostElement.delete(r.hostElement), delete this._namespaceLookup[e]; const i = this._namespaceList.indexOf(r); i >= 0 && this._namespaceList.splice(i, 1); }), this.afterFlushAnimationsDone(() => r.destroy(n)); }
            _fetchNamespace(e) { return this._namespaceLookup[e]; }
            fetchNamespacesByElement(e) { const n = new Set, r = this.statesByElement.get(e); if (r)
                for (let i of r.values())
                    if (i.namespaceId) {
                        const o = this._fetchNamespace(i.namespaceId);
                        o && n.add(o);
                    } return n; }
            trigger(e, n, r, i) { if (Ts(n)) {
                const o = this._fetchNamespace(e);
                if (o)
                    return o.trigger(n, r, i), !0;
            } return !1; }
            insertNode(e, n, r, i) { if (!Ts(n))
                return; const o = n[ft]; if (o && o.setForRemoval) {
                o.setForRemoval = !1, o.setForMove = !0;
                const s = this.collectedLeaveElements.indexOf(n);
                s >= 0 && this.collectedLeaveElements.splice(s, 1);
            } if (e) {
                const s = this._fetchNamespace(e);
                s && s.insertNode(n, r);
            } i && this.collectEnterElement(n); }
            collectEnterElement(e) { this.collectedEnterElements.push(e); }
            markElementAsDisabled(e, n) { n ? this.disabledNodes.has(e) || (this.disabledNodes.add(e), ht(e, lc)) : this.disabledNodes.has(e) && (this.disabledNodes.delete(e), Tr(e, lc)); }
            removeNode(e, n, r, i) { if (Ts(n)) {
                const o = e ? this._fetchNamespace(e) : null;
                if (o ? o.removeNode(n, i) : this.markElementAsRemoved(e, n, !1, i), r) {
                    const s = this.namespacesByHostElement.get(n);
                    s && s.id !== e && s.removeNode(n, i);
                }
            }
            else
                this._onRemovalComplete(n, i); }
            markElementAsRemoved(e, n, r, i, o) { this.collectedLeaveElements.push(n), n[ft] = { namespaceId: e, setForRemoval: i, hasAnimation: r, removedBeforeQueried: !1, previousTriggersValues: o }; }
            listen(e, n, r, i, o) { return Ts(n) ? this._fetchNamespace(e).listen(n, r, i, o) : () => { }; }
            _buildInstruction(e, n, r, i, o) { return e.transition.build(this.driver, e.element, e.fromState.value, e.toState.value, r, i, e.fromState.options, e.toState.options, n, o); }
            destroyInnerAnimations(e) { let n = this.driver.query(e, ms, !0); n.forEach(r => this.destroyActiveAnimationsForElement(r)), 0 != this.playersByQueriedElement.size && (n = this.driver.query(e, Yu, !0), n.forEach(r => this.finishActiveQueriedAnimationOnElement(r))); }
            destroyActiveAnimationsForElement(e) { const n = this.playersByElement.get(e); n && n.forEach(r => { r.queued ? r.markedForDestroy = !0 : r.destroy(); }); }
            finishActiveQueriedAnimationOnElement(e) { const n = this.playersByQueriedElement.get(e); n && n.forEach(r => r.finish()); }
            whenRenderingDone() { return new Promise(e => { if (this.players.length)
                return pn(this.players).onDone(() => e()); e(); }); }
            processLeaveNode(e) { var _a; const n = e[ft]; if (n && n.setForRemoval) {
                if (e[ft] = Xy, n.namespaceId) {
                    this.destroyInnerAnimations(e);
                    const r = this._fetchNamespace(n.namespaceId);
                    r && r.clearElementCache(e);
                }
                this._onRemovalComplete(e, n.setForRemoval);
            } ((_a = e.classList) === null || _a === void 0 ? void 0 : _a.contains(lc)) && this.markElementAsDisabled(e, !1), this.driver.query(e, ".ng-animate-disabled", !0).forEach(r => { this.markElementAsDisabled(r, !1); }); }
            flush(e = -1) { let n = []; if (this.newHostElements.size && (this.newHostElements.forEach((r, i) => this._balanceNamespaceList(r, i)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                for (let r = 0; r < this.collectedEnterElements.length; r++)
                    ht(this.collectedEnterElements[r], "ng-star-inserted"); if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                const r = [];
                try {
                    n = this._flushAnimations(r, e);
                }
                finally {
                    for (let i = 0; i < r.length; i++)
                        r[i]();
                }
            }
            else
                for (let r = 0; r < this.collectedLeaveElements.length; r++)
                    this.processLeaveNode(this.collectedLeaveElements[r]); if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(r => r()), this._flushFns = [], this._whenQuietFns.length) {
                const r = this._whenQuietFns;
                this._whenQuietFns = [], n.length ? pn(n).onDone(() => { r.forEach(i => i()); }) : r.forEach(i => i());
            } }
            reportError(e) { throw function $A(t) { return new w(3402, !1); }(); }
            _flushAnimations(e, n) { const r = new bs, i = [], o = new Map, s = [], a = new Map, l = new Map, u = new Map, c = new Set; this.disabledNodes.forEach(S => { c.add(S); const I = this.driver.query(S, ".ng-animate-queued", !0); for (let A = 0; A < I.length; A++)
                c.add(I[A]); }); const d = this.bodyNode, f = Array.from(this.statesByElement.keys()), h = nD(f, this.collectedEnterElements), p = new Map; let g = 0; h.forEach((S, I) => { const A = Zu + g++; p.set(I, A), S.forEach(q => ht(q, A)); }); const y = [], D = new Set, _ = new Set; for (let S = 0; S < this.collectedLeaveElements.length; S++) {
                const I = this.collectedLeaveElements[S], A = I[ft];
                A && A.setForRemoval && (y.push(I), D.add(I), A.hasAnimation ? this.driver.query(I, ".ng-star-inserted", !0).forEach(q => D.add(q)) : _.add(I));
            } const m = new Map, b = nD(f, Array.from(D)); b.forEach((S, I) => { const A = ps + g++; m.set(I, A), S.forEach(q => ht(q, A)); }), e.push(() => { h.forEach((S, I) => { const A = p.get(I); S.forEach(q => Tr(q, A)); }), b.forEach((S, I) => { const A = m.get(I); S.forEach(q => Tr(q, A)); }), y.forEach(S => { this.processLeaveNode(S); }); }); const V = [], z = []; for (let S = this._namespaceList.length - 1; S >= 0; S--)
                this._namespaceList[S].drainQueuedTransitions(n).forEach(A => { const q = A.player, be = A.element; if (V.push(q), this.collectedEnterElements.length) {
                    const Ne = be[ft];
                    if (Ne && Ne.setForMove) {
                        if (Ne.previousTriggersValues && Ne.previousTriggersValues.has(A.triggerName)) {
                            const Vn = Ne.previousTriggersValues.get(A.triggerName), pt = this.statesByElement.get(A.element);
                            if (pt && pt.has(A.triggerName)) {
                                const Ns = pt.get(A.triggerName);
                                Ns.value = Vn, pt.set(A.triggerName, Ns);
                            }
                        }
                        return void q.destroy();
                    }
                } const Vt = !d || !this.driver.containsElement(d, be), it = m.get(be), mn = p.get(be), ue = this._buildInstruction(A, r, mn, it, Vt); if (ue.errors && ue.errors.length)
                    return void z.push(ue); if (Vt)
                    return q.onStart(() => kn(be, ue.fromStyles)), q.onDestroy(() => Lt(be, ue.toStyles)), void i.push(q); if (A.isFallbackTransition)
                    return q.onStart(() => kn(be, ue.fromStyles)), q.onDestroy(() => Lt(be, ue.toStyles)), void i.push(q); const dD = []; ue.timelines.forEach(Ne => { Ne.stretchStartingKeyframe = !0, this.disabledNodes.has(Ne.element) || dD.push(Ne); }), ue.timelines = dD, r.append(be, ue.timelines), s.push({ instruction: ue, player: q, element: be }), ue.queriedElements.forEach(Ne => Xe(a, Ne, []).push(q)), ue.preStyleProps.forEach((Ne, Vn) => { if (Ne.size) {
                    let pt = l.get(Vn);
                    pt || l.set(Vn, pt = new Set), Ne.forEach((Ns, pc) => pt.add(pc));
                } }), ue.postStyleProps.forEach((Ne, Vn) => { let pt = u.get(Vn); pt || u.set(Vn, pt = new Set), Ne.forEach((Ns, pc) => pt.add(pc)); }); }); if (z.length) {
                const S = [];
                z.forEach(I => { S.push(function UA(t, e) { return new w(3505, !1); }()); }), V.forEach(I => I.destroy()), this.reportError(S);
            } const le = new Map, tt = new Map; s.forEach(S => { const I = S.element; r.has(I) && (tt.set(I, I), this._beforeAnimationBuild(S.player.namespaceId, S.instruction, le)); }), i.forEach(S => { const I = S.element; this._getPreviousPlayers(I, !1, S.namespaceId, S.triggerName, null).forEach(q => { Xe(le, I, []).push(q), q.destroy(); }); }); const nt = y.filter(S => iD(S, l, u)), rt = new Map; tD(rt, this.driver, _, u, en).forEach(S => { iD(S, l, u) && nt.push(S); }); const nn = new Map; h.forEach((S, I) => { tD(nn, this.driver, new Set(S), l, "!"); }), nt.forEach(S => { var _a, _b; const I = rt.get(S), A = nn.get(S); rt.set(S, new Map([...Array.from((_a = I === null || I === void 0 ? void 0 : I.entries()) !== null && _a !== void 0 ? _a : []), ...Array.from((_b = A === null || A === void 0 ? void 0 : A.entries()) !== null && _b !== void 0 ? _b : [])])); }); const Mt = [], Ar = [], Nr = {}; s.forEach(S => { const { element: I, player: A, instruction: q } = S; if (r.has(I)) {
                if (c.has(I))
                    return A.onDestroy(() => Lt(I, q.toStyles)), A.disabled = !0, A.overrideTotalTime(q.totalTime), void i.push(A);
                let be = Nr;
                if (tt.size > 1) {
                    let it = I;
                    const mn = [];
                    for (; it = it.parentNode;) {
                        const ue = tt.get(it);
                        if (ue) {
                            be = ue;
                            break;
                        }
                        mn.push(it);
                    }
                    mn.forEach(ue => tt.set(ue, be));
                }
                const Vt = this._buildAnimation(A.namespaceId, q, le, o, nn, rt);
                if (A.setRealPlayer(Vt), be === Nr)
                    Mt.push(A);
                else {
                    const it = this.playersByElement.get(be);
                    it && it.length && (A.parentPlayer = pn(it)), i.push(A);
                }
            }
            else
                kn(I, q.fromStyles), A.onDestroy(() => Lt(I, q.toStyles)), Ar.push(A), c.has(I) && i.push(A); }), Ar.forEach(S => { const I = o.get(S.element); if (I && I.length) {
                const A = pn(I);
                S.setRealPlayer(A);
            } }), i.forEach(S => { S.parentPlayer ? S.syncPlayerEvents(S.parentPlayer) : S.destroy(); }); for (let S = 0; S < y.length; S++) {
                const I = y[S], A = I[ft];
                if (Tr(I, ps), A && A.hasAnimation)
                    continue;
                let q = [];
                if (a.size) {
                    let Vt = a.get(I);
                    Vt && Vt.length && q.push(...Vt);
                    let it = this.driver.query(I, Yu, !0);
                    for (let mn = 0; mn < it.length; mn++) {
                        let ue = a.get(it[mn]);
                        ue && ue.length && q.push(...ue);
                    }
                }
                const be = q.filter(Vt => !Vt.destroyed);
                be.length ? qN(this, I, be) : this.processLeaveNode(I);
            } return y.length = 0, Mt.forEach(S => { this.players.push(S), S.onDone(() => { S.destroy(); const I = this.players.indexOf(S); this.players.splice(I, 1); }), S.play(); }), Mt; }
            elementContainsData(e, n) { let r = !1; const i = n[ft]; return i && i.setForRemoval && (r = !0), this.playersByElement.has(n) && (r = !0), this.playersByQueriedElement.has(n) && (r = !0), this.statesByElement.has(n) && (r = !0), this._fetchNamespace(e).elementContainsData(n) || r; }
            afterFlush(e) { this._flushFns.push(e); }
            afterFlushAnimationsDone(e) { this._whenQuietFns.push(e); }
            _getPreviousPlayers(e, n, r, i, o) { let s = []; if (n) {
                const a = this.playersByQueriedElement.get(e);
                a && (s = a);
            }
            else {
                const a = this.playersByElement.get(e);
                if (a) {
                    const l = !o || o == Pi;
                    a.forEach(u => { u.queued || !l && u.triggerName != i || s.push(u); });
                }
            } return (r || i) && (s = s.filter(a => !(r && r != a.namespaceId || i && i != a.triggerName))), s; }
            _beforeAnimationBuild(e, n, r) { const o = n.element, s = n.isRemovalTransition ? void 0 : e, a = n.isRemovalTransition ? void 0 : n.triggerName; for (const l of n.timelines) {
                const u = l.element, c = u !== o, d = Xe(r, u, []);
                this._getPreviousPlayers(u, c, s, a, n.toState).forEach(h => { const p = h.getRealPlayer(); p.beforeDestroy && p.beforeDestroy(), h.destroy(), d.push(h); });
            } kn(o, n.fromStyles); }
            _buildAnimation(e, n, r, i, o, s) { const a = n.triggerName, l = n.element, u = [], c = new Set, d = new Set, f = n.timelines.map(p => { const g = p.element; c.add(g); const y = g[ft]; if (y && y.removedBeforeQueried)
                return new Ti(p.duration, p.delay); const D = g !== l, _ = function WN(t) { const e = []; return rD(t, e), e; }((r.get(g) || BN).map(le => le.getRealPlayer())).filter(le => !!le.element && le.element === g), m = o.get(g), b = s.get(g), V = Ay(0, this._normalizer, 0, p.keyframes, m, b), z = this._buildPlayer(p, V, _); if (p.subTimeline && i && d.add(g), D) {
                const le = new dc(e, a, g);
                le.setRealPlayer(z), u.push(le);
            } return z; }); u.forEach(p => { Xe(this.playersByQueriedElement, p.element, []).push(p), p.onDone(() => function UN(t, e, n) { let r = t.get(e); if (r) {
                if (r.length) {
                    const i = r.indexOf(n);
                    r.splice(i, 1);
                }
                0 == r.length && t.delete(e);
            } return r; }(this.playersByQueriedElement, p.element, p)); }), c.forEach(p => ht(p, Vy)); const h = pn(f); return h.onDestroy(() => { c.forEach(p => Tr(p, Vy)), Lt(l, n.toStyles); }), d.forEach(p => { Xe(i, p, []).push(h); }), h; }
            _buildPlayer(e, n, r) { return n.length > 0 ? this.driver.animate(e.element, n, e.duration, e.delay, e.easing, r) : new Ti(e.duration, e.delay); }
        } class dc {
            constructor(e, n, r) { this.namespaceId = e, this.triggerName = n, this.element = r, this._player = new Ti, this._containsRealPlayer = !1, this._queuedCallbacks = new Map, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0; }
            setRealPlayer(e) { this._containsRealPlayer || (this._player = e, this._queuedCallbacks.forEach((n, r) => { n.forEach(i => zu(e, r, void 0, i)); }), this._queuedCallbacks.clear(), this._containsRealPlayer = !0, this.overrideTotalTime(e.totalTime), this.queued = !1); }
            getRealPlayer() { return this._player; }
            overrideTotalTime(e) { this.totalTime = e; }
            syncPlayerEvents(e) { const n = this._player; n.triggerCallback && e.onStart(() => n.triggerCallback("start")), e.onDone(() => this.finish()), e.onDestroy(() => this.destroy()); }
            _queueEvent(e, n) { Xe(this._queuedCallbacks, e, []).push(n); }
            onDone(e) { this.queued && this._queueEvent("done", e), this._player.onDone(e); }
            onStart(e) { this.queued && this._queueEvent("start", e), this._player.onStart(e); }
            onDestroy(e) { this.queued && this._queueEvent("destroy", e), this._player.onDestroy(e); }
            init() { this._player.init(); }
            hasStarted() { return !this.queued && this._player.hasStarted(); }
            play() { !this.queued && this._player.play(); }
            pause() { !this.queued && this._player.pause(); }
            restart() { !this.queued && this._player.restart(); }
            finish() { this._player.finish(); }
            destroy() { this.destroyed = !0, this._player.destroy(); }
            reset() { !this.queued && this._player.reset(); }
            setPosition(e) { this.queued || this._player.setPosition(e); }
            getPosition() { return this.queued ? 0 : this._player.getPosition(); }
            triggerCallback(e) { const n = this._player; n.triggerCallback && n.triggerCallback(e); }
        } function Ts(t) { return t && 1 === t.nodeType; } function eD(t, e) { const n = t.style.display; return t.style.display = e !== null && e !== void 0 ? e : "none", n; } function tD(t, e, n, r, i) { const o = []; n.forEach(l => o.push(eD(l))); const s = []; r.forEach((l, u) => { const c = new Map; l.forEach(d => { const f = e.computeStyle(u, d, i); c.set(d, f), (!f || 0 == f.length) && (u[ft] = jN, s.push(u)); }), t.set(u, c); }); let a = 0; return n.forEach(l => eD(l, o[a++])), s; } function nD(t, e) { const n = new Map; if (t.forEach(a => n.set(a, [])), 0 == e.length)
            return n; const i = new Set(e), o = new Map; function s(a) { if (!a)
            return 1; let l = o.get(a); if (l)
            return l; const u = a.parentNode; return l = n.has(u) ? u : i.has(u) ? 1 : s(u), o.set(a, l), l; } return e.forEach(a => { const l = s(a); 1 !== l && n.get(l).push(a); }), n; } function ht(t, e) { var _a; (_a = t.classList) === null || _a === void 0 ? void 0 : _a.add(e); } function Tr(t, e) { var _a; (_a = t.classList) === null || _a === void 0 ? void 0 : _a.remove(e); } function qN(t, e, n) { pn(n).onDone(() => t.processLeaveNode(e)); } function rD(t, e) { for (let n = 0; n < t.length; n++) {
            const r = t[n];
            r instanceof Ty ? rD(r.players, e) : e.push(r);
        } } function iD(t, e, n) { const r = n.get(t); if (!r)
            return !1; let i = e.get(t); return i ? r.forEach(o => i.add(o)) : e.set(t, r), n.delete(t), !0; } class Ms {
            constructor(e, n, r) { this.bodyNode = e, this._driver = n, this._normalizer = r, this._triggerCache = {}, this.onRemovalComplete = (i, o) => { }, this._transitionEngine = new $N(e, n, r), this._timelineEngine = new RN(e, n, r), this._transitionEngine.onRemovalComplete = (i, o) => this.onRemovalComplete(i, o); }
            registerTrigger(e, n, r, i, o) { const s = e + "-" + i; let a = this._triggerCache[s]; if (!a) {
                const l = [], c = tc(this._driver, o, l, []);
                if (l.length)
                    throw function FA(t, e) { return new w(3404, !1); }();
                a = function NN(t, e, n) { return new PN(t, e, n); }(i, c, this._normalizer), this._triggerCache[s] = a;
            } this._transitionEngine.registerTrigger(n, i, a); }
            register(e, n) { this._transitionEngine.register(e, n); }
            destroy(e, n) { this._transitionEngine.destroy(e, n); }
            onInsert(e, n, r, i) { this._transitionEngine.insertNode(e, n, r, i); }
            onRemove(e, n, r, i) { this._transitionEngine.removeNode(e, n, i || !1, r); }
            disableAnimations(e, n) { this._transitionEngine.markElementAsDisabled(e, n); }
            process(e, n, r, i) { if ("@" == r.charAt(0)) {
                const [o, s] = Ny(r);
                this._timelineEngine.command(o, n, s, i);
            }
            else
                this._transitionEngine.trigger(e, n, r, i); }
            listen(e, n, r, i, o) { if ("@" == r.charAt(0)) {
                const [s, a] = Ny(r);
                return this._timelineEngine.listen(s, n, a, o);
            } return this._transitionEngine.listen(e, n, r, i, o); }
            flush(e = -1) { this._transitionEngine.flush(e); }
            get players() { return this._transitionEngine.players.concat(this._timelineEngine.players); }
            whenRenderingDone() { return this._transitionEngine.whenRenderingDone(); }
        } let ZN = (() => { class t {
            constructor(n, r, i) { this._element = n, this._startStyles = r, this._endStyles = i, this._state = 0; let o = t.initialStylesByElement.get(n); o || t.initialStylesByElement.set(n, o = new Map), this._initialStyles = o; }
            start() { this._state < 1 && (this._startStyles && Lt(this._element, this._startStyles, this._initialStyles), this._state = 1); }
            finish() { this.start(), this._state < 2 && (Lt(this._element, this._initialStyles), this._endStyles && (Lt(this._element, this._endStyles), this._endStyles = null), this._state = 1); }
            destroy() { this.finish(), this._state < 3 && (t.initialStylesByElement.delete(this._element), this._startStyles && (kn(this._element, this._startStyles), this._endStyles = null), this._endStyles && (kn(this._element, this._endStyles), this._endStyles = null), Lt(this._element, this._initialStyles), this._state = 3); }
        } return t.initialStylesByElement = new WeakMap, t; })(); function fc(t) { let e = null; return t.forEach((n, r) => { (function YN(t) { return "display" === t || "position" === t; })(r) && (e = e || new Map, e.set(r, n)); }), e; } class oD {
            constructor(e, n, r, i) { this.element = e, this.keyframes = n, this.options = r, this._specialStyles = i, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this._originalOnDoneFns = [], this._originalOnStartFns = [], this.time = 0, this.parentPlayer = null, this.currentSnapshot = new Map, this._duration = r.duration, this._delay = r.delay || 0, this.time = this._duration + this._delay; }
            _onFinish() { this._finished || (this._finished = !0, this._onDoneFns.forEach(e => e()), this._onDoneFns = []); }
            init() { this._buildPlayer(), this._preparePlayerBeforeStart(); }
            _buildPlayer() { if (this._initialized)
                return; this._initialized = !0; const e = this.keyframes; this.domPlayer = this._triggerWebAnimation(this.element, e, this.options), this._finalKeyframe = e.length ? e[e.length - 1] : new Map, this.domPlayer.addEventListener("finish", () => this._onFinish()); }
            _preparePlayerBeforeStart() { this._delay ? this._resetDomPlayerState() : this.domPlayer.pause(); }
            _convertKeyframesToObject(e) { const n = []; return e.forEach(r => { n.push(Object.fromEntries(r)); }), n; }
            _triggerWebAnimation(e, n, r) { return e.animate(this._convertKeyframesToObject(n), r); }
            onStart(e) { this._originalOnStartFns.push(e), this._onStartFns.push(e); }
            onDone(e) { this._originalOnDoneFns.push(e), this._onDoneFns.push(e); }
            onDestroy(e) { this._onDestroyFns.push(e); }
            play() { this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(e => e()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play(); }
            pause() { this.init(), this.domPlayer.pause(); }
            finish() { this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish(); }
            reset() { this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns; }
            _resetDomPlayerState() { this.domPlayer && this.domPlayer.cancel(); }
            restart() { this.reset(), this.play(); }
            hasStarted() { return this._started; }
            destroy() { this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(e => e()), this._onDestroyFns = []); }
            setPosition(e) { void 0 === this.domPlayer && this.init(), this.domPlayer.currentTime = e * this.time; }
            getPosition() { return this.domPlayer.currentTime / this.time; }
            get totalTime() { return this._delay + this._duration; }
            beforeDestroy() { const e = new Map; this.hasStarted() && this._finalKeyframe.forEach((r, i) => { "offset" !== i && e.set(i, this._finished ? r : zy(this.element, i)); }), this.currentSnapshot = e; }
            triggerCallback(e) { const n = "start" === e ? this._onStartFns : this._onDoneFns; n.forEach(r => r()), n.length = 0; }
        } class JN {
            validateStyleProperty(e) { return !0; }
            validateAnimatableStyleProperty(e) { return !0; }
            matchesElement(e, n) { return !1; }
            containsElement(e, n) { return Ry(e, n); }
            getParentElement(e) { return Ku(e); }
            query(e, n, r) { return Oy(e, n, r); }
            computeStyle(e, n, r) { return window.getComputedStyle(e)[n]; }
            animate(e, n, r, i, o, s = []) { const l = { duration: r, delay: i, fill: 0 == i ? "both" : "forwards" }; o && (l.easing = o); const u = new Map, c = s.filter(h => h instanceof oD); (function nN(t, e) { return 0 === t || 0 === e; })(r, i) && c.forEach(h => { h.currentSnapshot.forEach((p, g) => u.set(g, p)); }); let d = function JA(t) { return t.length ? t[0] instanceof Map ? t : t.map(e => By(e)) : []; }(n).map(h => gn(h)); d = function rN(t, e, n) { if (n.size && e.length) {
                let r = e[0], i = [];
                if (n.forEach((o, s) => { r.has(s) || i.push(s), r.set(s, o); }), i.length)
                    for (let o = 1; o < e.length; o++) {
                        let s = e[o];
                        i.forEach(a => s.set(a, zy(t, a)));
                    }
            } return e; }(e, d, u); const f = function QN(t, e) { let n = null, r = null; return Array.isArray(e) && e.length ? (n = fc(e[0]), e.length > 1 && (r = fc(e[e.length - 1]))) : e instanceof Map && (n = fc(e)), n || r ? new ZN(t, n, r) : null; }(e, d); return new oD(e, d, l, f); }
        } let XN = (() => { class t extends Cy {
            constructor(n, r) { super(), this._nextAnimationId = 0, this._renderer = n.createRenderer(r.body, { id: "0", encapsulation: mt.None, styles: [], data: { animation: [] } }); }
            build(n) { const r = this._nextAnimationId.toString(); this._nextAnimationId++; const i = Array.isArray(n) ? by(n) : n; return sD(this._renderer, null, r, "register", [i]), new e1(r, this._renderer); }
        } return t.\u0275fac = function (n) { return new (n || t)(B(oi), B(St)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(); class e1 extends class cA {
        } {
            constructor(e, n) { super(), this._id = e, this._renderer = n; }
            create(e, n) { return new t1(this._id, e, n || {}, this._renderer); }
        } class t1 {
            constructor(e, n, r, i) { this.id = e, this.element = n, this._renderer = i, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", r); }
            _listen(e, n) { return this._renderer.listen(this.element, `@@${this.id}:${e}`, n); }
            _command(e, ...n) { return sD(this._renderer, this.element, this.id, e, n); }
            onDone(e) { this._listen("done", e); }
            onStart(e) { this._listen("start", e); }
            onDestroy(e) { this._listen("destroy", e); }
            init() { this._command("init"); }
            hasStarted() { return this._started; }
            play() { this._command("play"), this._started = !0; }
            pause() { this._command("pause"); }
            restart() { this._command("restart"); }
            finish() { this._command("finish"); }
            destroy() { this._command("destroy"); }
            reset() { this._command("reset"), this._started = !1; }
            setPosition(e) { this._command("setPosition", e); }
            getPosition() { var _a, _b; return (_b = (_a = this._renderer.engine.players[+this.id]) === null || _a === void 0 ? void 0 : _a.getPosition()) !== null && _b !== void 0 ? _b : 0; }
        } function sD(t, e, n, r, i) { return t.setProperty(e, `@@${n}:${r}`, i); } const aD = "@.disabled"; let n1 = (() => { class t {
            constructor(n, r, i) { this.delegate = n, this.engine = r, this._zone = i, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), r.onRemovalComplete = (o, s) => { const a = s === null || s === void 0 ? void 0 : s.parentNode(o); a && s.removeChild(a, o); }; }
            createRenderer(n, r) { const o = this.delegate.createRenderer(n, r); if (!(n && r && r.data && r.data.animation)) {
                let c = this._rendererCache.get(o);
                return c || (c = new lD("", o, this.engine, () => this._rendererCache.delete(o)), this._rendererCache.set(o, c)), c;
            } const s = r.id, a = r.id + "-" + this._currentId; this._currentId++, this.engine.register(a, n); const l = c => { Array.isArray(c) ? c.forEach(l) : this.engine.registerTrigger(s, a, n, c.name, c); }; return r.data.animation.forEach(l), new r1(this, a, o, this.engine); }
            begin() { this._cdRecurDepth++, this.delegate.begin && this.delegate.begin(); }
            _scheduleCountTask() { this.promise.then(() => { this._microtaskId++; }); }
            scheduleListenerCallback(n, r, i) { n >= 0 && n < this._microtaskId ? this._zone.run(() => r(i)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(() => { this._zone.run(() => { this._animationCallbacksBuffer.forEach(o => { const [s, a] = o; s(a); }), this._animationCallbacksBuffer = []; }); }), this._animationCallbacksBuffer.push([r, i])); }
            end() { this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(() => { this._scheduleCountTask(), this.engine.flush(this._microtaskId); }), this.delegate.end && this.delegate.end(); }
            whenRenderingDone() { return this.engine.whenRenderingDone(); }
        } return t.\u0275fac = function (n) { return new (n || t)(B(oi), B(Ms), B(Ce)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })(); class lD {
            constructor(e, n, r, i) { this.namespaceId = e, this.delegate = n, this.engine = r, this._onDestroy = i, this.destroyNode = this.delegate.destroyNode ? o => n.destroyNode(o) : null; }
            get data() { return this.delegate.data; }
            destroy() { var _a; this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy(), (_a = this._onDestroy) === null || _a === void 0 ? void 0 : _a.call(this); }
            createElement(e, n) { return this.delegate.createElement(e, n); }
            createComment(e) { return this.delegate.createComment(e); }
            createText(e) { return this.delegate.createText(e); }
            appendChild(e, n) { this.delegate.appendChild(e, n), this.engine.onInsert(this.namespaceId, n, e, !1); }
            insertBefore(e, n, r, i = !0) { this.delegate.insertBefore(e, n, r), this.engine.onInsert(this.namespaceId, n, e, i); }
            removeChild(e, n, r) { this.engine.onRemove(this.namespaceId, n, this.delegate, r); }
            selectRootElement(e, n) { return this.delegate.selectRootElement(e, n); }
            parentNode(e) { return this.delegate.parentNode(e); }
            nextSibling(e) { return this.delegate.nextSibling(e); }
            setAttribute(e, n, r, i) { this.delegate.setAttribute(e, n, r, i); }
            removeAttribute(e, n, r) { this.delegate.removeAttribute(e, n, r); }
            addClass(e, n) { this.delegate.addClass(e, n); }
            removeClass(e, n) { this.delegate.removeClass(e, n); }
            setStyle(e, n, r, i) { this.delegate.setStyle(e, n, r, i); }
            removeStyle(e, n, r) { this.delegate.removeStyle(e, n, r); }
            setProperty(e, n, r) { "@" == n.charAt(0) && n == aD ? this.disableAnimations(e, !!r) : this.delegate.setProperty(e, n, r); }
            setValue(e, n) { this.delegate.setValue(e, n); }
            listen(e, n, r) { return this.delegate.listen(e, n, r); }
            disableAnimations(e, n) { this.engine.disableAnimations(e, n); }
        } class r1 extends lD {
            constructor(e, n, r, i, o) { super(n, r, i, o), this.factory = e, this.namespaceId = n; }
            setProperty(e, n, r) { "@" == n.charAt(0) ? "." == n.charAt(1) && n == aD ? this.disableAnimations(e, r = void 0 === r || !!r) : this.engine.process(this.namespaceId, e, n.slice(1), r) : this.delegate.setProperty(e, n, r); }
            listen(e, n, r) { if ("@" == n.charAt(0)) {
                const i = function i1(t) { switch (t) {
                    case "body": return document.body;
                    case "document": return document;
                    case "window": return window;
                    default: return t;
                } }(e);
                let o = n.slice(1), s = "";
                return "@" != o.charAt(0) && ([o, s] = function o1(t) { const e = t.indexOf("."); return [t.substring(0, e), t.slice(e + 1)]; }(o)), this.engine.listen(this.namespaceId, i, o, s, a => { this.factory.scheduleListenerCallback(a._data || -1, r, a); });
            } return this.delegate.listen(e, n, r); }
        } const uD = [{ provide: Cy, useClass: XN }, { provide: sc, useFactory: function a1() { return new IN; } }, { provide: Ms, useClass: (() => { class t extends Ms {
                    constructor(n, r, i, o) { super(n.body, r, i); }
                    ngOnDestroy() { this.flush(); }
                } return t.\u0275fac = function (n) { return new (n || t)(B(St), B(Qu), B(sc), B(Wo)); }, t.\u0275prov = J({ token: t, factory: t.\u0275fac }), t; })() }, { provide: oi, useFactory: function l1(t, e, n) { return new n1(t, e, n); }, deps: [hs, Ms, Ce] }], hc = [{ provide: Qu, useFactory: () => new JN }, { provide: um, useValue: "BrowserAnimations" }, ...uD], cD = [{ provide: Qu, useClass: ky }, { provide: um, useValue: "NoopAnimations" }, ...uD]; let u1 = (() => { class t {
            static withConfig(n) { return { ngModule: t, providers: n.disableAnimations ? cD : hc }; }
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275mod = jn({ type: t }), t.\u0275inj = wn({ providers: hc, imports: [vy] }), t; })(), c1 = (() => { class t {
        } return t.\u0275fac = function (n) { return new (n || t); }, t.\u0275mod = jn({ type: t, bootstrap: [uA] }), t.\u0275inj = wn({ imports: [vy, u1] }), t; })(); (function _I() { Sm = !1; })(), WM().bootstrapModule(c1).catch(t => console.error(t)); } }, ce => { ce(ce.s = 161); }]);
