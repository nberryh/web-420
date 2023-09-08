/**
====================================================
; Title:  berryhill-person-routes.js
; Author: Nolan Berryhill
; Date:   09/10/23
; Description: Routing for composer API operations
;===================================================
*/

// Declare Variables
const express = require('express');
const router = express.Router();
const Person = require('../models/berryhill-person');

// Route to retrieve all persons
router.get('/api/persons', async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to create a new person
router.post('/api/persons', async (req, res) => {
    try {
        const { firstName, lastName, roles, dependents, birthDate } = req.body;
        const newPerson = new Person({
            firstName,
            lastName,
            roles,
            dependents,
            birthDate,
        });
        const createdPerson = await newPerson.save();
        res.status(201).json(createdPerson);
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

module.exports = router;