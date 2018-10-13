//ex01

let str = 'for of문';
console.log(typeof str[Symbol.iterator]()==='object');
for (const value of str) {
    console.log(value);    
}

//ex02
var arr = [10,20,30];
arr.add = 100;
arr.push(100);

for (const value  of arr) {
    console.log(value);
}


//ex03
let iterator2 = {
    i:1,
    [Symbol.iterator]:function (){
        return this;
    },
    next:function () {
        return (this.i<4) ? {value:this.i++, done:false} : {value:undefined, done:true}
    }
}
for (let value of iterator2) {
    console.log(value);
    
}


