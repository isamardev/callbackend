const moment =require('moment/moment');
module.exports = (sequelize, DataTypes) => {


    const Registration = sequelize.define('registration', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        confirmPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // Custom validation to ensure confirmPassword matches password
                matchPassword(value) {
                    if (value !== this.password) {
                        throw new Error('Password confirmation does not match password');
                    }
                },
            },
        },
           createdAt:{
        type:DataTypes.DATE,
        default:DataTypes.NOW,
        get(){
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD')
        }
      },
      
      updatedAt:{
        type:DataTypes.DATE,
        default:DataTypes.NOW,
        get(){
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD')
        }
      },
    });

    return Registration;
};
