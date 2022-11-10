import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthorizationGuard } from 'src/guard/authorization.guard';
import { InvoiceDto } from '../dto/invoice.dto';
import { InvoiceService } from '../services/invoice.service';
import { InvoicePutDto } from '../dto/invoice-put.dto';
import { InvoicePatchDto } from '../dto/invoice-patch.dto';
import { NullDateInterceptor } from '../interceptor/nullDate.interceptor';


@Controller('invoice')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Get()
  @UseInterceptors(NullDateInterceptor)
  getInvoices(): InvoiceDto[] {
    return this.invoiceService.getInvoices();
  }

  @Get(`/:uuid`)
  @UseInterceptors(NullDateInterceptor)
  getInvoice(@Param('uuid') uuid: string): InvoiceDto | undefined {
    return this.invoiceService.getInvoice(uuid);
  }

  @Post()
  @UseInterceptors(NullDateInterceptor)
  @UseGuards(AuthorizationGuard)
  addInvoice(@Body() body: InvoicePutDto): InvoiceDto {
    return this.invoiceService.addInvoice(body);
  }

  @Put(`/:uuid`)
  @UseInterceptors(NullDateInterceptor)
  @UseGuards(AuthorizationGuard)
  // eslint-disable-next-line prettier/prettier
  putInvoice(@Param('uuid') uuid: string, @Body() body: InvoicePutDto): InvoiceDto | undefined {
    return this.invoiceService.putInvoice(uuid, body);
  }

  @Patch(`/:uuid`)
  @UseInterceptors(NullDateInterceptor)
  @UseGuards(AuthorizationGuard)
  // eslint-disable-next-line prettier/prettier
  patchInvoice(@Param('uuid') uuid: string, @Body() body: InvoicePatchDto): InvoiceDto | undefined {
    return this.invoiceService.patchInvoice(uuid, body);
  }

  @Delete(`/:uuid`)
  @UseGuards(AuthorizationGuard)
  deleteInvoice(@Param('uuid') uuid: string) {
    return this.invoiceService.deleteInvoice(uuid);
  }
}
