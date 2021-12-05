const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: {type: String, required: true, ref: "Product"},
    quantity: {type: Number, required: true},
});

module.exports = mongoose.model('Order', orderSchema);