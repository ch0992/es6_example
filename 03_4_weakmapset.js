//ex01 weakmap
let obj = {};
let weakMap = new WeakMap();
weakMap.set(obj,100);
console.log(weakMap.get(obj));

let obj2 = {};
let weakSet = new WeakSet();
weakSet.add(obj2);
console.log(weakSet.has(obj2));


