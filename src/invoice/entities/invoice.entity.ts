import { InvoiceDetail } from './invoiceDetail.entity';

export class Invoice {
  uuid: string;
  customerUuid: string;
  date?: string;
  invoiceDetail: InvoiceDetail[];
  total: number;
}
