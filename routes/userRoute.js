const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.showUserList);

router.get('/details', userController.showUserDetails);

router.get('/add', userController.addUser);

router.get('/edit', userController.editUser);

module.exports = router;
