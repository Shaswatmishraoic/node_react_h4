const route = require("express").Router();
const { Dashboard, profile } = require("../controller/articleController");
const { register, login,} = require("../controller/usercontroller");
const authMiddleware = require("../middleware/userAuth");

route.post("/register",register)
route.post("/login",login)
route.get("/Dashboard",authMiddleware,Dashboard)
route.post("/profile",authMiddleware,profile)
module.exports = route;