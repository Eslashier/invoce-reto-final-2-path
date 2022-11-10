import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested
} from 'class-validator';
import { InvoicePatchInterface } from '../interfaces/invoice-patch.entity';
import { InvoiceDetailDto } from './invoiceDetail.dto';

export class InvoicePatchDto implements InvoicePatchInterface {
  @IsUUID()
  customerUuid?: string;

  @IsString()
  date?: string;

  @IsArray()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  invoiceDetail?: InvoiceDetailDto[];

  @IsNumber()
  @IsNotEmpty()
  total?: number;
}
