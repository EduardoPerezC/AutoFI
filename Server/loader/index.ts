import DILoader from './dependencyInjector'
import mongoDBLoader from './mongoDB'
import routeLoader from './route'
import { Application } from 'express';

export default (app : Application)=>{

    routeLoader(app)
    mongoDBLoader()
    DILoader()

}