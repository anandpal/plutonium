const user = require('../models/userModel')

const freeUser = function (req, res, next){
    let freeApp = req.headers.isfreeappuser
    if (!freeApp){
        return res.send("isFreeAppUser is mandatory field")        
    } else {
    next()
}
}

module.exports.freeUser = freeUser