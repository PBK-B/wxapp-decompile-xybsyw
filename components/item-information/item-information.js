var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 37 ], {
    1083: function(t, e, a) {
        a(342);
    },
    1084: function(t, e, a) {},
    1601: function(e, a, o) {
        o.r(a), o(1083);
        var n = o(0), i = o.n(n), r = (a = o(2), n = o.n(a), o(1));
        o(1084), a = function(t, e, a) {
            return e && s(t.prototype, e), a && s(t, a), t;
        };
        function s(t, e) {
            for (var a = 0; a < e.length; a++) {
                var o = e[a];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        function u(e, a) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != t(a) && "function" != typeof a ? e : a;
        }
        function c() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, c);
            for (var a = arguments.length, o = Array(a), n = 0; n < a; n++) o[n] = arguments[n];
            return (t = e = u(this, (t = c.__proto__ || Object.getPrototypeOf(c)).call.apply(t, [ this ].concat(o)))).$usedState = [ "itemDataNew", "isMoreOperationShow", "itemIndex", "itemData" ], 
            e.config = {
                component: !0
            }, e.customComponents = [], u(e, t);
        }
        a = n()({
            properties: {
                itemData: {
                    type: Object,
                    value: ""
                },
                itemIndex: {
                    type: Number,
                    value: ""
                },
                isLogin: {
                    type: Boolean,
                    value: ""
                },
                isMoreOperationShow: {
                    type: Boolean,
                    value: !1
                },
                showComment: {
                    type: Boolean,
                    value: !1
                },
                isHot: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                itemDataNew: "",
                images: {}
            },
            ready: function() {
                this.setData({
                    itemDataNew: this.data.itemData
                });
            },
            methods: {
                imageLoad: function(t) {
                    var e;
                    t = (t = t.detail.width / (t.detail.height || 0)) <= .3 ? (e = 260, 360) : .3 < t && t < 1 ? (e = 360 * t, 
                    360) : 1 <= t && t <= 1.5 ? (e = 360) / t : 1.5 < t && t <= 2.5 ? (e = 510) / t : (e = 510, 
                    200);
                    this.data.images, this.setData({
                        images: {
                            width: e,
                            height: t
                        }
                    });
                },
                toNewsDetail: function(t) {
                    var e = t.currentTarget.dataset.item;
                    t = t.currentTarget.dataset.comment || null;
                    i.a.navigateTo({
                        url: "/growUp/pages/home/informationdetail/informationdetail?id=" + e.id + "&showComment=" + t
                    }), this.data.isHot && r.a.xyb_request("client/GetRecommendList!updateHotData.action", "POST", {
                        id: e.hotId
                    }, !1, !1).then(function(t) {}, function(t) {});
                },
                toDetail: function(t) {
                    var e = t.currentTarget.dataset.comment || null;
                    this.data.isLogin || 1 != e ? (this.toNewsDetail(t), i.a.setStorageSync("infodetailComment", !0)) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                },
                awesome: function(t) {
                    var e = this, a = this, o = t.currentTarget.dataset.id, n = t.currentTarget.dataset.status, i = this.data.itemDataNew;
                    a.data.isLogin && !i.praise && (i.showLikeGif = !0, this.setData({
                        itemDataNew: i
                    }), setTimeout(function() {
                        i.showLikeGif = !1, a.setData({
                            itemDataNew: i
                        });
                    }, 1e3)), a.data.isLogin ? r.a.xyb_request("client/question/SaveInformation!praiseData.action", "POST", {
                        id: o,
                        status: n ? 0 : 1
                    }, !0, !1).then(function(t) {
                        var o = e.data.itemDataNew;
                        o.praise = !n, o.totalPraise = t.data.totalPraise, a.setData({
                            itemDataNew: o
                        }), e.triggerEvent("changeInteractive", !1, {
                            bubbles: !1
                        });
                    }, function(t) {}) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                },
                moreOperation: function(t) {
                    var e = this;
                    i.a.createSelectorQuery().in(this.$scope).select(".moreOperationImg").boundingClientRect(function(a) {
                        a && a.top ? i.a.setStorageSync("moreOperation_positionY", a.top) : i.a.setStorageSync("moreOperation_positionY", t.touches[0].clientY), 
                        e.data.isLogin ? e.triggerEvent("showMoreOperation", e.data.itemData, {
                            bubbles: !1
                        }) : e.triggerEvent("changeShowlogin", !1, {
                            bubbles: !1
                        });
                    }).exec();
                },
                listImgError: function(t) {
                    console.log(t);
                    var e = {};
                    e["itemDataNew.imgList[" + t.target.dataset.index + "]"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEzd3d3c3Nzb29vMy8vU09OM7aHFAAAAA3RSTlMAJq2Rz5ivAAABt0lEQVRYw+2YS07EMAyGyw3YcALEBXB9gjgHAMf3vwp+5DkMEh0JiUW86DROPtv543akHk9vcMk+n48XuGgfx+tV5P2Ay7aRjWxkIxvZyD9EkLjdnjQvWkeBFIqZ1Nxl0N9Gv0dQzC4hZJYrgjRZVnIZ1tm8IMsauh12xII1BDRCVqOiJoB6Jb/3IZCOqIgjqe+FrFjdkEcJByx7MdcdRH2F2gnlWwR9mhui5SYfn3XpNyQiRu6OxKoSOuMQzHxmbEjuiGqUS8SNn3NGumIY8RpCYuJAYQlHtqOOnCIKCK+Ipa57TLV44akHmmJTYV7r6dtP0ByT1IaiizwjhbGq5o7cVv1wLqjne7pkNaxOnR4gDfWyt1tDTo0JrOtbWK0xAvBQzxAYbZk8s83VrdgsSQRAbT7tOFmyIDuCVOvymRGgBveGSTePWBl1hSb9nZC8h8rUMLBm8Q7AgYSOoeKCuDKZa1CJxhp1WRaeXhfx8Fmx3rPeDxn1Ir3O8Sz1LK1rc+0giZ/UOhXvILIIETWIIXN5A5EM80sIpN8xtJnC+/9lIxvZyEY28pcIXyXwkY9dD3xSu/7h7gsj7xO5+/krugAAAABJRU5ErkJggg==", 
                    this.setData(e);
                },
                followTopic: function() {
                    this.data.itemDataNew.talkFollowFlag || this.followTalk();
                },
                followTalk: function() {
                    var t = this;
                    r.a.xyb_request("client/question/SaveInformation!followTalk.action", "POST", {
                        talkType: t.data.itemDataNew.talkTypeDTO.id,
                        status: t.data.itemDataNew.talkFollowFlag ? 0 : 1
                    }, !0, !1).then(function(e) {
                        var a = t.data.itemDataNew;
                        a.talkFollowFlag = !0, t.setData({
                            itemDataNew: a
                        });
                    }, function(t) {
                        console.log(t);
                    });
                }
            }
        })((function(e, a) {
            if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + t(a));
            e.prototype = Object.create(a && a.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : e.__proto__ = a);
        }(c, i.a.Component), a(c, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, a, o) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, a);
                    return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, a, o) : void 0;
                })(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (n = this.data).itemDataNew, a = n.isMoreOperationShow, o = n.itemIndex, n = n.itemData;
                return this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.toNewsDetail(e);
                }, this.anonymousFunc1 = function(e) {
                    e.stopPropagation(), t.moreOperation(e);
                }, this.anonymousFunc2 = function(e) {
                    e.stopPropagation(), t.awesome(e);
                }, Object.assign(this.__state, {
                    itemDataNew: e,
                    isMoreOperationShow: a,
                    itemIndex: o,
                    itemData: n
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
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc2",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), a = n = c, n.$$events = [ "anonymousFunc0", "anonymousFunc1", "imageLoad", "listImgError", "anonymousFunc2" ], 
        n.$$componentPath = "components/item-information/item-information", n = a)) || n, 
        n = a, Component(o(0).default.createComponent(a));
    },
    342: function(t, e, a) {
        t.exports = a.p + "components/item-information/item-information.wxml";
    }
}, [ [ 1601, 0, 1, 2 ] ] ]);