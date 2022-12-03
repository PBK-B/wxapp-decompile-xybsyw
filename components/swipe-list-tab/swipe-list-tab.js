(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 48 ], {
    1068: function(t, e) {
        Component({
            properties: {
                scroll: {
                    type: Boolean,
                    value: !1
                },
                tabData: {
                    type: Array,
                    value: []
                },
                size: {
                    type: Number,
                    value: 90,
                    observer: "sizeChange"
                },
                color: {
                    type: String,
                    value: "",
                    observer: "colorChange"
                }
            },
            data: {
                needTransition: !1,
                translateX: 0,
                lineWidth: 48,
                tabCur: 0,
                scrollLeft: 0
            },
            methods: {
                toggleTab: function(t) {
                    this.triggerEvent("change", {
                        index: t.currentTarget.dataset.index
                    }), this.scrollByIndex(t.currentTarget.dataset.index);
                },
                scrollByIndex: function(t) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    this.setData({
                        isScroll: !0
                    }), this.setData({
                        needTransition: e
                    });
                    var i = this.items[t], a = i.width - 2 * this.itemPadding;
                    e = i.left;
                    this.data.scroll ? (i = e - (this.windowWidth - i.width) / 2, this.setData({
                        tabCur: t,
                        scrollLeft: i,
                        translateX: e + this.itemPadding + (a - this.data.lineWidth) / 2
                    })) : this.setData({
                        tabCur: t,
                        translateX: e + this.itemPadding + (a - this.data.lineWidth) / 2
                    });
                },
                sizeChange: function(t, e) {
                    t <= 80 && this.setData({
                        size: 80
                    });
                },
                colorChange: function(t, e) {
                    var i = this;
                    setTimeout(function() {
                        i.init();
                    }, 0);
                },
                init: function() {
                    var t = wx.getSystemInfoSync().windowWidth;
                    this.windowWidth = t || 375, this.itemPadding = this.windowWidth / 375 * 15, console.log("tabtab"), 
                    console.log(this.data.tabData);
                    for (var e = this, i = e.createSelectorQuery(), a = 0; a < e.data.tabData.length; a++) i.select("#item" + a).boundingClientRect();
                    i.exec(function(t) {
                        console.log(t), t && (e.items = t, e.scrollByIndex(0, !1));
                    }.bind(e));
                }
            },
            ready: function() {
                this.init();
            }
        });
    }
}, [ [ 1068, 0 ] ] ]);