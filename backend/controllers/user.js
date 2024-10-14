const UserSchema = require("../models/UserModel");
const bcrypt = require("bcryptjs");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(salt);

        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        console.log(name, email, password);
        res.status(200).json({ message: "User register successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error || ", error });
    }
}

async function handleUserSignin(req, res) {
    try {
    } catch (error) {
        res.status(400).json({ message: "Server Error || ", error });
    }
}

async function allUsersDetails(req, res) {
    try {
        const userDetails = await UserSchema.find().sort({ createdAt: -1 });
        res.status(200).json(userDetails);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    handleUserSignup,
    allUsersDetails,
    handleUserSignin,
};
