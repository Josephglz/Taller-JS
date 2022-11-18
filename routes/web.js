const express = require('express')
const router = express.Router()
const db = require('../db/db')
router.use(express.json());

router.get('/', (req, res) => {
    db.consultas.listaCarpetas()
    .then((result) => {
        res.render('index', 
        {
            status: result.status == 200 ? 1 : 0,
            data: result.data
        })
    })
    .catch((err) => {
        res.status(err.status).json(err.error);
    })
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.get('/detalles/:id', (req, res) => {
    db.consultas.detallesCarpetas(req.params.id)
    .then((result) => {
        if(result.status === 200){
            res.render('detalles', 
            {
                data: result.data[0],
                img: result.images.length == 0 ? 0 : 1,
                imagenes: result.images
            })
        }else{
            res.json(result.data)
        }
    })
})

router.get('*', function(req, res){
    res.status(404).send('404 Not Found');
});


module.exports = router
