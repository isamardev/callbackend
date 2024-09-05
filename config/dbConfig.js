const config = {
    HOST: "localhost", // Change this to your MySQL host
    PORT: "8000", // Default MySQL port is 3306
    USER: "root", // Change this to your MySQL username
    PASSWORD: "", // Change this to your MySQL password
    DB: "callcenter", // Change this to your database name
    dialect: "mysql",
    mainURL: 'http://localhost:8000/',
    pool: {
        max: 5,
        min: 0, 
        idle: 10000, // Adjust based on your requirements
        acquire: 30000 // Adjust based on your requirements
    }
};

module.exports = config;
