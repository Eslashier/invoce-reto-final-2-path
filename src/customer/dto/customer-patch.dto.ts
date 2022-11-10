import { IsEmail, IsString, Length } from 'class-validator';
import { CustomerPatchInterface } from '../interfaces/customer-patch.interface';

export class CustomerPatchDto implements CustomerPatchInterface {
  @IsString({
    message: 'Name should be a string'
  })
  @Length(2, 50)
  name?: string;
  @IsString({
    message: 'Lastname should be a string'
  })
  @Length(2, 50)
  lastName?: string;
  @IsString({
    message: 'Passport should be a string'
  })
  @Length(6, 10)
  passport?: string;
  @IsString({
    message: 'Phonenumber should be a string'
  })
  @Length(10, 10, {
    message: 'Phonenumber should have a length of 10'
  })
  phoneNumber?: string;
  @IsEmail({
    message: 'Correo debe de tener la forma ejemplo@dominio.com'
  })
  email?: string;
}
