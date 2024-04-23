import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4200);
  app.enableCors();
  console.log('listening on port 4200');
}
bootstrap();
