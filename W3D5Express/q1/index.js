const express = require('express');
const f= require('express')
const app= f();



app.get('/', (req, res)=>{
    let name=req.query.name;
    let age=req.query.age;
    if(!name){
        name = "Person";
    }
    if(!age){
        age = "Not provided";
    }

    res.send('Welcome ${name}, your age is ${age}');
});

app.listen(3000);