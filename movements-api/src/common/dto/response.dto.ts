export class ResponseDto<T = any> {
  success: boolean;
  data?: T;
  error?: any;

  constructor(success: boolean, data?: T, error?: any) {
    this.success = success;
    this.data = data;
    this.error = error;
  }

  static ok<T>(data: T): ResponseDto<T> {
    return new ResponseDto<T>(true, data);
  }

  static fail(error: any): ResponseDto {
    return new ResponseDto(false, undefined, error);
  }
}
