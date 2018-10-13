
//ex01
const buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);

//ex02
const buffer2 = new ArrayBuffer(16);
const view = new Uint32Array(buffer2);
console.log(view);

//ex03
const buffer3 = new ArrayBuffer(3);
const rgb = new Uint8ClampedArray(buffer);
rgb[0] = parseInt(Math.random(255)*100);
rgb[1] = parseInt(Math.random(255)*100);
rgb[2] = parseInt(Math.random(255)*100);

document.body.style.background = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;

//ex04
var buffer4 = new ArraryBuffer(16);
var view2 = new Int16Array(buffer);
var blob = new Blob([view2], {type:'application/octet-binsry'});
var url = URL.createObjectURL(blob);
console.log(url);

