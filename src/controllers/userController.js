const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// Cadastro de usuário
exports.registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    }catch (error) {
        console.error('Error registering user:', error);
        throw new Error('User registration failed');
    }
}

// Login de usuário
exports.loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
    }catch (error) {
        console.error('Error logging in user:', error);
        throw new Error('User login failed');
    }
}