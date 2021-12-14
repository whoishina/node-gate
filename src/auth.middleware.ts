import * as express from "express";
import * as jwt from "jsonwebtoken";
import { RequestResponseMessage } from "./app.enum";
import { TokenSecret } from "./config";

export type Auth = {
    userId: string;
    username: string;
    role : number
}

export type AuthRequest<Params> = express.Request<Params, any, any, any> & {
    user: Auth;
}

export function Auth( req: AuthRequest<any>, res: express.Response, next: express.NextFunction ) {
    // Authorization headers is required
    if(!req.headers.authorization) {
        res.status(401).send({
            message: RequestResponseMessage.Unauthorized
        });
        return;
    }
    // Get the last part from a authorization header string like "bearer token-value"
    const token = req.headers.authorization.split(' ')[1];
    // Decode the token using a secret key-phrase
    try{
        const verified = jwt.verify(token, TokenSecret );
        // Add the decoded user name and id to the request object
        const decoded = jwt.decode(token) as any
        req.user = decoded.user as Auth;
        // nhe next() call triggers the next middleware in the chain
        next();
    }catch{
        res.status(401).send({
            message: RequestResponseMessage.Unauthorized
        });
        return;
    }

}