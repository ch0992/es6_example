//ex01
let str = "iterator" ;
let iterator = str[Symbol.iterator]();
let result;

do {
    result = iterator.next();
    console.log(result.value, result.done);    
} while (result.value);


//ex02
let iterator2 = {
    i:1,
    [Symbol.iterator]:function (){
        return this;
    },
    next:function () {
        return (this.i<4) ? {value:this.i++, done:false} : {value:undefined, done:true}
    }
}

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2[Symbol.iterator]().next());
console.log(iterator2[Symbol.iterator]().next());