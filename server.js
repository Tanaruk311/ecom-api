// step import ....
const express = require("express");
const app = express ();
const morgan = require("morgan");
const {readdirSync, read} = require("fs");
const { log } = require("console");
const cors = require("cors");


// middleware
app.use(morgan("dev"));
app.use(express.json({limit: "20mb"}));
app.use(cors());







readdirSync("./routes")
.map((c)=> app.use("/api", require(`./routes/` +c)))


// const authRouter = require("./routes/auth");
// const categoryRouter = require("./routes/category");

// app.use("/api", authRouter);
// app.use("/api", categoryRouter);



//  step 3 router
// app.post("/api", (req, res) => {
//     //code 
//     const { username,password} = req.body
//     console.log(username, password);
//     res.send("hello world")
// })


// step 2 start server


app.listen(5001, () => {
console.log("server is running on port 5001");

})