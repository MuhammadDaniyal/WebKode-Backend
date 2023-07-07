import mongoose from "mongoose";


const registerationSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, "Email already exists!"],
        required: [true, "Email is required!"]
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    image: {
        type: String,
    }
})

const Registration = mongoose.models.Registration || mongoose.model("Registration", registerationSchema)

export default Registration