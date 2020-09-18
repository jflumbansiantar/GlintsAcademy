const pool = require('./config/connection');

const productsTableSql = `
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    task VARCHAR(50),
    status VARCHAR(50),
    createdAt VARCHAR(100),
    completedAt VARCHAR(100)
);
`;

pool.query(productsTableSql, (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log('Table "tasks" created successfully');
        pool.end();
        
    }
});
