const axios = require('axios')
const formData = require('form-data')
const fs = require('fs')
let form = new formData()
form.append('file', fs.createReadStream('F:\\wamp\\www\\nodeTest\\upload\\img\\hyd.png'))
 axios({
    method: 'post',
    url: 'http://localhost:13004/upload',
    data: form,
    header: form.getHeaders()
}).then(v => {
    console.log(v.data)
})

/*axios({
    method: 'post',
    url: 'http://localhost:13004/postData',
    data: {
        name: 'mingming',
        age: '28'
    }
}).then(v => {
    console.log(v.data)
})*/
