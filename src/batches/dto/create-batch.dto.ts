import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBatchDto {
  @IsString()
  @IsNotEmpty()
  batchName: string;

  @IsString()
  @IsNotEmpty()
  courseId: string;

  @IsString()
  @IsNotEmpty()
  start: string;

  @IsString()
  @IsNotEmpty()
  end: string;
}

export class courseIdWhileFindAll {
  @IsString()
  @IsNotEmpty()
  courseId: string;
}
