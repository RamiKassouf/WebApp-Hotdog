const mongoose = require('mongoose')

const Review = new mongoose.Schema(
	{
		reviewer: { type: String, required: true, unique: true },
        review: { type: String, required: true },
	},
	{ collection: 'Reviews' }
)

const model = mongoose.model('Review', Review)

module.exports = model