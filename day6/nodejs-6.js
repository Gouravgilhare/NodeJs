// initialize a project with npm ;
//express install\
//dynamic routing 
//how to get data comming from frotend at backend route


//setting up parser for form 

const express = require ('express');
const app = express();
const Path  = require('path');

//setting up parser for ejs pages;
//ejs like a html pages 
//install ejs from npm
//setup ejs as a middleware fro view engine
app.use(express.json());  //(parsers)
app.use(express.urlencoded({extended : true}));   //parsers

app.use(express.static(Path.join(__dirname,'public')));


app.set('view engine' , 'ejs');



app.get("/",function(req,res,next){
    
    res.render("index");
});

app.get("/profile/:username",function(req,res,next){
    
    res.send("Welcome " + req.params.username);
});


app.get("/profile/:username/:age",function(req,res,next){
    
    res.send(req.params);
});


app.listen(3000,function(){
    console.log("its running ");
})



//dynamics routing

//humlog kai baar kuch routes dekhte hai unmein sirf ek hi hissa change hota hai

//sabse pehle browser pe jayieye 
//url likhiye aapko jo chahiye and enter press karo
//ab us url  route ko create kariye
//res bhejiye kuch bhi

//ab usi url ko dynamic banana hai toh realise karo konsa part dynamic banana hai aur us part ke aage route mai : lagao






