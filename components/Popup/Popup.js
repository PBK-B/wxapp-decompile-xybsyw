var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 17 ], {
    1034: function(e, t, n) {
        n(324);
    },
    1035: function(e, t, n) {},
    1583: function(t, n, o) {
        o.r(n), o(1034);
        var r = o(0), i = o.n(r);
        o(1035), n = function(e, t, n) {
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
        function p() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (e = t = a(this, (e = p.__proto__ || Object.getPrototypeOf(p)).call.apply(e, [ this ].concat(o)))).$usedState = [ "isOpened", "divZindex", "needTitle", "title", "children" ], 
            t.state = {
                divZindex: !1
            }, t.customComponents = [], a(t, e);
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
        })(p, r.Component), n(p, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, n, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, n, o) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "handleClose",
            value: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "通用弹窗-关闭"
                }), this.props.onClose();
            }
        }, {
            key: "handleTouchMove",
            value: function(e) {
                e.preventDefault(), e.stopPropagation();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                var t = this;
                e.isOpened ? this.setState({
                    divZindex: !1
                }) : setTimeout(function() {
                    t.setState({
                        divZindex: !0
                    });
                }, 500);
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (n = this.__props).isOpened, t = n.title, n = n.needTitle;
                return this.__state.divZindex, Object.assign(this.__state, {
                    isOpened: e,
                    needTitle: n,
                    title: t
                }), this.__state;
            }
        } ]), n = r = p, r.$$events = [ "handleTouchMove", "handleClose" ], r.$$componentPath = "components/Popup/Popup", 
        (r = n).defaultProps = {
            isOpened: !1,
            needTitle: !1,
            title: "",
            onClose: function() {}
        }, n = r, Component(o(0).default.createComponent(r));
    },
    324: function(e, t, n) {
        e.exports = n.p + "components/Popup/Popup.wxml";
    }
}, [ [ 1583, 0, 1 ] ] ]);