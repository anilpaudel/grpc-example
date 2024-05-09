const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('example.proto');
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const { ExampleService } = grpcObject;

const server = new grpc.Server();

server.addService(ExampleService.service, {
  SayHello: (call, callback) => {
    console.log("aayo hai")
    callback(null, { message: `Hello, ${call.request.name}!` });
  }
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

console.log('Server running at http://0.0.0.0:50051');
