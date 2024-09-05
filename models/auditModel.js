const moment =require('moment/moment');

module.exports=(sequelize,DataTypes)=>{
    const ReviewCallModel=sequelize.define('audit',{
      audio:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      answer:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      realAnswer:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      userId:{
        type:DataTypes.STRING,
        allowNull:false,
      },

      category:{
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
    return ReviewCallModel
}