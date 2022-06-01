const express = require('express');
const externalModule = require('../logger/logger.js')
const externalModule2 = require('../util/helper.js')
const  externalModule3=require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome();
    externalModule2.printDate();
    externalModule2.printMonth();
    externalModule2.getBatchInfo();
    externalModule3.trim();
    externalModule3.changeToLowerCase();
    externalModule3.changeToUpperCase();
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason