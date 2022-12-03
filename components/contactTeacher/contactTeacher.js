var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 24 ], {
    1310: function(t, e, n) {
        n(442);
    },
    1311: function(t, e, n) {},
    1698: function(e, n, o) {
        o.r(n), o(1310);
        var a = o(0), r = o.n(a), i = o(1), s = (o(1311), function(t, e, n) {
            return e && c(t.prototype, e), n && c(t, n), t;
        });
        function c(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        function u(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != t(n) && "function" != typeof n ? e : n;
        }
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return (t = e = u(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(o)))).$usedState = [ "loopArray622", "loopArray623", "isShow", "hasAdviser", "teacherList", "title", "projectId" ], 
            e.config = {
                component: !0,
                usingComponents: {
                    "van-popup": "../../vant-weapp/dist/popup/index"
                }
            }, e.anonymousFunc1Map = {}, e.anonymousFunc2Map = {}, e.customComponents = [], 
            u(e, t);
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
        })(p, r.a.Component), s(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, o) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, o) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.state = {
                    hasAdviser: !0,
                    teacherList: []
                }, this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(t) {
                t.isShow && t.projectId && 0 == this.state.teacherList.length && this.loadTeacher(t.projectId);
            }
        }, {
            key: "onClose",
            value: function() {
                this.props.onClose(), this.setState({
                    teacherList: []
                });
            }
        }, {
            key: "loadTeacher",
            value: function(t) {
                var e = this;
                i.a.xyb_request("laboreducation/common/loadAdviser.action", "POST", {
                    projectId: t
                }, !1, !1).then(function(t) {
                    t = t.data, e.setState({
                        hasAdviser: t.hasAdviser,
                        teacherList: t.adviser
                    });
                }, function(t) {
                    r.a.showToast({
                        title: t.msg,
                        icon: "none"
                    });
                });
            }
        }, {
            key: "makePhoneCall",
            value: function(t, e) {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "联系老师"
                }), e.stopPropagation(), r.a.makePhoneCall({
                    phoneNumber: t
                });
            }
        }, {
            key: "goChat",
            value: function(t) {
                r.a.navigateTo({
                    url: "/videoBag/pages/Chat/Chat?conversationId=0&friendId=" + t.id + "&conversationName=" + t.name + "&conversationType=0&creatorType=2"
                }), this.props.onClose();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = (r = this.__props).isShow, n = r.title, o = this.__state, r = o.teacherList;
                return o.hasAdviser, this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.onClose(e);
                }, o = r ? r.map(function(e, n) {
                    return e = {
                        $original: Object(a.internal_get_original)(e)
                    }, n = "ebazz" + n, t.anonymousFunc1Map[n] = function() {
                        return t.goChat(e.$original);
                    }, {
                        _$indexKey: n,
                        $original: e.$original
                    };
                }) : [], r = r ? r.map(function(e, n) {
                    return e = {
                        $original: Object(a.internal_get_original)(e)
                    }, n = "ebbzz" + n, t.anonymousFunc2Map[n] = function() {
                        return t.goChat(e.$original);
                    }, {
                        _$indexKey2: n,
                        $original: e.$original
                    };
                }) : [], Object.assign(this.__state, {
                    loopArray622: o,
                    loopArray623: r,
                    isShow: e,
                    title: n
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                t.stopPropagation();
            }
        }, {
            key: "anonymousFunc1",
            value: function(t) {
                for (var e, n = arguments.length, o = Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc1Map[t] && (e = this.anonymousFunc1Map)[t].apply(e, o);
            }
        }, {
            key: "anonymousFunc2",
            value: function(t) {
                for (var e, n = arguments.length, o = Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                return this.anonymousFunc2Map[t] && (e = this.anonymousFunc2Map)[t].apply(e, o);
            }
        } ]), s = n = p, n.$$events = [ "onClose", "anonymousFunc0", "makePhoneCall", "anonymousFunc1", "anonymousFunc2" ], 
        n.$$componentPath = "components/contactTeacher/contactTeacher", (n = s).defaultProps = {
            isShow: !1,
            title: "",
            projectId: ""
        }, s = n, Component(o(0).default.createComponent(n));
    },
    442: function(t, e, n) {
        t.exports = n.p + "components/contactTeacher/contactTeacher.wxml";
    }
}, [ [ 1698, 0, 1, 2 ] ] ]);