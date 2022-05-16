import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../../interfaces/Order.interface';
import TableOrders from '../../interfaces/tableOrder.iterface';
import Product from '../../interfaces/Product.interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getProducts(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    // console.log(rows);
    
    return rows as Product[];
  }

  public async getAll(): Promise<Order[]> {
    const products = await this.getProducts();
    const [orders] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Orders');
    // console.log(orders);
    const orders1 = JSON.parse(JSON.stringify(orders));
    // console.log(orders1);
    const result = orders1.map((o:TableOrders) => ({      
      id: o.id,
      userId: o.userId,
      productsIds: products.filter((p) => p.orderId === o.id)
        .map((i) => i.id),
    }));
    console.log(result);
    
    return result as Order[];
  }
}
