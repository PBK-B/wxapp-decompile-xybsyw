var e = require("../../@babel/runtime/helpers/typeof");

(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 26 ], {
    1046: function(e, t, n) {
        n(327);
    },
    1047: function(e, t, n) {},
    1586: function(t, n, o) {
        o.r(n), o(1046);
        var a = o(0), i = o.n(a), s = (n = o(2), a = o.n(n), o(1)), r = o(10), c = o(3), u = o(12);
        o(1047), n = function(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e;
        };
        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        function g(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != e(n) && "function" != typeof n ? t : n;
        }
        var d = i.a.getApp();
        n = a()({
            options: {
                multipleSlots: !0
            },
            properties: {
                title: {
                    type: String,
                    value: "标题"
                },
                source: {
                    type: String,
                    value: ""
                },
                showLogin: {
                    type: Boolean,
                    value: !1
                },
                posResumeMatch: {
                    type: Boolean,
                    value: !1
                },
                currentEnvironment: {
                    type: String,
                    value: d.globalData.currentEnvironment
                },
                isFromRecomm: {
                    type: Boolean,
                    value: !1
                }
            },
            data: {
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
            },
            ready: function() {
                i.a.getStorageSync("wxUserInfo") && this.setData({
                    wxUserInfo: i.a.getStorageSync("wxUserInfo")
                }), wx.getUserProfile && this.setData({
                    canIUseGetUserProfile: !0
                }), this.setData({
                    ifIphoneX: d.globalData.isIphoneX
                });
                var e = this;
                d.globalData.currentEnvironment ? e.data.currentEnvironment = d.globalData.currentEnvironment : i.a.getSystemInfo({
                    success: function(t) {
                        d.globalData.currentEnvironment = t.environment || "", e.data.currentEnvironment = t.environment || "";
                    }
                }), i.a.downloadFile({
                    url: "https://xcxresources.xybsyw.com/xcx/images/avatar_man.png",
                    success: function(t) {
                        200 === t.statusCode && e.setData({
                            filePath: t.tempFilePath
                        });
                    }
                }), i.a.getSystemInfo({
                    success: function(t) {
                        var n = -1 < t.system.indexOf("iOS");
                        e.setData({
                            statusHeight: t.statusBarHeight + (n ? 44 : 48)
                        });
                    }
                });
            },
            methods: {
                wxlogin: function() {
                    i.a.getSystemInfo({
                        success: function(e) {
                            e.model, e.system.toLowerCase().search("ios") + 1 && (44 <= e.statusBarHeight ? d.globalData.isIphoneX = !0 : d.globalData.isIphoneX = !1), 
                            d.globalData.currentEnvironment = e.environment || "", i.a.setStorageSync("xcxCurrentEnvironment", d.globalData.currentEnvironment);
                        }
                    });
                    var e = d.globalData.baseUrl;
                    return new Promise(function(t, n) {
                        d.globalData.currentEnvironment && "wxwork" == d.globalData.currentEnvironment ? i.a.qy.login({
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
                },
                closeLogin: function() {
                    this.data.isFromRecomm || (console.log("triggerEvent"), this.triggerEvent("closeLogin"));
                },
                closePhone: function() {
                    this.setData({
                        showbind: !1
                    }), d.globalData.currentEnvironment && "wxwork" == d.globalData.currentEnvironment && this.wxlogin();
                },
                toAccountLogin: function() {
                    i.a.navigateTo({
                        url: "/videoBag/pages/login/login/login"
                    }), this.closeLogin();
                },
                getUserInfo: function(e) {
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
                                title: "您已拒绝，登录失败",
                                icon: "none"
                            });
                        }
                    }), this.closeLogin();
                },
                getUserProfile: function(e) {
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
                },
                getUserProfileFun: function(e) {
                    var t = this;
                    wx.getUserProfile({
                        desc: "登录",
                        lang: "zh_CN",
                        success: function(e) {
                            console.log("success", e), i.a.setStorageSync("wxUserInfo", e.userInfo), t.setData({
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
                },
                getEnterpriseUserInfo: function(e) {
                    var t = this, n = i.a.getStorageSync("openid") || null;
                    s.a.xyb_request("login/LoginByQyWx!qyWxBind.action", "POST", {
                        deviceId: n,
                        phone: null
                    }, !1, !1).then(function(n) {
                        var o;
                        200 == n.code && "success" == n.msg ? t.qyWxBind() : (console.log(e.detail.encryptedData), 
                        e.detail.encryptedData ? (o = d.globalData.baseUrl, console.log("微信登录"), i.a.login({
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
                },
                getEnterpriseUserPhone: function(e) {
                    var t = this, n = this;
                    s.a.xyb_request("common/GetPhone!getNew.action", "POST", {
                        code: e.detail.code
                    }, !1, !1).then(function(e) {
                        e.data.phone ? (i.a.getStorageSync("wxUserInfo") && n.setData({
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
                        }), t.toAccountLogin()), n.setData({
                            showbind: !1
                        });
                    }, function(e) {
                        n.wxlogin(), console.log(e);
                    });
                },
                patchCache: function() {
                    var e = new Date(), t = e.getFullYear(), n = e.getMonth() + 1, o = e.getDate();
                    "" != i.a.getStorageSync("sfxyLoginCount") && i.a.getStorageSync("sfxyLoginCount") == t + "/" + n + "/" + o ? (e = i.a.getStorageSync("todayLoginCount") ? i.a.getStorageSync("todayLoginCount") : 0, 
                    i.a.setStorageSync("todayLoginCount", e + 1)) : (i.a.setStorageSync("sfxyLoginCount", t + "/" + n + "/" + o), 
                    i.a.setStorageSync("todayLoginCount", 1), i.a.setStorageSync("todayJumpCount", 0));
                },
                usewxlogin: function(e, t) {
                    var n = this, o = this;
                    s.a.xyb_request("login/login!checkWxBind.action", "POST", {
                        openId: e,
                        unionId: t
                    }, !1, !1).then(function(a) {
                        i.a.setStorageSync("Cookie", "JSESSIONID=" + a.data.sessionId), a.data.bind ? (n.setData({
                            complete: a.data.complete
                        }), s.a.xyb_request("login/login!wx.action", "POST", {
                            openId: e,
                            unionId: t
                        }, !1, !1).then(function(t) {
                            c.a.Data.userInfo = {
                                open_id: e,
                                phone: t.data.phone
                            }, i.a.setStorageSync("logintype", "1"), i.a.setStorageSync("sessionId", t.data.sessionId), 
                            i.a.setStorageSync("username", t.data.md5Uid), d.globalData.isLogin = !0, "" != t.data.loginerId && "null" != t.data.loginerId && i.a.setStorageSync("userid", t.data.loginerId), 
                            i.a.setStorageSync("Cookie", "JSESSIONID=" + t.data.sessionId);
                            var a = Date.parse(new Date());
                            i.a.setStorageSync("Cookie_time", a + 36e5), d.globalData.shareschoolId = "", i.a.setStorage({
                                key: "studentActivate",
                                data: t.data.activate
                            }), d.globalData.studentActivate = t.data.activate, n.getAccountinfo(), n.triggerEvent("receive", !1, {
                                bubbles: !1
                            }), d.globalData.isLogin = !0, n.triggerEvent("receiveLogin", !0, {
                                bubbles: !1
                            }), n.setData({
                                tipFlag: !0
                            }), setTimeout(function() {
                                o.setData({
                                    tipFlag: !1
                                });
                            }, 1500), n.patchCache();
                        }, function(e) {})) : i.a.navigateTo({
                            url: "/videoBag/pages/login/login/login"
                        });
                    }, function(e) {
                        console.log(e);
                    });
                },
                getAccountinfo: function() {
                    s.a.xyb_request("account/LoadAccountInfo.action", "POST", {}, !1, !1).then(function(e) {
                        console.log(e), i.a.setStorageSync("loginerName", e.data.loginer), i.a.setStorage({
                            key: "studentActivate",
                            data: e.data.activate
                        }), d.globalData.studentActivate = e.data.activate;
                    }, function(e) {
                        console.log(e);
                    });
                },
                uploadImg: function(e) {
                    var t, n = this;
                    if (!(t = d.globalData.currentEnvironment && "wxwork" == d.globalData.currentEnvironment || !n.data.wxUserInfo || !n.data.wxUserInfo.avatarUrl ? null : n.data.wxUserInfo.avatarUrl)) return d.globalData.currentEnvironment && "wxwork" == d.globalData.currentEnvironment ? n.qyWxBind(e) : n.getIsMobile(e, null), 
                    !1;
                    i.a.downloadFile({
                        url: t,
                        success: function(t) {
                            200 === t.statusCode && (n.setData({
                                filePath: t.tempFilePath
                            }), d.globalData.currentEnvironment && "wxwork" == d.globalData.currentEnvironment ? n.qyWxBind(e) : r.a.upLoadOss(this.data.filePath, "STUDENT", "WX_AVATAR_IMAGES", !0).then(function(t) {
                                n.getIsMobile(e, t.key);
                            }));
                        }
                    });
                },
                getPhoneNumber: function(e) {
                    var t = this;
                    e.detail.encryptedData ? (i.a.getStorageSync("sessionKey"), s.a.xyb_request("common/GetPhone!getNew.action", "POST", {
                        code: e.detail.code
                    }, !1, !1).then(function(e) {
                        i.a.getStorageSync("wxUserInfo") && t.setData({
                            wxUserInfo: i.a.getStorageSync("wxUserInfo")
                        }), t.setData({
                            showbind: !1
                        }), t.uploadImg(e.data.phone);
                    }, function(e) {
                        console.log(e);
                    })) : (this.setData({
                        showbind: !1
                    }), this.toAccountLogin());
                },
                getIsMobile: function(e, t) {
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
                },
                usewxbind: function(e, t) {
                    var n = this, o = (d.globalData.baseUrl, this), a = i.a.getStorageSync("openid") || null, r = i.a.getStorageSync("unionid") || null;
                    e = {
                        openId: a,
                        unionId: r,
                        phone: e,
                        wxname: this.data.wxUserInfo.nickName,
                        wxCity: this.data.wxUserInfo.city
                    };
                    t && (e.avatarTempPath = t), s.a.xyb_request("login/loginByMobileOrThird!wxBind.action", "POST", e, !1, !1).then(function(e) {
                        var t, s;
                        e.data && (t = e.data, o.triggerEvent("receive", !1, {
                            bubbles: !1
                        }), 200 == e.code ? (n.patchCache(), i.a.setStorageSync("logintype", "1"), i.a.setStorageSync("sessionId", t.sessionId), 
                        i.a.setStorageSync("userid", t.loginerId), i.a.setStorageSync("Cookie", "JSESSIONID=" + t.sessionId), 
                        s = Date.parse(new Date()), i.a.setStorageSync("Cookie_time", s + 36e5), d.globalData.isLogin = !0, 
                        o.triggerEvent("receiveLogin", !0, {
                            bubbles: !1
                        }), d.globalData.shareschoolId = "", i.a.setStorage({
                            key: "studentActivate",
                            data: t.activate
                        }), c.a.Data.userInfo = {
                            open_id: a,
                            phone: t.phone
                        }, o.setData({
                            tipFlag: !0
                        }), setTimeout(function() {
                            o.setData({
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
                },
                qyWxBind: function(e) {
                    var t = this, n = this, o = i.a.getStorageSync("openid") || null;
                    s.a.xyb_request("login/LoginByQyWx!qyWxBind.action", "POST", {
                        deviceId: o,
                        phone: e || null
                    }, !1, !1).then(function(a) {
                        var s = a;
                        n.triggerEvent("receive", !1, {
                            bubbles: !1
                        }), 200 == a.code ? (t.patchCache(), c.a.Data.userInfo = {
                            open_id: o,
                            phone: s.data.phone
                        }, i.a.setStorageSync("logintype", "1"), i.a.setStorageSync("qywxPhone", e), i.a.setStorageSync("sessionId", s.data.sessionId), 
                        i.a.setStorageSync("userid", s.data.loginerId), i.a.setStorageSync("Cookie", "JSESSIONID=" + s.data.sessionId), 
                        a = Date.parse(new Date()), i.a.setStorageSync("Cookie_time", a + 36e5), n.triggerEvent("receiveLogin", !0, {
                            bubbles: !1
                        }), d.globalData.isLogin = !0, d.globalData.shareschoolId = "", n.getAccountinfo(), 
                        i.a.reLaunch({
                            url: "/pages/find/index/index?fromAutoLogin=true"
                        })) : i.a.showModal({
                            title: "校友邦提示",
                            content: s.msg,
                            showCancel: !1,
                            confirmColor: "#FF453A"
                        });
                    }, function(e) {
                        console.log(e);
                    });
                },
                show: function() {
                    this.setData({
                        isShow: !this.data.isShow
                    });
                },
                selectRadio: function(e) {
                    this.setData({
                        result: e.currentTarget.dataset.result,
                        isShow: !1
                    }), e = this.data.result, this.triggerEvent("receive", e, {
                        bubbles: !1
                    });
                },
                jumpUserAgreement: function(e) {
                    i.a.eventCenter.trigger("taroClick", {
                        funName: "快速登录点击-" + (0 === e ? "校友邦用户协议" : "校友邦隐私政策")
                    });
                    var t = u.a.APPHTTP + "pages/webPage.html#/userAgreement?tabIndex=" + e;
                    t = {
                        title: 0 === e ? "校友邦用户协议" : "校友邦隐私政策",
                        url: encodeURIComponent(t)
                    };
                    i.a.navigateTo({
                        url: "/videoBag/pages/h5/h5?model=" + JSON.stringify(t)
                    });
                }
            }
        })((function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + e(n));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }(f, i.a.Component), n(f, [ {
            key: "_constructor",
            value: function(e) {
                (function e(t, n, o) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    return void 0 !== a ? "value" in a ? a.value : void 0 !== (a = a.get) ? a.call(o) : void 0 : null !== (t = Object.getPrototypeOf(t)) ? e(t, n, o) : void 0;
                })(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.a.RefsArray();
            }
        }, {
            key: "_createData",
            value: function() {
                var e = this;
                this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, 
                this.$prefix;
                var t = this.closeLogin, n = (l = this.data).showLogin, o = l.posResumeMatch, a = l.currentEnvironment, i = l.showbind, s = l.ifIphoneX, r = l.tipFlag, c = l.statusHeight, u = l.canIUseGetUserProfile, l = l.isFromRecomm;
                return this.anonymousFunc0 = function(t) {
                    t.stopPropagation(), e.closeLogin(t);
                }, this.anonymousFunc1 = function(t) {
                    t.stopPropagation(), e.getUserProfile(t);
                }, this.anonymousFunc2 = function() {
                    return e.jumpUserAgreement(0);
                }, this.anonymousFunc3 = function() {
                    return e.jumpUserAgreement(1);
                }, this.anonymousFunc4 = function(t) {
                    t.stopPropagation(), e.closePhone(t);
                }, Object.assign(this.__state, {
                    tipFlag: r,
                    statusHeight: c,
                    showLogin: n,
                    closeLogin: t,
                    ifIphoneX: s,
                    isFromRecomm: l,
                    currentEnvironment: a,
                    canIUseGetUserProfile: u,
                    showbind: i,
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
            value: function(e) {}
        }, {
            key: "anonymousFunc3",
            value: function(e) {}
        }, {
            key: "anonymousFunc4",
            value: function(e) {
                e.stopPropagation();
            }
        } ]), n = a = f, a.$$events = [ "closeLogin", "anonymousFunc0", "getUserInfo", "anonymousFunc1", "getEnterpriseUserInfo", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "getPhoneNumber", "getEnterpriseUserPhone" ], 
        a.options = {
            addGlobalClass: !0
        }, a.$$componentPath = "components/fastlogin/fastlogin", a = n)) || a;
        function f() {
            var e, t;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, f);
            for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
            return (e = t = g(this, (e = f.__proto__ || Object.getPrototypeOf(f)).call.apply(e, [ this ].concat(o)))).$usedState = [ "tipFlag", "statusHeight", "showLogin", "closeLogin", "ifIphoneX", "isFromRecomm", "currentEnvironment", "canIUseGetUserProfile", "showbind", "posResumeMatch" ], 
            t.config = {
                component: !0,
                usingComponents: {
                    "van-popup": "../../vant-weapp/dist/popup/index"
                }
            }, t.customComponents = [], g(t, e);
        }
        a = n, Component(o(0).default.createComponent(n));
    },
    327: function(e, t, n) {
        e.exports = n.p + "components/fastlogin/fastlogin.wxml";
    }
}, [ [ 1586, 0, 1, 2 ] ] ]);