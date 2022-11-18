const express = require('express')
const router = express.Router()
const db = require('../db/db')
router.use(express.json());

router.post('/api/carpetas', (req, res) => {
    db.consultas.listaCarpetas()
    .then((result) => {
        if(result.status === 200){
            res.json(result.data)
        }else{
            res.json(result.data)
        }
    })
    .catch((err) => {
        res.status(err.status).json(err.error);
    })
})

router.post('/api/carpetas/crear', (req, res) => {
    db.consultas.insertarCarpetas(req.body)
    .then((result) => {
        if(result.status === 200){
            res.json(result.data)
        }else{
            res.json(result.data)
        }
    })
    .catch((err) => {
        res.status(err.status).json(err.error);
    })
})

module.exports = router;