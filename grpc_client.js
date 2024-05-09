const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('example.proto');
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const { ExampleService } = grpcObject;

const client = new ExampleService('localhost:50051', grpc.credentials.createInsecure());

const request = { name: 'Alice' };

client.SayHello(request, (error, response) => {
  if (!error) {
    console.log('Response:', response.message);
  } else {
    console.error('Error:', error);
  }
});
