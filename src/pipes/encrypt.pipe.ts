import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptPipe implements PipeTransform {
  transform(value: any, metadata?: ArgumentMetadata) {
    return bcrypt.hashSync(value, 12);
  }
}
