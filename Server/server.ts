import express from 'express'
import config from 'config'
import loader from './loader'    

const server = express()
const port = config.get('port') // getting the port from default.json

loader(server) //calling loader module to start mongodb, DI Container and routes

server.listen(port,()=>{

    console.log(`Listening on port ${port}`)
})