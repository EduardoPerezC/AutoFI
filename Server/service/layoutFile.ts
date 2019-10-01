import {Service} from 'typedi'
import { layoutFileModel } from '../model/layoutFile';
import { ILayoutFileDTO } from '../interface/ILayoutFile'

@Service()
export default class LayoutService{

    async getColumns(provider:String){
       return layoutFileModel.findOne({ provider:provider})
    }
    
    async create(layout : ILayoutFileDTO){
       return layoutFileModel.create(layout)
    }

}