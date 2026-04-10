import { Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import serverlessExpress from '@vendia/serverless-express';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
);

  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (event, context, callback) => {
  if (!server) {
    server = await bootstrap();
  }
  return server(event, context, callback);
};