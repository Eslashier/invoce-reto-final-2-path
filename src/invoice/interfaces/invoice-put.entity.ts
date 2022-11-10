import { InvoiceDetail } from './invoiceDetail.interface';

export class InvoicePutInterface {
  customerUuid: string;
  date?: string;
  invoiceDetail: InvoiceDetail[];
  total: number;
}
