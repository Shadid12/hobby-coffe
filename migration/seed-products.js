const AWS = require('aws-sdk')
const uuid = require('uuid')

AWS.config.region = 'us-east-1'
const dynamodb = new AWS.DynamoDB.DocumentClient({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

let params = {
    TableName: 'orders',
    Item: {
        userId: 'shadid',
        orderId: uuid.v1(),
        total: 11,
        products: [
            'shadid',
            'kkdwll'
        ]
    }
}
dynamodb.put(params).promise().then(res => {
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