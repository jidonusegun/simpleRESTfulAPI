const express = require('express');
const router = express.Router();
const multer = require('multer');

const checkAuth = require('../middleWare/check-auth');

const productController = require('../controllers/product')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload/')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString+file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
 })


router.post('/', checkAuth, upload.single('productImage'), productController.post_product);

// router.get('/', productController.get_all_product);

// router.get('/:productId', productController.get_single_product);

router.patch('/:productId', productController.update_product);

router.delete('/:productId', productController.delete_product)



module.exports = router;