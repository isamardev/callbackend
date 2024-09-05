const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/dbConfig.js');
const UnitModel = require('./unitModel.js');
const ProductModel=require('./productModel.js')
const loginModel=require('./loginModel.js')
const RegistrationModel=require('./registratonModel.js')
const blogModel=require('./blogModel.js');
const ReviewCallModel = require('./reviewCallModel.js');
const categoryModel = require('./categoryModel.js');
const auditModel = require('./auditModel.js');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        idle: config.pool.idle,
        acquire: config.pool.acquire
    }
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    unit: UnitModel(sequelize, DataTypes), //Initialize the UnitModel with sequelize and DataTypes
    product: ProductModel(sequelize, DataTypes), //Initialize the UnitModel with sequelize and DataTypes
    login: loginModel(sequelize, DataTypes) , //Initialize the UnitModel with sequelize and DataTypes
    registration: RegistrationModel(sequelize, DataTypes), //Initialize the UnitModel with sequelize and DataTypes
    blog: blogModel(sequelize, DataTypes), //Initialize the UnitModel with sequelize and DataTypes
    review: ReviewCallModel(sequelize, DataTypes), //Initialize the UnitModel with sequelize and DataTypes
    category: categoryModel(sequelize, DataTypes), //Initialize the UnitModel with sequelize and DataTypes
    audits: auditModel(sequelize, DataTypes), //Initialize the UnitModel with sequelize and DataTypes
};


db.sequelize.sync({force:false}).then(()=>{
    console.log("Yes Re-Sync Completed");
})
module.exports = db;
