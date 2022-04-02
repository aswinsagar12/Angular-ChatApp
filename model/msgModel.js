const mongoose=require('mongoose');
const msgSchema=new mongoose.Schema({
  msg:{
    type:String,
    required:true
  }
})

const Msg=mongoose.model('chat',msgSchema);
module.exports=Msg;

console.log('Connected 2.0');