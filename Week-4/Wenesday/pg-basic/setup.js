const pool = require('./config/connection');

const productsTableSql = `
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    gender VARCHAR(6)
);
`;

pool.query(productsTableSql, (err, data) => {
    if(err){
        throw err;
    } else {
        console.log('Table "products" created successfuly')
        pool.end();
    }
});