const router = require('express').Router()
const { models: { Stock }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const stock = await Stock.findAll({})
    res.json(stock)
  } catch (err) {
    next(err)
  }
})
