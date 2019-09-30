import { connect} from 'mongoose'
import config from 'config'

function getConnectionUrl(){
    return `mongodb://${config.get('mongoDb.host')}:${config.get('mongoDb.port')}/autofi`
}

export default ()=>{

    connect(getConnectionUrl(),(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('successfully connected to mongodb')
        }
    })
}


