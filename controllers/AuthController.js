import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const getUserWithPassword = async (email) => {
    try {
        const user = await User.findOne({ email }).select('+password');
        return user;
    } catch (error) {
        console.error('Error fetching user with password:', error);
        throw error;
    }
};

class AuthController {
    async register(req, res) {
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) return res.status(400).json({ message: 'User already exists' });
            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new User({
                name,
                email,
                password: passwordHash,
            });
            user = await newUser.save();
            user = user.toObject();
            delete user.password;
            res.status(201).json({
                success: true,
                message: "User registration successful.",
                data: user
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: 'User does not exist' });
            const userWithPassword = await getUserWithPassword(email);
            const isMatch = await bcrypt.compare(password, userWithPassword.password);
            if (!isMatch) return res.status(400).json({ message: 'Incorrect password' });
            res.status(200).json({
                success: true,
                message: "User login successful.",
                data: user
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
export default new AuthController();