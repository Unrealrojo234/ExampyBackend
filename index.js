const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const dataBase = process.env.VITE_REACT_API_DATABASE_STRING;

const corsOptions = {
    origin:'*',//Allows all origins
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE', //Allowed methods
    allowedHeaders:'Content-Type, Authorization' //Allowed Headers
};

app.use(cors(corsOptions));

app.use(express.json());
//imorting models
const Mock = require('./models/mock.models');

//Posting data to the database
app.post('/mock',cors(),async(req,res)=>{
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

//Deleting data from database using id
app.delete('/mock/:id',cors(),async(req,res)=>{
    try{
        const {id} = req.params;
        const mock = await Mock.findByIdAndDelete(id);

        if (!mock){
            return res.status(404).json({message:'Mock was not found!'})
        }
        res.status(200).json({message:'Mock deleted successfully'})

    }catch(error){
        console.log('Error',error)
    }
});


//Getting data from the database
app.get('/mock',cors(), async(req,res)=>{
    try{
        const mock = await Mock.find({});
        res.status(200).json(mock);

    }catch(error){
        res.status(500).json({message: error.message})
    }
})



app.get('/',(req,res)=>{
    res.send("<h1>Hello Exampy Backend</h1>")
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
