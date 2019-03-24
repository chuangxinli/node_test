
var FormData = require('form-data')
var fs = require('fs')
var path = require('path')
var request = require('request')

var form = new FormData()
form.append('file', fs.createReadStream(path.join(__dirname, '/img/hyd.png')))


form.submit('http://localhost:13004/upload', function (err, res, body) {
    if (err) {
        console.log(err)
    }
    //fs.writeFileSync('01.json', res)
    console.log(res.resume())
    console.log(res.statusCode)
    console.log(res.statusMessage)
    console.log(body)
})


