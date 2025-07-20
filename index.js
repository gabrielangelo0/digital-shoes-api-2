import express from 'express';

import cors from 'cors';
import routes from './src/routes/routes.route.js';

const app = express()
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
  res.send('Server is running...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
