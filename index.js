require(`dotenv`).config()
const express = require('express')
const connection = require ('./db-config')

const app = express()

connection.connect((error) => {
    if (error){
        console.error(error)
    }
    else {
        console.log('App connected to MySQL !')
    }
})

app.get('/thing', (req,res) => {
    connection.query('SELECT * FROM thing', (error, result) => {
        if (error) {
            console.error(error)
            res.status(500).send('Error while retrieving things.')
        }
        else{
            res.status(200).json(result)
        }
    })
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} `)
})