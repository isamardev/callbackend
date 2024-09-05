const moment =require('moment/moment');


module.exports=(sequelize,DataTypes)=>{
    const UnitModel=sequelize.define('unit',{
      name:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      username:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      password:{
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
    return UnitModel
}