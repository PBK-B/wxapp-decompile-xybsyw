var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 7 ], {
    1277: function(t, e, n) {
        n(427);
    },
    1278: function(t, e, n) {},
    1683: function(e, n, o) {
        o.r(n), o(1277);
        var r = o(0), s = o.n(r), i = (o(1278), Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n, o = arguments[e];
                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
            }
            return t;
        }), a = function(t, e, n) {
            return e && u(t.prototype, e), n && u(t, n), t;
        };
        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        function c(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != t(n) && "function" != typeof n ? e : n;
        }
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (t = e = c(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(o)))).$usedState = [ "anonymousState__temp", "hours", "minutes", "seconds", "countDownNum", "data", "style" ], 
            e.resetTime = 0, e.timer = null, e.customComponents = [], c(e, t);
        }
        (function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
        })(p, r.Component), a(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, o) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, o) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.state = {
                    hours: "00",
                    minutes: "00",
                    seconds: "00"
                }, this.$$refs = new s.a.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var t = this;
                this.resetTime = Math.floor(this.props.countDownNum), this.setState(this.timeCalc(this.props.countDownNum), function() {
                    return t.tick();
                });
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                clearTimeout(this.timer), this.setState = function() {
                    return !1;
                };
            }
        }, {
            key: "timeCalc",
            value: function(t) {
                var e = (e = parseInt(t / 60 / 60 % 24)) < 10 ? "0" + e : e, n = (n = parseInt(t / 60 % 60)) < 10 ? "0" + n : n;
                return {
                    hours: e,
                    minutes: n,
                    seconds: t = (t = parseInt(t % 60)) < 10 ? "0" + t : t
                };
            }
        }, {
            key: "tick",
            value: function() {
                var t, e = this;
                0 === this.resetTime && this.props.onEnd && (console.log("this.props.onEnd执行----------------"), 
                this.props.onEnd(this.props.data)), 0 <= this.resetTime ? (t = this.timeCalc(this.resetTime), 
                this.props.onChange && this.props.onChange(t), this.setState(t), this.resetTime--, 
                this.timer = setTimeout(function() {
                    e.tick();
                }, 1e3)) : clearTimeout(this.timer);
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = ((t = this.__state).hours, t.minutes, t.seconds, this.__props.style);
                t = Object(r.internal_inline_style)(i({
                    display: "flex"
                }, t));
                return Object.assign(this.__state, {
                    anonymousState__temp: t
                }), this.__state;
            }
        } ]), a = n = p, n.$$events = [], n.$$componentPath = "components/BriefingSessionCard/CountDown", 
        (n = a).defaultProps = {
            countDownNum: 0
        }, a = n, Component(o(0).default.createComponent(n));
    },
    427: function(t, e, n) {
        t.exports = n.p + "components/BriefingSessionCard/CountDown.wxml";
    }
}, [ [ 1683, 0, 1 ] ] ]);