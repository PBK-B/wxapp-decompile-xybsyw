var t = require("../../../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 287 ], {
    1022: function(t, e, n) {
        n(322);
    },
    1581: function(e, n, o) {
        o.r(n), o(1022);
        var r = o(9), a = o.n(r), i = o(0), s = o.n(i), p = o(20);
        n = o(41), r = function(t, e, n) {
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
        function l() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, l);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (t = e = u(this, (t = l.__proto__ || Object.getPrototypeOf(l)).call.apply(t, [ this ].concat(o)))).$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "color", "size" ], 
            e.customComponents = [], u(e, t);
        }
        Object(n.a)(), function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
        }(l, p.a), r(l, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, o) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, o) : void 0;
                })(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new s.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = (n = this.__props).color, e = "string" == typeof (o = n.size) ? o : String(o), n = {
                    width: o ? "" + s.a.pxTransform(parseInt(e)) : "",
                    height: o ? "" + s.a.pxTransform(parseInt(e)) : ""
                }, o = Object.assign({}, {
                    border: t ? "1px solid " + t : "",
                    "border-color": t ? t + " transparent transparent transparent" : ""
                }, n);
                e = Object(i.internal_inline_style)(n), t = Object(i.internal_inline_style)(o), 
                n = Object(i.internal_inline_style)(o), o = Object(i.internal_inline_style)(o);
                return Object.assign(this.__state, {
                    anonymousState__temp: e,
                    anonymousState__temp2: t,
                    anonymousState__temp3: n,
                    anonymousState__temp4: o
                }), this.__state;
            }
        } ]), r = p = l, p.$$events = [], p.$$componentPath = "node_modules/taro-ui/dist/weapp/components/loading/index", 
        r.defaultProps = {
            size: 0,
            color: ""
        }, r.propTypes = {
            size: a.a.oneOfType([ a.a.string, a.a.number ]),
            color: a.a.oneOfType([ a.a.string, a.a.number ])
        }, a = r, Component(o(0).default.createComponent(r));
    },
    322: function(t, e, n) {
        t.exports = n.p + "npm/taro-ui/dist/weapp/components/loading/index.wxml";
    }
}, [ [ 1581, 0, 1 ] ] ]);