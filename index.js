require('dotenv').config()

const express = require('express')

const app = express()
// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home',(req,res)=>{
    res.send('this is home page')
})
app.get('/login',(req,res)=>{
    res.send('<h1>this is login page <h1/>')
})
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
})