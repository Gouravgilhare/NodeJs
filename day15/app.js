const cookieParser = require('cookie-parser');
const express= require('express');
const app = express();
const path = require('path');
const userModel  = require('./models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.get('/', function(req,res){

    res.render('index');
});


app.post('/create',  function(req,res){

    let {username, email,password,age}  = req.body;


    bcrypt.genSalt(10,(err,salt)=>{

        if(err) throw err;

        bcrypt.hash(password,salt, async(err,hash)=>{

            let createdUser =await  userModel.create({
                username,
                email,
                password : hash,
                age
            });
            let token = jwt.sign({email},"shhhhhh");
            res.cookie("token",token);
            res.send(createdUser);
        })
        
    })
});


app.get("/logout", function(req,res){
        res.cookie("token", "");
        res.redirect("/");

})
app.get("/login", function(req,res){
        res.render('login');

})


app.post('/login', async function(req,res){

   let user = await userModel.findOne({email: req.body.email});
   if(!user) return res.send("something is wrong");
   
    bcrypt.compare(req.body.password, user.password,function(err,result){
        if(result)  {
            
            let token = jwt.sign({email : user.email},"shhhhhhhh");
            res.cookie("token", token);
            res.send("yes you can login");
            console.log(result);
            
        }else res.send("You cant Login");
    })

})

app.listen(3000);