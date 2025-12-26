import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existing = await User.findOne({ email: email.toLowerCase() });

        if (existing) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            username: username.toLowerCase(),
            password,
            email: email.toLowerCase()
        });

        return res.status(201).json({
            message: 'User created successfully',
            user: { userId: user._id, email: user.email, username: user.username }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({
            message: "User logged in successfully",
            userId: user._id,
            email: user.email,
            username: user.username
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const logoutUser = async (req, res) => {
    // Note: Since you're not using sessions/tokens here, logout is mostly client-side.
    // This endpoint just returns success for frontend consistency.
    return res.status(200).json({
        message: "Logout successful"
    });
};

export { registerUser, loginUser, logoutUser };