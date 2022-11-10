import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { InvoicePatchDto } from '../dto/invoice-patch.dto';
import { InvoiceDto } from '../dto/invoice.dto';
import { Invoice } from '../interfaces/invoice.entity';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  getInvoices(): InvoiceDto[] {
    return this.invoiceService.getInvoices();
  }

  @Get(`/:uuid`)
  getInvoice(@Param('uuid') uuid: string): Invoice | undefined {
    return this.invoiceService.getInvoice(uuid);
  }

  @Post()
  @UseGuards(AuthorizationGuard)
  addInvoice(@Body() body: InvoiceDto): Invoice {
    return this.invoiceService.addInvoice(body);
  }

  @Put(`/:uuid`)
  @UseGuards(AuthorizationGuard)
  // eslint-disable-next-line prettier/prettier
  putInvoice(@Param('uuid') uuid: string, @Body() body: InvoiceDto): Invoice | undefined {
    return this.invoiceService.putInvoice(uuid, body);
  }

  @Patch(`/:uuid`)
  @UseGuards(AuthorizationGuard)
  // eslint-disable-next-line prettier/prettier
  patchInvoice(@Param('uuid') uuid: string, @Body() body: InvoicePatchDto): Invoice | undefined {
    return this.invoiceService.patchInvoice(uuid, body);
  }

  @Delete(`/:uuid`)
  @UseGuards(AuthorizationGuard)
  deleteInvoice(@Param('uuid') uuid: string) {
    return this.invoiceService.deleteInvoice(uuid);
  }
}
