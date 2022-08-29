import { IsArray } from 'class-validator';

export class UpdateProductCategoryDto {
  @IsArray()
  categories: number[];
}
