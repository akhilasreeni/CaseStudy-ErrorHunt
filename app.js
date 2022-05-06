const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
//ERROR#2 Imported body-parser package
const bodyParser = require('body-parser');

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
//Error#3 changed the router filename from homerouter.js to homeroute.js
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public')));
//ERROR#7 Binding cors for resource sharing 
app.use(cors())
app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5500,()=>{
    //ERROR#5 changed the port number from 3000 to 5500
    console.log("Server Ready on 5500");//changed the port number from 3000 to 5500
});