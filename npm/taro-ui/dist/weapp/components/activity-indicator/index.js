var t = require("../../../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 285 ], {
    1021: function(t, e, o) {
        o(321);
    },
    1580: function(e, o, n) {
        n.r(o), n(1021);
        var r = n(0), i = n.n(r), a = n(7), s = n.n(a), c = n(9), p = (o = n.n(c), a = n(20), 
        function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var o = [], n = !0, r = !1, i = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (o.push(a.value), 
                    !e || o.length !== e); n = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    r = !0, i = t;
                } finally {
                    try {
                        !n && s.return && s.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                return o;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        });
        c = function(t, e, o) {
            return e && u(t.prototype, e), o && u(t, o), t;
        };
        function u(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function l(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function f() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, f);
            for (var o = arguments.length, n = Array(o), r = 0; r < o; r++) n[r] = arguments[r];
            return (t = e = l(this, (t = f.__proto__ || Object.getPrototypeOf(f)).call.apply(t, [ this ].concat(n)))).$usedState = [ "$compid__1113", "rootClass", "content", "color", "size", "mode", "isOpened", "className" ], 
            e.customComponents = [ "AtLoading" ], l(e, t);
        }
        (function(e, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + t(o));
            e.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
        })(f, a.a), c(f, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, n) : void 0;
                })(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var t = this.$prefix, e = Object(r.genCompid)(t + "$compid__1113"), o = (a = p(e, 2))[0], n = a[1], i = (c = this.__props).color, a = (t = c.size, 
                e = c.mode, c.content), c = c.isOpened;
                c = s()("at-activity-indicator", {
                    "at-activity-indicator--center": "center" === e,
                    "at-activity-indicator--isopened": c
                }, this.__props.className);
                return r.propsManager.set({
                    size: t,
                    color: i
                }, n, o), Object.assign(this.__state, {
                    $compid__1113: n,
                    rootClass: c,
                    content: a
                }), this.__state;
            }
        } ]), c = a = f, a.$$events = [], a.$$componentPath = "node_modules/taro-ui/dist/weapp/components/activity-indicator/index", 
        c.defaultProps = {
            size: 0,
            mode: "normal",
            color: "",
            content: "",
            className: "",
            isOpened: !0
        }, c.propTypes = {
            size: o.a.number,
            mode: o.a.string,
            color: o.a.string,
            content: o.a.string,
            className: o.a.oneOfType([ o.a.array, o.a.string ]),
            isOpened: o.a.bool
        }, o = c, Component(n(0).default.createComponent(c));
    },
    321: function(t, e, o) {
        t.exports = o.p + "npm/taro-ui/dist/weapp/components/activity-indicator/index.wxml";
    }
}, [ [ 1580, 0, 1 ] ] ]);