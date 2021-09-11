const mongoose = require("mongoose");
var authmodel=require('../models/Auth.model.js');
var contactdetail=require('../models/Contact_detail.model.js');
var socialmedialinkmodel=require('../models/Socialmedialinks.model.js');
var aboutmemodel=require('../models/About_me.model.js');
var linkmodel=require('../models/Importantlink.model.js');
var image_gallery_model=require('../models/Image_gallery.model.js');
const fs=require('fs');
var path = require('path');
const LinksController = {};
/*---------------------------Image Gallery Controller-----------------------------*/
LinksController.show_image_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                image_gallery_model.find({ user_id: req.session.userId},function(err,success){
                    res.render('../views/useradmin/image_gallery.ejs',{data:o,data1:success});
                }) 
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Add Image Gallery Controller-----------------------------*/
LinksController.add_image_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/add_image_gallery.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Save Image Gallery Controller-----------------------------*/
LinksController.save_image_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                if(req.files!=null)
                {
                    var image_gallery= req.files.image_gallery;
                    if(image_gallery.mimetype == "image/png" || image_gallery.mimetype == "image/jpg" || image_gallery.mimetype == "image/jpeg" )
                    {
                        folder_path='public/images/userimagegallery/'+image_gallery.name;        
                        image_gallery.mv(folder_path , function(err){
                            userimagepath='images/userimagegallery/'+image_gallery.name;
                            if(err)
                                            {
                                                console.log(err)
                                            }
                                            var g =new image_gallery_model({
                                                "image_title":req.body.image_title,
                                                "image_url":userimagepath,
                                                     "user_id":userId
                                            })
                                            g.save(function(err,result){
                                                if(err)
                                                console.log(err)
                                                else
                                                res.redirect('/user/image_gallery');
                                                    
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
/*---------------------------Edit Image Gallery Controller-----------------------------*/
LinksController.edit_image_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                image_gallery_model.findById(req.params.id,(err,data)=>
                {  
                    if(!err){ 
                        res.render('../views/useradmin/edit_image_gallery.ejs',{data:o,data1:data});
                    }   
                }) 
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Update Image Gallery Controller-----------------------------*/
LinksController.update_image_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                if(req.files!=null)
                {
                    var user_image=req.files.image_gallery;
                    if(user_image.mimetype == "image/png" || user_image.mimetype == "image/jpg" || user_image.mimetype == "image/jpeg" )
                    {
                        folder_path='public/images/userimagegallery/'+user_image.name;
                        user_image.mv(folder_path , function(err){
                            image_gallerypath='images/userimagegallery/'+user_image.name;
                            if(err)
                            {
                                console.log(err)
                            }
                            image_gallery_model.findByIdAndUpdate({ _id: req.body._id },{image_title:req.body.image_title,
                                image_url:image_gallerypath}, { new: true }, (err,docs)=>
                                {
                                        if(err)
                                        {
                                            console.log(err);
                                        }
                                        else
                                        {
                                            res.redirect('/user/image_gallery');     
                                        }
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
/*---------------------------Delete Image Gallery Controller-----------------------------*/
LinksController.delete_image_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                image_gallery_model.findById(req.params.id).remove().exec(function(err){
                    if (!err) {
                        res.redirect('/user/image_gallery');       
                   }
                });
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*---------------------------End Image Gallery Controller-----------------------------*/

/*---------------------------Video Gallery Controller-----------------------------*/
LinksController.show_video_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/video_gallery.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Add Video Gallery Controller-----------------------------*/
LinksController.add_video_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/add_video_gallery.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Edit Video Gallery Controller-----------------------------*/
LinksController.edit_video_gallery = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/edit_video_gallery.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*---------------------------End Video Gallery Controller-----------------------------*/

/*---------------------------Important Link Controller-----------------------------*/
LinksController.show_important_links = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                linkmodel.find({ user_id: req.session.userId},function(err,success){
                    res.render('../views/useradmin/important_links.ejs',{data:o , data1:success});
                })
                
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Save Important Link Controller-----------------------------*/
LinksController.save_important_links = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                var save_data =new linkmodel({
                    "link_title": req.body.link_title,
                    "link_url": req.body.link_url,
                    "user_id":req.session.userId
                         
                })
             save_data.save(function(err,data){
                        if(err)
                            console.log(err)
                        else
                        res.redirect('/user/important_links');
                            
                    })

              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Add Important Link Controller-----------------------------*/
LinksController.add_important_links = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/add_important_links.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*---------------------------Edit Important Link Controller-----------------------------*/
LinksController.edit_important_links = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                linkmodel.findById(req.params.id,(err,data)=>
                {
                    
                    if(!err){ 
                        res.render('../views/useradmin/edit_important_links.ejs',{data:o,data1:data});
                    }
                    
                })

                
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Delete Important Link Controller-----------------------------*/
LinksController.delete_important_links = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                linkmodel.findById(req.params.id).remove().exec(function(err){
                    if (!err) {
                        res.redirect('/user/important_links');       
                   }
                });
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Update Important Link Controller-----------------------------*/
LinksController.update_important_links = async(req, res)=> {
    
    var userId =  req.session.userId; 
    var abc=req.params.id;
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                linkmodel.findByIdAndUpdate({ _id: req.body._id },{link_title:req.body.link_title,
                    link_url:req.body.link_url}, { new: true }, (err,docs)=>
                    {
                        
                            if(err)
                            {
                                console.log(err);
                            }
                            else
                            {
                                res.redirect('/user/important_links');     
                            }
                        })
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}


/*---------------------------End Video Gallery Controller-----------------------------*/
module.exports = LinksController;