const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('发送成功！')
})

module.exports = router
