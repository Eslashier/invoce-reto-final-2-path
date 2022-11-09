import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  ValidationPipe
} from '@nestjs/common';
import { CustomerPatchDto } from '../dto/customer-patch.dto';
import { CustomerDto } from '../dto/customer.dto';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getCustomers(): CustomerDto[] {
    return this.customerService.getCustomers();
  }

  @Get(`/:uuid`)
  getCustomer(@Param('uuid') uuid: string): CustomerDto | undefined {
    return this.customerService.getCustomer(uuid);
  }

  @Post()
  addCustomer(@Body() body: CustomerDto): CustomerDto {
    return this.customerService.addCustomer(body);
  }

  @Put(`/:uuid`)
  // eslint-disable-next-line prettier/prettier
  putCustomer(@Param('uuid') uuid: string, @Body() body: CustomerDto): CustomerDto | undefined {
    return this.customerService.putCustomer(uuid, body);
  }

  @Patch(`/:uuid`)
  // eslint-disable-next-line prettier/prettier
  patchCustomer(@Param('uuid') uuid: string, @Body() body: CustomerPatchDto): CustomerDto | undefined {
    return this.customerService.patchCustomer(uuid, body);
  }

  @Delete(`/:uuid`)
  deleteCustomer(@Param('uuid') uuid: string) {
    return this.customerService.deleteCustomer(uuid);
  }
}
