require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

const postRouter = require('./routes/post')

const authRouter = require('./routes/auth')

const PORT = process.env.PORT || 5002;
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lzqrd.mongodb.net/myFirstDatabase`).then(() => {
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
}).catch(err => {
    console.log(err)
})




