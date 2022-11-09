import { IsEmail, IsString, Length } from 'class-validator';
export class CustomerDto {
  @IsString()
  @Length(2, 50)
  name: string;
  @IsString()
  @Length(2, 50)
  lastName: string;
  @IsString()
  @Length(6, 10)
  passport: string;
  @IsString()
  @Length(10, 10)
  phoneNumber: string;
  @IsEmail()
  email: string;
}
