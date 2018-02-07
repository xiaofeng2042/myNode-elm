var users = require('./users')


// var v1 = require('./v1')
// var v2 = require('./v2')
// var v3 = require('./v3')
// var v4 = require('./v4')
// var ugc = require('./ugc')
// var bos = require('./bos')
// var eus = require('./eus')
var admin = require('./admin')
// var statis = require('./statis')
// var member = require('./member')
// var shopping = require('./shopping')
// var promotion = require('./promotion')

module.exports = (app) => {
	app.get('/', (req, res, next) => {
		res.render('index', { title: 'Express' });
	});

	app.use('/users', users);

	// app.use('/v1', v1);
	// app.use('/v2', v2);
	// app.use('/v3', v3);
	// app.use('/v4', v4);
	// app.use('/ugc', ugc);
	// app.use('/bos', bos);
	// app.use('/eus', eus);
	app.use('/admin', admin);
	// app.use('/member', member);
	// app.use('/statis', statis);
	// app.use('/shopping', shopping);
	// app.use('/promotion', promotion);
}
