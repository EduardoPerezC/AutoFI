import {Service} from 'typedi'
import { vehicleModel } from '../model/vehicle';
import { IVehicleDTO } from '../interface/IVehicle';

@Service()
export default class VehicleService{

    async save(vehicles : IVehicleDTO){

        vehicleModel.create(vehicles)
    }

}