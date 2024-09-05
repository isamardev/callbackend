const reviewController = require('../controllers/auditController');
const router = require('express').Router();

// Define the routes and bind the controller methods
router.post('/create', reviewController.upload, reviewController.addCall);
router.get('/getAll', reviewController.getCall);
// router.get('/getCategoryCall/:CategoryName', reviewController.getCategoryCall);
router.get('/get/:id', reviewController.getCallById);
router.put('/update/:id', reviewController.upload, reviewController.updateCall);
router.delete('/delete/:id', reviewController.deleteCallById);

module.exports = router;
