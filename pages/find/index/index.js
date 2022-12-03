var e = require("../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 298 ], {
    1568: function(t, a, o) {
        o.r(a), o(965);
        var n = o(0), i = o.n(n), s = o(2), r = (a = o.n(s), o(1)), c = o(3), u = o(11), g = (s = o(36), 
        o.n(s)), l = (s = (o(966), o(7)), o.n(s)), p = (s = o(19), o.n(s)), d = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var a = [], o = !0, n = !1, i = void 0;
                try {
                    for (var s, r = e[Symbol.iterator](); !(o = (s = r.next()).done) && (a.push(s.value), 
                    !t || a.length !== t); o = !0) ;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n = !0, i = e;
                } finally {
                    try {
                        !o && r.return && r.return();
                    } finally {
                        if (n) throw i;
                    }
                }
                return a;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
        s = function(e, t, a) {
            return t && h(e.prototype, t), a && h(e, a), e;
        };
        function h(e, t) {
            for (var a = 0; a < t.length; a++) {
                var o = t[a];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function m(t, a) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != e(a) && "function" != typeof a ? t : a;
        }
        function f(e) {
            if (Array.isArray(e)) {
                for (var t = 0, a = Array(e.length); t < e.length; t++) a[t] = e[t];
                return a;
            }
            return Array.from(e);
        }
        var y = o(21), S = i.a.getApp(), v = void 0;
        s = a()({
            data: {
                needJumpToJobobjective: !1,
                applyPostRemindTip: !1,
                applyPostRemindCount: 0,
                xjhSharePopup: !1,
                xjhShare: "",
                shareFail: !1,
                xjhShareFailText: "",
                xjhShareFailTitle: "",
                xjhShareBtn: "",
                xjhPopup: !1,
                xjhLieType: 1,
                fromLook: !1,
                scrolltop: "",
                showlogin: !1,
                autoSign: !1,
                autoPopActivate: !1,
                ifIphoneX: !1,
                isIosSystem: !1,
                userSchoolInfo: {},
                touchx: 0,
                touchy: 0,
                images: {},
                bannerList: [ {
                    jumpType: null,
                    htmlShareImgUrl: "",
                    bannerImgUrl: "https://xcxresources.xybsyw.com/xcx/images/banner_default.png",
                    id: null,
                    title: "",
                    jumpLink: ""
                } ],
                currentSwiper: 0,
                careerSchoolNum: 0,
                doubleSchoolNum: 0,
                bookingSxhForm: {
                    bookingSxhStatus: null
                },
                isLogin: !1,
                unviewable: !1,
                bannerHeight: null,
                timingRequestInterface: !1,
                timingRequest: null,
                menuW: null,
                jumpToPageUrl: "",
                hasLikeXYB: !1,
                fromStudentAppFlag: !1,
                leaveFlag: !1,
                xcxshareXjhType: null,
                xybOfficialAccountsPopupFlag: !1,
                studentIdentity: null,
                jobStatusPopupFlag: !1,
                jobStatusType: null,
                isForbiddenLogin: !1,
                activateFlag: !1,
                getActivateState: !1,
                postList: [],
                firstLoading: !0,
                pageIndex: 1,
                maxPage: 2,
                hasMore: !0,
                cityname: "全国",
                cityId: "",
                tempLocations: "",
                tempLocationProvinces: "",
                showCitySelectFlag: !1,
                selectCityName: "全国",
                selectCityArray: [ {
                    name: "全国",
                    id: null
                } ],
                tabIndex: 0,
                tabList: [ "推荐", "宣讲会", "双选会", "进名企", "本校推荐" ],
                tabLineLeft: 19.5,
                jobObjectiveStr: "",
                comList: [],
                pageIndex2: 1,
                maxPage2: 2,
                hasMore2: !0,
                cityList: [],
                notCompleteResume: !1,
                resumeOptimization: 0,
                firstLoginIndex: 0,
                revisionTipsFlag: !1,
                revisionTipsFlag1: !1,
                revisionTipTop2: null,
                bannerPopFlag: !1,
                bannerPopImgUrl: "",
                bannerPopStorage: [],
                bannerPopIndex: 0,
                showPreachMeeting: !0,
                noDealNum: 0,
                postIdList: [],
                showChatFlag: !1,
                showEpidemicFlag: !1,
                closeEpidemicFlag: !1,
                briefingSessionList: [],
                doubleChoiceSession: [],
                resumeIsComplete: !1,
                resumeCompleteProcess: !1,
                jobHuntShowType: 0,
                showTopBar: !0,
                topBarAnimate: !1,
                intentionFlag: !1,
                intentionId: "",
                intentionStatus: 0,
                showDropMenu: !1,
                showCanvas: !0,
                topBarHeight: 0,
                userAgreementFlag: !1,
                showMoreButton: !1,
                isLoadMorePost: !1
            },
            onLoad: function(e) {
                var t = this, a = i.a.getMenuButtonBoundingClientRect();
                this.setData({
                    menuW: a && a.width ? a.width : null,
                    showlogin: !1
                }), c.a.Page.init(), e.fromLook && this.setData({
                    fromLook: e.fromLook
                }), i.a.getStorageSync("hasLikeXYB") && this.setData({
                    hasLikeXYB: !0
                }), this.jumpTo(e);
                var o = this;
                i.a.getSystemInfo({
                    success: function(e) {
                        e.screenWidth / e.screenHeight < .5 ? o.setData({
                            whRatioLittle: !0
                        }) : o.setData({
                            whRatioLittle: !1
                        });
                        var t = -1 < e.system.indexOf("iOS");
                        o.setData({
                            isIosSystem: t
                        }), e.system.toLowerCase().search("ios") + 1 && (44 <= e.statusBarHeight ? (o.setData({
                            ifIphoneX: !0
                        }), S.globalData.isIphoneX = !0) : (o.setData({
                            ifIphoneX: !1
                        }), S.globalData.isIphoneX = !1)), o.setData({
                            statusHeight: e.statusBarHeight + (t ? 44 : 48)
                        });
                    }
                }), setTimeout(function() {
                    i.a.getStorageSync("openid") && o.getIsUnionId();
                }, 1500), this.getCityList(), this.getBannerPop(), e.firstLoginIndex ? this.setData({
                    firstLoginIndex: e.firstLoginIndex
                }) : this.setData({
                    firstLoginIndex: 0
                }), e.tabIndex && this.setData({
                    tabIndex: +e.tabIndex
                }, function() {
                    t.calcTabLine();
                }), wx.showShareMenu({
                    withShareTicket: !0,
                    menus: [ "shareAppMessage", "shareTimeline" ]
                }), (i.a.getStorageSync("confirmUserAgreement") || S.globalData.isLogin) && this.getLocationFun();
            },
            onunload: function() {
                this.observer && (this.observer.disconnect(), this.observer = null);
            },
            initObserver: function() {
                var e = this;
                console.log(this);
                var t = i.a.createIntersectionObserver(this.$scope, {
                    thresholds: [ 0, 1 ],
                    initialRatio: 1,
                    observeAll: !1
                });
                t.relativeToViewport({
                    bottom: 0,
                    top: -this.data.statusHeight
                }).observe("#top-bar", function(t) {
                    e.data.showDropMenu !== (t = 0 === t.intersectionRatio) && e.setData({
                        showDropMenu: t
                    });
                }), this.observer = t;
            },
            getCountNoDealNum: function() {
                var e = this;
                r.a.xyb_request("post/DeliverPostInfo!countNoDealNum.action", "POST", {}, !1, !1).then(function(t) {
                    t = t.data, e.setData({
                        noDealNum: t.noDealNum,
                        postIdList: t.postIdList || []
                    });
                }, function(e) {});
            },
            getBannerPop: function() {
                var e = this;
                r.a.xyb_request("advertisement/LoadPopup.action", "POST", {}, !1, !1).then(function(t) {
                    var a, o;
                    console.log(t), t.data && 0 < t.data.length ? (a = i.a.getStorageSync("bannerPopStorage"), 
                    o = i.a.getStorageSync("bannerPopStorageArr"), a && 0 < a.length && JSON.stringify(o) == JSON.stringify(t.data) ? e.setData({
                        bannerPopStorage: a
                    }, function() {
                        e.setBannerPopList(2, a);
                    }) : (i.a.setStorageSync("bannerPopStorageArr", t.data), e.setBannerPopList(1, t.data))) : 2 == e.data.firstLoginIndex ? e.setData({
                        revisionTipsFlag1: !0
                    }, function() {}) : e.setData({
                        revisionTipsFlag1: !1
                    });
                }, function(e) {
                    console.log(e);
                });
            },
            setBannerPopList: function(e, t) {
                var a = this, o = (t = t, new Date());
                t.forEach(function(t) {
                    1 == e ? (t.showLocalNum = t.showNum, t.todayShowLocalNum = t.todayShowNum) : o.toDateString() !== new Date(t.todayShowLocalDate).toDateString() && (t.todayShowLocalNum = t.todayShowNum, 
                    t.todayShowLocalDate = new Date());
                }), i.a.setStorageSync("bannerPopStorage", t), this.setData({
                    bannerPopStorage: t
                }, function() {
                    a.getBannerIndex();
                });
            },
            getBannerIndex: function() {
                var e = this, t = !1, a = 0, o = new Date(), n = [].concat(f(this.data.bannerPopStorage));
                n.some(function(e, n) {
                    if (o >= new Date(e.showStartTime) && o <= new Date(e.showEndTime) && (0 == e.showNum || 0 < e.showLocalNum) && (0 == e.todayShowNum || 0 < e.todayShowLocalNum)) return t = !0, 
                    a = n, e.showLocalNum = e.showLocalNum - 1, e.todayShowLocalNum = e.todayShowLocalNum - 1, 
                    e.todayShowLocalDate = new Date(), !0;
                }), i.a.setStorageSync("bannerPopStorage", n), this.setData({
                    bannerPopFlag: t,
                    bannerPopStorage: n,
                    bannerPopIndex: a,
                    bannerPopImgUrl: n[a].url
                }, function() {
                    2 != e.data.firstLoginIndex || t ? e.setData({
                        revisionTipsFlag1: !1
                    }) : e.setData({
                        revisionTipsFlag1: !0
                    }, function() {});
                });
            },
            goPageDetails: function() {
                var e = this.data.bannerPopIndex, t = this.data.bannerPopStorage[e];
                this.popupStatistic(t.id, 1), 0 == t.jumpType ? (e = {
                    title: t.name,
                    url: encodeURIComponent(t.jumpLink)
                }, i.a.navigateTo({
                    url: "/videoBag/pages/h5/h5?model=" + JSON.stringify(e) + "&pageSource=10"
                })) : 2 == t.jumpType && t.jumpLink ? (S.globalData.applyPostSort = 0, i.a.navigateTo({
                    url: "/videoBag/pages/posdetail/posdetail?postid=" + t.jumpLink + "&fromType=26&pageSource=10"
                })) : 3 == t.jumpType && t.jumpLink ? (S.globalData.applyPostSort = 1, i.a.navigateTo({
                    url: "/videoBag/pages/comdetail/comdetail?comid=" + t.jumpLink + "&pageSource=10"
                })) : 4 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + t.jumpLink + "&pageSource=10"
                }) : 5 == t.jumpType ? i.a.navigateTo({
                    url: "/videoBag/pages/doubleSelectList/doubleSelectList?id=" + t.jumpLink + "&name=" + t.name + "&pageSource=10"
                }) : 6 == t.jumpType && t.jumpLink ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/growUp/pages/home/topicCircle/topicCircle?topicId=" + t.jumpLink + "&pageSource=10"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: ""
                }, function() {
                    i.a.setStorageSync("jumpToPageUrl", "");
                }) : 7 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/secondBag/pages/courseDetails/courseDetails?id=" + t.jumpLink + "&pageSource=10"
                }) : 8 == t.jumpType && t.jumpLink ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/fifthBag/pages/huzhouList/huzhouList?cityChannelId=" + t.jumpLink + "&pageSource=10"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: ""
                }, function() {
                    i.a.setStorageSync("jumpToPageUrl", "");
                }) : 9 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/informationdetail/informationdetail?id=" + t.jumpLink + "&pageSource=10"
                }) : 10 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/dynamicDetail/dynamicDetail?dynamicId=" + t.jumpLink + "&pageSource=10"
                }) : 11 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/questiondetail/questiondetail?questionId=" + t.jumpLink + "&pageSource=10"
                }) : 12 == t.jumpType && t.jumpLink && i.a.navigateTo({
                    url: "/growUp/pages/home/answerdetail/answerdetail?questionId=" + t.jumpLink2 + "&answerId=" + t.jumpLink + "&pageSource=10"
                });
            },
            closeBannerPop: function() {
                this.setData({
                    bannerPopFlag: !1
                });
                var e = this.data.bannerPopIndex;
                e = this.data.bannerPopStorage[e];
                this.popupStatistic(e.id, 0);
            },
            popupStatistic: function(e, t) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "运营广告弹框",
                    funType: "运营广告弹框数据收集",
                    funData: e
                }), r.a.xyb_request("advertisement/PopupStatistic.action", "POST", {
                    id: e,
                    type: t
                }, !1, !1).then(function(e) {}, function(e) {});
            },
            getIsUnionId: function() {
                var e = S.globalData.baseUrl;
                r.a.xyb_request("common/GetIsUnionId.action", "POST", {
                    openId: i.a.getStorageSync("openid"),
                    unionId: i.a.getStorageSync("unionid")
                }, !1, !1).then(function(t) {
                    t.data.isUnionId || (S.globalData.currentEnvironment && "wxwork" == S.globalData.currentEnvironment ? i.a.qy.login({
                        success: function(t) {
                            t.code && i.a.request({
                                url: e + "login/LoginByQyWx!getQyUserId.action",
                                data: {
                                    code: t.code
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    e.data.data && (i.a.setStorageSync("openid", e.data.data.deviceId), i.a.setStorageSync("sessionKey", e.data.data.sessionKey));
                                },
                                fail: function(e) {
                                    console.info("获取用户openId失败");
                                }
                            });
                        },
                        fail: function(e) {}
                    }) : i.a.login({
                        success: function(t) {
                            t.code && i.a.request({
                                url: e + "common/getOpenId.action",
                                data: {
                                    code: t.code
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    e.data.data && (i.a.setStorageSync("openid", e.data.data.openId), i.a.setStorageSync("sessionKey", e.data.data.sessionKey));
                                },
                                fail: function(e) {
                                    console.info("获取用户openId失败");
                                }
                            });
                        }
                    }));
                }, function(e) {
                    console.log(e);
                });
            },
            getBannerlist: function(e, t) {
                var a = this, o = this;
                r.a.xyb_request("client/activity/LoadActivityList.action", "POST", {
                    locationId: t,
                    showPage: 0
                }, !1, !1).then(function(t) {
                    for (var n = t.data || [], s = 0; s < n.length; s++) n[s].num = 1;
                    a.setData({
                        bannerList: n
                    }), 0 < a.data.bannerList.length && (i.a.createSelectorQuery().select(".banner").boundingClientRect(function(e) {
                        o.setData({
                            bannerHeight: e && e.height || 0
                        });
                    }).exec(), clearInterval(o.data.timingRequest), o.data.timingRequest = setInterval(function() {
                        o.data.unviewable || o.data.leaveFlag || o.recommendComNum(2);
                    }, 3e4)), i.a.getStorageSync("closeRevisionTips") || 1 != a.data.firstLoginIndex ? (o.setData({
                        revisionTipsFlag: !1
                    }), 1 == e && S.globalData.isLogin && o.getPushData()) : o.setData({
                        revisionTipsFlag: !0
                    }, function() {
                        i.a.createSelectorQuery().select(".tabView").boundingClientRect(function(e) {
                            e = e && e.top ? e.top : 0, o.setData({
                                revisionTipTop2: e - 10
                            });
                        }).exec();
                    });
                }, function(e) {
                    a.setData({
                        bannerList: []
                    });
                });
            },
            getPreachMeeting: function() {
                var e = this;
                r.a.xyb_request("setting/GetByStudent!openPush.action", "POST", {}, !1, !1).then(function(t) {
                    e.setData({
                        showPreachMeeting: t.data
                    });
                }, function(e) {});
            },
            toBannerDetail: function(e) {
                var t = e.currentTarget.dataset.item;
                i.a.eventCenter.trigger("taroClick", {
                    funName: "运营活动跳转",
                    funType: "运营活动banner",
                    funData: t.id
                }), 0 == t.jumpType ? t.jumpLink && -1 != t.jumpLink.indexOf("fieldId") ? i.a.navigateTo({
                    url: t.jumpLink + "&pageSource=9"
                }) : (e = {
                    title: t.title,
                    url: encodeURIComponent(t.jumpLink)
                }, i.a.navigateTo({
                    url: "/videoBag/pages/h5/h5?model=" + JSON.stringify(e)
                })) : 1 == t.jumpType ? i.a.navigateTo({
                    url: "/growUp/pages/home/activitydetail/activitydetail?activityId=" + t.id + "&pageSource=9"
                }) : 2 == t.jumpType && t.jumpLink ? (S.globalData.applyPostSort = 0, i.a.navigateTo({
                    url: "/videoBag/pages/posdetail/posdetail?postid=" + t.jumpLink + "&fromType=26&pageSource=9"
                })) : 3 == t.jumpType && t.jumpLink ? (S.globalData.applyPostSort = 1, i.a.navigateTo({
                    url: "/videoBag/pages/comdetail/comdetail?comid=" + t.jumpLink + "&pageSource=9"
                })) : 4 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + t.jumpLink + "&pageSource=9"
                }) : 5 == t.jumpType ? i.a.navigateTo({
                    url: "/videoBag/pages/doubleSelectList/doubleSelectList?id=" + t.jumpLink + "&name=" + t.title + "&pageSource=9"
                }) : 6 == t.jumpType && t.jumpLink ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/growUp/pages/home/topicCircle/topicCircle?topicId=" + t.jumpLink + "&pageSource=9"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: ""
                }, function() {
                    i.a.setStorageSync("jumpToPageUrl", "");
                }) : 7 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/secondBag/pages/courseDetails/courseDetails?id=" + t.jumpLink + "&pageSource=9"
                }) : 8 == t.jumpType && t.jumpLink ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/fifthBag/pages/huzhouList/huzhouList?cityChannelId=" + t.jumpLink + "&pageSource=9"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: ""
                }, function() {
                    i.a.setStorageSync("jumpToPageUrl", "");
                }) : 9 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/informationdetail/informationdetail?id=" + t.jumpLink + "&pageSource=9"
                }) : 10 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/dynamicDetail/dynamicDetail?dynamicId=" + t.jumpLink + "&pageSource=9"
                }) : 11 == t.jumpType && t.jumpLink ? i.a.navigateTo({
                    url: "/growUp/pages/home/questiondetail/questiondetail?questionId=" + t.jumpLink + "&pageSource=9"
                }) : 12 == t.jumpType && t.jumpLink && i.a.navigateTo({
                    url: "/growUp/pages/home/answerdetail/answerdetail?questionId=" + t.jumpLink2 + "&answerId=" + t.jumpLink + "&pageSource=9"
                }), r.a.xyb_request("client/activity/LoadActivityList!statistic.action", "POST", {
                    dataId: t.id,
                    type: 14,
                    user: i.a.getStorageSync("openid")
                }, !1, !1).then(function(e) {}, function(e) {
                    console.log(e);
                });
            },
            swiperChange: function(e) {
                var t;
                e = (t = e.detail).current;
                "autoplay" !== (t = t.source) && "touch" !== t || this.setData({
                    currentSwiper: e
                }), this.data.unviewable || this.data.bannerList[e] && (this.data.bannerList[e].num ? this.data.bannerList[e].num++ : this.data.bannerList[e].num = 1);
            },
            recommendComNum: function(e) {
                var t = [];
                if (2 == e && this.setData({
                    timingRequestInterface: !0
                }), 1 == e) return clearInterval(this.data.timingRequest), !1;
                for (var a = this.data.bannerList, o = 0; o < a.length; o++) t.push({
                    id: a[o].id,
                    count: a[o].num
                });
                u.a.commonDataStatistics("expose", "pages/find/index/index", "", "", "机会-banner图", JSON.stringify(t), "banner播放");
                for (var n = 0; n < a.length; n++) a[n].num = 1;
                this.setData({
                    timingRequestInterface: !1,
                    bannerList: a
                });
            },
            getLocationFun: function() {
                var e = this;
                i.a.getLocation({
                    type: "wgs84",
                    success: function(t) {
                        var a = t.longitude;
                        t = t.latitude;
                        e.loadCity(a, t);
                    },
                    fail: function(t) {
                        e.data.fromLook ? e.getPostList(3) : e.getPostList(1);
                    }
                });
            },
            loadCity: function(e, t) {
                var a = this;
                i.a.request({
                    url: "https://restapi.amap.com/v3/geocode/regeo",
                    data: {
                        key: "c222383ff12d31b556c3ad6145bb95f4",
                        location: e + "," + t,
                        extensions: "all",
                        s: "rsx",
                        sdkversion: "sdkversion",
                        logversion: "logversion"
                    },
                    success: function(e) {
                        e.data && e.data.regeocode && e.data.regeocode.addressComponent && (e = e.data.regeocode.addressComponent.city || "全国", 
                        a.setData({
                            cityname: e
                        }), a.getcityId(e));
                    },
                    fail: function(e) {}
                });
            },
            getcityId: function(e) {
                var t = this, a = this;
                r.a.xyb_request("common/loadLocation!getCityId.action", "POST", {
                    cityName: e
                }, !1, !1).then(function(o) {
                    t.setData({
                        cityId: o.data
                    }, function() {
                        var t;
                        a.data.isLogin || (t = S.globalData.selectCityArray) && (e = t.map(function(e) {
                            return e.name;
                        }).join(","), a.setData({
                            selectCityArray: t,
                            selectCityName: e
                        }));
                    }), i.a.setStorageSync("currentCityId", o.data), t.getBannerlist(2, o.data), a.data.fromLook ? a.getPostList(3) : a.getPostList(1);
                }, function(e) {
                    console.log(e);
                });
            },
            getQueryString: function(e, t) {
                return t = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"), null != (t = e.substr(1).match(t)) ? unescape(t[2]) : null;
            },
            onReady: function() {},
            onClose: function() {
                this.setData({
                    autoSign: !1
                });
            },
            autoSignEvent: function() {
                var e, t, a, o, n = this, s = null, c = (l = new Date()).getFullYear(), u = l.getMonth() + 1, g = l.getDate(), l = l.getDay(), p = i.a.getStorageSync("openid") || null, d = i.a.getStorageSync("unionid") || null, h = i.a.getStorageSync("xcxSystemInfo") || null, m = (l = l < 10 ? "0" + l : l, 
                c + "." + (u = u < 10 ? "0" + u : u) + "." + g);
                if ("" === i.a.getStorageSync("autoSign") && i.a.setStorageSync("autoSign", !0), 
                !i.a.getStorageSync("autoSign")) return !1;
                if (i.a.getStorageSync("autoSign" + m)) return !1;
                i.a.getSystemInfo({
                    success: function(e) {
                        s = e.model;
                    }
                });
                var f = new y.AMapWX({
                    key: "c222383ff12d31b556c3ad6145bb95f4"
                });
                wx.getLocation({
                    type: "gcj02",
                    success: function(c) {
                        var u = c.latitude, g = c.longitude;
                        f.getRegeo({
                            location: g + "," + u,
                            success: function(c) {
                                t = u, e = g;
                                var l = (f = c[0].regeocodeData).addressComponent.province + f.addressComponent.city + f.addressComponent.district, f = c[0].regeocodeData.formatted_address + "";
                                a = f ? f.replace(l, "") : "", o = c[0].regeocodeData.addressComponent.adcode, l = {
                                    model: h ? h.model : "",
                                    brand: h ? h.brand : "",
                                    platform: h ? h.platform : "",
                                    system: h ? h.system : "",
                                    openId: p,
                                    unionId: d,
                                    lat: t,
                                    lng: e,
                                    address: a,
                                    deviceName: s,
                                    adcode: o
                                }, c = {
                                    country: c[0].regeocodeData.addressComponent.country,
                                    province: c[0].regeocodeData.addressComponent.province,
                                    city: c[0].regeocodeData.addressComponent.city
                                }, i.a.setStorageSync("currentCityInfo", c), r.a.xyb_request("student/clock/Post!autoClock.action", "POST", l, !1, !1).then(function(e) {
                                    0 != e.data.successCount && (n.setData({
                                        autoSign: !0
                                    }), i.a.eventCenter.trigger("taroClick", {
                                        funName: "自动签到"
                                    }), i.a.setStorageSync("autoSign" + m, !0), setTimeout(function() {
                                        n.setData({
                                            autoSign: !1
                                        });
                                    }, 2e3));
                                }, function(e) {
                                    n.setData({
                                        autoSign: !1
                                    }), console.info("自动签到失败");
                                });
                            },
                            fail: function(e) {
                                console.log("获取定位失败");
                            }
                        });
                    }
                });
            },
            onPageScroll: function(e) {},
            debounceEvent: function(e, t, a) {
                var o = this, n = arguments;
                v && clearTimeout(v), a ? (a = !v, v = setTimeout(function() {
                    v = null;
                }, t), a && e.apply(o, n)) : v = setTimeout(function() {
                    e.apply(o, n);
                }, t);
            },
            GetNumberOfDays: function(e, t) {
                return e = Date.parse(new Date(e)), t = Date.parse(new Date(t)), parseInt((t - e) / 864e5);
            },
            GetNumberOfSeconeds: function(e, t) {
                return e = Date.parse(new Date(e)), t = Date.parse(new Date(t)), parseInt((t - e) / 1e3);
            },
            showEpidemic: function() {
                var e, t, a, o;
                i.a.getStorageSync("autoSign") && (e = i.a.getStorageSync("closeEpidemicFlag"), 
                a = null, "" != i.a.getStorageSync("epidemicTime") && (a = JSON.parse(i.a.getStorageSync("epidemicTime"))), 
                o = "", (t = i.a.getStorageSync("epidemicTime") ? a : null) ? (a = new Date(), o = this.GetNumberOfDays(new Date(t), a)) : i.a.setStorageSync("epidemicTime", JSON.stringify(new Date())), 
                3 < o ? i.a.setStorageSync("epidemicFlag", !1) : i.a.setStorageSync("epidemicFlag", !0), 
                i.a.getStorageSync("epidemicFlag") ? this.setData({
                    showEpidemicFlag: !0,
                    closeEpidemicFlag: !1 !== e
                }) : this.setData({
                    showEpidemicFlag: !1,
                    closeEpidemicFlag: !1 !== e
                }));
            },
            closeEpidemic: function() {
                i.a.setStorageSync("closeEpidemicFlag", !1), this.setData({
                    closeEpidemicFlag: !1
                });
            },
            onShow: function() {
                i.a.setStorageSync("wxCodeEducationProjectId", ""), S.globalData.isLogin ? (this.alumniInfoCheck(), 
                this.getEnterpriseTopData(), this.showEpidemic(), this.getBlackInfo(), this.setData({
                    isLogin: !0
                }), this.jobHuntCheck(), this.accountInfo()) : (this.setData({
                    isLogin: !1,
                    activateFlag: !1,
                    getActivateState: !0
                }), this.initNotCompleteAnimation(), i.a.getStorageSync("confirmUserAgreement") ? i.a.getStorageSync("currentCityInfo").country || new y.AMapWX({
                    key: "c222383ff12d31b556c3ad6145bb95f4"
                }).getRegeo({
                    success: function(e) {
                        e = {
                            country: e[0].regeocodeData.addressComponent.country,
                            province: e[0].regeocodeData.addressComponent.province,
                            city: e[0].regeocodeData.addressComponent.city
                        }, i.a.setStorageSync("currentCityInfo", e);
                    },
                    fail: function(e) {
                        console.log("获取定位失败");
                    }
                }) : this.setData({
                    userAgreementFlag: !0
                })), this.getPreachMeeting(), this.getBannerlist(1), this.getCountNoDealNum(), "secondBag/pages/mine/schoolcensus/showsuccess/showsuccess.html" == i.a.getCurrentPages()[0].__displayReporter.showReferpagepath && this.jobStatusPopupFun(), 
                this.applyPostRemind(), this.getBriefingSessionList(), this.loadErrorPlanId();
            },
            loadErrorPlanId: function() {
                var e = i.a.getStorageSync("todayLoginCount");
                if (2 < e) return !1;
                r.a.xyb_request("student/tripartiteagreement/loadErrorPlanId.action", "POST", {}, !1, !1).then(function(t) {
                    var a, o, n, s;
                    t.data, t.data && (a = i.a.getStorageSync("todayJumpCount") ? i.a.getStorageSync("todayJumpCount") : 0, 
                    o = (s = new Date()).getFullYear(), n = s.getMonth() + 1, s = s.getDate(), 1 == e && i.a.getStorageSync("sfxyLoginCount") != o + "/" + n + "/" + s && (a = 0), 
                    console.log("todayJumpCount========", a), (1 == e && 0 == a || 2 == e && 1 == a) && (i.a.setStorageSync("todayJumpCount", a += 1), 
                    i.a.navigateTo({
                        url: "/echartsBag/pages/agreement/commitAgreement/relCommitAgreement?id=" + t.data
                    })));
                }, function(e) {
                    console.log(e);
                });
            },
            jobStatusPopupFun: function() {
                var e = this;
                r.a.xyb_request("answersheet/ApplyPostQuestionnaire.action", "POST", {}, !1, !1).then(function(t) {
                    null != (t = t.data) && "{}" != JSON.stringify(t) && e.setData({
                        jobStatusPopupFlag: !0,
                        xybOfficialAccountsPopupFlag: !1,
                        jobStatusType: t
                    });
                }, function(e) {
                    console.log(e);
                });
            },
            officialAccountsPopupFun: function() {
                var e = this;
                S.globalData.isLogin && r.a.xyb_request("answersheet/HomepagePopupWindow.action", "POST", {}, !1, !1).then(function(t) {
                    var a, o, n = t.data;
                    n && n.popup && (a = i.a.getStorageSync("officialAccountsPopupFlag") || "", o = i.a.getStorageSync("officialAccountsPopupState"), 
                    t = new Date().getTime() - a, !a || a && 6048e5 <= t && o == n.status || a && o != n.status ? e.setData({
                        xybOfficialAccountsPopupFlag: !0,
                        studentIdentity: n.status
                    }) : e.setData({
                        xybOfficialAccountsPopupFlag: !1
                    }));
                }, function(e) {
                    console.log(e);
                });
            },
            accountInfo: function() {
                var e = this;
                r.a.xyb_request("account/LoadAccountInfo.action", "POST", {}, !1, !1).then(function(t) {
                    var a = t.data;
                    t = 0;
                    t = a.jobHuntEditTime && 0 < a.jobHuntEditTime ? (console.log("123", a.jobHuntEditTime), 
                    787968e4 < new Date().getTime() - a.jobHuntEditTime ? 2 : 0) : -1 === a.jobHuntEditTime ? 0 : 1, 
                    e.setData({
                        activateFlag: a.activate,
                        getActivateState: !0,
                        resumeCompleteProcess: a.completenessSum,
                        jobHuntShowType: t
                    }), i.a.getStorageSync("activateTipCloseFlag"), i.a.setStorageSync("userType", a.isTeacher ? 2 : 1), 
                    i.a.setStorageSync("loginerName", a.loginer), i.a.getApp().globalData.userSchoolInfo.name = a.loginer, 
                    i.a.getApp().globalData.userSchoolInfo.picUrl = a.picUrl, i.a.getApp().globalData.userSchoolInfo.activate = a.activate, 
                    i.a.setStorageSync("studentActivate", a.activate), (t = i.a.getStorageSync("jumpToPageUrl")) && ("/pages/growup/growup" == t ? 0 == a.activate ? i.a.navigateTo({
                        url: "/secondBag/pages/mine/schoolcensus/index/index"
                    }) : (i.a.reLaunch({
                        url: "/pages/growup/growup"
                    }), i.a.setStorageSync("jumpToPageUrl", "")) : 0 == a.activate ? i.a.navigateTo({
                        url: "/secondBag/pages/mine/schoolcensus/index/index"
                    }) : (i.a.navigateTo({
                        url: t
                    }), i.a.setStorageSync("jumpToPageUrl", "")));
                }, function(e) {
                    console.log(e);
                });
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
            onHide: function() {
                0 < this.data.bannerList.length && (this.setData({
                    leaveFlag: !0
                }), this.recommendComNum(1));
            },
            onUnload: function() {
                0 < this.data.bannerList.length && (this.setData({
                    leaveFlag: !0
                }), this.recommendComNum(1));
            },
            onReachBottom: function() {
                var e, t, a = void 0;
                0 == this.data.tabIndex ? (a = "机会-找岗位-上拉", this.data.firstLoading || (e = this.data.pageIndex + 1, 
                this.data.hasMore && (this.setData({
                    pageIndex: e
                }, function() {
                    u.a.commonDataStatistics("slideUp", "pages/find/index/index", "", "", a, e);
                }), this.getPostList()))) : 1 === this.data.tabIndex ? (a = "机会-宣讲会-上拉", this.refs.BriefingSession.reachBottom()) : 2 === this.data.tabIndex ? (a = "机会-双选会-上拉", 
                this.refs.DoubleChoice.reachBottom()) : 3 == this.data.tabIndex ? this.data.firstLoading || (t = this.data.pageIndex2 + 1, 
                this.setData({
                    pageIndex2: t
                }), this.getRecommendEntList(), a = "机会-进名企-上拉") : (a = "机会-本校推荐-上拉", this.refs.SchoolRecomm.reachBottom()), 
                0 !== this.data.tabIndex && u.a.commonDataStatistics("slideUp", "pages/find/index/index", "", "", a);
            },
            changeShowlogin: function() {
                this.setData({
                    showlogin: !0,
                    jumpToPageUrl: ""
                }, function() {
                    i.a.setStorageSync("jumpToPageUrl", "");
                });
            },
            receiveClose: function(e) {
                e.detail, e = i.a.getStorageSync("first"), this.setData({
                    showfirst: !e
                });
            },
            receiveLogin: function(e) {
                var t = this;
                this.setData({
                    isLogin: !0,
                    showlogin: !1
                }), S.globalData.isLogin = !0, this.accountInfo(), this.jobHuntCheck(1), this.data.xjhCode && this.getXJHShareDetail(this.data.xjhCode), 
                this.getBlackInfo(), this.data.jumpToPageUrl && (i.a.navigateTo({
                    url: this.data.jumpToPageUrl
                }), this.setData({
                    jumpToPageUrl: ""
                })), this.setData({
                    tabIndex: 0,
                    pageIndex: 1,
                    maxPage: "",
                    hasMore: !0
                }, function() {
                    t.calcTabLine();
                });
            },
            onShareAppMessage: function(e) {
                var t = "/pages/find/index/index?pageSource=0&isJob=1";
                return {
                    title: "陪你找第一份工作~",
                    path: t = 1 == this.data.tabIndex ? "/pages/find/index/index?pageSource=0&isJob=0" : t,
                    imageUrl: "https://xcxresources.xybsyw.com/xcx/images/xybIndexShareImg.png"
                };
            },
            gotoSearch: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转搜索页面"
                }), i.a.navigateTo({
                    url: "/ninthBag/pages/jobSearch/jobSearch"
                });
            },
            getHavePopActivate: function() {
                var e = i.a.getStorageSync("studentActivate");
                "在校生" === i.a.getStorageSync("studentType") && 0 == e && (this.popActivate(), i.a.removeStorage({
                    key: "studentType",
                    success: function(e) {}
                }));
            },
            popActivate: function() {
                var e = this;
                setTimeout(function() {
                    e.setData({
                        autoPopActivate: !0
                    });
                }, 2e3);
            },
            closePop: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭认证窗口"
                }), this.setData({
                    autoPopActivate: !1
                });
            },
            gotoActive: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转学籍认证"
                }), i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/index/index"
                });
            },
            closeXJH: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭宣讲会"
                }), this.setData({
                    xjhPopup: !1,
                    xjhSharePopup: !1
                });
            },
            getXJHShareDetail: function(e) {
                var t = this, a = this, o = "";
                r.a.xyb_request("careertalk/GetCodeInfo.action", "POST", {
                    code: e
                }, !1, !1).then(function(n) {
                    if (n && n.data) {
                        var s = n.data;
                        a.statistical(7, s.enterpriseId, s.careerTalkId, null, 0);
                        var r = !1, c = "", u = "", g = "", l = 1;
                        if (1 == s.type) g = "领求职经验包", s.noLogin ? (l = 2, g = "立即登录", o = e) : s.streamEnd ? (l = 8, 
                        g = "确认") : s.copySelf ? (g = "查看详情", l = s.complete ? 6 : 5) : s.overLimit ? (g = "确认", 
                        l = 7) : s.complete ? (g = "查看详情", l = 6) : s.noActive ? (g = "学籍认证", l = 4) : s.schoolNotMatch && (g = "确认", 
                        l = 3); else {
                            if (!(s.streamEnd || s.noLogin || s.noActive || s.schoolNotMatch)) return n = t.data.xjhShare.careerTalkId || n.data.careerTalkId, 
                            void i.a.navigateTo({
                                url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + n + "&xcxshareType=" + t.data.xcxshareXjhType
                            });
                            r = !0, s.noLogin ? (g = "立即登录", u = "无法查看", c = "本场宣讲会仅限部分院校可参与。请先登录吧~", o = e) : s.noActive ? (g = "学籍认证", 
                            u = "条件不符", c = "很抱歉，本场宣讲会仅限部分院校可参与。请先学成学籍认证~") : s.streamEnd ? (g = "查看其他宣讲会", 
                            u = "宣讲会已结束", c = "很抱歉，您查看的宣讲会已结束，宣讲会相关信息无法查看") : s.schoolNotMatch && (g = "查看其他宣讲会", 
                            u = "无法查看", c = "很抱歉，本场宣讲会仅限部分院校可参与。你的学籍不相符。");
                        }
                        a.setData({
                            xjhSharePopup: 2 == s.type,
                            xjhPopup: 1 == s.type,
                            xjhShare: s,
                            shareFail: r,
                            shareFailText: c,
                            xjhShareFailTitle: u,
                            xjhLieType: l,
                            xjhShareBtn: g,
                            xjhCode: o
                        });
                    }
                }, function(e) {});
            },
            statistical: function(e, t, a, o) {
                t = {
                    topic: "enterprise-speech",
                    eventId: e,
                    source: "weixin",
                    type: 1 == i.a.getStorageSync("userType") ? "student" : 2 == i.a.getStorageSync("userType") ? "school" : "unknown",
                    deviceId: this.appTokenData,
                    enterpriseId: t,
                    eventTime: new Date().getTime()
                }, o && 0 < o && (t.duration = o), a && (t.postId = a), r.a.xyb_request("behavior/Duration.action", "POST", t, !1, !0, 2).then(function(e) {}, function(e) {
                    console.log(e);
                });
            },
            shareXjhClick: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "分享宣讲会按钮"
                });
                var e = this.data.xjhShareBtn, t = this.data.xjhShare.careerTalkId;
                "立即登录" == e ? this.setData({
                    showlogin: !0,
                    jumpToPageUrl: ""
                }, function() {
                    i.a.setStorageSync("jumpToPageUrl", "");
                }) : "学籍认证" == e ? this.gotoActive() : "一键报名" == e ? r.a.xyb_request("careertalk/CareerTalkSignUp.action", "POST", {
                    careerTalkId: t
                }, !1, !1).then(function(e) {
                    e && i.a.navigateTo({
                        url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + t
                    });
                }, function(e) {}) : "查看其他宣讲会" == e ? (i.a.setStorageSync("index_indexType", 4), 
                i.a.reLaunch({
                    url: "/pages/find/index/index"
                })) : "确认" != e && i.a.navigateTo({
                    url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + t
                }), this.setData({
                    xjhPopup: !1,
                    xjhSharePopup: !1
                });
            },
            goToDetail: function(e) {
                this.data.isLogin ? 1 == (e = e.currentTarget.dataset.index) ? (i.a.navigateTo({
                    url: "/growUp/pages/sign/sign/sign"
                }), i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转签到"
                })) : 2 == e ? (i.a.navigateTo({
                    url: "/growUp/pages/journal/journalList/journalList?from=homePage"
                }), i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转周日志"
                })) : 3 == e ? (i.a.navigateTo({
                    url: "/secondBag/pages/city/city"
                }), i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转城市"
                })) : 4 == e && (i.a.navigateTo({
                    url: "/ninthBag/pages/interaction/interaction"
                }), i.a.eventCenter.trigger("taroClick", {
                    funName: "互动分享"
                })) : this.setData({
                    showlogin: !0
                });
            },
            alumniInfoCheck: function() {
                var e = this;
                if (2 == i.a.getStorageSync("userType")) return S.globalData.isAlumni = !0, e.getXyqSchoolList(), 
                !1;
                r.a.xyb_request("client/alumni/AlumniInfoCheck.action", "POST", {}, !1, !1).then(function(t) {
                    S.globalData.isAlumni = t.data.isAlumni, t.data.isAlumni && e.getXyqSchoolList();
                }, function(e) {
                    console.log(e);
                });
            },
            getXyqSchoolList: function() {
                var e = this;
                r.a.xyb_request("client/alumni/GetSchoolInfo.action", "POST", {}, !1, !1).then(function(t) {
                    e.setData({
                        xyqSchoolInfo: t.data,
                        schoolId: t.data.mySchool.schoolId,
                        schoolName: t.data.mySchool.name
                    });
                    var a = S.globalData.alumniInfo;
                    a.schoolId = t.data.mySchool.schoolId, a.schoolName = t.data.mySchool.name, a.schoolRank = t.data.mySchool.rank, 
                    S.globalData.alumniInfo = a, r.a.xyb_request("client/alumni/AlumniShare.action", "POST", {}, !1, !1).then(function(t) {
                        e.setData({
                            shareId: t.data
                        });
                        var o = S.globalData.alumniInfo;
                        a.shareId = t.data, S.globalData.alumniInfo = o;
                    });
                }, function(e) {});
            },
            getEnterpriseTopData: function() {
                var e = this;
                r.a.xyb_request("enterprise/GetEnterpriseTopData.action", "POST", {}, !1, !1).then(function(t) {
                    t.data && (t.data && e.setData({
                        careerSchoolNum: t.data.careerSchoolNum
                    }), t.data && e.setData({
                        doubleSchoolNum: t.data.doubleSchoolNum
                    }));
                }, function(e) {});
            },
            clickEnterpriseTopData: function(e) {
                r.a.xyb_request("enterprise/GetEnterpriseTopData!hasRead.action", "POST", {
                    type: e
                }, !1, !1).then(function(e) {}, function(e) {});
            },
            toSaoYiSao: function() {
                var e;
                i.a.eventCenter.trigger("taroClick", {
                    funName: "去扫码"
                }), S.globalData.isLogin ? (e = this, i.a.scanCode({
                    complete: function(t) {
                        if (t && t.path) {
                            var a, o = "/" + (o = (a = decodeURIComponent(t.path).replace("&amp;", "&")).split("?scene=a=")[0]);
                            (a = a.split("?scene=a=")[1]) ? i.a.navigateTo({
                                url: o + "?id=" + a
                            }) : i.a.showToast({
                                title: "该二维码识别需使用微信扫码",
                                icon: "none"
                            });
                        } else if (t && t.result) {
                            t = t.result;
                            try {
                                "string" == typeof t && (t = JSON.parse(t));
                            } catch (t) {
                                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                return i.a.showToast({
                                    title: "该二维码识别需使用微信扫码",
                                    icon: "none"
                                }), !1;
                            }
                            t.code && t.key ? e.loginPC(t.code, t.key) : i.a.showToast({
                                title: "该二维码识别需使用微信扫码",
                                icon: "none"
                            });
                        }
                    }
                })) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: ""
                }, function() {
                    i.a.setStorageSync("jumpToPageUrl", "");
                });
            },
            loginPC: function(e, t) {
                r.a.xyb_request("ScanCode!over.action", "POST", {
                    code: e,
                    key: t
                }, !1, !1).then(function(a) {
                    a && i.a.navigateTo({
                        url: "/secondBag/pages/mine/qrLoginSuccess/qrLoginSuccess?code=" + e + "&key=" + t
                    });
                }, function(e) {});
            },
            getPushData: function() {
                var e, t, a = this, o = i.a.getStorageSync("getPushDataCount") || 0, n = i.a.getStorageSync("getPushDataTime");
                864e5 < new Date().getTime() - n ? i.a.setStorageSync("getPushDataCount", o = 1) : i.a.setStorageSync("getPushDataCount", ++o), 
                1 == o && (e = (t = new Date()).getFullYear(), n = (n = t.getMonth() + 1) < 10 ? "0" + n : n, 
                t = (t = t.getDate()) < 10 ? "0" + t : t, t = new Date(e + "-" + n + "-" + t + " 00:00:00").getTime(), 
                i.a.setStorageSync("getPushDataTime", t)), o <= 3 && (this.setData({
                    bookingSxhForm: {}
                }), r.a.xyb_request("doublechoice/DoubleChoiceList!getPushData.action", "POST", {}, !1, !1).then(function(e) {
                    var t;
                    e && e.data && null != e.data && ((t = e.data.data).bookingSxhStatus = e.data.status ? 0 : 1, 
                    a.setData({
                        bookingSxhForm: t
                    })), null == e.data || a.bookingSxhForm && a.bookingSxhForm.bookingSxhStatus;
                }, function(e) {
                    console.log(e);
                }));
            },
            bookingSxhEvent: function(e) {
                var t = this;
                i.a.eventCenter.trigger("taroClick", {
                    funName: "点击预约报名"
                });
                e = e.currentTarget.dataset.type;
                var a = {
                    bookingSxhStatus: null
                };
                1 == e ? r.a.xyb_request("doublechoice/DoubleChoice!signTalk.action", "POST", {
                    talkId: this.data.bookingSxhForm.id,
                    showTalent: 1
                }, !0, !1).then(function(e) {
                    i.a.showToast({
                        title: "预约报名成功，届时将提醒你参加~",
                        icon: "none"
                    }), t.setData({
                        bookingSxhForm: a
                    });
                }, function(e) {}) : (2 == e && i.a.navigateTo({
                    url: "/fifthBag/pages/jobModule/preDoubleMeeting/preDoubleMeeting?id=" + this.data.bookingSxhForm.id
                }), this.setData({
                    bookingSxhForm: a
                }));
            },
            changeTab: function(e) {
                var t = this;
                if (i.a.eventCenter.trigger("taroClick", {
                    funName: "切换tab"
                }), 0 == (e = e.currentTarget.dataset.tab)) this.setData({
                    hasMore: !0,
                    pageIndex: 1,
                    isLoadMorePost: !1,
                    showMoreButton: !1
                }, function() {
                    t.getPostList(1);
                }); else if (1 == e) {
                    if (!this.data.isLogin) return void this.setData({
                        showlogin: !0
                    });
                    this.clickEnterpriseTopData(2), this.setData({
                        careerSchoolNum: 0
                    });
                } else if (2 == e) this.clickEnterpriseTopData(1), this.setData({
                    doubleSchoolNum: 0
                }); else if (3 == e) this.setData({
                    hasMore2: !0,
                    pageIndex2: 1,
                    firstLoading: !0
                }, function() {
                    t.getRecommendEntList(1);
                }); else if (4 == e && !this.data.isLogin) return void this.setData({
                    showlogin: !0
                });
                this.setData({
                    tabIndex: e
                }, function() {
                    t.calcTabLine(), t.data.showDropMenu && (console.log("滚动", t.data.topBarHeight), 
                    i.a.pageScrollTo({
                        scrollTop: t.data.topBarHeight,
                        duration: 500
                    }));
                });
            },
            calcTabLine: function() {
                var e = this;
                i.a.createSelectorQuery().select(".tab-item-" + this.data.tabIndex).boundingClientRect().exec(function(t) {
                    t = (t[0].width - 17) / 2 + t[0].left, e.setData({
                        tabLineLeft: t
                    });
                });
            },
            closeLoginClick: function() {
                this.setData({
                    showlogin: !1
                });
            },
            closeLikeXYB: function(e) {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭添加到我的小程序提示"
                }), this.setData({
                    hasLikeXYB: !0
                }), i.a.setStorageSync("hasLikeXYB", 1);
            },
            getLikeWxAccount: function() {
                r.a.xyb_request("wx/WxAccount.action", "POST", {}, !1, !1).then(function(e) {
                    console.log(e), i.a.setStorageSync("subscribe", e.data.subscribe);
                }, function(e) {
                    console.log(e);
                });
            },
            jumpTo: function(e) {
                e.fromAutoLogin && i.a.showToast({
                    title: "登陆成功",
                    icon: "none"
                }), e.xjhCode && (this.setData({
                    xjhCode: e.xjhCode,
                    xcxshareXjhType: e.xcxshareType
                }), this.getXJHShareDetail(e.xjhCode));
                var t, a, o = i.a.getStorageSync("studentActivate");
                e && e.urlType ? "a2" == (t = e.urlType) ? S.globalData.isLogin ? 0 == o ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/index/index?from=INDEX"
                }) : i.a.reLaunch({
                    url: "/pages/growup/growup"
                }) : (this.setData({
                    showlogin: !0
                }), i.a.setStorageSync("jumpToPageUrl", "/pages/growup/growup")) : "a3" == t ? S.globalData.isLogin ? 0 == o ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/index/index?from=INDEX"
                }) : i.a.navigateTo({
                    url: "/growUp/pages/enroll/enrolllist/enrolllist"
                }) : (this.setData({
                    showlogin: !0
                }), i.a.setStorageSync("jumpToPageUrl", "/growUp/pages/enroll/enrolllist/enrolllist")) : "a4" == t ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/myCourse/myCourse"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/secondBag/pages/mine/myCourse/myCourse"
                }) : "b4" == t ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/fifthBag/pages/huzhouCityList/huzhouCityList"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/fifthBag/pages/huzhouCityList/huzhouCityList"
                }) : "b5" == t ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/fifthBag/pages/jobModule/jobBook/jobBook"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/fifthBag/pages/jobModule/jobBook/jobBook"
                }) : "c1" == t ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/thirdBag/pages/myresume/index/index"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/thirdBag/pages/myresume/index/index"
                }) : "c2" == t ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/sendrecord/sendrecord"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/secondBag/pages/mine/sendrecord/sendrecord"
                }) : "c3" == t ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/secondBag/pages/alumniCircle/alumniCircle"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/secondBag/pages/alumniCircle/alumniCircle"
                }) : "c4" == t ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/fourthBag/pages/find/testintroduce/testintroduce"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/fourthBag/pages/find/testintroduce/testintroduce"
                }) : "c5" == t ? S.globalData.isLogin ? i.a.navigateTo({
                    url: "/videoBag/pages/customerservice/servicecenter/servicecenter"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/videoBag/pages/customerservice/servicecenter/servicecenter"
                }) : "msg1" == t && (S.globalData.isLogin ? i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/index/index"
                }) : this.setData({
                    showlogin: !0,
                    jumpToPageUrl: "/secondBag/pages/mine/schoolcensus/index/index"
                })) : e && e.appkey && (this.setData({
                    fromStudentAppFlag: !0
                }), a = this, setTimeout(function() {
                    a.setData({
                        fromStudentAppFlag: !1
                    });
                }, 1500), S.globalData.isLogin || this.appAutoLogin(e.appkey));
            },
            appAutoLogin: function(e) {
                var t = this, a = i.a.getStorageSync("openid") || null, o = i.a.getStorageSync("unionid") || null, n = i.a.getStorageSync("xcxSystemInfo") || null, s = {
                    type: "fromApp",
                    loginerId: e,
                    model: n ? n.model : "",
                    brand: n ? n.brand : "",
                    platform: n ? n.platform : "",
                    system: n ? n.system : "",
                    openId: a,
                    unionId: o,
                    username: "",
                    password: "",
                    deviceId: S.globalData.currentEnvironment && "wxwork" == S.globalData.currentEnvironment ? a : ""
                };
                r.a.xyb_request("login/login.action", "POST", s, !1, !0).then(function(o) {
                    c.a.Data.userInfo = {
                        open_id: a,
                        phone: o.data.phone
                    }, i.a.setStorageSync("Cookie", "JSESSIONID=" + o.data.sessionId);
                    var n = Date.parse(new Date());
                    i.a.setStorageSync("Cookie_time", n + 36e5), i.a.setStorageSync("sessionId", o.data.sessionId), 
                    i.a.setStorageSync("userid", o.data.loginerId), i.a.setStorageSync("username", o.data.loginKey), 
                    i.a.setStorageSync("loginerId", e), i.a.setStorageSync("logintype", "2"), i.a.setStorageSync("userType", "1"), 
                    t.accountInfo(), S.globalData.isLogin = !0, o.data.activate ? (i.a.setStorage({
                        key: "studentActivate",
                        data: o.data.activate
                    }), S.globalData.studentActivate = o.data.activate) : (i.a.setStorage({
                        key: "studentActivate",
                        data: !1
                    }), S.globalData.studentActivate = !1);
                }, function(e) {
                    g.a.setFilterMsg("fromApploginError", e, s), console.log(e);
                });
            },
            closeJobStatusPopup: function() {
                this.setData({
                    jobStatusPopupFlag: !1
                });
            },
            binderrorimg: function(e) {
                var t = {};
                t["postList[" + e.target.dataset.errorimg + "].logoUrl"] = "https://xcxresources.xybsyw.com/xcx/images/com_default.png", 
                this.setData(t);
            },
            binderrorimg1: function(e) {
                var t = e.target.dataset.errorimg;
                (e = [].concat(f(this.data.comList)))[t].logoUrl = "https://xcxresources.xybsyw.com/xcx/images/com_default.png", 
                this.setData({
                    comList: e
                });
            },
            getPostList: function(e) {
                var t = this;
                if (!this.data.hasMore) return !1;
                var a, o, n, s, c, g = "post/GetPostList.action", l = {
                    page: this.data.pageIndex,
                    onLogin: S.globalData.isLogin,
                    locationIds: this.data.cityId
                };
                (2 == e || 0 < this.data.selectCityArray.length) && "全国" != this.data.selectCityArray[0].name ? (o = [], 
                "", s = [], (c = []).push(this.data.cityname), this.data.selectCityArray.forEach(function(e, t) {
                    e.id == e.parentId && 11e4 != e.id && 12e4 != e.id && 5e5 != e.id && 31e4 != e.id ? s.push(e.id) : (o.push(e.id), 
                    c.push(e.name));
                }), a = o.join(","), n = s.join(","), l.tempLocations = a, l.tempLocationProvinces = n, 
                this.setData({
                    tempLocations: a,
                    tempLocationProvinces: n
                })) : this.setData({
                    tempLocations: "",
                    tempLocationProvinces: ""
                }), this.data.isLoadMorePost && (l.moreFlag = 1), 1 === this.data.intentionStatus && (g = "post/GetList!getCityNewPostList.action", 
                l = {
                    locationIds: this.data.selectCityArray.map(function(e) {
                        return e.id;
                    }).join(",") || this.data.cityId,
                    page: this.data.pageIndex
                }), r.a.xyb_request(g, "POST", l, !1, !1).then(function(a) {
                    var o = t;
                    e ? (o.firstLoading && setTimeout(function() {
                        i.a.createSelectorQuery().select(".top-bar").boundingClientRect(function(e) {
                            o.setData({
                                topBarHeight: e && e.height || 0
                            }), i.a.pageScrollTo({
                                scrollTop: e && e.height || 0,
                                duration: 500
                            });
                        }).exec(), o.initObserver();
                    }, 2e3), o.setData({
                        postList: [],
                        firstLoading: !1
                    })) : o.setData({
                        firstLoading: !1
                    });
                    var n, s, r = o.data.postList;
                    a.data ? (s = a.data.list || [], n = [], s.forEach(function(e) {
                        r.push(e), n.push(e.id);
                    }), 0 < n.length && (n = n.join(","), u.a.commonDataStatistics("expose", "pages/find/index/index", "", "", "", n, "岗位")), 
                    s = 0 < a.data.maxPage && a.data.maxPage !== o.data.pageIndex, t.data.isLoadMorePost || s || 0 !== t.data.intentionStatus || !t.data.isLogin || l.tempLocationProvinces || l.tempLocations || t.setData({
                        showMoreButton: !0
                    }), o.setData({
                        maxPage: a.data.maxPage,
                        hasMore: s
                    }), o.setData({
                        postList: r
                    }, function() {
                        1 == t.data.pageIndex && o.setData({
                            showChatFlag: !0
                        });
                    })) : t.data.isLoadMorePost || l.tempLocationProvinces || l.tempLocations ? o.setData({
                        showChatFlag: !0,
                        hasMore: !1,
                        maxPage: 2
                    }) : (t.setData({
                        showMoreButton: !1,
                        isLoadMorePost: !0
                    }), t.getPostList(1));
                }, function(e) {
                    e && "205" == e.code && (t.setData({
                        pageIndex: 1,
                        maxPage: "",
                        hasMore: !0,
                        showChatFlag: !0
                    }), t.getPostList(1));
                });
            },
            toJobobjective: function(e) {
                2 === this.data.jobHuntShowType && r.a.xyb_request("account/LoadAccountInfo!closeTip.action", "POST", {}, !1, !1).then(function(e) {
                    console.log(e);
                }), 1 == e.currentTarget.dataset.type ? this.setData({
                    showlogin: !0,
                    needJumpToJobobjective: !0
                }) : (i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转求职意向"
                }), i.a.navigateTo({
                    url: "/videoBag/pages/jobintentionsetting/jobobjective/jobobjective?reconfirm=1"
                }));
            },
            toposDetail: function(e) {
                var t;
                e.currentTarget.dataset.id && (t = e.currentTarget.dataset.id, e = e.currentTarget.dataset.type, 
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转职位详情",
                    itemId: t
                }), 1 == e && (S.globalData.applyPostSort = 23), e = "", this.$router.params.pageSource, 
                this.$router.params.isJob, e = "&pageSource=" + (1 == this.data.tabIndex ? "1" : "0"), 
                i.a.navigateTo({
                    url: "/videoBag/pages/posdetail/posdetail?postid=" + t + "&fromType=26" + e
                }));
            },
            toComDetail: function(e) {
                var t;
                e.currentTarget.dataset.id && (S.globalData.applyPostSort = 24, t = e.currentTarget.dataset.id, 
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转企业详情",
                    itemId: t
                }), e = e.currentTarget.dataset.type, i.a.navigateTo({
                    url: "/videoBag/pages/comdetail/comdetail?comid=" + t + "&tabType=" + e + "&pageSource=0"
                }));
            },
            jobHuntCheck: function(e) {
                var t = this;
                r.a.xyb_request("talents/JobHuntCheck.action", "POST", {}, !1, !0).then(function(a) {
                    var o, n = a.data;
                    if (t.setData({
                        resumeIsComplete: n.checkCompleteness
                    }, function() {
                        n.checkCompleteness || t.initNotCompleteAnimation();
                    }), 0 < n.locations.length && (o = [], n.locations.forEach(function(e) {
                        o.push(e.name);
                    }), o.join(",")), 0 < n.locations.length && 0 < n.positions.length) t.setData({
                        jobObjectiveStr: n.positions.map(function(e) {
                            return e.name;
                        }).join("，")
                    }); else if (t.data.needJumpToJobobjective) return t.setData({
                        needJumpToJobobjective: !1
                    }), i.a.eventCenter.trigger("taroClick", {
                        funName: "跳转求职意向"
                    }), i.a.navigateTo({
                        url: "/videoBag/pages/jobintentionsetting/jobobjective/jobobjective?reconfirm=1"
                    }), !1;
                    1 == e && t.getPostList(1);
                    var s = n.resumeOptimization;
                    s && s.resumeOptimizationNum && 0 < s.resumeOptimizationNum ? (a = i.a.getStorageSync("closeInCompleteResume"), 
                    6048e5 <= new Date().getTime() - a ? t.setData({
                        notCompleteResume: !0,
                        resumeOptimization: s.resumeOptimizationNum
                    }) : t.setData({
                        notCompleteResume: !1
                    })) : t.setData({
                        notCompleteResume: !1
                    });
                }, function(e) {
                    console.log(e);
                });
            },
            selectCityEvent: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "显示切换城市弹窗"
                }), this.setData({
                    showCitySelectFlag: !0
                });
            },
            toFavorites: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转收藏夹"
                }), i.a.navigateTo({
                    url: "/secondBag/pages/mine/collectposition/collectposition"
                });
            },
            receiveCitySelect: function(e) {
                var t = this, a = e.detail || [], o = (e = "", []);
                (a = 0 == a.length ? [ {
                    name: "全国",
                    id: null
                } ] : a).forEach(function(e, t) {
                    o.push(e.name);
                }), e = o.join(","), S.globalData.selectCityArray = a, this.setData({
                    showCitySelectFlag: !1,
                    selectCityArray: a,
                    selectCityName: e
                }), 0 == this.data.tabIndex ? this.setData({
                    pageIndex: 1,
                    hasMore: !0,
                    isLoadMorePost: !1,
                    showMoreButton: !1
                }, function() {
                    t.getPostList(2);
                }) : 3 == this.data.tabIndex && this.setData({
                    pageIndex2: 1,
                    hasMore2: !0
                }, function() {
                    t.getRecommendEntList(2);
                });
            },
            closeCitySelect: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭切换城市弹窗"
                }), this.setData({
                    showCitySelectFlag: !1
                });
            },
            getRecommendEntList: function(e, t) {
                var a = this, o = this;
                if (!this.data.hasMore2) return !1;
                var n, i, s, c, g = {
                    page: this.data.pageIndex2,
                    locationIds: this.data.cityId
                };
                (2 == e || 0 < this.data.selectCityArray.length) && "全国" != this.data.selectCityArray[0].name && (i = [], 
                "", c = [], this.data.selectCityArray.forEach(function(e, t) {
                    (e.id == e.parentId && 11e4 != e.id && 12e4 != e.id && 5e5 != e.id && 31e4 != e.id ? c : i).push(e.id);
                }), n = i.join(","), s = c.join(","), g.tempLocations = n, g.tempLocationProvinces = s), 
                r.a.xyb_request("post/GetRecommendEntList.action", "POST", g, !1, !1).then(function(a) {
                    e && o.setData({
                        comList: []
                    });
                    var n, i, s = o.data.comList;
                    a.data && (n = a.data.list || [], i = [], n.forEach(function(e) {
                        s.push(e), i.push(e.id);
                    }), 0 < i.length && (i = i.join(","), u.a.commonDataStatistics("expose", "pages/find/index/index", "", "", "", i, "岗位"))), 
                    o.setData({
                        maxPage2: a.data && a.data.maxPage ? a.data.maxPage : "",
                        comList: s,
                        firstLoading: !1
                    }), a.data && 0 < a.data.maxPage ? (console.log("hasMore2", o.data.pageIndex2), 
                    o.setData({
                        hasMore2: a.data.maxPage != o.data.pageIndex2
                    })) : (console.log("hasMoreFlase"), o.setData({
                        hasMore2: !1
                    })), t && t(a);
                }, function(e) {
                    e && "205" == e.code && (a.setData({
                        pageIndex2: 1,
                        maxPage2: "",
                        hasMore2: !0
                    }), a.getRecommendEntList(1));
                });
            },
            toActiveDetail: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "点击学籍未认证提示"
                }), i.a.navigateTo({
                    url: "/secondBag/pages/mine/schoolcensus/index/index"
                });
            },
            getCityList: function() {
                var e = this;
                r.a.xyb_request("government/GovernmentNew!list.action", "POST", {}, !1, !1).then(function(t) {
                    e.setData({
                        cityList: t.data.list || []
                    });
                }, function(e) {});
            },
            closeEvent: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "关闭完善简历"
                });
                var e = new Date().getTime();
                i.a.setStorageSync("closeInCompleteResume", e), this.setData({
                    notCompleteResume: !1
                });
            },
            toCompleteResume: function() {
                var e;
                this.data.isLogin ? (this.data.resumeIsComplete ? i.a.eventCenter.trigger("taroClick", {
                    funName: "点击简历tab已完善"
                }) : i.a.eventCenter.trigger("taroClick", {
                    funName: "点击简历tab未完善"
                }), e = this.data.resumeIsComplete ? "1" : "0", i.a.navigateTo({
                    url: "/thirdBag/pages/myresume/index/index?homeType=" + e
                })) : this.setData({
                    showlogin: !0
                });
            },
            revisionTipsClickEvent: function(e) {
                e = e.currentTarget.dataset.item, i.a.eventCenter.trigger("taroClick", {
                    funName: "改版提示_" + e
                }), i.a.setStorageSync("closeRevisionTips", "true"), this.setData({
                    revisionTipsFlag: !1
                }), S.globalData.isLogin && this.getPushData();
            },
            toDeliverDetails: function() {
                i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转投递简历详情"
                }), i.a.navigateTo({
                    url: "/ninthBag/pages/deliverInviteDetails/deliverInviteDetails?postList=" + JSON.stringify(this.data.postIdList)
                });
            },
            goPersonJob: function() {
                S.globalData.isLogin ? (i.a.eventCenter.trigger("taroClick", {
                    funName: "跳转本校推荐"
                }), i.a.navigateTo({
                    url: "/ninthBag/pages/schoolRecomm/schoolRecomm"
                })) : this.setData({
                    showlogin: !0
                });
            },
            applyPostRemind: function() {
                var e = this;
                r.a.xyb_request("post/CollectPost!applyPostRemind.action", "POST", {}, !1, !1).then(function(t) {
                    e.setData({
                        applyPostRemindTip: t.data.isShow,
                        applyPostRemindCount: t.data.count
                    });
                }, function(t) {
                    e.setData({
                        applyPostRemindTip: !1,
                        applyPostRemindCount: 0
                    });
                });
            },
            getBriefingSessionList: function() {
                var e = this;
                r.a.xyb_request("careertalk/LoadCareerTalkList!getTopList.action", "POST", {}, !1, !1).then(function(t) {
                    "200" === t.code && (e.setData({
                        briefingSessionList: t.data || []
                    }), (!t.data || t.data && 0 === t.data.length) && e.getDoubleChoiceSessionList());
                });
            },
            getDoubleChoiceSessionList: function() {
                var e = this;
                r.a.xyb_request("doublechoice/DoubleChoiceList!getTopList.action", "POST", {}, !1, !1).then(function(t) {
                    "200" === t.code && e.setData({
                        doubleChoiceSession: t.data
                    });
                });
            },
            downLottieData: function(e) {
                return new Promise(function(t, a) {
                    wx.request({
                        url: e,
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(e) {
                            t(e.data);
                        }
                    });
                });
            },
            initNotCompleteAnimation: function() {
                var e = this;
                this.setData({
                    showCanvas: !1
                }, function() {
                    e.setData({
                        showCanvas: !0
                    }), setTimeout(function() {
                        e.downLottieData("https://xcxresources.xybsyw.com/lottieData/weiwanshan.js").then(function(t) {
                            i.a.createSelectorQuery().selectAll("#lottieAnimate").node(function(a) {
                                var o = a[0] && a[0].node ? a[0].node : "";
                                o && (a = o.getContext("2d"), o.width = 300, o.height = 300, p.a.setup(o), e.ani = p.a.loadAnimation({
                                    loop: !0,
                                    autoplay: !0,
                                    animationData: t,
                                    rendererSettings: {
                                        context: a
                                    }
                                }), e.inited = !0);
                            }).exec();
                        });
                    }, 500);
                });
            },
            setTopBar: function(e, t) {
                e && i.a.pageScrollTo({
                    scrollTop: 0,
                    duration: 300
                }), this.setData({
                    showTopBar: e,
                    topBarAnimate: t
                }, function() {});
            },
            showIntention: function(e) {
                this.data.isLogin ? this.setData({
                    intentionFlag: !0,
                    intentionId: e.id
                }) : this.setData({
                    showlogin: !0
                });
            },
            selectIntention: function(e) {
                var t, a, o = this, n = [], s = [];
                this.data.selectCityArray.forEach(function(e, t) {
                    (e.id == e.parentId && 11e4 != e.id && 12e4 != e.id && 5e5 != e.id && 31e4 != e.id ? n : s).push(e.id);
                }), t = s.join(","), a = n.join(","), r.a.xyb_request("post/RefusePost.action", "POST", {
                    type: e,
                    postId: this.data.intentionId,
                    locationIds: this.data.cityId,
                    tempLocations: t,
                    tempLocationProvinces: a
                }, !1, !1).then(function(e) {
                    "200" === e.code && (i.a.showToast({
                        title: "感谢反馈",
                        icon: "none"
                    }), o.setData({
                        intentionFlag: !1
                    }), o.getPostList(1));
                });
            },
            changeIntentionTab: function(e) {
                var t = this;
                this.setData({
                    intentionStatus: e,
                    hasMore: !0,
                    pageIndex: 1,
                    isLoadMorePost: !1,
                    showMoreButton: !1
                }, function() {
                    t.getPostList(1), t.data.showDropMenu && i.a.pageScrollTo({
                        scrollTop: t.data.topBarHeight,
                        duration: 500
                    });
                });
            },
            confirmUserAgreement: function() {
                this.setData({
                    userAgreementFlag: !1
                }), i.a.setStorageSync("confirmUserAgreement", !0), this.getLocationFun(), i.a.getStorageSync("currentCityInfo").country || new y.AMapWX({
                    key: "c222383ff12d31b556c3ad6145bb95f4"
                }).getRegeo({
                    success: function(e) {
                        e = {
                            country: e[0].regeocodeData.addressComponent.country,
                            province: e[0].regeocodeData.addressComponent.province,
                            city: e[0].regeocodeData.addressComponent.city
                        }, i.a.setStorageSync("currentCityInfo", e);
                    },
                    fail: function(e) {
                        console.log("获取定位失败");
                    }
                });
            },
            onClickShowMore: function() {
                var e = this;
                this.setData({
                    isLoadMorePost: !0,
                    showMoreButton: !1,
                    pageIndex: 1,
                    hasMore: !0
                }, function() {
                    e.getPostList();
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
        }(b, i.a.Component), s(b, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, a, o) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, a, o) : void 0;
                })(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var e = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var t = this.$prefix, a = Object(n.genCompid)(t + "$compid__1134"), o = (Ee = d(a, 2))[0], i = Ee[1], s = Object(n.genCompid)(t + "$compid__1135"), r = (Ue = d(s, 2))[0], c = Ue[1], u = Object(n.genCompid)(t + "$compid__1136"), g = (Re = d(u, 2))[0], p = Re[1], h = Object(n.genCompid)(t + "$compid__1137"), m = (qe = d(h, 2))[0], f = qe[1], y = Object(n.genCompid)(t + "$compid__1138"), S = ($e = d(y, 2))[0], v = $e[1], b = Object(n.genCompid)(t + "$compid__1139"), T = (Je = d(b, 2))[0], D = Je[1], L = Object(n.genCompid)(t + "$compid__1140"), x = (He = d(L, 2))[0], C = He[1], P = Object(n.genCompid)(t + "$compid__1141"), w = (Xe = d(P, 2))[0], j = Xe[1], I = Object(n.genCompid)(t + "$compid__1142"), k = d(I, 2), F = k[0], _ = k[1], B = Object(n.genCompid)(t + "$compid__1143"), A = d(B, 2), N = A[0], O = A[1], M = Object(n.genCompid)(t + "$compid__1144"), E = d(M, 2), U = E[0], R = E[1], q = this.data, $ = q.applyPostRemindTip, J = q.applyPostRemindCount, H = q.showPreachMeeting, X = q.statusHeight, z = q.bannerPopFlag, Y = q.bannerPopImgUrl, G = q.menuW, W = (q.ifIphoneX, 
                q.currentSwiper), Q = q.bannerList, K = q.careerSchoolNum, V = q.doubleSchoolNum, Z = q.autoSign, ee = q.autoPopActivate, te = q.xjhSharePopup, ae = q.xjhShare, oe = q.shareFail, ne = q.xjhShareFailTitle, ie = q.shareFailText, se = q.xjhShareBtn, re = q.xjhPopup, ce = q.xjhLieType, ue = q.xjhLieTyp, ge = q.showlogin, le = q.isForbiddenLogin, pe = q.bookingSxhForm, de = q.hasLikeXYB, he = q.fromStudentAppFlag, me = q.xybOfficialAccountsPopupFlag, fe = q.jobStatusPopupFlag, ye = q.jobStatusType, Se = q.activateFlag, ve = (q.getActivateState, 
                q.tabList), be = q.tabIndex, Te = q.tabLineLeft, De = q.isLogin, Le = q.jobObjectiveStr, xe = q.postList, Ce = q.hasMore, Pe = q.maxPage, we = q.showCitySelectFlag, je = q.selectCityName, Ie = q.selectCityArray, ke = q.comList, Fe = q.maxPage2, _e = q.hasMore2, Be = (q.sxCityComLogoList, 
                q.hzCityComLogoList, q.notCompleteResume, q.resumeOptimization, q.revisionTipsFlag), Ae = q.revisionTipsFlag1, Ne = q.revisionTipTop2, Oe = q.noDealNum, Me = q.showChatFlag, Ee = (a = q.showEpidemicFlag, 
                q.closeEpidemicFlag), Ue = (s = q.briefingSessionList, q.doubleChoiceSession), Re = (u = q.resumeCompleteProcess, 
                q.resumeIsComplete), qe = (h = q.jobHuntShowType, q.showTopBar), $e = (y = q.topBarAnimate, 
                q.intentionFlag), Je = (b = q.intentionStatus, q.showDropMenu), He = (L = q.showCanvas, 
                q.userAgreementFlag), Xe = (P = q.isLoadMorePost, q.showMoreButton);
                return this.anonymousFunc0 = function(t) {
                    t.stopPropagation(), e.closeLikeXYB(t);
                }, I = l()("top-bar", qe ? y ? "top-bar-show" : "" : y ? "top-bar-hide-animate" : "top-bar-hide"), 
                this.anonymousFunc1 = function(t) {
                    t.stopPropagation(), e.closeEpidemic(t);
                }, this.anonymousFunc2 = function() {
                    return e.setTopBar(!0, !1);
                }, k = 0 == be && De && Le ? l()("intention-item", "cut_text", 0 === b && "intention-item-active") : null, 
                this.anonymousFunc3 = function() {
                    return e.changeIntentionTab(0);
                }, B = 0 == be && De && Le ? l()("intention-item", 1 === b && "intention-item-active") : null, 
                this.anonymousFunc4 = function() {
                    return e.changeIntentionTab(1);
                }, A = Me ? function(t) {
                    return e.toposDetail(t);
                } : null, t = Me ? function(t) {
                    return e.binderrorimg(t);
                } : null, this.anonymousFunc5 = function(t) {
                    return e.showIntention(t);
                }, this.anonymousFunc6 = function(t) {
                    return e.toJobobjective(t);
                }, this.anonymousFunc7 = function() {
                    return e.selectCityEvent();
                }, this.anonymousFunc8 = function() {
                    return e.onClickShowMore();
                }, M = 1 === be ? function() {
                    return e.changeShowlogin();
                } : null, E = 2 === be ? function() {
                    return e.changeShowlogin();
                } : null, q = function(t) {
                    return e.toComDetail(t);
                }, qe = function(t) {
                    return e.binderrorimg1(t);
                }, y = function() {
                    return e.changeShowlogin();
                }, this.anonymousFunc9 = function() {
                    return e.selectCityEvent();
                }, this.anonymousFunc10 = function(t) {
                    t.stopPropagation(), e.closeBannerPop(t);
                }, this.anonymousFunc11 = function() {
                    e.setData({
                        intentionFlag: !1
                    });
                }, Me && n.propsManager.set({
                    postList: xe,
                    briefingSessionList: s,
                    doubleChoiceSession: Ue,
                    hasMore: Ce,
                    maxPage: Pe,
                    intentionStatus: b,
                    isLoadMorePost: P,
                    showMoreButton: Xe,
                    toposDetail: A,
                    binderrorimg: t,
                    onClickCross: this.anonymousFunc5,
                    onEditJobobjective: this.anonymousFunc6,
                    onSelectCity: this.anonymousFunc7,
                    onClickShowMore: this.anonymousFunc8
                }, i, o), 1 === be && n.propsManager.set({
                    showLogin: M
                }, c, r), 2 === be && n.propsManager.set({
                    showLogin: E
                }, p, g), n.propsManager.set({
                    comList: ke,
                    maxPage2: Fe,
                    hasMore2: _e,
                    toComDetail: q,
                    binderrorimg1: qe,
                    showLogin: y,
                    onSelectCity: this.anonymousFunc9
                }, f, m), n.propsManager.set({
                    onReceive: this.receiveClose,
                    onReceiveLogin: this.receiveLogin,
                    source: "index",
                    showLogin: ge,
                    onCloseLogin: this.closeLoginClick
                }, v, S), n.propsManager.set({
                    barFlag: 1
                }, D, T), n.propsManager.set({
                    isForbiddenLogin: le
                }, C, x), n.propsManager.set({
                    isShow: fe,
                    jobStatusType: ye,
                    onClose: this.closeJobStatusPopup
                }, j, w), n.propsManager.set({
                    title: "选择城市",
                    onReceive: this.receiveCitySelect,
                    isShow: we,
                    cityArray: Ie,
                    onClose: this.closeCitySelect
                }, _, F), n.propsManager.set({
                    show: $e,
                    onSelect: this.selectIntention.bind(this),
                    onClose: this.anonymousFunc11
                }, O, N), n.propsManager.set({
                    show: He,
                    onConfirm: this.confirmUserAgreement.bind(this)
                }, R, U), this.$$refs.pushRefs([ {
                    type: "component",
                    id: "fedzz",
                    refName: "BriefingSession",
                    fn: null
                }, {
                    type: "component",
                    id: "feezz",
                    refName: "DoubleChoice",
                    fn: null
                }, {
                    type: "component",
                    id: "fefzz",
                    refName: "SchoolRecomm",
                    fn: null
                } ]), Object.assign(this.__state, {
                    anonymousState__temp: I,
                    anonymousState__temp2: k,
                    anonymousState__temp3: B,
                    anonymousState__temp4: A,
                    anonymousState__temp5: t,
                    anonymousState__temp6: M,
                    anonymousState__temp7: E,
                    anonymousState__temp8: q,
                    anonymousState__temp9: qe,
                    anonymousState__temp10: y,
                    $compid__1134: i,
                    $compid__1135: c,
                    $compid__1136: p,
                    $compid__1137: f,
                    $compid__1138: v,
                    $compid__1139: D,
                    $compid__1140: C,
                    $compid__1141: j,
                    $compid__1142: _,
                    $compid__1143: O,
                    $compid__1144: R,
                    hasLikeXYB: de,
                    fromStudentAppFlag: he,
                    xybOfficialAccountsPopupFlag: me,
                    jobStatusPopupFlag: fe,
                    showlogin: ge,
                    revisionTipsFlag: Be,
                    revisionTipsFlag1: Ae,
                    userAgreementFlag: He,
                    statusHeight: X,
                    isLogin: De,
                    bannerPopFlag: z,
                    showCanvas: L,
                    resumeIsComplete: Re,
                    menuW: G,
                    tabIndex: be,
                    showEpidemicFlag: a,
                    closeEpidemicFlag: Ee,
                    bannerList: Q,
                    currentSwiper: W,
                    showDropMenu: Je,
                    tabList: ve,
                    showPreachMeeting: H,
                    activateFlag: Se,
                    careerSchoolNum: K,
                    doubleSchoolNum: V,
                    tabLineLeft: Te,
                    jobObjectiveStr: Le,
                    jobHuntShowType: h,
                    applyPostRemindTip: $,
                    noDealNum: Oe,
                    showChatFlag: Me,
                    autoSign: Z,
                    bannerPopImgUrl: Y,
                    autoPopActivate: ee,
                    xjhSharePopup: te,
                    xjhShare: ae,
                    shareFail: oe,
                    xjhPopup: re,
                    xjhLieType: ce,
                    xjhLieTyp: ue,
                    bookingSxhForm: pe,
                    revisionTipTop2: Ne,
                    resumeCompleteProcess: u,
                    selectCityName: je,
                    applyPostRemindCount: J,
                    xjhShareFailTitle: ne,
                    shareFailText: ie,
                    xjhShareBtn: se
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
            value: function(e) {}
        }, {
            key: "anonymousFunc3",
            value: function(e) {}
        }, {
            key: "anonymousFunc4",
            value: function(e) {}
        }, {
            key: "anonymousFunc5",
            value: function(e) {}
        }, {
            key: "anonymousFunc6",
            value: function(e) {}
        }, {
            key: "anonymousFunc7",
            value: function(e) {}
        }, {
            key: "anonymousFunc8",
            value: function(e) {}
        }, {
            key: "anonymousFunc9",
            value: function(e) {}
        }, {
            key: "anonymousFunc10",
            value: function(e) {
                e.stopPropagation();
            }
        }, {
            key: "anonymousFunc11",
            value: function(e) {}
        } ]), s = a = b, a.$$events = [ "anonymousFunc0", "toCompleteResume", "gotoSearch", "toSaoYiSao", "anonymousFunc1", "goToDetail", "swiperChange", "toBannerDetail", "anonymousFunc2", "changeTab", "anonymousFunc3", "anonymousFunc4", "toJobobjective", "selectCityEvent", "toFavorites", "toDeliverDetails", "onClose", "goPageDetails", "anonymousFunc10", "gotoActive", "closePop", "closeXJH", "shareXjhClick", "bookingSxhEvent", "revisionTipsClickEvent" ], 
        a.$$componentPath = "pages/find/index/index", a = s)) || a;
        function b() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, b);
            for (var a = arguments.length, o = Array(a), n = 0; n < a; n++) o[n] = arguments[n];
            return (e = t = m(this, (e = b.__proto__ || Object.getPrototypeOf(b)).call.apply(e, [ this ].concat(o)))).$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp10", "$compid__1134", "$compid__1135", "$compid__1136", "$compid__1137", "$compid__1138", "$compid__1139", "$compid__1140", "$compid__1141", "$compid__1142", "$compid__1143", "$compid__1144", "hasLikeXYB", "fromStudentAppFlag", "xybOfficialAccountsPopupFlag", "jobStatusPopupFlag", "showlogin", "revisionTipsFlag", "revisionTipsFlag1", "userAgreementFlag", "statusHeight", "isLogin", "bannerPopFlag", "showCanvas", "resumeIsComplete", "menuW", "tabIndex", "showEpidemicFlag", "closeEpidemicFlag", "bannerList", "currentSwiper", "showDropMenu", "tabList", "showPreachMeeting", "activateFlag", "careerSchoolNum", "doubleSchoolNum", "tabLineLeft", "jobObjectiveStr", "jobHuntShowType", "applyPostRemindTip", "noDealNum", "showChatFlag", "autoSign", "bannerPopImgUrl", "autoPopActivate", "xjhSharePopup", "xjhShare", "shareFail", "xjhPopup", "xjhLieType", "xjhLieTyp", "bookingSxhForm", "revisionTipTop2", "resumeCompleteProcess", "selectCityName", "applyPostRemindCount", "xjhShareFailTitle", "shareFailText", "xjhShareBtn" ], 
            t.config = {
                navigationBarTitleText: "校友邦",
                navigationBarBackgroundColor: "#FF453A",
                navigationStyle: "custom",
                enablePullDownRefresh: !1,
                navigationBarTextStyle: "black",
                usingComponents: {
                    "van-tabs": "../../../vant-weapp/dist/tabs/index",
                    "van-tab": "../../../vant-weapp/dist/tab/index",
                    "van-icon": "../../../vant-weapp/dist/icon/index",
                    "van-button": "../../../vant-weapp/dist/button/index",
                    "van-popup": "../../../vant-weapp/dist/popup/index"
                }
            }, t.customComponents = [ "HomepageGuide", "PostCardList", "BriefingSession", "DoubleChoice", "IntoEnterprise", "SchoolRecomm", "Fastlogin", "BottomTabbar", "Forbiddenlogin", "JobStatusPopup", "CitySelect", "IntentionPopup", "UserAgreementDialog" ], 
            m(t, e);
        }
        a = s, Component(o(0).default.createComponent(s, !0));
    },
    309: function(e, t, a) {
        e.exports = a.p + "pages/find/index/index.wxml";
    },
    965: function(e, t, a) {
        a(309);
    },
    966: function(e, t, a) {}
}, [ [ 1568, 0, 1, 2 ] ] ]);