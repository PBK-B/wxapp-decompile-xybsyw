(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 398 ], {
    1023: function(n, o, t) {
        t.r(o);
        var e = t(6);
        o = t(43), t = t(44);
        Object(e.a)({
            mixins: [ o.a, t.a ],
            props: {
                show: Boolean,
                title: String,
                message: String,
                useSlot: Boolean,
                className: String,
                customStyle: String,
                asyncClose: Boolean,
                messageAlign: String,
                showCancelButton: Boolean,
                closeOnClickOverlay: Boolean,
                confirmButtonOpenType: String,
                zIndex: {
                    type: Number,
                    value: 2e3
                },
                confirmButtonText: {
                    type: String,
                    value: "确认"
                },
                cancelButtonText: {
                    type: String,
                    value: "取消"
                },
                showConfirmButton: {
                    type: Boolean,
                    value: !0
                },
                overlay: {
                    type: Boolean,
                    value: !0
                },
                transition: {
                    type: String,
                    value: "scale"
                }
            },
            data: {
                loading: {
                    confirm: !1,
                    cancel: !1
                }
            },
            watch: {
                show: function(n) {
                    n || this.stopLoading();
                }
            },
            methods: {
                onConfirm: function() {
                    this.handleAction("confirm");
                },
                onCancel: function() {
                    this.handleAction("cancel");
                },
                onClickOverlay: function() {
                    this.onClose("overlay");
                },
                handleAction: function(n) {
                    this.data.asyncClose && this.set(function(n, o, t) {
                        return o in n ? Object.defineProperty(n, o, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[o] = t, n;
                    }({}, "loading." + n, !0)), this.onClose(n);
                },
                close: function() {
                    this.set({
                        show: !1
                    });
                },
                stopLoading: function() {
                    this.set({
                        loading: {
                            confirm: !1,
                            cancel: !1
                        }
                    });
                },
                onClose: function(n) {
                    this.data.asyncClose || this.close(), this.$emit("close", n), this.$emit(n, {
                        dialog: this
                    }), (n = this.data["confirm" === n ? "onConfirm" : "onCancel"]) && n(this);
                }
            }
        });
    }
}, [ [ 1023, 0, 2 ] ] ]);