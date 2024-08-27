const express = require('express')
const sqlite3 = require('sqlite3');
const cors = require('cors')





const app = express()
const port = 3000

app.use(cors())





app.get('/', (req, res) => {
  res.sendFile("/home/darthman/code/random-quote-gen/random-quote-gen/backend/db/quotes.json");
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
