import { Router}  from 'express';
import multer from 'multer'
import UploadService from '../../service/upload'
import { Container} from 'typedi'

//const uploadServiceInstance = new uploadService()
const upload = multer({dest:'upload/'})

const routePaths = Router().get('/', (req,resp)=>{
    
    //TODO Retrieve all vehicles by provider

}).post('/',upload.single('file'),async (req,resp)=>{

    let service = Container.get(UploadService) 

    try {
        await service.upload(req.file.path,req.body.provider)
        resp.send('successfully Uploaded')
    } catch (error) {
        console.log('bad request' + error)
        resp.send(error)
    }
    
})

export default Router().use('/',routePaths)