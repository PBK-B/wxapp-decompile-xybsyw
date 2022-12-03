var t = require("../../../../../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 281 ], {
    1174: function(t, e, o) {
        o(378);
    },
    1635: function(e, o, n) {
        n.r(o), n(1174);
        var r, i = n(0), a = n.n(i), s = n(7), c = n.n(s);
        o = n(9), i = n.n(o), o = function(t, e, o) {
            return e && p(t.prototype, e), o && p(t, o), t;
        };
        function p(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function u(t, e, o) {
            null === t && (t = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(t, e);
            return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? u(t, e, o) : void 0;
        }
        function l(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function f() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, f);
            for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
            return e = l(this, (t = f.__proto__ || Object.getPrototypeOf(f)).call.apply(t, [ this ].concat(n))), 
            r.call(t = e), l(e, t);
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
        })(f, (s = n(20)).a), o(f, [ {
            key: "_constructor",
            value: function() {
                u(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "_constructor", this).apply(this, arguments), 
                this.$$refs = new a.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = c()("at-action-sheet__item", this.__props.className);
                return Object.assign(this.__state, {
                    rootClass: t
                }), this.__state;
            }
        } ]), o = s = f, s.$$events = [ "handleClick" ], s.$$componentPath = "node_modules/taro-ui/dist/weapp/components/action-sheet/body/item/index", 
        r = function() {
            var t = this;
            this.$usedState = [ "rootClass", "className", "children" ], this.handleClick = function(e) {
                "function" == typeof t.props.onClick && t.props.onClick(e);
            }, this.customComponents = [];
        }, o.defaultProps = {
            onClick: function() {}
        }, o.propTypes = {
            onClick: i.a.func
        }, Component(n(0).default.createComponent(o));
    },
    378: function(t, e, o) {
        t.exports = o.p + "npm/taro-ui/dist/weapp/components/action-sheet/body/item/index.wxml";
    }
}, [ [ 1635, 0, 1 ] ] ]);