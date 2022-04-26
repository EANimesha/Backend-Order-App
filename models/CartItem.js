const mongoose=require('mongoose');
const Schema=mongoose.Schema
var ObjectId = require('mongodb').ObjectId;

const cartItemSchema= new Schema({
    id:{
        type:String
    },
    cart_id:{
        type:ObjectId
    },
    product_id:{
        type:ObjectId
    },
    quantity:{
        type:Number
    }
})

module.exports=CartItem=mongoose.model('cart-item',cartItemSchema);