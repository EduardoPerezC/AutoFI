import { Document, Model } from 'mongoose'


//interface inherited from Document to enforce strong datatype fields in mongo documents
//it might be used to include custom instance methods
export interface ILayoutFileDocument extends Document{

    provider:String
    columns: Array<String>
}

//DTO interface , enforce all members at declaring a new instance of the type
export interface ILayoutFileDTO{
    provider : string
    columns : string[]
}


