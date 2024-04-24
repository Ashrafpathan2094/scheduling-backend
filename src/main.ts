import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
  });

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(4200);
  console.log('listening on port 4200');
}
bootstrap();
