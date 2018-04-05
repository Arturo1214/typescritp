import Meat = require("../model/Meat");
import SteakBiz = require("../biz/SteakBiz");

class IndexController {
    steakBiz: SteakBiz = new SteakBiz();
    meatList: Array<Meat> = new Array<Meat>();
    selectElement: any;
    constructor() {
        this.meatList = this.steakBiz.getMeatList();
        this.selectElement = document.getElementById('meatSelect');
        this.meatList.forEach(i => {
            var opt = document.createElement('option');
            opt.value = i.id.toString();
            opt.label = i.name;
            this.selectElement.appendChild(opt);
        })
    }
}

export = IndexController;
