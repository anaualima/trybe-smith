import express from 'express';
import product from '../routes/product.routes';
import user from '../routes/user.routes';
import order from '../routes/order.routes';

const app = express();

app.use(express.json());

app.use('/products', product);
app.use('/users', user);
app.use('/orders', order);

export default app;
