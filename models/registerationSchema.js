const mongoose = require("mongoose")


const registerationSchema = new mongoose.Schema({
    teamname: {
        type: String,
        unique: [true, "Team already exists!"],
        required: [true, "Team Name is required!"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        required: [true, "Email is required!"]
    },
    phone: {
        type: Number,
        required: [true, "Number is required!"]
    },
    couponcode: {
        type: String,
    },
    memberonename: {
        type: String,
        required: [true, "Name is required!"]
    },
    memberoneuni: {
        type: String,
        required: [true, "Decipline & University is required!"]
    },
    membertwoname: {
        type: String,
    },
    membertwouni: {
        type: String,
    },
    memberthreename: {
        type: String,
    },
    memberthreeuni: {
        type: String,
    },
    regtype: {
        type: String,
        required: [true, "Registration type is required!"]
    }
})

const Registration = mongoose.models.Registration || mongoose.model("Registration", registerationSchema)

module.exports = Registration