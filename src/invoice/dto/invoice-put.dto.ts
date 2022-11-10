import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested
} from 'class-validator';
import { InvoicePutInterface } from '../interfaces/invoice-put.entity';
import { InvoiceDetailDto } from './invoiceDetail.dto';

export class InvoicePutDto implements InvoicePutInterface {
  @IsUUID()
  customerUuid: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsArray()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  invoiceDetail: InvoiceDetailDto[];

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
