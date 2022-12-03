(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 45 ], {
    1065: function(e, t) {
        Component({
            properties: {
                requesting: {
                    type: Boolean,
                    value: !1,
                    observer: "requestingEnd"
                },
                end: {
                    type: Boolean,
                    value: !1
                },
                listCount: {
                    type: Number,
                    value: 0
                },
                emptyUrl: {
                    type: String,
                    value: "/assets/image/empty/empty.png"
                },
                emptyText: {
                    type: String,
                    value: "未找到数据"
                },
                hasTop: {
                    type: Boolean,
                    value: !1
                },
                refreshSize: {
                    type: Number,
                    value: 90,
                    observer: "refreshChange"
                },
                bottomSize: {
                    type: Number,
                    value: 0
                },
                color: {
                    type: String,
                    value: "",
                    observer: "colorChange"
                }
            },
            data: {
                mode: "refresh",
                successShow: !1,
                successTran: !1,
                refreshStatus: 0,
                move: -45,
                scrollHeight1: 0,
                scrollHeight2: 0,
                scrollTop: 0
            },
            methods: {
                scroll: function(e) {
                    var t = this;
                    clearTimeout(this.timer), this.timer = setTimeout(function() {
                        t.setData({
                            scrollTop: e.detail.scrollTop
                        });
                    }, 100);
                },
                change: function(e) {
                    3 <= this.data.refreshStatus || (-10 < e.detail.y ? this.setData({
                        refreshStatus: 2
                    }) : this.setData({
                        refreshStatus: 1
                    }));
                },
                touchend: function() {
                    var e = this.data.refreshStatus;
                    3 <= e || (2 == e ? (wx.vibrateShort(), this.setData({
                        refreshStatus: 3,
                        move: 0,
                        mode: "refresh"
                    }), this.triggerEvent("refresh")) : 1 == e && this.setData({
                        move: this.data.scrollHeight1
                    }));
                },
                more: function() {
                    this.properties.end || (this.setData({
                        mode: "more"
                    }), this.triggerEvent("more"));
                },
                requestingEnd: function(e, t) {
                    var s = this;
                    "more" != this.data.mode && (!0 === t && !1 === e ? (this.setData({
                        refreshStatus: 4,
                        move: this.data.scrollHeight2
                    }), setTimeout(function() {
                        s.setData({
                            successShow: !0
                        }), setTimeout(function() {
                            s.setData({
                                successTran: !0,
                                move: s.data.scrollHeight1
                            }), setTimeout(function() {
                                s.setData({
                                    refreshStatus: 1,
                                    successShow: !1,
                                    successTran: !1,
                                    move: s.data.scrollHeight1
                                });
                            }, 350);
                        }, 1e3);
                    }, 650)) : 3 != this.data.refreshStatus && this.setData({
                        refreshStatus: 3,
                        move: 0
                    }));
                },
                refreshChange: function(e, t) {
                    var s = this;
                    e <= 80 && this.setData({
                        refreshSize: 80
                    }), setTimeout(function() {
                        s.init();
                    }, 10);
                },
                init: function() {
                    var e = this.createSelectorQuery();
                    e.select("#refresh").boundingClientRect(), e.select("#success").boundingClientRect(), 
                    e.exec(function(e) {
                        console.log(e), e && this.setData({
                            scrollHeight1: -(e[0].height || 0),
                            scrollHeight2: (e[1].height || 0) - (e[0].height || 0),
                            move: -(e[0].height || 0)
                        });
                    }.bind(this));
                }
            },
            ready: function() {
                this.init();
            }
        });
    }
}, [ [ 1065, 0 ] ] ]);