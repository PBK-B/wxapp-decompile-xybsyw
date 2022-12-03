var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 20 ], {
    1150: function(t, e, n) {
        n(364);
    },
    1151: function(t, e, n) {},
    1621: function(e, n, o) {
        o.r(n), o(1150);
        var a = o(0), r = o.n(a);
        n = o(2), a = o.n(n), o(1151), n = function(t, e, n) {
            return e && i(t.prototype, e), n && i(t, n), t;
        };
        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        function s(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != t(n) && "function" != typeof n ? e : n;
        }
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return (t = e = s(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(o)))).$usedState = [ "isShow", "animationData", "goldType", "fengType" ], 
            e.config = {
                component: !0
            }, e.customComponents = [], s(e, t);
        }
        n = a()({
            properties: {
                goldType: {
                    type: Number,
                    value: 0
                },
                fengType: {
                    type: Number,
                    value: -1
                },
                isShow: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                animationData: "",
                setInter: ""
            },
            created: function() {
                var t = r.a.createAnimation({
                    duration: 1500,
                    timingFunction: "linear"
                });
                this.animation = t, this.setData({
                    animationData: t.export()
                });
                var e = 0, n = this;
                n.data.setInter = setInterval(function() {
                    e += 1, n.animation.rotate(180 * e).step(), n.setData({
                        animationData: n.animation.export()
                    });
                }.bind(n), 1500);
            },
            attached: function() {},
            detached: function() {
                clearInterval(this.data.setInter);
            },
            methods: {}
        })((function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
        }(p, r.a.Component), n(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, o) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, o) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = (o = this.data).animationData, e = o.goldType, n = o.fengType, o = o.isShow;
                return Object.assign(this.__state, {
                    isShow: o,
                    animationData: t,
                    goldType: e,
                    fengType: n
                }), this.__state;
            }
        } ]), n = a = p, a.$$events = [], a.$$componentPath = "components/addIntegral/addIntegral", 
        a = n)) || a, a = n, Component(o(0).default.createComponent(n));
    },
    364: function(t, e, n) {
        t.exports = n.p + "components/addIntegral/addIntegral.wxml";
    }
}, [ [ 1621, 0, 1 ] ] ]);