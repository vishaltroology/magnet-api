const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
	a_name: String,
  a_option: String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('blog', BlogSchema);
