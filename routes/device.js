const express = require('express')
const router = express.Router()

// 引入文件系统
const fs = require('fs')

router.get('/', (req, res, next) => {
  fs.readFile('./data/device.json', 'utf8', (error, data) => {
    
    if(error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
})

router.get('/:deviceNo', (req, res, next) => {
  fs.readFile('./data/device.json', 'utf8', (error, data) => {
    
    if(error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
})

module.exports = router