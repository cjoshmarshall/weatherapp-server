"use strict";

// const serverless = require("serverless-http");
// const app = require("./index");

// module.exports.handler = serverless(app);

const awsServerlessExpress = require("aws-serverless-express");
const app = require("./src/index");

const server = awsServerlessExpress.createServer(app);

module.exports.handler = (event, context) => {
  console.log(event, "event");
  console.log(context, "context");
  return awsServerlessExpress.proxy(server, event, context);
};
