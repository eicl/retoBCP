import { Logger } from '@nestjs/common';

export class AppLogger extends Logger {
  log(message: string) {
    super.log(`[INFO] ${message}`);
  }

  error(message: string, trace?: string) {
    super.error(`[ERROR] ${message}`, trace);
  }

  warn(message: string) {
    super.warn(`[WARN] ${message}`);
  }
}
