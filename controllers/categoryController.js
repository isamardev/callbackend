
const db= require('../models');


const Category =db.category;

// create Unit Api 
const addCategory= async(req,res)=>{
    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{
const info={
CategoryName:req.body.CategoryName,
payout:req.body.payout,
}
     
const category=await Category.create(info)
return res.status(200).json({
    status:"ok",
    data:category
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}

const getCategory= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const category=await Category.findAll({})
return res.status(200).json({
    status:"ok",
    data:category
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}

const getCategoryById= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const category=await Category.findOne({where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:category
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}
const updateCategory= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const category=await Category.update({...req.body},{where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:category
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}


const deleteCategoryById= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const category=await Category.destroy({where:{id:req.params.id}})
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
    addCategory,
    getCategory,
    getCategoryById,
    updateCategory,
    deleteCategoryById
}