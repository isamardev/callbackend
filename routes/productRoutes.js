const productController=require('../controllers/productController')
const router=require('express').Router()
router.post('/create',productController.upload,productController.addProduct)
router.get('/getAll',productController.getProduct)
router.get('/get/:id',productController.getProductById)
router.put('/update/:id',productController.updateProduct)
router.delete('/delete/:id',productController.deleteProductById)




module.exports=router