"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
var mongoDB_1 = __importDefault(require("./mongoDB"));
var route_1 = __importDefault(require("./route"));
exports.default = (function (app) {
    route_1.default(app);
    mongoDB_1.default();
    dependencyInjector_1.default();
});
