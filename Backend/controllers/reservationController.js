const {Reservation} = require('../DB/Models/reservation');

const createReservation = (async (req,res) => {
 var user_id = req.user._id;
 const {tripDetails} = req.body;
 const reservation = new Reservation({
     user:user_id,
     tripDetails:tripDetails
 });

 const newReservation = await reservation.save();
 res.status(201).send(newReservation);
});

const getReservations = (async (req,res) => {
 const data = await Reservation.find({}).populate('user', 'id username');
 if(!data){
     res.status(404).send()
 }
 res.status(200).send(data);
});

const getReservationById = (async (req,res) => {
 var id = req.params.id;
 var item = await Reservation.findOne({_id:id}).populate('user', 'username email');
 if(!item){
     res.status(404).send();
 }
 res.status(200).send(item);
});


const getApproavedReservations = (async (req,res) => {
 var data = await Reservation.find({isApproaved:true});
 if(!data){
     res.status(404).send()
 }
 res.status(200).send(data);
});


const updateReservationApproval = (async (req,res) => {
 var id = req.params.id;
 var update = await Reservation.findOneAndUpdate({_id:id},{$set:{isApproaved:true}},{new:true});
 if(!update){
     res.status(400).send();
 }
 res.status(200).send("Approaved");
});


module.exports = {createReservation,getReservations,getApproavedReservations,updateReservationApproval,getReservationById}
