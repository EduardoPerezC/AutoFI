"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var fs_1 = __importDefault(require("fs"));
var fast_csv_1 = __importDefault(require("fast-csv"));
var lodash_1 = __importDefault(require("lodash"));
function readCSV() {
    var vehiclesFileTestPath = '/Users/eduardoperez/Documents/AutoFI/Asset/VehiclesTest/vehicles.csv';
    fs_1.default.createReadStream(vehiclesFileTestPath)
        .pipe(fast_csv_1.default.parse({ headers: true }))
        .on('data', function (data) {
        console.log(lodash_1.default.keys(data));
        console.log('data from csv fle ' + data);
    });
}
var routePaths = express_1.Router().get('/', function (req, resp) {
    readCSV();
    resp.send('testing');
}).get('/import', function (req, resp) {
});
exports.default = express_1.Router().use('/', routePaths);
