const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let shoes = [];

app.get('/', (req, res) => {
  res.send('Server is running...')
})

// Listar todos os sapatos
app.get('/shoes', (req, res) => {
  res.json(shoes);
})

// Adicionar um novo sapato
app.post('/shoes', (req, res) => {
    // const newShoe = {
    //     name: "Air Max 90",
    //     brand: "Nike",
    //     price: 720.00,
    //     size: 42,
    //     color: "cecece",
    //     url: "",
    //     stock: true
    // }
    console.log(req.body);

    res.send('Shoe added successfully!');

    // shoes.push(newShoe);
    // res.status(201).json(newShoe);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
