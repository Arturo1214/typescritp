import Meat = require("./Meat");
import KindPerson = require("./kindPerson");

class MeatKindPerson {
 private _id: number;
 private _meat: Meat;
 private _kindPerson: KindPerson;
 private _amount: number;


    constructor(id: number, meat: Meat, kindPerson: KindPerson, amount: number) {
        this._id = id;
        this._meat = meat;
        this._kindPerson = kindPerson;
        this._amount = amount;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get meat(): Meat {
        return this._meat;
    }

    set meat(value: Meat) {
        this._meat = value;
    }

    get kindPerson(): KindPerson {
        return this._kindPerson;
    }

    set kindPerson(value: KindPerson) {
        this._kindPerson = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}

export = MeatKindPerson;
