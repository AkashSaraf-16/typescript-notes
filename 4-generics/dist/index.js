"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const obj1 = new KeyValuePair(1, 'sample');
const obj2 = new KeyValuePair('a', 10.3422);
function wrapInArray(value) {
    return [value];
}
wrapInArray(1);
wrapInArray(true);
class ArrayUtil {
    static wrapInArray(value) {
        return [value];
    }
}
ArrayUtil.wrapInArray(1);
ArrayUtil.wrapInArray('test');
function fetchData(url) {
    console.log(url);
    return { data: null, error: null };
}
const unknownData = fetchData('someurl');
const userData = fetchData('someurl');
const productData = fetchData('someurl');
class SampleClass {
    constructor(name) {
        this.name = name;
    }
}
function echo(value) {
    return value;
}
;
echo(true);
echo(100123);
echo({ name: 'Akash', age: 24 });
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    findItem(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return this._objects.filter((obj) => obj.category === category);
    }
}
let store = new Store();
store.add({ name: "a", price: 1, category: "food" });
store.find("name", "a");
store.find("price", 1);
let readonlyProduct = {
    name: "a",
    price: 1,
    category: "food",
};
let readonly = {
    name: "More generic",
    price: 100,
    category: "generic",
};
//# sourceMappingURL=index.js.map