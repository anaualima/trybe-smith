import express from 'express';
import product from '../routes/product.routes';
import user from '../routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', product);
app.use('/users', user);

export default app;
