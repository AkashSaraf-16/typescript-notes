"use strict";
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    calclateTax() {
        this._balance *= 0.9;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0)
            throw new Error('Invalid amount!!!');
        this._balance = amount;
    }
}
const account = new Account(1, 'Akash', 1000);
account.nickname = 'Akki';
account.deposit(100);
console.log(account instanceof Account);
account.balance = 100;
console.log('balance:', account.balance);
class GitAccount {
    constructor(profileName, id, _hash) {
        this.profileName = profileName;
        this.id = id;
        this._hash = _hash;
    }
}
class SeatAssignment {
}
const concert = new SeatAssignment();
concert.G1 = 'Akash';
concert.G2 = 'Rohit';
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
console.log('current rides:', Ride.activeRides);
//# sourceMappingURL=index.js.map