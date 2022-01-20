'use strict';

const express = require('express');
const app = express();

require('./src/config/set-config-express')(app);
module.exports = app;

/** starting the server */
app.listen(app.get('settings').port, function() {
    console.log('Listening port: ' + app.get('settings').port)
});

