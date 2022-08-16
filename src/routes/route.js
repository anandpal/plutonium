const { Router } = require('express');
const express = require('express');
const router = express.Router();
let person = [
    {
       name : "PK",
       age : 10,
       votingStatus : false
    },
    {
        name : "SK",
        age : 20,
        votingStatus : false
     },
     {
        name : "AA",
        age : 70,
        votingStatus : false
     },
     {
        name : "SC",
        age : 5,
        votingStatus : false
     },
     {
        name : "HO",
        age : 40,
        votingStatus : false
     }
]

router.post("/voting",function(req,res){
    let votingAge = req.query.age
    const eligible = person.filter(index => index.age > votingAge)
    eligible.forEach(index => index.votingStatus = true)
    res.send(eligible)
})


module.exports = router;
