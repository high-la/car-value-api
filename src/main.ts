import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['abc5e57e']
  }))
  app.useGlobalPipes(
    new ValidationPipe({
      // a security property 
      // it discards aditional property(payload) from incoming request(sth like "admin": true) 
      whitelist: true,
    }),
  )

  await app.listen(process.env.PORT ?? 3300);
}
bootstrap();
