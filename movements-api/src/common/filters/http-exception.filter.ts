import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { exec } from 'child_process';


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    this.logger.error(`HTTP Exception: ${status} - ${exception.message}`);
    response.status(status).json({
      success: false,
      error: exception.getResponse(),
    });
  }
}
