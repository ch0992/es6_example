(function () {
   var a = 100;
   switch (a) {
       case 100:
           var a = 200;
           break;
   }
    console.log(a);
})();

function next() {
    let b = 100;
    switch (b) {
        case 100:
            let b = 200;
            break;
    }   
    console.log(b);
}
next();