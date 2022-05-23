const router = require('express').Router()
const { models: { Stock }} = require('../db')
module.exports = router


//These are all mounted on /api Stock
//route to get all Stock Items
router.get('/', async (req, res, next) => {
  try {
    const stock = await Stock.findAll();
    res.json(stock)
  } catch (err) {
    next(err)
  }
 })

 //route to edit items
router.post('/:name', async(req, res, next) => {
  try{
    const item = await Stock.create(req.body);
    res.json(item);
  }catch(err){
      next(err)
  }
})

//route to edit items
router.put('/:name', async(req, res, next) => {
    try{
      const item = await Stock.findByPk(req.params.name);
      res.send(await item.update(req.body));
    }catch(err){
        next(err)
    }
})

//route to delete items
router.delete('/:name', async(req, res, next) => {
    try{
      const item = await Stock.findByPk(req.params.name);
      await item.destroy();
    }catch(err){
        next(err)
    }
})