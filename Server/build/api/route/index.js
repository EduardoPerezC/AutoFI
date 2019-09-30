"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var upload_1 = __importDefault(require("./upload"));
var layoutFile_1 = __importDefault(require("./layoutFile"));
var express_1 = require("express");
var modulePaths = express_1.Router()
    .use('/upload', upload_1.default)
    .use('/layout', layoutFile_1.default);
exports.default = express_1.Router()
    .use('/api', modulePaths);
