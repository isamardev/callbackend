
const db= require('../models');


const Unit =db.registration;

// create Unit Api 
const addUnit= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{
const info={
firstName:req.body.firstName,
lastName:req.body.lastName,
email:req.body.email,
phoneNumber:req.body.phoneNumber,
password:req.body.password,
confirmPassword:req.body.confirmPassword,
}
     
const unit=await Unit.create(info)
return res.status(200).json({
    status:"ok",
    data:unit
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}

const getUnit= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const unit=await Unit.findAll({})
return res.status(200).json({
    status:"ok",
    data:unit
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}

const getUnitById= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const unit=await Unit.findOne({where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:unit
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}
const updateUnit= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const unit=await Unit.update({...req.body},{where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:unit
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}


const deleteUnitById= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const unit=await Unit.destroy({where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:unit
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}




  
module.exports={
    addUnit,
    getUnit,
    getUnitById,
    updateUnit,
    deleteUnitById
}



