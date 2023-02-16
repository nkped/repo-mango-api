
import express from 'express';
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.get("/", (req, res) => {
    res.send('Hello World!');
})

app.get("/holy", (req, res) => {
    res.send('smoke!!!');
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))