import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerDto } from '../dto/customer.dto';
import { CustomerPatchDto } from '../dto/customer-patch.dto';
import { v4 as uuidGen } from 'uuid';
import { Customer } from '../interfaces/customer.interface';
@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    {
      uuid: '1',
      name: 'Juan Pablo',
      lastName: 'Montoya',
      passport: '123456789',
      phoneNumber: '3000000000',
      email: 'juan.montoya@gmail.com'
    },
    {
      uuid: '2',
      name: 'Mika',
      lastName: 'Hakkinen',
      passport: '0987654321',
      phoneNumber: '3100000000',
      email: 'mika.hakkinen@gmail.com'
    },
    {
      uuid: '3',
      name: 'Colin',
      lastName: 'McRae',
      passport: '999999999',
      phoneNumber: '3200000000',
      email: 'colin.mcrae@gmail.com'
    }
  ];

  getCustomers(): Customer[] {
    return this.customers;
  }
  getCustomer(uuid: string): Customer | undefined {
    if (this.customers.find((customer) => customer.uuid === uuid)) {
      return this.customers.find((customer) => customer.uuid === uuid);
    }
    throw new NotFoundException('Customer not found');
  }

  addCustomer(customer: CustomerDto): Customer {
    let customerToCreate = new Customer();
    const uuid: string = uuidGen();
    customerToCreate = { uuid, ...customer };
    this.customers = [...this.customers, customerToCreate];
    return customerToCreate;
  }

  putCustomer(uuid: string, customer: CustomerDto): Customer | undefined {
    if (this.customers.find((customer) => customer.uuid === uuid)) {
      const index = this.customers.findIndex(
        (customer) => customer.uuid === uuid
      );
      let customerToUpdate = new Customer();
      customerToUpdate = { uuid, ...customer };
      this.customers[index] = customerToUpdate;
      return this.customers[index];
    }
    throw new NotFoundException('Customer not found');
  }

  // eslint-disable-next-line prettier/prettier
  patchCustomer(uuid: string, customer: CustomerDto | CustomerPatchDto): Customer {
    if (this.customers.find((customer) => customer.uuid === uuid)) {
      const index = this.customers.findIndex(
        (customer) => customer.uuid === uuid
      );
      const customerToUpdate = { ...this.customers[index], ...customer };
      this.customers[index] = customerToUpdate;
      return this.customers[index];
    }
    throw new NotFoundException('Customer not found');
  }

  deleteCustomer(uuid: string): boolean {
    if (this.customers.find((customer) => customer.uuid === uuid)) {
      // eslint-disable-next-line prettier/prettier
      const index = this.customers.findIndex((customer) => customer.uuid === uuid);
      this.customers.splice(index, 1);
      return true;
    }
    throw new NotFoundException('Customer not found');
  }
}
