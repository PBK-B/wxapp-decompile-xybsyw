var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 31 ], {
    1239: function(t, e, o) {
        o(407);
    },
    1240: function(t, e, o) {},
    1664: function(e, o, n) {
        n.r(o), n(1239);
        var a = n(0), r = n.n(a);
        o = n(2), a = n.n(o), n(1240), o = function(t, e, o) {
            return e && i(t.prototype, e), o && i(t, o), t;
        };
        function i(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function u(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function s() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, s);
            for (var o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
            return (t = e = u(this, (t = s.__proto__ || Object.getPrototypeOf(s)).call.apply(t, [ this ].concat(n)))).$usedState = [ "isShow", "pageType" ], 
            e.config = {
                component: !0
            }, e.customComponents = [], u(e, t);
        }
        o = a()({
            properties: {
                pageType: {
                    type: Number,
                    value: 0
                },
                isShow: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {},
            created: function() {},
            attached: function() {},
            detached: function() {},
            methods: {
                hidePage: function() {
                    this.setData({
                        isShow: !1
                    }), this.triggerEvent("onClose", {}, {});
                }
            }
        })((function(e, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + t(o));
            e.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
        }(s, r.a.Component), o(s, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, n) : void 0;
                })(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (o = this.data).pageType, o = o.isShow;
                return this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.hidePage(e);
                }, this.anonymousFunc1 = function(e) {
                    e.stopPropagation(), t.hidePage(e);
                }, this.anonymousFunc2 = function(e) {
                    e.stopPropagation(), t.hidePage(e);
                }, Object.assign(this.__state, {
                    isShow: o,
                    pageType: e
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc1",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc2",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), o = a = s, a.$$events = [ "privateStopNoop", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2" ], 
        a.$$componentPath = "components/integral-guid/integral-guid", a = o)) || a, a = o, 
        Component(n(0).default.createComponent(o));
    },
    407: function(t, e, o) {
        t.exports = o.p + "components/integral-guid/integral-guid.wxml";
    }
}, [ [ 1664, 0, 1 ] ] ]);