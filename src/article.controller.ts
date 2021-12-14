import * as express from 'express';
import { AuthRequest } from './auth.middleware';

/**
 * Cuz article's middleware has been extended with AuthRequest
 * so we can use it here
 */
export function CreateArticle( req: AuthRequest<any>, res: express.Response, next: express.NextFunction) {
    // if pass the middleware, you can do something here
    res.send({
        message: "Horayy! You can post article"
    })
}