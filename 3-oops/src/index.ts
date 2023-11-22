// Class
class Account {
 readonly id: number;  // readonly property
 name: string;
 private _balance: number;
 nickname?: string;    // optional property
 constructor(id: number, name: string, balance: number) {
  this.id = id;
  this.name = name;
  this._balance = balance;
 }
 deposit(amount: number) {
  this._balance += amount;
 }
 private calclateTax() {
  this._balance *= 0.9;
 }
 // getter
 get balance() {
  return this._balance;
 }
 // setter
 set balance(amount: number) {
  if (amount < 0)
   throw new Error('Invalid amount!!!');
  this._balance = amount;
 }
}

// Object
const account = new Account(1, 'Akash', 1000);
account.nickname = 'Akki';
account.deposit(100);
console.log(account instanceof Account);
account.balance = 100;
console.log('balance:', account.balance);


// Parameter properties
class GitAccount {
 constructor(public profileName: string, public readonly id: number, private _hash: string) { }
}

// Index signatures
class SeatAssignment {
 [seatNumber: string]: string;
}

const concert = new SeatAssignment();
concert.G1 = 'Akash';
concert.G2 = 'Rohit';

class Ride {
 private static _activeRides: number = 0;
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
const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();
console.log('current rides:', Ride.activeRides)