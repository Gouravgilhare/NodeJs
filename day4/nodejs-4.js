//Express.js Framework

//Introduction to Express.js
//express js ek npm package hai
//framework -> ek kaam ka process batata hai but wo kaam kaise karna hai wo khud sochna hai
//manages everything from recieving the request and giving the response

//setting up basic Express application
//Routing
//Middleware
//request and response handling
//error handling

//MERN stack

// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000)

//creating routes

// facebook.com/sdafkakdfn   : sdafkakdfn(route)

// const express = require('express');
// const app = express();
// app.get("/", function(req,res){

//     res.send("Gourav is a Champion");
// });

// app.get("/profile",function(req,res){
//         res.send("Gilhare is champion");
// })

// app.listen(3000);   // app.listen(port)

//middleware

// pc->request->middleware->routes->response->

// jab bhi server request  accept karta hai waha se route ke beech pahucne tak agar aap request ko beech mai rokte ho and kuch perform karte ho , to ye element middleware kehlata hai

// const express = require("express");
// const app = express();

// app.use(function (req, res, next) {
//   // middle ware function

//   console.log("Middleware is running");

//   next(); // ab aage ka code run karega warna nhi chalega
// });

// app.use(function (req, res, next) {
//   // middle ware function

//   console.log("2nd Middleware is running ");

//   next(); // ab aage ka code run karega warna nhi chalega
// });

// app.get("/", function (req, res) {
//   res.send("Gourav is a Champion");
// });
// app.get("/about", function (req, res) {
//   res.send("about page ");
// });
// app.get("/profile", function (req, res) {
//   res.send("profile page ");
// });

// app.listen(3000); // app.listen(port)



//errorhandling

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  // middle ware function

  console.log("Middleware is running");

  next(); // ab aage ka code run karega warna nhi chalega
});

app.get("/profile", function(req,res,next){
    return next(new Error("Something went wrong"));
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something Broke!");
});

app.listen(3000); // app.listen(port)

