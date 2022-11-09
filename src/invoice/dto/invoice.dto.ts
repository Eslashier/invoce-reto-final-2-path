import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  ValidateNested
} from 'class-validator';
import { InvoiceDetailDto } from './invoiceDetail.dto';

export class InvoiceDto {
  @IsString()
  @Length(36, 36)
  customerUuid: string;

  @IsArray()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  invoiceDetail: InvoiceDetailDto[];

  @IsNumber()
  @IsNotEmpty()
  total: number;
}
