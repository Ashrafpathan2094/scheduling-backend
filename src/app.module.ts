import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { LecturerModule } from './lecturer/lecturer.module';
import { BatchesModule } from './batches/batches.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    LecturerModule,
    CoursesModule,
    BatchesModule,
    SchedulingModule,
    MongooseModule.forRoot(
      'mongodb+srv://Stark:Stark2094@cluster0.95ghcza.mongodb.net/',
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
      serveRoot: '/images',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
