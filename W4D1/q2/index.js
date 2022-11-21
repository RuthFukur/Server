const express = require('express');
const url = require('url');
const path = require('path');
const session= require('express-session');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/JavaScript', express.static(path.join(__dirname, 'JavaScript')));


app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing',
}));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/myHTML.html'));
});

app.post('/result', (req, res)=>{
    req.session.name = req.body.name;
    req.session.age = req.body.age;

    res.redirect(url.format({
        pathname: "/output"
    }));
});
// app.post('/result', (req, res) => {

//     res.redirect(url.format({
//         pathname: "/output",
//         query: req.body
//     }));
// });

app.get('/output', function(req, res){
let name = req.session.name;
let age = req.session.age;

res.send(`Welcome ${name}  age: ${age}`);
});

// app.get('/output', function (req, res) {
//     let { name, age } = req.query;
//     res.send(`Welcome ${name} age: ${age}`);
// });

app.listen(3000);