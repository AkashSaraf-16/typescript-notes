var age = 25;
var firstName = 'Akash';
var dependent = false;
var test;
var Human = {
    firstName: firstName,
    age: age,
    dependent: dependent,
    test: test
};
// We dont always need to annotate types if we intialize the variables while
// declaration itself. So:
var company = 'Google';
// Arrays:
var numArray1 = [1, 2, 3];
// OR
var numArray2 = [1, 2, 3];
// Tuples: A triplet
var product = ['shampoo', 100, true];
// Enum: 
var TaxScheme;
(function (TaxScheme) {
    TaxScheme["N"] = "new";
    TaxScheme["O"] = "old";
})(TaxScheme || (TaxScheme = {}));
var myTax = TaxScheme.N;
// Function:
// We can make parameter 
function calculateTax(income, taxScheme) {
    if (taxScheme === TaxScheme.N) {
        if (income <= 700000)
            return 0;
        else
            return income * 0.3;
    }
    return income * 0.3;
}
var tax = calculateTax(900000);
console.log(tax);
// Objects:
var employee = {
    id: 1,
    name: 'Akash',
    retire: function (year) {
        console.log(year);
    }
};
employee.starPerformer = true;
employee.retire(2050);
// Unknown
function render(document) {
    if (typeof document === 'string')
        console.log(document.toUpperCase());
    else if (document instanceof Document)
        console.log('got the Document format');
}
// Never
function processTillInfinite() {
    while (true) {
        console.log('blabla');
    }
}
processTillInfinite();
console.log('Is this executable?');
