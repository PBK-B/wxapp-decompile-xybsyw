(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 446 ], {
    983: function(t, e, a) {
        a.r(e), a = a(6), Object(a.a)({
            relation: {
                name: "tabs",
                type: "ancestor"
            },
            props: {
                dot: Boolean,
                info: null,
                title: String,
                disabled: Boolean,
                titleStyle: String
            },
            data: {
                width: null,
                inited: !1,
                active: !1,
                animated: !1
            },
            watch: {
                title: "update",
                disabled: "update",
                dot: "update",
                info: "update",
                titleStyle: "update"
            },
            methods: {
                update: function() {
                    var t = this.getRelationNodes("../tabs/index")[0];
                    t && t.updateTabs();
                }
            }
        });
    }
}, [ [ 983, 0, 2 ] ] ]);