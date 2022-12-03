(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 440 ], {
    1036: function(e, n, t) {
        t.r(n), t = t(6), Object(t.a)({
            field: !0,
            classes: [ "field-class", "input-class", "cancel-class" ],
            props: {
                focus: Boolean,
                error: Boolean,
                disabled: Boolean,
                readonly: Boolean,
                inputAlign: String,
                showAction: Boolean,
                useActionSlot: Boolean,
                placeholder: String,
                placeholderStyle: String,
                background: {
                    type: String,
                    value: "#ffffff"
                },
                maxlength: {
                    type: Number,
                    value: -1
                },
                shape: {
                    type: String,
                    value: "square"
                },
                label: String
            },
            methods: {
                onChange: function(e) {
                    this.set({
                        value: e.detail
                    }), this.$emit("change", e.detail);
                },
                onCancel: function() {
                    var e = this;
                    setTimeout(function() {
                        e.set({
                            value: ""
                        }), e.$emit("cancel"), e.$emit("change", "");
                    }, 200);
                },
                onSearch: function() {
                    this.$emit("search", this.data.value);
                },
                onFocus: function() {
                    this.$emit("focus");
                },
                onBlur: function() {
                    this.$emit("blur");
                },
                onClear: function() {
                    this.$emit("clear");
                }
            }
        });
    }
}, [ [ 1036, 0, 2 ] ] ]);