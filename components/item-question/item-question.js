var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 40 ], {
    1059: function(t, o, n) {
        n(334);
    },
    1060: function(t, o, n) {},
    1593: function(o, n, e) {
        e.r(n), e(1059);
        var a = e(0), i = e.n(a), s = (n = e(2), a = e.n(n), e(1));
        e(1060), n = function(t, o, n) {
            return o && u(t.prototype, o), n && u(t, n), t;
        };
        function u(t, o) {
            for (var n = 0; n < o.length; n++) {
                var e = o[n];
                e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
                Object.defineProperty(t, e.key, e);
            }
        }
        function r(o, n) {
            if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != t(n) && "function" != typeof n ? o : n;
        }
        function c(t, o, n) {
            return o in t ? Object.defineProperty(t, o, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[o] = n, t;
        }
        var p = i.a.getApp();
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
                var t = this, o = this, n = o.data.itemData, e = '<img style="width:18px;height:18px;margin-right: 6px;position: relative;top:3px;" src="https://xcxresources.xybsyw.com/xcx/images/questionItemIcon.png"/>';
                n.title && -1 == n.title.indexOf(e) && (n.title = e + n.title), o.setData({
                    itemDataNew: n,
                    tagInfo: n.basePersonIdentityDTO
                }, function() {
                    i.a.createSelectorQuery().in(t.$scope).select("#anster_info" + o.data.itemIndex).boundingClientRect(function(t) {
                        console.log("问题", t), t && 55 < t.height ? o.setData(c({}, "itemDataNew.overEight", !0)) : o.setData(c({}, "itemDataNew.overEight", !1));
                    }).exec();
                });
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
                toQuestionDetail: function(t) {
                    var o = t.currentTarget.dataset.item;
                    t = t.currentTarget.dataset.comment;
                    i.a.navigateTo({
                        url: "/growUp/pages/home/questiondetail/questiondetail?questionId=" + o.id + "&showComment=" + t
                    }), this.data.isHot && s.a.xyb_request("client/GetRecommendList!updateHotData.action", "POST", {
                        id: o.hotId
                    }, !1, !1).then(function(t) {}, function(t) {});
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
                moreOperation: function(t) {
                    var o = this;
                    i.a.createSelectorQuery().in(this.$scope).select(".moreOperationImg").boundingClientRect(function(n) {
                        n && n.top ? i.a.setStorageSync("moreOperation_positionY", n.top) : i.a.setStorageSync("moreOperation_positionY", t.touches[0].clientY), 
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
                        var n = t.data.itemDataNew;
                        n.talkFollowFlag = !0, t.setData({
                            itemDataNew: n
                        });
                    }, function(t) {
                        console.log(t);
                    });
                },
                awesome: function(t) {
                    var o = this, n = this, e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.status, i = this.data.itemDataNew;
                    n.data.isLogin && !i.praise && (i.showLikeGif = !0, this.setData({
                        itemDataNew: i
                    }), setTimeout(function() {
                        i.showLikeGif = !1, n.setData({
                            itemDataNew: i
                        });
                    }, 1e3)), n.data.isLogin ? s.a.xyb_request("client/question/SaveInformation!praiseData.action", "POST", {
                        id: e,
                        status: a ? 0 : 1
                    }, !0, !1).then(function(t) {
                        var e = o.data.itemDataNew;
                        e.praise = !a, e.totalPraise = t.data.totalPraise, n.setData({
                            itemDataNew: e
                        }), o.triggerEvent("changeInteractive", !1, {
                            bubbles: !1
                        });
                    }, function(t) {}) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                }
            }
        })((function(o, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            o.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(o, n) : o.__proto__ = n);
        }(g, i.a.Component), n(g, [ {
            key: "_constructor",
            value: function(t) {
                (function t(o, n, e) {
                    null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(e) : void 0 : null !== (o = Object.getPrototypeOf(o)) ? t(o, n, e) : void 0;
                })(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var o = (c = this.data).itemDataNew, n = c.isMoreOperationShow, e = c.isXyq, a = c.itemIndex, i = c.images, s = c.index, u = c.isTopic, r = c.itemData, c = c.tagInfo;
                return this.anonymousFunc0 = function(o) {
                    o.stopPropagation(), t.toQuestionDetail(o);
                }, this.anonymousFunc1 = function(o) {
                    o.stopPropagation(), t.moreOperation(o);
                }, this.anonymousFunc2 = function(o) {
                    o.stopPropagation(), t.toPersonalpage(o);
                }, this.anonymousFunc3 = function(o) {
                    o.stopPropagation(), t.toPersonalpage(o);
                }, this.anonymousFunc4 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
                }, this.anonymousFunc5 = function(o) {
                    o.stopPropagation(), t.viewImg(o);
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
                    o.stopPropagation(), t.toTopicCircle(o);
                }, this.anonymousFunc12 = function(o) {
                    o.stopPropagation(), t.followTopic(o);
                }, this.anonymousFunc13 = function(o) {
                    o.stopPropagation(), t.toQuestionDetail(o);
                }, this.anonymousFunc14 = function(o) {
                    o.stopPropagation(), t.awesome(o);
                }, Object.assign(this.__state, {
                    itemDataNew: o,
                    isMoreOperationShow: n,
                    tagInfo: c,
                    isXyq: e,
                    itemIndex: a,
                    images: i,
                    index: s,
                    isTopic: u,
                    itemData: r
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
        } ]), n = a = g, a.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "errImg", "anonymousFunc3", "listImgError", "anonymousFunc4", "imageLoad", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14" ], 
        a.options = {
            addGlobalClass: !0
        }, a.$$componentPath = "components/item-question/item-question", a = n)) || a;
        function g() {
            var t, o;
            !function(t, o) {
                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
            }(this, g);
            for (var n = arguments.length, e = Array(n), a = 0; a < n; a++) e[a] = arguments[a];
            return (t = o = r(this, (t = g.__proto__ || Object.getPrototypeOf(g)).call.apply(t, [ this ].concat(e)))).$usedState = [ "itemDataNew", "isMoreOperationShow", "tagInfo", "isXyq", "itemIndex", "images", "index", "isTopic", "itemData" ], 
            o.config = {
                component: !0
            }, o.customComponents = [], r(o, t);
        }
        a = n, Component(e(0).default.createComponent(n));
    },
    334: function(t, o, n) {
        t.exports = n.p + "components/item-question/item-question.wxml";
    }
}, [ [ 1593, 0, 1, 2 ] ] ]);