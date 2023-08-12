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
    address:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    seat:{
        type:Array,
        require:true,
        default:[]
    }
  });

const Ticket=mongoose.model('Ticket',TicketSchema)
module.exports=Ticket