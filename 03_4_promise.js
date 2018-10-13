//ex01 기존 콜백의 지연함수 결과값의 미반영과 가독성 저하문제
var cnt = 0;
setTimeout(() => {
    cnt++;
}, 1000);

console.log(cnt);


var cnt2 = 0;
setTimeout(() => {
    receiveCount(cnt2++);
}, 1000);

function receiveCount($cnt) {
    cnt2 = $cnt;
    console.log(cnt2);    
}

//ex02 프로미스를 사용한 가독성 증가
let cnt3 = 0;
let promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        cnt3++;
        resolve(cnt3);
    });    
});

promise.then(function($cnt) {
    cnt3 = $cnt;
    console.log(cnt3);    
});


//ex03
let promise2 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve('success');
    }, 1000);
});

promise2.then(function (value) {
    console.log(value);
});


//ex04
let promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject('failed');
    }, 1000);
});

promise3.then(function (value) {
    console.log(value);
});

promise3.catch(function (reason) {
    console.log(reason);
});


//ex05

let p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('p1 fulfulled');
    }, 2000);
});

let p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('p2 fulfilled');
    }, 1000);
});
let iterable = [p1,p2];

Promise.all(iterable).then(function (value) {
    console.log("all"+value);
},function (reason) {
    console.log("all"+reason);    
});

//ex06
let p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('p1 fulfulled');
    }, 2000);
});

let p4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('p2 fulfilled');
    }, 1000);
});
let iterable2 = [p3,p4];

Promise.race(iterable2).then(function (value) {
    console.log("race"+value);
},function (reason){
    console.log("race"+reason);    
});