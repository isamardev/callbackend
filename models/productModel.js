const moment =require('moment/moment');

module.exports=(sequelize,DataTypes)=>{
    const productModel=sequelize.define('product',{
      image:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false,
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
    })
    return productModel
}