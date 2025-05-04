const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gouravgilhare:Gourav%401024@gourav.oqq8tzv.mongodb.net/?retryWrites=true&w=majority&appName=Gourav');


const userSchema = mongoose.Schema({

    image: String,
    name : String,
    email: String
})

module.exports = mongoose.model('user',userSchema);