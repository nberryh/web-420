/**
====================================================
; Title:  berryhill-composer-routes.js
; Author: Nolan Berryhill
; Date:   10/01/23
; Description: Routing for composer API operations
;===================================================
*/

// Declare Variables
const express = require('express');
const router = express.Router();
const Composer = require('../models/berryhill-composer');

// Route to find all composers
router.get('/composers', async (req, res) => {
    try {
        const composers = await Composer.find();
        res.status(200).json(composers);
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to find a composer by ID
router.get('/composers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const composer = await Composer.findOne({ _id: id});
        if (!composer) {
            return res.status(404).json({ message: 'Composer not found'});
        }
        res.status(200).json(composer);
    }   catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to create a new composer
router.post('/composers', async (req, res) => {
    const composer = new Composer ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });
    try {
        await composer.save();
        res.status(201).json(composer);
    }   catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to update a composer by ID
router.put('/composers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName } = req.body;

        const composer = await Composer.findOne({ _id: id });

        if (!composer) {
            return res.status(401).json({ message: 'Invalid composerId' });
        }

        composer.set({ firstName, lastname });
        const savedComposer = await composer.save();

        res.status(200).json(savedComposer);
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to delete a composer by ID
router.delete('/composers/:id', async (req, res) => {
    try{
        const { id } = req.params;

        const deletedComposer = await Composer.findByIdAndDelete(id);

        if (!deletedComposer) {
            return res.status(404).json({ message: 'Composer not found' });
        }

        res.statusCode(200).json(deletedComposer);
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Export the module
module.exports = router;