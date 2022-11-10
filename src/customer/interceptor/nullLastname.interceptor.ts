import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class NullLastnameInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((customerResponse) => {
        if (Array.isArray(customerResponse)) {
          return customerResponse.map((customer) =>
            customer.lastName === undefined
              ? { ...customer, lastName: null }
              : customer
          );
        }
        return customerResponse.lastName === undefined
          ? { ...customerResponse, lastName: null }
          : customerResponse;
      })
    );
  }
}
