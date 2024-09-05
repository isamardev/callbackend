const moment =require('moment/moment');

module.exports=(sequelize,DataTypes)=>{
    const categoryModel=sequelize.define('category',{
     
        CategoryName:{
            type:DataTypes.STRING,
            allowNull:false,
          },
        payout:{
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
    return categoryModel
}