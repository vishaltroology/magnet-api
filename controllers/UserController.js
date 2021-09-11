const mongoose = require("mongoose");
var authmodel=require('../models/Auth.model.js');
var contactdetail=require('../models/Contact_detail.model.js');
var socialmedialinkmodel=require('../models/Socialmedialinks.model.js');
var aboutmemodel=require('../models/About_me.model.js');
const fs=require('fs');
var path = require('path');
const UserController = {};



/*---------------------------Save Personal detail Controller-----------------------------*/
UserController.save_personal_detail= async(req,res)=>
{

    try{
        const _id=req.params.id;
        var coverimage= req.files.cover_photo;
        var profileimage=req.files.profile_pic;
        var companylogo=req.files.company_logo;
        if(coverimage.mimetype == "image/png" || coverimage.mimetype == "image/jpg" || coverimage.mimetype == "image/jpeg" )
        {
            folder_path='public/images/usercoverimage/'+coverimage.name;        
            coverimage.mv(folder_path , function(err){
                coverphotopath='images/usercoverimage/'+coverimage.name;
                if(profileimage.mimetype == "image/png" || profileimage.mimetype == "image/jpg" || profileimage.mimetype == "image/jpeg" )
                {
                    folder_path='public/images/userprofileimage/'+profileimage.name;
                   
                    profileimage.mv(folder_path , function(err){
                        profilephotopath='images/userprofileimage/'+profileimage.name;

                        if(companylogo.mimetype == "image/png" || companylogo.mimetype == "image/jpg" || companylogo.mimetype == "image/jpeg" )
                        {
                            folder_path='public/images/usercompanylogo/'+companylogo.name;
                            companylogo.mv(folder_path , function(err){
                                companylogopath='images/usercompanylogo/'+companylogo.name;
                                const updateservice=  authmodel.findByIdAndUpdate(_id,{first_name:req.body.first_name,
                                    last_name:req.body.last_name,
                                    designation:req.body.designation,
                                    company_name:req.body.company_name,
                                    cover_photo:coverphotopath,
                                   user_image:profilephotopath,
                                  company_logo:companylogopath
                                        });
                                        res.status(201).send(updateservice);  
                               
                              
                            })
                        } 
                    })
                }
            })
        }
      }
      catch(e){
      res.status(404).send(e);
      }


}

/*--------------------------- End Personal detail Controller-----------------------------*/
/*---------------------------Contact Detail Controller-----------------------------*/
UserController.contact_details = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/contact_detail',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*---------------------------Save Contact Detail Controller-----------------------------*/
UserController.save_contact_details=async(req,res)=>{

    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                var save_data =new contactdetail({
            "mobile_number": req.body.mobile_number,
            "whatsapp_number": req.body.whatsapp_number,
            "email": req.body.email,
            "website": req.body.website,
            "telegram": req.body.telegram,
            "address1": req.body.address1,
            "address2": req.body.address2,
            "pincode": req.body.pincode,
            "city": req.body.city,
            "state": req.body.state,
            "country": req.body.country,
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
/*--------------------------- End Contact detail Controller-----------------------------*/

/*---------------------------Social Media Links Controller-----------------------------*/
UserController.social_media_links = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/social_media_links',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}


/*---------------------------Save Social Media LinkController-----------------------------*/
UserController.save_social_media_links=async(req,res)=>{

    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                var save_data =new socialmedialinkmodel({
            "facebook": req.body.facebook,
            "instagram": req.body.instagarm,
            "twitter": req.body.twitter,
            "youtube": req.body.youtube,
            "linkedin": req.body.linkedln,
            "pintrest": req.body.pintrest,
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
/*---------------------------End Social Media Links Controller-----------------------------*/

/*---------------------------About me Controller-----------------------------*/
UserController.about_me = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/about_me',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Save About me Controller-----------------------------*/
UserController.save_about_me=async(req,res)=>{

    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                var save_data =new aboutmemodel({
            "template": req.body.template,
            "industry": req.body.industry,
            "description": req.body.editor1,
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

/*---------------------------End About me Controller-----------------------------*/






/*------end level----------*/

/*------------------------Login Controller-----------------------------*/

/*--------------------------End Level------------------------------------*/

module.exports = UserController;