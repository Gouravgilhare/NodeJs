const mongoose = require('mongoose');

try{

    mongoose.connect('mongodb+srv://gouravgilhare:Gourav%401024@gourav.oqq8tzv.mongodb.net/?retryWrites=true&w=majority&appName=Gourav');

}catch(err){
    console.error(err);
}
const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String
})


module.exports = mongoose.model("user", userSchema);
