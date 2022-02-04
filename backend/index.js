const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
    require('dotenv').config();

    const app = express();
    app.use(express.json({extended : false}));
    app.use(cors());
    app.get((req,res)=>{
           res.send(' api working')
    })
    const port = process.env.PORT || 3200;
    app.listen(port,()=>{
        console.log('server running in 3000');
    })