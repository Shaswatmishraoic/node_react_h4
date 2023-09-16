const express = require("express");
const cors = require("cors")
const route = require("./routes/category");
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.port
const app = express();
app.use(express.json())

app.use(cors({
    origin: "*"
}))
app.use("/api/category",route)
app.listen(port,()=>{
    console.log(`${port} is working`)
})