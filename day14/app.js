// const cookieParser = require('cookie-parser');
// const express= require('express');
// const app= express();



// // // app.use(cookieParser());

// // app.get('/' , (req,res)=>{
// //     res.cookie("name","Gourav");
// //     res.send("done");
// // });

// // app.get('/read' , (req,res)=>{
// //     // res.cookie("name","Gourav");
// //     console.log(req.cookies);
// //     res.send("read done");
// // });





// const express= require('express');
// const app= express();

// const bcrypt = require('bcrypt');

// // app.get('/', (req, res) => {
// //     console.log("GET / triggered");
// //     bcrypt.genSalt(10, function(err, salt) {
// //         bcrypt.hash("polololoo", salt, function(err,hash){
// //             console.log("hash" ,hash);
// //             res.send(`generated hash : ${hash}`);
// //         });
// //     });
// // });

// app.get('/', (req, res) => {
//    bcrypt.compare("polololoo", "$2b$10$ODFhVaj65fKMROAsmUz8qOkwOL/SgVdE95ng3tkyRnQlDGO1LFd8u", (err,result)=>{
//         console.log(result);
//         res.send(result);
        
        
//    })
// });

// app.listen(3000);



const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


app.use(cookieParser());

app.get('/', (req,res)=>{
    let token = jwt.sign({email: "gourav@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("done");
})

app.get("/read", function(req, res){
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    res.send(JSON.stringify (data));
})

app.listen(3000);   