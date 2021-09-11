const mongoose = require('mongoose');
const UPISchema = new mongoose.Schema({
	upi_id: String,
    upi_image: String,
    user_id: String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('upidetail', UPISchema);