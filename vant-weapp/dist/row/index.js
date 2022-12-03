(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 437 ], {
    1100: function(t, e, s) {
        s.r(e), s = s(6), Object(s.a)({
            relation: {
                name: "col",
                type: "descendant",
                linked: function(t) {
                    this.data.gutter && t.setGutter(this.data.gutter);
                }
            },
            props: {
                gutter: Number
            },
            watch: {
                gutter: "setGutter"
            },
            mounted: function() {
                this.data.gutter && this.setGutter();
            },
            methods: {
                setGutter: function() {
                    var t = this, e = this.data.gutter, s = "-" + Number(e) / 2 + "px";
                    this.set({
                        style: e ? "margin-right: " + s + "; margin-left: " + s + ";" : ""
                    }), this.getRelationNodes("../col/index").forEach(function(e) {
                        e.setGutter(t.data.gutter);
                    });
                }
            }
        });
    }
}, [ [ 1100, 0, 2 ] ] ]);