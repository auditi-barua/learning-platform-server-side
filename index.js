const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./Data/categories.json');
const information = require('./Data/information.json');

app.get('/', (req, res) => {
    res.send('api running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/information', (req, res) => {
    res.send(information);
})
app.get('/bycategory/:id', (req, res) => {
    const id = req.params.id;
    const courseItem = information.filter(item => item.id == id);
    res.send(courseItem);
});



app.listen(port, () => {
    console.log('programmin server running', port)
})