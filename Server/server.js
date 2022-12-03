//additions npm add express
//additions npm add cors
//additions npm add mongoose
//additions npm add bcrypt
//additions npm add paseto

const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const User=require('./models/user.model');
//use
app.use(cors());
app.use(express.json());
//mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/HotDog_DB',
 {useNewUrlParser: true, useUnifiedTopology: true},
 (err)=>{
        if(err){
            console.log(err);
        }else {
            console.log('DB connected');
        }
    });
//post request
app.post('/api/signup',async (req, res) => {
	console.log(req.body)
	try {
            const newPassword = await bcrypt.hash(req.body.password, 10)
            await User.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                dateofbirth: req.body.dateofbirth,
                gender: req.body.gender,
                address: req.body.address,
                location: {
                    country: req.body.country,
                    city: req.body.city,
                    postcode: req.body.postcode,
                },
                username: req.body.username,
                email: req.body.email,
                password: newPassword,
            })
			res.json({ status: 'ok' })
		} catch (err) {
			res.json({ status: 'error', error: err.message })
		}
})
//login
app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)
    if(isPasswordValid){
        const token = jwt.sign(
			{
				firstname: user.firstname,
				email: user.email,
			},
			'codesecret'
		)

		return res.json({ status: 'ok',  user: token })
	} else {
		return res.json({ status: 'error', user: false })
    }
});
//hello
app.post('/api/hello', async (req, res) => {
    const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'codesecret')
		const email = decoded.email
		const user = await User.findOne({ email: email })
        console.log(user)
		return res.json({ status: 'ok', firstname: user.firstname })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

//listen
app.listen(1337,()=>{
    console.log('Server is running on port 1337');
})