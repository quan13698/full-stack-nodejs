import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import webRoute from './routes/routers'
import path from 'path'
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3001
app.use(express.json())
app.use(bodyParser(urlencoded({extended: true})));
app.set("views", path.join(__dirname, "views"));

app.use('/api', webRoute);
app.listen(port, () => {
    console.log(`server start on port ${port}`);
})

module.exports = app