//ex01  객체 및 map으로 항목수 반환
let obj = {a:100,b:200,c:300};
let size = 0;
for (const prop in obj) {
    size++;
}
console.log(size);


let map = new Map([['a',100],['b',200],['c',300]]);
console.log(map.size);

//ex02 배열과 셋으로 저장한 문자열 출력하기

let str = '안녕하세요ES6';

let arr = [];
const unique = function (text) {
    let isUnique = true;
    for (let value of arr) {
        if (value == text) {
            isUnique = false;
        }
    }
    return isUnique;
}

for (const text of str) {
    let isUnique = unique(text);
    if (isUnique) {
        arr.push(text);
    }
}

for (let value of arr) {
    console.log(value);
}


let str2 = '안녕하세요ES7';

let set = new Set(str2)
for (const value of set) {
    console.log(value);
    
}