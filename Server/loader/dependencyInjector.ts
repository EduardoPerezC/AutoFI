import { Container} from 'typedi'
import layoutFileService from '../service/layoutFile'
import uploadService from '../service/upload'
import vehicleService from '../service/vehicle'

export default ()=>{

    Container.set("vehicleService",new vehicleService())
    Container.set("layoutFileService",new layoutFileService())
    
}