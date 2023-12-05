const contacts = require('../model/contacts');

function addContact(req, res, next){
    const { name, email, message} = req.body;
    contacts.create({
        name: name,
        email: email,
        message: message
    })
    .then(()=>{
        res.status(201).json({
            message: "contact berhasil ditambahkan"
        })
    })
}

module.exports = {addContact};