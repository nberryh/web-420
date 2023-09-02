/*
===========================================
; Title:  berryhill-composer-routes.js
; Author: Nolan Berryhill
; Date:   09/02/23
; Description: Routing for composer API operations
;==========================================
*/

// Declare Variables
const express = require('express');
const router = express.Router();
const Composer = require('../models/berryhill-composer');

// Route to find all composers
router.get('api/composers', async (req, res) => {
    try {
        const composers = await Composer.find();
        res.json(composers);
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to find a composer by ID
router.get('/api/composers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const composer = await Composer.findOne({ _id: id});
        if (!composer) {
            return res.status(404).json({ message: 'Composer not found'});
        }
        res.json(composer);
    }   catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to create a new composer
router.post('/api/composers', async (req, res) => {
    const { firstName, lastName } = req.body;
    try {
        const composer = new Composer({ firstName, lastName });
        await composer.save();
        res.status(201).json(composer);
    }   catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Export the module
module.exports = router;