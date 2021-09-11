const mongoose = require('mongoose');
const AuthSchema = new mongoose.Schema({
	first_name: String,
  last_name: String,
  user_email:String,
  country_code:String,
  gender:String,
  contact_no:String,
  industry_name:String,
  user_image:String,
  designation:String,
  company_name:String,
  company_logo:String,
  cover_photo:String,


	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('authentication', AuthSchema);