const {Bus} = require('../DB/Models/Bus');

const addBus = (async (req,res) => {
  const {name,ticketPrice,destination,appoitments,isAvailable} = req.body;
  const bus = await Bus.create({
      name:name,
      ticketPrice:ticketPrice,
      destination:destination,
      appoitments:appoitments,
      isAvailable:isAvailable
  });
  if(!bus){
      res.status(400).send();
  }
  res.status(201).send(bus);
});

const getBuses = (async(req,res) => { 
    const firstkeyword = req.query.firstkeyword ? {
        destination:{
            $regex:req.query.firstkeyword,
            $options:'i'
        }
    } : {};
    const secondkeyword = req.query.secondkeyword ? {
        destination:{
            $regex:req.query.secondkeyword,
            $options:'i'
        }
    } : {}
    var buses = await Bus.find({ ...firstkeyword, ...secondkeyword });
    if(!buses){
        res.status(404).send()
    }
    res.status(200).send(buses);
});

const getBus = (async(req,res) => {
    const id = req.params.id;
    const bus = await Bus.findOne({_id:id});
    if(!bus){
        res.status(404).send()
    }
    res.status(200).send(bus);
})

const updateBus = (async (req,res) => {
    const updatedBus = await Bus.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
    if(!updatedBus){
        res.status(400).send();
    }
    res.status(200).send(updatedBus);
});

const deleteBus = (async(req,res) => {
   var bus =  await Bus.findOneAndDelete({_id:req.params.id});
   if(bus){
       res.status(200).send("bus removed")
   }else{
       res.status(400).send();
   }

});

const addBusAppoitment = (async (req,res) => {
 var id = req.params.id;
 const {time,from,day} = req.body;
 const bus = await Bus.findOne({_id:id});
 bus.addAppoitment({time,from,day}).then(() => {
     res.status(200).send();
 }).catch((e) => {res.status(400).send(e)})
})

const getBusAppoitment = (async (req,res) => {
    var appoitment_id = req.params.appoitment_id;
    var bus = await Bus.findOne({'appoitments._id':appoitment_id});
    if(!bus){
        res.status(404).send()
    }else{
        var appoitment = bus.appoitments.id(appoitment_id);
        res.status(200).send({
            _id:appoitment._id,
            name:bus.name,
            destination:bus.destination,
            ticketPrice:bus.ticketPrice,
            appoitment:appoitment
        })
    }
   
   
});


const updateBusAppoitment = (async (req,res) => {
 var appoitment_id = req.params.appoitment_id;
 var bus = await Bus.findOne({'appoitments._id':appoitment_id});
 var appoitment = bus.appoitments.id(appoitment_id); 
 appoitment.time = req.body.time || appoitment.time ;
 appoitment.from = req.body.from || appoitment.from;
 appoitment.day = req.body.day || appoitment.day;
 var updatedOne = await bus.save();
 if(updatedOne){
     res.status(200).send(updatedOne);
 }else{
     res.status(400).send();
 }

 
});

const deleteBusAppoitment = (async (req,res) => {
    var appoitment_id = req.params.appoitment_id;
    var bus = await Bus.findOne({'appoitments._id':appoitment_id});
    bus.removeAppoitment(appoitment_id).then(() => {
        res.status(200).send("removed");
    }).catch((e) => {res.status(400).send(e)}); 
   
});

module.exports = {addBus,getBuses,updateBus,deleteBus,getBus,updateBusAppoitment,deleteBusAppoitment,addBusAppoitment,getBusAppoitment};