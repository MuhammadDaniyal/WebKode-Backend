const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "FirstName is required!"]
    },
    lastname: {
        type: String,
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
    university: {
        type: String,
        required: [true, "University is required!"]
    },
    discipline: {
        type: String,
        required: [true, "Decipline is required!"]
    },
    shortbio: {
        type: String,
    },
    profileImage: {
        type: Buffer
    },
})

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema)

module.exports = Team