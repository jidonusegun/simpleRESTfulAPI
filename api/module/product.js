const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    price: {type: String, required: true},
    productImage: String,
    description: String,
})

module.exports = mongoose.model('Product', productSchema)