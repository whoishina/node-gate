import { ParseCode, ParsePermission, PermissionFormat } from "./note-gate";
//
export enum Article{
    Read = 0x10,
    Write = 0x20,
    Execute = 0x40,
    Manager = 0x80,
}

// Authorization
export enum AuthenticatedRole {
    Root = 1099511627775,
    Administrator = 1099511627775,
    Banned = 0 ,
    User = 1,
    BlogWritter = 32,
    ArticleManager = ParseCode(ParsePermission(Article)),
}

// Write article permissions required
export const WriteArticleRequiredRoles = {
    // Write articles
    'blog.write': Article.Write,
} as PermissionFormat;