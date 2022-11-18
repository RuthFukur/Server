const express = require('express');
const url = require('url');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/JavaScript', express.static(path.join(__dirname, 'JavaScript')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/myHTML.html'));
});

app.post('/result', (req, res) => {
    res.redirect(url.format({
        pathname: "/output",
        query: req.body
    }));
});

app.get('/output', function (req, res) {
    let { name, age } = req.query;
    res.send(`Welcome ${name} age: ${age}`);
});

app.listen(9000);