/**
====================================================
; Title:  berryhill-session-routes.js
; Author: Nolan Berryhill
; Date:   09/17/23
; Description: Routing for session API operations
;===================================================
*/

const express = require('express');
const router = express.Router();
const User = require('../models/berryhill-user');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

router.post('/signup', async (req, res) => {
    try {
        const { userName, password, emailAddress } = req.body;

        const user = await User.findOne({ userName });
        if (user) {
            return res.status(401).json({ message: 'Username is already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            userName,
            password: hashedPassword,
            emailAddress,
        });

        await newUser.save();

        res.status(200).json({ message: 'Registered user' });
    }   catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body;

        const user = await User.findOne({ userName });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username and/or password' });
        }

        const passwordIsValid = bcrypt.hash(password, user.password);

        if (passwordIsValid) {
            res.status(200).json({ message: 'User logged in' });
        } else {
            res.status(401).json({ message: 'Invalid username and/or password' });
        }
    }   catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Exception' });
    }
});

module.exports = router;