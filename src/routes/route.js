const express = require('express');
const router = express.Router();
const randomApi1=require('../controller/bookController.js')




router.get('/randomApi',randomApi1.randomApi)
router.get('/randomApi2',randomApi1.randomApi2)




module.exports = router;