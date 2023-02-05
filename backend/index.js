const  connectToMongo = require('./db')
connectToMongo()

const express = require('express')
const app = express()
const port = 3000
const auth = require('./routes/auth')
const notes = require('./routes/notes')

app.use(express.json())
app.use('/api/auth', auth)
app.use('/api/notes', notes)
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
