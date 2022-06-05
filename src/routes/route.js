const express=require('express');
const router=express.Router();
const bookModel=require('../models/bookmodel.js')
const bookController=require('../controllers/bookController')


router.post('/createNewBook', bookController.createBook);

router.get('/listOfBooks', bookController.getBookDetails);

module.exports=router;