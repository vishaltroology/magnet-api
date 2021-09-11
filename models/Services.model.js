const mongoose = require('mongoose');
const ServiceSchema = new mongoose.Schema({
	service_title: String,
    service_image: String,
	service_description:String,
    user_id: String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('userservice', ServiceSchema);