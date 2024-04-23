import { Module } from '@nestjs/common';
import { BatchesService } from './batches.service';
import { BatchesController } from './batches.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BatchesSchema } from './batches.schema';
import { CoursesSchema } from 'src/courses/courses.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Batches', schema: BatchesSchema }]),
    MongooseModule.forFeature([{ name: 'Courses', schema: CoursesSchema }]),
  ],
  controllers: [BatchesController],
  providers: [BatchesService],
})
export class BatchesModule {}
