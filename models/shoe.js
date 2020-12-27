const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shoeSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Shoe", shoeSchema)