dx = require('./index');
util = require('util');
dx.init('apid', 'key', 'product_id');
dx.send_sms({number: 'phone-number', message: 'message'});


