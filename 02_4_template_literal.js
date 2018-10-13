//ex01 여러줄 문자열

var str = '여러줄\n입력 테스트';
console.log(str);

var str2 = '여러줄\n';
    str2 += '입력테스트';
console.log(str2);


let str3 = `여러줄
입력테스트`;

console.log(str3);

            
//ex02 보간표현법

var a = 100;
var b = 200;
var str4 = 'a+b의 결과는'+(a+b)+'입니다';
console.log(str4);

var c = 100;
var d = 200;
var str5 = `a+b의 결과는${a+b}입니다`;
console.log(str5);


//ex03 태그드 템플릿 리터럴 (Tagged template literal) 01
function tagged(str,a,b) {
    let bigger;
    (a>b) ? bigger = 'A' : bigger = 'B';
    return str[0] + bigger + '가 더 큽니다.';
}
let e = 100;
let f = 200;

let str6 = tagged` A와 B 둘 중 ${a}, ${b}`;
console.log(str6);

//ex04 태그드 템플릿 리터럴 (Tagged template literal) 02
var a1 = 1;
var b1 = 8;

function sum(a,b) {
    var value = b % a;
    var result;
    (value == 0) ? result = 'a는 b의 약수입니다.' : result = 'a는 b의 약수가 아닙니다.';
    return result;    
}

var value = 'a의값은' + a1 + '이고, b의 값은 '+b1+'입니다.\n'+sum(a1,b1);
console.log(value);



function sum2(str,a,b) {
    var result2 = `${str[0]}${a}${str[1]}${b}${str[2]}
                   ${(b%a==0)?'a는 b의 약수입니다.':'a는 b의 약수가 아닙니다.'}`;
    return result2;
}

var value2 = `a의 값은 ${a1} 이고, b의 값은 ${b1} 입니다.
${sum(a,b)}`;

console.log(value2);
