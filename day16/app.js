const express = require('express');
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");

app.get('/', (req,res)=>{
    res.send("hey");
});


app.get('/create', async (req,res)=>{
    let user = await userModel.create({
        username : "gourav",
        age : 32,
        email : "goruav@gmail.com" 
    })

    res.send(user);
});


app.get('/post/create', async (req,res)=>{
    


    let post = await   postModel.create({
        postdata: " Hello to all",
        user : "681e481b1b180d155fe969cb"

    })

    let user = await userModel.findOne({_id : "681e481b1b180d155fe969cb"});
        user.posts.push(post._id);
        await user.save();
    res.send({post,user});

});

app.listen(3000);   