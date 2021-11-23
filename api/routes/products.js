const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Product = require('../module/product');


router.post('/',(req, res, next) => {
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    })
    product.save()
    .then(result => {
        res.status(200).json({
            message: 'Product added successfully,',
            id: result._id,
            name: result.name,
            price: result.price,
            description: result.description
        })
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
});

router.get('/',(req, res, next) => {
    Product.find()
    .select('_id name price description')
    .exec()
    .then(result => {
        res.status(200).json({
            count: result.length,
            data: result.map(data => {
                return {
                    success: true,
                    id: data._id,
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    request: {
                        type: 'GET',
                        url: 'localhost:3000/products/' + data._id
                    }
                }
            })
        })
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
});

router.get('/:productId',(req, res, next) => {
    Product.findById(req.params.productId)
    .select('_id name price description')
    .exec()
    .then(result => {
        res.status(200).json({
            id: result.id,
            name: result.name,
            price: result.price,
            description: result.description
        })
    })
    .catch(err => {
        res.status(500).json({message: "This product does not exist"})
    })
});


router.patch('/:productId',(req, res, next) => {
    Product.findById(req.params.productId)
    .exec()
    .then(result => {
        Product.updateOne({_id: req.params.productId}, req.body)
        .exec()
        .then(result => {
            if(result.modifiedCount === 1) {
                Product.findById(req.params.productId)
                .select('_id name price description')
                .exec()
                .then(result => {
                    res.status(200).json({
                        id: result._id,
                        name: result.name,
                        price: result.price,
                        description: result.description
                    })
                })
                .catch(err => {
                    res.status(500).json({error: err})
                })
            } else {
                res.status(200).json({
                    message: 'Something went wrong'
                })
            }
        })
    })
    .catch(err => {
        res.status(500).json({message: "Product does not exist"})
    })
});

router.delete('/:productId',(req, res, next) => {
    Product.findById(req.params.productId)
    .exec()
    .then(result => {
        Product.remove({_id: req.params.productId})
        .exec()
        .then(result => {
            if(result.deletedCount === 1) {
                res.status(200).json({
                    message: 'deleted successfully'
                })
            }
            else {
                res.status(200).json({
                    message: 'Something went wrong'
                })
            }
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "ProductId does not exist"
        })
    })
})



module.exports = router;