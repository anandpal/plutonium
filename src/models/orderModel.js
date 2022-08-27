const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: {
        type: objectId,
        ref: "MiddlewareUser"
    },
    productId: {
        type: objectId,
        ref: "MiddlewareProduct"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
}, { timestamps: true });


module.exports = mongoose.model('OrderMiddleware', orderSchema)