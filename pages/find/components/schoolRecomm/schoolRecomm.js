var t = require("../../../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 297 ], {
    1287: function(t, e, o) {
        o(432);
    },
    1288: function(t, e, o) {},
    1688: function(e, o, n) {
        n.r(o), n(1287);
        var a = n(0), r = n.n(a), i = n(8), s = n(1), c = (n(1288), function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function(t, e) {
                var o = [], n = !0, a = !1, r = void 0;
                try {
                    for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (o.push(i.value), 
                    !e || o.length !== e); n = !0) ;
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    a = !0, r = t;
                } finally {
                    try {
                        !n && s.return && s.return();
                    } finally {
                        if (a) throw r;
                    }
                }
                return o;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        });
        o = function(t, e, o) {
            return e && u(t.prototype, e), o && u(t, o), t;
        };
        function u(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        function p(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function l() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, l);
            for (var o = arguments.length, n = Array(o), a = 0; a < o; a++) n[a] = arguments[a];
            return (t = e = p(this, (t = l.__proto__ || Object.getPrototypeOf(l)).call.apply(t, [ this ].concat(n)))).$usedState = [ "anonymousState__temp", "loopArray635", "$compid__910", "noDate", "postList", "hasMore", "maxPage", "pageIndex", "isLoadedList" ], 
            e.customComponents = [ "ItemJobNew", "AtActivityIndicator" ], p(e, t);
        }
        r.a.getApp(), o = Object(i.connect)(function(t) {
            return {
                xybData: t.xybData
            };
        }, function(t) {
            return {
                setxybdata: function(t) {
                    function e(e) {
                        return t.apply(this, arguments);
                    }
                    return e.toString = function() {
                        return t.toString();
                    }, e;
                }(function(e) {
                    t(setxybdata(e));
                })
            };
        })((function(e, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + t(o));
            e.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
        }(l, a.Component), o(l, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, n) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(n) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, n) : void 0;
                })(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_constructor", this).call(this, t), 
                this.state = {
                    postList: [],
                    pageIndex: 1,
                    hasMore: !0,
                    maxPage: "",
                    noDate: !1,
                    isLoadedList: !0
                }, this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function() {}
        }, {
            key: "componentDidMount",
            value: function() {
                console.log("show"), this.setState({
                    postList: [],
                    pageIndex: 1,
                    hasMore: !0,
                    maxPage: "",
                    noDate: !1,
                    isLoadedList: !0
                }), r.a.hideShareMenu(), this.getPostlist();
            }
        }, {
            key: "componentDidShow",
            value: function() {}
        }, {
            key: "reachBottom",
            value: function() {
                var t = this, e = this.state.pageIndex + 1;
                this.state.hasMore && this.setState({
                    pageIndex: e
                }, function() {
                    t.getPostlist();
                });
            }
        }, {
            key: "componentDidHide",
            value: function() {}
        }, {
            key: "getPostlist",
            value: function() {
                var t = this;
                s.a.xyb_request("post/GetPersonalList.action", "POST", {
                    page: this.state.pageIndex,
                    pageSize: 15
                }, !1, !1).then(function(e) {
                    var o = t.state.postList, n = e.data ? e.data.list : [];
                    n.forEach(function(t) {
                        o.push(t);
                    }), t.setState({
                        postList: o,
                        noDate: 0 === n.length,
                        maxPage: e.data ? e.data.maxPage : 0,
                        hasMore: !(!e.data || e.data.maxPage === t.state.pageIndex)
                    }, function() {
                        t.setState({
                            isLoadedList: !1
                        });
                    });
                }, function(t) {
                    console.log(t);
                });
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
                var t = this.$prefix, e = Object(a.genCompid)(t + "$compid__910"), o = (s = c(e, 2))[0], n = s[1], r = (u = this.__state).noDate, i = u.postList, s = (e = u.hasMore, 
                u.maxPage), u = u.isLoadedList;
                u = Object(a.internal_inline_style)(u ? "min-height:100vh" : ""), i = r ? [] : i.map(function(e, o) {
                    e = {
                        $original: Object(a.internal_get_original)(e)
                    };
                    var n = Object(a.genCompid)(t + "ecizzzzzzz" + o, !0);
                    n = (o = c(n, 2))[0], o = o[1];
                    return r || a.propsManager.set({
                        itemData: e.$original,
                        pageSource: 11,
                        bottomFlag: !0,
                        bottomFlagColor: "#F7FCFF"
                    }, o, n), {
                        $compid__909: o,
                        $original: e.$original
                    };
                });
                return e && s && a.propsManager.set({
                    color: "#ff453a",
                    size: 26,
                    content: "加载中...",
                    mode: "center"
                }, n, o), Object.assign(this.__state, {
                    anonymousState__temp: u,
                    loopArray635: i,
                    $compid__910: n
                }), this.__state;
            }
        } ]), o = i = l, i.$$events = [ "toIndex" ], i.$$componentPath = "pages/find/components/schoolRecomm/schoolRecomm", 
        i = o)) || i, i = o, Component(n(0).default.createComponent(o));
    },
    432: function(t, e, o) {
        t.exports = o.p + "pages/find/components/schoolRecomm/schoolRecomm.wxml";
    }
}, [ [ 1688, 0, 1, 2 ] ] ]);