var t = require("../../../../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 280 ], {
    1172: function(t, e, o) {
        o(376);
    },
    1633: function(e, o, n) {
        n.r(o), n(1172);
        var r = n(0), a = n.n(r), s = (o = n(7), n.n(o));
        o = function(t, e, o) {
            return e && i(t.prototype, e), o && i(t, o), t;
        };
        function i(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function c(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var o = arguments.length, n = Array(o), r = 0; r < o; r++) n[r] = arguments[r];
            return (t = e = c(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(n)))).$usedState = [ "rootClass", "className", "children" ], 
            e.customComponents = [], c(e, t);
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
        })(p, (r = n(20)).a), o(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, n) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new a.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = s()("at-action-sheet__body", this.__props.className);
                return Object.assign(this.__state, {
                    rootClass: t
                }), this.__state;
            }
        } ]), o = r = p, r.$$events = [], r.$$componentPath = "node_modules/taro-ui/dist/weapp/components/action-sheet/body/index", 
        o = r = o, Component(n(0).default.createComponent(r));
    },
    376: function(t, e, o) {
        t.exports = o.p + "npm/taro-ui/dist/weapp/components/action-sheet/body/index.wxml";
    }
}, [ [ 1633, 0, 1 ] ] ]);