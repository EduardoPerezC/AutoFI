"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var vehicleSchema = new mongoose_1.Schema({
    uuid: {
        type: String
    },
    vin: {
        type: String
    },
    make: {
        type: String
    },
    vehicleModel: {
        type: String
    },
    mileage: {
        type: String
    },
    year: {
        type: String
    },
    price: {
        type: String
    },
    zipcode: {
        type: String
    },
    createupdate: {
        type: String
    },
    updatedate: {
        type: String
    },
});
exports.vehicleModel = mongoose_1.model('Vehicles', vehicleSchema);
