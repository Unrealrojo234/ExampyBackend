const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const dataBase = process.env.DATABASE_STRING;

app.use(express.json());

//imorting models
const Mock = require('./models/mock.models');

//Posting data to the database
app.post('/mock',async(req,res)=>{
    try{
        const mock = await Mock.create(req.body);
        res.status(200).json(mock);
        res.send(
            console.log(mock)
        )

    }catch(error){
        res.status(500).json({message: error.message})
    }
})


//Serving static assets
app.use('/html',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html')
})

//serving public assets
app.use('/',(req,res)=>{
    res.sendFile(__dirname + '/public/styles.css')
})              


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
    
})



mongoose.connect(dataBase)
    .then(()=>{
        console.log("Successfully connected to the database")
    })
    .catch(()=>{
        console.log("Failed to connect to the database")
    })
