var express = require('express');
var router = express.Router();
var controller = require('../../controllers')

router.post('/create', controller.registereduser_Controller)
//router.get('/getFundsById/:id', controller.getCampaignFundsById)

// app.post('/api/registereduser',registeredUserController.create);

module.exports = router;
