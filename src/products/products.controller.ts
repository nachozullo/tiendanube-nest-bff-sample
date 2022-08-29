import { CreateProductDto } from './dtos/create-product.dto';
import { ProductsService } from './products.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateProductCategoryDto } from './dtos/update-product-category.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getProduct(@Param('id') id: string) {
    return this.productsService.getOneById(id);
  }

  @Put('/:id/categories')
  updateProductCategory(
    @Param('id') id: string,
    @Body() body: UpdateProductCategoryDto,
  ) {
    console.log(body);
    return this.productsService.updateProductById(id, body);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProductById(id);
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    return this.productsService.createProduct(body);
  }
}
