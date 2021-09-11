var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController");
var blog = require("../controllers/PdfController");

router.post('/makepdf', function (req , res,next) {
    blog.makepdf(req , res);
});

router.get('/', function (req , res,next) {
   res.render('../views/testingpdf.ejs')
});


router.get('/create', function (req , res,next) {
    res.render('../views/blog.ejs')

});

router.get('/show', function (req , res,next) {
    blog.show(req,res);
});

router.get('/mergerpdf', function (req , res,next) {
    blog.mergerpdf(req , res);
});

router.get('/merger',function(req,res,next)
{
    blog.pdf_merge(req,res);
});

router.post('/save',function(req,res,next)
{
    blog.save(req,res);
    
});


module.exports = router;
