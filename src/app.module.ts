import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { BatchesModule } from './batches/batches.module';

@Module({
  imports: [
    LecturerModule,
    CoursesModule,
    BatchesModule,
    MongooseModule.forRoot(
      'mongodb+srv://Stark:Stark2094@cluster0.95ghcza.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
