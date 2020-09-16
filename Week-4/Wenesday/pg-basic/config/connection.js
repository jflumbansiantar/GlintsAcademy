const {Pool} = require('pg');
const pool = new Pool({
    database: 'pg-basic',
    host: 'localhost',
    user: 'postgres',
    password: 'Idjoel3007',
    port: 5432,
}

);

module.exports = pool;