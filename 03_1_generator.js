//ex01 제너레이터를 쓰지 않은 경우
let iterator = {
    i:0,
    [Symbol.iterator]:function(){
        return this;
    },
    next:function(){
        return (this.i<3)?{value:this.i++,done:false}:{value:undefined,done:true}
    }
}

for (const value of iterator) {
    console.log(value);
    
}
//ex02 제너레이터를 쓴 경우
function* gen() {
    for (let i = 0; i < 3; i++) {
        yield i;    
    }
}
let generator = gen();
for (const value of generator) {
    console.log(value);
}

//ex03 제너레이터 이어붙이기


function* gen1(n) {
    yield n+1;
    yield* gen2(n);
    yield n+2;
}

function* gen2(n) {
    yield n+100;
    yield n+200;
}

let generator2 = gen1(100);
for (const value of generator2) {
    console.log(value); 
}


//ex04 제너레이터 메서드

//return 메서드
function* gen3() {
    let i = 0;
    while (i >= 0) {
        yield i++;
    }
}
let generator3 = gen3();
console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.return()); //3을 출력하지 않고 리턴
console.log(generator3.next());


//throw 메서드
function* gen4() {
    let i = 0;
    while (i >= 0) {
        try {
            yield i++;    
        } catch (e) {
            
        }
    }
}
let generator4 = gen4();
console.log(generator4.next());
console.log(generator4.next());
console.log(generator4.next());
console.log(generator4.throw()); //3을 출력하지 않고 리턴
console.log(generator4.next());


//ex05 이터레이터 객체를 이용한 함수를 제너럴 함수를 사용해 만들기
let iterator2 = {
    fruits:['사과','바나나','포도','딸기'],
    [Symbol.iterator]:function () {
        return this;
    },
    next:function () {
        let value = this.fruits.shift();
        let done = (value) ?false:true;

            return {value:value, done:done};
    }
}
for (let value of iterator2) {
    console.log(value);    
}

function* gen5() {
    yield '사과';
    yield '바나나';
    yield '포도';
    yield '딸기';
}

for (let value of gen5()) {
    console.log(value);
}