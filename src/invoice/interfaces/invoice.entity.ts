import { InvoiceDetail } from './invoiceDetail.interface';

export class InvoiceInterface {
  uuid: string;
  customerUuid: string;
  date?: string;
  invoiceDetail: InvoiceDetail[];
  total: number;
}
