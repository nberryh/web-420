/**
====================================================
; Title:  berryhill-person.js
; Author: Nolan Berryhill
; Date:   09/10/23
; Description: Routing for person API operations
;===================================================
*/

// Declare variables 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the role schema
const roleSchema = new Schema({
    text: String,
});

// Define the dependent schema
const dependentSchema = new Schema({
    firstName: String,
    lastName: String,
});

// Define the person schema
const personSchema = new Schema({
    firstName: String,
    lastName: String,
    roles: [roleSchema],
    dependents: [dependentSchema],
    birthDate: String,
});

// Create the "Person" model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;