"use strict";
exports.__esModule = true;
exports.CreateArticle = void 0;
/**
 * Cuz article's middleware has been extended with AuthRequest
 * so we can use it here
 */
function CreateArticle(req, res, next) {
    // if pass the middleware, you can do something here
    res.send({
        message: "Horayy! You can post article"
    });
}
exports.CreateArticle = CreateArticle;
//# sourceMappingURL=article.controller.js.map