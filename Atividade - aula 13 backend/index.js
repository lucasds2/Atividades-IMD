const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.get('/token', (req, res) => {
    const randomValue =  Math.random()

    const payload = {randomNumber: randomValue}

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'}, (err, token) => {
        if(err){
            res.status(500).json({ error: 'Erro ao gerar o token'})
        }else{
            res.json({ token })
        }
    })
})

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})