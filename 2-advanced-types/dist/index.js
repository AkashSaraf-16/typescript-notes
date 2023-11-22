"use strict";
const akash = {
    id: 1,
    name: 'Akash',
    retire: (year) => {
        console.log(year);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
const lbs = kgToLbs('10kg');
console.log(lbs);
const Honey = {
    name: 'Honey',
    age: 12,
    sex: 'Male',
    id: 101,
    class: 10,
    performance: 'Average'
};
const stock = 100;
let speed = null;
let ride = {
    speed: speed ?? 30,
};
let phone = document.getElementById('phone');
console.log(phone.value);
//# sourceMappingURL=index.js.map