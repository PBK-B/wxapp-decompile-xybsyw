var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 9 ], {
    1225: function(t, e, n) {
        n(401);
    },
    1226: function(t, e, n) {},
    1658: function(e, n, o) {
        o.r(n), o(1225);
        var r = o(0), i = o.n(r), a = (n = o(2), r = o.n(n), o(1));
        o(1226), n = function(t, e, n) {
            return e && s(t.prototype, e), n && s(t, n), t;
        };
        function s(t, e) {
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
        var d = i.a.getApp();
        n = r()({
            options: {
                multipleSlots: !0
            },
            properties: {
                title: {
                    type: String,
                    value: "标题"
                },
                isShow: {
                    type: Boolean,
                    value: !1,
                    observer: function(t, e, n) {}
                },
                cityArray: {
                    type: Array,
                    value: []
                }
            },
            data: {
                secondArr: "",
                selectedSecond: "",
                thirdArr: [],
                selectedThird: "",
                resultArr: [],
                windowHeight: "",
                selectfirst: !0,
                toView1: "",
                toView2: "",
                cityname: "",
                currentLocationForm: ""
            },
            observers: {
                isShow: function(t) {
                    var e;
                    t && (e = this, t = i.a.getStorageSync("currentLocation"), this.setData({
                        currentLocationForm: t
                    }), i.a.removeStorageSync("currentLocation"), console.log(this.data.cityArray), 
                    this.data.cityArray ? (this.setData({
                        selectedSecond: this.data.cityArray[0],
                        selectedThird: this.data.cityArray[1],
                        selectfirst: !1
                    }), setTimeout(function() {
                        e.setData({
                            toView1: "list1-" + e.data.cityArray[0].id,
                            toView2: "list2-" + e.data.cityArray[1].id
                        });
                    }, 200)) : this.setData({
                        selectfirst: !0
                    }));
                }
            },
            ready: function() {
                var t = this;
                i.a.getSystemInfo({
                    success: function(e) {
                        t.setData({
                            windowHeight: e.windowHeight
                        });
                    }
                }), t.getSecondArr();
            },
            methods: {
                onClose: function() {
                    this.triggerEvent("close", {
                        bubbles: !1
                    });
                },
                getSecondArr: function() {
                    var t = this;
                    a.a.xyb_request("common/loadLocation!getProvince.action", "POST", {}, !1, !1).then(function(e) {
                        var n = e.data;
                        n.forEach(function(t, e) {
                            12e4 == t.id && n.splice(e, 1);
                        }), n.forEach(function(t, e) {
                            11e4 != t.id && 31e4 != t.id && 5e5 != t.id || n.splice(e, 1);
                        }), n.unshift({
                            name: "直辖市",
                            id: 0
                        }), t.data.currentLocationForm && "全国" != t.data.currentLocationForm.name ? (n.unshift({
                            name: "全国",
                            id: null
                        }), n.unshift({
                            name: "当前定位",
                            id: t.data.currentLocationForm.id
                        })) : n.unshift({
                            name: "全国",
                            id: null
                        }), t.data.selectfirst ? t.setData({
                            secondArr: n,
                            selectedSecond: n[0]
                        }) : t.setData({
                            secondArr: n
                        }), t.getThirdArr();
                    }, function(t) {
                        console.log(t);
                    });
                },
                getThirdArr: function() {
                    var t = this, e = this.data.selectedSecond.id;
                    return 0 != e ? "当前定位" == this.data.selectedSecond.name ? (this.setData({
                        thirdArr: [ this.data.currentLocationForm ]
                    }), !1) : null != e && void a.a.xyb_request("common/loadLocation!getCity.action", "POST", {
                        id: e
                    }, !1, !1).then(function(n) {
                        (n = n.data).unshift({
                            name: t.data.selectedSecond.name,
                            id: e
                        }), t.setData({
                            thirdArr: n
                        });
                    }, function(t) {
                        console.log(t);
                    }) : (this.setData({
                        thirdArr: [ {
                            id: 11e4,
                            name: "北京市"
                        }, {
                            id: 12e4,
                            name: "天津市"
                        }, {
                            id: 31e4,
                            name: "上海市"
                        }, {
                            id: 5e5,
                            name: "重庆市"
                        } ]
                    }), !1);
                },
                selectSecond: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "城市选择-第一级选择"
                    }), t = t.currentTarget, this.setData({
                        selectedSecond: t.dataset.value
                    }), "当前定位" == this.data.selectedSecond.name ? this.setData({
                        thirdArr: [ this.data.currentLocationForm ]
                    }) : "全国" == this.data.selectedSecond.name ? (d.globalData.searchcity = [ t = {
                        id: null,
                        name: "全国"
                    }, t ], this.triggerEvent("receive", [ t, t ], {
                        bubbles: !1
                    }), this.onClose()) : this.getThirdArr();
                },
                selectChange: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "城市选择-第二级选择"
                    }), t = t.currentTarget.dataset.value, this.setData({
                        selectedThird: t
                    }), d.globalData.searchcity = [ this.data.selectedSecond, this.data.selectedThird ], 
                    t = [ this.data.selectedSecond, this.data.selectedThird ], this.triggerEvent("receive", t, {
                        bubbles: !1
                    });
                }
            }
        })((function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
        }(l, i.a.Component), n(l, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, o) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== r ? "value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, o) : void 0;
                })(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = this.onClose, e = (c = this.data).isShow, n = c.windowHeight, o = c.toView1, r = c.selectedSecond, i = c.secondArr, a = c.toView2, s = c.selectedThird, c = c.thirdArr;
                return Object.assign(this.__state, {
                    isShow: e,
                    onClose: t,
                    windowHeight: n,
                    toView1: o,
                    selectedSecond: r,
                    secondArr: i,
                    toView2: a,
                    selectedThird: s,
                    thirdArr: c
                }), this.__state;
            }
        } ]), n = r = l, r.$$events = [ "onClose", "selectSecond", "selectChange" ], r.options = {
            addGlobalClass: !0
        }, r.$$componentPath = "components/CityChange/cityChange", r = n)) || r;
        function l() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, l);
            for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (t = e = c(this, (t = l.__proto__ || Object.getPrototypeOf(l)).call.apply(t, [ this ].concat(o)))).$usedState = [ "isShow", "onClose", "windowHeight", "toView1", "selectedSecond", "secondArr", "toView2", "selectedThird", "thirdArr" ], 
            e.config = {
                component: !0,
                usingComponents: {
                    "van-popup": "../../vant-weapp/dist/popup/index"
                }
            }, e.customComponents = [], c(e, t);
        }
        r = n, Component(o(0).default.createComponent(n));
    },
    401: function(t, e, n) {
        t.exports = n.p + "components/CityChange/cityChange.wxml";
    }
}, [ [ 1658, 0, 1, 2 ] ] ]);