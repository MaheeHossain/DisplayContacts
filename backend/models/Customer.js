const Datastore = require('nedb');

const CustomerDb = new Datastore({
    filename:'./databases/customers.db',
    autoload: true,
    corruptAlertThreshold: 1
});

module.exports = CustomerDb;