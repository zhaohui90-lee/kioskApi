const express = require('express')
const router = express.Router()
// 引入文件系统
const fs = require('fs')



router.post('/', (req, res, next) => {
  console.log(req.query);
  fs.readFile('./data/softwareVersion.json', 'utf8', (error, data) => {
    if(error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
})

module.exports = router