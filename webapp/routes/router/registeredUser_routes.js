var express = require('express');

var router = express.Router();

var controller = require('../../controllers/registeredUser_Controller')

router.post('/Registered_User', controller.create_user);
//router.get('/getFundsById/:id', controller.getCampaignFundsById)

router.post('/Login',controller.validate_login);
module.exports = router;

