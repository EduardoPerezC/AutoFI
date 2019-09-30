"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var UploadService = /** @class */ (function () {
    function UploadService() {
    }
    UploadService.prototype.upload = function () {
        //getColumnsByProvider
        /*
        class UploadService{

            vehicleService
            layoutFileService

            upload(){
                //get the file
                //create stream
                //read the layout config file
            }

        }

        class VehicleService {
            findByProvider(provider name)
            findByVin()
            save()

        }

        class layoutFileService{
            getColumns(provider)
            register(new Layout)

        }

        class layoutFile{
            providerName
            columns
        }


        
       

        upload
            {
                provider : 'pro01',
                columns : [
                    'uud','mileage','other column'....
                ]

            }
        */
    };
    UploadService = __decorate([
        typedi_1.Service()
    ], UploadService);
    return UploadService;
}());
exports.default = UploadService;
