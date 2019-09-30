import { Schema, model} from 'mongoose'
import {ILayoutFileDocument}from '../interface/ILayoutFile'

export const layoutSchema = new Schema({
    provider : {
        type:String,
        unique:true
    },
    columns : Array
})

export const layoutFileModel =  model<ILayoutFileDocument>('LayoutFile',layoutSchema)
