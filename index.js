const express = require("express")
const multer = require("multer")
const path = require("path")
const crypto = require("crypto")
const app = express()
app.set("view engine" , "ejs")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    //  cb(null , `${Date.now()} - ${file.originalname}`)
    crypto.randomBytes(12,function(err,bytes){
        const fn = bytes.toString("hex") + path.extname(file.originalname)
        cb(null , fn)
    })
    }
  })
  
  const upload = multer({ storage: storage })

app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render("index")
})
app.post("/upload" , upload.single("profileimage") , (req,res)=>{
    console.log(req.file);
    return res.redirect("/")
})


app.listen(8000)
node_modules
*.env
.env
.env*