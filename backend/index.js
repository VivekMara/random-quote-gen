const express = require('express')
const sqlite3 = require('sqlite3');
const cors = require('cors')
const path = require('node:path')




const app = express()
const port = 3000

app.use(cors())

const root = __dirname
console.log(root)

app.get('/', (req,res) => {
  res.send("Hello darthman")
})


app.get('/quote', (req, res) => {
  res.sendFile(`${root}/db/quotes.json`);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
