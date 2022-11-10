import { IsNumber, IsString, IsUUID, Max, Min } from 'class-validator';
import { InvoiceDetail } from '../interfaces/invoiceDetail.interface';

export class InvoiceDetailDto implements InvoiceDetail {
  @IsUUID()
  uuid?: string;
  @IsString({
    message: 'name should be a string'
  })
  name: string;
  @IsString({
    message: 'description should be a string'
  })
  description: string;
  @IsNumber()
  @Min(50)
  @Max(10000000)
  price: number;
  @IsNumber()
  @Min(1)
  quantity: number;
}
