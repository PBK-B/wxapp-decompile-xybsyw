(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 425 ], {
    1701: function(e, t, s) {
        s.r(t);
        var a = s(6), n = (t = s(42), null);
        s = function() {
            var e = (t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).safeAreaInsetBottom, t = t.safeAreaInsetTop;
            return Behavior({
                properties: {
                    safeAreaInsetTop: {
                        type: Boolean,
                        value: void 0 !== t && t
                    },
                    safeAreaInsetBottom: {
                        type: Boolean,
                        value: void 0 === e || e
                    }
                },
                created: function() {
                    var e = this;
                    new Promise(function(e, t) {
                        null != n ? e(n) : wx.getSystemInfo({
                            success: function(t) {
                                var s = t.model, a = t.screenHeight, o = t.statusBarHeight;
                                t = /iphone x/i.test(s), a = /iPhone11/i.test(s) && 812 === a, e(n = {
                                    isIPhoneX: t || a,
                                    statusBarHeight: o
                                });
                            },
                            fail: t
                        });
                    }).then(function(t) {
                        var s = t.isIPhoneX;
                        t = t.statusBarHeight;
                        e.set({
                            isIPhoneX: s,
                            statusBarHeight: t
                        });
                    });
                }
            });
        }, Object(a.a)({
            classes: [ "enter-class", "enter-active-class", "enter-to-class", "leave-class", "leave-active-class", "leave-to-class" ],
            mixins: [ Object(t.a)(!1), s() ],
            props: {
                transition: {
                    type: String,
                    observer: "observeClass"
                },
                customStyle: String,
                overlayStyle: String,
                zIndex: {
                    type: Number,
                    value: 100
                },
                overlay: {
                    type: Boolean,
                    value: !0
                },
                closeOnClickOverlay: {
                    type: Boolean,
                    value: !0
                },
                position: {
                    type: String,
                    value: "center",
                    observer: "observeClass"
                }
            },
            created: function() {
                this.observeClass();
            },
            methods: {
                onClickOverlay: function() {
                    this.$emit("click-overlay"), this.data.closeOnClickOverlay && this.$emit("close");
                },
                observeClass: function() {
                    var e = (t = this.data).transition, t = t.position;
                    t = {
                        name: e || t
                    };
                    "none" === e && (t.duration = 0), this.set(t);
                }
            }
        });
    }
}, [ [ 1701, 0, 2 ] ] ]);