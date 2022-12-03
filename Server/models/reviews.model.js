const mongoose = require('mongoose')

const Review = new mongoose.Schema(
	{
        id: {type: Number, required: true, unique: true},
		reviewer: { type: String, required: true },
        review: { type: String, required: true },
	},
	{ collection: 'Reviews' }
)

const model = mongoose.model('Review',Review)

module.exports = model