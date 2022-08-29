import { CreateProductDto } from './dtos/create-product.dto';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

const API_URL = 'https://api.tiendanube.com/v1/2349817/products';

@Injectable()
export class ProductsService {
  constructor(private readonly httpService: HttpService) {}

  getAll() {
    return this.httpService.get(API_URL);
  }

  getOneById(id: string) {
    return this.httpService.get(`${API_URL}/${id}`);
  }

  updateProductById(id: string, body: any) {
    return this.httpService.put(`${API_URL}/${id}`, body);
  }

  deleteProductById(id: string) {
    return this.httpService.delete(`${API_URL}/${id}`);
  }

  createProduct(body: CreateProductDto) {
    return this.httpService.post(API_URL, body);
  }
}
