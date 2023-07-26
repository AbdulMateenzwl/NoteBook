const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
                return res
                    .status(400)
                    .json({
                        error: 'Sorry a user with this email already exists.',
                    });
            }
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Some Error Occured');
        }
    }
);

module.exports = router;
