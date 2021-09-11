const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
	product_title: String,
    product_price: String,
    product_link: String,
	product_description:String,
    product_images: String,
    user_id: String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('userproduct', ProductSchema);