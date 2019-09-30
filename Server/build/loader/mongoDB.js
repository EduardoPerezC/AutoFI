"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var config_1 = __importDefault(require("config"));
function getConnectionUrl() {
    return "mongodb://" + config_1.default.get('mongoDb.host') + ":" + config_1.default.get('mongoDb.port') + "/autofi";
}
exports.default = (function () {
    mongoose_1.connect(getConnectionUrl(), function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('successfully connected to mongodb');
        }
    });
});
