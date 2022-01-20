const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_prueba'
});

mysqlConnection.connect(function(error){
    if(!error){
        console.log('Data Base is conneted');
    }
});

module.exports = mysqlConnection;