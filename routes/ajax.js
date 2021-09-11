var express = require('express');
var router = express.Router();
var ajax = require("../controllers/AjaxController");


router.post('/ifsc_detail', function (req , res) {
   
    ajax.ifsc_detail(req , res);
});





module.exports = router;
