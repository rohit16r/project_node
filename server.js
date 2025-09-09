import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import mongoose from "mongoose"
import multer from "multer"
import register from './controllers/userController.js'
import router from './routes/singnuproutes.js'
import bodyParser from "body-parser"
import loginin from "./routes/loginRoutes.js";  
const app = express()
const port = 3000
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
// connecting routes to server.js
//connecting views with server.js
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(bodyParser.urlencoded({extended:true}))

// connecting public to server.js
app.use(express.static (path.join(__dirname,"public")))
//configure uploads or multer 
const storage_1=multer.diskStorage({

            destination:(req,file,cb)=>{
                cb(null,"uploads/")
            },
            filename:(req,file,cb)=>{
                cb(null,Date.now()+"_"+file.originalname)
            }


})

const upload_1=multer({storage:storage_1})

// connecting data base
const dburl = "mongodb+srv://rohit16r:Rohit%40843120@cluster0.mzrcdcn.mongodb.net/test";

mongoose.connect(dburl)
.then(() => {
    console.log("✅ Database connected");
})
.catch((error) => {
    console.error("❌ DB not connected", error.message);
});

// GET route
app.post("/register",upload_1.fields([
    {name:"image",maxCount:1},
    {name:"marksheet",maxCount:1},
    {name:"video",maxCount:1},
]),register)
// signup routes 
app.use("/", router);
//  login routes
app.use("/", loginin);

app.get("/", (req, res) => {
res.render("index.ejs")
})

app.get("/gallery", (req, res)=>res.render("gallery"))
app.get("/contact", (req, res)=>res.render("contact"))
app.get("/service", (req, res)=>res.render("service"))
app.get("/news", (req, res)=>res.render("news"))
app.get("/singup", (req, res)=>res.render("singup"))
app.get("/login", (req, res)=>res.render("login"))
app.get("/registration", (req, res)=>res.render("registration"))
// index .ejs
  app.get ("/getStarted",(req,res)=>res.render("gallery"))
// server listen
app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`)
})
