const express = require('express')
const router = express.Router()

// 引入文件系统
const fs = require('fs')

router.post('/', (req, res, next) => {
  fs.readFile('./data/device.json', 'utf8', (error, data) => {
    
    if(error) {
      res.send(error)
    } else {
      console.log('========>', JSON.parse(data));
      res.send(JSON.parse(data))
    }
  })
})

router.post('/:deviceNo', (req, res, next) => {
  fs.readFile('./data/device.json', 'utf8', (error, data) => {
    
    if(error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
})

module.exports = router