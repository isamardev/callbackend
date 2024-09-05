
const db= require('../models');
const multer = require('multer');
const path = require('path');
const Blog =db.blog;

// create Unit Api 
const addBlog= async(req,res)=>{
    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{
const info={
    title:req.body.title,
    image:req.file.path,
detail:req.body.detail

}
     
const blog=await Blog.create(info)
return res.status(200).json({
    status:"ok",
    data:blog
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}

const getBlog= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const blog=await Blog.findAll({})
return res.status(200).json({
    status:"ok",
    data:blog
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}

const getBlogById= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const blog=await Blog.findOne({where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:blog
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}
const updateBlog= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{  
const blog=await Blog.update({...req.body},{where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:blog
})

    } catch (err){
        res.status(500).json({
            error:err.message
        })
    }
}


const deleteBlogById= async(req,res)=>{

    // try catch hum is lia use krty hain ky taky wo humry srver ko crash hony se bachya or err catch kr ky disply kr dy 
    try{

     
const blog=await Blog.destroy({where:{id:req.params.id}})
return res.status(200).json({
    status:"ok",
    data:blog
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
    addBlog,
    getBlog,
    getBlogById,
    updateBlog,
    deleteBlogById,
    upload
}