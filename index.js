const express = require("express");
const route = require("./routes/category");
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const app = express();
const port = process.env.port

app.use(cors({
    origin: "*"
}))
app.use(express.json())
app.use("/api/category",route)
app.listen(port,()=>{
    console.log(`${port} is working`)
})