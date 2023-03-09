import express from 'express';
const app = express()
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'


//middleware
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())



//datamodel
const postSchema = mongoose.Schema({
    title: String,
    description: String
})

const Post = mongoose.model('post', postSchema)


//routes
app.get("/", (req, res) => {
    res.send('Express is here!');
})

app.post('/create', (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description
    }).then((doc) => console.log(doc))
})


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