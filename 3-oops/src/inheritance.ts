class Human {
 constructor(public firstName: string, public lastName: string) { }
 get fullName() {
  return this.firstName + ' ' + this.lastName;
 }
 walk() {
  console.log('Walking');
 }
}

class Student extends Human {
 constructor(public id: number, firstName: string, lastName: string) {
  super(firstName, lastName);
 }
}

const Harry = new Student(1, 'Harry', 'Potter')


class Professor extends Human {
 constructor(public YOE: number, firstName: string, lastName: string) {
  super(firstName, lastName);
 }
 override get fullName() {
  return 'Prof. ' + super.fullName;
 }
}

const Snape = new Professor(14, 'Severus', 'Snape');
// console.log(Snape.fullName);

const magicians = [Harry, Snape];

magicians.forEach(magician =>
 console.log(magician.fullName)
)

// Abstract class

abstract class Shape {
 constructor(public color: string) { }
 abstract render(): void;
}

class Circle extends Shape {
 constructor(public radius: number, color: string) {
  super(color);
 }
 override render(): void {
  console.log(`Drawing a ${this.color} circle of radius ${this.radius}`);
 }
}

const c = new Circle(5, 'yellow');
c.render();

// Interface

interface Calendar {
 name: string;
 addEvent(): void;
 removeEvent(): void;
}

interface CloudCalendar extends Calendar {
 sync(): void;
}

class ICalendar implements CloudCalendar {
 constructor(public name: string) { }
 sync(): void {
  console.log('Syncing data to cloud ⬆️⬆️⬆️');
 }
 addEvent(): void {
  console.log('Event added 🔔');
 }
 removeEvent(): void {
  console.log('Event removed 🔕');
 }
}

const myCalendar = new ICalendar('Mera Calendar');
myCalendar.addEvent();
myCalendar.sync();
myCalendar.removeEvent();