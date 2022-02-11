const express = require('express');
const router = express.Router();
const {register, login, updateProfile, updateUser, deleteUser, getUser, getAllUsers,getUserprofile} = require('../controllers/userController');
const {authinticate,isAdmin} = require('../Middleware/authinticate');

router.get('/all',authinticate,isAdmin,getAllUsers);
 router.route('/register').post(register);
 router.post('/login',login)
 router.route('/profile').put(authinticate,updateProfile).get(authinticate,getUserprofile);
 router.route('/:id').get(authinticate,isAdmin,getUser).put(authinticate,isAdmin,updateUser).delete(authinticate,isAdmin,deleteUser);



module.exports = router; 