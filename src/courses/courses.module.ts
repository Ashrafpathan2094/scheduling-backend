import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesSchema } from './courses.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Courses', schema: CoursesSchema }]),
    // MongooseModule.forFeature([
    //   { name: "ride", schema: RideSchema },
    //   { name: "payment", schema: PaymentSchema },
    // ]),

    // CoursesModule,
    // HttpModule
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
