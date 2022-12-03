(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 374 ], {
    1026: function(a, o, e) {
        e.r(o);
        var n = e(6);
        o = e(43), e = e(44);
        Object(n.a)({
            mixins: [ o.a, e.a ],
            classes: [ "hover-class", "loading-class" ],
            props: {
                icon: String,
                plain: Boolean,
                block: Boolean,
                round: Boolean,
                square: Boolean,
                loading: Boolean,
                hairline: Boolean,
                disabled: Boolean,
                loadingText: String,
                type: {
                    type: String,
                    value: "default"
                },
                size: {
                    type: String,
                    value: "normal"
                },
                loadingSize: {
                    type: String,
                    value: "20px"
                }
            },
            methods: {
                onClick: function() {
                    this.data.disabled || this.data.loading || this.$emit("click");
                }
            }
        });
    }
}, [ [ 1026, 0, 2 ] ] ]);