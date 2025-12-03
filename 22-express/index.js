const express = require('express')
const app = express()

app.all('/opa', (req, res) => {
    res.send('<h1>Estou bem!</h1>')
})
app.listen(3000, () => {
    console.log("Backend Ativo...")
})