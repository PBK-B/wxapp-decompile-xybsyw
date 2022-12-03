(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 422 ], {
    1113: function(e, t, n) {
        n.r(t), t = n(6), n = n(45), Object(t.a)({
            classes: [ "active-class", "toolbar-class", "column-class" ],
            props: Object.assign({}, n.a, {
                valueKey: {
                    type: String,
                    value: "text"
                },
                defaultIndex: {
                    type: Number,
                    value: 0
                },
                columns: {
                    type: Array,
                    value: [],
                    observer: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                        this.simple = e.length && !e[0].values, this.children = this.selectAllComponents(".van-picker__column"), 
                        Array.isArray(this.children) && this.children.length && this.setColumns().catch(function() {});
                    }
                }
            }),
            beforeCreate: function() {
                this.children = [];
            },
            methods: {
                noop: function() {},
                setColumns: function() {
                    var e = this, t = this.data;
                    t = (this.simple ? [ {
                        values: t.columns
                    } ] : t.columns).map(function(t, n) {
                        return e.setColumnValues(n, t.values);
                    });
                    return Promise.all(t);
                },
                emit: function(e) {
                    e = e.currentTarget.dataset.type, this.simple ? this.$emit(e, {
                        value: this.getColumnValue(0),
                        index: this.getColumnIndex(0)
                    }) : this.$emit(e, {
                        value: this.getValues(),
                        index: this.getIndexes()
                    });
                },
                onChange: function(e) {
                    this.simple ? this.$emit("change", {
                        picker: this,
                        value: this.getColumnValue(0),
                        index: this.getColumnIndex(0)
                    }) : this.$emit("change", {
                        picker: this,
                        value: this.getValues(),
                        index: e.currentTarget.dataset.index
                    });
                },
                getColumn: function(e) {
                    return this.children[e];
                },
                getColumnValue: function(e) {
                    return (e = this.getColumn(e)) && e.getValue();
                },
                setColumnValue: function(e, t) {
                    return null == (e = this.getColumn(e)) ? Promise.reject(new Error("setColumnValue: 对应列不存在")) : e.setValue(t);
                },
                getColumnIndex: function(e) {
                    return (this.getColumn(e) || {}).data.currentIndex;
                },
                setColumnIndex: function(e, t) {
                    return null == (e = this.getColumn(e)) ? Promise.reject(new Error("setColumnIndex: 对应列不存在")) : e.setIndex(t);
                },
                getColumnValues: function(e) {
                    return (this.children[e] || {}).data.options;
                },
                setColumnValues: function(e, t) {
                    var n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2], s = this.children[e];
                    return null == s ? Promise.reject(new Error("setColumnValues: 对应列不存在")) : JSON.stringify(s.data.options) === JSON.stringify(t) ? Promise.resolve() : s.set({
                        options: t
                    }).then(function() {
                        n && s.setIndex(0);
                    });
                },
                getValues: function() {
                    return this.children.map(function(e) {
                        return e.getValue();
                    });
                },
                setValues: function(e) {
                    var t = this;
                    e = e.map(function(e, n) {
                        return t.setColumnValue(n, e);
                    });
                    return Promise.all(e);
                },
                getIndexes: function() {
                    return this.children.map(function(e) {
                        return e.data.currentIndex;
                    });
                },
                setIndexes: function(e) {
                    var t = this;
                    e = e.map(function(e, n) {
                        return t.setColumnIndex(n, e);
                    });
                    return Promise.all(e);
                }
            }
        });
    }
}, [ [ 1113, 0, 2 ] ] ]);