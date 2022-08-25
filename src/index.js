const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const middleware = require("./middlewares/commonMiddlewares")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Anandpal4321:YPoVr4QVMeU1bnjq@cluster0.oa5gl4u.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
        function (req, res, next) {
        console.log("Hi I am a middleware named Mid1")
        let timestamp = new Date()
        console.log(timestamp)
        console.log(req.socket.localAddress)
        console.log(req.path)
        next()
    }
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});