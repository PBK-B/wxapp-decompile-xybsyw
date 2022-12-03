var _typeof4 = require("@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 1 ], {
    0: function(t, e, r) {
        t.exports = r(446).default, t.exports.default = t.exports;
    },
    19: function _(module, exports) {
        var _typeof2 = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
            return _typeof4(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
        }, K, L;
        function r(t) {
            if (L[t]) return L[t].exports;
            var e = L[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return K[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
        }
        !function(t, e) {
            for (var r in e) t[r] = e[r];
        }(exports, (K = [ function(t, e, r) {
            function n(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t;
            }
            var i = new WeakMap(), a = new WeakMap(), o = new WeakMap(), s = new WeakMap(), h = new WeakMap();
            function l(t) {
                if ("function" == typeof this["on".concat(t)]) {
                    for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                    this["on".concat(t)].apply(this, r);
                }
            }
            function p(t) {
                this.readyState = t, l.call(this, "readystatechange");
            }
            var c = (function(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(t, n.key, n);
                }
            }(f.prototype, [ {
                key: "abort",
                value: function() {
                    var t = h.get(this);
                    t && t.abort();
                }
            }, {
                key: "getAllResponseHeaders",
                value: function() {
                    var t = s.get(this);
                    return Object.keys(t).map(function(e) {
                        return "".concat(e, ": ").concat(t[e]);
                    }).join("\n");
                }
            }, {
                key: "getResponseHeader",
                value: function(t) {
                    return s.get(this)[t];
                }
            }, {
                key: "open",
                value: function(t, e) {
                    a.set(this, t), i.set(this, e), p.call(this, f.OPENED);
                }
            }, {
                key: "overrideMimeType",
                value: function() {}
            }, {
                key: "send",
                value: function() {
                    var t = this, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                    if (this.readyState !== f.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
                    wx.request({
                        data: e,
                        url: i.get(this),
                        method: a.get(this),
                        header: o.get(this),
                        success: function(e) {
                            var r = e.data, n = e.statusCode;
                            e = e.header;
                            if ("string" != typeof r && !(r instanceof ArrayBuffer)) try {
                                r = JSON.stringify(r);
                            } catch (t) {}
                            if (t.status = n, s.set(t, e), l.call(t, "loadstart"), p.call(t, f.HEADERS_RECEIVED), 
                            p.call(t, f.LOADING), (t.response = r) instanceof ArrayBuffer) {
                                t.responseText = "";
                                for (var i = new Uint8Array(r), a = i.byteLength, o = 0; o < a; o++) t.responseText += String.fromCharCode(i[o]);
                            } else t.responseText = r;
                            p.call(t, f.DONE), l.call(t, "load"), l.call(t, "loadend");
                        },
                        fail: function(e) {
                            -1 !== (e = e.errMsg).indexOf("abort") ? l.call(t, "abort") : l.call(t, "error", e), 
                            l.call(t, "loadend");
                        }
                    });
                }
            }, {
                key: "setRequestHeader",
                value: function(t, e) {
                    var r = o.get(this);
                    r[t] = e, o.set(this, r);
                }
            } ]), f);
            function f() {
                !function(t) {
                    if (!(t instanceof f)) throw new TypeError("Cannot call a class as a function");
                }(this), n(this, "onabort", null), n(this, "onerror", null), n(this, "onload", null), 
                n(this, "onloadstart", null), n(this, "onprogress", null), n(this, "ontimeout", null), 
                n(this, "onloadend", null), n(this, "onreadystatechange", null), n(this, "readyState", 0), 
                n(this, "response", null), n(this, "responseText", null), n(this, "responseType", ""), 
                n(this, "responseXML", null), n(this, "status", 0), n(this, "statusText", ""), n(this, "upload", {}), 
                n(this, "withCredentials", !1), o.set(this, {
                    "content-type": "application/x-www-form-urlencoded"
                }), s.set(this, {});
            }
            function u() {}
            function m() {
                console.error("小程序由于不支持动态创建 canvas 的能力，故 lottie 中有关图片处理的操作无法支持，请保持图片的原始宽高与 JSON 描述的一致，避免需要对图片处理");
            }
            function d(t) {
                return "canvas" === t ? (console.warn("发现 Lottie 动态创建 canvas 组件，但小程序不支持动态创建组件，接下来可能会出现异常"), 
                {
                    getContext: function() {
                        return {
                            fillRect: u,
                            createImage: m,
                            drawImage: m
                        };
                    }
                }) : "img" === t ? function(t) {
                    if (void 0 === t.createImage) return {};
                    var e = t.createImage();
                    return e.addEventListener = e.addEventListener || function(t, r) {
                        "load" === t ? e.onload = function() {
                            setTimeout(r, 0);
                        } : "error" === t && (e.onerror = r);
                    }, e;
                }(this) : void 0;
            }
            function y(t, e) {
                return function(r) {
                    return e.call(t, Array.from(r));
                };
            }
            function g(t, e) {
                return function() {
                    return e.call(t);
                };
            }
            function v(t, e, r) {
                var n = t[e];
                Object.defineProperty(t, e, {
                    get: function() {
                        return r(t, n);
                    },
                    configurable: !0,
                    enumerable: !0
                });
            }
            n(c, "UNSEND", 0), n(c, "OPENED", 1), n(c, "HEADERS_RECEIVED", 2), n(c, "LOADING", 3), 
            n(c, "DONE", 4), r.d(e, "c", function() {
                return _;
            }), r.d(e, "b", function() {
                return P;
            }), r.d(e, "a", function() {
                return b;
            });
            e = wx.getSystemInfoSync();
            var b = {
                requestAnimationFrame: function(t) {
                    setTimeout(function() {
                        "function" == typeof t && t(Date.now());
                    }, 16);
                }
            };
            b.window = {
                devicePixelRatio: e.pixelRatio
            }, b.document = b.window.document = {
                body: {},
                createElement: d
            }, b.navigator = b.window.navigator = {
                userAgent: ""
            }, XMLHttpRequest = c;
            var _ = function(t) {
                var e = b.window, r = b.document;
                b._requestAnimationFrame = e.requestAnimationFrame, b._cancelAnimationFrame = e.cancelAnimationFrame, 
                e.requestAnimationFrame = function(e) {
                    var r = !1;
                    setTimeout(function() {
                        r || (r = !0, "function" == typeof e && e(Date.now()));
                    }, 100), t.requestAnimationFrame(function(t) {
                        r || (r = !0, "function" == typeof e && e(t));
                    });
                }, e.cancelAnimationFrame = t.cancelAnimationFrame.bind(t), b._body = r.body, b._createElement = r.createElement, 
                r.body = {}, r.createElement = d.bind(t), (r = t.getContext("2d")).canvas || (r.canvas = t), 
                v(r, "setLineDash", y), v(r, "fill", g);
            }, P = function() {
                var t = b.window, e = b.document;
                t.requestAnimationFrame = b._requestAnimationFrame, t.cancelAnimationFrame = b._cancelAnimationFrame, 
                e.body = b._body, e.createElement = b._createElement;
            };
        }, function(module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.r(__webpack_exports__), function(module) {
                __webpack_require__.d(__webpack_exports__, "loadAnimation", function() {
                    return loadAnimation;
                }), __webpack_require__.d(__webpack_exports__, "freeze", function() {
                    return freeze;
                }), __webpack_require__.d(__webpack_exports__, "unfreeze", function() {
                    return unfreeze;
                });
                var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
                function _typeof(t) {
                    return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function(t) {
                        return void 0 === t ? "undefined" : _typeof2(t);
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : _typeof2(t);
                    })(t);
                }
                __webpack_require__.d(__webpack_exports__, "setup", function() {
                    return _adapter__WEBPACK_IMPORTED_MODULE_0__.c;
                });
                var window = _adapter__WEBPACK_IMPORTED_MODULE_0__.a.window, document = _adapter__WEBPACK_IMPORTED_MODULE_0__.a.document, navigator = _adapter__WEBPACK_IMPORTED_MODULE_0__.a.navigator, Jb, Kb;
                function loadAnimation(t) {
                    if ([ "wrapper", "container" ].forEach(function(e) {
                        if (e in t) throw new Error("Not support '".concat(e, "' parameter in miniprogram version of lottie."));
                    }), "string" == typeof t.path && !/^https?\:\/\//.test(t.path)) throw new Error("The 'path' is only support http protocol.");
                    if (!t.rendererSettings || !t.rendererSettings.context) throw new Error("Parameter 'rendererSettings.context' should be a CanvasRenderingContext2D.");
                    t.renderer = "canvas";
                    var e = window.lottie.loadAnimation(t), r = e.destroy.bind(e);
                    return e.destroy = function() {
                        Object(_adapter__WEBPACK_IMPORTED_MODULE_0__.b)(), e.renderer && !e.renderer.destroyed && (e.renderer.renderConfig.clearCanvas = !1), 
                        r();
                    }.bind(e), e;
                }
                void 0 !== navigator && (Jb = window || {}, Kb = function Kb(window) {
                    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = !0, expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bm_rounder = Math.round, bm_rnd, bm_pow = Math.pow, bm_sqrt = Math.sqrt, bm_abs = Math.abs, bm_floor = Math.floor, bm_max = Math.max, bm_min = Math.min, blitter = 10, BMMath = {};
                    function ProjectInterface() {
                        return {};
                    }
                    !function() {
                        for (var t = [ "abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2" ], e = t.length, r = 0; r < e; r += 1) BMMath[t[r]] = Math[t[r]];
                    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                        if ("object" === _typeof(t) && t.length) {
                            for (var e = createSizedArray(t.length), r = t.length, n = 0; n < r; n += 1) e[n] = Math.abs(t[n]);
                            return e;
                        }
                        return Math.abs(t);
                    };
                    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = .5519;
                    function roundValues(t) {
                        bm_rnd = t ? Math.round : function(t) {
                            return t;
                        };
                    }
                    function styleDiv(t) {
                        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", 
                        t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", 
                        t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d";
                    }
                    function BMEnterFrameEvent(t, e, r, n) {
                        this.type = t, this.currentTime = e, this.totalTime = r, this.direction = n < 0 ? -1 : 1;
                    }
                    function BMCompleteEvent(t, e) {
                        this.type = t, this.direction = e < 0 ? -1 : 1;
                    }
                    function BMCompleteLoopEvent(t, e, r, n) {
                        this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = n < 0 ? -1 : 1;
                    }
                    function BMSegmentStartEvent(t, e, r) {
                        this.type = t, this.firstFrame = e, this.totalFrames = r;
                    }
                    function BMDestroyEvent(t, e) {
                        this.type = t, this.target = e;
                    }
                    roundValues(!1);
                    var createElementID = (_count = 0, function() {
                        return "__lottie_element_" + ++_count;
                    }), _count;
                    function HSVtoRGB(t, e, r) {
                        var n, i, a, o, s = r * (1 - e), h = r * (1 - (t = 6 * t - (o = Math.floor(6 * t))) * e), l = r * (1 - (1 - t) * e);
                        switch (o % 6) {
                          case 0:
                            n = r, i = l, a = s;
                            break;

                          case 1:
                            n = h, i = r, a = s;
                            break;

                          case 2:
                            n = s, i = r, a = l;
                            break;

                          case 3:
                            n = s, i = h, a = r;
                            break;

                          case 4:
                            n = l, i = s, a = r;
                            break;

                          case 5:
                            n = r, i = s, a = h;
                        }
                        return [ n, i, a ];
                    }
                    function RGBtoHSV(t, e, r) {
                        var n, i = Math.max(t, e, r), a = Math.min(t, e, r), o = i - a, s = 0 === i ? 0 : o / i, h = i / 255;
                        switch (i) {
                          case a:
                            n = 0;
                            break;

                          case t:
                            n = e - r + o * (e < r ? 6 : 0), n /= 6 * o;
                            break;

                          case e:
                            n = r - t + 2 * o, n /= 6 * o;
                            break;

                          case r:
                            n = t - e + 4 * o, n /= 6 * o;
                        }
                        return [ n, s, h ];
                    }
                    function addSaturationToRGB(t, e) {
                        return (t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]))[1] += e, 1 < t[1] ? t[1] = 1 : t[1] <= 0 && (t[1] = 0), 
                        HSVtoRGB(t[0], t[1], t[2]);
                    }
                    function addBrightnessToRGB(t, e) {
                        return (t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]))[2] += e, 1 < t[2] ? t[2] = 1 : t[2] < 0 && (t[2] = 0), 
                        HSVtoRGB(t[0], t[1], t[2]);
                    }
                    function addHueToRGB(t, e) {
                        return (t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]))[0] += e / 360, 1 < t[0] ? --t[0] : t[0] < 0 && (t[0] += 1), 
                        HSVtoRGB(t[0], t[1], t[2]);
                    }
                    var rgbToHex = function() {
                        for (var t, e = [], r = 0; r < 256; r += 1) t = r.toString(16), e[r] = 1 == t.length ? "0" + t : t;
                        return function(t, r, n) {
                            return "#" + e[t = t < 0 ? 0 : t] + e[r = r < 0 ? 0 : r] + e[n = n < 0 ? 0 : n];
                        };
                    }();
                    function BaseEvent() {}
                    BaseEvent.prototype = {
                        triggerEvent: function(t, e) {
                            if (this._cbs[t]) for (var r = this._cbs[t].length, n = 0; n < r; n++) this._cbs[t][n](e);
                        },
                        addEventListener: function(t, e) {
                            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function() {
                                this.removeEventListener(t, e);
                            }.bind(this);
                        },
                        removeEventListener: function(t, e) {
                            if (e) {
                                if (this._cbs[t]) {
                                    for (var r = 0, n = this._cbs[t].length; r < n; ) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), 
                                    --r, --n), r += 1;
                                    this._cbs[t].length || (this._cbs[t] = null);
                                }
                            } else this._cbs[t] = null;
                        }
                    };
                    var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) {
                        return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0;
                    } : function(t, e) {
                        var r, n = 0, i = [];
                        switch (t) {
                          case "int16":
                          case "uint8c":
                            r = 1;
                            break;

                          default:
                            r = 1.1;
                        }
                        for (n = 0; n < e; n += 1) i.push(r);
                        return i;
                    };
                    function createSizedArray(t) {
                        return Array.apply(null, {
                            length: t
                        });
                    }
                    function createTag(t) {
                        return document.createElement(t);
                    }
                    function DynamicPropertyContainer() {}
                    DynamicPropertyContainer.prototype = {
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), 
                            this._isAnimated = !0);
                        },
                        iterateDynamicProperties: function() {
                            this._mdf = !1;
                            for (var t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), 
                            this.dynamicProperties[e]._mdf && (this._mdf = !0);
                        },
                        initDynamicPropertyContainer: function(t) {
                            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
                        }
                    };
                    var getBlendMode = (blendModeEnums = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    }, function(t) {
                        return blendModeEnums[t] || "";
                    }), blendModeEnums, Matrix = (od = Math.cos, pd = Math.sin, qd = Math.tan, rd = Math.round, 
                    function() {
                        this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, 
                        this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = m, this.setTransform = c, 
                        this.translate = d, this.transform = u, this.applyToPoint = P, this.applyToX = _, 
                        this.applyToY = x, this.applyToZ = S, this.applyToPointArray = A, this.applyToTriplePoints = C, 
                        this.applyToPointStringified = k, this.toCSS = D, this.to2dCSS = I, this.clone = v, 
                        this.cloneFromProps = b, this.equals = g, this.inversePoints = T, this.inversePoint = E, 
                        this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, 
                        this.props = createTypedArray("float32", 16), this.reset();
                    }), od, pd, qd, rd;
                    function s() {
                        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, 
                        this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, 
                        this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, 
                        this.props[14] = 0, this.props[15] = 1, this;
                    }
                    function a(t) {
                        if (0 === t) return this;
                        var e = od(t);
                        t = pd(t);
                        return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    }
                    function n(t) {
                        if (0 === t) return this;
                        var e = od(t);
                        t = pd(t);
                        return this._t(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1);
                    }
                    function o(t) {
                        if (0 === t) return this;
                        var e = od(t);
                        t = pd(t);
                        return this._t(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1);
                    }
                    function h(t) {
                        if (0 === t) return this;
                        var e = od(t);
                        t = pd(t);
                        return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    }
                    function l(t, e) {
                        return this._t(1, e, t, 1, 0, 0);
                    }
                    function p(t, e) {
                        return this.shear(qd(t), qd(e));
                    }
                    function f(t, e) {
                        var r = od(e);
                        e = pd(e);
                        return this._t(r, e, 0, 0, -e, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, qd(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -e, 0, 0, e, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                    }
                    function m(t, e, r) {
                        return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1);
                    }
                    function c(t, e, r, n, i, a, o, s, h, l, p, c, f, u, m, d) {
                        return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = n, 
                        this.props[4] = i, this.props[5] = a, this.props[6] = o, this.props[7] = s, this.props[8] = h, 
                        this.props[9] = l, this.props[10] = p, this.props[11] = c, this.props[12] = f, this.props[13] = u, 
                        this.props[14] = m, this.props[15] = d, this;
                    }
                    function d(t, e, r) {
                        return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this;
                    }
                    function u(t, e, r, n, i, a, o, s, h, l, p, c, f, u, m, d) {
                        var y = this.props;
                        if (1 === t && 0 === e && 0 === r && 0 === n && 0 === i && 1 === a && 0 === o && 0 === s && 0 === h && 0 === l && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * f, 
                        y[13] = y[13] * a + y[15] * u, y[14] = y[14] * p + y[15] * m, y[15] = y[15] * d, 
                        this._identityCalculated = !1, this;
                        var g = y[0], v = y[1], b = y[2], _ = y[3], P = y[4], S = y[5], x = y[6], E = y[7], C = y[8], A = y[9], T = y[10], w = y[11], k = y[12], D = y[13], I = y[14], M = y[15];
                        return y[0] = g * t + v * i + b * h + _ * f, y[1] = g * e + v * a + b * l + _ * u, 
                        y[2] = g * r + v * o + b * p + _ * m, y[3] = g * n + v * s + b * c + _ * d, y[4] = P * t + S * i + x * h + E * f, 
                        y[5] = P * e + S * a + x * l + E * u, y[6] = P * r + S * o + x * p + E * m, y[7] = P * n + S * s + x * c + E * d, 
                        y[8] = C * t + A * i + T * h + w * f, y[9] = C * e + A * a + T * l + w * u, y[10] = C * r + A * o + T * p + w * m, 
                        y[11] = C * n + A * s + T * c + w * d, y[12] = k * t + D * i + I * h + M * f, y[13] = k * e + D * a + I * l + M * u, 
                        y[14] = k * r + D * o + I * p + M * m, y[15] = k * n + D * s + I * c + M * d, this._identityCalculated = !1, 
                        this;
                    }
                    function y() {
                        return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), 
                        this._identityCalculated = !0), this._identity;
                    }
                    function g(t) {
                        for (var e = 0; e < 16; ) {
                            if (t.props[e] !== this.props[e]) return !1;
                            e += 1;
                        }
                        return !0;
                    }
                    function v(t) {
                        for (var e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                    }
                    function b(t) {
                        for (var e = 0; e < 16; e += 1) this.props[e] = t[e];
                    }
                    function P(t, e, r) {
                        return {
                            x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                            y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                            z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                        };
                    }
                    function _(t, e, r) {
                        return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12];
                    }
                    function x(t, e, r) {
                        return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13];
                    }
                    function S(t, e, r) {
                        return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14];
                    }
                    function E(t) {
                        var e = this.props[0] * this.props[5] - this.props[1] * this.props[4], r = this.props[5] / e, n = -this.props[1] / e, i = -this.props[4] / e, a = this.props[0] / e, o = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e;
                        e = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
                        return [ t[0] * r + t[1] * i + o, t[0] * n + t[1] * a + e, 0 ];
                    }
                    function T(t) {
                        for (var e = t.length, r = [], n = 0; n < e; n += 1) r[n] = E(t[n]);
                        return r;
                    }
                    function C(t, e, r) {
                        var n, i, a, o, s, h, l = createTypedArray("float32", 6);
                        return this.isIdentity() ? (l[0] = t[0], l[1] = t[1], l[2] = e[0], l[3] = e[1], 
                        l[4] = r[0], l[5] = r[1]) : (n = this.props[0], i = this.props[1], a = this.props[4], 
                        o = this.props[5], s = this.props[12], h = this.props[13], l[0] = t[0] * n + t[1] * a + s, 
                        l[1] = t[0] * i + t[1] * o + h, l[2] = e[0] * n + e[1] * a + s, l[3] = e[0] * i + e[1] * o + h, 
                        l[4] = r[0] * n + r[1] * a + s, l[5] = r[0] * i + r[1] * o + h), l;
                    }
                    function A(t, e, r) {
                        return this.isIdentity() ? [ t, e, r ] : [ t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14] ];
                    }
                    function k(t, e) {
                        if (this.isIdentity()) return t + "," + e;
                        var r = this.props;
                        return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100;
                    }
                    function D() {
                        for (var t = 0, e = this.props, r = "matrix3d("; t < 16; ) r += rd(1e4 * e[t]) / 1e4, 
                        r += 15 === t ? ")" : ",", t += 1;
                        return r;
                    }
                    function M(t) {
                        return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? rd(1e4 * t) / 1e4 : t;
                    }
                    function I() {
                        var t = this.props;
                        return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")";
                    }
                    !function(t, e) {
                        var r = this, n = 256, i = e.pow(n, 6), a = e.pow(2, 52), o = 2 * a, s = 255;
                        function h(t) {
                            var e, r = t.length, i = this, a = 0, o = i.i = i.j = 0, h = i.S = [];
                            for (r || (t = [ r++ ]); a < n; ) h[a] = a++;
                            for (a = 0; a < n; a++) h[a] = h[o = s & o + t[a % r] + (e = h[a])], h[o] = e;
                            i.g = function(t) {
                                for (var e, r = 0, a = i.i, o = i.j, h = i.S; t--; ) e = h[a = s & a + 1], r = r * n + h[s & (h[a] = h[o = s & o + e]) + (h[o] = e)];
                                return i.i = a, i.j = o, r;
                            };
                        }
                        function l(t, e) {
                            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e;
                        }
                        function p(t, e) {
                            for (var r, n = t + "", i = 0; i < n.length; ) e[s & i] = s & (r ^= 19 * e[s & i]) + n.charCodeAt(i++);
                            return c(e);
                        }
                        function c(t) {
                            return String.fromCharCode.apply(0, t);
                        }
                        e.seedrandom = function(s, f, u) {
                            var m = [], d = (s = p(function t(e, r) {
                                var n, i = [], a = _typeof(e);
                                if (r && "object" == a) for (n in e) try {
                                    i.push(t(e[n], r - 1));
                                } catch (t) {}
                                return i.length ? i : "string" == a ? e : e + "\0";
                            }((f = !0 === f ? {
                                entropy: !0
                            } : f || {}).entropy ? [ s, c(t) ] : null === s ? function() {
                                try {
                                    var e = new Uint8Array(n);
                                    return (r.crypto || r.msCrypto).getRandomValues(e), c(e);
                                } catch (e) {
                                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                    var i = (i = r.navigator) && i.plugins;
                                    return [ +new Date(), r, i, r.screen, c(t) ];
                                }
                            }() : s, 3), m), new h(m));
                            return (m = function() {
                                for (var t = d.g(6), e = i, r = 0; t < a; ) t = (t + r) * n, e *= n, r = d.g(1);
                                for (;o <= t; ) t /= 2, e /= 2, r >>>= 1;
                                return (t + r) / e;
                            }).int32 = function() {
                                return 0 | d.g(4);
                            }, m.quick = function() {
                                return d.g(4) / 4294967296;
                            }, m.double = m, p(c(d.S), t), (f.pass || u || function(t, r, n, i) {
                                return i && (i.S && l(i, d), t.state = function() {
                                    return l(d, {});
                                }), n ? (e.random = t, r) : t;
                            })(m, s, "global" in f ? f.global : this == e, f.state);
                        }, p(e.random(), t);
                    }([], BMMath);
                    var BezierFactory = function() {
                        var t = {
                            getBezierEasing: function(t, r, n, i, a) {
                                return a = a || ("bez_" + t + "_" + r + "_" + n + "_" + i).replace(/\./g, "p"), 
                                e[a] ? e[a] : (i = new s([ t, r, n, i ]), e[a] = i);
                            }
                        }, e = {}, r = "function" == typeof Float32Array;
                        function n(t, e) {
                            return 1 - 3 * e + 3 * t;
                        }
                        function i(t, e) {
                            return 3 * e - 6 * t;
                        }
                        function a(t, e, r) {
                            return ((n(e, r) * t + i(e, r)) * t + 3 * e) * t;
                        }
                        function o(t, e, r) {
                            return 3 * n(e, r) * t * t + 2 * i(e, r) * t + 3 * e;
                        }
                        function s(t) {
                            this._p = t, this._mSampleValues = new (r ? Float32Array : Array)(11), this._precomputed = !1, 
                            this.get = this.get.bind(this);
                        }
                        return s.prototype = {
                            get: function(t) {
                                var e = this._p[0], r = this._p[1], n = this._p[2], i = this._p[3];
                                return this._precomputed || this._precompute(), e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : a(this._getTForX(t), r, i);
                            },
                            _precompute: function() {
                                var t = this._p[0], e = this._p[1], r = this._p[2], n = this._p[3];
                                this._precomputed = !0, t === e && r === n || this._calcSampleValues();
                            },
                            _calcSampleValues: function() {
                                for (var t = this._p[0], e = this._p[2], r = 0; r < 11; ++r) this._mSampleValues[r] = a(.1 * r, t, e);
                            },
                            _getTForX: function(t) {
                                for (var e = this._p[0], r = this._p[2], n = this._mSampleValues, i = 0, s = 1; 10 !== s && n[s] <= t; ++s) i += .1;
                                var h = i + (t - n[--s]) / (n[s + 1] - n[s]) * .1, l = o(h, e, r);
                                return .001 <= l ? function(t, e, r, n) {
                                    for (var i = 0; i < 4; ++i) {
                                        var s = o(e, r, n);
                                        if (0 === s) return e;
                                        e -= (a(e, r, n) - t) / s;
                                    }
                                    return e;
                                }(t, h, e, r) : 0 === l ? h : function(t, e, r, n, i) {
                                    for (var o, s, h = 0; 0 < (o = a(s = e + (r - e) / 2, n, i) - t) ? r = s : e = s, 
                                    1e-7 < Math.abs(o) && ++h < 10; ) ;
                                    return s;
                                }(t, i, i + .1, e, r);
                            }
                        }, t;
                    }();
                    function extendPrototype(t, e) {
                        for (var r, n = t.length, i = 0; i < n; i += 1) for (var a in r = t[i].prototype) r.hasOwnProperty(a) && (e.prototype[a] = r[a]);
                    }
                    function getDescriptor(t, e) {
                        return Object.getOwnPropertyDescriptor(t, e);
                    }
                    function createProxyFunction(t) {
                        function e() {}
                        return e.prototype = t, e;
                    }
                    function bezFunction() {
                        function t(t, e, r, n, i, a) {
                            return -.001 < (e = t * n + e * i + r * a - i * n - a * t - r * e) && e < .001;
                        }
                        function e(t, e, r, n) {
                            for (var i, a, o, s, h = defaultCurveSegments, l = 0, p = [], c = [], f = bezier_length_pool.newElement(), u = r.length, m = 0; m < h; m += 1) {
                                for (o = m / (h - 1), i = s = 0; i < u; i += 1) a = bm_pow(1 - o, 3) * t[i] + 3 * bm_pow(1 - o, 2) * o * r[i] + 3 * (1 - o) * bm_pow(o, 2) * n[i] + bm_pow(o, 3) * e[i], 
                                p[i] = a, null !== c[i] && (s += bm_pow(p[i] - c[i], 2)), c[i] = p[i];
                                s && (l += s = bm_sqrt(s)), f.percents[m] = o, f.lengths[m] = l;
                            }
                            return f.addedLength = l, f;
                        }
                        function r(t) {
                            this.segmentLength = 0, this.points = new Array(t);
                        }
                        function n(t, e) {
                            this.partialLength = t, this.point = e;
                        }
                        Math;
                        var i, a = (i = {}, function(e, a, o, s) {
                            var h = (e[0] + "_" + e[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1] + "_" + s[0] + "_" + s[1]).replace(/\./g, "p");
                            if (!i[h]) {
                                for (var l, p, c, f, u, m = defaultCurveSegments, d = 0, y = null, g = new r(m = 2 === e.length && (e[0] != a[0] || e[1] != a[1]) && t(e[0], e[1], a[0], a[1], e[0] + o[0], e[1] + o[1]) && t(e[0], e[1], a[0], a[1], a[0] + s[0], a[1] + s[1]) ? 2 : m), v = o.length, b = 0; b < m; b += 1) {
                                    for (u = createSizedArray(v), c = b / (m - 1), l = f = 0; l < v; l += 1) p = bm_pow(1 - c, 3) * e[l] + 3 * bm_pow(1 - c, 2) * c * (e[l] + o[l]) + 3 * (1 - c) * bm_pow(c, 2) * (a[l] + s[l]) + bm_pow(c, 3) * a[l], 
                                    u[l] = p, null !== y && (f += bm_pow(u[l] - y[l], 2));
                                    d += f = bm_sqrt(f), g.points[b] = new n(f, u), y = u;
                                }
                                g.segmentLength = d, i[h] = g;
                            }
                            return i[h];
                        });
                        function o(t, e) {
                            var r = e.percents, n = e.lengths, i = r.length, a = bm_floor((i - 1) * t), o = t * e.addedLength, s = 0;
                            if (a === i - 1 || 0 === a || o === n[a]) return r[a];
                            for (var h = n[a] > o ? -1 : 1, l = !0; l; ) if (n[a] <= o && n[a + 1] > o ? (s = (o - n[a]) / (n[a + 1] - n[a]), 
                            l = !1) : a += h, a < 0 || i - 1 <= a) {
                                if (a === i - 1) return r[a];
                                l = !1;
                            }
                            return r[a] + (r[a + 1] - r[a]) * s;
                        }
                        var s = createTypedArray("float32", 8);
                        return {
                            getSegmentsLength: function(t) {
                                for (var r = segments_length_pool.newElement(), n = t.c, i = t.v, a = t.o, o = t.i, s = t._length, h = r.lengths, l = 0, p = 0; p < s - 1; p += 1) h[p] = e(i[p], i[p + 1], a[p], o[p + 1]), 
                                l += h[p].addedLength;
                                return n && s && (h[p] = e(i[p], i[0], a[p], o[0]), l += h[p].addedLength), r.totalLength = l, 
                                r;
                            },
                            getNewSegment: function(t, e, r, n, i, a, h) {
                                for (var l = o(i = i < 0 ? 0 : 1 < i ? 1 : i, h), p = (i = o(a = 1 < a ? 1 : a, h), 
                                t.length), c = (a = 1 - l) * a * a, f = l * a * a * 3, u = l * l * a * 3, m = l * l * l, d = a * a * (h = 1 - i), y = l * a * h + a * l * h + a * a * i, g = l * l * h + a * l * i + l * a * i, v = l * l * i, b = a * h * h, _ = l * h * h + a * i * h + a * h * i, P = l * i * h + a * i * i + l * h * i, S = l * i * i, x = h * h * h, E = i * h * h + h * i * h + h * h * i, C = i * i * h + h * i * i + i * h * i, A = i * i * i, T = 0; T < p; T += 1) s[4 * T] = Math.round(1e3 * (c * t[T] + f * r[T] + u * n[T] + m * e[T])) / 1e3, 
                                s[4 * T + 1] = Math.round(1e3 * (d * t[T] + y * r[T] + g * n[T] + v * e[T])) / 1e3, 
                                s[4 * T + 2] = Math.round(1e3 * (b * t[T] + _ * r[T] + P * n[T] + S * e[T])) / 1e3, 
                                s[4 * T + 3] = Math.round(1e3 * (x * t[T] + E * r[T] + C * n[T] + A * e[T])) / 1e3;
                                return s;
                            },
                            getPointInSegment: function(t, e, r, n, i, a) {
                                return a = 1 - (i = o(i, a)), [ Math.round(1e3 * (a * a * a * t[0] + (i * a * a + a * i * a + a * a * i) * r[0] + (i * i * a + a * i * i + i * a * i) * n[0] + i * i * i * e[0])) / 1e3, Math.round(1e3 * (a * a * a * t[1] + (i * a * a + a * i * a + a * a * i) * r[1] + (i * i * a + a * i * i + i * a * i) * n[1] + i * i * i * e[1])) / 1e3 ];
                            },
                            buildBezierData: a,
                            pointOnLine2D: t,
                            pointOnLine3D: function(e, r, n, i, a, o, s, h, l) {
                                if (0 === n && 0 === o && 0 === l) return t(e, r, i, a, s, h);
                                var p = Math.sqrt(Math.pow(i - e, 2) + Math.pow(a - r, 2) + Math.pow(o - n, 2));
                                n = Math.sqrt(Math.pow(s - e, 2) + Math.pow(h - r, 2) + Math.pow(l - n, 2)), o = Math.sqrt(Math.pow(s - i, 2) + Math.pow(h - a, 2) + Math.pow(l - o, 2));
                                return -1e-4 < (o = n < p ? o < p ? p - n - o : o - n - p : n < o ? o - n - p : n - p - o) && o < 1e-4;
                            }
                        };
                    }
                    !function() {
                        for (var t = 0, e = [ "ms", "moz", "webkit", "o" ], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], 
                        window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
                        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, r) {
                            var n = new Date().getTime(), i = Math.max(0, 16 - (n - t)), a = setTimeout(function() {
                                e(n + i);
                            }, i);
                            return t = n + i, a;
                        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                            clearTimeout(t);
                        });
                    }();
                    var bez = bezFunction();
                    function dataFunctionManager() {
                        function t(t) {
                            for (var e = t.i.length, r = 0; r < e; r += 1) t.i[r][0] += t.v[r][0], t.i[r][1] += t.v[r][1], 
                            t.o[r][0] += t.v[r][0], t.o[r][1] += t.v[r][1];
                        }
                        function e(t, e) {
                            return e = e ? e.split(".") : [ 100, 100, 100 ], t[0] > e[0] || !(e[0] > t[0]) && (t[1] > e[1] || !(e[1] > t[1]) && t[2] > e[2]);
                        }
                        var r, n = function() {
                            var t = [ 4, 4, 14 ];
                            function r(t) {
                                for (var e, r, n = t.length, i = 0; i < n; i += 1) 5 === t[i].ty && (r = (e = t[i]).t.d, 
                                e.t.d = {
                                    k: [ {
                                        s: r,
                                        t: 0
                                    } ]
                                });
                            }
                            return function(n) {
                                if (e(t, n.v) && (r(n.layers), n.assets)) for (var i = n.assets.length, a = 0; a < i; a += 1) n.assets[a].layers && r(n.assets[a].layers);
                            };
                        }(), i = (r = [ 4, 7, 99 ], function(n) {
                            if (n.chars && !e(r, n.v)) for (var i, a, o, s, h = n.chars.length, l = 0; l < h; l += 1) if (n.chars[l].data && n.chars[l].data.shapes) for (a = (s = n.chars[l].data.shapes[0].it).length, 
                            i = 0; i < a; i += 1) (o = s[i].ks.k).__converted || (t(s[i].ks.k), o.__converted = !0);
                        }), a = function() {
                            var t = [ 4, 1, 9 ];
                            function r(t) {
                                for (var e = t.length, r = 0; r < e; r += 1) 4 === t[r].ty && function t(e) {
                                    for (var r, n, i = e.length, a = 0; a < i; a += 1) if ("gr" === e[a].ty) t(e[a].it); else if ("fl" === e[a].ty || "st" === e[a].ty) if (e[a].c.k && e[a].c.k[0].i) for (n = e[a].c.k.length, 
                                    r = 0; r < n; r += 1) e[a].c.k[r].s && (e[a].c.k[r].s[0] /= 255, e[a].c.k[r].s[1] /= 255, 
                                    e[a].c.k[r].s[2] /= 255, e[a].c.k[r].s[3] /= 255), e[a].c.k[r].e && (e[a].c.k[r].e[0] /= 255, 
                                    e[a].c.k[r].e[1] /= 255, e[a].c.k[r].e[2] /= 255, e[a].c.k[r].e[3] /= 255); else e[a].c.k[0] /= 255, 
                                    e[a].c.k[1] /= 255, e[a].c.k[2] /= 255, e[a].c.k[3] /= 255;
                                }(t[r].shapes);
                            }
                            return function(n) {
                                if (e(t, n.v) && (r(n.layers), n.assets)) for (var i = n.assets.length, a = 0; a < i; a += 1) n.assets[a].layers && r(n.assets[a].layers);
                            };
                        }(), o = function() {
                            var t = [ 4, 4, 18 ];
                            function r(t) {
                                for (var e, r, n, i = t.length, a = 0; a < i; a += 1) {
                                    if ((e = t[a]).hasMask) for (var o = e.masksProperties, s = o.length, h = 0; h < s; h += 1) if (o[h].pt.k.i) o[h].pt.k.c = o[h].cl; else for (n = o[h].pt.k.length, 
                                    r = 0; r < n; r += 1) o[h].pt.k[r].s && (o[h].pt.k[r].s[0].c = o[h].cl), o[h].pt.k[r].e && (o[h].pt.k[r].e[0].c = o[h].cl);
                                    4 === e.ty && function t(e) {
                                        for (var r, n, i = e.length - 1; 0 <= i; --i) if ("sh" == e[i].ty) if (e[i].ks.k.i) e[i].ks.k.c = e[i].closed; else for (n = e[i].ks.k.length, 
                                        r = 0; r < n; r += 1) e[i].ks.k[r].s && (e[i].ks.k[r].s[0].c = e[i].closed), e[i].ks.k[r].e && (e[i].ks.k[r].e[0].c = e[i].closed); else "gr" == e[i].ty && t(e[i].it);
                                    }(e.shapes);
                                }
                            }
                            return function(n) {
                                if (e(t, n.v) && (r(n.layers), n.assets)) for (var i = n.assets.length, a = 0; a < i; a += 1) n.assets[a].layers && r(n.assets[a].layers);
                            };
                        }(), s = {
                            completeData: function(e, r) {
                                e.__complete || (a(e), n(e), i(e), o(e), function e(r, n, i) {
                                    for (var a, o, s, h = r.length, l = 0; l < h; l += 1) if ("ks" in (a = r[l]) && !a.completed) {
                                        if (a.completed = !0, a.tt && (r[l - 1].td = a.tt), a.hasMask) for (var p = a.masksProperties, c = p.length, f = 0; f < c; f += 1) if (p[f].pt.k.i) t(p[f].pt.k); else for (s = p[f].pt.k.length, 
                                        o = 0; o < s; o += 1) p[f].pt.k[o].s && t(p[f].pt.k[o].s[0]), p[f].pt.k[o].e && t(p[f].pt.k[o].e[0]);
                                        0 === a.ty ? (a.layers = function(t, e) {
                                            for (var r = 0, n = e.length; r < n; ) {
                                                if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, 
                                                e[r].layers);
                                                r += 1;
                                            }
                                        }(a.refId, n), e(a.layers, n, i)) : 4 === a.ty ? function e(r) {
                                            for (var n, i, a = r.length - 1; 0 <= a; --a) if ("sh" == r[a].ty) if (r[a].ks.k.i) t(r[a].ks.k); else for (i = r[a].ks.k.length, 
                                            n = 0; n < i; n += 1) r[a].ks.k[n].s && t(r[a].ks.k[n].s[0]), r[a].ks.k[n].e && t(r[a].ks.k[n].e[0]); else "gr" == r[a].ty && e(r[a].it);
                                        }(a.shapes) : 5 == a.ty && function(t) {
                                            0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0);
                                        }(a);
                                    }
                                }(e.layers, e.assets, r), e.__complete = !0);
                            }
                        };
                        return s;
                    }
                    var dataManager = dataFunctionManager(), FontManager = (Rl = {
                        w: 0,
                        size: 0,
                        shapes: []
                    }, Sl = (Sl = []).concat([ 2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403 ]), 
                    Tl.getCombinedCharacterCodes = function() {
                        return Sl;
                    }, Tl.prototype.addChars = function(t) {
                        if (t) {
                            this.chars || (this.chars = []);
                            for (var e, r, n = t.length, i = this.chars.length, a = 0; a < n; a += 1) {
                                for (e = 0, r = !1; e < i; ) this.chars[e].style === t[a].style && this.chars[e].fFamily === t[a].fFamily && this.chars[e].ch === t[a].ch && (r = !0), 
                                e += 1;
                                r || (this.chars.push(t[a]), i += 1);
                            }
                        }
                    }, Tl.prototype.addFonts = function(t, e) {
                        if (t) if (this.chars) this.isLoaded = !0; else {
                            for (var r = t.list, n = r.length, a = n, o = 0; o < n; o += 1) {
                                var s, h, l, p, c = !0;
                                if (r[o].loaded = !1, r[o].monoCase = i(r[o].fFamily, "monospace"), r[o].sansCase = i(r[o].fFamily, "sans-serif"), 
                                r[o].fPath) {
                                    if ("p" === r[o].fOrigin || 3 === r[o].origin) (c = !(0 < (s = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[o].fFamily + '"], style[f-origin="3"][f-family="' + r[o].fFamily + '"]')).length) && c) && ((l = createTag("style")).setAttribute("f-forigin", r[o].fOrigin), 
                                    l.setAttribute("f-origin", r[o].origin), l.setAttribute("f-family", r[o].fFamily), 
                                    l.type = "text/css", l.innerHTML = "@font-face {font-family: " + r[o].fFamily + "; font-style: normal; src: url('" + r[o].fPath + "');}", 
                                    e.appendChild(l)); else if ("g" === r[o].fOrigin || 1 === r[o].origin) {
                                        for (s = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < s.length; h++) -1 !== s[h].href.indexOf(r[o].fPath) && (c = !1);
                                        c && ((p = createTag("link")).setAttribute("f-forigin", r[o].fOrigin), p.setAttribute("f-origin", r[o].origin), 
                                        p.type = "text/css", p.rel = "stylesheet", p.href = r[o].fPath, document.body.appendChild(p));
                                    } else if ("t" === r[o].fOrigin || 2 === r[o].origin) {
                                        for (s = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), 
                                        h = 0; h < s.length; h++) r[o].fPath === s[h].src && (c = !1);
                                        c && ((p = createTag("link")).setAttribute("f-forigin", r[o].fOrigin), p.setAttribute("f-origin", r[o].origin), 
                                        p.setAttribute("rel", "stylesheet"), p.setAttribute("href", r[o].fPath), e.appendChild(p));
                                    }
                                } else r[o].loaded = !0, --a;
                                r[o].helper = function(t, e) {
                                    var r = createNS("text");
                                    return r.style.fontSize = "100px", r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", e.fStyle), 
                                    r.setAttribute("font-weight", e.fWeight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", 
                                    r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), 
                                    createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, 
                                    r;
                                }(e, r[o]), r[o].cache = {}, this.fonts.push(r[o]);
                            }
                            0 === a ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
                        } else this.isLoaded = !0;
                    }, Tl.prototype.getCharData = function(t, e, r) {
                        for (var n = 0, i = this.chars.length; n < i; ) {
                            if (this.chars[n].ch === t && this.chars[n].style === e && this.chars[n].fFamily === r) return this.chars[n];
                            n += 1;
                        }
                        return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, e, r), 
                        Rl;
                    }, Tl.prototype.getFontByName = function(t) {
                        for (var e = 0, r = this.fonts.length; e < r; ) {
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1;
                        }
                        return this.fonts[0];
                    }, Tl.prototype.measureText = function(t, e, r) {
                        var n, i, a = this.getFontByName(e), o = t.charCodeAt(0);
                        return a.cache[o + 1] || (n = a.helper, " " === t ? (n.textContent = "|" + t + "|", 
                        i = n.getComputedTextLength(), n.textContent = "||", e = n.getComputedTextLength(), 
                        a.cache[o + 1] = (i - e) / 100) : (n.textContent = t, a.cache[o + 1] = n.getComputedTextLength() / 100)), 
                        a.cache[o + 1] * r;
                    }, Tl.prototype.checkLoadedFonts = function() {
                        for (var t, e, r = this.fonts.length, n = r, i = 0; i < r; i += 1) this.fonts[i].loaded ? --n : "n" === this.fonts[i].fOrigin || 0 === this.fonts[i].origin ? this.fonts[i].loaded = !0 : (t = this.fonts[i].monoCase.node, 
                        e = this.fonts[i].monoCase.w, t.offsetWidth !== e ? (--n, this.fonts[i].loaded = !0) : (t = this.fonts[i].sansCase.node, 
                        e = this.fonts[i].sansCase.w, t.offsetWidth !== e && (--n, this.fonts[i].loaded = !0)), 
                        this.fonts[i].loaded && (this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent), 
                        this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent)));
                        0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() {
                            this.isLoaded = !0;
                        }.bind(this), 0);
                    }, Tl.prototype.loaded = function() {
                        return this.isLoaded;
                    }, Tl), PropertyFactory = function() {
                        var t = initialDefaultFrame, e = Math.abs;
                        function r(t, e) {
                            var r, i = this.offsetTime;
                            "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                            for (var a, o, s, h = e.lastIndex, l = h, p = this.keyframes.length - 1, c = !0; c; ) {
                                if (a = this.keyframes[l], o = this.keyframes[l + 1], l === p - 1 && t >= o.t - i) {
                                    a.h && (a = o), h = 0;
                                    break;
                                }
                                if (o.t - i > t) {
                                    h = l;
                                    break;
                                }
                                l < p - 1 ? l += 1 : (h = 0, c = !1);
                            }
                            var f, u, m, d, y, g, v, b, _, P, S, x, E, C, A = o.t - i, T = a.t - i;
                            if (a.to) {
                                a.bezierData || (a.bezierData = bez.buildBezierData(a.s, o.s || a.e, a.to, a.ti));
                                var w = a.bezierData;
                                if (A <= t || t < T) for (var k = A <= t ? w.points.length - 1 : 0, D = w.points[k].point.length, I = 0; I < D; I += 1) r[I] = w.points[k].point[I]; else {
                                    a.__fnct ? s = a.__fnct : (s = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, 
                                    a.__fnct = s);
                                    for (var M, F = s((t - T) / (A - T)), O = w.segmentLength * F, R = e.lastFrame < t && e._lastKeyframeIndex === l ? e._lastAddedLength : 0, L = e.lastFrame < t && e._lastKeyframeIndex === l ? e._lastPoint : 0, j = (c = !0, 
                                    w.points.length); c; ) {
                                        if (R += w.points[L].partialLength, 0 == O || 0 === F || L === w.points.length - 1) {
                                            for (D = w.points[L].point.length, I = 0; I < D; I += 1) r[I] = w.points[L].point[I];
                                            break;
                                        }
                                        if (R <= O && O < R + w.points[L + 1].partialLength) {
                                            for (M = (O - R) / w.points[L + 1].partialLength, D = w.points[L].point.length, 
                                            I = 0; I < D; I += 1) r[I] = w.points[L].point[I] + (w.points[L + 1].point[I] - w.points[L].point[I]) * M;
                                            break;
                                        }
                                        L < j - 1 ? L += 1 : c = !1;
                                    }
                                    e._lastPoint = L, e._lastAddedLength = R - w.points[L].partialLength, e._lastKeyframeIndex = l;
                                }
                            } else {
                                p = a.s.length;
                                var V, B, N, z, G, $ = o.s || a.e;
                                if (this.sh && 1 !== a.h) A <= t ? (r[0] = $[0], r[1] = $[1], r[2] = $[2]) : t <= T ? (r[0] = a.s[0], 
                                r[1] = a.s[1], r[2] = a.s[2]) : (f = r, u = n(a.s), m = n($), d = (t - T) / (A - T), 
                                g = [], v = u[0], b = u[1], _ = u[2], P = u[3], (u = v * (S = m[0]) + b * (x = m[1]) + _ * (E = m[2]) + P * (C = m[3])) < 0 && (u = -u, 
                                S = -S, x = -x, E = -E, C = -C), d = 1e-6 < 1 - u ? (m = Math.acos(u), u = Math.sin(m), 
                                y = Math.sin((1 - d) * m) / u, Math.sin(d * m) / u) : (y = 1 - d, d), g[0] = y * v + d * S, 
                                g[1] = y * b + d * x, g[2] = y * _ + d * E, g[3] = y * P + d * C, y = (E = g)[0], 
                                P = E[1], d = E[2], C = E[3], g = Math.atan2(2 * P * C - 2 * y * d, 1 - 2 * P * P - 2 * d * d), 
                                E = Math.asin(2 * y * P + 2 * d * C), d = Math.atan2(2 * y * C - 2 * P * d, 1 - 2 * y * y - 2 * d * d), 
                                f[0] = g / degToRads, f[1] = E / degToRads, f[2] = d / degToRads); else for (l = 0; l < p; l += 1) 1 !== a.h && (F = A <= t ? 1 : t < T ? 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), 
                                a.__fnct[l] ? s = a.__fnct[l] : (V = void 0 === a.o.x[l] ? a.o.x[0] : a.o.x[l], 
                                B = void 0 === a.o.y[l] ? a.o.y[0] : a.o.y[l], N = void 0 === a.i.x[l] ? a.i.x[0] : a.i.x[l], 
                                z = void 0 === a.i.y[l] ? a.i.y[0] : a.i.y[l], s = BezierFactory.getBezierEasing(V, B, N, z).get, 
                                a.__fnct[l] = s)) : a.__fnct ? s = a.__fnct : (V = a.o.x, B = a.o.y, N = a.i.x, 
                                z = a.i.y, s = BezierFactory.getBezierEasing(V, B, N, z).get, a.__fnct = s), s((t - T) / (A - T)))), 
                                $ = o.s || a.e, G = 1 === a.h ? a.s[l] : a.s[l] + ($[l] - a.s[l]) * F, 1 === p ? r = G : r[l] = G;
                            }
                            return e.lastIndex = h, r;
                        }
                        function n(t) {
                            var e = t[0] * degToRads, r = t[1] * degToRads, n = t[2] * degToRads, i = Math.cos(e / 2), a = Math.cos(r / 2);
                            t = Math.cos(n / 2);
                            return [ (e = Math.sin(e / 2)) * (r = Math.sin(r / 2)) * t + i * a * (n = Math.sin(n / 2)), e * a * t + i * r * n, i * r * t - e * a * n, i * a * t - e * r * n ];
                        }
                        function i() {
                            var e = this.comp.renderedFrame - this.offsetTime, r = this.keyframes[0].t - this.offsetTime, n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                            return e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= n && n <= e || this._caching.lastFrame < r && e < r) || (this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, 
                            this._caching.lastIndex = 0), r = this.interpolateValue(e, this._caching), this.pv = r), 
                            this._caching.lastFrame = e, this.pv;
                        }
                        function a(t) {
                            var r;
                            if ("unidimensional" === this.propType) r = t * this.mult, 1e-5 < e(this.v - r) && (this.v = r, 
                            this._mdf = !0); else for (var n = 0, i = this.v.length; n < i; ) r = t[n] * this.mult, 
                            1e-5 < e(this.v[n] - r) && (this.v[n] = r, this._mdf = !0), n += 1;
                        }
                        function o() {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else {
                                this.lock = !0, this._mdf = this._isFirstFrame;
                                for (var t = this.effectsSequence.length, e = this.kf ? this.pv : this.data.k, r = 0; r < t; r += 1) e = this.effectsSequence[r](e);
                                this.setVValue(e), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
                            }
                        }
                        function s(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this);
                        }
                        function h(t, e, r, n) {
                            this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, 
                            this.pv = e.k, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, 
                            this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, 
                            this.getValue = o, this.setVValue = a, this.addEffect = s;
                        }
                        function l(t, e, r, n) {
                            this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, 
                            this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, 
                            this.frameId = -1;
                            var i, h = e.k.length;
                            for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), 
                            createTypedArray("float32", h), this.vel = createTypedArray("float32", h), i = 0; i < h; i += 1) this.v[i] = e.k[i] * this.mult, 
                            this.pv[i] = e.k[i];
                            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = o, this.setVValue = a, 
                            this.addEffect = s;
                        }
                        function p(e, n, h, l) {
                            this.propType = "unidimensional", this.keyframes = n.k, this.offsetTime = e.data.st, 
                            this.frameId = -1, this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: 0,
                                _lastKeyframeIndex: -1
                            }, this.k = !0, this.kf = !0, this.data = n, this.mult = h || 1, this.elem = e, 
                            this.container = l, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, 
                            this.getValue = o, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [ i.bind(this) ], 
                            this.addEffect = s;
                        }
                        function c(e, n, h, l) {
                            this.propType = "multidimensional";
                            for (var p, c, f, u, m = n.k.length, d = 0; d < m - 1; d += 1) n.k[d].to && n.k[d].s && n.k[d].e && (p = n.k[d].s, 
                            c = n.k[d].e, f = n.k[d].to, u = n.k[d].ti, (2 === p.length && (p[0] !== c[0] || p[1] !== c[1]) && bez.pointOnLine2D(p[0], p[1], c[0], c[1], p[0] + f[0], p[1] + f[1]) && bez.pointOnLine2D(p[0], p[1], c[0], c[1], c[0] + u[0], c[1] + u[1]) || 3 === p.length && (p[0] !== c[0] || p[1] !== c[1] || p[2] !== c[2]) && bez.pointOnLine3D(p[0], p[1], p[2], c[0], c[1], c[2], p[0] + f[0], p[1] + f[1], p[2] + f[2]) && bez.pointOnLine3D(p[0], p[1], p[2], c[0], c[1], c[2], c[0] + u[0], c[1] + u[1], c[2] + u[2])) && (n.k[d].to = null, 
                            n.k[d].ti = null), p[0] === c[0] && p[1] === c[1] && 0 === f[0] && 0 === f[1] && 0 === u[0] && 0 === u[1] && (2 === p.length || p[2] === c[2] && 0 === f[2] && 0 === u[2]) && (n.k[d].to = null, 
                            n.k[d].ti = null));
                            this.effectsSequence = [ i.bind(this) ], this.keyframes = n.k, this.offsetTime = e.data.st, 
                            this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = h || 1, this.elem = e, 
                            this.container = l, this.comp = e.comp, this.getValue = o, this.setVValue = a, this.interpolateValue = r, 
                            this.frameId = -1;
                            var y = n.k[0].s.length;
                            for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), 
                            d = 0; d < y; d += 1) this.v[d] = t, this.pv[d] = t;
                            this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: createTypedArray("float32", y)
                            }, this.addEffect = s;
                        }
                        return {
                            getProp: function(t, e, r, n, i) {
                                var a;
                                if (e.k.length) if ("number" == typeof e.k[0]) a = new l(t, e, n, i); else switch (r) {
                                  case 0:
                                    a = new p(t, e, n, i);
                                    break;

                                  case 1:
                                    a = new c(t, e, n, i);
                                } else a = new h(t, e, n, i);
                                return a.effectsSequence.length && i.addDynamicProperty(a), a;
                            }
                        };
                    }(), TransformPropertyFactory = (t.prototype = {
                        applyToMatrix: function(t) {
                            var e = this._mdf;
                            this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), 
                            this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), 
                            this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), 
                            this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                        },
                        getValue: function(t) {
                            var e, r, n, i;
                            this.elem.globalData.frameId !== this.frameId && (this._isDirty && (this.precalculateMatrix(), 
                            this._isDirty = !1), this.iterateDynamicProperties(), (this._mdf || t) && (this.v.cloneFromProps(this.pre.props), 
                            this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), 
                            this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), 
                            this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), 
                            this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), 
                            this.autoOriented && (e = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime ? n = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / e, 0), 
                            this.p.getValueAtTime(this.p.keyframes[0].t / e, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / e, 0), 
                            this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / e, 0)) : (r = this.p.pv, 
                            this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / e, this.p.offsetTime)) : this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime && (r = [], 
                            n = [], i = this.px, t = this.py, i._caching.lastFrame + i.offsetTime <= i.keyframes[0].t ? (r[0] = i.getValueAtTime((i.keyframes[0].t + .01) / e, 0), 
                            r[1] = t.getValueAtTime((t.keyframes[0].t + .01) / e, 0), n[0] = i.getValueAtTime(i.keyframes[0].t / e, 0), 
                            n[1] = t.getValueAtTime(t.keyframes[0].t / e, 0)) : i._caching.lastFrame + i.offsetTime >= i.keyframes[i.keyframes.length - 1].t ? (r[0] = i.getValueAtTime(i.keyframes[i.keyframes.length - 1].t / e, 0), 
                            r[1] = t.getValueAtTime(t.keyframes[t.keyframes.length - 1].t / e, 0), n[0] = i.getValueAtTime((i.keyframes[i.keyframes.length - 1].t - .01) / e, 0), 
                            n[1] = t.getValueAtTime((t.keyframes[t.keyframes.length - 1].t - .01) / e, 0)) : (r = [ i.pv, t.pv ], 
                            n[0] = i.getValueAtTime((i._caching.lastFrame + i.offsetTime - .01) / e, i.offsetTime), 
                            n[1] = t.getValueAtTime((t._caching.lastFrame + t.offsetTime - .01) / e, t.offsetTime))), 
                            this.v.rotate(-Math.atan2(r[1] - n[1], r[0] - n[0]))), this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), 
                            this.frameId = this.elem.globalData.frameId);
                        },
                        precalculateMatrix: function() {
                            if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, 
                            !this.s.effectsSequence.length)) {
                                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, 
                                this.sk) {
                                    if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                    this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                                }
                                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), 
                                this.appliedTransformations = 4);
                            }
                        },
                        autoOrient: function() {}
                    }, extendPrototype([ DynamicPropertyContainer ], t), t.prototype.addDynamicProperty = function(t) {
                        this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0;
                    }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, 
                    {
                        getTransformProperty: function(e, r, n) {
                            return new t(e, r, n);
                        }
                    }), Rl, Sl;
                    function t(t, e, r) {
                        if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, 
                        this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, 
                        this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), 
                        this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                            k: [ 0, 0, 0 ]
                        }, 1, 0, this), e.rx) {
                            if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), 
                            this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) for (var n = e.or.k.length, i = 0; i < n; i += 1) e.or.k[i].to = e.or.k[i].ti = null;
                            this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0;
                        } else this.r = PropertyFactory.getProp(t, e.r || {
                            k: 0
                        }, 0, degToRads, this);
                        e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), 
                        this.a = PropertyFactory.getProp(t, e.a || {
                            k: [ 0, 0, 0 ]
                        }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                            k: [ 100, 100, 100 ]
                        }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
                    }
                    function i(t, e) {
                        var r = createTag("span");
                        r.style.fontFamily = e;
                        var n = createTag("span");
                        n.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", 
                        r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", 
                        r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", 
                        r.appendChild(n), document.body.appendChild(r);
                        var i = n.offsetWidth;
                        return n.style.fontFamily = t + ", " + e, {
                            node: n,
                            w: i,
                            parent: r
                        };
                    }
                    function Tl() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, 
                        this.initTime = Date.now();
                    }
                    function ShapePath() {
                        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), 
                        this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
                    }
                    ShapePath.prototype.setPathData = function(t, e) {
                        this.c = t, this.setLength(e);
                        for (var r = 0; r < e; ) this.v[r] = point_pool.newElement(), this.o[r] = point_pool.newElement(), 
                        this.i[r] = point_pool.newElement(), r += 1;
                    }, ShapePath.prototype.setLength = function(t) {
                        for (;this._maxLength < t; ) this.doubleArrayLength();
                        this._length = t;
                    }, ShapePath.prototype.doubleArrayLength = function() {
                        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), 
                        this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
                    }, ShapePath.prototype.setXYAt = function(t, e, r, n, i) {
                        var a;
                        switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), 
                        r) {
                          case "v":
                            a = this.v;
                            break;

                          case "i":
                            a = this.i;
                            break;

                          case "o":
                            a = this.o;
                        }
                        a[n] && (!a[n] || i) || (a[n] = point_pool.newElement()), a[n][0] = t, a[n][1] = e;
                    }, ShapePath.prototype.setTripleAt = function(t, e, r, n, i, a, o, s) {
                        this.setXYAt(t, e, "v", o, s), this.setXYAt(r, n, "o", o, s), this.setXYAt(i, a, "i", o, s);
                    }, ShapePath.prototype.reverse = function() {
                        var t = new ShapePath();
                        t.setPathData(this.c, this._length);
                        var e = this.v, r = this.o, n = this.i, i = 0;
                        this.c && (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), 
                        i = 1);
                        for (var a = this._length - 1, o = this._length, s = i; s < o; s += 1) t.setTripleAt(e[a][0], e[a][1], n[a][0], n[a][1], r[a][0], r[a][1], s, !1), 
                        --a;
                        return t;
                    };
                    var ShapePropertyFactory = function() {
                        var t = -999999;
                        function e(t, e, r) {
                            var n, i, a, o, s, h, l, p = r.lastIndex, c = this.keyframes;
                            if (t < c[0].t - this.offsetTime) n = c[0].s[0], i = !0, p = 0; else if (t >= c[c.length - 1].t - this.offsetTime) n = (c[c.length - 1].s ? c[c.length - 1].s : c[c.length - 2].e)[0], 
                            i = !0; else {
                                for (var f, u, m = p, d = c.length - 1, y = !0; y && (f = c[m], !((u = c[m + 1]).t - this.offsetTime > t)); ) m < d - 1 ? m += 1 : y = !1;
                                var g, v, b;
                                p = m;
                                (i = 1 === f.h) || (v = t >= u.t - this.offsetTime ? 1 : t < f.t - this.offsetTime ? 0 : (f.__fnct ? g = f.__fnct : (g = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, 
                                f.__fnct = g), g((t - (f.t - this.offsetTime)) / (u.t - this.offsetTime - (f.t - this.offsetTime)))), 
                                b = (u.s || f.e)[0]), n = f.s[0];
                            }
                            for (s = e._length, h = n.i[0].length, r.lastIndex = p, a = 0; a < s; a += 1) for (o = 0; o < h; o += 1) l = i ? n.i[a][o] : n.i[a][o] + (b.i[a][o] - n.i[a][o]) * v, 
                            e.i[a][o] = l, l = i ? n.o[a][o] : n.o[a][o] + (b.o[a][o] - n.o[a][o]) * v, e.o[a][o] = l, 
                            l = i ? n.v[a][o] : n.v[a][o] + (b.v[a][o] - n.v[a][o]) * v, e.v[a][o] = l;
                        }
                        function r() {
                            this.paths = this.localShapeCollection;
                        }
                        function n(t) {
                            !function(t, e) {
                                if (t._length === e._length && t.c === e.c) {
                                    for (var r = t._length, n = 0; n < r; n += 1) if (t.v[n][0] !== e.v[n][0] || t.v[n][1] !== e.v[n][1] || t.o[n][0] !== e.o[n][0] || t.o[n][1] !== e.o[n][1] || t.i[n][0] !== e.i[n][0] || t.i[n][1] !== e.i[n][1]) return;
                                    return 1;
                                }
                            }(this.v, t) && (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), 
                            this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
                        }
                        function i() {
                            if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) if (this.lock) this.setVValue(this.pv); else {
                                this.lock = !0, this._mdf = !1;
                                for (var t = this.kf ? this.pv : (this.data.ks || this.data.pt).k, e = this.effectsSequence.length, r = 0; r < e; r += 1) t = this.effectsSequence[r](t);
                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId;
                            } else this._mdf = !1;
                        }
                        function a(t, e, n) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, 
                            this.data = e, this.k = !1, this.kf = !1, this._mdf = !1, e = (3 === n ? e.pt : e.ks).k, 
                            this.v = shape_pool.clone(e), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
                            this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, 
                            this.effectsSequence = [];
                        }
                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this);
                        }
                        function s(e, n, i) {
                            this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, 
                            this.offsetTime = e.data.st, this.keyframes = (3 === i ? n.pt : n.ks).k, this.k = !0, 
                            this.kf = !0, n = this.keyframes[0].s[0].i.length, this.keyframes[0].s[0].i[0].length, 
                            this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n), 
                            this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
                            this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, 
                            this.reset = r, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [ function() {
                                var e = this.comp.renderedFrame - this.offsetTime, r = this.keyframes[0].t - this.offsetTime, n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, i = this._caching.lastFrame;
                                return i !== t && (i < r && e < r || n < i && n < e) || (this._caching.lastIndex = i < e ? this._caching.lastIndex : 0, 
                                this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, 
                                this.pv;
                            }.bind(this) ];
                        }
                        a.prototype.interpolateShape = e, a.prototype.getValue = i, a.prototype.setVValue = n, 
                        a.prototype.addEffect = o, s.prototype.getValue = i, s.prototype.interpolateShape = e, 
                        s.prototype.setVValue = n, s.prototype.addEffect = o;
                        var h = function() {
                            var t = roundCorner;
                            function e(t, e) {
                                this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
                                this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), 
                                this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), 
                                this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), 
                                this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
                            }
                            return e.prototype = {
                                reset: r,
                                getValue: function() {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, 
                                    this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                                },
                                convertEllToPath: function() {
                                    var e = this.p.v[0], r = this.p.v[1], n = this.s.v[0] / 2, i = this.s.v[1] / 2, a = 3 !== this.d, o = this.v;
                                    o.v[0][0] = e, o.v[0][1] = r - i, o.v[1][0] = a ? e + n : e - n, o.v[1][1] = r, 
                                    o.v[2][0] = e, o.v[2][1] = r + i, o.v[3][0] = a ? e - n : e + n, o.v[3][1] = r, 
                                    o.i[0][0] = a ? e - n * t : e + n * t, o.i[0][1] = r - i, o.i[1][0] = a ? e + n : e - n, 
                                    o.i[1][1] = r - i * t, o.i[2][0] = a ? e + n * t : e - n * t, o.i[2][1] = r + i, 
                                    o.i[3][0] = a ? e - n : e + n, o.i[3][1] = r + i * t, o.o[0][0] = a ? e + n * t : e - n * t, 
                                    o.o[0][1] = r - i, o.o[1][0] = a ? e + n : e - n, o.o[1][1] = r + i * t, o.o[2][0] = a ? e - n * t : e + n * t, 
                                    o.o[2][1] = r + i, o.o[3][0] = a ? e - n : e + n, o.o[3][1] = r - i * t;
                                }
                            }, extendPrototype([ DynamicPropertyContainer ], e), e;
                        }(), l = (c.prototype = {
                            reset: r,
                            getValue: function() {
                                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, 
                                this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                            },
                            convertStarToPath: function() {
                                var t = 2 * Math.floor(this.pt.v), e = 2 * Math.PI / t, r = !0, n = this.or.v, i = this.ir.v, a = this.os.v, o = this.is.v, s = 2 * Math.PI * n / (2 * t), h = 2 * Math.PI * i / (2 * t), l = -Math.PI / 2;
                                l += this.r.v;
                                for (var p = 3 === this.data.d ? -1 : 1, c = this.v._length = 0; c < t; c += 1) {
                                    var f = r ? a : o, u = r ? s : h, m = (g = r ? n : i) * Math.cos(l), d = g * Math.sin(l), y = 0 === m && 0 === d ? 0 : d / Math.sqrt(m * m + d * d), g = 0 === m && 0 === d ? 0 : -m / Math.sqrt(m * m + d * d);
                                    m += +this.p.v[0], d += +this.p.v[1], this.v.setTripleAt(m, d, m - y * u * f * p, d - g * u * f * p, m + y * u * f * p, d + g * u * f * p, c, !0), 
                                    r = !r, l += e * p;
                                }
                            },
                            convertPolygonToPath: function() {
                                var t, e = Math.floor(this.pt.v), r = 2 * Math.PI / e, n = this.or.v, i = this.os.v, a = 2 * Math.PI * n / (4 * e), o = -Math.PI / 2, s = 3 === this.data.d ? -1 : 1;
                                for (o += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                                    var h = n * Math.cos(o), l = n * Math.sin(o), p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l), c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                    h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * i * s, l - c * a * i * s, h + p * a * i * s, l + c * a * i * s, t, !0), 
                                    o += r * s;
                                }
                                this.paths.length = 0, this.paths[0] = this.v;
                            }
                        }, extendPrototype([ DynamicPropertyContainer ], c), c), p = function() {
                            function t(t, e) {
                                this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
                                this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, 
                                this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 
                                this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), 
                                this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, 
                                this.convertRectToPath());
                            }
                            return t.prototype = {
                                convertRectToPath: function() {
                                    var t = this.p.v[0], e = this.p.v[1], r = this.s.v[0] / 2, n = this.s.v[1] / 2, i = bm_min(r, n, this.r.v), a = .44810000000000005 * i;
                                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + i, t + r, e - n + a, 0, !0), 
                                    this.v.setTripleAt(t + r, e + n - i, t + r, e + n - a, t + r, e + n - i, 1, !0), 
                                    0 !== i ? (this.v.setTripleAt(t + r - i, e + n, t + r - i, e + n, t + r - a, e + n, 2, !0), 
                                    this.v.setTripleAt(t - r + i, e + n, t - r + a, e + n, t - r + i, e + n, 3, !0), 
                                    this.v.setTripleAt(t - r, e + n - i, t - r, e + n - i, t - r, e + n - a, 4, !0), 
                                    this.v.setTripleAt(t - r, e - n + i, t - r, e - n + a, t - r, e - n + i, 5, !0), 
                                    this.v.setTripleAt(t - r + i, e - n, t - r + i, e - n, t - r + a, e - n, 6, !0), 
                                    this.v.setTripleAt(t + r - i, e - n, t + r - a, e - n, t + r - i, e - n, 7, !0)) : (this.v.setTripleAt(t - r, e + n, t - r + a, e + n, t - r, e + n, 2), 
                                    this.v.setTripleAt(t - r, e - n, t - r, e - n + a, t - r, e - n, 3))) : (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + a, t + r, e - n + i, 0, !0), 
                                    0 !== i ? (this.v.setTripleAt(t + r - i, e - n, t + r - i, e - n, t + r - a, e - n, 1, !0), 
                                    this.v.setTripleAt(t - r + i, e - n, t - r + a, e - n, t - r + i, e - n, 2, !0), 
                                    this.v.setTripleAt(t - r, e - n + i, t - r, e - n + i, t - r, e - n + a, 3, !0), 
                                    this.v.setTripleAt(t - r, e + n - i, t - r, e + n - a, t - r, e + n - i, 4, !0), 
                                    this.v.setTripleAt(t - r + i, e + n, t - r + i, e + n, t - r + a, e + n, 5, !0), 
                                    this.v.setTripleAt(t + r - i, e + n, t + r - a, e + n, t + r - i, e + n, 6, !0), 
                                    this.v.setTripleAt(t + r, e + n - i, t + r, e + n - i, t + r, e + n - a, 7, !0)) : (this.v.setTripleAt(t - r, e - n, t - r + a, e - n, t - r, e - n, 1, !0), 
                                    this.v.setTripleAt(t - r, e + n, t - r, e + n - a, t - r, e + n, 2, !0), this.v.setTripleAt(t + r, e + n, t + r - a, e + n, t + r, e + n, 3, !0)));
                                },
                                getValue: function(t) {
                                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, 
                                    this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                                },
                                reset: r
                            }, extendPrototype([ DynamicPropertyContainer ], t), t;
                        }();
                        function c(t, e) {
                            this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, 
                            this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 
                            1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), 
                            this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, 
                            this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), 
                            this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), 
                            this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), 
                            this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, 
                            this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
                        }
                        return {
                            getShapeProp: function(t, e, r) {
                                var n;
                                return 3 === r || 4 === r ? n = new ((3 === r ? e.pt : e.ks).k.length ? s : a)(t, e, r) : 5 === r ? n = new p(t, e) : 6 === r ? n = new h(t, e) : 7 === r && (n = new l(t, e)), 
                                n.k && t.addDynamicProperty(n), n;
                            },
                            getConstructorFunction: function() {
                                return a;
                            },
                            getKeyframedConstructorFunction: function() {
                                return s;
                            }
                        };
                    }(), ShapeModifiers = (Cr = {}, Dr = {}, Cr.registerModifier = function(t, e) {
                        Dr[t] || (Dr[t] = e);
                    }, Cr.getModifier = function(t, e, r) {
                        return new Dr[t](e, r);
                    }, Cr), Cr, Dr;
                    function ShapeModifier() {}
                    function TrimModifier() {}
                    function RoundCornersModifier() {}
                    function RepeaterModifier() {}
                    function ShapeCollection() {
                        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
                    }
                    function DashProperty(t, e, r, n) {
                        this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, 
                        this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), 
                        this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n);
                        for (var i, a = e.length || 0, o = 0; o < a; o += 1) i = PropertyFactory.getProp(t, e[o].v, 0, 0, this), 
                        this.k = i.k || this.k, this.dataProps[o] = {
                            n: e[o].n,
                            p: i
                        };
                        this.k || this.getValue(!0), this._isAnimated = this.k;
                    }
                    function GradientProperty(t, e, r) {
                        this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                        var n = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                        this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), 
                        this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), 
                        this.k = this.prop.k, this.getValue(!0);
                    }
                    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, 
                    ShapeModifier.prototype.addShape = function(t) {
                        var e;
                        this.closed || (t.sh.container.addDynamicProperty(t.sh), e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: shapeCollection_pool.newShapeCollection()
                        }, this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated());
                    }, ShapeModifier.prototype.init = function(t, e) {
                        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), 
                        this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
                    }, ShapeModifier.prototype.processKeys = function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, 
                        this.iterateDynamicProperties());
                    }, extendPrototype([ DynamicPropertyContainer ], ShapeModifier), extendPrototype([ ShapeModifier ], TrimModifier), 
                    TrimModifier.prototype.initModifierProperties = function(t, e) {
                        this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), 
                        this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, 
                        this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
                    }, TrimModifier.prototype.addShapeToModifier = function(t) {
                        t.pathsData = [];
                    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, n, i) {
                        var a = [];
                        e <= 1 ? a.push({
                            s: t,
                            e: e
                        }) : 1 <= t ? a.push({
                            s: t - 1,
                            e: e - 1
                        }) : (a.push({
                            s: t,
                            e: 1
                        }), a.push({
                            s: 0,
                            e: e - 1
                        }));
                        for (var o, s, h = [], l = a.length, p = 0; p < l; p += 1) (s = a[p]).e * i < n || s.s * i > n + r || (o = s.s * i <= n ? 0 : (s.s * i - n) / r, 
                        s = s.e * i >= n + r ? 1 : (s.e * i - n) / r, h.push([ o, s ]));
                        return h.length || h.push([ 0, 0 ]), h;
                    }, TrimModifier.prototype.releasePathsData = function(t) {
                        for (var e = t.length, r = 0; r < e; r += 1) segments_length_pool.release(t[r]);
                        return t.length = 0, t;
                    }, TrimModifier.prototype.processShapes = function(t) {
                        var e, r, n, i;
                        this._mdf || t ? ((r = this.o.v % 360 / 360) < 0 && (r += 1), (n = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + r) > (i = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + r) && (r = n, 
                        n = i, i = r), n = 1e-4 * Math.round(1e4 * n), i = 1e-4 * Math.round(1e4 * i), this.sValue = n, 
                        this.eValue = i) : (n = this.sValue, i = this.eValue);
                        var a, o, s, h, l, p = this.shapes.length, c = 0;
                        if (i === n) for (d = 0; d < p; d += 1) this.shapes[d].localShapeCollection.releaseShapes(), 
                        this.shapes[d].shape._mdf = !0, this.shapes[d].shape.paths = this.shapes[d].localShapeCollection; else if (1 === i && 0 === n || 0 === i && 1 === n) {
                            if (this._mdf) for (d = 0; d < p; d += 1) this.shapes[d].pathsData.length = 0, this.shapes[d].shape._mdf = !0;
                        } else {
                            for (var f, u, m = [], d = 0; d < p; d += 1) if ((f = this.shapes[d]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (o = (e = f.shape.paths)._length, l = 0, !f.shape._mdf && f.pathsData.length) l = f.totalShapeLength; else {
                                    for (s = this.releasePathsData(f.pathsData), a = 0; a < o; a += 1) h = bez.getSegmentsLength(e.shapes[a]), 
                                    s.push(h), l += h.totalLength;
                                    f.totalShapeLength = l, f.pathsData = s;
                                }
                                c += l, f.shape._mdf = !0;
                            } else f.shape.paths = f.localShapeCollection;
                            var y, g = n, v = i, b = 0;
                            for (d = p - 1; 0 <= d; --d) if ((f = this.shapes[d]).shape._mdf) {
                                for ((u = f.localShapeCollection).releaseShapes(), 2 === this.m && 1 < p ? (y = this.calculateShapeEdges(n, i, f.totalShapeLength, b, c), 
                                b += f.totalShapeLength) : y = [ [ g, v ] ], o = y.length, a = 0; a < o; a += 1) {
                                    g = y[a][0], v = y[a][1], m.length = 0, v <= 1 ? m.push({
                                        s: f.totalShapeLength * g,
                                        e: f.totalShapeLength * v
                                    }) : 1 <= g ? m.push({
                                        s: f.totalShapeLength * (g - 1),
                                        e: f.totalShapeLength * (v - 1)
                                    }) : (m.push({
                                        s: f.totalShapeLength * g,
                                        e: f.totalShapeLength
                                    }), m.push({
                                        s: 0,
                                        e: f.totalShapeLength * (v - 1)
                                    }));
                                    var _, P = this.addShapes(f, m[0]);
                                    m[0].s !== m[0].e && (1 < m.length && (P = f.shape.paths.shapes[f.shape.paths._length - 1].c ? (_ = P.pop(), 
                                    this.addPaths(P, u), this.addShapes(f, m[1], _)) : (this.addPaths(P, u), this.addShapes(f, m[1]))), 
                                    this.addPaths(P, u));
                                }
                                f.shape.paths = u;
                            }
                        }
                    }, TrimModifier.prototype.addPaths = function(t, e) {
                        for (var r = t.length, n = 0; n < r; n += 1) e.addShape(t[n]);
                    }, TrimModifier.prototype.addSegment = function(t, e, r, n, i, a, o) {
                        i.setXYAt(e[0], e[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), o && i.setXYAt(t[0], t[1], "v", a), 
                        i.setXYAt(n[0], n[1], "v", a + 1);
                    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, n) {
                        e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), n && e.setXYAt(t[0], t[4], "v", r), 
                        e.setXYAt(t[3], t[7], "v", r + 1);
                    }, TrimModifier.prototype.addShapes = function(t, e, r) {
                        var n, i, a, o, s, h, l, p, c = t.pathsData, f = t.shape.paths.shapes, u = t.shape.paths._length, m = 0, d = [], y = !0, g = r ? (o = r._length, 
                        r._length) : (r = shape_pool.newElement(), o = 0);
                        for (d.push(r), n = 0; n < u; n += 1) {
                            for (s = c[n].lengths, r.c = f[n].c, a = f[n].c ? s.length : s.length + 1, i = 1; i < a; i += 1) if (m + (p = s[i - 1]).addedLength < e.s) m += p.addedLength, 
                            r.c = !1; else {
                                if (m > e.e) {
                                    r.c = !1;
                                    break;
                                }
                                e.s <= m && e.e >= m + p.addedLength ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[i], f[n].v[i], r, o, y), 
                                y = !1) : (h = bez.getNewSegment(f[n].v[i - 1], f[n].v[i], f[n].o[i - 1], f[n].i[i], (e.s - m) / p.addedLength, (e.e - m) / p.addedLength, s[i - 1]), 
                                this.addSegmentFromArray(h, r, o, y), r.c = y = !1), m += p.addedLength, o += 1;
                            }
                            if (f[n].c && s.length && (p = s[i - 1], m <= e.e ? (l = s[i - 1].addedLength, e.s <= m && e.e >= m + l ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[0], f[n].v[0], r, o, y), 
                            y = !1) : (h = bez.getNewSegment(f[n].v[i - 1], f[n].v[0], f[n].o[i - 1], f[n].i[0], (e.s - m) / l, (e.e - m) / l, s[i - 1]), 
                            this.addSegmentFromArray(h, r, o, y), r.c = y = !1)) : r.c = !1, m += p.addedLength, 
                            o += 1), r._length && (r.setXYAt(r.v[g][0], r.v[g][1], "i", g), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), 
                            m > e.e) break;
                            n < u - 1 && (r = shape_pool.newElement(), y = !0, d.push(r), o = 0);
                        }
                        return d;
                    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ ShapeModifier ], RoundCornersModifier), 
                    RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), 
                        this._isAnimated = !!this.rd.effectsSequence.length;
                    }, RoundCornersModifier.prototype.processPath = function(t, e) {
                        var r = shape_pool.newElement();
                        r.c = t.c;
                        for (var n, i, a, o, s, h, l, p, c, f, u, m, d = t._length, y = 0, g = 0; g < d; g += 1) n = t.v[g], 
                        a = t.o[g], i = t.i[g], n[0] === a[0] && n[1] === a[1] && n[0] === i[0] && n[1] === i[1] ? 0 !== g && g !== d - 1 || t.c ? (o = 0 === g ? t.v[d - 1] : t.v[g - 1], 
                        h = (s = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(s / 2, e) / s : 0, 
                        l = u = n[0] + (o[0] - n[0]) * h, p = m = n[1] - (n[1] - o[1]) * h, c = l - (l - n[0]) * roundCorner, 
                        f = p - (p - n[1]) * roundCorner, r.setTripleAt(l, p, c, f, u, m, y), y += 1, o = g === d - 1 ? t.v[0] : t.v[g + 1], 
                        h = (s = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(s / 2, e) / s : 0, 
                        l = c = n[0] + (o[0] - n[0]) * h, p = f = n[1] + (o[1] - n[1]) * h, u = l - (l - n[0]) * roundCorner, 
                        m = p - (p - n[1]) * roundCorner, r.setTripleAt(l, p, c, f, u, m, y)) : r.setTripleAt(n[0], n[1], a[0], a[1], i[0], i[1], y) : r.setTripleAt(t.v[g][0], t.v[g][1], t.o[g][0], t.o[g][1], t.i[g][0], t.i[g][1], y), 
                        y += 1;
                        return r;
                    }, RoundCornersModifier.prototype.processShapes = function(t) {
                        var e, r, n, i, a, o, s = this.shapes.length, h = this.rd.v;
                        if (0 !== h) for (r = 0; r < s; r += 1) {
                            if ((a = this.shapes[r]).shape.paths, o = a.localShapeCollection, a.shape._mdf || this._mdf || t) for (o.releaseShapes(), 
                            a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(e[n], h));
                            a.shape.paths = a.localShapeCollection;
                        }
                        this.dynamicProperties.length || (this._mdf = !1);
                    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ ShapeModifier ], RepeaterModifier), 
                    RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), 
                        this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), 
                        this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), 
                        this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, 
                        this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), 
                        this.tMatrix = new Matrix(), this.matrix = new Matrix();
                    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, n, i, a) {
                        var o = a ? -1 : 1, s = n.s.v[0] + (1 - n.s.v[0]) * (1 - i), h = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
                        t.translate(n.p.v[0] * o * i, n.p.v[1] * o * i, n.p.v[2]), e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), 
                        e.rotate(-n.r.v * o * i), e.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), 
                        r.scale(a ? 1 / s : s, a ? 1 / h : h), r.translate(n.a.v[0], n.a.v[1], n.a.v[2]);
                    }, RepeaterModifier.prototype.init = function(t, e, r, n) {
                        for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = n, this._currentCopies = 0, 
                        this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), 
                        this.initModifierProperties(t, e[r]); 0 < r; ) this._elements.unshift(e[--r]);
                        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
                    }, RepeaterModifier.prototype.resetElements = function(t) {
                        for (var e = t.length, r = 0; r < e; r += 1) t[r]._processed = !1, "gr" === t[r].ty && this.resetElements(t[r].it);
                    }, RepeaterModifier.prototype.cloneElements = function(t) {
                        return t.length, t = JSON.parse(JSON.stringify(t)), this.resetElements(t), t;
                    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                        for (var r = t.length, n = 0; n < r; n += 1) t[n]._render = e, "gr" === t[n].ty && this.changeGroupRender(t[n].it, e);
                    }, RepeaterModifier.prototype.processShapes = function(t) {
                        var e, r, n, i, a;
                        if (this._mdf || t) {
                            var o, s = Math.ceil(this.c.v);
                            if (this._groups.length < s) {
                                for (;this._groups.length < s; ) {
                                    var h = {
                                        it: this.cloneElements(this._elements),
                                        ty: "gr"
                                    };
                                    h.it.push({
                                        a: {
                                            a: 0,
                                            ix: 1,
                                            k: [ 0, 0 ]
                                        },
                                        nm: "Transform",
                                        o: {
                                            a: 0,
                                            ix: 7,
                                            k: 100
                                        },
                                        p: {
                                            a: 0,
                                            ix: 2,
                                            k: [ 0, 0 ]
                                        },
                                        r: {
                                            a: 1,
                                            ix: 6,
                                            k: [ {
                                                s: 0,
                                                e: 0,
                                                t: 0
                                            }, {
                                                s: 0,
                                                e: 0,
                                                t: 1
                                            } ]
                                        },
                                        s: {
                                            a: 0,
                                            ix: 3,
                                            k: [ 100, 100 ]
                                        },
                                        sa: {
                                            a: 0,
                                            ix: 5,
                                            k: 0
                                        },
                                        sk: {
                                            a: 0,
                                            ix: 4,
                                            k: 0
                                        },
                                        ty: "tr"
                                    }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1;
                                }
                                this.elem.reloadShapes();
                            }
                            for (n = a = 0; n <= this._groups.length - 1; n += 1) this._groups[n]._render = o = a < s, 
                            this.changeGroupRender(this._groups[n].it, o), a += 1;
                            this._currentCopies = s;
                            var l = this.o.v, p = (t = l % 1, 0 < l ? Math.floor(l) : Math.ceil(l)), c = (this.tr.v.props, 
                            this.pMatrix.props), f = this.rMatrix.props, u = this.sMatrix.props;
                            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), 
                            this.matrix.reset();
                            var m, d, y = 0;
                            if (0 < l) {
                                for (;y < p; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), 
                                y += 1;
                                t && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, t, !1), 
                                y += t);
                            } else if (l < 0) {
                                for (;p < y; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), 
                                --y;
                                t && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -t, !0), 
                                y -= t);
                            }
                            for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, 
                            a = this._currentCopies; a; ) {
                                if (d = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, 
                                e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, 
                                e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 
                                0 !== y) {
                                    for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), 
                                    this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), 
                                    this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), 
                                    this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), 
                                    m = 0; m < d; m += 1) r[m] = this.matrix.props[m];
                                    this.matrix.reset();
                                } else for (this.matrix.reset(), m = 0; m < d; m += 1) r[m] = this.matrix.props[m];
                                y += 1, --a, n += i;
                            }
                        } else for (a = this._currentCopies, n = 0, i = 1; a; ) r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props, 
                        e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, 
                        --a, n += i;
                    }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), 
                    ShapeCollection.prototype.addShape = function(t) {
                        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), 
                        this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
                    }, ShapeCollection.prototype.releaseShapes = function() {
                        for (var t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
                        this._length = 0;
                    }, DashProperty.prototype.getValue = function(t) {
                        if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, 
                        this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                            var e = 0, r = this.dataProps.length;
                            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
                        }
                    }, extendPrototype([ DynamicPropertyContainer ], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                        for (var r = 0, n = this.o.length / 2; r < n; ) {
                            if (.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r])) return !1;
                            r += 1;
                        }
                        return !0;
                    }, GradientProperty.prototype.checkCollapsable = function() {
                        if (this.o.length / 2 != this.c.length / 4) return !1;
                        if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e; ) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1;
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                        return !0;
                    }, GradientProperty.prototype.getValue = function(t) {
                        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                            for (var e, r, n = 4 * this.data.p, i = 0; i < n; i += 1) e = i % 4 == 0 ? 100 : 255, 
                            r = Math.round(this.prop.v[i] * e), this.c[i] !== r && (this.c[i] = r, this._cmdf = !t);
                            if (this.o.length) for (n = this.prop.v.length, i = 4 * this.data.p; i < n; i += 1) e = i % 2 == 0 ? 100 : 1, 
                            r = i % 2 == 0 ? Math.round(100 * this.prop.v[i]) : this.prop.v[i], this.o[i - 4 * this.data.p] !== r && (this.o[i - 4 * this.data.p] = r, 
                            this._omdf = !t);
                            this._mdf = !t;
                        }
                    }, extendPrototype([ DynamicPropertyContainer ], GradientProperty);
                    var buildShapeString = function(t, e, r, n) {
                        if (0 === e) return "";
                        for (var i = t.o, a = t.i, o = t.v, s = " M" + n.applyToPointStringified(o[0][0], o[0][1]), h = 1; h < e; h += 1) s += " C" + n.applyToPointStringified(i[h - 1][0], i[h - 1][1]) + " " + n.applyToPointStringified(a[h][0], a[h][1]) + " " + n.applyToPointStringified(o[h][0], o[h][1]);
                        return r && e && (s += " C" + n.applyToPointStringified(i[h - 1][0], i[h - 1][1]) + " " + n.applyToPointStringified(a[0][0], a[0][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]), 
                        s += "z"), s;
                    }, ImagePreloader = function() {
                        var t = function() {
                            var t = createTag("canvas");
                            t.width = 1, t.height = 1;
                            var e = t.getContext("2d");
                            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t;
                        }();
                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                        }
                        function r(e) {
                            var r, n, i, a = (a = e, r = this.assetsPath, n = this.path, i = "", a.e ? i = a.p : r ? i = r + (r = -1 !== (r = a.p).indexOf("images/") ? r.split("/")[1] : r) : (i = n, 
                            i += a.u || "", i += a.p), i);
                            (i = createTag("img")).crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded.bind(this), !1), 
                            i.addEventListener("error", function() {
                                o.img = t, this._imageLoaded();
                            }.bind(this), !1), i.src = a;
                            var o = {
                                img: i,
                                assetData: e
                            };
                            return o;
                        }
                        function n(t, e) {
                            this.imagesLoadedCb = e;
                            for (var r = t.length, n = 0; n < r; n += 1) t[n].layers || (this.totalImages += 1, 
                            this.images.push(this._createImageData(t[n])));
                        }
                        function i(t) {
                            this.path = t || "";
                        }
                        function a(t) {
                            this.assetsPath = t || "";
                        }
                        function o(t) {
                            for (var e = 0, r = this.images.length; e < r; ) {
                                if (this.images[e].assetData === t) return this.images[e].img;
                                e += 1;
                            }
                        }
                        function s() {
                            this.imagesLoadedCb = null, this.images.length = 0;
                        }
                        function h() {
                            return this.totalImages === this.loadedAssets;
                        }
                        return function() {
                            this.loadAssets = n, this.setAssetsPath = a, this.setPath = i, this.loaded = h, 
                            this.destroy = s, this.getImage = o, this._createImageData = r, this._imageLoaded = e, 
                            this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, 
                            this.imagesLoadedCb = null, this.images = [];
                        };
                    }(), featureSupport = (Bv = {
                        maskType: !0
                    }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (Bv.maskType = !1), 
                    Bv), filtersFactory = (Cv = {
                        createFilter: function(t) {
                            var e = createNS("filter");
                            return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), 
                            e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), 
                            e.setAttribute("height", "100%"), e;
                        },
                        createAlphaToLuminanceFilter: function() {
                            var t = createNS("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), 
                            t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t;
                        }
                    }, Cv), assetLoader = function() {
                        function t(t) {
                            return t.response && "object" === _typeof(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0;
                        }
                        return {
                            load: function(e, r, n) {
                                var i, a = new XMLHttpRequest();
                                a.open("GET", e, !0);
                                try {
                                    a.responseType = "json";
                                } catch (t) {}
                                a.send(), a.onreadystatechange = function() {
                                    if (4 == a.readyState) if (200 == a.status) i = t(a), r(i); else try {
                                        i = t(a), r(i);
                                    } catch (t) {
                                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                        n && n(t);
                                    }
                                };
                            }
                        };
                    }(), Cv, Bv;
                    function TextAnimatorProperty(t, e, r) {
                        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, 
                        this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), 
                        this._pathData = {}, this._moreOptions = {
                            alignment: {}
                        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r);
                    }
                    function TextAnimatorDataProperty(t, e, r) {
                        var n = {
                            propType: !1
                        }, i = PropertyFactory.getProp, a = e.a;
                        this.a = {
                            r: a.r ? i(t, a.r, 0, degToRads, r) : n,
                            rx: a.rx ? i(t, a.rx, 0, degToRads, r) : n,
                            ry: a.ry ? i(t, a.ry, 0, degToRads, r) : n,
                            sk: a.sk ? i(t, a.sk, 0, degToRads, r) : n,
                            sa: a.sa ? i(t, a.sa, 0, degToRads, r) : n,
                            s: a.s ? i(t, a.s, 1, .01, r) : n,
                            a: a.a ? i(t, a.a, 1, 0, r) : n,
                            o: a.o ? i(t, a.o, 0, .01, r) : n,
                            p: a.p ? i(t, a.p, 1, 0, r) : n,
                            sw: a.sw ? i(t, a.sw, 0, 0, r) : n,
                            sc: a.sc ? i(t, a.sc, 1, 0, r) : n,
                            fc: a.fc ? i(t, a.fc, 1, 0, r) : n,
                            fh: a.fh ? i(t, a.fh, 0, 0, r) : n,
                            fs: a.fs ? i(t, a.fs, 0, .01, r) : n,
                            fb: a.fb ? i(t, a.fb, 0, .01, r) : n,
                            t: a.t ? i(t, a.t, 0, 0, r) : n
                        }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
                    }
                    function LetterProps(t, e, r, n, i, a) {
                        this.o = t, this.sw = e, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = {
                            o: !0,
                            sw: !!e,
                            sc: !!r,
                            fc: !!n,
                            m: !0,
                            p: !0
                        };
                    }
                    function TextProperty(t, e) {
                        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, 
                        this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, 
                        this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                            ascent: 0,
                            boxWidth: this.defaultBoxWidth,
                            f: "",
                            fStyle: "",
                            fWeight: "",
                            fc: "",
                            j: "",
                            justifyOffset: "",
                            l: [],
                            lh: 0,
                            lineWidths: [],
                            ls: "",
                            of: "",
                            s: "",
                            sc: "",
                            sw: 0,
                            t: 0,
                            tr: 0,
                            sz: 0,
                            ps: null,
                            fillColorAnim: !1,
                            strokeColorAnim: !1,
                            strokeWidthAnim: !1,
                            yOffset: 0,
                            finalSize: 0,
                            finalText: [],
                            finalLineHeight: 0,
                            __complete: !1
                        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
                    }
                    TextAnimatorProperty.prototype.searchProperties = function() {
                        for (var t, e = this._textData.a.length, r = PropertyFactory.getProp, n = 0; n < e; n += 1) t = this._textData.a[n], 
                        this._animatorsData[n] = new TextAnimatorDataProperty(this._elem, t, this);
                        this._textData.p && "m" in this._textData.p ? (this._pathData = {
                            f: r(this._elem, this._textData.p.f, 0, 0, this),
                            l: r(this._elem, this._textData.p.l, 0, 0, this),
                            r: this._textData.p.r,
                            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this);
                    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                        if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                            this._isFirstFrame = !1;
                            var r, n, i, a, o, s, h, l, p, c, f, u, m, d = this._moreOptions.alignment.v, y = this._animatorsData, g = this._textData, v = this.mHelper, b = this._renderType, _ = this.renderedLetters.length, P = (this.data, 
                            t.l);
                            if (this._hasMaskedPath) {
                                if (m = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                    for (var S, x = m.v, E = {
                                        tLength: 0,
                                        segments: []
                                    }, C = (x = this._pathData.r ? x.reverse() : x)._length - 1, A = f = 0; A < C; A += 1) S = bez.buildBezierData(x.v[A], x.v[A + 1], [ x.o[A][0] - x.v[A][0], x.o[A][1] - x.v[A][1] ], [ x.i[A + 1][0] - x.v[A + 1][0], x.i[A + 1][1] - x.v[A + 1][1] ]), 
                                    E.tLength += S.segmentLength, E.segments.push(S), f += S.segmentLength;
                                    A = C, m.v.c && (S = bez.buildBezierData(x.v[A], x.v[0], [ x.o[A][0] - x.v[A][0], x.o[A][1] - x.v[A][1] ], [ x.i[0][0] - x.v[0][0], x.i[0][1] - x.v[0][1] ]), 
                                    E.tLength += S.segmentLength, E.segments.push(S), f += S.segmentLength), this._pathData.pi = E;
                                }
                                if (E = this._pathData.pi, r = this._pathData.f.v, o = 1, a = !(i = s = 0), p = E.segments, 
                                r < 0 && m.v.c) for (E.tLength < Math.abs(r) && (r = -Math.abs(r) % E.tLength), 
                                o = (l = p[s = p.length - 1].points).length - 1; r < 0; ) r += l[o].partialLength, 
                                --o < 0 && (o = (l = p[--s].points).length - 1);
                                h = (l = p[s].points)[o - 1], c = (n = l[o]).partialLength;
                            }
                            C = P.length;
                            var T, w, k, D, I, M, F, O, R, L, j, V, B, N, z, G, $ = 0, W = 0, q = 1.2 * t.finalSize * .714, U = !0, H = y.length, Y = -1, K = r, X = s, J = o, Q = -1, Z = "", tt = this.defaultPropsArray;
                            if (2 === t.j || 1 === t.j) {
                                var et = 0, rt = 0, nt = 2 === t.j ? -.5 : -1, it = 0, at = !0;
                                for (A = 0; A < C; A += 1) if (P[A].n) {
                                    for (et && (et += rt); it < A; ) P[it].animatorJustifyOffset = et, it += 1;
                                    at = !(et = 0);
                                } else {
                                    for (st = 0; st < H; st += 1) (T = y[st].a).t.propType && (at && 2 === t.j && (rt += T.t.v * nt), 
                                    (k = y[st].s.getMult(P[A].anIndexes[st], g.a[st].s.totalChars)).length ? et += T.t.v * k[0] * nt : et += T.t.v * k * nt);
                                    at = !1;
                                }
                                for (et && (et += rt); it < A; ) P[it].animatorJustifyOffset = et, it += 1;
                            }
                            for (A = 0; A < C; A += 1) {
                                if (v.reset(), F = 1, P[A].n) $ = 0, W += t.yOffset, W += U ? 1 : 0, r = K, U = !1, 
                                this._hasMaskedPath && (h = (l = p[s = X].points)[(o = J) - 1], c = (n = l[o]).partialLength, 
                                i = 0), z = V = N = Z = "", tt = this.defaultPropsArray; else {
                                    if (this._hasMaskedPath) {
                                        if (Q !== P[A].line) {
                                            switch (t.j) {
                                              case 1:
                                                r += f - t.lineWidths[P[A].line];
                                                break;

                                              case 2:
                                                r += (f - t.lineWidths[P[A].line]) / 2;
                                            }
                                            Q = P[A].line;
                                        }
                                        Y !== P[A].ind && (P[Y] && (r += P[Y].extra), r += P[A].an / 2, Y = P[A].ind), r += d[0] * P[A].an / 200;
                                        for (var ot = 0, st = 0; st < H; st += 1) (T = y[st].a).p.propType && ((k = y[st].s.getMult(P[A].anIndexes[st], g.a[st].s.totalChars)).length ? ot += T.p.v[0] * k[0] : ot += T.p.v[0] * k), 
                                        T.a.propType && ((k = y[st].s.getMult(P[A].anIndexes[st], g.a[st].s.totalChars)).length ? ot += T.a.v[0] * k[0] : ot += T.a.v[0] * k);
                                        for (a = !0; a; ) r + ot <= i + c || !l ? (u = (r + ot - i) / n.partialLength, I = h.point[0] + (n.point[0] - h.point[0]) * u, 
                                        M = h.point[1] + (n.point[1] - h.point[1]) * u, v.translate(-d[0] * P[A].an / 200, -d[1] * q / 100), 
                                        a = !1) : l && (i += n.partialLength, (o += 1) >= l.length && (o = 0, l = p[s += 1] ? p[s].points : m.v.c ? p[s = o = 0].points : (i -= n.partialLength, 
                                        null)), l && (h = n, c = (n = l[o]).partialLength));
                                        D = P[A].an / 2 - P[A].add, v.translate(-D, 0, 0);
                                    } else D = P[A].an / 2 - P[A].add, v.translate(-D, 0, 0), v.translate(-d[0] * P[A].an / 200, -d[1] * q / 100, 0);
                                    for (P[A].l, st = 0; st < H; st += 1) (T = y[st].a).t.propType && (k = y[st].s.getMult(P[A].anIndexes[st], g.a[st].s.totalChars), 
                                    0 === $ && 0 === t.j || (this._hasMaskedPath ? k.length ? r += T.t.v * k[0] : r += T.t.v * k : k.length ? $ += T.t.v * k[0] : $ += T.t.v * k));
                                    for (P[A].l, t.strokeWidthAnim && (R = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [ t.sc[0], t.sc[1], t.sc[2] ] : [ 0, 0, 0 ]), 
                                    t.fillColorAnim && t.fc && (L = [ t.fc[0], t.fc[1], t.fc[2] ]), st = 0; st < H; st += 1) (T = y[st].a).a.propType && ((k = y[st].s.getMult(P[A].anIndexes[st], g.a[st].s.totalChars)).length ? v.translate(-T.a.v[0] * k[0], -T.a.v[1] * k[1], T.a.v[2] * k[2]) : v.translate(-T.a.v[0] * k, -T.a.v[1] * k, T.a.v[2] * k));
                                    for (st = 0; st < H; st += 1) (T = y[st].a).s.propType && ((k = y[st].s.getMult(P[A].anIndexes[st], g.a[st].s.totalChars)).length ? v.scale(1 + (T.s.v[0] - 1) * k[0], 1 + (T.s.v[1] - 1) * k[1], 1) : v.scale(1 + (T.s.v[0] - 1) * k, 1 + (T.s.v[1] - 1) * k, 1));
                                    for (st = 0; st < H; st += 1) {
                                        if (T = y[st].a, k = y[st].s.getMult(P[A].anIndexes[st], g.a[st].s.totalChars), 
                                        T.sk.propType && (k.length ? v.skewFromAxis(-T.sk.v * k[0], T.sa.v * k[1]) : v.skewFromAxis(-T.sk.v * k, T.sa.v * k)), 
                                        T.r.propType && (k.length ? v.rotateZ(-T.r.v * k[2]) : v.rotateZ(-T.r.v * k)), T.ry.propType && (k.length ? v.rotateY(T.ry.v * k[1]) : v.rotateY(T.ry.v * k)), 
                                        T.rx.propType && (k.length ? v.rotateX(T.rx.v * k[0]) : v.rotateX(T.rx.v * k)), 
                                        T.o.propType && (k.length ? F += (T.o.v * k[0] - F) * k[0] : F += (T.o.v * k - F) * k), 
                                        t.strokeWidthAnim && T.sw.propType && (k.length ? R += T.sw.v * k[0] : R += T.sw.v * k), 
                                        t.strokeColorAnim && T.sc.propType) for (j = 0; j < 3; j += 1) k.length ? O[j] = O[j] + (T.sc.v[j] - O[j]) * k[0] : O[j] = O[j] + (T.sc.v[j] - O[j]) * k;
                                        if (t.fillColorAnim && t.fc) {
                                            if (T.fc.propType) for (j = 0; j < 3; j += 1) k.length ? L[j] = L[j] + (T.fc.v[j] - L[j]) * k[0] : L[j] = L[j] + (T.fc.v[j] - L[j]) * k;
                                            T.fh.propType && (L = k.length ? addHueToRGB(L, T.fh.v * k[0]) : addHueToRGB(L, T.fh.v * k)), 
                                            T.fs.propType && (L = k.length ? addSaturationToRGB(L, T.fs.v * k[0]) : addSaturationToRGB(L, T.fs.v * k)), 
                                            T.fb.propType && (L = k.length ? addBrightnessToRGB(L, T.fb.v * k[0]) : addBrightnessToRGB(L, T.fb.v * k));
                                        }
                                    }
                                    for (st = 0; st < H; st += 1) (T = y[st].a).p.propType && (k = y[st].s.getMult(P[A].anIndexes[st], g.a[st].s.totalChars), 
                                    this._hasMaskedPath ? k.length ? v.translate(0, T.p.v[1] * k[0], -T.p.v[2] * k[1]) : v.translate(0, T.p.v[1] * k, -T.p.v[2] * k) : k.length ? v.translate(T.p.v[0] * k[0], T.p.v[1] * k[1], -T.p.v[2] * k[2]) : v.translate(T.p.v[0] * k, T.p.v[1] * k, -T.p.v[2] * k));
                                    if (t.strokeWidthAnim && (V = R < 0 ? 0 : R), t.strokeColorAnim && (B = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), 
                                    t.fillColorAnim && t.fc && (N = "rgb(" + Math.round(255 * L[0]) + "," + Math.round(255 * L[1]) + "," + Math.round(255 * L[2]) + ")"), 
                                    this._hasMaskedPath) v.translate(0, -t.ls), v.translate(0, d[1] * q / 100 + W, 0), 
                                    g.p.p && (G = (n.point[1] - h.point[1]) / (n.point[0] - h.point[0]), G = 180 * Math.atan(G) / Math.PI, 
                                    n.point[0] < h.point[0] && (G += 180), v.rotate(-G * Math.PI / 180)), v.translate(I, M, 0), 
                                    r -= d[0] * P[A].an / 200, P[A + 1] && Y !== P[A + 1].ind && (r += P[A].an / 2, 
                                    r += t.tr / 1e3 * t.finalSize); else {
                                        switch (v.translate($, W, 0), t.ps && v.translate(t.ps[0], t.ps[1] + t.ascent, 0), 
                                        t.j) {
                                          case 1:
                                            v.translate(P[A].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[P[A].line]), 0, 0);
                                            break;

                                          case 2:
                                            v.translate(P[A].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[P[A].line]) / 2, 0, 0);
                                        }
                                        v.translate(0, -t.ls), v.translate(D, 0, 0), v.translate(d[0] * P[A].an / 200, d[1] * q / 100, 0), 
                                        $ += P[A].l + t.tr / 1e3 * t.finalSize;
                                    }
                                    "html" === b ? Z = v.toCSS() : "svg" === b ? Z = v.to2dCSS() : tt = [ v.props[0], v.props[1], v.props[2], v.props[3], v.props[4], v.props[5], v.props[6], v.props[7], v.props[8], v.props[9], v.props[10], v.props[11], v.props[12], v.props[13], v.props[14], v.props[15] ], 
                                    z = F;
                                }
                                _ <= A ? (w = new LetterProps(z, V, B, N, Z, tt), this.renderedLetters.push(w), 
                                _ += 1, this.lettersChangedFlag = !0) : (w = this.renderedLetters[A], this.lettersChangedFlag = w.update(z, V, B, N, Z, tt) || this.lettersChangedFlag);
                            }
                        }
                    }, TextAnimatorProperty.prototype.getValue = function() {
                        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, 
                        this.iterateDynamicProperties());
                    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], 
                    extendPrototype([ DynamicPropertyContainer ], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, n, i, a) {
                        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1;
                        var o = this._mdf.p = !1;
                        return this.o !== t && (this.o = t, o = this._mdf.o = !0), this.sw !== e && (this.sw = e, 
                        o = this._mdf.sw = !0), this.sc !== r && (this.sc = r, o = this._mdf.sc = !0), this.fc !== n && (this.fc = n, 
                        o = this._mdf.fc = !0), this.m !== i && (this.m = i, o = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, 
                        o = this._mdf.p = !0), o;
                    }, TextProperty.prototype.defaultBoxWidth = [ 0, 0 ], TextProperty.prototype.copyData = function(t, e) {
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                        return t;
                    }, TextProperty.prototype.setCurrentData = function(t) {
                        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, 
                        this._mdf = !0;
                    }, TextProperty.prototype.searchProperty = function() {
                        return this.searchKeyframes();
                    }, TextProperty.prototype.searchKeyframes = function() {
                        return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), 
                        this.kf;
                    }, TextProperty.prototype.addEffect = function(t) {
                        this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
                    }, TextProperty.prototype.getValue = function(t) {
                        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                            var e = this.currentData, r = this.keysIndex;
                            if (this.lock) this.setCurrentData(this.currentData); else {
                                this.lock = !0, this._mdf = !1;
                                for (var n = this.effectsSequence.length, i = t || this.data.d.k[this.keysIndex].s, a = 0; a < n; a += 1) i = r !== this.keysIndex ? this.effectsSequence[a](i, i.t) : this.effectsSequence[a](this.currentData, i.t);
                                e !== i && this.setCurrentData(i), this.pv = this.v = this.currentData, this.lock = !1, 
                                this.frameId = this.elem.globalData.frameId;
                            }
                        }
                    }, TextProperty.prototype.getKeyframeValue = function() {
                        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, n = t.length; r <= n - 1 && (t[r].s, 
                        !(r === n - 1 || t[r + 1].t > e)); ) r += 1;
                        return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
                    }, TextProperty.prototype.buildFinalText = function(t) {
                        for (var e, r = FontManager.getCombinedCharacterCodes(), n = [], i = 0, a = t.length; i < a; ) e = t.charCodeAt(i), 
                        -1 !== r.indexOf(e) ? n[n.length - 1] += t.charAt(i) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(i + 1)) && e <= 57343 ? (n.push(t.substr(i, 2)), 
                        ++i) : n.push(t.charAt(i)), i += 1;
                        return n;
                    }, TextProperty.prototype.completeTextData = function(t) {
                        t.__complete = !0;
                        var e, r, n, i = this.elem.globalData.fontManager, a = this.data, o = [], s = 0, h = a.m.g, l = 0, p = 0, c = 0, f = [], u = 0, m = 0, d = i.getFontByName(t.f), y = 0, g = d.fStyle ? d.fStyle.split(" ") : [], v = "normal", b = "normal";
                        for (T = g.length, k = 0; k < T; k += 1) switch (g[k].toLowerCase()) {
                          case "italic":
                            b = "italic";
                            break;

                          case "bold":
                            v = "700";
                            break;

                          case "black":
                            v = "900";
                            break;

                          case "medium":
                            v = "500";
                            break;

                          case "regular":
                          case "normal":
                            v = "400";
                            break;

                          case "light":
                          case "thin":
                            v = "200";
                        }
                        t.fWeight = d.fWeight || v, t.fStyle = b, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), 
                        T = t.finalText.length, t.finalLineHeight = t.lh;
                        var _, P = t.tr / 1e3 * t.finalSize;
                        if (t.sz) for (var S, x = !0, E = t.sz[0], C = t.sz[1]; x; ) {
                            for (var A = 0, T = (u = 0, (S = this.buildFinalText(t.t)).length), w = (P = t.tr / 1e3 * t.finalSize, 
                            -1), k = 0; k < T; k += 1) _ = S[k].charCodeAt(0), e = !1, " " === S[k] ? w = k : 13 !== _ && 3 !== _ || (e = !(u = 0), 
                            A += t.finalLineHeight || 1.2 * t.finalSize), E < u + (y = i.chars ? (n = i.getCharData(S[k], d.fStyle, d.fFamily), 
                            e ? 0 : n.w * t.finalSize / 100) : i.measureText(S[k], t.f, t.finalSize)) && " " !== S[k] ? (-1 === w ? T += 1 : k = w, 
                            A += t.finalLineHeight || 1.2 * t.finalSize, S.splice(k, w === k ? 1 : 0, "\r"), 
                            w = -1, u = 0) : (u += y, u += P);
                            A += d.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && C < A ? (--t.finalSize, 
                            t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = S, T = t.finalText.length, 
                            x = !1);
                        }
                        u = -P;
                        y = 0;
                        var D, I = 0;
                        for (k = 0; k < T; k += 1) if (e = !1, _ = (D = t.finalText[k]).charCodeAt(0), " " === D ? r = " " : 13 === _ || 3 === _ ? (I = 0, 
                        f.push(u), m = m < u ? u : m, u = -2 * P, e = !(r = ""), c += 1) : r = t.finalText[k], 
                        y = i.chars ? (n = i.getCharData(D, d.fStyle, i.getFontByName(t.f).fFamily), e ? 0 : n.w * t.finalSize / 100) : i.measureText(r, t.f, t.finalSize), 
                        " " === D ? I += y + P : (u += y + P + I, I = 0), o.push({
                            l: y,
                            an: y,
                            add: l,
                            n: e,
                            anIndexes: [],
                            val: r,
                            line: c,
                            animatorJustifyOffset: 0
                        }), 2 == h) {
                            if (l += y, "" === r || " " === r || k === T - 1) {
                                for ("" !== r && " " !== r || (l -= y); p <= k; ) o[p].an = l, o[p].ind = s, o[p].extra = y, 
                                p += 1;
                                s += 1, l = 0;
                            }
                        } else if (3 == h) {
                            if (l += y, "" === r || k === T - 1) {
                                for ("" === r && (l -= y); p <= k; ) o[p].an = l, o[p].ind = s, o[p].extra = y, 
                                p += 1;
                                l = 0, s += 1;
                            }
                        } else o[s].ind = s, o[s].extra = 0, s += 1;
                        if (t.l = o, m = m < u ? u : m, f.push(u), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0; else switch (t.boxWidth = m, 
                        t.j) {
                          case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;

                          case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;

                          default:
                            t.justifyOffset = 0;
                        }
                        t.lineWidths = f;
                        for (var M, F, O, R, L = a.a, j = L.length, V = [], B = 0; B < j; B += 1) {
                            for ((M = L[B]).a.sc && (t.strokeColorAnim = !0), M.a.sw && (t.strokeWidthAnim = !0), 
                            (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (t.fillColorAnim = !0), O = M.s.b, k = R = 0; k < T; k += 1) (F = o[k]).anIndexes[B] = R, 
                            (1 == O && "" !== F.val || 2 == O && "" !== F.val && " " !== F.val || 3 == O && (F.n || " " == F.val || k == T - 1) || 4 == O && (F.n || k == T - 1)) && (1 === M.s.rn && V.push(R), 
                            R += 1);
                            a.a[B].s.totalChars = R;
                            var N, z = -1;
                            if (1 === M.s.rn) for (k = 0; k < T; k += 1) z != (F = o[k]).anIndexes[B] && (z = F.anIndexes[B], 
                            N = V.splice(Math.floor(Math.random() * V.length), 1)[0]), F.anIndexes[B] = N;
                        }
                        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = d.ascent * t.finalSize / 100;
                    }, TextProperty.prototype.updateDocumentData = function(t, e) {
                        e = void 0 === e ? this.keysIndex : e;
                        var r = this.copyData({}, this.data.d.k[e].s);
                        r = this.copyData(r, t);
                        this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this);
                    }, TextProperty.prototype.recalculate = function(t) {
                        (t = this.data.d.k[t].s).__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, 
                        this.getValue(t);
                    }, TextProperty.prototype.canResizeFont = function(t) {
                        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
                    }, TextProperty.prototype.setMinimumFontSize = function(t) {
                        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
                    };
                    var TextSelectorProp = function() {
                        var t = Math.max, e = Math.min, r = Math.floor;
                        function n(t, e) {
                            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, 
                            this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                                k: 0
                            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                                v: 100
                            }, this.o = PropertyFactory.getProp(t, e.o || {
                                k: 0
                            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                                k: 0
                            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue();
                        }
                        return n.prototype = {
                            getMult: function(n) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var i, a, o = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get, s = 0, h = this.finalS, l = this.finalE, p = this.data.sh;
                                return (s = 2 == p ? o(s = l === h ? l <= n ? 1 : 0 : t(0, e(.5 / (l - h) + (n - h) / (l - h), 1))) : 3 == p ? o(s = l === h ? l <= n ? 0 : 1 : 1 - t(0, e(.5 / (l - h) + (n - h) / (l - h), 1))) : 4 == p ? (l === h ? s = 0 : (s = t(0, e(.5 / (l - h) + (n - h) / (l - h), 1))) < .5 ? s *= 2 : s = 1 - 2 * (s - .5), 
                                o(s)) : 5 == p ? o(s = l === h ? 0 : (i = -(a = l - h) / 2 + (n = e(t(0, n + .5 - h), l - h)), 
                                a /= 2, Math.sqrt(1 - i * i / (a * a)))) : (6 == p ? s = l === h ? 0 : (n = e(t(0, n + .5 - h), l - h), 
                                (1 + Math.cos(Math.PI + 2 * Math.PI * n / (l - h))) / 2) : n >= r(h) && (s = n - h < 0 ? 1 - (h - n) : t(0, e(l - n, 1))), 
                                o(s))) * this.a.v;
                            },
                            getValue: function(t) {
                                this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, 
                                t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r = this.o.v / e;
                                t = this.s.v / e + r;
                                (e = this.e.v / e + r) < t && (r = t, t = e, e = r), this.finalS = t, this.finalE = e;
                            }
                        }, extendPrototype([ DynamicPropertyContainer ], n), {
                            getTextSelectorProp: function(t, e, r) {
                                return new n(t, e);
                            }
                        };
                    }(), pool_factory = function(t, e, r, n) {
                        var i = 0, a = t, o = createSizedArray(a);
                        return {
                            newElement: function() {
                                return i ? o[--i] : e();
                            },
                            release: function(t) {
                                i === a && (o = pooling.double(o), a *= 2), r && r(t), o[i] = t, i += 1;
                            }
                        };
                    }, pooling = {
                        double: function(t) {
                            return t.concat(createSizedArray(t.length));
                        }
                    }, point_pool = pool_factory(8, function() {
                        return createTypedArray("float32", 2);
                    }), shape_pool = (factory = pool_factory(4, function() {
                        return new ShapePath();
                    }, function(t) {
                        for (var e = t._length, r = 0; r < e; r += 1) point_pool.release(t.v[r]), point_pool.release(t.i[r]), 
                        point_pool.release(t.o[r]), t.v[r] = null, t.i[r] = null, t.o[r] = null;
                        t._length = 0, t.c = !1;
                    }), factory.clone = function(t) {
                        var e, r = factory.newElement(), n = void 0 === t._length ? t.v.length : t._length;
                        for (r.setLength(n), r.c = t.c, e = 0; e < n; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return r;
                    }, factory), factory, shapeCollection_pool = (Az = {
                        newShapeCollection: function() {
                            return Bz ? Dz[--Bz] : new ShapeCollection();
                        },
                        release: function(t) {
                            for (var e = t._length, r = 0; r < e; r += 1) shape_pool.release(t.shapes[r]);
                            t._length = 0, Bz === Cz && (Dz = pooling.double(Dz), Cz *= 2), Dz[Bz] = t, Bz += 1;
                        }
                    }, Bz = 0, Cz = 4, Dz = createSizedArray(Cz), Az), segments_length_pool = pool_factory(8, function() {
                        return {
                            lengths: [],
                            totalLength: 0
                        };
                    }, function(t) {
                        for (var e = t.lengths.length, r = 0; r < e; r += 1) bezier_length_pool.release(t.lengths[r]);
                        t.lengths.length = 0;
                    }), bezier_length_pool = pool_factory(8, function() {
                        return {
                            addedLength: 0,
                            percents: createTypedArray("float32", defaultCurveSegments),
                            lengths: createTypedArray("float32", defaultCurveSegments)
                        };
                    }), Az, Bz, Cz, Dz;
                    function BaseRenderer() {}
                    function SVGRenderer(t, e) {
                        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                        var r, n = "";
                        e && e.title && (t = createNS("title"), r = createElementID(), t.setAttribute("id", r), 
                        t.textContent = e.title, this.svgElement.appendChild(t), n += r), e && e.description && (r = createNS("desc"), 
                        i = createElementID(), r.setAttribute("id", i), r.textContent = e.description, this.svgElement.appendChild(r), 
                        n += " " + i), n && this.svgElement.setAttribute("aria-labelledby", n);
                        var i = createNS("defs");
                        this.svgElement.appendChild(i), n = createNS("g"), this.svgElement.appendChild(n), 
                        this.layerElement = n, this.renderConfig = {
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            progressiveLoad: e && e.progressiveLoad || !1,
                            hideOnTransparent: !e || !1 !== e.hideOnTransparent,
                            viewBoxOnly: e && e.viewBoxOnly || !1,
                            viewBoxSize: e && e.viewBoxSize || !1,
                            className: e && e.className || ""
                        }, this.globalData = {
                            _mdf: !1,
                            frameNum: -1,
                            defs: i,
                            renderConfig: this.renderConfig
                        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
                    }
                    function CanvasRenderer(t, e) {
                        this.animationItem = t, this.renderConfig = {
                            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                            context: e && e.context || null,
                            progressiveLoad: e && e.progressiveLoad || !1,
                            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                            className: e && e.className || ""
                        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), 
                        this.renderedFrame = -1, this.globalData = {
                            frameNum: -1,
                            _mdf: !1,
                            renderConfig: this.renderConfig,
                            currentGlobalAlpha: -1
                        }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], 
                        this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas";
                    }
                    function MaskElement(t, e, r) {
                        this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], 
                        this.maskElement = null;
                        var n = this.globalData.defs, i = this.masksProperties ? this.masksProperties.length : 0;
                        this.viewData = createSizedArray(i), this.solidPath = "";
                        for (var a, o, s, h, l, p = this.masksProperties, c = 0, f = [], u = createElementID(), m = "clipPath", d = "clip-path", y = 0; y < i; y++) if (("a" !== p[y].mode && "n" !== p[y].mode || p[y].inv || 100 !== p[y].o.k || p[y].o.x) && (d = m = "mask"), 
                        "s" != p[y].mode && "i" != p[y].mode || 0 !== c ? o = null : ((o = createNS("rect")).setAttribute("fill", "#ffffff"), 
                        o.setAttribute("width", this.element.comp.data.w || 0), o.setAttribute("height", this.element.comp.data.h || 0), 
                        f.push(o)), a = createNS("path"), "n" != p[y].mode) {
                            if (c += 1, a.setAttribute("fill", "s" === p[y].mode ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), 
                            0 !== p[y].x.k ? (d = m = "mask", h = PropertyFactory.getProp(this.element, p[y].x, 0, null, this.element), 
                            l = createElementID(), (_ = createNS("filter")).setAttribute("id", l), (s = createNS("feMorphology")).setAttribute("operator", "erode"), 
                            s.setAttribute("in", "SourceGraphic"), s.setAttribute("radius", "0"), _.appendChild(s), 
                            n.appendChild(_), a.setAttribute("stroke", "s" === p[y].mode ? "#000000" : "#ffffff")) : h = s = null, 
                            this.storedData[y] = {
                                elem: a,
                                x: h,
                                expan: s,
                                lastPath: "",
                                lastOperator: "",
                                filterId: l,
                                lastRadius: 0
                            }, "i" == p[y].mode) {
                                for (var g = f.length, v = createNS("g"), b = 0; b < g; b += 1) v.appendChild(f[b]);
                                var _ = createNS("mask");
                                _.setAttribute("mask-type", "alpha"), _.setAttribute("id", u + "_" + c), _.appendChild(a), 
                                n.appendChild(_), v.setAttribute("mask", "url(" + locationHref + "#" + u + "_" + c + ")"), 
                                f.length = 0, f.push(v);
                            } else f.push(a);
                            p[y].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[y] = {
                                elem: a,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, p[y].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, p[y], 3),
                                invRect: o
                            }, this.viewData[y].prop.k || this.drawPath(p[y], this.viewData[y].prop.v, this.viewData[y]);
                        } else this.viewData[y] = {
                            op: PropertyFactory.getProp(this.element, p[y].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, p[y], 3),
                            elem: a,
                            lastPath: ""
                        }, n.appendChild(a);
                        for (this.maskElement = createNS(m), i = f.length, y = 0; y < i; y += 1) this.maskElement.appendChild(f[y]);
                        0 < c && (this.maskElement.setAttribute("id", u), this.element.maskedElement.setAttribute(d, "url(" + locationHref + "#" + u + ")"), 
                        n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
                    }
                    function HierarchyElement() {}
                    function FrameElement() {}
                    function TransformElement() {}
                    function RenderableElement() {}
                    function RenderableDOMElement() {}
                    function ProcessedElement(t, e) {
                        this.elem = t, this.pos = e;
                    }
                    function SVGShapeData(t, e, r) {
                        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, 
                        this.lvl = e, this._isAnimated = !!r.k;
                        for (var n = 0, i = t.length; n < i; ) {
                            if (t[n].mProps.dynamicProperties.length) {
                                this._isAnimated = !0;
                                break;
                            }
                            n += 1;
                        }
                    }
                    function ShapeGroupData() {
                        this.it = [], this.prevViewData = [], this.gr = createNS("g");
                    }
                    function ShapeTransformManager() {
                        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
                    }
                    function CVShapeData(t, e, r, n) {
                        this.styledShapes = [], this.tr = [ 0, 0, 0, 0, 0, 0 ];
                        var i = 4;
                        "rc" == e.ty ? i = 5 : "el" == e.ty ? i = 6 : "sr" == e.ty && (i = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, i, t);
                        for (var a, o = r.length, s = 0; s < o; s += 1) r[s].closed || (a = {
                            transforms: n.addTransformSequence(r[s].transforms),
                            trNodes: []
                        }, this.styledShapes.push(a), r[s].elements.push(a));
                    }
                    function BaseElement() {}
                    function NullElement(t, e, r) {
                        this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), 
                        this.initHierarchy();
                    }
                    function SVGBaseElement() {}
                    function IShapeElement() {}
                    function ITextElement() {}
                    function ICompElement() {}
                    function IImageElement(t, e, r) {
                        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
                            top: 0,
                            left: 0,
                            width: this.assetData.w,
                            height: this.assetData.h
                        };
                    }
                    function ISolidElement(t, e, r) {
                        this.initElement(t, e, r);
                    }
                    function SVGShapeElement(t, e, r) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], 
                        this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), 
                        this.prevViewData = [];
                    }
                    function CVContextData() {
                        var t;
                        for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1, this.savedOp = createTypedArray("float32", 15), 
                        t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                        this._length = 15;
                    }
                    function CVBaseElement() {}
                    function CVImageElement(t, e, r) {
                        this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), 
                        this.initElement(t, e, r);
                    }
                    function CVCompElement(t, e, r) {
                        this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), 
                        this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                            _placeholder: !0
                        };
                    }
                    function CVMaskElement(t, e) {
                        this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], 
                        this.viewData = createSizedArray(this.masksProperties.length);
                        for (var r = this.masksProperties.length, n = !1, i = 0; i < r; i++) "n" !== this.masksProperties[i].mode && (n = !0), 
                        this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
                        (this.hasMasks = n) && this.element.addRenderableComponent(this);
                    }
                    function CVShapeElement(t, e, r) {
                        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], 
                        this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), 
                        this.initElement(t, e, r);
                    }
                    function CVSolidElement(t, e, r) {
                        this.initElement(t, e, r);
                    }
                    function CVTextElement(t, e, r) {
                        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, 
                        this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, 
                        this.currentRender = null, this.renderType = "canvas", this.values = {
                            fill: "rgba(0,0,0,0)",
                            stroke: "rgba(0,0,0,0)",
                            sWidth: 0,
                            fValue: ""
                        }, this.initElement(t, e, r);
                    }
                    function CVEffects() {}
                    BaseRenderer.prototype.checkLayers = function(t) {
                        var e, r, n = this.layers.length;
                        for (this.completeLayers = !0, e = n - 1; 0 <= e; e--) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), 
                        this.completeLayers = !!this.elements[e] && this.completeLayers;
                        this.checkPendingElements();
                    }, BaseRenderer.prototype.createItem = function(t) {
                        switch (t.ty) {
                          case 2:
                            return this.createImage(t);

                          case 0:
                            return this.createComp(t);

                          case 1:
                            return this.createSolid(t);

                          case 3:
                            return this.createNull(t);

                          case 4:
                            return this.createShape(t);

                          case 5:
                            return this.createText(t);

                          case 13:
                            return this.createCamera(t);
                        }
                        return this.createNull(t);
                    }, BaseRenderer.prototype.createCamera = function() {
                        throw new Error("You're using a 3d camera. Try the html renderer.");
                    }, BaseRenderer.prototype.buildAllItems = function() {
                        for (var t = this.layers.length, e = 0; e < t; e += 1) this.buildItem(e);
                        this.checkPendingElements();
                    }, BaseRenderer.prototype.includeLayers = function(t) {
                        this.completeLayers = !1;
                        for (var e, r = t.length, n = this.layers.length, i = 0; i < r; i += 1) for (e = 0; e < n; ) {
                            if (this.layers[e].id == t[i].id) {
                                this.layers[e] = t[i];
                                break;
                            }
                            e += 1;
                        }
                    }, BaseRenderer.prototype.setProjectInterface = function(t) {
                        this.globalData.projectInterface = t;
                    }, BaseRenderer.prototype.initItems = function() {
                        this.globalData.progressiveLoad || this.buildAllItems();
                    }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
                        for (var n = this.elements, i = this.layers, a = 0, o = i.length; a < o; ) i[a].ind == e && (n[a] && !0 !== n[a] ? (r.push(n[a]), 
                        n[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(t, i[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), 
                        this.addPendingElement(t))), a += 1;
                    }, BaseRenderer.prototype.addPendingElement = function(t) {
                        this.pendingElements.push(t);
                    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                        for (var e, r = t.length, n = 0; n < r; n += 1) t[n].xt && ((e = this.createComp(t[n])).initExpressions(), 
                        this.globalData.projectInterface.registerComposition(e));
                    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                        this.globalData.fontManager = new FontManager(), this.globalData.fontManager.addChars(t.chars), 
                        this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), 
                        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), 
                        this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, 
                        this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                            w: t.w,
                            h: t.h
                        };
                    }, extendPrototype([ BaseRenderer ], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                        return new NullElement(t, this.globalData, this);
                    }, SVGRenderer.prototype.createShape = function(t) {
                        return new SVGShapeElement(t, this.globalData, this);
                    }, SVGRenderer.prototype.createText = function(t) {
                        return new SVGTextElement(t, this.globalData, this);
                    }, SVGRenderer.prototype.createImage = function(t) {
                        return new IImageElement(t, this.globalData, this);
                    }, SVGRenderer.prototype.createComp = function(t) {
                        return new SVGCompElement(t, this.globalData, this);
                    }, SVGRenderer.prototype.createSolid = function(t) {
                        return new ISolidElement(t, this.globalData, this);
                    }, SVGRenderer.prototype.configAnimation = function(t) {
                        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), 
                        this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), 
                        this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), 
                        this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), 
                        this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), 
                        this.animationItem.wrapper.appendChild(this.svgElement);
                        var e = this.globalData.defs;
                        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, 
                        this.data = t;
                        var r = createNS("clipPath"), n = createNS("rect");
                        n.setAttribute("width", t.w), n.setAttribute("height", t.h), n.setAttribute("x", 0), 
                        n.setAttribute("y", 0);
                        var i = createElementID();
                        r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + i + ")"), 
                        e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
                    }, SVGRenderer.prototype.destroy = function() {
                        this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
                        for (var t = this.layers ? this.layers.length : 0, e = 0; e < t; e++) this.elements[e] && this.elements[e].destroy();
                        this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
                    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                        var e, r = this.elements;
                        r[t] || 99 == this.layers[t].ty || (r[t] = !0, e = this.createItem(this.layers[t]), 
                        r[t] = e, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(e), 
                        e.initExpressions()), this.appendElementInPos(e, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? e.setMatte(r[t - 1].layerId) : (this.buildItem(t - 1), 
                        this.addPendingElement(e))));
                    }, SVGRenderer.prototype.checkPendingElements = function() {
                        for (;this.pendingElements.length; ) {
                            var t = this.pendingElements.pop();
                            if (t.checkParenting(), t.data.tt) for (var e = 0, r = this.elements.length; e < r; ) {
                                if (this.elements[e] === t) {
                                    t.setMatte(this.elements[e - 1].layerId);
                                    break;
                                }
                                e += 1;
                            }
                        }
                    }, SVGRenderer.prototype.renderFrame = function(t) {
                        if (this.renderedFrame !== t && !this.destroyed) {
                            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, 
                            this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, 
                            this.globalData._mdf = !1;
                            var e, r = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), e = r - 1; 0 <= e; e--) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                            if (this.globalData._mdf) for (e = 0; e < r; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
                        }
                    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                        if (t = t.getBaseElement()) {
                            for (var r, n = 0; n < e; ) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (r = this.elements[n].getBaseElement()), 
                            n += 1;
                            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
                        }
                    }, SVGRenderer.prototype.hide = function() {
                        this.layerElement.style.display = "none";
                    }, SVGRenderer.prototype.show = function() {
                        this.layerElement.style.display = "block";
                    }, extendPrototype([ BaseRenderer ], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                        return new CVShapeElement(t, this.globalData, this);
                    }, CanvasRenderer.prototype.createText = function(t) {
                        return new CVTextElement(t, this.globalData, this);
                    }, CanvasRenderer.prototype.createImage = function(t) {
                        return new CVImageElement(t, this.globalData, this);
                    }, CanvasRenderer.prototype.createComp = function(t) {
                        return new CVCompElement(t, this.globalData, this);
                    }, CanvasRenderer.prototype.createSolid = function(t) {
                        return new CVSolidElement(t, this.globalData, this);
                    }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                        var e;
                        1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || (this.renderConfig.clearCanvas ? (this.transformMat.cloneFromProps(t), 
                        e = this.contextData.cTr.props, this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), 
                        this.contextData.cTr.cloneFromProps(this.transformMat.props), e = this.contextData.cTr.props, 
                        this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])) : this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]));
                    }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                        this.renderConfig.clearCanvas ? (this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, 
                        this.globalData.currentGlobalAlpha = this.contextData.cO)) : this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
                    }, CanvasRenderer.prototype.reset = function() {
                        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
                    }, CanvasRenderer.prototype.save = function(t) {
                        if (this.renderConfig.clearCanvas) {
                            t && this.canvasContext.save();
                            var e = this.contextData.cTr.props;
                            this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                            for (var r = this.contextData.saved[this.contextData.cArrPos], n = 0; n < 16; n += 1) r[n] = e[n];
                            this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
                        } else this.canvasContext.save();
                    }, CanvasRenderer.prototype.restore = function(t) {
                        if (this.renderConfig.clearCanvas) {
                            t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), 
                            --this.contextData.cArrPos;
                            for (var e = this.contextData.saved[this.contextData.cArrPos], r = this.contextData.cTr.props, n = 0; n < 16; n += 1) r[n] = e[n];
                            this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]), e = this.contextData.savedOp[this.contextData.cArrPos], 
                            this.contextData.cO = e, this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, 
                            this.globalData.currentGlobalAlpha = e);
                        } else this.canvasContext.restore();
                    }, CanvasRenderer.prototype.configAnimation = function(t) {
                        this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), 
                        this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", 
                        this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", 
                        this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), 
                        this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, 
                        this.data = t, this.layers = t.layers, this.transformCanvas = {
                            w: t.w,
                            h: t.h,
                            sx: 0,
                            sy: 0,
                            tx: 0,
                            ty: 0
                        }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, 
                        (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, 
                        this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), 
                        this.updateContainerSize();
                    }, CanvasRenderer.prototype.updateContainerSize = function() {
                        var t, e, r, n, i, a, o;
                        this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, 
                        e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), 
                        this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, 
                        e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice") ? (n = (r = this.renderConfig.preserveAspectRatio.split(" "))[1] || "meet", 
                        i = (o = r[0] || "xMidYMid").substr(0, 4), a = o.substr(4), (r = this.transformCanvas.w / this.transformCanvas.h) > (o = t / e) && "meet" === n || r < o && "slice" === n ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), 
                        this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), 
                        this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), 
                        this.transformCanvas.tx = "xMid" === i && (r < o && "meet" === n || o < r && "slice" === n) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === i && (r < o && "meet" === n || o < r && "slice" === n) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, 
                        this.transformCanvas.ty = "YMid" === a && (o < r && "meet" === n || r < o && "slice" === n) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === a && (o < r && "meet" === n || r < o && "slice" === n) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0) : ("none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), 
                        this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, 
                        this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0), 
                        this.transformCanvas.props = [ this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1 ], 
                        this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), 
                        this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
                    }, CanvasRenderer.prototype.destroy = function() {
                        var t;
                        for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), 
                        t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; --t) this.elements[t] && this.elements[t].destroy();
                        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, 
                        this.destroyed = !0;
                    }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                        if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, 
                            this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, 
                            this.globalData.projectInterface.currentFrame = t;
                            var r, n = this.layers.length;
                            for (this.completeLayers || this.checkLayers(t), r = 0; r < n; r++) (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                            if (this.globalData._mdf) {
                                for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), 
                                r = n - 1; 0 <= r; --r) (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                                !0 !== this.renderConfig.clearCanvas && this.restore();
                            }
                        }
                    }, CanvasRenderer.prototype.buildItem = function(t) {
                        var e, r = this.elements;
                        r[t] || 99 == this.layers[t].ty || (e = this.createItem(this.layers[t], this, this.globalData), 
                        (r[t] = e).initExpressions());
                    }, CanvasRenderer.prototype.checkPendingElements = function() {
                        for (;this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
                    }, CanvasRenderer.prototype.hide = function() {
                        this.animationItem.container.style.display = "none";
                    }, CanvasRenderer.prototype.show = function() {
                        this.animationItem.container.style.display = "block";
                    }, MaskElement.prototype.getMaskProperty = function(t) {
                        return this.viewData[t].prop;
                    }, MaskElement.prototype.renderFrame = function(t) {
                        for (var e, r = this.element.finalTransform.mat, n = this.masksProperties.length, i = 0; i < n; i++) (this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), 
                        (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), 
                        "n" !== this.masksProperties[i].mode && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[i].invRect.setAttribute("x", -r.props[12]), 
                        this.viewData[i].invRect.setAttribute("y", -r.props[13])), this.storedData[i].x && (this.storedData[i].x._mdf || t)) && (e = this.storedData[i].expan, 
                        this.storedData[i].x.v < 0 ? ("erode" !== this.storedData[i].lastOperator && (this.storedData[i].lastOperator = "erode", 
                        this.storedData[i].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[i].filterId + ")")), 
                        e.setAttribute("radius", -this.storedData[i].x.v)) : ("dilate" !== this.storedData[i].lastOperator && (this.storedData[i].lastOperator = "dilate", 
                        this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", 2 * this.storedData[i].x.v)));
                    }, MaskElement.prototype.getMaskelement = function() {
                        return this.maskElement;
                    }, MaskElement.prototype.createLayerSolidPath = function() {
                        var t = "M0,0 ";
                        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, 
                        (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " ";
                    }, MaskElement.prototype.drawPath = function(t, e, r) {
                        for (var n, i = " M" + e.v[0][0] + "," + e.v[0][1], a = e._length, o = 1; o < a; o += 1) i += " C" + e.o[o - 1][0] + "," + e.o[o - 1][1] + " " + e.i[o][0] + "," + e.i[o][1] + " " + e.v[o][0] + "," + e.v[o][1];
                        e.c && 1 < a && (i += " C" + e.o[o - 1][0] + "," + e.o[o - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), 
                        r.lastPath !== i && (n = "", r.elem && (e.c && (n = t.inv ? this.solidPath + i : i), 
                        r.elem.setAttribute("d", n)), r.lastPath = i);
                    }, MaskElement.prototype.destroy = function() {
                        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, 
                        this.masksProperties = null;
                    }, HierarchyElement.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting();
                        },
                        setHierarchy: function(t) {
                            this.hierarchy = t;
                        },
                        setAsParent: function() {
                            this._isParent = !0;
                        },
                        checkParenting: function() {
                            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
                        }
                    }, FrameElement.prototype = {
                        initFrame: function() {
                            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
                        },
                        prepareProperties: function(t, e) {
                            for (var r = this.dynamicProperties.length, n = 0; n < r; n += 1) (e || this._isParent && "transform" === this.dynamicProperties[n].propType) && (this.dynamicProperties[n].getValue(), 
                            this.dynamicProperties[n]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
                        },
                        addDynamicProperty: function(t) {
                            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
                        }
                    }, TransformElement.prototype = {
                        initTransform: function() {
                            this.finalTransform = {
                                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                    o: 0
                                },
                                _matMdf: !1,
                                _opMdf: !1,
                                mat: new Matrix()
                            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
                        },
                        renderTransform: function() {
                            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, 
                            this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, 
                            this.hierarchy) {
                                var t, e = this.finalTransform.mat, r = 0, n = this.hierarchy.length;
                                if (!this.finalTransform._matMdf) for (;r < n; ) {
                                    if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break;
                                    }
                                    r += 1;
                                }
                                if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), 
                                r = 0; r < n; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
                            }
                        },
                        globalToLocal: function(t) {
                            var e = [];
                            e.push(this.finalTransform);
                            for (var r = !0, n = this.comp; r; ) n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform), 
                            n = n.comp) : r = !1;
                            for (var i, a = e.length, o = 0; o < a; o += 1) i = e[o].mat.applyToPointArray(0, 0, 0), 
                            t = [ t[0] - i[0], t[1] - i[1], 0 ];
                            return t;
                        },
                        mHelper: new Matrix()
                    }, RenderableElement.prototype = {
                        initRenderable: function() {
                            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
                        },
                        addRenderableComponent: function(t) {
                            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
                        },
                        removeRenderableComponent: function(t) {
                            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
                        },
                        prepareRenderableFrame: function(t) {
                            this.checkLayerLimits(t);
                        },
                        checkTransparency: function() {
                            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, 
                            this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
                        },
                        checkLayerLimits: function(t) {
                            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, 
                            this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, 
                            this.isInRange = !1, this.hide());
                        },
                        renderRenderable: function() {
                            for (var t = this.renderableComponents.length, e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
                        },
                        sourceRectAtTime: function() {
                            return {
                                top: 0,
                                left: 0,
                                width: 100,
                                height: 100
                            };
                        },
                        getLayerSize: function() {
                            return 5 === this.data.ty ? {
                                w: this.data.textData.width,
                                h: this.data.textData.height
                            } : {
                                w: this.data.width,
                                h: this.data.height
                            };
                        }
                    }, extendPrototype([ RenderableElement, createProxyFunction({
                        initElement: function(t, e, r) {
                            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), 
                            this.initRenderable(), this.initRendererElement(), this.createContainerElements(), 
                            this.createRenderableComponents(), this.createContent(), this.hide();
                        },
                        hide: function() {
                            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", 
                            this.hidden = !0);
                        },
                        show: function() {
                            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), 
                            this.hidden = !1, this._isFirstFrame = !0);
                        },
                        renderFrame: function() {
                            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), 
                            this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                        },
                        renderInnerContent: function() {},
                        prepareFrame: function(t) {
                            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), 
                            this.checkTransparency();
                        },
                        destroy: function() {
                            this.innerElem = null, this.destroyBaseElement();
                        }
                    }) ], RenderableDOMElement), SVGShapeData.prototype.setAsAnimated = function() {
                        this._isAnimated = !0;
                    }, ShapeTransformManager.prototype = {
                        addTransformSequence: function(t) {
                            for (var e = t.length, r = "_", n = 0; n < e; n += 1) r += t[n].transform.key + "_";
                            var i = this.sequences[r];
                            return i || (i = {
                                transforms: [].concat(t),
                                finalTransform: new Matrix(),
                                _mdf: !1
                            }, this.sequences[r] = i, this.sequenceList.push(i)), i;
                        },
                        processSequence: function(t, e) {
                            for (var r, n = 0, i = t.transforms.length, a = e; n < i && !e; ) {
                                if (t.transforms[n].transform.mProps._mdf) {
                                    a = !0;
                                    break;
                                }
                                n += 1;
                            }
                            if (a) for (t.finalTransform.reset(), n = i - 1; 0 <= n; --n) r = t.transforms[n].transform.mProps.v.props, 
                            t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                            t._mdf = a;
                        },
                        processSequences: function(t) {
                            for (var e = this.sequenceList.length, r = 0; r < e; r += 1) this.processSequence(this.sequenceList[r], t);
                        },
                        getNewKey: function() {
                            return "_" + this.transform_key_count++;
                        }
                    }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                        checkMasks: function() {
                            if (!this.data.hasMask) return !1;
                            for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                                if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                                t += 1;
                            }
                            return !1;
                        },
                        initExpressions: function() {
                            this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), 
                            this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), 
                            this.layerInterface.text = this.layerInterface.textInterface);
                        },
                        setBlendMode: function() {
                            var t = getBlendMode(this.data.bm);
                            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
                        },
                        initBaseData: function(t, e, r) {
                            this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), 
                            this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
                        },
                        getType: function() {
                            return this.type;
                        },
                        sourceRectAtTime: function() {}
                    }, NullElement.prototype.prepareFrame = function(t) {
                        this.prepareProperties(t, !0);
                    }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                        return null;
                    }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, 
                    NullElement.prototype.hide = function() {}, extendPrototype([ BaseElement, TransformElement, HierarchyElement, FrameElement ], NullElement), 
                    SVGBaseElement.prototype = {
                        initRendererElement: function() {
                            this.layerElement = createNS("g");
                        },
                        createContainerElements: function() {
                            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, 
                            this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var t, e, r, n, i, a, o, s = null;
                            this.data.td ? 3 == this.data.td || 1 == this.data.td ? ((n = createNS("mask")).setAttribute("id", this.layerId), 
                            n.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), n.appendChild(this.layerElement), 
                            this.globalData.defs.appendChild(s = n), featureSupport.maskType || 1 != this.data.td || (n.setAttribute("mask-type", "luminance"), 
                            t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), 
                            e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), 
                            n.appendChild(s = i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))) : 2 == this.data.td && ((a = createNS("mask")).setAttribute("id", this.layerId), 
                            a.setAttribute("mask-type", "alpha"), o = createNS("g"), a.appendChild(o), t = createElementID(), 
                            e = filtersFactory.createFilter(t), (r = createNS("feComponentTransfer")).setAttribute("in", "SourceGraphic"), 
                            e.appendChild(r), (n = createNS("feFuncA")).setAttribute("type", "table"), n.setAttribute("tableValues", "1.0 0.0"), 
                            r.appendChild(n), this.globalData.defs.appendChild(e), (n = createNS("rect")).setAttribute("width", this.comp.data.w), 
                            n.setAttribute("height", this.comp.data.h), n.setAttribute("x", "0"), n.setAttribute("y", "0"), 
                            n.setAttribute("fill", "#ffffff"), n.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), 
                            o.appendChild(n), o.appendChild(this.layerElement), s = o, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), 
                            e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), 
                            o.appendChild(n), i.appendChild(this.layerElement), o.appendChild(s = i)), this.globalData.defs.appendChild(a)) : this.data.tt ? (this.matteElement.appendChild(this.layerElement), 
                            s = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement, 
                            this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 
                            0 !== this.data.ty || this.data.hd || (o = createNS("clipPath"), (i = createNS("path")).setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z"), 
                            a = createElementID(), o.setAttribute("id", a), o.appendChild(i), this.globalData.defs.appendChild(o), 
                            this.checkMasks() ? ((o = createNS("g")).setAttribute("clip-path", "url(" + locationHref + "#" + a + ")"), 
                            o.appendChild(this.layerElement), this.transformedElement = o, s ? s.appendChild(this.transformedElement) : this.baseElement = this.transformedElement) : this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + a + ")")), 
                            0 !== this.data.bm && this.setBlendMode();
                        },
                        renderElement: function() {
                            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), 
                            this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement;
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
                        },
                        setMatte: function(t) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")");
                        }
                    }, IShapeElement.prototype = {
                        addShapeToModifiers: function(t) {
                            for (var e = this.shapeModifiers.length, r = 0; r < e; r += 1) this.shapeModifiers[r].addShape(t);
                        },
                        isShapeInAnimatedModifiers: function(t) {
                            for (var e = this.shapeModifiers.length; 0 < e; ) if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                            return !1;
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                for (var t = this.shapes.length, e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                                for (e = (t = this.shapeModifiers.length) - 1; 0 <= e; --e) this.shapeModifiers[e].processShapes(this._isFirstFrame);
                            }
                        },
                        lcEnum: {
                            1: "butt",
                            2: "round",
                            3: "square"
                        },
                        ljEnum: {
                            1: "miter",
                            2: "round",
                            3: "bevel"
                        },
                        searchProcessedElement: function(t) {
                            for (var e = this.processedElements, r = 0, n = e.length; r < n; ) {
                                if (e[r].elem === t) return e[r].pos;
                                r += 1;
                            }
                            return 0;
                        },
                        addProcessedElement: function(t, e) {
                            for (var r = this.processedElements, n = r.length; n; ) if (r[--n].elem === t) return;
                            r.push(new ProcessedElement(t, e));
                        },
                        prepareFrame: function(t) {
                            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
                        }
                    }, ITextElement.prototype.initElement = function(t, e, r) {
                        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), 
                        this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), 
                        this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), 
                        this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
                    }, ITextElement.prototype.prepareFrame = function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), 
                        (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), 
                        this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
                    }, ITextElement.prototype.createPathShape = function(t, e) {
                        for (var r, n = e.length, i = "", a = 0; a < n; a += 1) r = e[a].ks.k, i += buildShapeString(r, r.i.length, !0, t);
                        return i;
                    }, ITextElement.prototype.updateDocumentData = function(t, e) {
                        this.textProperty.updateDocumentData(t, e);
                    }, ITextElement.prototype.canResizeFont = function(t) {
                        this.textProperty.canResizeFont(t);
                    }, ITextElement.prototype.setMinimumFontSize = function(t) {
                        this.textProperty.setMinimumFontSize(t);
                    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, n, i) {
                        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), 
                        t.j) {
                          case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                            break;

                          case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
                        }
                        e.translate(n, i, 0);
                    }, ITextElement.prototype.buildColor = function(t) {
                        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
                    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {}, 
                    extendPrototype([ BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement ], ICompElement), 
                    ICompElement.prototype.initElement = function(t, e, r) {
                        this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), 
                        this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), 
                        this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), 
                        this.hide();
                    }, ICompElement.prototype.prepareFrame = function(t) {
                        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), 
                        this.isInRange || this.data.xt) {
                            this.tm._placeholder ? this.renderedFrame = t / this.data.sr : ((r = this.tm.v) === this.data.op && (r = this.data.op - 1), 
                            this.renderedFrame = r);
                            var e, r = this.elements.length;
                            for (this.completeLayers || this.checkLayers(this.renderedFrame), e = r - 1; 0 <= e; --e) (this.completeLayers || this.elements[e]) && (this.elements[e].prepareFrame(this.renderedFrame - this.layers[e].st), 
                            this.elements[e]._mdf && (this._mdf = !0));
                        }
                    }, ICompElement.prototype.renderInnerContent = function() {
                        for (var t = this.layers.length, e = 0; e < t; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
                    }, ICompElement.prototype.setElements = function(t) {
                        this.elements = t;
                    }, ICompElement.prototype.getElements = function() {
                        return this.elements;
                    }, ICompElement.prototype.destroyElements = function() {
                        for (var t = this.layers.length, e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
                    }, ICompElement.prototype.destroy = function() {
                        this.destroyElements(), this.destroyBaseElement();
                    }, extendPrototype([ BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement ], IImageElement), 
                    IImageElement.prototype.createContent = function() {
                        var t = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), 
                        this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), 
                        this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
                    }, IImageElement.prototype.sourceRectAtTime = function() {
                        return this.sourceRect;
                    }, extendPrototype([ IImageElement ], ISolidElement), ISolidElement.prototype.createContent = function() {
                        var t = createNS("rect");
                        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), 
                        this.layerElement.appendChild(t);
                    }, extendPrototype([ BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement ], SVGShapeElement), 
                    SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix(), 
                    SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), 
                        this.filterUniqueShapes();
                    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                        for (var t, e, r, n = this.shapes.length, i = this.stylesList.length, a = [], o = !1, s = 0; s < i; s += 1) {
                            for (r = this.stylesList[s], o = !1, t = a.length = 0; t < n; t += 1) -1 !== (e = this.shapes[t]).styles.indexOf(r) && (a.push(e), 
                            o = e._isAnimated || o);
                            1 < a.length && o && this.setShapesAsAnimated(a);
                        }
                    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                        for (var e = t.length, r = 0; r < e; r += 1) t[r].setAsAnimated();
                    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                        var r, n = new SVGStyleData(t, e);
                        e = n.pElem;
                        return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, n) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, n) : "gf" !== t.ty && "gs" !== t.ty || (r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, n), 
                        this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), 
                        this.globalData.defs.appendChild(r.of), e.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))), 
                        "st" !== t.ty && "gs" !== t.ty || (e.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), 
                        e.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), e.setAttribute("fill-opacity", "0"), 
                        1 === t.lj && e.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && e.setAttribute("fill-rule", "evenodd"), 
                        t.ln && e.setAttribute("id", t.ln), t.cl && e.setAttribute("class", t.cl), t.bm && (e.style["mix-blend-mode"] = getBlendMode(t.bm)), 
                        this.stylesList.push(n), this.addToAnimatedContents(t, r), r;
                    }, SVGShapeElement.prototype.createGroupElement = function(t) {
                        var e = new ShapeGroupData();
                        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), 
                        t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
                    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                        var r = TransformPropertyFactory.getTransformProperty(this, t, this);
                        e = new SVGTransformData(r, r.o, e);
                        return this.addToAnimatedContents(t, e), e;
                    }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
                        var n = 4;
                        return "rc" === t.ty ? n = 5 : "el" === t.ty ? n = 6 : "sr" === t.ty && (n = 7), 
                        n = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, n, this)), 
                        this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), 
                        n;
                    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                        for (var r = 0, n = this.animatedContents.length; r < n; ) {
                            if (this.animatedContents[r].element === e) return;
                            r += 1;
                        }
                        this.animatedContents.push({
                            fn: SVGElementsRenderer.createRenderFunction(t),
                            element: e,
                            data: t
                        });
                    }, SVGShapeElement.prototype.setElementStyles = function(t) {
                        for (var e = t.styles, r = this.stylesList.length, n = 0; n < r; n += 1) this.stylesList[n].closed || e.push(this.stylesList[n]);
                    }, SVGShapeElement.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        for (var t = this.itemsData.length, e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), 
                        this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                        this.renderModifiers();
                    }, SVGShapeElement.prototype.searchShapes = function(t, e, r, n, i, a, o) {
                        for (var s, h, l, p, c, f = [].concat(a), u = t.length - 1, m = [], d = [], y = u; 0 <= y; --y) {
                            if ((c = this.searchProcessedElement(t[y])) ? e[y] = r[c - 1] : t[y]._render = o, 
                            "fl" == t[y].ty || "st" == t[y].ty || "gf" == t[y].ty || "gs" == t[y].ty) c ? e[y].style.closed = !1 : e[y] = this.createStyleElement(t[y], i), 
                            t[y]._render && n.appendChild(e[y].style.pElem), m.push(e[y].style); else if ("gr" == t[y].ty) {
                                if (c) for (h = e[y].it.length, s = 0; s < h; s += 1) e[y].prevViewData[s] = e[y].it[s]; else e[y] = this.createGroupElement(t[y]);
                                this.searchShapes(t[y].it, e[y].it, e[y].prevViewData, e[y].gr, i + 1, f, o), t[y]._render && n.appendChild(e[y].gr);
                            } else "tr" == t[y].ty ? (c || (e[y] = this.createTransformElement(t[y], n)), l = e[y].transform, 
                            f.push(l)) : "sh" == t[y].ty || "rc" == t[y].ty || "el" == t[y].ty || "sr" == t[y].ty ? (c || (e[y] = this.createShapeElement(t[y], f, i)), 
                            this.setElementStyles(e[y])) : "tm" == t[y].ty || "rd" == t[y].ty || "ms" == t[y].ty ? (c ? (p = e[y]).closed = !1 : ((p = ShapeModifiers.getModifier(t[y].ty)).init(this, t[y]), 
                            e[y] = p, this.shapeModifiers.push(p)), d.push(p)) : "rp" == t[y].ty && (c ? (p = e[y]).closed = !0 : (p = ShapeModifiers.getModifier(t[y].ty), 
                            (e[y] = p).init(this, t, y, e), this.shapeModifiers.push(p), o = !1), d.push(p));
                            this.addProcessedElement(t[y], y + 1);
                        }
                        for (u = m.length, y = 0; y < u; y += 1) m[y].closed = !0;
                        for (u = d.length, y = 0; y < u; y += 1) d[y].closed = !0;
                    }, SVGShapeElement.prototype.renderInnerContent = function() {
                        this.renderModifiers();
                        for (var t = this.stylesList.length, e = 0; e < t; e += 1) this.stylesList[e].reset();
                        for (this.renderShape(), e = 0; e < t; e += 1) (this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), 
                        this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"));
                    }, SVGShapeElement.prototype.renderShape = function() {
                        for (var t, e = this.animatedContents.length, r = 0; r < e; r += 1) t = this.animatedContents[r], 
                        (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame);
                    }, SVGShapeElement.prototype.destroy = function() {
                        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
                    }, CVContextData.prototype.duplicate = function() {
                        var t = 2 * this._length, e = this.savedOp;
                        this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                        var r = 0;
                        for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
                        this._length = t;
                    }, CVContextData.prototype.reset = function() {
                        this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
                    }, CVBaseElement.prototype = {
                        createElements: function() {},
                        initRendererElement: function() {},
                        createContainerElements: function() {
                            this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);
                        },
                        createContent: function() {},
                        setBlendMode: function() {
                            var t, e = this.globalData;
                            e.blendMode !== this.data.bm && (e.blendMode = this.data.bm, t = getBlendMode(this.data.bm), 
                            e.canvasContext.globalCompositeOperation = t);
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new CVMaskElement(this.data, this);
                        },
                        hideElement: function() {
                            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
                        },
                        showElement: function() {
                            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, 
                            this.maskManager._isFirstFrame = !0);
                        },
                        renderFrame: function() {
                            this.hidden || this.data.hd || (this.renderTransform(), this.renderRenderable(), 
                            this.setBlendMode(), this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), 
                            this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), 
                            this.globalData.renderer.restore(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), 
                            this._isFirstFrame && (this._isFirstFrame = !1));
                        },
                        destroy: function() {
                            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
                        },
                        mHelper: new Matrix()
                    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, 
                    extendPrototype([ BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement ], CVImageElement), 
                    CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, 
                    CVImageElement.prototype.createContent = function() {
                        var t, e, r, n, i, a, o, s, h;
                        !this.img.width || this.assetData.w === this.img.width && this.assetData.h === this.img.height || ((t = createTag("canvas")).width = this.assetData.w, 
                        t.height = this.assetData.h, n = t.getContext("2d"), i = this.img.width, a = this.img.height, 
                        s = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio, 
                        s < (o = i / a) && "xMidYMid slice" === h || o < s && "xMidYMid slice" !== h ? e = (r = a) * s : r = (e = i) / s, 
                        n.drawImage(this.img, (i - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), 
                        this.img = t);
                    }, CVImageElement.prototype.renderInnerContent = function(t) {
                        this.canvasContext.drawImage(this.img, 0, 0);
                    }, CVImageElement.prototype.destroy = function() {
                        this.img = null;
                    }, extendPrototype([ CanvasRenderer, ICompElement, CVBaseElement ], CVCompElement), 
                    CVCompElement.prototype.renderInnerContent = function() {
                        for (var t = this.layers.length - 1; 0 <= t; --t) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
                    }, CVCompElement.prototype.destroy = function() {
                        for (var t = this.layers.length - 1; 0 <= t; --t) this.elements[t] && this.elements[t].destroy();
                        this.layers = null, this.elements = null;
                    }, CVMaskElement.prototype.renderFrame = function() {
                        if (this.hasMasks) {
                            var t, e, r, n, i = this.element.finalTransform.mat, a = this.element.canvasContext, o = this.masksProperties.length;
                            for (a.beginPath(), t = 0; t < o; t++) if ("n" !== this.masksProperties[t].mode) {
                                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), 
                                a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), 
                                a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[t].v, 
                                e = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(e[0], e[1]);
                                for (var s = n._length, h = 1; h < s; h++) r = i.applyToTriplePoints(n.o[h - 1], n.i[h], n.v[h]), 
                                a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                                r = i.applyToTriplePoints(n.o[h - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                            }
                            this.element.globalData.renderer.save(!0), a.clip();
                        }
                    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, 
                    CVMaskElement.prototype.destroy = function() {
                        this.element = null;
                    }, extendPrototype([ BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement ], CVShapeElement), 
                    CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, 
                    CVShapeElement.prototype.transformHelper = {
                        opacity: 1,
                        _opMdf: !1
                    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
                    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                        var r = {
                            data: t,
                            type: t.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e),
                            transforms: [],
                            elements: [],
                            closed: !0 === t.hd
                        }, n = {};
                        return "fl" == t.ty || "st" == t.ty ? (n.c = PropertyFactory.getProp(this, t.c, 1, 255, this), 
                        n.c.k || (r.co = "rgb(" + bm_floor(n.c.v[0]) + "," + bm_floor(n.c.v[1]) + "," + bm_floor(n.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (n.s = PropertyFactory.getProp(this, t.s, 1, null, this), 
                        n.e = PropertyFactory.getProp(this, t.e, 1, null, this), n.h = PropertyFactory.getProp(this, t.h || {
                            k: 0
                        }, 0, .01, this), n.a = PropertyFactory.getProp(this, t.a || {
                            k: 0
                        }, 0, degToRads, this), n.g = new GradientProperty(this, t.g, this)), n.o = PropertyFactory.getProp(this, t.o, 0, .01, this), 
                        "st" == t.ty || "gs" == t.ty ? (r.lc = this.lcEnum[t.lc] || "round", r.lj = this.ljEnum[t.lj] || "round", 
                        1 == t.lj && (r.ml = t.ml), n.w = PropertyFactory.getProp(this, t.w, 0, null, this), 
                        n.w.k || (r.wi = n.w.v), t.d && (e = new DashProperty(this, t.d, "canvas", this), 
                        n.d = e, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0]))) : r.r = 2 === t.r ? "evenodd" : "nonzero", 
                        this.stylesList.push(r), n.style = r, n;
                    }, CVShapeElement.prototype.createGroupElement = function(t) {
                        return {
                            it: [],
                            prevViewData: []
                        };
                    }, CVShapeElement.prototype.createTransformElement = function(t) {
                        return {
                            transform: {
                                opacity: 1,
                                _opMdf: !1,
                                key: this.transformsManager.getNewKey(),
                                op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                                mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                            }
                        };
                    }, CVShapeElement.prototype.createShapeElement = function(t) {
                        return t = new CVShapeData(this, t, this.stylesList, this.transformsManager), this.shapes.push(t), 
                        this.addShapeToModifiers(t), t;
                    }, CVShapeElement.prototype.reloadShapes = function() {
                        this._isFirstFrame = !0;
                        for (var t = this.itemsData.length, e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), 
                        t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
                    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                        for (var e = this.stylesList.length, r = 0; r < e; r += 1) this.stylesList[r].closed || this.stylesList[r].transforms.push(t);
                    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                        for (var t = this.stylesList.length, e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop();
                    }, CVShapeElement.prototype.closeStyles = function(t) {
                        for (var e = t.length, r = 0; r < e; r += 1) t[r].closed = !0;
                    }, CVShapeElement.prototype.searchShapes = function(t, e, r, n, i) {
                        for (var a, o, s, h, l, p = t.length - 1, c = [], f = [], u = [].concat(i), m = p; 0 <= m; --m) {
                            if ((s = this.searchProcessedElement(t[m])) ? e[m] = r[s - 1] : t[m]._shouldRender = n, 
                            "fl" == t[m].ty || "st" == t[m].ty || "gf" == t[m].ty || "gs" == t[m].ty) s ? e[m].style.closed = !1 : e[m] = this.createStyleElement(t[m], u), 
                            c.push(e[m].style); else if ("gr" == t[m].ty) {
                                if (s) for (o = e[m].it.length, a = 0; a < o; a += 1) e[m].prevViewData[a] = e[m].it[a]; else e[m] = this.createGroupElement(t[m]);
                                this.searchShapes(t[m].it, e[m].it, e[m].prevViewData, n, u);
                            } else "tr" == t[m].ty ? (s || (l = this.createTransformElement(t[m]), e[m] = l), 
                            u.push(e[m]), this.addTransformToStyleList(e[m])) : "sh" == t[m].ty || "rc" == t[m].ty || "el" == t[m].ty || "sr" == t[m].ty ? s || (e[m] = this.createShapeElement(t[m])) : "tm" == t[m].ty || "rd" == t[m].ty ? (s ? (h = e[m]).closed = !1 : ((h = ShapeModifiers.getModifier(t[m].ty)).init(this, t[m]), 
                            e[m] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" == t[m].ty && (s ? (h = e[m]).closed = !0 : (h = ShapeModifiers.getModifier(t[m].ty), 
                            (e[m] = h).init(this, t, m, e), this.shapeModifiers.push(h), n = !1), f.push(h));
                            this.addProcessedElement(t[m], m + 1);
                        }
                        for (this.removeTransformFromStyleList(), this.closeStyles(c), p = f.length, m = 0; m < p; m += 1) f[m].closed = !0;
                    }, CVShapeElement.prototype.renderInnerContent = function() {
                        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), 
                        this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
                    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                        (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, 
                        e._opMdf = !0);
                    }, CVShapeElement.prototype.drawLayer = function() {
                        for (var t, e, r, n, i, a, o, s, h = this.stylesList.length, l = this.globalData.renderer, p = this.globalData.canvasContext, c = 0; c < h; c += 1) if (("st" !== (o = (s = this.stylesList[c]).type) && "gs" !== o || 0 !== s.wi) && s.data._shouldRender && 0 !== s.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                            for (l.save(), i = s.elements, "st" === o || "gs" === o ? (p.strokeStyle = "st" === o ? s.co : s.grd, 
                            p.lineWidth = s.wi, p.lineCap = s.lc, p.lineJoin = s.lj, p.miterLimit = s.ml || 0) : p.fillStyle = "fl" === o ? s.co : s.grd, 
                            l.ctxOpacity(s.coOp), "st" !== o && "gs" !== o && p.beginPath(), l.ctxTransform(s.preTransforms.finalTransform.props), 
                            e = i.length, t = 0; t < e; t += 1) {
                                for ("st" !== o && "gs" !== o || (p.beginPath(), s.da && (p.setLineDash(s.da), p.lineDashOffset = s.do)), 
                                n = (a = i[t].trNodes).length, r = 0; r < n; r += 1) "m" == a[r].t ? p.moveTo(a[r].p[0], a[r].p[1]) : "c" == a[r].t ? p.bezierCurveTo(a[r].pts[0], a[r].pts[1], a[r].pts[2], a[r].pts[3], a[r].pts[4], a[r].pts[5]) : p.closePath();
                                "st" !== o && "gs" !== o || (p.stroke(), s.da && p.setLineDash(this.dashResetter));
                            }
                            "st" !== o && "gs" !== o && p.fill(s.r), l.restore();
                        }
                    }, CVShapeElement.prototype.renderShape = function(t, e, r, n) {
                        for (var i = t, a = e.length - 1; 0 <= a; --a) "tr" == e[a].ty ? (i = r[a].transform, 
                        this.renderShapeTransform(t, i)) : "sh" == e[a].ty || "el" == e[a].ty || "rc" == e[a].ty || "sr" == e[a].ty ? this.renderPath(e[a], r[a]) : "fl" == e[a].ty ? this.renderFill(e[a], r[a], i) : "st" == e[a].ty ? this.renderStroke(e[a], r[a], i) : "gf" == e[a].ty || "gs" == e[a].ty ? this.renderGradientFill(e[a], r[a], i) : "gr" == e[a].ty ? this.renderShape(i, e[a].it, r[a].it) : e[a].ty;
                        n && this.drawLayer();
                    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                        if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                            var r, n, i = t.trNodes, a = e.paths, o = a._length;
                            i.length = 0;
                            for (var s = t.transforms.finalTransform, h = 0; h < o; h += 1) {
                                var l = a.shapes[h];
                                if (l && l.v) {
                                    for (n = l._length, r = 1; r < n; r += 1) 1 === r && i.push({
                                        t: "m",
                                        p: s.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                    }), i.push({
                                        t: "c",
                                        pts: s.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                                    });
                                    1 === n && i.push({
                                        t: "m",
                                        p: s.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                    }), l.c && n && (i.push({
                                        t: "c",
                                        pts: s.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                                    }), i.push({
                                        t: "z"
                                    }));
                                }
                            }
                            t.trNodes = i;
                        }
                    }, CVShapeElement.prototype.renderPath = function(t, e) {
                        if (!0 !== t.hd && t._shouldRender) for (var r = e.styledShapes.length, n = 0; n < r; n += 1) this.renderStyledShape(e.styledShapes[n], e.sh);
                    }, CVShapeElement.prototype.renderFill = function(t, e, r) {
                        var n = e.style;
                        (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), 
                        (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity);
                    }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
                        var n = e.style;
                        if (!n.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                            for (var i, a, o, s = this.globalData.canvasContext, h = e.s.v, l = e.e.v, p = 1 === t.t ? s.createLinearGradient(h[0], h[1], l[0], l[1]) : (i = Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)), 
                            a = Math.atan2(l[1] - h[1], l[0] - h[0]), o = i * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v), 
                            l = Math.cos(a + e.a.v) * o + h[0], o = Math.sin(a + e.a.v) * o + h[1], s.createRadialGradient(l, o, 0, h[0], h[1], i)), c = t.g.p, f = e.g.c, u = 1, m = 0; m < c; m += 1) e.g._hasOpacity && e.g._collapsable && (u = e.g.o[2 * m + 1]), 
                            p.addColorStop(f[4 * m] / 100, "rgba(" + f[4 * m + 1] + "," + f[4 * m + 2] + "," + f[4 * m + 3] + "," + u + ")");
                            n.grd = p;
                        }
                        n.coOp = e.o.v * r.opacity;
                    }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
                        var n = e.style, i = e.d;
                        i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), 
                        (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), 
                        (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (n.wi = e.w.v);
                    }, CVShapeElement.prototype.destroy = function() {
                        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, 
                        this.itemsData.length = 0;
                    }, extendPrototype([ BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement ], CVSolidElement), 
                    CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, 
                    CVSolidElement.prototype.renderInnerContent = function() {
                        var t = this.canvasContext;
                        t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh);
                    }, extendPrototype([ BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement ], CVTextElement), 
                    CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                        var t = this.textProperty.currentData;
                        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                        var e = !1;
                        t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", 
                        this.fill = e, e = !1, t.sc && (e = !0, this.values.stroke = this.buildColor(t.sc), 
                        this.values.sWidth = t.sw);
                        var r = this.globalData.fontManager.getFontByName(t.f), n = t.l, i = this.mHelper;
                        this.stroke = e, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily;
                        for (var a, o, s, h, l, p, c, f, u, m = t.finalText.length, d = this.data.singleShape, y = t.tr / 1e3 * t.finalSize, g = 0, v = 0, b = !0, _ = 0, P = 0; P < m; P += 1) {
                            for (a = (a = this.globalData.fontManager.getCharData(t.finalText[P], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, 
                            i.reset(), d && n[P].n && (g = -y, v += t.yOffset, v += b ? 1 : 0, b = !1), p = (h = a.shapes ? a.shapes[0].it : []).length, 
                            i.scale(t.finalSize / 100, t.finalSize / 100), d && this.applyTextPropertiesToMatrix(t, i, n[P].line, g, v), 
                            f = createSizedArray(p), l = 0; l < p; l += 1) {
                                for (s = h[l].ks.k.i.length, c = h[l].ks.k, u = [], o = 1; o < s; o += 1) 1 == o && u.push(i.applyToX(c.v[0][0], c.v[0][1], 0), i.applyToY(c.v[0][0], c.v[0][1], 0)), 
                                u.push(i.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), i.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), i.applyToX(c.i[o][0], c.i[o][1], 0), i.applyToY(c.i[o][0], c.i[o][1], 0), i.applyToX(c.v[o][0], c.v[o][1], 0), i.applyToY(c.v[o][0], c.v[o][1], 0));
                                u.push(i.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), i.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), i.applyToX(c.i[0][0], c.i[0][1], 0), i.applyToY(c.i[0][0], c.i[0][1], 0), i.applyToX(c.v[0][0], c.v[0][1], 0), i.applyToY(c.v[0][0], c.v[0][1], 0)), 
                                f[l] = u;
                            }
                            d && (g += n[P].l, g += y), this.textSpans[_] ? this.textSpans[_].elem = f : this.textSpans[_] = {
                                elem: f
                            }, _ += 1;
                        }
                    }, CVTextElement.prototype.renderInnerContent = function() {
                        var t, e, r, n, i = this.canvasContext;
                        this.finalTransform.mat.props, i.font = this.values.fValue, i.lineCap = "butt", 
                        i.lineJoin = "miter", i.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                        for (var a, o, s, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l, p = l.length, c = null, f = null, u = null, m = 0; m < p; m += 1) if (!l[m].n) {
                            if ((a = h[m]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(a.p), 
                            this.globalData.renderer.ctxOpacity(a.o)), this.fill) {
                                for (a && a.fc ? c !== a.fc && (c = a.fc, i.fillStyle = a.fc) : c !== this.values.fill && (c = this.values.fill, 
                                i.fillStyle = this.values.fill), e = (o = this.textSpans[m].elem).length, this.globalData.canvasContext.beginPath(), 
                                t = 0; t < e; t += 1) for (n = (s = o[t]).length, this.globalData.canvasContext.moveTo(s[0], s[1]), 
                                r = 2; r < n; r += 6) this.globalData.canvasContext.bezierCurveTo(s[r], s[r + 1], s[r + 2], s[r + 3], s[r + 4], s[r + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
                            }
                            if (this.stroke) {
                                for (a && a.sw ? u !== a.sw && (u = a.sw, i.lineWidth = a.sw) : u !== this.values.sWidth && (u = this.values.sWidth, 
                                i.lineWidth = this.values.sWidth), a && a.sc ? f !== a.sc && (f = a.sc, i.strokeStyle = a.sc) : f !== this.values.stroke && (f = this.values.stroke, 
                                i.strokeStyle = this.values.stroke), e = (o = this.textSpans[m].elem).length, this.globalData.canvasContext.beginPath(), 
                                t = 0; t < e; t += 1) for (n = (s = o[t]).length, this.globalData.canvasContext.moveTo(s[0], s[1]), 
                                r = 2; r < n; r += 6) this.globalData.canvasContext.bezierCurveTo(s[r], s[r + 1], s[r + 2], s[r + 3], s[r + 4], s[r + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
                            }
                            a && this.globalData.renderer.restore();
                        }
                    }, CVEffects.prototype.renderFrame = function() {};
                    var animationManager = function() {
                        var t = {}, e = [], r = 0, n = 0, i = 0, a = !0, o = !1;
                        function s(t) {
                            for (var r = 0, i = t.target; r < n; ) e[r].animation === i && (e.splice(r, 1), 
                            --r, --n, i.isPaused || p()), r += 1;
                        }
                        function h(t, r) {
                            if (!t) return null;
                            for (var i = 0; i < n; ) {
                                if (e[i].elem == t && null !== e[i].elem) return e[i].animation;
                                i += 1;
                            }
                            var a = new AnimationItem();
                            return c(a, t), a.setData(t, r), a;
                        }
                        function l() {
                            i += 1, m();
                        }
                        function p() {
                            --i;
                        }
                        function c(t, r) {
                            t.addEventListener("destroy", s), t.addEventListener("_active", l), t.addEventListener("_idle", p), 
                            e.push({
                                elem: r,
                                animation: t
                            }), n += 1;
                        }
                        function f(t) {
                            for (var s = t - r, h = 0; h < n; h += 1) e[h].animation.advanceTime(s);
                            r = t, i && !o ? window.requestAnimationFrame(f) : a = !0;
                        }
                        function u(t) {
                            r = t, window.requestAnimationFrame(f);
                        }
                        function m() {
                            !o && i && a && (window.requestAnimationFrame(u), a = !1);
                        }
                        return t.registerAnimation = h, t.loadAnimation = function(t) {
                            var e = new AnimationItem();
                            return c(e, null), e.setParams(t), e;
                        }, t.setSpeed = function(t, r) {
                            for (var i = 0; i < n; i += 1) e[i].animation.setSpeed(t, r);
                        }, t.setDirection = function(t, r) {
                            for (var i = 0; i < n; i += 1) e[i].animation.setDirection(t, r);
                        }, t.play = function(t) {
                            for (var r = 0; r < n; r += 1) e[r].animation.play(t);
                        }, t.pause = function(t) {
                            for (var r = 0; r < n; r += 1) e[r].animation.pause(t);
                        }, t.stop = function(t) {
                            for (var r = 0; r < n; r += 1) e[r].animation.stop(t);
                        }, t.togglePause = function(t) {
                            for (var r = 0; r < n; r += 1) e[r].animation.togglePause(t);
                        }, t.searchAnimations = function(t, e, r) {
                            for (var n, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = i.length, o = 0; o < a; o += 1) r && i[o].setAttribute("data-bm-type", r), 
                            h(i[o], t);
                            e && 0 === a && (r = r || "svg", (n = document.getElementsByTagName("body")[0]).innerHTML = "", 
                            (e = createTag("div")).style.width = "100%", e.style.height = "100%", e.setAttribute("data-bm-type", r), 
                            n.appendChild(e), h(e, t));
                        }, t.resize = function() {
                            for (var t = 0; t < n; t += 1) e[t].animation.resize();
                        }, t.goToAndStop = function(t, r, i) {
                            for (var a = 0; a < n; a += 1) e[a].animation.goToAndStop(t, r, i);
                        }, t.destroy = function(t) {
                            for (var r = n - 1; 0 <= r; --r) e[r].animation.destroy(t);
                        }, t.freeze = function() {
                            o = !0;
                        }, t.unfreeze = function() {
                            o = !1, m();
                        }, t.getRegisteredAnimations = function() {
                            for (var t = e.length, r = [], n = 0; n < t; n += 1) r.push(e[n].animation);
                            return r;
                        }, t;
                    }(), AnimationItem = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, 
                        this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, 
                        this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, 
                        this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, 
                        this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, 
                        this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], 
                        this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), 
                        this.imagePreloader = new ImagePreloader();
                    };
                    extendPrototype([ BaseEvent ], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                        t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                        var e = t.animType || t.renderer || "svg";
                        switch (e) {
                          case "canvas":
                            this.renderer = new CanvasRenderer(this, t.rendererSettings);
                            break;

                          case "svg":
                            this.renderer = new SVGRenderer(this, t.rendererSettings);
                            break;

                          default:
                            this.renderer = new HybridRenderer(this, t.rendererSettings);
                        }
                        this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), 
                        this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name || "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, 
                        this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && ("json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), 
                        t.path += "data.json"), -1 != t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), 
                        this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), 
                        assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                            this.trigger("data_failed");
                        }.bind(this)));
                    }, AnimationItem.prototype.setData = function(t, e) {
                        var r = {
                            wrapper: t,
                            animationData: e ? "object" === _typeof(e) ? e : JSON.parse(e) : null
                        };
                        e = t.attributes;
                        r.path = e.getNamedItem("data-animation-path") ? e.getNamedItem("data-animation-path").value : e.getNamedItem("data-bm-path") ? e.getNamedItem("data-bm-path").value : e.getNamedItem("bm-path") ? e.getNamedItem("bm-path").value : "", 
                        r.animType = e.getNamedItem("data-anim-type") ? e.getNamedItem("data-anim-type").value : e.getNamedItem("data-bm-type") ? e.getNamedItem("data-bm-type").value : e.getNamedItem("bm-type") ? e.getNamedItem("bm-type").value : e.getNamedItem("data-bm-renderer") ? e.getNamedItem("data-bm-renderer").value : e.getNamedItem("bm-renderer") ? e.getNamedItem("bm-renderer").value : "canvas", 
                        "" === (t = e.getNamedItem("data-anim-loop") ? e.getNamedItem("data-anim-loop").value : e.getNamedItem("data-bm-loop") ? e.getNamedItem("data-bm-loop").value : e.getNamedItem("bm-loop") ? e.getNamedItem("bm-loop").value : "") || (r.loop = "false" !== t && ("true" === t || parseInt(t))), 
                        t = e.getNamedItem("data-anim-autoplay") ? e.getNamedItem("data-anim-autoplay").value : e.getNamedItem("data-bm-autoplay") ? e.getNamedItem("data-bm-autoplay").value : !e.getNamedItem("bm-autoplay") || e.getNamedItem("bm-autoplay").value, 
                        r.autoplay = "false" !== t, r.name = e.getNamedItem("data-name") ? e.getNamedItem("data-name").value : e.getNamedItem("data-bm-name") ? e.getNamedItem("data-bm-name").value : e.getNamedItem("bm-name") ? e.getNamedItem("bm-name").value : "", 
                        "false" === (e.getNamedItem("data-anim-prerender") ? e.getNamedItem("data-anim-prerender").value : e.getNamedItem("data-bm-prerender") ? e.getNamedItem("data-bm-prerender").value : e.getNamedItem("bm-prerender") ? e.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), 
                        this.setParams(r);
                    }, AnimationItem.prototype.includeLayers = function(t) {
                        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                        for (var e, r = this.animationData.layers, n = r.length, i = t.layers, a = i.length, o = 0; o < a; o += 1) for (e = 0; e < n; ) {
                            if (r[e].id == i[o].id) {
                                r[e] = i[o];
                                break;
                            }
                            e += 1;
                        }
                        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), 
                        this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), 
                        t.assets) for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
                        this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), 
                        this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), 
                        this.loadNextSegment();
                    }, AnimationItem.prototype.loadNextSegment = function() {
                        var t = this.animationData.segments;
                        t && 0 !== t.length && this.autoloadSegments ? (t = t.shift(), this.timeCompleted = t.time * this.frameRate, 
                        t = this.path + this.fileName + "_" + this.segmentPos + ".json", this.segmentPos += 1, 
                        assetLoader.load(t, this.includeLayers.bind(this), function() {
                            this.trigger("data_failed");
                        }.bind(this))) : this.trigger("data_ready");
                    }, AnimationItem.prototype.loadSegments = function() {
                        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
                    }, AnimationItem.prototype.imagesLoaded = function() {
                        this.trigger("loaded_images"), this.checkLoaded();
                    }, AnimationItem.prototype.preloadImages = function() {
                        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), 
                        this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
                    }, AnimationItem.prototype.configAnimation = function(t) {
                        this.renderer && (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), 
                        this.renderer.configAnimation(t), t.assets || (t.assets = []), this.renderer.searchExtraCompositions(t.assets), 
                        this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, 
                        this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, 
                        this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), 
                        this.waitForFontsLoaded());
                    }, AnimationItem.prototype.waitForFontsLoaded = function() {
                        this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
                    }, AnimationItem.prototype.checkLoaded = function() {
                        this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, 
                        dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), 
                        expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), 
                        setTimeout(function() {
                            this.trigger("DOMLoaded");
                        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play());
                    }, AnimationItem.prototype.resize = function() {
                        this.renderer.updateContainerSize();
                    }, AnimationItem.prototype.setSubframe = function(t) {
                        this.subframeEnabled = !!t;
                    }, AnimationItem.prototype.gotoFrame = function() {
                        this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, 
                        this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), 
                        this.trigger("enterFrame"), this.renderFrame();
                    }, AnimationItem.prototype.renderFrame = function() {
                        !1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                    }, AnimationItem.prototype.play = function(t) {
                        t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, 
                        this.trigger("_active")));
                    }, AnimationItem.prototype.pause = function(t) {
                        t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, 
                        this.trigger("_idle"));
                    }, AnimationItem.prototype.togglePause = function(t) {
                        t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause());
                    }, AnimationItem.prototype.stop = function(t) {
                        t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, 
                        this.setCurrentRawFrameValue(0));
                    }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
                        r && this.name != r || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), 
                        this.pause());
                    }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
                        this.goToAndStop(t, e, r), this.play();
                    }, AnimationItem.prototype.advanceTime = function(t) {
                        var e;
                        !0 !== this.isPaused && !1 !== this.isLoaded && (e = !1, (t = this.currentRawFrame + t * this.frameModifier) >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, 
                        this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), 
                        this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (e = !0, 
                        t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (e = !0, 
                        t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), 
                        this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), 
                        e && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete")));
                    }, AnimationItem.prototype.adjustSegment = function(t, e) {
                        this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), 
                        this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), 
                        this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), 
                        this.trigger("segmentStart");
                    }, AnimationItem.prototype.setSegment = function(t, e) {
                        var r = -1;
                        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), 
                        this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== r && this.goToAndStop(r, !0);
                    }, AnimationItem.prototype.playSegments = function(t, e) {
                        if (e && (this.segments.length = 0), "object" === _typeof(t[0])) for (var r = t.length, n = 0; n < r; n += 1) this.segments.push(t[n]); else this.segments.push(t);
                        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
                    }, AnimationItem.prototype.resetSegments = function(t) {
                        this.segments.length = 0, this.segments.push([ this.animationData.ip, this.animationData.op ]), 
                        t && this.checkSegments(0);
                    }, AnimationItem.prototype.checkSegments = function(t) {
                        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), 
                        !0);
                    }, AnimationItem.prototype.destroy = function(t) {
                        t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), 
                        this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, 
                        this.renderer = null);
                    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                        this.currentRawFrame = t, this.gotoFrame();
                    }, AnimationItem.prototype.setSpeed = function(t) {
                        this.playSpeed = t, this.updaFrameModifier();
                    }, AnimationItem.prototype.setDirection = function(t) {
                        this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
                    }, AnimationItem.prototype.updaFrameModifier = function() {
                        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
                    }, AnimationItem.prototype.getPath = function() {
                        return this.path;
                    }, AnimationItem.prototype.getAssetsPath = function(t) {
                        var e, r = "";
                        return t.e ? r = t.p : this.assetsPath ? (-1 !== (e = t.p).indexOf("images/") && (e = e.split("/")[1]), 
                        r = this.assetsPath + e) : (r = this.path, r += t.u || "", r += t.p), r;
                    }, AnimationItem.prototype.getAssetData = function(t) {
                        for (var e = 0, r = this.assets.length; e < r; ) {
                            if (t == this.assets[e].id) return this.assets[e];
                            e += 1;
                        }
                    }, AnimationItem.prototype.hide = function() {
                        this.renderer.hide();
                    }, AnimationItem.prototype.show = function() {
                        this.renderer.show();
                    }, AnimationItem.prototype.getDuration = function(t) {
                        return t ? this.totalFrames : this.totalFrames / this.frameRate;
                    }, AnimationItem.prototype.trigger = function(t) {
                        if (this._cbs && this._cbs[t]) switch (t) {
                          case "enterFrame":
                            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;

                          case "loopComplete":
                            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                            break;

                          case "complete":
                            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                            break;

                          case "segmentStart":
                            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                            break;

                          case "destroy":
                            this.triggerEvent(t, new BMDestroyEvent(t, this));
                            break;

                          default:
                            this.triggerEvent(t);
                        }
                        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), 
                        "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), 
                        "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), 
                        "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), 
                        "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
                    };
                    var Expressions = (qL = {}, qL.initExpressions = function(t) {
                        var e = 0, r = [];
                        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), 
                        t.renderer.globalData.pushExpression = function() {
                            e += 1;
                        }, t.renderer.globalData.popExpression = function() {
                            0 == --e && function() {
                                for (var t = r.length, e = 0; e < t; e += 1) r[e].release();
                                r.length = 0;
                            }();
                        }, t.renderer.globalData.registerExpressionProperty = function(t) {
                            -1 === r.indexOf(t) && r.push(t);
                        };
                    }, qL), qL, expressionsPlugin = Expressions, ExpressionManager = function() {
                        var ob = {}, Math = BMMath, window = null, document = null;
                        function $bm_isInstanceOfArray(t) {
                            return t.constructor === Array || t.constructor === Float32Array;
                        }
                        function isNumerable(t, e) {
                            return "number" === t || "boolean" === t || "string" === t || e instanceof Number;
                        }
                        function $bm_neg(t) {
                            var e = _typeof(t);
                            if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                            if ($bm_isInstanceOfArray(t)) {
                                for (var r = t.length, n = [], i = 0; i < r; i += 1) n[i] = -t[i];
                                return n;
                            }
                            return t.propType && t.v;
                        }
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
                        function sum(t, e) {
                            var r = _typeof(t), n = _typeof(e);
                            if ("string" === r || "string" === n) return t + e;
                            if (isNumerable(r, t) && isNumerable(n, e)) return t + e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] = t[0] + e, 
                            t;
                            if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], 
                            e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var i = 0, a = t.length, o = e.length, s = []; i < a || i < o; ) ("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? s[i] = t[i] + e[i] : s[i] = void 0 === e[i] ? t[i] : t[i] || e[i], 
                                i += 1;
                                return s;
                            }
                            return 0;
                        }
                        var add = sum;
                        function sub(t, e) {
                            var r = _typeof(t), n = _typeof(e);
                            if (isNumerable(r, t) && isNumerable(n, e)) return (t = "string" === r ? parseInt(t) : t) - ("string" === n ? parseInt(e) : e);
                            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] = t[0] - e, 
                            t;
                            if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], 
                            e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var i = 0, a = t.length, o = e.length, s = []; i < a || i < o; ) ("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? s[i] = t[i] - e[i] : s[i] = void 0 === e[i] ? t[i] : t[i] || e[i], 
                                i += 1;
                                return s;
                            }
                            return 0;
                        }
                        function mul(t, e) {
                            var r, n, i, a = _typeof(t), o = _typeof(e);
                            if (isNumerable(a, t) && isNumerable(o, e)) return t * e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(o, e)) {
                                for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] * e;
                                return r;
                            }
                            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                                for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t * e[n];
                                return r;
                            }
                            return 0;
                        }
                        function div(t, e) {
                            var r, n, i, a = _typeof(t), o = _typeof(e);
                            if (isNumerable(a, t) && isNumerable(o, e)) return t / e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(o, e)) {
                                for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] / e;
                                return r;
                            }
                            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                                for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t / e[n];
                                return r;
                            }
                            return 0;
                        }
                        function mod(t, e) {
                            return (t = "string" == typeof t ? parseInt(t) : t) % ("string" == typeof e ? parseInt(e) : e);
                        }
                        var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
                        function clamp(t, e, r) {
                            var n;
                            return r < e && (n = r, r = e, e = n), Math.min(Math.max(t, e), r);
                        }
                        function radiansToDegrees(t) {
                            return t / degToRads;
                        }
                        var radians_to_degrees = radiansToDegrees;
                        function degreesToRadians(t) {
                            return t * degToRads;
                        }
                        var degrees_to_radians = radiansToDegrees, helperLengthArray = [ 0, 0, 0, 0, 0, 0 ];
                        function length(t, e) {
                            if ("number" == typeof t || t instanceof Number) return Math.abs(t - (e = e || 0));
                            for (var r = Math.min(t.length, (e = e || helperLengthArray).length), n = 0, i = 0; i < r; i += 1) n += Math.pow(e[i] - t[i], 2);
                            return Math.sqrt(n);
                        }
                        function normalize(t) {
                            return div(t, length(t));
                        }
                        function rgbToHsl(t) {
                            var e = t[0], r = t[1], n = t[2];
                            Math.max(e, r, n), Math.min(e, r, n);
                            return t[3], 1;
                        }
                        function hue2rgb(t, e, r) {
                            return r < 0 && (r += 1), 1 < r && --r, r < .16666666666666666 ? t + 6 * (e - t) * r : r < .5 ? e : r < .6666666666666666 ? t + (e - t) * (.6666666666666666 - r) * 6 : t;
                        }
                        function hslToRgb(t) {
                            var e = t[0], r = t[1], n = t[2];
                            return 0 === r || (hue2rgb(r = 2 * n - (n = n < .5 ? n * (1 + r) : n + r - n * r), n, e + .3333333333333333), 
                            hue2rgb(r, n, e), hue2rgb(r, n, e - .3333333333333333)), t[3], 1;
                        }
                        function linear(t, e, r, n, i) {
                            var a;
                            if (void 0 !== n && void 0 !== i || (n = e, i = r, e = 0, r = 1), r < e && (a = r, 
                            r = e, e = a), t <= e) return n;
                            if (r <= t) return i;
                            var o = r === e ? 0 : (t - e) / (r - e);
                            if (!n.length) return n + (i - n) * o;
                            for (var s = n.length, h = createTypedArray("float32", s), l = 0; l < s; l += 1) h[l] = n[l] + (i[l] - n[l]) * o;
                            return h;
                        }
                        function random(t, e) {
                            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                var r = e.length;
                                t = t || createTypedArray("float32", r);
                                for (var n = createTypedArray("float32", r), i = BMMath.random(), a = 0; a < r; a += 1) n[a] = t[a] + i * (e[a] - t[a]);
                                return n;
                            }
                            return (t = void 0 === t ? 0 : t) + BMMath.random() * (e - t);
                        }
                        function createPath(t, e, r, n) {
                            var i = t.length, a = shape_pool.newElement();
                            a.setPathData(!!n, i);
                            for (var o, s, h = [ 0, 0 ], l = 0; l < i; l += 1) o = e && e[l] ? e[l] : h, s = r && r[l] ? r[l] : h, 
                            a.setTripleAt(t[l][0], t[l][1], s[0] + t[l][0], s[1] + t[l][1], o[0] + t[l][0], o[1] + t[l][1], l, !0);
                            return a;
                        }
                        function initiateExpression(elem, data, property) {
                            var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v;
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw || 0, height = elem.data.sh || 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [], scoped_bm_rt;
                            if (data.xf) for (var i, len = data.xf.length, i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())");
                            var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = function(t, e) {
                                for (var r = this.pv.length || 1, n = createTypedArray("float32", r), i = Math.floor(5 * time), a = 0, o = 0; a < i; ) {
                                    for (o = 0; o < r; o += 1) n[o] += -e + 2 * e * BMMath.random();
                                    a += 1;
                                }
                                var s = 5 * time, h = s - Math.floor(s), l = createTypedArray("float32", r);
                                if (1 < r) {
                                    for (o = 0; o < r; o += 1) l[o] = this.pv[o] + n[o] + (-e + 2 * e * BMMath.random()) * h;
                                    return l;
                                }
                                return this.pv + n[0] + (-e + 2 * e * BMMath.random()) * h;
                            }.bind(this);
                            function loopInDuration(t, e) {
                                return loopIn(t, e, !0);
                            }
                            function loopOutDuration(t, e) {
                                return loopOut(t, e, !0);
                            }
                            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), 
                            thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), 
                            thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), 
                            this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
                            function lookAt(t, e) {
                                return t = [ e[0] - t[0], e[1] - t[1], e[2] - t[2] ], Math.atan2(t[0], Math.sqrt(t[1] * t[1] + t[2] * t[2])), 
                                Math.atan2(t[1], t[2]), 1;
                            }
                            function easeOut(t, e, r, n, i) {
                                return applyEase(easeOutBez, t, e, r, n, i);
                            }
                            function easeIn(t, e, r, n, i) {
                                return applyEase(easeInBez, t, e, r, n, i);
                            }
                            function ease(t, e, r, n, i) {
                                return applyEase(easeInOutBez, t, e, r, n, i);
                            }
                            function applyEase(t, e, r, n, i, a) {
                                void 0 === i ? (i = r, a = n) : e = (e - r) / (n - r);
                                var o = t(e = 1 < e ? 1 : e < 0 ? 0 : e);
                                if ($bm_isInstanceOfArray(i)) {
                                    for (var s = i.length, h = createTypedArray("float32", s), l = 0; l < s; l += 1) h[l] = (a[l] - i[l]) * o + i[l];
                                    return h;
                                }
                                return (a - i) * o + i;
                            }
                            function nearestKey(t) {
                                var e, r, n, i = data.k.length;
                                if (data.k.length && "number" != typeof data.k[0]) if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, 
                                n = data.k[0].t; else {
                                    for (e = 0; e < i - 1; e += 1) {
                                        if (t === data.k[e].t) {
                                            r = e + 1, n = data.k[e].t;
                                            break;
                                        }
                                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                                            n = t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, data.k[e + 1].t) : (r = e + 1, 
                                            data.k[e].t);
                                            break;
                                        }
                                    }
                                    -1 === r && (r = e + 1, n = data.k[e].t);
                                } else n = r = 0;
                                var a = {};
                                return a.index = r, a.time = n / elem.comp.globalData.frameRate, a;
                            }
                            function key(t) {
                                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                for (var e = {
                                    time: data.k[--t].t / elem.comp.globalData.frameRate,
                                    value: []
                                }, r = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e, n = r.length, i = 0; i < n; i += 1) e[i] = r[i], 
                                e.value[i] = r[i];
                                return e;
                            }
                            function framesToTime(t, e) {
                                return t / (e || elem.comp.globalData.frameRate);
                            }
                            function timeToFrames(t, e) {
                                return (t = t || 0 === t ? t : time) * (e || elem.comp.globalData.frameRate);
                            }
                            function seedRandom(t) {
                                BMMath.seedrandom(randSeed + t);
                            }
                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime();
                            }
                            function substring(t, e) {
                                return "string" == typeof value && (void 0 === e ? value.substring(t) : value.substring(t, e));
                            }
                            function substr(t, e) {
                                return "string" == typeof value && (void 0 === e ? value.substr(t) : value.substr(t, e));
                            }
                            var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
                            function executeExpression(t) {
                                return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, 
                                textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, 
                                thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), 
                                fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), 
                                toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, 
                                fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), 
                                ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), 
                                effect = effect || thisLayer(4), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), 
                                time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), 
                                expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = "shape" === scoped_bm_rt.propType ? scoped_bm_rt.v : scoped_bm_rt);
                            }
                            return executeExpression;
                        }
                        return ob.initiateExpression = initiateExpression, ob;
                    }(), expressionHelpers = {
                        searchExpressions: function(t, e, r) {
                            e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, 
                            r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
                        },
                        getSpeedAtTime: function(t) {
                            var e = this.getValueAtTime(t), r = this.getValueAtTime(t + -.01), n = 0;
                            if (e.length) {
                                for (var i = 0; i < e.length; i += 1) n += Math.pow(r[i] - e[i], 2);
                                n = 100 * Math.sqrt(n);
                            } else n = 0;
                            return n;
                        },
                        getVelocityAtTime: function(t) {
                            if (void 0 !== this.vel) return this.vel;
                            var e, r, n = this.getValueAtTime(t), i = this.getValueAtTime(t + -.001);
                            if (n.length) for (e = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) e[r] = (i[r] - n[r]) / -.001; else e = (i - n) / -.001;
                            return e;
                        },
                        getValueAtTime: function(t) {
                            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, 
                            this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), 
                            this._cachingAtTime.value;
                        },
                        getStaticValueAtTime: function() {
                            return this.pv;
                        },
                        setGroupProperty: function(t) {
                            this.propertyGroup = t;
                        }
                    };
                    !function() {
                        function t(t, e, r) {
                            if (!this.k || !this.keyframes) return this.pv;
                            t = t ? t.toLowerCase() : "";
                            var n, i, a, o, s, h = this.comp.renderedFrame, l = this.keyframes, p = l[l.length - 1].t;
                            if (h <= p) return this.pv;
                            if (r ? i = p - (n = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), 
                            n = p - (i = l[l.length - 1 - e].t)), "pingpong" === t) {
                                if (Math.floor((h - i) / n) % 2 != 0) return this.getValueAtTime((n - (h - i) % n + i) / this.comp.globalData.frameRate, 0);
                            } else {
                                if ("offset" === t) {
                                    var c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), u = this.getValueAtTime(((h - i) % n + i) / this.comp.globalData.frameRate, 0), m = Math.floor((h - i) / n);
                                    if (this.pv.length) {
                                        for (o = (s = new Array(c.length)).length, a = 0; a < o; a += 1) s[a] = (f[a] - c[a]) * m + u[a];
                                        return s;
                                    }
                                    return (f - c) * m + u;
                                }
                                if ("continue" === t) {
                                    var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                    if (this.pv.length) {
                                        for (o = (s = new Array(d.length)).length, a = 0; a < o; a += 1) s[a] = d[a] + (d[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                        return s;
                                    }
                                    return d + (h - p) / .001 * (d - y);
                                }
                            }
                            return this.getValueAtTime(((h - i) % n + i) / this.comp.globalData.frameRate, 0);
                        }
                        function e(t, e, r) {
                            if (!this.k) return this.pv;
                            t = t ? t.toLowerCase() : "";
                            var n, i, a, o, s, h = this.comp.renderedFrame, l = this.keyframes, p = l[0].t;
                            if (p <= h) return this.pv;
                            if (r ? i = p + (n = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : n = (i = l[e = !e || e > l.length - 1 ? l.length - 1 : e].t) - p, 
                            "pingpong" === t) {
                                if (Math.floor((p - h) / n) % 2 == 0) return this.getValueAtTime(((p - h) % n + p) / this.comp.globalData.frameRate, 0);
                            } else {
                                if ("offset" === t) {
                                    var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(i / this.comp.globalData.frameRate, 0), u = this.getValueAtTime((n - (p - h) % n + p) / this.comp.globalData.frameRate, 0), m = Math.floor((p - h) / n) + 1;
                                    if (this.pv.length) {
                                        for (o = (s = new Array(c.length)).length, a = 0; a < o; a += 1) s[a] = u[a] - (f[a] - c[a]) * m;
                                        return s;
                                    }
                                    return u - (f - c) * m;
                                }
                                if ("continue" === t) {
                                    var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                    if (this.pv.length) {
                                        for (o = (s = new Array(d.length)).length, a = 0; a < o; a += 1) s[a] = d[a] + (d[a] - y[a]) * (p - h) / .001;
                                        return s;
                                    }
                                    return d + (d - y) * (p - h) / .001;
                                }
                            }
                            return this.getValueAtTime((n - (p - h) % n + p) / this.comp.globalData.frameRate, 0);
                        }
                        function r(t, e) {
                            if (!this.k) return this.pv;
                            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                            for (var r, n = this.comp.renderedFrame / this.comp.globalData.frameRate, i = n - t, a = 1 < e ? (n + t - i) / (e - 1) : 1, o = 0, s = 0, h = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e; ) {
                                if (r = this.getValueAtTime(i + o * a), this.pv.length) for (s = 0; s < this.pv.length; s += 1) h[s] += r[s]; else h += r;
                                o += 1;
                            }
                            if (this.pv.length) for (s = 0; s < this.pv.length; s += 1) h[s] /= e; else h /= e;
                            return h;
                        }
                        var n = TransformPropertyFactory.getTransformProperty;
                        TransformPropertyFactory.getTransformProperty = function(t, e, r) {
                            return (r = n(t, e, r)).dynamicProperties.length ? r.getValueAtTime = function(t) {
                                console.warn("Transform at time not supported");
                            }.bind(r) : r.getValueAtTime = function(t) {}.bind(r), r.setGroupProperty = expressionHelpers.setGroupProperty, 
                            r;
                        };
                        var i = PropertyFactory.getProp;
                        PropertyFactory.getProp = function(n, a, o, s, h) {
                            var l = i(n, a, o, s, h);
                            return l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), 
                            l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, 
                            l.smooth = r, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), 
                            l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === a.a ? a.k.length : 0, 
                            l.propertyIndex = a.ix, s = 0, 0 !== o && (s = createTypedArray("float32", (1 === a.a ? a.k[0].s : a.k).length)), 
                            l._cachingAtTime = {
                                lastFrame: initialDefaultFrame,
                                lastIndex: 0,
                                value: s
                            }, expressionHelpers.searchExpressions(n, a, l), l.k && h.addDynamicProperty(l), 
                            l;
                        };
                        var a = ShapePropertyFactory.getConstructorFunction(), o = ShapePropertyFactory.getKeyframedConstructorFunction();
                        function s() {}
                        s.prototype = {
                            vertices: function(t, e) {
                                this.k && this.getValue();
                                for (var r = this.v, n = (r = void 0 !== e ? this.getValueAtTime(e, 0) : r)._length, i = r[t], a = r.v, o = createSizedArray(n), s = 0; s < n; s += 1) o[s] = "i" === t || "o" === t ? [ i[s][0] - a[s][0], i[s][1] - a[s][1] ] : [ i[s][0], i[s][1] ];
                                return o;
                            },
                            points: function(t) {
                                return this.vertices("v", t);
                            },
                            inTangents: function(t) {
                                return this.vertices("i", t);
                            },
                            outTangents: function(t) {
                                return this.vertices("o", t);
                            },
                            isClosed: function() {
                                return this.v.c;
                            },
                            pointOnPath: function(t, e) {
                                var r = this.v;
                                void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                                for (var n = (e = this._segmentsLength).lengths, i = e.totalLength * t, a = 0, o = n.length, s = 0; a < o; ) {
                                    if (s + n[a].addedLength > i) {
                                        var h = r.c && a === o - 1 ? 0 : a + 1, l = (i - s) / n[a].addedLength, p = bez.getPointInSegment(r.v[a], r.v[h], r.o[a], r.i[h], l, n[a]);
                                        break;
                                    }
                                    s += n[a].addedLength, a += 1;
                                }
                                return p || (r.c ? [ r.v[0][0], r.v[0][1] ] : [ r.v[r._length - 1][0], r.v[r._length - 1][1] ]);
                            },
                            vectorOnPath: function(t, e, r) {
                                t = 1 == t ? this.v.c ? 0 : .999 : t;
                                var n = this.pointOnPath(t, e);
                                e = (t = this.pointOnPath(t + .001, e))[0] - n[0], t = t[1] - n[1];
                                return 0 === (n = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2))) ? [ 0, 0 ] : "tangent" === r ? [ e / n, t / n ] : [ -t / n, e / n ];
                            },
                            tangentOnPath: function(t, e) {
                                return this.vectorOnPath(t, e, "tangent");
                            },
                            normalOnPath: function(t, e) {
                                return this.vectorOnPath(t, e, "normal");
                            },
                            setGroupProperty: expressionHelpers.setGroupProperty,
                            getValueAtTime: expressionHelpers.getStaticValueAtTime
                        }, extendPrototype([ s ], a), extendPrototype([ s ], o), o.prototype.getValueAtTime = function(t) {
                            return this._cachingAtTime || (this._cachingAtTime = {
                                shapeValue: shape_pool.clone(this.pv),
                                lastIndex: 0,
                                lastTime: initialDefaultFrame
                            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, 
                            this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), 
                            this._cachingAtTime.shapeValue;
                        }, o.prototype.initiateExpression = ExpressionManager.initiateExpression;
                        var h = ShapePropertyFactory.getShapeProp;
                        ShapePropertyFactory.getShapeProp = function(t, e, r, n, i) {
                            return (i = h(t, e, r, n, i)).propertyIndex = e.ix, i.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, i) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, i), 
                            i.k && t.addDynamicProperty(i), i;
                        };
                    }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                        var r = this.calculateExpression(e);
                        return t.t === r ? t : (e = {}, this.copyData(e, t), e.t = r.toString(), e.__complete = !1, 
                        e);
                    }, TextProperty.prototype.searchProperty = function() {
                        var t = this.searchKeyframes(), e = this.searchExpressions();
                        return this.kf = t || e, this.kf;
                    }, TextProperty.prototype.searchExpressions = function() {
                        if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), 
                        this.addEffect(this.getExpressionValue.bind(this)), !0;
                    };
                    var ShapeExpressionInterface = function(t, e, r) {
                        var n;
                        function i(t) {
                            if ("number" == typeof t) return n[t - 1];
                            for (var e = 0, r = n.length; e < r; ) {
                                if (n[e]._name === t) return n[e];
                                e += 1;
                            }
                        }
                        return i.propertyGroup = r, n = function t(e, r, n) {
                            for (var i = [], a = e ? e.length : 0, o = 0; o < a; o += 1) "gr" == e[o].ty ? i.push(function(e, r, n) {
                                function i(t) {
                                    switch (t) {
                                      case "ADBE Vectors Group":
                                      case "Contents":
                                      case 2:
                                        return i.content;

                                      default:
                                        return i.transform;
                                    }
                                }
                                var a = function(e, r, n) {
                                    function i(t) {
                                        for (var e = 0, r = a.length; e < r; ) {
                                            if (a[e]._name === t || a[e].mn === t || a[e].propertyIndex === t || a[e].ix === t || a[e].ind === t) return a[e];
                                            e += 1;
                                        }
                                        if ("number" == typeof t) return a[t - 1];
                                    }
                                    var a = t(e.it, r.it, i.propertyGroup = function(t) {
                                        return 1 === t ? i : n(t - 1);
                                    });
                                    return i.numProperties = a.length, i.propertyIndex = e.cix, i._name = e.nm, i;
                                }(e, r, i.propertyGroup = function(t) {
                                    return 1 === t ? i : n(t - 1);
                                });
                                return r = function(t, e, r) {
                                    function n(t) {
                                        return 1 == t ? i : r(--t);
                                    }
                                    function i(e) {
                                        return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : void 0;
                                    }
                                    return e.transform.mProps.o.setGroupProperty(n), e.transform.mProps.p.setGroupProperty(n), 
                                    e.transform.mProps.a.setGroupProperty(n), e.transform.mProps.s.setGroupProperty(n), 
                                    e.transform.mProps.r.setGroupProperty(n), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(n), 
                                    e.transform.mProps.sa.setGroupProperty(n)), e.transform.op.setGroupProperty(n), 
                                    Object.defineProperties(i, {
                                        opacity: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                                        },
                                        position: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                                        },
                                        anchorPoint: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                                        },
                                        scale: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                                        },
                                        rotation: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                                        },
                                        skew: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                        },
                                        skewAxis: {
                                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                        },
                                        _name: {
                                            value: t.nm
                                        }
                                    }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r, i;
                                }(e.it[e.it.length - 1], r.it[r.it.length - 1], i.propertyGroup), i.content = a, 
                                i.transform = r, Object.defineProperty(i, "_name", {
                                    get: function() {
                                        return e.nm;
                                    }
                                }), i.numProperties = e.np, i.propertyIndex = e.ix, i.nm = e.nm, i.mn = e.mn, i;
                            }(e[o], r[o], n)) : "fl" == e[o].ty ? i.push(function(t, e, r) {
                                function n(t) {
                                    return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : void 0;
                                }
                                return Object.defineProperties(n, {
                                    color: {
                                        get: ExpressionPropertyInterface(e.c)
                                    },
                                    opacity: {
                                        get: ExpressionPropertyInterface(e.o)
                                    },
                                    _name: {
                                        value: t.nm
                                    },
                                    mn: {
                                        value: t.mn
                                    }
                                }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), n;
                            }(e[o], r[o], n)) : "st" == e[o].ty ? i.push(function(t, e, r) {
                                function n(t) {
                                    return 1 === t ? ob : r(t - 1);
                                }
                                function i(t) {
                                    return 1 === t ? s : n(t - 1);
                                }
                                var a, o = t.d ? t.d.length : 0, s = {};
                                for (a = 0; a < o; a += 1) (function(r) {
                                    Object.defineProperty(s, t.d[r].nm, {
                                        get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                                    });
                                })(a), e.d.dataProps[a].p.setGroupProperty(i);
                                function h(t) {
                                    return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : void 0;
                                }
                                return Object.defineProperties(h, {
                                    color: {
                                        get: ExpressionPropertyInterface(e.c)
                                    },
                                    opacity: {
                                        get: ExpressionPropertyInterface(e.o)
                                    },
                                    strokeWidth: {
                                        get: ExpressionPropertyInterface(e.w)
                                    },
                                    dash: {
                                        get: function() {
                                            return s;
                                        }
                                    },
                                    _name: {
                                        value: t.nm
                                    },
                                    mn: {
                                        value: t.mn
                                    }
                                }), e.c.setGroupProperty(n), e.o.setGroupProperty(n), e.w.setGroupProperty(n), h;
                            }(e[o], r[o], n)) : "tm" == e[o].ty ? i.push(function(t, e, r) {
                                function n(t) {
                                    return 1 == t ? i : r(--t);
                                }
                                function i(e) {
                                    return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : void 0;
                                }
                                return i.propertyIndex = t.ix, e.s.setGroupProperty(n), e.e.setGroupProperty(n), 
                                e.o.setGroupProperty(n), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
                                    start: {
                                        get: ExpressionPropertyInterface(e.s)
                                    },
                                    end: {
                                        get: ExpressionPropertyInterface(e.e)
                                    },
                                    offset: {
                                        get: ExpressionPropertyInterface(e.o)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), i.mn = t.mn, i;
                            }(e[o], r[o], n)) : "tr" == e[o].ty || ("el" == e[o].ty ? i.push(function(t, e, r) {
                                function n(t) {
                                    return 1 == t ? i : r(--t);
                                }
                                function i(e) {
                                    return t.p.ix === e ? i.position : t.s.ix === e ? i.size : void 0;
                                }
                                return i.propertyIndex = t.ix, (e = "tm" === e.sh.ty ? e.sh.prop : e.sh).s.setGroupProperty(n), 
                                e.p.setGroupProperty(n), Object.defineProperties(i, {
                                    size: {
                                        get: ExpressionPropertyInterface(e.s)
                                    },
                                    position: {
                                        get: ExpressionPropertyInterface(e.p)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), i.mn = t.mn, i;
                            }(e[o], r[o], n)) : "sr" == e[o].ty ? i.push(function(t, e, r) {
                                function n(t) {
                                    return 1 == t ? i : r(--t);
                                }
                                function i(e) {
                                    return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : void 0 : i.innerRadius;
                                }
                                return e = "tm" === e.sh.ty ? e.sh.prop : e.sh, i.propertyIndex = t.ix, e.or.setGroupProperty(n), 
                                e.os.setGroupProperty(n), e.pt.setGroupProperty(n), e.p.setGroupProperty(n), e.r.setGroupProperty(n), 
                                t.ir && (e.ir.setGroupProperty(n), e.is.setGroupProperty(n)), Object.defineProperties(i, {
                                    position: {
                                        get: ExpressionPropertyInterface(e.p)
                                    },
                                    rotation: {
                                        get: ExpressionPropertyInterface(e.r)
                                    },
                                    points: {
                                        get: ExpressionPropertyInterface(e.pt)
                                    },
                                    outerRadius: {
                                        get: ExpressionPropertyInterface(e.or)
                                    },
                                    outerRoundness: {
                                        get: ExpressionPropertyInterface(e.os)
                                    },
                                    innerRadius: {
                                        get: ExpressionPropertyInterface(e.ir)
                                    },
                                    innerRoundness: {
                                        get: ExpressionPropertyInterface(e.is)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), i.mn = t.mn, i;
                            }(e[o], r[o], n)) : "sh" == e[o].ty ? i.push(function(t, e, r) {
                                var n = e.sh;
                                function i(t) {
                                    if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return i.path;
                                }
                                return n.setGroupProperty(function(t) {
                                    return 1 == t ? i : r(--t);
                                }), Object.defineProperties(i, {
                                    path: {
                                        get: function() {
                                            return n.k && n.getValue(), n;
                                        }
                                    },
                                    shape: {
                                        get: function() {
                                            return n.k && n.getValue(), n;
                                        }
                                    },
                                    _name: {
                                        value: t.nm
                                    },
                                    ix: {
                                        value: t.ix
                                    },
                                    propertyIndex: {
                                        value: t.ix
                                    },
                                    mn: {
                                        value: t.mn
                                    }
                                }), i;
                            }(e[o], r[o], n)) : "rc" == e[o].ty ? i.push(function(t, e, r) {
                                function n(t) {
                                    return 1 == t ? i : r(--t);
                                }
                                function i(e) {
                                    return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : void 0;
                                }
                                return e = "tm" === e.sh.ty ? e.sh.prop : e.sh, i.propertyIndex = t.ix, e.p.setGroupProperty(n), 
                                e.s.setGroupProperty(n), e.r.setGroupProperty(n), Object.defineProperties(i, {
                                    position: {
                                        get: ExpressionPropertyInterface(e.p)
                                    },
                                    roundness: {
                                        get: ExpressionPropertyInterface(e.r)
                                    },
                                    size: {
                                        get: ExpressionPropertyInterface(e.s)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), i.mn = t.mn, i;
                            }(e[o], r[o], n)) : "rd" == e[o].ty ? i.push(function(t, e, r) {
                                function n(e) {
                                    if (t.r.ix === e || "Round Corners 1" === e) return n.radius;
                                }
                                return n.propertyIndex = t.ix, e.rd.setGroupProperty(function(t) {
                                    return 1 == t ? n : r(--t);
                                }), Object.defineProperties(n, {
                                    radius: {
                                        get: ExpressionPropertyInterface(e.rd)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), n.mn = t.mn, n;
                            }(e[o], r[o], n)) : "rp" == e[o].ty && i.push(function(t, e, r) {
                                function n(t) {
                                    return 1 == t ? i : r(--t);
                                }
                                function i(e) {
                                    return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : void 0;
                                }
                                return i.propertyIndex = t.ix, e.c.setGroupProperty(n), e.o.setGroupProperty(n), 
                                Object.defineProperties(i, {
                                    copies: {
                                        get: ExpressionPropertyInterface(e.c)
                                    },
                                    offset: {
                                        get: ExpressionPropertyInterface(e.o)
                                    },
                                    _name: {
                                        value: t.nm
                                    }
                                }), i.mn = t.mn, i;
                            }(e[o], r[o], n)));
                            return i;
                        }(t, e, i), i.numProperties = n.length, i;
                    }, TextExpressionInterface = function(t) {
                        var e;
                        function r() {}
                        return Object.defineProperty(r, "sourceText", {
                            get: function() {
                                t.textProperty.getValue();
                                var r = t.textProperty.currentData.t;
                                return void 0 !== r && (t.textProperty.currentData.t = void 0, (e = new String(r)).value = r || new String(r)), 
                                e;
                            }
                        }), r;
                    }, LayerExpressionInterface = function() {
                        function t(t, e) {
                            var r = new Matrix();
                            if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                                for (var n = this._elem.hierarchy.length, i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                                return r.applyToPointArray(t[0], t[1], t[2] || 0);
                            }
                            return r.applyToPointArray(t[0], t[1], t[2] || 0);
                        }
                        function e(t, e) {
                            var r = new Matrix();
                            if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                                for (var n = this._elem.hierarchy.length, i = 0; i < n; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                                return r.inversePoint(t);
                            }
                            return r.inversePoint(t);
                        }
                        function r(t) {
                            var e = new Matrix();
                            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                for (var r = this._elem.hierarchy.length, n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                                return e.inversePoint(t);
                            }
                            return e.inversePoint(t);
                        }
                        function n() {
                            return [ 1, 1, 1, 1 ];
                        }
                        return function(i) {
                            var a;
                            function o(t) {
                                switch (t) {
                                  case "ADBE Root Vectors Group":
                                  case "Contents":
                                  case 2:
                                    return o.shapeInterface;

                                  case 1:
                                  case 6:
                                  case "Transform":
                                  case "transform":
                                  case "ADBE Transform Group":
                                    return a;

                                  case 4:
                                  case "ADBE Effect Parade":
                                  case "effects":
                                  case "Effects":
                                    return o.effect;
                                }
                            }
                            o.toWorld = t, o.fromWorld = e, o.toComp = t, o.fromComp = r, o.sampleImage = n, 
                            o.sourceRectAtTime = i.sourceRectAtTime.bind(i);
                            var s = getDescriptor(a = TransformExpressionInterface((o._elem = i).finalTransform.mProp), "anchorPoint");
                            return Object.defineProperties(o, {
                                hasParent: {
                                    get: function() {
                                        return i.hierarchy.length;
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return i.hierarchy[0].layerInterface;
                                    }
                                },
                                rotation: getDescriptor(a, "rotation"),
                                scale: getDescriptor(a, "scale"),
                                position: getDescriptor(a, "position"),
                                opacity: getDescriptor(a, "opacity"),
                                anchorPoint: s,
                                anchor_point: s,
                                transform: {
                                    get: function() {
                                        return a;
                                    }
                                },
                                active: {
                                    get: function() {
                                        return i.isInRange;
                                    }
                                }
                            }), o.startTime = i.data.st, o.index = i.data.ind, o.source = i.data.refId, o.height = 0 === i.data.ty ? i.data.h : 100, 
                            o.width = 0 === i.data.ty ? i.data.w : 100, o.inPoint = i.data.ip / i.comp.globalData.frameRate, 
                            o.outPoint = i.data.op / i.comp.globalData.frameRate, o._name = i.data.nm, o.registerMaskInterface = function(t) {
                                o.mask = new MaskManagerInterface(t, i);
                            }, o.registerEffectsInterface = function(t) {
                                o.effect = t;
                            }, o;
                        };
                    }(), CompExpressionInterface = function(t) {
                        function e(e) {
                            for (var r = 0, n = t.layers.length; r < n; ) {
                                if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                                r += 1;
                            }
                            return null;
                        }
                        return Object.defineProperty(e, "_name", {
                            value: t.data.nm
                        }), (e.layer = e).pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, 
                        e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, 
                        e.displayStartTime = 0, e.numLayers = t.layers.length, e;
                    }, TransformExpressionInterface = function(t) {
                        function e(t) {
                            switch (t) {
                              case "scale":
                              case "Scale":
                              case "ADBE Scale":
                              case 6:
                                return e.scale;

                              case "rotation":
                              case "Rotation":
                              case "ADBE Rotation":
                              case "ADBE Rotate Z":
                              case 10:
                                return e.rotation;

                              case "ADBE Rotate X":
                                return e.xRotation;

                              case "ADBE Rotate Y":
                                return e.yRotation;

                              case "position":
                              case "Position":
                              case "ADBE Position":
                              case 2:
                                return e.position;

                              case "ADBE Position_0":
                                return e.xPosition;

                              case "ADBE Position_1":
                                return e.yPosition;

                              case "ADBE Position_2":
                                return e.zPosition;

                              case "anchorPoint":
                              case "AnchorPoint":
                              case "Anchor Point":
                              case "ADBE AnchorPoint":
                              case 1:
                                return e.anchorPoint;

                              case "opacity":
                              case "Opacity":
                              case 11:
                                return e.opacity;
                            }
                        }
                        var r;
                        return Object.defineProperty(e, "rotation", {
                            get: ExpressionPropertyInterface(t.r || t.rz)
                        }), Object.defineProperty(e, "zRotation", {
                            get: ExpressionPropertyInterface(t.rz || t.r)
                        }), Object.defineProperty(e, "xRotation", {
                            get: ExpressionPropertyInterface(t.rx)
                        }), Object.defineProperty(e, "yRotation", {
                            get: ExpressionPropertyInterface(t.ry)
                        }), Object.defineProperty(e, "scale", {
                            get: ExpressionPropertyInterface(t.s)
                        }), t.p && (r = ExpressionPropertyInterface(t.p)), Object.defineProperty(e, "position", {
                            get: function() {
                                return t.p ? r() : [ t.px.v, t.py.v, t.pz ? t.pz.v : 0 ];
                            }
                        }), Object.defineProperty(e, "xPosition", {
                            get: ExpressionPropertyInterface(t.px)
                        }), Object.defineProperty(e, "yPosition", {
                            get: ExpressionPropertyInterface(t.py)
                        }), Object.defineProperty(e, "zPosition", {
                            get: ExpressionPropertyInterface(t.pz)
                        }), Object.defineProperty(e, "anchorPoint", {
                            get: ExpressionPropertyInterface(t.a)
                        }), Object.defineProperty(e, "opacity", {
                            get: ExpressionPropertyInterface(t.o)
                        }), Object.defineProperty(e, "skew", {
                            get: ExpressionPropertyInterface(t.sk)
                        }), Object.defineProperty(e, "skewAxis", {
                            get: ExpressionPropertyInterface(t.sa)
                        }), Object.defineProperty(e, "orientation", {
                            get: ExpressionPropertyInterface(t.or)
                        }), e;
                    }, ProjectInterface = function() {
                        function t(t) {
                            this.compositions.push(t);
                        }
                        return function() {
                            function e(t) {
                                for (var e = 0, r = this.compositions.length; e < r; ) {
                                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), 
                                    this.compositions[e].compInterface;
                                    e += 1;
                                }
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
                        };
                    }(), EffectsExpressionInterface = function() {
                        function t(e, r, n, i) {
                            for (var a = [], o = e.ef.length, s = 0; s < o; s += 1) 5 === e.ef[s].ty ? a.push(t(e.ef[s], r.effectElements[s], r.effectElements[s].propertyGroup, i)) : a.push(function(t, e, r, n) {
                                var i = ExpressionPropertyInterface(t.p);
                                return t.p.setGroupProperty && t.p.setGroupProperty(n), function() {
                                    return 10 === e ? r.comp.compInterface(t.p.v) : i();
                                };
                            }(r.effectElements[s], e.ef[s].ty, i, h));
                            function h(t) {
                                return 1 === t ? l : n(t - 1);
                            }
                            var l = function(t) {
                                for (var r = e.ef, n = 0, i = r.length; n < i; ) {
                                    if (t === r[n].nm || t === r[n].mn || t === r[n].ix) return 5 === r[n].ty ? a[n] : a[n]();
                                    n += 1;
                                }
                                return a[0]();
                            };
                            return l.propertyGroup = h, "ADBE Color Control" === e.mn && Object.defineProperty(l, "color", {
                                get: function() {
                                    return a[0]();
                                }
                            }), Object.defineProperty(l, "numProperties", {
                                get: function() {
                                    return e.np;
                                }
                            }), l.active = l.enabled = 0 !== e.en, l;
                        }
                        return {
                            createEffectsInterface: function(e, r) {
                                if (e.effectsManager) {
                                    for (var n = [], i = e.data.ef, a = e.effectsManager.effectElements.length, o = 0; o < a; o += 1) n.push(t(i[o], e.effectsManager.effectElements[o], r, e));
                                    return function(t) {
                                        for (var r = e.data.ef || [], i = 0, a = r.length; i < a; ) {
                                            if (t === r[i].nm || t === r[i].mn || t === r[i].ix) return n[i];
                                            i += 1;
                                        }
                                    };
                                }
                            }
                        };
                    }(), MaskManagerInterface = function() {
                        function t(t, e) {
                            this._mask = t, this._data = e;
                        }
                        return Object.defineProperty(t.prototype, "maskPath", {
                            get: function() {
                                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                            }
                        }), Object.defineProperty(t.prototype, "maskOpacity", {
                            get: function() {
                                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                            }
                        }), function(e, r) {
                            for (var n = createSizedArray(e.viewData.length), i = e.viewData.length, a = 0; a < i; a += 1) n[a] = new t(e.viewData[a], e.masksProperties[a]);
                            return function(t) {
                                for (a = 0; a < i; ) {
                                    if (e.masksProperties[a].nm === t) return n[a];
                                    a += 1;
                                }
                            };
                        };
                    }(), ExpressionPropertyInterface = function() {
                        var t = {
                            pv: 0,
                            v: 0,
                            mult: 1
                        }, e = {
                            pv: [ 0, 0, 0 ],
                            v: [ 0, 0, 0 ],
                            mult: 1
                        };
                        function r(t, e, r) {
                            Object.defineProperty(t, "velocity", {
                                get: function() {
                                    return e.getVelocityAtTime(e.comp.currentFrame);
                                }
                            }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(n) {
                                if (t.numKeys) {
                                    var i = "";
                                    i = "s" in e.keyframes[n - 1] ? e.keyframes[n - 1].s : "e" in e.keyframes[n - 2] ? e.keyframes[n - 2].e : e.keyframes[n - 2].s;
                                    return (i = "unidimensional" === r ? new Number(i) : Object.assign({}, i)).time = e.keyframes[n - 1].t / e.elem.comp.globalData.frameRate, 
                                    i;
                                }
                                return 0;
                            }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, 
                            t.propertyGroup = e.propertyGroup;
                        }
                        function n() {
                            return t;
                        }
                        return function(i) {
                            return i ? "unidimensional" === i.propType ? (c = 1 / (p = (p = i) && "pv" in p ? p : t).mult, 
                            f = p.pv * c, (u = new Number(f)).value = f, r(u, p, "unidimensional"), function() {
                                return p.k && p.getValue(), f = p.v * c, u.value !== f && ((u = new Number(f)).value = f, 
                                r(u, p, "unidimensional")), u;
                            }) : (o = 1 / (a = (a = i) && "pv" in a ? a : e).mult, s = a.pv.length, h = createTypedArray("float32", s), 
                            l = createTypedArray("float32", s), h.value = l, r(h, a, "multidimensional"), function() {
                                a.k && a.getValue();
                                for (var t = 0; t < s; t += 1) h[t] = l[t] = a.v[t] * o;
                                return h;
                            }) : n;
                            var a, o, s, h, l, p, c, f, u;
                        };
                    }(), TextExpressionSelectorProp, propertyGetTextProp;
                    function SliderEffect(t, e, r) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                    }
                    function AngleEffect(t, e, r) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                    }
                    function ColorEffect(t, e, r) {
                        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
                    }
                    function PointEffect(t, e, r) {
                        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
                    }
                    function LayerIndexEffect(t, e, r) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                    }
                    function MaskIndexEffect(t, e, r) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                    }
                    function CheckboxEffect(t, e, r) {
                        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
                    }
                    function NoValueEffect() {
                        this.p = {};
                    }
                    function EffectsManager() {}
                    function EffectsManager(t, e) {
                        var r = t.ef || [];
                        this.effectElements = [];
                        for (var n, i = r.length, a = 0; a < i; a++) n = new GroupEffect(r[a], e), this.effectElements.push(n);
                    }
                    function GroupEffect(t, e) {
                        this.init(t, e);
                    }
                    TextExpressionSelectorProp = function() {
                        function t(t, e) {
                            return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, 
                            this.v;
                        }
                        return function(e, r) {
                            this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", 
                            this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [ 1, 1, 1 ], 
                            this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this), 
                            this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, 
                            this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), 
                            this.setGroupProperty = expressionHelpers.setGroupProperty;
                        };
                    }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t, e, r) {
                        return 1 === e.t ? new TextExpressionSelectorProp(t, e, r) : propertyGetTextProp(t, e, r);
                    }, extendPrototype([ DynamicPropertyContainer ], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, 
                    GroupEffect.prototype.init = function(t, e) {
                        this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                        for (var r, n = this.data.ef.length, i = this.data.ef, a = 0; a < n; a += 1) {
                            switch (r = null, i[a].ty) {
                              case 0:
                                r = new SliderEffect(i[a], e, this);
                                break;

                              case 1:
                                r = new AngleEffect(i[a], e, this);
                                break;

                              case 2:
                                r = new ColorEffect(i[a], e, this);
                                break;

                              case 3:
                                r = new PointEffect(i[a], e, this);
                                break;

                              case 4:
                              case 7:
                                r = new CheckboxEffect(i[a], e, this);
                                break;

                              case 10:
                                r = new LayerIndexEffect(i[a], e, this);
                                break;

                              case 11:
                                r = new MaskIndexEffect(i[a], e, this);
                                break;

                              case 5:
                                r = new EffectsManager(i[a], e, this);
                                break;

                              default:
                                r = new NoValueEffect(i[a], e, this);
                            }
                            r && this.effectElements.push(r);
                        }
                    };
                    var lottiejs = {}, _isFrozen = !1;
                    function setLocationHref(t) {
                        locationHref = t;
                    }
                    function searchAnimations() {
                        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
                    }
                    function setSubframeRendering(t) {
                        subframeEnabled = t;
                    }
                    function loadAnimation(t) {
                        return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
                    }
                    function setQuality(t) {
                        if ("string" == typeof t) switch (t) {
                          case "high":
                            defaultCurveSegments = 200;
                            break;

                          case "medium":
                            defaultCurveSegments = 50;
                            break;

                          case "low":
                            defaultCurveSegments = 10;
                        } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
                        roundValues(!(50 <= defaultCurveSegments));
                    }
                    function inBrowser() {
                        return void 0 !== navigator;
                    }
                    function installPlugin(t, e) {
                        "expressions" === t && (expressionsPlugin = e);
                    }
                    function getFactory(t) {
                        switch (t) {
                          case "propertyFactory":
                            return PropertyFactory;

                          case "shapePropertyFactory":
                            return ShapePropertyFactory;

                          case "matrix":
                            return Matrix;
                        }
                    }
                    function checkReady() {
                        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
                    }
                    function getQueryVariable(t) {
                        for (var e = queryString.split("&"), r = 0; r < e.length; r++) {
                            var n = e[r].split("=");
                            if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1]);
                        }
                    }
                    lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, 
                    lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, 
                    lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, 
                    lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, 
                    lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, 
                    lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, 
                    lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, 
                    lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, 
                    lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, 
                    lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, 
                    lottiejs.version = "5.5.7";
                    var standalone = "", animationData = "__[ANIMATIONDATA]__", renderer = "", readyStateCheckInterval = setInterval(checkReady, 100);
                    return lottiejs;
                }, "object" === _typeof(module) && module.exports ? module.exports = Kb(Jb) : (Jb.lottie = Kb(Jb), 
                Jb.bodymovin = Jb.lottie));
                var _window$lottie = window.lottie, freeze = _window$lottie.freeze, unfreeze = _window$lottie.unfreeze;
            }.call(this, __webpack_require__(2)(module));
        }, function(t, e) {
            t.exports = function(t) {
                var e;
                return t.webpackPolyfill || ((e = Object.create(t)).children || (e.children = []), 
                Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l;
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i;
                    }
                }), Object.defineProperty(e, "exports", {
                    enumerable: !0
                }), e.webpackPolyfill = 1), e;
            };
        } ], L = {}, r.m = K, r.c = L, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            });
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, r.t = function(t, e) {
            if (1 & e && (t = r(t)), 8 & e) return t;
            if (4 & e && "object" == (void 0 === t ? "undefined" : _typeof2(t)) && t && t.__esModule) return t;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function(e) {
                return t[e];
            }.bind(null, i));
            return n;
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return r.d(e, "a", e), e;
        }, r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, r.p = "", r(r.s = 1)));
    },
    195: function(t, e, r) {},
    2: function(t, e, r) {
        t.exports = r(448).default, t.exports.default = t.exports;
    },
    20: function(t, e, r) {
        function n(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        r.d(e, "a", function() {
            return o;
        }), e = r(0), r = function(t, e, r) {
            return e && n(t.prototype, e), r && n(t, r), t;
        };
        var i = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
            return _typeof4(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
        };
        function a(t) {
            if (t && "object" === (void 0 === t ? "undefined" : i(t))) {
                var e = "";
                return Object.keys(t).forEach(function(r) {
                    var n = r.replace(/([A-Z])/g, "-$1").toLowerCase();
                    e += n + ":" + t[r] + ";";
                }), e;
            }
            return t && "string" == typeof t ? t : "";
        }
        var o = (function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof4(e));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(s, e.Component), r(s, [ {
            key: "mergeStyle",
            value: function(t, e) {
                return t && "object" === (void 0 === t ? "undefined" : i(t)) && e && "object" === (void 0 === e ? "undefined" : i(e)) ? Object.assign({}, t, e) : a(t) + a(e);
            }
        } ]), s);
        function s() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, s), function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != _typeof4(e) && "function" != typeof e ? t : e;
            }(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
        }
        o.options = {
            addGlobalClass: !0
        };
    },
    28: function(t, e, r) {
        t.exports = r(792);
    },
    37: function(t, e) {
        var r = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
            return _typeof4(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
        }, n = function() {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window);
        }
        t.exports = n;
    },
    41: function(t, e, r) {
        r.d(e, "a", function() {
            return n;
        });
        e = r(0);
        function n() {}
        r.n(e).a.getEnv();
    },
    446: function(t, e, r) {
        (function(t, n) {
            var i = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
                return _typeof4(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var a = r(51);
            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" === i(Symbol.iterator) ? function(t) {
                    return void 0 === t ? "undefined" : i(t);
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : i(t);
                })(t);
            }
            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function h(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(t, n.key, n);
                }
            }
            function l(t, e, r) {
                return e && h(t.prototype, e), r && h(t, r), t;
            }
            function p(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t;
            }
            function c(t, e) {
                var r, n = Object.keys(t);
                return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r)), n;
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach(function(e) {
                        p(t, e, r[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    });
                }
                return t;
            }
            function u(t) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            function m(t, e) {
                return (m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }
            function d(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function y(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                        !0;
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        return !1;
                    }
                }();
                return function() {
                    var r, n = u(t);
                    return function(t, e) {
                        return !e || "object" !== (void 0 === e ? "undefined" : i(e)) && "function" != typeof e ? d(t) : e;
                    }(this, e ? (r = u(this).constructor, Reflect.construct(n, arguments, r)) : n.apply(this, arguments));
                };
            }
            function g(t) {
                return function(t) {
                    if (Array.isArray(t)) return v(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return v(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Map" === (r = "Object" === r && t.constructor ? t.constructor.name : r) || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            var b = Object.is || function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            };
            function _(t, e) {
                if ("object" !== o(t) && "object" !== o(e)) return t === e;
                if (null === t && null === e) return !0;
                if (null === t || null === e) return !1;
                if (b(t, e)) return !0;
                var r = t ? Object.keys(t) : [], n = e ? Object.keys(e) : [];
                if (r.length !== n.length) return !1;
                for (var i = 0; i < r.length; i++) {
                    var a = r[i];
                    if (!e.hasOwnProperty(a) || !b(t[a], e[a])) return !1;
                }
                return !0;
            }
            var P = function() {
                function t() {
                    s(this, t), this.cache = [], this.size = 0;
                }
                return l(t, [ {
                    key: "set",
                    value: function(t, e) {
                        var r = this.cache.length;
                        if (!r) return this.cache.push({
                            k: t,
                            v: e
                        }), void (this.size += 1);
                        for (var n = 0; n < r; n++) {
                            var i = this.cache[n];
                            if (i.k === t) return void (i.v = e);
                        }
                        this.cache.push({
                            k: t,
                            v: e
                        }), this.size += 1;
                    }
                }, {
                    key: "get",
                    value: function(t) {
                        var e = this.cache.length;
                        if (e) for (var r = 0; r < e; r++) {
                            var n = this.cache[r];
                            if (n.k === t) return n.v;
                        }
                    }
                }, {
                    key: "has",
                    value: function(t) {
                        var e = this.cache.length;
                        if (!e) return !1;
                        for (var r = 0; r < e; r++) if (this.cache[r].k === t) return !0;
                        return !1;
                    }
                }, {
                    key: "delete",
                    value: function(t) {
                        for (var e = this.cache.length, r = 0; r < e; r++) if (this.cache[r].k === t) return this.cache.splice(r, 1), 
                        --this.size, !0;
                        return !1;
                    }
                }, {
                    key: "clear",
                    value: function() {
                        var t = this.cache.length;
                        if (this.size = 0, t) for (;t; ) this.cache.pop(), t--;
                    }
                } ]), t;
            }();
            var S = function(t) {
                for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                t = "function" == typeof t ? t.bind.apply(t, [ null ].concat(r)) : t, (wx.nextTick || setTimeout)(t);
            }, x = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
            function E(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports), e.exports;
            }
            var C = (t = "function" == typeof Symbol && Symbol.for) ? Symbol.for("react.element") : 60103, A = t ? Symbol.for("react.portal") : 60106, T = t ? Symbol.for("react.fragment") : 60107, w = t ? Symbol.for("react.strict_mode") : 60108, k = t ? Symbol.for("react.profiler") : 60114, D = t ? Symbol.for("react.provider") : 60109, I = t ? Symbol.for("react.context") : 60110, M = t ? Symbol.for("react.async_mode") : 60111, F = t ? Symbol.for("react.concurrent_mode") : 60111, O = t ? Symbol.for("react.forward_ref") : 60112, R = t ? Symbol.for("react.suspense") : 60113, L = t ? Symbol.for("react.suspense_list") : 60120, j = t ? Symbol.for("react.memo") : 60115, V = t ? Symbol.for("react.lazy") : 60116, B = t ? Symbol.for("react.block") : 60121, N = t ? Symbol.for("react.fundamental") : 60117, z = t ? Symbol.for("react.responder") : 60118, G = t ? Symbol.for("react.scope") : 60119;
            function $(t) {
                if ("object" === o(t) && null !== t) {
                    var e = t.$$typeof;
                    switch (e) {
                      case C:
                        switch (t = t.type) {
                          case M:
                          case F:
                          case T:
                          case k:
                          case w:
                          case R:
                            return t;

                          default:
                            switch (t = t && t.$$typeof) {
                              case I:
                              case O:
                              case V:
                              case j:
                              case D:
                                return t;

                              default:
                                return e;
                            }
                        }

                      case A:
                        return e;
                    }
                }
            }
            function W(t) {
                return $(t) === F;
            }
            var q = {
                AsyncMode: M,
                ConcurrentMode: F,
                ContextConsumer: I,
                ContextProvider: D,
                Element: C,
                ForwardRef: O,
                Fragment: T,
                Lazy: V,
                Memo: j,
                Portal: A,
                Profiler: k,
                StrictMode: w,
                Suspense: R,
                isAsyncMode: function(t) {
                    return W(t) || $(t) === M;
                },
                isConcurrentMode: W,
                isContextConsumer: function(t) {
                    return $(t) === I;
                },
                isContextProvider: function(t) {
                    return $(t) === D;
                },
                isElement: function(t) {
                    return "object" === o(t) && null !== t && t.$$typeof === C;
                },
                isForwardRef: function(t) {
                    return $(t) === O;
                },
                isFragment: function(t) {
                    return $(t) === T;
                },
                isLazy: function(t) {
                    return $(t) === V;
                },
                isMemo: function(t) {
                    return $(t) === j;
                },
                isPortal: function(t) {
                    return $(t) === A;
                },
                isProfiler: function(t) {
                    return $(t) === k;
                },
                isStrictMode: function(t) {
                    return $(t) === w;
                },
                isSuspense: function(t) {
                    return $(t) === R;
                },
                isValidElementType: function(t) {
                    return "string" == typeof t || "function" == typeof t || t === T || t === F || t === k || t === w || t === R || t === L || "object" === o(t) && null !== t && (t.$$typeof === V || t.$$typeof === j || t.$$typeof === D || t.$$typeof === I || t.$$typeof === O || t.$$typeof === N || t.$$typeof === z || t.$$typeof === G || t.$$typeof === B);
                },
                typeOf: $
            };
            (t = E(function(t, e) {})).AsyncMode, t.ConcurrentMode, t.ContextConsumer, t.ContextProvider, 
            t.Element, t.ForwardRef, t.Fragment, t.Lazy, t.Memo, t.Portal, t.Profiler, t.StrictMode, 
            t.Suspense, t.isAsyncMode, t.isConcurrentMode, t.isContextConsumer, t.isContextProvider, 
            t.isElement, t.isForwardRef, t.isFragment, t.isLazy, t.isMemo, t.isPortal, t.isProfiler, 
            t.isStrictMode, t.isSuspense, t.isValidElementType, t.typeOf, E(function(t) {
                t.exports = q;
            }), Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            !function() {
                try {
                    if (!Object.assign) return;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return;
                    for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t];
                    }).join("")) return;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                        n[t] = t;
                    }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, n)).join("") ? void 0 : 1;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return;
                }
            }() || Object.assign;
            function U() {}
            function H() {}
            Function.call.bind(Object.prototype.hasOwnProperty), H.resetWarningCache = U;
            var Y = E(function(t) {
                t.exports = function() {
                    function t(t, e, r, n, i, a) {
                        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== a) throw (a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")).name = "Invariant Violation", 
                        a;
                    }
                    function e() {
                        return t;
                    }
                    var r = {
                        array: t.isRequired = t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: e,
                        element: t,
                        elementType: t,
                        instanceOf: e,
                        node: t,
                        objectOf: e,
                        oneOf: e,
                        oneOfType: e,
                        shape: e,
                        exact: e,
                        checkPropTypes: H,
                        resetWarningCache: U
                    };
                    return r.PropTypes = r;
                }();
            }), K = (t = "object" == o(x) && x && x.Object === Object && x, x = "object" == ("undefined" == typeof self ? "undefined" : o(self)) && self && self.Object === Object && self, 
            t = (t || x || {
                Function: Function,
                Boolean: Boolean,
                Object: Object,
                Number: Number,
                Array: Array,
                Date: Date,
                String: String,
                Symbol: Symbol,
                Error: Error,
                TypeError: TypeError,
                Map: Map,
                Set: Set,
                WeakMap: WeakMap,
                WeakSet: WeakSet,
                ArrayBuffer: ArrayBuffer,
                Math: Math,
                Promise: Promise,
                RegExp: RegExp,
                DataView: DataView,
                isFinite: isFinite,
                parseInt: parseInt,
                parseFloat: parseFloat,
                Float32Array: Float32Array,
                Float64Array: Float64Array,
                Int8Array: Int8Array,
                Int16Array: Int16Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array,
                Uint16Array: Uint16Array,
                Uint32Array: Uint32Array,
                Uint8ClampedArray: Uint8ClampedArray,
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                setInterval: setInterval,
                clearInterval: clearInterval
            }).Symbol, (x = Object.prototype).hasOwnProperty), X = x.toString, J = t ? t.toStringTag : void 0, Q = function(t) {
                var e = K.call(t, J), r = t[J];
                try {
                    t[J] = void 0;
                } catch (t) {}
                var n = X.call(t);
                return e ? t[J] = r : delete t[J], n;
            }, Z = Object.prototype.toString, tt = function(t) {
                return Z.call(t);
            }, et = t ? t.toStringTag : void 0, rt = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : (et && et in Object(t) ? Q : tt)(t);
            }, nt = function(t, e) {
                return function(r) {
                    return t(e(r));
                };
            }(Object.getPrototypeOf, Object), it = (x = Function.prototype, t = Object.prototype, 
            x.toString), at = t.hasOwnProperty, ot = it.call(Object), st = function(t) {
                return !(!function(t) {
                    return null != t && "object" == o(t);
                }(t) || "[object Object]" != rt(t)) && (null === (t = nt(t)) || "function" == typeof (t = at.call(t, "constructor") && t.constructor) && t instanceof t && it.call(t) == ot);
            };
            function ht(t) {
                if (t && st(t)) {
                    for (var e in t) if (t.hasOwnProperty(e)) return;
                    return 1;
                }
            }
            function lt(t) {
                return "function" == typeof t;
            }
            function pt(t) {
                return Array.isArray(t);
            }
            var ct = Object.keys, ft = Object.prototype.hasOwnProperty;
            function ut(t) {
                for (var e, r, n, i = decodeURIComponent, a = t.split("&"), o = {}, s = 0, h = a.length; s < h; ++s) (n = a[s]).length && (r = (r = n.indexOf("=")) < 0 ? (e = i(n), 
                "") : (e = i(n.slice(0, r)), i(n.slice(r + 1))), "string" == typeof o[e] && (o[e] = [ o[e] ]), 
                pt(o[e]) ? o[e].push(r) : o[e] = r);
                return o;
            }
            var mt, dt = new Date().getTime().toString(), yt = 1, gt = 0;
            function vt() {
                return String(gt++);
            }
            try {
                mt = new Map();
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                mt = new P();
            }
            var bt = 0, _t = {};
            function Pt(t, e) {
                _t[t] = e;
            }
            function St(t, e) {
                var r = _t[t];
                return e && delete _t[t], r;
            }
            function xt(t) {
                return t in _t;
            }
            var Et = new (function() {
                function t() {
                    s(this, t), p(this, "map", {}), p(this, "observers", {});
                }
                return l(t, [ {
                    key: "set",
                    value: function() {
                        var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, r = 1 < arguments.length ? arguments[1] : void 0, n = 2 < arguments.length ? arguments[2] : void 0;
                        r && (n && this.delete(n), t = this.observers, this.map[r] || Object.defineProperty(this.map, r, {
                            configurable: !0,
                            get: function() {
                                return this["__".concat(r)];
                            },
                            set: function(e) {
                                this["__".concat(r)] = e;
                                var n, i = t[r] && t[r].component, a = t[r] && t[r].ComponentClass;
                                i && a && i.__isReady && (n = i.$scope && i.$scope.data && i.$scope.data.extraProps || null, 
                                n = Dt(a.defaultProps, e, i.props, n), i.props = n, S(function() {
                                    i._unsafeCallUpdate = !0, Lt(i), i._unsafeCallUpdate = !1;
                                }));
                            }
                        }), this.map[r] = e);
                    }
                }, {
                    key: "delete",
                    value: function(t) {
                        delete this.map[t], delete this.map["__".concat(t)], delete this.observers[t];
                    }
                } ]), t;
            }())(), Ct = "__key_", At = "__preload_", Tt = "preload", wt = "$preloadComponent", kt = [ "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "onResize" ];
            function Dt(t, e, r, n) {
                var i = 0 < arguments.length && void 0 !== t ? t : {}, a = (e = 1 < arguments.length && void 0 !== e ? e : {}, 
                r = 2 < arguments.length && void 0 !== r ? r : {}, n = 3 < arguments.length ? n : void 0, 
                Object.assign({}, r, e));
                if (!ht(i)) for (var o in i) void 0 === a[o] && (a[o] = i[o]);
                return n ? Object.assign({}, a, n) : a;
            }
            function It(t, e, r) {
                var n, i;
                r = r || [], "componentDidMount" === e && (t.$$refs && 0 < t.$$refs.length && (n = {}, 
                t.$$refs.forEach(function(e) {
                    var r;
                    r = "component" === e.type ? (r = t.$scope.selectComponent("#".concat(e.id))) ? r.$component || r : null : wx.createSelectorQuery().in(t.$scope).select("#".concat(e.id)), 
                    a.commitAttachRef(e, r, t, n, !0), e.target = r;
                }), t.refs = Object.assign({}, t.refs || {}, n)), t.$$hasLoopRef && (a.Current.current = t, 
                a.Current.index = 0, t._disableEffect = !0, t._createData(t.state, t.props, !0), 
                t._disableEffect = !1, a.Current.current = null)), "componentWillUnmount" !== e || (i = t.$scope.data.compid) && Et.delete(i), 
                t[e] && "function" == typeof t[e] && (i = t[e]).call.apply(i, [ t ].concat(g(r))), 
                "componentWillMount" === e && (t._dirty = !1, t._disable = !1, t.state = t.getState()), 
                "componentWillUnmount" === e && (t._dirty = !0, t._disable = !0, t.$router = {
                    params: {},
                    path: ""
                }, t._pendingStates = [], t._pendingCallbacks = [], a.detachAllRef(t));
            }
            function Mt(t, e) {
                this.$component.__isReady || (this.$component.__isReady = !0, e ? this.$component.$router.path = function() {
                    var t;
                    return function(t) {
                        return "/" === t.charAt(0) ? t : "/" + t;
                    }((t = (t = getCurrentPages())[t.length - 1]).route || t.__route__);
                }() : ((e = this.data.compid) && (Et.observers[e] = {
                    component: this.$component,
                    ComponentClass: t
                }), e = Dt(t.defaultProps, Et.map[e], this.$component.props, this.data.extraProps), 
                this.$component.props = e), function(t) {
                    var e = t.props;
                    t.__componentWillMountTriggered || t._constructor && t._constructor(e);
                    var r = Rt(t, e, t.state);
                    void 0 !== r && (t.state = r), t._dirty = !1, t._disable = !1, t._isForceUpdate = !1, 
                    t.__componentWillMountTriggered || (t.__componentWillMountTriggered = !0, Ot(t) || It(t, "componentWillMount")), 
                    jt(t, e, t.state), t.prevProps = t.props, t.prevState = t.state;
                }(this.$component));
            }
            var Ft = void 0 === n || !n.env || !1;
            function Ot(t) {
                var e = t.constructor.getDerivedStateFromProps;
                t = t.getSnapshotBeforeUpdate;
                return lt(e) || lt(t);
            }
            function Rt(t, e, r) {
                var n;
                return lt(t = t.constructor.getDerivedStateFromProps) && (void 0 !== (e = t(e, r)) ? n = Object.assign({}, r, e) : console.warn("getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。")), 
                n;
            }
            function Lt(t) {
                var e = t.props, r = t.__propTypes;
                Ft && r && (void 0 === (a = t.constructor.name) && (a = pt(i = t.constructor.toString().match(/^function\s*([^\s(]+)/)) ? i[0] : "Component"), 
                Y.checkPropTypes(r, e, "prop", a));
                var n = t.prevProps || e;
                t.props = n, t.__mounted && !0 === t._unsafeCallUpdate && !Ot(t) && t.componentWillReceiveProps && (t._disable = !0, 
                t.componentWillReceiveProps(e), t._disable = !1);
                var i = t.getState(), a = (r = t.prevState || i, Rt(t, e, i));
                void 0 !== a && (i = a), a = !1, t.__mounted && ("function" != typeof t.shouldComponentUpdate || t._isForceUpdate || !1 !== t.shouldComponentUpdate(e, i) ? !Ot(t) && lt(t.componentWillUpdate) && t.componentWillUpdate(e, i) : a = !0), 
                t.props = e, t.state = i, t._dirty = !1, t._isForceUpdate = !1, a || jt(t, n, r), 
                t.prevProps = t.props, t.prevState = t.state;
            }
            function jt(t, e, r) {
                var n, i = t.state, s = void 0 === (s = t.props) ? {} : s, h = i || {};
                t._createData && (t.__isReady && (function(t) {
                    var e, r = t.constructor.contextType;
                    r && (null !== (r = (e = r.context).emitter) ? (t._hasContext || (t._hasContext = !0, 
                    r.on(function(e) {
                        return Bt(t);
                    })), t.context = r.value) : t.context = e._defaultValue);
                }(t), a.Current.current = t, a.Current.index = 0, a.invokeEffects(t, !0)), h = t._createData(i, s) || h, 
                t.__isReady && (a.Current.current = null)), h = Object.assign({}, s, h), t.$usedState && t.$usedState.length && (n = {}, 
                t.$usedState.forEach(function(t) {
                    var e = a.internal_safe_get(h, t);
                    if (void 0 !== e) if ("object" === o(e)) {
                        if (ht(e)) return a.internal_safe_set(n, t, {});
                        ht(e = function t(e) {
                            if (pt(e)) for (var r = [], n = e.length, i = 0; i < n; i++) r.push(t(e[i])); else {
                                if (!st(e)) return e;
                                for (var a in r = {}, e) {
                                    var o = t(e[a]);
                                    r[a] = o;
                                }
                            }
                            return r;
                        }(e)) || a.internal_safe_set(n, t, e);
                    } else a.internal_safe_set(n, t, e);
                }), h = n), h.$taroCompReady = !0;
                i = a.getIsUsingDiff() ? function t(e, r, n, i) {
                    for (var a = 2 < arguments.length && void 0 !== n ? n : {}, s = 3 < arguments.length && void 0 !== i ? i : "", h = ct(e), l = h.length, p = function(n) {
                        var i, l, p, c = h[n], f = e[c], u = r[c];
                        n = "".concat(s).concat(c);
                        if (/^\$compid__/.test(c)) a[n] = f; else {
                            if (f === u) return "continue";
                            ft.call(r, c) && o(f) === o(u) && "object" === o(f) && (i = pt(f)) === (l = pt(u)) ? i && l ? f.length < u.length ? a[n] = f : function e(r, n, i, a) {
                                for (var s = 2 < arguments.length && void 0 !== i ? i : {}, h = 3 < arguments.length && void 0 !== a ? a : "", l = r.length, p = function(i) {
                                    var a, l, p, c = r[i], f = n[i];
                                    i = "".concat(h, "[").concat(i, "]");
                                    if (c === f) return "continue";
                                    o(c) !== o(f) || "object" !== o(c) || (a = pt(c)) !== (l = pt(f)) ? s[i] = c : a && l ? c.length < f.length ? s[i] = c : e(c, f, s, "".concat(i)) : !c || !f || ct(c).length < ct(f).length ? s[i] = c : ((p = st(c)) && Object.keys(f).some(function(t) {
                                        if (void 0 === c[t] && void 0 !== f[t]) return !(p = !1);
                                    }), p ? t(c, f, s, "".concat(i, ".")) : s[i] = c);
                                }, c = 0; c < l; c++) p(c);
                                return s;
                            }(f, u, a, "".concat(n)) : f && u ? ((p = st(f)) && Object.keys(u).some(function(t) {
                                if (void 0 === f[t] && void 0 !== u[t]) return !(p = !1);
                            }), p ? t(f, u, a, "".concat(n, ".")) : a[n] = f) : a[n] = f : a[n] = f;
                        }
                    }, c = 0; c < l; c++) p(c);
                    return a;
                }(h, t.$scope.data) : h;
                var l, p = t.__mounted;
                p && (l = function(t, e, r) {
                    var n, i = t.getSnapshotBeforeUpdate;
                    return lt(i) ? i.call(t, e, r) : n;
                }(t, e, r));
                var c = [];
                t._pendingCallbacks && t._pendingCallbacks.length && (c = t._pendingCallbacks, t._pendingCallbacks = []), 
                s = function() {
                    if (a.invokeEffects(t), p && (t.$$refs && 0 < t.$$refs.length && t.$$refs.forEach(function(e) {
                        var r;
                        "component" !== e.type || (r = (r = t.$scope.selectComponent("#".concat(e.id))) ? r.$component || r : null) !== e.target && (a.commitAttachRef(e, r, t, t.refs), 
                        e.target = r);
                    }), t.$$hasLoopRef && (a.Current.current = t, a.Current.index = 0, t._disableEffect = !0, 
                    t._createData(t.state, t.props, !0), t._disableEffect = !1, a.Current.current = null), 
                    lt(t.componentDidUpdate) && t.componentDidUpdate(e, r, l)), c.length) for (var n = c.length; 0 <= --n; ) "function" == typeof c[n] && c[n].call(t);
                }, 0 === Object.keys(i).length ? (s(), a.invokeEffects(t)) : t.$scope.setData(i, s);
            }
            var Vt = [];
            function Bt(t, e) {
                t._isForceUpdate = 1 < arguments.length && void 0 !== e && e, !t._dirty && (t._dirty = !0) && 1 === Vt.push(t) && S(function() {
                    !function() {
                        var t, e = Vt;
                        for (Vt = []; t = e.pop(); ) t._dirty && Lt(t);
                    }();
                });
            }
            var Nt = "preload", zt = function() {
                function t() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, r = 1 < arguments.length ? arguments[1] : void 0;
                    s(this, t), p(this, "__computed", {}), p(this, "__props", {}), p(this, "__isReady", !1), 
                    p(this, "__mounted", !1), p(this, "context", {}), p(this, "_dirty", !0), p(this, "_disable", !0), 
                    p(this, "_isForceUpdate", !1), p(this, "_pendingStates", []), p(this, "_pendingCallbacks", []), 
                    p(this, "$componentType", ""), p(this, "$router", {
                        params: {},
                        path: ""
                    }), p(this, "_afterScheduleEffect", !1), p(this, "_disableEffect", !1), p(this, "hooks", []), 
                    p(this, "effects", []), p(this, "layoutEffects", []), this.state = {}, this.props = e, 
                    this.$componentType = r ? "PAGE" : "COMPONENT", this.$prefix = String(bt++), this.isTaroComponent = this.$componentType && this.$router && this._pendingStates;
                }
                return l(t, [ {
                    key: "_constructor",
                    value: function(t) {
                        this.props = t || {};
                    }
                }, {
                    key: "_init",
                    value: function(t) {
                        this.$scope = t;
                    }
                }, {
                    key: "setState",
                    value: function(t, e) {
                        t && (this._pendingStates = this._pendingStates || []).push(t), lt(e) && (this._pendingCallbacks = this._pendingCallbacks || []).push(e), 
                        this._disable || Bt(this, e === a.internal_force_update);
                    }
                }, {
                    key: "getState",
                    value: function() {
                        var t = this, e = this._pendingStates, r = this.state, n = this.props, i = Object.assign({}, r);
                        return delete i.__data, e.length ? (e = e.concat(), this._pendingStates.length = 0, 
                        e.forEach(function(e) {
                            lt(e) && (e = e.call(t, i, n)), Object.assign(i, e);
                        }), i) : i;
                    }
                }, {
                    key: "forceUpdate",
                    value: function(t) {
                        lt(t) && (this._pendingCallbacks = this._pendingCallbacks || []).push(t), this._isForceUpdate = !0, 
                        Lt(this);
                    }
                }, {
                    key: "$preload",
                    value: function(t, e) {
                        var r = St(Nt) || {};
                        if ("object" === o(t)) for (var n in t) r[n] = t[n]; else r[t] = e;
                        Pt(Nt, r);
                    }
                }, {
                    key: "__triggerPropsFn",
                    value: function(t, e) {
                        var r, n = t.split("."), i = "__event_" + n.shift();
                        i in this ? (r = e.shift(), (0 < n.length ? a.internal_safe_get(this[i], n.join(".")) : this[i]).apply(r, e)) : (r = t.toLocaleLowerCase(), 
                        t = {
                            __isCustomEvt: !0,
                            __arguments: e
                        }, 0 < e.length && (t.value = e.slice(1)), this.$scope.triggerEvent(r, t));
                    }
                } ]), t;
            }(), Gt = (n = function() {
                !function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && m(t, e);
                }(e, zt);
                var t = y(e);
                function e() {
                    var r;
                    s(this, e);
                    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    return p(d(r = t.call.apply(t, [ this ].concat(i))), "isPureComponent", !0), r;
                }
                return l(e, [ {
                    key: "shouldComponentUpdate",
                    value: function(t, e) {
                        return !_(this.props, t) || !_(this.state, e);
                    }
                } ]), e;
            }(), {
                MAX_REQUEST: 10,
                queue: [],
                pendingQueue: [],
                request: function(t) {
                    return this.queue.push(t), this.run();
                },
                run: function() {
                    var t = this;
                    if (this.queue.length) for (var e = function() {
                        var e = t.queue.shift(), r = e.success, n = e.fail;
                        return e.success = function() {
                            t.pendingQueue = t.pendingQueue.filter(function(t) {
                                return t !== e;
                            }), t.run();
                            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                            r && r.apply(e, i);
                        }, e.fail = function() {
                            t.pendingQueue = t.pendingQueue.filter(function(t) {
                                return t !== e;
                            }), t.run();
                            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                            n && n.apply(e, i);
                        }, t.pendingQueue.push(e), {
                            v: wx.request(e)
                        };
                    }; this.pendingQueue.length < this.MAX_REQUEST; ) {
                        var r = e();
                        if ("object" === o(r)) return r.v;
                    }
                }
            }), $t = new a.Link(function(t) {
                return function(t) {
                    "string" == typeof (t = t || {}) && (t = {
                        url: t
                    });
                    var e, r = t.success, n = t.fail, i = t.complete, a = new Promise(function(a, o) {
                        t.success = function(t) {
                            r && r(t), a(t);
                        }, t.fail = function(t) {
                            n && n(t), o(t);
                        }, t.complete = function(t) {
                            i && i(t);
                        }, e = Gt.request(t);
                    });
                    return a.abort = function(t) {
                        return t && t(), e && e.abort(), a;
                    }, a;
                }(t.requestParams);
            });
            function Wt() {
                var t = wx.getSystemInfoSync().platform.toLowerCase();
                return "android" === t || "devtools" === t;
            }
            function qt(t) {
                !function(t) {
                    var e = Object.assign({}, a.onAndSyncApis, a.noPromiseApis, a.otherApis), r = {
                        navigateTo: !0,
                        redirectTo: !0,
                        reLaunch: !0
                    };
                    Object.keys(e).forEach(function(e) {
                        e in wx ? a.onAndSyncApis[e] || a.noPromiseApis[e] ? t[e] = function() {
                            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                            var i = r.length, a = r.concat(), o = a[i - 1];
                            return o && o.isTaroComponent && o.$scope && a.splice(i - 1, 1, o.$scope), wx[e].apply(wx, a);
                        } : t[e] = function(t) {
                            for (var n = arguments.length, i = new Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                            t = t || {};
                            var o, s, h, l, p = null, c = Object.assign({}, t);
                            if ("string" == typeof t) return i.length ? (o = wx)[e].apply(o, [ t ].concat(i)) : wx[e](t);
                            "navigateTo" !== e && "redirectTo" !== e || !(o = St(o = -1 < (o = c.url ? c.url.replace(/^\//, "") : "").indexOf("?") ? o.split("?")[0] : o)) || (s = new o()).componentWillPreload && (l = dt + yt++, 
                            h = ut((o = -1 < (h = c.url.indexOf("?"))) ? c.url.substring(h + 1, c.url.length) : ""), 
                            c.url += (o ? "&" : "?") + "".concat("__preload_", "=").concat(l), Pt(l, s.componentWillPreload(h)), 
                            Pt("$preloadComponent", s)), r[e] && (h = ut((s = -1 < (h = (l = c.url = c.url || "").indexOf("?"))) ? l.substring(h + 1, l.length) : ""), 
                            l = dt + yt++, c.url += (s ? "&" : "?") + "".concat("__key_", "=").concat(l), Pt(l, h));
                            var f = new Promise(function(r, n) {
                                var a;
                                [ "fail", "success", "complete" ].forEach(function(i) {
                                    c[i] = function(a) {
                                        t[i] && t[i](a), "success" === i ? r("connectSocket" === e ? Promise.resolve().then(function() {
                                            return Object.assign(p, a);
                                        }) : a) : "fail" === i && n(a);
                                    };
                                }), p = i.length ? (a = wx)[e].apply(a, [ c ].concat(i)) : wx[e](c);
                            });
                            return "uploadFile" !== e && "downloadFile" !== e || (f.progress = function(t) {
                                return p && p.onProgressUpdate(t), f;
                            }, f.headersReceived = function(t) {
                                return p && p.onHeadersReceived(t), f;
                            }, f.abort = function(t) {
                                return t && t(), p && p.abort(), f;
                            }), f;
                        } : t[e] = function() {
                            console.warn("微信小程序暂不支持 ".concat(e));
                        };
                    });
                }(t), t.request = $t.request.bind($t), t.addInterceptor = $t.addInterceptor.bind($t), 
                t.cleanInterceptors = $t.cleanInterceptors.bind($t), t.getCurrentPages = getCurrentPages, 
                t.getApp = getApp, t.requirePlugin = requirePlugin, t.initPxTransform = a.initPxTransform.bind(t), 
                t.pxTransform = function(t) {
                    var e, r = void 0 === (r = (e = this.config || {}).designWidth) ? 750 : r;
                    if (!(r in (e = void 0 === (e = e.deviceRatio) ? {
                        640: 1.17,
                        750: 1,
                        828: .905
                    } : e))) throw new Error("deviceRatio 配置中不存在 ".concat(r, " 的设置！"));
                    return parseInt(t, 10) / e[r] + "rpx";
                }.bind(t), t.canIUseWebp = Wt, function(t) {
                    var e = wx.cloud || {}, r = {};
                    [ "init", "database", "uploadFile", "downloadFile", "getTempFileURL", "deleteFile", "callFunction", "CloudID" ].forEach(function(t) {
                        r[t] = e[t];
                    }), t.cloud = r;
                }(t), function(t) {
                    var e = wx.env || {}, r = {};
                    [ "USER_DATA_PATH" ].forEach(function(t) {
                        return r[t] = e[t];
                    }), t.env = r;
                }(t);
            }
            qt(n = {
                Component: zt,
                PureComponent: n,
                createApp: function(t) {
                    var e = new t();
                    t = {
                        onLaunch: function(t) {
                            e.$app = this, e.$app.$router = e.$router = {
                                params: t
                            }, e.componentWillMount && e.componentWillMount(), e.componentDidMount && e.componentDidMount();
                        },
                        onShow: function(t) {
                            Object.assign(e.$router.params, t), e.componentDidShow && e.componentDidShow();
                        },
                        onHide: function() {
                            e.componentDidHide && e.componentDidHide();
                        },
                        onError: function(t) {
                            e.componentDidCatchError && e.componentDidCatchError(t);
                        },
                        onPageNotFound: function(t) {
                            e.componentDidNotFound && e.componentDidNotFound(t);
                        }
                    };
                    return Object.assign(t, e);
                },
                initNativeApi: qt,
                Events: a.Events,
                eventCenter: a.eventCenter,
                getEnv: a.getEnv,
                createRef: a.createRef,
                render: a.render,
                ENV_TYPE: a.ENV_TYPE,
                internal_safe_get: a.internal_safe_get,
                internal_safe_set: a.internal_safe_set,
                internal_inline_style: a.internal_inline_style,
                createComponent: function(t, e) {
                    var r = {}, n = Dt(t.defaultProps), i = new t(n);
                    i._constructor && i._constructor(n);
                    try {
                        a.Current.current = i, a.Current.index = 0, i.state = i._createData() || i.state;
                    } catch (r) {
                        r = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(r);
                        e ? console.warn("[Taro warn] 请给页面提供初始 `state` 以提高初次渲染性能！") : console.warn("[Taro warn] 请给组件提供一个 `defaultProps` 以提高初次渲染性能！"), 
                        console.warn(r);
                    }
                    var o = {
                        data: r = Object.assign({}, r, i.props, i.state),
                        created: function() {
                            var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            e && xt(wt) ? (this.$component = St(wt, !0), this.$component.$componentType = "PAGE") : this.$component = new t({}, e), 
                            this.$component._init(this), this.$component.render = this.$component._createData, 
                            this.$component.__propTypes = t.propTypes, Object.assign(this.$component.$router.params, r);
                        },
                        attached: function() {
                            var r, n, i;
                            e && ({}, i = (n = xt(this.data[Ct])) ? Object.assign({}, t.defaultParams, St(this.data[Ct], !0)) : function(t, e) {
                                var r, n = 1 < arguments.length && void 0 !== e ? e : {}, i = {};
                                for (r in n) i[r] = (r in t ? t : n)[r];
                                return i;
                            }(this.data, t.defaultParams), xt(Tt) && (r = St(Tt, !0), this.$component.$router.preload = r), 
                            Object.assign(this.$component.$router.params, i), xt(this.data[At]) ? this.$component.$preloadData = St(this.data[At], !0) : this.$component.$preloadData = null), 
                            !n && e || Mt.apply(this, [ t, e ]);
                        },
                        ready: function() {
                            e || this.$component.__mounted || (this.$component.__mounted = !0, It(this.$component, "componentDidMount"));
                        },
                        detached: function() {
                            var t = this.$component;
                            It(t, "componentWillUnmount"), t.hooks.forEach(function(t) {
                                lt(t.cleanup) && t.cleanup();
                            }), pt(t = t.$$renderPropsEvents) && t.forEach(function(t) {
                                return a.eventCenter.off(t);
                            });
                        }
                    };
                    return e ? (o.methods = o.methods || {}, o.methods.onLoad = function() {
                        this.$component.__isReady || (Object.assign(this.$component.$router.params, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}), 
                        Mt.apply(this, [ t, e ]));
                    }, o.methods.onReady = function() {
                        this.$component.__mounted = !0, It(this.$component, "componentDidMount");
                    }, o.methods.onShow = function() {
                        It(this.$component, "componentDidShow");
                    }, o.methods.onHide = function() {
                        It(this.$component, "componentDidHide");
                    }, kt.forEach(function(t) {
                        i[t] && "function" == typeof i[t] && (o.methods[t] = function() {
                            var e, r = this.$component;
                            if (r && r[t] && "function" == typeof r[t]) return (e = r[t]).call.apply(e, [ r ].concat(Array.prototype.slice.call(arguments)));
                        });
                    }), __wxRoute && Pt(__wxRoute, t)) : (o.pageLifetimes = o.pageLifetimes || {}, o.pageLifetimes.show = function() {
                        It(this.$component, "componentDidShow");
                    }, o.pageLifetimes.hide = function() {
                        It(this.$component, "componentDidHide");
                    }, o.pageLifetimes.resize = function() {
                        It(this.$component, "onResize");
                    }), function(t, e, r) {
                        if (t.properties = {}, r) {
                            t.properties[Ct] = {
                                type: null,
                                value: null
                            }, t.properties[At] = {
                                type: null,
                                value: null
                            };
                            var n, i = e.defaultParams || {};
                            for (n in i) i.hasOwnProperty(n) && (t.properties[n] = {
                                type: null,
                                value: null
                            });
                        }
                        t.properties.compid = {
                            type: null,
                            value: null,
                            observer: function(t, n) {
                                var i, a = this;
                                Mt.apply(this, [ e, r ]), n && n !== t && (i = this.data.extraProps, n = this.$component, 
                                Et.observers[t] = {
                                    component: n,
                                    ComponentClass: n.constructor
                                }, i = Dt(n.constructor.defaultProps, Et.map[t], n.props, i || null), this.$component.props = i, 
                                S(function() {
                                    a.$component._unsafeCallUpdate = !0, Lt(a.$component), a.$component._unsafeCallUpdate = !1;
                                }));
                            }
                        }, t.properties.extraProps = {
                            type: null,
                            value: null,
                            observer: function() {
                                var t, r = this;
                                this.$component && this.$component.__isReady && (t = Dt(e.defaultProps, {}, this.$component.props, this.data.extraProps), 
                                this.$component.props = t, S(function() {
                                    r.$component._unsafeCallUpdate = !0, Lt(r.$component), r.$component._unsafeCallUpdate = !1;
                                }));
                            }
                        };
                    }(o, t, e), function(t, e) {
                        e.behaviors && (t.behaviors = e.behaviors);
                    }(o, t), function(t, e) {
                        for (var r in e) "function" == typeof e[r] && (t[r] = e[r]);
                        Object.getOwnPropertyNames(e).forEach(function(r) {
                            [ "arguments", "caller", "length", "name", "prototype" ].indexOf(r) < 0 && "function" == typeof e[r] && (t[r] = e[r]);
                        });
                    }(o, t), function(t, e) {
                        e.options && (t.options = e.options);
                    }(o, t), function(t, e) {
                        (e = e.multipleSlots) && (t.options = f(f({}, t.options), {
                            multipleSlots: e
                        }));
                    }(o, t), t.$$events && function(t, e) {
                        t.methods = t.methods || {};
                        var r = t.methods;
                        e.forEach(function(t) {
                            !function(t, e) {
                                e[t] || (e[t] = function(e) {
                                    e && (e.preventDefault = function() {}, e.stopPropagation = function() {}, e.currentTarget = e.currentTarget || e.target || {}, 
                                    e.target && Object.assign(e.target, e.detail), Object.assign(e.currentTarget, e.detail));
                                    var r = this.$component;
                                    if (r && r[t]) {
                                        var n, i = r, a = -1 < t.indexOf("funPrivate"), o = [], s = [], h = !1, l = e.currentTarget.dataset || {}, p = {}, c = e.type.toLocaleLowerCase();
                                        return Object.keys(l).forEach(function(t) {
                                            var e = t.toLocaleLowerCase();
                                            /^e/.test(e) && 0 <= (e = e.replace(/^e/, "")).indexOf(c) && (e = e.replace(c, ""), 
                                            /^(a[a-z]|so)$/.test(e) && (p[e] = l[t]));
                                        }), e.detail && e.detail.__arguments && 0 < e.detail.__arguments.length && (o = e.detail.__arguments), 
                                        n = a ? (a = null, "so" in p && ("this" !== p.so && (a = p.so), h = !0, delete p.so), 
                                        0 < o.length && (!h && o[0] && (i = o[0]), o.shift()), ht(p) || (s = Object.keys(p).sort().map(function(t) {
                                            return p[t];
                                        })), [ a ].concat(g(s), g(o), [ e ])) : ("so" in p && ("this" !== p.so && (i = p.so), 
                                        h = !0, delete p.so), 0 < o.length && (!h && o[0] && (i = o[0]), o.shift()), ht(p) || (s = Object.keys(p).sort().map(function(t) {
                                            return p[t];
                                        })), [].concat(g(s), g(o), [ e ])), r[t].apply(i, n);
                                    }
                                });
                            }(t, r);
                        });
                    }(o, t.$$events), t.externalClasses && t.externalClasses.length && (o.externalClasses = t.externalClasses), 
                    o;
                },
                internal_get_original: a.internal_get_original,
                handleLoopRef: a.handleLoopRef(function(t, e, r) {
                    return t && (n = "component" === r ? (n = t.selectComponent(e)) ? n.$component || n : null : wx.createSelectorQuery().in(t).select(e)) ? n : null;
                    var n;
                }),
                propsManager: Et,
                interceptors: a.interceptors,
                RefsArray: a.RefsArray,
                genCompid: function(t, e) {
                    if (!a.Current || !a.Current.current || !a.Current.current.$scope) return [];
                    var r = mt.get(t);
                    if (e) {
                        var n = vt();
                        return mt.set(t, n), [ r, n ];
                    }
                    return n = r || vt(), r || mt.set(t, n), [ null, n ];
                },
                useEffect: a.useEffect,
                useLayoutEffect: a.useLayoutEffect,
                useReducer: a.useReducer,
                useState: a.useState,
                useDidShow: a.useDidShow,
                useDidHide: a.useDidHide,
                usePullDownRefresh: a.usePullDownRefresh,
                useReachBottom: a.useReachBottom,
                usePageScroll: a.usePageScroll,
                useResize: a.useResize,
                useShareAppMessage: a.useShareAppMessage,
                useTabItemTap: a.useTabItemTap,
                useRouter: a.useRouter,
                useScope: a.useScope,
                useRef: a.useRef,
                useCallback: a.useCallback,
                useMemo: a.useMemo,
                useImperativeHandle: a.useImperativeHandle,
                useContext: a.useContext,
                createContext: a.createContext,
                memo: a.memo,
                shallowEqual: _,
                setIsUsingDiff: a.setIsUsingDiff
            }), e.Taro = n, e.default = n;
        }).call(this, r(37), r(447));
    },
    447: function(t, e) {
        var r, n;
        t = t.exports = {};
        function i() {
            throw new Error("setTimeout has not been defined");
        }
        function a() {
            throw new Error("clearTimeout has not been defined");
        }
        function o(t) {
            if (r === setTimeout) return setTimeout(t, 0);
            if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
            try {
                return r(t, 0);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                try {
                    return r.call(null, t, 0);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    return r.call(this, t, 0);
                }
            }
        }
        !function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : i;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                r = i;
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                n = a;
            }
        }();
        var s, h = [], l = !1, p = -1;
        function c() {
            l && s && (l = !1, s.length ? h = s.concat(h) : p = -1, h.length && f());
        }
        function f() {
            if (!l) {
                var t = o(c);
                l = !0;
                for (var e = h.length; e; ) {
                    for (s = h, h = []; ++p < e; ) s && s[p].run();
                    p = -1, e = h.length;
                }
                s = null, l = !1, function(t) {
                    if (n === clearTimeout) return clearTimeout(t);
                    if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                    try {
                        n(t);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        try {
                            return n.call(null, t);
                        } catch (e) {
                            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                            return n.call(this, t);
                        }
                    }
                }(t);
            }
        }
        function u(t, e) {
            this.fun = t, this.array = e;
        }
        function m() {}
        t.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
            h.push(new u(t, e)), 1 !== h.length || l || o(f);
        }, u.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", 
        t.versions = {}, t.on = m, t.addListener = m, t.once = m, t.off = m, t.removeListener = m, 
        t.removeAllListeners = m, t.emit = m, t.prependListener = m, t.prependOnceListener = m, 
        t.listeners = function(t) {
            return [];
        }, t.binding = function(t) {
            throw new Error("process.binding is not supported");
        }, t.cwd = function() {
            return "/";
        }, t.chdir = function(t) {
            throw new Error("process.chdir is not supported");
        }, t.umask = function() {
            return 0;
        };
    },
    448: function(t, e, r) {
        var n = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
            return _typeof4(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, a = r(0);
        (r = i = i || {}).WillMount = "componentWillMount", r.DidMount = "componentDidMount", 
        r.DidShow = "componentDidShow", r.DidHide = "componentDidHide", r.WillUnmount = "componentWillUnmount";
        var o = {};
        o[i.WillMount] = [ "created", "onLoad", "onLanuch" ], o[i.DidMount] = [ "onReady", "ready", "attached" ], 
        o[i.DidShow] = [ "onShow" ], o[i.DidHide] = [ "onHide" ], o[i.WillUnmount] = [ "detached", "onUnload" ];
        var s, h = new Set();
        for (s in o) o[s].forEach(function(t) {
            return h.add(t);
        });
        function l(t, e) {
            return !!t && (r._length = t.length, r);
            function r(r) {
                var n = arguments.length;
                return n ? 1 < n ? t.apply(e, arguments) : t.call(e, r) : t.call(e);
            }
        }
        function p() {
            for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        }
        var c = {
            enumerable: !0,
            configurable: !0,
            get: p,
            set: p
        };
        function f(t, e, r) {
            c.get = function() {
                return this[e][r];
            }, c.set = function(t) {
                this[e][r] = t;
            }, Object.defineProperty(t, r, c);
        }
        var u = "[object Array]", m = "[object Object]";
        function d(t, e, r) {
            "[object Function]" != y(r) && (t[e] = r);
        }
        function y(t) {
            return Object.prototype.toString.call(t);
        }
        var g = JSON, v = Array.isArray || function(t) {
            return "[object Array]" === {}.toString.call(t);
        }, b = Object.keys || function(t) {
            var e, r = Object.prototype.hasOwnProperty || function() {
                return !0;
            }, n = [];
            for (e in t) r.call(t, e) && n.push(e);
            return n;
        };
        function _(t, e, r) {
            Object.defineProperty(t, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return "props" === r ? t.props : Object.assign(Object.assign({}, t.state), t.props);
                }
            });
        }
        function P(t) {
            return "function" == typeof t;
        }
        e.default = function(t) {
            return function(e) {
                var r, s = function(e) {
                    function r(r) {
                        var i = this;
                        e.call(this, r), this._observeProps = [], this.willMounts = [], this.didMounts = [], 
                        this.didHides = [], this.didShows = [], this.willUnmounts = [], this.safeExecute = function(t) {
                            for (var e = [], r = arguments.length - 1; 0 < r--; ) e[r] = arguments[r + 1];
                            P(t) && t.apply(i, e);
                        }, this.selectComponent = function() {
                            for (var t, e = [], r = arguments.length; r--; ) e[r] = arguments[r];
                            i.$scope && i.$scope.selectComponent ? (t = i.$scope).selectComponent.apply(t, e) : console.error("this.$scope 下没有 selectComponent 方法");
                        }, this.getRelationNodes = function() {
                            for (var t, e = [], r = arguments.length; r--; ) e[r] = arguments[r];
                            i.$scope && i.$scope.getRelationNodes ? (t = i.$scope).getRelationNodes.apply(t, e) : console.error("this.$scope 下没有 getRelationNodes 方法");
                        }, this.setData = function(t, e) {
                            var r;
                            i.observers && Object.keys(Object.keys(i.observers)) && (r = function(t) {
                                return g.parse(function(t, e) {
                                    "function" == typeof (e = e || {}) && (e = {
                                        cmp: e
                                    });
                                    var r = e.space || "";
                                    "number" == typeof r && (r = Array(r + 1).join(" "));
                                    var i = "boolean" == typeof e.cycles && e.cycles, a = e.replacer || function(t, e) {
                                        return e;
                                    }, o = e.cmp && function(t) {
                                        return function(e) {
                                            return function(r, n) {
                                                return r = {
                                                    key: r,
                                                    value: e[r]
                                                }, n = {
                                                    key: n,
                                                    value: e[n]
                                                }, t(r, n);
                                            };
                                        };
                                    }(e.cmp), s = [];
                                    return function t(e, h, l, p) {
                                        var c = r ? "\n" + new Array(p + 1).join(r) : "", f = r ? ": " : ":";
                                        if (l && l.toJSON && "function" == typeof l.toJSON && (l = l.toJSON()), void 0 !== (l = a.call(e, h, l))) {
                                            if ("object" !== (void 0 === l ? "undefined" : n(l)) || null === l) return g.stringify(l);
                                            if (v(l)) {
                                                for (var u = [], m = 0; m < l.length; m++) {
                                                    var d = t(l, m, l[m], p + 1) || g.stringify(null);
                                                    u.push(c + r + d);
                                                }
                                                return "[" + u.join(",") + c + "]";
                                            }
                                            if (-1 !== s.indexOf(l)) {
                                                if (i) return g.stringify("__cycle__");
                                                throw new TypeError("Converting circular structure to JSON");
                                            }
                                            s.push(l);
                                            for (var y = b(l).sort(o && o(l)), _ = [], P = 0; P < y.length; P++) {
                                                var S = y[P], x = t(l, S, l[S], p + 1);
                                                x && (x = g.stringify(S) + f + x, _.push(c + r + x));
                                            }
                                            return s.splice(s.indexOf(l), 1), "{" + _.join(",") + c + "}";
                                        }
                                    }({
                                        "": t
                                    }, "", t, 0);
                                }(t));
                            }(i.state)), Object.keys(t).forEach(function(e) {
                                a.internal_safe_set(i.state, e, t[e]);
                            }), a.setIsUsingDiff(!1), i.setState(i.state, function() {
                                a.setIsUsingDiff(!0), i.triggerObservers(i.state, r), e && e.call(i);
                            });
                        }, this.triggerEvent = function(t) {
                            for (var e = [], r = arguments.length - 1; 0 < r--; ) e[r] = arguments[r + 1];
                            P(t = i.props["on" + t[0].slice(0, 1).toUpperCase() + t.slice(1)]) && t.apply(i, e.map(function(t) {
                                return {
                                    detail: t
                                };
                            }));
                        }, this.init(t), _(this, "data", "state"), _(this, "properties", "props");
                    }
                    return e && (r.__proto__ = e), ((r.prototype = Object.create(e && e.prototype)).constructor = r).prototype.initProps = function(t) {
                        for (var e in t) {
                            var r;
                            t.hasOwnProperty(e) && (P(r = t[e]) || r.observer && this._observeProps.push({
                                name: e,
                                observer: r.observer
                            }), f(this, "props", e));
                        }
                    }, r.prototype.init = function(t) {
                        for (var e in t) {
                            var r, n = t[e];
                            switch (e) {
                              case "externalClasses":
                                break;

                              case "data":
                                this.state = n;
                                for (var i = Object.keys(this.state), a = i.length; a--; ) f(this, "state", i[a]);
                                break;

                              case "properties":
                                this.initProps(n);
                                break;

                              case "methods":
                                for (var o in n) {
                                    var s = n[o];
                                    this[o] = l(s, this);
                                }
                                break;

                              case "behaviors":
                                break;

                              case "lifetimes":
                                for (var p in n) {
                                    var c = n[p];
                                    this.initLifeCycles(p, c);
                                }
                                break;

                              default:
                                h.has(e) ? (r = t[e], this.initLifeCycles(e, r)) : P(n) ? this[e] = l(n, this) : this[e] = n;
                            }
                        }
                    }, r.prototype.initLifeCycles = function(t, e) {
                        for (var r in o) if (-1 !== o[r].indexOf(t)) switch (r) {
                          case i.DidHide:
                            this.didHides.push(e);
                            break;

                          case i.DidMount:
                            this.didMounts.push(e);
                            break;

                          case i.DidShow:
                            this.didShows.push(e);
                            break;

                          case i.WillMount:
                            this.willMounts.push(e);
                            break;

                          case i.WillUnmount:
                            this.willUnmounts.push(e);
                        }
                        P(this[t]) || (this[t] = e);
                    }, r.prototype.executeLifeCycles = function(t) {
                        for (var e, r = [], n = arguments.length - 1; 0 < n--; ) r[n] = arguments[n + 1];
                        for (var i = 0; i < t.length; i++) {
                            var a = t[i];
                            (e = this).safeExecute.apply(e, [ a ].concat(r));
                        }
                    }, r.prototype.triggerObservers = function(t, e) {
                        var r = this.observers;
                        if (null != r && 0 !== Object.keys(r).length) {
                            e = function(t, e) {
                                var r = {};
                                return function t(e, r) {
                                    if (e !== r) {
                                        var n = y(e), i = y(r);
                                        if (n == m && i == m) for (var a in r) {
                                            var o = e[a];
                                            void 0 === o ? e[a] = null : t(o, r[a]);
                                        } else n == u && i == u && e.length >= r.length && r.forEach(function(r, n) {
                                            t(e[n], r);
                                        });
                                    }
                                }(t, e), function t(e, r, n, i) {
                                    if (e !== r) {
                                        var a = y(e), o = y(r);
                                        if (a == m) if (o != m || Object.keys(e).length < Object.keys(r).length) d(i, n, e); else {
                                            var s, h = function(a) {
                                                var o = e[a], s = r[a], h = y(o), l = y(s);
                                                if (h != u && h != m) o != r[a] && d(i, ("" == n ? "" : n + ".") + a, o); else if (h == u) l != u || o.length < s.length ? d(i, ("" == n ? "" : n + ".") + a, o) : o.forEach(function(e, r) {
                                                    t(e, s[r], ("" == n ? "" : n + ".") + a + "[" + r + "]", i);
                                                }); else if (h == m) if (l != m || Object.keys(o).length < Object.keys(s).length) d(i, ("" == n ? "" : n + ".") + a, o); else for (var p in o) t(o[p], s[p], ("" == n ? "" : n + ".") + a + "." + p, i);
                                            };
                                            for (s in e) h(s);
                                        } else a != u || o != u || e.length < r.length ? d(i, n, e) : e.forEach(function(e, a) {
                                            t(e, r[a], n + "[" + a + "]", i);
                                        });
                                    }
                                }(t, e, "", r), r;
                            }(t, e);
                            var n = Object.keys(e);
                            if (0 !== n.length) for (var i in r) {
                                for (var o = i.split(",").map(function(t) {
                                    return t.trim();
                                }), s = [], h = 0; h < o.length; h++) for (var l = o[h], p = 0; p < n.length; p++) {
                                    var c = n[p];
                                    (c.startsWith(l) || l.startsWith(c) && l.endsWith("]")) && s.push(a.internal_safe_get(t, l));
                                }
                                s.length && r[i].apply(this, s);
                            }
                        }
                    }, r.prototype.componentWillMount = function() {
                        var t = this;
                        this._observeProps.forEach(function(e) {
                            var r = e.name, n = e.observer, i = t.props[r];
                            "string" == typeof n ? P(e = t[n]) && e.call(t, i, i, r) : P(n) && n.call(t, i, i, r);
                        }), this.safeExecute.call(this, e.prototype.componentWillMount), this.executeLifeCycles(this.willMounts, this.$router.params || {});
                    }, r.prototype.componentDidMount = function() {
                        this.safeExecute.call(this, e.prototype.componentDidMount), this.executeLifeCycles(this.didMounts);
                    }, r.prototype.componentWillUnmount = function() {
                        this.safeExecute.call(this, e.prototype.componentWillUnmount), this.executeLifeCycles(this.willUnmounts);
                    }, r.prototype.componentDidHide = function() {
                        this.safeExecute.call(this, e.prototype.componentDidHide), this.executeLifeCycles(this.didHides);
                    }, r.prototype.componentDidShow = function() {
                        this.safeExecute.call(this, e.prototype.componentDidShow), this.executeLifeCycles(this.didShows, this.$router.params || {});
                    }, r.prototype.componentWillReceiveProps = function(t) {
                        var r = this;
                        this.triggerObservers(t, this.props), this._observeProps.forEach(function(e) {
                            var n = e.name, i = e.observer, a = r.props[n], o = t[n];
                            !function(t, e) {
                                return JSON.stringify(t) === JSON.stringify(e);
                            }(a, o) && ("string" == typeof i ? P(e = r[i]) && e.call(r, o, a, n) : P(i) && i.call(r, o, a, n));
                        }), this.safeExecute.call(this, e.prototype.componentWillReceiveProps);
                    }, r;
                }(e), p = t.properties;
                if (p) for (var c in p) {
                    var S = p[c];
                    null == S || P(S) || void 0 !== S.value && (s.defaultProps = Object.assign(((r = {})[c] = S.value, 
                    r), s.defaultProps));
                }
                return [ "externalClasses", "relations", "options" ].forEach(function(e) {
                    var r = t[e];
                    null != r && (s[e] = r);
                }), s;
            };
        };
    },
    450: function(t, e, r) {
        (function(t) {
            var n = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
                return _typeof4(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = r(51), a = function(t) {
                return t && "object" === (void 0 === t ? "undefined" : n(t)) && "default" in t ? t.default : t;
            }(i), o = null;
            t = t || {};
            function s() {
                return o;
            }
            function h(t) {
                o = t;
            }
            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t) {
                    return void 0 === t ? "undefined" : n(t);
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : n(t);
                })(t);
            }
            function p(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(t, n.key, n);
                }
            }
            function f(t, e, r) {
                return e && c(t.prototype, e), r && c(t, r), t;
            }
            function u(t) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            function m(t, e) {
                return (m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }
            function d(t, e) {
                return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }(t) : e;
            }
            function y(t, e, r) {
                return (y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, r) {
                    if (t = function(t, e) {
                        for (;!Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); ) ;
                        return t;
                    }(t, e)) return (e = Object.getOwnPropertyDescriptor(t, e)).get ? e.get.call(r) : e.value;
                })(t, e, r || t);
            }
            function g(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var r = [], n = !0, i = !1, a = void 0;
                        try {
                            for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value), 
                            !e || r.length !== e); n = !0) ;
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            i = !0, a = t;
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (i) throw a;
                            }
                        }
                        return r;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return v(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Map" === (r = "Object" === r && t.constructor ? t.constructor.name : r) || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function b(t) {
                return null != t && "object" === l(t) && !Array.isArray(t);
            }
            function _(t, e) {
                var r = Object.assign({}, t);
                if (b(t) && b(e)) for (var n in e) b(t[n]) && b(e[n]) ? r[n] = _(t[n], e[n]) : r[n] = e[n];
                return r;
            }
            function P(t, e) {
                var r = o, n = r.dispatch, i = function(t, e) {
                    return "function" == typeof t ? t(e) : b(t) ? Object.keys(t).reduce(function(r, n) {
                        var i = t[n];
                        return "function" == typeof i && (r[n] = function() {
                            return e(i.apply(void 0, arguments));
                        }), r;
                    }, {}) : {};
                }(e, n);
                function a() {
                    var e = this, n = !1, a = t(r.getState(), this.props), o = Object.assign({}, this.props);
                    Object.keys(a).forEach(function(t) {
                        var r = a[t];
                        b(r) && b(i[t]) && (r = _(r, i[t])), e.props[t] !== r && (e.props[t] = r, n = !0);
                    }), n && (this._dirty || (this.prevProps = o), this._unsafeCallUpdate = !0, this.setState({}, function() {
                        delete e._unsafeCallUpdate;
                    }));
                }
                return i.dispatch = n, function(e) {
                    var n = t(r.getState(), e.defaultProps || {});
                    e.properties && n && Object.keys(n).forEach(function(t) {
                        delete e.properties[t];
                    });
                    var s = null;
                    return function() {
                        !function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && m(t, e);
                        }(h, e);
                        var n = function(t) {
                            var e = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                                    !0;
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    return !1;
                                }
                            }();
                            return function() {
                                var r, n = u(t);
                                return d(this, e ? (r = u(this).constructor, Reflect.construct(n, arguments, r)) : n.apply(this, arguments));
                            };
                        }(h);
                        function h(e, a) {
                            var o;
                            return p(this, h), o = n.call(this, Object.assign.apply(Object, Array.prototype.slice.call(arguments).concat([ _(t(r.getState(), e), i) ])), a), 
                            Object.keys(i).forEach(function(t) {
                                o["__event_".concat(t)] = i[t];
                            }), o;
                        }
                        return f(h, [ {
                            key: "_constructor",
                            value: function() {
                                var e;
                                this.$scope && (e = o, Object.assign(this.props, _(t(e.getState(), this.props), i)), 
                                s = e.subscribe(a.bind(this))), y(u(h.prototype), "_constructor", this) && y(u(h.prototype), "_constructor", this).call(this, this.props);
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                y(u(h.prototype), "componentWillUnmount", this) && y(u(h.prototype), "componentWillUnmount", this).call(this), 
                                s && s(), s = null;
                            }
                        } ]), h;
                    }();
                };
            }
            Object.getPrototypeOf(t);
            t = function t() {
                p(this, t);
            };
            var S = a.createContext(null);
            function x() {
                return i.useContext(S);
            }
            function E() {
                return x().store;
            }
            function C() {
                return E().dispatch;
            }
            function A(t) {
                t();
            }
            var T = {
                notify: function() {}
            }, w = function() {
                function t(e, r) {
                    p(this, t), this.store = e, this.parentSub = r, this.unsubscribe = null, this.listeners = T, 
                    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
                }
                return f(t, [ {
                    key: "addNestedSub",
                    value: function(t) {
                        return this.trySubscribe(), this.listeners.subscribe(t);
                    }
                }, {
                    key: "notifyNestedSubs",
                    value: function() {
                        this.listeners.notify();
                    }
                }, {
                    key: "handleChangeWrapper",
                    value: function() {
                        this.onStateChange && this.onStateChange();
                    }
                }, {
                    key: "isSubscribed",
                    value: function() {
                        return Boolean(this.unsubscribe);
                    }
                }, {
                    key: "trySubscribe",
                    value: function() {
                        this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), 
                        this.listeners = function() {
                            var t = A, e = [], r = [];
                            return {
                                clear: function() {
                                    e = r = null;
                                },
                                notify: function() {
                                    var n = e = r;
                                    t(function() {
                                        for (var t = 0; t < n.length; t++) n[t]();
                                    });
                                },
                                get: function() {
                                    return r;
                                },
                                subscribe: function(t) {
                                    var n = !0;
                                    return (r = r === e ? e.slice() : r).push(t), function() {
                                        n && null !== e && (n = !1, (r = r === e ? e.slice() : r).splice(r.indexOf(t), 1));
                                    };
                                }
                            };
                        }());
                    }
                }, {
                    key: "tryUnsubscribe",
                    value: function() {
                        this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), 
                        this.listeners = T);
                    }
                } ]), t;
            }();
            function k(t, e) {
                return t === e;
            }
            function D(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : k;
                !function(t, e, r, n, i, a, o, s) {
                    var h, l, p;
                    if (!t) throw void 0 === e ? p = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.") : (h = [ r, n, i, a, o, s ], 
                    l = 0, (p = new Error(e.replace(/%s/g, function() {
                        return h[l++];
                    }))).name = "Invariant Violation"), p.framesToPop = 1, p;
                }(t, "You must pass a selector to useSelectors");
                var r, n = x(), a = n.store, o = n.subscription, s = g(i.useReducer(function(t) {
                    return t + 1;
                }, 0), 2)[1], h = i.useMemo(function() {
                    return new w(a, o);
                }, [ a, o ]), l = i.useRef(), p = i.useRef(), c = i.useRef();
                try {
                    r = t !== p.current || l.current ? t(a.getState()) : c.current;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    throw n = "An error occured while selecting the store state: ".concat(t.message, "."), 
                    l.current && (n += "\nThe error may be correlated with this previous error:\n".concat(l.current.stack, "\n\nOriginal stack trace:")), 
                    new Error(n);
                }
                return i.useEffect(function() {
                    p.current = t, c.current = r, l.current = void 0;
                }), i.useEffect(function() {
                    function t() {
                        try {
                            var t = p.current(a.getState());
                            if (e(t, c.current)) return;
                            c.current = t;
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            l.current = t;
                        }
                        s({});
                    }
                    return h.onStateChange = t, h.trySubscribe(), t(), function() {
                        return h.tryUnsubscribe();
                    };
                }, [ a, h ]), r;
            }
            e.default = {
                connect: P,
                Provider: t,
                getStore: s,
                setStore: h,
                useDispatch: C,
                useSelector: D,
                useStore: E,
                ReduxContext: S
            }, e.connect = P, e.Provider = t, e.getStore = s, e.setStore = h, e.useDispatch = C, 
            e.useSelector = D, e.useStore = E, e.ReduxContext = S;
        }).call(this, r(37));
    },
    51: function(t, e, r) {
        r.r(e), function(t) {
            r.d(e, "Component", function() {
                return g;
            }), r.d(e, "Events", function() {
                return ft;
            }), r.d(e, "eventCenter", function() {
                return ce;
            }), r.d(e, "getEnv", function() {
                return lt;
            }), r.d(e, "ENV_TYPE", function() {
                return st;
            }), r.d(e, "render", function() {
                return ut;
            }), r.d(e, "internal_safe_get", function() {
                return rt;
            }), r.d(e, "internal_safe_set", function() {
                return nt;
            }), r.d(e, "internal_inline_style", function() {
                return ot;
            }), r.d(e, "internal_get_original", function() {
                return ct;
            }), r.d(e, "internal_force_update", function() {
                return Ft;
            }), r.d(e, "noPromiseApis", function() {
                return xt;
            }), r.d(e, "onAndSyncApis", function() {
                return St;
            }), r.d(e, "otherApis", function() {
                return Et;
            }), r.d(e, "initPxTransform", function() {
                return Ct;
            }), r.d(e, "createRef", function() {
                return mt;
            }), r.d(e, "commitAttachRef", function() {
                return dt;
            }), r.d(e, "detachAllRef", function() {
                return yt;
            }), r.d(e, "Link", function() {
                return _t;
            }), r.d(e, "interceptors", function() {
                return Pt;
            }), r.d(e, "RefsArray", function() {
                return gt;
            }), r.d(e, "handleLoopRef", function() {
                return vt;
            }), r.d(e, "Current", function() {
                return Xt;
            }), r.d(e, "useEffect", function() {
                return Zt;
            }), r.d(e, "useLayoutEffect", function() {
                return te;
            }), r.d(e, "useReducer", function() {
                return Ht;
            }), r.d(e, "useState", function() {
                return Rt;
            }), r.d(e, "useDidShow", function() {
                return jt;
            }), r.d(e, "useDidHide", function() {
                return Vt;
            }), r.d(e, "usePullDownRefresh", function() {
                return Bt;
            }), r.d(e, "useReachBottom", function() {
                return Nt;
            }), r.d(e, "usePageScroll", function() {
                return zt;
            }), r.d(e, "useResize", function() {
                return Gt;
            }), r.d(e, "useShareAppMessage", function() {
                return $t;
            }), r.d(e, "useTabItemTap", function() {
                return Wt;
            }), r.d(e, "useRouter", function() {
                return qt;
            }), r.d(e, "useScope", function() {
                return Ut;
            }), r.d(e, "useRef", function() {
                return ee;
            }), r.d(e, "useCallback", function() {
                return ne;
            }), r.d(e, "useMemo", function() {
                return re;
            }), r.d(e, "useImperativeHandle", function() {
                return ie;
            }), r.d(e, "invokeEffects", function() {
                return Kt;
            }), r.d(e, "useContext", function() {
                return ae;
            }), r.d(e, "createContext", function() {
                return he;
            }), r.d(e, "memo", function() {
                return pe;
            }), r.d(e, "getIsUsingDiff", function() {
                return It;
            }), r.d(e, "setIsUsingDiff", function() {
                return Mt;
            });
            var n = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
                return _typeof4(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
            };
            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? function(t) {
                    return void 0 === t ? "undefined" : n(t);
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : n(t);
                })(t);
            }
            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                    Object.defineProperty(t, n.key, n);
                }
            }
            function s(t, e, r) {
                return e && o(t.prototype, e), r && o(t, r), t;
            }
            function h(t, e) {
                var r, n = Object.keys(t);
                return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r)), n;
            }
            function l(t) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                })(t);
            }
            function p(t, e) {
                return (p = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t;
                })(t, e);
            }
            function c() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
                    !0;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return !1;
                }
            }
            function f(t, e, r) {
                return (f = c() ? Reflect.construct : function(t, e, r) {
                    var n = [ null ];
                    return n.push.apply(n, e), n = new (Function.bind.apply(t, n))(), r && p(n, r.prototype), 
                    n;
                }).apply(null, arguments);
            }
            function u(t) {
                var e = "function" == typeof Map ? new Map() : void 0;
                return (u = function(t) {
                    if (null === t || !function(t) {
                        return -1 !== Function.toString.call(t).indexOf("[native code]");
                    }(t)) return t;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, r);
                    }
                    function r() {
                        return f(t, arguments, l(this).constructor);
                    }
                    return r.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), p(r, t);
                })(t);
            }
            function m(t, e) {
                return !e || "object" !== (void 0 === e ? "undefined" : n(e)) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }(t) : e;
            }
            function d(t) {
                return function(t) {
                    if (Array.isArray(t)) return y(t);
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return y(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Map" === (r = "Object" === r && t.constructor ? t.constructor.name : r) || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? y(t, e) : void 0;
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            "function" != typeof Object.assign && (Object.assign = function(t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    if (null != n) for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            }), "function" != typeof Object.defineProperties && (Object.defineProperties = function(t, e) {
                if ("object" !== i(t) || null === t) throw new TypeError("bad obj");
                e = Object(e);
                for (var r = Object.keys(e), n = [], a = 0; a < r.length; a++) n.push([ r[a], function(t) {
                    function e(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e);
                    }
                    function r(t) {
                        return "function" == typeof t;
                    }
                    if ("object" !== i(t) || null === t) throw new TypeError("bad desc");
                    var n = {};
                    if (e(t, "enumerable") && (n.enumerable = !!t.enumerable), e(t, "configurable") && (n.configurable = !!t.configurable), 
                    e(t, "value") && (n.value = t.value), e(t, "writable") && (n.writable = !!t.writable), 
                    e(t, "get")) {
                        var a = t.get;
                        if (!r(a) && void 0 !== a) throw new TypeError("bad get");
                        n.get = a;
                    }
                    if (e(t, "set")) {
                        if (!r(t = t.set) && void 0 !== t) throw new TypeError("bad set");
                        n.set = t;
                    }
                    if (("get" in n || "set" in n) && ("value" in n || "writable" in n)) throw new TypeError("identity-confused descriptor");
                    return n;
                }(e[r[a]]) ]);
                for (a = 0; a < n.length; a++) Object.defineProperty(t, n[a][0], n[a][1]);
                return t;
            });
            var g = function t(e) {
                a(this, t), this.state = {}, this.props = e || {};
            }, v = "__lodash_hash_undefined__", b = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _ = /^\w*$/, P = /^\./, S = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, x = /\\(\\)?/g, E = /^\[object .+?Constructor\]$/, C = "object" === (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t, A = "object" === ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self, T = C || A || {
                Function: Function,
                Boolean: Boolean,
                Object: Object,
                Number: Number,
                Array: Array,
                Date: Date,
                String: String,
                Symbol: Symbol,
                Error: Error,
                TypeError: TypeError,
                Map: Map,
                Set: Set,
                WeakMap: WeakMap,
                WeakSet: WeakSet,
                ArrayBuffer: ArrayBuffer,
                Math: Math,
                Promise: Promise,
                RegExp: RegExp,
                DataView: DataView,
                isFinite: isFinite,
                parseInt: parseInt,
                parseFloat: parseFloat,
                Float32Array: Float32Array,
                Float64Array: Float64Array,
                Int8Array: Int8Array,
                Int16Array: Int16Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array,
                Uint16Array: Uint16Array,
                Uint32Array: Uint32Array,
                Uint8ClampedArray: Uint8ClampedArray,
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                setInterval: setInterval,
                clearInterval: clearInterval
            }, w = /^(?:0|[1-9]\d*)$/, k = Array.prototype, D = Function.prototype, I = (C = Object.prototype, 
            A = T["__core-js_shared__"], (A = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "")) ? "Symbol(src)_1." + A : ""), M = D.toString, F = C.hasOwnProperty, O = C.toString, R = RegExp("^" + M.call(F).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), L = (C = T.Symbol, 
            k.splice), j = U(T, "Map"), V = U(Object, "create"), B = (C = C ? C.prototype : void 0) ? C.toString : void 0;
            function N(t) {
                var e = -1, r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function z(t) {
                var e = -1, r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function G(t) {
                var e = -1, r = t ? t.length : 0;
                for (this.clear(); ++e < r; ) {
                    var n = t[e];
                    this.set(n[0], n[1]);
                }
            }
            function $(t, e) {
                for (var r = t.length; r--; ) if (X(t[r][0], e)) return r;
                return -1;
            }
            function W(t) {
                return J(t) ? t : H(t);
            }
            function q(t, e) {
                return t = t.__data__, function(t) {
                    var e = i(t);
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
                }(e) ? t["string" == typeof e ? "string" : "hash"] : t.map;
            }
            function U(t, e) {
                return function(t) {
                    return Q(t) && !function(t) {
                        return !!I && I in t;
                    }(t) && (function(t) {
                        return "[object Function]" == (t = Q(t) ? O.call(t) : "") || "[object GeneratorFunction]" == t;
                    }(t) || function(t) {
                        var e = !1;
                        if (null != t && "function" != typeof t.toString) try {
                            e = !!(t + "");
                        } catch (t) {}
                        return e;
                    }(t) ? R : E).test(function(t) {
                        if (null != t) {
                            try {
                                return M.call(t);
                            } catch (t) {}
                            try {
                                return t + "";
                            } catch (t) {}
                        }
                        return "";
                    }(t));
                }(e = function(t, e) {
                    return null == t ? void 0 : t[e];
                }(t, e)) ? e : void 0;
            }
            N.prototype.clear = function() {
                this.__data__ = V ? V(null) : {};
            }, N.prototype.delete = function(t) {
                return this.has(t) && delete this.__data__[t];
            }, N.prototype.get = function(t) {
                var e = this.__data__;
                if (V) {
                    var r = e[t];
                    return r === v ? void 0 : r;
                }
                return F.call(e, t) ? e[t] : void 0;
            }, N.prototype.has = function(t) {
                var e = this.__data__;
                return V ? void 0 !== e[t] : F.call(e, t);
            }, N.prototype.set = function(t, e) {
                return this.__data__[t] = V && void 0 === e ? v : e, this;
            }, z.prototype.clear = function() {
                this.__data__ = [];
            }, z.prototype.delete = function(t) {
                var e = this.__data__;
                return !((t = $(e, t)) < 0 || (t == e.length - 1 ? e.pop() : L.call(e, t, 1), 0));
            }, z.prototype.get = function(t) {
                var e = this.__data__;
                return (t = $(e, t)) < 0 ? void 0 : e[t][1];
            }, z.prototype.has = function(t) {
                return -1 < $(this.__data__, t);
            }, z.prototype.set = function(t, e) {
                var r = this.__data__, n = $(r, t);
                return n < 0 ? r.push([ t, e ]) : r[n][1] = e, this;
            }, G.prototype.clear = function() {
                this.__data__ = {
                    hash: new N(),
                    map: new (j || z)(),
                    string: new N()
                };
            }, G.prototype.delete = function(t) {
                return q(this, t).delete(t);
            }, G.prototype.get = function(t) {
                return q(this, t).get(t);
            }, G.prototype.has = function(t) {
                return q(this, t).has(t);
            }, G.prototype.set = function(t, e) {
                return q(this, t).set(t, e), this;
            };
            var H = K(function(t) {
                t = function(t) {
                    return null == t ? "" : function(t) {
                        if ("string" == typeof t) return t;
                        if (Z(t)) return B ? B.call(t) : "";
                        var e = t + "";
                        return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
                    }(t);
                }(t);
                var e = [];
                return P.test(t) && e.push(""), t.replace(S, function(t, r, n, i) {
                    e.push(n ? i.replace(x, "$1") : r || t);
                }), e;
            });
            function Y(t) {
                if ("string" == typeof t || Z(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
            }
            function K(t, e) {
                if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
                function r() {
                    var n = arguments, i = e ? e.apply(this, n) : n[0], a = r.cache;
                    return a.has(i) ? a.get(i) : (n = t.apply(this, n), r.cache = a.set(i, n), n);
                }
                return r.cache = new (K.Cache || G)(), r;
            }
            function X(t, e) {
                return t === e || t != t && e != e;
            }
            K.Cache = G;
            var J = Array.isArray;
            function Q(t) {
                var e = i(t);
                return t && ("object" == e || "function" == e);
            }
            function Z(t) {
                return "symbol" === i(t) || function(t) {
                    return !!t && "object" === i(t);
                }(t) && "[object Symbol]" == O.call(t);
            }
            function et(t, e, r) {
                var n = t[e];
                F.call(t, e) && X(n, r) && (void 0 !== r || e in t) || function(t, e, r) {
                    "__proto__" == e ? Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: r,
                        writable: !0
                    }) : t[e] = r;
                }(t, e, r);
            }
            function rt(t, e, r) {
                return void 0 === (e = null == t ? void 0 : function(t, e) {
                    for (var r = 0, n = (e = function(t, e) {
                        if (J(t)) return !1;
                        var r = i(t);
                        return !("number" != r && "symbol" != r && "boolean" != r && null != t && !Z(t)) || (_.test(t) || !b.test(t) || null != e && t in Object(e));
                    }(e, t) ? [ e ] : W(e)).length; null != t && r < n; ) t = t[Y(e[r++])];
                    return r && r == n ? t : void 0;
                }(t, e)) ? r : e;
            }
            function nt(t, e, r) {
                return null == t ? t : function(t, e, r, n) {
                    if (!Q(t)) return t;
                    for (var a = (e = W(e)).length, o = a - 1, s = -1, h = t; null != h && ++s < a; ) {
                        var l, p = Y(e[s]), c = r;
                        s != o && (l = h[p], void 0 === (c = n ? n(l, p, h) : void 0) && (c = Q(l) ? l : function(t, e) {
                            var r = i(t);
                            return (e = null == e ? 9007199254740991 : e) && ("number" == r || "symbol" != r && w.test(t)) && -1 < t && t % 1 == 0 && t < e;
                        }(e[s + 1]) ? [] : {})), et(h, p, c), h = h[p];
                    }
                    return t;
                }(t, e, r);
            }
            F = Object.prototype.hasOwnProperty;
            var it = /([A-Z])/g;
            function at(t) {
                return "-" + t.toLowerCase();
            }
            function ot(t) {
                if (null == t) return "";
                if ("string" == typeof t) return t;
                if (null == t) return "";
                if (!function(t) {
                    return null != t && "object" === i(t) && !1 === Array.isArray(t);
                }(t)) throw new TypeError("style 只能是一个对象或字符串。");
                return Object.keys(t).map(function(e) {
                    return function(t) {
                        return t.replace(it, at);
                    }(e).concat(":").concat(t[e]);
                }).join(";");
            }
            var st = {
                WEAPP: "WEAPP",
                WEB: "WEB",
                RN: "RN",
                SWAN: "SWAN",
                ALIPAY: "ALIPAY",
                QUICKAPP: "QUICKAPP",
                TT: "TT",
                QQ: "QQ",
                JD: "JD"
            }, ht = null;
            function lt() {
                return ht || ("undefined" != typeof jd && jd.getSystemInfo ? (ht = st.JD, st.JD) : "undefined" != typeof qq && qq.getSystemInfo ? (ht = st.QQ, 
                st.QQ) : "undefined" != typeof tt && tt.getSystemInfo ? (ht = st.TT, st.TT) : "undefined" != typeof wx && wx.getSystemInfo ? (ht = st.WEAPP, 
                st.WEAPP) : "undefined" != typeof qa && qa.getSystemInfo ? (ht = st.QUICKAPP, st.QUICKAPP) : "undefined" != typeof swan && swan.getSystemInfo ? (ht = st.SWAN, 
                st.SWAN) : "undefined" != typeof my && my.getSystemInfo ? (ht = st.ALIPAY, st.ALIPAY) : void 0 !== t && t.__fbGenNativeModule ? (ht = st.RN, 
                st.RN) : "undefined" != typeof window ? (ht = st.WEB, st.WEB) : "Unknown environment");
            }
            var pt = null;
            function ct(t) {
                return null === pt && (pt = lt()), function(t) {
                    return t === Object(t) && "function" != typeof t;
                }(t) && t[pt === st.SWAN ? "privateOriginal" : "$original"] || t;
            }
            var ft = function() {
                function t(e) {
                    a(this, t), void 0 !== e && e.callbacks ? this.callbacks = e.callbacks : this.callbacks = {};
                }
                return s(t, [ {
                    key: "on",
                    value: function(e, r, n) {
                        var i, a, o, s, h;
                        if (!r) return this;
                        for (e = e.split(t.eventSplitter), i = this.callbacks; a = e.shift(); ) (o = (h = i[a]) ? h.tail : {}).next = s = {}, 
                        o.context = n, o.callback = r, i[a] = {
                            tail: s,
                            next: h ? h.next : o
                        };
                        return this;
                    }
                }, {
                    key: "once",
                    value: function(t, e, r) {
                        var n = this;
                        return this.on(t, function i() {
                            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
                            e.apply(n, o), n.off(t, i, r);
                        }, r), this;
                    }
                }, {
                    key: "off",
                    value: function(e, r, n) {
                        var i, a, o, s, h, l;
                        if (!(a = this.callbacks)) return this;
                        if (!(e || r || n)) return delete this.callbacks, this;
                        for (e = e ? e.split(t.eventSplitter) : Object.keys(a); i = e.shift(); ) if (o = a[i], 
                        delete a[i], o && (r || n)) for (s = o.tail; (o = o.next) !== s; ) h = o.callback, 
                        l = o.context, (r && h !== r || n && l !== n) && this.on(i, h, l);
                        return this;
                    }
                }, {
                    key: "trigger",
                    value: function(e) {
                        var r, n, i, a, o;
                        if (!(i = this.callbacks)) return this;
                        for (e = e.split(t.eventSplitter), o = [].slice.call(arguments, 1); r = e.shift(); ) if (n = i[r]) for (a = n.tail; (n = n.next) !== a; ) n.callback.apply(n.context || this, o);
                        return this;
                    }
                } ]), t;
            }();
            function ut() {}
            function mt() {
                return {
                    current: null
                };
            }
            function dt(t, e, r, n) {
                4 < arguments.length && void 0 !== arguments[4] && arguments[4] && !e || ("refName" in t && t.refName ? n[t.refName] = e : "fn" in t && "function" == typeof t.fn ? t.fn.call(r, e) : t.fn && "object" === i(t.fn) && "current" in t.fn && (t.fn.current = e));
            }
            function yt(t) {
                t.$$refs && 0 < t.$$refs.length && (t.$$refs.forEach(function(e) {
                    "function" == typeof e.fn ? e.fn.call(t, null) : e.fn && "object" === i(e.fn) && "current" in e.fn && (e.fn.current = null), 
                    "target" in e && delete e.target;
                }), t.refs = {});
            }
            ft.eventSplitter = /\s+/;
            var gt = function() {
                !function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && p(t, e);
                }(e, u(Array));
                var t = function(t) {
                    var e = c();
                    return function() {
                        var r, n = l(t);
                        return m(this, e ? (r = l(this).constructor, Reflect.construct(n, arguments, r)) : n.apply(this, arguments));
                    };
                }(e);
                function e() {
                    var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                    return a(this, e), (r = t.call.apply(t, [ this ].concat(d(r)))).inited = !1, r;
                }
                return s(e, [ {
                    key: "pushRefs",
                    value: function(t) {
                        var e = this;
                        this.inited || (t.forEach(function(t) {
                            return e.pushRef(t);
                        }), this.inited = !0);
                    }
                }, {
                    key: "pushRef",
                    value: function(t) {
                        this.find(function(e) {
                            return e.id === t.id;
                        }) || this.push(t);
                    }
                } ]), e;
            }();
            function vt(t) {
                return function(e, r, n, a) {
                    return e ? (r = t(e, r, n), "function" !== (n = i(a)) && "object" !== n ? console.warn("循环 Ref 只支持函数或 createRef()，当前类型为：".concat(n)) : void ("object" === n ? a.current = r : "function" === n && a.call(e.$component, r))) : null;
                };
            }
            var bt = function() {
                function t(e) {
                    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                    a(this, t), this.index = n, this.requestParams = e, this.interceptors = r;
                }
                return s(t, [ {
                    key: "proceed",
                    value: function(t) {
                        if (this.requestParams = t, this.index >= this.interceptors.length) throw new Error("chain 参数错误, 请勿直接修改 request.chain");
                        var e = this._getNextInterceptor()(this._getNextChain());
                        t = e.catch(function(t) {
                            return Promise.reject(t);
                        });
                        return "function" == typeof e.abort && (t.abort = e.abort), t;
                    }
                }, {
                    key: "_getNextInterceptor",
                    value: function() {
                        return this.interceptors[this.index];
                    }
                }, {
                    key: "_getNextChain",
                    value: function() {
                        return new t(this.requestParams, this.interceptors, this.index + 1);
                    }
                } ]), t;
            }(), _t = function() {
                function t(e) {
                    a(this, t), this.taroInterceptor = e, this.chain = new bt();
                }
                return s(t, [ {
                    key: "request",
                    value: function(t) {
                        var e = this;
                        return this.chain.interceptors = this.chain.interceptors.filter(function(t) {
                            return t !== e.taroInterceptor;
                        }), this.chain.interceptors.push(this.taroInterceptor), this.chain.proceed(function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? h(Object(r), !0).forEach(function(e) {
                                    !function(t, e, r) {
                                        e in t ? Object.defineProperty(t, e, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[e] = r;
                                    }(t, e, r[e]);
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                });
                            }
                            return t;
                        }({}, t));
                    }
                }, {
                    key: "addInterceptor",
                    value: function(t) {
                        this.chain.interceptors.push(t);
                    }
                }, {
                    key: "cleanInterceptors",
                    value: function() {
                        this.chain = new bt();
                    }
                } ]), t;
            }(), Pt = Object.freeze({
                timeoutInterceptor: function(t) {
                    var e, r = t.requestParams, n = new Promise(function(n, i) {
                        var a = setTimeout(function() {
                            a = null, i(new Error("网络链接超时,请稍后再试！"));
                        }, r && r.timeout || 6e4);
                        (e = t.proceed(r)).then(function(t) {
                            a && (clearTimeout(a), n(t));
                        }).catch(function(t) {
                            a && clearTimeout(a), i(t);
                        });
                    });
                    return "function" == typeof e.abort && (n.abort = e.abort), n;
                },
                logInterceptor: function(t) {
                    var e = t.requestParams, r = e.method, n = e.data, i = e.url;
                    return console.log("http ".concat(r || "GET", " --\x3e ").concat(i, " data: "), n), 
                    e = (t = t.proceed(e)).then(function(t) {
                        return console.log("http <-- ".concat(i, " result:"), t), t;
                    }), "function" == typeof t.abort && (e.abort = t.abort), e;
                }
            }), St = {
                onSocketOpen: !0,
                onSocketError: !0,
                onSocketMessage: !0,
                onSocketClose: !0,
                onBackgroundAudioPlay: !0,
                onBackgroundAudioPause: !0,
                onBackgroundAudioStop: !0,
                onNetworkStatusChange: !0,
                onAccelerometerChange: !0,
                offAccelerometerChange: !0,
                onCompassChange: !0,
                onBluetoothAdapterStateChange: !0,
                onBluetoothDeviceFound: !0,
                onBLEConnectionStateChange: !0,
                onBLECharacteristicValueChange: !0,
                onBeaconUpdate: !0,
                onBeaconServiceChange: !0,
                onUserCaptureScreen: !0,
                onHCEMessage: !0,
                onGetWifiList: !0,
                onWifiConnected: !0,
                offWifiConnected: !0,
                offGetWifiList: !0,
                onDeviceMotionChange: !0,
                setStorageSync: !0,
                getStorageSync: !0,
                getStorageInfoSync: !0,
                removeStorageSync: !0,
                clearStorageSync: !0,
                getSystemInfoSync: !0,
                getExtConfigSync: !0,
                getLogManager: !0,
                onMemoryWarning: !0,
                reportMonitor: !0,
                reportAnalytics: !0,
                navigateToSmartGameProgram: !0,
                getFileSystemManager: !0,
                getLaunchOptionsSync: !0,
                onPageNotFound: !0,
                onError: !0,
                onAppShow: !0,
                onAppHide: !0,
                offPageNotFound: !0,
                offError: !0,
                offAppShow: !0,
                offAppHide: !0,
                onAudioInterruptionEnd: !0,
                onAudioInterruptionBegin: !0,
                onLocationChange: !0,
                offLocationChange: !0,
                onLocalServiceResolveFail: !0,
                onLocalServiceLost: !0,
                onLocalServiceFound: !0,
                onLocalServiceDiscoveryStop: !0,
                offLocalServiceResolveFail: !0,
                offLocalServiceLost: !0,
                offLocalServiceFound: !0,
                offLocalServiceDiscoveryStop: !0
            }, xt = {
                stopRecord: !0,
                getRecorderManager: !0,
                pauseVoice: !0,
                stopVoice: !0,
                pauseBackgroundAudio: !0,
                stopBackgroundAudio: !0,
                getBackgroundAudioManager: !0,
                createAudioContext: !0,
                createInnerAudioContext: !0,
                createVideoContext: !0,
                createCameraContext: !0,
                createLivePlayerContext: !0,
                createLivePusherContext: !0,
                createMapContext: !0,
                canIUse: !0,
                startAccelerometer: !0,
                stopAccelerometer: !0,
                startCompass: !0,
                stopCompass: !0,
                hideToast: !0,
                hideLoading: !0,
                showNavigationBarLoading: !0,
                hideNavigationBarLoading: !0,
                createAnimation: !0,
                createSelectorQuery: !0,
                createOffscreenCanvas: !0,
                createCanvasContext: !0,
                drawCanvas: !0,
                hideKeyboard: !0,
                stopPullDownRefresh: !0,
                createIntersectionObserver: !0,
                nextTick: !0,
                getMenuButtonBoundingClientRect: !0,
                onWindowResize: !0,
                offWindowResize: !0,
                arrayBufferToBase64: !0,
                base64ToArrayBuffer: !0,
                getAccountInfoSync: !0,
                getUpdateManager: !0,
                createWorker: !0,
                createRewardedVideoAd: !0,
                createInterstitialAd: !0,
                getRealtimeLogManager: !0
            }, Et = {
                uploadFile: !0,
                downloadFile: !0,
                connectSocket: !0,
                sendSocketMessage: !0,
                closeSocket: !0,
                chooseImage: !0,
                chooseMessageFile: !0,
                chooseMedia: !0,
                previewImage: !0,
                getImageInfo: !0,
                compressImage: !0,
                saveImageToPhotosAlbum: !0,
                startRecord: !0,
                playVoice: !0,
                setInnerAudioOption: !0,
                getAvailableAudioSources: !0,
                getBackgroundAudioPlayerState: !0,
                playBackgroundAudio: !0,
                seekBackgroundAudio: !0,
                chooseVideo: !0,
                saveVideoToPhotosAlbum: !0,
                loadFontFace: !0,
                saveFile: !0,
                getFileInfo: !0,
                getSavedFileList: !0,
                getSavedFileInfo: !0,
                removeSavedFile: !0,
                openDocument: !0,
                setStorage: !0,
                getStorage: !0,
                getStorageInfo: !0,
                removeStorage: !0,
                clearStorage: !0,
                navigateBack: !0,
                navigateTo: !0,
                redirectTo: !0,
                switchTab: !0,
                reLaunch: !0,
                startLocationUpdate: !0,
                startLocationUpdateBackground: !0,
                stopLocationUpdate: !0,
                getLocation: !0,
                chooseLocation: !0,
                openLocation: !0,
                getSystemInfo: !0,
                getNetworkType: !0,
                makePhoneCall: !0,
                scanCode: !0,
                setClipboardData: !0,
                getClipboardData: !0,
                openBluetoothAdapter: !0,
                closeBluetoothAdapter: !0,
                getBluetoothAdapterState: !0,
                startBluetoothDevicesDiscovery: !0,
                stopBluetoothDevicesDiscovery: !0,
                getBluetoothDevices: !0,
                getConnectedBluetoothDevices: !0,
                createBLEConnection: !0,
                closeBLEConnection: !0,
                getBLEDeviceServices: !0,
                getBLEDeviceCharacteristics: !0,
                readBLECharacteristicValue: !0,
                writeBLECharacteristicValue: !0,
                notifyBLECharacteristicValueChange: !0,
                startBeaconDiscovery: !0,
                stopBeaconDiscovery: !0,
                getBeacons: !0,
                setScreenBrightness: !0,
                getScreenBrightness: !0,
                setKeepScreenOn: !0,
                vibrateLong: !0,
                vibrateShort: !0,
                addPhoneContact: !0,
                getHCEState: !0,
                startHCE: !0,
                stopHCE: !0,
                sendHCEMessage: !0,
                startWifi: !0,
                stopWifi: !0,
                connectWifi: !0,
                getWifiList: !0,
                setWifiList: !0,
                getConnectedWifi: !0,
                startDeviceMotionListening: !0,
                stopDeviceMotionListening: !0,
                pageScrollTo: !0,
                showToast: !0,
                showLoading: !0,
                showModal: !0,
                showActionSheet: !0,
                setNavigationBarTitle: !0,
                setNavigationBarColor: !0,
                setTabBarBadge: !0,
                removeTabBarBadge: !0,
                showTabBarRedDot: !0,
                hideTabBarRedDot: !0,
                setTabBarStyle: !0,
                setTabBarItem: !0,
                showTabBar: !0,
                hideTabBar: !0,
                setTopBarText: !0,
                startPullDownRefresh: !0,
                canvasToTempFilePath: !0,
                canvasGetImageData: !0,
                canvasPutImageData: !0,
                setBackgroundColor: !0,
                setBackgroundTextStyle: !0,
                getSelectedTextRange: !0,
                hideHomeButton: !0,
                stopLocalServiceDiscovery: !0,
                startLocalServiceDiscovery: !0,
                getExtConfig: !0,
                login: !0,
                checkSession: !0,
                authorize: !0,
                getUserInfo: !0,
                checkIsSupportFacialRecognition: !0,
                startFacialRecognitionVerify: !0,
                startFacialRecognitionVerifyAndUploadVideo: !0,
                faceVerifyForPay: !0,
                requestPayment: !0,
                showShareMenu: !0,
                hideShareMenu: !0,
                updateShareMenu: !0,
                getShareInfo: !0,
                chooseAddress: !0,
                addCard: !0,
                openCard: !0,
                openSetting: !0,
                getSetting: !0,
                getWeRunData: !0,
                navigateToMiniProgram: !0,
                navigateBackMiniProgram: !0,
                chooseInvoice: !0,
                chooseInvoiceTitle: !0,
                checkIsSupportSoterAuthentication: !0,
                startSoterAuthentication: !0,
                checkIsSoterEnrolledInDevice: !0,
                requestSubscribeMessage: !0,
                setEnableDebug: !0,
                getOpenUserInfo: !0,
                ocrIdCard: !0,
                ocrBankCard: !0,
                ocrDrivingLicense: !0,
                ocrVehicleLicense: !0,
                textReview: !0,
                textToAudio: !0,
                imageAudit: !0,
                advancedGeneralIdentify: !0,
                objectDetectIdentify: !0,
                carClassify: !0,
                dishClassify: !0,
                logoClassify: !0,
                animalClassify: !0,
                plantClassify: !0,
                setPageInfo: !0,
                getSwanId: !0,
                requestPolymerPayment: !0,
                navigateToSmartProgram: !0,
                navigateBackSmartProgram: !0,
                preloadSubPackage: !0
            };
            function Ct(t) {
                var e = void 0 === (e = t.designWidth) ? 700 : e;
                t = void 0 === (t = t.deviceRatio) ? {
                    640: 1.17,
                    750: 1,
                    828: .905
                } : t;
                this.config = this.config || {}, this.config.designWidth = e, this.config.deviceRatio = t;
            }
            function At(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            }
            function Tt(t) {
                return "function" == typeof t;
            }
            var wt = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
            function kt(t) {
                return null == t;
            }
            var Dt = !0;
            function It() {
                return Dt;
            }
            function Mt(t) {
                Dt = Boolean(t);
            }
            function Ft() {}
            function Ot(t) {
                if (null === Xt.current) throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
                var e = Xt.current.hooks;
                return t >= e.length && e.push({}), e[t];
            }
            function Rt(t) {
                Tt(t) && (t = t());
                var e = Ot(Xt.index++);
                return e.state || (e.component = Xt.current, e.state = [ t, function(t) {
                    t = Tt(t) ? t(e.state[0]) : t, e.state[0] !== t && (e.state[0] = t, e.component._disable = !1, 
                    e.component.setState({}, Ft));
                } ]), e.state;
            }
            function Lt(t, e) {
                var r, n, i = Ot(Xt.index++);
                i.marked ? i.callback = t : (i.marked = !0, i.component = Xt.current, i.callback = t, 
                r = i.component, n = r[e], i.component[e] = function() {
                    var t = i.callback;
                    return n && n.call.apply(n, [ r ].concat(Array.prototype.slice.call(arguments))), 
                    t && t.call.apply(t, [ r ].concat(Array.prototype.slice.call(arguments)));
                });
            }
            function jt(t) {
                Lt(t, "componentDidShow");
            }
            function Vt(t) {
                Lt(t, "componentDidHide");
            }
            function Bt(t) {
                Lt(t, "onPullDownRefresh");
            }
            function Nt(t) {
                Lt(t, "onReachBottom");
            }
            function zt(t) {
                Lt(t, "onPageScroll");
            }
            function Gt(t) {
                Lt(t, "onResize");
            }
            function $t(t) {
                Lt(t, "onShareAppMessage");
            }
            function Wt(t) {
                Lt(t, "onTabItemTap");
            }
            function qt() {
                var t = Ot(Xt.index++);
                return t.router || (t.component = Xt.current, t.router = t.component.$router), t.router;
            }
            function Ut() {
                var t = Ot(Xt.index++);
                return t.scope || (t.component = Xt.current, t.scope = t.component.$scope), t.scope;
            }
            function Ht(t, e, r) {
                Tt(e) && (e = e());
                var n = Ot(Xt.index++);
                return n.state || (n.component = Xt.current, n.state = [ void 0 === r ? e : r(e), function(e) {
                    n.state[0] = t(n.state[0], e), n.component._disable = !1, n.component.setState({}, Ft);
                } ]), n.state;
            }
            function Yt(t, e) {
                return kt(t) || kt(e) || e.some(function(e, r) {
                    return !At(e, t[r]);
                });
            }
            function Kt(t, e) {
                (e ? t.effects : t.layoutEffects).forEach(function(t) {
                    Tt(t.cleanup) && t.cleanup();
                    var e = t.effect();
                    Tt(e) && (t.cleanup = e);
                }), e ? t.effects = [] : t.layoutEffects = [];
            }
            var Xt = {
                current: null,
                index: 0
            }, Jt = [];
            function Qt(t, e, r) {
                var n = Ot(Xt.index++);
                !Xt.current._disableEffect && Xt.current.__isReady && Yt(n.deps, e) && (n.effect = t, 
                n.deps = e, r ? (Xt.current.effects = Xt.current.effects.concat(n), function(t) {
                    t._afterScheduleEffect || (t._afterScheduleEffect = !0, Jt.push(t), 1 === Jt.length && wt(function() {
                        setTimeout(function() {
                            Jt.forEach(function(t) {
                                t._afterScheduleEffect = !1, Kt(t, !0);
                            }), Jt = [];
                        }, 0);
                    }));
                }(Xt.current)) : Xt.current.layoutEffects = Xt.current.layoutEffects.concat(n));
            }
            function Zt(t, e) {
                Qt(t, e, !0);
            }
            function te(t, e) {
                Qt(t, e);
            }
            function ee(t) {
                var e = Ot(Xt.index++);
                return e.ref || (e.ref = {
                    current: t
                }), e.ref;
            }
            function re(t, e) {
                var r = Ot(Xt.index++);
                return Yt(r.deps, e) && (r.deps = e, r.callback = t, r.value = t()), r.value;
            }
            function ne(t, e) {
                return re(function() {
                    return t;
                }, e);
            }
            function ie(t, e, r) {
                te(function() {
                    return Tt(t) ? (t(e()), function() {
                        return t(null);
                    }) : void 0 !== t ? (t.current = e(), function() {
                        delete t.current;
                    }) : void 0;
                }, function(t) {
                    return Array.isArray(t);
                }(r) ? r.concat([ t ]) : void 0);
            }
            function ae(t) {
                var e = t.context;
                if (null === (t = e.emitter)) return e._defaultValue;
                var r = Ot(Xt.index++);
                return void 0 === r.context && (r.context = !0, r.component = Xt.current, t.on(function(t) {
                    r.component && (r.component._disable = !1, r.component.setState({}));
                })), t.value;
            }
            var oe = function() {
                function t() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    a(this, t), this.value = e, this.handlers = [];
                }
                return s(t, [ {
                    key: "on",
                    value: function(t) {
                        this.handlers.push(t);
                    }
                }, {
                    key: "off",
                    value: function(t) {
                        this.handlers = this.handlers.filter(function(e) {
                            return e !== t;
                        });
                    }
                }, {
                    key: "set",
                    value: function(t) {
                        var e = this;
                        At(t, this.value) || (this.value = t, this.handlers.forEach(function(t) {
                            return t(e.value);
                        }));
                    }
                } ]), t;
            }(), se = 0;
            function he(t) {
                var e = {
                    emitter: null,
                    _id: "__context_" + se++ + "__",
                    _defaultValue: t
                };
                return {
                    Provider: function(r) {
                        var n = e.emitter;
                        n ? n.set(r) : e.emitter = new oe(t);
                    },
                    context: e
                };
            }
            var le = Object.is || function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
            };
            function pe(t, e) {
                return t.prototype.shouldComponentUpdate = function(t) {
                    return Tt(e) ? !e(this.props, t) : !function(t, e) {
                        if ("object" !== i(t) && "object" !== i(e)) return t === e;
                        if (null === t && null === e) return 1;
                        if (null !== t && null !== e) {
                            if (le(t, e)) return 1;
                            var r = t ? Object.keys(t) : [], n = e ? Object.keys(e) : [];
                            if (r.length === n.length) {
                                for (var a = 0; a < r.length; a++) {
                                    var o = r[a];
                                    if (!e.hasOwnProperty(o) || !le(t[o], e[o])) return;
                                }
                                return 1;
                            }
                        }
                    }(this.props, t);
                }, t;
            }
            var ce = new ft();
            e.default = {
                Component: g,
                Events: ft,
                eventCenter: ce,
                getEnv: lt,
                ENV_TYPE: st,
                render: ut,
                internal_safe_get: rt,
                internal_safe_set: nt,
                internal_inline_style: ot,
                internal_get_original: ct,
                internal_force_update: Ft,
                noPromiseApis: xt,
                onAndSyncApis: St,
                otherApis: Et,
                initPxTransform: Ct,
                createRef: mt,
                commitAttachRef: dt,
                detachAllRef: yt,
                Link: _t,
                interceptors: Pt,
                RefsArray: gt,
                handleLoopRef: vt,
                Current: Xt,
                useEffect: Zt,
                useLayoutEffect: te,
                useReducer: Ht,
                useState: Rt,
                useDidShow: jt,
                useDidHide: Vt,
                usePullDownRefresh: Bt,
                useReachBottom: Nt,
                usePageScroll: zt,
                useResize: Gt,
                useShareAppMessage: $t,
                useTabItemTap: Wt,
                useRouter: qt,
                useScope: Ut,
                useRef: ee,
                useCallback: ne,
                useMemo: re,
                useImperativeHandle: ie,
                invokeEffects: Kt,
                useContext: ae,
                createContext: he,
                memo: pe,
                getIsUsingDiff: It,
                setIsUsingDiff: Mt
            };
        }.call(this, r(37));
    },
    7: function(t, e, r) {
        var n, i = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
            return _typeof4(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
        };
        !function() {
            var a = {}.hasOwnProperty;
            function o() {
                for (var t = [], e = 0; e < arguments.length; e++) {
                    var r = arguments[e];
                    if (r) {
                        var n = void 0 === r ? "undefined" : i(r);
                        if ("string" === n || "number" === n) t.push(r); else if (Array.isArray(r) && r.length) {
                            var s = o.apply(null, r);
                            s && t.push(s);
                        } else if ("object" === n) for (var h in r) a.call(r, h) && r[h] && t.push(h);
                    }
                }
                return t.join(" ");
            }
            t.exports ? (o.default = o, t.exports = o) : "object" === i(r(83)) && r(83) ? void 0 === (n = function() {
                return o;
            }.apply(e, [])) || (t.exports = n) : window.classNames = o;
        }();
    },
    792: function(t, e, r) {
        var n = function() {
            return this;
        }() || {
            Function: Function,
            Boolean: Boolean,
            Object: Object,
            Number: Number,
            Array: Array,
            Date: Date,
            String: String,
            Symbol: Symbol,
            Error: Error,
            TypeError: TypeError,
            Map: Map,
            Set: Set,
            WeakMap: WeakMap,
            WeakSet: WeakSet,
            ArrayBuffer: ArrayBuffer,
            Math: Math,
            Promise: Promise,
            RegExp: RegExp,
            DataView: DataView,
            isFinite: isFinite,
            parseInt: parseInt,
            parseFloat: parseFloat,
            Float32Array: Float32Array,
            Float64Array: Float64Array,
            Int8Array: Int8Array,
            Int16Array: Int16Array,
            Int32Array: Int32Array,
            Uint8Array: Uint8Array,
            Uint16Array: Uint16Array,
            Uint32Array: Uint32Array,
            Uint8ClampedArray: Uint8ClampedArray,
            setTimeout: setTimeout,
            clearTimeout: clearTimeout,
            setInterval: setInterval,
            clearInterval: clearInterval
        }, i = n.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"), a = i && n.regeneratorRuntime;
        if (n.regeneratorRuntime = void 0, t.exports = r(793), i) n.regeneratorRuntime = a; else try {
            delete n.regeneratorRuntime;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            n.regeneratorRuntime = void 0;
        }
    },
    793: function(t, e, r) {
        (function(t) {
            var e = "function" == typeof Symbol && "symbol" == _typeof4(Symbol.iterator) ? function(t) {
                return _typeof4(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof4(t);
            };
            !function(r) {
                var n, i, a, o, s, h, l, p = Object.prototype, c = p.hasOwnProperty, f = (d = "function" == typeof Symbol ? Symbol : {}).iterator || "@@iterator", u = d.asyncIterator || "@@asyncIterator", m = d.toStringTag || "@@toStringTag", d = "object" === e(t), y = r.regeneratorRuntime;
                function g(t, e, r, l) {
                    return e = e && e.prototype instanceof b ? e : b, e = Object.create(e.prototype), 
                    l = new A(l || []), e._invoke = function(t, e, r) {
                        var l = i;
                        return function(p, c) {
                            if (l === o) throw new Error("Generator is already running");
                            if (l === s) {
                                if ("throw" === p) throw c;
                                return w();
                            }
                            for (r.method = p, r.arg = c; ;) {
                                var f = r.delegate;
                                if (f) {
                                    var u = function t(e, r) {
                                        var i;
                                        if ((i = e.iterator[r.method]) === n) {
                                            if (r.delegate = null, "throw" === r.method) {
                                                if (e.iterator.return && (r.method = "return", r.arg = n, t(e, r), "throw" === r.method)) return h;
                                                r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
                                            }
                                            return h;
                                        }
                                        return "throw" === (i = v(i, e.iterator, r.arg)).type ? (r.method = "throw", r.arg = i.arg, 
                                        r.delegate = null, h) : (i = i.arg) ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, 
                                        "return" !== r.method && (r.method = "next", r.arg = n), r.delegate = null, h) : i : (r.method = "throw", 
                                        r.arg = new TypeError("iterator result is not an object"), r.delegate = null, h);
                                    }(f, r);
                                    if (u) {
                                        if (u === h) continue;
                                        return u;
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                                    if (l === i) throw l = s, r.arg;
                                    r.dispatchException(r.arg);
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                if (l = o, "normal" === (u = v(t, e, r)).type) {
                                    if (l = r.done ? s : a, u.arg !== h) return {
                                        value: u.arg,
                                        done: r.done
                                    };
                                } else "throw" === u.type && (l = s, r.method = "throw", r.arg = u.arg);
                            }
                        };
                    }(t, r, l), e;
                }
                function v(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        };
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        return {
                            type: "throw",
                            arg: t
                        };
                    }
                }
                function b() {}
                function _() {}
                function P() {}
                function S(t) {
                    [ "next", "throw", "return" ].forEach(function(e) {
                        t[e] = function(t) {
                            return this._invoke(e, t);
                        };
                    });
                }
                function x(t) {
                    var r;
                    this._invoke = function(n, i) {
                        function a() {
                            return new Promise(function(r, a) {
                                !function r(n, i, a, o) {
                                    if ("throw" !== (n = v(t[n], t, i)).type) {
                                        var s = n.arg;
                                        return (i = s.value) && "object" === (void 0 === i ? "undefined" : e(i)) && c.call(i, "__await") ? Promise.resolve(i.__await).then(function(t) {
                                            r("next", t, a, o);
                                        }, function(t) {
                                            r("throw", t, a, o);
                                        }) : Promise.resolve(i).then(function(t) {
                                            s.value = t, a(s);
                                        }, o);
                                    }
                                    o(n.arg);
                                }(n, i, r, a);
                            });
                        }
                        return r = r ? r.then(a, a) : a();
                    };
                }
                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
                    this.tryEntries.push(e);
                }
                function C(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e;
                }
                function A(t) {
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], t.forEach(E, this), this.reset(!0);
                }
                function T(t) {
                    if (t) {
                        if (e = t[f]) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var e, r = -1;
                            return (e = function e() {
                                for (;++r < t.length; ) if (c.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = n, e.done = !0, e;
                            }).next = e;
                        }
                    }
                    return {
                        next: w
                    };
                }
                function w() {
                    return {
                        value: n,
                        done: !0
                    };
                }
                y ? d && (t.exports = y) : ((y = r.regeneratorRuntime = d ? t.exports : {}).wrap = g, 
                i = "suspendedStart", a = "suspendedYield", o = "executing", s = "completed", h = {}, 
                (r = {})[f] = function() {
                    return this;
                }, (d = (d = Object.getPrototypeOf) && d(d(T([])))) && d !== p && c.call(d, f) && (r = d), 
                l = P.prototype = b.prototype = Object.create(r), (_.prototype = l.constructor = P).constructor = _, 
                P[m] = _.displayName = "GeneratorFunction", y.isGeneratorFunction = function(t) {
                    return !!(t = "function" == typeof t && t.constructor) && (t === _ || "GeneratorFunction" === (t.displayName || t.name));
                }, y.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, P) : (t.__proto__ = P, m in t || (t[m] = "GeneratorFunction")), 
                    t.prototype = Object.create(l), t;
                }, y.awrap = function(t) {
                    return {
                        __await: t
                    };
                }, S(x.prototype), x.prototype[u] = function() {
                    return this;
                }, y.AsyncIterator = x, y.async = function(t, e, r, n) {
                    var i = new x(g(t, e, r, n));
                    return y.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                        return t.done ? t.value : i.next();
                    });
                }, S(l), l[m] = "Generator", l[f] = function() {
                    return this;
                }, l.toString = function() {
                    return "[object Generator]";
                }, y.keys = function(t) {
                    var e, r = [];
                    for (e in t) r.push(e);
                    return r.reverse(), function e() {
                        for (;r.length; ) {
                            var n = r.pop();
                            if (n in t) return e.value = n, e.done = !1, e;
                        }
                        return e.done = !0, e;
                    };
                }, y.values = T, A.prototype = {
                    constructor: A,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, 
                        this.method = "next", this.arg = n, this.tryEntries.forEach(C), !t) for (var e in this) "t" === e.charAt(0) && c.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n);
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;
                        function r(r, i) {
                            return o.type = "throw", o.arg = t, e.next = r, i && (e.method = "next", e.arg = n), 
                            !!i;
                        }
                        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                            var a = this.tryEntries[i], o = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var s = c.call(a, "catchLoc"), h = c.call(a, "finallyLoc");
                                if (s && h) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                } else if (s) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                } else {
                                    if (!h) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && c.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var i = n;
                                break;
                            }
                        }
                        var a = (i = i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc ? null : i) ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, 
                        h) : this.complete(a);
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
                        this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
                        h;
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), C(r), h;
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n, i = r.completion;
                                return "throw" === i.type && (n = i.arg, C(r)), n;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: T(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n), h;
                    }
                });
            }(function() {
                return this;
            }() || {
                Function: Function,
                Boolean: Boolean,
                Object: Object,
                Number: Number,
                Array: Array,
                Date: Date,
                String: String,
                Symbol: Symbol,
                Error: Error,
                TypeError: TypeError,
                Map: Map,
                Set: Set,
                WeakMap: WeakMap,
                WeakSet: WeakSet,
                ArrayBuffer: ArrayBuffer,
                Math: Math,
                Promise: Promise,
                RegExp: RegExp,
                DataView: DataView,
                isFinite: isFinite,
                parseInt: parseInt,
                parseFloat: parseFloat,
                Float32Array: Float32Array,
                Float64Array: Float64Array,
                Int8Array: Int8Array,
                Int16Array: Int16Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array,
                Uint16Array: Uint16Array,
                Uint32Array: Uint32Array,
                Uint8ClampedArray: Uint8ClampedArray,
                setTimeout: setTimeout,
                clearTimeout: clearTimeout,
                setInterval: setInterval,
                clearInterval: clearInterval
            });
        }).call(this, r(794)(t));
    },
    794: function(t, e) {
        t.exports = function(t) {
            return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), 
            Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l;
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i;
                }
            }), t.webpackPolyfill = 1), t;
        };
    },
    8: function(t, e, r) {
        t.exports = r(450).default, t.exports.default = t.exports;
    },
    83: function(t, e) {
        (function(e) {
            t.exports = e;
        }).call(this, {});
    },
    9: function(t, e, r) {
        t.exports = r(991)();
    },
    991: function(t, e, r) {
        var n = r(992);
        function i() {}
        function a() {}
        a.resetWarningCache = i, t.exports = function() {
            function t(t, e, r, i, a, o) {
                if (o !== n) throw (o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")).name = "Invariant Violation", 
                o;
            }
            function e() {
                return t;
            }
            var r = {
                array: t.isRequired = t,
                bool: t,
                func: t,
                number: t,
                object: t,
                string: t,
                symbol: t,
                any: t,
                arrayOf: e,
                element: t,
                elementType: t,
                instanceOf: e,
                node: t,
                objectOf: e,
                oneOf: e,
                oneOfType: e,
                shape: e,
                exact: e,
                checkPropTypes: a,
                resetWarningCache: i
            };
            return r.PropTypes = r;
        };
    },
    992: function(t, e, r) {
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }
} ]);