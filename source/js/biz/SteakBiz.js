(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../model/Meat", "../model/kindPerson", "../data/LoadedData"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Meat = require("../model/Meat");
    var KindPerson = require("../model/kindPerson");
    var LoadedData = require("../data/LoadedData");
    var SteakBiz = /** @class */ (function () {
        function SteakBiz() {
            var loadData = new LoadedData();
            this.meatKindPersonList = loadData.getListMeatKindPerson();
            this.meatList = loadData.getListMeat();
            this.kindPersonList = loadData.getListKindPerson();
        }
        SteakBiz.prototype.calculateTotalMeat = function (_menAmount, _womanAmount, _childrenAmount, _meatIdList) {
            var _this = this;
            var totalMeat = 0.0;
            _meatIdList.forEach(function (i) {
                // calculation men
                var totalMen = _this.calculateQuantity(i, 1, _menAmount);
                // calculation woman
                var totalWoman = _this.calculateQuantity(i, 2, _womanAmount);
                // calculation children
                var totalChildren = _this.calculateQuantity(i, 3, _childrenAmount);
                totalMeat += totalMen + totalWoman + totalChildren;
            });
            var integer = Math.floor(totalMeat);
            var decimal = totalMeat % 1;
            var result = 'Total de carne: ' + integer + ' Kg';
            if (decimal > 0) {
                result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
            }
            return result;
        };
        SteakBiz.prototype.calculateTotalMeatType = function (_menAmount, _womanAmount, _childrenAmount, _meatIdList) {
            var _this = this;
            var result = '';
            _meatIdList.forEach(function (i) {
                // calculation men
                var totalMen = _this.calculateQuantity(i, 1, _menAmount);
                // calculation woman
                var totalWoman = _this.calculateQuantity(i, 2, _womanAmount);
                // calculation children
                var totalChildren = _this.calculateQuantity(i, 3, _childrenAmount);
                var totalMeat = totalMen + totalWoman + totalChildren;
                var meat = _this.meatSearch(i);
                var integer = Math.floor(totalMeat);
                var decimal = totalMeat % 1;
                result += meat.name + ': ' + integer + ' Kg';
                if (decimal > 0) {
                    result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
                }
                result += '\n';
            });
            return result;
        };
        SteakBiz.prototype.calculateTotalKindPerson = function (_menAmount, _womanAmount, _childrenAmount, _meatIdList) {
            var _this = this;
            var result = '';
            var totalMen = 0;
            var totalWoman = 0;
            var totalChildren = 0;
            _meatIdList.forEach(function (i) {
                // calculation men
                totalMen += _this.calculateQuantity(i, 1, _menAmount);
                // calculation woman
                totalWoman += _this.calculateQuantity(i, 2, _womanAmount);
                // calculation children
                totalChildren += _this.calculateQuantity(i, 3, _childrenAmount);
            });
            var kindPerson = this.kindPersonSearch(1);
            var integer = Math.floor(totalMen);
            var decimal = totalMen % 1;
            result += kindPerson.name + ': ' + integer + ' Kg';
            if (decimal > 0) {
                result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
            }
            result += '\n';
            kindPerson = this.kindPersonSearch(2);
            integer = Math.floor(totalWoman);
            decimal = totalWoman % 1;
            result += kindPerson.name + ': ' + integer + ' Kg';
            if (decimal > 0) {
                result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
            }
            result += '\n';
            kindPerson = this.kindPersonSearch(3);
            integer = Math.floor(totalChildren);
            decimal = totalChildren % 1;
            result += kindPerson.name + ': ' + integer + ' Kg';
            if (decimal > 0) {
                result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
            }
            result += '\n';
            return result;
        };
        SteakBiz.prototype.calculateQuantityString = function (_meatId, _kindPersonID, _amount) {
            var loadData = new LoadedData();
            this.meatKindPersonList = loadData.getListMeatKindPerson();
            var meatKindPerson;
            this.meatKindPersonList.forEach(function (i) {
                if (i.meat.id === _meatId && i.kindPerson.id === _kindPersonID) {
                    meatKindPerson = i;
                    var amountCalculation = (meatKindPerson.amount * _amount);
                    var integer = Math.floor(amountCalculation);
                    var decimal = amountCalculation % 1;
                    var result = meatKindPerson.meat.name + ': ' + integer + ' Kg';
                    if (decimal > 0) {
                        result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
                    }
                    return result;
                }
            });
            return "No se pudo Calcular el monto total de carne";
        };
        SteakBiz.prototype.calculateQuantity = function (_meatId, _kindPersonID, _amount) {
            var loadData = new LoadedData();
            this.meatKindPersonList = loadData.getListMeatKindPerson();
            var meatKindPerson;
            this.meatKindPersonList.forEach(function (i) {
                if (i.meat.id === _meatId && i.kindPerson.id === _kindPersonID) {
                    meatKindPerson = i;
                    return (meatKindPerson.amount * _amount);
                }
            });
            return 0;
        };
        SteakBiz.prototype.meatSearch = function (_meatId) {
            var loadData = new LoadedData();
            this.meatList = loadData.getListMeat();
            var meat = new Meat(0, '', '');
            this.meatList.forEach(function (i) {
                if (i.id == _meatId) {
                    meat = i;
                    return meat;
                }
            });
            return meat;
        };
        SteakBiz.prototype.kindPersonSearch = function (_kindPersonId) {
            var loadData = new LoadedData();
            this.kindPersonList = loadData.getListKindPerson();
            var kindPerson = new KindPerson(0, '');
            this.kindPersonList.forEach(function (i) {
                if (i.id == _kindPersonId) {
                    kindPerson = i;
                }
            });
            return kindPerson;
        };
        SteakBiz.prototype.getMeatList = function () {
            var loadData = new LoadedData();
            return loadData.getListMeat();
        };
        return SteakBiz;
    }());
    return SteakBiz;
});
//# sourceMappingURL=SteakBiz.js.map