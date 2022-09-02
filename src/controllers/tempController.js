const axios = require('axios');

const getSortedCities = async function(res,res){
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let citiesTemp = [];

        for(i in cities){
            let data = {City: cities[i]}
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=1b1e283e190f27da71f91ab123ebf1f2`)
            data.Temperature = result.data.main.temp;
            citiesTemp.push(data)
        }
        citiesTemp.sort((a, b) => a.Temperature-b.Temperature);
        res.status(200).send({citiesTemp})
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
}

module.exports = getSortedCities;