(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 386 ], {
    1097: function(t, e, s) {
        s.r(e), s = s(6), Object(s.a)({
            relation: {
                name: "row",
                type: "ancestor"
            },
            props: {
                span: Number,
                offset: Number
            },
            data: {
                style: ""
            },
            methods: {
                setGutter: function(t) {
                    var e = t / 2 + "px";
                    (e = t ? "padding-left: " + e + "; padding-right: " + e + ";" : "") !== this.data.style && this.set({
                        style: e
                    });
                }
            }
        });
    }
}, [ [ 1097, 0, 2 ] ] ]);