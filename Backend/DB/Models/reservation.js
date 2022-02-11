const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
 user:{
     type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref:'users'
 },
 isApproaved:{
     type:Boolean,
     required:true,
     default:false
 },
 tripDetails:{
     bus:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'bus'},
     name:{type:String,required:true},
     price:{type:Number,required:true},
     day:{type:String,required:true},
     from:{type:String,required:true},
     time:{type:String,required:true}
 }
},{
    timestamps:true
});

const Reservation = mongoose.model('reservation',reservationSchema);
module.exports = {Reservation};