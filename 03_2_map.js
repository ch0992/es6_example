//ex01 set(key,value)

let obj = {};
let f = function () {};
let map = new Map();

map.set(obj,100);
console.log(map.size);

map.set(f,200);
console.log(map.size);

map.set('a',100).set('b',200);

//ex02 get(key)

let obj2 = {};
let map2 = new Map();
map2.set(obj2,100);
console.log(map2.get(obj2));


//ex03 clear()
let map3 = new Map();
map3.set('a',100).set('b',200);
console.log(map3.size); 
map3.clear();
console.log(map3.size);

//ex04 delete(key)

let map4 = new Map();
map4.set('a',100).set('b',200);
console.log(map.get('b'));
map.delete('b');
console.log(map.get('b'));

//ex05 entries()
let map5 = new Map();
map5.set('a',100).set('b',200);
let mapIter = map5.entries();
console.log(mapIter.next());
console.log(mapIter.next());
console.log(mapIter.next());

let mapIter2 = map5.entries();
for (let value of mapIter2) {
    console.log(value);
}

//ex06 forEach(callbackFn)
let map6 = new Map();
map6.set('a',100).set('b',200);
map6.forEach(function (value,key) {
    console.log(value,key);
})


//ex07 has(key)
let obj3 = {};
let map7 = new Map();
map7.set(obj3,100);
map7.set({a:100},200);
console.log(map7.has(obj3));
console.log(map7.has({a:100}));

//ex08 keys()
let map8 = new Map();
map8.set('a',100).set('b',200);
let mapIter3 = map8.keys();
// for (let value of mapIter3) {
//     console.log(mapIter3);
    
// }
console.log(mapIter3.next());
console.log(mapIter3.next());
console.log(mapIter3.next());

//ex09 values()
let map9 = new Map();
map9.set('a',100).set('b',200);

let mapIter4 = map9.values();

console.log(mapIter4.next());
console.log(mapIter4.next());
console.log(mapIter4.next());

//ex10 [@@iterator]()
let map10 = new Map();
map10.set('a',100).set('b',200);
let mapIter5 = map10[Symbol.iterator]();
console.log(mapIter5.next());
console.log(mapIter5.next());
console.log(mapIter5.next());





