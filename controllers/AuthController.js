const mongoose = require("mongoose");
var auth=require('../models/Auth.model.js');
var contactdetail=require('../models/Contact_detail.model.js');
var socialmedialinkmodel=require('../models/Socialmedialinks.model.js');
var aboutmemodel=require('../models/About_me.model.js');
var bankmodel=require('../models/Userbankdetail.model.js');
var upimodel=require('../models/UPI.model.js');

const AuthController = {};


/*---------------------------Register Controller-----------------------------*/
AuthController.create = async(req, res)=> {
    var userId=req.session.userId; 
         var save_data =new auth({
            "first_name": req.body.first_name,
            "last_name": req.body.last_name,
            "user_email": req.body.user_email,
            "gender":req.body.gender,
            "country_code": req.body.countryCode,
            "contact_no": req.body.contact_no,
            "industry_name": req.body.industry_name,
            "user_image": req.body.user_image
                 
        })
        save_data.save().then(()=>{
           
            // res.status(201).send(save_data);
            req.session.userId=save_data.id;
            var save_data1 =new contactdetail({
                "user_id": req.session.userId
                     
            })
            var save_data2 =new socialmedialinkmodel({
                "user_id": req.session.userId
                     
            })
            var save_data3 =new aboutmemodel({
                "user_id": req.session.userId
                     
            })
            var save_data4 =new bankmodel({
                "user_id": req.session.userId
                     
            })
            var save_data5 =new upimodel({
                "user_id": req.session.userId
                     
            })
            save_data1.save().then(()=>{
                res.status(201);
                save_data2.save().then(()=>{
                    res.status(201);
                })
                save_data3.save().then(()=>{
                    res.status(201);
                })
                save_data4.save().then(()=>{
                    res.status(201);
                })
                save_data5.save().then(()=>{
                    res.status(201);
                })
            })
            res.status(201).send(save_data);
          }).catch((e)=>{
            res.status(400).send(e)
          })
   
    }
   

/*------end level----------*/

/*--------------------------End Level------------------------------------*/

module.exports = AuthController;