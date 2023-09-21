/**
====================================================
; Title:  berryhill-customer.js
; Author: Nolan Berryhill
; Date:   09/24/23
; Description: Routing for customer API operations
;===================================================
*/

// Declare variables 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the lineItem schema
const lineItemSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number
});

// Define the invoice schema
const invoiceSchema = new Schema({
    subtotal: Number,
    tax: Number,
    dateCreated: String,
    dateShipped: String, 
    lineItems: [lineItemSchema]
});

// Define the customer schema
const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    userName: String, 
    invoices: [invoiceSchema]
});

// Create the "Customer" model
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;