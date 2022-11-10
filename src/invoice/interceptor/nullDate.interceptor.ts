import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class NullDateInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((invoiceResponse) => {
        if (Array.isArray(invoiceResponse)) {
          return invoiceResponse.map((invoice) =>
            invoice.date === undefined ? { ...invoice, date: null } : invoice
          );
        }
        return invoiceResponse.date === undefined
          ? { ...invoiceResponse, date: null }
          : invoiceResponse;
      })
    );
  }
}
