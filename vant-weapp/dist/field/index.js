(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 401 ], {
    1039: function(e, t, i) {
        i.r(t), i = i(6), Object(i.a)({
            field: !0,
            classes: [ "input-class", "right-icon-class" ],
            props: {
                size: String,
                icon: String,
                label: String,
                error: Boolean,
                fixed: Boolean,
                focus: Boolean,
                center: Boolean,
                isLink: Boolean,
                leftIcon: String,
                rightIcon: String,
                disabled: Boolean,
                autosize: Boolean,
                readonly: Boolean,
                required: Boolean,
                password: Boolean,
                iconClass: String,
                clearable: Boolean,
                inputAlign: String,
                customStyle: String,
                confirmType: String,
                confirmHold: Boolean,
                errorMessage: String,
                placeholder: String,
                placeholderStyle: String,
                errorMessageAlign: String,
                showConfirmBar: {
                    type: Boolean,
                    value: !0
                },
                adjustPosition: {
                    type: Boolean,
                    value: !0
                },
                cursorSpacing: {
                    type: Number,
                    value: 50
                },
                maxlength: {
                    type: Number,
                    value: -1
                },
                type: {
                    type: String,
                    value: "text"
                },
                border: {
                    type: Boolean,
                    value: !0
                },
                titleWidth: {
                    type: String,
                    value: "90px"
                }
            },
            data: {
                showClear: !1
            },
            beforeCreate: function() {
                this.focused = !1;
            },
            methods: {
                onInput: function(e) {
                    var t = this, i = void 0 === (e = (e.detail || {}).value) ? "" : e;
                    this.set({
                        value: i,
                        showClear: this.getShowClear(i)
                    }, function() {
                        t.emitChange(i);
                    });
                },
                onFocus: function(e) {
                    e = (t = e.detail || {}).value;
                    var t = t.height;
                    this.$emit("focus", {
                        value: void 0 === e ? "" : e,
                        height: void 0 === t ? 0 : t
                    }), this.focused = !0, this.blurFromClear = !1, this.set({
                        showClear: this.getShowClear()
                    });
                },
                onBlur: function(e) {
                    var t = this, i = void 0 === (e = (o = e.detail || {}).value) ? "" : e, o = o.cursor;
                    this.$emit("blur", {
                        value: i,
                        cursor: void 0 === o ? 0 : o
                    }), this.focused = !1, o = this.getShowClear(), this.data.value === i ? this.set({
                        showClear: o
                    }) : this.blurFromClear || this.set({
                        value: i,
                        showClear: o
                    }, function() {
                        t.emitChange(i);
                    });
                },
                onClickIcon: function() {
                    this.$emit("click-icon");
                },
                getShowClear: function(e) {
                    return e = void 0 === e ? this.data.value : e, this.data.clearable && this.focused && e && !this.data.readonly;
                },
                onClear: function() {
                    var e = this;
                    this.blurFromClear = !0, this.set({
                        value: "",
                        showClear: this.getShowClear("")
                    }, function() {
                        e.emitChange(""), e.$emit("clear", "");
                    });
                },
                onConfirm: function() {
                    this.$emit("confirm", this.data.value);
                },
                emitChange: function(e) {
                    this.$emit("input", e), this.$emit("change", e);
                }
            }
        });
    }
}, [ [ 1039, 0, 2 ] ] ]);