const express = require('express')
const router = express.Router()
// Controllers
const {adminCheck, authCheck} = require('../middlewares/authCheck')
const { create,
    list,
    read,
    update,
    remove,
    listby,
    searchFilters,
    createImages,
    removeImage
} = require('../controllers/product')

// @ENDPOINT http://localhost:5001/api/product
router.post('/product', create)
router.get('/products/:count', list)
router.get('/product/:id', read)
router.put('/product/:id', update)
router.delete('/product/:id', remove)
router.post('/productby', listby)
router.post('/search/filters', searchFilters)


// uploadfiles path 
// @ENDPOINT http://localhost:5001/api/images
router.post("/images",authCheck, adminCheck,  createImages)
router.post("/removeimages",authCheck, adminCheck, removeImage)





module.exports = router