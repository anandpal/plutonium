const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});
router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    let n = arr.pop()
    let missingNumber = ((n*(n+1))/2)-sum

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
})

router.get("/sol2",function(req,res){
    let arr = [33,34,35,37,38]
    let missingNumber= []

    let n = arr.length+1
    let sum = n*(arr[0]+arr[4])/2
    let total = arr.reduce((a,b)=>a+b)
    missingNumber = sum - total

    res.send( { data:missingNumber });
})

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason




let players = []

router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});
