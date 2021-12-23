"use strict";
exports.__esModule = true;
exports.WriteArticleRequiredRoles = exports.AuthenticatedRole = exports.Article = void 0;
var _1 = require("./");
//
var Article;
(function (Article) {
    Article[Article["Read"] = 16] = "Read";
    Article[Article["Write"] = 32] = "Write";
    Article[Article["Execute"] = 64] = "Execute";
    Article[Article["Manager"] = 128] = "Manager";
})(Article = exports.Article || (exports.Article = {}));
// Authorization
var AuthenticatedRole;
(function (AuthenticatedRole) {
    AuthenticatedRole[AuthenticatedRole["Root"] = 1099511627775] = "Root";
    AuthenticatedRole[AuthenticatedRole["Administrator"] = 1099511627775] = "Administrator";
    AuthenticatedRole[AuthenticatedRole["Banned"] = 0] = "Banned";
    AuthenticatedRole[AuthenticatedRole["User"] = 1] = "User";
    AuthenticatedRole[AuthenticatedRole["BlogWritter"] = 32] = "BlogWritter";
    AuthenticatedRole[AuthenticatedRole["ArticleManager"] = (0, _1.ParseCode)((0, _1.ParsePermission)(Article))] = "ArticleManager";
})(AuthenticatedRole = exports.AuthenticatedRole || (exports.AuthenticatedRole = {}));
// Write article permissions required
exports.WriteArticleRequiredRoles = {
    // Write articles
    'blog.write': Article.Write
};
//# sourceMappingURL=permission.declare.js.map