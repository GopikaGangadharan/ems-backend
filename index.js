require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./Routes/router')

const server = express()
const PORT = 4000 || process.env.PORT

// export upload folder to client
server.use('/uploads',express.static('./uploads'))

server.use(cors())
server.use(express.json())
server.use(router)

server.listen(PORT,()=>{
    console.log(`EMS Server  started at port number ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send("EMS server started...")
})