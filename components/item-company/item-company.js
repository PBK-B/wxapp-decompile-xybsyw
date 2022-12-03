var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 34 ], {
    1126: function(t, e, o) {
        o(352);
    },
    1127: function(t, e, o) {},
    1609: function(e, o, n) {
        n.r(o), n(1126);
        var r = n(0), a = n.n(r);
        o = n(2), r = n.n(o), n(1127), o = function(t, e, o) {
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
            return (t = e = c(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(n)))).$usedState = [ "type", "itemData", "binderrorimg" ], 
            e.config = {
                component: !0
            }, e.customComponents = [], c(e, t);
        }
        o = r()({
            properties: {
                itemData: {
                    type: Object,
                    value: ""
                },
                itemIndex: {
                    type: Number,
                    value: ""
                },
                pageSource: {
                    type: Number,
                    value: ""
                },
                type: {
                    type: Number,
                    value: 1
                }
            },
            data: {},
            methods: {
                binderrorimg: function() {
                    var t = this.data.itemData;
                    t.personPic = "https://xcxresources.xybsyw.com/xcx/images/com_default.png", this.setData({
                        itemData: t
                    });
                },
                tocomdetail: function(t) {
                    var e;
                    t && t.currentTarget && t.currentTarget.dataset && (e = t.currentTarget.dataset.id, 
                    t = "", this.data.pageSource && (t = "&pageSource=" + this.data.pageSource), a.a.navigateTo({
                        url: "/videoBag/pages/comdetail/comdetail?comid=" + e + t
                    }));
                }
            }
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
        }(p, a.a.Component), o(p, [ {
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
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = this.binderrorimg, o = (n = this.data).type, n = n.itemData;
                return this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.tocomdetail(e);
                }, Object.assign(this.__state, {
                    type: o,
                    itemData: n,
                    binderrorimg: e
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), o = r = p, r.$$events = [ "anonymousFunc0", "binderrorimg" ], r.$$componentPath = "components/item-company/item-company", 
        r = o)) || r, r = o, Component(n(0).default.createComponent(o));
    },
    352: function(t, e, o) {
        t.exports = o.p + "components/item-company/item-company.wxml";
    }
}, [ [ 1609, 0, 1 ] ] ]);