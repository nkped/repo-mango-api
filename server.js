import express from 'express';
const app = express()
import mongoose from 'mongoose';
import cors from 'cors'


const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.get("/", (req, res) => {
    res.send('Express is here!');
})

app.post('/create', (req, res) => console.log(req.body))

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))