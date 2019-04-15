var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Erni Sri Wahyuni'})
})

router.get('/registrasi/', function(req, res, next) {
    res.render('registrasi', {nama: 'Erni Sri Wahyuni'})
})

module.exports = router;


