let mongoose = require("mongoose");

let userInfoSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String,
    gender:String,
    dateOfBirth:Date,
    notificationTypes: [String]
});

module.exports = userInfoSchema;