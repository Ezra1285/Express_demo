const express = require('express')
const app = express()
const port = 5068

app.get('/', (req, res) => {
  res.send('Hello World! \
            Good to meet you I am Ezra! OR am I??? ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})