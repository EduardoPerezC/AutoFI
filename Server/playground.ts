import fs from 'fs'
import csv from 'fast-csv'
import _ from 'lodash'

const vehiclesFileTestPath = '/Users/eduardoperez/Documents/AutoFI/Asset/VehiclesTest/vehicles.csv'

function readCSVFile(){

    console.log("Applying fast-csv parsers via pipe ")
    fs.createReadStream(vehiclesFileTestPath)
    .pipe(csv.parse({ headers: true }))
    .on('data',(data)=>{
        console.log( _.keys(data))

        console.log('data from csv fle ' + data)
    })


}

function testFastCSVPkg(){

    console.log("Applying fast-csv parsers via pipe ")
    fs.createReadStream(vehiclesFileTestPath)
    .pipe(csv.parse({ headers: true }))
    .on('data',(data)=>{
        console.log( _.keys(data))

        console.log('data from csv fle ' + data)
    })
    

}

function testStreamFile(){

    console.log(__dirname)

    const stream = fs.createReadStream(vehiclesFileTestPath)
    stream.on('data',(chunk)=>{
        console.log("this is a chunk " + chunk)
    })
    
    stream.on('end',()=>{ console.log("end of file") })
}

testStreamFile()
testFastCSVPkg()



