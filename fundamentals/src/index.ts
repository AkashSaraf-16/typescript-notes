let age: number = 25;
let firstName: string = 'Akash';
let dependent: boolean = false;
let test;
let Human = {
  firstName,
  age,
  dependent,
  test
}

// We dont always need to annotate types if we intialize the variables while
// declaration itself. So:

let company = 'Google';

// Arrays:
let numArray1: number[] = [1, 2, 3];
// OR
let numArray2 = [1, 2, 3];


// Tuples: A triplet
let product: [string, number, boolean] = ['shampoo', 100, true]

// Enum: 
enum TaxScheme { N = 'new', O = "old" }
let myTax = TaxScheme.N;

// Function:
// We can make parameter 
function calculateTax(income: number, taxScheme?: TaxScheme): number {
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

// Objects:
const employee: {
  readonly id: number,
  name: string,
  starPerformer?: boolean,
  retire: (year: number) => void
} = {
  id: 1,
  name: 'Akash',
  retire: (year) => {
    console.log(year);
  }
}

employee.starPerformer = true;
employee.retire(2050);

// Unknown
function render(document: unknown) {
  if (typeof document === 'string')
    console.log(document.toUpperCase())
  else if (document instanceof Document)
    console.log('got the Document format')
}

// Never

function processTillInfinite(): never {
  while (true) {
    console.log('blabla');
  }
}
// processTillInfinite();
console.log('Is this executable?');