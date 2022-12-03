(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 419 ], {
    1116: function(t, e, n) {
        n.r(e);
        e = n(6);
        var i = n(24);
        Object(e.a)({
            classes: [ "active-class" ],
            props: {
                valueKey: String,
                className: String,
                itemHeight: Number,
                visibleItemCount: Number,
                initialOptions: {
                    type: Array,
                    value: []
                },
                defaultIndex: {
                    type: Number,
                    value: 0
                }
            },
            data: {
                startY: 0,
                offset: 0,
                duration: 0,
                startOffset: 0,
                options: [],
                currentIndex: 0
            },
            created: function() {
                var t = this, e = (n = this.data).defaultIndex, n = n.initialOptions;
                this.set({
                    currentIndex: e,
                    options: n
                }).then(function() {
                    t.setIndex(e);
                });
            },
            computed: {
                count: function() {
                    return this.data.options.length;
                },
                baseOffset: function() {
                    var t = this.data;
                    return t.itemHeight * (t.visibleItemCount - 1) / 2;
                },
                wrapperStyle: function() {
                    var t = this.data;
                    return [ "transition: " + t.duration + "ms", "transform: translate3d(0, " + (t.offset + t.baseOffset) + "px, 0)", "line-height: " + t.itemHeight + "px" ].join("; ");
                }
            },
            watch: {
                defaultIndex: function(t) {
                    this.setIndex(t);
                }
            },
            methods: {
                onTouchStart: function(t) {
                    this.set({
                        startY: t.touches[0].clientY,
                        startOffset: this.data.offset,
                        duration: 0
                    });
                },
                onTouchMove: function(t) {
                    var e = this.data;
                    t = t.touches[0].clientY - e.startY;
                    this.set({
                        offset: Object(i.c)(e.startOffset + t, -e.count * e.itemHeight, e.itemHeight)
                    });
                },
                onTouchEnd: function() {
                    var t = this.data;
                    t.offset !== t.startOffset && (this.set({
                        duration: 200
                    }), t = Object(i.c)(Math.round(-t.offset / t.itemHeight), 0, t.count - 1), this.setIndex(t, !0));
                },
                onClickItem: function(t) {
                    t = t.currentTarget.dataset.index, this.setIndex(t, !0);
                },
                adjustIndex: function(t) {
                    for (var e = this.data, n = t = Object(i.c)(t, 0, e.count); n < e.count; n++) if (!this.isDisabled(e.options[n])) return n;
                    for (var s = t - 1; 0 <= s; s--) if (!this.isDisabled(e.options[s])) return s;
                },
                isDisabled: function(t) {
                    return Object(i.b)(t) && t.disabled;
                },
                getOptionText: function(t) {
                    var e = this.data;
                    return Object(i.b)(t) && e.valueKey in t ? t[e.valueKey] : t;
                },
                setIndex: function(t, e) {
                    var n = this, i = this.data, s = -(t = this.adjustIndex(t) || 0) * i.itemHeight;
                    return t !== i.currentIndex ? this.set({
                        offset: s,
                        currentIndex: t
                    }).then(function() {
                        e && n.$emit("change", t);
                    }) : this.set({
                        offset: s
                    });
                },
                setValue: function(t) {
                    for (var e = this.data.options, n = 0; n < e.length; n++) if (this.getOptionText(e[n]) === t) return this.setIndex(n);
                    return Promise.resolve();
                },
                getValue: function() {
                    var t = this.data;
                    return t.options[t.currentIndex];
                }
            }
        });
    }
}, [ [ 1116, 0, 2 ] ] ]);