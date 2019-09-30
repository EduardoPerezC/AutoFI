import {Service} from 'typedi'
import LayoutService from './layoutFile';
import VehicleService from './vehicle';

@Service()
export default class UploadService{

    constructor(private _layoutFileService : LayoutService, 
            private _vehicleService : VehicleService  ){

                

    }

    upload(){
        
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

    }

}