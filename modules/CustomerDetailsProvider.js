var path    = require('path');
var restify = require('restify');
var applog = require('winston');
var sqlHelper = require('../middleware/sqlhelper');
var jsonHelper = require('../middleware/sqltojsonconverter');

exports.CustomerDetailsV1 = CustomerDetailsV1;
exports.CustomerContactsV1 = CustomerContactsV1;

function CustomerDetailsV1(req, res, next) {
    applog.debug('Getting customer details for @cust_no=' + req.params.id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:CustomerDetailsSp') + " @cust_no=" + req.params.id,function(err,results){
       if(err){
           return next(new restify.InternalError("Database error."));
       }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}

function CustomerContactsV1(req, res, next) {
    applog.debug('Getting customer contacts for @cust_no=' + req.params.id);
    res.header("Content-Type: application/json");
    sqlHelper.RunSqlCommand("exec " + nconf.get('Data:CustomerContactsSp') + " @cust_no=" + req.params.id,function(err,results){
       if(err){
           return next(new restify.InternalError("Database error."));
       }
        jsonHelper.JsonifyRecordset(results, function(err, jsonString){
            if(err){
                applog.error("Error parsing recordset into json. " + err.message);
                return next(new restify.InternalError("Resultset parsing error."));
            }
            res.send(jsonString);
        });
    });
}
