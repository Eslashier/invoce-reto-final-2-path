import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidGen } from 'uuid';
import { InvoicePatchDto } from '../dto/invoice-patch.dto';
import { InvoiceDto } from '../dto/invoice.dto';
import { InvoiceInterface } from '../interfaces/invoice.entity';
import { InvoicePutDto } from '../dto/invoice-put.dto';
@Injectable()
export class InvoiceService {
  invoices: InvoiceInterface[] = [
    {
      uuid: uuidGen().toString(),
      customerUuid: uuidGen(),
      date: new Date().toISOString(),
      invoiceDetail: [
        {
          uuid: uuidGen().toString(),
          name: 'Queso crema',
          description: 'Queso crema 200g',
          price: 8000,
          quantity: 1
        }
      ],
      total: 8000
    },
    {
      uuid: uuidGen().toString(),
      customerUuid: uuidGen(),
      date: new Date().toISOString(),
      invoiceDetail: [
        {
          uuid: uuidGen().toString(),
          name: 'Jamón',
          description: 'Jamón 500g',
          price: 14000,
          quantity: 1
        }
      ],
      total: 14000
    },
    {
      uuid: uuidGen().toString(),
      customerUuid: uuidGen(),
      date: new Date().toISOString(),
      invoiceDetail: [
        {
          uuid: uuidGen().toString(),
          name: 'Pan de molde',
          description: 'Pan de molde 400g',
          price: 5000,
          quantity: 1
        }
      ],
      total: 5000
    }
  ];

  getInvoices(): InvoiceDto[] {
    return this.invoices;
  }
  getInvoice(uuid: string): InvoiceDto | undefined {
    if (this.invoices.find((invoice) => invoice.uuid === uuid)) {
      return this.invoices.find((invoice) => invoice.uuid === uuid);
    }
    throw new NotFoundException('Invoice not found');
  }

  addInvoice(invoice: InvoicePutDto): InvoiceDto {
    let invoiceToCreate = new InvoiceDto();
    const uuid: string = uuidGen();
    const date: string = new Date().toISOString();
    invoiceToCreate = { uuid, date, ...invoice };
    this.invoices = [...this.invoices, invoiceToCreate];
    return invoiceToCreate;
  }

  putInvoice(uuid: string, invoice: InvoicePutDto): InvoiceDto | undefined {
    if (this.invoices.find((invoice) => invoice.uuid === uuid)) {
      const index = this.invoices.findIndex((invoice) => invoice.uuid === uuid);
      let invoiceToUpdate = new InvoiceDto();
      invoiceToUpdate = { uuid, ...invoice };
      this.invoices[index] = invoiceToUpdate;
      return this.invoices[index];
    }
    throw new NotFoundException('Invoice not found');
  }

  // eslint-disable-next-line prettier/prettier
  patchInvoice(uuid: string, invoice: InvoicePatchDto): InvoiceDto | undefined{
    if (this.invoices.find((invoice) => invoice.uuid === uuid)) {
      const index = this.invoices.findIndex((invoice) => invoice.uuid === uuid);
      const invoiceToUpdate = { ...this.invoices[index], ...invoice };
      this.invoices[index] = invoiceToUpdate;
      return this.invoices[index];
    }
    throw new NotFoundException('Invoice not found');
  }

  deleteInvoice(uuid: string): boolean {
    if (this.invoices.find((invoice) => invoice.uuid === uuid)) {
      const index = this.invoices.findIndex((invoice) => invoice.uuid === uuid);
      this.invoices.splice(index, 1);
      return true;
    }
    throw new NotFoundException('Invoice not found');
  }
}
