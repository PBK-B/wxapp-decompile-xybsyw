var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 289 ], {
    1573: function(e, n, o) {
        o.r(n), o(975), o(976);
        var r = o(0), i = o.n(r), a = function(t, e, n) {
            return e && c(t.prototype, e), n && c(t, n), t;
        };
        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        function u(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != t(n) && "function" != typeof n ? e : n;
        }
        function s() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, s);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (t = e = u(this, (t = s.__proto__ || Object.getPrototypeOf(s)).call.apply(t, [ this ].concat(o)))).config = {
                navigationBarTitleText: "校友邦",
                usingComponents: {}
            }, e.$usedState = [ "params" ], e.customComponents = [], u(e, t);
        }
        (function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
        })(s, i.a.Component), a(s, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, o) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, o) : void 0;
                })(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                function t() {
                    i.a.redirectTo({
                        url: "/pages/find/index/index"
                    });
                }
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix, this.__props;
                var e = Object(r.useRouter)().params;
                return Object(r.useEffect)(function() {
                    return console.log("router", e.desc), function() {
                        console.log("卸载");
                    };
                }, []), this.anonymousFunc0 = t, Object.assign(this.__state, {
                    params: e
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {}
        } ]), a = n = s, n.$$events = [ "anonymousFunc0" ], n.$$componentPath = "pages/AuthenticationError/AuthenticationError", 
        (n = a).config = {
            navigationBarTitleText: "校友邦",
            usingComponents: {}
        }, n.defaultProps = {}, a = n, Component(o(0).default.createComponent(n, !0));
    },
    314: function(t, e, n) {
        t.exports = n.p + "pages/AuthenticationError/AuthenticationError.wxml";
    },
    975: function(t, e, n) {
        n(314);
    },
    976: function(t, e, n) {}
}, [ [ 1573, 0, 1 ] ] ]);