import * as express from "express";
import { AuthRequest } from "./auth.middleware";
/**
 * This middleware is used to check if the user has the right to access the resource.
 * Extended from the Auth middleware.
 */
export declare function isCanPostArticle(req: AuthRequest<any>, res: express.Response, next: express.NextFunction): express.Response<any, Record<string, any>>;
//# sourceMappingURL=article.middleware.d.ts.map