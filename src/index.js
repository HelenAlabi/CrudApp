const express = require('express');
const dotenv = require('dotenv');
const userRoute = require('./routers/userRoute');
dotenv.config({path:"./confidential.env"})

const app = express()
//MIDDLEWARE FOR LINE 11-19
app.use(express.json())
const PORT = process.env.PORT

// //endpoint - http://localhost:1010
// app.get("/", (req, res)=>{
//     return res.status(200).json("Hello API world")
// });

// //endpont -http://localhost:1010/create
// app.post("/create", (req, res)=>{
//     console.log(req.body);
// })

//ROUTES MIDDLEWARE
app.use(userRoute)



app.listen(PORT, ()=>{console.log(`app port listening to port ${PORT}`);})