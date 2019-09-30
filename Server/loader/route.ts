import mainRoute from '../api/route'
import { Application } from 'express';
import { json } from 'body-parser';

export default (server : Application)=>{

    server.use(json()) // to parse body request to json object
    server.use('/autofi',mainRoute)
}