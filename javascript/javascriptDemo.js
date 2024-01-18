console.log("hello world");
function printName(){
    function printNumber(){
        console.log("2");
    }
    printNumber();
    console.log("ayush");
}

// hoisting 
const func1 = function(input1, input2){
    return input1*input2;
}
console.log(func1(5,3));

// iife 
(function add(){
    console.log("Add");
})();
(()=> {
    console.log("sub"); 
})();

// arrow fucntion 
let val = (() => (5))();
console.log(val); 


