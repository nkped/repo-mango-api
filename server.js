import express from 'express';
const app = express()
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'


//middleware
dotenv.config()
app.use(express.json())
//app.use(express.urlencoded({extended:false}))
app.use(cors())

 //routes
app.get("/", (req, res) => {
    res.send('Express is here!');
})

app.post('/create', (req, res) => console.log(req.body))


//server
const port = process.env.PORT || 3001


//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));



app.listen(port, () => console.log(`Server running on port: ${port}`))