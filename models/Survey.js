const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [RecipientSchema],
	// yes: { type: Number, default: 0 },
	// no: { type: Number, default: 0 },
	rate1: { type: Number, default: 0 },
	rate2: { type: Number, default: 0 },
	rate3: { type: Number, default: 0 },
	rate4: { type: Number, default: 0 },
	rate5: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateSent: Date,
	lastResponded: Date
});

mongoose.model('surveys', surveySchema);
