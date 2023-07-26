const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'ThisIsMySecretKey';

// Create a User using :Post "/api/auth/". Doesn't require Auth
router.post(
    '/createuser',
    [
        body('name', 'Enter a valid Name').isLength({ min: 3 }),
        body('email', 'Email not Valid').isEmail(),
        body('password', 'Password must be atleast 5 characters').isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        // Check whether user with email User.exists
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({
                    error: 'Sorry a user with this email already exists.',
                });
            }
            const salt = await bcrypt.genSalt(10);
            securePassword = await bcrypt.hash(req.body.password, salt);

            // Create User
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
            });

            let data = {
                user: user.id,
            };

            const authToken = jwt.sign(data, JWT_SECRET);
            res.json(authToken);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Some (Server)Error Occured');
        }
    }
);

// Athenticate a User using :Post "/api/auth/login". Doesn't require Auth
router.post(
    '/login',
    [
        body('email', 'Email not Valid').isEmail(),
        body('password', 'Password cannot be blank').exists(),
    ],
    async (req, res) => {
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    error: 'Please try to login with correct credentials',
                });
            }
            const passwordCompare = await bcrypt.compare(
                password,
                user.password
            );
            if (!passwordCompare) {
                return res.status(400).json({
                    error: 'Please try to login with correct credentials',
                });
            }
            let data = {
                user: {
                    id: user.id,
                },
            };
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json(authToken);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Some (Server)Error Occured');
        }
    }
);

// Route 3 : Get loggedin User Details using :Post "/api/auth/getuser". Login required

router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some (Server)Error Occured');
    }
});

module.exports = router;
