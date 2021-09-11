const mongoose = require('mongoose');
const Contact_detailSchema = new mongoose.Schema({
	mobile_number: String,
  whatsapp_number: String,
  email:String,
  website:String,
  telegram:String,
  address1:String,
  address2:String,
   pincode:String,
  city:String,
   state:String,
  country:String,
  user_id:String,

	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('usercontact_detail', Contact_detailSchema);