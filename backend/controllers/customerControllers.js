// const { customers } =  require("../models/Customer");
const CustomerDb = require('../models/Customer')

/**
 * This method implements the logic to getAllCustomers
 * Gets all of the customers from the Customer database
 * 
 * @param {*} request 
 * @param {*} response 
 */
const getAllCustomers = (request, response) => {
    // Get all the customers
    // response.send(customers);
    CustomerDb.find({}, (error, customer) => {
        if (error) {
            response.send(error)
        }
        response.send(customer)
    })
}

/**
 * This method implements the logic to createCustomer.
 * 
 * @param {*} request 
 * @param {*} response 
 */
 const createCustomer = async (request, response) => {
    // Store in the database
    CustomerDb.insert(request.body, (error, savedItem) => {
        if (error) {
            response.send(error)
        }
        response.send(savedItem)
    })
}

// export the controller functions
module.exports = {
    getAllCustomers,
    createCustomer
}

