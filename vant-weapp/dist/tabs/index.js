(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 449 ], {
    977: function(t, e, i) {
        i.r(e);
        e = i(6), i = i(40);
        Object(e.a)({
            mixins: [ i.a ],
            classes: [ "nav-class", "tab-class", "tab-active-class", "line-class" ],
            relation: {
                name: "tab",
                type: "descendant",
                linked: function(t) {
                    this.child.push(t), this.updateTabs(this.data.tabs.concat(t.data));
                },
                unlinked: function(t) {
                    var e = this.child.indexOf(t);
                    (t = this.data.tabs).splice(e, 1), this.child.splice(e, 1), this.updateTabs(t);
                }
            },
            props: {
                color: String,
                sticky: Boolean,
                animated: Boolean,
                swipeable: Boolean,
                lineWidth: {
                    type: Number,
                    value: -1
                },
                lineHeight: {
                    type: Number,
                    value: -1
                },
                active: {
                    type: Number,
                    value: 0
                },
                type: {
                    type: String,
                    value: "line"
                },
                border: {
                    type: Boolean,
                    value: !0
                },
                duration: {
                    type: Number,
                    value: .3
                },
                zIndex: {
                    type: Number,
                    value: 1
                },
                swipeThreshold: {
                    type: Number,
                    value: 4
                },
                offsetTop: {
                    type: Number,
                    value: 0
                }
            },
            data: {
                tabs: [],
                lineStyle: "",
                scrollLeft: 0,
                scrollable: !1,
                trackStyle: "",
                wrapStyle: "",
                position: ""
            },
            watch: {
                swipeThreshold: function() {
                    this.set({
                        scrollable: this.child.length > this.data.swipeThreshold
                    });
                },
                color: "setLine",
                lineWidth: "setLine",
                lineHeight: "setLine",
                active: "setActiveTab",
                animated: "setTrack",
                offsetTop: "setWrapStyle"
            },
            beforeCreate: function() {
                this.child = [];
            },
            mounted: function() {
                var t = this;
                this.setLine(!0), this.setTrack(), this.scrollIntoView(), this.getRect(".van-tabs__wrap").then(function(e) {
                    t.navHeight = e.height || 0, t.observerContentScroll();
                });
            },
            destroyed: function() {
                this.createIntersectionObserver().disconnect();
            },
            methods: {
                updateTabs: function(t) {
                    t = t || this.data.tabs, this.set({
                        tabs: t,
                        scrollable: t.length > this.data.swipeThreshold
                    }), this.setActiveTab();
                },
                trigger: function(t, e) {
                    this.$emit(t, {
                        index: e,
                        title: this.data.tabs[e].title
                    });
                },
                onTap: function(t) {
                    t = t.currentTarget.dataset.index, this.data.tabs[t].disabled ? this.trigger("disabled", t) : (this.trigger("click", t), 
                    this.setActive(t));
                },
                setActive: function(t) {
                    t !== this.data.active && (this.trigger("change", t), this.set({
                        active: t
                    }), this.setActiveTab());
                },
                setLine: function(t) {
                    var e, i, n, a, s, o, r = this;
                    "line" === this.data.type && (e = this.data, i = e.color, n = e.active, a = e.duration, 
                    s = e.lineWidth, o = e.lineHeight, this.getRect(".van-tab", !0).then(function(e) {
                        var c, h, l = e[n];
                        l && (c = -1 !== s ? s : l.width / 2, h = -1 !== o ? "height: " + o + "px;" : "", 
                        e = e.slice(0, n).reduce(function(t, e) {
                            return t + e.width;
                        }, 0), e += (l.width - c) / 2, r.set({
                            lineStyle: "\n            " + h + "\n            width: " + c + "px;\n            background-color: " + i + ";\n            -webkit-transform: translateX(" + e + "px);\n            transform: translateX(" + e + "px);\n            " + (t ? "" : "transition-duration: " + a + "s; -webkit-transition-duration: " + a + "s;") + "\n          "
                        }));
                    }));
                },
                setTrack: function() {
                    var t = this, e = this.data, i = e.animated, n = e.active, a = e.duration;
                    if (!i) return "";
                    this.getRect(".van-tabs__content").then(function(e) {
                        e = e.width, t.set({
                            trackStyle: "\n            width: " + e * t.child.length + "px;\n            left: " + -1 * n * e + "px;\n            transition: left " + a + "s;\n            display: -webkit-box;\n            display: flex;\n          "
                        });
                        var s = {
                            width: e,
                            animated: i
                        };
                        t.child.forEach(function(t) {
                            t.set(s);
                        });
                    });
                },
                setActiveTab: function() {
                    var t = this;
                    this.child.forEach(function(e, i) {
                        (i = {
                            active: i === t.data.active
                        }).active && (i.inited = !0), i.active !== e.data.active && e.set(i);
                    }), this.set({}, function() {
                        t.setLine(), t.setTrack(), t.scrollIntoView();
                    });
                },
                scrollIntoView: function() {
                    var t = this, e = this.data, i = e.active;
                    e.scrollable && Promise.all([ this.getRect(".van-tab", !0), this.getRect(".van-tabs__nav") ]).then(function(e) {
                        var n = (a = function(t, e) {
                            if (Array.isArray(t)) return t;
                            if (Symbol.iterator in Object(t)) return function(t, e) {
                                var i = [], n = !0, a = !1, s = void 0;
                                try {
                                    for (var o, r = t[Symbol.iterator](); !(n = (o = r.next()).done) && (i.push(o.value), 
                                    !e || i.length !== e); n = !0) ;
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    a = !0, s = t;
                                } finally {
                                    try {
                                        !n && r.return && r.return();
                                    } finally {
                                        if (a) throw s;
                                    }
                                }
                                return i;
                            }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance");
                        }(e, 2))[0], a = (e = a[1], n[i]);
                        n = n.slice(0, i).reduce(function(t, e) {
                            return t + e.width;
                        }, 0);
                        t.set({
                            scrollLeft: n - (e.width - a.width) / 2
                        });
                    });
                },
                onTouchStart: function(t) {
                    this.data.swipeable && this.touchStart(t);
                },
                onTouchMove: function(t) {
                    this.data.swipeable && this.touchMove(t);
                },
                onTouchEnd: function() {
                    var t, e, i, n, a;
                    this.data.swipeable && (t = (a = this.data).active, e = a.tabs, i = this.direction, 
                    n = this.deltaX, a = this.offsetX, "horizontal" === i && 50 <= a && (0 < n && 0 !== t ? this.setActive(t - 1) : n < 0 && t !== e.length - 1 && this.setActive(t + 1)));
                },
                setWrapStyle: function() {
                    var t = this.data, e = t.offsetTop, i = void 0;
                    switch (t.position) {
                      case "top":
                        i = "\n            top: " + e + "px;\n            position: fixed;\n          ";
                        break;

                      case "bottom":
                        i = "\n            top: auto;\n            bottom: 0;\n          ";
                        break;

                      default:
                        i = "";
                    }
                    i !== this.data.wrapStyle && this.set({
                        wrapStyle: i
                    });
                },
                observerContentScroll: function() {
                    var t, e, i = this;
                    this.data.sticky && (t = this.data.offsetTop, e = wx.getSystemInfoSync().windowHeight, 
                    this.createIntersectionObserver().disconnect(), this.createIntersectionObserver().relativeToViewport({
                        top: -(this.navHeight + t)
                    }).observe(".van-tabs", function(e) {
                        var n = e.boundingClientRect.top;
                        t < n || (e = 0 < e.intersectionRatio ? "top" : "bottom", i.$emit("scroll", {
                            scrollTop: n + t,
                            isFixed: "top" == e
                        }), i.setPosition(e));
                    }), this.createIntersectionObserver().relativeToViewport({
                        bottom: -(e - 1 - t)
                    }).observe(".van-tabs", function(e) {
                        var n = e.boundingClientRect, a = n.top;
                        n.bottom < i.navHeight || (e = 0 < e.intersectionRatio ? "top" : "", i.$emit("scroll", {
                            scrollTop: a + t,
                            isFixed: "top" == e
                        }), i.setPosition(e));
                    }));
                },
                setPosition: function(t) {
                    var e = this;
                    t !== this.data.position && this.set({
                        position: t
                    }).then(function() {
                        e.setWrapStyle();
                    });
                }
            }
        });
    }
}, [ [ 977, 0, 2 ] ] ]);