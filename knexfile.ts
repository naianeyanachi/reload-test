const path = require('path')
require("dotenv").config()

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
      port: 3306
    },
    migrations: {
      directory: path.join(__dirname, '/migrations'),
      extension: 'ts'
    },
    seeds: {
      directory: path.join(__dirname, '/seeds'),
      extension: 'ts'
    }
  }

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

}
