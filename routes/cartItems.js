const express = require('express');
const CartItem = require('../models/CartItem')
var ObjectId = require('mongodb').ObjectId;
const cartItems=express.Router();

//get cart items by cart id
cartItems.get('/:id',(req,res)=>{
    const {id} = req.params;
    CartItem.findOne({cart_id:ObjectId(id)})
    .then(i=>res.json(i))
    .catch(err=>{
        res.send('error '+err)
    })
})

//add items to cart

cartItems.post('/:id',(req,res)=>{
    const cartItemData={
        cart_id:req.params.id,
        product_id: req.body.product_id,
        quantity:req.body.quantity
    }
    CartItem.findOne({
        cart_id:req.params.id,
        product_id: req.body.product_id
    })
    .then(item=>{
        if(!item){
            CartItem.create(cartItemData)
            .then(()=>{
                   res.json(' Added to cart')
             })
            .catch(err=>{
                res.send('error: '+err);
           })
        }else{
            // item already exist
            CartItem.updateOne({
                cart_id:req.params.id,
                product_id: req.body.product_id
            },{
                $inc:{quantity:req.body.quantity}
            }
            ).then(()=>{
                res.json('Increment quantity of items in cart')
            })
            .catch(err=>{
                res.send('error: '+err);
            })
        }
    })
    .catch(err=>{
        res.send('error : '+err)
    })
})


module.exports= cartItems;