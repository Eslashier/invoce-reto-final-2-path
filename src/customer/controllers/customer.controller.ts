import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import { CustomerPatchDto } from '../dto/customer-patch.dto';
import { CustomerDto } from '../dto/customer.dto';
import { Customer } from '../interfaces/customer.interface';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getCustomers(): CustomerDto[] {
    return this.customerService.getCustomers();
  }

  @Get(`/:uuid`)
  getCustomer(@Param('uuid') uuid: string): Customer | undefined {
    return this.customerService.getCustomer(uuid);
  }

  @Post()
  addCustomer(@Body() body: CustomerDto): Customer {
    return this.customerService.addCustomer(body);
  }

  @Put(`/:uuid`)
  // eslint-disable-next-line prettier/prettier
  putCustomer(@Param('uuid') uuid: string, @Body() body: CustomerDto): Customer | undefined {
    return this.customerService.putCustomer(uuid, body);
  }

  @Patch(`/:uuid`)
  // eslint-disable-next-line prettier/prettier
  patchCustomer(@Param('uuid') uuid: string, @Body() body: CustomerPatchDto): Customer | undefined {
    return this.customerService.patchCustomer(uuid, body);
  }

  @Delete(`/:uuid`)
  deleteCustomer(@Param('uuid') uuid: string) {
    return this.customerService.deleteCustomer(uuid);
  }
}
