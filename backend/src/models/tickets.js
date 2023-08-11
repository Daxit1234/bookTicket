const mongoose = require('mongoose');
const TicketSchema = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    movieName:{
        type:String,
        require:true,
    },
    thiatorName:{
        type:String,
        require:true
    },
    thiatorAdd:{
        type:String,
        require:true
    },
    showTime:{
        type:String,
        require:true
    },
    seats:{
        type:Array,
        require:true,
        default:[]
    }
  });

const Ticket=mongoose.model('Ticket',TicketSchema)
module.exports=Ticket