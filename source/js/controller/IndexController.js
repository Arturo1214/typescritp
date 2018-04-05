(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../biz/SteakBiz"], factory);
    }
})(function (require, exports) {
    "use strict";
    var SteakBiz = require("../biz/SteakBiz");
    var IndexController = /** @class */ (function () {
        function IndexController() {
            var _this = this;
            this.steakBiz = new SteakBiz();
            this.meatList = new Array();
            this.meatList = this.steakBiz.getMeatList();
            this.selectElement = document.getElementById('meatSelect');
            this.meatList.forEach(function (i) {
                var opt = document.createElement('option');
                opt.value = i.id.toString();
                opt.label = i.name;
                _this.selectElement.appendChild(opt);
            });
        }
        return IndexController;
    }());
    return IndexController;
});
//# sourceMappingURL=IndexController.js.map