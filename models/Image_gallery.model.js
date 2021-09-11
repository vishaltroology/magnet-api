const mongoose = require('mongoose');
const ImageSchema = new mongoose.Schema({
	image_title: String,
    image_url: String,
    user_id: String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('user_image_gallery', ImageSchema);