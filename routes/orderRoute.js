const express = require('express');
const router = express.Router();

const userController = require('../controllers/orderController');

router.get('/', userController.showOrderList);

router.get('/add', userController.addOrder);

router.get('/edit', userController.editOrder);

router.get('/details', userController.showOrderDetails);

module.exports = router;
