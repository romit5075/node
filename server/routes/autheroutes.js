import express from "express";
import User from "../middlewares/autheMiddel.js";
import bcryptjs from "bcryptjs";

const router = express.Router();

router.post("/api/signup", async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ msg: "User with same email already exist!" });
        }

        const hashedPassword = await bcryptjs.hash(password, 8);

        let user = new User({
            email,
            name,
            phone,
            password: hashedPassword,
        })
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }

});

export default router;


