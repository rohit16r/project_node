

import SignupUser from '../models/signupmodel.js';

const signing = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Password match check
        if (password !== confirmPassword) {
            return res.status(400).send("Passwords do not match");
        }

        // Check if email already exists
        const existingUser = await SignupUser.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send("Email already exists");
        }

        // Create new user
        const newUser = new SignupUser({
            full_name: name,
            email:email,
            password:password,
            cpassword: confirmPassword
        });

        await newUser.save();
        res.render("success.ejs");

    } catch (error) {
        console.error("Error found:", error);
        res.status(500).send("Internal server error");
    }
};

export default signing;



