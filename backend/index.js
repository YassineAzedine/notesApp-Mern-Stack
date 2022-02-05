const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {noteRoutes} = require('./routes/notes.routes') 
    require('dotenv').config();
     const uri = process.env.DB
    const app = express();
    app.use(express.json({extended : false}));
    app.use(cors());
    app.get('/' ,(req,res)=>{
        res.send(' api working')
    })
    app.use('/',noteRoutes)
    //la connexion avec la base donné
    mongoose.connect(uri).then(()=> console.log('connected')).catch(err => console.log(err))

    const port = process.env.PORT || 3200;
    app.listen(port,()=>{
        console.log('server running in 3000');
    })

