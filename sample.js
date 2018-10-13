// let subject = 'ES6';
// let str = '이 책의 주제는 ${subject} 입니다.';

// console.log(str);

var a = 100;
function f() {
    var a = 200;
    console.log("first a :" + a);
}

    console.log("first a :" + a);

var b = 200;
if (a > 0) {
    var a = 200;
    console.log("second b : " + b);
}
    console.log("second b : " + b);
    
