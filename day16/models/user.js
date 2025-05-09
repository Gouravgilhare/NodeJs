const mongoose = require('mongoose');
const post = require('./post');

// Connect to MongoDB ONCE
mongoose.connect('mongodb://localhost:27017/testDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    age : Number,
    posts : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'post'
    }]
});

module.exports = mongoose.model('user', userSchema);