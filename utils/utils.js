module.exports.add = (a, b) => a + b;

/* ASYNCHRONOUS call - fake - simulated via setTimeout() delay 
will have a callback to simulate delay
in real world this might be a DATABASE request or an
HTTP request
*/

module.exports.asyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 1000);
	/* 1 second (if tests longer than 2 seconds mocha assumes
	that is not what you wanted so it will fail) */
};

module.exports.square = (x) => x * x;

module.exports.asyncSquare = (x, callback) => {
	setTimeout(() => {
		callback(x * x);
	}, 1000);
	/* 1 second (if tests longer than 2 seconds mocha assumes
	that is not what you wanted so it will fail) */
};

module.exports.setName = (user, fullName) => {
	var names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];
	return user;
};