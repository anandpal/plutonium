const express = require('express');
const router = express.Router()

const {getStates,getDistricts,getByDistricts} = require('../controllers/cowinController')
const {getMemes,createMemes} = require('../controllers/memeController')
const getSortedCities = require('../controllers/tempController')

router.get("/getStates", getStates)
router.get("/getDistricts/:stateId", getDistricts)
router.get("/getAvailibilty", getByDistricts)

router.get("/getMeme", getMemes)
router.post("/createMemes", createMemes)

router.get("/getcitiesTemp", getSortedCities)

module.exports = router
