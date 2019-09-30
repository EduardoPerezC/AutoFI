import uploaderRoute from './upload'
import layoutFileRoute from './layoutFile'
import { Router}  from 'express';

const modulePaths =  Router()
    .use('/upload',uploaderRoute)
    .use('/layout',layoutFileRoute)
    
export default Router()
    .use('/api',modulePaths)
