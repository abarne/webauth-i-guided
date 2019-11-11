const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

let bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
	res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
	// read a password from the body
	// hash the password using bcryptjs
	// return it to the user in an object that looks like
	// { password: 'original passsword', hash: 'hashed password' }
	const original = req.body.password;
	const credentials = req.body;
	const hash = bcrypt.hashSync(credentials.password, 14);
	credentials.password = hash;
	res.json({ originalPassword: original, hashedPassword: hash });
});

module.exports = router;
