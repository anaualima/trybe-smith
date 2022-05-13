import connection from '../models/connection';
import ProdudctModel from '../models/product.model';
import Product from '../../interfaces/Product.interfaces';

class ProductService {
  public model: ProdudctModel;

  constructor() {
    this.model = new ProdudctModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;