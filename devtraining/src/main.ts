import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //não vai deixar registrar informação que não consta nos parâmetros do DTO
      forbidNonWhitelisted: true, //vai emitir um erro caso tente registrar a informação que não consta nos parâmetros do DTO
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
