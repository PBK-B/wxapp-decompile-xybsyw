(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 389 ], {
    1206: function(t, e, n) {
        function i() {
            return new Promise(function(t) {
                return setTimeout(t, 20);
            });
        }
        n.r(e), n = n(6), Object(n.a)({
            classes: [ "title-class", "content-class" ],
            relation: {
                name: "collapse",
                type: "ancestor",
                linked: function(t) {
                    this.parent = t;
                }
            },
            props: {
                name: null,
                title: null,
                value: null,
                icon: String,
                label: String,
                disabled: Boolean,
                clickable: Boolean,
                border: {
                    type: Boolean,
                    value: !0
                },
                isLink: {
                    type: Boolean,
                    value: !0
                }
            },
            data: {
                contentHeight: 0,
                expanded: !1,
                transition: !1
            },
            mounted: function() {
                var t = this;
                this.updateExpanded().then(i).then(function() {
                    var e = {
                        transition: !0
                    };
                    t.data.expanded && (e.contentHeight = "auto"), t.set(e);
                });
            },
            methods: {
                updateExpanded: function() {
                    if (!this.parent) return Promise.resolve();
                    var t = (i = this.parent.data).value, e = i.accordion, n = this.parent.children, i = this.data.name, a = (n = (void 0 === n ? [] : n).indexOf(this), 
                    null == i ? n : i);
                    e = e ? t === a : (t || []).some(function(t) {
                        return t === a;
                    }), t = [];
                    return e !== this.data.expanded && t.push(this.updateStyle(e)), t.push(this.set({
                        index: n,
                        expanded: e
                    })), Promise.all(t);
                },
                updateStyle: function(t) {
                    var e = this;
                    return this.getRect(".van-collapse-item__content").then(function(t) {
                        return t.height || 0;
                    }).then(function(n) {
                        return t ? e.set({
                            contentHeight: n ? n + "px" : "auto"
                        }) : e.set({
                            contentHeight: n + "px"
                        }).then(i).then(function() {
                            return e.set({
                                contentHeight: 0
                            });
                        });
                    });
                },
                onClick: function() {
                    var t, e, n;
                    this.data.disabled || (t = (n = this.data).name, e = n.expanded, n = this.parent.children.indexOf(this), 
                    this.parent.switch(null == t ? n : t, !e));
                },
                onTransitionEnd: function() {
                    this.data.expanded && this.set({
                        contentHeight: "auto"
                    });
                }
            }
        });
    }
}, [ [ 1206, 0, 2 ] ] ]);