import express from 'express';
import { PrismaClient } from './generated/prisma/index.js';

const app = express()
const port = 3000;

const prisma = new PrismaClient()

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
app.post('/shoes', async (req, res) => {
  console.log(req.body);
  const { name, size, color, brand, price, photoUrl, stock } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  if (!size) {
    return res.status(400).json({ error: 'Size is required.' });
  }

  if (!color) {
    return res.status(400).json({ error: 'Color is required.' });
  }

  await prisma.shoes.create({
    data: {
      name,
      size,
      color,
      brand,
      price,
      photoUrl,
      stock
    }
  })
  // console.log(req.body);

  res.status(201).json({ name, size, color });

  // shoes.push(newShoe);
  // res.status(201).json(newShoe);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
