const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/',(req,res)=>{

    res.send("hey!!");
})

app.get('/create', async (req,res)=>{

    try {

        let createdUser = await userModel.create({
            name : "Gourav",
            username :"gourav",
            email:  "gouravgilhare@gmail.com",
            
        })
        
        res.send(createdUser);
    }catch(err){
        console.error("Error Creating user : ",err );
            res.status(500).send("Error creating user");
    }
        
})

app.get('/update', async (req,res)=>{

    try {

        let updatedUser = await userModel.findOneAndUpdate({username : "gourav"},{name : "Gourav Gilhare"},{email : "gouravgilhare@gmail.com"});

        res.send(updatedUser);
    
    }catch(err){
        console.error("Error Creating user : ",err );
            res.status(500).send("Error creating user");
    }
        
})

app.get('/read', async (req,res)=>{

    try {

        let user = await userModel.find();

        res.send(user);
    
    }catch(err){
        console.error("Error Creating user : ",err );
            res.status(500).send("Error creating user");
    }
        
})
app.get('/read/one', async (req,res)=>{

    try {

        let user = await userModel.findOne();

        res.send(user);
    
    }catch(err){
        console.error("Error Creating user : ",err );
            res.status(500).send("Error creating user");
    }
        
})

app.listen(3000);