let str = '가나다';
for (let value of str) {
    console.log(value);
}

let arr = [10,20,30];
for (const value of arr) {
    console.log(value);
}

let arr2 =  [1,2,3];
let iterator = arr2[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());          
console.log(iterator.next());     
console.log(iterator.next());     
