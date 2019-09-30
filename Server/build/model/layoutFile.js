"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.layoutSchema = new mongoose_1.Schema({
    provider: {
        type: String,
        unique: true
    },
    columns: Array
});
exports.layoutFileModel = mongoose_1.model('LayoutFile', exports.layoutSchema);
