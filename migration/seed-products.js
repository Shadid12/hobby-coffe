const AWS = require('aws-sdk')
const uuid = require('uuid')

AWS.config.region = 'us-east-1'
const dynamodb = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1',
    accessKeyId: '', // Your AWS Access Key
    secretAccessKey: '' // Your AWS Secrect Key
})

let products = [
  { 
    name: 'Classic Arabica', 
    productId: uuid.v1(),
    price: 1.95
  },
  { 
    name: 'French Roast', 
    productId: uuid.v1(),
    price: 1.95
  },
  { 
    name: 'Coloumbiana', 
    productId: uuid.v1(),
    price: 1.99
  },
  { 
    name: 'Irish Cream', 
    productId: uuid.v1(),
    price: 2.49
  }
];

let putReqs = products.map(x => ({
  PutRequest: {
    Item: x
  }
}))

let req = {
  RequestItems: {
    'products': putReqs
  }
}
dynamodb.batchWrite(req).promise().then(() => console.log("all done"))