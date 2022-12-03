var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 12 ], {
    1303: function(t, e, a) {
        a(440);
    },
    1304: function(t, e, a) {},
    1696: function(e, a, o) {
        o.r(a), o(1303);
        var n = o(0), i = o.n(n), r = o(2), c = (a = o.n(r), o(1)), s = o(5), u = (o(1304), 
        "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
            return t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
        }), p = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var a = [], o = !0, n = !1, i = void 0;
                try {
                    for (var r, c = t[Symbol.iterator](); !(o = (r = c.next()).done) && (a.push(r.value), 
                    !e || a.length !== e); o = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    n = !0, i = t;
                } finally {
                    try {
                        !o && c.return && c.return();
                    } finally {
                        if (n) throw i;
                    }
                }
                return a;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
        r = function(t, e, a) {
            return e && l(t.prototype, e), a && l(t, a), t;
        };
        function l(t, e) {
            for (var a = 0; a < e.length; a++) {
                var o = e[a];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var d = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var a, o = arguments[e];
                for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
            }
            return t;
        };
        function g(e, a) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != t(a) && "function" != typeof a ? e : a;
        }
        function h(t) {
            if (Array.isArray(t)) {
                for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
                return a;
            }
            return Array.from(t);
        }
        var m = i.a.getApp(), f = void 0;
        r = a()({
            options: {
                multipleSlots: !0,
                styleIsolation: "apply-shared"
            },
            properties: {
                isShow: {
                    type: Boolean,
                    value: !1,
                    observer: function(t, e, a) {
                        t && (this.setData({
                            eduPracticeTabType: 1,
                            showSearchType: !1,
                            showSearchMask: !1,
                            tipTextFlag: !1,
                            tipTextFlag2: !1,
                            tipTextFlag3: !1,
                            tipTextFlagId: "",
                            tabFixedTop: !1
                        }), this.loadInfo(), this.loadNewProject(), this.loadLaborCredit(), this.getList(1), 
                        this.loadLaborMode(), this.loadNewMessage(), i.a.setStorageSync("eduPracticeTabNumber", 2), 
                        i.a.setStorageSync("educationIndexProjectId", ""));
                    }
                },
                statusHeight: {
                    type: String,
                    value: ""
                },
                eduPracticeUpdate: {
                    type: Boolean,
                    value: !1,
                    observer: function(t, e, a) {
                        var o = i.a.getStorageSync("eduPracticeTabNumber");
                        i.a.getStorageSync("educationIndexProjectId"), o && (this.setData({
                            eduPracticeTabType: 2
                        }), this.loadNewProject(), this.loadLaborCredit(), this.loadLaborMode(), this.loadNewMessage(), 
                        this.getList(1));
                    }
                }
            },
            data: {
                showSearchType: !1,
                showSearchMask: !1,
                searchedType: "全部劳动",
                searchedId: "",
                selectList: [ {
                    name: "全部劳动",
                    id: ""
                } ],
                showSearchMask2: !1,
                projectIdSelected: "",
                projectArray: [],
                focus: !0,
                dynamicTop: "",
                dynamicWidth: "29%",
                creditNumber: "",
                maxCreditNumber: "",
                newProjectArray: "",
                newProjectFlag: !1,
                randomNumber: null,
                eduPracticeTabType: 2,
                ifIphoneX: !1,
                maxHeight: "",
                pageIndex: 1,
                hasMore: !0,
                maxPage: "",
                projectList: [],
                tipTextFlag: !1,
                tipTextFlag2: !1,
                tipTextFlag3: !1,
                tipTextFlagId: "",
                showAdviserFlag: !1,
                projectIdCurrent: "",
                tabFixedTop: !1,
                noData: !1,
                newMessageForm: {},
                projectApplicationApproved: !1,
                projectApplicationUnapproved: !1,
                periodFlag: !1,
                statusList: [ {
                    id: "",
                    name: "全部状态"
                }, {
                    id: 0,
                    name: "未开始"
                }, {
                    id: 1,
                    name: "进行中"
                }, {
                    id: 2,
                    name: "已结束"
                } ],
                status: {
                    id: "",
                    name: "全部状态"
                },
                showSearchMask3: !1
            },
            ready: function() {},
            attached: function() {},
            detached: function() {},
            loadInfo: function() {
                this.setData({
                    ifIphoneX: m.globalData.isIphoneX
                });
                var t = this;
                console.log("获取信息", m.globalData.isIphoneX), setTimeout(function() {
                    i.a.getSystemInfo({
                        success: function(e) {
                            var a = e && e.screenHeight ? e.screenHeight : 0;
                            e = t.data.ifIphoneX ? 73 : 50, e = a - t.data.statusHeight - e;
                            t.setData({
                                maxHeight: e
                            });
                        }
                    });
                }, 500);
            },
            methods: {
                changeTypeEvent: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践tab切换"
                    }), t = t.currentTarget.dataset.type, this.setData({
                        eduPracticeTabType: t
                    }), this.getList(1), i.a.setStorageSync("eduPracticeTabNumber", t);
                },
                loadNewProject: function() {
                    var t = this;
                    c.a.xyb_request("laboreducation/index/loadNewProject.action", "POST", {}, !1, !1).then(function(e) {
                        var a = e.data || [];
                        e = Math.floor(3 * Math.random());
                        t.setData({
                            newProjectArray: a,
                            newProjectFlag: 0 < a.length,
                            randomNumber: e
                        });
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                closeNewProjectEvent: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-关闭提示"
                    }), this.setData({
                        newProjectFlag: !1
                    }), this.readProjectFun();
                },
                toEducationProjectList: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-跳转劳育项目池"
                    }), this.setData({
                        newProjectFlag: !1
                    }), this.readProjectFun(1);
                },
                readProjectFun: function(t) {
                    c.a.xyb_request("laboreducation/index/loadNewProject!readProject.action", "POST", {
                        projectStr: this.data.newProjectArray.join(",")
                    }, !1, !1).then(function(e) {
                        1 == t && i.a.navigateTo({
                            url: "/ninthBag/education/educationProjectList/educationProjectList"
                        });
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                loadNewMessage: function() {
                    var t = this;
                    c.a.xyb_request("laboreducation/index/loadNewMessage.action", "POST", {}, !1, !1).then(function(e) {
                        e = e.data || [], t.setData({
                            newMessageForm: e[0]
                        }), t.data.newMessageForm && t.data.newMessageForm.status && t.setData({
                            projectApplicationApproved: 3 == t.data.newMessageForm.status,
                            projectApplicationUnapproved: 2 == t.data.newMessageForm.status
                        });
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                toEducationProjectEvent: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击报名按钮"
                    }), i.a.navigateTo({
                        url: "/ninthBag/education/educationProjectList/educationProjectList"
                    }), 1 == t.currentTarget.dataset.item && this.data.newProjectFlag && this.readProjectFun();
                },
                loadLaborCredit: function() {
                    var t = this;
                    c.a.xyb_request("laboreducation/index/loadLaborCredit.action", "POST", {}, !1, !1).then(function(e) {
                        var a = e.data, o = a.credit || 0, n = a.maxCreDit || 0;
                        e = (o / n).toFixed(2);
                        (e = Number(100 * e).toFixed(2)) < 29 && (e = 29), e += "%", t.setData({
                            maxCreditNumber: n,
                            periodFlag: a.openClassHour,
                            creditNumber: o
                        }), m.globalData.periodFlag = a.openClassHour;
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                loadLaborMode: function() {
                    var t = this;
                    c.a.xyb_request("laboreducation/common/loadLaborMode.action", "POST", {}, !1, !1).then(function(e) {
                        (e = e.data || []).unshift({
                            name: "全部劳动",
                            id: ""
                        }), t.setData({
                            selectList: e
                        });
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                touchStart: function(t) {
                    this.setData({
                        tipTextFlag: !1,
                        tipTextFlag2: !1,
                        tipTextFlag3: !1,
                        tipTextFlagId: ""
                    });
                },
                viewClickEvent: function() {
                    this.setData({
                        showSearchType: !1,
                        showSearchMask: !1,
                        showSearchMask3: !1
                    });
                },
                searchStatus: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击全部状态"
                    }), this.dynamicTopFun(), this.setData({
                        showTipsFlag: !1,
                        showSearchType: !1,
                        showSearchMask: !1,
                        showSearchMask2: !1,
                        showSearchMask3: !this.data.showSearchMask3
                    });
                },
                searchTypeEvent: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击左上角"
                    }), this.dynamicTopFun(), this.setData({
                        showTipsFlag: !1,
                        showSearchType: !this.data.showSearchType,
                        showSearchMask: !this.data.showSearchType,
                        showSearchMask2: !1,
                        showSearchMask3: !1,
                        projectIdSelected: "",
                        projectArray: []
                    });
                },
                dynamicTopFun: function() {
                    var t = this, e = i.a.createSelectorQuery();
                    (t.data.tabFixedTop ? e.in(this.$scope).select(".flex_box2").boundingClientRect(function(e) {
                        console.log("点击左上角searchTypeEvent", e), e && (e = (e.top || 0) + (e.height || 0), 
                        t.setData({
                            dynamicTop: e || 0
                        }));
                    }) : e.in(this.$scope).select(".flex_box").boundingClientRect(function(e) {
                        console.log("点击左上角searchTypeEvent", e), e && (e = (e.top || 0) + (e.height || 0), 
                        t.setData({
                            dynamicTop: e || 0
                        }));
                    })).exec();
                },
                changeSearchType: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击选项"
                    }), t = t.currentTarget.dataset.item, this.setData({
                        searchedType: t.name,
                        searchedId: t.id,
                        showSearchType: !1,
                        showSearchMask: !1,
                        inputValue: ""
                    }), this.getList(1);
                },
                onCloseSearch: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-关闭弹窗"
                    }), this.setData({
                        showSearchType: !1,
                        showSearchMask: !1
                    });
                },
                changeSearchType2: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击选项2"
                    }), t = t.currentTarget.dataset.item, this.setData({
                        inputValue: t.name,
                        projectIdSelected: t.id,
                        showSearchMask2: !1
                    }), this.getList(1);
                },
                onCloseSearch2: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-关闭弹窗2"
                    }), this.setData({
                        showSearchMask2: !1,
                        projectIdSelected: "",
                        projectArray: []
                    });
                },
                changeSearchType3: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击选项3"
                    }), t = t.currentTarget.dataset.item, this.setData({
                        status: t,
                        showSearchMask3: !1
                    }), this.getList(1);
                },
                onCloseSearch3: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-关闭弹窗3"
                    }), this.setData({
                        showSearchMask3: !1
                    });
                },
                clearInput: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-输入框清空"
                    }), this.setData({
                        inputValue: "",
                        projectIdSelected: "",
                        projectArray: [],
                        showClear: !1
                    }), this.getList(1);
                },
                keyInput: function(t) {
                    this.setData({
                        inputValue: t.detail.value,
                        showSearchType: !1,
                        projectIdSelected: ""
                    }), "" == t.detail.value ? this.setData({
                        showClear: !1
                    }) : (this.setData({
                        showClear: !0
                    }), this.loadSimpleProject());
                },
                clickSearch: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击键盘按钮"
                    }), this.setData({
                        showSearchType: !1,
                        showSearchMask: !1,
                        showSearchMask3: !1
                    }), this.data.inputValue ? this.loadSimpleProject() : (i.a.showToast({
                        title: "请输入关键字",
                        icon: "none"
                    }), this.setData({
                        showSearchMask2: !1,
                        projectArray: []
                    }));
                },
                loadSimpleProject: function() {
                    var t = this;
                    c.a.xyb_request("laboreducation/index/loadSimpleProject.action", "POST", {
                        laborFormId: this.data.searchedId,
                        name: this.data.inputValue
                    }, !1, !1).then(function(e) {
                        e = e.data || [], t.setData({
                            projectArray: e
                        }), e.length, t.dynamicTopFun(), t.setData({
                            showSearchMask2: !0
                        });
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                getList: function(t) {
                    var e = this, a = this;
                    1 == t && this.setData({
                        pageIndex: 1
                    });
                    var o = {
                        page: this.data.pageIndex,
                        pageSize: 10,
                        laborFormId: this.data.searchedId,
                        projectId: this.data.projectIdSelected,
                        projectStatus: this.data.status.id
                    };
                    c.a.xyb_request("laboreducation/index/loadMyProject.action", "POST", o, !1, !1).then(function(e) {
                        var o = 1 === t ? [] : a.data.projectList, n = e.data && e.data.list ? e.data.list : [];
                        o = [].concat(h(o), h(n));
                        a.setData({
                            projectList: o,
                            noData: 0 == o.length,
                            maxPage: e.data.maxPage,
                            hasMore: e.data.maxPage != a.data.pageIndex
                        });
                    }, function(t) {
                        e.setData({
                            projectList: [],
                            noData: !0
                        }), i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                upDateData: function(t, e) {
                    var a = this;
                    console.log("upDateData----", t, e);
                    var o = this;
                    t = {
                        page: 1,
                        pageSize: 10,
                        laborFormId: "",
                        projectId: e
                    };
                    e || (t = d({}, t)), c.a.xyb_request("laboreducation/index/loadMyProject.action", "POST", t, !1, !1).then(function(t) {
                        t = (t = t.data && t.data.list ? t.data.list : []) || [];
                        var a, n = o.data.projectList;
                        e ? 0 == t.length ? n.forEach(function(t, a) {
                            t.id == e && n.splice(a, 1);
                        }) : (a = t[0], n.forEach(function(t, o) {
                            t.id == e && n.splice(o, 1, a);
                        })) : n = t, o.setData({
                            projectList: n,
                            noData: 0 == n.length
                        }), o.getNewData();
                    }, function(t) {
                        a.setData({
                            projectList: [],
                            noData: !0
                        }), i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                getNewData: function() {
                    var t = this;
                    c.a.xyb_request("laboreducation/index/loadMyProject.action", "POST", {
                        page: 1,
                        pageSize: 10,
                        laborFormId: "",
                        projectId: ""
                    }, !1, !1).then(function(e) {
                        var a = e.data && e.data.list ? e.data.list : [];
                        t.setData({
                            noData: 0 == (a = a || []).length,
                            maxPage: e.data.maxPage,
                            hasMore: !(e.data.maxPage <= t.data.pageIndex)
                        });
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                closeApplicationApproved: function(t) {
                    console.log(t), t = t.currentTarget.dataset.item, this.loadNewMessageRead(t), i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-项目申请认定通过弹窗"
                    }), this.setData({
                        projectApplicationApproved: !1
                    });
                },
                closeApplicationUnapproved: function(t) {
                    t = t.currentTarget.dataset.item, this.loadNewMessageRead(t), i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-项目申请认定不通过弹窗"
                    }), this.setData({
                        projectApplicationUnapproved: !1
                    });
                },
                toProjectJoinDetails: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-跳转项目参与详情"
                    }), t = t.currentTarget.dataset.item, this.loadNewMessageRead(t.id), i.a.setStorageSync("educationIndexProjectId", t.id), 
                    i.a.navigateTo({
                        url: "/ninthBag/education/projectJoinDetails/projectJoinDetails?id=" + t.projectId
                    }), this.setData({
                        projectApplicationUnapproved: !1
                    });
                },
                loadNewMessageRead: function(t) {
                    var e = this;
                    c.a.xyb_request("laboreducation/index/loadNewMessage!readMsg.action", "POST", {
                        id: t
                    }, !1, !1).then(function(t) {
                        e.loadNewMessage();
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                scrollToLower: function() {
                    console.log("scrollToLower");
                    var t = this.data.pageIndex + 1;
                    this.data.hasMore && (this.setData({
                        pageIndex: t
                    }), this.getList());
                },
                toCreditList: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-跳转劳动教育实践学分明细"
                    }), i.a.navigateTo({
                        url: "/ninthBag/education/creditList/creditList"
                    });
                },
                tipTextEvent: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击显示提示信息"
                    }), this.setData({
                        tipTextFlag: !this.data.tipTextFlag
                    });
                },
                tipCloseEvent: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-关闭提示信息"
                    }), this.setData({
                        tipTextFlag: !1
                    });
                },
                tipTextEvent2: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击显示学分提示信息"
                    }), this.setData({
                        tipTextFlag2: !0,
                        tipTextFlagId: t.currentTarget.dataset.id
                    });
                },
                tipCloseEvent2: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-关闭学分提示信息"
                    }), this.setData({
                        tipTextFlag2: !1,
                        tipTextFlagId: ""
                    });
                },
                tipTextEvent3: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击显示学分提示信息3"
                    }), this.setData({
                        tipTextFlag3: !0,
                        tipTextFlagId: t.currentTarget.dataset.id
                    });
                },
                tipCloseEvent3: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-点击显示学分提示信息3"
                    }), this.setData({
                        tipTextFlag3: !1,
                        tipTextFlagId: ""
                    });
                },
                toScanQrCodes: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-扫码"
                    });
                    var t = this;
                    i.a.scanCode({
                        complete: function(e) {
                            var a, o;
                            console.log("toScanQrCodes返回数据", e), e && e.path ? (a = "/" + (a = (o = decodeURIComponent(e.path).replace("&amp;", "&")).split("?scene=a=")[0]), 
                            (o = o.split("?scene=a=")[1]) ? (i.a.navigateTo({
                                url: a + "?id=" + o
                            }), "/ninthBag/education/educationProjectDetails/educationProjectDetails" == a && i.a.setStorageSync("educationIndexProjectId", o)) : i.a.showToast({
                                title: "请扫描校友邦学生端二维码",
                                icon: "none"
                            })) : e && e.result && ((e = JSON.parse(e.result)).code && e.key ? t.loginPC(e.code, e.key) : i.a.showToast({
                                title: "请扫描校友邦学生pc端二维码",
                                icon: "none"
                            }));
                        }
                    });
                },
                loginPC: function(t, e) {
                    c.a.xyb_request("ScanCode!over.action", "POST", {
                        code: t,
                        key: e
                    }, !0, !1).then(function(a) {
                        a && i.a.navigateTo({
                            url: "/secondBag/pages/mine/qrLoginSuccess/qrLoginSuccess?code=" + t + "&key=" + e
                        });
                    }, function(t) {});
                },
                showAdviser: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-显示联系老师弹窗"
                    }), this.setData({
                        showAdviserFlag: !0,
                        projectIdCurrent: t.currentTarget.dataset.item
                    });
                },
                onCloseContact: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-关闭联系老师弹窗"
                    }), this.setData({
                        showAdviserFlag: !1,
                        projectIdCurrent: ""
                    });
                },
                deleteProject: function(t) {
                    var e = this;
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-删除项目报名记录"
                    });
                    var a = t.currentTarget.dataset.item;
                    i.a.showModal({
                        title: "",
                        content: "是否确定删除该项目报名记录？",
                        confirmColor: "#1E82D2",
                        cancelColor: "#666666",
                        confirmText: "删除",
                        success: function(t) {
                            t.confirm ? c.a.xyb_request("laboreducation/index/deleteProject.action", "POST", {
                                projectId: a
                            }, !0, !1).then(function(t) {
                                s.a.success({
                                    message: "删除成功",
                                    duration: 2e3
                                });
                                var o = e.data.projectList;
                                o.forEach(function(t, e) {
                                    t.id == a && o.splice(e);
                                }), e.setData({
                                    projectList: o
                                });
                            }, function(t) {
                                i.a.showToast({
                                    title: t.msg,
                                    icon: "none"
                                });
                            }) : t.cancel && console.log("用户点击取消");
                        }
                    });
                },
                projectDetailEvent: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-跳转项目详情"
                    }), t = t.currentTarget.dataset.item, i.a.setStorageSync("educationIndexProjectId", t.id), 
                    i.a.navigateTo({
                        url: "/ninthBag/education/educationProjectDetails/educationProjectDetails?id=" + t.id
                    });
                },
                toParticipationDetail: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-跳转参与详情"
                    }), t = t.currentTarget.dataset.item, i.a.navigateTo({
                        url: "/ninthBag/education/projectJoinDetails/projectJoinDetails?id=" + t.id
                    });
                },
                toSign: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-跳转签到页面"
                    }), t = t.currentTarget.dataset.item, i.a.setStorageSync("educationIndexProjectId", t), 
                    i.a.navigateTo({
                        url: "/ninthBag/education/signInAddress/signInAddress?id=" + t
                    });
                },
                toSignRecord: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-跳转签到记录页面"
                    }), t = t.currentTarget.dataset.item, i.a.setStorageSync("educationIndexProjectId", t), 
                    i.a.navigateTo({
                        url: "/ninthBag/education/signInRecord/signInRecord?id=" + t
                    });
                },
                toUploadSummary: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-提交总结"
                    }), t = t.currentTarget.dataset.item, i.a.setStorageSync("educationIndexProjectId", t), 
                    i.a.navigateTo({
                        url: "/ninthBag/education/uploadSummary/uploadSummary?id=" + t
                    });
                },
                toUploadSummary1: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-查看总结"
                    }), t = t.currentTarget.dataset.item, i.a.setStorageSync("educationIndexProjectId", t), 
                    i.a.navigateTo({
                        url: "/ninthBag/education/summaryDetails/summaryDetails?id=" + t
                    });
                },
                toUploadImgInfo: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-提交图片资料"
                    }), t = t.currentTarget.dataset.item, i.a.setStorageSync("educationIndexProjectId", t), 
                    i.a.navigateTo({
                        url: "/ninthBag/education/uploadImgInfo/uploadImgInfo?id=" + t
                    });
                },
                toUploadImgInfo1: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-查看图片资料"
                    }), t = t.currentTarget.dataset.item, i.a.setStorageSync("educationIndexProjectId", t), 
                    i.a.navigateTo({
                        url: "/ninthBag/education/imgInfoDetails/imgInfoDetails?id=" + t
                    });
                },
                identificationApplyEvent: function(t) {
                    var e = this;
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-申请认定按钮"
                    });
                    var a = t.currentTarget.dataset.item;
                    c.a.xyb_request("laboreducation/process/identification/identificationApply.action", "POST", {
                        projectId: a
                    }, !0, !1).then(function(t) {
                        i.a.showToast({
                            title: "申请认定已提交成功",
                            icon: "none"
                        }), e.projectJoinDetail(a);
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                projectJoinDetail: function(t) {
                    var e = this;
                    c.a.xyb_request("laboreducation/process/projectJoinDetail.action", "POST", {
                        projectId: t
                    }, !1, !1).then(function(a) {
                        console.log("详情接口返回：", a), e.upDateData(e.data.eduPracticeTabType, t);
                    });
                },
                withdrawApplyEvent: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-撤回认定申请"
                    });
                    var e = t.currentTarget.dataset.item, a = this;
                    i.a.showModal({
                        title: "",
                        content: "是否确认撤回认定申请？",
                        confirmColor: "#3894C6",
                        cancelColor: "#999999",
                        confirmText: "确认撤回",
                        success: function(t) {
                            t.confirm ? a.withdrawApplyFuc(e) : t.cancel && console.log("用户点击取消");
                        }
                    });
                },
                withdrawApplyFuc: function(t) {
                    var e = this;
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "劳育实践-确认撤回认定申请"
                    }), c.a.xyb_request("laboreducation/process/identification/cancelIdentificationApply.action", "POST", {
                        projectId: t
                    }, !0, !1).then(function(a) {
                        e.upDateData(e.data.eduPracticeTabType, t);
                    }, function(t) {
                        i.a.showToast({
                            title: t.msg,
                            icon: "none"
                        });
                    });
                },
                onScrollEvent: function(t) {
                    var e = this, a = this.data.isIphoneX ? 210 : 230;
                    this.debounceEvent(function() {
                        t.detail.scrollTop >= a ? e.setData({
                            tabFixedTop: !0
                        }) : e.setData({
                            tabFixedTop: !1
                        }), this.setData({
                            showSearchType: !1,
                            showSearchMask: !1,
                            showSearchMask2: !1,
                            showSearchMask3: !1,
                            projectIdSelected: "",
                            projectArray: []
                        });
                    }, 2, !1);
                },
                debounceEvent: function(t, e, a) {
                    var o = this, n = arguments;
                    f && clearTimeout(f), a ? (a = !f, f = setTimeout(function() {
                        f = null;
                    }, e), a && t.apply(o, n)) : f = setTimeout(function() {
                        t.apply(o, n);
                    }, e);
                }
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
        }(y, i.a.Component), r(y, [ {
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
                var e = this.$prefix, a = Object(n.genCompid)(e + "$compid__895"), o = (nt = p(a, 2))[0], i = nt[1], r = Object(n.genCompid)(e + "$compid__896"), c = (it = p(r, 2))[0], s = it[1], u = Object(n.genCompid)(e + "$compid__897"), l = (rt = p(u, 2))[0], d = rt[1], g = Object(n.genCompid)(e + "$compid__898"), h = (ct = p(g, 2))[0], m = ct[1], f = Object(n.genCompid)(e + "$compid__899"), y = (st = p(f, 2))[0], v = st[1], T = Object(n.genCompid)(e + "$compid__900"), j = (ut = p(T, 2))[0], F = ut[1], S = Object(n.genCompid)(e + "$compid__901"), C = (pt = p(S, 2))[0], P = pt[1], w = Object(n.genCompid)(e + "$compid__902"), b = (gt = p(w, 2))[0], x = gt[1], _ = Object(n.genCompid)(e + "$compid__903"), M = (mt = p(_, 2))[0], k = mt[1], I = Object(n.genCompid)(e + "$compid__904"), D = (yt = p(I, 2))[0], A = yt[1], N = Object(n.genCompid)(e + "$compid__905"), $ = p(N, 2), z = $[0], L = $[1], O = Object(n.genCompid)(e + "$compid__906"), E = p(O, 2), B = E[0], q = E[1], U = this.data, H = U.isShow, J = U.showSearchType, R = U.searchedType, K = U.showClear, V = U.inputValue, X = U.selectList, Q = U.showSearchMask, W = U.dynamicTop, G = U.projectApplicationApproved, Y = U.projectApplicationUnapproved, Z = U.newMessageForm, tt = U.newProjectFlag, et = U.randomNumber, at = U.newProjectArray, ot = (U.eduPracticeTabType, 
                U.ifIphoneX), nt = (a = U.maxHeight, U.statusHeight), it = (r = U.hasMore, U.maxPage), rt = (u = U.projectList, 
                U.creditNumber), ct = (g = U.maxCreditNumber, U.dynamicWidth, U.tipTextFlag), st = (f = U.tipTextFlag2, 
                U.tipTextFlag3, U.tipTextFlagId), ut = (T = U.showAdviserFlag, U.projectIdCurrent), pt = (S = U.tabFixedTop, 
                U.noData), lt = U.showSearchMask2, dt = U.projectIdSelected, gt = (w = U.projectArray, 
                U.searchedId), ht = (_ = U.periodFlag, U.status), mt = U.statusList, ft = U.showSearchMask3, yt = (I = H ? {
                    width: "330rpx",
                    height: "330rpx",
                    marginLeft: "50rpx"
                } : null, H ? +rt / g * 100 : null);
                N = H ? "劳育" + (_ ? "学时" : "分") : null;
                return this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.toEducationProjectList();
                }, this.anonymousFunc1 = function(e) {
                    e.stopPropagation(), t.toEducationProjectList(e);
                }, this.anonymousFunc2 = function(e) {
                    e.stopPropagation(), t.closeNewProjectEvent(e);
                }, this.anonymousFunc3 = function(e) {
                    e.stopPropagation(), t.tipCloseEvent(e);
                }, this.anonymousFunc4 = function(e) {
                    e.stopPropagation(), t.searchTypeEvent(e);
                }, this.anonymousFunc5 = function(e) {
                    e.stopPropagation(), t.searchStatus(e);
                }, this.anonymousFunc6 = function(e) {
                    e.stopPropagation(), t.onCloseSearch(e);
                }, this.anonymousFunc8 = function(e) {
                    e.stopPropagation(), t.onCloseSearch2(e);
                }, this.anonymousFunc10 = function(e) {
                    e.stopPropagation(), t.onCloseSearch3(e);
                }, this.anonymousFunc12 = function(e) {
                    e.stopPropagation(), t.tipCloseEvent(e);
                }, this.anonymousFunc13 = function(e) {
                    e.stopPropagation(), t.searchTypeEvent(e);
                }, this.anonymousFunc14 = function(e) {
                    e.stopPropagation(), t.searchStatus(e);
                }, $ = J ? (X || []).map(function(a, o) {
                    a = {
                        $original: Object(n.internal_get_original)(a)
                    };
                    var i = "ebczz" + o;
                    t.anonymousFunc7Map[i] = function(e) {
                        e.stopPropagation(), t.changeSearchType(e);
                    };
                    var r = Object(n.genCompid)(e + "ecbzzzzzzz" + o, !0);
                    r = (o = p(r, 2))[0], o = o[1];
                    return H && Q && J && R == a.$original.name && n.propsManager.set({
                        prefixClass: "icon",
                        value: "gou",
                        size: "18",
                        color: "#ff453a"
                    }, o, r), {
                        _$indexKey: i,
                        $compid__892: o,
                        $original: a.$original
                    };
                }) : [], O = lt ? (w || []).map(function(a, o) {
                    a = {
                        $original: Object(n.internal_get_original)(a)
                    };
                    var i = "ebdzz" + o;
                    t.anonymousFunc9Map[i] = function(e) {
                        e.stopPropagation(), t.changeSearchType2(e);
                    };
                    var r = Object(n.genCompid)(e + "ecczzzzzzz" + o, !0);
                    r = (o = p(r, 2))[0], o = o[1];
                    return H && lt && dt == a.$original.name && n.propsManager.set({
                        prefixClass: "icon",
                        value: "gou",
                        size: "18",
                        color: "#ff453a"
                    }, o, r), {
                        _$indexKey2: i,
                        $compid__893: o,
                        $original: a.$original
                    };
                }) : [], E = ft ? (mt || []).map(function(a, o) {
                    a = {
                        $original: Object(n.internal_get_original)(a)
                    };
                    var i = "ebezz" + o;
                    t.anonymousFunc11Map[i] = function(e) {
                        e.stopPropagation(), t.changeSearchType3(e);
                    };
                    var r = Object(n.genCompid)(e + "ecdzzzzzzz" + o, !0);
                    r = (o = p(r, 2))[0], o = o[1];
                    return H && ft && ht.id === a.$original.id && n.propsManager.set({
                        prefixClass: "icon",
                        value: "gou",
                        size: "18",
                        color: "#ff453a"
                    }, o, r), {
                        _$indexKey3: i,
                        $compid__894: o,
                        $original: a.$original
                    };
                }) : [], U = H ? (u || []).map(function(e, a) {
                    e = {
                        $original: Object(n.internal_get_original)(e)
                    };
                    var o = "ebfzz" + a;
                    t.anonymousFunc15Map[o] = function(e) {
                        e.stopPropagation, t.projectDetailEvent(e);
                    };
                    var i = "ebgzz" + a;
                    t.anonymousFunc16Map[i] = function(e) {
                        e.stopPropagation(), t.tipTextEvent2(e);
                    };
                    var r = "ebhzz" + a;
                    t.anonymousFunc17Map[r] = function(e) {
                        e.stopPropagation(), t.tipCloseEvent2(e);
                    };
                    var c = "ebizz" + a;
                    t.anonymousFunc18Map[c] = function(e) {
                        e.stopPropagation(), t.showAdviser(e);
                    };
                    var s = "ebjzz" + a;
                    return t.anonymousFunc19Map[s] = function(e) {
                        e.stopPropagation(), t.deleteProject(e);
                    }, a = "ecazz" + a, t.anonymousFunc20Map[a] = function(e) {
                        e.stopPropagation(), t.toParticipationDetail(e);
                    }, {
                        _$indexKey4: o,
                        _$indexKey5: i,
                        _$indexKey6: r,
                        _$indexKey7: c,
                        _$indexKey8: s,
                        _$indexKey9: a,
                        $original: e.$original
                    };
                }) : [], H && n.propsManager.set({
                    style: I,
                    score: yt,
                    nowText: rt,
                    totalText: g,
                    text: N
                }, i, o), H && n.propsManager.set({
                    prefixClass: "icon",
                    value: "zhcc_xiangxiajiantou",
                    size: "12",
                    color: J ? "#ff453a" : "#999999"
                }, s, c), H && n.propsManager.set({
                    prefixClass: "icon",
                    value: "zhcc_xiangxiajiantou",
                    size: "12",
                    color: ft ? "#ff453a" : "#999999"
                }, d, l), H && n.propsManager.set({
                    prefixClass: "icon",
                    value: "ic_sousuo",
                    size: "13",
                    color: "#999999"
                }, m, h), H && K && n.propsManager.set({
                    prefixClass: "icon",
                    value: "ic_shanchu",
                    size: "12",
                    color: "#BDBDBD"
                }, v, y), H && S && n.propsManager.set({
                    prefixClass: "icon",
                    value: "zhcc_xiangxiajiantou",
                    size: "12",
                    color: J ? "#ff453a" : "#999999"
                }, F, j), H && S && n.propsManager.set({
                    prefixClass: "icon",
                    value: "zhcc_xiangxiajiantou",
                    size: "12",
                    color: ft ? "#ff453a" : "#999999"
                }, P, C), H && S && n.propsManager.set({
                    prefixClass: "icon",
                    value: "ic_sousuo",
                    size: "13",
                    color: "#999999"
                }, x, b), H && S && K && n.propsManager.set({
                    prefixClass: "icon",
                    value: "ic_shanchu",
                    size: "12",
                    color: "#BDBDBD"
                }, k, M), H && G && n.propsManager.set({
                    prefixClass: "icon",
                    value: "guanbi",
                    size: "16",
                    color: "#9a9a9a"
                }, A, D), H && Y && n.propsManager.set({
                    prefixClass: "icon",
                    value: "guanbi",
                    size: "16",
                    color: "#9a9a9a"
                }, L, z), H && n.propsManager.set({
                    title: "联系指导老师",
                    projectId: ut,
                    isShow: T,
                    onClose: this.onCloseContact
                }, q, B), Object.assign(this.__state, {
                    anonymousState__temp: I,
                    anonymousState__temp2: yt,
                    anonymousState__temp3: N,
                    loopArray624: $,
                    loopArray625: O,
                    loopArray626: E,
                    loopArray627: U,
                    $compid__895: i,
                    $compid__896: s,
                    $compid__897: d,
                    $compid__898: m,
                    $compid__899: v,
                    $compid__900: F,
                    $compid__901: P,
                    $compid__902: x,
                    $compid__903: k,
                    $compid__904: A,
                    $compid__905: L,
                    $compid__906: q,
                    isShow: H,
                    maxHeight: a,
                    noData: pt,
                    tabFixedTop: S,
                    statusHeight: nt,
                    newProjectFlag: tt,
                    randomNumber: et,
                    tipTextFlag: ct,
                    inputValue: V,
                    searchedId: gt,
                    projectIdSelected: dt,
                    status: ht,
                    showSearchType: J,
                    showSearchMask: Q,
                    showSearchMask3: ft,
                    showClear: K,
                    dynamicTop: W,
                    selectList: X,
                    searchedType: R,
                    showSearchMask2: lt,
                    projectArray: w,
                    statusList: mt,
                    hasMore: r,
                    maxPage: it,
                    ifIphoneX: ot,
                    projectList: u,
                    tipTextFlag2: f,
                    tipTextFlagId: st,
                    projectApplicationApproved: G,
                    newMessageForm: Z,
                    projectApplicationUnapproved: Y,
                    newProjectArray: at,
                    periodFlag: _
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
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : u(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc7Map[t] && (e = this.anonymousFunc7Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc8",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc9",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : u(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc9Map[t] && (e = this.anonymousFunc9Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc10",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc11",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : u(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc11Map[t] && (e = this.anonymousFunc11Map)[t].apply(e, o);
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
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return this.anonymousFunc15Map[t] && (e = this.anonymousFunc15Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc16",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : u(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc16Map[t] && (e = this.anonymousFunc16Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc17",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : u(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc17Map[t] && (e = this.anonymousFunc17Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc18",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : u(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc18Map[t] && (e = this.anonymousFunc18Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc19",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : u(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc19Map[t] && (e = this.anonymousFunc19Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc20",
            value: function(t) {
                for (var e, a = arguments.length, o = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) o[n - 1] = arguments[n];
                return "object" === (void 0 === o ? "undefined" : u(o)) && o.stopPropagation && o.stopPropagation(), 
                this.anonymousFunc20Map[t] && (e = this.anonymousFunc20Map)[t].apply(e, o);
            }
        } ]), r = a = y, a.$$events = [ "touchStart", "scrollToLower", "onScrollEvent", "viewClickEvent", "toScanQrCodes", "anonymousFunc0", "toCreditList", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "keyInput", "clickSearch", "clearInput", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15", "anonymousFunc16", "anonymousFunc17", "anonymousFunc18", "anonymousFunc19", "anonymousFunc20", "toEducationProjectEvent", "closeApplicationApproved", "closeApplicationUnapproved", "toProjectJoinDetails" ], 
        a.$$componentPath = "components/EducationPractice/educationPractice", a = r)) || a;
        function y() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, y);
            for (var a = arguments.length, o = Array(a), n = 0; n < a; n++) o[n] = arguments[n];
            return (t = e = g(this, (t = y.__proto__ || Object.getPrototypeOf(y)).call.apply(t, [ this ].concat(o)))).$usedState = [ "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray624", "loopArray625", "loopArray626", "loopArray627", "$compid__895", "$compid__896", "$compid__897", "$compid__898", "$compid__899", "$compid__900", "$compid__901", "$compid__902", "$compid__903", "$compid__904", "$compid__905", "$compid__906", "isShow", "maxHeight", "noData", "tabFixedTop", "statusHeight", "newProjectFlag", "randomNumber", "tipTextFlag", "inputValue", "searchedId", "projectIdSelected", "status", "showSearchType", "showSearchMask", "showSearchMask3", "showClear", "dynamicTop", "selectList", "searchedType", "showSearchMask2", "projectArray", "statusList", "hasMore", "maxPage", "ifIphoneX", "projectList", "tipTextFlag2", "tipTextFlagId", "projectApplicationApproved", "newMessageForm", "projectApplicationUnapproved", "newProjectArray", "periodFlag" ], 
            e.config = {
                component: !0,
                usingComponents: {
                    "van-loading": "../../vant-weapp/dist/loading/index",
                    "van-icon": "../../vant-weapp/dist/icon/index"
                }
            }, e.anonymousFunc7Map = {}, e.anonymousFunc9Map = {}, e.anonymousFunc11Map = {}, 
            e.anonymousFunc15Map = {}, e.anonymousFunc16Map = {}, e.anonymousFunc17Map = {}, 
            e.anonymousFunc18Map = {}, e.anonymousFunc19Map = {}, e.anonymousFunc20Map = {}, 
            e.customComponents = [ "CanvasProgress", "AtIcon", "ContactTeacher" ], g(e, t);
        }
        a = r, Component(o(0).default.createComponent(r));
    },
    440: function(t, e, a) {
        t.exports = a.p + "components/EducationPractice/educationPractice.wxml";
    }
}, [ [ 1696, 0, 1, 2 ] ] ]);