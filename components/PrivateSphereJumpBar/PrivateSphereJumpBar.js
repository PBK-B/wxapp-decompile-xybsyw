var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 18 ], {
    1245: function(t, e, r) {
        r(410);
    },
    1246: function(t, e, r) {},
    1667: function(e, r, n) {
        n.r(r), n(1245);
        var o = n(0), i = n.n(o);
        n(1246), r = function(t, e, r) {
            return e && a(t.prototype, e), r && a(t, r), t;
        };
        function a(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function p(e, r) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !r || "object" != t(r) && "function" != typeof r ? e : r;
        }
        function c() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, c);
            for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
            return (t = e = p(this, (t = c.__proto__ || Object.getPrototypeOf(c)).call.apply(t, [ this ].concat(n)))).$usedState = [ "title" ], 
            e.customComponents = [], p(e, t);
        }
        (function(e, r) {
            if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + t(r));
            e.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
        })(c, o.Component), r(c, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, r, n) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, r);
                    return void 0 !== o ? "value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, r, n) : void 0;
                })(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "handleClick",
            value: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转私域栏目-关闭"
                }), this.props.onClick();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = this.__props.title;
                return Object.assign(this.__state, {
                    title: t
                }), this.__state;
            }
        } ]), r = o = c, o.$$events = [ "handleClick" ], o.$$componentPath = "components/PrivateSphereJumpBar/PrivateSphereJumpBar", 
        (o = r).defaultProps = {
            title: "",
            onClick: function() {}
        }, r = o, Component(n(0).default.createComponent(o));
    },
    410: function(t, e, r) {
        t.exports = r.p + "components/PrivateSphereJumpBar/PrivateSphereJumpBar.wxml";
    }
}, [ [ 1667, 0, 1 ] ] ]);