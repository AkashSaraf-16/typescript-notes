"use strict";
let age = 25;
let firstName = 'Akash';
let dependent = false;
let test;
let Human = {
    firstName,
    age,
    dependent,
    test
};
let company = 'Google';
let numArray1 = [1, 2, 3];
let numArray2 = [1, 2, 3];
let product = ['shampoo', 100, true];
var TaxScheme;
(function (TaxScheme) {
    TaxScheme["N"] = "new";
    TaxScheme["O"] = "old";
})(TaxScheme || (TaxScheme = {}));
let myTax = TaxScheme.N;
function calculateTax(income, taxScheme) {
    if (taxScheme === TaxScheme.N) {
        if (income <= 700000)
            return 0;
        else
            return income * 0.3;
    }
    return income * 0.3;
}
const tax = calculateTax(900000);
console.log(tax);
const employee = {
    id: 1,
    name: 'Akash',
    retire: (year) => {
        console.log(year);
    }
};
employee.starPerformer = true;
employee.retire(2050);
function render(document) {
    if (typeof document === 'string')
        console.log(document.toUpperCase());
    else if (document instanceof Document)
        console.log('got the Document format');
}
function processTillInfinite() {
    while (true) {
        console.log('blabla');
    }
}
console.log('Is this executable?');
//# sourceMappingURL=index.js.map