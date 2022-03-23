const express = require('express');
var ObjectId = require('mongodb').ObjectId;
const products=express.Router();

const Product = require('../models/Product')

// get by category
products.get('/',(req,res)=>{
    const {category} = req.query;
    if (category){
        Product.aggregate([
            {$match:{category:category}},
            {$lookup:
                {
                    from:'producers',
                    localField:'producerId',
                    foreignField:'pid',
                    as: 'producerdetails',
                }
            },
            { $project: {producerId: 0 } },
        ])
        .then(request=>res.json(request))
        .catch(err=>{
            res.send('error '+err)
        })
    }
    else{
        Product.find(function(err,products){
            res.json(products);
        })
    }
})

// //get by product Id
// products.get('/:id',(req,res)=>{
//     const {id} = req.params;

//     Product.aggregate([
//         {$match:{_id:ObjectId(id)}},
//         {$lookup:
//             {
//                 from:'producers',
//                 localField:'producerId',
//                 foreignField:'pid',
//                 as: 'producerdetails',
//             }
//         },
//         { $project: {producerId: 0 } },
//     ])
//     .then(request=>res.json(request))
//     .catch(err=>{
//         res.send('error '+err)
//     })
// })




module.exports= products;