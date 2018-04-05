import Meat = require("../model/Meat");
import KindPerson = require("../model/kindPerson");
import MeatKindPerson = require("../model/MeatKindPerson");
import LoadedData = require("../data/LoadedData");

class SteakBiz {

    meatKindPersonList : Array<MeatKindPerson>;
    meatList : Array<Meat>;
    kindPersonList : Array<KindPerson>;

    constructor() {
        let loadData: LoadedData = new LoadedData();
        this.meatKindPersonList = loadData.getListMeatKindPerson();
        this.meatList = loadData.getListMeat();
        this.kindPersonList = loadData.getListKindPerson();
    }

    calculateTotalMeat(_menAmount: number, _womanAmount: number, _childrenAmount: number, _meatIdList: Array<number>) : string {
        let totalMeat: number = 0.0;
        _meatIdList.forEach( i => {
            // calculation men
            let totalMen: number = this.calculateQuantity(i, 1, _menAmount);
            // calculation woman
            let totalWoman: number = this.calculateQuantity(i, 2, _womanAmount);
            // calculation children
            let totalChildren: number = this.calculateQuantity(i, 3, _childrenAmount);
            totalMeat += totalMen + totalWoman + totalChildren;
        });


        let integer : number = Math.floor(totalMeat);
        let decimal : number = totalMeat % 1;
        let result: string = 'Total de carne: '+ integer + ' Kg';
        if (decimal > 0) {
            result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
        }

        return result;
    }

    calculateTotalMeatType(_menAmount: number, _womanAmount: number, _childrenAmount: number, _meatIdList: Array<number>) : string {
        let result: string = '';
        _meatIdList.forEach( i => {
            // calculation men
            let totalMen: number = this.calculateQuantity(i, 1, _menAmount);
            // calculation woman
            let totalWoman: number = this.calculateQuantity(i, 2, _womanAmount);
            // calculation children
            let totalChildren: number = this.calculateQuantity(i, 3, _childrenAmount);
            let totalMeat = totalMen + totalWoman + totalChildren;
            let meat: Meat = this.meatSearch(i);

            let integer : number = Math.floor(totalMeat);
            let decimal : number = totalMeat % 1;
            result += meat.name + ': '+ integer + ' Kg';
            if (decimal > 0) {
                result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
            }
            result += '\n';

        });

        return result;
    }

    calculateTotalKindPerson(_menAmount: number, _womanAmount: number, _childrenAmount: number, _meatIdList: Array<number>) : string {
        let result: string = '';
        let totalMen: number = 0;
        let totalWoman: number = 0;
        let totalChildren: number = 0;
        _meatIdList.forEach( i => {
            // calculation men
            totalMen += this.calculateQuantity(i, 1, _menAmount);
            // calculation woman
            totalWoman += this.calculateQuantity(i, 2, _womanAmount);
            // calculation children
            totalChildren += this.calculateQuantity(i, 3, _childrenAmount);
        });

        let kindPerson: KindPerson = this.kindPersonSearch(1);

        let integer : number = Math.floor(totalMen);
        let decimal : number = totalMen % 1;
        result += kindPerson.name + ': '+ integer + ' Kg';
        if (decimal > 0) {
            result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
        }
        result += '\n';

        kindPerson = this.kindPersonSearch(2);

        integer = Math.floor(totalWoman);
        decimal = totalWoman % 1;
        result += kindPerson.name + ': '+ integer + ' Kg';
        if (decimal > 0) {
            result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
        }
        result += '\n';

        kindPerson = this.kindPersonSearch(3);

        integer = Math.floor(totalChildren);
        decimal = totalChildren % 1;
        result += kindPerson.name + ': '+ integer + ' Kg';
        if (decimal > 0) {
            result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
        }
        result += '\n';

        return result;
    }

    calculateQuantityString(_meatId: number, _kindPersonID: number, _amount: number) : string {
        let loadData : LoadedData = new LoadedData();
        this.meatKindPersonList = loadData.getListMeatKindPerson();
        let meatKindPerson: MeatKindPerson;

        this.meatKindPersonList.forEach( i => {
            if (i.meat.id === _meatId && i.kindPerson.id === _kindPersonID) {
                meatKindPerson = i;
                let amountCalculation : number = (meatKindPerson.amount * _amount);
                let integer : number = Math.floor(amountCalculation);
                let decimal : number = amountCalculation % 1;
                let result: string = meatKindPerson.meat.name + ': '+ integer + ' Kg';
                if (decimal > 0) {
                    result = result + ' con ' + (Math.round(decimal * 10) * 100) + ' gramos';
                }

                return result;
            }
        });

        return "No se pudo Calcular el monto total de carne";
    }

    calculateQuantity(_meatId: number, _kindPersonID: number, _amount: number) : number {
        let loadData : LoadedData = new LoadedData();
        this.meatKindPersonList = loadData.getListMeatKindPerson();
        let meatKindPerson: MeatKindPerson;

        this.meatKindPersonList.forEach( i => {
            if (i.meat.id === _meatId && i.kindPerson.id === _kindPersonID) {
                meatKindPerson = i;
                return (meatKindPerson.amount * _amount);
            }
        });
        return 0;
    }

    meatSearch(_meatId: number) : Meat {
        let loadData : LoadedData = new LoadedData();
        this.meatList = loadData.getListMeat();
        let meat: Meat = new Meat(0, '', '');
        this.meatList.forEach( i => {
            if (i.id == _meatId) {
                meat = i;
                return meat;
            }
        });
        return meat;
    }

    kindPersonSearch(_kindPersonId: number) : KindPerson {
        let loadData : LoadedData = new LoadedData();
        this.kindPersonList = loadData.getListKindPerson();
        let kindPerson: KindPerson = new KindPerson(0, '');
        this.kindPersonList.forEach( i => {
            if (i.id == _kindPersonId) {
                kindPerson = i;
            }
        });
        return kindPerson;
    }

    getMeatList() : Array<Meat> {
        let loadData : LoadedData = new LoadedData();
        return loadData.getListMeat();
    }
}

export = SteakBiz;
