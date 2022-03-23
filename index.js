const serverless = require('serverless-http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors=require('cors');


var products= require('./routes/products')

const PORT = process.env.PORT || 5000

mongoose
.connect("mongodb+srv://admin:1234@cluster0.ehdvr.mongodb.net/syscomini?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(() => {
    console.log("Mongoose db connected")
})
.catch((error)=>{
    console.log('error connecting database',error)
})

app.use(cors())
app.use('/products',products);

app.get('/',(req,res)=>{
    res.send('API running')
})

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))
module.exports.handler = serverless(app);