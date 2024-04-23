import { IsEmail, IsString } from 'class-validator';

export class CreateLecturerDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
