// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/bwwmc'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/bwwmc_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

};
