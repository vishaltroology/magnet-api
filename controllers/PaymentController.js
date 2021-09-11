const mongoose = require("mongoose");
var authmodel=require('../models/Auth.model.js');
var contactdetail=require('../models/Contact_detail.model.js');
var socialmedialinkmodel=require('../models/Socialmedialinks.model.js');
var aboutmemodel=require('../models/About_me.model.js');
var bankmodel=require('../models/Userbankdetail.model.js');
var upimodel=require('../models/UPI.model.js');
const fs=require('fs');
var path = require('path');
const PaymentController = {};
/*---------------------------Bank Account Detail Controller-----------------------------*/
PaymentController.show_bank_account_details = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/bank_account_detail.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Save Bank Account Detail Controller-----------------------------*/
PaymentController.save_bank_account_details = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                var save_data =new bankmodel({
            "bank_name": req.body.bank_name,
            "account_type": req.body.account_type,
            "account_name": req.body.account_name,
            "account_number": req.body.account_number,
            "IFSC_code": req.body.ifsc_code,
            "GST_no": req.body.gst_number,
            "pancard_no": req.body.pan_card_number,
            "remark": req.body.remark,
            "user_id":req.session.userId
                 
        })
     save_data.save(function(err,data){
                if(err)
                    console.log(err)
                else
                 res.redirect('/login');
                    
            })
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*---------------------------End Save Bank Account Detail Controller-----------------------------*/


/*---------------------------End Bank Account Detail Controller-----------------------------*/

/*---------------------------UPI Image Controller-----------------------------*/
PaymentController.show_upi_image = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/user_upi.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Save UPI Image Controller-----------------------------*/
PaymentController.save_upi_image = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                if(req.files!=null)
    {
        var upiimage= req.files.upi_image;
        if(upiimage.mimetype == "image/png" || upiimage.mimetype == "image/jpg" || upiimage.mimetype == "image/jpeg" )
        {
            folder_path='public/images/UPIimages/'+upiimage.name;        
            upiimage.mv(folder_path , function(err){
                upiimagepath='images/UPIimages/'+upiimage.name;
                if(err)
                                {
                                    console.log(err)
                                }
                                var g =new upimodel({
                                    "upi_id":req.body.upi_id,
                                    "upi_image":upiimagepath,
                                         "user_id":userId
                                })
                                g.save(function(err,result){
                                    if(err)
                                    console.log(err)
                                    else
                                    res.redirect('/login');
                                        
                                })
               
            })
        }
    }
    
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*--------------------------- Save End UPI Image Controller-----------------------------*/


/*---------------------------End UPI Image Controller-----------------------------*/
module.exports = PaymentController;