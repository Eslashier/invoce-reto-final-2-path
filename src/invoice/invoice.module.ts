import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { PrintBodyMiddleware } from 'src/middleware/printBody.middleware';
import { InvoiceController } from './controllers/invoice.controller';
import { InvoiceService } from './services/invoice.service';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrintBodyMiddleware)
      .forRoutes(
        { path: 'invoice', method: RequestMethod.POST },
        { path: 'invoice/:uuid', method: RequestMethod.PUT }
      );
  }
}
