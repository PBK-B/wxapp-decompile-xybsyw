(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 416 ], {
    995: function(e, o, t) {
        t.r(o), t = t(6), Object(t.a)({
            props: {
                show: Boolean,
                mask: Boolean,
                customStyle: String,
                duration: {
                    type: [ Number, Object ],
                    value: 300
                },
                zIndex: {
                    type: Number,
                    value: 1
                }
            },
            methods: {
                onClick: function() {
                    this.$emit("click");
                },
                noop: function() {}
            }
        });
    }
}, [ [ 995, 0, 2 ] ] ]);