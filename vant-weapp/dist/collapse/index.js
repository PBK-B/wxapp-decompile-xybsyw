(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 392 ], {
    1209: function(e, n, t) {
        t.r(n), t = t(6), Object(t.a)({
            relation: {
                name: "collapse-item",
                type: "descendant",
                linked: function(e) {
                    this.children.push(e);
                },
                unlinked: function(e) {
                    this.children = this.children.filter(function(n) {
                        return n !== e;
                    });
                }
            },
            props: {
                value: {
                    type: null,
                    observer: "updateExpanded"
                },
                accordion: {
                    type: Boolean,
                    observer: "updateExpanded"
                },
                border: {
                    type: Boolean,
                    value: !0
                }
            },
            beforeCreate: function() {
                this.children = [];
            },
            methods: {
                updateExpanded: function() {
                    this.children.forEach(function(e) {
                        e.updateExpanded();
                    });
                },
                switch: function(e, n) {
                    var t = (i = this.data).accordion, i = i.value;
                    e = t ? n ? e : "" : n ? (i || []).concat(e) : (i || []).filter(function(n) {
                        return n !== e;
                    }), this.$emit("change", e), this.$emit("input", e);
                }
            }
        });
    }
}, [ [ 1209, 0, 2 ] ] ]);