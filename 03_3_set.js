//ex01
let set = new Set([1,2,3,1,2,3]);
console.log(set);
set.add(2);

//ed02 add(value)
let set2 = new Set();
set2.add(100);
set2.add(200);

for (let value of set2) {
    console.log(value);
}

//ex03 clear()
let set3 = new Set();
set3.add(100);
set3.add(200);
console.log(set3.size);

set3.clear();
console.log(set3.size);

//ex04 delete(value)
let obj = {};
let set4 = new Set();
set4.add(obj);
set4.add(100);
console.log(set4.size);
set4.delete(obj);
console.log(set4.size);

//ex05 entries()
let set5 = new Set('abcabc');
let setIter = set5.entries();

for (let value of setIter) {
    console.log(value);
}

let set6 = new Set('abcefg');
let setIter2 = set6.entries();

for (let value of setIter2) {
    console.log(value);
}

//ex06  forEach(callbackFn)
let set7 = new Set('abab');
set7.forEach(function (value,key) {
    console.log(value,key);
});

//ex07 has(value)
let obj2 = {};
let obj3 = {};
let set8 = new Set();
set8.add(obj2);
console.log(set8.has(obj2));
console.log(set8.has(obj3));
console.log(set8.has());

//ex08 keys(), values(), [@@iterator]()
//keys()
let set9 = new Set('abab');
let keys = set9.keys();
for (let value of keys) {
    console.log(value);
}
//values()
let values = set9.values();
for (let value of values) {
    console.log(value);    
}
//@@Iterator
let setIter3 = set9[Symbol.iterator]();
for (let value of setIter3) {
    console.log(value);
}








