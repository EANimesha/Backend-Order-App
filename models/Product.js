const mongoose=require('mongoose');
const Schema=mongoose.Schema

const productSchema= new Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    category:{
        type:String,
        enum:['MEAT','CAKE']
    }
})

module.exports=Product=mongoose.model('products',productSchema);