const mongoose = require('mongoose');

const MD_URI = 'mongodb+srv://AkhilaSreeni:FirstProject2022@librarydb.nuu9d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MD_URI || 'mongodb://localhost:27017/Library',{
    useNewUrlparser: true,
    useUnifiedTopology: true
});


//mongoose.connection.on("connected",()=>{
//    console.log("Connected");
//});

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;