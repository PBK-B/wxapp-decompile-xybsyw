(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 413 ], {
    1175: function(t, e, i) {
        i.r(e);
        i = i(6);
        Object(i.a)({
            props: {
                text: {
                    type: String,
                    value: ""
                },
                mode: {
                    type: String,
                    value: ""
                },
                url: {
                    type: String,
                    value: ""
                },
                openType: {
                    type: String,
                    value: "navigate"
                },
                delay: {
                    type: Number,
                    value: 1
                },
                speed: {
                    type: Number,
                    value: 50
                },
                scrollable: {
                    type: Boolean,
                    value: !0
                },
                leftIcon: {
                    type: String,
                    value: ""
                },
                color: {
                    type: String,
                    value: "#ed6a0c"
                },
                backgroundColor: {
                    type: String,
                    value: "#fffbe8"
                },
                wrapable: Boolean
            },
            data: {
                show: !0
            },
            watch: {
                text: function() {
                    this.set({}, this.init);
                }
            },
            created: function() {
                this.resetAnimation = wx.createAnimation({
                    duration: 0,
                    timingFunction: "linear"
                });
            },
            destroyed: function() {
                this.timer && clearTimeout(this.timer);
            },
            methods: {
                init: function() {
                    var t = this;
                    Promise.all([ this.getRect(".van-notice-bar__content"), this.getRect(".van-notice-bar__wrap") ]).then(function(e) {
                        var i, n = function(t, e) {
                            if (Array.isArray(t)) return t;
                            if (Symbol.iterator in Object(t)) return function(t, e) {
                                var i = [], n = !0, r = !1, a = void 0;
                                try {
                                    for (var o, l = t[Symbol.iterator](); !(n = (o = l.next()).done) && (i.push(o.value), 
                                    !e || i.length !== e); n = !0) ;
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    r = !0, a = t;
                                } finally {
                                    try {
                                        !n && l.return && l.return();
                                    } finally {
                                        if (r) throw a;
                                    }
                                }
                                return i;
                            }(t, e);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance");
                        }(e, 2), r = n[0], a = n[1];
                        null != r && null != a && r.width && a.width && (e = (i = t.data).speed, n = i.scrollable, 
                        i = i.delay, n && a.width < r.width && (e = r.width / e * 1e3, t.wrapWidth = a.width, 
                        t.contentWidth = r.width, t.duration = e, t.animation = wx.createAnimation({
                            duration: e,
                            timingFunction: "linear",
                            delay: i
                        }), t.scroll()));
                    });
                },
                scroll: function() {
                    var t = this;
                    this.timer && clearTimeout(this.timer), this.timer = null, this.set({
                        animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
                    }), setTimeout(function() {
                        t.set({
                            animationData: t.animation.translateX(-t.contentWidth).step().export()
                        });
                    }, 20), this.timer = setTimeout(function() {
                        t.scroll();
                    }, this.duration);
                },
                onClickIcon: function() {
                    this.timer && clearTimeout(this.timer), this.timer = null, this.set({
                        show: !1
                    });
                },
                onClick: function(t) {
                    this.$emit("click", t);
                }
            }
        });
    }
}, [ [ 1175, 0, 2 ] ] ]);