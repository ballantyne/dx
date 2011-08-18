dx = require('./index');
util = require('util');
dx.init('apid', 'key');
dx.send_sms({number: 'number', message: 'message'});


