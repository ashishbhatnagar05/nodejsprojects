/**below code demonstrate the use of function in varies ways.
 * 
 * 
 */

function print1(x) {
    console.log("function print1");
    console.log(x);
}//a way to define a function

var print2 = function (x) {
    console.log("function print2");
    console.log(x);
};//another way to define a function. using this we could pass the function as another function's parameter

function embed(anotherfunction, value) {
    anotherfunction(value);
}//this is the embedded function which takes a function and use it to execute

embed(print1, "ashish is awwwesome");

embed(print2, "ashish is very good boy");

embed(function (x) {
    console.log("anonymous function");
    console.log(x);
}, "ashish is very handsome");