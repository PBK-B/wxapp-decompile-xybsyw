var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 28 ], {
    1202: function(t, o, e) {
        e(394);
    },
    1203: function(t, o, e) {},
    1651: function(o, e, n) {
        n.r(e), n(1202);
        var r = n(0), i = n.n(r), a = (e = n(2), r = n.n(e), n(1));
        n(1203), e = function(t, o, e) {
            return o && s(t.prototype, o), e && s(t, e), t;
        };
        function s(t, o) {
            for (var e = 0; e < o.length; e++) {
                var n = o[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function c(o, e) {
            if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != t(e) && "function" != typeof e ? o : e;
        }
        function u() {
            var t, o;
            !function(t, o) {
                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
            }(this, u);
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return (t = o = c(this, (t = u.__proto__ || Object.getPrototypeOf(u)).call.apply(t, [ this ].concat(n)))).$usedState = [ "isForbiddenLogin" ], 
            o.config = {
                component: !0
            }, o.customComponents = [], c(o, t);
        }
        e = r()({
            properties: {
                isForbiddenLogin: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {},
            ready: function() {},
            detached: function() {},
            methods: {
                toLoginOut: function() {
                    this.setData({
                        isForbiddenLogin: !1
                    }), a.a.xyb_request("login/logout.action", "POST", {}, !1, !1).then(function(t) {
                        i.a.removeStorage({
                            key: "Cookie",
                            success: function(t) {
                                console.log(t);
                            }
                        }), i.a.setStorageSync("sessionId", ""), i.a.setStorageSync("userid", ""), i.a.setStorageSync("logintype", ""), 
                        i.a.setStorageSync("userType", "1"), i.a.removeStorageSync("showboxFlag"), i.a.navigateTo({
                            url: "/videoBag/pages/login/login/login"
                        });
                    }, function(t) {
                        console.log(t);
                    });
                }
            }
        })((function(o, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + t(e));
            o.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(o, e) : o.__proto__ = e);
        }(u, i.a.Component), e(u, [ {
            key: "_constructor",
            value: function(t) {
                (function t(o, e, n) {
                    null === o && (o = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(o, e);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(n) : void 0 : null !== (o = Object.getPrototypeOf(o)) ? t(o, e, n) : void 0;
                })(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var o = this.data.isForbiddenLogin;
                return this.anonymousFunc0 = function(o) {
                    o.stopPropagation(), t.toLoginOut(o);
                }, Object.assign(this.__state, {
                    isForbiddenLogin: o
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), e = r = u, r.$$events = [ "anonymousFunc0" ], r.$$componentPath = "components/forbidden-login/forbidden-login", 
        r = e)) || r, r = e, Component(n(0).default.createComponent(e));
    },
    394: function(t, o, e) {
        t.exports = e.p + "components/forbidden-login/forbidden-login.wxml";
    }
}, [ [ 1651, 0, 1, 2 ] ] ]);