/*
===========================================
; Title:  berryhill-composer.js
; Author: Nolan Berryhill
; Date:   09/02/23
; Description: Routing for composer API operations
;==========================================
*/

// Declare variables 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Declare a new composer schema
const composerSchema = new Schema({
    firstName: String,
    lastName: String
});

// Declare variables
const Composer = mongoose.model('Composer', composerSchema);

// Export the composer model
module.exports = Composer;