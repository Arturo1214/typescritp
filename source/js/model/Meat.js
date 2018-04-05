(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Meat = /** @class */ (function () {
        function Meat(id, name, imageUrl) {
            this._id = id;
            this._name = name;
            this._imageUrl = imageUrl;
        }
        Object.defineProperty(Meat.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Meat.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Meat.prototype, "imageUrl", {
            get: function () {
                return this._imageUrl;
            },
            set: function (value) {
                this._imageUrl = value;
            },
            enumerable: true,
            configurable: true
        });
        return Meat;
    }());
    return Meat;
});
//# sourceMappingURL=Meat.js.map