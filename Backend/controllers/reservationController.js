const {Reservation} = require('../DB/Models/reservation');

const createReservation = (async (req,res) => {
 var user_id = req.user._id;
 const {tripDetails,number} = req.body;
 const reservation = new Reservation({
     user:user_id,
     tripDetails,
     number
 });

 const newReservation = await reservation.save();
 res.status(201).send(newReservation);
});

const getReservations = (async (req,res) => {
    const number = req.query.number ? {
        number:req.query.number
    } : {};

 const data = await Reservation.find({...number}).populate('user', 'id username');
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

// const getReservationNumber = (async (req,res) => {
//     var number = req.params.number;
//     var item = await Reservation.findOne({number:number});
//     if(!item){
//         res.status(404).send();
//     }
//     res.status(200).send(item);
//    });

const getUserReservations = (async (req,res) => {
    var id = req.user._id;
    var items = await Reservation.find({user:id});
    if(!items){
        res.status(404).send();
    }
    res.status(200).send(items);
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

const deletReservation = (async (req,res) => {
    var id = req.params.id;
    var deleted = await Reservation.findOneAndDelete({_id:id});
    if(!deleted){
        res.status(400).send();
    }
    res.status(200).send("deleted");
   });


module.exports = {createReservation,getReservations,getApproavedReservations,updateReservationApproval,getReservationById, getUserReservations, deletReservation}
