var o = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 30 ], {
    1142: function(o, t, n) {
        n(360);
    },
    1143: function(o, t, n) {},
    1617: function(t, n, e) {
        e.r(n), e(1142);
        var a = e(0), i = e.n(a), r = e(2), s = (n = e.n(r), e(1143), "function" == typeof Symbol && "symbol" == o(Symbol.iterator) ? function(t) {
            return o(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t);
        });
        r = function(o, t, n) {
            return t && u(o.prototype, t), n && u(o, n), o;
        };
        function u(o, t) {
            for (var n = 0; n < t.length; n++) {
                var e = t[n];
                e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
                Object.defineProperty(o, e.key, e);
            }
        }
        function c(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != o(n) && "function" != typeof n ? t : n;
        }
        var p = i.a.getApp();
        r = n()({
            options: {
                multipleSlots: !0
            },
            properties: {
                showKeyboard: {
                    type: Boolean,
                    value: !1
                },
                content: {
                    type: String,
                    value: ""
                },
                bottom: {
                    type: Number,
                    value: ""
                }
            },
            data: {
                emojiChar: "😠-😩-😲-😞-😵-😰-😒-😍-😤-😜-😝-😋-😘-😚-😷-😳-😃-😅-😆-😁-😂-😊-😄-😢-😭-😨-😣-😡-😡-😌-😖-😔-😱-😪-😏-😓-😥-😫-😉-👍",
                emoji: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39" ],
                emojiPages: [],
                ifIphoneX: !1,
                showKeyboard: !1
            },
            ready: function() {
                var o, t = this.data.emojiChar.split("-"), n = [], e = [];
                this.data.emoji.forEach(function(a, i) {
                    o = {
                        char: t[i]
                    }, (28 <= i ? e : n).push(o);
                }), this.setData({
                    emojiPages: [ n, e ]
                }), this.setData({
                    ifIphoneX: p.globalData.isIphoneX
                });
            },
            methods: {
                showKey: function() {
                    console.log("showKey"), this.triggerEvent("changeKey", !0);
                },
                hideKey: function() {
                    console.log("hideKey"), this.triggerEvent("changeKey", !1);
                },
                emojiChoose: function(o) {
                    var t;
                    t = o.currentTarget.dataset.emoji ? this.data.content + o.currentTarget.dataset.emoji : (o = this.data.content).substring(0, o.length - 2), 
                    this.triggerEvent("emojiChoose", t);
                },
                insertImage: function() {
                    console.log("000000000000000000000000000000000000000--"), this.triggerEvent("insertImage");
                },
                send: function() {
                    var o = this, t = this.data.emojiChar.split("-"), n = this.data.content;
                    t.forEach(function(t, e) {
                        -1 < n.indexOf(t) && (console.log(o.data.emoji[e]), n = n.replace(new RegExp(t, "gm"), '<img width="20" height="20" src="https://xcxresources.xybsyw.com/xcx/emoji/emoji_' + o.data.emoji[e] + '.png">'));
                    }), this.triggerEvent("send", n);
                }
            }
        })((function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + o(n));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(h, i.a.Component), r(h, [ {
            key: "_constructor",
            value: function(o) {
                (function o(t, n, e) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(e) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? o(t, n, e) : void 0;
                })(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "_constructor", this).call(this, o), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var o = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = this.data, n = t.bottom, e = t.ifIphoneX, i = t.showKeyboard, r = t.emojiPages;
                return this.anonymousFunc0 = function(t) {
                    t.stopPropagation(), o.insertImage(t);
                }, this.anonymousFunc1 = function(t) {
                    t.stopPropagation(), o.hideKey(t);
                }, this.anonymousFunc2 = function(t) {
                    t.stopPropagation(), o.showKey(t);
                }, this.anonymousFunc3 = function(t) {
                    t.stopPropagation(), o.send(t);
                }, t = i ? r.map(function(t, n) {
                    return t = {
                        $original: Object(a.internal_get_original)(t)
                    }, n = "fabzz" + n, o.anonymousFunc4Map[n] = function(t) {
                        t.stopPropagation(), o.emojiChoose(t);
                    }, {
                        _$indexKey: n,
                        $original: t.$original
                    };
                }) : [], Object.assign(this.__state, {
                    loopArray690: t,
                    bottom: n,
                    ifIphoneX: e,
                    showKeyboard: i,
                    emojiPages: r
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(o) {
                o.stopPropagation();
            }
        }, {
            key: "anonymousFunc1",
            value: function(o) {
                o.stopPropagation();
            }
        }, {
            key: "anonymousFunc2",
            value: function(o) {
                o.stopPropagation();
            }
        }, {
            key: "anonymousFunc3",
            value: function(o) {
                o.stopPropagation();
            }
        }, {
            key: "anonymousFunc4",
            value: function(o) {
                for (var t, n = arguments.length, e = Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) e[a - 1] = arguments[a];
                return "object" === (void 0 === e ? "undefined" : s(e)) && e.stopPropagation && e.stopPropagation(), 
                this.anonymousFunc4Map[o] && (t = this.anonymousFunc4Map)[o].apply(t, e);
            }
        } ]), r = n = h, n.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "emojiChoose", "anonymousFunc4" ], 
        n.$$componentPath = "components/insertBottom/insertBottom", n = r)) || n;
        function h() {
            var o, t;
            !function(o, t) {
                if (!(o instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, h);
            for (var n = arguments.length, e = Array(n), a = 0; a < n; a++) e[a] = arguments[a];
            return (o = t = c(this, (o = h.__proto__ || Object.getPrototypeOf(h)).call.apply(o, [ this ].concat(e)))).$usedState = [ "loopArray690", "bottom", "ifIphoneX", "showKeyboard", "emojiPages" ], 
            t.config = {}, t.anonymousFunc4Map = {}, t.customComponents = [], c(t, o);
        }
        n = r, Component(e(0).default.createComponent(r));
    },
    360: function(o, t, n) {
        o.exports = n.p + "components/insertBottom/insertBottom.wxml";
    }
}, [ [ 1617, 0, 1 ] ] ]);