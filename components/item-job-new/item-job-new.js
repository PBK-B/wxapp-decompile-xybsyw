var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 38 ], {
    1044: function(e, t, o) {
        o(326);
    },
    1045: function(e, t, o) {},
    1585: function(t, o, a) {
        a.r(o), a(1044);
        var n = a(0), r = a.n(n), i = (o = a(2), n = a.n(o), o = (a(1045), a(7)), a.n(o));
        o = function(e, t, o) {
            return t && A(e.prototype, t), o && A(e, o), e;
        };
        function A(e, t) {
            for (var o = 0; o < t.length; o++) {
                var a = t[o];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        function p(t, o) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != e(o) && "function" != typeof o ? t : o;
        }
        function s() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, s);
            for (var o = arguments.length, a = Array(o), n = 0; n < o; n++) a[n] = arguments[n];
            return (e = t = p(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [ this ].concat(a)))).$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "itemData", "borderFlag", "typeIndex", "binderrorimg" ], 
            t.config = {
                component: !0
            }, t.customComponents = [], p(t, e);
        }
        o = n()({
            properties: {
                itemData: {
                    type: Object,
                    value: ""
                },
                fromType: {
                    type: String,
                    value: ""
                },
                pageSource: {
                    type: String,
                    value: ""
                },
                typeIndex: {
                    type: Number,
                    value: 1
                },
                borderFlag: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {},
            methods: {
                toposDetail: function(e) {
                    var t;
                    r.a.eventCenter.trigger("taroClick", {
                        funName: "岗位展示组件-跳转岗位详情",
                        itemId: e.currentTarget.dataset.id
                    }), e.currentTarget.dataset.id && (t = e.currentTarget.dataset.id, e = "", this.data.pageSource && (e = "&pageSource=" + this.data.pageSource), 
                    r.a.navigateTo({
                        url: "/videoBag/pages/posdetail/posdetail?postid=" + t + "&fromType=" + this.data.fromType + e
                    }));
                },
                binderrorimg: function() {
                    var e = this.data.itemData;
                    e.logoUrl = "data:image/png;base64,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", 
                    this.setData({
                        itemData: e
                    });
                }
            }
        })((function(t, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + e(o));
            t.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : t.__proto__ = o);
        }(s, r.a.Component), o(s, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, o, a) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, o);
                    return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(a) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, o, a) : void 0;
                })(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = this.binderrorimg, t = (p = this.data).itemData, o = p.typeIndex, a = p.borderFlag, n = 2 == o ? i()("max_line1", 1 === (0 === t.publishNewFlag || t.publishNewFlag) && "post_name-text") : null, r = t.floorSalary || t.upperSalary ? +(t.floorSalary / 1e3).toFixed(1) + "-" + +(t.upperSalary / 1e3).toFixed(1) + "k/月" : null, A = t.upperSalary ? +(t.upperSalary / 1e3).toFixed(1) + "k/月" : null, p = i()("cut_text", 70 < t.entDealRate && "enterprise-name");
                return Object.assign(this.__state, {
                    anonymousState__temp: n,
                    anonymousState__temp2: r,
                    anonymousState__temp3: A,
                    anonymousState__temp4: p,
                    itemData: t,
                    borderFlag: a,
                    typeIndex: o,
                    binderrorimg: e
                }), this.__state;
            }
        } ]), o = n = s, n.$$events = [ "toposDetail", "binderrorimg" ], n.options = {
            addGlobalClass: !0
        }, n.$$componentPath = "components/item-job-new/item-job-new", n = o)) || n, n = o, 
        Component(a(0).default.createComponent(o));
    },
    326: function(e, t, o) {
        e.exports = o.p + "components/item-job-new/item-job-new.wxml";
    }
}, [ [ 1585, 0, 1 ] ] ]);