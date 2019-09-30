import { Router}  from 'express';
import fs from 'fs'
import csv from 'fast-csv'
import _ from 'lodash'


function readCSV(){

    const vehiclesFileTestPath = '/Users/eduardoperez/Documents/AutoFI/Asset/VehiclesTest/vehicles.csv'
    fs.createReadStream(vehiclesFileTestPath)
    .pipe(csv.parse({ headers: true }))
    .on('data',(data)=>{
        console.log( _.keys(data))

        

        console.log('data from csv fle ' + data)
    })
}

const routePaths = Router().get('/',(req,resp)=>{
    
    readCSV()

    resp.send('testing')

}).post('/',(req,resp)=>{
    
    
})

export default Router().use('/',routePaths)