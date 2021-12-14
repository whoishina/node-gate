import { RequestResponseMessage } from './app.enum';
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { AuthRequest } from "./auth.middleware";
import { TokenSecret } from "./config";
import { Validate } from './note-gate';
import { WriteArticleRequiredRoles } from "./permission.declare";


/**
 * This middleware is used to check if the user has the right to access the resource.
 * Extended from the Auth middleware.
 */
export function isCanPostArticle(req: AuthRequest<any>, res: express.Response, next: express.NextFunction) {
    // Get the user's role from the token
    const UserRole = req.user.role;
    // Verify Article Permission
    const isCanPostArticle = Validate(WriteArticleRequiredRoles, UserRole)
    // if can not post article
    if(!isCanPostArticle)
        // return 403 forbidden
        return res.status(403).send({
            message: RequestResponseMessage.Forbidden,
        });
    // Next route
    next()
}