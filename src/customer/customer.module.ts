import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { PrintBodyMiddleware } from 'src/middleware/printBody.middleware';
import { CustomerController } from './controllers/customer.controller';
import { CustomerService } from './services/customer.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrintBodyMiddleware)
      .forRoutes(
        { path: 'customer', method: RequestMethod.POST },
        { path: 'customer/:uuid', method: RequestMethod.PUT }
      );
  }
}
