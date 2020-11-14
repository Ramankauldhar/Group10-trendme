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
