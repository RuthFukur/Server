const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/JavaScript', express.static(path.join(__dirname, 'JavaScript')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/myHTML.html'));
});

app.post('/result', (req, res) => {
    let { name, age } = req.body;

    res.send(`Welcome ${name} age: ${age}`)
});

app.listen(8000);