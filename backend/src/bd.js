import mysql from 'mysql2/promise';

async function createDatabase() {
    try {
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'gym_crm',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
    console.log('Database connection pool created successfully');
    return pool;  
    }catch (error) {
        console.error('Error creating database connection pool:', error);
        throw error;
    }

}
export default createDatabase;