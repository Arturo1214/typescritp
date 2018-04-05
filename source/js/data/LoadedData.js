(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../model/MeatKindPerson", "../model/kindPerson", "../model/Meat"], factory);
    }
})(function (require, exports) {
    "use strict";
    var MeatKindPerson = require("../model/MeatKindPerson");
    var KindPerson = require("../model/kindPerson");
    var Meat = require("../model/Meat");
    var LoadedData = /** @class */ (function () {
        function LoadedData() {
        }
        LoadedData.prototype.getListMeat = function () {
            var meatList;
            meatList = [];
            var lowLoin = new Meat(1, 'Lomo Bajo', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
            var highLoin = new Meat(2, 'Lomo Alto', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
            var rib = new Meat(3, 'Costilla', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
            var skirt = new Meat(4, 'Falda', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
            meatList.push(lowLoin);
            meatList.push(highLoin);
            meatList.push(rib);
            meatList.push(skirt);
            return meatList;
        };
        LoadedData.prototype.getListKindPerson = function () {
            var kindPersonList;
            kindPersonList = [];
            var men = new KindPerson(1, 'Hombre');
            var woman = new KindPerson(2, "Mujer");
            var children = new KindPerson(3, "Niño");
            kindPersonList.push(men);
            kindPersonList.push(woman);
            kindPersonList.push(children);
            return kindPersonList;
        };
        LoadedData.prototype.getListMeatKindPerson = function () {
            var meatKindPersonList;
            meatKindPersonList = [];
            var men = new KindPerson(1, 'Hombre');
            var woman = new KindPerson(2, "Mujer");
            var children = new KindPerson(3, "Niño");
            var lowLoin = new Meat(1, 'Lomo Bajo', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
            var highLoin = new Meat(2, 'Lomo Alto', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
            var rib = new Meat(3, 'Costilla', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
            var skirt = new Meat(4, 'Falda', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
            meatKindPersonList.push(new MeatKindPerson(1, lowLoin, men, 5.2));
            meatKindPersonList.push(new MeatKindPerson(2, lowLoin, woman, 4.3));
            meatKindPersonList.push(new MeatKindPerson(3, lowLoin, children, 3.3));
            meatKindPersonList.push(new MeatKindPerson(4, highLoin, men, 8.2));
            meatKindPersonList.push(new MeatKindPerson(5, highLoin, woman, 5.4));
            meatKindPersonList.push(new MeatKindPerson(6, highLoin, children, 2.5));
            meatKindPersonList.push(new MeatKindPerson(7, rib, men, 6.1));
            meatKindPersonList.push(new MeatKindPerson(8, rib, woman, 3.4));
            meatKindPersonList.push(new MeatKindPerson(9, rib, children, 1.1));
            meatKindPersonList.push(new MeatKindPerson(10, skirt, men, 4.3));
            meatKindPersonList.push(new MeatKindPerson(11, skirt, woman, 2.2));
            meatKindPersonList.push(new MeatKindPerson(12, skirt, children, 1.4));
            return meatKindPersonList;
        };
        return LoadedData;
    }());
    return LoadedData;
});
//# sourceMappingURL=LoadedData.js.map