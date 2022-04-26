const serverless = require('serverless-http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors=require('cors');
const bodyParser = require('body-parser');


var products= require('./routes/products')
var carts = require('./routes/carts')
var cartItems = require('./routes/cartItems')

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
app.use(bodyParser.json());
app.use('/products',products);
app.use('/carts',carts);
app.use('/cart-items',cartItems);

app.get('/',(req,res)=>{
    res.send('API running')
})

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))
module.exports.handler = serverless(app);