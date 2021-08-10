const express = require('express')
const Cars = require('./cars-model')
const { checkCarId } = require('./cars-middleware')
const router = express.Router()

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            next(err)
        })
})


module.exports = router;