const dbConfig = require("../config/db.Config");
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      operatorsAliases: false,

      pool: {
          max: dbConfig.pool.max,
          min: dbConfig.pool.min,
          acquire: dbConfig.pool.acquire,
          idle: dbConfig.pool.idle

      }
  }
)

sequelize.authenticate()
.then(() => {
    console.log('=> connected...to the MySQL Database')
})
.catch(err => {
    console.log('=> Sequeliza Authenticate Error: '+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require("./studentModel")(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('=> re-sync done !')
})




module.exports = db;