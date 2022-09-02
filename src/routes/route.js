const express = require('express');
const router = express.Router();
const {createUser,loginUser,getUserData,updateUser,deleteUser} = require("../controllers/userController")
const {authenticate,authorise}=require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUserData", createUser)

router.post("/login", loginUser)

//The userId is sent by front end
router.get("/users/:userId", authenticate, authorise, getUserData)


router.put("/users/:userId",authenticate, authorise, updateUser)
router.delete('/users/:userId',authenticate, authorise, deleteUser)

module.exports = router;