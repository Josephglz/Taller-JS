const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

//CONFIGURACIONES
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'))
hbs.registerPartials(path.join(__dirname, './views/partials'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '100mb' }))

//DIRECTORIOS ESTÁTICOS
app.use(express.static(path.join(__dirname, './assets')))
app.use(require('./routes/index'))

hbs.registerHelper('fecha', (value) => {
    const fecha = new Date(value);
    return fecha.toLocaleDateString();
})

//SERVIDOR
app.listen(3000, () => {
    console.log('[SERVIDOR]: Iniciando servidor...')
})
.on('listening', () => {
    console.log('[SERVIDOR]: Servidor iniciado.')
})
.on('error', (err) => {
    console.log('[SERVIDOR]: Error al iniciar servidor.')
    console.log(err)
})
.on('close', () => {
    console.log('[SERVIDOR]: Se ha cerrado el servidor.')
})