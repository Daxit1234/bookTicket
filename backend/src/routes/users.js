const  exprees=require('express')
const router=exprees.Router();
const User = require('../models/user');

//ROUTE:1 create a user using post:http://localhost:3000/createuser
router.post('/createuser',(req,res)=>{
    const user=User(req.body);
    user.save().then(()=>{
        res.send(req.body)
    }).catch((e)=>{
        res.send(e)
    })
})

//ROUTE:2 login user using get:http://localhost:3000/login
router.get('/login',async(req,res)=>{
    const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correct email" });
      }
      if(password!=user.password){
        return res.status(400).json({ error: "Please enter valid password" });
      }
      res.send(user)
})

module.exports=router