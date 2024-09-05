
const db= require('../models');
const multer = require('multer');
const path = require('path');
const Product =db.product;

// create Unit Api 
const addProduct= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{
const info={
    image:req.file.path,
name:req.body.name

}
     
const product=await Product.create(info)
return res.status(200).json({
    status:"ok",
    data:product
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}

const getProduct= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const product=await Product.findAll({})
return res.status(200).json({
    status:"ok",
    data:product
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}

const getProductById= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const product=await Product.findOne({where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:product
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}
const updateProduct= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const product=await Product.update({...req.body},{where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:product
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}


const deleteProductById= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const product=await Product.destroy({where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:product
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}



// 7. Upload an image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'images');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 },
    fileFilter: (req, file, cb) => {
      const fileTypes = /jpeg|jpg|png|gif/;
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
  
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb('Please provide a file with a proper format (jpeg, jpg, png, gif)');
    }
  }).single('image');
  
module.exports={
    addProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProductById,
    upload
}