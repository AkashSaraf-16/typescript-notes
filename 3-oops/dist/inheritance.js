"use strict";
class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Human {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
}
const Harry = new Student(1, 'Harry', 'Potter');
class Professor extends Human {
    constructor(YOE, firstName, lastName) {
        super(firstName, lastName);
        this.YOE = YOE;
    }
    get fullName() {
        return 'Prof. ' + super.fullName;
    }
}
const Snape = new Professor(14, 'Severus', 'Snape');
const magicians = [Harry, Snape];
magicians.forEach(magician => console.log(magician.fullName));
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log(`Drawing a ${this.color} circle of radius ${this.radius}`);
    }
}
const c = new Circle(5, 'yellow');
c.render();
class ICalendar {
    constructor(name) {
        this.name = name;
    }
    sync() {
        console.log('Syncing data to cloud ⬆️⬆️⬆️');
    }
    addEvent() {
        console.log('Event added 🔔');
    }
    removeEvent() {
        console.log('Event removed 🔕');
    }
}
const myCalendar = new ICalendar('Mera Calendar');
myCalendar.addEvent();
myCalendar.sync();
myCalendar.removeEvent();
//# sourceMappingURL=inheritance.js.map