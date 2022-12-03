var e = require("../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 290 ], {
    1281: function(e, t, a) {
        a(429);
    },
    1282: function(e, t, a) {},
    1685: function(t, a, n) {
        n.r(a), n(1281);
        var o = n(0), r = n.n(o), i = n(2), s = (a = n.n(i), n(1)), c = n(3), l = (n(1282), 
        "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        }), u = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var a = [], n = !0, o = !1, r = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (a.push(i.value), 
                    !t || a.length !== t); n = !0) ;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    o = !0, r = e;
                } finally {
                    try {
                        !n && s.return && s.return();
                    } finally {
                        if (o) throw r;
                    }
                }
                return a;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
        i = function(e, t, a) {
            return t && p(e.prototype, t), a && p(e, a), e;
        };
        function p(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        function g(t, a) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != e(a) && "function" != typeof a ? t : a;
        }
        var h = r.a.getApp();
        i = a()({
            data: {
                topBar: {
                    title: "在线宣讲会"
                },
                isLogin: !1,
                collectList: [],
                pageIndex5: 1,
                hasMore5: !1,
                maxPage5: "",
                qrCodeFlag: !1,
                qrCodeImg: "",
                xjhId: "",
                xjhName: "",
                shareContent: ""
            },
            onLoad: function(e) {
                c.a.Page.init(), this.setData({
                    isLogin: h.globalData.isLogin,
                    collectList: [ {
                        bigPicUrl: "https://xcxresources.xybsyw.com/xcx/images/xyb_default_meeting_big.png",
                        browseCount: 39,
                        browseIngNum: 2,
                        cityMatch: null,
                        defaultLabel: "",
                        enterpriseId: 21496,
                        hasSignup: !0,
                        id: null,
                        name: "斑马武汉2021线上招聘",
                        picUrl: "",
                        sameDay: !0,
                        schoolMatch: null,
                        signupCount: 2,
                        startTime: "今天 18:30",
                        status: 0
                    }, {
                        bigPicUrl: "",
                        browseCount: 233,
                        browseIngNum: 2,
                        cityMatch: !0,
                        defaultLabel: "世界500强",
                        enterpriseId: 21496,
                        hasSignup: !1,
                        id: null,
                        name: "前端自学专题：为什么前…",
                        picUrl: "https://xcxresources.xybsyw.com/xcx/images/xyb_default_meeting_small.png",
                        sameDay: !1,
                        schoolMatch: !0,
                        specialtyMatch: !0,
                        signupCount: 233,
                        startTime: "02.12 10:30",
                        status: 1
                    }, {
                        bigPicUrl: "",
                        browseCount: 233,
                        browseIngNum: 2,
                        cityMatch: !0,
                        defaultLabel: "",
                        enterpriseId: 21496,
                        hasSignup: !0,
                        id: null,
                        name: "Excel 实战训练宣讲会",
                        picUrl: "https://xcxresources.xybsyw.com/xcx/images/xyb_default_meeting_small.png",
                        sameDay: !1,
                        schoolMatch: !0,
                        specialtyMatch: !1,
                        signupCount: 233,
                        startTime: "02.12 10:30",
                        status: 1
                    }, {
                        bigPicUrl: "",
                        browseCount: 2123,
                        browseIngNum: 2,
                        cityMatch: !0,
                        defaultLabel: "",
                        enterpriseId: 21496,
                        hasSignup: !0,
                        id: null,
                        name: "零基础系统学习AE软件",
                        picUrl: "https://xcxresources.xybsyw.com/xcx/images/xyb_default_meeting_small.png",
                        sameDay: !1,
                        schoolMatch: !0,
                        specialtyMatch: !0,
                        signupCount: 2123,
                        startTime: "02.12 10:30",
                        status: 2
                    }, {
                        bigPicUrl: "",
                        browseCount: 231231,
                        browseIngNum: 2,
                        cityMatch: !0,
                        defaultLabel: "",
                        enterpriseId: 21496,
                        hasSignup: !0,
                        id: null,
                        name: "零基础系统学习AE软件",
                        picUrl: "https://xcxresources.xybsyw.com/xcx/images/xyb_default_meeting_small.png",
                        sameDay: !1,
                        schoolMatch: !0,
                        specialtyMatch: !0,
                        signupCount: 2123,
                        startTime: "02.12 10:30",
                        status: 3
                    } ],
                    pageIndex5: 1,
                    maxPage5: "",
                    hasMore5: !1
                }), this.getCollectlist();
            },
            getCollectlist: function() {
                var e = this;
                s.a.xyb_request("careertalk/LoadCareerTalkList.action", "POST", {
                    page: this.data.pageIndex5,
                    pageSize: 10
                }, !1, !1).then(function(t) {
                    var a, n = e;
                    t.data && (a = n.data.collectList, 1 == n.data.pageIndex5 && (a = []), (t.data.list || []).forEach(function(e) {
                        a.push(e);
                    }), n.setData({
                        collectList: a,
                        maxPage5: t.data.maxPage,
                        hasMore5: t.data.maxPage != e.data.pageIndex5
                    })), t = n.data.pageIndex5 + 1, n.setData({
                        pageIndex5: t
                    }), r.a.stopPullDownRefresh();
                }, function(e) {
                    r.a.stopPullDownRefresh();
                });
            },
            goLiveDetails: function(e) {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "去宣讲会详情"
                });
                var t = e.currentTarget.dataset.id, a = e.currentTarget.dataset.status;
                console.log("------", e.currentTarget), e = e.currentTarget.dataset.picurl, 3 != a ? (a = "", 
                "3" === this.$router.params.pageSource && (a = "&pageSource=3"), r.a.setStorageSync("onSharePreachMeetingImg", e), 
                s.a.xyb_request("index/TalkOperateData!statistics.action", "POST", {
                    talkType: 0,
                    talkId: t,
                    doType: 2,
                    pageSource: 1
                }, !1, !1), r.a.navigateTo({
                    url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + t + a + "&fromList=1&pageSource=20"
                })) : r.a.showToast({
                    title: "此宣讲会已结束，看看其他的吧~",
                    icon: "none"
                });
            },
            onPullDownRefresh: function() {
                this.setData({
                    collectList: [],
                    pageIndex5: 1,
                    maxPage5: "",
                    hasMore5: !1
                }), this.getCollectlist();
            },
            receiveLogin: function(e) {
                this.setData({
                    isLogin: !0
                }), h.globalData.isLogin = !0, this.onShow();
            },
            reachBottom: function() {
                this.data.hasMore5 && this.getCollectlist();
            },
            regMeeting: function(e) {
                var t = this;
                r.a.eventCenter.trigger("taroClick", {
                    funName: "点击报名按钮"
                });
                var a = this, n = e.currentTarget.dataset.id, o = e.currentTarget.dataset.index, i = e.currentTarget.dataset.eid;
                e = e.currentTarget.dataset.name;
                this.setData({
                    xjhId: n,
                    xjhName: e
                }, function() {
                    t.getShareContent();
                }), i = {
                    topic: "enterprise-speech",
                    eventId: 3,
                    source: "weixin",
                    type: 1 == r.a.getStorageSync("userType") ? "student" : 2 == r.a.getStorageSync("userType") ? "school" : "unknown",
                    deviceId: r.a.getStorageSync("openid"),
                    eventTime: new Date().getTime(),
                    speechId: n,
                    enterpriseId: i
                }, s.a.xyb_request("behavior/Duration.action", "POST", i, !1, !0, 2).then(function(e) {}, function(e) {}), 
                a.data.isLogin ? wx.requestSubscribeMessage({
                    tmplIds: [ "DI5rK6rPM0jYUUxL-YN274xamYk_ahx55ZMnlQY4YAk", "1bZvyCb5yhQIVK1QmwOvhGp-9RgiS1Uc1q2owbvLCTI" ],
                    success: function(e) {
                        console.log("requestSubscribeMessage---success"), console.log(e);
                    },
                    fail: function(e) {
                        console.log("requestSubscribeMessage---fail"), console.log(e);
                    },
                    complete: function(e) {
                        console.log("requestSubscribeMessage---complete"), console.log(e), a.careerTalkSignUpEvent(n, o);
                    }
                }) : a.props.showLogin();
            },
            careerTalkSignUpEvent: function(e, t) {
                var a = this, n = this;
                s.a.xyb_request("careertalk/CareerTalkSignUp.action", "POST", {
                    careerTalkId: e
                }, !0, !1).then(function(e) {
                    var o = e.data;
                    null != o && "{}" != JSON.stringify(o) && o ? a.setData({
                        qrCodeFlag: !0,
                        qrCodeImg: e.data
                    }) : r.a.showToast({
                        title: "预约成功，届时将提醒您参加宣讲",
                        icon: "none"
                    }), n.data.collectList[t].hasSignup = !0, n.setData({
                        collectList: n.data.collectList
                    });
                }, function(e) {
                    r.a.showToast({
                        title: e.msg,
                        icon: "none"
                    });
                });
            },
            qrCodeClose: function() {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "关闭宣讲会二维码弹窗"
                }), this.setData({
                    qrCodeFlag: !1
                });
            }
        })((function(t, a) {
            if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function, not " + e(a));
            t.prototype = Object.create(a && a.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(t, a) : t.__proto__ = a);
        }(d, r.a.Component), i(d, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, a, n) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, a);
                    return void 0 !== o ? "value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, a, n) : void 0;
                })(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var e = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var t = this.$prefix, a = Object(o.genCompid)(t + "$compid__914"), n = (c = u(a, 2))[0], r = c[1], i = (l = this.data).collectList, s = l.pageIndex5, c = (t = l.hasMore5, 
                a = l.qrCodeFlag, l.qrCodeImg), l = 0 < i.length ? i.map(function(t, a) {
                    t = {
                        $original: Object(o.internal_get_original)(t)
                    };
                    var n = "eeazz" + a;
                    return e.anonymousFunc0Map[n] = function(t) {
                        t.stopPropagation(), e.regMeeting(t);
                    }, a = "eebzz" + a, e.anonymousFunc1Map[a] = function(t) {
                        t.stopPropagation(), e.regMeeting(t);
                    }, {
                        _$indexKey: n,
                        _$indexKey2: a,
                        $original: t.$original
                    };
                }) : [];
                return t && 1 < s && o.propsManager.set({
                    color: "#ff453a",
                    size: 26,
                    content: "加载中...",
                    mode: "center"
                }, r, n), Object.assign(this.__state, {
                    loopArray641: l,
                    $compid__914: r,
                    collectList: i,
                    pageIndex5: s,
                    hasMore5: t,
                    qrCodeFlag: a,
                    qrCodeImg: c
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(e) {
                for (var t, a = arguments.length, n = Array(1 < a ? a - 1 : 0), o = 1; o < a; o++) n[o - 1] = arguments[o];
                return "object" === (void 0 === n ? "undefined" : l(n)) && n.stopPropagation && n.stopPropagation(), 
                this.anonymousFunc0Map[e] && (t = this.anonymousFunc0Map)[e].apply(t, n);
            }
        }, {
            key: "anonymousFunc1",
            value: function(e) {
                for (var t, a = arguments.length, n = Array(1 < a ? a - 1 : 0), o = 1; o < a; o++) n[o - 1] = arguments[o];
                return "object" === (void 0 === n ? "undefined" : l(n)) && n.stopPropagation && n.stopPropagation(), 
                this.anonymousFunc1Map[e] && (t = this.anonymousFunc1Map)[e].apply(t, n);
            }
        } ]), i = a = d, a.$$events = [ "goLiveDetails", "anonymousFunc0", "anonymousFunc1", "qrCodeClose" ], 
        a.$$componentPath = "pages/find/components/BriefingSession/BriefingSession", a = i)) || a;
        function d() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, d);
            for (var a = arguments.length, n = Array(a), o = 0; o < a; o++) n[o] = arguments[o];
            return (e = t = g(this, (e = d.__proto__ || Object.getPrototypeOf(d)).call.apply(e, [ this ].concat(n)))).$usedState = [ "loopArray641", "$compid__914", "collectList", "pageIndex5", "hasMore5", "qrCodeFlag", "qrCodeImg" ], 
            t.config = {
                navigationBarTitleText: "在线宣讲会",
                usingComponents: {}
            }, t.anonymousFunc0Map = {}, t.anonymousFunc1Map = {}, t.customComponents = [ "AtActivityIndicator" ], 
            g(t, e);
        }
        a = i, Component(n(0).default.createComponent(i));
    },
    429: function(e, t, a) {
        e.exports = a.p + "pages/find/components/BriefingSession/BriefingSession.wxml";
    }
}, [ [ 1685, 0, 1, 2 ] ] ]);