import { InvoiceDetail } from './invoiceDetail.interface';

export class InvoicePatchInterface {
  customerUuid?: string;
  date?: string;
  invoiceDetail?: InvoiceDetail[];
  total?: number;
}
