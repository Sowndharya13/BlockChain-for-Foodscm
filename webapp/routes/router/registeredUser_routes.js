var express = require('express');

var router = express.Router();

var controller = require('../../controllers/registeredUser_Controller')

router.post('/Registered_User', controller.create_user);
//router.get('/getFundsById/:id', controller.getCampaignFundsById)

// app.post('/api/registeredUser',registeredUserController.create);

module.exports = router;

