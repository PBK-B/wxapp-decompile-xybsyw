(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 383 ], {
    1222: function(e, a, t) {
        function n(e, a) {
            e.$emit("input", a), e.$emit("change", a);
        }
        t.r(a), t = t(6), Object(t.a)({
            field: !0,
            relation: {
                name: "checkbox-group",
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
                value: Boolean,
                disabled: Boolean,
                useIconSlot: Boolean,
                checkedColor: String,
                labelPosition: String,
                labelDisabled: Boolean,
                shape: {
                    type: String,
                    value: "round"
                }
            },
            methods: {
                emitChange: function(e) {
                    this.parent ? this.setParentValue(this.parent, e) : n(this, e);
                },
                toggle: function() {
                    var e = (a = this.data).disabled, a = a.value;
                    e || this.emitChange(!a);
                },
                onClickLabel: function() {
                    var e = (t = this.data).labelDisabled, a = t.disabled, t = t.value;
                    a || e || this.emitChange(!t);
                },
                setParentValue: function(e, a) {
                    var t = e.data.value.slice(), i = this.data.name, l = e.data.max;
                    a ? l && t.length >= l || -1 === t.indexOf(i) && (t.push(i), n(e, t)) : -1 !== (i = t.indexOf(i)) && (t.splice(i, 1), 
                    n(e, t));
                }
            }
        });
    }
}, [ [ 1222, 0, 2 ] ] ]);