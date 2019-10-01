import Container, {Service, Inject} from 'typedi'
import LayoutService from './layoutFile';
import VehicleService from './vehicle';
import fs from 'fs'
import csv from 'fast-csv'
import _ from 'lodash'
import { IVehicleDTO } from '../interface/IVehicle';

@Service()
export default class UploadService{

    private layoutFileService : LayoutService

    private vehicleService : VehicleService
    
    async upload(filePath :string,provider : string){

        this.layoutFileService = Container.get<LayoutService>("layoutFileService")
        this.vehicleService = Container.get<VehicleService>("vehicleService")

        const layout =  await this.layoutFileService.getColumns(provider)
        
        fs.createReadStream(filePath)
        .pipe(csv.parse({ headers: true }))
        .on('data',(data)=>{

            if(layout){
                console.log()
                return  this.vehicleService.save(_.pick(data,layout.columns) as IVehicleDTO)
                
            }
            
        })
    
    }

}