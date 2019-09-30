import {Schema ,model} from 'mongoose'
import { IVehicleDocument } from '../interface/IVehicle';

const vehicleSchema = new Schema({
    uuid : {
        type : String
    },
    vin:{
        type : String
    },
    make:{
        type : String
    },
    vehicleModel:{
        type : String
    },
    mileage:{
        type : String
    },
    year:{
        type : String
    },
    price:{
        type : String
    },
    zipcode:{
        type : String
    },
    createupdate:{
        type : String
    },
    updatedate:{
        type : String
    },
})

export const vehicleModel = model<IVehicleDocument>('Vehicles',vehicleSchema)

