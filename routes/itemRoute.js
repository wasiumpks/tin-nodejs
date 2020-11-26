const express = require('express');
const router = express.Router();

const userController = require('../controllers/itemController');

router.get('/', userController.showItemList);

router.get('/details', userController.showItemDetails);

router.get('/add', userController.addItem);

router.get('/edit', userController.editItem);

module.exports = router;
