const jwt = require("jsonwebtoken");
const { create } = require("../models/userModel");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
try {
  let data = req.body;
  console.log(data)
  let savedData = await userModel.create(data);
  
  res.status(201).send({ msg: savedData });
}
  
 catch (error) {
  res.status(500).send({msg:error.message})
 } 
}
 

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FUnctionUp",
      },
      "functionup-plutonium"
    );
    res.setHeader("x-auth-token", token);
    res.status(404).send({ status: true, data: token });
  }
    
   catch (error) {
    res.status(500).send({msg:error.message})
   }
  }
  

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
 



const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
}
    
  catch (error) {
    res.status(500).send({msg:error.message})
  }  
  }

const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases
try {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(200).send({ status: updatedUser, data: updatedUser });
}
  
 catch (error) {
  res.status(500).send({msg:error.message})
 } 
}
  




const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
  let user = await userModel.findById(userId);
  console.log(user)
  
  if (!user) {
    return res.status(404).send("No such user exists");
  }
 
 
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{isDeleted:true},{new : true});
  
  res.status(200).send({ status: true, data: updatedUser });
}
    
   catch (error) {
    res.status(500).send({msg:error.message})
   } 
  }
 
  

module.exports = {createUser,loginUser,getUserData,updateUser,deleteUser}