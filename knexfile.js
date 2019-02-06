const path = require('path')


module.exports = {
  development: {
    client: 'pg',
    connection: `postgres://localhost:8080/scramples_dev`,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}