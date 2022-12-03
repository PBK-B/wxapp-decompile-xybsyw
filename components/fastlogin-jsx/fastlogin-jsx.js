var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 25 ], {
    1267: function(e, t, n) {
        n(421);
    },
    1268: function(e, t, n) {},
    1678: function(t, n, o) {
        o.r(n), o(1267);
        var a = o(0), i = o.n(a), s = o(1), c = o(10), r = o(3);
        o(1268), n = function(e, t, n) {
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
        var g = i.a.getApp();
        function d() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, d);
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return (e = t = u(this, (e = d.__proto__ || Object.getPrototypeOf(d)).call.apply(e, [ this ].concat(o)))).$usedState = [ "tipFlag", "statusHeight", "showLogin", "ifIphoneX", "isFromRecomm", "currentEnvironment", "canIUseGetUserProfile", "showbind", "posResumeMatch", "result", "mobile", "errorMsg", "complete", "wxUserInfo", "filePath", "wxSessionKey", "closeLogin", "receiveLogin" ], 
            t.config = {
                component: !0,
                usingComponents: {
                    "van-popup": "../../vant-weapp/dist/popup/index"
                }
            }, t.customComponents = [], u(t, e);
        }
        (a = (function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + e(n));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(d, a.Component), n(d, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, n, o) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, n, o) : void 0;
                })(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "_constructor", this).call(this, e), 
                this.state = {
                    result: "",
                    mobile: "",
                    errorMsg: "",
                    complete: !1,
                    showbind: !1,
                    wxUserInfo: {},
                    filePath: "",
                    currentEnvironment: "",
                    wxSessionKey: "",
                    ifIphoneX: !1,
                    tipFlag: !1,
                    statusHeight: 88,
                    canIUseGetUserProfile: !1
                }, this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {}
        }, {
            key: "componentWillMount",
            value: function() {}
        }, {
            key: "componentDidMount",
            value: function() {
                i.a.getStorageSync("wxUserInfo") && this.setState({
                    wxUserInfo: i.a.getStorageSync("wxUserInfo")
                }), wx.getUserProfile && this.setState({
                    canIUseGetUserProfile: !0
                }), this.setState({
                    ifIphoneX: g.globalData.isIphoneX
                });
                var e = this;
                g.globalData.currentEnvironment ? e.state.currentEnvironment = g.globalData.currentEnvironment : i.a.getSystemInfo({
                    success: function(t) {
                        g.globalData.currentEnvironment = t.environment || "", e.state.currentEnvironment = t.environment || "";
                    }
                }), i.a.downloadFile({
                    url: "https://xcxresources.xybsyw.com/xcx/images/avatar_man.png",
                    success: function(t) {
                        200 === t.statusCode && e.setState({
                            filePath: t.tempFilePath
                        });
                    }
                }), i.a.getSystemInfo({
                    success: function(t) {
                        var n = -1 < t.system.indexOf("iOS");
                        e.setState({
                            statusHeight: t.statusBarHeight + (n ? 44 : 48)
                        });
                    }
                });
            }
        }, {
            key: "wxlogin",
            value: function() {
                i.a.getSystemInfo({
                    success: function(e) {
                        e.model, e.system.toLowerCase().search("ios") + 1 && (44 <= e.statusBarHeight ? g.globalData.isIphoneX = !0 : g.globalData.isIphoneX = !1), 
                        g.globalData.currentEnvironment = e.environment || "", i.a.setStorageSync("xcxCurrentEnvironment", g.globalData.currentEnvironment);
                    }
                });
                var e = g.globalData.baseUrl;
                return new Promise(function(t, n) {
                    g.globalData.currentEnvironment && "wxwork" == g.globalData.currentEnvironment ? i.a.qy.login({
                        success: function(o) {
                            console.log("企业微信登录"), console.log(o), o.code && i.a.request({
                                url: e + "login/LoginByQyWx!getQyUserId.action",
                                data: {
                                    code: o.code
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    e.data.data ? (i.a.setStorageSync("openid", e.data.data.deviceId), i.a.setStorageSync("sessionKey", e.data.data.sessionKey), 
                                    t(e)) : (s.a.xyb_request("blog/BlogPost.action", "POST", {
                                        serviceName: "login/LoginByQyWx!getQyUserId.action",
                                        info: JSON.stringify(e.data)
                                    }, !1, !0, 2).then(function(e) {}, function(e) {
                                        console.log(e);
                                    }), i.a.showToast({
                                        title: "企业微信登录失败,请选择其他方式!",
                                        icon: "none"
                                    }));
                                },
                                fail: function(e) {
                                    console.info("获取用户openId失败"), n(e);
                                }
                            });
                        },
                        fail: function(e) {
                            n(e);
                        }
                    }) : (console.log("微信登录"), i.a.login({
                        success: function(o) {
                            o.code && i.a.request({
                                url: e + "common/getOpenId.action",
                                data: {
                                    code: o.code
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    e.data.data ? (i.a.setStorageSync("openid", e.data.data.openId), i.a.setStorageSync("sessionKey", e.data.data.sessionKey), 
                                    t(e)) : (s.a.xyb_request("blog/BlogPost.action", "POST", {
                                        serviceName: "common/getOpenId.action",
                                        info: JSON.stringify(e.data)
                                    }, !1, !0, 2).then(function(e) {}, function(e) {
                                        console.log(e);
                                    }), i.a.showToast({
                                        title: "微信登录失败,请选择其他方式!",
                                        icon: "none"
                                    }));
                                },
                                fail: function(e) {
                                    console.info("获取用户openId失败"), n(e);
                                }
                            });
                        }
                    }));
                });
            }
        }, {
            key: "closeLogin",
            value: function() {
                this.props.isFromRecomm || this.props.closeLogin();
            }
        }, {
            key: "closePhone",
            value: function() {
                this.setState({
                    showbind: !1
                }), g.globalData.currentEnvironment && "wxwork" == g.globalData.currentEnvironment && this.wxlogin();
            }
        }, {
            key: "toAccountLogin",
            value: function() {
                i.a.navigateTo({
                    url: "/videoBag/pages/login/login/login"
                }), this.closeLogin();
            }
        }, {
            key: "getUserInfo",
            value: function(e) {
                console.log(e);
                var t = this;
                wx.getUserProfile({
                    desc: "用于完善会员资料",
                    success: function(e) {
                        i.a.setStorageSync("wxUserInfo", e.userInfo), t.setData({
                            wxUserInfo: e.userInfo
                        });
                        var n = i.a.getStorageSync("sessionKey") || "";
                        n ? s.a.xyb_request("common/getUnionId.action", "POST", {
                            encryptedData: e.encryptedData,
                            iv: e.iv,
                            key: n
                        }, !1, !1).then(function(e) {
                            var n = e.data.unionId;
                            i.a.setStorageSync("unionid", n), i.a.getStorage({
                                key: "openid",
                                success: function(e) {
                                    t.usewxlogin(e.data, n);
                                }
                            });
                        }, function(e) {
                            console.log(e);
                        }) : t.wxlogin().then(function(n) {
                            s.a.xyb_request("common/getUnionId.action", "POST", {
                                encryptedData: e.encryptedData,
                                iv: e.iv,
                                key: n.data.data.sessionKey
                            }, !1, !1).then(function(e) {
                                var n = e.data.unionId;
                                i.a.setStorageSync("unionid", n), i.a.getStorage({
                                    key: "openid",
                                    success: function(e) {
                                        t.usewxlogin(e.data, n);
                                    }
                                });
                            }, function(e) {
                                console.log(e);
                            });
                        }, function(e) {});
                    },
                    fail: function(e) {
                        i.a.showToast({
                            title: "您已拒绝，登录失败!",
                            icon: "none"
                        });
                    }
                }), this.closeLogin();
            }
        }, {
            key: "getUserProfile",
            value: function(e) {
                var t = this;
                console.log("获取微信用户信息getUserProfile", e), console.log("获取微信用户信息wxUserInfo", i.a.getStorageSync("wxUserInfo"));
                var n = i.a.getStorageSync("wxUserInfo");
                n && n.nickName ? t.wxlogin().then(function(e) {
                    var n;
                    e.data.data.unionId && (n = e.data.data.unionId, i.a.setStorageSync("unionid", n), 
                    i.a.getStorage({
                        key: "openid",
                        success: function(e) {
                            t.usewxlogin(e.data, n);
                        }
                    }));
                }, function(e) {}) : this.getUserProfileFun(e), this.closeLogin();
            }
        }, {
            key: "getUserProfileFun",
            value: function(e) {
                var t = this;
                wx.getUserProfile({
                    desc: "登录",
                    lang: "zh_CN",
                    success: function(e) {
                        console.log("success", e), i.a.setStorageSync("wxUserInfo", e.userInfo), t.setState({
                            wxUserInfo: e.userInfo
                        }), t.wxlogin().then(function(n) {
                            var o;
                            n.data.data.unionId ? (o = n.data.data.unionId, i.a.setStorageSync("unionid", o), 
                            i.a.getStorage({
                                key: "openid",
                                success: function(e) {
                                    t.usewxlogin(e.data, o);
                                }
                            })) : s.a.xyb_request("common/getUnionId.action", "POST", {
                                encryptedData: e.encryptedData,
                                iv: e.iv,
                                key: n.data.data.sessionKey
                            }, !1, !1).then(function(e) {
                                var n = e.data.unionId;
                                i.a.setStorageSync("unionid", n), i.a.getStorage({
                                    key: "openid",
                                    success: function(e) {
                                        t.usewxlogin(e.data, n);
                                    }
                                });
                            }, function(e) {
                                console.log(e);
                            });
                        }, function(e) {});
                    },
                    fail: function(e) {
                        console.log("fail", e), i.a.showToast({
                            title: "您已拒绝，登录失败",
                            icon: "none"
                        });
                    }
                });
            }
        }, {
            key: "getEnterpriseUserInfo",
            value: function(e) {
                var t = this, n = i.a.getStorageSync("openid") || null;
                s.a.xyb_request("login/LoginByQyWx!qyWxBind.action", "POST", {
                    deviceId: n,
                    phone: null
                }, !1, !1).then(function(n) {
                    var o;
                    200 == n.code && "success" == n.msg ? t.qyWxBind() : (console.log(e.detail.encryptedData), 
                    e.detail.encryptedData ? (o = g.globalData.baseUrl, console.log("微信登录"), i.a.login({
                        success: function(e) {
                            e.code && i.a.request({
                                url: o + "common/getOpenId.action",
                                data: {
                                    code: e.code
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    e.data.data ? i.a.navigateTo({
                                        url: "/videoBag/pages/login/login/login"
                                    }) : (s.a.xyb_request("blog/BlogPost.action", "POST", {
                                        serviceName: "common/getOpenId.action",
                                        info: JSON.stringify(e.data)
                                    }, !1, !0, 2).then(function(e) {}, function(e) {
                                        console.log(e);
                                    }), i.a.showToast({
                                        title: "企业微信快速登录失败,请选择其他方式!",
                                        icon: "none"
                                    }), t.wxlogin(), t.toAccountLogin());
                                },
                                fail: function(e) {
                                    t.wxlogin(), t.toAccountLogin(), console.info("获取用户openId失败");
                                }
                            });
                        }
                    })) : t.toAccountLogin());
                }, function(e) {
                    console.log(e);
                }), this.closeLogin();
            }
        }, {
            key: "getEnterpriseUserPhone",
            value: function(e) {
                var t = this, n = this;
                s.a.xyb_request("common/GetPhone!getNew.action", "POST", {
                    code: e.detail.code
                }, !1, !1).then(function(e) {
                    e.data.phone ? (i.a.getStorageSync("wxUserInfo") && n.setState({
                        wxUserInfo: i.a.getStorageSync("wxUserInfo")
                    }), n.wxlogin().then(function(t) {
                        n.uploadImg(e.data.phone);
                    }, function(e) {
                        i.a.showToast({
                            title: "企业微信快速登录失败,请选择其他方式!",
                            icon: "none"
                        }), setTimeout(function() {
                            n.toAccountLogin();
                        }, 2e3);
                    })) : (i.a.showToast({
                        title: "企业微信快速登录失败,请选择其他方式!",
                        icon: "none"
                    }), t.toAccountLogin()), n.setState({
                        showbind: !1
                    });
                }, function(e) {
                    n.wxlogin(), console.log(e);
                });
            }
        }, {
            key: "usewxlogin",
            value: function(e, t) {
                var n = this, o = this;
                s.a.xyb_request("login/login!checkWxBind.action", "POST", {
                    openId: e,
                    unionId: t
                }, !1, !1).then(function(a) {
                    i.a.setStorageSync("Cookie", "JSESSIONID=" + a.data.sessionId), a.data.bind ? (n.setState({
                        complete: a.data.complete
                    }), s.a.xyb_request("login/login!wx.action", "POST", {
                        openId: e,
                        unionId: t
                    }, !1, !1).then(function(t) {
                        r.a.Data.userInfo = {
                            open_id: e,
                            phone: t.data.phone
                        }, i.a.setStorageSync("logintype", "1"), i.a.setStorageSync("sessionId", t.data.sessionId), 
                        i.a.setStorageSync("username", t.data.md5Uid), g.globalData.isLogin = !0, "" != t.data.loginerId && "null" != t.data.loginerId && i.a.setStorageSync("userid", t.data.loginerId), 
                        i.a.setStorageSync("Cookie", "JSESSIONID=" + t.data.sessionId);
                        var a = Date.parse(new Date());
                        i.a.setStorageSync("Cookie_time", a + 36e5), g.globalData.shareschoolId = "", i.a.setStorage({
                            key: "studentActivate",
                            data: t.data.activate
                        }), g.globalData.studentActivate = t.data.activate, n.getAccountinfo(), g.globalData.isLogin = !0, 
                        n.props.receiveLogin(), n.setState({
                            tipFlag: !0
                        }), setTimeout(function() {
                            o.setState({
                                tipFlag: !1
                            });
                        }, 1500);
                    }, function(e) {})) : i.a.navigateTo({
                        url: "/videoBag/pages/login/login/login"
                    });
                }, function(e) {
                    console.log(e);
                });
            }
        }, {
            key: "getAccountinfo",
            value: function() {
                s.a.xyb_request("account/LoadAccountInfo.action", "POST", {}, !1, !1).then(function(e) {
                    console.log(e), i.a.setStorageSync("loginerName", e.data.loginer), i.a.setStorage({
                        key: "studentActivate",
                        data: e.data.activate
                    }), g.globalData.studentActivate = e.data.activate;
                }, function(e) {
                    console.log(e);
                });
            }
        }, {
            key: "uploadImg",
            value: function(e) {
                var t, n = this;
                if (!(t = g.globalData.currentEnvironment && "wxwork" == g.globalData.currentEnvironment || !n.state.wxUserInfo || !n.state.wxUserInfo.avatarUrl ? null : n.state.wxUserInfo.avatarUrl)) return g.globalData.currentEnvironment && "wxwork" == g.globalData.currentEnvironment ? n.qyWxBind(e) : n.getIsMobile(e, null), 
                !1;
                i.a.downloadFile({
                    url: t,
                    success: function(t) {
                        200 === t.statusCode && (n.setState({
                            filePath: t.tempFilePath
                        }), g.globalData.currentEnvironment && "wxwork" == g.globalData.currentEnvironment ? n.qyWxBind(e) : c.a.upLoadOss(this.state.filePath, "STUDENT", "WX_AVATAR_IMAGES", !0).then(function(t) {
                            n.getIsMobile(e, t.key);
                        }));
                    }
                });
            }
        }, {
            key: "getPhoneNumber",
            value: function(e) {
                var t = this;
                e.detail.encryptedData ? (i.a.getStorageSync("sessionKey"), s.a.xyb_request("common/GetPhone!getNew.action", "POST", {
                    code: e.detail.code
                }, !1, !1).then(function(e) {
                    i.a.getStorageSync("wxUserInfo") && t.setState({
                        wxUserInfo: i.a.getStorageSync("wxUserInfo")
                    }), t.setState({
                        showbind: !1
                    }), t.uploadImg(e.data.phone);
                }, function(e) {
                    console.log(e);
                })) : (this.setState({
                    showbind: !1
                }), this.toAccountLogin());
            }
        }, {
            key: "getIsMobile",
            value: function(e, t) {
                var n = this;
                s.a.xyb_request("common/GetIsMobile.action", "POST", {
                    mobile: e,
                    unionId: i.a.getStorageSync("unionid") || ""
                }, !1, !1).then(function(o) {
                    o.data.isMobile ? n.usewxbind(e, t) : i.a.navigateTo({
                        url: "/videoBag/pages/login/login/login?phone=" + e
                    });
                }, function(e) {
                    console.log(e);
                });
            }
        }, {
            key: "usewxbind",
            value: function(e, t) {
                g.globalData.baseUrl;
                var n = this, o = i.a.getStorageSync("openid") || null, a = i.a.getStorageSync("unionid") || null;
                t = {
                    openId: o,
                    unionId: a,
                    phone: e,
                    wxname: this.state.wxUserInfo.nickName,
                    wxCity: this.state.wxUserInfo.city,
                    avatarTempPath: t
                };
                s.a.xyb_request("login/loginByMobileOrThird!wxBind.action", "POST", t, !1, !1).then(function(e) {
                    var t, a;
                    e.data && (t = e.data, n.props.receive(), 200 == e.code ? (i.a.setStorageSync("logintype", "1"), 
                    i.a.setStorageSync("sessionId", t.sessionId), i.a.setStorageSync("userid", t.loginerId), 
                    i.a.setStorageSync("Cookie", "JSESSIONID=" + t.sessionId), a = Date.parse(new Date()), 
                    i.a.setStorageSync("Cookie_time", a + 36e5), g.globalData.isLogin = !0, n.props.receiveLogin(), 
                    g.globalData.shareschoolId = "", i.a.setStorage({
                        key: "studentActivate",
                        data: t.activate
                    }), r.a.Data.userInfo = {
                        open_id: o,
                        phone: t.phone
                    }, n.setState({
                        tipFlag: !0
                    }), setTimeout(function() {
                        n.setState({
                            tipFlag: !1
                        }), i.a.reLaunch({
                            url: "/pages/find/index/index?fromAutoLogin=true"
                        });
                    }, 1500)) : i.a.showToast({
                        title: e.msg,
                        icon: "none"
                    }));
                }, function(e) {
                    i.a.showToast({
                        title: "绑定失败",
                        icon: "none"
                    });
                });
            }
        }, {
            key: "qyWxBind",
            value: function(e) {
                var t = this, n = i.a.getStorageSync("openid") || null;
                s.a.xyb_request("login/LoginByQyWx!qyWxBind.action", "POST", {
                    deviceId: n,
                    phone: e || null
                }, !1, !1).then(function(o) {
                    var a = o;
                    200 == o.code ? (r.a.Data.userInfo = {
                        open_id: n,
                        phone: a.data.phone
                    }, i.a.setStorageSync("logintype", "1"), i.a.setStorageSync("qywxPhone", e), i.a.setStorageSync("sessionId", a.data.sessionId), 
                    i.a.setStorageSync("userid", a.data.loginerId), i.a.setStorageSync("Cookie", "JSESSIONID=" + a.data.sessionId), 
                    o = Date.parse(new Date()), i.a.setStorageSync("Cookie_time", o + 36e5), t.props.receiveLogin(), 
                    g.globalData.isLogin = !0, g.globalData.shareschoolId = "", t.getAccountinfo()) : i.a.showModal({
                        title: "校友邦提示",
                        content: a.msg,
                        showCancel: !1,
                        confirmColor: "#FF453A"
                    });
                }, function(e) {
                    console.log(e);
                });
            }
        }, {
            key: "show",
            value: function() {
                this.setState({
                    isShow: !this.state.isShow
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
            key: "_createData",
            value: function() {
                var e = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t, n = (t = this.__props).showLogin, o = t.posResumeMatch, a = t.isFromRecomm;
                return (t = this.__state).currentEnvironment, t.showbind, t.ifIphoneX, t.tipFlag, 
                t.statusHeight, t.canIUseGetUserProfile, this.anonymousFunc0 = function(t) {
                    t.stopPropagation(), e.closeLogin(t);
                }, this.anonymousFunc1 = function(t) {
                    t.stopPropagation(), e.getUserProfile(t);
                }, this.anonymousFunc2 = function(t) {
                    t.stopPropagation(), e.closePhone(t);
                }, Object.assign(this.__state, {
                    showLogin: n,
                    isFromRecomm: a,
                    posResumeMatch: o
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function(e) {
                e.stopPropagation();
            }
        }, {
            key: "anonymousFunc1",
            value: function(e) {
                e.stopPropagation();
            }
        }, {
            key: "anonymousFunc2",
            value: function(e) {
                e.stopPropagation();
            }
        } ]), n = a = d, a.$$events = [ "closeLogin", "anonymousFunc0", "getUserInfo", "anonymousFunc1", "getEnterpriseUserInfo", "anonymousFunc2", "getPhoneNumber", "getEnterpriseUserPhone" ], 
        a.$$componentPath = "components/fastlogin-jsx/fastlogin-jsx", n)).defaultProps = {
            showLogin: !1,
            posResumeMatch: !1,
            currentEnvironment: g.globalData.currentEnvironment,
            isFromRecomm: !1
        }, n = a, Component(o(0).default.createComponent(a));
    },
    421: function(e, t, n) {
        e.exports = n.p + "components/fastlogin-jsx/fastlogin-jsx.wxml";
    }
}, [ [ 1678, 0, 1, 2 ] ] ]);