import { ProductsService } from './products.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProductsController } from './products.controller';

const API_TOKEN = '551c162cc51823231a23e31010mna815e6114694';

const CUSTOM_HEADERS = {
  'User-Agent': 'MyApp (ignaciozullo@gmail.com)',
  Authentication: `bearer ${API_TOKEN}`,
};

@Module({
  imports: [HttpModule.register({ headers: CUSTOM_HEADERS })],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
