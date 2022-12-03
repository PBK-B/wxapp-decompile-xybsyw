var t = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 10 ], {
    1295: function(t, e, n) {
        n(436);
    },
    1296: function(t, e, n) {},
    1692: function(e, n, r) {
        r.r(n), r(1295);
        var a = r(0), i = r.n(a), o = (n = r(2), a = r.n(n), r(1));
        r(1296), n = function(t, e, n) {
            return e && s(t.prototype, e), n && s(t, n), t;
        };
        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        function c(e, n) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != t(n) && "function" != typeof n ? e : n;
        }
        var u = i.a.getApp();
        n = a()({
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
                    value: [ {
                        name: "选项一",
                        id: 1
                    }, {
                        name: "选项二",
                        id: 2
                    } ]
                }
            },
            data: {
                firstArr: [],
                firstId: "",
                secondArr: [],
                resultArr: [],
                contentHeight: "",
                height: "",
                ifIphoneX: !1
            },
            observers: {
                isShow: function(t) {
                    var e;
                    t && (1 == (e = this).data.cityArray.length && "全国" == this.data.cityArray[0].name || 0 == this.data.cityArray.length ? (this.setData({
                        resultArr: [ {
                            name: "全国",
                            id: null
                        } ],
                        secondArr: [ {
                            name: "全国",
                            id: null
                        } ],
                        firstId: null
                    }), (t = this.data.secondArr)[0].checked = !0, this.setData({
                        secondArr: t
                    })) : this.setData({
                        resultArr: this.data.cityArray
                    }), setTimeout(function() {
                        e.getHeight();
                    }, 1e3));
                }
            },
            ready: function() {
                this.getProvinceData(), this.setData({
                    ifIphoneX: u.globalData.isIphoneX
                });
            },
            methods: {
                onClose: function() {
                    this.triggerEvent("close", {
                        bubbles: !1
                    });
                },
                onCloseEvent: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "城市选择组件-关闭"
                    }), this.onClose();
                },
                getProvinceData: function() {
                    var t = this;
                    o.a.xyb_request("common/loadLocation!getProvince.action", "POST", {}, !1, !1).then(function(e) {
                        (e = e.data || []).unshift({
                            name: "全国",
                            id: null
                        }), t.setData({
                            firstArr: e
                        });
                    }, function(t) {
                        console.log(t);
                    });
                },
                getHeight: function() {
                    var t = i.a.createSelectorQuery().in(this.$scope), e = this;
                    t.select(".actionradio_warp").boundingClientRect(function(t) {
                        e.setData({
                            contentHeight: t.height || 0
                        });
                    }).exec(), t.select(".footer").boundingClientRect(function(t) {
                        t = e.data.contentHeight - (t.height || 0) - 40, e.setData({
                            height: t
                        });
                    }).exec();
                },
                selectFirst: function(t) {
                    var e = this;
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "城市选择组件-选择第一级"
                    });
                    var n = this;
                    this.setData({
                        firstId: t.currentTarget.dataset.item.id
                    });
                    var r = t.currentTarget.dataset.item;
                    this.data.resultArr, t = this.data.firstId;
                    o.a.xyb_request("/common/loadLocation!getCity.action", "POST", {
                        id: t
                    }, !1, !1).then(function(t) {
                        var a = t.data || [];
                        "全国" == r.name ? a.unshift({
                            name: "全国",
                            id: e.data.firstId
                        }) : "北京市" != r.name && "天津市" != r.name && "上海市" != r.name && "重庆市" != r.name && a.unshift({
                            name: r.name,
                            nameHtml: "全" + r.name,
                            id: e.data.firstId
                        });
                        for (var i = 0; i < a.length; i++) a[i].checked = !1, a[i].parentId = n.data.firstId;
                        for (var o = n.data.resultArr, s = function(t) {
                            var e = a.findIndex(function(e, n, r) {
                                return e.id == o[t].id;
                            });
                            -1 != e && (a[e].checked = !0);
                        }, c = 0; c < o.length; c++) s(c);
                        console.log(a), n.setData({
                            secondArr: a
                        });
                    }, function(t) {
                        console.log(t);
                    });
                },
                selectChange: function(t) {
                    var e = this;
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "城市选择组件-选择第二级"
                    });
                    var n, r, a, o = Number(t.currentTarget.id), s = (t = t.currentTarget).dataset.value, c = this.data.resultArr;
                    if ("全国" == s.name ? -1 == c.findIndex(function(t, e, n) {
                        return t.name == s.name;
                    }) ? e.setData({
                        resultArr: c = [ {
                            name: "全国",
                            id: null
                        } ],
                        firstId: null
                    }) : (c.splice(0, 1), this.setData({
                        resultArr: c,
                        firstId: ""
                    })) : c && c[0] && "全国" == c[0].name && (c.splice(0, 1), this.setData({
                        resultArr: c
                    })), t.dataset.checked) s.id == s.parentId ? (a = c.findIndex(function(t, e, n) {
                        return t.id == s.id;
                    }), this.data.secondArr.findIndex(function(t, e, n) {
                        return t.id == s.id;
                    }), -1 != a && c.splice(a, 1), this.data.secondArr.forEach(function(t, e) {
                        t.checked = !1;
                    })) : (n = 10 - c.length, r = [], this.data.secondArr[0].checked && this.data.secondArr.length > 10 - c.length - 1 && i.a.showToast({
                        title: "省市数量不要超过10个哦",
                        icon: "none"
                    }), a = c.findIndex(function(t, e, n) {
                        return t.id == s.id;
                    }), c.splice(a, 1), this.data.secondArr.forEach(function(t, a) {
                        e.data.secondArr[0].checked && 0 != a && a != o && 0 <= n && (r.push(t), --n);
                    }), r.forEach(function(t, e) {
                        c.push(t);
                    }), e.data.secondArr[0].checked = !1, e.data.secondArr[o].checked = !1, c.forEach(function(t, n) {
                        e.data.secondArr.forEach(function(e, n) {
                            e.id == t.id && (e.checked = !0);
                        });
                    })); else {
                        if (9 < c.length && !this.data.secondArr[o].checked && s.id != s.parentId) return i.a.showToast({
                            title: "省市数量不要超过10个哦",
                            icon: "none"
                        }), !1;
                        this.data.secondArr[o].checked = !0;
                        var u, d = [];
                        this.data.secondArr.forEach(function(t, e) {
                            "全国" != t.name && "北京市" != t.name && "天津市" != t.name && "上海市" != t.name && "重庆市" != t.name && t.checked && 0 != e && d.push(t);
                        }), s.id == s.parentId || d.length == this.data.secondArr.length - 1 ? (u = [], 
                        c.forEach(function(t, n) {
                            t.parentId == e.data.secondArr[0].id && u.push(t);
                        }), u.forEach(function(t) {
                            c.forEach(function(e, n) {
                                t.name == e.name && c.splice(n);
                            });
                        }), this.data.secondArr.forEach(function(t) {
                            t.checked = !0;
                        }), c.push(this.data.secondArr[0])) : c.push(s);
                    }
                    this.setData({
                        secondArr: this.data.secondArr,
                        resultArr: c
                    }), setTimeout(function() {
                        e.getHeight();
                    }, 500);
                },
                deleteResult: function(t) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "城市选择组件-删除已选中"
                    });
                    var e = t.currentTarget.dataset.index, n = t.currentTarget.dataset.id, r = t.currentTarget.dataset.name;
                    this.data.resultArr.splice(e, 1), t = this.data.secondArr.findIndex(function(t, e, r) {
                        return t.id == n;
                    }), e = this.data.secondArr, -1 != t && (e[t].checked = !1), this.data.secondArr.forEach(function(t, e) {
                        n == t.parentId && (t.checked = !1);
                    }), this.setData({
                        resultArr: this.data.resultArr,
                        secondArr: e
                    }), "全国" == r && this.setData({
                        firstId: ""
                    });
                    var a = this;
                    setTimeout(function() {
                        a.getHeight();
                    }, 500);
                },
                resetResult: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "城市选择组件-重置"
                    });
                    for (var t = this.data.secondArr, e = 0; e < t.length; e++) t[e].checked = !1;
                    this.setData({
                        resultArr: [],
                        secondArr: t
                    });
                    var n = this;
                    setTimeout(function() {
                        n.getHeight();
                    }, 500);
                },
                sureSelect: function() {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "城市选择组件-确认"
                    });
                    var t = this.data.resultArr;
                    this.triggerEvent("receive", t, {
                        bubbles: !1
                    }), this.onClose();
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
        }(d, i.a.Component), n(d, [ {
            key: "_constructor",
            value: function(t) {
                (function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(r) : void 0 : null !== (e = Object.getPrototypeOf(e)) ? t(e, n, r) : void 0;
                })(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var t = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var e = this.onClose, n = (u = this.data).isShow, r = u.title, a = u.height, i = u.firstId, o = u.firstArr, s = u.secondArr, c = u.ifIphoneX, u = u.resultArr;
                return this.anonymousFunc0 = function(e) {
                    e.stopPropagation(), t.onCloseEvent(e);
                }, Object.assign(this.__state, {
                    isShow: n,
                    onClose: e,
                    height: a,
                    firstId: i,
                    firstArr: o,
                    secondArr: s,
                    ifIphoneX: c,
                    resultArr: u,
                    title: r
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(t) {
                t.stopPropagation();
            }
        } ]), n = a = d, a.$$events = [ "onClose", "anonymousFunc0", "selectFirst", "selectChange", "deleteResult", "resetResult", "sureSelect" ], 
        a.options = {
            addGlobalClass: !0
        }, a.$$componentPath = "components/CitySelect/citySelect", a = n)) || a;
        function d() {
            var t, e;
            !function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, d);
            for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return (t = e = c(this, (t = d.__proto__ || Object.getPrototypeOf(d)).call.apply(t, [ this ].concat(r)))).$usedState = [ "isShow", "onClose", "height", "firstId", "firstArr", "secondArr", "ifIphoneX", "resultArr", "title" ], 
            e.config = {
                component: !0,
                usingComponents: {
                    "van-popup": "../../vant-weapp/dist/popup/index"
                }
            }, e.customComponents = [], c(e, t);
        }
        a = n, Component(r(0).default.createComponent(n));
    },
    436: function(t, e, n) {
        t.exports = n.p + "components/CitySelect/citySelect.wxml";
    }
}, [ [ 1692, 0, 1, 2 ] ] ]);