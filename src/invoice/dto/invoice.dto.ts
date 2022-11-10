import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested
} from 'class-validator';
import { InvoiceInterface } from '../interfaces/invoice.entity';
import { InvoiceDetailDto } from './invoiceDetail.dto';

export class InvoiceDto implements InvoiceInterface {
  @IsUUID()
  uuid: string;

  @IsUUID()
  customerUuid: string;

  @IsString()
  date?: string;

  @IsArray()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  invoiceDetail: InvoiceDetailDto[];

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
