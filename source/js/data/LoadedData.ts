import MeatKindPerson = require("../model/MeatKindPerson");
import KindPerson = require("../model/kindPerson");
import Meat = require("../model/Meat");

class LoadedData {

    getListMeat() : Array<Meat> {
        let meatList : Array<Meat>;
        meatList = [];

        let lowLoin : Meat = new Meat(1, 'Lomo Bajo', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
        let highLoin : Meat = new Meat(2, 'Lomo Alto', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
        let rib : Meat = new Meat(3, 'Costilla', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
        let skirt : Meat = new Meat(4, 'Falda', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');

        meatList.push(lowLoin);
        meatList.push(highLoin);
        meatList.push(rib);
        meatList.push(skirt);
        return meatList;
    }


    getListKindPerson() : Array<KindPerson> {
        let kindPersonList : Array<KindPerson>;
        kindPersonList = [];
        let men : KindPerson = new KindPerson(1, 'Hombre');
        let woman : KindPerson = new KindPerson(2, "Mujer");
        let children : KindPerson = new KindPerson(3, "Niño");
        kindPersonList.push(men);
        kindPersonList.push(woman);
        kindPersonList.push(children);
        return kindPersonList;
    }


    getListMeatKindPerson() : Array<MeatKindPerson> {
        let meatKindPersonList : Array<MeatKindPerson>;
        meatKindPersonList = [];
        let men : KindPerson = new KindPerson(1, 'Hombre');
        let woman : KindPerson = new KindPerson(2, "Mujer");
        let children : KindPerson = new KindPerson(3, "Niño");

        let lowLoin : Meat = new Meat(1, 'Lomo Bajo', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
        let highLoin : Meat = new Meat(2, 'Lomo Alto', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
        let rib : Meat = new Meat(3, 'Costilla', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');
        let skirt : Meat = new Meat(4, 'Falda', 'https://s3.amazonaws.com/academiadacarne/content/3751-maminha.png');

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
    }
}

export = LoadedData;
