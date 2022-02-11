const express = require('express');
const { addBus, getBuses, deleteBus, updateBus, getBus, updateBusAppoitment, deleteBusAppoitment,addBusAppoitment, getBusAppoitment } = require('../controllers/busController');
const {authinticate,isAdmin} = require('../Middleware/authinticate');
const router = express.Router();

router.post('/add',authinticate,isAdmin,addBus);
router.get('/all',getBuses);
router.route('/:id').delete(authinticate,isAdmin,deleteBus).put(authinticate,isAdmin,updateBus).get(authinticate,getBus).post(authinticate,isAdmin,addBusAppoitment);
router.route('/appoitment/:appoitment_id').put(authinticate,isAdmin,updateBusAppoitment).delete(authinticate,isAdmin,deleteBusAppoitment).get(authinticate,getBusAppoitment);


module.exports = router; 