const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
	facebook: String,
    instagram: String,
    twitter: String,
    youtube: String,
    linkedin: String,
    pintrest: String,
    user_id:String,
	_token				: { type:String,index: true},
	created_at 			: { type: Date, default: Date.now },
	updated_at 			: { type: Date, default: Date.now },
	status 				: { type: Boolean, default: true },
});

module.exports = mongoose.model('socialmedialink', UserSchema);
