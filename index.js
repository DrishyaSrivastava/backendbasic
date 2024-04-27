const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {
    res.send('<h1>please login to dstnkt</h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>drish changes destiny</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 