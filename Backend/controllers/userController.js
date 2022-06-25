const {User} = require('../DB/Models/users');
const socket = require('../server');


const register = (async (req,res) => {
    const {username,email,password,isAdmin} = req.body;
    var user = await User.create({
        username:username,
        email:email,
        password:password,
        isAdmin:isAdmin
       });
    if(!user){
        res.status(400).send();
    }
    var token = user.generateAuthToken(); 
    res.status(201).send({
        _id:user._id, 
        username: user.username,
        email:user.email,
        isAdmin:user.isAdmin,
        token:token
    });
})
 


const login = (async (req,res)  => {
    const {email,password} = req.body; 
    var user = await User.findByEmail(email);
   if(user && await (user.matchPasssword(password))){
    socket.ioObject.sockets.emit('welcomeback',user); 
    res.status(200).send({
        _id:user._id, 
        username:user.username,
        email:user.email,
        isAdmin:user.isAdmin,
        token:user.generateAuthToken()
 
    });
   }else{
       res.status(400).send("Invalid email or password")
   }
   
})
    




const updateUser = (async (req,res) => {
    const id = req.params.id;
    var user = await User.findOneAndUpdate({_id:id},{$set:req.body},{new:true});
    if(!user){
        res.status(400).send()
    }
    res.status(200).send({
         _id: user._id,
         username: user.username,
         email:user.email,
         isAdmin: user.isAdmin
    })
 
})
    

 const updateProfile = (async (req,res) => {
    var user = req.user;
    user.username = req.body.username || user.username
    user.email = req.body.email || user.email
     if(req.body.password){
      user.password = req.body.password
     }
     const updatedUser = await user.save();
     res.status(200).send({
      _id: updatedUser._id,
      username:updatedUser.username,
      email:updatedUser.email,
      isAdmin:updatedUser.isAdmin,
     });
 }) ;

 const getUserprofile = ( async (req,res) => {
    var user = await User.findOne({_id:req.user._id});
     if(!user){
         return res.status(404).send();
     }
    return res.status(200).send({
      _id: user._id,
      username:user.username,
      email:user.email,
      isAdmin:user.isAdmin,
    }); 
  })


 const getAllUsers = (async(req,res) => {
     const users = await User.find({});
     if(!users){
         res.status(404).send()
     }
     res.status(200).send(users);
 });

const getUser = (async (req,res) => {
  var id = req.params.id;
  var user = await User.findOne({_id:id});
  if(!user){
      res.status(404).send();
  }
  res.status(200).send({
      _id:user._id,
      username:user.username,
      email:user.email,
      isAdmin:user.isAdmin
  })
});



const deleteUser = (async (req,res) => {
    var id = req.params.id;
  const user = await User.findById(id);
   if(!user){
     res.status(404).send();
   }
  await user.remove();
  res.status(200).send("User Removed")
})


module.exports = {register,login,updateProfile,updateUser,getAllUsers,getUser,deleteUser,getUserprofile}