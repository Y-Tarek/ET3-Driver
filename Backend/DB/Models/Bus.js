const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    ticketPrice:{
        type:Number,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    appoitments:[
     {
        time:{type:String,required:true},
        from:{type:String,required:true},
        day:{type:String,required:true}
     }
  ],
  isAvailable:{
      type:Boolean,
      default:true,
      required:true
  },
  
},{
    timestamps:true
});

//Instance Methods
busSchema.methods.removeAppoitment = function(appoitment_id){
 var bus = this;
 return bus.updateOne({
     $pull:{
        appoitments:{
           _id:appoitment_id
        }
     }
 })
}

busSchema.methods.addAppoitment = async function(data){
    var bus = this;
    bus.appoitments.push(data);
    return await bus.save();
}

const Bus = mongoose.model('bus',busSchema);
module.exports = {Bus};