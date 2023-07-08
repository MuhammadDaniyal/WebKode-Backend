import mongoose from "mongoose";


const registerationSchema = new mongoose.Schema({
    teamname: {
        type: String,
        required: [true, "Team Name is required!"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        required: [true, "Email is required!"]
    },
    phonenumber: {
        type: Number,
        required: [true, "Number is required!"]
    },
    couponcode: {
        type: String,
    },
    image: {
        type: String,
    }
})

const Registration = mongoose.models.Registration || mongoose.model("Registration", registerationSchema)

export default Registration