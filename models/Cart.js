const mongoose=require('mongoose');
const Schema=mongoose.Schema

const cartSchema= new Schema({
    id:{
        type:String
    },
    name:{
        type:String
    }
})

module.exports=Cart=mongoose.model('carts',cartSchema);