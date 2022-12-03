var t = require("../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 302 ], {
    1572: function(e, a, n) {
        n.r(a), n(973);
        var i = n(0), o = n.n(i), s = n(2), r = (a = n.n(s), n(1)), g = (n(974), function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var a = [], n = !0, i = !1, o = void 0;
                try {
                    for (var s, r = t[Symbol.iterator](); !(n = (s = r.next()).done) && (a.push(s.value), 
                    !e || a.length !== e); n = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    i = !0, o = t;
                } finally {
                    try {
                        !n && r.return && r.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return a;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        });
        s = function(t, e, a) {
            return e && c(t.prototype, e), a && c(t, a), t;
        };
        function c(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a, n = arguments[e];
                for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
            }
            return t;
        };
        function l(e, a) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != t(a) && "function" != typeof a ? e : a;
        }
        function h(t, e, a) {
            return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = a, t;
        }
        var d = o.a.getApp(), p = [ "#FB9018", "#FC785A", "#3D80FA", "#31D7A6" ];
        s = a()({
            data: {
                userType: 0,
                windowHeight: "",
                showlogin: !1,
                isLogin: !1,
                newsList: [],
                newsListOld: [],
                hasMore: !1,
                newsnotice: "",
                noMessage: !1,
                urlList: [],
                statusHeight: 88,
                actType: 1,
                teacherList: [],
                classList: [],
                groupList: [],
                hasColor: !1,
                findType: 0,
                showMyContainer: !1,
                bPadding: 100,
                noData: !1,
                isForbiddenLogin: !1,
                entUnRead: 0,
                unreadTalkFlag: !1,
                interviewNum: 0,
                showChatFlag: !1,
                currentPage: 1,
                maxPage: "",
                headerList: []
            },
            errorFunction: function(t) {
                var e = t.currentTarget.dataset.index;
                t = void 0;
                2 == this.data.actType && 0 == this.data.findType ? t = "teacherList[" + e + "].photograph" : 2 == this.data.actType && 1 == this.data.findType && (t = "classList[" + e + "].personPic"), 
                this.setData(h({}, t, "https://xcxresources.xybsyw.com/xcx/images/avatar_man.png"));
            },
            onLoad: function(t) {
                var e = this;
                o.a.hideShareMenu(), o.a.getSystemInfo({
                    success: function(t) {
                        e.setData({
                            windowHeight: t.windowHeight,
                            bPadding: d.globalData.isIphoneX ? 168 : 100,
                            statusHeight: t.statusBarHeight + 44
                        });
                    }
                });
            },
            getUnReadMsgCount: function() {
                var t = this;
                r.a.xyb_request("client/message/ClientMessage!getTotalUnreadNum.action", "POST", {}, !1, !1).then(function(e) {
                    "200" == e.code && t.setData({
                        unreadTalkFlag: e.data.unreadTalkFlag,
                        interviewNum: e.data.interviewNum
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            onReady: function() {
                var t = this;
                setTimeout(function() {
                    t.Bottomtabbar = t.selectComponent("#Bottomtabbar");
                }, 400);
            },
            onShow: function() {
                this.setData({
                    isLogin: d.globalData.isLogin
                }), this.setData({
                    userType: o.a.getStorageSync("userType")
                }), this.getUnReadMsgCount(), this.getNewsFirst(), this.getHeaderNewsFirst(), d.globalData.isLogin && (r.a.xyb_request("account/LoadAccountInfo!initClientMsg.action", "POST", {}, !1, !1).then(function(t) {
                    return console.log(t);
                }).catch(function(t) {
                    return console.log(t);
                }), this.getBlackInfo());
            },
            getBlackInfo: function() {
                var t = this;
                r.a.xyb_request("client/PersonIndex!getBlackInfo.action", "POST", {}, !1, !1).then(function(e) {
                    4 == e.data.level && t.setData({
                        isForbiddenLogin: !0
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {
                var t, e = this, a = (t = this.data).currentPage;
                a <= (t = t.maxPage) && a <= t && this.setData({
                    currentPage: a + 1
                }, function() {
                    e.getNews();
                });
            },
            onShareAppMessage: function() {},
            changeType: function(t) {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "切换tab"
                });
                var e = 0;
                e = t.detail ? t.detail.index + 1 : t;
                this.setData({
                    actType: e
                }), 2 == e && (e = o.a.getStorageSync("baseStudentId"), console.log("学籍切换", e), 
                e && (o.a.showToast({
                    title: "已切换您当前学籍的人脉关系",
                    icon: "none"
                }), o.a.setStorageSync("baseStudentId", 0))), o.a.pageScrollTo && o.a.pageScrollTo({
                    scrollTop: this.data.scrolltop
                });
            },
            getHeaderNewsFirst: function() {
                var t = this;
                r.a.xyb_request("/client/message/ClientNewMessage!listTopMsgList.action", "POST", {}, !1, !1).then(function(e) {
                    t.headerList = e.data;
                }, function(t) {
                    console.log(t);
                });
            },
            getNewsFirst: function() {
                var t = this;
                r.a.xyb_request("client/message/ClientMessage.action", "POST", {}, !1, !1).then(function(e) {
                    e.data && e.data.certificate && (t.setData({
                        showMyContainer: e.data.certificate
                    }), t.getTeacherList()), t.getNews();
                }, function(t) {
                    console.log(t);
                });
            },
            getNews: function() {
                var t, e = this, a = this, n = (t = this.data).currentPage, i = t.newsList;
                (t = t.maxPage) && t < n || (this.setData({
                    showChatFlag: !0
                }), console.log(" onReachBottom currentPage=====", n, "maxPage===", t), r.a.xyb_request("client/message/ClientNewMessage!listAllMessage.action", "POST", {
                    page: n
                }, !1, !1).then(function(t) {
                    var e = [], o = t.data.list;
                    e = (e = 1 == n ? o : i.concat(o)).map(function(t) {
                        if (1 != t.conversationType) return t;
                        var e = Math.floor(4 * Math.random()), a = t.conversationName[0];
                        return u({}, t, {
                            headColor: p[e],
                            headStr: a
                        });
                    }), a.setData({
                        newsList: e,
                        showChatFlag: !1,
                        maxPage: t.data.maxPage
                    }), a.Bottomtabbar && a.Bottomtabbar.getUreadMsg();
                }, function(t) {
                    console.log(t);
                }).finally(function() {
                    e.setData({
                        showChatFlag: !1
                    });
                }));
            },
            toLogin: function() {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "显示快速登录"
                }), this.setData({
                    showlogin: !0
                });
            },
            toQuestionMsg: function() {
                o.a.navigateTo({
                    url: "/fifthBag/pages/message/quetionnews/questionnews"
                });
            },
            toInternshipMsg: function() {
                o.a.navigateTo({
                    url: "../../../fifthBag/pages/message/internshipnews/internshipnews"
                });
            },
            toZanMsg: function() {
                o.a.navigateTo({
                    url: "/fifthBag/pages/message/praiseList/praiseList"
                });
            },
            toCommentMsg: function() {
                o.a.navigateTo({
                    url: "/fifthBag/pages/message/commentList/commentList"
                });
            },
            getShowPractice: function() {
                var t = this;
                r.a.xyb_request("common/ShowPractice.action", "POST", {}, !1, !1).then(function(e) {
                    t.setData({
                        showRemindNews: e.data.show
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            errorHeadFunction: function(t) {
                console.log(t), t = t.currentTarget.dataset.index, this.setData(h({}, "newsList[" + t + "].headUrl", "https://xcxresources.xybsyw.com/xcx/images/avatar_man.png"));
            },
            getTeacherList: function(t) {
                var e;
                this.setData({
                    noData: !1
                }), 0 < this.data.teacherList.length || (this.setData({
                    teacherList: []
                }), e = this, r.a.xyb_request("client/message/ClientMessage!myTeacherInfo.action", "POST", {}, !1, !1).then(function(t) {
                    var a = e.data.teacherList, n = void 0;
                    null == t.data ? n = !0 : (n = !1, a = t.data.teacherList), e.setData({
                        noData: n,
                        teacherList: a
                    });
                }, function(t) {
                    "205" == t.code && e.setData({
                        noData: !0
                    });
                }));
            },
            getClassMateList: function(t) {
                var e;
                this.setData({
                    noData: !1
                }), 0 < this.data.classList.length || (this.setData({
                    classList: []
                }), e = this, r.a.xyb_request("client/message/ClientMessage!myKlassInfo.action", "POST", {}, !1, !1).then(function(a) {
                    var n = e.data.classList, i = [], o = (n = i = a.data ? a.data.studentList : i, 
                    "[]" === JSON.stringify(i));
                    e.setData({
                        noData: o,
                        classList: n
                    }), t && t(a);
                }, function(t) {
                    "205" == t.code && e.setData({
                        noData: !0
                    });
                }));
            },
            getGroupList: function(t) {
                var e;
                this.setData({
                    noData: !1
                }), this.data.hasColor && 0 < this.data.groupList.length || (this.setData({
                    groupList: []
                }), e = this, r.a.xyb_request("client/message/ClientMessage!myGroupInfo.action", "POST", {}, !1, !1).then(function(a) {
                    var n = a.data && a.data.myGroupList || [], i = !n || "[]" === JSON.stringify(n);
                    e.setData({
                        noData: i,
                        groupList: n
                    }), e.getGroupHeadImg(), t && t(a);
                }, function(t) {
                    "205" == t.code && e.setData({
                        noData: !0
                    });
                }));
            },
            getGroupHeadImg: function() {
                var t = [];
                t = this.data.groupList;
                if ("[]" !== JSON.stringify(t)) for (var e = 0; e < t.length; e++) {
                    var a = t[e], n = a.name.substring(0, 1);
                    a.headStr = n, n = Math.floor(4 * Math.random()), a.headColor = p[n], a.isLast = !1, 
                    e == t.length - 1 && (a.isLast = !0), t.splice(e, 1, a);
                }
                this.setData({
                    groupList: t,
                    hasColor: !0
                });
            },
            sortByKey: function(t, e) {
                return t = t.sort(function(t, a) {
                    return t = t[e], (a = a[e]) < t ? -1 : t < a ? 1 : 0;
                }), console.log(t), t;
            },
            toIMList: function() {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "跳转师生消息"
                }), o.a.navigateTo({
                    url: "/fifthBag/pages/message/imList/imList"
                });
            },
            toEntMsg: function() {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "跳转企业消息"
                }), o.a.navigateTo({
                    url: "/fifthBag/pages/message/invitelist/invitelist"
                });
            },
            toIM: function(t) {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到聊天"
                });
                var e = t.currentTarget.dataset.index, a = 1;
                0 == this.data.findType ? o.a.navigateTo({
                    url: "/videoBag/pages/Chat/Chat?conversationId=0&friendId=" + this.data.teacherList[e].id + "&conversationName=" + this.data.teacherList[e].name + "&conversationType=0&creatorType=" + (a = 2)
                }) : 1 == this.data.findType ? (t = this.data.classList[e]).activate && 3 != t.followState && o.a.navigateTo({
                    url: "/videoBag/pages/Chat/Chat?conversationId=0&friendId=" + this.data.classList[e].personId + "&conversationName=" + this.data.classList[e].name + "&conversationType=0&creatorType=" + a
                }) : 2 == this.data.findType && (e = this.data.groupList[e], o.a.navigateTo({
                    url: "/videoBag/pages/Chat/Chat?conversationId=" + e.id + "&conversationName=" + e.name + "&conversationType=1"
                }));
            },
            findAlumnus: function() {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "跳转找校友"
                }), d.globalData.isAlumni ? o.a.navigateTo({
                    url: "/echartsBag/pages/alumnis/index/index?schoolId=" + d.globalData.alumniInfo.schoolId + "&schoolName=" + d.globalData.alumniInfo.schoolName
                }) : o.a.navigateTo({
                    url: "/secondBag/pages/alumniCircle/alumniCircle"
                });
            },
            changeFindType: function(t) {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "改变人脉类型"
                });
                var e = t.currentTarget.dataset.type;
                0 == e ? this.getTeacherList() : 1 == e ? this.getClassMateList() : 2 == e && this.getGroupList(), 
                this.setData({
                    findType: t.currentTarget.dataset.type
                });
            },
            gotoHomePage: function(t) {
                if (o.a.eventCenter.trigger("taroClick", {
                    funName: "跳转个人主页"
                }), this.data.isLogin) {
                    var e = 1, a = t.currentTarget.dataset.index;
                    t = void 0;
                    if (0 == this.data.findType) e = 2, t = this.data.teacherList[a].id; else {
                        if (!(a = this.data.classList[a]).activate) return;
                        t = a.personId;
                    }
                    o.a.navigateTo({
                        url: "/growUp/pages/home/homePage/index/index?creatorType=" + e + "&personId=" + t
                    });
                } else this.setData({
                    showlogin: !0
                });
            },
            toGroupDetail: function(t) {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "跳转群聊详情"
                }), t = t.currentTarget.dataset.index, t = this.data.groupList[t], o.a.navigateTo({
                    url: "/fifthBag/pages/message/classInfo/groupList/groupDetail?groupName=" + t.name + "&id=" + t.id
                });
            },
            toDetail: function(t) {
                o.a.eventCenter.trigger("taroClick", {
                    funName: "跳转各消息详情"
                });
                var e = "", a = t.currentTarget.dataset.index;
                console.log(a), console.log(this.data.newsList), (t = this.data.newsList[a]) && 0 == t.clientMsgType ? e = "/videoBag/pages/Chat/Chat?conversationId=" + t.conversationId + "&conversationType=" + t.conversationType + "&conversationName=" + t.conversationName + "&friendId=" + t.friendId + "&creatorType=" + t.creatorType : t && 1 == t.clientMsgType ? e = "/fifthBag/pages/message/newsdetail/newsdetail?sessionid=" + t.id + "&comid=" + t.enterpriseId : (a = t.conversationName, 
                t = t.headUrl, "学校公告" == a ? e = "/fifthBag/pages/message/schoolNotice/schoolNotice" : "活动消息" == a ? e = "/fifthBag/pages/message/systemActiveMsg/systemActiveMsg?typeId=1" : "系统消息" == a ? e = "/fifthBag/pages/message/systemActiveMsg/systemActiveMsg?typeId=0" : "投递进度" == a ? e = "/fifthBag/pages/message/jobMessage/jobNotice/jobNotice" : "企业消息" == a ? e = "/fifthBag/pages/message/invitelist/invitelist" : "https://xcxresources.xybsyw.com/xcx/images/hot_schoollogo.png" == t ? e = "/fifthBag/pages/cityChannelMsg/cityMsgList/cityMsgList" : "求职情报" == a ? e = "/fifthBag/pages/message/jobMessage/jobMessage" : "赞" == a ? e = "/fifthBag/pages/message/praiseList/praiseList" : "评论" == a ? e = "/fifthBag/pages/message/commentList/commentList" : "问答" == a ? e = "/fifthBag/pages/message/quetionnews/questionnews" : "实习助手" == a && (e = "/fifthBag/pages/message/internshipnews/internshipnews")), 
                o.a.navigateTo({
                    url: e
                });
            },
            headerJump: function(t) {
                var e = void 0;
                switch (t) {
                  case "实习助手":
                    e = "/fifthBag/pages/message/internshipnews/internshipnews";
                    break;

                  case "学校公告":
                    e = "/fifthBag/pages/message/schoolNotice/schoolNotice";
                    break;

                  case "投递进度":
                    e = "/fifthBag/pages/message/jobMessage/jobNotice/jobNotice";
                }
                o.a.navigateTo({
                    url: e
                });
            },
            receiveLogin: function(t) {
                var e = this;
                d.globalData.isLogin = !0, this.setData({
                    isLogin: !0,
                    showlogin: !1
                }, function() {
                    e.onShow();
                });
            },
            closeLogin: function() {
                this.setData({
                    showlogin: !1
                });
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
        }(f, o.a.Component), s(f, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, a, n) {
                    null === e && (e = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(e, a);
                    return void 0 !== i ? "value" in i ? i.value : void 0 !== (i = i.get) ? i.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, a, n) : void 0;
                })(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new o.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var e = this.$prefix, a = this.changeType, n = Object(i.genCompid)(e + "$compid__1147"), o = (P = g(n, 2))[0], s = P[1], r = Object(i.genCompid)(e + "$compid__1148"), c = (B = g(r, 2))[0], u = B[1], l = Object(i.genCompid)(e + "$compid__1149"), h = (O = g(l, 2))[0], d = O[1], p = (S = this.data).statusHeight, f = S.actType, m = S.showMyContainer, v = S.isLogin, y = S.bPadding, w = (S.unreadTalkFlag, 
                S.interviewNum, S.entUnRead, S.noMessage), L = (S.unReadNum, S.windowHeight), b = S.newsList, T = S.findType, C = S.noData, _ = S.teacherList, x = S.classList, D = S.groupList, M = S.showlogin, N = S.isForbiddenLogin, P = (n = S.showChatFlag, 
                S.headerList), B = (r = S.currentPage, S.maxPage), O = (l = 1 == v ? f - 1 : null, 
                1 == v && 1 == f ? P.map(function(a, n) {
                    a = {
                        $original: Object(i.internal_get_original)(a)
                    };
                    var o = "fegzz" + n;
                    t.anonymousFunc0Map[o] = function() {
                        return t.headerJump(a.$original.conversationName);
                    };
                    var s = Object(i.genCompid)(e + "fehzzzzzzz" + n, !0);
                    s = (n = g(s, 2))[0], n = n[1];
                    return 1 == v && 1 == f && i.propsManager.set({
                        showNum: a.$original.unReadCount && 0 < a.$original.unReadCount,
                        msgNum: a.$original.unReadCount
                    }, n, s), {
                        _$indexKey: o,
                        $compid__1145: n,
                        $original: a.$original
                    };
                }) : []), S = w ? [] : b.map(function(t, a) {
                    t = {
                        $original: Object(i.internal_get_original)(t)
                    };
                    var n = Object(i.genCompid)(e + "feizzzzzzz" + a, !0);
                    n = (a = g(n, 2))[0], a = a[1];
                    return 1 != v || 1 != f || w || i.propsManager.set({
                        showNum: t.$original.unReadCount && 0 < t.$original.unReadCount,
                        msgNum: t.$original.unReadCount
                    }, a, n), {
                        $compid__1146: a,
                        $original: t.$original
                    };
                });
                return i.propsManager.set({
                    source: "noindex",
                    showLogin: M,
                    onCloseLogin: this.closeLogin,
                    onReceiveLogin: this.receiveLogin
                }, s, o), i.propsManager.set({
                    barFlag: 4
                }, u, c), i.propsManager.set({
                    isForbiddenLogin: N
                }, d, h), Object.assign(this.__state, {
                    anonymousState__temp: l,
                    loopArray749: O,
                    loopArray750: S,
                    $compid__1147: s,
                    $compid__1148: u,
                    $compid__1149: d,
                    statusHeight: p,
                    isLogin: v,
                    changeType: a,
                    showMyContainer: m,
                    actType: f,
                    bPadding: y,
                    headerList: P,
                    noMessage: w,
                    newsList: b,
                    windowHeight: L,
                    showChatFlag: n,
                    currentPage: r,
                    maxPage: B,
                    findType: T,
                    noData: C,
                    teacherList: _,
                    classList: x,
                    groupList: D
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                for (var e, a = arguments.length, n = Array(1 < a ? a - 1 : 0), i = 1; i < a; i++) n[i - 1] = arguments[i];
                return this.anonymousFunc0Map[t] && (e = this.anonymousFunc0Map)[t].apply(e, n);
            }
        } ]), s = a = f, a.$$events = [ "changeType", "findAlumnus", "anonymousFunc0", "toDetail", "errorHeadFunction", "changeFindType", "gotoHomePage", "errorFunction", "toIM", "toGroupDetail", "toLogin" ], 
        a.$$componentPath = "pages/message/index/index", a = s)) || a;
        function f() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, f);
            for (var a = arguments.length, n = Array(a), i = 0; i < a; i++) n[i] = arguments[i];
            return (t = e = l(this, (t = f.__proto__ || Object.getPrototypeOf(f)).call.apply(t, [ this ].concat(n)))).$usedState = [ "anonymousState__temp", "loopArray749", "loopArray750", "$compid__1147", "$compid__1148", "$compid__1149", "statusHeight", "isLogin", "changeType", "showMyContainer", "actType", "bPadding", "headerList", "noMessage", "newsList", "windowHeight", "showChatFlag", "currentPage", "maxPage", "findType", "noData", "teacherList", "classList", "groupList" ], 
            e.config = {
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                usingComponents: {
                    "van-tabs": "../../../vant-weapp/dist/tabs/index",
                    "van-tab": "../../../vant-weapp/dist/tab/index"
                }
            }, e.anonymousFunc0Map = {}, e.customComponents = [ "Msgdot", "Fastlogin", "Bottomtabbar", "Forbiddenlogin" ], 
            l(e, t);
        }
        a = s, Component(n(0).default.createComponent(s, !0));
    },
    313: function(t, e, a) {
        t.exports = a.p + "pages/message/index/index.wxml";
    },
    973: function(t, e, a) {
        a(313);
    },
    974: function(t, e, a) {}
}, [ [ 1572, 0, 1, 2 ] ] ]);