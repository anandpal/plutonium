const express = require('express')
const route = require('../src/routes/router')
const app = express()
const mongoose = require('mongoose')
const routes = require('../src/routes/router')         
app.use(express.json())


mongoose.connect("mongodb+srv://Astick_Dutta:AavSNrGfPyPswMGg@cluster0.laksbb0.mongodb.net/internProjectG35-DB", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});