// Node.js Basics
// Introduction to Node.js
// Installing Node.js and npm.
// Working with module 
// File system operations
// understandings http module


// node js is not a language technology or framework

// node js is a runtime environment

// javascript se backend nhi bansakta
// kyuki js ke pass wo functionalities nahi hai jinse backend banate hai 
//ryan dahl isne socha js se backend banna chachiye 

// google charome ka v8  engine ke code opensource hia and ryan dahl us code main chedkhani kar rha hai

//chrome ka v8 engine bana hai c++ mai

// usne socha ki hume to js mai code karna hai


//hum js ka code likhenege jo ki wrapper layer of js receive karegi and wo code v8 engine ke c++ module ke sath ek server create karega

// nodeJs(js + V8)

// nodejs is js runtime environment

// node and & npm :  NPM stands for Node Package Manager and is the default package manager for the JavaScript runtime environment Node.js. It's a central repository of pre-written JavaScript packages, also known as modules, that developers can easily incorporate into their projects, speeding up development and facilitating code reuse. Think of it as a digital library where you can find a wide range of resources, from small utility functions to large, complex frameworks. 

///working with node and npm :: 
// npm init 
// node basic usage

// npm init -- package.json-> metadata of the project



//create a file
const fs = require('fs');
// fs.writeFile("hey-day2.txt","Hey hello kaise ho",function(err){
//     if(err) console.error(err);
//     else console.log("done");
// });


// //append in file
// fs.appendFile("hey-day2.txt","Mai toh thik hu", function(err){
//     if(err)console.error(err);
//     else console.log("done");
// });


// //rename 
// fs.rename("hey-day2.txt","hello-day2.txt", function(err){
//     if(err)console.error(err);
//     else console.log("done");
// });


// copy file
// fs.copyFile("hello-day2.txt", "./copy.txt",function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// });



// // unlink : deleting the file
// fs.unlink("copy.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("removed");
// });


// //rmdir   : is used for removing directory
// fs.rmdir("./copy", function(err){
//     if(err) console.error(err);
//     else console.log("removed folder");
// });

// //rm : folder containg file
// fs.rm("./copy",{recursive : true, focus : true}, function(err){
//     if(err) console.error(err);
//     else console.log("removed folder");
// });



//http and https
// protocol : internet pe kuch bhi karne ke liye rules banayegye hai unke dwara jinhone internet banaaya hai , ab unn rules follow karna jaruri hai , aur ye rule follow ho isliye rules aap ke operationg system ke software me pre installed hote hai.

// http - protocol
// yahi protocol hai ya rule hai jisko follow kare bina aap internet  pe kuch nhi bhej sakte  hai na hi kuch receive kar sakte.


// http.createServer'

const http = require('http');

const server = http.createServer(function(req,res){
    res.end("hello world");
})

server.listen(3000)