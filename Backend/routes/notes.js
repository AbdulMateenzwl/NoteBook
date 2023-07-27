const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Note');
const { body, validationResult } = require('express-validator');

//Route 1 : get all the notes of logged in user : GET "/api/notes/fetchallnotes" . Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
});

//Route 2 : Add a note : Post "/api/notes/addnote" . Login required
router.post(
    '/addnote',
    fetchuser,
    [
        body('title', 'Enter a valid title').isLength({ min: 3 }),
        body('description', 'Enter a valid description').isLength({ min: 5 })
    ],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // if there are any errors return bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }

            const note = new Notes({
                title,
                description,
                tag,
                user: req.user.id,
            });
            const savedNote = await note.save();
            res.json(savedNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Some (Server)Error Occured');
        }
    }
);

module.exports = router;
