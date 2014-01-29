var CustomerDetails = require('../modules/CustomerDetailsProvider')

//Define the server API url for customer details
//Include versions as this is still a prototype
exports.setup = function ( server ) {
    server.get({path: '/Customer/:id', flags: 'i', version: '1.0.0'},CustomerDetails.CustomerDetailsV1),
    server.get({path: '/Customer/:id/Contact', flags: 'i', version: '1.0.0'},CustomerDetails.CustomerContactsV1);
};
