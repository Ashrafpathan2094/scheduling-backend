import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LecturerController } from './lecturer.controller';
import { LecturerSchema } from './lecturer.schema';
import { LecturerService } from './lecturer.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Lecturer', schema: LecturerSchema }]),
    // MongooseModule.forFeature([
    //   { name: "ride", schema: RideSchema },
    //   { name: "payment", schema: PaymentSchema },
    // ]),

    // CoursesModule,
    // HttpModule
  ],
  controllers: [LecturerController],
  providers: [LecturerService],
})
export class LecturerModule {}
