var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 29 ], {
    1146: function(e, t, n) {
        n(362);
    },
    1147: function(e, t, n) {},
    1619: function(t, n, o) {
        o.r(n), o(1146);
        var r = o(0), i = o.n(r);
        n = o(2), r = o.n(n), o(1147), n = function(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), e;
        };
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function a(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != e(n) && "function" != typeof n ? t : n;
        }
        function c() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, c);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (e = t = a(this, (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(e, [ this ].concat(o)))).$usedState = [ "isForbiddenSendMsg", "forbiddenSendMsgInfo" ], 
            t.config = {
                component: !0
            }, t.customComponents = [], a(t, e);
        }
        n = r()({
            properties: {
                isForbiddenSendMsg: {
                    type: Boolean,
                    value: !1
                },
                forbiddenSendMsgInfo: {
                    type: Object,
                    value: ""
                }
            },
            data: {},
            ready: function() {},
            detached: function() {},
            methods: {
                clickButton: function() {
                    this.setData({
                        isForbiddenSendMsg: !1
                    });
                }
            }
        })((function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + e(n));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(c, i.a.Component), n(c, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, n, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, n, o) : void 0;
                })(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var e = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = (n = this.data).forbiddenSendMsgInfo, n = n.isForbiddenSendMsg;
                return this.anonymousFunc0 = function(t) {
                    t.stopPropagation(), e.clickButton(t);
                }, Object.assign(this.__state, {
                    isForbiddenSendMsg: n,
                    forbiddenSendMsgInfo: t
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(e) {
                e.stopPropagation();
            }
        } ]), n = r = c, r.$$events = [ "anonymousFunc0" ], r.$$componentPath = "components/forbidden-send-msg/forbidden-send-msg", 
        r = n)) || r, r = n, Component(o(0).default.createComponent(n));
    },
    362: function(e, t, n) {
        e.exports = n.p + "components/forbidden-send-msg/forbidden-send-msg.wxml";
    }
}, [ [ 1619, 0, 1 ] ] ]);