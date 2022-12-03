var t = require("../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 299 ], {
    1301: function(t, e, a) {
        a(439);
    },
    1302: function(t, e, a) {},
    1695: function(e, a, n) {
        n.r(a), n(1301);
        var o = n(0), r = n.n(o), i = n(2), l = (a = n.n(i), n(17)), s = n(1), c = (n(1302), 
        function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var a = [], n = !0, o = !1, r = void 0;
                try {
                    for (var i, l = t[Symbol.iterator](); !(n = (i = l.next()).done) && (a.push(i.value), 
                    !e || a.length !== e); n = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    o = !0, r = t;
                } finally {
                    try {
                        !n && l.return && l.return();
                    } finally {
                        if (o) throw r;
                    }
                }
                return a;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        });
        i = function(t, e, a) {
            return e && u(t.prototype, e), a && u(t, a), t;
        };
        function u(t, e) {
            for (var a = 0; a < e.length; a++) {
                var n = e[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function g(e, a) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != t(a) && "function" != typeof a ? e : a;
        }
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var a = arguments.length, n = Array(a), o = 0; o < a; o++) n[o] = arguments[o];
            return (t = e = g(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(n)))).$usedState = [ "loopArray638", "$compid__912", "noData", "planList", "havePost" ], 
            e.config = {
                navigationBarTitleText: "报名",
                usingComponents: {
                    "van-popup": "../../../../vant-weapp/dist/popup/index"
                }
            }, e.customComponents = [ "OfficialAccountsPopup" ], g(e, t);
        }
        r.a.getApp(), i = a()({
            data: {
                followXcx: !1,
                showEnrollStorage: !1,
                noData: !1,
                planList: [],
                maxPage: "",
                pageIndex: 1,
                havePost: !1,
                schoolTalkList: [],
                isAddWxFlag: !1,
                sphereInfo: {
                    status: !1
                }
            },
            onLoad: function(t) {
                var e = this;
                e.setData({
                    noData: !1,
                    planList: [],
                    maxPage: "",
                    pageIndex: 1,
                    havePost: !1
                }, function() {
                    e.loadSchoolPostList();
                });
            },
            getSchoolTalkList: function() {
                var t = this;
                s.a.xyb_request("student/practiceplan/loadSchoolTalks.action", "POST", {}, !0, !1).then(function(e) {
                    console.log(e.data), t.setData({
                        schoolTalkList: e.data
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            getPlanList: function() {
                var t = this;
                s.a.xyb_request("student/practiceplan/PracticePlanList.action", "POST", {
                    page: this.data.pageIndex
                }, !0, !0).then(function(e) {
                    var a = t.data.noData, n = (a = !(e.data && 0 < e.data.total), t.data.planList);
                    e.data && ((e.data.list || []).forEach(function(t) {
                        n.push(t);
                    }), t.setData({
                        maxPage: e.data.maxPage
                    })), t.setData({
                        planList: n,
                        noData: a
                    });
                }, function(t) {
                    console.log(t);
                });
            },
            jumpDetail: function(t) {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "跳转实习计划详情"
                });
                var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.independent, n = t.currentTarget.dataset.attention, o = t.currentTarget.dataset.double;
                t = t.currentTarget.dataset.planname;
                r.a.navigateTo({
                    url: "/growUp/pages/enroll/enrollitem/index/index?id=" + e + "&independent=" + a + "&attention=" + n + "&double=" + o + "&planname=" + t
                });
            },
            jumpTips: function() {
                r.a.showToast({
                    title: "已超出岗位申请时间，不可报名",
                    icon: "none"
                });
            },
            jump: function(t) {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "跳转岗位编辑页面"
                });
                var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.status, n = t.currentTarget.dataset.independent, o = t.currentTarget.dataset.attention, i = t.currentTarget.dataset.double, l = t.currentTarget.dataset.planname, s = t.currentTarget.dataset.project, c = t.currentTarget.dataset.audit ? 1 : 2;
                console.log(n), 1 == n && 1 == a ? r.a.navigateTo({
                    url: "/growUp/pages/enroll/enrollitem/addjob/addjob?projectid=" + s.indProjectList[0].projectId + "&showPosts=1&hasAudit=" + c
                }) : r.a.navigateTo({
                    url: "/growUp/pages/enroll/enrollitem/index/index?id=" + e + "&independent=" + n + "&attention=" + o + "&double=" + i + "&planname=" + l
                });
            },
            isAddWx: function() {
                var t = this, e = r.a.getStorageSync("unionid");
                if (!e) return !1;
                s.a.xyb_request("sphere/sphereInfo.action", "POST", {
                    unionId: e,
                    sphereCode: "APPLY_COMPLETE"
                }, !0, !1).then(function(e) {
                    "200" == e.code && (e.data.status && r.a.eventCenter.trigger("taroClick", {
                        funName: "私域入口埋点",
                        itemId: e.data.groupId,
                        itemTypeName: "APPLY_COMPLETE"
                    }), t.setData({
                        isAddWxFlag: e.data.status,
                        sphereInfo: e.data
                    }));
                }, function(t) {});
            },
            getSubscrib: function() {
                var t = this, e = this;
                s.a.xyb_request("account/LoadAccountInfo!getSubscribe.action", "POST", {}, !0, !1).then(function(a) {
                    var n = wx.getStorageSync("showEnrollStorage") || null, o = wx.getStorageSync("applyStorage") || null;
                    console.log("showEnrollStorage", n), console.log("applyStorage", o), console.log("---------", a.data), 
                    a.data ? o && e.data.isAddWxFlag && (r.a.eventCenter.trigger("taroClick", {
                        funName: "跳转到私域二维码页面"
                    }), r.a.navigateTo({
                        url: "/thirdBag/pages/privateSphereOfficialAccounts/privateSphereOfficialAccounts?groupId=" + t.data.sphereInfo.groupId + "&sphereCode=APPLY_COMPLETE"
                    }), r.a.removeStorageSync("showEnrollStorage"), wx.removeStorageSync("applyStorage")) : t.setData({
                        followXcx: a.data,
                        showEnrollStorage: n
                    }, function() {
                        console.log("applyStorage", o), console.log("showEnrollStorage", n), o && !n && e.data.isAddWxFlag && (r.a.eventCenter.trigger("taroClick", {
                            funName: "跳转到私域二维码页面"
                        }), r.a.navigateTo({
                            url: "/thirdBag/pages/privateSphereOfficialAccounts/privateSphereOfficialAccounts?groupId=" + t.data.sphereInfo.groupId + "&sphereCode=APPLY_COMPLETE"
                        }), r.a.removeStorageSync("showEnrollStorage"), wx.removeStorageSync("applyStorage"));
                    });
                }, function(t) {});
            },
            closeSend: function() {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "报名审核结果-关闭"
                }), r.a.removeStorageSync("showEnrollStorage"), this.setData({
                    showEnrollStorage: !1
                }), r.a.getStorageSync("applyStorage") || !this.data.isAddWxFlag || (r.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到私域二维码页面"
                }), r.a.navigateTo({
                    url: "/thirdBag/pages/privateSphereAccreditation/privateSphereAccreditation?groupId=" + this.data.sphereInfo.groupId + "&sphereCode=APPLY_COMPLETE&stepName=报名成功"
                }));
            },
            attentionClick: function() {
                r.a.removeStorageSync("showEnrollStorage"), r.a.eventCenter.trigger("taroClick", {
                    funName: "报名审核结果-查看"
                });
                var t = {
                    title: "校友邦",
                    url: encodeURIComponent("https://mp.weixin.qq.com/s/EiuMCyTaNmUlfuRglm_JHA")
                };
                r.a.navigateTo({
                    url: "/videoBag/pages/h5/h5?model=" + JSON.stringify(t)
                });
            },
            onReady: function() {},
            onShow: function() {
                this.isAddWx(), this.getSubscrib();
            },
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {
                var t = this.data.pageIndex + 1;
                this.data.maxPage >= t && (this.setData({
                    pageIndex: t
                }), this.getPlanList());
            },
            onShareAppMessage: function() {},
            loadSchoolPostList: function() {
                var t = this;
                s.a.xyb_request("post/GetPersonalList.action", "POST", {
                    page: 1
                }, !1, !1).then(function(e) {
                    e && e.data && e.data && e.data.list && e.data.list.length && t.setData({
                        havePost: !0
                    }), t.getPlanList();
                }, function(e) {
                    t.getPlanList();
                });
            },
            jumpZW: function() {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "本校推荐职位"
                }), r.a.navigateTo({
                    url: "/ninthBag/pages/schoolRecomm/schoolRecomm"
                });
            },
            humpTalkDetails: function(t) {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "跳转双选会详情"
                }), t = t.currentTarget.dataset.id, r.a.navigateTo({
                    url: "/videoBag/pages/doubleSelectList/doubleSelectList?id=" + t
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
        }(p, r.a.Component), i(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, a, n) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, a);
                    return void 0 !== o ? "value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, a, n) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var t = this.$prefix, e = Object(o.genCompid)(t + "$compid__912"), a = (s = c(e, 2))[0], n = s[1], r = (u = this.data).noData, i = u.havePost, s = (t = u.planList, 
                e = u.showEnrollStorage, u.followXcx), u = r ? [] : t.map(function(t, e) {
                    return {
                        $loopState__temp10: 3 != (t = {
                            $original: Object(o.internal_get_original)(t)
                        }).$original.signStatus ? l.a.applyStatus(t.$original.signStatus) : null,
                        $anonymousCallee__113: 0 < t.$original.indProjectList.length ? t.$original.indProjectList.map(function(e, a) {
                            return e = {
                                $original: Object(o.internal_get_original)(e)
                            }, {
                                $loopState__temp2: 0 < t.$original.indProjectList.length ? "color:" + l.a.colorToFix(t.$original.joinStatus) : null,
                                $original: e.$original
                            };
                        }) : [],
                        $anonymousCallee__115: 0 < t.$original.centerProjectList.length ? t.$original.centerProjectList.map(function(e, a) {
                            return {
                                $loopState__temp4: 1 == (e = {
                                    $original: Object(o.internal_get_original)(e)
                                }).$original.dateList.length ? "color:" + l.a.colorToFix(e.$original.dateList[0].joinStatus) : null,
                                $anonymousCallee__114: 0 < t.$original.centerProjectList.length ? e.$original.dateList.map(function(t, a) {
                                    return t = {
                                        $original: Object(o.internal_get_original)(t)
                                    }, {
                                        $loopState__temp6: 1 < e.$original.dateList.length ? "color:" + l.a.colorToFix(t.$original.joinStatus) : null,
                                        $original: t.$original
                                    };
                                }) : [],
                                $original: e.$original
                            };
                        }) : [],
                        $anonymousCallee__117: 0 < t.$original.doubleProjectList.length ? t.$original.doubleProjectList.map(function(e, a) {
                            return e = {
                                $original: Object(o.internal_get_original)(e)
                            }, {
                                $loopState__temp8: 0 < t.$original.doubleProjectList.length ? "color:" + l.a.colorToFix(e.$original.joinStatus) : null,
                                $original: e.$original
                            };
                        }) : [],
                        $original: t.$original
                    };
                });
                return o.propsManager.set({
                    show: e && !s,
                    describe: "报名审核结果",
                    openText: "审核结果",
                    onJump: this.attentionClick.bind(this),
                    onClose: this.closeSend.bind(this)
                }, n, a), Object.assign(this.__state, {
                    loopArray638: u,
                    $compid__912: n,
                    noData: r,
                    planList: t,
                    havePost: i
                }), this.__state;
            }
        } ]), i = a = p, a.$$events = [ "jumpDetail", "jumpZW", "jumpTips", "jump", "humpTalkDetails" ], 
        a.options = {
            addGlobalClass: !0
        }, a.$$componentPath = "pages/growup/components/enrolllist/enrolllist", a = i)) || a, 
        a = i, Component(n(0).default.createComponent(i));
    },
    439: function(t, e, a) {
        t.exports = a.p + "pages/growup/components/enrolllist/enrolllist.wxml";
    }
}, [ [ 1695, 0, 1, 2 ] ] ]);