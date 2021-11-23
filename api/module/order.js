const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: {type: String, require: true, ref: "Product"},
    quantity: {type: Number, require: true},
});

module.exports = mongoose.model('Order', orderSchema);