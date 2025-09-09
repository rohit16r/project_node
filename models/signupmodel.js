
import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    password: String,
    cpassword: String
});

const SignupUser = mongoose.model("SignupUser", signupSchema);

export default SignupUser;