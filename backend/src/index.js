const express=require("express")
const app=express();
const port=3000;
const userRouter=require('./routes/users')

//import mongodb connection
require('./conn');

// app.get("/",(req,res)=>{
//     res.send("daxit godhani")
// })
app.use(express.json());
app.use('/users',userRouter);
app.listen(port,()=>{
    console.log(`server runnint at port ${port}`)
})