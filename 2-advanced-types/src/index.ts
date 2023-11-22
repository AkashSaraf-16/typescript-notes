// aliasing
type Employee = {
 readonly id: number,
 name: string,
 starPerformer?: boolean,
 retire: (year: number) => void
}

const akash: Employee = {
 id: 1,
 name: 'Akash',
 retire: (year) => {
  console.log(year);
 }
}

// Union:
function kgToLbs(weight: number | string): number {
 // Narrowing
 if (typeof weight === 'number')
  return weight * 2.2
 return parseInt(weight) * 2.2
}

const lbs = kgToLbs('10kg');
console.log(lbs);

// Intersection:
type human = {
 name: string,
 age: number,
 sex: string
}

// intersecting human type to get student type
type student = human & {
 id: number,
 class: number,
 performance: string,
}

const Honey: student = {
 name: 'Honey',
 age: 12,
 sex: 'Male',
 id: 101,
 class: 10,
 performance: 'Average'
}

// Literal types:
type Quantity = 50 | 100;
const stock: Quantity = 100;

// Optional Chaining
const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
    },
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // Expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  // Expected output: undefined

// Nullish Coalescing
let speed: number | null = null;
let ride = {
 // here 0 can also be valid value and we dont want to ignore it, so we cant do:
 // speed: speed || 30,
 // we only want to ignore null and undefined
 speed: speed ?? 30,
}

// Type assertion: 2 syntax
// let phone = document.getElementById('phone') as HTMLInputElement
let phone = <HTMLInputElement>document.getElementById('phone')

console.log(phone.value)