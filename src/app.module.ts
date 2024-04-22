import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LecturerModule } from './lecturer/lecturer.module';

@Module({
  imports: [LecturerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
