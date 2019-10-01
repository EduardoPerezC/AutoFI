import { Document, Model } from 'mongoose'

export interface IVehicleDocument extends Document{
    
    uuid : string
    vin : string
    make : string
    vehicleModel : string
    mileage:string
    year:string
    price:string
    zipcode:string
    createupdate:string
    updatedate:string
    
}

export interface IVehicleDTO{

    uuid : string
    vin : string
    make : string
    vehicleModel : string
    mileage:string
    year:string
    price:string
    zipcode:string
    createupdate:string
    updatedate:string

}
