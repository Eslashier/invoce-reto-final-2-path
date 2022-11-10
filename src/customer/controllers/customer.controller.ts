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
import { CustomerDto } from '../dto/customer.dto';
import { CustomerPutDto } from '../dto/customer-put.dto';
import { CustomerPatchDto } from '../dto/customer-patch.dto';
import { CustomerService } from '../services/customer.service';
import { NullLastnameInterceptor } from '../interceptor/nullLastname.interceptor';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  @UseInterceptors(NullLastnameInterceptor)
  getCustomers(): CustomerDto[] {
    return this.customerService.getCustomers();
  }

  @Get(`/:uuid`)
  @UseInterceptors(NullLastnameInterceptor)
  getCustomer(@Param('uuid') uuid: string): CustomerDto | undefined {
    return this.customerService.getCustomer(uuid);
  }

  @Post()
  @UseInterceptors(NullLastnameInterceptor)
  @UseGuards(AuthorizationGuard)
  addCustomer(@Body() body: CustomerPutDto): CustomerDto {
    return this.customerService.addCustomer(body);
  }

  @Put(`/:uuid`)
  @UseInterceptors(NullLastnameInterceptor)
  @UseGuards(AuthorizationGuard)
  // eslint-disable-next-line prettier/prettier
  putCustomer(@Param('uuid') uuid: string, @Body() body: CustomerPutDto): CustomerDto | undefined {
    return this.customerService.putCustomer(uuid, body);
  }

  @Patch(`/:uuid`)
  @UseInterceptors(NullLastnameInterceptor)
  @UseGuards(AuthorizationGuard)
  // eslint-disable-next-line prettier/prettier
  patchCustomer(@Param('uuid') uuid: string, @Body() body: CustomerPatchDto): CustomerDto | undefined {
    return this.customerService.patchCustomer(uuid, body);
  }

  @Delete(`/:uuid`)
  @UseGuards(AuthorizationGuard)
  deleteCustomer(@Param('uuid') uuid: string) {
    return this.customerService.deleteCustomer(uuid);
  }
}
