const express = require('express')
const router = express.Router()
// 引入文件系统
const fs = require('fs')



router.post('/', (req, res, next) => {
  // console.log(path.join(__dirname, 'data'));
  // console.log(__dirname);
  // const fileRoute = fs.readdirSync('./data')
  // console.log(fileRoute);
  // const fileStream = fs.readFileSync('./data/menu.json')
  console.log(req.query);
  fs.readFile('./data/menu.json', 'utf8', (error, data) => {
    if(error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
})

router.post('/:device', (req, res, next) => {
  fs.readFile('./data/menu.json', 'utf8', (error, data) => {
    console.log(req.params);
    if(error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
})

module.exports = router