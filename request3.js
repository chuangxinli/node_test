
var fs = require('fs')
var path = require('path')
var request = require('request')


var formData11 = {
    file: fs.createReadStream(path.join(__dirname, '/img/hyd.png'))
}


request.post({url:'http://localhost:13004/upload', formData: formData11}, function(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log(httpResponse.statusCode)
    console.log(httpResponse.body)
    console.log('Upload successful!  Server responded with:', body);
});
