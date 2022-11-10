import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class PrintBodyMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('The request body is:', req.body);

        if (req.method === 'PUT') {
            console.log('The request param uuid is:', req.params.uuid);
        }

        next();
    }
}
