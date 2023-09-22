/**
====================================================
; Title:  berryhill-node-shopper-routes.js
; Author: Nolan Berryhill
; Date:   09/24/23
; Description: Routing for customer API operations
;===================================================
*/

// Declare Variables
const express = require('express');
const router = express.Router();
const Customer = require('../models/berryhill-customer');

// Route to create a new customer
router.post('/customers', async (req, res) => {
    try {
        const { firstName, lastName, userName } = req.body;

        const newCustomer = new Customer({
            firstName,
            lastName,
            userName,
            invoices: [],
        });

        await newCustomer.save();

        res.status(201).json({ message: 'Customer added to MongoDB' });
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to create an invoice for a customer by username
router.post('/customers/:username/invoices', async (req, res) => {
    try {
        const { username } = req.params;
        const { subtotal, tax, dateCreated, dateShipped, lineItems } = req.body;

        const customer = await Customer.findOne({ userName: username });

        if (!customer) {
            return res.status(500).json({ message: 'Customer not found' });
        }

        const newInvoice = {
            subtotal,
            tax,
            dateCreated,
            dateShipped,
            lineItems,
        };

        customer.invoices.push(newInvoice);

        await customer.save();

        res.status(201).json({ message: 'Invoice added to MongoDB' });
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

// Route to find all invoices for a customer by username
router.get('/customers/:username/invoices', async (req, res) => {
    try {
        const { username } = req.params;

        const customer = await Customer.findOne({ userName: username });

        if (!customer) {
            return res.status(500).json({ message: 'Customer not found' });
        }

        res.status(201).json(customer.invoices);
    } catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

module.exports = router;