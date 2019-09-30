"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("config"));
var loader_1 = __importDefault(require("./loader"));
var server = express_1.default();
var port = config_1.default.get('port'); // getting the port from default.json
loader_1.default(server); //calling loader module to start mongodb, DI Container and routes
server.listen(port, function () {
    console.log("Listening on port " + port);
});
