var mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
        host: "",
        port: "3306",
        user: "root",
        password: "123456",
        database: "my_blog1"
    });
    return connection;
}

module.exports.createConnection = createConnection;
