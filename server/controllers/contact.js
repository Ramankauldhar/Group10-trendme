//File name: contact.js , Student’s Name: Ramandeep, StudentID: 301095150, and Date: 10-18-2020

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Contact = require('../models/contact');

module.exports.displayContactList = (req,res,next) => {
    Contact.find((err, ContactList ) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact/list', {title: 'Contacts', ContactList: ContactList, displayName: req.user ? req.user.displayName: ''});
        }
    });
}
function sortColumn(Conatact_Name){
    const datatype = typeof ContactList[0][Conatact_Name] ;
    sortDirection = !sortDirection;
    switch(datatype){
        case 'number':
            sortNumberColumn(sortDirection, Conatact_Name);
            break; 
    }
    loadTableData(ContactList);
}

function sortNumberColumn(sort, Conatact_Name)
{
    tableData = tableData.sort((p1,p2) => {
        return sort ? p1[Conatact_Name] - p2[Conatact_Name] : p2[Conatact_Name] - p1[Conatact_Name]
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
       if(err)
       {
        console.log(err);
        res.end(err);
       }
       else
       {
        res.render('contact/edit', {title: 'Edit Contacts', contact: contactToEdit})
       }
    });
}
module.exports.processEditPage = (req,res,next) => {
    let id = req.params.id
    let updatedContact = Contact({
        "_id": id,
        "Contact_Name": req.body.Contact_Name,
       "Contact_Number": req.body.Contact_Number,
       "Email_Address": req.body.Email_Address
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
         console.log(err);
         res.end(err);
        }
        else
        {
         res.redirect('/businessContacts');
        }
    });
}

module.exports.performDelete=(req,res,next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
         console.log(err);
         res.end(err);
        }
        else
        {
         res.redirect('/businessContacts');
        }
    });
}
