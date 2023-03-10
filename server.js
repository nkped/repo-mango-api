import express from 'express';
const app = express()
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'


//middleware
app.use(express.json())
dotenv.config()
//app.use(express.urlencoded({extended:false}))
app.use(cors())



//datamodel
const postSchema = mongoose.Schema({
    title: String,
    description: String
})

const Post = mongoose.model('post', postSchema)


//routes
app.get("/", (req, res) => {
    res.send('Express is here!')
})

app.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description
    }).then((doc) => console.log(doc)).catch((err) => console.log(err))
})


app.get('/posts', (req, res) => {
    Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err))
})

//server
//const port = process.env.PORT || 3001


//db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected...'))



app.listen(3001, () => console.log('Server running on port 3001'))

//`Server running on port: ${port}`