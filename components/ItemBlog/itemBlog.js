var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 14 ], {
    1261: function(t, e, n) {
        n(418);
    },
    1262: function(t, e, n) {},
    1675: function(e, n, o) {
        o.r(n), o(1261);
        var a = o(0), i = o.n(a), r = (n = o(2), a = o.n(n), o(1));
        o(1262), n = function(t, e, n) {
            return e && s(t.prototype, e), n && s(t, n), t;
        };
        function s(t, e) {
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
        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var g = i.a.getApp();
        n = a()({
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
                }
            },
            data: {
                itemDataNew: "",
                images: {},
                tagInfo: "",
                ifIphoneX: !1
            },
            ready: function() {
                var t = this, e = this;
                e.setData({
                    ifIphoneX: g.globalData.isIphoneX
                });
                var n = e.data.itemData;
                e.setData({
                    itemDataNew: n,
                    tagInfo: n.basePersonIdentityDTO
                }, function() {
                    i.a.createSelectorQuery().in(t.$scope).select("#question_text" + e.data.itemIndex).boundingClientRect(function(t) {
                        t && 28 < (t.height || 0) ? e.setData(c({}, "itemDataNew.overOneLine", !0)) : e.setData(c({}, "itemDataNew.overOneLine", !1));
                    }).exec(), i.a.createSelectorQuery().in(t.$scope).select("#anster_info" + e.data.itemIndex).boundingClientRect(function(t) {
                        console.log("问题", t), t && 105 < (t.height || 0) ? e.setData(c({}, "itemDataNew.overFourLine", !0)) : e.setData(c({}, "itemDataNew.overFourLine", !1));
                    }).exec();
                });
            },
            methods: {
                imageLoad: function(t) {
                    var e;
                    t = (t = t.detail.width / t.detail.height) <= .3 ? (e = 260, 360) : .3 < t && t < 1 ? (e = 360 * t, 
                    360) : 1 <= t && t <= 1.5 ? (e = 360) / t : 1.5 < t && t <= 2.5 ? (e = 510) / t : (e = 510, 
                    200);
                    this.data.images, this.setData({
                        images: {
                            width: e,
                            height: t
                        }
                    });
                },
                errImg: function() {
                    var t = this.data.itemDataNew;
                    t.blogUserImgUrl = "https://xcxresources.xybsyw.com/xcx/images/avatar_man.png", 
                    this.setData({
                        itemDataNew: t
                    });
                },
                toBlogDetail: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "周日志展示组件-跳转周日志详情"
                    }), t = t.currentTarget.dataset.item, i.a.navigateTo({
                        url: "/growUp/pages/journal/journalDetails/journalDetails?blogId=" + t.blogId
                    });
                },
                toPersonalpage: function(t) {
                    var e = t.currentTarget.dataset.item;
                    t = 3 == e.creatorType ? 2 : 1;
                    this.data.isLogin ? i.a.navigateTo({
                        url: "/growUp/pages/home/homePage/index/index?personId=" + e.blogUid + "&creatorType=" + t
                    }) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                },
                viewImg: function(t) {
                    t = t.currentTarget.dataset.imgindex;
                    var e = [];
                    this.data.itemDataNew.blogImgs.forEach(function(t) {
                        e.push(t);
                    }), i.a.previewImage({
                        current: e[t],
                        urls: e
                    });
                },
                listImgError: function(t) {
                    console.log(t);
                    var e = t.target.dataset.index;
                    e && ((t = {})["itemDataNew.blogImgs[" + e + "]"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEzd3d3c3Nzb29vMy8vU09OM7aHFAAAAA3RSTlMAJq2Rz5ivAAABt0lEQVRYw+2YS07EMAyGyw3YcALEBXB9gjgHAMf3vwp+5DkMEh0JiUW86DROPtv543akHk9vcMk+n48XuGgfx+tV5P2Ay7aRjWxkIxvZyD9EkLjdnjQvWkeBFIqZ1Nxl0N9Gv0dQzC4hZJYrgjRZVnIZ1tm8IMsauh12xII1BDRCVqOiJoB6Jb/3IZCOqIgjqe+FrFjdkEcJByx7MdcdRH2F2gnlWwR9mhui5SYfn3XpNyQiRu6OxKoSOuMQzHxmbEjuiGqUS8SNn3NGumIY8RpCYuJAYQlHtqOOnCIKCK+Ipa57TLV44akHmmJTYV7r6dtP0ByT1IaiizwjhbGq5o7cVv1wLqjne7pkNaxOnR4gDfWyt1tDTo0JrOtbWK0xAvBQzxAYbZk8s83VrdgsSQRAbT7tOFmyIDuCVOvymRGgBveGSTePWBl1hSb9nZC8h8rUMLBm8Q7AgYSOoeKCuDKZa1CJxhp1WRaeXhfx8Fmx3rPeDxn1Ir3O8Sz1LK1rc+0giZ/UOhXvILIIETWIIXN5A5EM80sIpN8xtJnC+/9lIxvZyEY28pcIXyXwkY9dD3xSu/7h7gsj7xO5+/krugAAAABJRU5ErkJggg==", 
                    this.setData(t));
                },
                awesome: function(t) {
                    var e = this, n = this, o = t.currentTarget.dataset.id, a = t.currentTarget.dataset.status, i = this.data.itemDataNew;
                    n.data.isLogin && !i.blogUserPraise && (i.showLikeGif = !0, this.setData({
                        itemDataNew: i
                    }), setTimeout(function() {
                        i.showLikeGif = !1, n.setData({
                            itemDataNew: i
                        });
                    }, 1e3)), n.data.isLogin ? r.a.xyb_request("bangdi/UserPraiseNew!act.action", "POST", {
                        id: o,
                        state: a ? 0 : 1,
                        type: "blog"
                    }, !0, !1).then(function(t) {
                        var o = e.data.itemDataNew;
                        a ? (o.blogUserPraise = !1, --o.blogLikeCount) : (o.blogUserPraise = !0, o.blogLikeCount += 1), 
                        n.setData({
                            itemDataNew: o
                        }), e.triggerEvent("changeInteractive", !1, {
                            bubbles: !1
                        });
                    }, function(t) {}) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                }
            }
        })((function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
        }(p, i.a.Component), n(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, o) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, o) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (r = this.data).itemDataNew, n = r.itemIndex, o = r.images, a = r.index, i = (r.itemData, 
                r.tagInfo), r = r.ifIphoneX;
                return this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.toBlogDetail(e);
                }, this.anonymousFunc1 = function(e) {
                    e.stopPropagation(), t.toPersonalpage(e);
                }, this.anonymousFunc2 = function(e) {
                    e.stopPropagation(), t.toPersonalpage(e);
                }, this.anonymousFunc3 = function(e) {
                    e.stopPropagation(), t.viewImg(e);
                }, this.anonymousFunc4 = function(e) {
                    e.stopPropagation(), t.viewImg(e);
                }, this.anonymousFunc5 = function(e) {
                    e.stopPropagation(), t.viewImg(e);
                }, this.anonymousFunc6 = function(e) {
                    e.stopPropagation(), t.viewImg(e);
                }, this.anonymousFunc7 = function(e) {
                    e.stopPropagation(), t.viewImg(e);
                }, this.anonymousFunc8 = function(e) {
                    e.stopPropagation(), t.viewImg(e);
                }, this.anonymousFunc9 = function(e) {
                    e.stopPropagation(), t.viewImg(e);
                }, this.anonymousFunc10 = function(e) {
                    e.stopPropagation(), t.awesome(e);
                }, Object.assign(this.__state, {
                    itemDataNew: e,
                    tagInfo: i,
                    itemIndex: n,
                    ifIphoneX: r,
                    images: o,
                    index: a
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
        }, {
            key: "anonymousFunc3",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc4",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc5",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc6",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc7",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc8",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc9",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc10",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), n = a = p, a.$$events = [ "anonymousFunc0", "anonymousFunc1", "errImg", "anonymousFunc2", "listImgError", "anonymousFunc3", "imageLoad", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10" ], 
        a.options = {
            addGlobalClass: !0
        }, a.$$componentPath = "components/ItemBlog/itemBlog", a = n)) || a;
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return (t = e = u(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(o)))).$usedState = [ "itemDataNew", "tagInfo", "itemIndex", "ifIphoneX", "images", "index" ], 
            e.config = {
                component: !0
            }, e.customComponents = [], u(e, t);
        }
        a = n, Component(o(0).default.createComponent(n));
    },
    418: function(t, e, n) {
        t.exports = n.p + "components/ItemBlog/itemBlog.wxml";
    }
}, [ [ 1675, 0, 1, 2 ] ] ]);