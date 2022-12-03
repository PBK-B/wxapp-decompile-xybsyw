var e = require("../../../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 286 ], {
    1576: function(t, o, n) {
        n.r(o), n(990);
        var r = n(7), a = n.n(r), s = n(9), i = n.n(s), c = n(0), p = n.n(c);
        o = n(20), r = n(41), s = function(e, t, o) {
            return t && l(e.prototype, t), o && l(e, o), e;
        };
        function l(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        function u(t, o) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != e(o) && "function" != typeof o ? t : o;
        }
        function f() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, f);
            for (var o = arguments.length, n = Array(o), r = 0; r < o; r++) n[r] = arguments[r];
            return (e = t = u(this, (e = f.__proto__ || Object.getPrototypeOf(f)).call.apply(e, [ this ].concat(n)))).$usedState = [ "anonymousState__temp", "anonymousState__temp2", "customStyle", "className", "prefixClass", "value", "size", "color" ], 
            t.customComponents = [], u(t, e);
        }
        Object(r.a)(), function(t, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + e(o));
            t.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : t.__proto__ = o);
        }(f, o.a), s(f, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, o, n) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, o);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(n) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, o, n) : void 0;
                })(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new p.a.RefsArray();
            }
        }, {
            key: "handleClick",
            value: function() {
                this.props.onClick && this.props.onClick(arguments);
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (s = this.__props).customStyle, t = s.className, o = s.prefixClass, n = s.value, r = s.size, s = s.color;
                s = {
                    fontSize: "" + p.a.pxTransform(2 * parseInt(String(r))),
                    color: s
                }, n = n ? o + "-" + n : "", t = a()(o, n, t), e = Object(c.internal_inline_style)(this.mergeStyle(s, e));
                return Object.assign(this.__state, {
                    anonymousState__temp: t,
                    anonymousState__temp2: e
                }), this.__state;
            }
        } ]), s = o = f, o.$$events = [ "handleClick" ], o.$$componentPath = "node_modules/taro-ui/dist/weapp/components/icon/index", 
        s.defaultProps = {
            customStyle: "",
            className: "",
            prefixClass: "at-icon",
            value: "",
            color: "",
            size: 24,
            onClick: function() {}
        }, s.propTypes = {
            customStyle: i.a.oneOfType([ i.a.object, i.a.string ]),
            className: i.a.oneOfType([ i.a.array, i.a.string ]),
            prefixClass: i.a.string,
            value: i.a.string,
            color: i.a.string,
            size: i.a.oneOfType([ i.a.string, i.a.number ]),
            onClick: i.a.func
        }, i = s, Component(n(0).default.createComponent(s));
    },
    317: function(e, t, o) {
        e.exports = o.p + "npm/taro-ui/dist/weapp/components/icon/index.wxml";
    },
    990: function(e, t, o) {
        o(317);
    }
}, [ [ 1576, 0, 1 ] ] ]);