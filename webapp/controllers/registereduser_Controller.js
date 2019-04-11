const registeredUser = require('../models/registereduser');
module.exports={
    create(req,res){
    return registeredUser
        .create({
            email: req.body.email,
        })
        .then(registeredUser => res.status(201).send(registeredUser))
        .catch(error => res.status(400).send(error));
    },
};