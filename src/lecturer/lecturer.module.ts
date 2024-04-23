import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LecturerSchema } from './entities/lecturer.entity';
import { LecturerController } from './lecturer.controller';
import { LecturerService } from './lecturer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'lecturer', schema: LecturerSchema }]),
  ],
  controllers: [LecturerController],
  providers: [LecturerService],
})
export class LecturerModule {}
