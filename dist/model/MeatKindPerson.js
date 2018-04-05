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
    var MeatKindPerson = /** @class */ (function () {
        function MeatKindPerson(id, meat, kindPerson, amount) {
            this._id = id;
            this._meat = meat;
            this._kindPerson = kindPerson;
            this._amount = amount;
        }
        Object.defineProperty(MeatKindPerson.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeatKindPerson.prototype, "meat", {
            get: function () {
                return this._meat;
            },
            set: function (value) {
                this._meat = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeatKindPerson.prototype, "kindPerson", {
            get: function () {
                return this._kindPerson;
            },
            set: function (value) {
                this._kindPerson = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeatKindPerson.prototype, "amount", {
            get: function () {
                return this._amount;
            },
            set: function (value) {
                this._amount = value;
            },
            enumerable: true,
            configurable: true
        });
        return MeatKindPerson;
    }());
    return MeatKindPerson;
});
//# sourceMappingURL=MeatKindPerson.js.map