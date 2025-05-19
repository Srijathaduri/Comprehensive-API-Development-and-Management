const express = require("express") ;
const router = express.Router();
const auth = require('../middleware/auth.js')
const userController = require('../controller/userController.js')

router.post('/users',userController.createUser);
router.get('/users',userController.getUsers);
router.get("/users/:id",userController.getUsersById);
router.get("/users/:id",userController.updateUser);
router.get("/users/:id",userController.deleteUser);

module.exports=router;
