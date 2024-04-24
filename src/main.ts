import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, { cors: true });
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://scheduling-frontend-2094ashraf.vercel.app',
    credentials: true,
  });

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(4200);
  console.log('listening on port 4200');
}
bootstrap();
