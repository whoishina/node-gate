"use strict";
exports.__esModule = true;
exports.isCanPostArticle = void 0;
var app_enum_1 = require("./app.enum");
var _1 = require("./");
var permission_declare_1 = require("./permission.declare");
/**
 * This middleware is used to check if the user has the right to access the resource.
 * Extended from the Auth middleware.
 */
function isCanPostArticle(req, res, next) {
    // Get the user's role from the token
    var UserRole = req.user.role;
    // Verify Article Permission
    var isCanPostArticle = (0, _1.Validate)(permission_declare_1.WriteArticleRequiredRoles, UserRole);
    // if can not post article
    if (!isCanPostArticle)
        // return 403 forbidden
        return res.status(403).send({
            message: app_enum_1.RequestResponseMessage.Forbidden
        });
    // Next route
    next();
}
exports.isCanPostArticle = isCanPostArticle;
//# sourceMappingURL=article.middleware.js.map