const mongoose = require("mongoose");
var auth=require('../models/Auth.model.js');
var ifsc = require('ifsc');

const AjaxController = {};

/*---------------------------IFSC_details Controller-----------------------------*/
AjaxController.ifsc_detail = function (req, res) {
    var url="https://ifsc.razorpay.com/UBIN0540803";
    var ifsc_detail=req.body.ifsc;
    console.log(ifsc);
    ifsc.validate('KKBK0000261'); // returns true
ifsc.validate('BOTM0XEEMRA'); // returns false

ifsc.fetchDetails(ifsc_detail).then(function(data) {
    console.log(data)
   if(data)
   {
   res.json({status_code:200,message:"success",bank_detail:data});
    console.log(data)
   }
});

 // prints PUNB
// Prints the entire JSON from https://ifsc.razorpay.com/KKBK0000261
// res is an object, not string

}





module.exports = AjaxController;