"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = __importDefault(require("../api/route"));
var body_parser_1 = require("body-parser");
exports.default = (function (server) {
    server.use(body_parser_1.json()); // to parse body request to json object
    server.use('/autofi', route_1.default);
});
