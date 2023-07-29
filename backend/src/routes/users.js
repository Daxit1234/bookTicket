const  exprees=require('express')
const router=exprees.Router();
const User = require('../models/user');

//ROUTE:1 create a user using post:http://localhost:3000/createuser
router.post('/createuser',(req,res)=>{
    // res.send(req.body)
    // console.log(req.body)
    const user=User(req.body);
    user.save().then(()=>{
        res.send(req.body)
    }).catch((e)=>{
        res.send(e)
    })
})

module.exports=router