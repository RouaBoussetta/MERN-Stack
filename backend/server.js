const express = require('express');
const mongoose =require('mongoose');



//const bodyParser=require('body-parser');
const cors=require('cors');

require('dotenv').config();
const app=express();
const port=process.env.PORT ||5000;

app.use (cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });


    const exercisesRouter=require('./routes/exercises');
    const usersRouter=require('./routes/users');
    
 
    app.use('/exercises',exercisesRouter);
    app.use('/users',usersRouter);
app.listen(port,()=>{

    console.log(`Server is running on port: ${port}`);
});
