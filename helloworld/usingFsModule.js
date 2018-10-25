/**using file IO module
 * 
 * 
 */

 var fs=require("fs");
fs.cl
 fs.readFile("hello.js",function(err,data){
     if(err){
         console.log(err);
     }
     else{
         console.log("Async data: " +data.toString())
     }
 });

 var data=fs.readFileSync("hello.js");
 console.log("Sync read data: "+data.toString());