Object.values || (Object.values = function(e) {
    if (e !== Object(e)) throw new TypeError("Object.values called on a non-object");
    var t, r = [];
    for (t in e) Object.prototype.hasOwnProperty.call(e, t) && r.push(e[t]);
    return r;
});