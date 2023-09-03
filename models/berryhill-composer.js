/**
====================================================
; Title:  berryhill-composer.js
; Author: Nolan Berryhill
; Date:   09/03/23
; Description: Routing for composer API operations
;===================================================
*/

// Declare variables 
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Declare a new composer schema
const composerSchema = new schema({
    firstName: String,
    lastName: String
});

// Export the composer model
module.exports = mongoose.model('Composer', composerSchema);