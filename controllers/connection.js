const {Client} = require('pg')
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '12345678',
  database: 'employee'
})
client.connect();

module.exports = client;
