var e = require("../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 303 ], {
    1571: function(t, o, n) {
        n.r(o), n(971);
        var a = n(0), i = n.n(a), s = n(2), r = (o = n.n(s), n(1)), c = (s = n(7), n.n(s)), u = (n(972), 
        function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var o = [], n = !0, a = !1, i = void 0;
                try {
                    for (var s, r = e[Symbol.iterator](); !(n = (s = r.next()).done) && (o.push(s.value), 
                    !t || o.length !== t); n = !0) ;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    a = !0, i = e;
                } finally {
                    try {
                        !n && r.return && r.return();
                    } finally {
                        if (a) throw i;
                    }
                }
                return o;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        });
        s = function(e, t, o) {
            return t && g(e.prototype, t), o && g(e, o), e;
        };
        function g(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        function l(t, o) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != e(o) && "function" != typeof o ? t : o;
        }
        var h = i.a.getApp();
        s = o()({
            data: {
                title: "",
                hasNewPoint: !1,
                mineIntegral: -1,
                activate: !1,
                mbtitest: !1,
                percent: null,
                headImage: "",
                name: "",
                nickName: "",
                mbtitestResult: "",
                careerTalkCount: "",
                collectintroNum: "",
                isLogin: !1,
                showlogin: !1,
                sexType: 1,
                personInfoObj: "",
                pushCount: 0,
                detailString: "",
                statusHeight: 20,
                topBg: "none",
                courseTotal: 0,
                resumeNum: 0,
                showResumepop: !1,
                showResumeCard: !1,
                showActivepop: !1,
                isForbiddenLogin: !1,
                showTagView: !1,
                tagInfo: "",
                isShowJobobjectiveCard: !1,
                jobObjectiveFlag: !1,
                resumeIsComplete: !0,
                showAccessoryResumeTips: !1,
                isUploadedResume: !1
            },
            onLoad: function(e) {
                var t = this;
                i.a.getSystemInfo({
                    success: function(e) {
                        e.system.indexOf("iOS"), t.setData({
                            statusHeight: e.statusBarHeight
                        });
                    }
                }), i.a.hideShareMenu(), this.setData({
                    showAccessoryResumeTips: !i.a.getStorageSync("hideAccessoryResumeTips") && new Date().getTime() < new Date("2022-11-10").getTime()
                });
            },
            errorFunction: function(e) {
                this.setData({
                    headImage: "https://xcxresources.xybsyw.com/xcx/images/avatar_man.png"
                });
            },
            onPageScroll: function(e) {
                40 <= e.scrollTop ? this.setData({
                    topBg: "#FFF",
                    title: "我的"
                }) : this.setData({
                    topBg: "none",
                    title: ""
                });
            },
            accountInfo: function() {
                var e = this, t = this;
                r.a.xyb_request("account/LoadAccountInfo.action", "POST", {}, !1, !1).then(function(o) {
                    o = o.data, t.setData({
                        headImage: o.picUrl,
                        sexType: o.sexType || 1,
                        name: o.loginer,
                        activate: o.activate,
                        careerTalkCount: o.careerTalkCount,
                        collectintroNum: o.introductionCount,
                        mbtitest: o.mbtitest,
                        mbtitestResult: o.type + "(" + o.typeName + ")",
                        percent: o.completenessSum,
                        personInfoObj: o,
                        pushCount: o.answerCount + o.movementCount + o.questionCount,
                        isUploadedResume: o.hasResumeFile
                    }), i.a.setStorageSync("studentActivate", o.activate), i.a.setStorageSync("headImage", o.picUrl), 
                    t.setData({
                        showActivepop: !t.data.activate && !t.data.personInfoObj.isTeacher
                    }), console.log("this.data.headImage"), console.log(e.data.headImage), i.a.getApp().globalData.userSchoolInfo.name = e.data.name, 
                    console.log(i.a.getApp().globalData.userSchoolInfo.name), i.a.getApp().globalData.userSchoolInfo.picUrl = e.data.headImage, 
                    i.a.getApp().globalData.userSchoolInfo.activate = e.data.activate, t.getDetailString();
                }, function(e) {
                    console.log(e);
                });
            },
            accountInfo2: function() {
                var e = this;
                r.a.xyb_request("account/LoadAccountInfo!getIdentityInfo.action", "POST", {}, !1, !1).then(function(t) {
                    t = t.data, e.setData({
                        tagInfo: t
                    });
                }, function(e) {
                    console.log(e);
                });
            },
            getDetailString: function() {
                var e = "";
                this.data.personInfoObj.school && (e = this.data.personInfoObj.school), this.data.personInfoObj.specialty && (e = e ? e + "·" + this.data.personInfoObj.specialty : this.data.personInfoObj.specialty), 
                this.data.personInfoObj.schoolyear && (e = e ? e + "·" + this.data.personInfoObj.schoolyear : this.data.personInfoObj.schoolyear), 
                this.setData({
                    detailString: e
                });
            },
            editUserinfo: function() {
                this.data.isLogin ? i.a.navigateTo({
                    url: "/thirdBag/pages/myresume/editpersonalinfo/index/index?activate=" + this.data.activate
                }) : this.setData({
                    showlogin: !0
                });
            },
            toResume: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转在线简历"
                }), this.data.isLogin ? i.a.navigateTo({
                    url: "/thirdBag/pages/myresume/index/index"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toAccessoryResume: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到附件简历"
                }), this.data.isLogin ? (this.hideAccessoryResumeTips(), i.a.navigateTo({
                    url: "/thirdBag/pages/accessoryResume/resumeList/resumeList"
                })) : this.setData({
                    showlogin: !0
                });
            },
            toCompleteResume: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转完善简历"
                }), i.a.navigateTo({
                    url: "/videoBag/pages/incompleteResume/incompleteResume"
                });
            },
            toSendRecord: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转投递记录"
                }), this.data.isLogin ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/sendrecord/sendrecord"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toCollectposition: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转收藏职位"
                }), this.data.isLogin ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/collectposition/collectposition"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toPosintroduce: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转收藏的职位介绍"
                }), this.data.isLogin ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/collectposintroduce/collectposintroduce"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toSchoolcensus: function(e) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "点击我要学籍认证"
                }), e.stopPropagation(), this.data.isLogin ? this.data.activate ? r.a.xyb_request("schoolroll/schoolRollList.action", "POST", {}, !1, !1).then(function(e) {
                    var t = e.data;
                    if (t) for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        n.selected && i.a.navigateTo({
                            url: "/secondBag/pages/mine/schoolcensus/sucstatus/sucstatus?model=" + encodeURIComponent(JSON.stringify(n))
                        });
                    }
                }, function(e) {
                    console.log(e);
                }) : i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/index/index"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toCourse: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转我的课程"
                }), this.data.isLogin ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/myCourse/myCourse"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toNaturetest: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转职业性格测试"
                }), this.data.isLogin ? this.data.mbtitest ? i.a.navigateTo({
                    url: "/fourthBag/pages/find/testresult/testresult"
                }) : i.a.navigateTo({
                    url: "/fourthBag/pages/find/testintroduce/testintroduce"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toSetting: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转设置"
                }), this.data.isLogin ? this.data.personInfoObj.isTeacher ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/setting/setting?isTeacher=true"
                }) : i.a.navigateTo({
                    url: "/secondBag/pages/mine/setting/setting"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toPersonInfo: function() {
                var e;
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转个人主页"
                }), this.data.isLogin ? (e = 1, this.data.personInfoObj.isTeacher && (e = 2), i.a.navigateTo({
                    url: "/growUp/pages/home/homePage/index/index?creatorType=" + e
                })) : this.setData({
                    showlogin: !0
                });
            },
            toPersonEdit: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转个人信息"
                }), this.data.isLogin ? (this.data.personInfoObj.isTeacher, i.a.navigateTo({
                    url: "/growUp/pages/home/homePage/personInfo/personInfo?headImage=" + this.data.headImage + "&creatorType=1"
                })) : this.setData({
                    showlogin: !0
                });
            },
            onReady: function() {
                this.fastlogin = this.$scope.selectComponent("#fastlogin");
            },
            onShow: function() {
                this.setData({
                    showLogin: !1
                }), i.a.getStorageSync("sessionId") ? this.setData({
                    isLogin: !0
                }) : this.setData({
                    isLogin: !1
                }), this.accountInfo(), this.accountInfo2(), h.globalData.isLogin && (this.getBlackInfo(), 
                this.getJobHuntCheck());
            },
            getBlackInfo: function() {
                var e = this;
                r.a.xyb_request("client/PersonIndex!getBlackInfo.action", "POST", {}, !1, !1).then(function(t) {
                    4 == t.data.level && e.setData({
                        isForbiddenLogin: !0
                    });
                }, function(e) {
                    console.log(e);
                });
            },
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {},
            onShareAppMessage: function() {},
            toFriendList: function() {
                this.data.isLogin ? (i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转校友圈"
                }), i.a.navigateTo({
                    url: "/secondBag/pages/alumniCircle/alumniCircle"
                })) : this.setData({
                    showlogin: !0
                });
            },
            gotoRenMai: function() {
                if (i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转人脉"
                }), !h.globalData.isAlumni || !this.data.personInfoObj.schoolId) return this.toFriendList(), 
                !1;
                i.a.navigateTo({
                    url: "/echartsBag/pages/alumnis/index/index?schoolId=" + this.data.personInfoObj.schoolId + "&schoolName=" + this.data.personInfoObj.school
                });
            },
            toShare: function() {
                if (i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转分享"
                }), !h.globalData.isAlumni) return this.toFriendList(), !1;
                var e = this.data.personInfoObj.schoolId, t = this.data.personInfoObj.school;
                i.a.navigateTo({
                    url: "/growUp/pages/home/sharingAlumni/sharingAlumni?type=1&shadetext=快进入" + t + "校友会，母校等你回家！&schoolid=" + e + "&schoolname=" + t
                });
            },
            gotoQusList: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转问卷"
                }), this.data.isLogin ? i.a.navigateTo({
                    url: "/echartsBag/pages/questionnaire/questionnairelist/questionnairelist"
                }) : this.setData({
                    showlogin: !0
                });
            },
            gotoKefu: function() {
                console.log("全局事件中心", this), i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转客服"
                }), this.data.isLogin ? i.a.navigateTo({
                    url: "/videoBag/pages/customerservice/servicecenter/servicecenter"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toMineIntegral: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转当前积分"
                }), this.data.isLogin ? i.a.navigateTo({
                    url: "/echartsBag/pages/points/index/index"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toShop: function() {
                this.data.isLogin ? i.a.navigateTo({
                    url: "/echartsBag/pages/points/PointsMall/PointsMall"
                }) : this.setData({
                    showlogin: !0
                });
            },
            getMineIntegral: function() {
                var e = this;
                r.a.xyb_request("client/point/TaskPoint!getCurrentPoint.action", "POST", {}, !1, !1).then(function(t) {
                    t = t.data, e.setData({
                        mineIntegral: t
                    });
                }, function(e) {});
            },
            getNewIntegral: function() {
                var e = this;
                r.a.xyb_request("client/point/TaskPoint!getCompletedPoint.action", "POST", {}, !1, !1).then(function(t) {
                    t = t.data, e.setData({
                        hasNewPoint: t
                    });
                }, function(e) {});
            },
            closeResumeCard: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭完善简历卡片"
                }), i.a.setStorageSync("ResumeCard", !0), this.setData({
                    showResumeCard: !1
                });
            },
            getJobHuntCheck: function() {
                var e = this;
                r.a.xyb_request("talents/JobHuntCheck.action", "POST", {}, !1, !1).then(function(t) {
                    var o, n, a = t.data;
                    a && (o = 0 < a.locations.length && 0 < a.positions.length, n = !0 !== i.a.getStorageSync("JobobjectiveCard") && !o, 
                    t = 0 < a.resumeOptimization.resumeOptimizationNum, t = !0 !== i.a.getStorageSync("ResumeCard") && t, 
                    e.setData({
                        showResumeCard: t,
                        resumeNum: a.resumeOptimization.resumeOptimizationNum,
                        resumeIsComplete: a.checkCompleteness,
                        jobObjectiveFlag: o,
                        isShowJobobjectiveCard: n
                    }));
                }, function(e) {});
            },
            receiveLogin: function(e) {
                this.setData({
                    isLogin: !0
                }), h.globalData.isLogin = !0, this.getBlackInfo(), this.onShow();
            },
            closeLogin: function() {
                this.setData({
                    showlogin: !1
                });
            },
            toSchoolcensus2: function() {
                this.setData({
                    showTagView: !0
                });
            },
            closePop: function() {
                this.setData({
                    showTagView: !1
                });
            },
            toSchoolCensusList: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "点击学籍认证栏"
                }), this.data.isLogin ? this.data.activate ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/schoolcensuslist/schoolcensuslist"
                }) : i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/index/index?from=my"
                }) : this.setData({
                    showlogin: !0
                });
            },
            toJobobjective: function() {
                this.data.isLogin ? (i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转求职意向"
                }), i.a.navigateTo({
                    url: "/videoBag/pages/jobintentionsetting/jobobjective/jobobjective?reconfirm=1"
                })) : this.setData({
                    showlogin: !0
                });
            },
            closeJobobjectiveCard: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭求职意向卡片"
                }), i.a.setStorageSync("JobobjectiveCard", !0), this.setData({
                    isShowJobobjectiveCard: !1
                });
            },
            hideAccessoryResumeTips: function() {
                this.setData({
                    showAccessoryResumeTips: !1
                }), i.a.setStorageSync("hideAccessoryResumeTips", !0);
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
        }(p, i.a.Component), s(p, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, o, n) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, o);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(n) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, o, n) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var e = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var t = this.$prefix, o = Object(a.genCompid)(t + "$compid__1150"), n = (L = u(o, 2))[0], i = L[1], s = Object(a.genCompid)(t + "$compid__1151"), r = (_ = u(s, 2))[0], g = _[1], l = Object(a.genCompid)(t + "$compid__1152"), h = (R = u(l, 2))[0], p = R[1], m = (x = this.data).statusHeight, d = x.topBg, f = x.title, v = x.showActivepop, b = x.headImage, y = x.sexType, C = (x.detailString, 
                x.name), w = x.isLogin, I = (x.activate, x.personInfoObj), T = (x.pushCount, x.mineIntegral, 
                x.resumeNum), S = x.percent, j = x.showlogin, O = x.isForbiddenLogin, D = x.showTagView, L = (o = x.tagInfo, 
                x.isShowJobobjectiveCard), _ = (s = x.jobObjectiveFlag, x.showResumeCard), R = (t = x.resumeIsComplete, 
                l = x.showAccessoryResumeTips, x.isUploadedResume), x = c()("personal-info-part", L || _ ? "" : "personal-info-part1");
                return this.anonymousFunc0 = function(t) {
                    t.stopPropagation(), e.closeJobobjectiveCard();
                }, this.anonymousFunc1 = function(t) {
                    t.stopPropagation(), e.toJobobjective();
                }, this.anonymousFunc2 = function(t) {
                    t.stopPropagation(), e.closeResumeCard();
                }, this.anonymousFunc3 = function(t) {
                    t.stopPropagation(), e.toCompleteResume();
                }, this.anonymousFunc4 = function(t) {
                    t.stopPropagation(), e.hideAccessoryResumeTips();
                }, a.propsManager.set({
                    source: "noindex",
                    showLogin: j,
                    receive: this.receiveLogin,
                    onReceiveLogin: this.receiveLogin,
                    onCloseLogin: this.closeLogin
                }, i, n), a.propsManager.set({
                    barFlag: 5
                }, g, r), a.propsManager.set({
                    isForbiddenLogin: O
                }, p, h), Object.assign(this.__state, {
                    anonymousState__temp: x,
                    $compid__1150: i,
                    $compid__1151: g,
                    $compid__1152: p,
                    statusHeight: m,
                    topBg: d,
                    isLogin: w,
                    personInfoObj: I,
                    headImage: b,
                    sexType: y,
                    isShowJobobjectiveCard: L,
                    showResumeCard: _,
                    resumeIsComplete: t,
                    percent: S,
                    showAccessoryResumeTips: l,
                    isUploadedResume: R,
                    jobObjectiveFlag: s,
                    showActivepop: v,
                    showTagView: D,
                    title: f,
                    name: C,
                    resumeNum: T,
                    tagInfo: o
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(e) {
                e.stopPropagation();
            }
        }, {
            key: "anonymousFunc1",
            value: function(e) {
                e.stopPropagation();
            }
        }, {
            key: "anonymousFunc2",
            value: function(e) {
                e.stopPropagation();
            }
        }, {
            key: "anonymousFunc3",
            value: function(e) {
                e.stopPropagation();
            }
        }, {
            key: "anonymousFunc4",
            value: function(e) {
                e.stopPropagation();
            }
        } ]), s = o = p, o.$$events = [ "toPersonEdit", "errorFunction", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "toResume", "toAccessoryResume", "anonymousFunc4", "toJobobjective", "toSendRecord", "toCollectposition", "toPersonInfo", "toFriendList", "toCourse", "gotoQusList", "toNaturetest", "toMineIntegral", "toSchoolCensusList", "gotoKefu", "toSetting", "closePop" ], 
        o.$$componentPath = "pages/mine/index/index", o = s)) || o;
        function p() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
            return (e = t = l(this, (e = p.__proto__ || Object.getPrototypeOf(p)).call.apply(e, [ this ].concat(n)))).$usedState = [ "anonymousState__temp", "$compid__1150", "$compid__1151", "$compid__1152", "statusHeight", "topBg", "isLogin", "personInfoObj", "headImage", "sexType", "isShowJobobjectiveCard", "showResumeCard", "resumeIsComplete", "percent", "showAccessoryResumeTips", "isUploadedResume", "jobObjectiveFlag", "showActivepop", "showTagView", "title", "name", "resumeNum", "tagInfo" ], 
            t.config = {
                navigationBarTitleText: "",
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
                navigationBarTextStyle: "black"
            }, t.customComponents = [ "Fastlogin", "BottomTabbar", "Forbiddenlogin" ], l(t, e);
        }
        o = s, Component(n(0).default.createComponent(s, !0));
    },
    312: function(e, t, o) {
        e.exports = o.p + "pages/mine/index/index.wxml";
    },
    971: function(e, t, o) {
        o(312);
    },
    972: function(e, t, o) {}
}, [ [ 1571, 0, 1, 2 ] ] ]);