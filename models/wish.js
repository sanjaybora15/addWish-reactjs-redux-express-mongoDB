const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WishSchema = Schema({
    wish:String,
    access:Boolean
});

mongoose.model("wishes",WishSchema)