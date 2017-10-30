const passport = require('passport');

// app.get('/', (req, res) => {
// 	res.send({ hello: 'Node' });
// });

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));
};
