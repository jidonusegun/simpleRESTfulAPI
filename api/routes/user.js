const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../module/user')


// router.post('/signup', (req, res, next) => {
//     User.find({email: req.body.email})
//     .exec()
//     .then(user => {
//         console.log(user)
//         if(user.length > 0) {
//             return res.status(409).json({
//                 message: 'User already exist'
//             })
//         }
//         else {
//             bcrypt.hash(req.body.password, 10, (err, hash) => {
//                 if(err) {
//                     res.status(500).json({error: err})
//                 }
//                 else {
//                     const user = new User({
//                         _id: mongoose.Types.ObjectId(),
//                         email: req.body.email,
//                         password: hash
//                     })
//                     user.save()
//                     .then(result => {
                        
//                         res.status(200).json({
//                             message: 'User created successfully',
//                         })
//                     })
//                     .catch(err => {
//                         res.status(500).json({error: err})
//                     })
//                 }
//             })
//         }
//     })
// });

// router.post('/login', (req, res, next) => {
//     User.find({email: req.body.email})
//     .exec()
//     .then(user => {
//         if(user.length < 1) {
//             return res.status(401).json({
//                 message: 'Invalid login details'
//             })
//         }
//         else {
//             bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//                 if(err) {
//                     return res.status(401).json({
//                         message: 'Invalid login details'
//                     })
//                 }
//                 if(result) {

//                     const token = jwt.sign(
//                         {
//                             userId: user[0]._id,
//                             email: user[0].email,
//                         },
//                         process.env.JWT_KEY,
//                         {
//                             expiresIn: "1h"
//                         }
//                     );
//                     return (res.status(200).json({
//                         message: "Login Successful",
//                         id: user[0]._id,
//                         email: user[0].email,
//                         token: token
//                     }))
//                 }
//                 else {
//                     res.status(401).json({
//                         message: 'Invalid login details'
//                     })
//                 }
//             })
//         }
//     })
//     .catch(err => {
//         res.status(500).json({error: err})
//     })
// })

// router.delete('/:userId', (req, res, next) => {
//     User.remove({_id: req.params.userId})
//     .exec()
//     .then(result => {
//         res.status(200).json({
//             message: 'User deleted'
//         })
//     })
//     .catch(err => {
//         res.status(500).json({error: err})
//     })
// })

module.exports = router;