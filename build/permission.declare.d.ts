import { PermissionFormat } from "./";
export declare enum Article {
    Read = 16,
    Write = 32,
    Execute = 64,
    Manager = 128
}
export declare enum AuthenticatedRole {
    Root = 1099511627775,
    Administrator = 1099511627775,
    Banned = 0,
    User = 1,
    BlogWritter = 32,
    ArticleManager
}
export declare const WriteArticleRequiredRoles: PermissionFormat;
//# sourceMappingURL=permission.declare.d.ts.map