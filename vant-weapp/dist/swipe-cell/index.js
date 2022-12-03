(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 443 ], {
    1103: function(t, i, s) {
        s.r(i), i = s(6), s = s(40), Object(i.a)({
            props: {
                disabled: Boolean,
                leftWidth: {
                    type: Number,
                    value: 0
                },
                rightWidth: {
                    type: Number,
                    value: 0
                },
                asyncClose: Boolean
            },
            mixins: [ s.a ],
            data: {
                catchMove: !1
            },
            created: function() {
                this.offset = 0;
            },
            methods: {
                open: function(t) {
                    var i = (s = this.data).leftWidth, s = s.rightWidth;
                    this.swipeMove("left" === t ? i : -s);
                },
                close: function() {
                    this.swipeMove(0);
                },
                swipeMove: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, i = "translate3d(" + (this.offset = t) + "px, 0, 0)";
                    t = this.draging ? "none" : ".6s cubic-bezier(0.18, 0.89, 0.32, 1)";
                    this.set({
                        wrapperStyle: "\n        -webkit-transform: " + i + ";\n        -webkit-transition: " + t + ";\n        transform: " + i + ";\n        transition: " + t + ";\n      "
                    });
                },
                swipeLeaveTransition: function() {
                    var t = (s = this.data).leftWidth, i = s.rightWidth, s = this.offset;
                    0 < i && .3 * i < -s ? this.open("right") : 0 < t && .3 * t < s ? this.open("left") : this.swipeMove(0), 
                    this.set({
                        catchMove: !1
                    });
                },
                startDrag: function(t) {
                    this.data.disabled || (this.draging = !0, this.startOffset = this.offset, this.firstDirection = "", 
                    this.touchStart(t));
                },
                noop: function() {},
                onDrag: function(t) {
                    var i, s;
                    this.data.disabled || (this.touchMove(t), this.firstDirection || (this.firstDirection = this.direction, 
                    this.set({
                        catchMove: "horizontal" === this.firstDirection
                    })), "vertical" !== this.firstDirection && (i = (s = this.data).leftWidth, t = s.rightWidth, 
                    s = this.startOffset + this.deltaX, 0 < t && t < -s || 0 < i && i < s || this.swipeMove(s)));
                },
                endDrag: function() {
                    this.data.disabled || (this.draging = !1, this.swipeLeaveTransition());
                },
                onClick: function(t) {
                    t = void 0 === (t = t.currentTarget.dataset.key) ? "outside" : t, this.$emit("click", t), 
                    this.offset && (this.data.asyncClose ? this.$emit("close", {
                        position: t,
                        instance: this
                    }) : this.swipeMove(0));
                }
            }
        });
    }
}, [ [ 1103, 0, 2 ] ] ]);