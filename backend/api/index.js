const express= require('express');
require('dotenv').config();
const cors = require('cors');
const path= require('path');
const routes=require('../routes')
const connectDB=require('../connectdb');
const cookieParser= require('cookie-parser');
const { default: mongoose } = require('mongoose');
const PORT=process.env.PORT ||8000;

const app= express();

app.use(cors({credentials:true}));


app.use(cookieParser());


connectDB();

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use('/',routes);

mongoose.connection.once('open',()=>{
    app.listen(PORT,()=>{ console.log(`listening on port ${PORT}`);})
})
