const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());
const categories = require('./data/category.json');


app.get('/', (req, res) => {
    res.send('News API runnig')
})
app.get('/news-categories', (req, res) => {
    res.send(categories)
})
app.listen(port, () => {
    console.log(`news app listening on port ${port}`)
})