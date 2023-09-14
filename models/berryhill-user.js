/**
====================================================
; Title:  berryhill-user.js
; Author: Nolan Berryhill
; Date:   09/17/23
; Description: Routing for user API operations
;===================================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    userName: String,
    password: String,
    emailAddress: String,
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bycrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user,password = hash;
            next();
        });
    });
});

const User = mongoose.model('User'. userSchema);

module.exports = User;