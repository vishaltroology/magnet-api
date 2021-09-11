const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
	template: String,
  industry: String,
  description:String,
  user_id:String,

	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('userabout_me_detail', UserSchema);