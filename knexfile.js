module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/todos_test',
    migration: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABSE_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  },
}; 
