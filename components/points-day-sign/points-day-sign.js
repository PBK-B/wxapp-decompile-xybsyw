var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 43 ], {
    1235: function(t, n, e) {
        e(405);
    },
    1236: function(t, n, e) {},
    1662: function(n, e, o) {
        o.r(e), o(1235);
        var s = o(0), i = o.n(s), a = (e = o(2), s = o.n(e), o(1));
        o(1236), e = function(t, n, e) {
            return n && r(t.prototype, n), e && r(t, e), t;
        };
        function r(t, n) {
            for (var e = 0; e < n.length; e++) {
                var o = n[e];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        function c(n, e) {
            if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != t(e) && "function" != typeof e ? n : e;
        }
        function p() {
            var t, n;
            !function(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var e = arguments.length, o = Array(e), s = 0; s < e; s++) o[s] = arguments[s];
            return (t = n = c(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(o)))).$usedState = [ "signed", "imagePointsSrc", "labConstainLab" ], 
            n.config = {
                component: !0
            }, n.customComponents = [], c(n, t);
        }
        e = s()({
            properties: {
                signed: {
                    type: Boolean,
                    value: !1
                },
                signDay: {
                    type: Number,
                    value: 0,
                    observer: function(t, n) {
                        var e = "每日签到", o = this.data.signed ? "https://xcxresources.xybsyw.com/xcx/images/points_day_" + t + "_ed.png" : "https://xcxresources.xybsyw.com/xcx/images/points_day_" + ((t = 7 == t ? 0 : t) + 1) + ".png";
                        this.setData({
                            signDay: t,
                            labConstainLab: e = 0 < t ? "已连续签到" + t + "天" : e,
                            imagePointsSrc: o
                        });
                    }
                }
            },
            data: {
                labConstainLab: "每日签到",
                imagePointsSrc: "https://xcxresources.xybsyw.com/xcx/images/points_day_1.png"
            },
            methods: {
                sign: function() {
                    var t = this;
                    this.data.signed ? i.a.showToast({
                        title: "签到过了",
                        icon: "none"
                    }) : a.a.xyb_request("client/point/TaskPoint.action", "POST", {}).then(function(n) {
                        200 == n.code && (n = t.data.signDay + 1, t.setData({
                            signed: !0,
                            signDay: n,
                            imagePointsSrc: "https://xcxresources.xybsyw.com/xcx/images/points_day_" + n + "_ed.png"
                        }), t.triggerEvent("signSuccess"), i.a.showToast({
                            title: "签到成功",
                            icon: "none"
                        }));
                    }, function(t) {});
                }
            }
        })((function(n, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + t(e));
            n.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e);
        }(p, i.a.Component), e(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(n, e, o) {
                    null === n && (n = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(n, e);
                    return void 0 !== s ? "value" in s ? s.value : void 0 !== (s = s.get) ? s.call(o) : void 0 : null !== (n = Object.getPrototypeOf(n)) ? t(n, e, o) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var n = (o = this.data).labConstainLab, e = o.signed, o = o.imagePointsSrc;
                return this.anonymousFunc0 = function(n) {
                    n.stopPropagation(), t.sign(n);
                }, Object.assign(this.__state, {
                    signed: e,
                    imagePointsSrc: o,
                    labConstainLab: n
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), e = s = p, s.$$events = [ "anonymousFunc0" ], s.$$componentPath = "components/points-day-sign/points-day-sign", 
        s = e)) || s, s = e, Component(o(0).default.createComponent(e));
    },
    405: function(t, n, e) {
        t.exports = e.p + "components/points-day-sign/points-day-sign.wxml";
    }
}, [ [ 1662, 0, 1, 2 ] ] ]);