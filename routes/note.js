// routes/notes.js

const express = require('express');
const router = express.Router();
const Note = require('../database/models/note');

// GET all notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new note
router.post('/notes', async (req, res) => {
    
    if (!req.body.title || !req.body.content) {
        return res.status(400).json({ message: "Title and content are required" });
    }

    const note = new Note({
        title: req.body.title,
        content: req.body.content
    });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET a specific note by ID
router.get('/notes/:id', getNote, (req, res) => {
    res.json(res.note);
});

// UPDATE a specific note by ID
router.put('/notes/:id', getNote, async (req, res) => {
    if (req.body.title != null) {
        res.note.title = req.body.title;
    }
    if (req.body.content != null) {
        res.note.content = req.body.content;
    }
    try {
        const updatedNote = await res.note.save();
        res.status(206).json(updatedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a specific note by ID
router.delete('/notes/:id', getNote, async (req, res) => {
    try {
        await res.note.remove();
        res.json({ message: 'Note deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




// Middleware to retrieve a specific note by ID
async function getNote(req, res, next) {
    try {
        const note = await Note.findById(req.params.id);
        if (note == null) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.note = note;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;
