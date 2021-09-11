const mongoose = require("mongoose");
var authmodel=require('../models/Auth.model.js');
var contactdetail=require('../models/Contact_detail.model.js');
var socialmedialinkmodel=require('../models/Socialmedialinks.model.js');
var aboutmemodel=require('../models/About_me.model.js');
var testimonialmodel=require('../models/Testimonial.model.js');
var productmodel=require('../models/Product.model.js');
var servicemodel=require('../models/Services.model.js');
const fs=require('fs');
var path = require('path');
const Service_ProductController = {};
/*---------------------------Service Controller-----------------------------*/
Service_ProductController.show_services = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                servicemodel.find({ user_id: req.session.userId},function(err,success){
                    res.render('../views/useradmin/service.ejs',{data:o, data1:success});
                })
                
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Add Service Controller-----------------------------*/
Service_ProductController.add_services = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/add_new_service.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Save Services Controller-----------------------------*/
Service_ProductController.save_service = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                if(req.files!=null)
                {
                    var serviceimage= req.files.service_photo;
                    if(serviceimage.mimetype == "image/png" || serviceimage.mimetype == "image/jpg" || serviceimage.mimetype == "image/jpeg" )
                    {
                        folder_path='public/images/service_image/'+serviceimage.name;        
                        serviceimage.mv(folder_path , function(err){
                            serviceimagepath='images/service_image/'+serviceimage.name;
                            if(err)
                                            {
                                                console.log(err)
                                            }
                                            var g =new servicemodel({
                                                "service_title":req.body.service_title,
                                                "service_description":req.body.editor1,
                                                "service_image":serviceimagepath,
                                                     "user_id":userId
                                            })
                                            g.save(function(err,result){
                                                if(err)
                                                console.log(err)
                                                else
                                                res.redirect('/user/services');
                                                    
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

/*---------------------------Edit Service Controller-----------------------------*/
Service_ProductController.edit_services = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                servicemodel.findById(req.params.id,(err,data)=>
                {
                    
                    if(!err){ 
                        res.render('../views/useradmin/edit_service.ejs',{data:o,data1:data});
                    }
                    
                })
                
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Update Service Controller-----------------------------*/
Service_ProductController.update_services = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                if(req.files!=null)
                {
                    var service_image=req.files.service_image;
                    if(service_image.mimetype == "image/png" || service_image.mimetype == "image/jpg" || service_image.mimetype == "image/jpeg" )
                    {
                        folder_path='public/images/service_image/'+service_image.name;
                        service_image.mv(folder_path , function(err){
                            service_imagepath='images/service_image/'+service_image.name;
                            if(err)
                            {
                                console.log(err)
                            }
                            servicemodel.findByIdAndUpdate({ _id: req.body._id },{service_title:req.body.service_title,service_description:req.body.editor1,
                                service_image:service_imagepath}, { new: true }, (err,docs)=>
                                {
                                        if(err)
                                        {
                                            console.log(err);
                                        }
                                        else
                                        {
                                            res.redirect('/user/services');     
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
/*---------------------------End Service Controller-----------------------------*/

/*---------------------------Product Controller-----------------------------*/
Service_ProductController.show_products = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                productmodel.find({ user_id: req.session.userId},function(err,success){
                    res.render('../views/useradmin/product.ejs',{data:o, data1:success});
                })
                
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Add Product Controller-----------------------------*/
Service_ProductController.add_products = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/add_product.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Save Product Controller-----------------------------*/
Service_ProductController.save_products = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                if(req.files!=null)
                {
                    var productimage= req.files.product_image;
                    if(productimage.mimetype == "image/png" || productimage.mimetype == "image/jpg" || productimage.mimetype == "image/jpeg" )
                    {
                        folder_path='public/images/product_image/'+productimage.name;        
                        productimage.mv(folder_path , function(err){
                            productimagepath='images/product_image/'+productimage.name;
                            if(err)
                                            {
                                                console.log(err)
                                            }
                                            var g =new productmodel({
                                                "product_title":req.body.product_title,
                                                "product_price":req.body.product_price,
                                                "product_link":req.body.product_link,
                                                "product_description":req.body.editor1,
                                                "product_images":productimagepath,
                                                     "user_id":userId
                                            })
                                            g.save(function(err,result){
                                                if(err)
                                                console.log(err)
                                                else
                                                res.redirect('/user/products');
                                                    
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
/*---------------------------Edit Product Controller-----------------------------*/
Service_ProductController.edit_products = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/edit_product.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Delete Product Controller-----------------------------*/
Service_ProductController.delete_products = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                productmodel.findById(req.params.id).remove().exec(function(err){
                    if (!err) {
                        res.redirect('/user/products');       
                   }
                });
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*---------------------------End Product Controller-----------------------------*/

/*---------------------------Testimonial Controller-----------------------------*/
Service_ProductController.show_testimonials = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                testimonialmodel.find({ user_id: req.session.userId},function(err,success){
                    res.render('../views/useradmin/testimonials.ejs',{data:o, data1:success});
                })
                
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Add Testimonial Controller-----------------------------*/
Service_ProductController.add_testimonial = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                res.render('../views/useradmin/add_testimonial.ejs',{data:o});
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Save Testimonial Controller-----------------------------*/
Service_ProductController.save_testimonials = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                var save_data =new testimonialmodel({
                    "customer_name": req.body.customer_name,
                    "description": req.body.editor1,
                    "user_id":req.session.userId
                         
                })
             save_data.save(function(err,data){
                        if(err)
                            console.log(err)
                        else
                        res.redirect('/user/testimonials');
                            
                    })
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*---------------------------Edit Testimonial Controller-----------------------------*/
Service_ProductController.edit_testimonial = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                testimonialmodel.findById(req.params.id,(err,data)=>
                {
                    
                    if(!err){ 
                        res.render('../views/useradmin/edit_testimonial.ejs',{data:o,data1:data});
                    }
                    
                })
                
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Update Testimonial Controller-----------------------------*/
Service_ProductController.update_testimonials = async(req, res)=> {
    
    var userId =  req.session.userId; 
    var abc=req.params.id;
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                testimonialmodel.findByIdAndUpdate({ _id: req.body._id },{customer_name:req.body.customer_name,
                    description:req.body.editor1}, { new: true }, (err,docs)=>
                    {
                        
                            if(err)
                            {
                                console.log(err);
                            }
                            else
                            {
                                res.redirect('/user/testimonials');     
                            }
                        })
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}

/*---------------------------Delete Testimonial Controller-----------------------------*/
Service_ProductController.delete_testimonial = async(req, res)=> {
    
    var userId =  req.session.userId; 
    if(userId)
    {
        const user = authmodel.findOne({ _id: req.session.userId }, function(e,o){
            if (o) {
                testimonialmodel.findById(req.params.id).remove().exec(function(err){
                    if (!err) {
                        res.redirect('/user/testimonials');       
                   }
                });
              } 
            })   
    }
    else{
       res.redirect('/');
    } 
}
/*---------------------------End Testimonial Controller-----------------------------*/

module.exports = Service_ProductController;