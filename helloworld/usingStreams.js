var fs=require("fs");
var readableStream=fs.createReadStream("hello.js");
var data="";
readableStream.setEncoding("UTF8");
readableStream.on("data",function(chunk){
    data+=chunk;
});

readableStream.on("end",function(){
    console.log(data);
});

// we could create a writtable stream in the same way as above