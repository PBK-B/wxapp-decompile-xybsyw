var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 8 ], {
    1305: function(e, t, n) {
        n(441);
    },
    1306: function(e, t, n) {
        e.exports = n(1307);
    },
    1307: function(t, n, r) {
        var o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        }, i = r(1308), u = "function" == typeof Symbol && Symbol.for, c = u ? Symbol.for("react.element") : 60103, a = u ? Symbol.for("react.portal") : 60106, s = u ? Symbol.for("react.fragment") : 60107, l = u ? Symbol.for("react.strict_mode") : 60108, f = u ? Symbol.for("react.profiler") : 60114, p = u ? Symbol.for("react.provider") : 60109, h = u ? Symbol.for("react.context") : 60110, y = u ? Symbol.for("react.forward_ref") : 60112, d = (r = u ? Symbol.for("react.suspense") : 60113, 
        u ? Symbol.for("react.memo") : 60115), m = u ? Symbol.for("react.lazy") : 60116, v = "function" == typeof Symbol && Symbol.iterator;
        function b(e) {
            for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        var g = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, w = {};
        function _(e, t, n) {
            this.props = e, this.context = t, this.refs = w, this.updater = n || g;
        }
        function S() {}
        function P(e, t, n) {
            this.props = e, this.context = t, this.refs = w, this.updater = n || g;
        }
        _.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
            if ("object" !== (void 0 === e ? "undefined" : o(e)) && "function" != typeof e && null != e) throw Error(b(85));
            this.updater.enqueueSetState(this, e, t, "setState");
        }, _.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }, S.prototype = _.prototype, (u = P.prototype = new S()).constructor = P, i(u, _.prototype), 
        u.isPureReactComponent = !0;
        var x = {
            current: null
        }, O = Object.prototype.hasOwnProperty, j = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function k(e, t, n) {
            var r, o = {}, i = null, u = null;
            if (null != t) for (r in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (i = "" + t.key), 
            t) O.call(t, r) && !j.hasOwnProperty(r) && (o[r] = t[r]);
            var a = arguments.length - 2;
            if (1 === a) o.children = n; else if (1 < a) {
                for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
                o.children = s;
            }
            if (e && e.defaultProps) for (r in a = e.defaultProps) void 0 === o[r] && (o[r] = a[r]);
            return {
                $$typeof: c,
                type: e,
                key: i,
                ref: u,
                props: o,
                _owner: x.current
            };
        }
        function C(e) {
            return "object" === (void 0 === e ? "undefined" : o(e)) && null !== e && e.$$typeof === c;
        }
        var $ = /\/+/g, R = [];
        function E(e, t, n, r) {
            if (R.length) {
                var o = R.pop();
                return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o;
            }
            return {
                result: e,
                keyPrefix: t,
                func: n,
                context: r,
                count: 0
            };
        }
        function F(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 
            R.length < 10 && R.push(e);
        }
        function T(e, t, n) {
            return null == e ? 0 : function e(t, n, r, i) {
                var u = !1;
                if (null === (t = "undefined" === (l = void 0 === t ? "undefined" : o(t)) || "boolean" === l ? null : t)) u = !0; else switch (l) {
                  case "string":
                  case "number":
                    u = !0;
                    break;

                  case "object":
                    switch (t.$$typeof) {
                      case c:
                      case a:
                        u = !0;
                    }
                }
                if (u) return r(i, t, "" === n ? "." + I(t, 0) : n), 1;
                if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(t)) for (var s = 0; s < t.length; s++) {
                    var l, f = n + I(l = t[s], s);
                    u += e(l, f, r, i);
                } else if ("function" == typeof (f = null !== t && "object" === (void 0 === t ? "undefined" : o(t)) && "function" == typeof (f = v && t[v] || t["@@iterator"]) ? f : null)) for (t = f.call(t), 
                s = 0; !(l = t.next()).done; ) u += e(l = l.value, f = n + I(l, s++), r, i); else if ("object" === l) throw r = "" + t, 
                Error(b(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
                return u;
            }(e, "", t, n);
        }
        function I(e, t) {
            return "object" === (void 0 === e ? "undefined" : o(e)) && null !== e && null != e.key ? function(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + ("" + e).replace(/[=:]/g, function(e) {
                    return t[e];
                });
            }(e.key) : t.toString(36);
        }
        function M(e, t) {
            e.func.call(e.context, t, e.count++);
        }
        function U(e, t, n) {
            var r = e.result, o = e.keyPrefix;
            e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? A(e, r, n, function(e) {
                return e;
            }) : null != e && (C(e) && (e = function(e, t) {
                return {
                    $$typeof: c,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                };
            }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace($, "$&/") + "/") + n)), 
            r.push(e));
        }
        function A(e, t, n, r, o) {
            var i = "";
            T(e, U, t = E(t, i = null != n ? ("" + n).replace($, "$&/") + "/" : i, r, o)), F(t);
        }
        var D = {
            current: null
        };
        function L() {
            var e = D.current;
            if (null === e) throw Error(b(321));
            return e;
        }
        u = {
            ReactCurrentDispatcher: D,
            ReactCurrentBatchConfig: {
                suspense: null
            },
            ReactCurrentOwner: x,
            IsSomeRendererActing: {
                current: !1
            },
            assign: i
        }, n.Children = {
            map: function(e, t, n) {
                if (null == e) return e;
                var r = [];
                return A(e, r, null, t, n), r;
            },
            forEach: function(e, t, n) {
                if (null == e) return e;
                T(e, M, t = E(null, null, t, n)), F(t);
            },
            count: function(e) {
                return T(e, function() {
                    return null;
                }, null);
            },
            toArray: function(e) {
                var t = [];
                return A(e, t, null, function(e) {
                    return e;
                }), t;
            },
            only: function(e) {
                if (!C(e)) throw Error(b(143));
                return e;
            }
        }, n.Component = _, n.Fragment = s, n.Profiler = f, n.PureComponent = P, n.StrictMode = l, 
        n.Suspense = r, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u, n.cloneElement = function(e, t, n) {
            if (null == e) throw Error(b(267, e));
            var r = i({}, e.props), o = e.key, u = e.ref, a = e._owner;
            if (null != t) for (s in void 0 !== t.ref && (u = t.ref, a = x.current), void 0 !== t.key && (o = "" + t.key), 
            e.type && e.type.defaultProps && (l = e.type.defaultProps), t) O.call(t, s) && !j.hasOwnProperty(s) && (r[s] = (void 0 === t[s] && void 0 !== l ? l : t)[s]);
            var s = arguments.length - 2;
            if (1 === s) r.children = n; else if (1 < s) {
                for (var l = Array(s), f = 0; f < s; f++) l[f] = arguments[f + 2];
                r.children = l;
            }
            return {
                $$typeof: c,
                type: e.type,
                key: o,
                ref: u,
                props: r,
                _owner: a
            };
        }, n.createContext = function(e, t) {
            return (e = {
                $$typeof: h,
                _calculateChangedBits: t = void 0 === t ? null : t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = {
                $$typeof: p,
                _context: e
            }, e.Consumer = e;
        }, n.createElement = k, n.createFactory = function(e) {
            var t = k.bind(null, e);
            return t.type = e, t;
        }, n.createRef = function() {
            return {
                current: null
            };
        }, n.forwardRef = function(e) {
            return {
                $$typeof: y,
                render: e
            };
        }, n.isValidElement = C, n.lazy = function(e) {
            return {
                $$typeof: m,
                _ctor: e,
                _status: -1,
                _result: null
            };
        }, n.memo = function(e, t) {
            return {
                $$typeof: d,
                type: e,
                compare: void 0 === t ? null : t
            };
        }, n.useCallback = function(e, t) {
            return L().useCallback(e, t);
        }, n.useContext = function(e, t) {
            return L().useContext(e, t);
        }, n.useDebugValue = function() {}, n.useEffect = function(e, t) {
            return L().useEffect(e, t);
        }, n.useImperativeHandle = function(e, t, n) {
            return L().useImperativeHandle(e, t, n);
        }, n.useLayoutEffect = function(e, t) {
            return L().useLayoutEffect(e, t);
        }, n.useMemo = function(e, t) {
            return L().useMemo(e, t);
        }, n.useReducer = function(e, t, n) {
            return L().useReducer(e, t, n);
        }, n.useRef = function(e) {
            return L().useRef(e);
        }, n.useState = function(e) {
            return L().useState(e);
        }, n.version = "16.14.0";
    },
    1308: function(e, t, n) {
        var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e];
                }).join("")) return;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e;
                }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, r)).join("") ? void 0 : 1;
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return;
            }
        }() ? Object.assign : function(e, t) {
            for (var n, u = function(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e);
            }(e), c = 1; c < arguments.length; c++) {
                for (var a in n = Object(arguments[c])) o.call(n, a) && (u[a] = n[a]);
                if (r) for (var s = r(n), l = 0; l < s.length; l++) i.call(n, s[l]) && (u[s[l]] = n[s[l]]);
            }
            return u;
        };
    },
    1309: function(e, t, n) {},
    1697: function(t, n, r) {
        r.r(n), r(1305);
        var o = r(0), i = r.n(o), u = (r(1306), r(1309), Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, r = arguments[t];
                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }), c = function(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e;
        };
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        function s(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != e(n) && "function" != typeof n ? t : n;
        }
        function l() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, l);
            for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return (e = t = s(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [ this ].concat(r)))).$usedState = [ "anonymousState__temp", "isFinished", "imgUrl", "processText", "totalText", "text", "score", "nowText", "style", "children" ], 
            t.process = 0, t.timer = null, t.width = 0, t.height = 0, t.imageUrl = "", t.context = null, 
            t.init = function() {
                t.$scope.createSelectorQuery().select("#ring").boundingClientRect(function(e) {
                    t.setState({
                        isFinished: !1
                    }, function() {
                        t.context = i.a.createCanvasContext("ring", t.$scope), t.width = e.width, t.height = e.height, 
                        t.reDrow();
                    });
                }).exec();
            }, t.reDrow = function() {
                var e;
                0 !== t.props.score ? (e = .1, 5 < t.props.score && (e = 1), clearInterval(t.timer), 
                t.timer = setInterval(function() {
                    var n, r;
                    t.process >= t.props.score ? (i.a.canvasToTempFilePath({
                        canvasId: "ring",
                        width: t.width,
                        height: t.height
                    }, t.$scope).then(function(e) {
                        console.log(e.tempFilePath), t.setState({
                            isFinished: !0,
                            imgUrl: e.tempFilePath
                        });
                    }).catch(function(e) {
                        console.log(e);
                    }), clearInterval(t.timer), void 0, r = (n = +t.props.nowText) % 1 != 0 ? n.toFixed(1) : n, 
                    t.setState({
                        processText: r
                    })) : (t.process += e, t.drawRing(), t.setState({
                        processText: parseInt(t.process)
                    }));
                }, 4)) : t.drawRing().then(function() {
                    i.a.canvasToTempFilePath({
                        canvasId: "ring",
                        width: t.width,
                        height: t.height
                    }, t.$scope).then(function(e) {
                        console.log(e.tempFilePath), t.setState({
                            isFinished: !0,
                            imgUrl: e.tempFilePath
                        });
                    }).catch(function(e) {
                        console.log(e);
                    });
                });
            }, t.drawRing = function() {
                return new Promise(function(e) {
                    var n, r = t.width, o = t.height, i = t.process, u = t.context;
                    u && (u.beginPath(), u.arc(r / 2, o / 2, r / 2 - 20, Math.PI, 2 * Math.PI), u.setLineWidth(6), 
                    u.setLineCap("round"), u.setStrokeStyle("#00a672"), u.stroke(), u.beginPath(), u.arc(r / 2, o / 2, r / 2 - 20, Math.PI, (i / 100 + 1).toFixed(1) * Math.PI), 
                    u.setLineWidth(9), u.setLineCap("round"), u.setStrokeStyle("#ffffff"), u.stroke(), 
                    n = Math.cos(Math.PI * ((i / 100 + 1).toFixed(1) - .005)) * (r / 2 - 20), i = Math.sin(Math.PI * ((i / 100 + 1).toFixed(1) - .005)) * (r / 2 - 20), 
                    u.beginPath(), u.arc(r / 2 + n, o / 2 + i, 3, 0, 2 * Math.PI), u.setFillStyle("#0dd496"), 
                    u.fill(), u.draw(!1, function() {
                        e();
                    }));
                });
            }, t.customComponents = [], s(t, e);
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
        })(l, o.Component), c(l, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, n, r) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== o ? "value" in o ? o.value : void 0 !== (o = o.get) ? o.call(r) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, n, r) : void 0;
                })(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_constructor", this).call(this, e), 
                this.state = {
                    isFinished: !1,
                    imgUrl: "",
                    processText: 0
                }, this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                var t = this;
                e.score !== this.props.score && this.setState({
                    isFinished: !1
                }, function() {
                    t.reDrow();
                });
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = ((r = this.__state).imgUrl, r.isFinished, r.processText, this.__props), t = e.style, n = (e.children, 
                e.totalText), r = e.text;
                e.nowText, t = Object(o.internal_inline_style)(u({}, t));
                return Object.assign(this.__state, {
                    anonymousState__temp: t,
                    totalText: n,
                    text: r
                }), this.__state;
            }
        } ]), c = n = l, n.$$events = [], n.defaultProps = {
            score: 0,
            totalText: 100,
            nowText: 0,
            style: {}
        }, n.$$componentPath = "components/CanvasProgress/CanvasProgress", c = n = c, Component(r(0).default.createComponent(n));
    },
    441: function(e, t, n) {
        e.exports = n.p + "components/CanvasProgress/CanvasProgress.wxml";
    }
}, [ [ 1697, 0, 1 ] ] ]);