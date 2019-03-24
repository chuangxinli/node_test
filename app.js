const express = require('express')
const app = express()
const path = require('path')

const bodyParser = require('body-parser') //解析post数据
const multer = require('multer') //解析post文件

let upload = multer({ dest: 'uploads/' })

//app.use(objMulter.any())





//app.use(bodyParser.json({limit: '50mb'}));

//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('hello world')
})

app.use(upload.any()); //处理任何用户上传的文件
app.post('/upload', function (req, res) {
    console.log(req.files)
    console.log(req.file);
    //console.log(req.body)
    //let newName = req.files[0].path +
    res.send({recode: 0, data: 'success'})
})

app.post('/postData', function (req, res) {
    let query = req.body
    console.log('post 请求:参数', query)
    res.send({
        recode: 0,
        data: 'haha'
    })
})

app.listen(13004, function () {
    console.log('success 13004')
})