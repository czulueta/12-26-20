const express = require("express")
const shoeRouter = express.Router()
const { v4:uuidv4 } = require("uuid")

const shoes = [
    {make:"nike", model: "jordan 1", _id:uuidv4()},
    {make:"nike", model: "lebron 1", _id:uuidv4()},
    {make:"nike", model: "kobe 1", _id:uuidv4()},
    {make:"nike", model: "jordan 20", _id:uuidv4()}
]

shoeRouter.route("/")
    .get((req, res) => {
        res.send(shoes)
    })
    .post((req, res) => {
        const newShoe = req.body
        newShoe._id = uuidv4()
        shoes.push(newShoe)
        res.send(newShoe)
    })
module.exports = shoeRouter