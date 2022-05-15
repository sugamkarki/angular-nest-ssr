import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('boostrap');

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const port = process.env.PORT;
  await app.listen(port);
  logger.log('App listening on port ' + port);
}

bootstrap();
