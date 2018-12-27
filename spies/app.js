var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
	// check if email already exists

	// save the user to the database
		// db.saveUser(user);
		// db.saveUser({
		// 	email: email,
		// 	password: password
		// 	// in es6 if property name = variable name
		// 	// no need for both
		// });
	db.saveUser({ email, password});
	
	// send the welcome email
};