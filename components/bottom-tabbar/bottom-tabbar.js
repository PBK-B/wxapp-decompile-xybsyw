var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 22 ], {
    1291: function(t, o, n) {
        n(434);
    },
    1292: function(t, o, n) {},
    1690: function(o, n, a) {
        a.r(n), a(1291);
        var e = a(0), r = a.n(e), s = a(2), i = (n = a.n(s), a(1)), u = a(11), c = (a(1292), 
        function(t, o) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, o) {
                var n = [], a = !0, e = !1, r = void 0;
                try {
                    for (var s, i = t[Symbol.iterator](); !(a = (s = i.next()).done) && (n.push(s.value), 
                    !o || n.length !== o); a = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    e = !0, r = t;
                } finally {
                    try {
                        !a && i.return && i.return();
                    } finally {
                        if (e) throw r;
                    }
                }
                return n;
            }(t, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        });
        s = function(t, o, n) {
            return o && p(t.prototype, o), n && p(t, n), t;
        };
        function p(t, o) {
            for (var n = 0; n < o.length; n++) {
                var a = o[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(t, a.key, a);
            }
        }
        function l(o, n) {
            if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != t(n) && "function" != typeof n ? o : n;
        }
        var g = r.a.getApp();
        s = n()({
            properties: {
                barFlag: {
                    type: Number,
                    value: 1
                }
            },
            data: {
                showFlag: !0,
                showBottom: !1,
                msgAccount: 0,
                ifIphoneX: !1,
                showGrowUp: !1,
                unreadTalkFlag: !1,
                showGrowTip: !1,
                growNum: 0
            },
            pageLifetimes: {
                show: function() {
                    console.log("showxxxxxxxxxxxxgetUreadMsg"), this.getUreadMsg();
                },
                hide: function() {},
                resize: function() {}
            },
            componentDidShow: function() {
                this.getUreadMsg();
            },
            ready: function() {
                this.getTip(), 2 == r.a.getStorageSync("userType") ? this.setData({
                    showFlag: !1
                }) : this.setData({
                    showFlag: !0
                });
                var t = this;
                t.getShowPracticeMenuBarRedPoint(), r.a.getSystemInfo({
                    success: function(o) {
                        !(o.system.toLowerCase().search("ios") + 1) || (44 <= o.statusBarHeight ? t.setData({
                            ifIphoneX: !0
                        }) : t.setData({
                            ifIphoneX: !1
                        }));
                    }
                }), this.setData({
                    showBottom: !0
                });
            },
            methods: {
                getShowPracticeMenuBarRedPoint: function() {
                    var t = this;
                    i.a.xyb_request("common/ShowPractice!menuBarRedPoint.action", "POST", {}, !1, !1).then(function(o) {
                        o.data.show && t.setData({
                            showGrowUp: !0
                        });
                    }, function(t) {
                        console.log(t);
                    });
                },
                clickBottomBar: function() {},
                jumpFind: function() {
                    this.commonDataStatistics("jumpFind"), r.a.reLaunch({
                        url: "/pages/find/index/index"
                    });
                },
                jumpGrowup: function() {
                    this.commonDataStatistics("jumpGrowup"), r.a.reLaunch({
                        url: "/pages/growup/growup"
                    });
                },
                jumpMessage: function() {
                    this.commonDataStatistics("jumpMessage"), r.a.reLaunch({
                        url: "/pages/message/index/index"
                    });
                },
                jumpMine: function() {
                    this.commonDataStatistics("jumpMine"), r.a.reLaunch({
                        url: "/pages/mine/index/index"
                    });
                },
                commonDataStatistics: function(t) {
                    var o = r.a.getCurrentPages(), n = void 0;
                    o.__displayReporter && o.__displayReporter.showReferpagepath && (n = o.__displayReporter.showReferpagepath.split(".")[0]), 
                    u.a.commonDataStatistics("click", o.route, n, "", t, "", "");
                },
                getUreadMsg: function() {
                    var t = this;
                    g.globalData.isLogin && i.a.xyb_request("client/message/ClientMessage!getTotalUnreadNum.action", "POST", {}, !1, !1).then(function(o) {
                        console.log("11111111111111111getUreadMsg"), console.log(o.data.total), t.setData({
                            msgAccount: o.data && o.data.total ? o.data.total : 0,
                            unreadTalkFlag: !(!o.data || !o.data.unreadTalkFlag) && o.data.unreadTalkFlag
                        });
                    }, function(o) {
                        t.setData({
                            msgAccount: 0
                        });
                    });
                },
                getTip: function() {
                    var t = this;
                    g.globalData.isLogin && (r.a.getStorageSync("growTip") ? r.a.getStorageSync("jobTip") || this.setData({
                        showGrowTip: !1
                    }) : i.a.xyb_request("student/practiceplan/PracticePlanList!getUnSignPlansByStudentId.action", "POST", {}, !1, !1).then(function(o) {
                        o.data && 0 < o.data.length ? t.setData({
                            growNum: o.data.length,
                            showGrowTip: !0
                        }) : r.a.getStorageSync("jobTip") || t.setData({
                            showGrowTip: !1
                        });
                    }, function(t) {}));
                }
            }
        })((function(o, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            o.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(o, n) : o.__proto__ = n);
        }(h, r.a.Component), s(h, [ {
            key: "_constructor",
            value: function(t) {
                (function t(o, n, a) {
                    null === o && (o = Function.prototype);
                    var e = Object.getOwnPropertyDescriptor(o, n);
                    return void 0 !== e ? "value" in e ? e.value : void 0 !== (e = e.get) ? e.call(a) : void 0 : null !== (o = Object.getPrototypeOf(o)) ? t(o, n, a) : void 0;
                })(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var o = this.$prefix, n = Object(e.genCompid)(o + "$compid__907"), a = (l = c(n, 2))[0], r = l[1], s = (g = this.data).ifIphoneX, i = g.barFlag, u = g.showFlag, p = g.showGrowUp, l = (o = g.msgAccount, 
                n = g.unreadTalkFlag, g.showGrowTip), g = (g.growNum, g.showBottom);
                return this.anonymousFunc0 = function(o) {
                    o.stopPropagation(), t.clickBottomBar(o);
                }, this.anonymousFunc1 = function(o) {
                    o.stopPropagation(), t.jumpFind(o);
                }, this.anonymousFunc2 = function(o) {
                    o.stopPropagation(), t.jumpGrowup(o);
                }, this.anonymousFunc3 = function(o) {
                    o.stopPropagation(), t.jumpMessage(o);
                }, this.anonymousFunc4 = function(o) {
                    o.stopPropagation(), t.jumpMine(o);
                }, g && e.propsManager.set({
                    className: "unreadTalkFlag",
                    showNum: !1,
                    msgNum: n && 0 == o
                }, r, a), Object.assign(this.__state, {
                    $compid__907: r,
                    showBottom: g,
                    ifIphoneX: s,
                    barFlag: i,
                    showFlag: u,
                    showGrowUp: p,
                    msgAccount: o,
                    showGrowTip: l
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
        } ]), s = n = h, n.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4" ], 
        n.$$componentPath = "components/bottom-tabbar/bottom-tabbar", n = s)) || n;
        function h() {
            var t, o;
            !function(t, o) {
                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
            }(this, h);
            for (var n = arguments.length, a = Array(n), e = 0; e < n; e++) a[e] = arguments[e];
            return (t = o = l(this, (t = h.__proto__ || Object.getPrototypeOf(h)).call.apply(t, [ this ].concat(a)))).$usedState = [ "$compid__907", "showBottom", "ifIphoneX", "barFlag", "showFlag", "showGrowUp", "msgAccount", "showGrowTip" ], 
            o.config = {
                component: !0
            }, o.customComponents = [ "MsgDot" ], l(o, t);
        }
        n = s, Component(a(0).default.createComponent(s));
    },
    434: function(t, o, n) {
        t.exports = n.p + "components/bottom-tabbar/bottom-tabbar.wxml";
    }
}, [ [ 1690, 0, 1, 2 ] ] ]);