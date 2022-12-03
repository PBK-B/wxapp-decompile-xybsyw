var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 32 ], {
    1061: function(t, n, o) {
        o(335);
    },
    1062: function(t, n, o) {},
    1594: function(n, o, e) {
        e.r(o), e(1061);
        var a = e(0), i = e.n(a), s = (o = e(2), a = e.n(o), e(1));
        e(1062), o = function(t, n, o) {
            return n && u(t.prototype, n), o && u(t, o), t;
        };
        function u(t, n) {
            for (var o = 0; o < n.length; o++) {
                var e = n[o];
                e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
                Object.defineProperty(t, e.key, e);
            }
        }
        function r(n, o) {
            if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? n : o;
        }
        var c = i.a.getApp();
        o = a()({
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
                isHelpType: {
                    type: Number,
                    value: 0
                },
                isTopic: {
                    type: Boolean,
                    value: !1
                },
                isMoreOperationShow: {
                    type: Boolean,
                    value: !1
                },
                cityChannelId: {
                    type: String,
                    value: ""
                },
                isHot: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                itemDataNew: "",
                overEight: !1,
                images: {},
                tagInfo: ""
            },
            ready: function() {
                var t = this, n = t.data.itemData, o = '<img style="width:18px;height:18px;margin-right: 5px;position: relative;top:2px;" src="https://xcxresources.xybsyw.com/xcx/images/hot_answer.png?v=1"/>';
                t.data.isXyq ? -1 == n.content.indexOf(o) && (n.content = o + n.content) : -1 == n.answerContent.indexOf(o) && (n.answerContent = o + n.answerContent), 
                t.setData({
                    itemDataNew: n,
                    tagInfo: n.basePersonIdentityDTO
                }), i.a.createSelectorQuery().in(this.$scope).select("#anster_info" + t.data.itemIndex) && i.a.createSelectorQuery().in(this.$scope).select("#anster_info" + t.data.itemIndex).boundingClientRect(function(n) {
                    n && n.height && 170 < (n.height || 0) ? t.setData({
                        overEight: !0
                    }) : t.setData({
                        overEight: !1
                    });
                }).exec();
            },
            methods: {
                imageLoad: function(t) {
                    var n;
                    t = (t = t.detail.width / (t.detail.height || 0)) <= .3 ? (n = 260, 360) : .3 < t && t < 1 ? (n = 360 * t, 
                    360) : 1 <= t && t <= 1.5 ? (n = 360) / t : 1.5 < t && t <= 2.5 ? (n = 510) / t : (n = 510, 
                    200);
                    this.data.images, this.setData({
                        images: {
                            width: n,
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
                toAnswerDetail: function(t) {
                    t = t.currentTarget.dataset.item, i.a.navigateTo({
                        url: "/growUp/pages/home/answerdetail/answerdetail?questionId=" + t.questionId + "&answerId=" + t.id
                    }), this.data.isHot && s.a.xyb_request("client/GetRecommendList!updateHotData.action", "POST", {
                        id: t.hotId
                    }, !1, !1).then(function(t) {}, function(t) {});
                },
                toDetail: function(t) {
                    this.toAnswerDetail(t), i.a.setStorageSync("answerdetailComment", !0);
                },
                toQuestionDetail: function(t) {
                    40 != this.data.isHelpType ? (t = t.currentTarget.dataset.id, i.a.navigateTo({
                        url: "/growUp/pages/home/questiondetail/questiondetail?questionId=" + t
                    })) : this.toHelpCenter();
                },
                toAnswerDetail2: function(t) {
                    40 != this.data.isHelpType ? (t = t.currentTarget.dataset.item, i.a.navigateTo({
                        url: "/growUp/pages/home/answerdetail/answerdetail?questionId=" + t.questionId + "&answerId=" + t.answerId
                    })) : this.toHelpCenter();
                },
                changeShowAll: function() {
                    this.setData(function(t, n, o) {
                        return n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o, t;
                    }({}, "itemDataNew.showAll", !this.data.itemDataNew.showAll));
                },
                toHelpCenter: function() {
                    i.a.navigateTo({
                        url: "/fifthBag/pages/helpCenter/index/index?cityChannelId=" + this.data.cityChannelId
                    });
                },
                toTopicCircle: function(t) {
                    2 != (t = t.currentTarget.dataset.dto).status ? c.globalData.isLogin ? i.a.navigateTo({
                        url: "/growUp/pages/home/topicCircle/topicCircle?topicId=" + t.id
                    }) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    }) : i.a.showToast({
                        title: "此话题已停止讨论",
                        icon: "none"
                    });
                },
                toPersonalpage: function(t) {
                    var n = t.currentTarget.dataset.item;
                    t = 3 == n.creatorType ? 2 : 1;
                    this.data.isLogin ? i.a.navigateTo({
                        url: "/growUp/pages/home/homePage/index/index?personId=" + n.creatorId + "&creatorType=" + t
                    }) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                },
                viewImg: function(t) {
                    this.setData({
                        gotoShowBigImg: !0
                    });
                    t = t.currentTarget.dataset.imgindex;
                    var n = [];
                    this.data.itemDataNew.imgList.forEach(function(t) {
                        n.push(t);
                    }), i.a.previewImage({
                        current: n[t],
                        urls: n
                    });
                },
                awesome: function(t) {
                    var n = this, o = this, e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.status, i = this.data.itemDataNew;
                    o.data.isLogin && !i.praise && (i.showLikeGif = !0, this.setData({
                        itemDataNew: i
                    }), setTimeout(function() {
                        i.showLikeGif = !1, o.setData({
                            itemDataNew: i
                        });
                    }, 1e3)), o.data.isLogin ? s.a.xyb_request("client/question/SaveInformation!praiseData.action", "POST", {
                        id: e,
                        status: a ? 0 : 1
                    }, !0, !1).then(function(t) {
                        var e = n.data.itemDataNew;
                        e.praise = !a, e.totalPraise = t.data.totalPraise, o.setData({
                            itemDataNew: e
                        }), n.triggerEvent("changeInteractive", !1, {
                            bubbles: !1
                        });
                    }, function(t) {}) : this.triggerEvent("changeShowlogin", !1, {
                        bubbles: !1
                    });
                },
                golrregularities: function() {
                    i.a.navigateTo({
                        url: "/growUp/pages/home/lrregularities/lrregularities"
                    });
                },
                moreOperation: function(t) {
                    var n = this;
                    i.a.createSelectorQuery().in(this.$scope).select(".moreOperationImg").boundingClientRect(function(o) {
                        o && o.top ? i.a.setStorageSync("moreOperation_positionY", o.top) : i.a.setStorageSync("moreOperation_positionY", t.touches[0].clientY), 
                        n.data.isLogin ? n.triggerEvent("showMoreOperation", n.data.itemData, {
                            bubbles: !1
                        }) : n.triggerEvent("changeShowlogin", !1, {
                            bubbles: !1
                        });
                    }).exec();
                },
                listImgError: function(t) {
                    var n = t.target.dataset.index;
                    n && ((t = {})["itemDataNew.imgList[" + n + "]"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEzd3d3c3Nzb29vMy8vU09OM7aHFAAAAA3RSTlMAJq2Rz5ivAAABt0lEQVRYw+2YS07EMAyGyw3YcALEBXB9gjgHAMf3vwp+5DkMEh0JiUW86DROPtv543akHk9vcMk+n48XuGgfx+tV5P2Ay7aRjWxkIxvZyD9EkLjdnjQvWkeBFIqZ1Nxl0N9Gv0dQzC4hZJYrgjRZVnIZ1tm8IMsauh12xII1BDRCVqOiJoB6Jb/3IZCOqIgjqe+FrFjdkEcJByx7MdcdRH2F2gnlWwR9mhui5SYfn3XpNyQiRu6OxKoSOuMQzHxmbEjuiGqUS8SNn3NGumIY8RpCYuJAYQlHtqOOnCIKCK+Ipa57TLV44akHmmJTYV7r6dtP0ByT1IaiizwjhbGq5o7cVv1wLqjne7pkNaxOnR4gDfWyt1tDTo0JrOtbWK0xAvBQzxAYbZk8s83VrdgsSQRAbT7tOFmyIDuCVOvymRGgBveGSTePWBl1hSb9nZC8h8rUMLBm8Q7AgYSOoeKCuDKZa1CJxhp1WRaeXhfx8Fmx3rPeDxn1Ir3O8Sz1LK1rc+0giZ/UOhXvILIIETWIIXN5A5EM80sIpN8xtJnC+/9lIxvZyEY28pcIXyXwkY9dD3xSu/7h7gsj7xO5+/krugAAAABJRU5ErkJggg==", 
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
                    }, !0, !1).then(function(n) {
                        var o = t.data.itemDataNew;
                        o.talkFollowFlag = !0, t.setData({
                            itemDataNew: o
                        });
                    }, function(t) {
                        console.log(t);
                    });
                }
            }
        })((function(n, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + t(o));
            n.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(n, o) : n.__proto__ = o);
        }(p, i.a.Component), o(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(n, o, e) {
                    null === n && (n = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(n, o);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(e) : void 0 : null !== (n = Object.getPrototypeOf(n)) ? t(n, o, e) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var n = this.data, o = n.itemDataNew, a = n.isMoreOperationShow, i = n.isXyq, s = n.isHelpType, u = n.itemIndex, r = n.index, c = n.overEight, p = n.images, l = n.isTopic, g = n.itemData, m = n.tagInfo;
                return this.anonymousFunc0 = function(n) {
                    n.stopPropagation(), t.toAnswerDetail(n);
                }, this.anonymousFunc1 = function(n) {
                    n.stopPropagation(), t.moreOperation(n);
                }, this.anonymousFunc2 = function(n) {
                    n.stopPropagation(), t.toPersonalpage(n);
                }, this.anonymousFunc3 = function(n) {
                    n.stopPropagation(), t.toPersonalpage(n);
                }, this.anonymousFunc4 = function(n) {
                    n.stopPropagation(), t.golrregularities(n);
                }, this.anonymousFunc5 = function(n) {
                    n.stopPropagation(), t.toQuestionDetail(n);
                }, this.anonymousFunc6 = function(n) {
                    n.stopPropagation(), t.changeShowAll(n);
                }, n = c && !o.showAll ? e(35) : null, this.anonymousFunc7 = function(n) {
                    n.stopPropagation(), t.changeShowAll(n);
                }, this.anonymousFunc8 = function(n) {
                    n.stopPropagation(), t.viewImg(n);
                }, this.anonymousFunc9 = function(n) {
                    n.stopPropagation(), t.viewImg(n);
                }, this.anonymousFunc10 = function(n) {
                    n.stopPropagation(), t.viewImg(n);
                }, this.anonymousFunc11 = function(n) {
                    n.stopPropagation(), t.viewImg(n);
                }, this.anonymousFunc12 = function(n) {
                    n.stopPropagation(), t.viewImg(n);
                }, this.anonymousFunc13 = function(n) {
                    n.stopPropagation(), t.viewImg(n);
                }, this.anonymousFunc14 = function(n) {
                    n.stopPropagation(), t.viewImg(n);
                }, this.anonymousFunc15 = function(n) {
                    n.stopPropagation(), t.golrregularities(n);
                }, this.anonymousFunc16 = function(n) {
                    n.stopPropagation(), t.toQuestionDetail(n);
                }, this.anonymousFunc17 = function(n) {
                    n.stopPropagation(), t.toDetail(n);
                }, this.anonymousFunc18 = function(n) {
                    n.stopPropagation(), t.awesome(n);
                }, this.anonymousFunc19 = function(n) {
                    n.stopPropagation(), t.toAnswerDetail2(n);
                }, this.anonymousFunc20 = function(n) {
                    n.stopPropagation(), t.toTopicCircle(n);
                }, this.anonymousFunc21 = function(n) {
                    n.stopPropagation(), t.awesome(n);
                }, Object.assign(this.__state, {
                    anonymousState__temp: n,
                    itemDataNew: o,
                    isMoreOperationShow: a,
                    isHelpType: s,
                    tagInfo: m,
                    isXyq: i,
                    itemIndex: u,
                    overEight: c,
                    index: r,
                    images: p,
                    isTopic: l,
                    itemData: g
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
        }, {
            key: "anonymousFunc16",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc17",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc18",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc19",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc20",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc21",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), o = a = p, a.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "errImg", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "imageLoad", "listImgError", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15", "anonymousFunc16", "anonymousFunc17", "toDetail", "awesome", "anonymousFunc18", "anonymousFunc19", "anonymousFunc20", "followTopic", "anonymousFunc21" ], 
        a.options = {
            addGlobalClass: !0
        }, a.$$componentPath = "components/item-answer/item-answer", a = o)) || a;
        function p() {
            var t, n;
            !function(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var o = arguments.length, e = Array(o), a = 0; a < o; a++) e[a] = arguments[a];
            return (t = n = r(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(e)))).$usedState = [ "anonymousState__temp", "itemDataNew", "isMoreOperationShow", "isHelpType", "tagInfo", "isXyq", "itemIndex", "overEight", "index", "images", "isTopic", "itemData" ], 
            n.config = {
                component: !0
            }, n.customComponents = [], r(n, t);
        }
        a = o, Component(e(0).default.createComponent(o));
    },
    335: function(t, n, o) {
        t.exports = o.p + "components/item-answer/item-answer.wxml";
    }
}, [ [ 1594, 0, 1, 2 ] ] ]);