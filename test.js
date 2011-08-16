dx = require('./index');
util = require('util');
dx.init('apid', 'key');
dx.request({number: 'phone-number', message: 'message you want to say'});


