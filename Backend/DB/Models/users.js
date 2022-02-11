const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
 username:{
     type:String,
     required:true,
     trim:true
 },
 email:{
     type:String,
     required:true,
     unique:true
 },
 password:{
     type:String,
     required:true
 },
 isAdmin:{
     type:Boolean,
     default:false,
     required:true
 }

},{
    timestamps:true
});

// Instance Methods
userSchema.methods.matchPasssword = async  function(pass){
    var user = this;
    return await bcrypt.compare(pass,user.password);
}

userSchema.methods.generateAuthToken = function(){
  var user = this;
  return jwt.sign({_id:user._id},process.env.JWT_SECRET,{
      expiresIn: '30d'
  });
}


// Model Mehtods
userSchema.statics.findByEmail = async function(email){
    var user = this;
     return await user.findOne({email});
}



userSchema.pre("save", async function(next){
    var user = this;
    if(user.isModified('password')){
        var salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);
        next()
    }else{
        next();
    }
})

const User = mongoose.model('users',userSchema);
module.exports = {User};