import express from 'express';
import product from '../routes/product.routes';

const app = express();

app.use(express.json());

app.use('/products', product);

export default app;
