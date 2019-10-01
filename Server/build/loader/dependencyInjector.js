"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var layoutFile_1 = __importDefault(require("../service/layoutFile"));
var vehicle_1 = __importDefault(require("../service/vehicle"));
exports.default = (function () {
    typedi_1.Container.set("vehicleService", new vehicle_1.default());
    typedi_1.Container.set("layoutFileService", new layoutFile_1.default());
});
