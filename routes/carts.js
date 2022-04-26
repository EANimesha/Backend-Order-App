const express = require('express');
const Cart = require('../models/Cart');
const CartItem = require('../models/CartItem');
var ObjectId = require('mongodb').ObjectId;
const carts=express.Router();


carts.get('/',(req,res)=>{
    Cart.find()
    .then(i=>res.json(i))
    .catch(err=>{
        res.send('error '+err)
    })
})

carts.get('/:id',(req,res)=>{
    const {id} = req.params;
    Cart.findOne({_id:ObjectId(id)})
    .then(i=>res.json(i))
    .catch(err=>{
        res.send('error '+err)
    })
})

carts.post('/',(req,res)=>{
    const cartData={
        name:req.body.name
    }
    Cart.findOne({
        name:req.body.name 
    })
    .then(cart=>{
        if(!cart){
            Cart.create(cartData)
            .then(()=>{
                   res.json(cartData.name+' Added')
             })
            .catch(err=>{
                res.send('error: '+err);
           })
        }else{
            res.json({error:'Cart already exists'})
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})

carts.delete('/:id',(req,res)=>{
    const {id} = req.params;
    Cart.deleteOne({_id:id})
    .then(()=>{
        CartItem.deleteMany({cart_id:id})
        .then(()=>{
            res.json('Deleted cart '+id)
        })
        .catch(err=>{
            res.json('error: '+err)
        })
    })
    .catch(err=>{
        res.json('error: '+err)
    })
})

module.exports= carts;