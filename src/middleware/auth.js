const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel")
const authenticate = function(req, res, next){
  try {
    let token = req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    let decodedToken = jwt.verify(token, "functionup-plutonium");
    if (!decodedToken){
      return res.status(401).send({ status: false, msg: "token is invalid" });
    }
      req.loggedInUser=decodedToken.userId
    next()
}
    
   
  catch (error) {
    res.status(500).send({msg: error.message})
    
  }
}
   


const authorise = function(req, res, next) {
  try {
      // comapre the logged in user's id and the id in request
      let reqUserId= req.params.userId
      if(req.loggedInUser!= reqUserId){
        return  res.status(403).send({status:false,msg:"this is not correct"})
      }
      next()
  } catch (error) {
    res.status(500).send({msg: error.message})
    
    
  }
  
}
module.exports = {authenticate,authorise};