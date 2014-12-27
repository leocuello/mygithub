require('./config/config');
var github = require('./bin/mygithub');

github.getRepository('leocuello', function(repos){

	console.log('LeoRepo:', repos);

})

