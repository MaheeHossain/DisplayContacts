const router = require('express').Router();
const {
    getAllCustomers,
    createCustomer
} 
= require('../controllers/customerControllers')

// Https requests CRUD order resources
router.get('/', getAllCustomers);
router.post('/create', createCustomer)

module.exports = router;
