var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 11 ], {
    1279: function(e, t, o) {
        o(428);
    },
    1280: function(e, t, o) {},
    1684: function(t, o, n) {
        n.r(o), n(1279);
        var r = n(0), a = n.n(r), i = (n(1280), n(1));
        o = function(e, t, o) {
            return t && s(e.prototype, t), o && s(e, o), e;
        };
        function s(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        function u(t, o) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != e(o) && "function" != typeof o ? t : o;
        }
        function c() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, c);
            for (var o = arguments.length, n = Array(o), r = 0; r < o; r++) n[r] = arguments[r];
            return (e = t = u(this, (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(e, [ this ].concat(n)))).$usedState = [ "data" ], 
            t.customComponents = [], u(t, e);
        }
        (function(t, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + e(o));
            t.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : t.__proto__ = o);
        })(c, r.Component), o(c, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, o, n) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, o);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(n) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, o, n) : void 0;
                })(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new a.a.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this;
                a.a.createIntersectionObserver(this.$scope, {
                    thresholds: [ 0, 1 ],
                    initialRatio: 1,
                    observeAll: !0
                }).relativeToViewport({
                    bottom: -77,
                    top: -184
                }).observe(".exposure-item", function(t) {
                    var o = t.dataset.id;
                    1 === t.intersectionRatio && e.exposure({
                        talkType: 1,
                        talkId: o,
                        doType: 1,
                        pageSource: 0
                    });
                });
            }
        }, {
            key: "exposure",
            value: function(e) {
                i.a.xyb_request("index/TalkOperateData!statistics.action", "POST", e, !1, !1).then(function(e) {});
            }
        }, {
            key: "imgClick",
            value: function(e) {
                console.log(e);
                var t = e.currentTarget.dataset.id;
                this.exposure({
                    talkType: 1,
                    talkId: t,
                    doType: 2,
                    pageSource: 0
                }), this.goDoubleDetails(e);
            }
        }, {
            key: "goDoubleDetails",
            value: function(e) {
                a.a.eventCenter.trigger("taroClick", {
                    funName: "双选会卡片-去往双选会列表详情"
                });
                var t = e.currentTarget.dataset.id, o = e.currentTarget.dataset.item, n = o.name;
                e = o.studentlistimg;
                "END" != o.status ? (a.a.setStorageSync("onShareDoubleMeetingImg", e), parseInt(new Date().getTime() / 1e3) < o.startTime ? o.hasContent ? a.a.navigateTo({
                    url: "/fifthBag/pages/jobModule/preDoubleMeeting/preDoubleMeeting?id=" + o.id + "&fromList=1&pageSource=23"
                }) : this.setData({
                    dualSelectForm: o,
                    signUpDualSelectDialog: !0
                }) : a.a.navigateTo({
                    url: "/videoBag/pages/doubleSelectList/doubleSelectList?id=" + t + "&name=" + n + "&fromList=1&pageSource=23"
                })) : a.a.showToast({
                    title: "此双选会已结束，看看其他的吧~",
                    icon: "none"
                });
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = this.__props.data;
                return Object.assign(this.__state, {
                    data: e
                }), this.__state;
            }
        } ]), o = r = c, r.$$events = [ "imgClick" ], r.$$componentPath = "components/DoubleChoiceSessionCard/DoubleChoiceSessionCard", 
        o = r = o, Component(n(0).default.createComponent(r));
    },
    428: function(e, t, o) {
        e.exports = o.p + "components/DoubleChoiceSessionCard/DoubleChoiceSessionCard.wxml";
    }
}, [ [ 1684, 0, 1, 2 ] ] ]);