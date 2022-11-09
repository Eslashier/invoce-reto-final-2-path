import { IsNumber, IsString, IsUUID, Max, Min } from 'class-validator';

export class InvoiceDetailDto {
  @IsUUID()
  uuid?: string;
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  @Min(50)
  @Max(10000000)
  price: number;
  @IsNumber()
  @Min(1)
  quantity: number;
}
