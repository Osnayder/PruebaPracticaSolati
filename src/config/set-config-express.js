const express = require('express');

var expressConfig = function(app){
    app.set('settings', require('./config'));
    app.use(express.json());

    app.use(require('../routes/index'));
    app.use('/api/movies',require('../routes/movies'));
}

module.exports = expressConfig;
