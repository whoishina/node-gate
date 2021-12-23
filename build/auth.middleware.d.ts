import * as express from "express";
export declare type Auth = {
    userId: string;
    username: string;
    role: number;
};
export declare type AuthRequest<Params> = express.Request<Params, any, any, any> & {
    user: Auth;
};
export declare function Auth(req: AuthRequest<any>, res: express.Response, next: express.NextFunction): void;
//# sourceMappingURL=auth.middleware.d.ts.map