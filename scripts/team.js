/**
====================================================
; Title:  berryhill-team.js
; Author: Nolan Berryhill
; Date:   10/08/23
; Description: Script for team API operations
;===================================================
*/

// Drop any existing collection of teams
db.teams.drop();

// Initialize teams with players information
const team1 = {
    name: 'Las Vegas Raiders',
    mascot: 'Raider',
    players: [
        {
            firstName: 'Josh',
            lastName: 'Jacobs',
            salary: 10000000
        },
        {
            firstName: 'Max',
            lastName: 'Crosby',
            salary: 32000000
        },
        {
            firstName: 'Derrick',
            lastName: 'Carr',
            salary: 48000000
        }
    ]
};

const team2 = {
    name: 'New York Jets',
    mascot: 'Plane',
    players: [
        {
            firstName: 'Charlie',
            lastName: 'Mosley',
            salary: 17000000
        },
        {
            firstName: 'Corey',
            lastName: 'Davis',
            salary: 13000000
        },
        {
            firstName: 'Carl',
            lastName: 'Lawson',
            salary: 45000000
        }
    ]
};

const team3 = {
    name: 'Detroit Loin',
    mascot: 'Loin',
    players: [
        {
            firstName: 'Jared',
            lastName: 'Goff',
            salary: 10065000
        },
        {
            firstName: 'Romeo',
            lastName: 'Okwara',
            salary: 11000000
        },
        {
            firstName: 'Micheal',
            lastName: 'Brockers',
            salary: 3000000
        }
    ]
};

// Insert teams to the collection
db.teams.insertOne(team1);
db.teams.insertOne(team2);
db.teams.insertOne(team3);

// Message of success
print('Database has been successfully uploaded')