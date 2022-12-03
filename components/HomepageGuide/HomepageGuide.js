var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 13 ], {
    1271: function(e, t, n) {
        n(423);
    },
    1272: function(e, t, n) {},
    1680: function(t, n, o) {
        o.r(n), o(1271);
        var i = o(0), r = o.n(i), a = (n = (o(1272), o(7)), o.n(n));
        n = function(e, t, n) {
            return t && u(e.prototype, t), n && u(e, n), e;
        };
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function s(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != e(n) && "function" != typeof n ? t : n;
        }
        var p = r.a.getApp();
        function c() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, c);
            for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
            return (e = t = s(this, (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(e, [ this ].concat(o)))).$usedState = [ "anonymousState__temp", "guideIndex", "isIphoneX" ], 
            t.timer = null, t.customComponents = [], s(t, e);
        }
        (i = (function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + e(n));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(c, i.Component), n(c, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, n, o) {
                    null === t && (t = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== i ? "value" in i ? i.value : void 0 !== (i = i.get) ? i.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, n, o) : void 0;
                })(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "_constructor", this).call(this, e), 
                this.state = {
                    guideIndex: -1,
                    isIphoneX: p.globalData.isIphoneX
                }, this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this;
                console.log("homepage did show"), this.setState({
                    guideIndex: 0
                }, function() {
                    clearTimeout(e.timer), e.timer = setTimeout(function() {
                        e.nextStep();
                    }, 2e3);
                });
            }
        }, {
            key: "nextStep",
            value: function() {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "首页引导欢迎语引导弹窗-下一步"
                }), 2 === this.state.guideIndex ? this.setState({
                    guideIndex: -1
                }) : (clearTimeout(this.timer), this.setState(function(e) {
                    return {
                        guideIndex: e.guideIndex + 1
                    };
                }));
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (t = this.__state).guideIndex, t = t.isIphoneX;
                t = 0 <= e ? a()("full-mask", t && "iphoneX") : null;
                return this.anonymousFunc0 = function(e) {
                    e.stopPropagation();
                }, Object.assign(this.__state, {
                    anonymousState__temp: t
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(e) {
                e.stopPropagation();
            }
        } ]), n = i = c, i.$$events = [ "anonymousFunc0", "nextStep" ], i.$$componentPath = "components/HomepageGuide/HomepageGuide", 
        n)).defaultProps = {
            onClose: function() {}
        }, n = i, Component(o(0).default.createComponent(i));
    },
    423: function(e, t, n) {
        e.exports = n.p + "components/HomepageGuide/HomepageGuide.wxml";
    }
}, [ [ 1680, 0, 1 ] ] ]);