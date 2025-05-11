const mongoose = require ('mongoose');


mongoose.connect("mongodb://127.0.0.1:27017/day17");



const userSchema = mongoose.Schema({
        username: String,
        name : String,
        age : Number, 
        password: String,
        email : String, 
        posts: [
            {type : mongoose.Schema.Types.ObjectId, ref:"post"}
        ]
})

module.exports = mongoose.model('user', userSchema);