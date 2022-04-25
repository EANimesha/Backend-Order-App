const express = require('express');
const Cart = require('../models/Cart')
const carts=express.Router();


carts.get('/',(req,res)=>{
    Cart.find()
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


module.exports= carts;