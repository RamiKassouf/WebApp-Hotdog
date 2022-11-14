const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        dateofbirth: { type: Date, required: true },
        gender: { type: String, required: true },
        address: { type: String, required: true },
        location:{ 
            country: { type: String, required: true },
            city: { type: String, required: true },
            postcode: { type: String, required: true },
        },
		email: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model