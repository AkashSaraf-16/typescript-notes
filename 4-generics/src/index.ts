// Generic classes
class KeyValuePair<K, V>{
 constructor(public key: K, public value: V) { }
}

const obj1 = new KeyValuePair(1, 'sample');
const obj2 = new KeyValuePair('a', 10.3422);

// Generic function
function wrapInArray<T>(value: T) {
 return [value];
}

wrapInArray(1);
wrapInArray(true);

// Generic method
class ArrayUtil {
 static wrapInArray<T>(value: T) {
  return [value];
 }
}

ArrayUtil.wrapInArray(1);
ArrayUtil.wrapInArray('test');

// Generic interfaces

interface Result<T> {
 data: T | null,
 error: string | null,
}

function fetchData<T>(url: string): Result<T> {
 console.log(url);
 return { data: null, error: null };
}

interface User {
 name: string
}

interface Product {
 label: string
}

const unknownData = fetchData('someurl');  // here will be getting result of unknown type
const userData = fetchData<User>('someurl'); // here will be getting result of user type
const productData = fetchData<Product>('someurl');  // here will be getting result of product type

// Generic constraints: We use extends to allow all types a generic can take
interface sample {
 name: string
}

class SampleClass {
 constructor(public name: string) { }
}
function echo<T extends boolean | number | sample | SampleClass | { name: string }>(value: T): T {
 return value;
};


echo(true);
echo(100_123);
echo({ name: 'Akash', age: 24 });


/*
 * Extending Generic Classes
 * keyof operator
 * Type mapping
 */
interface ProductPro {
 name: string;
 price: number;
 category: string;
}

// Type Mapping
type ReadOnlyProduct = {
 readonly [Property in keyof ProductPro]: ProductPro[Property];
};

// More generic ReadOnly type
type ReadOnly<T> = {
 readonly [Key in keyof T]: T[Key];
};

// Optional properties
type Optional<T> = {
 [Key in keyof T]?: T[Key];
};

// Nullable properties
type Nullable<T> = {
 [Key in keyof T]: null;
};

class Store<T> {
 protected _objects: T[] = [];

 add(obj: T): void {
  this._objects.push(obj);
 }

 // T is product
 // keyof T => 'name' | 'price'
 find(property: keyof T, value: unknown): T | undefined {
  return this._objects.find((obj) => obj[property] === value);
 }
}

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
 compress() { }
}

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
 findItem(name: string): T | undefined {
  return this._objects.find((obj) => obj.name === name);
 }
}

// Fix the generic type parameter
class ProductStore extends Store<ProductPro> {
 filterByCategory(category: string): ProductPro[] {
  return this._objects.filter((obj) => obj.category === category);
 }
}

let store = new Store<ProductPro>();
store.add({ name: "a", price: 1, category: "food" });
store.find("name", "a");
store.find("price", 1);

let readonlyProduct: ReadOnlyProduct = {
 name: "a",
 price: 1,
 category: "food",
};

let readonly: ReadOnly<ProductPro> = {
 name: "More generic",
 price: 100,
 category: "generic",
};
