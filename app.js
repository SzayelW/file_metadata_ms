var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express()

app.get('/', (req, res)=>{
    res.sendFile('./index.html', {root: __dirname })
})

app.post('/', upload.single('file'),(req, res)=>{

    if(req.file){
        var size = req.file.size;
        res.json({size: size})        
    }else{
        res.json({error: "error uploading file"})
    }
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log("listening on port: " +  process.env.PORT || "8080")
})