const AWS = require('aws-sdk')
const uuid = require('uuid')

AWS.config.region = 'us-east-1'
const dynamodb = new AWS.DynamoDB.DocumentClient({
    accessKeyId: 'AKIAVINEMP4JGRMI5TEZ',
    secretAccessKey: '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'
})

let params = {
    TableName: 'products'
}
dynamodb.scan(params).promise().then(res => {
    console.log('DONEEE', res);
})

// let products = [
//   { 
//     name: 'Classic Arabica', 
//     productId: uuid.v1(),
//     price: 1.95
//   },
//   { 
//     name: 'French Roast', 
//     productId: uuid.v1(),
//     price: 1.95
//   },
//   { 
//     name: 'Coloumbiana', 
//     productId: uuid.v1(),
//     price: 1.99
//   },
//   { 
//     name: 'Irish Cream', 
//     productId: uuid.v1(),
//     price: 2.49
//   }
// ];

// let putReqs = products.map(x => ({
//   PutRequest: {
//     Item: x
//   }
// }))

// let req = {
//   RequestItems: {
//     'products': putReqs
//   }
// }
// dynamodb.batchWrite(req).promise().then(() => console.log("all done"))