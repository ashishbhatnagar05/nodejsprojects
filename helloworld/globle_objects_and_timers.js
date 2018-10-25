/**how could we use various globle objects in node js and timers
 * 
 */

console.log(__filename);//displays the current file location
console.log(__dirname);//displays the directory where the file is located

function print1(){
console.log("printing using print1");
}

function print2(){
    console.log("printing using print2");
    }

setTimeout(print1,5000);//print after 5000 ms
setInterval(print2,2000);//print after each 2000 ms    