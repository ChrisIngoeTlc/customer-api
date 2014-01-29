#customer-api
ThomsonLocal API for internal processes to pull customer details from a REST interface.

##Current Version
This API is currently running at 1.0.0

##Encryption
There is no encryption on this API service.

#API Reference
##Example HTTP Request Header
GET http://[HOST]/Customer/Details/[CUSTOMER_NUMBER] HTTP/1.1

Host: [HOST]

accept-version: 1.0.0

##Example Customer Detail GET Request
`GET http://[HOST]/Customer/Details/12345 HTTP/1.1`

##Successful Response
`{"number":1234,"name":"A A Flooring"}`

