const moment =require('moment/moment');

module.exports=(sequelize,DataTypes)=>{
    const blogModel=sequelize.define('blog',{
     
        title:{
            type:DataTypes.STRING,
            allowNull:false,
          },
        image:{
        type:DataTypes.STRING,
        allowNull:false,
      },      
      detail:{
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
    return blogModel
}