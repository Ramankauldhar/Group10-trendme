//File name: contact.js , Student’s Name: Ramandeep, StudentID: 301095150, and Date: 10-19-2020
let mongoose = require('mongoose');

let B_contactModel = mongoose.Schema(
    {
       Contact_Name: String,
       Contact_Number: String,
       Email_Address: String
    },
    {
        collection: "b_contacts"
    }
  
);

module.exports = mongoose.model('Contact', B_contactModel);
