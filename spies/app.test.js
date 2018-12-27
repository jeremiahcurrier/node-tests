const expect = require('expect');
/* 'rewire' (great for testing functions
that have side effects) - 
lets us swap out variables for
our tests. in our case in our test file
we can replace our 'db' object with 
something else completely. Then when
the code run instead of running db.saveUser
it will call a spy version of the function
*/
const rewire = require('rewire');

/* loads your file through require
+ adds 2 new methods (get set)
onto your app */
var app = rewire('./app');
// app.__set__ 
// app.__get__

// make simulation of db object

describe('App', () => {
	var db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	// add individual test cases
	it('should call the spy correctly', () => {
		// creating a spy
		var spy = expect.createSpy();
		// spy();
		// assert our spy was called
		// expect(spy).toHaveBeenCalled();
			//   create series of assertions
			// https://github.com/mjackson/expect#spy-tohavebeencalled
		spy('Jeremiah', 32);
		expect(spy).toHaveBeenCalledWith('Jeremiah', 32);
	});

	it('should call saveUser with user object', () => {
		// synchronous test for now
		var email = 'jeremiah@example.com';
		var password = '123abc';

		// call handleSignup()
		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});

});


