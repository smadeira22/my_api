const express = require('express')
const cors = require('cors')

const clothes = require('./clothes')
const logger = require('./logger.js')

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(logger)


app.get('/', (req, res) => {
  res.send('Hello again!')
})

app.get('/clothes', (req, res) => {
  res.send(clothes)
})

app.get('/clothes/:id', (req, res) => {
  const idx = req.params.id

  const clothing = clothes[idx - 1]
  
  if (!clothing) {
    res.status(404).json({ message: `Clothing with id ${idx} not found` })
  } else {
    res.send(clothing)
  }
})

app.post('/clothes', (req, res) => {
  // pseudocode
  // I want to retrieve information from hoppscotch
  console.log("line 36", req.body)
  // From info
  // I want to create a fruit
  const clothing = req.body
  // I want to add the fruit to my fruits array
  clothes.push(clothing)
  res.status(201).send(clothing)
})


module.exports = app