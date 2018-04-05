import SteakBiz = require("../js/biz/SteakBiz");

var steakBiz = new SteakBiz();

let arryMeat = new Array<number>();
arryMeat.push(1);
arryMeat.push(2);
arryMeat.push(3);
let calculationTotal = steakBiz.calculateTotalMeat(2,2,2, arryMeat);
let calculationTotalMeatType = steakBiz.calculateTotalMeatType(2,2,2, arryMeat);
let calculationTotalKindPerson = steakBiz.calculateTotalKindPerson(2,2,2, arryMeat);
console.log("*****Resultado total*******");
console.log(calculationTotal);
console.log("**************");
console.log("******Resultado por tipo*******");
console.log(calculationTotalMeatType);
console.log("***************");
console.log("**********Resultdado por persona********")
console.log(calculationTotalKindPerson);
