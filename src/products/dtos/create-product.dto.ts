import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsArray()
  @IsOptional()
  categories?: number[];

  @IsString()
  @IsOptional()
  video_url?: string;
}
