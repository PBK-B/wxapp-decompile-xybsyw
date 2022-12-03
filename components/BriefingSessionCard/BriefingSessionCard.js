var n = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 6 ], {
    1275: function(n, t, e) {
        e(425);
    },
    1276: function(n, t, e) {},
    1682: function(t, e, o) {
        o.r(e), o(1275);
        var a = o(0), r = o.n(a), i = (o(1276), o(1)), u = function(n, t) {
            if (Array.isArray(n)) return n;
            if (Symbol.iterator in Object(n)) return function(n, t) {
                var e = [], o = !0, a = !1, r = void 0;
                try {
                    for (var i, u = n[Symbol.iterator](); !(o = (i = u.next()).done) && (e.push(i.value), 
                    !t || e.length !== t); o = !0) ;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    a = !0, r = n;
                } finally {
                    try {
                        !o && u.return && u.return();
                    } finally {
                        if (a) throw r;
                    }
                }
                return e;
            }(n, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, s = Object.assign || function(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e, o = arguments[t];
                for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (n[e] = o[e]);
            }
            return n;
        }, c = function(n, t, e) {
            return t && p(n.prototype, t), e && p(n, e), n;
        };
        function p(n, t) {
            for (var e = 0; e < t.length; e++) {
                var o = t[e];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(n, o.key, o);
            }
        }
        function l(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != n(e) && "function" != typeof e ? t : e;
        }
        var y, m = [], f = void 0;
        function h() {
            var n, t;
            !function(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, h);
            for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
            return (n = t = l(this, (n = h.__proto__ || Object.getPrototypeOf(h)).call.apply(n, [ this ].concat(o)))).$usedState = [ "loopArray643", "loopArray644", "privateData", "hasWIFI", "isPlay", "currentSwipe" ], 
            t.config = {
                usingComponents: {
                    "van-icon": "../../vant-weapp/dist/icon/index"
                }
            }, t.onCountDownEnd = function(n) {
                console.log("onCountDownEnd");
                var e = t.state.privateData;
                e[n].status = 1, t.setState({
                    privateData: e
                });
            }, t.anonymousFunc0Map = {}, t.anonymousFunc1Map = {}, t.anonymousFunc2Map = {}, 
            t.anonymousFunc3Map = {}, t.anonymousFunc4Map = {}, t.anonymousFunc5Map = {}, t.anonymousFunc6Map = {}, 
            t.anonymousFunc7Map = {}, t.anonymousFunc8Map = {}, t.anonymousFunc9Map = {}, t.anonymousFunc10Map = {}, 
            t.anonymousFunc11Map = {}, t.customComponents = [ "CountDown" ], l(t, n);
        }
        (e = (function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + n(e));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(h, a.Component), c(h, [ {
            key: "_constructor",
            value: function(n) {
                (function n(t, e, o) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, e);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? n(t, e, o) : void 0;
                })(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "_constructor", this).call(this, n), 
                y = this.clone(n.data), n = "WIFI" === r.a.getStorageSync("networkType"), console.log("this.formatData(tempData)", this.formatData(y)), 
                this.state = {
                    hasWIFI: n,
                    currentSwipe: 0,
                    isPlay: !1,
                    privateData: this.formatData(y)
                }, this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "clone",
            value: function(n) {
                return JSON.parse(JSON.stringify(n));
            }
        }, {
            key: "siwtchVoice",
            value: function(n, t) {
                n.stopPropagation(), (n = this.state.privateData)[t].isMute = !n[t].isMute, this.setState({
                    privateData: n
                });
            }
        }, {
            key: "videoClick",
            value: function(n) {
                n.stopPropagation(), this.goLiveDetails(n);
            }
        }, {
            key: "videoPlay",
            value: function(n, t) {
                n.stopPropagation(), (n = this.state.privateData)[t].isMute = !1, n[t].isShowVideo = !0, 
                this.setState({
                    privateData: n,
                    isPlay: !0
                }, function() {
                    m[t].play();
                });
            }
        }, {
            key: "formatData",
            value: function(n) {
                var t = this;
                m = [];
                var e = new Date().getTime();
                return n.map(function(n, o) {
                    var a = 1e3 * Number(n.startTime);
                    return m.push(r.a.createVideoContext("Double" + n.id, t.$scope)), 1 === n.status && a - e < 108e5 && 0 < a - e && (console.log("大于3小时 倒计时"), 
                    n.status = -1, n.countDownNum = (a - e) / 1e3), n.startDate = t.startDateFormat(n.startDate) || n.startDate, 
                    s({}, n, {
                        isShowVideo: !!t.state.privateData && t.state.privateData[o].isShowVideo,
                        isMute: !t.state.privateData || t.state.privateData[o].isMute
                    });
                });
            }
        }, {
            key: "goLiveDetails",
            value: function(n) {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "首页宣讲会卡片-去宣讲会详情"
                });
                var t = n.currentTarget.dataset.id, e = n.currentTarget.dataset.status;
                console.log("------", n.currentTarget), n = n.currentTarget.dataset.picurl, 3 != e ? (r.a.setStorageSync("onSharePreachMeetingImg", n), 
                r.a.navigateTo({
                    url: "/videoBag/pages/preachMeeting/preachMeeting?id=" + t + "&fromList=1&pageSource=22"
                })) : r.a.showToast({
                    title: "此宣讲会已结束，看看其他的吧~",
                    icon: "none"
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(n) {}
        }, {
            key: "componentWillMount",
            value: function() {}
        }, {
            key: "componentDidMount",
            value: function() {
                this.openObserver();
            }
        }, {
            key: "openObserver",
            value: function() {
                var n = this;
                (f = r.a.createIntersectionObserver(this.$scope, {
                    thresholds: [ 0, 1 ],
                    initialRatio: 1,
                    observeAll: !0
                })).relativeToViewport({
                    bottom: -77,
                    top: -184
                }).observe(".card-wrap", function(t) {
                    var e = t.dataset.index, o = t.dataset.id, a = n.state.privateData, r = a[e];
                    1 === t.intersectionRatio ? (!r.isShowVideo && n.state.hasWIFI && (r.isShowVideo = !0, 
                    n.setState({
                        privateData: a
                    })), setTimeout(function() {
                        r.preVideoUrl && n.state.hasWIFI && (m.forEach(function(n, t) {
                            t === e ? n.play() : n.pause();
                        }), n.setState({
                            isPlay: !0
                        }));
                    }, 300), n.exposure({
                        talkType: 0,
                        talkId: o,
                        doType: 1,
                        pageSource: 0
                    })) : 0 === t.intersectionRatio && r.preVideoUrl && n.state.isPlay && (m[e].pause(), 
                    n.setState({
                        isPlay: !1
                    }));
                });
            }
        }, {
            key: "clearObserver",
            value: function() {
                f && (f.disconnect(), f = null);
            }
        }, {
            key: "exposure",
            value: function(n) {
                i.a.xyb_request("index/TalkOperateData!statistics.action", "POST", n, !1, !1).then(function(n) {});
            }
        }, {
            key: "componentDidShow",
            value: function() {
                null === f && this.openObserver();
            }
        }, {
            key: "componentDidHide",
            value: function() {
                this.clearObserver();
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.clearObserver();
            }
        }, {
            key: "cardClick",
            value: function(n) {
                console.log(), this.exposure({
                    talkType: 0,
                    talkId: n.currentTarget.dataset.id,
                    doType: 2,
                    pageSource: 0
                });
            }
        }, {
            key: "startDateFormat",
            value: function(n) {
                var t = n, e = (i = new Date()).getFullYear(), o = i.getMonth() + 1, a = i.getDay(), r = (e + "." + n).replace(/\./g, "/"), i = (e = (i = new Date(r)).getMonth() + 1, 
                n = i.getDay(), r = i.getHours(), i.getMinutes());
                return o === e && a === n ? "今天 " + (r || "00") + ":" + (i || "00") : t;
            }
        }, {
            key: "_createData",
            value: function() {
                var n = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var t = this.$prefix, e = ((s = this.__state).currentSwipe, s.isPlay, s.privateData), r = s.hasWIFI, i = e.map(function(e, i) {
                    e = {
                        $original: Object(a.internal_get_original)(e)
                    };
                    var s = "eeczz" + i;
                    n.anonymousFunc0Map[s] = function(t) {
                        return n.videoPlay(t, i);
                    };
                    var c = "eedzz" + i;
                    n.anonymousFunc1Map[c] = function(t) {
                        return n.siwtchVoice(t, i);
                    };
                    var p = e.$original.preVideoUrl ? null : o(426), l = e.$original.preVideoUrl ? null : {
                        width: "100%"
                    }, y = "eeezz" + i;
                    n.anonymousFunc2Map[y] = function(t) {
                        return n.videoPlay(t, i);
                    };
                    var m = "eefzz" + i;
                    n.anonymousFunc3Map[m] = function(t) {
                        return n.siwtchVoice(t, i);
                    };
                    var f = "eegzz" + i;
                    n.anonymousFunc4Map[f] = function(t) {
                        return n.siwtchVoice(t, i);
                    };
                    var h = "eehzz" + i;
                    n.anonymousFunc5Map[h] = function(t) {
                        return n.siwtchVoice(t, i);
                    };
                    var d = Object(a.genCompid)(t + "efezzzzzzz" + i, !0), g = u(d, 2), v = g[0], M = g[1];
                    return -1 === e.$original.status && e.$original.preVideoUrl && !r && a.propsManager.set({
                        data: i,
                        onEnd: n.onCountDownEnd,
                        countDownNum: e.$original.countDownNum
                    }, M, v), d = Object(a.genCompid)(t + "effzzzzzzz" + i, !0), v = (g = u(d, 2))[0], 
                    d = g[1], -1 === e.$original.status && e.$original.preVideoUrl && r && a.propsManager.set({
                        data: i,
                        onEnd: n.onCountDownEnd,
                        countDownNum: e.$original.countDownNum
                    }, d, v), g = Object(a.genCompid)(t + "efgzzzzzzz" + i, !0), g = (v = u(g, 2))[0], 
                    v = v[1], -1 !== e.$original.status || e.$original.preVideoUrl || a.propsManager.set({
                        data: i,
                        onEnd: n.onCountDownEnd,
                        style: l,
                        countDownNum: e.$original.countDownNum
                    }, v, g), {
                        _$indexKey: s,
                        _$indexKey2: c,
                        $loopState__temp2: p,
                        $loopState__temp4: l,
                        _$indexKey3: y,
                        _$indexKey4: m,
                        _$indexKey5: f,
                        _$indexKey6: h,
                        $compid__915: M,
                        $compid__916: d,
                        $compid__917: v,
                        $original: e.$original
                    };
                }), s = 1 < e.length ? e.map(function(i, s) {
                    i = {
                        $original: Object(a.internal_get_original)(i)
                    };
                    var c = "eeizz" + s;
                    n.anonymousFunc6Map[c] = function(t) {
                        return n.videoPlay(t, s);
                    };
                    var p = "eejzz" + s;
                    n.anonymousFunc7Map[p] = function(t) {
                        return n.siwtchVoice(t, s);
                    };
                    var l = i.$original.preVideoUrl ? null : o(426), y = i.$original.preVideoUrl ? null : {
                        width: "100%"
                    }, m = "efazz" + s;
                    n.anonymousFunc8Map[m] = function(t) {
                        return n.videoPlay(t, s);
                    };
                    var f = "efbzz" + s;
                    n.anonymousFunc9Map[f] = function(t) {
                        return n.siwtchVoice(t, s);
                    };
                    var h = "efczz" + s;
                    n.anonymousFunc10Map[h] = function(t) {
                        return n.siwtchVoice(t, s);
                    };
                    var d = "efdzz" + s;
                    n.anonymousFunc11Map[d] = function(t) {
                        return n.siwtchVoice(t, s);
                    };
                    var g = Object(a.genCompid)(t + "efhzzzzzzz" + s, !0), v = u(g, 2), M = v[0], F = v[1];
                    return 1 < e.length && -1 === i.$original.status && i.$original.preVideoUrl && !r && a.propsManager.set({
                        data: s,
                        onEnd: n.onCountDownEnd,
                        countDownNum: i.$original.countDownNum
                    }, F, M), g = Object(a.genCompid)(t + "efizzzzzzz" + s, !0), M = (v = u(g, 2))[0], 
                    g = v[1], 1 < e.length && -1 === i.$original.status && i.$original.preVideoUrl && r && a.propsManager.set({
                        data: s,
                        onEnd: n.onCountDownEnd,
                        countDownNum: i.$original.countDownNum
                    }, g, M), v = Object(a.genCompid)(t + "efjzzzzzzz" + s, !0), v = (M = u(v, 2))[0], 
                    M = M[1], 1 < e.length && -1 === i.$original.status && !i.$original.preVideoUrl && a.propsManager.set({
                        data: s,
                        onEnd: n.onCountDownEnd,
                        style: y,
                        countDownNum: i.$original.countDownNum
                    }, M, v), {
                        _$indexKey7: c,
                        _$indexKey8: p,
                        $loopState__temp6: l,
                        $loopState__temp8: y,
                        _$indexKey9: m,
                        _$indexKey10: f,
                        _$indexKey11: h,
                        _$indexKey12: d,
                        $compid__918: F,
                        $compid__919: g,
                        $compid__920: M,
                        $original: i.$original
                    };
                }) : [];
                return Object.assign(this.__state, {
                    loopArray643: i,
                    loopArray644: s
                }), this.__state;
            }
        }, {
            key: "swiperChange",
            value: function(n) {
                this.setState({
                    currentSwipe: n.detail.current
                });
            }
        }, {
            key: "anonymousFunc0",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc0Map[n] && (t = this.anonymousFunc0Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc1",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc1Map[n] && (t = this.anonymousFunc1Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc2",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc2Map[n] && (t = this.anonymousFunc2Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc3",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc3Map[n] && (t = this.anonymousFunc3Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc4",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc4Map[n] && (t = this.anonymousFunc4Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc5",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc5Map[n] && (t = this.anonymousFunc5Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc6",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc6Map[n] && (t = this.anonymousFunc6Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc7",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc7Map[n] && (t = this.anonymousFunc7Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc8",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc8Map[n] && (t = this.anonymousFunc8Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc9",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc9Map[n] && (t = this.anonymousFunc9Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc10",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc10Map[n] && (t = this.anonymousFunc10Map)[n].apply(t, o);
            }
        }, {
            key: "anonymousFunc11",
            value: function(n) {
                for (var t, e = arguments.length, o = Array(1 < e ? e - 1 : 0), a = 1; a < e; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc11Map[n] && (t = this.anonymousFunc11Map)[n].apply(t, o);
            }
        } ]), c = e = h, e.$$events = [ "cardClick", "goLiveDetails", "videoClick", "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "swiperChange", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11" ], 
        e.options = {
            addGlobalClass: !0
        }, e.$$componentPath = "components/BriefingSessionCard/BriefingSessionCard", c)).defaultProps = {
            data: []
        }, c = e, Component(o(0).default.createComponent(e));
    },
    425: function(n, t, e) {
        n.exports = e.p + "components/BriefingSessionCard/BriefingSessionCard.wxml";
    },
    426: function(n, t) {
        n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAYAAADHLIObAAAaOklEQVR4XtVdC5BU1Zn+bw8zMCPIOAo4lrxfwxsiWqAhBt9PzOrKwm40WAjdrVl3N8ZUknLNUllTa6V2FU3V9ABu3LhkVzEGNvgiuj4AQQF1iRA1YHR4zSg6Iq+Rmem79Z8+/5nv/PfcGVC3KttVU919+z6/8/3f/zr3TkRf4FVfXz8kiqJr4jieEkXRGXEc19r3mi+w2//LTT+NomgvEe0jor1RFG2PomjVwoULt33Rg0YnuoOGhoZBcRzPJyIGcBJv37t3bzrppJOosrKSqqqqqKK8nGLZcRx/vs9xaQ+xfT/Rz247OH57ezt99tlnpb9jx+jo0aNm/1EU7SSiVVEUPZTNZn93opjw+scN5PLly085ePDgD+M4/utMJtPz9NNPp4EDB9KgQYMMiHxC8mcRMACaZcViaRH/yWe1vt5egHD7FEAAYDxed9vj/mRQGMyP9u+n/R99RC2ffEIdHR18og9nMpm7stls44kA2i2QcRxHhULhb6MououIqutGj6YpU6ZQr8pKRqkEVOnM3GcGC5fJiYcuJgGYBVu2LyrgHDPtcc328lkNEq9bDCzztrHbt3d0UOOuXbRn717epjWKovsHDhx41xVXXPHZ8QDaJZANDQ1VxWLxF0R03dChQ2nq1KnUt29fw6oQgLwzc+GaNSGgAwDxdgKc+xwaKDtoCQCB8RpEHEzNcgT22LFj9H5jI+1ramKT31BWVvZnCxYsaO4OzFQgrRauIqLJ5513HtXV1bl9dckiuBjDhihywIeY6fYlLMbt08y4C6kwAMp2XciIPhdhrgzgJwcO0O/feovNfVd5efk1N9988+tdgRkE0oK4saKiovaSSy6h2traTuEH1nh6J3qITiJg+sfFFHEyiqFiBY5BAaC1fDiAQDJweydBSlKiKKIjra20bft2am1tPRLH8cx8Pv9qGpgJINmc4zheX1FRMfnaa6+lk08+2WzrtAaZcxwmJheWplXaYThzFe3TWgheOCQxngmjpFjQPWCtI9QaL144ymSItfP111+no62t+8rLy6fOnz+fw6fEywPSOpYVURRdd9VVV9EZZ5zhhNwzBXQsIPbO4YCuhTQzjZViVhjyoMmhLifMFyxCGIfHMecPThCdGA6eDGwmk6FMFBlpam1tpc2vvcZmvrmmpuZrs2fPPqqR9ICsr6//OyL6lxkzZtCYMWO8deUk0KFIeIMAmhPWYQ5eRCAEStVOlBFhP25/HPvq1muHvLqNC5mRbOIMaktLC72xdSt/b8hms7lUIG2c+O6QIUOqL77oIrMDHjV+lxHTgAnbJPhGb+hEPxQipYQ0Og5NC308jcN9fU6Qka2ybwSRMeC/ne++yx69g4gm5nK57QimY2ShUPgpEX33+uuvp76siwygfWkBFwbp8APNTXQnaMagXcHfrQmiR0/TPj1goe84wJ5Jawdp2cnrsFkzmMxGRoLfO4pFWvfyy9Te3v6bXC43KwEke+lisfhOXV1dzxlf/aoxTR4B1CoHKlykWUfHlOBxE9mGMkUPHAyskWXg3IQ5DiwEAk0fNdqCozU+wXYVrwojxbQNoFFkgva333mHevTo8bUFCxasFVwM7QqFwiLOXObOnUu9evUyvxmTtswxsSCcqA64HUNR8AFQrYGpuiVaip4a2OuFP7Bu8Ph4vpCqOl1XbNQOxzDS6iODyBgIJmvXr+d8/T/z+fxcDeQbtbW1ky6/7DJn0gZGYSUzxH7WzkZA9fQS2aEYqlkYDO4VO4NxY8As01LQxHKwqkRCYP2CYaBloQAq79vfeosaGxs/PfXUU/vNnj37mIGKS2FE9Mfp06YZTy0mbd5RBLCKo0QdnZHWKA8oe/E8GDp+TP0u8V8o0E9zNLqAonJukQgMp5CpfH7obAwjrU4yLh+3tNCmzZtZNy/NZrNrDJCFQuFv4ji+j51Mn969S/po2SjsMxeOZm5Tv4Q3R/bZ/TimdlG18XJstQ9hYygHT2hsygAFc3iRDDB72Z/22BJPmtgykzHRzPMvvEBtbW31+Xz+FmHkQ3369PnWn193XaentqbsdmyBlfAHNdOxS4BWF5PIJLqp5uig3Jk1aKXW3ONhd+o2OjyDGFJ00nlv0M3NW7bQh/v3b8zn89OFkWsG9O9/8WWsj045I8dKlyVY58Pfg+AF2IAm3FVZzav0qIIuHy/BRguqc1opOtwt4IF0l48nHlrePafDJl5WRm+++Sbt2r37/Xw+z9JoTPvNwYMHj/v6+ed7muicTbFY0k1kHJq5LpvZ344eOUI/veceam5upm/fdhuNGj3ahVNpDsZzCspzS5jlwAGGerlyoGDsAYpaH8qcrLPxYsiyMoMBOp0dO3fSjp07j2Wz2V5RFJmi7UdjxoypOXvqVMNH0UgBTxhoAnQVawmBHQAA9l133kk/e+ABs0q/fv3oxbVr6bR+/UrH0DFfV7VJe0wvWkgpKAcLzWlZlCo+ow8QLeT9GUBtcI5A7tq1i97cvp3Z2y+bze5nrx1PnjyZJk6YUMLFAuZ5beybWLDEu7v0EBwQm+L8efNo1cqVTi1mzpxJj6xYYfYfiiPdIHXnYQNBPR8EtRj3b04Xk4aU/FycoudorBkLGxHI5g8+oC2vvUZlZWWjFy5c+I4HpMtkeAQsqKbmaL8LW00OLroELMaLWbd2LV1z9dWduktE/7BoEeVvvTVo4roiLpaA+ugF5Ck5PGZj3TFfS4mXGgZYiE6HJSsB5KRJkwwjzclDjo1BuICIYGNTS0ZeWM2//XjRIrp/8WIHZnl5OT3x1FM0cZJpPhqmOKBSwh45ngxesJVxHEUQDKOkiuAcGegxm7FkMtrpuOVRREFGMpAT2LTlhJjSFlC5ADF50VFcF1NG0UB+b29roysuu8wURuU1fPhw+u2zz1KvqioX/Gvn4yIDMcsUx4LHEvYhCz2TVzXUkGMTE+brYc+MDgZB5M/7mpvpNW3aDOT4ceOcRroRE+dhdbNk7VbjrLlrM9fO5I/vvksXzpxJhw4dcmD+xZw5dN/ixa5d61XF7TFDhdtQOqrbu9abdbaCu2Cr009rDcJGp5O2sIvM5M88CGFGTpxI48aPL+meBKRSj7SX7zIepY3Gs1lwsWIkzOBlKx55hG69xSQA7lVoaKCrZ81ySYAUjjFuDYHkGCeVJ2CrHkTcp9bOEFsRwEQ9UkpqNgxijeSg3HM2EydONIx0OqhmDqB2YjwpqHhmIsCDp2cn9O1bbqFfPfaYA7JPnz702+eeM5MM0KGYC1TtC2S9PpZ2KB6Yut+jPTawX3xDSBfRW8vnpqYm037wgZwwgcZZ03asAnM2V49lNSk+QM3SC9gxXLLadPjQIbroggvovffec2BOPess+tXKlXwynX1yYDx68gTbusjdQ/qnAdaDY/QQWCeASqajs5xUIMeOG+eFNO5qJfSxJ47mi2KP7HTOQoJpa4Zbtmyhb8yaxRVmt/vbbruN7vj+9/2QSDHJHCcQP3psBBMXeZBwyYEI/XC9TJjGhNEBuAaR121qbjYVII+R7LHH2hKaJ2RdfEHNwdH2gNYFWiL62f3300/uvhvGKTKB+rTp0zunnui0M5B/a4Z63UaQl6Dpq3qkOBDJaLQp63pkOpDjx9PYsWOPF0OzngckFH7xN0/gYdbFnNmzad26de54PAHhmTVrqG91tbfvNP1DELtyIl1uDymimHUIMD5WKK7kKS2bE4wcP95rvwqr9HtJKpO9HGdKFhqvOqQ0j020uamJLr7wQvr4448dmJdceiktWbas9F1V2BPdS1VIwRjShEio3dhIEwuxy1yUYuVLquKh6o8D2TbD9oaAZI+NjJRRdkCCsxEPHmKCy78tEOa75OAYXBPRs2vW0E3z5nlW8I93303fvOGGTr0EXQw5m7RowTHRVnckLmYHox0RhjzGxC1ZNDu1Tu7bt49e1YxkIGVCAIY6Xdq6bj2AjuEAoOA7s7fr/v2dd9JDP/+5O0yvnj1p5erVNFpKbvrCMYYNlMswdkXA0GLQEUpu7UCCCQEIpOGRVIFsCsmm/eqmTb6z4dCHnY12IHKFrtWAyEoVvQt9dK0KbKLZOJF/45mzs6680sz6khfPv/z1qlVUwd1MSFlxpocbHAEazsEzc2G06oIKsBh0i2yFSmY6PWSQ9zIjE0COHWum7SVMGcIX0S6vLgneUYCQEZfpfIaFonudK7m4cccf/kBXXX45tX7WOZ/zhhtuoEU//rHfApY6JpTFUEoSaSbWPUOBOUwCEPZhk0s+J+JLm9mkAzl6dKJng2aOAGlBxyaZ1BtFH/kdm/FYfmNc+bf/WL6cfviDH3hKsmTJErrgootK4xfQypBmyg5w5pzXk4eOJGqeAUvMF8ybty2Dlix6cA7IX3n1Vd+02dGMYV3qUhRLP6KZO3CBdY6ByEIxPQmBVFzIA5PLZumZp592Z1BdXU1PPvUU9evf3xpDyVEEHRropXaCWh/FshKdQuuNeXlIE/X6+/bupY0JIMeMMQIvQCXqkDA5QMAWxmF+LkzVfW7PtFW2Ixd+4MABU3JjbyivadOm0S8efpgDOaeXwjaxgoTn1maMg2gtwFV5bC8q1OTC2NKwVdUp+Tw3vvKKYiQAKSDwhmI+Ui13QGnNs9+dGdoKOupkQit1tkJEm155hf5y7lyvbfCd22+nXD7vsVLOC99RIzHk0vMrzXWpRhY6GEMmNVUFgZd8fPfu3UnT5tBn9MiR1nZLemFGWgoXWMBQy1AOnKaKN7VxJOqkmJZuzwooi++9lx6wTTOjSVFE8xcsoNNOO80x1YsuVFfQOUMYKL7/5/yZM6mmpqaz1WqLFLrB5aaq2IyGzxMZy5rJx2Bns3HjRp+RY+rqaNSoUZ7+YW3SmbO9FN270R3GxHcYGNEsj00QH3a0txtWcoHjy3wN6N/fhFW9+/QxuzXgBBwMnx/m3Dpg5++8ThBIDn1GjxpVEnMo7pZEs5QSYtXcq6CLWQP7JM6TfTkGYcYDMaKrfNvUb8/u3XTl5ZfT4SNHvkwsafF999HMCy8sgQhtVj4/LuU5gKWkJjKguom8/Z49e2iDZiQHwaPAtL2zl9qimubn9WxkA5ADr00LObouDGNwLbvhkGj1qlV0++23f6lALv/lL03jDeNF41RAM51+YhcRapXC2FQgR44c2WnaSh/1JCppL8gMLt3j8cACfcViqtNNdDqSm1v4Fv3oR/TYihV0rK3tCwFaUVFBc+bMoe/ecUenRkJzy2MisNGYNcxMw7SR7xB7+eWXfY1kRo4YMaJkyYFTxn4NdhOdzsksDBkAMXfRVJWHd9cwQ/1kD9zR0eFVnXQe7c3CAOuQAoTxymVliYJtSblK7VePlZhbq/xbtgkCyfrIjMQ40MMz1HbQGgfrOE+uWg4CkJfaQduCQ5W039ytHTI4dvaEVzKzWu5mTVg5wnqiZp+AmABVwE2pR3L4s14zkoEcMXy4N1vXC7TBoWBo5M22gKwDBwHZo0FCduMsDY+RaPqW8RiUi7x4gbm0RYBN6I0TpqziylC7AU2ct2eNTADJoc9IBlJG2wInFy5TVsxilSaK0ynpgp1opZmIbNXpIYQ+osV6TmXnicHduIGCsZdRockqndMOBrOW0G8hFu/es8dU+b2eDXtsw8hA6OMBJVekZqZ5szCEmSGd1CFSN6aPEwIwlBJL0NNdhJVO8wKOQoMSYifPsjCzLQLzyGX9Xbt3pwPpZTPAMM/B6FkXKsZE4HUBodMPdBYfSqPX2R7QubOOQZ0mYh0UphtKAO0AsjGgZF3YRtChjgNP3WMj66FjYo1cqxk5csQI4jk5MtIuz7ZXroNxF96AKWNuLsLttEz1eUJgYYiFzgoHNzFRAAq2TsMsAbwymZpcLzIkObRJA1VRwjgoOz8SAZR2BM+PTJg2Azls2LBE9uJyZ/Cs2vyxtJXKONV11OUwYaWEK+K9zbvUI1EG1FxMrCdKgSVRbwQPjsDwMSV/xmKupJAymUqnjmzaL730kq+RAmRQD9EFp3QREUC1euLhHlJ+c5Uhff8O7MAza9BcsQhhqKR7Lm6E2znExA1RYSaFWI3Jq3UBI+DtsVLOOAWBZEczbOhQdwnorV0Wo8Ibt466cL1cM9ar3IQ8r92fFDdcqineHrqSoq2aSQiSeGF0KuazzmwCaaJjrmQ4MjstigyQL774os9IDWSaSSPb9Dr6N9RJrZ+u5imNMOxDM2CQ3wdDIZkQixcPbVQBzegZeF+vZKbqkh4rJXSC7bHTyOu+9/77SdMeMWwY8cM/5IXtBG2qoe/IMgy60YxLltlZXRI2YTYjWumZPbQnZPDE+blb3FLiRGSmZqkE3eZd2gtY0A30tx27mZGNjfRCgpHDhtGQIeZ2kYR5o6kaZmGrABxAqk6q/rcAiu+SK3uZUucOvbvOXMBcQsasFYobMbRxIFpzljBHQJRWQiJ0gqDeOw7fJdvYaO7+woD8wOBBg05mh6P1TDygM2Nsz0KBQkr7IQ/ugQTeXzsSUw2SXBtmjcn2LhwBnXKNKrhzNaGXOB3FAi/OKcFKKwMOYKuN8l3uBOPvO3bsoPXr1/PdxLU33XRTE99n8/sBAwbUjVOPXnDUxIqOL4Sds22BmSFzxl6Pzr0Nw6EAotkpMR5eNLJSvGnCjK3ndbqozFdnLiEHpdNFXOd/tm7lufEd2Wy2IoqiIgP539V9+86cMnmy12oImbm3TFqwYIJYifGaaJB5GJOWfF2bPXQAxRr4XYJgFy+yydnJqfpijVXIgz3stuJ0JPzhdSR2TMut9f02sp5UkjZs2EBvv/32nlwud6YBuFAo/HtVZeVfnXP22QYSV4+EirjEZ2jiXl8GHInoFjoWz8mUxNG/F1z1xY0W2wmfcmwMY7wAHMza6RiEK8b84f5Cp53CWCmTgXPBgUjMJbfrPfvcc6yTm/L5/DkGt4aGBn5w3N3nnXsulXOyrmuPVtTTQNRxYygTEceCKSjvT9ctpWMn5iimJMAhCPKbeVcMdCGPqkdKGulqkMJeZfYSrukgXI7D23Pb4ujRo/+Wz+fNlLpo2bJl49va2n5XN2oU8RP4ujRfZcYuBxcnlFJmC+XmwlyzS8tQrX0CnAPUgobpmvwmgyD3B2G2g3mzpH7OoYgDUh4aZ59pFn/Q3Ey/Wb2ai9DX5XK5x50lFwqFHafW1Aw399oAUzCe9MIg0EcMWRw40NfGqrtmoJiwKw4gUBAwi8lqFmqTRc+OHl3AwzhQshbPyUihQhpfYu42tZTz5Jm6W7duba2qqjrtxhtvPIxA/nMmk/nO9HPOcakTelrMNEIe2LEYMhLRRXEuCKhcpDNByeHljjPo7Mm+9YV75qfWF+ckebR4fjmumDYy262DATo8jUqcHpNlxYoVdODAgdX5fN7dbGmss6GhYUKxWHxj0MCBmSGDB3spGgJQ8kaloNzQHT23Mm90MBLwouOQURRWCjDIOkzxPL1UgbjopMdQy27ngOx5i9d1AwMz0cwymQ8EZTX07Dt37qTnn3+ed3ttPp//tRto+VBfX/9QWVnZt84+6yzimy89s7YreW2GtI6h9fziLQV8OUEE1Zks1P2EJRrQNLN2AEPwLOwxcqRCIAzYPR21wKHWIpN5u2JHBz26YgXfDrghl8udq/2J+W4fdfj26QMG9BrOtUkpb2FbAfo1Ol2UuE+ch4vd7MV4pijMhpAjAaAwxZotmp5YA4Y2CQCwYKEcisdS6BK64rA9Nh9H4k3ehh+/wPN9MpnMjGw223lbhm5jNzQ03FMsFr83fuxYqjnlFH8SlRG7wMQqMTP9eBsJpG2hQvTJMcjKgjAkYdJwh65cuAc2tEvRsWiQZACx0OuyJMjTNbMl9JHQi5/Bu3LlSu6xr8rlct9ANopMuWVPPvlkz8bGxuczmcx0znROqqoqWabSQk8fLbhoupLhaJBwP2hiTmdSnIzTUctgB6wwGqs/oI3aQQlYqJMOaAnsIQySa+LHxT7++ON0+PDh96IoOpsfvdAlkPzj0qVLB7S3t2+qrKwceNZXvkI9uGIipqi9MjoeyYSAuWLebrRhHRHwkCaa9ZXmoRk79qYUKzDzCXnmhBODgN6lgnZSFRdSnnjiCWpqajqUyWTOTXu8tssIEeFly5ZNaW9vX1fZq1cVP1mAny0u2odeG5ehBpawLLUzMSMyYKD3hPUSYINGYmAe9OTCQnvDulyLsB5zbda8tGKvdkzMxDVr1jCIxSiKrs3lcvzM4eArCCSvWV9ff04URSvLyspqJ4wbZyZpagcjVRsX6KpDYEgj5uhAlqIDFCXMOlDqknBGAnnP44qVKJ1z6+gcWxU/dLbjkgI7gKyJTz/9NHvoQ1EUfbMrEBMaqaF+8MEHz2hra+NRmDp40CAaOmSImUeoATLVFAsM7kPM01W2xYOjjllARD/xAt0JonZKzVBpYShAlzTQmTeEQ1hGw2oQf962bZu5z7Cjo4M1cdbxPC0/lZECyKOPPlrZ0tJybxzHN/fo0aOMm2QDzzzTVaW7YmWIkc7URd/UA0k8BwW9ZedgAMgE6MpZoaUgmzHzwQHgYi3PFD548CCThf/lwM0hxxKy7W6BlI0KhQLfPvtPcRxf3bNnT+KpxHzrRk11dYKlErijt3VZDRQ2HNA2oxCd1NtjDi16GXJWqIUS+GM7wQ0GyAEXIPjhmnxDPt9ZwQ9xj6LoezpOTNNGWX7cQMoGS5cundHe3s4PqLiCiE7mLKi6b1/zDy8YYP7jiZ0CimfqomtQ7RHQnBnbkpbTS15XLZPirWyj00sXV9qDy4C2tbWZf3Rx5MgR8/fhhx+a71EUtcZx/CwR/Sumfd2Bl7i2E9kATL6ipaXl68VikYPTKUTE/4KlNo7jEop/oq8oivhhw038r1jiON4WRdF/VVVVPSNVnM972ifMyK4OxM8xX7JkyalRFP1J/j+b8vLyT+fNm/cB91g+L2Bp232pQH7ZJ/f/aX//C8nwMMqrAxTNAAAAAElFTkSuQmCC";
    }
}, [ [ 1682, 0, 1, 2 ] ] ]);