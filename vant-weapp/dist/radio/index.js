(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 431 ], {
    1005: function(e, n, a) {
        a.r(n), a = a(6), Object(a.a)({
            field: !0,
            relation: {
                name: "radio-group",
                type: "ancestor",
                linked: function(e) {
                    this.parent = e;
                },
                unlinked: function() {
                    this.parent = null;
                }
            },
            classes: [ "icon-class", "label-class" ],
            props: {
                value: null,
                disabled: Boolean,
                useIconSlot: Boolean,
                checkedColor: String,
                labelPosition: {
                    type: String,
                    value: "right"
                },
                labelDisabled: Boolean,
                shape: {
                    type: String,
                    value: "round"
                }
            },
            methods: {
                emitChange: function(e) {
                    var n = this.parent || this;
                    n.$emit("input", e), n.$emit("change", e);
                },
                onChange: function(e) {
                    console.log(e), this.emitChange(this.data.name);
                },
                onClickLabel: function() {
                    var e = (a = this.data).disabled, n = a.labelDisabled, a = a.name;
                    e || n || this.emitChange(a);
                }
            }
        });
    }
}, [ [ 1005, 0, 2 ] ] ]);