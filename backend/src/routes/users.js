const exprees = require("express");
const router = exprees.Router();
const User = require("../models/user");

//ROUTE:1 create a user using post:http://localhost:3000/users/createuser
router.post("/createuser", (req, res) => {
  const user = User(req.body);
  user
    .save()
    .then(() => {
      res.send(req.body);
    })
    .catch((e) => {
      res.send(e);
    });
});

//ROUTE:2 login user using get:http://localhost:3000/users/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ error: "Please try to login with correct email" });
  }
  if (password != user.password) {
    return res.status(400).json({ error: "Please enter valid password" });
  }
  res.send(user);
});

//Rounte 3:forget password using post:http://localhost:3000/users/forgetPass/:email
router.post("/forgetPass", async (req, res) => {
  const {email,newpassword}=req.body
  let user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ error: "Email id dose not exist" });
  }
  const filter = { email: email };
  const updateData = { $set: { password: newpassword } };
  await User.updateOne(filter, updateData);
  res.json({success:"password updated"})
})

//ROuTE 4: get all user data for admin
router.get("/getUserDetails", async (req, res) => {
  let user = await User.find();
  res.send(user);
});

//ROUTE:5: delete tickets using get:http://localhost:3000/users/delete  for admin
router.delete("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("deleted");
});

module.exports = router;
