require("../../@babel/runtime/helpers/Arrayincludes");

var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 27 ], {
    1080: function(e, t, n) {
        n(340);
    },
    1599: function(t, n, o) {
        o.r(n), o(1080);
        var r = o(0), a = o.n(r), i = function(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), e;
        };
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function p(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != e(n) && "function" != typeof n ? t : n;
        }
        function u() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, u);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (e = t = p(this, (e = u.__proto__ || Object.getPrototypeOf(u)).call.apply(e, [ this ].concat(o)))).$usedState = [ "anonymousState__temp", "_$anonymousState__temp", "anonymousState__temp3", "_$anonymousState__temp2", "anonymousState__temp5", "_$anonymousState__temp3" ], 
            t.customComponents = [], p(t, e);
        }
        (function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + e(n));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        })(u, a.a.Component), i(u, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, n, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, n, o) : void 0;
                })(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new a.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var e, t, n;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var o = this.__props, a = o.name, i = void 0 === a ? "" : a, s = o.imageStyle;
                if (!i) return "";
                if (a = i.lastIndexOf("."), o = i.length, a = -1 < (i = (i = i.substring(a + 1, o).toLocaleUpperCase()).includes("?") ? i.split("?")[0] : i).indexOf("DOC") || -1 < i.indexOf("DOCX"), 
                o = -1 < i.indexOf("PDF"), i = -1 < i.indexOf("JPG") || -1 < i.indexOf("JPEG") || -1 < i.indexOf("PNG") || -1 < i.indexOf("GIF"), 
                a) e = Object(r.internal_inline_style)(s); else if (o) t = Object(r.internal_inline_style)(s); else {
                    if (!i) return "";
                    n = Object(r.internal_inline_style)(s);
                }
                return Object.assign(this.__state, {
                    anonymousState__temp: a,
                    _$anonymousState__temp: e,
                    anonymousState__temp3: o,
                    _$anonymousState__temp2: t,
                    anonymousState__temp5: i,
                    _$anonymousState__temp3: n
                }), this.__state;
            }
        } ]), i = n = u, n.$$events = [], n.$$componentPath = "components/fileImage/fileImage", 
        (n = i).defaultProps = {
            imageStyle: {
                width: "62rpx",
                height: "78rpx"
            }
        }, i = n, Component(o(0).default.createComponent(n));
    },
    340: function(e, t, n) {
        e.exports = n.p + "components/fileImage/fileImage.wxml";
    }
}, [ [ 1599, 0, 1 ] ] ]);