import { Router}  from 'express';
import LayoutFileService from '../../service/layoutFile'
import { ILayoutFileDTO } from '../../interface/ILayoutFile';

const layoutFileService = new LayoutFileService()

const routePaths = Router().get('/provider/:provider',async (req,resp)=>{
    
    try {
        const layouts = await layoutFileService.getColumns(req.params.provider)
        resp.send(layouts)
    } catch (error) {
        resp.status(404).send(error)
    }
    

}).post('/',async (req,resp)=>{

    try {
        const newLayout =  await layoutFileService.create(req.body as ILayoutFileDTO)
        resp.send(newLayout)
    } catch (error) {
        resp.status(404).send(error)
    }
    
})

export default Router().use('/',routePaths)