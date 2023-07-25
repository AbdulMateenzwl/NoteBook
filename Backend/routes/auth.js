const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post(
    '/',
    [
        body('name', 'Enter a valid Name').isLength({ min: 3 }),
        body('email', 'Email not Valid').isEmail(),
        body('password', 'Password must be atleast 5 characters').isLength({
            min: 5,
        }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then((user) => res.json(user))
        .catch((err) => {
            console.log(err)
            res.json({error: 'Email is already taken. Sign in instead.',message: err.message})
        })
    }
);

module.exports = router;
