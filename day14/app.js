const cookieParser = require('cookie-parser');
const express= require('express');
const app= express();


app.get('/' , (req,res)=>{
    res.cookie("name","Gourav");
    res.send("done");
});

app.get('/read' , (req,res)=>{
    // res.cookie("name","Gourav");
    console.log(req.cookies);
    res.send("read done");
});



app.listen(3000);