"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var fast_csv_1 = __importDefault(require("fast-csv"));
var lodash_1 = __importDefault(require("lodash"));
var vehiclesFileTestPath = '/Users/eduardoperez/Documents/AutoFI/Asset/VehiclesTest/vehicles.csv';
function readCSVFile() {
    console.log("Applying fast-csv parsers via pipe ");
    fs_1.default.createReadStream(vehiclesFileTestPath)
        .pipe(fast_csv_1.default.parse({ headers: true }))
        .on('data', function (data) {
        console.log(lodash_1.default.keys(data));
        console.log('data from csv fle ' + data);
    });
}
function testFastCSVPkg() {
    console.log("Applying fast-csv parsers via pipe ");
    fs_1.default.createReadStream(vehiclesFileTestPath)
        .pipe(fast_csv_1.default.parse({ headers: true }))
        .on('data', function (data) {
        console.log(lodash_1.default.keys(data));
        console.log('data from csv fle ' + data);
    });
}
function testStreamFile() {
    console.log(__dirname);
    var stream = fs_1.default.createReadStream(vehiclesFileTestPath);
    stream.on('data', function (chunk) {
        console.log("this is a chunk " + chunk);
    });
    stream.on('end', function () { console.log("end of file"); });
}
testStreamFile();
testFastCSVPkg();
