import './styles/globals.css'

const express = require('express')
const app = express()
require('dotenv').config()

const context = require('./context')

const auth = require('./routes/auth')
const load = require('./routes/load')
const uninstall = require('./routes/uninstall')
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/auth', auth)
app.use('/load', load)
app.use('/uninstall', uninstall)

app.get('/getdata',()=>{
  console.log(context.get('name'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})