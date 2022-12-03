var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 33 ], {
    1253: function(t, e, o) {
        o(414);
    },
    1254: function(t, e, o) {},
    1671: function(e, o, n) {
        n.r(o), n(1253);
        var a = n(0), r = n.n(a), i = n(2), c = (o = n.n(i), n(1254), "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
            return t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
        });
        i = function(t, e, o) {
            return e && u(t.prototype, e), o && u(t, o), t;
        };
        function u(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function s(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
            return (t = e = s(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(n)))).$usedState = [ "itemData", "loopArray655", "binderrorimg" ], 
            e.config = {
                component: !0
            }, e.anonymousFunc1Map = {}, e.customComponents = [], s(e, t);
        }
        i = o()({
            properties: {
                itemData: {
                    type: Object,
                    value: ""
                },
                pageSource: {
                    type: String,
                    value: ""
                }
            },
            data: {},
            methods: {
                tocomdetail: function(t) {
                    var e;
                    r.a.eventCenter.trigger("taroClick", {
                        funName: "企业展示组件-跳转公司详情"
                    }), t && t.currentTarget && t.currentTarget.dataset && (e = t.currentTarget.dataset.id, 
                    t = "", this.data.pageSource && (t = "&pageSource=" + this.data.pageSource), r.a.navigateTo({
                        url: "/videoBag/pages/comdetail/comdetail?comid=" + e + "&tabType=1" + t
                    }));
                },
                tocomdetail2: function(t) {
                    r.a.eventCenter.trigger("taroClick", {
                        funName: "企业展示组件-跳转岗位详情"
                    }), t && t.currentTarget && t.currentTarget.dataset && (t = t.currentTarget.dataset.id, 
                    r.a.navigateTo({
                        url: "/videoBag/pages/comdetail/comdetail?comid=" + t
                    }));
                },
                binderrorimg: function() {
                    var t = this.data.itemData;
                    t.logoUrl = "https://xcxresources.xybsyw.com/xcx/images/com_default.png", this.setData({
                        itemData: t
                    });
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
        }(p, r.a.Component), i(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, n) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = this.binderrorimg, o = this.data.itemData;
                this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.tocomdetail(e);
                };
                var n = 0 < o.hotPostNum ? o.postVoList.map(function(e, o) {
                    return e = {
                        $original: Object(a.internal_get_original)(e)
                    }, o = "ehezz" + o, t.anonymousFunc1Map[o] = function(e) {
                        e.stopPropagation(), t.tocomdetail2(e);
                    }, {
                        _$indexKey: o,
                        $original: e.$original
                    };
                }) : [];
                return Object.assign(this.__state, {
                    itemData: o,
                    loopArray655: n,
                    binderrorimg: e
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc1",
            value: function(t) {
                for (var e, o = arguments.length, n = Array(1 < o ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = arguments[a];
                return "object" === (void 0 === n ? "undefined" : c(n)) && n.stopPropagation && n.stopPropagation(), 
                this.anonymousFunc1Map[t] && (e = this.anonymousFunc1Map)[t].apply(e, n);
            }
        } ]), i = o = p, o.$$events = [ "anonymousFunc0", "binderrorimg", "anonymousFunc1" ], 
        o.options = {
            addGlobalClass: !0
        }, o.$$componentPath = "components/item-company-new/item-company-new", o = i)) || o, 
        o = i, Component(n(0).default.createComponent(i));
    },
    414: function(t, e, o) {
        t.exports = o.p + "components/item-company-new/item-company-new.wxml";
    }
}, [ [ 1671, 0, 1 ] ] ]);