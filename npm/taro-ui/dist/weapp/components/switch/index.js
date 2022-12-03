var e = require("../../../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 288 ], {
    1052: function(e, t, o) {
        o(330);
    },
    1589: function(t, o, n) {
        n.r(o), n(1052);
        var r = n(0), a = n.n(r), s = n(7), i = n.n(s), c = n(9);
        o = n.n(c), c = function(e, t, o) {
            return t && l(e.prototype, t), o && l(e, o), e;
        };
        function l(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        function p(e, t, o) {
            null === e && (e = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(e, t);
            return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? p(e, t, o) : void 0;
        }
        function u(t, o) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != e(o) && "function" != typeof o ? t : o;
        }
        function h() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, h);
            for (var o = arguments.length, n = Array(o), r = 0; r < o; r++) n[r] = arguments[r];
            return (e = t = u(this, (e = h.__proto__ || Object.getPrototypeOf(h)).call.apply(e, [ this ].concat(n)))).$usedState = [ "anonymousState__temp", "rootCls", "containerCls", "checked", "color", "title", "customStyle", "className", "disabled", "border" ], 
            t.handleChange = function(e) {
                e = (o = e.detail).value;
                var o = o.checked;
                t.props.onChange && t.props.onChange(void 0 === e ? o : e);
            }, t.customComponents = [], u(t, e);
        }
        (function(t, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + e(o));
            t.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : t.__proto__ = o);
        })(h, (s = n(20)).a), c(h, [ {
            key: "_constructor",
            value: function() {
                p(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "_constructor", this).apply(this, arguments), 
                this.$$refs = new a.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (c = this.__props).customStyle, t = c.className, o = c.disabled, n = c.border, a = c.title, s = c.checked, c = c.color;
                t = i()("at-switch", {
                    "at-switch--without-border": !n
                }, t), o = i()("at-switch__container", {
                    "at-switch--disabled": o
                }), e = Object(r.internal_inline_style)(e);
                return Object.assign(this.__state, {
                    anonymousState__temp: e,
                    rootCls: t,
                    containerCls: o,
                    checked: s,
                    color: c,
                    title: a
                }), this.__state;
            }
        } ]), c = s = h, s.$$events = [ "handleChange" ], s.$$componentPath = "node_modules/taro-ui/dist/weapp/components/switch/index", 
        c.defaultProps = {
            customStyle: "",
            className: "",
            title: "",
            color: "#6190e8",
            border: !0,
            disabled: !1,
            checked: !1,
            onChange: function() {}
        }, c.propTypes = {
            customStyle: o.a.oneOfType([ o.a.object, o.a.string ]),
            className: o.a.oneOfType([ o.a.array, o.a.string ]),
            title: o.a.string,
            color: o.a.string,
            checked: o.a.bool,
            border: o.a.bool,
            disabled: o.a.bool,
            onChange: o.a.func
        }, o = c, Component(n(0).default.createComponent(c));
    },
    330: function(e, t, o) {
        e.exports = o.p + "npm/taro-ui/dist/weapp/components/switch/index.wxml";
    }
}, [ [ 1589, 0, 1 ] ] ]);