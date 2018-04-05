(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../source/js/biz/SteakBiz"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SteakBiz = require("../source/js/biz/SteakBiz");
    var steakBiz = new SteakBiz();
    var arryMeat = new Array();
    arryMeat.push(1);
    arryMeat.push(2);
    arryMeat.push(3);
    var calculationTotal = steakBiz.calculateTotalMeat(2, 2, 2, arryMeat);
    var calculationTotalMeatType = steakBiz.calculateTotalMeatType(2, 2, 2, arryMeat);
    var calculationTotalKindPerson = steakBiz.calculateTotalKindPerson(2, 2, 2, arryMeat);
    console.log("*****Resultado total*******");
    console.log(calculationTotal);
    console.log("**************");
    console.log("******Resultado por tipo*******");
    console.log(calculationTotalMeatType);
    console.log("***************");
    console.log("**********Resultdado por persona********");
    console.log(calculationTotalKindPerson);
});
//# sourceMappingURL=Main.js.map