const express = require('express');
const { createReservation, getReservations, getReservationById, getApproavedReservations, updateReservationApproval, getUserReservations,deletReservation } = require('../controllers/reservationController');
const router = express.Router();
const {authinticate,isAdmin} = require('../Middleware/authinticate');
const { route } = require('./userRoutes');


router.route('/').post(authinticate,createReservation).get(authinticate,isAdmin,getReservations);
router.get('/my',authinticate,getUserReservations)
router.get('/approaved',authinticate,isAdmin,getApproavedReservations);

router.route('/:id').get(authinticate,isAdmin,getReservationById).put(authinticate,isAdmin,updateReservationApproval).delete(authinticate,isAdmin,deletReservation)



module.exports = router;