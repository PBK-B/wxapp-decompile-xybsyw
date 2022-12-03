var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 300 ], {
    1569: function(e, a, o) {
        o.r(a), o(967);
        var n = o(0), i = o.n(n), s = o(7), r = o.n(s), c = o(2), l = (a = o.n(c), o(1)), u = (s = o(8), 
        o(968), o(4)), g = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
            return t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
        }, p = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var a = [], o = !0, n = !1, i = void 0;
                try {
                    for (var s, r = t[Symbol.iterator](); !(o = (s = r.next()).done) && (a.push(s.value), 
                    !e || a.length !== e); o = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    n = !0, i = t;
                } finally {
                    try {
                        !o && r.return && r.return();
                    } finally {
                        if (n) throw i;
                    }
                }
                return a;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
        c = function(t, e, a) {
            return e && d(t.prototype, e), a && d(t, a), t;
        };
        function d(t, e) {
            for (var a = 0; a < e.length; a++) {
                var o = e[a];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        function h(e, a) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != t(a) && "function" != typeof a ? e : a;
        }
        var f = i.a.getApp();
        c = Object(s.connect)(function(t) {
            return {
                xybData: t.xybData
            };
        }, function(t) {
            return {
                setxybdata: function(t) {
                    function e(e) {
                        return t.apply(this, arguments);
                    }
                    return e.toString = function() {
                        return t.toString();
                    }, e;
                }(function(e) {
                    t(setxybdata(e));
                })
            };
        })(a = a()({
            data: {
                sphereInfo: {
                    status: !1,
                    content: ""
                },
                followXcx: !0,
                showEnrollStorage: !1,
                actType: "",
                userinfo: "",
                showlogin: !1,
                isLogin: !1,
                hasShowPractice: !1,
                hasPlan: !1,
                hasNewSignup: !1,
                hasNewQuestion: !1,
                hasMessage: !1,
                hasNewMessage: !1,
                msgList: [],
                noData: !1,
                planList: [],
                titleText: "",
                contentText: "",
                btnText: "",
                touchx: "",
                touchy: "",
                postList: [],
                hasMoer: !1,
                statusHeight: 88,
                isForbiddenLogin: !1,
                studentActivate: !1,
                hasWindow: !1,
                newAuthId: "",
                offWorkMsg: {
                    open: !1,
                    count: 0,
                    employmentReported: !1,
                    hasReported: !1
                },
                showRecommand: !1,
                showboxFlag: !0,
                schoolTalkList: [],
                talkList: [],
                jobStatusPopupFlag: !1,
                jobStatusType: null,
                ifIphoneX: !1,
                tabList: [],
                eduPracticeUpdate: !1,
                showBottomPopup: !1,
                windowData: {},
                practiceEnd: !1,
                practiceTab: 1
            },
            onLoad: function(t) {
                i.a.hideShareMenu(), this.setUpdateMenuBarRedPoint();
                var e, a, o = this;
                i.a.getSystemInfo({
                    success: function(t) {
                        var e = -1 < t.system.indexOf("iOS");
                        o.setData({
                            statusHeight: t.statusBarHeight + (e ? 44 : 48)
                        });
                    }
                }), this.setData({
                    ifIphoneX: f.globalData.isIphoneX
                }), i.a.setStorageSync("growTip", !0), (s = i.a.getStorageSync("showboxFlag")) && (e = (n = new Date()).getFullYear(), 
                a = n.getMonth(), n = n.getDate(), this.showboxFlag = e + "" + a + n != s), this.setData({
                    windowData: i.a.getSystemInfoSync()
                }), this.getShowPractice(), this.getTalkList(), this.getSchoolTalkList(), this.getList();
                var n = i.a.getStorageSync("jobStatusPopupOnCloseEvent"), s = new Date().getTime();
                (!n || n && 864e5 < s - n) && (i.a.setStorageSync("jobStatusPopupOnCloseEvent", ""), 
                this.jobStatusPopupFun());
            },
            showRecommandBox: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "显示推荐弹窗"
                }), this.setData({
                    showRecommand: !0
                });
            },
            closeRecommandBox: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭推荐弹窗"
                }), this.setData({
                    showRecommand: !1
                });
            },
            closeBoxFlag: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭浮窗"
                }), this.setData({
                    showboxFlag: !1
                }, function() {
                    var t = (a = new Date()).getFullYear(), e = a.getMonth(), a = a.getDate();
                    i.a.setStorageSync("showboxFlag", t + "" + e + a);
                });
            },
            jobStatusPopupFun: function() {
                var t = this;
                l.a.xyb_request("answersheet/ApplyPostQuestionnaire.action", "POST", {}, !1, !1).then(function(e) {
                    null != (e = e.data) && "{}" != JSON.stringify(e) && t.setData({
                        jobStatusPopupFlag: !0,
                        jobStatusType: e
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            touchStart: function(t) {
                t.changedTouches && t.changedTouches[0] && this.setData({
                    touchx: t.changedTouches[0].clientX || 0,
                    touchy: t.changedTouches[0].clientY || 0
                });
            },
            touchEnd: function(t) {
                var e;
                t.changedTouches && t.changedTouches[0] && (e = t.changedTouches[0].clientX || 0, 
                t = t.changedTouches[0].clientY || 0, "left" == (t = this.getTouchData(e, t, this.data.touchx, this.data.touchy)) ? this.changeType(2) : "right" == t && this.changeType(1));
            },
            getTouchData: function(t, e, a, o) {
                var n = "";
                return 50 < t - a && Math.abs(e - o) < 50 ? n = "right" : t - a < -50 && Math.abs(e - o) < 50 && (n = "left"), 
                t - a < 1 && -1 < t - a ? null : n;
            },
            loaduserInfo: function() {
                var t = this;
                l.a.xyb_request("account/LoadAccountInfo.action", "POST", {}, !1, !1).then(function(e) {
                    t.setData({
                        userinfo: e.data
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            toWhere: function() {
                if (i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转求职指南"
                }), !this.data.isLogin) return this.setData({
                    showlogin: !0
                }), !1;
                i.a.navigateTo({
                    url: "/fifthBag/pages/jobModule/jobBook/jobBook"
                });
            },
            tonatureTest: function() {
                if (i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转性格测试"
                }), !this.data.isLogin) return this.setData({
                    showlogin: !0
                }), !1;
                this.data.userinfo.mbtitest ? i.a.navigateTo({
                    url: "/fourthBag/pages/find/testresult/testresult"
                }) : i.a.navigateTo({
                    url: "/fourthBag/pages/find/testintroduce/testintroduce"
                });
            },
            jumpToPrivateSphere: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到私域二维码页面"
                }), i.a.navigateTo({
                    url: "/thirdBag/pages/privateSphere/privateSphere?groupId=" + this.data.sphereInfo.groupId + "&sphereCode=PROFESSIONAL_INTRODUCTION"
                });
            },
            isAddWx: function() {
                var t = this;
                return new Promise(function(e, a) {
                    var o = i.a.getStorageSync("unionid");
                    if (console.log("unionid", o), !o) return !1;
                    l.a.xyb_request("sphere/sphereInfo.action", "POST", {
                        unionId: o,
                        sphereCode: "PROFESSIONAL_INTRODUCTION"
                    }, !1, !1).then(function(a) {
                        "200" == a.code && (a.data.status && i.a.eventCenter.trigger("taroClick", {
                            funName: "私域入口埋点",
                            itemId: a.data.groupId,
                            itemTypeName: "PROFESSIONAL_INTRODUCTION"
                        }), t.setData({
                            sphereInfo: a.data
                        }), e(a.data));
                    }, function(t) {});
                });
            },
            getSubscrib: function() {
                var t = this;
                l.a.xyb_request("account/LoadAccountInfo!getSubscribe.action", "POST", {}, !1, !1).then(function(e) {
                    var a = i.a.getStorageSync("showEnrollStorage") || null;
                    wx.getStorageSync("applyStorage"), e.data || t.setData({
                        followXcx: e.data,
                        showEnrollStorage: a
                    }, function() {});
                }, function(t) {});
            },
            closeSend: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭公众号弹窗"
                }), i.a.removeStorageSync("showEnrollStorage"), i.a.removeStorageSync("applyStorage"), 
                this.setData({
                    showEnrollStorage: !1
                });
            },
            attentionClick: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "点击去关注公众号"
                }), this.setData({
                    sendSuccessFlag: !1,
                    showEnrollStorage: !1
                }), i.a.removeStorageSync("showEnrollStorage"), i.a.removeStorageSync("applyStorage");
                var t = {
                    title: "校友邦",
                    url: encodeURIComponent("https://mp.weixin.qq.com/s/EiuMCyTaNmUlfuRglm_JHA")
                };
                i.a.navigateTo({
                    url: "/videoBag/pages/h5/h5?model=" + JSON.stringify(t)
                });
            },
            onReady: function() {},
            onShow: function() {
                this.setData({
                    isLogin: f.globalData.isLogin
                }), this.getSubscrib(), f.globalData.isLogin && (this.getBlackInfo(), this.getOffWorkMsg()), 
                i.a.getStorageSync("bottomFloatingWindowFlag") && this.setData({
                    showBottomPopup: !0
                });
                var t = i.a.getCurrentPages();
                "劳育实践" == t[t.length - 1].__data__.actType && this.setData({
                    eduPracticeUpdate: !this.data.eduPracticeUpdate
                });
            },
            toBottomPopupDetail: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转底部浮窗详情"
                }), wx.removeStorageSync("bottomFloatingWindowFlag"), this.setData({
                    showBottomPopup: !1
                }), i.a.navigateTo({
                    url: "/secondBag/pages/courseDetails/courseDetails?id=25&fromFirstPage=1"
                });
            },
            closeBottomPopup: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭底部浮窗"
                }), wx.removeStorageSync("bottomFloatingWindowFlag"), this.setData({
                    showBottomPopup: !1
                });
            },
            getBlackInfo: function() {
                var t = this;
                l.a.xyb_request("client/PersonIndex!getBlackInfo.action", "POST", {}, !1, !1).then(function(e) {
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
                console.log(this.$scope.selectComponent("#enrolllist")), 0 === this.data.practiceTab && this.$scope.selectComponent("#enrolllist").$component.onReachBottom();
            },
            onShareAppMessage: function() {},
            changeType: function(t) {
                var e = this;
                console.log("changeType", t), i.a.eventCenter.trigger("taroClick", {
                    funName: "切换tab"
                });
                var a = "", o = t.currentTarget ? t.currentTarget.dataset : "", n = (a = o && o.item ? o.item : "", 
                "");
                this.data.tabList.forEach(function(t, a) {
                    e.data.actType == t.name && (n = a);
                }), 1 == t ? a = (0 == n ? this.data.tabList[this.data.tabList.length - 1] : this.data.tabList[n - 1]).name : 2 == t && (a = (n == this.data.tabList.length - 1 ? this.data.tabList[0] : this.data.tabList[n + 1]).name), 
                console.log("touch.......>>>>", a), this.setData({
                    actType: a
                }), "职引" == a && (this.loaduserInfo(), this.isAddWx());
            },
            changeEmptyType: function() {
                this.data.hasPlan ? this.setData({
                    titleText: "您当前还未参与实习计划中",
                    contentText: "前往实习报名查看",
                    btnText: "去报名"
                }) : this.setData({
                    titleText: "暂无可参与的实习计划",
                    contentText: "先来看看下大家有趣的职场经验吧～",
                    btnText: "去看看"
                });
            },
            getShowPractice: function() {
                var t = this, e = f.globalData.growupType;
                1 == e ? f.globalData.growupType = "实习" : 2 == e && (f.globalData.growupType = "职引");
                var a = f.globalData.growupType || "";
                l.a.xyb_request("common/ShowPractice.action", "POST", {}, !1, !1).then(function(e) {
                    console.log("获取实习模块是否显示接口"), console.log(e.data), t.setData({
                        hasShowPractice: e.data.show,
                        hasPlan: e.data.hasPlan,
                        hasWindow: e.data.show && e.data.hasWindow && e.data.id,
                        newAuthId: e.data.id
                    }), f.globalData.growupType = "实习", t.showLaborEducation(a), t.changeEmptyType(), 
                    t.data.hasShowPractice ? (i.a.getStorageSync("studentActivate") ? (t.setData({
                        studentActivate: !0
                    }), t.getShowPracticePlanRedPoint(), t.getAnswerSheetCheck(), t.getMsgList(), t.getList()) : t.setData({
                        studentActivate: !1
                    }), t.data.hasWindow && u.a.confirm({
                        message: "检测到您有新学籍，是否使用新学籍"
                    }).then(function() {
                        t.changeAuth();
                    }).catch(function() {
                        i.a.showToast({
                            title: "后续切换可至“我的-学籍认证” 进行切换学籍",
                            icon: "none"
                        });
                    })) : ((e = []).push({
                        id: 3,
                        name: "职引"
                    }), t.setData({
                        actType: e[0].name,
                        tabList: e
                    })), setTimeout(function() {
                        var e = t.$router.params.tab;
                        e && (2 == e ? t.setData({
                            actType: "职引"
                        }) : 3 == e && t.setData({
                            actType: "课程"
                        }));
                    }, 1e3);
                }, function(t) {
                    console.log(t);
                });
            },
            showLaborEducation: function(t) {
                var e = this;
                l.a.xyb_request("laboreducation/ShowLaborEducation.action", "POST", {}, !1, !1).then(function(a) {
                    var o = a.data.show, n = [];
                    l.a.xyb_request("account/LoadAccountInfo.action", "POST", {}, !1, !1).then(function(a) {
                        a = a.data.activate, e.data.hasShowPractice && n.push({
                            id: 1,
                            name: "实习"
                        }), e.data.isLogin && a && o && n.push({
                            id: 2,
                            name: "劳育实践"
                        }), n.push({
                            id: 3,
                            name: "职引"
                        }), n.push({
                            id: 4,
                            name: "课程"
                        }), "实习" == t && (t = e.data.hasShowPractice ? "实习" : ""), e.setData({
                            actType: t || n[0].name,
                            tabList: n
                        });
                    }, function(t) {
                        console.log(t);
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            getOffWorkMsg: function() {
                var t = this;
                l.a.xyb_request("student/leave/loadLeaveSetting.action", "POST", {}, !1, !1).then(function(e) {
                    t.setData({
                        offWorkMsg: e.data
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            changeAuth: function() {
                var t = this;
                l.a.xyb_request("schoolroll/schoolRollList!switchRoll.action", "POST", {
                    id: this.data.newAuthId
                }, !1, !1).then(function(e) {
                    i.a.showToast({
                        title: "切换学籍成功，可至“我的-学籍认证” 进行切换学籍",
                        icon: "none"
                    }), t.getShowPracticePlanRedPoint(), t.getAnswerSheetCheck(), t.getMsgList(), t.getList();
                }, function(t) {
                    console.log(t);
                });
            },
            toSeeSee: function() {
                this.data.hasPlan ? this.toEnrolllist() : i.a.reLaunch({
                    url: "/pages/find/index/index"
                });
            },
            toEnrolllist: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到实习报名"
                }), i.a.navigateTo({
                    url: "/growUp/pages/enroll/enrolllist/enrolllist"
                });
            },
            toEmploymentReport: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到就业上报"
                }), this.data.offWorkMsg.employmentReported ? i.a.navigateTo({
                    url: "/growUp/pages/employmentReportDetail/employmentReportDetail"
                }) : i.a.navigateTo({
                    url: "/growUp/pages/employmentReport/employmentReport"
                });
            },
            toSign: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到签到"
                }), i.a.navigateTo({
                    url: "/growUp/pages/sign/sign/sign"
                });
            },
            toJournalList: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到周日志"
                }), i.a.navigateTo({
                    url: "/growUp/pages/journal/journalList/journalList"
                });
            },
            toQuestionnairelist: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到问卷"
                }), i.a.navigateTo({
                    url: "/echartsBag/pages/questionnaire/questionnairelist/questionnairelist"
                });
            },
            toMessageList: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到消息"
                }), i.a.reLaunch({
                    url: "/pages/message/index/index"
                });
            },
            toMsgDetail: function(t) {
                var e = this;
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转消息详情"
                }), t = t.currentTarget.dataset.project, console.log(t), "公告" == t.type ? i.a.navigateTo({
                    url: "/fifthBag/pages/message/schoolNoticeDetail/schoolNoticeDetail?id=" + t.id
                }) : "活动消息" == t.type ? (console.log("活动消息", t), l.a.xyb_request("message/StudentMessage!activeInfo.action", "POST", {
                    infoId: t.id
                }, !1, !1).then(function(t) {
                    console.log(t), "200" === t.code && e.tosystemActiveDetail(t.data);
                })) : "实习消息" == t.type && (console.log("实习消息", t), l.a.xyb_request("message/StudentMessage!practiceNewsInfo.action", "POST", {
                    infoId: t.id
                }, !1, !1).then(function(t) {
                    "200" === t.code && e.tointernshipnewsDetail(t.data);
                }));
            },
            tosystemActiveDetail: function(t) {
                var e;
                console.log(t), i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转详情",
                    funType: "站内信",
                    funData: t.id
                }), 0 == this.data.typeId && t.id ? i.a.navigateTo({
                    url: "/fifthBag/pages/message/systemActiveDetail/systemActiveDetail?id=" + t.id + "&pageSource=13"
                }) : 0 == t.type && t.url ? (e = {
                    title: t.title,
                    url: encodeURIComponent(t.url)
                }, i.a.navigateTo({
                    url: "/videoBag/pages/h5/h5?model=" + JSON.stringify(e) + "&pageSource=13"
                })) : 1 == t.type && t.url ? i.a.navigateTo({
                    url: "/fifthBag/pages/message/activityDetail/activityDetail?url=" + encodeURIComponent(t.url) + "&pageSource=13"
                }) : 2 == t.type && t.url ? (f.globalData.applyPostSort = 19, i.a.navigateTo({
                    url: "/videoBag/pages/posdetail/posdetail?postid=" + t.url + "&fromType=12&pageSource=13"
                })) : 3 == t.type && t.url ? (f.globalData.applyPostSort = 20, i.a.navigateTo({
                    url: "/videoBag/pages/comdetail/comdetail?comid=" + t.url + "&pageSource=13"
                })) : 4 == t.type && t.url ? i.a.navigateTo({
                    url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + t.url + "&pageSource=13"
                }) : 5 == t.type && t.url ? i.a.navigateTo({
                    url: "/videoBag/pages/doubleSelectList/doubleSelectList?id=" + t.url + "&pageSource=13"
                }) : 6 == t.type && t.url ? f.globalData.isLogin ? i.a.navigateTo({
                    url: "/growUp/pages/home/topicCircle/topicCircle?topicId=" + t.url + "&pageSource=13"
                }) : i.a.navigateTo({
                    url: "/videoBag/pages/login/login/login"
                }) : 7 == t.type && t.url ? i.a.navigateTo({
                    url: "/secondBag/pages/courseDetails/courseDetails?id=" + t.url + "&pageSource=13"
                }) : 8 == t.type && t.url ? i.a.navigateTo({
                    url: "/fifthBag/pages/huzhouList/huzhouList?cityChannelId=" + t.url + "&pageSource=13"
                }) : 9 == t.type && t.url ? i.a.navigateTo({
                    url: "/growUp/pages/home/informationdetail/informationdetail?id=" + t.url + "&pageSource=13"
                }) : 10 == t.type && t.url ? i.a.navigateTo({
                    url: "/growUp/pages/home/dynamicDetail/dynamicDetail?dynamicId=" + t.url + "&pageSource=13"
                }) : 11 == t.type && t.url ? i.a.navigateTo({
                    url: "/growUp/pages/home/questiondetail/questiondetail?questionId=" + t.url + "&pageSource=13"
                }) : 13 == t.type && t.questionnaireId && (-1 == t.rpoStatus && (t.rpoStatus = 0), 
                i.a.navigateTo({
                    url: "/fifthBag/pages/message/questionnaireDetail/questionnaireDetail?id=" + t.questionnaireId + "&status=" + t.rpoStatus + "&noticeId=" + t.id + "&pageSource=13"
                }));
            },
            tointernshipnewsDetail: function(t) {
                var e, a, o, n, s = t.remindType, r = (t.id, t.dataId), c = t.planId;
                t.editTime, "viewInd" == s ? i.a.navigateTo({
                    url: "/growUp/pages/enroll/enrollitem/index/index?id=" + c + "&independent=1&attention=0&double=0&planname=" + t.planName
                }) : "viewCenter" == s ? i.a.navigateTo({
                    url: "/growUp/pages/enroll/enrollitem/index/index?id=" + c + "&independent=0&attention=1&double=0&planname=" + t.planName
                }) : "viewDouble" == s ? i.a.navigateTo({
                    url: "/growUp/pages/enroll/enrollitem/index/index?id=" + c + "&independent=0&attention=0&double=1&planname=" + t.planName
                }) : "addDayBlog" == s ? !(e = t.blogTaskDTO) || (c = e.dateList) && 0 < c.length && (c = c[0], 
                i.a.navigateTo({
                    url: "/growUp/pages/journal/dailyeditor/editor?blogType=0&traineeId=" + c.traineeId + "&selectPlan=" + e.planName + "&projectName=" + c.projectName + "&projectStartDate=" + c.projectStartDate + "&projectEndDate=" + c.projectEndDate + "&blogsCount=" + c.blogsCount + "&totalPiece=" + e.totalPiece + "&cycle=" + e.cycle + "&cycleCount=" + e.cycleCount + "&leastWordNum=" + e.leastWordNum + "&blogDescription=" + e.blogDescription + "&catchUp=" + e.catchUp + "&dateName=" + e.dateName
                })) : "addWeekBlog" == s ? !(o = t.blogTaskDTO) || (e = o.dateList) && 0 < e.length && (a = e[0], 
                i.a.navigateTo({
                    url: "/growUp/pages/journal/dailyeditor/editor?blogType=1&traineeId=" + a.traineeId + "&selectPlan=" + o.planName + "&projectName=" + a.projectName + "&projectStartDate=" + a.projectStartDate + "&projectEndDate=" + a.projectEndDate + "&blogsCount=" + a.blogsCount + "&totalPiece=" + o.totalPiece + "&cycle=" + o.cycle + "&cycleCount=" + o.cycleCount + "&leastWordNum=" + o.leastWordNum + "&blogDescription=" + o.blogDescription + "&catchUp=" + o.catchUp + "&dateName=" + o.dateName
                })) : "addMonthBlog" == s ? !(a = t.blogTaskDTO) || (o = a.dateList) && 0 < o.length && (o = o[0], 
                i.a.navigateTo({
                    url: "/growUp/pages/journal/dailyeditor/editor?blogType=2&traineeId=" + o.traineeId + "&selectPlan=" + a.planName + "&projectName=" + o.projectName + "&projectStartDate=" + o.projectStartDate + "&projectEndDate=" + o.projectEndDate + "&blogsCount=" + o.blogsCount + "&totalPiece=" + a.totalPiece + "&cycle=" + a.cycle + "&cycleCount=" + a.cycleCount + "&leastWordNum=" + a.leastWordNum + "&blogDescription=" + a.blogDescription + "&catchUp=" + a.catchUp + "&dateName=" + a.dateName
                })) : "viewInformation" == s ? r && l.a.xyb_request("schoolroll/SchoolRollInfo.action", "POST", {
                    id: r || 1
                }, !1, !1).then(function(t) {
                    t = t.data.data, i.a.navigateTo({
                        url: "/secondBag/pages/mine/schoolcensus/sucstatus/sucstatus?model=" + encodeURIComponent(JSON.stringify(t))
                    });
                }, function(t) {
                    console.log(t);
                }) : "viewPlan" == s ? i.a.navigateTo({
                    url: "/growUp/pages/enroll/enrolllist/enrolllist"
                }) : "viewClock" == s ? i.a.navigateTo({
                    url: "/growUp/pages/sign/sign/sign"
                }) : "viewDayBlog" == s || "viewWeekBlog" == s || "viewMonthBlog" == s ? i.a.navigateTo({
                    url: "/growUp/pages/journal/journalDetails/journalDetails?&blogId=" + r
                }) : "viewEvaluate" == s || ("studentViewInsuranceH5" == s ? (console.log(r), n = {
                    title: "实习保险",
                    url: encodeURIComponent(r)
                }, n = JSON.stringify(n), console.log(n), i.a.navigateTo({
                    url: "/videoBag/pages/h5/h5?model=" + n
                })) : "achievementDetail" == s ? i.a.navigateTo({
                    url: "/growUp/pages/gradeidentification/gradeidentification/gradeidentification?projectRuleId=" + r
                }) : "talkdetail" == s ? i.a.navigateTo({
                    url: "/videoBag/pages/doubleSelectList/doubleSelectList?id=" + r + "&name="
                }) : "talklist" == s ? (n = t.talkDTO) && (t = n.obj, i.a.navigateTo({
                    url: "/fifthBag/pages/jobModule/doubleMeeting/doubleMeeting?fromStatue=" + t + "&fromName=" + n.name
                })) : "viewReport" == s ? (console.log(r), i.a.navigateTo({
                    url: "/growUp/pages/practiceReport/index/index?id=" + r
                })) : "leaveAuditNotice" == s && i.a.navigateTo({
                    url: "/echartsBag/pages/offWorkDetail/offWorkDetail?id=" + r
                }));
            },
            toKefu: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到客服"
                }), i.a.navigateTo({
                    url: "/videoBag/pages/customerservice/servicecenter/servicecenter"
                });
            },
            toInternshipschedule: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到实习任务"
                }), console.log(t);
                var e = encodeURIComponent(JSON.stringify(t.currentTarget.dataset.project));
                t = encodeURIComponent(JSON.stringify(t.currentTarget.dataset.project.planId));
                i.a.navigateTo({
                    url: "/echartsBag/pages/internshipschedule/internshipschedule?model=" + e + "&planId=" + t
                });
            },
            getArrayIndex: function(t, e, a) {
                for (var o = 0; o < t.length; o++) if (t[o][e] == a) return o;
                return -1;
            },
            toChangePost: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转修改岗位"
                }), console.log(t);
                var e = t.currentTarget.dataset.project, a = e.subscribeAuditFlag ? 1 : 2;
                -1 < (t = this.getArrayIndex(e.projectList, "moduleId", 1)) ? i.a.navigateTo({
                    url: "/growUp/pages/enroll/enrollitem/addjob/addjob?projectid=" + e.projectList[t].projectId + "&showPosts=1&hasAudit=" + a + "&from=cz"
                }) : i.a.showToast({
                    title: "自主项目不存在",
                    icon: "none"
                });
            },
            humpTalkDetails: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "去看看-双选会"
                }), t = t.currentTarget.dataset.id, i.a.navigateTo({
                    url: "/videoBag/pages/doubleSelectList/doubleSelectList?id=" + t
                });
            },
            getSchoolTalkList: function() {
                var t = this;
                l.a.xyb_request("student/practiceplan/loadSchoolTalks.action", "POST", {}, !1, !1).then(function(e) {
                    console.log(e.data), t.setData({
                        schoolTalkList: e.data
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            getTalkList: function() {
                var t = this;
                l.a.xyb_request("student/practiceplan/loadRecommendTalks.action", "POST", {}, !1, !1).then(function(e) {
                    console.log(e.data), t.setData({
                        talkList: e.data
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            getList: function() {
                var t = this;
                l.a.xyb_request("student/progress/ProjectList.action", "POST", {}, !1, !1).then(function(e) {
                    console.log(e);
                    var a = void 0, o = e.data;
                    "[]" !== JSON.stringify(o) && o ? a = !1 : (a = !0, t.loadSchoolPostList()), t.setData({
                        planList: o,
                        noData: a,
                        practiceTab: a ? 0 : 1
                    }, function() {
                        var e = !0;
                        o && 0 < o.length && o.map(function(t) {
                            t.practiceEnd && (e = !1);
                        }), t.setData({
                            practiceEnd: e
                        });
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            getMsgList: function() {
                var t = this;
                l.a.xyb_request("message/StudentMessage!lastNewNotice.action", "POST", {}, !1, !1).then(function(e) {
                    console.log("res"), console.log(e);
                    e = e.data;
                    var a = "[]" === JSON.stringify(e);
                    t.setData({
                        msgList: e,
                        hasMessage: !a,
                        hasNewMessage: !0
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            getShowPracticePlanRedPoint: function() {
                var t = this;
                l.a.xyb_request("common/ShowPractice!planRedPoint.action", "POST", {}, !1, !1).then(function(e) {
                    console.log(e), t.setData({
                        hasNewSignup: e.data.show
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            getAnswerSheetCheck: function() {
                var t = this;
                l.a.xyb_request("answersheet/AnswerSheetCheck.action", "POST", {}, !1, !1).then(function(e) {
                    t.setData({
                        hasNewQuestion: e.data
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            setUpdateMenuBarRedPoint: function() {
                l.a.xyb_request("common/ShowPractice!updateMenuBarRedPoint.action", "POST", {}, !1, !1).then(function(t) {}, function(t) {});
            },
            loadSchoolPostList: function() {
                var t = this;
                l.a.xyb_request("cooperation/loadSchoolPostList.action", "POST", {
                    page: 1,
                    pageSize: 3
                }, !1, !1).then(function(e) {
                    var a;
                    e && e.data && e.data.list && (a = !1, e.data.maxPage && (a = !0), t.setData({
                        postList: e.data.list,
                        hasMoer: a
                    }));
                }, function(t) {
                    console.log(t);
                });
            },
            toposDetail: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转职位详情"
                }), t.currentTarget.dataset.id && (t = t.currentTarget.dataset.id, i.a.navigateTo({
                    url: "/videoBag/pages/posdetail/posdetail?postid=" + t + "&fromType=27"
                }));
            },
            gomore: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转更多职位"
                }), i.a.setStorage({
                    key: "SchoolPostType",
                    data: 1
                }), i.a.reLaunch({
                    url: "/pages/find/index/index"
                });
            },
            receiveLogin: function(t) {
                this.setData({
                    isLogin: !0
                }), f.globalData.isLogin = !0, this.getShowPractice(), this.getBlackInfo();
            },
            toAuthSchool: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转学籍认证"
                }), i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/index/index"
                });
            },
            toSet: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "去关闭实习模块"
                }), i.a.navigateTo({
                    url: "/secondBag/pages/mine/setting/setting"
                });
            },
            toOffwork: function() {
                i.a.navigateTo({
                    url: "/echartsBag/pages/offwork/offwork"
                });
            },
            toOffWorklist: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转请假列表"
                }), i.a.navigateTo({
                    url: "/echartsBag/pages/offWorkList/offWorkList"
                });
            },
            closeLoginClick: function() {
                this.setData({
                    showlogin: !1
                });
            },
            closeJobStatusPopup: function() {
                this.setData({
                    jobStatusPopupFlag: !1
                });
            },
            jumpDetail: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转计划详情"
                });
                var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.independent, o = t.currentTarget.dataset.attention, n = t.currentTarget.dataset.double;
                t = t.currentTarget.dataset.planname;
                i.a.navigateTo({
                    url: "/growUp/pages/enroll/enrollitem/index/index?id=" + e + "&independent=" + a + "&attention=" + o + "&double=" + n + "&planname=" + t
                });
            },
            goNewGuide: function() {
                i.a.navigateTo({
                    url: "/ninthBag/pages/newUserGuide/newUserGuide"
                });
            },
            changePracticeTab: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "切换" + (0 === t ? "实习报名" : "我的实习") + "tab"
                }), this.setData({
                    practiceTab: t
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
        }(m, i.a.Component), c(m, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, a, o) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, a);
                    return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, a, o) : void 0;
                })(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var e = this.$prefix, a = this.binderrorimg, o = Object(n.genCompid)(e + "$compid__1118"), i = (G = p(o, 2))[0], s = G[1], c = Object(n.genCompid)(e + "$compid__1119"), l = (K = p(c, 2))[0], u = K[1], g = Object(n.genCompid)(e + "$compid__1120"), d = (Y = p(g, 2))[0], h = Y[1], f = Object(n.genCompid)(e + "$compid__1121"), m = (V = p(f, 2))[0], y = V[1], v = Object(n.genCompid)(e + "$compid__1122"), S = (Z = p(v, 2))[0], b = Z[1], T = Object(n.genCompid)(e + "$compid__1123"), w = (tt = p(T, 2))[0], D = tt[1], P = Object(n.genCompid)(e + "$compid__1124"), C = p(P, 2), _ = C[0], L = C[1], x = this.data, k = x.statusHeight, N = x.showboxFlag, j = x.talkList, I = x.schoolTalkList, O = x.showRecommand, B = x.actType, F = (x.hasShowPractice, 
                x.noData), M = x.hasNewSignup, R = x.hasNewQuestion, U = x.offWorkMsg, A = x.hasMessage, E = x.msgList, $ = x.hasNewMessage, q = x.titleText, W = x.postList, J = x.planList, X = x.studentActivate, H = x.userinfo, z = x.showlogin, Q = x.isForbiddenLogin, G = (o = x.jobStatusPopupFlag, 
                x.jobStatusType), K = (c = x.ifIphoneX, x.tabList), Y = (g = x.eduPracticeUpdate, 
                x.showBottomPopup), V = (f = x.showEnrollStorage, x.followXcx), Z = (v = x.windowData, 
                x.practiceEnd), tt = (T = (x.isAddWxFlag, x.sphereInfo), x.practiceTab);
                e = r()("fixedTop", "劳育实践" === B && "educationPracticeFixedTop"), P = X ? r()("text", 0 === tt && "text-active") : null;
                return this.anonymousFunc0 = function() {
                    return t.changePracticeTab(0);
                }, C = X ? r()("text", 1 === tt && "text-active") : null, this.anonymousFunc1 = function() {
                    return t.changePracticeTab(1);
                }, this.anonymousFunc4 = function(e) {
                    e.stopPropagation(), t.closeBottomPopup(e);
                }, this.anonymousFunc5 = function(e) {
                    e.stopPropagation(), t.closeBoxFlag(e);
                }, x = F ? [] : J.map(function(e, a) {
                    e = {
                        $original: Object(n.internal_get_original)(e)
                    };
                    var o = "fdhzz" + a;
                    return t.anonymousFunc2Map[o] = function(e) {
                        e.stopPropagation(), t.toChangePost(e);
                    }, a = "fdizz" + a, t.anonymousFunc3Map[a] = function(e) {
                        e.stopPropagation(), t.toInternshipschedule(e);
                    }, {
                        _$indexKey: o,
                        _$indexKey2: a,
                        $original: e.$original
                    };
                }), "劳育实践" == B && n.propsManager.set({
                    isShow: "劳育实践" == B,
                    statusHeight: k,
                    eduPracticeUpdate: g
                }, s, i), n.propsManager.set({
                    source: "noindex",
                    showLogin: z,
                    onReceiveLogin: this.receiveLogin,
                    onCloseLogin: this.closeLoginClick
                }, u, l), n.propsManager.set({
                    isForbiddenLogin: Q
                }, h, d), n.propsManager.set({
                    isGrowUp: !0,
                    isShow: o,
                    jobStatusType: G,
                    onClose: this.closeJobStatusPopup
                }, y, m), n.propsManager.set({
                    barFlag: 2
                }, b, S), n.propsManager.set({
                    show: f && !V,
                    describe: "报名审核结果",
                    openText: "审核结果",
                    onJump: this.attentionClick.bind(this),
                    onClose: this.closeSend.bind(this)
                }, D, w), n.propsManager.set({
                    isOpened: O,
                    onClose: this.closeRecommandBox.bind(this)
                }, L, _), Object.assign(this.__state, {
                    anonymousState__temp: e,
                    anonymousState__temp2: P,
                    anonymousState__temp3: C,
                    loopArray734: x,
                    $compid__1118: s,
                    $compid__1119: u,
                    $compid__1120: h,
                    $compid__1121: y,
                    $compid__1122: b,
                    $compid__1123: D,
                    $compid__1124: L,
                    statusHeight: k,
                    actType: B,
                    tabList: K,
                    noData: F,
                    hasMessage: A,
                    msgList: E,
                    hasNewMessage: $,
                    studentActivate: X,
                    hasNewQuestion: R,
                    offWorkMsg: U,
                    hasNewSignup: M,
                    practiceTab: tt,
                    postList: W,
                    binderrorimg: a,
                    planList: J,
                    sphereInfo: T,
                    userinfo: H,
                    practiceEnd: Z,
                    windowData: v,
                    ifIphoneX: c,
                    talkList: j,
                    schoolTalkList: I,
                    showboxFlag: N,
                    showRecommand: O,
                    jobStatusPopupFlag: o,
                    showBottomPopup: Y,
                    titleText: q
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {}
        }, {
            key: "anonymousFunc1",
            value: function(t) {}
        }, {
            key: "anonymousFunc2",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : g(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc2Map[t] && (e = this.anonymousFunc2Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc3",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : g(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc3Map[t] && (e = this.anonymousFunc3Map)[t].apply(e, o);
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
        } ]), c = a = m, a.$$events = [ "changeType", "toMsgDetail", "toMessageList", "toSign", "toJournalList", "toQuestionnairelist", "toOffWorklist", "toEmploymentReport", "toEnrolllist", "anonymousFunc0", "anonymousFunc1", "toKefu", "toposDetail", "binderrorimg", "gomore", "jumpDetail", "anonymousFunc2", "anonymousFunc3", "toAuthSchool", "toSet", "jumpToPrivateSphere", "toWhere", "tonatureTest", "goNewGuide", "toBottomPopupDetail", "anonymousFunc4", "showRecommandBox", "anonymousFunc5", "closeRecommandBox", "humpTalkDetails" ], 
        a.$$componentPath = "pages/growup/growup", a = c)) || a) || a;
        function m() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, m);
            for (var a = arguments.length, o = Array(a), n = 0; n < a; n++) o[n] = arguments[n];
            return (t = e = h(this, (t = m.__proto__ || Object.getPrototypeOf(m)).call.apply(t, [ this ].concat(o)))).$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray734", "$compid__1118", "$compid__1119", "$compid__1120", "$compid__1121", "$compid__1122", "$compid__1123", "$compid__1124", "statusHeight", "actType", "tabList", "noData", "hasMessage", "msgList", "hasNewMessage", "studentActivate", "hasNewQuestion", "offWorkMsg", "hasNewSignup", "practiceTab", "postList", "binderrorimg", "planList", "sphereInfo", "userinfo", "practiceEnd", "windowData", "ifIphoneX", "talkList", "schoolTalkList", "showboxFlag", "showRecommand", "jobStatusPopupFlag", "showBottomPopup", "titleText", "__fn_onReachBottom" ], 
            e.config = {
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                usingComponents: {
                    "van-dialog": "../../vant-weapp/dist/dialog/index",
                    "van-popup": "../../vant-weapp/dist/popup/index"
                }
            }, e.anonymousFunc2Map = {}, e.anonymousFunc3Map = {}, e.customComponents = [ "Enrolllist", "EducationPractice", "MyCourse", "Fastlogin", "Forbiddenlogin", "JobStatusPopup", "BottomTabbar", "OfficialAccountsPopup", "Popup" ], 
            h(e, t);
        }
        a = c, Component(o(0).default.createComponent(c, !0));
    },
    310: function(t, e, a) {
        t.exports = a.p + "pages/growup/growup.wxml";
    },
    967: function(t, e, a) {
        a(310);
    },
    968: function(t, e, a) {}
}, [ [ 1569, 0, 1, 2 ] ] ]);