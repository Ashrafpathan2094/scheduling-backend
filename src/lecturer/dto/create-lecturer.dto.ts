import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateLecturerDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}
