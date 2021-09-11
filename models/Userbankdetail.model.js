const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
	bank_name: String,
    account_type: String,
    account_name: String,
    account_number: String,
    IFSC_code: String,
    GST_no: String,
    pancard_no: String,
    remark: String,
    user_id: String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('userbankdetail', UserSchema);