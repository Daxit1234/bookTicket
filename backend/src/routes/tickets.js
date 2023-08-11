const Ticket = require('../models/tickets');
// const User = require('../models/user');
const  exprees=require('express')
const router=exprees.Router();

//ROUTE:1 add tickets using post:http://localhost:3000/ticket/addticket
router.post('/addticket',(req,res)=>{
    // res.send(req.body)
     console.log(req.body)
    const ticket=Ticket(req.body);
    ticket.save().then(()=>{
        res.send(req.body)
    }).catch((e)=>{
        res.send(e)
    })
})

//ROUTE:2 get user all tickets using get:http://localhost:3000/ticket/getticket
router.get('/getticket',async(req,res)=>{
    const { email } = req.body;
    let tickets=await Ticket.find({email})
    res.send(tickets)
})

//ROUTE:2 delete tickets using get:http://localhost:3000/ticket/delete
router.delete('/delete/:id',async(req,res)=>{
    // const { _id } = req.body;
   await Ticket.findByIdAndDelete(req.params.id)
    let tickets=await Ticket.find()
    res.send(tickets)
})
module.exports=router