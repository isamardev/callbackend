const categoryController=require('../controllers/categoryController')
const router=require('express').Router()
router.post('/create',categoryController.addCategory)
router.get('/getAll',categoryController.getCategory)
router.get('/get/:id',categoryController.getCategoryById)
router.put('/update/:id',categoryController.updateCategory)
router.delete('/delete/:id',categoryController.deleteCategoryById)

module.exports=router