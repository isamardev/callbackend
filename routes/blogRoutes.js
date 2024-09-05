const blogController=require('../controllers/blogController')
const router=require('express').Router()
router.post('/create',blogController.upload,blogController.addBlog)
router.get('/getAll',blogController.getBlog)
router.get('/get/:id',blogController.getBlogById)
router.put('/update/:id',blogController.upload,blogController.updateBlog)
router.delete('/delete/:id',blogController.deleteBlogById)

module.exports=router