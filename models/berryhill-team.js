/**
====================================================
; Title:  berryhill-team.js
; Author: Nolan Berryhill
; Date:   10/08/23
; Description: Routing for team API operations
;===================================================
*/

// Declare variables 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Player schema
const playerSchema = new Schema({
    firstName: String,
    lastName: String,
    salary: Number,
});

// Team schema
const teamSchema = new Schema({
    name: String,
    mascot: String,
    players: [playerSchema],
});

// Team model
const Team = mongoose.model('Team', teamSchema);

// Export
module.exports = Team;