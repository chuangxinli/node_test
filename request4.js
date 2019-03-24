const fs = require('fs')
const request = require('request')

request
    .get('http://39.96.186.199/exe/wkhtmltopdf.exe')
    .on('error', function(err) {
        console.log(err)
    })
    .on('response', function (response) {
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type']) // 'image/png'
        response.on('end', function(data) {
            // compressed data as it is received
            console.log('end')
        })
    })
    .pipe(fs.createWriteStream('ddd.exe'))