var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 42 ], {
    1312: function(e, t, a) {
        a(443);
    },
    1313: function(e, t, a) {},
    1699: function(t, a, o) {
        o.r(a), o(1312);
        var n = o(0), r = o.n(n), i = o(2), s = (a = o.n(i), o(1)), c = (o(1313), function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var a = [], o = !0, n = !1, r = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (a.push(i.value), 
                    !t || a.length !== t); o = !0) ;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    n = !0, r = e;
                } finally {
                    try {
                        !o && s.return && s.return();
                    } finally {
                        if (n) throw r;
                    }
                }
                return a;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        });
        i = function(e, t, a) {
            return t && u(e.prototype, t), a && u(e, a), e;
        };
        function u(e, t) {
            for (var a = 0; a < t.length; a++) {
                var o = t[a];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function p(t, a) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !a || "object" != e(a) && "function" != typeof a ? t : a;
        }
        var h = r.a.getApp();
        i = a()({
            data: {
                noData: !1,
                courseList: [],
                pageIndex: 1,
                maxPage: "",
                hasMore: !0,
                maxHeight: "",
                showChatFlag: !1,
                sphereInfo: {
                    status: !1,
                    content: ""
                }
            },
            onLoad: function(e) {
                this.loadInfo(), this.getCourseList(1), this.isAddWx();
            },
            onShow: function() {},
            errorFunction: function(e) {
                console.log(e), e = e.currentTarget.dataset.index, this.setData(function(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e;
                }({}, "handleList[" + e + "].photograph", "https://xcxresources.xybsyw.com/xcx/images/avatar_man.png"));
            },
            scrollToLower: function() {
                var e = this.data.pageIndex + 1;
                this.data.hasMore && (this.setData({
                    pageIndex: e
                }), this.getCourseList());
            },
            loadInfo: function() {
                this.setData({
                    ifIphoneX: h.globalData.isIphoneX
                });
                var e = this;
                console.log("获取信息", h.globalData.isIphoneX), setTimeout(function() {
                    r.a.getSystemInfo({
                        success: function(t) {
                            var a = t && t.screenHeight ? t.screenHeight : 0, o = e.data.ifIphoneX ? 80 : 50, n = -1 < t.system.indexOf("iOS");
                            n = t.statusBarHeight + (n ? 44 : 48);
                            e.setData({
                                maxHeight: a - n - o
                            });
                        }
                    });
                }, 500);
            },
            getCourseList: function(e, t) {
                var a = this, o = this;
                s.a.xyb_request("client/course/loadCourseList.action", "POST", {
                    page: this.data.pageIndex,
                    pageSize: 10
                }, !0, !1).then(function(o) {
                    var n = a;
                    e && n.setData({
                        courseList: []
                    });
                    var r = n.data.courseList;
                    (o.data.list || []).forEach(function(e) {
                        r.push(e);
                    });
                    var i = 0 != o.data.MaxPage && o.data.MaxPage != a.data.pageIndex;
                    n.setData({
                        courseList: r,
                        maxPage: o.data.MaxPage,
                        hasMore: i
                    }, function() {
                        e && n.setData({
                            showChatFlag: !0
                        });
                    }), t && t(o);
                }, function(t) {
                    a.setData({
                        pageIndex: 1,
                        maxPage: "",
                        hasMore: !0
                    }), e && o.setData({
                        showChatFlag: !0
                    });
                });
            },
            goDetail: function(e) {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "课程-跳转详情"
                }), e = e.currentTarget.dataset.id, r.a.navigateTo({
                    url: "/pages/courseDetails/courseDetails?id=" + e
                });
            },
            jumpToPrivateSphere: function() {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "跳转到私域二维码页面"
                }), r.a.navigateTo({
                    url: "/thirdBag/pages/privateSphere/privateSphere?groupId=" + this.data.sphereInfo.groupId + "&sphereCode=COURSE"
                });
            },
            isAddWx: function() {
                var e = this;
                return new Promise(function(t, a) {
                    var o = r.a.getStorageSync("unionid");
                    if (console.log("unionid", o), !o) return !1;
                    s.a.xyb_request("sphere/sphereInfo.action", "POST", {
                        unionId: o,
                        sphereCode: "COURSE"
                    }, !0, !1).then(function(a) {
                        "200" == a.code && (a.data.status && r.a.eventCenter.trigger("taroClick", {
                            funName: "私域入口埋点",
                            itemId: a.data.groupId,
                            itemTypeName: "COURSE"
                        }), e.setData({
                            sphereInfo: a.data
                        }), t(a.data));
                    }, function(e) {});
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
        }(l, r.a.Component), i(l, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, a, o) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, a);
                    return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, a, o) : void 0;
                })(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var e = this.$prefix, t = Object(n.genCompid)(e + "$compid__891"), a = (p = c(t, 2))[0], o = p[1], r = (h = this.data).courseList, i = h.hasMore, s = h.maxPage, u = (t = h.maxHeight, 
                h.showChatFlag), p = (h.isAddWxFlag, h.sphereInfo), h = u ? r.map(function(t, a) {
                    t = {
                        $original: Object(n.internal_get_original)(t)
                    };
                    var o = Object(n.genCompid)(e + "eajzzzzzzz" + a, !0), r = (o = (r = c(o, 2))[0], 
                    r[1]);
                    return u && n.propsManager.set({
                        itemData: t.$original,
                        itemIndex: a
                    }, r, o), {
                        $compid__890: r,
                        $original: t.$original
                    };
                }) : [];
                return u && i && 1 < s && n.propsManager.set({
                    color: "#ff453a",
                    size: 26,
                    content: "加载中...",
                    mode: "center"
                }, o, a), Object.assign(this.__state, {
                    loopArray621: h,
                    $compid__891: o,
                    sphereInfo: p,
                    showChatFlag: u,
                    maxHeight: t,
                    courseList: r,
                    hasMore: i,
                    maxPage: s
                }), this.__state;
            }
        } ]), i = a = l, a.$$events = [ "jumpToPrivateSphere", "scrollToLower", "goDetail" ], 
        a.$$componentPath = "components/myCourse/myCourse", a = i)) || a;
        function l() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, l);
            for (var a = arguments.length, o = Array(a), n = 0; n < a; n++) o[n] = arguments[n];
            return (e = t = p(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [ this ].concat(o)))).$usedState = [ "loopArray621", "$compid__891", "sphereInfo", "showChatFlag", "maxHeight", "courseList", "hasMore", "maxPage" ], 
            t.config = {
                navigationBarTitleText: "我的课程",
                usingComponents: {}
            }, t.customComponents = [ "Itemcourse", "AtActivityIndicator" ], p(t, e);
        }
        a = i, Component(o(0).default.createComponent(i));
    },
    443: function(e, t, a) {
        e.exports = a.p + "components/myCourse/myCourse.wxml";
    }
}, [ [ 1699, 0, 1, 2 ] ] ]);