var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 301 ], {
    1570: function(e, a, o) {
        o.r(a), o(969);
        var n = o(0), i = o.n(n), s = o(2), r = (a = o.n(s), o(1)), c = o(3), l = o(11), u = (s = o(19), 
        o.n(s)), p = (o(970), "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
            return t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
        }), g = function(t, e) {
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
        s = function(t, e, a) {
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
        var m = i.a.getApp(), f = void 0;
        s = a()({
            data: {
                statusHeight: 0,
                titleHeight: 0,
                navHeight: 0,
                userInfo: {},
                hasUserInfo: !1,
                canIUse: i.a.canIUse("button.open-type.getUserInfo"),
                isLogin: !1,
                showlogin: !1,
                bannerList: [],
                postList: [],
                schoolLeaderpostList: [],
                actType: 1,
                showfirst: !1,
                pageIndex: 1,
                pageIndex2: 1,
                maxPage: "",
                hasMore: !0,
                maxPage2: "",
                hasMore2: !0,
                scrolltop: "",
                fixedTop: !1,
                areaId: "",
                loadCompleteList: !1,
                loadComplete: !1,
                cityname: "全国",
                cityId: "",
                accountInfo: {},
                hasProfession: !1,
                professionInfo: {},
                professionTabType: 1,
                currentProfessionId: "",
                selectProfession: null,
                professionDes: "",
                navScrollLeft: 0,
                browseStartTime: "",
                titleList: [ "职位推荐", "学长职引" ],
                haveSchool: !1,
                pageIndex6: 1,
                maxPage6: "",
                hasMore6: !0,
                postList2: [],
                jobObjectiveStr: "我的求职意向",
                careerDesc: "HR直播互动",
                choiceDesc: "直达心动企业",
                notCompleteResume: !1,
                notJobResume: !1,
                resumeOptimization: 0,
                isForbiddenLogin: !1,
                unviewable: !1,
                bannerHeight: null,
                timingRequestInterface: !1,
                timingRequest: null,
                showSelectprofessionFlag: !1,
                leaveFlag: !1,
                showCitySelectFlag: !1,
                selectCityName: "全国",
                selectCityArray: [ {
                    name: "全国",
                    id: null
                } ],
                xjhRandomImg: [],
                sxhRandomImg: [],
                comRandomImg: [],
                currentSwiper: 0,
                jobStatusFlag: !1,
                jobStatusList: [ {
                    id: 0,
                    name: "正在找工作"
                }, {
                    id: 3,
                    name: "准备换工作"
                }, {
                    id: 2,
                    name: "暂不找工作"
                } ],
                animateFlag: !1
            },
            onLoad: function(t) {
                c.a.Page.init();
                var e = this;
                i.a.getSystemInfo({
                    success: function(t) {
                        console.log(t);
                        var a = -1 < t.system.indexOf("iOS");
                        e.setData({
                            statusHeight: t.statusBarHeight,
                            navHeight: a ? 44 : 48
                        });
                    }
                }), this.setData({}, function() {
                    i.a.createSelectorQuery().select(".container_title").boundingClientRect(function(t) {
                        e.setData({
                            titleHeight: t ? t.height : 104
                        });
                    }).exec();
                }), this.loadSchoolPostList(1), this.getEnterpriseTopData(), this.getHeight(), t.first && (a = i.a.getStorageSync("first"), 
                this.setData({
                    showfirst: !a
                })), this.alumniInfoCheck();
                var a = i.a.getStorageSync("sessionId") || null;
                i.a.setStorageSync("currentSessionId", a), m.globalData.isLogin ? (this.setData({
                    hasMore2: !0,
                    isLogin: !0
                }), this.loaduserInfo()) : this.setData({
                    isLogin: !1,
                    hasMore2: !1
                }), this.getPostlist(1), 1 == i.a.getStorageSync("SchoolPostType") && (this.setData({
                    actType: 2,
                    haveSchool: !0,
                    titleList: [ "职位推荐", "本校推荐", "学长职引" ]
                }), i.a.removeStorageSync("SchoolPostType")), i.a.setStorageSync("jobTip", !0), 
                this.initXjhRandomImg(), this.initSxhRandomImg(), this.initComRandomImg();
            },
            randomImgFun: function(t, e) {
                return new Promise(function(a, o) {
                    for (var n = [], i = function(a) {
                        var o = Math.floor(Math.random() * t) + 1;
                        if (-1 == n.findIndex(function(t) {
                            return o == t;
                        }) && n.push(o), n.length == e) return "break";
                    }, s = 0; s < 99 && "break" !== i(); s++) ;
                    a(n);
                });
            },
            initXjhRandomImg: function() {
                var t = this;
                this.setState({}, function() {
                    t.randomImgFun(20, 3).then(function(e) {
                        t.setData({
                            xjhRandomImg: e
                        });
                    });
                });
            },
            initSxhRandomImg: function() {
                var t = this;
                this.randomImgFun(27, 3).then(function(e) {
                    t.setData({
                        sxhRandomImg: e
                    });
                });
            },
            initComRandomImg: function() {
                var t = this;
                this.randomImgFun(27, 3).then(function(e) {
                    t.setData({
                        comRandomImg: e
                    });
                });
            },
            binderrorimg: function(t) {
                var e = {};
                e["postList[" + t.target.dataset.errorimg + "].logoUrl"] = "https://xcxresources.xybsyw.com/xcx/images/com_default.png", 
                this.setData(e);
            },
            getPostlist: function(t, e) {
                var a = this;
                t && this.setData({
                    loadCompleteList: !1,
                    loadComplete: !1
                });
                var o, n, s, c, u = "post/getList.action", p = {
                    page: this.data.pageIndex,
                    onLogin: this.data.isLogin,
                    locationIds: this.data.cityId
                };
                this.data.loadComplete && (u = "post/GetTimeList.action", p.cityName = this.data.cityname, 
                this.setData({
                    hasMore: !0
                })), (2 == t || 0 < this.data.selectCityArray.length) && "全国" != this.data.selectCityArray[0].name && (n = [], 
                s = "", (c = []).push(this.data.cityname), this.data.selectCityArray.forEach(function(t, e) {
                    n.push(t.id), c.push(t.name);
                }), o = n.join(","), p.tempLocations = o, this.data.loadComplete && (s = c.join(","), 
                p.cityName = s)), r.a.xyb_request(u, "POST", p, !1, !1).then(function(o) {
                    var n = a;
                    t && n.setData({
                        postList: []
                    });
                    var i = n.data.postList;
                    if (o.data) {
                        var s = o.data.list || [], r = [];
                        if (s.forEach(function(t) {
                            i.push(t), r.push(t.id);
                        }), 0 < r.length && (r = r.join(","), l.a.commonDataStatistics("expose", "pages/index/index", "", "", "", r, "岗位")), 
                        n.setData({
                            maxPage: o.data.maxPage
                        }), 0 < o.data.maxPage ? n.setData({
                            hasMore: o.data.maxPage != a.data.pageIndex
                        }) : n.setData({
                            hasMore: !1
                        }), e && e(o), n.data.loadComplete) n.setData({
                            postList: i
                        }); else {
                            if (0 == o.data.list.length && 1 == n.data.pageIndex) n.setData({
                                loadCompleteList: !0,
                                loadComplete: !0,
                                pageIndex: 1
                            }), i.unshift({
                                loadFinish: "true"
                            }), n.getPostlist(); else {
                                for (var c = 0; c < i.length; c++) i[c].hideLabel = !0;
                                n.data.hasMore || (n.setData({
                                    loadComplete: !0,
                                    pageIndex: 1
                                }), i.push({
                                    loadFinish: "true"
                                }), n.getPostlist());
                            }
                            n.setData({
                                postList: i
                            });
                        }
                        console.log(n.data.postList), 1 == n.data.pageIndex && n.getApplyPostFun();
                    }
                }, function(t) {
                    t && "205" == t.code && (a.setData({
                        pageIndex: 1,
                        maxPage: "",
                        hasMore: !0
                    }), a.getPostlist(1, function() {
                        i.a.stopPullDownRefresh();
                    }));
                });
            },
            getLocation: function(t, e) {
                var a = this;
                i.a.getLocation({
                    type: "gcj02",
                    success: function(o) {
                        i.a.request({
                            url: "https://restapi.amap.com/v3/geocode/regeo",
                            data: {
                                key: "c222383ff12d31b556c3ad6145bb95f4",
                                location: o.longitude + "," + o.latitude,
                                extensions: "all",
                                s: "rsx",
                                sdkversion: "sdkversion",
                                logversion: "logversion"
                            },
                            success: function(o) {
                                var n = o.data.regeocode.addressComponent.city || "全国";
                                o = o.data.regeocode.addressComponent.adcode || "";
                                a.setData({
                                    cityname: n,
                                    cityId: o
                                }), t && a.loadProfessionPostList(a.data.currentProfessionId, !0), o && 1 == e && a.getBannerlist(o);
                            },
                            fail: function(e) {
                                a.setData({
                                    cityname: "全国"
                                }), t && a.loadProfessionPostList(a.data.currentProfessionId, !0);
                            }
                        });
                    },
                    fail: function(e) {
                        t && a.loadProfessionPostList(a.data.currentProfessionId, !0);
                    }
                });
            },
            getBannerlist: function(t) {
                var e = this;
                r.a.xyb_request("client/activity/LoadActivityList.action", "POST", {
                    locationId: t || null,
                    showPage: 1
                }, !1, !1).then(function(t) {
                    for (var a, o = t.data || [], n = 0; n < o.length; n++) o[n].num = 1;
                    e.setData({
                        bannerList: o
                    }), 0 < e.data.bannerList.length && (t = i.a.createSelectorQuery(), a = e, t.select(".banner").boundingClientRect(function(t) {
                        a.setData({
                            bannerHeight: t && t.height || 0
                        });
                    }).exec(), clearInterval(a.data.timingRequest), a.data.timingRequest = setInterval(function() {
                        console.log(a.data.unviewable), a.data.unviewable || a.data.leaveFlag || a.recommendComNum(2);
                    }, 3e4));
                }, function(t) {});
            },
            swiperChange: function(t) {
                t = t.detail.current, this.data.unviewable || this.data.bannerList[t].num++;
            },
            recommendComNum: function(t) {
                var e = [];
                if (2 == t && this.setData({
                    timingRequestInterface: !0
                }), 1 == t) return clearInterval(this.data.timingRequest), !1;
                for (var a = this.data.bannerList, o = 0; o < a.length; o++) e.push({
                    id: a[o].id,
                    count: a[o].num
                });
                l.a.commonDataStatistics("expose", "pages/index/index", "", "", "求职-banner图", JSON.stringify(e), "banner播放");
                for (var n = 0; n < a.length; n++) a[n].num = 1;
                this.setData({
                    timingRequestInterface: !1,
                    bannerList: a
                });
            },
            getEnterpriseTopData: function() {
                var t = this;
                r.a.xyb_request("enterprise/GetEnterpriseTopData.action", "POST", {}, !1, !1).then(function(e) {
                    e.data && (e.data.careerDesc && t.setData({
                        careerDesc: e.data.careerDesc
                    }), e.data.choiceDesc && t.setData({
                        choiceDesc: e.data.choiceDesc
                    }));
                }, function(t) {});
            },
            toBannerLink: function(t) {
                this.getStatisticsData(5);
                var e = t.currentTarget.dataset.item;
                i.a.eventCenter.trigger("taroClick", {
                    funName: "点击banner跳转",
                    funType: "运营活动banner",
                    funData: e.id
                }), 0 == e.jumpType ? e.jumpLink && -1 != e.jumpLink.indexOf("fieldId") ? i.a.navigateTo({
                    url: e.jumpLink
                }) : (t = {
                    title: e.title,
                    url: encodeURIComponent(e.jumpLink)
                }, i.a.navigateTo({
                    url: "/videoBag/pages/h5/h5?model=" + JSON.stringify(t)
                })) : 1 == e.jumpType ? i.a.navigateTo({
                    url: "/growUp/pages/home/activitydetail/activitydetail?activityId=" + e.id
                }) : 2 == e.jumpType && e.jumpLink ? (m.globalData.applyPostSort = 2, i.a.navigateTo({
                    url: "/videoBag/pages/posdetail/posdetail?postid=" + e.jumpLink + "&fromType=28"
                })) : 3 == e.jumpType && e.jumpLink ? (m.globalData.applyPostSort = 3, i.a.navigateTo({
                    url: "/videoBag/pages/comdetail/comdetail?comid=" + e.jumpLink
                })) : 4 == e.jumpType && e.jumpLink ? i.a.navigateTo({
                    url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + e.jumpLink
                }) : 5 == e.jumpType ? i.a.navigateTo({
                    url: "/videoBag/pages/doubleSelectList/doubleSelectList?id=" + e.jumpLink + "&name=" + e.title
                }) : 6 == e.jumpType && e.jumpLink ? m.globalData.isLogin ? i.a.navigateTo({
                    url: "/growUp/pages/home/topicCircle/topicCircle?topicId=" + e.jumpLink
                }) : this.setData({
                    showlogin: !0
                }) : 7 == e.jumpType && e.jumpLink ? i.a.navigateTo({
                    url: "/secondBag/pages/courseDetails/courseDetails?id=" + e.jumpLink
                }) : 8 == e.jumpType && e.jumpLink ? i.a.navigateTo({
                    url: "/fifthBag/pages/huzhouList/huzhouList?cityChannelId=" + e.jumpLink
                }) : 9 == e.jumpType && e.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/informationdetail/informationdetail?id=" + e.jumpLink
                }) : 10 == e.jumpType && e.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/dynamicDetail/dynamicDetail?dynamicId=" + e.jumpLink
                }) : 11 == e.jumpType && e.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/questiondetail/questiondetail?questionId=" + e.jumpLink
                }) : 12 == e.jumpType && e.jumpLink && i.a.navigateTo({
                    url: "/growUp/pages/home/answerdetail/answerdetail?questionId=" + e.jumpLink2 + "&answerId=" + e.jumpLink
                });
            },
            toJobobjective: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转完善求职意向"
                }), i.a.navigateTo({
                    url: "/videoBag/pages/jobintentionsetting/jobobjective/jobobjective?reconfirm=1"
                });
            },
            toWxarticle: function() {
                i.a.navigateTo({
                    url: "../find/wxarticle/wxarticle"
                });
            },
            areaNum: function() {
                var t = this;
                r.a.xyb_request("article/SchoolRecruitmentSpecial!listZC.action", "POST", {}, !1, !1).then(function(e) {
                    e = e.data[0].id, t.setData({
                        areaId: e
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            toSearch: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转搜索公司和职位"
                }), this.getStatisticsData(3), i.a.navigateTo({
                    url: "/videoBag/pages/search/index/index"
                }), m.globalData.searchcity = [];
            },
            closeFirst: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭首次进入提醒"
                }), this.setData({
                    showfirst: !1
                }), i.a.getStorageSync("first") || i.a.setStorageSync("first", !0);
            },
            changeType: function(t) {
                var e = this;
                i.a.eventCenter.trigger("taroClick", {
                    funName: "切换类型"
                }), console.log(t), this.setData({
                    actType: "学长职引" == t.detail.title ? 3 : t.detail.index + 1
                }, function() {
                    i.a.pageScrollTo && e.data.fixedTop && i.a.pageScrollTo({
                        scrollTop: e.data.scrolltop
                    });
                });
            },
            toposDetail: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转职位详情"
                });
                var e = t.currentTarget.dataset.type;
                1 == e ? m.globalData.applyPostSort = 8 : 2 == e ? m.globalData.applyPostSort = 9 : 3 == e && (m.globalData.applyPostSort = 10), 
                t.currentTarget.dataset.id && (t = t.currentTarget.dataset.id, i.a.navigateTo({
                    url: "/videoBag/pages/posdetail/posdetail?postid=" + t + "&fromType=28"
                }));
            },
            alumniInfoCheck: function() {
                r.a.xyb_request("client/alumni/AlumniInfoCheck.action", "POST", {}, !1, !1).then(function(t) {
                    m.globalData.isAlumni = t.data.isAlumni, console.log("res.data.isAlumni", t.data.isAlumni), 
                    console.log(m.globalData.isAlumni);
                }, function(t) {
                    console.log(t);
                });
            },
            getReadChoosePost: function() {
                var t = this;
                r.a.xyb_request("common/LoadPosition!readChoosePost.action", "POST", {}, !1, !1).then(function(e) {
                    console.log("看学长选岗", e), e.data ? t.setData({
                        notJobResume: !1
                    }) : t.setData({
                        notJobResume: !0
                    }), t.jobHuntCheck();
                }, function(e) {
                    t.jobHuntCheck();
                });
            },
            jobHuntCheck: function(t) {
                var e = this;
                r.a.xyb_request("talents/JobHuntCheck.action", "POST", {}, !0, !0).then(function(t) {
                    if (0 < (t = t.data).locations.length && t.positionType && 0 < t.positions.length) {
                        var a = i.a.getStorageSync("wxUserInfo");
                        a && a.city && e.setData({
                            cityname: a.city
                        });
                        for (var o = "", n = t.positions, s = 0; s < n.length; s++) o = o + n[s].name + "、";
                        o = o.substring(0, o.length - 1), console.log("我的求职意向", o), e.setData({
                            jobObjectiveStr: o
                        });
                    } else e.setData({
                        jobObjectiveStr: "我的求职意向"
                    });
                    (a = t.resumeOptimization) && a.resumeOptimizationNum && 0 < a.resumeOptimizationNum ? (t = i.a.getStorageSync("closeInCompleteResume"), 
                    6048e5 <= new Date().getTime() - t ? e.setData({
                        notCompleteResume: !0,
                        resumeOptimization: a.resumeOptimizationNum
                    }) : e.setData({
                        notCompleteResume: !1
                    })) : e.setData({
                        notCompleteResume: !1
                    }), e.getHeight();
                }, function(t) {
                    console.log(t);
                });
            },
            toFindindex: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到发现"
                }), i.a.switchTab({
                    url: "../find/index/index"
                }), this.setData({
                    showfirst: !1
                }), i.a.setStorageSync("first", !0);
            },
            receiveClose: function(t) {
                t.detail, t = i.a.getStorageSync("first"), this.setData({
                    showfirst: !t
                });
            },
            receiveLogin: function(t) {
                this.setData({
                    isLogin: !0,
                    pageIndex: 1,
                    maxPage: "",
                    hasMore: !0
                }), m.globalData.isLogin = !0, this.getBlackInfo(), this.jobHuntCheck(), this.getPostlist(1, function() {
                    i.a.stopPullDownRefresh();
                });
            },
            onReady: function() {
                this.fastlogin = this.$scope.selectComponent("#fastlogin"), this.profession = this.$scope.selectComponent("#profession");
            },
            getHeight: function() {
                var t = i.a.createSelectorQuery(), e = this;
                t.select(".recommendBox").boundingClientRect(function(t) {
                    e.setData({
                        scrolltop: t && t.top ? t.top : 0
                    });
                }).exec();
            },
            onPageScroll: function(t) {
                var e, a = i.a.createSelectorQuery(), o = this;
                this.debounceEvent(function() {
                    a.select(".banner_borderbottom").boundingClientRect(function(a) {
                        e = a && a.height ? a.height : 0, t.scrollTop > e + 40 ? o.setData({
                            fixedTop: !0
                        }) : o.setData({
                            fixedTop: !1
                        });
                    }).exec(), t.scrollTop > o.data.bannerHeight - 40 ? o.setData({
                        unviewable: !0
                    }) : o.setData({
                        unviewable: !1
                    });
                }, 20, !1);
            },
            debounceEvent: function(t, e, a) {
                var o = this, n = arguments;
                f && clearTimeout(f), a ? (a = !f, f = setTimeout(function() {
                    f = null;
                }, e), a && t.apply(o, n)) : f = setTimeout(function() {
                    t.apply(o, n);
                }, e);
            },
            onShow: function() {
                this.getBannerlist(), this.data.cityId || this.getLocation(!1, 1);
                var t = new Date().getTime();
                this.setData({
                    browseStartTime: t
                });
                var e = this;
                i.a.getStorageSync("animateRecommend") ? this.setData({
                    animateFlag: !1
                }) : this.setData({
                    animateFlag: !0
                }, function() {
                    setTimeout(function(t, a) {
                        e.initAnimate();
                    }, 150);
                }), (t = i.a.getStorageSync("sessionId") || null) != (i.a.getStorageSync("currentSessionId") || null) && (1 == e.data.actType ? (i.a.setStorageSync("currentSessionId", t), 
                this.setData({
                    pageIndex: 1,
                    maxPage: "",
                    hasMore: !0
                }), this.getPostlist(1)) : 3 == e.data.actType ? (this.setData({
                    pageIndex2: 1,
                    maxPage2: "",
                    hasMore2: !0
                }), this.loadProfessionPostList(this.data.currentProfessionId, !1)) : 2 == e.data.actType && (this.setData({
                    pageIndex6: 1,
                    maxPage6: "",
                    hasMore6: !0
                }), this.loadSchoolPostList(1))), t && this.getReadChoosePost(), m.globalData.isLogin && this.getBlackInfo();
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
            onHide: function() {
                0 < this.data.bannerList.length && (this.setData({
                    leaveFlag: !0
                }), this.recommendComNum(1)), this.statisticalBrowsingTime();
            },
            onUnload: function() {
                this.statisticalBrowsingTime(), 0 < this.data.bannerList.length && (this.setData({
                    leaveFlag: !0
                }), this.recommendComNum(1));
            },
            statisticalBrowsingTime: function() {
                var t = new Date().getTime(), e = 0;
                t && this.data.browseStartTime && 0 <= t - this.data.browseStartTime && (e = parseInt((t - this.data.browseStartTime) / 1e3)), 
                this.getStatisticsData(2, e);
            },
            onPullDownRefresh: function() {},
            onReachBottom: function() {
                var t, e;
                1 == this.data.actType ? (t = this.data.pageIndex + 1, this.data.hasMore && (this.setData({
                    pageIndex: t
                }), this.getPostlist(), this.getStatisticsData(7), l.a.commonDataStatistics("slideUp", "pages/index/index", "", "", "求职-职位推荐-上拉"))) : 2 == this.data.actType ? (e = this.data.pageIndex6 + 1, 
                this.data.hasMore6 && (this.setData({
                    pageIndex6: e
                }), this.loadSchoolPostList(), l.a.commonDataStatistics("slideUp", "pages/index/index", "", "", "求职-本校推荐-上拉"))) : 3 == this.data.actType && (e = this.data.pageIndex2 + 1, 
                this.data.hasMore2 && (this.setData({
                    pageIndex2: e
                }), this.loadProfessionPostList(this.data.currentProfessionId, !1), this.getStatisticsData(8), 
                l.a.commonDataStatistics("slideUp", "pages/index/index", "", "", "求职-学长职引-上拉")));
            },
            getStatisticsData: function(t, e, a) {
                var o = {
                    topic: "applyjob",
                    eventId: t,
                    source: "weixin",
                    type: 1 == i.a.getStorageSync("userType") ? "student" : 2 == i.a.getStorageSync("userType") ? "school" : "unknown",
                    deviceId: i.a.getStorageSync("openid"),
                    eventTime: new Date().getTime()
                };
                2 == t && (o.duration = e), 6 == t && (o.enterpriseId = a), r.a.xyb_request("behavior/Duration.action", "POST", o, !1, !0, 2).then(function(t) {}, function(t) {
                    console.log(t);
                });
            },
            onShareAppMessage: function() {
                return {
                    title: "Hi，送你一份师兄师姐的校招攻略，请查收~",
                    path: "/pages/index/index?shareType=1",
                    imageUrl: "https://ss0.xybsyw.com//upload/picture/enterprise/1852/detail/1548211686327.png"
                };
            },
            receiveProfession: function(t) {
                t = t.detail, this.setData({
                    hasProfession: !0,
                    selectProfession: t
                }), this.loadProfessionInfo(t.id), this.data.isLogin && this.setProfession(t.id);
            },
            setProfession: function(t) {
                r.a.xyb_request("find/setProfession.action", "POST", {
                    professionId: t
                }, !1, !1).then(function(t) {}, function(t) {});
            },
            loaduserInfo: function() {
                var t = this;
                r.a.xyb_request("account/LoadAccountInfo.action", "POST", {}, !1, !1).then(function(e) {
                    var a = e.data, o = !1;
                    e = !0;
                    a.findProfessionId && a.findProfessionId.id && a.findProfessionId.name ? (o = !0, 
                    t.loadProfessionInfo(a.findProfessionId.id)) : e = !1, t.setData({
                        accountInfo: a,
                        selectProfession: a.findProfessionId,
                        hasProfession: o,
                        hasMore2: e
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            loadProfessionInfo: function(t) {
                var e = this;
                r.a.xyb_request("post/LoadProfessionInfo.action", "POST", {
                    professionId: t
                }, !1, !1).then(function(t) {
                    var a = t.data, o = 0 < a.professionCount ? a.professionCount + "名同专业学长为你职引行业方向" : "本专业的学长过少，推荐的行业仅供参考";
                    e.setData({
                        professionTabType: 1,
                        professionInfo: a,
                        professionDes: o,
                        schoolLeaderpostList: [],
                        pageIndex2: 1,
                        maxPage2: "",
                        hasMore2: !0
                    }), e.loadProfessionPostList(t.data.industrys[0].industryId, !1);
                }, function(t) {
                    console.log(t);
                });
            },
            loadProfessionPostList: function(t, e) {
                var a = this;
                this.setData({
                    currentProfessionId: t
                }), this.data.cityId || e ? r.a.xyb_request("post/LoadProfessionInfo!postList.action", "POST", {
                    industryId: t,
                    page: this.data.pageIndex2,
                    locationId: this.data.cityId
                }, !1, !1).then(function(t) {
                    var e = a, o = e.data.schoolLeaderpostList, n = t.data.list || [], s = [];
                    n.forEach(function(t) {
                        s.push(t.id);
                    }), 0 < s.length && (s = s.join(","), l.a.commonDataStatistics("expose", "pages/index/index", "", "", "", s, "岗位")), 
                    1 == a.data.pageIndex2 ? o = n : n.forEach(function(t) {
                        o.push(t);
                    }), i.a.stopPullDownRefresh(), e.setData({
                        schoolLeaderpostList: o,
                        maxPage2: t.data.maxPage,
                        hasMore2: t.data.maxPage != a.data.pageIndex2
                    });
                }, function(t) {
                    console.log(t);
                }) : this.getLocation(!0);
            },
            professionTab: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "学长指引更换专业"
                });
                var e = t.currentTarget.dataset.type;
                t = t.currentTarget.dataset.id;
                this.scrollByIndex(e - 1), this.setData({
                    schoolLeaderpostList: [],
                    pageIndex2: 1,
                    maxPage2: "",
                    hasMore2: !0,
                    professionTabType: e
                }), this.loadProfessionPostList(t, !1);
            },
            scrollByIndex: function(t) {
                var e = this;
                console.log(t), i.a.createSelectorQuery().in(this).selectAll(".profession_tab_container").boundingClientRect(function(a) {
                    console.log(a);
                    for (var o = 12, n = 0; n < t; n++) o += a[n].width + 12;
                    var s = i.a.getSystemInfoSync().windowWidth / 2;
                    s < o ? (console.log(o + a[t].width / 2 - s), e.setData({
                        navScrollLeft: o + a[t].width / 2 - s
                    })) : e.setData({
                        navScrollLeft: 0
                    });
                }).exec();
            },
            loadSchoolPostList: function(t, e) {
                var a = this, o = {
                    page: this.data.pageIndex6
                };
                r.a.xyb_request("cooperation/loadSchoolPostList.action", "POST", o, !1, !1).then(function(o) {
                    var n = a;
                    t && n.setData({
                        postList2: []
                    });
                    var i, s, r = n.data.postList2;
                    if (o.data && (i = o.data.list || [], s = [], i.forEach(function(t) {
                        r.push(t), s.push(t.id);
                    }), 0 < s.length && (s = s.join(","), l.a.commonDataStatistics("expose", "pages/index/index", "", "", "", s, "岗位"))), 
                    r && r.length ? n.setData({
                        haveSchool: !0,
                        titleList: [ "职位推荐", "本校推荐", "学长职引" ]
                    }) : n.setData({
                        haveSchool: !1,
                        titleList: [ "职位推荐", "学长职引" ]
                    }), n.setData({
                        maxPage6: o.data && o.data.maxPage ? o.data.maxPage : "",
                        postList2: r
                    }), null == o.data) return !1;
                    0 < o.data.maxPage ? n.setData({
                        hasMore6: o.data.maxPage != a.data.pageIndex6
                    }) : n.setData({
                        hasMore6: !1
                    }), e && e(o);
                }, function(t) {
                    t && "205" == t.code && (a.setData({
                        pageIndex6: 1,
                        maxPage6: "",
                        hasMore6: !0
                    }), a.loadSchoolPostList(1, function() {
                        i.a.stopPullDownRefresh();
                    }));
                });
            },
            toCompany: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转公司"
                }), i.a.navigateTo({
                    url: "/fifthBag/pages/jobModule/company/company"
                });
            },
            toPreachMeeting: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转在线宣讲会"
                }), i.a.navigateTo({
                    url: "/fifthBag/pages/jobModule/preachMeeting/preachMeeting"
                });
            },
            toDoubleMeeting: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转在线双选会"
                }), i.a.navigateTo({
                    url: "/fifthBag/pages/jobModule/doubleMeeting/doubleMeeting"
                });
            },
            toLookingForMyPush: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转找我内推"
                }), i.a.navigateTo({
                    url: "/ninthBag/pages/lookingForMyPush/lookingForMyPush"
                }), i.a.setStorageSync("animateRecommend", !0);
            },
            closeEvent: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭完善简历"
                });
                var t = new Date().getTime();
                i.a.setStorageSync("closeInCompleteResume", t), this.setData({
                    notCompleteResume: !1
                });
            },
            toCompleteResume: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "去完善简历"
                }), i.a.navigateTo({
                    url: "/videoBag/pages/incompleteResume/incompleteResume"
                });
            },
            closeJobEvent: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭查看学长选岗经验"
                }), this.setData({
                    notJobResume: !1,
                    notCompleteResume: !1
                }), this.setReadChoosePost();
            },
            toLookResume: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转学长选岗经验"
                }), i.a.navigateTo({
                    url: "/thirdBag/pages/myresume/editpersonalinfo/expectjobs/expectjobs?fromWhere=3"
                }), this.setReadChoosePost();
            },
            setReadChoosePost: function() {
                r.a.xyb_request("common/LoadPosition!setReadChoosePost.action", "POST", {}, !1, !1).then(function(t) {});
            },
            closeLoginClick: function() {
                this.setData({
                    showlogin: !1
                });
            },
            showSelectprofession: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "点击更换专业"
                }), this.setData({
                    showSelectprofessionFlag: !0
                });
            },
            closeSelectprofession: function() {
                this.setData({
                    showSelectprofessionFlag: !1
                });
            },
            selectCityEvent: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "显示切换城市弹窗"
                }), this.setData({
                    showCitySelectFlag: !0
                });
            },
            receiveCitySelect: function(t) {
                var e = t.detail || [], a = (t = "", []);
                (e = 0 == e.length ? [ {
                    name: "全国",
                    id: null
                } ] : e).forEach(function(t, e) {
                    a.push(t.name);
                }), t = a.join(","), this.setData({
                    showCitySelectFlag: !1,
                    selectCityArray: e,
                    selectCityName: t
                }), this.getPostlist(2);
            },
            closeCitySelect: function() {
                this.setData({
                    showCitySelectFlag: !1
                });
            },
            moduleSwiperChange: function(t) {
                var e;
                t = (e = t.detail).current;
                "autoplay" !== (e = e.source) && "touch" !== e || this.setData({
                    currentSwiper: t
                });
            },
            getApplyPostFun: function() {
                var t = this;
                r.a.xyb_request("answersheet/ApplyPostQuestionnaire!getApplyPost.action", "POST", {}, !1, !1).then(function(e) {
                    null != (e = e.data) && "{}" != JSON.stringify(e) && e.isRemind && t.setData({
                        jobStatusFlag: !0
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            selectJobStatus: function(t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "点击求职状态列表"
                }), t = t.currentTarget.dataset.obj, i.a.showToast({
                    title: "谢谢反馈 (｡･∀･)ﾉﾞ",
                    icon: "none"
                }), this.setData({
                    jobStatusFlag: !1
                }), t = {
                    status: t.id,
                    satisfaction: "",
                    prepareTodo: ""
                }, r.a.xyb_request("answersheet/ApplyPostQuestionnaire!saveOrUpdatePost.action", "POST", t, !1, !1).then(function(t) {}, function(t) {});
            },
            downLottieData: function(t) {
                return new Promise(function(e, a) {
                    wx.request({
                        url: t,
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(t) {
                            e(t.data);
                        }
                    });
                });
            },
            initAnimate: function() {
                var t = this;
                this.inited || this.setState({}, function() {
                    t.downLottieData("https://xcxresources.xybsyw.com/lottieData/loading9.js").then(function(e) {
                        i.a.createSelectorQuery().selectAll("#lottieAnimate").node(function(a) {
                            var o = a[0] && a[0].node ? a[0].node : "";
                            o && (a = o.getContext("2d"), o.width = 300, o.height = 300, u.a.setup(o), t.ani = u.a.loadAnimation({
                                loop: !0,
                                autoplay: !0,
                                animationData: e,
                                rendererSettings: {
                                    context: a
                                }
                            }), t.inited = !0);
                        }).exec();
                    });
                });
            },
            play: function() {
                this.ani.play();
            },
            pause: function() {
                this.ani.pause();
            },
            stop: function() {
                this.ani.stop();
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
        }(y, i.a.Component), s(y, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, a, o) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, a);
                    return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, a, o) : void 0;
                })(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var e = this.$prefix, a = this.changeType, o = Object(n.genCompid)(e + "$compid__1128"), i = (ot = g(o, 2))[0], s = ot[1], r = Object(n.genCompid)(e + "$compid__1129"), c = (nt = g(r, 2))[0], l = nt[1], u = Object(n.genCompid)(e + "$compid__1130"), p = (it = g(u, 2))[0], d = it[1], h = Object(n.genCompid)(e + "$compid__1131"), m = (st = g(h, 2))[0], f = st[1], y = Object(n.genCompid)(e + "$compid__1132"), v = (lt = g(y, 2))[0], b = lt[1], S = Object(n.genCompid)(e + "$compid__1133"), x = (ut = g(S, 2))[0], P = ut[1], D = (pt = this.data).fixedTop, L = pt.isLogin, C = pt.statusHeight, I = pt.jobObjectiveStr, T = pt.titleHeight, j = pt.bannerList, w = pt.showXjhFlag, _ = pt.showSxhFlag, R = pt.careerDesc, k = pt.choiceDesc, O = pt.resumeOptimization, M = pt.notCompleteResume, F = pt.actType, $ = pt.titleList, A = pt.loadCompleteList, N = pt.postList, z = pt.loadComplete, B = pt.hasMore, q = pt.maxPage, H = pt.haveSchool, E = pt.postList2, J = pt.hasMore6, U = pt.maxPage6, Q = pt.selectProfession, X = pt.professionDes, W = pt.navScrollLeft, G = pt.professionTabType, K = pt.professionInfo, Z = pt.hasProfession, V = pt.schoolLeaderpostList, Y = pt.hasMore2, tt = pt.maxPage2, et = pt.showlogin, at = pt.isForbiddenLogin, ot = (o = pt.showSelectprofessionFlag, 
                pt.notJobResume), nt = (r = pt.showCitySelectFlag, pt.selectCityName), it = (u = pt.selectCityArray, 
                pt.xjhRandomImg), st = (h = pt.sxhRandomImg, pt.comRandomImg), rt = (y = pt.currentSwiper, 
                pt.jobStatusFlag), ct = pt.jobStatusList, lt = pt.animateFlag, ut = (S = N.map(function(a, o) {
                    a = {
                        $original: Object(n.internal_get_original)(a)
                    };
                    var i = L && rt && 2 == o ? ct.map(function(e, a) {
                        return e = {
                            $original: Object(n.internal_get_original)(e)
                        }, a = "fdjzz" + o + "-" + a, t.anonymousFunc0Map[a] = function(e) {
                            e.stopPropagation(), t.selectJobStatus(e);
                        }, {
                            _$indexKey: a,
                            $original: e.$original
                        };
                    }) : [], s = Object(n.genCompid)(e + "feazzzzzzz" + o, !0), r = (s = (r = g(s, 2))[0], 
                    r[1]);
                    return z && a.$original.loadFinish || n.propsManager.set({
                        itemData: a.$original,
                        itemIndex: o,
                        type: "2"
                    }, r, s), {
                        $anonymousCallee__128: i,
                        $compid__1125: r,
                        $original: a.$original
                    };
                }), E.map(function(t, a) {
                    t = {
                        $original: Object(n.internal_get_original)(t)
                    };
                    var o = Object(n.genCompid)(e + "febzzzzzzz" + a, !0), i = (o = (i = g(o, 2))[0], 
                    i[1]);
                    return n.propsManager.set({
                        itemData: t.$original,
                        itemIndex: a,
                        type: "3"
                    }, i, o), {
                        $compid__1126: i,
                        $original: t.$original
                    };
                })), pt = Z ? V.map(function(t, a) {
                    t = {
                        $original: Object(n.internal_get_original)(t)
                    };
                    var o = Object(n.genCompid)(e + "feczzzzzzz" + a, !0), i = (o = (i = g(o, 2))[0], 
                    i[1]);
                    return Z && n.propsManager.set({
                        itemData: t.$original,
                        itemIndex: a,
                        type: "2"
                    }, i, o), {
                        $compid__1127: i,
                        $original: t.$original
                    };
                }) : [];
                return B && 1 < q && n.propsManager.set({
                    color: "#ff453a",
                    size: 26,
                    content: "加载中...",
                    mode: "center"
                }, s, i), J && 1 < U && n.propsManager.set({
                    color: "#ff453a",
                    size: 26,
                    content: "加载中...",
                    mode: "center"
                }, l, c), n.propsManager.set({
                    onReceive: this.receiveClose,
                    onReceiveLogin: this.receiveLogin,
                    source: "index",
                    showLogin: et,
                    onCloseLogin: this.closeLoginClick
                }, d, p), n.propsManager.set({
                    title: "专业",
                    onReceive: this.receiveProfession,
                    isShow: o,
                    onShow: this.showSelectprofession,
                    onClose: this.closeSelectprofession
                }, f, m), n.propsManager.set({
                    title: "选择城市",
                    onReceive: this.receiveCitySelect,
                    isShow: r,
                    cityArray: u,
                    onClose: this.closeCitySelect
                }, b, v), n.propsManager.set({
                    isForbiddenLogin: at
                }, P, x), Object.assign(this.__state, {
                    loopArray743: S,
                    loopArray744: ut,
                    loopArray745: pt,
                    $compid__1128: s,
                    $compid__1129: l,
                    $compid__1130: d,
                    $compid__1131: f,
                    $compid__1132: b,
                    $compid__1133: P,
                    fixedTop: D,
                    isLogin: L,
                    statusHeight: C,
                    titleHeight: T,
                    bannerList: j,
                    showXjhFlag: w,
                    showSxhFlag: _,
                    xjhRandomImg: it,
                    sxhRandomImg: h,
                    animateFlag: lt,
                    currentSwiper: y,
                    comRandomImg: st,
                    notJobResume: ot,
                    notCompleteResume: M,
                    changeType: a,
                    titleList: $,
                    actType: F,
                    loadCompleteList: A,
                    postList: N,
                    loadComplete: z,
                    jobStatusFlag: rt,
                    hasMore: B,
                    maxPage: q,
                    haveSchool: H,
                    postList2: E,
                    hasMore6: J,
                    maxPage6: U,
                    hasProfession: Z,
                    navScrollLeft: W,
                    professionTabType: G,
                    professionInfo: K,
                    schoolLeaderpostList: V,
                    hasMore2: Y,
                    maxPage2: tt,
                    jobObjectiveStr: I,
                    careerDesc: R,
                    choiceDesc: k,
                    resumeOptimization: O,
                    selectCityName: nt,
                    selectProfession: Q,
                    professionDes: X
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : p(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc0Map[t] && (e = this.anonymousFunc0Map)[t].apply(e, o);
            }
        } ]), s = a = y, a.$$events = [ "toSearch", "toJobobjective", "swiperChange", "toBannerLink", "toPreachMeeting", "toDoubleMeeting", "moduleSwiperChange", "toCompany", "toLookingForMyPush", "toCompleteResume", "closeEvent", "toLookResume", "closeJobEvent", "changeType", "selectCityEvent", "toposDetail", "anonymousFunc0", "showSelectprofession", "professionTab", "closeFirst", "toFindindex" ], 
        a.$$componentPath = "pages/index/index", a = s)) || a;
        function y() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, y);
            for (var a = arguments.length, o = Array(a), n = 0; n < a; n++) o[n] = arguments[n];
            return (t = e = h(this, (t = y.__proto__ || Object.getPrototypeOf(y)).call.apply(t, [ this ].concat(o)))).$usedState = [ "loopArray743", "loopArray744", "loopArray745", "$compid__1128", "$compid__1129", "$compid__1130", "$compid__1131", "$compid__1132", "$compid__1133", "fixedTop", "isLogin", "statusHeight", "titleHeight", "bannerList", "showXjhFlag", "showSxhFlag", "xjhRandomImg", "sxhRandomImg", "animateFlag", "currentSwiper", "comRandomImg", "notJobResume", "notCompleteResume", "changeType", "titleList", "actType", "loadCompleteList", "postList", "loadComplete", "jobStatusFlag", "hasMore", "maxPage", "haveSchool", "postList2", "hasMore6", "maxPage6", "hasProfession", "navScrollLeft", "professionTabType", "professionInfo", "schoolLeaderpostList", "hasMore2", "maxPage2", "jobObjectiveStr", "careerDesc", "choiceDesc", "resumeOptimization", "selectCityName", "selectProfession", "professionDes" ], 
            e.config = {
                navigationBarTitleText: "求职",
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
                usingComponents: {
                    "van-tabs": "../../vant-weapp/dist/tabs/index",
                    "van-tab": "../../vant-weapp/dist/tab/index",
                    "van-icon": "../../vant-weapp/dist/icon/index",
                    "van-button": "../../vant-weapp/dist/button/index",
                    "van-popup": "../../vant-weapp/dist/popup/index"
                }
            }, e.anonymousFunc0Map = {}, e.customComponents = [ "Itemjob", "AtActivityIndicator", "Fastlogin", "Professionselect", "CitySelect", "Forbiddenlogin" ], 
            h(e, t);
        }
        a = s, Component(o(0).default.createComponent(s, !0));
    },
    311: function(t, e, a) {
        t.exports = a.p + "pages/index/index.wxml";
    },
    969: function(t, e, a) {
        a(311);
    },
    970: function(t, e, a) {}
}, [ [ 1570, 0, 1, 2 ] ] ]);