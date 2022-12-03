var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 23 ], {
    1063: function(t, e, n) {
        n(336);
    },
    1064: function(t, e, n) {},
    1595: function(e, n, o) {
        o.r(n), o(1063);
        var a = o(0), i = o.n(a), s = (n = o(2), a = o.n(n), o(1));
        o(1064), n = function(t, e, n) {
            return e && c(t.prototype, e), n && c(t, n), t;
        };
        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        function r(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != t(n) && "function" != typeof n ? e : n;
        }
        function u() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, u);
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return (t = e = r(this, (t = u.__proto__ || Object.getPrototypeOf(u)).call.apply(t, [ this ].concat(o)))).$usedState = [ "isShow", "onClose", "loadSuccess", "labTabList", "showReason", "reasonTabList", "contentLength", "maxWordNum", "allowSubmit", "loadText" ], 
            e.config = {
                component: !0,
                usingComponents: {
                    "van-popup": "../../vant-weapp/dist/popup/index"
                }
            }, e.customComponents = [], r(e, t);
        }
        n = a()({
            properties: {
                isShow: {
                    type: Boolean,
                    value: ""
                },
                reportId: {
                    type: String,
                    value: ""
                },
                type: {
                    type: Number,
                    value: ""
                }
            },
            data: {
                loadSuccess: !0,
                labTabList: [ {
                    id: 1,
                    name: "垃圾营销",
                    checked: !1,
                    list: [ {
                        id: 0,
                        name: "广告信息",
                        checked: !1
                    }, {
                        id: 1,
                        name: "虚假广告",
                        checked: !1
                    }, {
                        id: 2,
                        name: "其他广告",
                        checked: !1
                    } ]
                }, {
                    id: 2,
                    name: "有害信息",
                    checked: !1,
                    list: [ {
                        id: 3,
                        name: "暴恐血腥",
                        checked: !1
                    }, {
                        id: 4,
                        name: "宗教民族问题",
                        checked: !1
                    }, {
                        id: 5,
                        name: "侮辱英烈",
                        checked: !1
                    }, {
                        id: 6,
                        name: "其他有害信息",
                        checked: !1
                    } ]
                }, {
                    id: 3,
                    name: "违法信息",
                    checked: !1,
                    list: [ {
                        id: 7,
                        name: "涉枪爆刀",
                        checked: !1
                    }, {
                        id: 8,
                        name: "赌博",
                        checked: !1
                    }, {
                        id: 9,
                        name: "毒品",
                        checked: !1
                    }, {
                        id: 10,
                        name: "假证",
                        checked: !1
                    }, {
                        id: 11,
                        name: "其他违禁品",
                        checked: !1
                    } ]
                }, {
                    id: 4,
                    name: "涉黄信息",
                    checked: !1,
                    list: [ {
                        id: 12,
                        name: "低俗信息",
                        checked: !1
                    }, {
                        id: 13,
                        name: "招嫖信息",
                        checked: !1
                    }, {
                        id: 14,
                        name: "色情图文",
                        checked: !1
                    }, {
                        id: 15,
                        name: "侵害未成年人",
                        checked: !1
                    }, {
                        id: 16,
                        name: "售卖色情资源",
                        checked: !1
                    } ]
                }, {
                    id: 5,
                    name: "侵犯权益",
                    checked: !1,
                    list: [ {
                        id: 17,
                        name: "人身攻击",
                        checked: !1
                    }, {
                        id: 18,
                        name: "泄露隐私",
                        checked: !1
                    }, {
                        id: 19,
                        name: "侵犯肖像权",
                        checked: !1
                    }, {
                        id: 20,
                        name: "其他非法侵犯",
                        checked: !1
                    } ]
                } ],
                reasonTabList: [],
                showReason: !1,
                currentLab: {},
                currentReason: {},
                allowSubmit: !1,
                inputText: "",
                loadText: "正在加载...",
                contentLength: 0,
                maxWordNum: 200,
                editorCtx: null
            },
            lifetimes: {
                attached: function() {},
                detached: function() {},
                ready: function() {}
            },
            methods: {
                onClose: function() {
                    this.triggerEvent("close", "", {
                        bubbles: !1
                    }), this.init();
                },
                hide: function() {
                    this.triggerEvent("close", "", {
                        bubbles: !1
                    });
                },
                show: function(t, e) {
                    var n;
                    this.data.loadSuccess || (n = this, setTimeout(function() {
                        n.setData({
                            loadText: "加载失败，点击重试",
                            loadSuccess: !1
                        });
                    }, 2e3)), this.setData({
                        reportId: t,
                        type: e,
                        isShow: !this.data.isShow
                    });
                },
                init: function() {
                    for (var t = this.data.labTabList, e = 0; e < t.length; e++) {
                        t[e].checked = !1;
                        for (var n = t[e].list, o = 0; o < n.length; o++) n[o].checked = !1;
                    }
                    this.setData({
                        labTabList: t,
                        reasonTabList: [],
                        showReason: !1,
                        currentLab: {},
                        currentReason: {},
                        allowSubmit: !1,
                        inputText: ""
                    });
                },
                labRadioChange: function(t) {
                    var e = t.detail.value;
                    if (null == this.data.currentLab || this.data.currentLab.id != e) {
                        for (var n = this.data.labTabList, o = null, a = !1, i = null, s = 0; s < n.length; s++) e == n[s].id ? ((o = n[s]).checked = !0, 
                        i = o.list, a = !0) : n[s].checked = !1;
                        if (null != i) for (var c = 0; c < i.length; c++) i[c].checked = !1;
                        this.setData({
                            labTabList: n,
                            reasonTabList: o.list,
                            currentLab: o,
                            currentReason: null,
                            showReason: a,
                            allowSubmit: !1
                        });
                    }
                },
                reasonRadioChange: function(t) {
                    var e = t.detail.value;
                    if (null == this.data.currentReason || this.data.currentReason.id != e) {
                        for (var n = this.data.reasonTabList, o = null, a = 0; a < n.length; a++) e == n[a].id ? (o = n[a], 
                        n[a].checked = !0) : n[a].checked = !1;
                        this.setData({
                            reasonTabList: n,
                            currentReason: o,
                            allowSubmit: !0
                        });
                    }
                },
                inputListener: function(t) {
                    var e = t.detail.text;
                    0 < (t = e.length - 1) ? 200 < t ? i.a.createSelectorQuery().in(this.$scope).select("#editor").context(function(t) {
                        console.log(t), (t.context || "").undo();
                    }).exec() : this.setData({
                        contentLength: t,
                        inputText: e
                    }) : this.setData({
                        contentLength: t,
                        inputText: ""
                    });
                },
                sumit: function() {
                    var t = this;
                    console.log(this.data.allowSubmit), this.data.allowSubmit && (200 < this.data.contentLength ? i.a.showToast({
                        title: "输入文字不能大于200字",
                        icon: "none"
                    }) : s.a.xyb_request("common/Report.action", "POST", {
                        reportId: this.data.reportId,
                        type: this.data.type,
                        reason: this.data.inputText,
                        category: this.data.currentReason.id
                    }, !0, !1).then(function(e) {
                        i.a.showToast({
                            title: "提交成功",
                            icon: "none"
                        }), t.hide(), t.init();
                    }, function(t) {
                        console.log(t);
                    }));
                },
                reLoadForError: function() {
                    "加载失败，点击重试" == this.data.loadText && this.setData({
                        loadText: "正在加载..."
                    });
                },
                onEditorReady: function() {}
            }
        })((function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
        }(u, i.a.Component), n(u, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, o) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, o) : void 0;
                })(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = this.onClose, n = (l = this.data).isShow, o = l.labTabList, a = l.reasonTabList, i = l.contentLength, s = l.maxWordNum, c = l.showReason, r = l.loadSuccess, u = l.loadText, l = l.allowSubmit;
                return this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.onClose(e);
                }, this.anonymousFunc1 = function(e) {
                    e.stopPropagation(), t.reLoadForError(e);
                }, this.anonymousFunc2 = function(e) {
                    e.stopPropagation(), t.sumit(e);
                }, Object.assign(this.__state, {
                    isShow: n,
                    onClose: e,
                    loadSuccess: r,
                    labTabList: o,
                    showReason: c,
                    reasonTabList: a,
                    contentLength: i,
                    maxWordNum: s,
                    allowSubmit: l,
                    loadText: u
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
        } ]), n = a = u, a.$$events = [ "onClose", "anonymousFunc0", "labRadioChange", "reasonRadioChange", "inputListener", "anonymousFunc1", "anonymousFunc2" ], 
        a.$$componentPath = "components/complaint-popup/complaint-popup", a = n)) || a, 
        a = n, Component(o(0).default.createComponent(n));
    },
    336: function(t, e, n) {
        t.exports = n.p + "components/complaint-popup/complaint-popup.wxml";
    }
}, [ [ 1595, 0, 1, 2 ] ] ]);