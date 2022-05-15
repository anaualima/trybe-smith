import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../../interfaces/Order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getProducts(): Promise<Order[]> {
    const result = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Order[];
  }

  public async getAll(): Promise<Order[]> {
    const products = await this.getProducts();
    const [orders] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Orders');
    const result = orders.map((o) => ({
      id: o.id,
      userId: o.userid,
      productsIds: products.filter((p) => p.orderId === o.id)
        .map((i) => i.id),
    }));
    return result as Order[];
  }
}
