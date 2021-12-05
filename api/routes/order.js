const express = require('express');
const router = express.Router();


const orderController = require('../controllers/order')

router.post('/', orderController.post_order);

router.get('/', orderController.get_all_orders);

router.get('/:orderId', orderController.get_single_order);

router.patch('/:orderId', orderController.update_order);

router.delete('/:orderId', orderController.delete_order)

module.exports = router;