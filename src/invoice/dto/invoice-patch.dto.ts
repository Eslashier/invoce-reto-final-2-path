import { PartialType } from '@nestjs/mapped-types';
import { InvoiceDto } from './invoice.dto';

export class InvoicePatchDto extends PartialType(InvoiceDto) {}
