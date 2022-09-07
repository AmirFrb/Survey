const express = require('express');
const app = express(); 
const path = require('path');
const dotenv = require('dotenv').config();

//Routing 

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,'views/HomePage.html'));
})

//Web Server 

mainapp = () => {
    const port = process.env.APP_PORT;

    app.listen(port, () => {
        console.log('app running on 5000')
    })}

module.exports = mainapp;