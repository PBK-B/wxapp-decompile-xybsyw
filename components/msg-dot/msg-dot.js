var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 41 ], {
    1108: function(t, e, o) {
        o(349);
    },
    1109: function(t, e, o) {},
    1606: function(e, o, n) {
        n.r(o), n(1108);
        var r = n(0), s = n.n(r);
        o = n(2), r = n.n(o), n(1109), o = function(t, e, o) {
            return e && a(t.prototype, e), o && a(t, o), t;
        };
        function a(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function i(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function u() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, u);
            for (var o = arguments.length, n = Array(o), r = 0; r < o; r++) n[r] = arguments[r];
            return (t = e = i(this, (t = u.__proto__ || Object.getPrototypeOf(u)).call.apply(t, [ this ].concat(n)))).$usedState = [ "showNum", "msgNum" ], 
            e.config = {
                component: !0
            }, e.customComponents = [], i(e, t);
        }
        o = r()({
            properties: {
                msgNum: {
                    type: Number,
                    value: 0
                },
                showNum: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {},
            methods: {}
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
        }(u, s.a.Component), o(u, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, n) : void 0;
                })(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new s.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = (e = this.data).showNum, e = e.msgNum;
                return Object.assign(this.__state, {
                    showNum: t,
                    msgNum: e
                }), this.__state;
            }
        } ]), o = r = u, r.$$events = [], r.$$componentPath = "components/msg-dot/msg-dot", 
        r = o)) || r, r = o, Component(n(0).default.createComponent(o));
    },
    349: function(t, e, o) {
        t.exports = o.p + "components/msg-dot/msg-dot.wxml";
    }
}, [ [ 1606, 0, 1 ] ] ]);