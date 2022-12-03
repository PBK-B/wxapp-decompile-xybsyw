var n = require("../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 295 ], {
    1299: function(n, t, e) {
        e(438);
    },
    1300: function(n, t, e) {},
    1694: function(t, e, o) {
        o.r(e), o(1299), o(1300);
        var r = o(0), a = o.n(r), u = o(12), s = o(5), i = function(n, t, e) {
            return t && c(n.prototype, t), e && c(n, e), n;
        };
        function c(n, t) {
            for (var e = 0; e < t.length; e++) {
                var o = t[e];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(n, o.key, o);
            }
        }
        function p(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != n(e) && "function" != typeof e ? t : e;
        }
        function f() {
            var n, t;
            !function(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, f);
            for (var e = arguments.length, o = Array(e), r = 0; r < e; r++) o[r] = arguments[r];
            return (n = t = p(this, (n = f.__proto__ || Object.getPrototypeOf(f)).call.apply(n, [ this ].concat(o)))).config = {
                usingComponents: {
                    "van-toast": "../../../../vant-weapp/dist/toast/index"
                }
            }, t.$usedState = [ "show" ], t.customComponents = [], p(t, n);
        }
        (function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + n(e));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        })(f, a.a.Component), i(f, [ {
            key: "_constructor",
            value: function(n) {
                (function n(t, e, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? n(t, e, o) : void 0;
                })(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "_constructor", this).call(this, n), 
                this.$$refs = new a.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                function n(n) {
                    a.a.eventCenter.trigger("taroClick", {
                        funName: "用户协议弹窗-" + (0 === n ? "校友邦用户协议" : "校友邦隐私政策")
                    });
                    var t = u.a.APPHTTP + "pages/webPage.html#/userAgreement?tabIndex=" + n;
                    t = {
                        title: 0 === n ? "校友邦用户协议" : "校友邦隐私政策",
                        url: encodeURIComponent(t)
                    };
                    a.a.navigateTo({
                        url: "/videoBag/pages/h5/h5?model=" + JSON.stringify(t)
                    });
                }
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = (i = this.__props).show, e = i.onConfirm, o = Object(r.useScope)(), i = function() {
                    Object(s.a)({
                        message: "很遗憾我们不能继续为您提供服务,您可以手动关闭小程序",
                        context: o
                    });
                };
                return this.anonymousFunc0 = function(n) {
                    return n.stopPropagation();
                }, this.anonymousFunc1 = function() {
                    return n(0);
                }, this.anonymousFunc2 = function() {
                    return n(1);
                }, this.anonymousFunc3 = i, this.anonymousFunc4 = e, Object.assign(this.__state, {
                    show: t
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(n) {
                n.stopPropagation();
            }
        }, {
            key: "anonymousFunc1",
            value: function(n) {}
        }, {
            key: "anonymousFunc2",
            value: function(n) {}
        }, {
            key: "anonymousFunc3",
            value: function(n) {}
        }, {
            key: "anonymousFunc4",
            value: function(n) {}
        } ]), i = e = f, e.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4" ], 
        e.$$componentPath = "pages/find/components/UserAgreementDialog/UserAgreementDialog", 
        (e = i).defaultProps = {
            show: !1,
            onConfirm: function() {}
        }, e.config = {
            usingComponents: {
                "van-toast": "../../../../vant-weapp/dist/toast/index"
            }
        }, i = e, Component(o(0).default.createComponent(e));
    },
    438: function(n, t, e) {
        n.exports = e.p + "pages/find/components/UserAgreementDialog/UserAgreementDialog.wxml";
    }
}, [ [ 1694, 0, 1, 2 ] ] ]);