(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 380 ], {
    1702: function(e, i, t) {
        t.r(i), i = Behavior({
            properties: {
                url: String,
                linkType: {
                    type: String,
                    value: "navigateTo"
                }
            },
            methods: {
                jumpLink: function() {
                    var e = this.data[0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "url"];
                    e && wx[this.data.linkType]({
                        url: e
                    });
                }
            }
        }), t = t(6), Object(t.a)({
            classes: [ "title-class", "label-class", "value-class", "right-icon-class", "hover-class" ],
            mixins: [ i ],
            props: {
                title: null,
                value: null,
                icon: String,
                size: String,
                label: String,
                center: Boolean,
                isLink: Boolean,
                required: Boolean,
                clickable: Boolean,
                titleWidth: String,
                customStyle: String,
                arrowDirection: String,
                useLabelSlot: Boolean,
                border: {
                    type: Boolean,
                    value: !0
                }
            },
            methods: {
                onClick: function(e) {
                    this.$emit("click", e.detail), this.jumpLink();
                }
            }
        });
    }
}, [ [ 1702, 0, 2 ] ] ]);