var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 16 ], {
    1168: function(t, e, o) {
        o(373);
    },
    1169: function(t, e, o) {},
    1630: function(e, o, n) {
        n.r(o), n(1168);
        var s = n(0), r = n.n(s), i = (n(1169), function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var o = [], n = !0, s = !1, r = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(n = (i = c.next()).done) && (o.push(i.value), 
                    !e || o.length !== e); n = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    s = !0, r = t;
                } finally {
                    try {
                        !n && c.return && c.return();
                    } finally {
                        if (s) throw r;
                    }
                }
                return o;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }), c = function(t, e, o) {
            return e && a(t.prototype, e), o && a(t, o), t;
        };
        function a(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function u(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var o = arguments.length, n = Array(o), s = 0; s < o; s++) n[s] = arguments[s];
            return (t = e = u(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(n)))).$usedState = [ "$compid__1082", "$compid__1083", "status", "describe", "openText", "show" ], 
            e.config = {
                addGlobalClass: !0
            }, e.customComponents = [ "AtActionSheet", "AtActionSheetItem" ], u(e, t);
        }
        (function(e, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + t(o));
            e.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
        })(p, s.Component), c(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== s ? "value" in s ? s.value : void 0 !== (s = s.get) ? s.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, n) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.state = {
                    status: !1,
                    show: !1
                }, this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(t, e) {
                t = t.show || !1, this.state.show !== t && (console.log("show", t), this.setState({
                    show: t
                }));
            }
        }, {
            key: "cancel",
            value: function(t) {
                console.log("cancel-status", this.state.status), this.state.status ? (this.setState({
                    status: !1
                }), this.props.onClose()) : this.setState({
                    show: !0,
                    status: !0
                });
            }
        }, {
            key: "close",
            value: function() {
                this.setState({
                    show: !1
                });
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var e = this.$prefix, o = Object(s.genCompid)(e + "$compid__1082"), n = (u = i(o, 2))[0], r = u[1], c = Object(s.genCompid)(e + "$compid__1083"), a = (p = i(c, 2))[0], u = (o = p[1], 
                e = (u = this.__props).describe, c = u.openText, (p = this.__state).show), p = p.status;
                return this.anonymousFunc0 = function() {
                    t.__props.onJump(), t.close();
                }, s.propsManager.set({
                    className: "OfficialAccountsPopup",
                    isOpened: u,
                    cancelText: p ? "仍不开启" : "取消",
                    onClose: this.cancel.bind(this)
                }, r, n), s.propsManager.set({
                    onClick: this.anonymousFunc0
                }, o, a), Object.assign(this.__state, {
                    $compid__1082: r,
                    $compid__1083: o,
                    describe: e,
                    openText: c
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {}
        } ]), c = o = p, o.$$events = [], o.$$componentPath = "components/OfficialAccountsPopup/OfficialAccountsPopup", 
        (o = c).defaultProps = {
            describe: "",
            openText: "",
            show: !1,
            onClose: function() {},
            onJump: function() {}
        }, c = o, Component(n(0).default.createComponent(o));
    },
    373: function(t, e, o) {
        t.exports = o.p + "components/OfficialAccountsPopup/OfficialAccountsPopup.wxml";
    }
}, [ [ 1630, 0, 1 ] ] ]);