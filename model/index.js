const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
// config = {
//     "development" : {
//         "host": "localhost",
//         "database": "kdt_test",
//         "username": "user",
//         "password": "qwer1234!!",
//         "dialect": "mysql"
//     }
// }
const db = {};
const sequelize = new Sequelize(
    config.database, /*데이터베이스*/
    config.username, /*사용자명*/
    config.password, /*비밀번호*/
    config /*데이터베이스 정보*/
);

db.sequelize - sequelize;
db.Sequelize = Sequelize;
db.Visitor = require("./Visitor")( sequelize, Sequelize);

module.exports = db;