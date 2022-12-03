var e = require("../../../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 284 ], {
    1170: function(e, t, n) {
        n(374);
    },
    1631: function(t, n, o) {
        o.r(n), o(1170);
        var r = o(0), i = o.n(r), a = o(7), s = o.n(a), c = o(9), p = (n = o.n(c), a = o(20), 
        function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [], o = !0, r = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); o = !0) ;
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    r = !0, i = e;
                } finally {
                    try {
                        !o && s.return && s.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        });
        c = function(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e;
        };
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function u(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != e(n) && "function" != typeof n ? t : n;
        }
        function f() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, f);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (e = t = u(this, (e = f.__proto__ || Object.getPrototypeOf(f)).call.apply(e, [ this ].concat(o)))).$usedState = [ "$compid__1084", "rootClass", "title", "cancelText", "_isOpened", "className", "isOpened", "children" ], 
            t.handleClose = function() {
                "function" == typeof t.props.onClose && t.props.onClose();
            }, t.handleCancel = function() {
                if ("function" == typeof t.props.onCancel) return t.props.onCancel();
                t.close();
            }, t.close = function() {
                t.setState({
                    _isOpened: !1
                }, t.handleClose);
            }, t.handleTouchMove = function(e) {
                e.stopPropagation(), e.preventDefault();
            }, t.customComponents = [ "AtActionSheetHeader", "AtActionSheetBody", "AtActionSheetFooter" ], 
            u(t, e);
        }
        (function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + e(n));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        })(f, a.a), c(f, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, n, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, n, o) : void 0;
                })(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "_constructor", this).call(this, e), 
                e = e.isOpened, this.state = {
                    _isOpened: e
                }, this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                (e = e.isOpened) !== this.state._isOpened && (this.setState({
                    _isOpened: e
                }), e || this.handleClose());
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var e = this.$prefix, t = Object(r.genCompid)(e + "$compid__1084"), n = (i = p(t, 2))[0], o = i[1], i = (e = (a = this.__props).title, 
                t = a.cancelText, a.className), a = this.__state._isOpened;
                i = s()("at-action-sheet", {
                    "at-action-sheet--active": a
                }, i);
                return t && r.propsManager.set({
                    onClick: this.handleCancel
                }, o, n), Object.assign(this.__state, {
                    $compid__1084: o,
                    rootClass: i,
                    title: e,
                    cancelText: t
                }), this.__state;
            }
        } ]), c = a = f, a.$$events = [ "handleTouchMove", "close" ], a.$$componentPath = "node_modules/taro-ui/dist/weapp/components/action-sheet/index", 
        c.defaultProps = {
            title: "",
            cancelText: "",
            isOpened: !1
        }, c.propTypes = {
            title: n.a.string,
            onClose: n.a.func,
            onCancel: n.a.func,
            isOpened: n.a.bool.isRequired,
            cancelText: n.a.string
        }, n = c, Component(o(0).default.createComponent(c));
    },
    374: function(e, t, n) {
        e.exports = n.p + "npm/taro-ui/dist/weapp/components/action-sheet/index.wxml";
    }
}, [ [ 1631, 0, 1 ] ] ]);