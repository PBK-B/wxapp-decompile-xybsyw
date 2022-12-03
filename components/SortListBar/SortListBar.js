var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 19 ], {
    1257: function(t, e, o) {
        o(416);
    },
    1258: function(t, e, o) {},
    1673: function(e, o, s) {
        s.r(o), s(1257);
        var n = s(0), r = s.n(n);
        s(1258), o = function(t, e, o) {
            return e && i(t.prototype, e), o && i(t, o), t;
        };
        function i(t, e) {
            for (var o = 0; o < e.length; o++) {
                var s = e[o];
                s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
                Object.defineProperty(t, s.key, s);
            }
        }
        function a(e, o) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !o || "object" != t(o) && "function" != typeof o ? e : o;
        }
        function p() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, p);
            for (var o = arguments.length, s = Array(o), n = 0; n < o; n++) s[n] = arguments[n];
            return (t = e = a(this, (t = p.__proto__ || Object.getPrototypeOf(p)).call.apply(t, [ this ].concat(s)))).$usedState = [ "sortStadus", "isClear", "stadus", "icon", "title" ], 
            e.customComponents = [], a(e, t);
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
        })(p, n.Component), o(p, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, o, s) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, o);
                    return void 0 !== n ? "value" in n ? n.value : void 0 !== (n = n.get) ? n.call(s) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, o, s) : void 0;
                })(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "_constructor", this).call(this, t), 
                this.state = {
                    sortStadus: 0
                }, this.toSort = this.toSort.bind(this), this.$$refs = new r.a.RefsArray();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(t) {
                this.props.isClear != t.isClear && this.clear();
            }
        }, {
            key: "componentWillMount",
            value: function() {}
        }, {
            key: "componentDidMount",
            value: function() {
                var t = this, e = this.props.stadus;
                this.setState({
                    sortStadus: e
                }, function() {
                    t.toSort(), 1 == t.props.stadus || t.props.stadus;
                });
            }
        }, {
            key: "componentDidShow",
            value: function() {}
        }, {
            key: "componentDidHide",
            value: function() {}
        }, {
            key: "componentWillUnmount",
            value: function() {}
        }, {
            key: "clear",
            value: function() {
                this.setState({
                    sortStadus: 0
                });
            }
        }, {
            key: "toSort",
            value: function() {
                r.a.eventCenter.trigger("taroClick", {
                    funName: "排序变更"
                });
                var t = "";
                "左右" == this.props.icon ? 1 == this.state.sortStadus ? t = 2 : 2 == this.state.sortStadus && (t = 1) : 1 == this.state.sortStadus ? t = 2 : 2 == this.state.sortStadus ? t = 1 : 0 == this.state.sortStadus && (t = 2), 
                console.log("type=========11111======???", t);
                var e;
                this.setState({
                    sortStadus: t
                }), e = 1 == t ? "ASC" : 2 == t ? "DESC" : "", "计划" == this.props.title ? this.props.onChangeType(e, "planCount") : "进行中" == this.props.title ? this.props.onChangeType(e, "planingCount") : "总签到" == this.props.title ? this.props.onChangeType(e, "ALL_CLOCK") : "正常" == this.props.title ? this.props.onChangeType(e, "NORMAL_CLOCK") : "外勤" == this.props.title ? this.props.onChangeType(e, "ABNORMAL_CLOCK") : this.props.onChangeType(e), 
                console.log("//////////////", e);
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = this.__state.sortStadus;
                return "上下" == this.__props.icon || "左右" == this.__props.icon && (0 == t || 1 == this.__props.stadus ? this.setState({
                    sortStadus: 1
                }, function() {}) : 0 != t && 2 != this.__props.stadus || this.setState({
                    sortStadus: 2
                }, function() {})), Object.assign(this.__state, {}), this.__state;
            }
        } ]), o = n = p, n.$$events = [ "toSort" ], n.$$componentPath = "components/SortListBar/SortListBar", 
        (n = o).defaultProps = {
            stadus: 2,
            title: "标题",
            icon: "上下",
            isClear: 0
        }, o = n, Component(s(0).default.createComponent(n));
    },
    416: function(t, e, o) {
        t.exports = o.p + "components/SortListBar/SortListBar.wxml";
    }
}, [ [ 1673, 0, 1 ] ] ]);