var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController");
var user = require("../controllers/UserController");
var links = require("../controllers/LinksController");
var payment = require("../controllers/PaymentController");
var product = require("../controllers/Service_ProductController");

/* GET Personal Detail Form. */
router.get('/personal_detail', function(req, res, next) {
  user.personal_detail(req , res);
});

/* Save Personal Detail Form. */
router.patch('/save_personal_detail/:id', function(req, res, next) {
  user.save_personal_detail(req,res);
});


/* GET Contact Form. */
router.get('/contact_details', function(req, res, next) {
  user.contact_details(req , res);
});

/* Save Contact Form. */
router.post('/save_contact_details', function(req, res, next) {
  user.save_contact_details(req,res);
});

/* GET Social Media Links */
router.get('/social_media_links', function(req, res, next) {
  user.social_media_links(req , res);
});

/* Save Social Media Links */
router.post('/save_social_media_links', function(req, res, next) {
  user.save_social_media_links(req , res);
});

/* GET About me */
router.get('/about_me', function(req, res, next) {
  user.about_me(req , res);
});

/* Save About me*/
router.post('/save_about_me', function(req, res, next) {
  user.save_about_me(req , res);
});

/* GET Service */
router.get('/services', function(req, res, next) {
  product.show_services(req , res);
});

/* Edit Service */
router.get('/edit_service/:id', function(req, res, next) {
  product.edit_services(req , res);
});

/* Update Service */
router.post('/update_service', function(req, res, next) {
  console.log(req.files)
  // product.update_services(req , res);
});

/* Add Service */
router.get('/add_service', function(req, res, next) {
  product.add_services(req , res);
});

/* Save Service */
router.post('/save_service', function(req, res, next) {
  product.save_service(req , res);
});


/* GET Product */
router.get('/products', function(req, res, next) {
  product.show_products(req , res);
});

/* Edit Product */
router.get('/edit_product', function(req, res, next) {
  product.edit_products(req , res);
});

/* Add Product */
router.get('/add_product', function(req, res, next) {
  product.add_products(req , res);
});

/* Save Product */
router.post('/save_product', function(req, res, next) {
  product.save_products(req , res);
});

/* Delete Product */
router.get('/delete_product/:id', function(req, res, next) {
  product.delete_products(req , res);
});

/* GET Testimonial */
router.get('/testimonials', function(req, res, next) {
  product.show_testimonials(req , res);
});

/* Save Testimonial */
router.post('/save_testimonials', function(req, res, next) {
  product.save_testimonials(req , res);
});

/* Update Testimonial */
router.post('/update_testimonials', function(req, res, next) {
  product.update_testimonials(req , res);
});

/* Edit Testimonial */
router.get('/edit_testimonial/:id', function(req, res, next) {
  product.edit_testimonial(req , res);
});

/* Delete Testimonial */
router.get('/delete_testimonial/:id', function(req, res, next) {
  product.delete_testimonial(req , res);
});

/* Add Testimonial */
router.get('/add_testimonial', function(req, res, next) {
  product.add_testimonial(req , res);
});

/* GET Image Gallery */
router.get('/image_gallery', function(req, res, next) {
  links.show_image_gallery(req , res);
});

/* Edit Image Gallery */
router.get('/add_image_gallery', function(req, res, next) {
  links.add_image_gallery(req , res);
});

/* Add Image Gallery */
router.get('/edit_image_gallery/:id', function(req, res, next) {
  links.edit_image_gallery(req , res);
});

/* Save Image Gallery */
router.post('/save_image_gallery', function(req, res, next) {
  links.save_image_gallery(req , res);
});

/* Update Image Gallery */
router.post('/update_image_gallery', function(req, res, next) {
  links.update_image_gallery(req , res);
});

/* Delete Image Gallery */
router.get('/delete_image_gallery/:id', function(req, res, next) {
  links.delete_image_gallery(req , res);
});

/* GET Video Gallery */
router.get('/video_gallery', function(req, res, next) {
  links.show_video_gallery(req , res);
});

/* Edit Video Gallery */
router.get('/add_video_gallery', function(req, res, next) {
  links.add_video_gallery(req , res);
});

/* Add Video Gallery */
router.get('/edit_video_gallery', function(req, res, next) {
  links.edit_video_gallery(req , res);
});

/* GET Important Links */
router.get('/important_links', function(req, res, next) {
  links.show_important_links(req , res);
});

/* Edit Important Links */
router.get('/add_important_links', function(req, res, next) {
  links.add_important_links(req , res);
});

/* Edit Important Links */
router.get('/edit_important_links/:id', function(req, res, next) {
  links.edit_important_links(req , res);
});

/* Delete Important Links */
router.get('/delete_important_links/:id', function(req, res, next) {
  links.delete_important_links(req , res);
});

/* Save Important Links */
router.post('/save_important_links', function(req, res, next) {
  links.save_important_links(req , res);
});

/* Update Important Links */
router.post('/update_important_links', function(req, res, next) {
  links.update_important_links(req , res);
});

/* GET Bank Account Detail */
router.get('/bank_account_details', function(req, res, next) {
  payment.show_bank_account_details(req , res);
});

/* Save Bank Account Detail */
router.post('/save_bank_account_details', function(req, res, next) {
  payment.save_bank_account_details(req , res);
});


/* GET User UPI Imgae */
router.get('/upi_image', function(req, res, next) {
  payment.show_upi_image(req , res);
});

/* Save Bank Account Detail */
router.post('/save_upi_image', function(req, res, next) {
  payment.save_upi_image(req , res);
});


module.exports = router;
