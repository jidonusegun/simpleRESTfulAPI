const mongoose = require('mongoose');

const Order = require('../module/order');
const Product = require('../module/product');

// exports.post_order = (req, res, next) => {
//     // Product.findById(req.body.productId)
//     // .exec()
//     // .then(result => {
//         const order = new Order({
//             _id: mongoose.Types.ObjectId(),
//             productId: result._id,
//             quantity: req.body.quantity
//         })
//         order.save()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Order added successfully',
//                 id: result._id,
//                 productId: result.productId,
//                 quantity: result.quantity
//             })
//         })
//         .catch(err => {
//             res.status(500).json({message: 'Product does not exist'})
//         })
// }

// exports.get_all_orders = (req, res, next) => {
//     Order.find()
//     .select('_id productId quantity')
//     .exec()
//     .then(result => {
//         if(result.length > 0){
//             res.status(200).json({
//                 success: true,
//                 count: result.length,
//                 data: result.map(data => {
//                     return {
//                         id: data._id,
//                         productId: data.productId,
//                         quantity: data.quantity
//                     }
//                 })
//             })
//         } 
//         else {
//             res.status(200).json({
//                 count: result.length ,
//                 data: []
//             })
//         }
//     })
//     .catch(err => {
//         res.status(500).json({error: err})
//     })
// }

// exports.get_single_order = (req, res, next) => {
//     Order.findById(req.params.orderId)
//     .select('_id productId quantity')
//     .exec()
//     .then(result => {
//         if(result) {
//             res.status(200).json({
//                 success: true,
//                 id: result._id,
//                 productId: result.productId,
//                 quantity: result.quantity
//             })
//         }
//         else {
//             res.status(200).json({
//                 success: true
//             })
//         }
        
//     })
//     .catch(err => {
//         res.status(500).json({message: "No order found with that id"})
//     })
// }

// exports.update_order = (req, res, next) => {
//     Order.findById(req.params.orderId)
//     .exec()
//     .then(result => {
//         Order.updateOne({_id: req.params.orderId}, req.body)
//         .exec()
//         .then(result => {
//             if(result.modifiedCount === 1) {
//                 Order.findById(req.params.orderId)
//                 .select('_id productId quantity')
//                 .exec()
//                 .then(result => {
//                     res.status(200).json({
//                         message: 'Updated successfully',
//                         id: result._id,
//                         productId: result.productId,
//                         quantity: result.quantity
//                     })
//                 })
//                 .catch(err => {
//                     res.status(500).json({error: err})
//                 })
//             }
//             else {
//                 res.status(200).json({message: 'Something went wrong'})
//             }
//         })
//         .catch(err => {
//             res.status(500).json({error: err})
//         })
//     })
//     .catch(err => {
//         res.status(500).json({message: 'No order find with that id'})
//     })
// }

// exports.delete_order = (req, res, next) => {
//     Order.remove({_id: req.params.orderId})
//     .exec()
//     .then(result => {
//         if(result.deletedCount === 1) {
//             res.status(200).json({
//                 message: 'deleted successffuly'
//             })
//         }
//         else {
//             res.status(200).json({
//                 message: 'Something went wrong'
//             })
//         }
//     })
//     .catch(err => {
//         res.status(500).json({error: err})
//     })
// }