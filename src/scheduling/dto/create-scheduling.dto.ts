import { IsDate, IsMongoId } from 'class-validator';
// import { ObjectId } from 'mongoose';

export class CreateSchedulingDto {
  @IsMongoId() // Ensures that the value is a valid MongoDB ObjectId
  courseId: string;

  @IsMongoId() // Ensures that the value is a valid MongoDB ObjectId
  batchId: string;

  @IsMongoId() // Ensures that the value is a valid MongoDB ObjectId
  instructorId: string;

  @IsDate()
  date: string;
}
