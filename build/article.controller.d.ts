import * as express from 'express';
import { AuthRequest } from './auth.middleware';
/**
 * Cuz article's middleware has been extended with AuthRequest
 * so we can use it here
 */
export declare function CreateArticle(req: AuthRequest<any>, res: express.Response, next: express.NextFunction): void;
//# sourceMappingURL=article.controller.d.ts.map