const unitController=require('../controllers/registraionControlloer')
const router=require('express').Router()
router.post('/create',unitController.addUnit)
router.get('/getAll',unitController.getUnit)
router.get('/get/:id',unitController.getUnitById)
router.put('/update/:id',unitController.updateUnit)
router.delete('/delete/:id',unitController.deleteUnitById)

module.exports=router