var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 51 ], {
    1574: function(o, e, n) {
        n.r(e), n(986);
        var a = n(0), u = n.n(a);
        e = n(2), a = n.n(e), n(987), e = function(t, o, e) {
            return o && i(t.prototype, o), e && i(t, e), t;
        };
        function i(t, o) {
            for (var e = 0; e < o.length; e++) {
                var n = o[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function s(o, e) {
            if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != t(e) && "function" != typeof e ? o : e;
        }
        function c() {
            var t, o;
            !function(t, o) {
                if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
            }(this, c);
            for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
            return (t = o = s(this, (t = c.__proto__ || Object.getPrototypeOf(c)).call.apply(t, [ this ].concat(n)))).$usedState = [ "statusHeight", "navHeight", "hidePlaceHolder", "incompleteResume", "transparent", "customBackgroundColor", "needHome", "fromShareLink", "isBlack", "hideBack", "titleLeftButtonRight", "topBar", "isBold", "titleImage", "focusState", "focusStateText" ], 
            o.config = {
                component: !0
            }, o.customComponents = [], s(o, t);
        }
        e = a()({
            properties: {
                customBackReturn: {
                    type: Boolean,
                    value: !1
                },
                customHomeReturn: {
                    type: Boolean,
                    value: !1
                },
                customTitleReturn: {
                    type: Boolean,
                    value: !1
                },
                topBar: {
                    type: Object,
                    value: !1
                },
                needHome: {
                    type: Boolean,
                    value: !1
                },
                transparent: {
                    type: Boolean,
                    value: !1
                },
                isBlack: {
                    type: Boolean,
                    value: !0
                },
                isBold: {
                    type: Boolean,
                    value: !1
                },
                customBackgroundColor: {
                    type: String,
                    value: "#ffffff"
                },
                hideBack: {
                    type: Boolean,
                    value: !1
                },
                incompleteResume: {
                    type: Boolean,
                    value: !1
                },
                hidePlaceHolder: {
                    type: Boolean,
                    value: !1
                },
                titleLeftButtonRight: {
                    type: Boolean,
                    value: !1
                },
                titleImage: {
                    type: String,
                    value: ""
                },
                personId: {
                    type: Number,
                    value: null
                },
                focusState: {
                    type: Boolean,
                    value: !1
                },
                focusStateText: {
                    type: String,
                    value: ""
                },
                fromShareLink: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {},
            methods: {
                backClick: function() {
                    this.data.customBackReturn ? this.triggerEvent("customBackReturn") : 1 == u.a.getCurrentPages().length ? u.a.reLaunch({
                        url: "/pages/find/index/index"
                    }) : u.a.navigateBack({
                        delta: 1
                    });
                },
                homeClick: function() {
                    this.data.customHomeReturn && this.triggerEvent("customHomeReturn");
                },
                homeClickEvent: function() {
                    this.triggerEvent("customHomeReturn");
                },
                titleClick: function() {
                    this.data.customTitleReturn && this.triggerEvent("customTitleReturn");
                },
                changeFocusStatus: function() {
                    this.data.personId ? this.triggerEvent("changeFocusStatusEvent", this.data.personId) : this.triggerEvent("changeFocusStatusEvent", this.data.topBar.title);
                }
            },
            attached: function() {
                var t = this;
                u.a.getSystemInfo({
                    success: function(o) {
                        var e = -1 < o.system.indexOf("iOS");
                        t.setData({
                            statusHeight: o.statusBarHeight,
                            navHeight: e ? 44 : 48
                        });
                    }
                });
            }
        })((function(o, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + t(e));
            o.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(o, e) : o.__proto__ = e);
        }(c, u.a.Component), e(c, [ {
            key: "_constructor",
            value: function(t) {
                (function t(o, e, n) {
                    null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, e);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(n) : void 0 : null !== (o = Object.getPrototypeOf(o)) ? t(o, e, n) : void 0;
                })(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new u.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var o = (g = this.data).statusHeight, e = g.navHeight, n = g.hidePlaceHolder, a = g.incompleteResume, u = g.transparent, i = g.customBackgroundColor, s = g.isBlack, c = g.needHome, r = g.hideBack, p = g.topBar, l = g.isBold, m = g.titleLeftButtonRight, f = g.titleImage, h = g.focusState, y = g.focusStateText, g = g.fromShareLink;
                return this.anonymousFunc0 = function(o) {
                    o.stopPropagation(), t.backClick(o);
                }, this.anonymousFunc1 = function(o) {
                    o.stopPropagation(), t.homeClick(o);
                }, this.anonymousFunc2 = function(o) {
                    o.stopPropagation(), t.backClick(o);
                }, this.anonymousFunc3 = function(o) {
                    o.stopPropagation(), t.homeClick(o);
                }, this.anonymousFunc4 = function(o) {
                    o.stopPropagation(), t.backClick(o);
                }, this.anonymousFunc5 = function(o) {
                    o.stopPropagation(), t.homeClickEvent(o);
                }, this.anonymousFunc6 = function(o) {
                    o.stopPropagation(), t.homeClickEvent(o);
                }, this.anonymousFunc7 = function(o) {
                    o.stopPropagation(), t.titleClick(o);
                }, this.anonymousFunc8 = function(o) {
                    o.stopPropagation(), t.titleClick(o);
                }, this.anonymousFunc9 = function(o) {
                    o.stopPropagation(), t.changeFocusStatus(o);
                }, Object.assign(this.__state, {
                    statusHeight: o,
                    navHeight: e,
                    hidePlaceHolder: n,
                    incompleteResume: a,
                    transparent: u,
                    customBackgroundColor: i,
                    needHome: c,
                    fromShareLink: g,
                    isBlack: s,
                    hideBack: r,
                    titleLeftButtonRight: m,
                    topBar: p,
                    isBold: l,
                    titleImage: f,
                    focusState: h,
                    focusStateText: y
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
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc8",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc9",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), e = a = c, a.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9" ], 
        a.$$componentPath = "components/top-button-group/top-button-group", a = e)) || a, 
        a = e, Component(n(0).default.createComponent(e));
    },
    315: function(t, o, e) {
        t.exports = e.p + "components/top-button-group/top-button-group.wxml";
    },
    986: function(t, o, e) {
        e(315);
    },
    987: function(t, o, e) {}
}, [ [ 1574, 0, 1 ] ] ]);