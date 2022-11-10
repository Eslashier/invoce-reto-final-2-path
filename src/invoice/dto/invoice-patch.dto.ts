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
import { InvoicePatchInterface } from '../interfaces/invoice-patch.entity';
import { InvoiceDetailDto } from './invoiceDetail.dto';

export class InvoicePatchDto implements InvoicePatchInterface {
  @IsUUID()
  @IsOptional()
  customerUuid?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsArray()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  @IsOptional()
  invoiceDetail?: InvoiceDetailDto[];

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  total?: number;
}
