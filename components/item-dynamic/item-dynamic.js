var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 36 ], {
    1057: function(t, o, a) {
        a(333);
    },
    1058: function(t, o, a) {},
    1592: function(o, a, n) {
        n.r(a), n(1057);
        var e = n(0), i = n.n(e), s = (a = n(2), e = n.n(a), n(1));
        n(1058), a = function(t, o, a) {
            return o && r(t.prototype, o), a && r(t, a), t;
        };
        function r(t, o) {
            for (var a = 0; a < o.length; a++) {
                var n = o[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function u(o, a) {
            if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != t(a) && "function" != typeof a ? o : a;
        }
        function c(t, o, a) {
            return o in t ? Object.defineProperty(t, o, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[o] = a, t;
        }
        var p = i.a.getApp();
        a = e()({
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
                isXyq: {
                    type: Boolean,
                    value: ""
                },
                isTopic: {
                    type: Boolean,
                    value: !1
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
                images: {},
                tagInfo: ""
            },
            ready: function() {
                var t = this;
                t.setData({
                    itemDataNew: t.data.itemData,
                    tagInfo: t.data.itemData.basePersonIdentityDTO
                }), i.a.createSelectorQuery().in(this.$scope).select("#anster_info" + t.data.itemIndex).boundingClientRect(function(o) {
                    var a;
                    o && 143 < (o.height || 0) ? t.setData((c(a = {}, "itemDataNew.overEight", !0), 
                    c(a, "itemDataNew.showAll", !1), a)) : t.setData((c(a = {}, "itemDataNew.showAll", !1), 
                    c(a, "itemDataNew.overEight", !1), a));
                }).exec();
            },
            methods: {
                imageLoad: function(t) {
                    var o;
                    t = (t = t.detail.width / t.detail.height) <= .3 ? (o = 260, 360) : .3 < t && t < 1 ? (o = 360 * t, 
                    360) : 1 <= t && t <= 1.5 ? (o = 360) / t : 1.5 < t && t <= 2.5 ? (o = 510) / t : (o = 510, 
                    200);
                    this.data.images, this.setData({
                        images: {
                            width: o,
                            height: t
                        }
                    });
                },
                errImg: function() {
                    var t = this.data.itemDataNew;
                    t.personPic = "https://xcxresources.xybsyw.com/xcx/images/avatar_man.png", this.setData({
                        itemDataNew: t
                    });
                },
                toDetailspage: function(t) {
                    var o = t.currentTarget.dataset.item, a = t.currentTarget.dataset.type;
                    t = t.currentTarget.dataset.comment || null;
                    2 == a ? i.a.navigateTo({
                        url: "/growUp/pages/home/answerdetail/answerdetail?questionId=" + o.questionId + "&answerId=" + o.id
                    }) : i.a.navigateTo({
                        url: "/growUp/pages/home/dynamicDetail/dynamicDetail?dynamicId=" + o.id + "&showComment=" + t
                    }), this.data.isHot && s.a.xyb_request("client/GetRecommendList!updateHotData.action", "POST", {
                        id: o.hotId
                    }, !1, !1).then(function(t) {}, function(t) {});
                },
                toDetail: function(t) {
                    var o = t.currentTarget.dataset.comment || null;
                    this.data.isLogin || 1 != o ? (this.toDetailspage(t), 2 == t.currentTarget.dataset.type ? i.a.setStorageSync("answerdetailComment", !0) : i.a.setStorageSync("dynamicDetailComment", !0)) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                },
                toTopicCircle: function(t) {
                    2 != (t = t.currentTarget.dataset.dto).status ? p.globalData.isLogin ? i.a.navigateTo({
                        url: "/growUp/pages/home/topicCircle/topicCircle?topicId=" + t.id
                    }) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    }) : i.a.showToast({
                        title: "此话题已停止讨论",
                        icon: "none"
                    });
                },
                toPersonalpage: function(t) {
                    var o = t.currentTarget.dataset.item;
                    t = 3 == o.creatorType ? 2 : 1;
                    this.data.isLogin ? i.a.navigateTo({
                        url: "/growUp/pages/home/homePage/index/index?personId=" + o.creatorId + "&creatorType=" + t
                    }) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                },
                viewImg: function(t) {
                    this.setData({
                        gotoShowBigImg: !0
                    });
                    t = t.currentTarget.dataset.imgindex;
                    var o = [];
                    this.data.itemDataNew.imgList.forEach(function(t) {
                        o.push(t);
                    }), i.a.previewImage({
                        current: o[t],
                        urls: o
                    });
                },
                awesome: function(t) {
                    var o = this, a = this, n = t.currentTarget.dataset.id, e = t.currentTarget.dataset.status, i = this.data.itemDataNew;
                    a.data.isLogin && !i.praise && (i.showLikeGif = !0, this.setData({
                        itemDataNew: i
                    }), setTimeout(function() {
                        i.showLikeGif = !1, a.setData({
                            itemDataNew: i
                        });
                    }, 1e3)), a.data.isLogin ? s.a.xyb_request("client/question/SaveInformation!praiseData.action", "POST", {
                        id: n,
                        status: e ? 0 : 1
                    }, !0, !1).then(function(t) {
                        var n = o.data.itemDataNew;
                        n.praise = !e, n.totalPraise = t.data.totalPraise, a.setData({
                            itemDataNew: n
                        }), o.triggerEvent("changeInteractive", !1, {
                            bubbles: !1
                        });
                    }, function(t) {}) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                },
                moreOperation: function(t) {
                    var o = this;
                    i.a.createSelectorQuery().in(this.$scope).select(".moreOperationImg").boundingClientRect(function(a) {
                        a && a.top ? i.a.setStorageSync("moreOperation_positionY", a.top) : i.a.setStorageSync("moreOperation_positionY", t.touches[0].clientY), 
                        o.data.isLogin ? o.triggerEvent("showMoreOperation", o.data.itemData, {
                            bubbles: !1
                        }) : o.triggerEvent("changeShowlogin", !1, {
                            bubbles: !1
                        });
                    }).exec();
                },
                listImgError: function(t) {
                    console.log(t);
                    var o = t.target.dataset.index;
                    o && ((t = {})["itemDataNew.imgList[" + o + "]"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEzd3d3c3Nzb29vMy8vU09OM7aHFAAAAA3RSTlMAJq2Rz5ivAAABt0lEQVRYw+2YS07EMAyGyw3YcALEBXB9gjgHAMf3vwp+5DkMEh0JiUW86DROPtv543akHk9vcMk+n48XuGgfx+tV5P2Ay7aRjWxkIxvZyD9EkLjdnjQvWkeBFIqZ1Nxl0N9Gv0dQzC4hZJYrgjRZVnIZ1tm8IMsauh12xII1BDRCVqOiJoB6Jb/3IZCOqIgjqe+FrFjdkEcJByx7MdcdRH2F2gnlWwR9mhui5SYfn3XpNyQiRu6OxKoSOuMQzHxmbEjuiGqUS8SNn3NGumIY8RpCYuJAYQlHtqOOnCIKCK+Ipa57TLV44akHmmJTYV7r6dtP0ByT1IaiizwjhbGq5o7cVv1wLqjne7pkNaxOnR4gDfWyt1tDTo0JrOtbWK0xAvBQzxAYbZk8s83VrdgsSQRAbT7tOFmyIDuCVOvymRGgBveGSTePWBl1hSb9nZC8h8rUMLBm8Q7AgYSOoeKCuDKZa1CJxhp1WRaeXhfx8Fmx3rPeDxn1Ir3O8Sz1LK1rc+0giZ/UOhXvILIIETWIIXN5A5EM80sIpN8xtJnC+/9lIxvZyEY28pcIXyXwkY9dD3xSu/7h7gsj7xO5+/krugAAAABJRU5ErkJggg==", 
                    this.setData(t));
                },
                followTopic: function() {
                    this.data.itemDataNew.talkFollowFlag || this.followTalk();
                },
                followTalk: function() {
                    var t = this;
                    s.a.xyb_request("client/question/SaveInformation!followTalk.action", "POST", {
                        talkType: t.data.itemDataNew.talkTypeDTO.id,
                        status: t.data.itemDataNew.talkFollowFlag ? 0 : 1
                    }, !0, !1).then(function(o) {
                        var a = t.data.itemDataNew;
                        a.talkFollowFlag = !0, t.setData({
                            itemDataNew: a
                        });
                    }, function(t) {
                        console.log(t);
                    });
                },
                changeShowAll: function() {
                    this.setData(c({}, "itemDataNew.showAll", !this.data.itemDataNew.showAll));
                }
            }
        })((function(o, a) {
            if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + t(a));
            o.prototype = Object.create(a && a.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(o, a) : o.__proto__ = a);
        }(l, i.a.Component), a(l, [ {
            key: "_constructor",
            value: function(t) {
                (function t(o, a, n) {
                    null === o && (o = Function.prototype);
                    var e = Object.getOwnPropertyDescriptor(o, a);
                    return void 0 !== e ? "value" in e ? e.value : void 0 !== (e = e.get) ? e.call(n) : void 0 : null !== (o = Object.getPrototypeOf(o)) ? t(o, a, n) : void 0;
                })(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var o = this.data, a = o.itemDataNew, e = o.isMoreOperationShow, i = o.isXyq, s = o.itemIndex, r = o.images, u = o.index, c = o.isTopic, p = o.itemData, l = o.tagInfo;
                return this.anonymousFunc0 = function(o) {
                    o.stopPropagation(), t.toDetailspage(o);
                }, this.anonymousFunc1 = function(o) {
                    o.stopPropagation(), t.moreOperation(o);
                }, this.anonymousFunc2 = function(o) {
                    o.stopPropagation(), t.toPersonalpage(o);
                }, this.anonymousFunc3 = function(o) {
                    o.stopPropagation(), t.toPersonalpage(o);
                }, this.anonymousFunc4 = function(o) {
                    o.stopPropagation(), t.changeShowAll(o);
                }, o = a.overEight && !a.showAll ? n(35) : null, this.anonymousFunc5 = function(o) {
                    o.stopPropagation(), t.changeShowAll(o);
                }, this.anonymousFunc6 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
                }, this.anonymousFunc7 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
                }, this.anonymousFunc8 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
                }, this.anonymousFunc9 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
                }, this.anonymousFunc10 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
                }, this.anonymousFunc11 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
                }, this.anonymousFunc12 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
                }, this.anonymousFunc13 = function(o) {
                    o.stopPropagation(), t.toTopicCircle(o);
                }, this.anonymousFunc14 = function(o) {
                    o.stopPropagation(), t.followTopic(o);
                }, this.anonymousFunc15 = function(o) {
                    o.stopPropagation(), t.awesome(o);
                }, Object.assign(this.__state, {
                    anonymousState__temp: o,
                    itemDataNew: a,
                    isMoreOperationShow: e,
                    tagInfo: l,
                    isXyq: i,
                    itemIndex: s,
                    images: r,
                    index: u,
                    isTopic: c,
                    itemData: p
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
        }, {
            key: "anonymousFunc11",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc12",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc13",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc14",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc15",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), a = e = l, e.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "errImg", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "imageLoad", "listImgError", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15" ], 
        e.options = {
            addGlobalClass: !0
        }, e.$$componentPath = "components/item-dynamic/item-dynamic", e = a)) || e;
        function l() {
            var t, o;
            !function(t, o) {
                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
            }(this, l);
            for (var a = arguments.length, n = Array(a), e = 0; e < a; e++) n[e] = arguments[e];
            return (t = o = u(this, (t = l.__proto__ || Object.getPrototypeOf(l)).call.apply(t, [ this ].concat(n)))).$usedState = [ "anonymousState__temp", "itemDataNew", "isMoreOperationShow", "tagInfo", "isXyq", "itemIndex", "images", "index", "isTopic", "itemData" ], 
            o.config = {
                component: !0
            }, o.customComponents = [], u(o, t);
        }
        e = a, Component(n(0).default.createComponent(a));
    },
    333: function(t, o, a) {
        t.exports = a.p + "components/item-dynamic/item-dynamic.wxml";
    }
}, [ [ 1592, 0, 1, 2 ] ] ]);