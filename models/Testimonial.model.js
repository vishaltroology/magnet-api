const mongoose = require('mongoose');
const TestimonialSchema = new mongoose.Schema({
	customer_name: String,
    description: String,
    user_id: String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('usertestimonial', TestimonialSchema);