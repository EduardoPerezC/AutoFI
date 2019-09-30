import { Document, Model } from 'mongoose'

export interface IVehicleDocument extends Document{
    
    uuid : String
    vin : String
    make : String
    vehicleModel : String
    mileage:String
    year:String
    price:String
    zipcode:String
    createupdate:String
    updatedate:String
    
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
