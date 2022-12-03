var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 15 ], {
    1293: function(t, e, o) {
        o(435);
    },
    1294: function(t, e, o) {},
    1691: function(e, o, n) {
        n.r(o), n(1293);
        var a = n(0), s = n.n(a), u = n(2), i = (o = n.n(u), n(1)), r = (n(1294), "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
            return t(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
        });
        u = function(t, e, o) {
            return e && p(t.prototype, e), o && p(t, o), t;
        };
        function p(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function c(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function l() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, l);
            for (var o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
            return (t = e = c(this, (t = l.__proto__ || Object.getPrototypeOf(l)).call.apply(t, [ this ].concat(n)))).$usedState = [ "loopArray631", "loopArray632", "loopArray633", "loopArray634", "isShow", "jobStatusTypeStep", "jobStatusType", "jobStatusTypeOne", "jobStatusTypeThree", "typeOneSelected", "jobStatusStatusOne", "statusThreeSelected", "jobStatusStatusThree", "isGrowUp" ], 
            e.config = {
                component: !0,
                usingComponents: {}
            }, e.anonymousFunc1Map = {}, e.anonymousFunc2Map = {}, e.anonymousFunc4Map = {}, 
            e.anonymousFunc6Map = {}, e.customComponents = [], c(e, t);
        }
        s.a.getApp(), u = o()({
            options: {
                multipleSlots: !0
            },
            properties: {
                isShow: {
                    type: Boolean,
                    value: !1,
                    observer: function(t, e, o) {}
                },
                jobStatusType: {
                    type: Number,
                    value: null
                },
                isGrowUp: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
                jobStatusTypeStep: 1,
                jobStatusTypeOne: [ {
                    id: 0,
                    name: "正在找工作"
                }, {
                    id: 1,
                    name: "已找到工作"
                }, {
                    id: 2,
                    name: "暂不找工作"
                } ],
                jobStatusTypeThree: [ {
                    id: 0,
                    name: "非常满意"
                }, {
                    id: 1,
                    name: "感觉还行"
                }, {
                    id: 2,
                    name: "想看看新的岗位"
                } ],
                typeOneSelected: {},
                jobStatusStatusOne: [ {
                    id: 0,
                    name: "看看推荐岗位"
                }, {
                    id: 1,
                    name: "暂时不需要"
                } ],
                statusOneSelected: {},
                jobStatusStatusThree: [ {
                    id: 0,
                    name: "考研"
                }, {
                    id: 1,
                    name: "考公"
                }, {
                    id: 2,
                    name: "考证"
                }, {
                    id: 3,
                    name: "出国"
                }, {
                    id: 4,
                    name: "其他"
                } ],
                statusThreeSelected: {}
            },
            observers: {
                isShow: function(t) {
                    t && this.setData({
                        jobStatusTypeStep: 1,
                        typeOneSelected: {},
                        statusOneSelected: {}
                    });
                }
            },
            ready: function() {},
            methods: {
                onClose: function() {
                    this.triggerEvent("close", {
                        bubbles: !1
                    });
                },
                onCloseEvent: function() {
                    this.data.jobStatusType, this.data.jobStatusTypeStep, s.a.eventCenter.trigger("taroClick", {
                        funName: "标记求职状态弹窗-关闭弹窗"
                    });
                    var t = new Date().getTime();
                    s.a.setStorageSync("jobStatusPopupOnCloseEvent", t), this.onClose();
                },
                selectJobStatusTypeOne: function(t) {
                    t = t.currentTarget.dataset.obj, this.data.jobStatusType, t.id, s.a.eventCenter.trigger("taroClick", {
                        funName: "标记求职状态弹窗-选中求职状态类型一的选项"
                    }), !this.data.isGrowUp || this.data.isGrowUp && "正在找工作" == t.name ? (this.setData({
                        typeOneSelected: t,
                        jobStatusTypeStep: 2
                    }), 2 != t.id && this.saveOrUpdatePostFun(t.id, "", "")) : (s.a.showToast({
                        title: "谢谢反馈 (｡･∀･)ﾉﾞ",
                        icon: "none"
                    }), this.saveOrUpdatePostFun(t.id, "", ""), this.onClose());
                },
                selectJobStatusOne: function(t) {
                    t = t.currentTarget.dataset.obj, this.data.jobStatusType, t.id, s.a.eventCenter.trigger("taroClick", {
                        funName: "标记求职状态弹窗-选中求职状态类型一或者类型二,状态一的选项"
                    }), this.setData({
                        statusOneSelected: t
                    }), 0 == t.id ? s.a.reLaunch({
                        url: "/pages/find/index/index"
                    }) : s.a.showToast({
                        title: "谢谢反馈 (｡･∀･)ﾉﾞ",
                        icon: "none"
                    }), this.onClose();
                },
                selectJobStatusTwo: function() {
                    this.data.jobStatusType, s.a.eventCenter.trigger("taroClick", {
                        funName: "标记求职状态弹窗-选中求职状态类型一或者类型二,状态二的选项"
                    }), s.a.navigateTo({
                        url: "/secondBag/pages/mine/myCourse/myCourse"
                    }), this.onClose();
                },
                selectJobStatusThree: function(t) {
                    t = t.currentTarget.dataset.obj, this.data.jobStatusType, t.id, s.a.eventCenter.trigger("taroClick", {
                        funName: "标记求职状态弹窗-选中求职状态类型一,状态三的选项"
                    }), s.a.showToast({
                        title: "谢谢反馈 (｡･∀･)ﾉﾞ",
                        icon: "none"
                    }), this.saveOrUpdatePostFun(2, "", t.id), this.onClose();
                },
                selectJobStatusTypeThree: function(t) {
                    t = t.currentTarget.dataset.obj, this.data.jobStatusType, t.id, s.a.eventCenter.trigger("taroClick", {
                        funName: "标记求职状态弹窗-选中求职状态类型三的选项"
                    }), 2 != t.id ? (s.a.showToast({
                        title: "谢谢反馈 (｡･∀･)ﾉﾞ",
                        icon: "none"
                    }), this.saveOrUpdatePostFun(2, t.id, "")) : (s.a.reLaunch({
                        url: "/pages/find/index/index"
                    }), this.saveOrUpdatePostFun(3, t.id, "")), this.onClose();
                },
                saveOrUpdatePostFun: function(t, e, o) {
                    i.a.xyb_request("answersheet/ApplyPostQuestionnaire!saveOrUpdatePost.action", "POST", {
                        status: t,
                        satisfaction: e,
                        prepareTodo: o
                    }, !1, !1).then(function(t) {}, function(t) {});
                }
            }
        })((function(e, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + t(o));
            e.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
        }(l, s.a.Component), u(l, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, n) : void 0;
                })(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new s.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (h = this.data).isShow, o = h.isGrowUp, n = h.jobStatusTypeStep, s = h.jobStatusType, u = h.jobStatusTypeOne, i = h.typeOneSelected, r = h.jobStatusStatusOne, p = (h.statusOneSelected, 
                h.jobStatusStatusThree), c = h.statusThreeSelected, l = h.jobStatusTypeThree;
                this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.onCloseEvent(e);
                }, this.anonymousFunc3 = function(e) {
                    e.stopPropagation(), t.onCloseEvent(e);
                }, this.anonymousFunc5 = function(e) {
                    e.stopPropagation(), t.selectJobStatusTwo(e);
                };
                var y = 1 == n ? u.map(function(e, o) {
                    return e = {
                        $original: Object(a.internal_get_original)(e)
                    }, o = "ecezz" + o, t.anonymousFunc1Map[o] = function(e) {
                        e.stopPropagation(), t.selectJobStatusTypeOne(e);
                    }, {
                        _$indexKey: o,
                        $original: e.$original
                    };
                }) : [], b = 1 == n ? l.map(function(e, o) {
                    return e = {
                        $original: Object(a.internal_get_original)(e)
                    }, o = "ecfzz" + o, t.anonymousFunc2Map[o] = function(e) {
                        e.stopPropagation(), t.selectJobStatusTypeThree(e);
                    }, {
                        _$indexKey2: o,
                        $original: e.$original
                    };
                }) : [], d = 0 == i.id ? r.map(function(e, o) {
                    return e = {
                        $original: Object(a.internal_get_original)(e)
                    }, o = "ecgzz" + o, t.anonymousFunc4Map[o] = function(e) {
                        e.stopPropagation(), t.selectJobStatusOne(e);
                    }, {
                        _$indexKey3: o,
                        $original: e.$original
                    };
                }) : [], h = 2 == i.id ? p.map(function(e, o) {
                    return e = {
                        $original: Object(a.internal_get_original)(e)
                    }, o = "echzz" + o, t.anonymousFunc6Map[o] = function(e) {
                        e.stopPropagation(), t.selectJobStatusThree(e);
                    }, {
                        _$indexKey4: o,
                        $original: e.$original
                    };
                }) : [];
                return Object.assign(this.__state, {
                    loopArray631: y,
                    loopArray632: b,
                    loopArray633: d,
                    loopArray634: h,
                    isShow: e,
                    jobStatusTypeStep: n,
                    jobStatusType: s,
                    jobStatusTypeOne: u,
                    jobStatusTypeThree: l,
                    typeOneSelected: i,
                    jobStatusStatusOne: r,
                    statusThreeSelected: c,
                    jobStatusStatusThree: p,
                    isGrowUp: o
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
                for (var e, o = arguments.length, n = Array(1 < o ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = arguments[a];
                return "object" === (void 0 === n ? "undefined" : r(n)) && n.stopPropagation && n.stopPropagation(), 
                this.anonymousFunc1Map[t] && (e = this.anonymousFunc1Map)[t].apply(e, n);
            }
        }, {
            key: "anonymousFunc2",
            value: function(t) {
                for (var e, o = arguments.length, n = Array(1 < o ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = arguments[a];
                return "object" === (void 0 === n ? "undefined" : r(n)) && n.stopPropagation && n.stopPropagation(), 
                this.anonymousFunc2Map[t] && (e = this.anonymousFunc2Map)[t].apply(e, n);
            }
        }, {
            key: "anonymousFunc3",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc4",
            value: function(t) {
                for (var e, o = arguments.length, n = Array(1 < o ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = arguments[a];
                return "object" === (void 0 === n ? "undefined" : r(n)) && n.stopPropagation && n.stopPropagation(), 
                this.anonymousFunc4Map[t] && (e = this.anonymousFunc4Map)[t].apply(e, n);
            }
        }, {
            key: "anonymousFunc5",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc6",
            value: function(t) {
                for (var e, o = arguments.length, n = Array(1 < o ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = arguments[a];
                return "object" === (void 0 === n ? "undefined" : r(n)) && n.stopPropagation && n.stopPropagation(), 
                this.anonymousFunc6Map[t] && (e = this.anonymousFunc6Map)[t].apply(e, n);
            }
        } ]), u = o = l, o.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6" ], 
        o.$$componentPath = "components/JobStatusPopup/jobStatusPopup", o = u)) || o, o = u, 
        Component(n(0).default.createComponent(u));
    },
    435: function(t, e, o) {
        t.exports = o.p + "components/JobStatusPopup/jobStatusPopup.wxml";
    }
}, [ [ 1691, 0, 1, 2 ] ] ]);